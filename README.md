<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Arus Keuangan — RHN CAPITAL</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
/* ==========================================================================
   TEMA NEO-FINTECH MODERN (ALIGNED CARDS & FULL SCREEN MOBILE)
   ========================================================================== */
* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

:root {
  --bg-app: #09090b; 
  --bg-sidebar: #18181b; 
  --bg-card: #18181b;
  --bg-input: #27272a;
  --bg-hover: #27272a;
  --border: #27272a; 
  --text-main: #fafafa;
  --text-muted: #a1a1aa;
  --accent: #3b82f6;
  --income: #10b981;
  --expense: #ef4444;
}

body.light-mode {
  --bg-app: #f4f4f5; --bg-sidebar: #ffffff; --bg-card: #ffffff;
  --bg-input: #f4f4f5; --bg-hover: #e4e4e7; --border: #e4e4e7; 
  --text-main: #09090b; --text-muted: #71717a;
}

body {
  font-family: 'Outfit', sans-serif;
  background-color: var(--bg-app);
  color: var(--text-main);
  height: 100vh; overflow: hidden; display: flex;
}

/* SIDEBAR & SCROLLBAR */
.app-container { display: flex; width: 100%; height: 100vh; }
.sidebar {
  width: 290px; background: var(--bg-sidebar); border-right: 1px solid var(--border);
  display: flex; flex-direction: column; overflow-y: auto; z-index: 50;
}
.sidebar::-webkit-scrollbar { display: none; }

::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }

.brand { padding: 24px; font-size: 20px; font-weight: 800; color: var(--accent); border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 12px; }
.brand img { width: 32px; border-radius: 8px; }

/* USER PROFILE WITH ACTION BUTTONS ALIGNED */
.user-profile { padding: 20px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid var(--border); }
.u-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--accent); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }
.u-info { flex: 1; overflow: hidden; }
.u-name { font-weight: 700; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.u-status { font-size: 10px; color: var(--text-muted); display: flex; align-items: center; gap: 4px; }
.sync-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--text-muted); }

/* Tombol Keluar & Tema Nempel di Kanan Nama */
.action-buttons { display: flex; gap: 6px; align-items: center; flex-shrink: 0; }
.action-btn { 
  background: var(--bg-input); border: 1px solid var(--border); color: var(--text-muted); 
  padding: 6px 10px; border-radius: 8px; font-size: 10px; font-weight: 800; cursor: pointer; 
  display: flex; align-items: center; justify-content: center; height: 28px;
}
.action-btn.logout { background: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.2); color: var(--expense); }
.action-btn:hover { filter: brightness(1.2); }

.nav-links { padding: 16px; flex: 1; display: flex; flex-direction: column; gap: 4px; }
.nav-item { padding: 12px 16px; border-radius: 12px; color: var(--text-muted); font-weight: 600; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 10px; }
.nav-item.active { background: var(--accent); color: #fff; }

.sidebar-footer { padding: 16px; border-top: 1px solid var(--border); display: flex; flex-direction: column; gap: 8px; }
.btn-outline { width: 100%; padding: 10px; border-radius: 10px; border: 1px solid var(--border); background: transparent; color: var(--text-main); font-weight: 600; font-size: 11px; cursor: pointer; text-align: left; }

/* MAIN CONTENT */
.main-content { flex: 1; height: 100vh; overflow-y: auto; scroll-behavior: smooth; }
.top-header { padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; background: rgba(var(--bg-app), 0.8); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); z-index: 10; border-bottom: 1px solid var(--border); }
.usd-pill { font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; background: var(--bg-input); padding: 6px 12px; border-radius: 20px; border: 1px solid var(--border); }

.page { display: none; padding: 24px; animation: fadeUp 0.4s ease; max-width: 1300px; margin: 0 auto; }
.page.active { display: block; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

/* BENTO GRID: Alignment Sempurna */
.bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; align-items: stretch; }
.col-hero { grid-column: span 12; }
.col-form { grid-column: span 5; }
.col-history { grid-column: span 7; }

