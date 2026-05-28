// ========== STATE ==========
let state = JSON.parse(localStorage.getItem('prepState')) || {};
if (!state.solved) state.solved = {};
if (!state.sdDone) state.sdDone = {};
if (!state.timeLog) state.timeLog = [];
if (!state.notes) state.notes = {};
state.streak = state.streak || 0;
function save() { 
  localStorage.setItem('prepState', JSON.stringify(state)); 
  if (window.triggerSyncPush) window.triggerSyncPush(state);
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('headerDate').textContent = new Date().toLocaleDateString('en-US', {weekday:'long',month:'short',day:'numeric'});
  initTabs(); initFilters(); updateDashboard(); renderProblems(); renderSD('hld'); renderTimeline(); renderGuidance(); renderRevisionCards(); updateStreak();
  if (state.hideTopics) { document.body.classList.add('hide-topics'); document.getElementById('toggleTopicsBtn').textContent = '🐵 Show Topics'; }

  if (window.setupSyncUI) {
    window.setupSyncUI((cloudState) => {
      Object.assign(state, cloudState);
      if (!state.solved) state.solved = {};
      if (!state.sdDone) state.sdDone = {};
      if (!state.timeLog) state.timeLog = [];
      localStorage.setItem('prepState', JSON.stringify(state));
      updateDashboard();
      renderProblems();
      const activeSdTab = document.querySelector('.sd-tab.active');
      if (activeSdTab) renderSD(activeSdTab.dataset.sdtab);
      renderRevisionCards();
    });
  }
});

// ========== TABS ==========
function initTabs() {
  document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    document.getElementById(t.dataset.tab).classList.add('active');
  }));
  document.querySelectorAll('.sd-tab').forEach(t => t.addEventListener('click', () => {
    document.querySelectorAll('.sd-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    renderSD(t.dataset.sdtab);
  }));
}

// ========== FILTERS ==========
let filters = { company: 'all', diff: 'all', status: 'all', sort: 'default' };
function initFilters() {
  document.querySelectorAll('.filter-btn[data-company]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-company]').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); filters.company = b.dataset.company; renderProblems();
  }));
  document.querySelectorAll('.filter-btn[data-diff]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-diff]').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); filters.diff = b.dataset.diff; renderProblems();
  }));
  document.querySelectorAll('.filter-btn[data-status]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-status]').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); filters.status = b.dataset.status; renderProblems();
  }));
  document.querySelectorAll('.filter-btn[data-rev-company]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-rev-company]').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); revFilterCompany = b.dataset.revCompany; renderRevisionCards();
  }));
  const sortEl = document.getElementById('sortSelect');
  if (sortEl) sortEl.addEventListener('change', (e) => { filters.sort = e.target.value; renderProblems(); });
  
  const revSortEl = document.getElementById('revSortSelect');
  if (revSortEl) revSortEl.addEventListener('change', (e) => { revFilterSort = e.target.value; renderRevisionCards(); });
  
  const revStatusEl = document.getElementById('revStatusSelect');
  if (revStatusEl) revStatusEl.addEventListener('change', (e) => { revFilterStatus = e.target.value; renderRevisionCards(); });
}

function toggleTopics() {
  state.hideTopics = !state.hideTopics;
  save();
  const btn = document.getElementById('toggleTopicsBtn');
  if (state.hideTopics) {
    document.body.classList.add('hide-topics');
    btn.textContent = '🐵 Show Topics';
  } else {
    document.body.classList.remove('hide-topics');
    btn.textContent = '🙈 Hide Topics';
  }
}

// ========== DASHBOARD ==========
function updateDashboard() {
  const solved = Object.values(state.solved).filter(s => s === 'solved').length;
  const retry = Object.values(state.solved).filter(s => s === 'retry').length;
  document.getElementById('dsaSolved').textContent = solved;
  document.getElementById('dsaTotal').textContent = `/ ${PROBLEMS.length}`;
  const hld = Object.values(state.sdDone).filter((v,i) => v && i < 25).length;
  const lld = Object.entries(state.sdDone).filter(([k,v]) => v && k.startsWith('lld_')).length;
  document.getElementById('hldDone').textContent = Object.entries(state.sdDone).filter(([k,v])=>v&&k.startsWith('hld_')).length;
  document.getElementById('lldDone').textContent = lld;
  // Weekly hours
  const now = new Date(); const weekAgo = new Date(now - 7*86400000);
  const hrs = state.timeLog.filter(e => new Date(e.date) >= weekAgo).reduce((s,e) => s + e.mins, 0);
  document.getElementById('totalHours').textContent = (hrs/60).toFixed(1);
  renderTodayPlan(); renderWeeklyProgress(); renderCompanyProgress(); renderTimeLog();
}

