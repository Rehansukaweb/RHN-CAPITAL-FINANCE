<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="color-scheme" content="dark light">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Arus Keuangan — RHN CAPITAL</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
/* ==========================================================================
   TEMA ORIGINAL (GELAP PEKAT) + TEKS NOMINAL PUTIH ELEGAN
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
  
  --shadow-float: 0 12px 32px rgba(0,0,0,0.5);
  --radius: 16px; 
}

body.light-mode {
  --bg: #F8F9FA; --bg2: #FFFFFF; --bg3: #E9ECEF;
  --card: #FFFFFF; --border: #DEE2E6; --border2: #CED4DA;
  --text: #111111; --text2: #444444; --text3: #6C757D;
  --blue-title: #0056b3;
}

body {
  font-family: 'Outfit', sans-serif;
  background-color: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.5;
  min-height: 100vh;
  overflow-x: hidden;
  transition: background-color 0.4s ease, color 0.4s ease;
}

/* TOP TEXT & EXTERNAL LINKS */
.top-title {
  color: var(--blue-title); font-size: 22px; font-weight: 800;
  padding: 16px 24px 8px; letter-spacing: -0.5px;
}
.top-ext-links {
  display: flex; gap: 16px; padding: 0 24px 16px;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap; align-items: center; justify-content: flex-start;
}
.nav-ext-btn {
  background: transparent; border: none; color: var(--gold);
  font-weight: 700; font-size: 11px; font-family: 'Outfit', sans-serif;
  cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;
}
.nav-ext-btn:hover { color: var(--text); }

/* HEADER (Logo, USD, Sinkron, User) */
.header-area { padding: 20px 24px; }
.logo-row { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.logo-img { width: 44px; height: 44px; border-radius: 12px; border: 1px solid var(--gold2); padding: 2px; }
.logo-img img { width: 100%; height: 100%; border-radius: 8px; object-fit: cover; }
.logo-text .main-text { font-size: 18px; font-weight: 800; color: var(--text); letter-spacing: 0.5px; }
.logo-text .sub-text { font-size: 10px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 1px; }

.status-row { display: flex; gap: 12px; margin-bottom: 20px; }
.status-pill {
  background: var(--bg2); border: 1px solid var(--border); border-radius: 12px;
  padding: 8px 16px; display: flex; align-items: center; justify-content: center; gap: 8px;
}
.usd-val { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: var(--text); }
.sync-dot { width: 8px; height: 8px; border-radius: 50%; box-shadow: 0 0 8px currentColor; }
.sync-text { font-size: 10px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 1px; }

/* ROW USER (BULAN, AVATAR, KELUAR) */
.user-row { display: flex; align-items: center; gap: 12px; position: relative; width: 100%; }
.theme-btn {
  background: var(--bg2); border: 1px solid var(--border); color: var(--gold);
  width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
  font-size: 16px; cursor: pointer; flex-shrink: 0; transition: 0.3s;
}
.theme-btn:hover { background: var(--bg3); }
.user-pill {
  flex: 1; background: var(--bg2); border: 1px solid var(--border); border-radius: 12px;
  padding: 4px 12px 4px 4px; display: flex; align-items: center; justify-content: space-between;
}
.user-pill-left { display: flex; align-items: center; gap: 10px; }
.u-avatar {
  width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--gold);
  display: flex; align-items: center; justify-content: center; color: var(--gold); font-weight: 700; font-size: 12px;
}
.u-name { font-size: 12px; font-weight: 600; color: var(--text); }
.logout-btn {
  background: transparent; border: 1px solid var(--border2); color: var(--text3);
  padding: 6px 12px; border-radius: 8px; font-size: 10px; font-weight: 700; cursor: pointer; text-transform: uppercase;
}

/* NAVIGATION TABS */
.nav {
  padding: 0 24px 24px; display: flex; gap: 12px;
  overflow-x: auto; scrollbar-width: none; white-space: nowrap;
}
.nav::-webkit-scrollbar { display: none; }
.nav-btn {
  padding: 10px 20px; font-size: 11px; font-weight: 700; color: var(--text3);
  border: 1px solid var(--border); border-radius: 100px; background: transparent;
  cursor: pointer; transition: 0.3s; text-transform: uppercase; letter-spacing: 0.5px;
}
.nav-btn.active { background: var(--text); color: var(--bg); border-color: var(--text); }

