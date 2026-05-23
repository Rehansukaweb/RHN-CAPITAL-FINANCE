<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Arus Keuangan — RHN CAPITAL</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
/* ==========================================================================
   TEMA ORIGINAL (GELAP PEKAT) DENGAN LAYOUT NEO-FINTECH MODERN
   ========================================================================== */
* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

:root {
  /* DARK MODE: ORIGINAL PITCH BLACK */
  --bg: #050505; 
  --bg2: #121215; 
  --bg3: #1A1A1F;
  --card: #121215;
  --border: #222228; 
  --border2: #33333E;
  --text: #FFFFFF; 
  --text2: #CCCCCC; 
  --text3: #888899;
  
  --gold: #FBBF24; 
  --gold2: #F59E0B; 
  --green2: #10B981; 
  --red2: #F87171;
  --blue: #3B82F6;
  --blue-title: #007BFF;
  
  --accent-glow: rgba(59, 130, 246, 0.4);
}

body.light-mode {
  --bg: #F8F9FA; 
  --bg2: #FFFFFF; 
  --bg3: #E9ECEF;
  --card: #FFFFFF; 
  --border: #DEE2E6; 
  --border2: #CED4DA;
  --text: #111111; 
  --text2: #444444; 
  --text3: #6C757D;
  --blue-title: #0056b3;
}

body {
  font-family: 'Outfit', sans-serif;
  background-color: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.5;
  height: 100vh;
  overflow: hidden;
  display: flex;
  transition: background-color 0.4s ease, color 0.4s ease;
}

/* =========================================
   LAYOUT APP (SIDEBAR + MAIN)
   ========================================= */
.app-container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.sidebar {
  width: 260px;
  background: var(--bg2);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  z-index: 50;
}

.main-content {
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  scroll-behavior: smooth;
  background-color: var(--bg);
}

/* Scrollbar Modern */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: var(--text3); }

/* SIDEBAR ELEMENTS */
.brand {
  padding: 24px;
  font-size: 20px;
  font-weight: 800;
  color: var(--blue-title);
  letter-spacing: -0.5px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand img { width: 32px; border-radius: 8px; border: 1px solid var(--gold2); padding: 1px;}

.user-profile {
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border);
}
.u-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--blue); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 16px; border: 1px solid var(--gold);
}
.u-info { flex: 1; overflow: hidden; }
.u-name { font-weight: 700; font-size: 15px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--text); }
.u-status { font-size: 11px; color: var(--text3); display: flex; align-items: center; gap: 4px; margin-top: 2px;}
.sync-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--text3); }