function renderTodayPlan() {
  const el = document.getElementById('todayPlan');
  const dayOfWeek = new Date().getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const unsolved = PROBLEMS.filter(p => !state.solved[p.t]);
  // Shuffle and pick
  const shuffled = [...unsolved].sort(() => Math.random() - 0.5);
  const dsaCount = isWeekend ? 6 : 3;
  const picks = shuffled.slice(0, dsaCount);
  const week = getCurrentWeek();
  let items = picks.map(p => ({text: `[DSA] ${p.t} (${p.d})`, key: `today_${p.t}`, time: '25 min'}));
  if (week <= 3) {
    items.push({text: `[HLD] Study Alex Xu / Blueprint system`, key: 'today_hld', time: '90 min'});
    if (isWeekend) items.push({text: `[HLD] Design a system from scratch`, key: 'today_hld2', time: '60 min'});
  } else if (week <= 6) {
    items.push({text: `[LLD] Design + code an LLD system`, key: 'today_lld', time: '90 min'});
    if (isWeekend) items.push({text: `[LLD] Mock design session`, key: 'today_lld2', time: '60 min'});
  } else {
    items.push({text: `[Mock] Full interview simulation`, key: 'today_mock', time: '120 min'});
  }
  el.innerHTML = items.map(i => `
    <div class="today-item">
      <div class="today-check" onclick="this.classList.toggle('checked')"></div>
      <span>${i.text}</span>
      <span class="today-time">${i.time}</span>
    </div>
  `).join('');
}

function getCurrentWeek() {
  const diff = Math.floor((new Date() - START_DATE) / (7*86400000));
  return Math.max(1, Math.min(8, diff + 1));
}

function renderWeeklyProgress() {
  const el = document.getElementById('weeklyProgress');
  const cats = [
    {name:'DSA',val:Object.values(state.solved).filter(s=>s==='solved').length,max:PROBLEMS.length,cls:'fill-blue'},
    {name:'HLD',val:Object.entries(state.sdDone).filter(([k,v])=>v&&k.startsWith('hld_')).length,max:25,cls:'fill-green'},
    {name:'LLD',val:Object.entries(state.sdDone).filter(([k,v])=>v&&k.startsWith('lld_')).length,max:20,cls:'fill-purple'},
  ];
  el.innerHTML = cats.map(c => {
    const pct = c.max ? Math.round(c.val/c.max*100) : 0;
    return `<div class="progress-bar-item"><label><span>${c.name}</span><span>${c.val}/${c.max} (${pct}%)</span></label><div class="progress-track"><div class="progress-fill ${c.cls}" style="width:${pct}%"></div></div></div>`;
  }).join('');
}

function renderCompanyProgress() {
  const el = document.getElementById('companyProgress');
  const companies = ['Amazon','Google','Microsoft','Apple'];
  el.innerHTML = companies.map(c => {
    const total = PROBLEMS.filter(p => p.c === c).length;
    const done = PROBLEMS.filter(p => p.c === c && state.solved[p.t] === 'solved').length;
    const pct = total ? Math.round(done/total*100) : 0;
    const colors = {Amazon:'var(--amazon)',Google:'var(--google)',Microsoft:'var(--microsoft)','Apple':'var(--apple)'};
    return `<div class="company-card"><h4>${c}</h4><div class="pct" style="color:${colors[c]}">${pct}%</div><div style="font-size:.75rem;color:var(--text3)">${done}/${total} solved</div></div>`;
  }).join('');
}

