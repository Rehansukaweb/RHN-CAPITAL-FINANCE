<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Arus Keuangan — RHN CAPITAL</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
/* ==========================================================================
   TEMA NEO-FINTECH MODERN (ANTI MIRING & KARTU PRESISI)
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

/* ANTI MIRING / HORIZONTAL SCROLL FIX PADA LAYAR UTAMA */
html, body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

body {
  font-family: 'Outfit', sans-serif;
  background-color: var(--bg-app);
  color: var(--text-main);
  height: 100vh; overflow: hidden; display: flex;
}

/* SIDEBAR & SCROLLBAR */
.app-container { display: flex; width: 100%; height: 100vh; overflow-x: hidden; }
.sidebar {
  width: 290px; background: var(--bg-sidebar); border-right: 1px solid var(--border);
  display: flex; flex-direction: column; overflow-y: auto; z-index: 50; flex-shrink: 0;
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
.u-info { flex: 1; min-width: 0; }
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
.nav-item { padding: 12px 16px; border-radius: 12px; color: var(--text-muted); font-weight: 600; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.2s; }
.nav-item:hover { background: var(--bg-hover); color: var(--text-main); }
.nav-item.active { background: var(--accent); color: #fff; }

.sidebar-footer { padding: 16px; border-top: 1px solid var(--border); display: flex; flex-direction: column; gap: 8px; }
.btn-outline { width: 100%; padding: 10px; border-radius: 10px; border: 1px solid var(--border); background: transparent; color: var(--text-main); font-weight: 600; font-size: 11px; cursor: pointer; text-align: left; transition: 0.2s; }
.btn-outline:hover { background: var(--bg-hover); }

/* MAIN CONTENT */
.main-content { flex: 1; height: 100vh; width: 100%; overflow-y: auto; overflow-x: hidden; scroll-behavior: smooth; position: relative; }
.top-header { padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; background: rgba(var(--bg-app), 0.8); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); z-index: 10; border-bottom: 1px solid var(--border); }
.usd-pill { font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; background: var(--bg-input); padding: 6px 12px; border-radius: 20px; border: 1px solid var(--border); white-space: nowrap; }

.page { display: none; padding: 24px; animation: fadeUp 0.4s ease; max-width: 1300px; margin: 0 auto; width: 100%; }
.page.active { display: block; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

/* PERBAIKAN: KARTU SECARA DEFAULT TIDAK MEMANJANG (HEIGHT AUTO) */
.card { background: var(--bg-card); border-radius: 24px; padding: 24px; border: 1px solid var(--border); }

/* KHUSUS KARTU DI DALAM BENTO-GRID DASHBOARD YANG DIBUAT SEJAJAR */
.bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; align-items: stretch; }
.bento-grid .card { height: 100%; display: flex; flex-direction: column; }
.col-hero { grid-column: span 12; }
.col-form { grid-column: span 5; }
.col-history { grid-column: span 7; }

/* DASHBOARD METRICS: PUSAT DI TENGAH (CENTER ALIGNED) */
.hero-balance-wrapper { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; padding: 10px 0; }
.hb-label { font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px; }
.hb-val { font-family: 'JetBrains Mono', monospace; font-size: 42px; font-weight: 800; line-height: 1.2; margin-bottom: 4px; letter-spacing: -1px; white-space: nowrap; }
.hb-usd { font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--text-muted); font-weight: 600; margin-bottom: 24px; }
.hero-stats { display: flex; gap: 16px; width: 100%; justify-content: center; flex-wrap: wrap; }
.hs-box { padding: 12px 20px; border-radius: 16px; flex: 1; max-width: 200px; display: flex; align-items: center; justify-content: flex-start; gap: 12px; background: var(--bg-input); border: 1px solid var(--border); }
.hs-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800; background: var(--accent); color: #fff; flex-shrink: 0; }
.hs-box.inc .hs-icon { background: var(--income); }
.hs-box.exp .hs-icon { background: var(--expense); }
.hs-l { font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; text-align: left; }
.hs-v { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; margin-top: 2px; text-align: left; white-space: nowrap; }