/* MAIN CONTENT */
.main { padding: 0 24px 80px; max-width: 1400px; margin: 0 auto; }
.page { display: none; animation: fadeIn 0.4s ease; } .page.active { display: block; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* METRICS GRID & CARDS */
.metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
.m-card { background: var(--card); border-radius: var(--radius); padding: 16px; border: 1px solid var(--border); display: flex; flex-direction: column; }
.m-label { font-size: 9px; font-weight: 800; text-transform: uppercase; color: var(--text3); margin-bottom: 8px; letter-spacing: 0.5px; }
.m-val { font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 800; margin-bottom: 4px; white-space: nowrap; color: var(--text); }

.usd-pill {
  display: inline-block; background: var(--bg3); color: var(--text3);
  font-size: 10px; font-family: 'JetBrains Mono', monospace; font-weight: 600;
  padding: 2px 8px; border-radius: 6px; align-self: flex-start; margin-bottom: 8px;
}
.m-sub { font-size: 10px; font-weight: 500; color: var(--text3); margin-bottom: 12px; flex-grow: 1; }
.m-bar { height: 4px; background: var(--bg3); border-radius: 2px; width: 100%; overflow: hidden; }
.m-bar-fill { height: 100%; border-radius: 2px; transition: width 0.6s ease; }
.inc .m-bar-fill { background: var(--green2); } .exp .m-bar-fill { background: var(--red2); }
.bal .m-bar-fill { background: var(--border2); } .cnt .m-bar-fill { background: var(--blue); }

/* SUMMARY GRID */
.sum-grid { display: grid; gap: 16px; margin-bottom: 24px; }

/* FORMS */
.card { background: var(--card); border-radius: var(--radius); padding: 24px; border: 1px solid var(--border); margin-bottom: 24px; }
.card-head { margin-bottom: 16px; }
.card-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.card-sub { font-size: 12px; color: var(--text3); }

/* KOTAK SUARA */
.voice-wrapper {
  background: var(--bg3); padding: 16px; border-radius: 12px; margin-bottom: 20px; border: 1px dashed var(--border2); text-align: center;
}

.type-toggle { display: flex; background: var(--bg3); border-radius: 12px; padding: 4px; margin-bottom: 20px; }
.t-btn { flex: 1; padding: 12px; border: none; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; background: transparent; color: var(--text3); transition: 0.2s; }
.t-btn.income.active { background: var(--bg2); color: var(--green2); }
.t-btn.expense.active { background: var(--bg2); color: var(--text); }

.f-input-dark {
  width: 100%; padding: 16px; border-radius: 12px; border: 1px solid var(--border);
  background-color: var(--bg2) !important; color: var(--text) !important;
  outline: none; font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 500;
  appearance: none; -webkit-appearance: none; transition: border-color 0.3s;
}
.f-input-dark:focus { border-color: var(--gold); }
.f-input-dark::placeholder { color: var(--text3); }
select.f-input-dark {
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23888899" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px; cursor: pointer;
}
select.f-input-dark option { background: var(--card); color: var(--text); }

.form-row { margin-bottom: 16px; }
.form-label { font-size: 10px; font-weight: 800; color: var(--text3); margin-bottom: 8px; display: block; text-transform: uppercase; letter-spacing: 0.5px; }
.form-row textarea { height: 100px; resize: none; }
.submit-btn { width: 100%; padding: 16px; background: var(--text); color: var(--bg); border: none; border-radius: 12px; font-size: 13px; font-weight: 800; cursor: pointer; transition: 0.2s; text-transform: uppercase; margin-top: 8px; }

/* HISTORY CARDS */
.list-wrap { padding: 8px 0; }
.recent-item {
  padding: 16px; margin-bottom: 12px; border-radius: 16px; 
  background: var(--bg2); border: 1px solid var(--border); 
  display: flex; align-items: center; justify-content: space-between;
}
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
.del-btn-recent { background: transparent; border: none; color: var(--red2); font-size: 11px; font-weight: 700; cursor: pointer; text-transform: uppercase; margin-top: 4px; }

/* CHART & FILTERS BAR */
.chart-wrap { margin-bottom: 24px; }
.chart-legend { display: flex; gap: 16px; margin-bottom: 16px; justify-content: center; }
.leg-item { display: flex; align-items: center; gap: 8px; font-size: 10px; font-weight: 700; color: var(--text3); text-transform: uppercase; }
.leg-dot { width: 10px; height: 10px; border-radius: 2px; }

/* Period Bar (Mingguan, Bulanan) */
.period-bar { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; margin-bottom: 20px; padding-bottom: 8px; }
.p-btn { padding: 10px 20px; border: 1px solid var(--border); border-radius: 100px; font-size: 11px; font-weight: 700; cursor: pointer; background: var(--bg2); color: var(--text3); white-space: nowrap; }
.p-btn.active { border-color: var(--text); color: var(--text); background: var(--bg); }

/* FILTER BAR RIWAYAT */
.filter-bar { display: flex; gap: 16px; width: 100%; margin-bottom: 24px; align-items: center; }
.filter-bar select.f-input-dark { width: 250px; flex-shrink: 0; }
.filter-bar input.f-input-dark { flex: 1; }

/* AUTH SCREEN */
#auth-screen { position: fixed; inset: 0; background: var(--bg); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.auth-box { background: var(--card); border-radius: 24px; padding: 40px 24px; width: 90%; max-width: 400px; border: 1px solid var(--border); text-align: center; }
.auth-box img { width: 64px; border-radius: 16px; margin-bottom: 16px; border: 1px solid var(--border2); }
.auth-title { font-size: 22px; font-weight: 800; color: var(--text); margin-bottom: 4px; }
.auth-sub { font-size: 12px; color: var(--text3); font-weight: 500; margin-bottom: 24px; }
.auth-tabs { display: flex; background: var(--bg3); border-radius: 12px; padding: 4px; margin-bottom: 24px; }
.auth-tab { flex: 1; padding: 12px; font-size: 12px; font-weight: 700; cursor: pointer; background: transparent; border: none; color: var(--text3); border-radius: 8px; }
.auth-tab.active { background: var(--bg2); color: var(--text); }
.auth-field input { width: 100%; padding: 16px; font-size: 14px; font-weight: 500; font-family: 'Outfit', sans-serif; border: 1px solid var(--border); border-radius: 12px; background: var(--bg2); color: var(--text); margin-bottom: 12px; outline: none; }
.auth-btn { width: 100%; padding: 16px; background: var(--text); color: var(--bg); border: none; border-radius: 12px; font-size: 13px; font-weight: 800; cursor: pointer; text-transform: uppercase; margin-top: 8px; }

/* ==========================================================================
   MOBILE RESPONSIVE (100% PERSIS BINANCE: FULL MENTOK LAYAR & BULET EMPUK)
   ========================================================================== */
@media (max-width: 768px) {
  .top-ext-links { justify-content: center; padding: 0 16px 16px; }
  .header-area { padding: 16px; }
  .status-row { flex-direction: row; }
  .status-pill { flex: 1; }
  .user-row { flex-direction: row; justify-content: flex-start; }
  .nav { padding: 0 16px 20px; }
  
  /* PENGHILANG JARAK SAMPING TOTAL BIAR MENTOK LAYAR */
  .main { padding: 0 0 80px 0 !important; width: 100%; overflow-x: hidden; }
  
  /* METRICS & SUMMARY: KOTAK BULET MEMANJANG, MENTOK KIRI KANAN */
  .metrics { 
    grid-template-columns: repeat(2, 1fr); 
    gap: 8px; 
    padding: 0 !important;
    margin: 0 !important;
    background: transparent; border: none; 
  }
  .metrics .m-card { border-radius: 24px !important; border-left: none; border-right: none; }
  
  .sum-grid { 
    grid-template-columns: repeat(2, 1fr); 
    gap: 8px; 
    padding: 0 !important;
    margin: 0 0 24px 0 !important; 
    background: transparent; border: none; 
  }
  .sum-grid .m-card { border-radius: 24px !important; border-left: none; border-right: none; }
  .sum-grid .m-card:nth-child(3) { grid-column: span 2; }

  /* BUNGKUSAN CARD TRANSPARAN (AGAR KONTEN BISA NYENTUH LAYAR) */
  .panel { display: flex; flex-direction: column; gap: 16px; background: transparent; }
  .card { padding: 16px 0 !important; border-radius: 0 !important; border: none !important; background: transparent !important; margin-bottom: 0; }
  
  /* Elemen form dan teks diberi margin agar tetap aman terbaca (tidak nabrak layar) */
  .card-head, .form-row, .filter-bar, .chart-wrap, .period-bar { padding-left: 16px !important; padding-right: 16px !important; }
  
  /* Biar filter & search bar berjejer ke bawah di HP */
  .filter-bar { flex-direction: column; } 
  
  /* PERBAIKAN PENTING: Lebar Kotak Suara Dibuat Sama Persis Dengan Form */
  .type-toggle, .submit-btn, .voice-wrapper { 
      width: calc(100% - 32px) !important; 
      margin-left: 16px !important; 
      margin-right: 16px !important; 
  }

  .filter-bar select.f-input-dark, .filter-bar input.f-input-dark { width: 100%; border-radius: 16px; }
  .f-input-dark { padding: 18px 16px; font-size: 15px; border-radius: 16px; }
  
  /* HISTORY ITEM (RIWAYAT TRANSAKSI): BULET MEMANJANG 100% MENTOK LAYAR */
  .list-wrap { padding: 0 !important; margin: 0 !important; width: 100%; }
  .recent-item { 
      width: 100% !important; 
      margin: 0 0 12px 0 !important; 
      padding: 16px 16px !important; 
      border-radius: 24px !important; 
      border-left: none !important; 
      border-right: none !important;
      background: var(--card); 
      flex-direction: row; 
      justify-content: space-between; 
      align-items: center; 
  }
  .ri-right-wrap { margin-left: 0; align-items: flex-end; }
  .del-btn-recent { margin-top: 6px; }
  .cat-badge { display: inline-block !important; }
}

/* ==========================================================================
   DESKTOP RESPONSIVE (LEBIH RAPI & TERSTRUKTUR GRID)
   ========================================================================== */
@media (min-width: 769px) {
  .metrics { grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .sum-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
  
  /* Form di kiri (380px), Riwayat di kanan sisa layarnya */
  .panel { 
    display: grid; 
    grid-template-columns: 380px 1fr; 
    gap: 24px; 
    align-items: start; 
  }

  /* Rapihin sedikit jarak pinggir biar elegan di layar gede */
  .main, .header-area, .nav, .top-ext-links, .top-title { 
    max-width: 1200px; 
    margin: 0 auto; 
  }
}
</style>
</head>
<body>

<div class="top-title">RHN-CAPITAL</div>
<div class="top-ext-links">
  <button class="nav-ext-btn" onclick="window.location.href='latar.html'">📈 HALAMAN RHN CAPITAL ↗</button>
  <button class="nav-ext-btn" onclick="window.location.href='jurnal.html'">📈 JURNAL FOREX ↗</button>
  <button class="nav-ext-btn" onclick="window.location.href='aset.html'">📈 JURNAL ASET ↗</button>
  <button class="nav-ext-btn" onclick="window.location.href='data.html'">📈 DATA PRIBADI ↗</button>
</div>

<div id="auth-screen">
  <div class="auth-box">
    <img src="RHN LOGO.jpg" alt="RHN Capital Logo">
    <div class="auth-title">RHN CAPITAL</div>
    <div class="auth-sub">Arus Keuangan Akses Masuk</div>
    <div class="auth-tabs">
      <button class="auth-tab active" id="tab-login" onclick="switchTab('login')">Masuk</button>
      <button class="auth-tab" id="tab-register" onclick="switchTab('register')">Daftar</button>
    </div>
    <div id="auth-err" style="color:var(--red2);font-size:12px;margin-bottom:12px;display:none;"></div>
    <div class="form-row"><input type="email" id="auth-email" class="f-input-dark" placeholder="Email"></div>
    <div class="form-row"><input type="password" id="auth-pass" class="f-input-dark" placeholder="Sandi" onkeydown="if(event.key==='Enter')doAuth()"></div>
    <div class="form-row" id="field-confirm" style="display:none"><input type="password" id="auth-pass2" class="f-input-dark" placeholder="Ulangi Sandi"></div>
    <button class="auth-btn" id="auth-submit-btn" onclick="doAuth()">MASUK</button>
  </div>
</div>

<div id="app-screen">
<div class="header-area">
  <div class="logo-row">
    <div class="logo-img"><img src="RHN LOGO.jpg" alt="Logo"></div>
    <div class="logo-text">
      <div class="main-text">RHN CAPITAL</div>
      <div class="sub-text">ARUS KEUANGAN</div>
    </div>
  </div>
  
  <div class="status-row">
    <div class="status-pill">
      <span class="usd-val" id="usd-rate-val">...</span>
    </div>
    <div class="status-pill">
      <span class="sync-dot" id="sync-dot" style="background:var(--text3);"></span>
      <span class="sync-text" id="sync-label">MENGHUBUNGKAN...</span>
    </div>
  </div>

  <div class="user-row">
    <button class="theme-btn" onclick="toggleTheme()" id="theme-toggle">🌙</button>
    <div class="user-pill">
      <div class="user-pill-left">
        <div class="u-avatar" id="user-avatar">?</div>
        <div class="u-name" id="user-name">Memuat...</div>
      </div>
      <button class="logout-btn" onclick="doLogout()">KELUAR</button>
    </div>
  </div>
</div>

<div class="nav">
  <button class="nav-btn active" onclick="switchPage('dashboard')">DASHBOARD</button>
  <button class="nav-btn" onclick="switchPage('harian')">HARIAN</button>
  <button class="nav-btn" onclick="switchPage('mingguan')">MINGGUAN</button>
  <button class="nav-btn" onclick="switchPage('bulanan')">BULANAN</button>
  <button class="nav-btn" onclick="switchPage('tahunan')">TAHUNAN</button>
  <button class="nav-btn" onclick="switchPage('riwayat')">RIWAYAT</button>
</div>

<div class="main">

<div id="page-dashboard" class="page active">
  <div class="metrics" id="metric-cards"></div>
  <div class="panel">
    <div class="card">
      <div class="card-head">
        <div class="card-title">Tambah Transaksi</div>
        <div class="card-sub">Catat pemasukan atau pengeluaran baru</div>
      </div>
      
      <div class="voice-wrapper">
        <button id="btn-mic" class="submit-btn" style="background-color: var(--blue-title); color: white; margin-top: 0; margin-bottom: 8px;">🎤 TEKAN UNTUK NGOMONG</button>
        <div id="status-suara" style="font-size: 11px; color: var(--text3); font-style: italic;">Contoh: "Saya jajan bakso seharga 30 ribu senin minggu kemaren jam 14"</div>
      </div>
      <div class="type-toggle">
        <button class="t-btn income active" id="btn-inc" onclick="selType('income')">+ Pemasukan</button>
        <button class="t-btn expense" id="btn-exp" onclick="selType('expense')">- Pengeluaran</button>
      </div>
      <div class="form-row"><label class="form-label">JUMLAH (RP)</label><input type="number" id="f-amount" class="f-input-dark" placeholder="0"></div>
      <div class="form-row"><label class="form-label">KATEGORI</label><select id="f-cat" class="f-input-dark"></select></div>
      <div class="form-row"><label class="form-label">KETERANGAN</label><textarea id="f-note" class="f-input-dark" placeholder="Catatan transaksi..."></textarea></div>
      <div class="form-row"><label class="form-label">WAKTU</label><input type="datetime-local" id="f-date" class="f-input-dark"></div>
      <button class="submit-btn" id="save-btn" onclick="addTx()">SIMPAN TRANSAKSI</button>
    </div>
    
    <div class="card">
      <div class="card-head"><div class="card-title">Aktivitas Terakhir</div></div>
      <div id="recent-list" class="list-wrap" style="max-height:600px;overflow-y:auto;"></div>
    </div>
  </div>
</div>

<div id="page-harian" class="page">
  <div class="sum-grid" id="daily-sum"></div>
  <div class="card">
    <div class="card-head">
      <div class="card-title">Laporan Harian</div>
      <div style="margin-top:12px;">
         <input type="date" id="pick-daily" onchange="renderDaily()" class="f-input-dark">
      </div>
    </div>
    <div class="list-wrap" id="daily-body"></div>
  </div>
</div>

<div id="page-mingguan" class="page">
  <div class="period-bar" id="week-sel"></div>
  <div class="sum-grid" id="week-sum"></div>
  <div class="card">
    <div class="card-head"><div class="card-title">Laporan Mingguan</div></div>
    <div class="chart-wrap">
      <div class="chart-legend"><div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div><div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div></div>
      <div style="height:200px"><canvas id="chartWeek"></canvas></div>
    </div>
    <div class="list-wrap" id="week-body"></div>
  </div>
</div>

<div id="page-bulanan" class="page">
  <div class="period-bar" id="month-sel"></div>
  <div class="sum-grid" id="month-sum"></div>
  <div class="card">
    <div class="card-head"><div class="card-title">Laporan Bulanan</div></div>
    <div class="chart-wrap">
      <div class="chart-legend"><div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div><div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div></div>
      <div style="height:200px"><canvas id="chartMonth"></canvas></div>
    </div>
    <div class="list-wrap" id="month-body"></div>
  </div>
</div>

<div id="page-tahunan" class="page">
  <div class="period-bar" id="year-sel"></div>
  <div class="sum-grid" id="year-sum"></div>
  <div class="card">
    <div class="card-head"><div class="card-title">Laporan Tahunan</div></div>
    <div class="chart-wrap">
      <div class="chart-legend"><div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div><div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div></div>
      <div style="height:200px"><canvas id="chartYear"></canvas></div>
    </div>
    <div class="list-wrap" id="year-body"></div>
  </div>
</div>

<div id="page-riwayat" class="page">
  <div class="sum-grid" id="all-sum"></div>
  <div class="card">
    <div class="card-head"><div class="card-title">Semua Riwayat</div></div>
    <div class="filter-bar">
      <select id="flt-type" class="f-input-dark" onchange="renderAll()">
        <option value="">Semua Filter</option>
        <option value="income">Pemasukan Saja</option>
        <option value="expense">Pengeluaran Saja</option>
      </select>
      <input type="text" id="flt-search" class="f-input-dark" placeholder="Cari berdasarkan keterangan atau kategori..." oninput="renderAll()">
    </div>
    <div class="list-wrap" id="all-body"></div>
  </div>
</div>

</div></div>

<script type="module">
window.toggleTheme = function() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById('theme-toggle').textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  refreshAll(); 
};
if(localStorage.getItem('theme') === 'light') { document.body.classList.add('light-mode'); document.getElementById('theme-toggle').textContent = '☀️'; }

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
function setLoading(on){ document.getElementById('auth-submit-btn').disabled=on; document.getElementById('auth-submit-btn').textContent=on?'Memproses...':(authMode==='login'?'MASUK':'DAFTAR'); }
function setSyncStatus(ok){ document.getElementById('sync-dot').style.background=ok?'var(--green2)':'var(--red2)'; document.getElementById('sync-label').textContent=ok?'TERSINKRON':'OFFLINE'; document.getElementById('sync-dot').style.boxShadow = ok ? '0 0 8px var(--green2)' : 'none'; }

window.switchTab=function(mode){ authMode=mode; document.getElementById('tab-login').classList.toggle('active',mode==='login'); document.getElementById('tab-register').classList.toggle('active',mode==='register'); document.getElementById('field-confirm').style.display=mode==='register'?'block':'none'; document.getElementById('auth-submit-btn').textContent=mode==='login'?'MASUK':'DAFTAR'; hideErr(); };
window.doAuth=async function(){ const email=document.getElementById('auth-email').value.trim(), pass=document.getElementById('auth-pass').value; hideErr(); if(!email||!pass)return showErr('Kredensial kosong.'); setLoading(true); try{ if(authMode==='login') await signInWithEmailAndPassword(auth,email,pass); else { if(pass!==document.getElementById('auth-pass2').value)return showErr('Sandi beda.'); await createUserWithEmailAndPassword(auth,email,pass); } } catch(e){ showErr(e.message); setLoading(false); } };
window.doLogout=async function(){ if(unsubListener){unsubListener();unsubListener=null;} txs=[]; await signOut(auth); };

onAuthStateChanged(auth,user=>{
  if(user){ currentUser=user; document.getElementById('auth-screen').style.display='none'; document.getElementById('app-screen').style.display='block'; setLoading(false); const name=user.displayName||user.email.split('@')[0]; document.getElementById('user-name').textContent=name; document.getElementById('user-avatar').textContent=name.charAt(0).toUpperCase(); listenTransactions(user.uid); }
  else { currentUser=null; document.getElementById('auth-screen').style.display='flex'; document.getElementById('app-screen').style.display='none'; if(unsubListener){unsubListener();unsubListener=null;} txs=[]; }
});

function listenTransactions(uid){ if(unsubListener)unsubListener(); unsubListener=onSnapshot(query(collection(db,'users',uid,'transactions'),orderBy('createdAt','desc')), snap=>{txs=snap.docs.map(d=>({id:d.id,...d.data()}));setSyncStatus(true);refreshAll();}, err=>{console.error(err);setSyncStatus(false);} ); }

window.addTx=async function(){ if(!currentUser)return; const amt=parseFloat(document.getElementById('f-amount').value), cat=document.getElementById('f-cat').value, note=document.getElementById('f-note').value.trim(), dt=document.getElementById('f-date').value; if(!amt||!cat)return alert('Isi data yang lengkap.'); document.getElementById('save-btn').textContent='...'; try{ await addDoc(collection(db,'users',currentUser.uid,'transactions'),{type:curType,amount:amt,category:cat,note:note||'-',date:dt||nowISO(),createdAt:serverTimestamp()}); document.getElementById('f-amount').value=''; document.getElementById('f-note').value=''; } catch(e){alert(e.message);} document.getElementById('save-btn').textContent='SIMPAN TRANSAKSI'; };

window.delTx=async function(id){ if(!currentUser||!confirm('Yakin mau hapus riwayat ini?'))return; await deleteDoc(doc(db,'users',currentUser.uid,'transactions',id)); };

window.selType=function(t){ curType=t; document.getElementById('btn-inc').classList.toggle('active',t==='income'); document.getElementById('btn-exp').classList.toggle('active',t==='expense'); const s=document.getElementById('f-cat'); s.innerHTML='<option value="">Pilih kategori...</option>'; CATS[t].forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;s.appendChild(o)}); };

