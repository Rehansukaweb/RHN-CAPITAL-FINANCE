<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="color-scheme" content="dark light">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Arus Keuangan — RHN CAPITAL</title>

<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#050505">
<link rel="apple-touch-icon" href="RHN LOGO.jpg">

<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
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
/* DITAMBAH padding: 32px agar kotak kiri sedikit lebih panjang dan presisi dengan 6 transaksi */
.card { background: var(--card); border-radius: var(--radius); padding: 32px; border: 1px solid var(--border); margin-bottom: 24px; }
.card-head { margin-bottom: 16px; }
.card-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.card-sub { font-size: 12px; color: var(--text3); }

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

/* CSS EDIT & DOWNLOAD CSV */
.action-btns { display: flex; gap: 8px; margin-top: 4px; align-items: center; justify-content: flex-end; }
.edit-btn-recent { background: transparent; border: none; color: var(--red2); font-size: 11px; font-weight: 700; cursor: pointer; text-transform: uppercase; margin-top: 4px; }
.export-btn { background: var(--text); color: var(--bg); padding: 16px 24px; border: none; border-radius: 12px; font-size: 12px; font-weight: 800; cursor: pointer; text-transform: uppercase; flex-shrink: 0; white-space: nowrap; }

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
    padding: 0 !important; /* Membunuh padding 16px yang tersembunyi */
    margin: 0 !important;
    background: transparent; border: none; 
  }
  .metrics .m-card { border-radius: 24px !important; border-left: none; border-right: none; }
  
  .sum-grid { 
    grid-template-columns: repeat(2, 1fr); 
    gap: 8px; 
    padding: 0 !important; /* Membunuh padding 16px yang tersembunyi */
    margin: 0 0 24px 0 !important; 
    background: transparent; border: none; 
  }
  .sum-grid .m-card { border-radius: 24px !important; border-left: none; border-right: none; }
  .sum-grid .m-card:nth-child(3) { grid-column: span 2; } /* Saldo bersih bulet memanjang full */

  /* BUNGKUSAN CARD TRANSPARAN (AGAR KONTEN BISA NYENTUH LAYAR) */
  .panel { display: flex; flex-direction: column; gap: 16px; background: transparent; }
  .card { padding: 16px 0 !important; border-radius: 0 !important; border: none !important; background: transparent !important; margin-bottom: 0; }
  
  /* Elemen form dan teks diberi margin agar tetap aman terbaca (tidak nabrak layar) */
  .card-head, .form-row, .filter-bar, .chart-wrap, .period-bar { padding-left: 16px !important; padding-right: 16px !important; }
  
  /* Biar filter & search bar berjejer ke bawah di HP */
  .filter-bar { flex-direction: column; } 
  .export-btn { width: 100%; text-align: center; border-radius: 16px; padding: 18px 16px; }
  
  .type-toggle, .submit-btn { width: calc(100% - 32px) !important; margin-left: 16px !important; margin-right: 16px !important; }
  .filter-bar select.f-input-dark, .filter-bar input.f-input-dark { width: 100%; border-radius: 16px; }
  .f-input-dark { padding: 18px 16px; font-size: 15px; border-radius: 16px; }
  
  /* HISTORY ITEM (RIWAYAT TRANSAKSI): BULET MEMANJANG 100% MENTOK LAYAR */
  .list-wrap { padding: 0 !important; margin: 0 !important; width: 100%; }
  .recent-item { 
      width: 100% !important; /* Paksa memanjang sentuh ujung layar */
      margin: 0 0 12px 0 !important; 
      padding: 16px 16px !important; 
      border-radius: 24px !important; /* Tetap bulet empuk tidak kaku */
      border-left: none !important; /* Menghilangkan batas kiri kanan biar nyatu ke HP */
      border-right: none !important;
      background: var(--card); 
      flex-direction: row; 
      justify-content: space-between; 
      align-items: center; 
  }
  .ri-right-wrap { margin-left: 0; align-items: flex-end; }
  .del-btn-recent, .edit-btn-recent { margin-top: 0px; }
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

/* STYLING HUTANG PIUTANG & DOMPET */
.t-btn.debt.active { background: var(--bg2); color: var(--gold); border: 1px solid var(--gold); }
.t-btn.recv.active { background: var(--bg2); color: var(--blue); border: 1px solid var(--blue); }
.ri-icon.debt { color: var(--gold); background: rgba(251, 191, 36, 0.15); }
.ri-icon.recv { color: var(--blue); background: rgba(59, 130, 246, 0.15); }
.ri-amount.debt { color: var(--gold); }
.ri-amount.recv { color: var(--blue); }
.wallet-badge { background: var(--bg3); color: var(--text2); font-size: 8px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; font-weight: 800; border: 1px solid var(--border2); text-transform: uppercase; }
</style>
</head>
<body>

<!-- BANNER OFFLINE TAMBAHAN -->
<div id="offline-banner" style="display:none; background:#F87171; color:#000; text-align:center; padding:10px; font-size:12px; font-weight:800; position:fixed; top:0; left:0; width:100%; z-index:100000; text-transform:uppercase; box-shadow:0 4px 12px rgba(0,0,0,0.5);">
  ⚠️ Koneksi Terputus - Mode Offline Aktif