/* Kartu Fleksibel agar isi menyesuaikan ruang kosong */
.card { background: var(--bg-card); border-radius: 24px; padding: 24px; border: 1px solid var(--border); height: 100%; display: flex; flex-direction: column; }

/* Dashboard Metrics */
.hero-balance-wrapper { display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between; width: 100%; }
.hb-label { font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px; }
.hb-val { font-family: 'JetBrains Mono', monospace; font-size: 38px; font-weight: 800; line-height: 1; margin-bottom: 8px; letter-spacing: -1px; }
.hb-usd { font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--text-muted); font-weight: 600; }
.hero-stats { display: flex; gap: 12px; flex: 1; min-width: 300px; justify-content: flex-end; }
.hs-box { padding: 12px 16px; border-radius: 16px; flex: 1; max-width: 180px; display: flex; align-items: center; gap: 10px; background: var(--bg-input); border: 1px solid var(--border); }
.hs-icon { width: 32px; height: 32px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800; background: var(--accent); color: #fff; }
.hs-box.inc .hs-icon { background: var(--income); }
.hs-box.exp .hs-icon { background: var(--expense); }
.hs-l { font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; }
.hs-v { font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; margin-top: 2px; }

/* Modern Form & Alignment Fix */
.giant-input-wrap { text-align: center; margin-bottom: 20px; padding: 16px 0; border-bottom: 1px dashed var(--border); }
.giant-input { width: 100%; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 32px; font-weight: 800; color: var(--text-main); background: transparent; border: none; outline: none; }
.m-input { width: 100%; padding: 14px; background: var(--bg-input); border: 1px solid var(--border); border-radius: 16px; color: var(--text-main); font-size: 14px; outline: none; margin-bottom: 12px; }

/* Memaksa tombol simpan selalu menempel di dasar card */
.btn-primary { 
  width: 100%; padding: 16px; background: var(--accent); color: #fff; border: none; 
  border-radius: 16px; font-size: 14px; font-weight: 800; cursor: pointer; 
  text-transform: uppercase; margin-top: auto; 
}

/* Membatasi tinggi History List agar tidak molor panjang & bisa discroll */
#recent-list { flex: 1; overflow-y: auto; max-height: 380px; padding-right: 8px; }

/* Tx Item */
.tx-item { display: flex; align-items: center; padding: 14px; border-bottom: 1px solid var(--border); transition: 0.2s; }
.tx-item:hover { background: var(--bg-input); border-radius: 16px; }
.tx-icon { width: 44px; height: 44px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800; margin-right: 14px; flex-shrink: 0; }
.tx-icon.inc { background: rgba(16,185,129,0.1); color: var(--income); }
.tx-icon.exp { background: rgba(239,68,68,0.1); color: var(--expense); }
.tx-info { flex: 1; min-width: 0; }
.tx-title { font-size: 14px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tx-date { font-size: 11px; color: var(--text-muted); }
.tx-amount { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 800; text-align: right; }
.tx-del { color: var(--expense); font-size: 10px; font-weight: 800; cursor: pointer; background: transparent; border: none; margin-top: 4px; }

/* MOBILE FULL SCREEN MENTOK LAYAR */
@media (max-width: 900px) {
  .sidebar { display: none; }
  .top-header { padding: 12px 16px; }
  
  /* Menghilangkan semua jarak (padding) di sekeliling content agar full-screen */
  .page { padding: 0 !important; } 
  .main-content { padding-bottom: 80px; }
  
  /* Form & History menyatu tanpa jarak pinggir */
  .card { border-radius: 0; border-left: none; border-right: none; border-bottom: 1px solid var(--border); padding: 20px 16px; }
  .col-hero, .col-form, .col-history { grid-column: span 12; }
  .bento-grid { gap: 0; }
  
  .hero-balance-wrapper { flex-direction: column; align-items: flex-start; }
  .hero-stats { width: 100%; justify-content: flex-start; }
  
  .mobile-bottom-nav { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(24,24,27,0.95); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border-top: 1px solid var(--border); display: flex; padding: 10px 10px 25px; z-index: 100; justify-content: space-between; }
  .mb-nav-item { flex: 1; text-align: center; color: var(--text-muted); font-size: 9px; font-weight: 700; text-transform: uppercase; }
  .mb-nav-item.active { color: var(--accent); }
  .mb-nav-icon { font-size: 20px; display: block; margin-bottom: 4px; }
}
@media (min-width: 901px) { .mobile-bottom-nav { display: none; } }
</style>
</head>
<body>

<div id="auth-screen">
  <div class="auth-box" style="background: var(--bg-card); border-radius: 32px; padding: 40px; width: 90%; max-width: 420px; border: 1px solid var(--border); text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    <img src="RHN LOGO.jpg" alt="Logo" class="auth-logo" onerror="this.style.display='none'" style="width: 72px; border-radius: 20px; margin-bottom: 24px;">
    <h1 style="font-size: 24px; font-weight: 800; margin-bottom: 8px;">RHN CAPITAL</h1>
    <div class="type-switcher" style="margin-bottom: 24px; display: flex; background: var(--bg-input); padding: 4px; border-radius: 12px;">
      <button class="ts-btn active" id="tab-login" onclick="switchTab('login')" style="flex:1; padding:10px; border:none; border-radius:8px; font-weight:700; cursor:pointer; background:var(--accent); color:#fff;">Masuk</button>
      <button class="ts-btn" id="tab-register" onclick="switchTab('register')" style="flex:1; padding:10px; border:none; border-radius:8px; font-weight:700; cursor:pointer; background:transparent; color:var(--text-muted);">Daftar</button>
    </div>
    <div id="auth-err" style="color:var(--expense); font-size:12px; margin-bottom:16px; display:none;"></div>
    <input type="email" id="auth-email" class="m-input" placeholder="Email">
    <input type="password" id="auth-pass" class="m-input" placeholder="Sandi" onkeydown="if(event.key==='Enter')doAuth()">
    <div id="field-confirm" style="display:none"><input type="password" id="auth-pass2" class="m-input" placeholder="Ulangi Sandi"></div>
    <button class="btn-primary" id="auth-submit-btn" onclick="doAuth()">MASUK</button>
  </div>
</div>

<div id="app-screen" class="app-container" style="display: none;">
  <aside class="sidebar">
    <div class="brand"><img src="RHN LOGO.jpg" alt="Logo" onerror="this.style.display='none'">RHN CAPITAL</div>
    
    <div class="user-profile">
      <div class="u-avatar" id="user-avatar">?</div>
      <div class="u-info">
        <div class="u-name" id="user-name">Memuat...</div>
        <div class="u-status"><div class="sync-dot" id="sync-dot"></div><span id="sync-label">Sinkron</span></div>
      </div>
      <div class="action-buttons">
        <button class="action-btn" onclick="toggleTheme()" id="theme-toggle">🌙</button>
        <button class="action-btn logout" onclick="doLogout()">KELUAR</button>
      </div>
    </div>

    <nav class="nav-links">
      <div class="nav-item active" onclick="switchPage('dashboard')"><span>⌘</span> Dashboard</div>
      <div class="nav-item" onclick="switchPage('harian')"><span>📅</span> Harian</div>
      <div class="nav-item" onclick="switchPage('mingguan')"><span>📊</span> Mingguan</div>
      <div class="nav-item" onclick="switchPage('bulanan')"><span>📈</span> Bulanan</div>
      <div class="nav-item" onclick="switchPage('tahunan')"><span>🏆</span> Tahunan</div>
      <div class="nav-item" onclick="switchPage('riwayat')"><span>🕒</span> Riwayat</div>
    </nav>
    <div class="sidebar-footer">
      <button class="btn-outline" onclick="window.location.href='latar.html'">↗ Web RHN Capital</button>
      <button class="btn-outline" onclick="window.location.href='jurnal.html'">↗ Jurnal Forex</button>
      <button class="btn-outline" onclick="window.location.href='aset.html'">↗ Jurnal Aset</button>
      <button class="btn-outline" onclick="window.location.href='data.html'">↗ Data Pribadi</button>
    </div>
  </aside>

  <main class="main-content">
    <header class="top-header">
      <div style="font-weight: 700; font-size: 16px;" id="mobile-page-title">Dashboard</div>
      <div class="usd-pill" id="usd-rate-val">Kurs...</div>
    </header>

    <div id="page-dashboard" class="page active">
      <div class="bento-grid">
        <div class="card col-hero" id="metric-cards"></div>
        
        <div class="card col-form">
          <div style="font-weight: 800; margin-bottom: 16px;">CATAT TRANSAKSI</div>
          <div class="type-switcher" style="display:flex; background:var(--bg-input); padding:4px; border-radius:12px; margin-bottom:20px;">
            <button class="ts-btn active" id="btn-inc" onclick="selType('income')" style="flex:1; padding:10px; border:none; border-radius:8px; font-weight:700; background:var(--income); color:#fff; cursor:pointer;">Pemasukan</button>
            <button class="ts-btn" id="btn-exp" onclick="selType('expense')" style="flex:1; padding:10px; border:none; border-radius:8px; font-weight:700; background:transparent; color:var(--text-muted); cursor:pointer;">Pengeluaran</button>
          </div>
          <div class="giant-input-wrap"><input type="number" id="f-amount" class="giant-input" placeholder="0"></div>
          <select id="f-cat" class="m-input"></select>
          <input type="text" id="f-note" class="m-input" placeholder="Keterangan singkat...">
          <input type="datetime-local" id="f-date" class="m-input">
          <button class="btn-primary" id="save-btn" onclick="addTx()">SIMPAN TRANSAKSI</button>
        </div>

        <div class="card col-history">
          <div style="font-weight: 800; margin-bottom: 16px;">AKTIVITAS TERBARU</div>
          <div id="recent-list"></div>
        </div>
      </div>
    </div>

    <div id="page-harian" class="page">...</div>
    <div id="page-bulanan" class="page">...</div>
    <div id="page-riwayat" class="page">...</div>
    
    <div id="page-profil" class="page" style="padding:20px !important;">
      <div class="card" style="text-align:center; padding: 40px 20px;">
        <div class="u-avatar" id="mobile-user-avatar" style="margin:0 auto 10px; width:60px; height:60px; font-size:24px;">?</div>
        <div id="mobile-user-name" style="font-weight:800; font-size:18px;">...</div>
        <div style="display: flex; gap:10px; justify-content:center; margin-top:20px;">
          <button class="action-btn" onclick="toggleTheme()" style="padding: 12px 20px; font-size:16px;">🌙 Tema</button>
          <button class="action-btn logout" onclick="doLogout()" style="padding: 12px 20px; font-size:14px;">KELUAR AKUN</button>
        </div>
      </div>
    </div>
  </main>

  <nav class="mobile-bottom-nav">
    <div class="mb-nav-item active" onclick="switchPage('dashboard')"><span class="mb-nav-icon">⌘</span>Beranda</div>
    <div class="mb-nav-item" onclick="switchPage('harian')"><span class="mb-nav-icon">📅</span>Harian</div>
    <div class="mb-nav-item" onclick="switchPage('bulanan')"><span class="mb-nav-icon">📊</span>Laporan</div>
    <div class="mb-nav-item" onclick="switchPage('riwayat')"><span class="mb-nav-icon">🕒</span>Riwayat</div>
    <div class="mb-nav-item" onclick="switchPage('profil')"><span class="mb-nav-icon">👤</span>Profil</div>
  </nav>
</div>

<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initializeFirestore, persistentLocalCache, collection, doc, addDoc, deleteDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = { apiKey: "AIzaSyCx04v3ppq3DxbXDg0PrWBeJYIZjmJF9cg", authDomain: "rhn-capital.firebaseapp.com", projectId: "rhn-capital", storageBucket: "rhn-capital.firebasestorage.app", messagingSenderId: "74905216682", appId: "1:74905216682:web:4687a5b0bd7bcac09292d3" };
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 
const db = initializeFirestore(app, { localCache: persistentLocalCache() });

const CATS = { income: ['Pemberian','Investasi','Ongkos Harian','Bonus','Dividen','Profit','Transfer Masuk','Lainnya'], expense: ['Jajan','Pembelian Aset(Investasi)','Infak','Kas','Utilitas','Transportasi','Makan','Minum','Loss','Lainnya'] };
let txs=[], curType='income', activePage='dashboard', charts={}, currentUSDRate = 16000, currentUser=null, unsubListener=null, authMode='login';

const fmt = n => 'Rp '+Math.round(n).toLocaleString('id-ID');
const fmtDate = dt => new Date(dt).toLocaleDateString('id-ID',{day:'2-digit',month:'short'});
const fmtTime = dt => new Date(dt).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
const nowISO = () => new Date().toISOString().slice(0,16);
const kursIndo = new Intl.NumberFormat('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const getUSD = n => '$' + (n / currentUSDRate).toFixed(2);

function initLiveUSD() {
  const socket = new WebSocket('wss://stream.binance.com:9443/ws/usdtidr@ticker');
  socket.addEventListener('message', e => {
      const newPrice = parseFloat(JSON.parse(e.data).c); 
      if (newPrice && newPrice !== currentUSDRate) { currentUSDRate = newPrice; document.getElementById('usd-rate-val').textContent = kursIndo.format(currentUSDRate); refreshAll(); }
  });
  socket.addEventListener('close', () => setTimeout(initLiveUSD, 3000));
}
async function fetchUSDRate() { try { const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); currentUSDRate = (await res.json()).rates.IDR; document.getElementById('usd-rate-val').textContent = kursIndo.format(currentUSDRate); refreshAll(); } catch (e) { document.getElementById('usd-rate-val').textContent = "Offline"; } }
fetchUSDRate().then(initLiveUSD); setInterval(fetchUSDRate, 300000); 

function showErr(msg){ const el=document.getElementById('auth-err'); el.textContent=msg; el.style.display='block'; }
function hideErr(){ document.getElementById('auth-err').style.display='none'; }
function setLoading(on){ document.getElementById('auth-submit-btn').disabled=on; document.getElementById('auth-submit-btn').textContent=on?'Proses...':(authMode==='login'?'MASUK':'DAFTAR'); }
function setSyncStatus(ok){ document.getElementById('sync-dot').style.background=ok?'var(--income)':'var(--expense)'; }

window.switchTab=function(mode){ authMode=mode; document.getElementById('tab-login').style.background=mode==='login'?'var(--accent)':'transparent'; document.getElementById('tab-login').style.color=mode==='login'?'#fff':'var(--text-muted)'; document.getElementById('tab-register').style.background=mode==='register'?'var(--accent)':'transparent'; document.getElementById('tab-register').style.color=mode==='register'?'#fff':'var(--text-muted)'; document.getElementById('field-confirm').style.display=mode==='register'?'block':'none'; hideErr(); };
window.doAuth=async function(){ const email=document.getElementById('auth-email').value.trim(), pass=document.getElementById('auth-pass').value; hideErr(); if(!email||!pass)return showErr('Kosong.'); setLoading(true); try{ if(authMode==='login') await signInWithEmailAndPassword(auth,email,pass); else { if(pass!==document.getElementById('auth-pass2').value)return showErr('Sandi beda.'); await createUserWithEmailAndPassword(auth,email,pass); } } catch(e){ showErr(e.message); setLoading(false); } };
window.doLogout=async function(){ if(unsubListener){unsubListener();unsubListener=null;} txs=[]; await signOut(auth); };

onAuthStateChanged(auth,user=>{
  if(user){ currentUser=user; document.getElementById('auth-screen').style.display='none'; document.getElementById('app-screen').style.display='flex'; setLoading(false); const name=user.displayName||user.email.split('@')[0]; document.getElementById('user-name').textContent=name; document.getElementById('user-avatar').textContent=name.charAt(0).toUpperCase(); document.getElementById('mobile-user-name').textContent=name; document.getElementById('mobile-user-avatar').textContent=name.charAt(0).toUpperCase(); listenTransactions(user.uid); }
  else { currentUser=null; document.getElementById('auth-screen').style.display='flex'; document.getElementById('app-screen').style.display='none'; if(unsubListener){unsubListener();unsubListener=null;} txs=[]; }
});

function listenTransactions(uid){ if(unsubListener)unsubListener(); unsubListener=onSnapshot(query(collection(db,'users',uid,'transactions'),orderBy('createdAt','desc')), snap=>{txs=snap.docs.map(d=>({id:d.id,...d.data()}));setSyncStatus(true);refreshAll();}, err=>{setSyncStatus(false);} ); }

window.addTx=async function(){ if(!currentUser)return; const amt=parseFloat(document.getElementById('f-amount').value), cat=document.getElementById('f-cat').value, note=document.getElementById('f-note').value.trim(), dt=document.getElementById('f-date').value; if(!amt||!cat)return alert('Isi lengkap.'); document.getElementById('save-btn').textContent='...'; try{ await addDoc(collection(db,'users',currentUser.uid,'transactions'),{type:curType,amount:amt,category:cat,note:note||'-',date:dt||nowISO(),createdAt:serverTimestamp()}); document.getElementById('f-amount').value=''; document.getElementById('f-note').value=''; } catch(e){alert(e.message);} document.getElementById('save-btn').textContent='SIMPAN TRANSAKSI'; };

window.delTx=async function(id){ if(!currentUser||!confirm('Hapus?'))return; await deleteDoc(doc(db,'users',currentUser.uid,'transactions',id)); };

window.selType=function(t){ curType=t; document.getElementById('btn-inc').style.background=t==='income'?'var(--income)':'transparent'; document.getElementById('btn-inc').style.color=t==='income'?'#fff':'var(--text-muted)'; document.getElementById('btn-exp').style.background=t==='expense'?'var(--expense)':'transparent'; document.getElementById('btn-exp').style.color=t==='expense'?'#fff':'var(--text-muted)'; const s=document.getElementById('f-cat'); s.innerHTML='<option value="">Kategori...</option>'; CATS[t].forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;s.appendChild(o)}); };