window.switchPage=function(p){ document.querySelectorAll('.page').forEach(el=>el.classList.remove('active')); document.querySelectorAll('.nav-btn').forEach(el=>el.classList.remove('active')); document.getElementById('page-'+p).classList.add('active'); const pages=['dashboard','harian','mingguan','bulanan','tahunan','riwayat']; document.querySelectorAll('.nav-btn')[pages.indexOf(p)].classList.add('active'); activePage=p;refreshAll(); };

function calcSum(arr){ const inc=arr.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0), exp=arr.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0); return{inc,exp,bal:inc-exp,count:arr.length}; }

function renderSumGrid(el,arr){ 
  const s=calcSum(arr); 
  const pct=s.inc>0?Math.min(100,Math.round((s.exp/s.inc)*100)):0; 
  el.innerHTML=`
    <div class="m-card inc">
      <div class="m-label">TOTAL PEMASUKAN</div>
      <div class="m-val">${fmt(s.inc)}</div>
      <div class="usd-pill">${getUSD(s.inc)}</div>
      <div class="m-sub">${s.inc>0?s.count+' transaksi':'-'}</div>
      <div class="m-bar"><div class="m-bar-fill" style="width:100%"></div></div>
    </div>
    <div class="m-card exp">
      <div class="m-label">TOTAL PENGELUARAN</div>
      <div class="m-val">${fmt(s.exp)}</div>
      <div class="usd-pill">${getUSD(s.exp)}</div>
      <div class="m-sub">${pct}% dari pemasukan</div>
      <div class="m-bar"><div class="m-bar-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="m-card bal">
      <div class="m-label">SALDO BERSIH</div>
      <div class="m-val">${fmt(s.bal)}</div>
      <div class="usd-pill">${getUSD(s.bal)}</div>
      <div class="m-sub">${s.bal>=0?'Surplus':'Defisit'}</div>
      <div class="m-bar"><div class="m-bar-fill" style="width:${s.inc>0?Math.max(0,Math.min(100,Math.round((s.bal/s.inc)*100))):0}%"></div></div>
    </div>
  `; 
}