</div>

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
      <div class="type-toggle" style="flex-wrap: wrap; gap: 8px;">
        <button class="t-btn income active" id="btn-inc" onclick="selType('income')" style="flex-basis: 48%;">+ Pemasukan</button>
        <button class="t-btn expense" id="btn-exp" onclick="selType('expense')" style="flex-basis: 48%;">- Pengeluaran</button>
        <button class="t-btn debt" id="btn-debt" onclick="selType('debt')" style="flex-basis: 48%;">💳 Hutang</button>
        <button class="t-btn recv" id="btn-recv" onclick="selType('recv')" style="flex-basis: 48%;">💸 Piutang</button>
      </div>
      
      <div class="form-row"><label class="form-label">JUMLAH (RP)</label><input type="text" inputmode="numeric" id="f-amount" class="f-input-dark" placeholder="0"></div>
      
      <div class="form-row"><label class="form-label">KATEGORI</label><select id="f-cat" class="f-input-dark"></select></div>
      <div class="form-row">
        <label class="form-label">SUMBER DANA / DOMPET</label>
        <select id="f-wallet" class="f-input-dark">
          <option value="Kas Tunai">Kas Tunai</option>
          <option value="DANA">DANA</option>
          <option value="GoPay">GoPay</option>
          <option value="ShopeePay">ShopeePay</option>
          <option value="MT5 Trading">Saldo MT5 Trading</option>
          <option value="Rekening Bank">Rekening Bank</option>
        </select>
      </div>
      <div class="form-row"><label class="form-label">KETERANGAN</label><textarea id="f-note" class="f-input-dark" placeholder="Catatan transaksi..."></textarea></div>
      <div class="form-row">
        <label class="form-label" style="display:flex; justify-content:space-between; align-items:center;">
          <span>WAKTU</span>
          <button type="button" onclick="setRealLocalTime()" style="background:transparent; border:none; color:var(--gold); font-size:10px; font-weight:800; font-family:'Outfit', sans-serif; cursor:pointer;">SEKARANG ⏱</button>
        </label>
        <input type="datetime-local" id="f-date" class="f-input-dark">
      </div>
      <button class="submit-btn" id="cancel-edit-btn" onclick="cancelEdit()" style="display:none; background:var(--bg3); color:var(--text); margin-bottom:8px;">BATAL EDIT</button>
      <button class="submit-btn" id="save-btn" onclick="addTx()">SIMPAN TRANSAKSI</button>
    </div>
    
    <div class="card">
      <div class="card-head"><div class="card-title">Aktivitas Terakhir</div></div>
      <div id="recent-list" class="list-wrap"></div>
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
      <button class="export-btn" onclick="exportCSV()">UNDUH CSV 📥</button>
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
import { initializeFirestore, persistentLocalCache, collection, doc, addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = { apiKey: "AIzaSyCx04v3ppq3DxbXDg0PrWBeJYIZjmJF9cg", authDomain: "rhn-capital.firebaseapp.com", projectId: "rhn-capital", storageBucket: "rhn-capital.firebasestorage.app", messagingSenderId: "74905216682", appId: "1:74905216682:web:4687a5b0bd7bcac09292d3" };
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 
const db = initializeFirestore(app, { localCache: persistentLocalCache() });

const CATS = { 
  income: ['Pemberian','Investasi','Ongkos Harian','Bonus','Dividen','Profit','Transfer Masuk','Lainnya'], 
  expense: ['Jajan','Pembelian Aset(Investasi)','Infak','Kas','Utilitas','Transportasi','Makan','Minum','Loss','Lainnya'],
  debt: ['Pinjaman Bank', 'Pinjaman Pribadi', 'Titipan Dana', 'Lainnya'],
  recv: ['Dipinjam Teman', 'Kasbon Karyawan', 'Lainnya'] 
};
let txs=[], curType='income', activePage='dashboard', charts={}, currentUSDRate = 16000, currentUser=null, unsubListener=null, authMode='login';
let editId = null;

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

window.addTx=async function(){ 
  if(!currentUser) return; 
  
  const amountInput = document.getElementById('f-amount');
  const catInput = document.getElementById('f-cat');
  
  const rawValue = amountInput.value.replace(/\./g, '');
  const amt = parseFloat(rawValue);
  const cat = catInput.value; 
  const note = document.getElementById('f-note').value.trim();
  const dt = document.getElementById('f-date').value; 
  const wallet = document.getElementById('f-wallet') ? document.getElementById('f-wallet').value : 'Kas Tunai';
  
  if(!amt || !cat || isNaN(amt)){
    if(!amt || isNaN(amt)) { amountInput.classList.add('shake-error'); setTimeout(() => amountInput.classList.remove('shake-error'), 400); }
    if(!cat) { catInput.classList.add('shake-error'); setTimeout(() => catInput.classList.remove('shake-error'), 400); }
    return Swal.fire({
       position: 'center', icon: 'warning', title: 'Oops...', text: 'Isi nominal dan kategori!', 
       showConfirmButton: false, timer: 2000, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)'
    });
  }
  
  if(document.activeElement) document.activeElement.blur();
  
  const saveBtn = document.getElementById('save-btn');
  saveBtn.textContent='MENYIMPAN...'; 
  saveBtn.style.opacity = '0.7';
  saveBtn.disabled = true;

  try{ 
    if(editId){ 
      await updateDoc(doc(db,'users',currentUser.uid,'transactions',editId),{type:curType,amount:amt,category:cat,wallet:wallet,note:note||'-',date:dt||nowISO()}); 
      cancelEdit(); 
    } else { 
      await addDoc(collection(db,'users',currentUser.uid,'transactions'),{type:curType,amount:amt,category:cat,wallet:wallet,note:note||'-',date:dt||nowISO(),createdAt:serverTimestamp()}); 
    } 
    
    amountInput.value=''; document.getElementById('f-note').value=''; 
    
    // --- ANIMASI TERSIMPAN AKTIF ---
    saveBtn.style.opacity = '1';
    saveBtn.style.transform = 'scale(0.95)';
    setTimeout(() => saveBtn.style.transform = 'scale(1)', 150);
    
    saveBtn.style.background = 'var(--green2)';
    saveBtn.style.color = '#000';
    saveBtn.textContent = 'TERSIMPAN ✅';
    saveBtn.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.5)';
    
    if (navigator.vibrate) navigator.vibrate([30, 50, 30]); 
    let titleMsg = 'Berhasil Disimpan!';
    if (curType === 'debt') titleMsg = '💳 Hutang Tercatat!';
    if (curType === 'recv') titleMsg = '💸 Piutang Tercatat!';
    
    // Notif pop up di TENGAH
    Swal.fire({
       position: 'center',
       icon: 'success',
       title: titleMsg,
       showConfirmButton: false,
       timer: 2000,
       background: 'var(--card)',
       color: 'var(--text)',
       backdrop: 'rgba(0,0,0,0.6)'
    });
    
    // Reset kembali ke keadaan normal setelah 2 detik
    setTimeout(() => {
        saveBtn.style.boxShadow = 'none';
        saveBtn.disabled = false;
        window.setRealLocalTime();
        selType(curType); 
    }, 2000);
    // ---------------------------------

  } catch(e){
    Swal.fire({position: 'center', icon: 'error', title: 'Error', text: e.message, showConfirmButton: true, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)'}); 
    saveBtn.textContent='COBA LAGI';
    saveBtn.style.opacity = '1';
    saveBtn.disabled = false;
  } 
};