/* Modern Form & Alignment Fix */
.giant-input-wrap { text-align: center; margin-bottom: 20px; padding: 16px 0; border-bottom: 1px dashed var(--border); }
.giant-input { width: 100%; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 36px; font-weight: 800; color: var(--text-main); background: transparent; border: none; outline: none; }
.m-input { width: 100%; padding: 14px; background: var(--bg-input); border: 1px solid var(--border); border-radius: 16px; color: var(--text-main); font-size: 14px; outline: none; margin-bottom: 12px; }

/* Tombol simpan menempel di dasar card pada dashboard */
.btn-primary { 
  width: 100%; padding: 16px; background: var(--accent); color: #fff; border: none; 
  border-radius: 16px; font-size: 14px; font-weight: 800; cursor: pointer; 
  text-transform: uppercase; margin-top: auto; transition: 0.2s;
}
.btn-primary:hover { filter: brightness(1.1); transform: translateY(-2px); }

/* History List */
#recent-list { flex: 1; overflow-y: auto; max-height: 400px; padding-right: 8px; }
.tx-item { display: flex; align-items: center; padding: 14px; border-bottom: 1px solid var(--border); transition: 0.2s; }
.tx-item:hover { background: var(--bg-input); border-radius: 16px; border-bottom-color: transparent; }
.tx-item:last-child { border-bottom: none; }
.tx-icon { width: 44px; height: 44px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800; margin-right: 14px; flex-shrink: 0; }
.tx-icon.inc { background: rgba(16,185,129,0.1); color: var(--income); }
.tx-icon.exp { background: rgba(239,68,68,0.1); color: var(--expense); }
.tx-info { flex: 1; min-width: 0; }
.tx-title { font-size: 14px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: flex; align-items: center; }
.tx-badge { font-size: 9px; background: var(--bg-app); border: 1px solid var(--border); padding: 2px 6px; border-radius: 6px; margin-left: 8px; flex-shrink: 0; color: var(--text-muted); font-weight: 700;}
.tx-date { font-size: 11px; color: var(--text-muted); margin-top: 2px; }
.tx-amount { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 800; text-align: right; white-space: nowrap; }
.tx-del { color: var(--expense); font-size: 10px; font-weight: 800; cursor: pointer; background: transparent; border: none; margin-top: 4px; padding: 4px; }

/* Filter Container untuk Riwayat */
.filter-container { display: flex; flex-direction: row; gap: 12px; align-items: center; width: 100%; margin-bottom: 20px; }
@media (max-width: 900px) {
  .filter-container { flex-direction: column; gap: 8px; }
}

/* Period Bar & Grid Card for Laporan */
.period-bar { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; margin-bottom: 20px; width: 100%; }
.p-btn { padding: 12px 24px; border: 1px solid var(--border); border-radius: 100px; font-size: 12px; font-weight: 700; cursor: pointer; background: var(--bg-card); color: var(--text-muted); white-space: nowrap; transition: 0.2s; }
.p-btn.active { background: var(--text-main); color: var(--bg-app); border-color: var(--text-main); }
.sum-grid-new { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
.sg-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px; padding: 20px; text-align: center; }
.sg-label { font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px; }
.sg-val { font-family: 'JetBrains Mono', monospace; font-size: 20px; font-weight: 800; color: var(--text-main); white-space: nowrap; }

/* NAVIGASI TAB LAPORAN (HANYA MUNCUL DI HP) */
.mobile-tab-nav { display: none; }