const createTxCard = (t) => `<div class="recent-item"><div class="ri-left"><div class="ri-icon ${t.type}">${t.type==='income'?'↑':'↓'}</div><div><div class="ri-note">${t.note} <span class="cat-badge">${t.category}</span></div><div class="ri-meta">${fmtDate(t.date)} · ${fmtTime(t.date)}</div></div></div><div class="ri-right-wrap"><div class="ri-amounts-col"><div class="ri-amount">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div><div class="ri-usd">${getUSD(t.amount)}</div></div><button class="del-btn-recent" onclick="delTx('${t.id}')">HAPUS</button></div></div>`;
function renderList(container, arr) { container.innerHTML = arr.length ? arr.map(t => createTxCard(t)).join('') : '<div style="padding:40px;text-align:center;color:#888;font-size:12px;">Kosong</div>'; }

function renderMetrics(){
  const s=calcSum(txs), ts=calcSum(txs.filter(t=>new Date(t.date).toDateString()===new Date().toDateString())), pct=s.inc>0?Math.min(100,Math.round((s.exp/s.inc)*100)):0;
  document.getElementById('metric-cards').innerHTML=`<div class="m-card inc"><div class="m-label">TOTAL PEMASUKAN</div><div class="m-val">${fmt(s.inc)}</div><div class="usd-pill">${getUSD(s.inc)}</div><div class="m-sub">${s.count} transaksi</div><div class="m-bar"><div class="m-bar-fill" style="width:100%"></div></div></div><div class="m-card exp"><div class="m-label">TOTAL PENGELUARAN</div><div class="m-val">${fmt(s.exp)}</div><div class="usd-pill">${getUSD(s.exp)}</div><div class="m-sub">${pct}% dari pemasukan</div><div class="m-bar"><div class="m-bar-fill" style="width:${pct}%"></div></div></div><div class="m-card bal"><div class="m-label">SALDO BERSIH</div><div class="m-val">${fmt(s.bal)}</div><div class="usd-pill">${getUSD(s.bal)}</div><div class="m-sub">${s.bal>=0?'Surplus':'Defisit'}</div><div class="m-bar"><div class="m-bar-fill" style="width:${s.inc>0?Math.max(0,Math.min(100,Math.round((s.bal/s.inc)*100))):0}%"></div></div></div><div class="m-card cnt"><div class="m-label">HARI INI</div><div class="m-val">${ts.count} transaksi</div><div class="m-sub" style="font-weight:700;">${ts.inc>0?fmt(ts.inc):'Kosong'}</div><div class="m-bar"><div class="m-bar-fill" style="width:${ts.count>0?100:0}%"></div></div></div>`;
}