.nav-links { padding: 16px; flex: 1; display: flex; flex-direction: column; gap: 4px; overflow-y: auto; }
.nav-item {
  padding: 12px 16px;
  border-radius: 12px;
  color: var(--text3);
  font-weight: 600; font-size: 13px;
  cursor: pointer; transition: 0.2s;
  display: flex; align-items: center; justify-content: space-between;
}
.nav-item:hover { background: var(--bg3); color: var(--text); }
.nav-item.active { background: var(--blue); color: #fff; box-shadow: 0 4px 12px var(--accent-glow); }

.sidebar-footer { padding: 16px; border-top: 1px solid var(--border); display: flex; flex-direction: column; gap: 8px; overflow-y: auto; max-height: 250px;}
.btn-outline {
  width: 100%; padding: 10px; border-radius: 10px;
  border: 1px solid var(--border); background: transparent;
  color: var(--text2); font-weight: 600; font-size: 11px; cursor: pointer; transition: 0.2s;
  text-transform: uppercase; letter-spacing: 0.5px;
}
.btn-outline:hover { background: var(--bg3); color: var(--text); }

/* TOP HEADER (MAIN CONTENT) */
.top-header {
  padding: 16px 24px;
  display: flex; justify-content: space-between; align-items: center;
  position: sticky; top: 0; background: rgba(5, 5, 5, 0.85);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  z-index: 10; border-bottom: 1px solid var(--border);
}
body.light-mode .top-header { background: rgba(248, 249, 250, 0.85); }

.usd-pill {
  font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px;
  background: var(--bg3); padding: 6px 12px; border-radius: 20px; border: 1px solid var(--border);
  color: var(--text);
}

/* PAGES CONTAINER */
.page { display: none; padding: 24px; animation: fadeUp 0.4s ease; max-width: 1200px; margin: 0 auto; }
.page.active { display: block; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

/* =========================================
   DASHBOARD HERO & METRICS
   ========================================= */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.card {
  background: var(--card);
  border-radius: 24px;
  padding: 24px;
  border: 1px solid var(--border);
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

/* Hero Balance */
.col-hero { grid-column: span 12; }
.hero-balance-wrapper { display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: space-between; }
.hb-label { font-size: 12px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
.hb-val { font-family: 'JetBrains Mono', monospace; font-size: 42px; font-weight: 800; line-height: 1; margin-bottom: 8px; letter-spacing: -1px; color: var(--text); }
.hb-usd { font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--text3); font-weight: 600; }

.hero-stats { display: flex; gap: 16px; flex: 1; min-width: 300px; justify-content: flex-end; }
.hs-box { padding: 16px 20px; border-radius: 16px; flex: 1; max-width: 200px; display: flex; align-items: center; gap: 12px; background: var(--bg3); border: 1px solid var(--border); }
.hs-icon { width: 36px; height: 36px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800; }
.inc .hs-icon { background: var(--green2); color: #fff; }
.exp .hs-icon { background: var(--red2); color: #fff; }
.hs-l { font-size: 11px; font-weight: 600; color: var(--text3); text-transform: uppercase; }
.hs-v { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 700; color: var(--text); margin-top: 2px;}

/* Form Transaksi */
/* SOLUSI RENGGANG KOSONG: align-self: start; membuat form tidak memanjang ke bawah mengikuti riwayat */
.col-form { grid-column: span 5; align-self: start; } 
.col-history { grid-column: span 7; }

.modern-form .card-title { font-size: 18px; font-weight: 700; margin-bottom: 20px; color: var(--text); }
.type-switcher { display: flex; background: var(--bg3); border-radius: 16px; padding: 4px; margin-bottom: 24px; }
.ts-btn { flex: 1; padding: 12px; font-weight: 700; font-size: 13px; border: none; background: transparent; color: var(--text3); border-radius: 12px; cursor: pointer; transition: 0.3s; }
.ts-btn.income.active { background: var(--green2); color: #fff; box-shadow: 0 4px 12px rgba(16,185,129,0.3); }
.ts-btn.expense.active { background: var(--red2); color: #fff; box-shadow: 0 4px 12px rgba(239,68,68,0.3); }

/* Input Uang Raksasa */
.giant-input-wrap { text-align: center; margin-bottom: 24px; padding: 24px 0; border-bottom: 1px dashed var(--border); }
.giant-input-wrap label { font-size: 11px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 12px; }
.giant-input { 
  width: 100%; text-align: center; font-family: 'JetBrains Mono', monospace; 
  font-size: 40px; font-weight: 800; color: var(--text); 
  background: transparent; border: none; outline: none;
}
.giant-input::placeholder { color: var(--border2); }

/* Input Biasa */
.m-input {
  width: 100%; padding: 16px; background: var(--bg3); border: 1px solid var(--border);
  border-radius: 16px; color: var(--text); font-family: 'Outfit', sans-serif; font-size: 14px;
  outline: none; transition: 0.2s; margin-bottom: 16px;
}
.m-input:focus { border-color: var(--blue); }
select.m-input { appearance: none; background-image: url('data:image/svg+xml;utf8,<svg fill="%23888899" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>'); background-repeat: no-repeat; background-position: right 16px center; cursor: pointer;}
select.m-input option { background: var(--card); color: var(--text); }
textarea.m-input { height: 100px; resize: none; }

.btn-primary {
  width: 100%; padding: 18px; background: var(--blue); color: #fff;
  border: none; border-radius: 16px; font-size: 14px; font-weight: 800;
  cursor: pointer; transition: 0.3s; text-transform: uppercase; letter-spacing: 0.5px;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px var(--accent-glow); }

/* LIST TRANSAKSI (STYLE LAMA KOTAK PANJANG & TOMBOL HAPUS BAGUS) */
.list-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.list-wrap { padding: 8px 0; }
.recent-item {
  padding: 16px; margin-bottom: 12px; border-radius: 16px; 
  background: var(--bg2); border: 1px solid var(--border); 
  display: flex; align-items: center; justify-content: space-between; transition: transform 0.2s;
}
.recent-item:hover { transform: translateY(-2px); border-color: var(--border2); }
.ri-icon {
  width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
  font-size: 18px; font-weight: 800; background: var(--bg3); margin-right: 12px; flex-shrink: 0;
}
.ri-icon.inc { color: var(--green2); } .ri-icon.exp { color: var(--red2); }
.ri-left { display: flex; align-items: center; flex: 1; }

.ri-note { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 2px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; line-height: 1.4; }
.ri-meta { font-size: 11px; font-weight: 500; color: var(--text3); }
.cat-badge { font-size: 9px; font-weight: 600; padding: 2px 6px; border-radius: 6px; background: var(--bg); border: 1px solid var(--border); color: var(--text3); text-transform: uppercase; display: inline-block; white-space: nowrap; }

.ri-right-wrap { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; flex-shrink: 0; margin-left: 12px; }
.ri-amounts-col { display: flex; flex-direction: column; align-items: flex-end; }
.ri-amount { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 800; white-space: nowrap; color: var(--text); }
.ri-usd { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; color: var(--text3); margin-top: 2px; }
.del-btn-recent { 
  background: transparent; border: 1px solid var(--red2); color: var(--red2); 
  font-size: 10px; font-weight: 700; cursor: pointer; text-transform: uppercase; 
  padding: 4px 10px; border-radius: 8px; transition: 0.2s; margin-top: 4px;
}
.del-btn-recent:hover { background: var(--red2); color: #fff; }


/* LAYOUT LAPORAN / SUMMARY GRID */
.sum-grid-new { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
.sg-card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 20px; text-align: center; }
.sg-label { font-size: 11px; font-weight: 700; color: var(--text3); text-transform: uppercase; margin-bottom: 8px; }
.sg-val { font-family: 'JetBrains Mono', monospace; font-size: 24px; font-weight: 800; color: var(--text); }
.sg-card.inc .sg-val { color: var(--green2); }

/* AUTH SCREEN */
#auth-screen { position: fixed; inset: 0; background: var(--bg); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.auth-box { background: var(--card); border-radius: 32px; padding: 40px; width: 90%; max-width: 420px; border: 1px solid var(--border); text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
.auth-logo { width: 72px; border-radius: 20px; margin-bottom: 24px; border: 1px solid var(--border2); }

/* Kebutuhan filter bar dsb */
.period-bar { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; margin-bottom: 20px; }
.p-btn { padding: 12px 24px; border: 1px solid var(--border); border-radius: 100px; font-size: 12px; font-weight: 700; cursor: pointer; background: var(--card); color: var(--text3); white-space: nowrap; }
.p-btn.active { background: var(--text); color: var(--bg); border-color: var(--text); }

/* =========================================
   MOBILE RESPONSIVE (100% GAYA M-BANKING)
   ========================================= */
@media (max-width: 900px) {
  .app-container { flex-direction: column; }
  .sidebar { display: none; }
  
  .top-header { padding: 12px 16px; }
  .page { padding: 16px; padding-bottom: 100px; }
  
  .col-hero, .col-form, .col-history { grid-column: span 12; }
  .hero-balance-wrapper { flex-direction: column; align-items: flex-start; }
  .hero-stats { width: 100%; }
  
  .sum-grid-new { grid-template-columns: 1fr; gap: 12px; }
  
  .giant-input { font-size: 32px; }
  
  .recent-item { padding: 16px; flex-direction: row; justify-content: space-between; }
  .ri-right-wrap { margin-left: 0; align-items: flex-end; }
  
  /* MOBILE BOTTOM NAV SEBAGAI GANTI SIDEBAR */
  .mobile-bottom-nav {
    position: fixed; bottom: 0; left: 0; right: 0;
    background: rgba(18, 18, 21, 0.95); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
    border-top: 1px solid var(--border); display: flex; padding: 8px 16px 20px; z-index: 100;
    justify-content: space-between;
  }
  body.light-mode .mobile-bottom-nav { background: rgba(255, 255, 255, 0.95); }
  
  .mb-nav-item {
    flex: 1; text-align: center; padding: 8px; color: var(--text3);
    font-size: 10px; font-weight: 700; text-transform: uppercase; cursor: pointer; border-radius: 12px;
  }
  .mb-nav-item.active { color: var(--blue); background: var(--bg3); }
  .mb-nav-icon { font-size: 20px; display: block; margin-bottom: 4px; }
}

@media (min-width: 901px) {
  .mobile-bottom-nav { display: none; }
}
</style>
</head>
<body>

<div id="auth-screen">
  <div class="auth-box">
    <img src="RHN LOGO.jpg" alt="Logo" class="auth-logo" onerror="this.style.display='none'">
    <h1 style="font-size: 24px; font-weight: 800; margin-bottom: 8px; color: var(--text);">RHN CAPITAL</h1>
    <p style="color: var(--text3); font-size: 13px; margin-bottom: 32px;">Sistem Manajemen Arus Keuangan</p>
    
    <div class="type-switcher" style="margin-bottom: 24px;">
      <button class="ts-btn income active" id="tab-login" onclick="switchTab('login')">Masuk</button>
      <button class="ts-btn expense" id="tab-register" onclick="switchTab('register')">Daftar</button>
    </div>
    
    <div id="auth-err" style="color:var(--red2); font-size:12px; margin-bottom:16px; display:none;"></div>
    <input type="email" id="auth-email" class="m-input" placeholder="Alamat Email">
    <input type="password" id="auth-pass" class="m-input" placeholder="Kata Sandi" onkeydown="if(event.key==='Enter')doAuth()">
    <div id="field-confirm" style="display:none"><input type="password" id="auth-pass2" class="m-input" placeholder="Ulangi Kata Sandi"></div>
    <button class="btn-primary" id="auth-submit-btn" onclick="doAuth()" style="margin-top: 8px;">AKSES MASUK</button>
  </div>
</div>

<div id="app-screen" class="app-container" style="display: none;">
  
  <aside class="sidebar">
    <div class="brand">
      <img src="RHN LOGO.jpg" alt="Logo" onerror="this.style.display='none'">
      RHN CAPITAL
    </div>
    <div class="user-profile">
      <div class="u-avatar" id="user-avatar">?</div>
      <div class="u-info">
        <div class="u-name" id="user-name">Memuat...</div>
        <div class="u-status">
          <div class="sync-dot" id="sync-dot"></div>
          <span id="sync-label">Sinkronisasi</span>
        </div>
      </div>
    </div>
    <nav class="nav-links">
      <div class="nav-item active" onclick="switchPage('dashboard')">⌘ Dashboard</div>
      <div class="nav-item" onclick="switchPage('harian')">📅 Harian</div>
      <div class="nav-item" onclick="switchPage('mingguan')">📊 Mingguan</div>
      <div class="nav-item" onclick="switchPage('bulanan')">📈 Bulanan</div>
      <div class="nav-item" onclick="switchPage('tahunan')">🏆 Tahunan</div>
      <div class="nav-item" onclick="switchPage('riwayat')">🕒 Semua Riwayat</div>
    </nav>
    <div class="sidebar-footer">
      <button class="btn-outline" onclick="window.location.href='latar.html'">↗ Web RHN Capital</button>
      <button class="btn-outline" onclick="window.location.href='jurnal.html'">↗ Jurnal Forex</button>
      <button class="btn-outline" onclick="window.location.href='aset.html'">↗ Jurnal Aset</button>
      <button class="btn-outline" onclick="window.location.href='data.html'">↗ Data Pribadi</button>
      <button class="btn-outline" onclick="toggleTheme()" id="theme-toggle">🌙 Mode Gelap/Terang</button>
      <button class="btn-outline" onclick="doLogout()" style="color: var(--red2); border-color: rgba(248, 113, 113, 0.3);">Keluar</button>
    </div>
  </aside>

  <main class="main-content">
    
    <header class="top-header">
      <div style="font-weight: 700; font-size: 18px; color: var(--text);" id="mobile-page-title">Dashboard</div>
      <div class="usd-pill" id="usd-rate-val">Memuat Kurs...</div>
    </header>

    <div id="page-dashboard" class="page active">
      <div class="bento-grid">
        
        <div class="card col-hero" id="metric-cards">
           </div>

        <div class="card col-form modern-form">
          <div class="card-title">Catat Transaksi</div>
          <div class="type-switcher">
            <button class="ts-btn income active" id="btn-inc" onclick="selType('income')">Pemasukan</button>
            <button class="ts-btn expense" id="btn-exp" onclick="selType('expense')">Pengeluaran</button>
          </div>
          
          <div class="giant-input-wrap">
            <label>Jumlah Nominal (IDR)</label>
            <input type="number" id="f-amount" class="giant-input" placeholder="0">
          </div>
          
          <select id="f-cat" class="m-input"></select>
          <input type="text" id="f-note" class="m-input" placeholder="Keterangan singkat...">
          <input type="datetime-local" id="f-date" class="m-input">
          
          <button class="btn-primary" id="save-btn" onclick="addTx()">SIMPAN TRANSAKSI</button>
        </div>

        <div class="card col-history">
          <div class="list-header">
            <div class="card-title" style="margin: 0;">Aktivitas Terakhir</div>
            <button class="btn-outline" style="width: auto; padding: 6px 12px; border-radius: 8px;" onclick="switchPage('riwayat')">Lihat Semua</button>
          </div>
          <div id="recent-list" class="list-wrap"></div>
        </div>

      </div>
    </div>

    <div id="page-harian" class="page">
      <input type="date" id="pick-daily" onchange="renderDaily()" class="m-input" style="max-width: 250px; margin-bottom: 24px;">
      <div class="sum-grid-new" id="daily-sum"></div>
      <div class="card"><div id="daily-body" class="list-wrap"></div></div>
    </div>

    <div id="page-mingguan" class="page">
      <div class="period-bar" id="week-sel"></div>
      <div class="sum-grid-new" id="week-sum"></div>
      <div class="card" style="margin-bottom: 20px;"><div style="height:250px"><canvas id="chartWeek"></canvas></div></div>
      <div class="card"><div id="week-body" class="list-wrap"></div></div>
    </div>

    <div id="page-bulanan" class="page">
      <div class="period-bar" id="month-sel"></div>
      <div class="sum-grid-new" id="month-sum"></div>
      <div class="card" style="margin-bottom: 20px;"><div style="height:250px"><canvas id="chartMonth"></canvas></div></div>
      <div class="card"><div id="month-body" class="list-wrap"></div></div>
    </div>

    <div id="page-tahunan" class="page">
      <div class="period-bar" id="year-sel"></div>
      <div class="sum-grid-new" id="year-sum"></div>
      <div class="card" style="margin-bottom: 20px;"><div style="height:250px"><canvas id="chartYear"></canvas></div></div>
      <div class="card"><div id="year-body" class="list-wrap"></div></div>
    </div>

    <div id="page-riwayat" class="page">
      <div class="sum-grid-new" id="all-sum"></div>
      <div class="card" style="margin-bottom: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <select id="flt-type" class="m-input" style="margin: 0; min-width: 200px; flex: 1;" onchange="renderAll()">
          <option value="">Semua Filter</option>
          <option value="income">Pemasukan Saja</option>
          <option value="expense">Pengeluaran Saja</option>
        </select>
        <input type="text" id="flt-search" class="m-input" style="margin: 0; flex: 2; min-width: 250px;" placeholder="Cari berdasarkan keterangan atau kategori..." oninput="renderAll()">
      </div>
      <div class="card"><div id="all-body" class="list-wrap"></div></div>
    </div>

  </main>
  
  <nav class="mobile-bottom-nav">
    <div class="mb-nav-item active" onclick="switchPage('dashboard')"><span class="mb-nav-icon">⌘</span>Beranda</div>
    <div class="mb-nav-item" onclick="switchPage('harian')"><span class="mb-nav-icon">📅</span>Harian</div>
    <div class="mb-nav-item" onclick="switchPage('bulanan')"><span class="mb-nav-icon">📊</span>Laporan</div>
    <div class="mb-nav-item" onclick="switchPage('riwayat')"><span class="mb-nav-icon">🕒</span>Riwayat</div>
  </nav>

</div>

<script type="module">
window.toggleTheme = function() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  refreshAll(); 
};
if(localStorage.getItem('theme') === 'light') { document.body.classList.add('light-mode'); }

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
function setLoading(on){ document.getElementById('auth-submit-btn').disabled=on; document.getElementById('auth-submit-btn').textContent=on?'Memproses...':(authMode==='login'?'AKSES MASUK':'DAFTAR'); }
function setSyncStatus(ok){ document.getElementById('sync-dot').style.background=ok?'var(--green2)':'var(--red2)'; document.getElementById('sync-label').textContent=ok?'Terhubung':'Offline'; document.getElementById('sync-dot').style.boxShadow = ok ? '0 0 8px var(--green2)' : 'none'; }

window.switchTab=function(mode){ authMode=mode; document.getElementById('tab-login').classList.toggle('active',mode==='login'); document.getElementById('tab-register').classList.toggle('active',mode==='register'); document.getElementById('field-confirm').style.display=mode==='register'?'block':'none'; document.getElementById('auth-submit-btn').textContent=mode==='login'?'AKSES MASUK':'DAFTAR'; hideErr(); };
window.doAuth=async function(){ const email=document.getElementById('auth-email').value.trim(), pass=document.getElementById('auth-pass').value; hideErr(); if(!email||!pass)return showErr('Kredensial kosong.'); setLoading(true); try{ if(authMode==='login') await signInWithEmailAndPassword(auth,email,pass); else { if(pass!==document.getElementById('auth-pass2').value)return showErr('Sandi beda.'); await createUserWithEmailAndPassword(auth,email,pass); } } catch(e){ showErr(e.message); setLoading(false); } };
window.doLogout=async function(){ if(unsubListener){unsubListener();unsubListener=null;} txs=[]; await signOut(auth); };

onAuthStateChanged(auth,user=>{
  if(user){ currentUser=user; document.getElementById('auth-screen').style.display='none'; document.getElementById('app-screen').style.display='flex'; setLoading(false); const name=user.displayName||user.email.split('@')[0]; document.getElementById('user-name').textContent=name; document.getElementById('user-avatar').textContent=name.charAt(0).toUpperCase(); listenTransactions(user.uid); }
  else { currentUser=null; document.getElementById('auth-screen').style.display='flex'; document.getElementById('app-screen').style.display='none'; if(unsubListener){unsubListener();unsubListener=null;} txs=[]; }
});

function listenTransactions(uid){ if(unsubListener)unsubListener(); unsubListener=onSnapshot(query(collection(db,'users',uid,'transactions'),orderBy('createdAt','desc')), snap=>{txs=snap.docs.map(d=>({id:d.id,...d.data()}));setSyncStatus(true);refreshAll();}, err=>{console.error(err);setSyncStatus(false);} ); }

window.addTx=async function(){ if(!currentUser)return; const amt=parseFloat(document.getElementById('f-amount').value), cat=document.getElementById('f-cat').value, note=document.getElementById('f-note').value.trim(), dt=document.getElementById('f-date').value; if(!amt||!cat)return alert('Isi data yang lengkap.'); document.getElementById('save-btn').textContent='...'; try{ await addDoc(collection(db,'users',currentUser.uid,'transactions'),{type:curType,amount:amt,category:cat,note:note||'-',date:dt||nowISO(),createdAt:serverTimestamp()}); document.getElementById('f-amount').value=''; document.getElementById('f-note').value=''; } catch(e){alert(e.message);} document.getElementById('save-btn').textContent='SIMPAN TRANSAKSI'; };

window.delTx=async function(id){ if(!currentUser||!confirm('Yakin mau hapus riwayat ini?'))return; await deleteDoc(doc(db,'users',currentUser.uid,'transactions',id)); };

window.selType=function(t){ curType=t; document.getElementById('btn-inc').classList.toggle('active',t==='income'); document.getElementById('btn-exp').classList.toggle('active',t==='expense'); const s=document.getElementById('f-cat'); s.innerHTML='<option value="">Pilih kategori...</option>'; CATS[t].forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;s.appendChild(o)}); };

window.switchPage=function(p){ 
  document.querySelectorAll('.page').forEach(el=>el.classList.remove('active')); 
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('active')); 
  document.querySelectorAll('.mb-nav-item').forEach(el=>el.classList.remove('active'));
  
  document.getElementById('page-'+p).classList.add('active'); 
  
  const titles = { 'dashboard':'Dashboard', 'harian':'Laporan Harian', 'mingguan':'Laporan Mingguan', 'bulanan':'Laporan Bulanan', 'tahunan':'Laporan Tahunan', 'riwayat':'Semua Riwayat' };
  document.getElementById('mobile-page-title').textContent = titles[p];

  const navItems = document.querySelectorAll('.nav-item');
  const mbNavItems = document.querySelectorAll('.mb-nav-item');
  
  const pages=['dashboard','harian','mingguan','bulanan','tahunan','riwayat']; 
  const idx = pages.indexOf(p);
  if(navItems[idx]) navItems[idx].classList.add('active');
  
  if(p==='dashboard') mbNavItems[0].classList.add('active');
  else if(p==='harian') mbNavItems[1].classList.add('active');
  else if(p==='mingguan' || p==='bulanan' || p==='tahunan') mbNavItems[2].classList.add('active');
  else if(p==='riwayat') mbNavItems[3].classList.add('active');

  activePage=p; refreshAll(); 
};

function calcSum(arr){ const inc=arr.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0), exp=arr.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0); return{inc,exp,bal:inc-exp,count:arr.length}; }

function renderSumGrid(el,arr){ 
  const s=calcSum(arr); 
  el.innerHTML=`
    <div class="sg-card inc">
      <div class="sg-label">Pemasukan</div>
      <div class="sg-val">${fmt(s.inc)}</div>
    </div>
    <div class="sg-card">
      <div class="sg-label">Pengeluaran</div>
      <div class="sg-val" style="color:var(--red2);">${fmt(s.exp)}</div>
    </div>
    <div class="sg-card">
      <div class="sg-label">Saldo Bersih</div>
      <div class="sg-val" style="color:${s.bal>=0?'var(--text)':'var(--red2)'}">${fmt(s.bal)}</div>
    </div>
  `; 
}

// FORMAT KOTAK PANJANG ORIGINAL + TOMBOL HAPUS BAGUS
const createTxCard = (t) => `
<div class="recent-item">
  <div class="ri-left">
    <div class="ri-icon ${t.type}">${t.type==='income'?'↑':'↓'}</div>
    <div>
      <div class="ri-note">${t.note} <span class="cat-badge">${t.category}</span></div>
      <div class="ri-meta">${fmtDate(t.date)} · ${fmtTime(t.date)}</div>
    </div>
  </div>
  <div class="ri-right-wrap">
    <div class="ri-amounts-col">
      <div class="ri-amount">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div>
      <div class="ri-usd">${getUSD(t.amount)}</div>
    </div>
    <button class="del-btn-recent" onclick="delTx('${t.id}')">HAPUS</button>
  </div>
</div>`;

function renderList(container, arr) { container.innerHTML = arr.length ? arr.map(t => createTxCard(t)).join('') : '<div style="padding:40px;text-align:center;color:var(--text3);font-size:13px;">Belum ada data transaksi.</div>'; }

function renderMetrics(){
  const s=calcSum(txs);
  document.getElementById('metric-cards').innerHTML=`
    <div class="hero-balance-wrapper">
      <div>
        <div class="hb-label">TOTAL SALDO BERSIH</div>
        <div class="hb-val">${fmt(s.bal)}</div>
        <div class="hb-usd">${getUSD(s.bal)} USD</div>
      </div>
      <div class="hero-stats">
        <div class="hs-box inc">
          <div class="hs-icon">↙</div>
          <div><div class="hs-l">Pemasukan</div><div class="hs-v">${fmt(s.inc)}</div></div>
        </div>
        <div class="hs-box exp">
          <div class="hs-icon">↗</div>
          <div><div class="hs-l">Pengeluaran</div><div class="hs-v">${fmt(s.exp)}</div></div>
        </div>
      </div>
    </div>
  `;
}

function mkChart(id,labels,incData,expData){ if(charts[id]) charts[id].destroy(); const c=document.getElementById(id); if(!c)return; const isLight = document.body.classList.contains('light-mode'); charts[id]=new Chart(c,{type:'bar',data:{labels,datasets:[{label:'Pemasukan',data:incData,backgroundColor:isLight?'#10B981':'#10B981',borderRadius:4},{label:'Pengeluaran',data:expData,backgroundColor:isLight?'#F87171':'#F87171',borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:isLight?'#6C757D':'#888899',font:{size:10,family:"'Outfit'"}},grid:{display:false},border:{display:false}},y:{ticks:{color:isLight?'#6C757D':'#888899',font:{size:10},callback:v=>Intl.NumberFormat('id-ID',{notation:'compact'}).format(v)},grid:{color:isLight?'#DEE2E6':'#222228',drawBorder:false},border:{display:false}}}}}); }

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

document.getElementById('pick-daily').value=nowISO().slice(0,10); 
document.getElementById('f-date').value=nowISO(); 
selType('income');
</script>
</body>
</html>
