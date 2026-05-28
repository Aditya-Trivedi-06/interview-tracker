// sync.js - Cloud Sync using JSONBin.io
const SYNC_KEY = 'faang_sync_creds';
let syncTimeout = null;

function getSyncCreds() {
    return JSON.parse(localStorage.getItem(SYNC_KEY));
}

async function pushToCloud(stateObj) {
    const creds = getSyncCreds();
    if (!creds || !creds.binId || !creds.apiKey) return false;
    
    try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${creds.binId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': creds.apiKey
            },
            body: JSON.stringify(stateObj)
        });
        return res.ok;
    } catch (e) {
        console.error("Sync push failed", e);
        return false;
    }
}

async function pullFromCloud() {
    const creds = getSyncCreds();
    if (!creds || !creds.binId || !creds.apiKey) return null;
    
    try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${creds.binId}/latest`, {
            headers: {
                'X-Master-Key': creds.apiKey,
                'X-Bin-Meta': 'false'
            }
        });
        if (res.ok) {
            return await res.json();
        }
        return null;
    } catch (e) {
        console.error("Sync pull failed", e);
        return null;
    }
}

window.triggerSyncPush = function(stateObj) {
    const creds = getSyncCreds();
    if (!creds) return;
    
    const btn = document.getElementById('sync-floating-btn');
    if (btn) btn.innerHTML = '⏳ Saving...';
    
    clearTimeout(syncTimeout);
    syncTimeout = setTimeout(async () => {
        const success = await pushToCloud(stateObj);
        if (btn) {
            if (success) {
                btn.innerHTML = '☁️ Synced';
                btn.style.background = '#4caf50';
                btn.style.color = '#fff';
            } else {
                btn.innerHTML = '❌ Sync Error';
                btn.style.background = '#f44336';
            }
        }
    }, 1500); // Wait 1.5s after last click before pushing to save API calls
};

window.setupSyncUI = function(onSyncSuccess) {
    const btn = document.createElement('button');
    btn.id = 'sync-floating-btn';
    btn.innerHTML = '☁️ Setup Sync';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.background = 'rgba(255,255,255,0.1)';
    btn.style.color = '#fff';
    btn.style.border = '1px solid rgba(255,255,255,0.2)';
    btn.style.padding = '10px 16px';
    btn.style.borderRadius = '20px';
    btn.style.fontWeight = 'bold';
    btn.style.cursor = 'pointer';
    btn.style.zIndex = '9999';
    btn.style.backdropFilter = 'blur(10px)';
    btn.style.transition = 'all 0.3s';
    
    document.body.appendChild(btn);
    
    const creds = getSyncCreds();
    if (creds) {
        btn.innerHTML = '☁️ Synced';
        btn.style.background = '#4caf50';
        btn.style.borderColor = '#4caf50';
    }
    
    btn.onclick = async () => {
        const currentCreds = getSyncCreds();
        if (currentCreds) {
            if (confirm('Sync is currently active. Do you want to pull latest data manually?\n\n(Click Cancel to completely Disconnect sync)')) {
                btn.innerHTML = '⏳ Pulling...';
                const cloudState = await pullFromCloud();
                if (cloudState) {
                    onSyncSuccess(cloudState);
                    btn.innerHTML = '☁️ Synced';
                    btn.style.background = '#4caf50';
                    btn.style.borderColor = '#4caf50';
                } else {
                    btn.innerHTML = '❌ Error';
                }
            } else {
                if (confirm('Are you sure you want to disconnect sync from this device?')) {
                    localStorage.removeItem(SYNC_KEY);
                    btn.innerHTML = '☁️ Setup Sync';
                    btn.style.background = 'rgba(255,255,255,0.1)';
                    btn.style.borderColor = 'rgba(255,255,255,0.2)';
                }
            }
        } else {
            alert("We use JSONBin.io for free syncing!\n\n1. Go to jsonbin.io and create a free account.\n2. Create a new Bin with '{}' as content.\n3. Get your Master Key and Bin ID.");
            const apiKey = prompt('Paste your Master Key here:');
            if (!apiKey) return;
            const binId = prompt('Paste your Bin ID here:');
            if (!binId) return;
            
            localStorage.setItem(SYNC_KEY, JSON.stringify({ binId, apiKey }));
            btn.innerHTML = '⏳ Connecting...';
            
            let cloudState = await pullFromCloud();
            if (cloudState && Object.keys(cloudState).length > 0) {
                onSyncSuccess(cloudState);
                btn.innerHTML = '☁️ Synced';
                btn.style.background = '#4caf50';
                btn.style.borderColor = '#4caf50';
            } else {
                const localState = JSON.parse(localStorage.getItem('prepState')) || {};
                const success = await pushToCloud(localState);
                if (success) {
                    btn.innerHTML = '☁️ Synced';
                    btn.style.background = '#4caf50';
                    btn.style.borderColor = '#4caf50';
                } else {
                    localStorage.removeItem(SYNC_KEY);
                    alert('Invalid credentials or network error.');
                    btn.innerHTML = '☁️ Setup Sync';
                }
            }
        }
    };
    
    // Auto-pull on page load
    if (creds) {
        pullFromCloud().then(cloudState => {
            if (cloudState && Object.keys(cloudState).length > 0) {
                onSyncSuccess(cloudState);
            }
        });
    }
};