function mkChart(id,labels,incData,expData){ if(charts[id]) charts[id].destroy(); const c=document.getElementById(id); if(!c)return; const isLight = document.body.classList.contains('light-mode'); charts[id]=new Chart(c,{type:'bar',data:{labels,datasets:[{label:'Pemasukan',data:incData,backgroundColor:isLight?'#10B981':'#10B981',borderRadius:4},{label:'Pengeluaran',data:expData,backgroundColor:isLight?'#F87171':'#F87171',borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:isLight?'#888':'#888',font:{size:10,family:"'Outfit'"}},grid:{display:false},border:{display:false}},y:{ticks:{color:isLight?'#888':'#888',font:{size:10},callback:v=>Intl.NumberFormat('id-ID',{notation:'compact'}).format(v)},grid:{color:isLight?'#DEE2E6':'#222228',drawBorder:false},border:{display:false}}}}}); }

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
function refreshAll(){ renderMetrics(); renderList(document.getElementById('recent-list'), txs.slice(0,10)); if(activePage==='harian')renderDaily(); if(activePage==='mingguan')renderWeekly(); if(activePage==='bulanan')renderMonthly(); if(activePage==='tahunan')renderYearly(); if(activePage==='riwayat')renderAll(); }
document.getElementById('pick-daily').value=nowISO().slice(0,10); document.getElementById('f-date').value=nowISO(); selType('income');