window.delTx=async function(id){ if(!currentUser||!confirm('Yakin mau hapus riwayat ini?'))return; await deleteDoc(doc(db,'users',currentUser.uid,'transactions',id)); };

window.editTx=function(id){ 
  const t=txs.find(x=>x.id===id); if(!t)return; 
  editId=id; selType(t.type); 
  document.getElementById('f-amount').value=t.amount; 
  setTimeout(()=>document.getElementById('f-cat').value=t.category,50); 
  if(document.getElementById('f-wallet') && t.wallet) document.getElementById('f-wallet').value = t.wallet;
  document.getElementById('f-note').value=t.note==='-'?'':t.note; 
  document.getElementById('f-date').value=t.date; 
  document.getElementById('save-btn').textContent='UPDATE TRANSAKSI'; 
  document.getElementById('cancel-edit-btn').style.display='block'; 
  switchPage('dashboard'); 
};
window.cancelEdit=function(){ editId=null; document.getElementById('f-amount').value=''; document.getElementById('f-note').value=''; document.getElementById('f-date').value=nowISO(); document.getElementById('save-btn').textContent='SIMPAN TRANSAKSI'; document.getElementById('cancel-edit-btn').style.display='none'; };

window.selType=function(t){ 
  curType=t; 
  document.getElementById('btn-inc').classList.toggle('active',t==='income'); 
  document.getElementById('btn-exp').classList.toggle('active',t==='expense'); 
  const btnDebt=document.getElementById('btn-debt'); if(btnDebt) btnDebt.classList.toggle('active',t==='debt');
  const btnRecv=document.getElementById('btn-recv'); if(btnRecv) btnRecv.classList.toggle('active',t==='recv');
  
  const s=document.getElementById('f-cat'); 
  s.innerHTML='<option value="">Pilih kategori...</option>'; 
  if(CATS[t]){ CATS[t].forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;s.appendChild(o)}); }
  
  const saveBtn = document.getElementById('save-btn');
  if(saveBtn){
    if(t==='income'){ saveBtn.style.background='var(--green2)'; saveBtn.style.color='#000'; saveBtn.textContent='SIMPAN PEMASUKAN'; }
    else if(t==='expense'){ saveBtn.style.background='var(--red2)'; saveBtn.style.color='#fff'; saveBtn.textContent='SIMPAN PENGELUARAN'; }
    else if(t==='debt'){ saveBtn.style.background='var(--gold)'; saveBtn.style.color='#000'; saveBtn.textContent='CATAT HUTANG'; }
    else if(t==='recv'){ saveBtn.style.background='var(--blue)'; saveBtn.style.color='#fff'; saveBtn.textContent='CATAT PIUTANG'; }
  }
};