/* MOBILE FULL SCREEN MENTOK LAYAR - ANTI MIRING */
@media (max-width: 900px) {
  .sidebar { display: none; }
  .top-header { padding: 12px 16px; }
  
  .page { padding: 0 !important; } 
  .main-content { padding-bottom: 85px; }
  
  /* Hilangkan sisi kartu di hp agar menyatu full layar */
  .card { border-radius: 0; border-left: none; border-right: none; border-bottom: 1px solid var(--border); padding: 24px 16px; }
  .col-hero, .col-form, .col-history { grid-column: span 12; }
  .bento-grid { gap: 0; }
  
  .hero-stats { flex-direction: row; justify-content: center; gap: 12px; }
  .hs-box { max-width: none; flex: 1; padding: 12px; justify-content: center; }
  .sum-grid-new { grid-template-columns: 1fr; gap: 12px; padding: 16px; margin-bottom: 0; border-bottom: none; }
  
  /* Sub-menu pintar laporan di HP */
  .mobile-tab-nav { display: flex; background: var(--bg-input); border-radius: 12px; padding: 4px; margin: 16px; gap: 4px; }
  .mobile-tab-btn { flex: 1; padding: 10px; text-align: center; font-size: 11px; font-weight: 700; color: var(--text-muted); border-radius: 8px; cursor: pointer; transition: 0.2s; }
  .mobile-tab-btn.active { background: var(--accent); color: #fff; }
  
  .mobile-bottom-nav { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(24,24,27,0.98); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-top: 1px solid var(--border); display: flex; padding: 12px 8px 24px; z-index: 100; justify-content: space-between; }
  .mb-nav-item { flex: 1; text-align: center; color: var(--text-muted); font-size: 9px; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: 0.2s; }
  .mb-nav-item.active { color: var(--accent); }
  .mb-nav-icon { font-size: 22px; display: block; margin-bottom: 4px; }
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
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
             <div style="font-weight: 800;">AKTIVITAS TERBARU</div>
             <button class="btn-outline" style="width: auto; padding: 6px 12px; margin: 0;" onclick="switchPage('riwayat')">Lihat Semua</button>
          </div>
          <div id="recent-list"></div>
        </div>
      </div>
    </div>

    <div id="page-harian" class="page">
      <div style="padding: 16px;">
        <input type="date" id="pick-daily" onchange="renderDaily()" class="m-input" style="max-width: 250px; margin-bottom: 24px;">
      </div>
      <div class="sum-grid-new" id="daily-sum"></div>
      <div class="card"><div id="daily-body"></div></div>
    </div>

    <div id="page-mingguan" class="page">
      <div class="mobile-tab-nav">
        <div class="mobile-tab-btn active" onclick="switchPage('mingguan')">Mingguan</div>
        <div class="mobile-tab-btn" onclick="switchPage('bulanan')">Bulanan</div>
        <div class="mobile-tab-btn" onclick="switchPage('tahunan')">Tahunan</div>
      </div>
      <div style="padding: 16px;"><div class="period-bar" id="week-sel"></div></div>
      <div class="sum-grid-new" id="week-sum"></div>
      <div class="card" style="margin-bottom: 20px;"><div style="position: relative; height:250px; width: 100%;"><canvas id="chartWeek"></canvas></div></div>
      <div class="card"><div id="week-body"></div></div>
    </div>

    <div id="page-bulanan" class="page">
      <div class="mobile-tab-nav">
        <div class="mobile-tab-btn" onclick="switchPage('mingguan')">Mingguan</div>
        <div class="mobile-tab-btn active" onclick="switchPage('bulanan')">Bulanan</div>
        <div class="mobile-tab-btn" onclick="switchPage('tahunan')">Tahunan</div>
      </div>
      <div style="padding: 16px;"><div class="period-bar" id="month-sel"></div></div>
      <div class="sum-grid-new" id="month-sum"></div>
      <div class="card" style="margin-bottom: 20px;"><div style="position: relative; height:250px; width: 100%;"><canvas id="chartMonth"></canvas></div></div>
      <div class="card"><div id="month-body"></div></div>
    </div>

    <div id="page-tahunan" class="page">
      <div class="mobile-tab-nav">
        <div class="mobile-tab-btn" onclick="switchPage('mingguan')">Mingguan</div>
        <div class="mobile-tab-btn" onclick="switchPage('bulanan')">Bulanan</div>
        <div class="mobile-tab-btn active" onclick="switchPage('tahunan')">Tahunan</div>
      </div>
      <div style="padding: 16px;"><div class="period-bar" id="year-sel"></div></div>
      <div class="sum-grid-new" id="year-sum"></div>
      <div class="card" style="margin-bottom: 20px;"><div style="position: relative; height:250px; width: 100%;"><canvas id="chartYear"></canvas></div></div>
      <div class="card"><div id="year-body"></div></div>
    </div>

    <div id="page-riwayat" class="page">
      <div class="sum-grid-new" id="all-sum"></div>
      <div class="card filter-container">
        <select id="flt-type" class="m-input" style="margin: 0; flex: 1; width: 100%;" onchange="renderAll()">
          <option value="">Semua Filter</option>
          <option value="income">Pemasukan Saja</option>
          <option value="expense">Pengeluaran Saja</option>
        </select>
        <input type="text" id="flt-search" class="m-input" style="margin: 0; flex: 2; width: 100%;" placeholder="Cari keterangan..." oninput="renderAll()">
      </div>
      <div class="card"><div id="all-body"></div></div>
    </div>
    
    <div id="page-profil" class="page" style="padding: 20px !important;">
      <div class="card" style="text-align:center; padding: 40px 20px; border-radius: 24px;">
        <div class="u-avatar" id="mobile-user-avatar" style="margin:0 auto 10px; width:64px; height:64px; font-size:24px;">?</div>
        <div id="mobile-user-name" style="font-weight:800; font-size:18px;">...</div>
        <div style="display: flex; gap:10px; justify-content:center; margin-top:20px; margin-bottom: 30px;">
          <button class="action-btn" onclick="toggleTheme()" style="padding: 12px 20px; font-size:14px; height: auto;">🌙 Tema</button>
          <button class="action-btn logout" onclick="doLogout()" style="padding: 12px 20px; font-size:14px; height: auto;">KELUAR AKUN</button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px; text-align: left;">
          <button class="btn-outline" onclick="window.location.href='latar.html'">↗ Web RHN Capital</button>
          <button class="btn-outline" onclick="window.location.href='jurnal.html'">↗ Jurnal Forex</button>
          <button class="btn-outline" onclick="window.location.href='aset.html'">↗ Jurnal Aset</button>
          <button class="btn-outline" onclick="window.location.href='data.html'">↗ Data Pribadi</button>
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
  
  const titles = { 'dashboard':'Dashboard', 'harian':'Laporan Harian', 'mingguan':'Laporan Mingguan', 'bulanan':'Laporan Bulanan', 'tahunan':'Laporan Tahunan', 'riwayat':'Semua Riwayat', 'profil':'Profil Saya' };
  document.getElementById('mobile-page-title').textContent = titles[p];

  const navItems = document.querySelectorAll('.nav-item');
  const pages=['dashboard','harian','mingguan','bulanan','tahunan','riwayat']; 
  const idx = pages.indexOf(p);
  if(navItems[idx]) navItems[idx].classList.add('active');

  const mbNavItems = document.querySelectorAll('.mb-nav-item');
  if(p==='dashboard') mbNavItems[0].classList.add('active');
  else if(p==='harian') mbNavItems[1].classList.add('active');
  else if(p==='mingguan' || p==='bulanan' || p==='tahunan') mbNavItems[2].classList.add('active');
  else if(p==='riwayat') mbNavItems[3].classList.add('active');
  else if(p==='profil') mbNavItems[4].classList.add('active');

  activePage=p; refreshAll(); 
};

function calcSum(arr){ const inc=arr.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0), exp=arr.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0); return{inc,exp,bal:inc-exp,count:arr.length}; }