// ========== PROBLEMS ==========
function renderProblems() {
  const el = document.getElementById('problemList');
  let probs = [...PROBLEMS];
  if (filters.company !== 'all') probs = probs.filter(p => p.c === filters.company);
  if (filters.diff !== 'all') probs = probs.filter(p => p.d === filters.diff);
  if (filters.status === 'solved') probs = probs.filter(p => state.solved[p.t] === 'solved');
  else if (filters.status === 'retry') probs = probs.filter(p => state.solved[p.t] === 'retry');
  else if (filters.status === 'unsolved') probs = probs.filter(p => !state.solved[p.t]);
  
  // Sort
  probs.sort((a, b) => {
    if (filters.sort === 'freqDesc') return (b.f || 0) - (a.f || 0);
    if (filters.sort === 'freqAsc') return (a.f || 0) - (b.f || 0);
    if (filters.sort === 'diffAsc') {
      const map = {'Easy':1,'Medium':2,'Hard':3};
      return map[a.d] - map[b.d];
    }
    if (filters.sort === 'diffDesc') {
      const map = {'Easy':1,'Medium':2,'Hard':3};
      return map[b.d] - map[a.d];
    }
    return 0;
  });
  
  el.innerHTML = probs.map((p, i) => {
    const status = state.solved[p.t] || '';
    const cls = status === 'solved' ? 'solved' : status === 'retry' ? 'retry' : '';
    const compColors = {Amazon:'var(--amazon)',Google:'var(--google)',Microsoft:'var(--microsoft)','Apple':'var(--apple)'};
    return `<div class="problem-row ${cls}">
      <span class="problem-num">${i+1}</span>
      <div class="problem-title">
        <a href="${p.l}" target="_blank">${p.t}</a>
        <div class="problem-company" style="color:${compColors[p.c]}">${p.c} · ${p.tp}</div>
      </div>
      <span class="diff-badge diff-${p.d}">${p.d}</span>
      <div class="freq-bar"><div class="freq-fill" style="width:${p.f}%"></div></div>
      <div class="problem-actions">
        <button onclick="markProblem('${p.t.replace(/'/g,"\\'")}','solved')" title="Solved">✅</button>
        <button onclick="markProblem('${p.t.replace(/'/g,"\\'")}','retry')" title="Retry">🔄</button>
        <button onclick="selectTimer('${p.t.replace(/'/g,"\\'")}')" title="Timer">⏱️</button>
      </div>
    </div>`;
  }).join('');
}

function markProblem(title, status) {
  if (state.solved[title] === status) delete state.solved[title];
  else state.solved[title] = status;
  save(); renderProblems(); renderRevisionCards(); updateDashboard();
}

function pickRandom() {
  const unsolved = PROBLEMS.filter(p => !state.solved[p.t]);
  let pool = unsolved.length ? unsolved : PROBLEMS;
  if (filters.company !== 'all') pool = pool.filter(p => p.c === filters.company);
  if (!pool.length) pool = PROBLEMS;
  const pick = pool[Math.floor(Math.random() * pool.length)];
  // Highlight and scroll
  document.getElementById('modalBody').innerHTML = `
    <h3 style="margin-bottom:12px">🎲 Random Problem</h3>
    <div style="padding:16px;background:var(--bg);border-radius:8px;margin-bottom:16px">
      <div style="font-size:1.2rem;font-weight:700;margin-bottom:8px"><a href="${pick.l}" target="_blank" style="color:var(--accent2);text-decoration:none">${pick.t}</a></div>
      <span class="diff-badge diff-${pick.d}">${pick.d}</span>
      <span style="margin-left:8px;font-size:.8rem;color:var(--text3)">${pick.c} · ${pick.tp}</span>
    </div>
    <p style="font-size:.85rem;color:var(--text2)">⏱️ Target: ${pick.d==='Easy'?'15':pick.d==='Medium'?'25':'40'} minutes</p>
    <p style="font-size:.85rem;color:var(--text2);margin-top:8px">💡 Don't look at the topics above until you've spent at least 10 min thinking!</p>
    <div style="margin-top:16px;display:flex;gap:8px">
      <button class="btn btn-primary" onclick="selectTimer('${pick.t.replace(/'/g,"\\'")}');closeModal()">⏱️ Start Timer</button>
      <button class="btn" style="background:var(--bg3)" onclick="closeModal()">Close</button>
    </div>
  `;
  document.getElementById('modal').classList.remove('hidden');
}

// ========== TIMER ==========
let timerInterval = null, timerSeconds = 0, timerRunning = false, timerProblemName = '';
function selectTimer(name) {
  timerProblemName = name;
  document.getElementById('timerProblem').textContent = name;
  resetTimer();
}
function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  timerInterval = setInterval(() => {
    timerSeconds++;
    const m = String(Math.floor(timerSeconds/60)).padStart(2,'0');
    const s = String(timerSeconds%60).padStart(2,'0');
    document.getElementById('timerClock').textContent = `${m}:${s}`;
  }, 1000);
}
function pauseTimer() { clearInterval(timerInterval); timerRunning = false; }
function resetTimer() { pauseTimer(); timerSeconds = 0; document.getElementById('timerClock').textContent = '00:00'; }

