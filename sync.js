// sync.js - Cloud Sync for FAANG Tracker
let supabase = null;
let userId = null;

const SYNC_CONFIG_KEY = 'prep_sync_config';

async function initSync() {
  const config = JSON.parse(localStorage.getItem(SYNC_CONFIG_KEY));
  if (!config || !config.url || !config.key) {
    updateSyncUI('offline', 'Setup Sync');
    return;
  }

  try {
    supabase = window.supabase.createClient(config.url, config.key);
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      userId = user.id;
      updateSyncUI('synced', 'Synced');
      await pullFromCloud();
    } else {
      updateSyncUI('offline', 'Login Required');
    }
  } catch (err) {
    console.error('Sync Error:', err);
    updateSyncUI('offline', 'Sync Error');
  }
}

function updateSyncUI(status, text) {
  const btn = document.getElementById('syncBtn');
  const txt = document.getElementById('syncStatusText');
  if (!btn || !txt) return;

  btn.className = 'sync-btn ' + status;
  txt.textContent = text;
}

async function login() {
  const config = JSON.parse(localStorage.getItem(SYNC_CONFIG_KEY));
  if (!config) {
    const url = prompt("Enter Supabase Project URL:");
    const key = prompt("Enter Supabase Anon Key:");
    if (url && key) {
      localStorage.setItem(SYNC_CONFIG_KEY, JSON.stringify({ url, key }));
      window.location.reload();
    }
    return;
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: window.location.origin
    }
  });
}

async function pushToCloud() {
  if (!supabase || !userId) return;
  updateSyncUI('syncing', 'Saving...');
  
  const { error } = await supabase
    .from('user_progress')
    .upsert({ 
      user_id: userId, 
      state: state, 
      updated_at: new Date() 
    });

  if (error) {
    console.error('Push error:', error);
    updateSyncUI('offline', 'Save Failed');
  } else {
    updateSyncUI('synced', 'Synced');
  }
}

async function pullFromCloud() {
  if (!supabase || !userId) return;
  updateSyncUI('syncing', 'Loading...');

  const { data, error } = await supabase
    .from('user_progress')
    .select('state')
    .eq('user_id', userId)
    .single();

  if (data && data.state) {
    // Merge logic: prefer more recent or union of solved
    const cloudState = data.state;
    // Simple overwrite for now, or complex merge
    Object.assign(state, cloudState);
    save(); // save to local
    updateDashboard();
    renderProblems();
    renderRevisionCards();
  }
  updateSyncUI('synced', 'Synced');
}

// Global hooks
document.addEventListener('DOMContentLoaded', () => {
  initSync();
  document.getElementById('syncBtn').addEventListener('click', login);
});

// Inject push into the app's save function
const originalSave = window.save;
window.save = function() {
  if (typeof originalSave === 'function') originalSave();
  else {
    localStorage.setItem('prepState', JSON.stringify(state));
  }
  pushToCloud();
};