function renderSumGrid(el,arr){ 
  const s=calcSum(arr); 
  el.innerHTML=`<div class="sg-card inc"><div class="sg-label">Pemasukan</div><div class="sg-val">${fmt(s.inc)}</div></div><div class="sg-card"><div class="sg-label">Pengeluaran</div><div class="sg-val" style="color:var(--expense);">${fmt(s.exp)}</div></div><div class="sg-card"><div class="sg-label">Saldo Bersih</div><div class="sg-val" style="color:${s.bal>=0?'var(--text-main)':'var(--expense)'}">${fmt(s.bal)}</div></div>`; 
}

const createTxCard = (t) => `<div class="tx-item"><div class="tx-icon ${t.type}">${t.type==='income'?'↙':'↗'}</div><div class="tx-info"><div class="tx-title">${t.note} <span class="tx-badge">${t.category}</span></div><div class="tx-date">${fmtDate(t.date)}</div></div><div style="text-align:right;"><div class="tx-amount ${t.type}">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div><button class="tx-del" onclick="delTx('${t.id}')">Hapus</button></div></div>`;
function renderList(container, arr) { if(container) container.innerHTML = arr.length ? arr.map(t => createTxCard(t)).join('') : '<div style="padding:20px;text-align:center;color:var(--text-muted);font-size:12px;">Belum ada data.</div>'; }