// ========== SYSTEM DESIGN ==========
function renderSD(tab) {
  const el = document.getElementById('sdContent');
  if (tab === 'hld') {
    el.innerHTML = HLD_SYSTEMS.map((s,i) => {
      const key = `hld_${i}`;
      const done = state.sdDone[key];
      return `<div class="sd-item ${done?'done':''}" onclick="toggleSD('${key}')">
        <div class="sd-check"></div>
        <div><div class="sd-name">${i+1}. ${s.n}</div><div class="sd-desc">${s.d}</div></div>
        <div class="sd-tags">${s.tags.map(t=>`<span class="sd-tag">${t}</span>`).join('')}</div>
      </div>`;
    }).join('');
  } else if (tab === 'lld') {
    el.innerHTML = LLD_SYSTEMS.map((s,i) => {
      const key = `lld_${i}`;
      const done = state.sdDone[key];
      return `<div class="sd-item ${done?'done':''}" onclick="toggleSD('${key}')">
        <div class="sd-check"></div>
        <div><div class="sd-name">${i+1}. ${s.n}</div><div class="sd-desc">${s.d}</div></div>
        <div class="sd-tags">${s.tags.map(t=>`<span class="sd-tag">${t}</span>`).join('')}</div>
      </div>`;
    }).join('');
  } else {
    el.innerHTML = HLD_CONCEPTS.map((c,i) => {
      const key = `concept_${i}`;
      const done = state.sdDone[key];
      return `<div class="sd-item ${done?'done':''}" onclick="toggleSD('${key}')">
        <div class="sd-check"></div>
        <div class="sd-name">${c}</div>
      </div>`;
    }).join('');
  }
}
function toggleSD(key) { state.sdDone[key] = !state.sdDone[key]; save(); renderSD(document.querySelector('.sd-tab.active').dataset.sdtab); updateDashboard(); }

// ========== TIMELINE ==========
function renderTimeline() {
  const el = document.getElementById('timelineContent');
  const cw = getCurrentWeek();
  el.innerHTML = TIMELINE.map(w => {
    const isCurrent = w.w === cw;
    const startD = new Date(START_DATE.getTime() + (w.w-1)*7*86400000);
    const endD = new Date(startD.getTime() + 6*86400000);
    const fmt = d => d.toLocaleDateString('en-US',{month:'short',day:'numeric'});
    return `<div class="week-block">
      <div class="week-header ${isCurrent?'current':''}" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
        <span class="week-num">W${w.w}</span>
        <div>
          <div class="week-title">${w.phase}: ${w.title}</div>
          <div class="week-dates">${fmt(startD)} — ${fmt(endD)} ${isCurrent?' ← YOU ARE HERE':''}</div>
        </div>
        <span class="week-progress">${isCurrent?'🔥 Active':'⏳'}</span>
      </div>
      <div class="week-body" style="${isCurrent?'':'display:none'}">
        <div class="week-day"><strong>🎯 Focus:</strong> ${w.focus}</div>
        <div class="week-day"><strong>📅 Weekdays:</strong> ${w.daily}</div>
        <div class="week-day"><strong>🏖️ Weekends:</strong> ${w.weekend}</div>
      </div>
    </div>`;
  }).join('');
}

// ========== TIME LOG ==========
function logTime() {
  const cat = document.getElementById('logCategory').value;
  const mins = parseInt(document.getElementById('logMinutes').value);
  if (!mins || mins < 1) return;
  state.timeLog.push({cat, mins, date: new Date().toISOString()});
  document.getElementById('logMinutes').value = '';
  save(); updateDashboard();
}
function renderTimeLog() {
  const el = document.getElementById('timeLog');
  const recent = state.timeLog.slice(-10).reverse();
  el.innerHTML = recent.map(e => {
    const d = new Date(e.date);
    return `<div class="time-entry"><span>${e.cat.toUpperCase()} — ${e.mins} min</span><span>${d.toLocaleDateString('en-US',{month:'short',day:'numeric'})} ${d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'})}</span></div>`;
  }).join('');
}