window.switchPage=function(p){ 
  document.querySelectorAll('.page').forEach(el=>el.classList.remove('active')); 
  document.getElementById('page-'+p).classList.add('active'); 
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.mb-nav-item').forEach(el=>el.classList.remove('active'));
  activePage=p; refreshAll(); 
};

const createTxCard = (t) => `<div class="tx-item"><div class="tx-icon ${t.type}">${t.type==='income'?'↙':'↗'}</div><div class="tx-info"><div class="tx-title">${t.note} <span style="font-size:9px; background:var(--bg-app); padding:2px 4px; border-radius:4px;">${t.category}</span></div><div class="tx-date">${fmtDate(t.date)}</div></div><div style="text-align:right;"><div class="tx-amount ${t.type}">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div><button class="tx-del" onclick="delTx('${t.id}')">Hapus</button></div></div>`;
function renderList(container, arr) { if(container) container.innerHTML = arr.length ? arr.map(t => createTxCard(t)).join('') : '<div style="padding:20px;text-align:center;color:var(--text-muted);font-size:12px;">Belum ada riwayat transaksi.</div>'; }

function renderMetrics(){
  const inc=txs.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0), exp=txs.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0), bal=inc-exp;
  document.getElementById('metric-cards').innerHTML=`<div class="hero-balance-wrapper"><div><div class="hb-label">TOTAL SALDO BERSIH</div><div class="hb-val">${fmt(bal)}</div><div class="hb-usd">${getUSD(bal)} USD</div></div><div class="hero-stats"><div class="hs-box inc"><div class="hs-icon">↙</div><div><div class="hs-l">Masuk</div><div class="hs-v">${fmt(inc)}</div></div></div><div class="hs-box exp"><div class="hs-icon">↗</div><div><div class="hs-l">Keluar</div><div class="hs-v">${fmt(exp)}</div></div></div></div></div>`;
}

function refreshAll(){ renderMetrics(); renderList(document.getElementById('recent-list'), txs.slice(0,8)); }
document.getElementById('f-date').value=nowISO(); selType('income');

window.toggleTheme = function() { 
  document.body.classList.toggle('light-mode'); 
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById('theme-toggle').textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
};
if(localStorage.getItem('theme') === 'light') { document.body.classList.add('light-mode'); document.getElementById('theme-toggle').textContent = '☀️'; }
</script>
</body>
</html>