window.switchPage=function(p){ document.querySelectorAll('.page').forEach(el=>el.classList.remove('active')); document.querySelectorAll('.nav-btn').forEach(el=>el.classList.remove('active')); document.getElementById('page-'+p).classList.add('active'); const pages=['dashboard','harian','mingguan','bulanan','tahunan','riwayat']; document.querySelectorAll('.nav-btn')[pages.indexOf(p)].classList.add('active'); activePage=p;refreshAll(); };

function calcSum(arr){ 
  const inc=arr.filter(t=>t.type==='income'||t.type==='debt').reduce((s,t)=>s+t.amount,0);
  const exp=arr.filter(t=>t.type==='expense'||t.type==='recv').reduce((s,t)=>s+t.amount,0);
  return{inc,exp,bal:inc-exp,count:arr.length}; 
}

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

const createTxCard = (t) => {
  let icon = t.type==='income'?'↑':t.type==='expense'?'↓':t.type==='debt'?'💳':'💸';
  let sign = (t.type==='income' || t.type==='debt') ? '+' : '-';
  let walletBadge = t.wallet ? `<span class="wallet-badge">${t.wallet}</span>` : '';
  return `<div class="recent-item" data-id="${t.id}"><div class="ri-left"><div class="ri-icon ${t.type}">${icon}</div><div><div class="ri-note">${t.note} <span class="cat-badge">${t.category}</span>${walletBadge}</div><div class="ri-meta">${fmtDate(t.date)} · ${fmtTime(t.date)}</div></div></div><div class="ri-right-wrap"><div class="ri-amounts-col"><div class="ri-amount ${t.type}">${sign}${fmt(t.amount)}</div><div class="ri-usd">${getUSD(t.amount)}</div></div><div class="action-btns"><button class="edit-btn-recent" onclick="editTx('${t.id}')">EDIT</button><button class="del-btn-recent" onclick="delTx('${t.id}')">HAPUS</button></div></div></div>`;
};

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

/* DIUBAH MENJADI 6 AKTIFITAS TERAKHIR BIAR SEJAJAR */
function refreshAll(){ renderMetrics(); renderList(document.getElementById('recent-list'), txs.slice(0,6)); if(activePage==='harian')renderDaily(); if(activePage==='mingguan')renderWeekly(); if(activePage==='bulanan')renderMonthly(); if(activePage==='tahunan')renderYearly(); if(activePage==='riwayat')renderAll(); }

document.getElementById('pick-daily').value=nowISO().slice(0,10); document.getElementById('f-date').value=nowISO(); selType('income');

window.exportCSV=function(){ if(!txs.length)return Swal.fire('Kosong','Tidak ada data untuk diunduh','info'); let csv="Tanggal,Waktu,Tipe,Kategori,Nominal(Rp),Keterangan\n"; txs.forEach(t=>{ const d=t.date.split('T'); csv+=`${d[0]},${d[1]||'-'},${t.type==='income'?'Pemasukan':'Pengeluaran'},${t.category},${t.amount},"${t.note}"\n`; }); const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'}); const link=document.createElement('a'); link.href=URL.createObjectURL(blob); link.download='Laporan_Keuangan_RHN.csv'; link.click(); };

if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(e => console.log('SW Error:', e)); }); }
</script>