// ========== STREAK ==========
function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastDate === today) {
    document.getElementById('streakCount').textContent = state.streak;
    return;
  }
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.lastDate === yesterday) { state.streak++; }
  else if (state.lastDate !== today) { state.streak = 1; }
  state.lastDate = today; save();
  document.getElementById('streakCount').textContent = state.streak;
}

// ========== GUIDANCE ==========
function renderGuidance() {
  document.getElementById('guidanceContent').innerHTML = `
    <div class="guide-section"><div class="guide-box"><h4>🎯 DSA Interview Strategy (C++)</h4><ul>
      <li><strong>Read → Think 5 min → Pattern → Code → Test</strong>. Never jump to code.</li>
      <li>Always state time/space complexity before coding.</li>
      <li>Talk through your approach: "I'm thinking sliding window because..."</li>
      <li>Edge cases: empty input, single element, all same, overflow, negative</li>
      <li>Target times: Easy 15 min, Medium 25 min, Hard 40 min</li>
    </ul></div></div>
    <div class="guide-section"><div class="guide-box"><h4>🏗️ HLD Interview Flow (45 min)</h4><ul>
      <li><strong>[0-5 min]</strong> Requirements: Ask functional + non-functional. Clarify scope.</li>
      <li><strong>[5-10 min]</strong> Capacity estimation: DAU, QPS, storage, bandwidth.</li>
      <li><strong>[10-25 min]</strong> High-level design: API → Data model → Architecture diagram.</li>
      <li><strong>[25-40 min]</strong> Deep dive: Pick 2-3 components. Discuss trade-offs.</li>
      <li><strong>[40-45 min]</strong> Wrap-up: Bottlenecks, monitoring, future improvements.</li>
    </ul></div></div>
    <div class="guide-section"><div class="guide-box"><h4>🔧 LLD Interview Flow (45 min)</h4><ul>
      <li><strong>[0-5 min]</strong> Clarify: Use cases, actors, constraints.</li>
      <li><strong>[5-15 min]</strong> Class diagram: Identify entities, relationships, key methods.</li>
      <li><strong>[15-35 min]</strong> Code: Implement core classes. Apply SOLID + patterns.</li>
      <li><strong>[35-45 min]</strong> Extensions: Concurrency, new features, design flexibility.</li>
    </ul></div></div>
    <div class="guide-section"><div class="guide-box"><h4>📝 Behavioral STAR Template</h4><ul>
      <li><strong>Situation:</strong> Context and background (2 sentences)</li>
      <li><strong>Task:</strong> Your specific responsibility (1 sentence)</li>
      <li><strong>Action:</strong> What YOU did — be specific, use "I" (3-4 sentences)</li>
      <li><strong>Result:</strong> Measurable outcome + what you learned (2 sentences)</li>
    </ul>
    <p style="margin-top:8px"><strong>Amazon LPs to prepare stories for:</strong> Customer Obsession, Ownership, Invent & Simplify, Bias for Action, Deliver Results, Dive Deep</p>
    </div></div>
    <div class="guide-section"><div class="guide-box"><h4>📊 Capacity Estimation Cheat Sheet</h4><ul>
      <li>1 day = 86,400 sec ≈ <code>10^5</code> sec</li>
      <li>1 server handles ~1000 concurrent connections</li>
      <li>Read from memory: <code>100 ns</code> | SSD: <code>100 μs</code> | Disk: <code>10 ms</code></li>
      <li>1 char = 1 byte | 1 KB = 1000 chars | 1 MB = 1M chars</li>
      <li>1 image ≈ 200 KB | 1 min video ≈ 10 MB</li>
      <li><strong>Quick QPS:</strong> 100M DAU × 10 actions = 1B/day ÷ 10^5 = 10K QPS</li>
    </ul></div></div>
    <div class="guide-section"><div class="guide-box"><h4>🌍 EU/Singapore Bar Notes</h4><ul>
      <li>Technical bar is <strong>identical to US</strong> — same questions, same rubric.</li>
      <li>Fewer teams = "strong hire" matters more for team matching.</li>
      <li>Google EU (London/Zurich): Same HC review. L4 bar = US L4.</li>
      <li>Amazon: LP rounds are just as intense in EU/SG.</li>
      <li>Microsoft: Same loop structure globally.</li>
      <li><strong>Prepare as if interviewing for Mountain View/Seattle. No shortcuts.</strong></li>
    </ul></div></div>
  `;
}

// ========== REVISION CARDS ==========
let revFilterCompany = 'all';
let revFilterSort = 'default';
let revFilterStatus = 'all';