function renderMetrics(){
  const inc=txs.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0), exp=txs.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0), bal=inc-exp;
  document.getElementById('metric-cards').innerHTML=`
    <div class="hero-balance-wrapper">
      <div style="width: 100%;">
        <div class="hb-label">TOTAL SALDO BERSIH</div>
        <div class="hb-val">${fmt(bal)}</div>
        <div class="hb-usd">${getUSD(bal)} USD</div>
      </div>
      <div class="hero-stats">
        <div class="hs-box inc">
          <div class="hs-icon">↙</div>
          <div style="text-align: left;">
            <div class="hs-l">Masuk</div>
            <div class="hs-v">${fmt(inc)}</div>
          </div>
        </div>
        <div class="hs-box exp">
          <div class="hs-icon">↗</div>
          <div style="text-align: left;">
            <div class="hs-l">Keluar</div>
            <div class="hs-v">${fmt(exp)}</div>
          </div>
        </div>
      </div>
    </div>`;
}

function mkChart(id,labels,incData,expData){ if(charts[id]) charts[id].destroy(); const c=document.getElementById(id); if(!c)return; const isLight = document.body.classList.contains('light-mode'); charts[id]=new Chart(c,{type:'bar',data:{labels,datasets:[{label:'Pemasukan',data:incData,backgroundColor:isLight?'#10B981':'#10B981',borderRadius:4},{label:'Pengeluaran',data:expData,backgroundColor:isLight?'#F87171':'#F87171',borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:isLight?'#71717a':'#a1a1aa',font:{size:10,family:"'Outfit'"}},grid:{display:false},border:{display:false}},y:{ticks:{color:isLight?'#71717a':'#a1a1aa',font:{size:10},callback:v=>Intl.NumberFormat('id-ID',{notation:'compact'}).format(v)},grid:{color:isLight?'#e4e4e7':'#27272a',drawBorder:false},border:{display:false}}}}}); }