<style>
  /* FIX TOTAL: ANTI-GERAK, ANTI-GOYANG, ANTI-LOMPAT */
  html { overflow-y: scroll !important; } /* Tahan scrollbar biar ga geser kiri-kanan */
  .page { animation: none !important; transition: none !important; } /* Matikan kedip/fade layar */
  .m-bar-fill { transition: none !important; } /* Matikan gerak lambat progress bar */
  
  /* ==========================================================================
     PERMINTAAN BARU: GARIS HITAM DI BAWAH NAVIGASI & SPASI BIAR GAK MEPET
     ========================================================================== */
  .nav { 
      position: sticky !important; 
      top: 0; 
      z-index: 100; 
      background-color: var(--bg); 
      border-bottom: 4px solid #000000 !important; /* Garis hitam lebih tegas dan tebal */
      padding-bottom: 12px !important; /* Jarak dipendekin biar pas kayak screenshot lu */
      transition: none !important; 
  } 
  
  .main {
      padding-top: 16px !important; /* Spasi dibalikin rapet kayak aslinya */
  }
  
  /* Sticky Search Bar di Tab Riwayat */
  .filter-bar { position: sticky !important; top: 70px; z-index: 90; background: var(--bg); padding-top: 16px !important; margin-top: -16px; padding-bottom: 16px !important; border-bottom: 1px solid var(--border); transition: 0.3s ease; }
  .nav.hidden-nav + .main .filter-bar { top: 0px !important; }

  /* Efek kursor bisa diklik */
  .m-card.bal, .ri-amount, .cat-badge { cursor: pointer; transition: 0.2s; }
  .ri-amount:hover, .cat-badge:hover { opacity: 0.7; }
  
  /* Glow Focus Form */
  .f-input-dark:focus { box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.2); }
  
  /* Progress Bar Gradien */
  .inc .m-bar-fill { background: linear-gradient(90deg, #10B981 0%, #34D399 100%); }
  .exp .m-bar-fill { background: linear-gradient(90deg, #F87171 0%, #FCA5A5 100%); }
  
  /* Animasi Shake Error (Proteksi Jebol - Ini cuma buat error) */
  @keyframes shake { 0%, 100% {transform: translateX(0);} 25% {transform: translateX(-5px);} 75% {transform: translateX(5px);} }
  .shake-error { animation: shake 0.3s ease-in-out; border-color: var(--red2) !important; box-shadow: 0 0 8px rgba(248,113,113,0.3) !important; }

  /* Super Privacy Mode Blur */
  body.global-privacy .m-val, body.global-privacy .ri-amount, body.global-privacy .usd-pill, body.global-privacy .ri-usd { filter: blur(6px); transition: 0.3s; user-select: none; }
  body.idle-mode { filter: brightness(0.6) blur(2px); transition: 0.5s ease; pointer-events: none; } /* Blur Auto-Lock 2 Menit */

  /* Badge E-Wallet & Badge Trading */
  .ewallet-badge { background: rgba(59, 130, 246, 0.2); color: #60A5FA; font-size: 8px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; font-weight: 800; border: 1px solid rgba(59, 130, 246, 0.5); }
  .trading-badge { background: rgba(245, 158, 11, 0.2); color: #FBBF24; font-size: 8px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; font-weight: 800; border: 1px solid rgba(245, 158, 11, 0.5); }

  /* Highlight Transaksi Paus (> Rp 5Juta) */
  .big-money-glow { text-shadow: 0 0 12px rgba(251, 191, 36, 0.8); color: var(--gold) !important; }

  /* Scroll to Top Button */
  #scroll-to-top { position: fixed; bottom: 24px; right: 24px; width: 50px; height: 50px; background: var(--blue-title); color: #fff; border: none; border-radius: 50%; font-size: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); cursor: pointer; z-index: 999; display: none; align-items: center; justify-content: center; transition: 0.3s; }
  #scroll-to-top:hover { background: var(--blue); transform: scale(1.05); }
</style>

<script>
window.addEventListener('DOMContentLoaded', (event) => {
  
  // TOAST NOTIFICATION - DIUBAH KE POP UP TENGAH
  const Toast = Swal.mixin({
    position: 'center', 
    showConfirmButton: false, 
    timer: 2000, 
    timerProgressBar: true,
    background: 'var(--card)', 
    color: 'var(--text)',
    backdrop: 'rgba(0,0,0,0.6)'
  });

  // ---------------------------------------------------------
  // DETEKSI OFFLINE/ONLINE PWA
  // ---------------------------------------------------------
  window.addEventListener('offline', () => {
    document.getElementById('offline-banner').style.display = 'block';
    Toast.fire({ icon: 'warning', title: 'Koneksi Terputus!' });
  });
  window.addEventListener('online', () => {
    document.getElementById('offline-banner').style.display = 'none';
    Toast.fire({ icon: 'success', title: 'Online Kembali!' });
  });

  // MATIKAN ANIMASI GRAFIK CHART.JS (ANTI NAIK-TURUN)
  if(window.Chart) {
      Chart.defaults.animation = false;
      Chart.defaults.transitions.active.animation.duration = 0;
  }

  // ---------------------------------------------------------
  // BUG FIX NATIVE DELETE (HAPUS DATA ELEGAN)
  // ---------------------------------------------------------
  const originalDelTx = window.delTx;
  window.delTx = function(id) {
    if (navigator.vibrate) navigator.vibrate(20);
    Swal.fire({
      title: 'Hapus Transaksi?', text: "Data yang dihapus tidak bisa dikembalikan.",
      icon: 'warning', showCancelButton: true, background: 'var(--card)', color: 'var(--text)',
      confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Hapus',
      position: 'center', backdrop: 'rgba(0,0,0,0.6)'
    }).then((result) => {
      if (result.isConfirmed) {
        const nativeConfirm = window.confirm;
        window.confirm = () => true; 
        originalDelTx(id).then(() => {
            window.confirm = nativeConfirm; 
            Toast.fire({ icon: 'success', title: 'Data terhapus!' });
        }).catch(err => { window.confirm = nativeConfirm; });
      }
    });
  };

  // ---------------------------------------------------------
  // BUG FIX NATIVE EDIT (KONFIRMASI EDIT ELEGAN)
  // ---------------------------------------------------------
  const originalEditTx = window.editTx;
  window.editTx = function(id) {
    if (navigator.vibrate) navigator.vibrate(20);
    Swal.fire({
      title: 'Edit Transaksi?',
      text: "Data akan dimasukkan ke form untuk diubah.",
      icon: 'question',
      showCancelButton: true,
      background: 'var(--card)',
      color: 'var(--text)',
      confirmButtonColor: 'var(--blue)', 
      cancelButtonColor: 'var(--bg3)',
      confirmButtonText: 'Ya, Edit',
      position: 'center', backdrop: 'rgba(0,0,0,0.6)'
    }).then((result) => {
      if (result.isConfirmed) {
        originalEditTx(id);
      }
    });
  };

  // ---------------------------------------------------------
  // BUG FIX NATIVE KELUAR (KONFIRMASI LOGOUT ELEGAN)
  // ---------------------------------------------------------
  const originalDoLogout = window.doLogout;
  window.doLogout = function() {
    if (navigator.vibrate) navigator.vibrate(20);
    Swal.fire({
      title: 'Keluar Akun?',
      text: "Lu yakin mau keluar dari aplikasi?",
      icon: 'warning',
      showCancelButton: true,
      background: 'var(--card)',
      color: 'var(--text)',
      confirmButtonColor: 'var(--red2)', 
      cancelButtonColor: 'var(--bg3)',
      confirmButtonText: 'Ya, Keluar',
      position: 'center', backdrop: 'rgba(0,0,0,0.6)'
    }).then((result) => {
      if (result.isConfirmed) {
        originalDoLogout();
      }
    });
  };

  // ---------------------------------------------------------
  // KALKULATOR AUTO-MATH & FORMATTITIK (UPDATED)
  // ---------------------------------------------------------
  const amountInput = document.getElementById('f-amount');
  const catInput = document.getElementById('f-cat');
  
  if (amountInput) {
    amountInput.type = 'text'; 
    amountInput.inputMode = 'numeric'; // MEMAKSA HP MENGELUARKAN KEYBOARD NUMPAD
    
    amountInput.addEventListener('blur', function() {
        let val = this.value.replace(/[^0-9+\-*/().]/g, ''); 
        try {
            if(val && /[+\-*/]/.test(val)) {
                // PROTEKSI
                let cleanMath = val.replace(/\./g, '');
                let result = eval(cleanMath); 
                this.value = parseInt(result, 10).toLocaleString('id-ID');
                Toast.fire({ icon: 'info', title: 'Auto-hitung berhasil!' });
            } else if (val) {
                this.value = parseInt(val.replace(/\./g, ''), 10).toLocaleString('id-ID');
            }
        } catch (e) {
            this.value = ''; 
        }
    });

    amountInput.addEventListener('input', function(e) {
      let raw = this.value.replace(/[^0-9+\-*/().]/g, '');
      if(/[+\-*/()]/.test(raw)) {
          this.value = raw;
      } else {
          let nums = raw.replace(/\./g, '');
          this.value = nums ? parseInt(nums, 10).toLocaleString('id-ID') : '';
      }
    });
  }

  // FUNGSI WAKTU GLOBAL BIAR BISA DIPANGGIL TOMBOL "SEKARANG"
  window.setRealLocalTime = function() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const dateInput = document.getElementById('f-date');
    if(dateInput) dateInput.value = now.toISOString().slice(0,16);
  };
  window.setRealLocalTime(); 
  
  const originalCancelEdit = window.cancelEdit;
  window.cancelEdit = function() { originalCancelEdit(); window.setRealLocalTime(); };

  function applyBalanceColor() {
    document.querySelectorAll('.m-card.bal').forEach(card => {
      const el = card.querySelector('.m-val');
      const textVal = el.innerText;
      if (textVal.includes('-')) {
        el.style.color = 'var(--red2)';
        card.style.boxShadow = '0 0 15px rgba(248,113,113,0.15)'; card.style.borderColor = 'rgba(248,113,113,0.4)';
      } else {
        card.style.boxShadow = 'none'; card.style.borderColor = 'var(--border)';
        if (textVal !== 'Rp 0' && textVal !== 'Rp NaN' && textVal !== '') { el.style.color = 'var(--green2)'; } 
        else { el.style.color = 'var(--text)'; }
      }
    });
  }
  const originalRefreshAll = window.refreshAll;
  window.refreshAll = function() { originalRefreshAll(); setTimeout(applyBalanceColor, 50); };
  const originalRenderSumGrid = window.renderSumGrid;
  window.renderSumGrid = function(el, arr) { originalRenderSumGrid(el, arr); setTimeout(applyBalanceColor, 50); };

  // ---------------------------------------------------------
  // SUPER PRIVACY MODE BLUR
  // ---------------------------------------------------------
  document.addEventListener('click', e => {
      const balCard = e.target.closest('.m-card.bal');
      if(balCard) {
          document.body.classList.toggle('global-privacy');
          if(navigator.vibrate) navigator.vibrate(15);
      }
  });

  // ---------------------------------------------------------
  // PROTEKSI PINDAH TAB (Tanpa Auto-Scroll & Animasi)
  // ---------------------------------------------------------
  const originalSwitchPage = window.switchPage;
  window.switchPage = function(p) {
    if (amountInput && amountInput.value && amountInput.value !== '' && p !== 'dashboard') {
        Swal.fire({
            title: 'Pindah Tab?', text: "Ada nominal yang belum lu simpan. Lanjut pindah?", icon: 'warning',
            showCancelButton: true, confirmButtonText: 'Tetap Pindah', cancelButtonText: 'Batal',
            background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--border2)',
            position: 'center', backdrop: 'rgba(0,0,0,0.6)'
        }).then((result) => {
            if (result.isConfirmed) { originalSwitchPage(p); } 
        });
    } else {
        originalSwitchPage(p); 
    }
  };

  // ---------------------------------------------------------
  // SCROLL TO TOP (HANYA BUTTON SAJA)
  // ---------------------------------------------------------
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.id = 'scroll-to-top';
  scrollTopBtn.innerHTML = '⬆️';
  document.body.appendChild(scrollTopBtn);

  scrollTopBtn.onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  window.addEventListener('scroll', () => {
      let currentScroll = window.pageYOffset;
      if (currentScroll > 400) { scrollTopBtn.style.display = 'flex'; } 
      else { scrollTopBtn.style.display = 'none'; }
  });

  // ---------------------------------------------------------
  // SHORTCUT KEYBOARD (ALT + N / ALT + S)
  // ---------------------------------------------------------
  document.addEventListener('keydown', function(e) {
      if (e.altKey && e.key.toLowerCase() === 'n') {
          e.preventDefault(); window.switchPage('dashboard'); if(amountInput) amountInput.focus();
      }
      if (e.altKey && e.key.toLowerCase() === 's') {
          e.preventDefault(); const saveBtn = document.getElementById('save-btn'); if(saveBtn) saveBtn.click();
      }
  });

  // ---------------------------------------------------------
  // DOUBLE-TAP EDIT & FILTER CERDAS BERBASIS KLIK
  // ---------------------------------------------------------
  document.addEventListener('dblclick', function(e) {
      const txCard = e.target.closest('.recent-item');
      if (txCard) {
          const editBtn = txCard.querySelector('.edit-btn-recent');
          if (editBtn) { if (navigator.vibrate) navigator.vibrate([15, 30]); editBtn.click(); }
      }
  });

  document.body.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('cat-badge')) {
       const cat = e.target.innerText.replace(/[^a-zA-Z0-9\s]/g, '').trim(); 
       const searchInput = document.getElementById('flt-search');
       if(searchInput) {
           if(searchInput.value === cat) {
               searchInput.value = '';
           } else {
               searchInput.value = cat;
               Toast.fire({ icon: 'info', title: `Filter: ${cat}` });
           }
           window.renderAll();
       }
    }
  });

  // ---------------------------------------------------------
  // TEKAN-TAHAN UNTUK HAPUS (LONG PRESS)
  // ---------------------------------------------------------
  let pressTimer;
  document.body.addEventListener('touchstart', function(e) {
      const txCard = e.target.closest('.recent-item');
      if(txCard) {
          pressTimer = window.setTimeout(function() {
              const delBtn = txCard.querySelector('.del-btn-recent');
              if(delBtn) { if (navigator.vibrate) navigator.vibrate([40, 40]); delBtn.click(); }
          }, 1000); 
      }
  });
  document.body.addEventListener('touchend', function(e) { clearTimeout(pressTimer); });
  document.body.addEventListener('touchmove', function(e) { clearTimeout(pressTimer); });

  // ---------------------------------------------------------
  // E-WALLET BADGES, TRADING BADGES, WARNA KATEGORI
  // ---------------------------------------------------------
  const uiObserver = new MutationObserver(() => {
      
      const todayStr = new Date().toLocaleDateString('id-ID',{day:'2-digit',month:'short'});
      const yesterdayStr = new Date(Date.now() - 86400000).toLocaleDateString('id-ID',{day:'2-digit',month:'short'});
      
      document.querySelectorAll('.ri-meta').forEach(meta => {
          if(meta.innerText.includes(todayStr) && !meta.innerText.includes('Hari Ini')) {
              meta.innerHTML = meta.innerHTML.replace(todayStr, '<span style="color:var(--gold);font-weight:700;">Hari Ini</span>');
          } else if(meta.innerText.includes(yesterdayStr) && !meta.innerText.includes('Kemarin')) {
              meta.innerHTML = meta.innerHTML.replace(yesterdayStr, '<span style="font-weight:700;">Kemarin</span>');
          }
      });

      document.querySelectorAll('.recent-item').forEach(card => {
          
          const amountEl = card.querySelector('.ri-amount');
          if(amountEl && !amountEl.dataset.glowChecked) {
              const nominalRaw = amountEl.innerText.replace(/[^0-9]/g, '');
              if(parseInt(nominalRaw) >= 5000000) {
                  amountEl.classList.add('big-money-glow');
              }
              amountEl.dataset.glowChecked = 'true';
          }

          const badge = card.querySelector('.cat-badge');
          if(badge && !badge.dataset.colored) {
              const catText = badge.innerText.toLowerCase();
              if(catText.includes('investasi') || catText.includes('profit') || catText.includes('bonus')) {
                  badge.style.background = 'rgba(251, 191, 36, 0.15)'; badge.style.color = 'var(--gold)'; badge.style.borderColor = 'rgba(251, 191, 36, 0.4)';
              } else if(catText.includes('jajan') || catText.includes('makan') || catText.includes('loss')) {
                  badge.style.background = 'rgba(248, 113, 113, 0.15)'; badge.style.color = 'var(--red2)'; badge.style.borderColor = 'rgba(248, 113, 113, 0.4)';
              } else if(catText.includes('utilitas') || catText.includes('transportasi') || catText.includes('ongkos')) {
                  badge.style.background = 'rgba(59, 130, 246, 0.15)'; badge.style.color = '#60A5FA'; badge.style.borderColor = 'rgba(59, 130, 246, 0.4)';
              }
              badge.dataset.colored = 'true';
          }

          const noteEl = card.querySelector('.ri-note');
          if(noteEl && !noteEl.dataset.badged) {
              const txt = noteEl.innerText.toLowerCase();
              let badgesHTML = '';
              if(txt.includes('dana') || txt.includes('gopay') || txt.includes('shopeepay')) { badgesHTML += `<span class="ewallet-badge">💳 E-WALLET</span>`; }
              if(txt.includes('xauusd') || txt.includes('smc') || txt.includes('mt5')) { badgesHTML += `<span class="trading-badge">📈 TRADING</span>`; }
              if(badgesHTML !== '') { noteEl.innerHTML += badgesHTML; }
              noteEl.dataset.badged = 'true';
          }
      });

      const userNameEl = document.getElementById('user-name');
      if(userNameEl && userNameEl.innerText !== 'Memuat...' && !userNameEl.dataset.greeted) {
          const hour = new Date().getHours();
          let greeting = 'Malam 🌙';
          if (hour >= 5 && hour < 11) greeting = 'Pagi ☀️';
          else if (hour >= 11 && hour < 15) greeting = 'Siang 🌤️';
          else if (hour >= 15 && hour < 18) greeting = 'Sore 🌇';
          const nameParts = userNameEl.innerText.split(' ');
          userNameEl.innerText = `${greeting}, ${nameParts[0]}!`;
          userNameEl.dataset.greeted = 'true';
      }
  });
  uiObserver.observe(document.getElementById('app-screen'), { childList: true, subtree: true });

  // HIGHLIGHT PENCARIAN WARNA EMAS
  const originalRenderAll = window.renderAll;
  window.renderAll = function() {
      originalRenderAll(); 
      const searchInput = document.getElementById('flt-search');
      if(searchInput && searchInput.value.trim() !== '') {
          const keyword = searchInput.value.trim().toLowerCase();
          document.querySelectorAll('#all-body .ri-note').forEach(noteEl => {
              const originalHTML = noteEl.innerHTML;
              const regex = new RegExp(`(${keyword})`, "gi");
              noteEl.innerHTML = originalHTML.replace(/(>([^<]+)<)/ig, function(match, p1, p2) {
                  return ">" + p2.replace(regex, `<mark style="background:var(--gold); color:#000; border-radius:2px; padding:0 2px;">$1</mark>`) + "<";
              });
          });
      }
  };

  // WARNA TOMBOL SIMPAN ADAPTIF
  const originalSelType = window.selType;
  window.selType = function(t) {
    originalSelType(t);
    const saveBtn = document.getElementById('save-btn');
    if (saveBtn) {
      if (t === 'income') { saveBtn.style.background = 'var(--green2)'; saveBtn.style.color = '#000'; } 
      else { saveBtn.style.background = 'var(--red2)'; saveBtn.style.color = '#fff'; }
    }
  };
  setTimeout(() => { if (window.selType) window.selType('income'); }, 200);

  // FOOTER LEGALITAS
  const footer = document.createElement('div');
  footer.innerHTML = "RHN CAPITAL FINANCE &copy; 2026";
  footer.style.cssText = "text-align:center; padding:24px 24px 0px; font-size:10px; color:var(--text3); font-weight:700; letter-spacing:1px; opacity:0.5;";
  document.querySelector('.main').appendChild(footer);

  // ---------------------------------------------------------
  // AUTO-LOCK (IDLE BLUR SCREEN) - Kunci Layar Pasif
  // ---------------------------------------------------------
  let idleTimeout;
  const resetIdle = () => {
      document.body.classList.remove('idle-mode');
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
          document.body.classList.add('idle-mode');
      }, 120000); 
  };
  window.addEventListener('mousemove', resetIdle);
  window.addEventListener('mousedown', resetIdle);
  window.addEventListener('keypress', resetIdle);
  window.addEventListener('touchstart', resetIdle);
  window.addEventListener('scroll', resetIdle, true);
  resetIdle(); 

});
</script>
</body>
</html>