function renderRevisionCards() {
  const el = document.getElementById('revisionList');
  let cards = [...REVISION_CARDS];
  if (revFilterCompany !== 'all') cards = cards.filter(c => c.c === revFilterCompany);
  if (revFilterStatus === 'solved') cards = cards.filter(c => state.solved[c.t] === 'solved');
  if (revFilterStatus === 'unsolved') cards = cards.filter(c => state.solved[c.t] !== 'solved');

  // Apply sorting for Revision Cards
  cards.sort((a, b) => {
    if (revFilterSort === 'freqDesc') return (b.f || 0) - (a.f || 0);
    if (revFilterSort === 'freqAsc') return (a.f || 0) - (b.f || 0);
    if (revFilterSort === 'diffAsc') {
      const map = {'Easy':1,'Medium':2,'Hard':3};
      return map[a.d] - map[b.d];
    }
    if (revFilterSort === 'diffDesc') {
      const map = {'Easy':1,'Medium':2,'Hard':3};
      return map[b.d] - map[a.d];
    }
    return 0; // Default order
  });

  const colors = {Amazon:'var(--amazon)',Google:'var(--google)',Microsoft:'var(--microsoft)','Apple':'var(--apple)'};
  
  el.innerHTML = cards.map((c, i) => {
    const solved = state.solved[c.t] === 'solved';
    return `
    <div class="rev-card ${solved ? 'solved' : ''}" id="rev-card-${i}">
      <div class="rev-header">
        <div class="rev-title-area">
          <div class="rev-num">#${i + 1} <span style="color:${colors[c.c]}; margin-left:4px;">● ${c.c}</span></div>
          <div class="rev-title">${c.t}</div>
          <div class="rev-meta">
            <span class="diff-badge diff-${c.d}">${c.d}</span>
            ${c.f ? `<span style="font-size:0.75rem; color:var(--text3)">Freq: ${c.f}%</span>` : ''}
            <button class="rev-topic-btn" onclick="toggleRevTopic(this)">Reveal Topic</button>
            <span class="rev-topic-text">${c.tp || 'N/A'}</span>
          </div>
        </div>
        <button class="btn btn-sm ${solved ? 'btn-primary' : 'btn-outline'}" onclick="markProblem('${c.t.replace(/'/g,"\\'")}','solved'); event.stopPropagation();">
          ${solved ? '✓ MASTERED' : 'Mark Mastered'}
        </button>
      </div>
      <div class="rev-body">
        <div class="rev-question"><strong>Q:</strong> ${c.q}</div>
        
        <div class="rev-step">
          <div class="rev-step-title brute">⚠️ Brute Force</div>
          <div class="rev-step-content hidden-ans" onclick="revealStep(this)">${c.brute}</div>
        </div>
        
        <div class="rev-step">
          <div class="rev-step-title optimal">✅ Optimal Approach ${c.opt_hint ? `(${c.opt_hint})` : ''}</div>
          <div class="rev-step-content hidden-ans" onclick="revealStep(this)">${c.optimal}</div>
        </div>
        
        <div class="rev-step">
          <div class="rev-step-title space">🚀 Space Optimization ${c.space_hint ? `(${c.space_hint})` : ''}</div>
          <div class="rev-step-content hidden-ans" onclick="revealStep(this)">${c.space}</div>
        </div>
        
        <div class="rev-step">
          <div class="rev-step-title followup">🔮 Follow-up</div>
          <div class="rev-step-content hidden-ans" onclick="revealStep(this)">${c.followup}</div>
        </div>
      </div>
    </div>
  `;}).join('');
}

function toggleRevTopic(btn) {
  const textEl = btn.nextElementSibling;
  textEl.classList.toggle('visible');
  btn.textContent = textEl.classList.contains('visible') ? 'Hide Topic' : 'Reveal Topic';
}

function toggleCard(index) {
  document.getElementById(`rev-card-${index}`).classList.toggle('open');
}

function revealStep(el) {
  el.classList.remove('hidden-ans');
  el.classList.add('revealed');
}

function expandAllCards() {
  document.querySelectorAll('.rev-card').forEach(c => c.classList.add('open'));
}

function collapseAllCards() {
  document.querySelectorAll('.rev-card').forEach(c => c.classList.remove('open'));
}

// ========== MODAL ==========
function closeModal() { document.getElementById('modal').classList.add('hidden'); }
document.getElementById('modal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