window.renderDaily=function(){ const pick=document.getElementById('pick-daily').value, target=pick?new Date(pick).toDateString():new Date().toDateString(), arr=txs.filter(t=>new Date(t.date).toDateString()===target).sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('daily-sum'),arr); renderList(document.getElementById('daily-body'), arr); };
function wkKey(d){const dt=new Date(d);const day=dt.getDay();const diff=dt.getDate()-day+(day===0?-6:1);return new Date(new Date(d).setDate(diff)).toISOString().slice(0,10)}
function renderWeekly(){ const weeks={};txs.forEach(t=>{const k=wkKey(t.date);(weeks[k]=weeks[k]||[]).push(t)}); const keys=Object.keys(weeks).sort().reverse().slice(0,8); document.getElementById('week-sel').innerHTML=keys.map((k,i)=>{const m=new Date(k),s=new Date(k);s.setDate(s.getDate()+6);return`<button class="p-btn${i===0?' active':''}" onclick="selWeek('${k}',this)">${m.toLocaleDateString('id-ID',{day:'2-digit',month:'short'})} – ${s.toLocaleDateString('id-ID',{day:'2-digit',month:'short'})}</button>`}).join(''); if(keys.length)showWeek(keys[0]); }
window.selWeek=function(k,btn){document.querySelectorAll('#week-sel .p-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showWeek(k)};
function showWeek(k){ const arr=txs.filter(t=>wkKey(t.date)===k).sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('week-sum'),arr); renderList(document.getElementById('week-body'),arr); const days=['Sen','Sel','Rab','Kam','Jum','Sab','Min'],inc=new Array(7).fill(0),exp=new Array(7).fill(0); arr.forEach(t=>{const idx=(new Date(t.date).getDay()+6)%7;if(t.type==='income')inc[idx]+=t.amount;else exp[idx]+=t.amount}); mkChart('chartWeek',days,inc,exp); }
function renderMonthly(){ const months={};txs.forEach(t=>{const k=t.date.slice(0,7);(months[k]=months[k]||[]).push(t)}); const keys=Object.keys(months).sort().reverse().slice(0,12); document.getElementById('month-sel').innerHTML=keys.map((k,i)=>{const[y,m]=k.split('-');const d=new Date(y,m-1);return`<button class="p-btn${i===0?' active':''}" onclick="selMonth('${k}',this)">${d.toLocaleDateString('id-ID',{month:'long',year:'numeric'})}</button>`}).join(''); if(keys.length)showMonth(keys[0]); }
window.selMonth=function(k,btn){document.querySelectorAll('#month-sel .p-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showMonth(k)};
function showMonth(k){ const arr=txs.filter(t=>t.date.slice(0,7)===k).sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('month-sum'),arr); renderList(document.getElementById('month-body'),arr); const[y,m]=k.split('-');const dim=new Date(y,m,0).getDate(), labels=[],inc=new Array(dim).fill(0),exp=new Array(dim).fill(0); for(let i=1;i<=dim;i++)labels.push(i+''); arr.forEach(t=>{const d=new Date(t.date).getDate()-1;if(t.type==='income')inc[d]+=t.amount;else exp[d]+=t.amount}); mkChart('chartMonth',labels,inc,exp); }
function renderYearly(){ const years={};txs.forEach(t=>{const k=t.date.slice(0,4);(years[k]=years[k]||[]).push(t)}); const keys=Object.keys(years).sort().reverse(); document.getElementById('year-sel').innerHTML=keys.map((k,i)=>`<button class="p-btn${i===0?' active':''}" onclick="selYear('${k}',this)">${k}</button>`).join(''); if(keys.length)showYear(keys[0]); }
window.selYear=function(k,btn){document.querySelectorAll('#year-sel .p-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showYear(k)};
function showYear(k){ const arr=txs.filter(t=>t.date.startsWith(k)).sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('year-sum'),arr); renderList(document.getElementById('year-body'),arr); const MNTHS=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'], inc=new Array(12).fill(0),exp=new Array(12).fill(0); arr.forEach(t=>{const m=new Date(t.date).getMonth();if(t.type==='income')inc[m]+=t.amount;else exp[m]+=t.amount}); mkChart('chartYear',MNTHS,inc,exp); }
window.renderAll=function(){ const tf=document.getElementById('flt-type').value, s=(document.getElementById('flt-search').value||'').toLowerCase(); let arr=[...txs]; if(tf)arr=arr.filter(t=>t.type===tf); if(s)arr=arr.filter(t=>t.note.toLowerCase().includes(s)||t.category.toLowerCase().includes(s)); arr.sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('all-sum'),arr); renderList(document.getElementById('all-body'),arr); };

function refreshAll(){ 
  renderMetrics(); 
  renderList(document.getElementById('recent-list'), txs.slice(0,8)); 
  if(activePage==='harian')renderDaily(); 
  if(activePage==='mingguan')renderWeekly(); 
  if(activePage==='bulanan')renderMonthly(); 
  if(activePage==='tahunan')renderYearly(); 
  if(activePage==='riwayat')renderAll(); 
}

document.getElementById('pick-daily').value=nowISO().slice(0,10); document.getElementById('f-date').value=nowISO(); selType('income');

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