// ==========================================================================
// TAMBAHAN SCRIPT UNTUK FITUR PENCATATAN SUARA (INSTANT AUTO-SAVE + PERBAIKAN ANGKA)
// ==========================================================================
const btnMic = document.getElementById('btn-mic');
const statusSuara = document.getElementById('status-suara');
const fAmount = document.getElementById('f-amount');
const fNote = document.getElementById('f-note');
const fDate = document.getElementById('f-date');
const fCat = document.getElementById('f-cat');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'id-ID';
  recognition.continuous = false;
  
  btnMic.addEventListener('click', () => {
    recognition.start();
    btnMic.innerHTML = "🔴 MENDENGARKAN...";
    statusSuara.innerText = "Silakan bicara...";
    statusSuara.style.color = "var(--green2)";
  });

  recognition.onresult = (event) => {
    // Ambil hasil suara asli
    const hasil = event.results[0][0].transcript.toLowerCase();
    btnMic.innerHTML = "🎤 TEKAN UNTUK NGOMONG";

    // 1. AUTO PENGELUARAN/PEMASUKAN
    let jenisTx = 'income'; 
    if(hasil.includes("beli") || hasil.includes("jajan") || hasil.includes("bayar")) {
        jenisTx = 'expense';
        window.selType('expense');
    } else if (hasil.includes("terima") || hasil.includes("dapat") || hasil.includes("gajian")) {
        jenisTx = 'income';
        window.selType('income');
    }

    if(fCat.options.length > 1) {
        fCat.selectedIndex = 1;
    }

    // ================================================================
    // PERBAIKAN LOGIKA ANGKA: Bersihkan Titik & Ganti Kata "Ribu"
    // ================================================================
    // Google kadang merubah suara jadi "30.000" atau "30 ribu".
    // Kode ini menghapus titik, lalu menerjemahkan "ribu" jadi "000".
    let hasilClean = hasil.replace(/\./g, '')                 // Hapus semua titik (30.000 -> 30000)
                          .replace(/\bribu\b/g, '000')        // Kata "ribu" -> 000 (30 ribu -> 30 000)
                          .replace(/\bjuta\b/g, '000000');    // Kata "juta" -> 000000
    
    let harga = "";
    // Pengecekan harga dilakukan menggunakan teks yang sudah bersih (hasilClean)
    const matchHarga = hasilClean.match(/seharga\s*(\d+)/) || hasilClean.match(/(?:rp|rupiah)\s*(\d+)/) || hasilClean.match(/(\d+)/);
    if (matchHarga) harga = matchHarga[1];

    // 3. EKSTRAK ITEM (KETERANGAN) - Tetap pakai teks asli supaya nggak aneh
    let item = "";
    const matchItem = hasil.match(/(?:beli|jajan|bayar)\s+(.*?)\s+(?:seharga)/);
    if (matchItem) {
      item = matchItem[1];
    } else {
      const altMatch = hasilClean.match(/(?:beli|jajan|bayar)\s+(.*?)\s+\d+/);
      if (altMatch) item = altMatch[1];
    }
    
    // Kalau nama barang kosong tapi ada harga, tembak nama default biar TETAP BISA SIMPAN!
    if (!item && harga) {
        item = hasil.replace(/\d+/g, '').replace(/\./g, '').trim() || (jenisTx === 'expense' ? "Pengeluaran (Suara)" : "Pemasukan (Suara)");
    }

    // 4. LOGIKA WAKTU BARU
    let targetDate = new Date(); 
    
    if (hasil.match(/tahun\s+(kemaren|kemarin|lalu)/)) targetDate.setFullYear(targetDate.getFullYear() - 1);
    if (hasil.match(/bulan\s+(kemaren|kemarin|lalu)/)) targetDate.setMonth(targetDate.getMonth() - 1);
    if (hasil.match(/(minggu|pekan)\s+(kemaren|kemarin|lalu)/)) targetDate.setDate(targetDate.getDate() - 7);
    else if (hasil.match(/(kemaren|kemarin)/)) targetDate.setDate(targetDate.getDate() - 1);

    const hariMap = { 'minggu':0, 'senin':1, 'selasa':2, 'rabu':3, 'kamis':4, 'jumat':5, 'sabtu':6 };
    for(let h in hariMap) {
        if (h === 'minggu') {
            if (hasil.includes('hari minggu')) {
                let diff = hariMap[h] - targetDate.getDay();
                if (diff > 0) diff -= 7;
                targetDate.setDate(targetDate.getDate() + diff);
            }
        } else if(hasil.includes(h)) {
            let diff = hariMap[h] - targetDate.getDay();
            if (diff > 0) diff -= 7; 
            targetDate.setDate(targetDate.getDate() + diff);
        }
    }

    const matchTanggal = hasil.match(/tanggal\s*(\d+)/);
    if (matchTanggal) targetDate.setDate(parseInt(matchTanggal[1]));

    const bulanMap = {'januari':0, 'februari':1, 'maret':2, 'april':3, 'mei':4, 'juni':5, 'juli':6, 'agustus':7, 'september':8, 'oktober':9, 'november':10, 'desember':11};
    for(let b in bulanMap) {
        if(hasil.includes(b)) targetDate.setMonth(bulanMap[b]);
    }

    const matchJam = hasil.match(/jam\s*(\d+)/);
    if(matchJam) {
        targetDate.setHours(parseInt(matchJam[1]), 0, 0, 0);
    }
    
    const tzoffset = targetDate.getTimezoneOffset() * 60000;
    const localISOTime = new Date(targetDate.getTime() - tzoffset).toISOString().slice(0,16);

    // 5. AUTO-SAVE DATABASE INSTAN (0 DETIK JEDA)
    if(harga) {
        fNote.value = item.trim();
        fAmount.value = harga;
        fDate.value = localISOTime;

        // LANGSUNG PANGGIL FUNGSI SIMPAN
        window.addTx();
        
        statusSuara.innerText = "✅ Langsung tersimpan otomatis!";
        statusSuara.style.color = "var(--green2)";
        
        setTimeout(() => {
            statusSuara.innerText = "Contoh: 'Saya jajan bakso seharga 30 ribu senin minggu kemaren jam 14'";
            statusSuara.style.color = "var(--text3)";
        }, 3000);

    } else {
        statusSuara.innerText = `Terdengar: "${hasil}" - (Gagal: Nominal uang tidak terdeteksi)`;
        statusSuara.style.color = "var(--red2)";
    }
  };

  recognition.onspeechend = () => { recognition.stop(); btnMic.innerHTML = "🎤 TEKAN UNTUK NGOMONG"; };
  recognition.onerror = (e) => { 
    statusSuara.innerText = "Error: " + e.error; 
    btnMic.innerHTML = "🎤 TEKAN UNTUK NGOMONG"; 
    statusSuara.style.color = "var(--red2)"; 
  };
} else {
  btnMic.style.display = "none";
  statusSuara.innerText = "Fitur suara hanya bisa jalan di Chrome.";
}
</script>
</body>
</html>
