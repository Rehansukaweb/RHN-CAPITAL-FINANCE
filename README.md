<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="color-scheme" content="dark light">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Arus Keuangan — RHN CAPITAL</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<style>
/* =============================================
   REDESIGN: EDITORIAL SPLIT-PANEL + SIDEBAR NAV
   Warna & Font: identik asli
   ============================================= */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

:root {
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

/* =============================================
   LAYOUT: SIDEBAR (kiri) + KONTEN (kanan)
   ============================================= */
.app-shell {
  display: flex;
  min-height: 100vh;
}

/* ---- SIDEBAR ---- */
.sidebar {
  width: 240px;
  flex-shrink: 0;
  background: var(--bg2);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 28px 0 24px;
  position: fixed;
  top: 0; left: 0; bottom: 0;
  z-index: 100;
  overflow-y: auto;
  transition: transform 0.3s ease;
}

.sidebar-logo {
  display: flex; align-items: center; gap: 12px;
  padding: 0 20px 28px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 20px;
}
.logo-img { width: 40px; height: 40px; border-radius: 10px; border: 1px solid var(--gold2); padding: 2px; flex-shrink: 0; }
.logo-img img { width: 100%; height: 100%; border-radius: 6px; object-fit: cover; display: block; }
.logo-text .main-text { font-size: 15px; font-weight: 800; color: var(--text); }
.logo-text .sub-text { font-size: 9px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 1.5px; }

/* Sidebar brand title */
.sidebar-brand-title {
  color: var(--blue-title);
  font-size: 11px; font-weight: 800;
  padding: 0 20px 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Sidebar nav buttons */
.sidebar-nav { display: flex; flex-direction: column; gap: 4px; padding: 0 12px; flex: 1; }
.nav-btn {
  padding: 11px 16px;
  font-size: 12px; font-weight: 700;
  color: var(--text3);
  border: none;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  transition: 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: left;
  display: flex; align-items: center; gap: 10px;
}
.nav-btn .nav-icon { font-size: 14px; width: 20px; text-align: center; }
.nav-btn:hover { background: var(--bg3); color: var(--text2); }
.nav-btn.active { background: var(--text); color: var(--bg); }

/* External links di sidebar bawah */
.sidebar-ext { padding: 20px 12px 0; border-top: 1px solid var(--border); margin-top: auto; display: flex; flex-direction: column; gap: 4px; }
.nav-ext-btn {
  background: transparent; border: none;
  color: var(--gold); font-weight: 700; font-size: 10px;
  font-family: 'Outfit', sans-serif; cursor: pointer;
  text-transform: uppercase; letter-spacing: 0.5px;
  text-align: left; padding: 8px 16px; border-radius: 8px;
  transition: 0.2s;
}
.nav-ext-btn:hover { background: var(--bg3); color: var(--text); }

/* ---- STATUS BAR (atas konten) ---- */
.topbar {
  position: fixed;
  top: 0; left: 240px; right: 0;
  height: 60px;
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 28px;
  z-index: 99;
  gap: 16px;
}
.topbar-left { display: flex; align-items: center; gap: 12px; }
.topbar-right { display: flex; align-items: center; gap: 12px; }

.status-pill {
  background: var(--bg3); border: 1px solid var(--border);
  border-radius: 10px; padding: 6px 14px;
  display: flex; align-items: center; gap: 8px;
}
.usd-val { font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; color: var(--text); }
.sync-dot { width: 7px; height: 7px; border-radius: 50%; box-shadow: 0 0 6px currentColor; flex-shrink: 0; }
.sync-text { font-size: 9px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 1px; }

.theme-btn {
  background: var(--bg3); border: 1px solid var(--border);
  color: var(--gold); width: 36px; height: 36px;
  border-radius: 10px; display: flex; align-items: center; justify-content: center;
  font-size: 14px; cursor: pointer; transition: 0.2s; flex-shrink: 0;
}
.theme-btn:hover { background: var(--border); }

.user-pill {
  background: var(--bg3); border: 1px solid var(--border);
  border-radius: 10px; padding: 6px 12px 6px 6px;
  display: flex; align-items: center; gap: 10px;
}
.u-avatar {
  width: 26px; height: 26px; border-radius: 50%;
  border: 1px solid var(--gold); display: flex;
  align-items: center; justify-content: center;
  color: var(--gold); font-weight: 700; font-size: 11px; flex-shrink: 0;
}
.u-name { font-size: 12px; font-weight: 600; color: var(--text); }
.logout-btn {
  background: transparent; border: 1px solid var(--border2);
  color: var(--text3); padding: 4px 10px;
  border-radius: 7px; font-size: 10px; font-weight: 700;
  cursor: pointer; text-transform: uppercase;
}

/* Hamburger for mobile */
.hamburger {
  display: none;
  background: var(--bg3); border: 1px solid var(--border);
  color: var(--text); width: 36px; height: 36px;
  border-radius: 10px; align-items: center; justify-content: center;
  font-size: 16px; cursor: pointer; flex-shrink: 0;
}
.sidebar-overlay {
  display: none; position: fixed; inset: 0;
  background: rgba(0,0,0,0.6); z-index: 99;
}
.sidebar-overlay.show { display: block; }

/* ---- MAIN KONTEN ---- */
.content-area {
  margin-left: 240px;
  padding-top: 60px;
  min-height: 100vh;
  flex: 1;
}
.main { padding: 28px; max-width: 1200px; }

.page { display: none; animation: fadeIn 0.35s ease; }
.page.active { display: block; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

/* ---- PAGE HEADER ---- */
.page-header { margin-bottom: 24px; }
.page-header h1 { font-size: 24px; font-weight: 800; color: var(--text); letter-spacing: -0.5px; }
.page-header p { font-size: 12px; color: var(--text3); margin-top: 2px; }

/* =============================================
   METRICS GRID — gaya kartu horizontal dgn border kiri berwarna
   ============================================= */
.metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}
.m-card {
  background: var(--card);
  border-radius: 14px;
  padding: 18px 20px;
  border: 1px solid var(--border);
  border-left: 3px solid var(--border2);
  display: flex; flex-direction: column;
  position: relative; overflow: hidden;
}
.m-card.inc { border-left-color: var(--green2); }
.m-card.exp { border-left-color: var(--red2); }
.m-card.bal { border-left-color: var(--gold); }
.m-card.cnt { border-left-color: var(--blue); }

.m-card::before {
  content: '';
  position: absolute; top: 0; right: 0;
  width: 80px; height: 80px;
  border-radius: 50%;
  opacity: 0.04;
}
.m-card.inc::before { background: var(--green2); }
.m-card.exp::before { background: var(--red2); }
.m-card.bal::before { background: var(--gold); }
.m-card.cnt::before { background: var(--blue); }

.m-label { font-size: 9px; font-weight: 800; text-transform: uppercase; color: var(--text3); margin-bottom: 10px; letter-spacing: 0.8px; }
.m-val { font-family: 'JetBrains Mono', monospace; font-size: 17px; font-weight: 800; color: var(--text); margin-bottom: 4px; white-space: nowrap; }
.usd-pill { display: inline-block; background: var(--bg3); color: var(--text3); font-size: 10px; font-family: 'JetBrains Mono', monospace; font-weight: 600; padding: 2px 8px; border-radius: 6px; align-self: flex-start; margin-bottom: 8px; }
.m-sub { font-size: 10px; font-weight: 500; color: var(--text3); margin-bottom: 10px; flex-grow: 1; }
.m-bar { height: 3px; background: var(--bg3); border-radius: 2px; width: 100%; overflow: hidden; }
.m-bar-fill { height: 100%; border-radius: 2px; transition: width 0.6s ease; }
.inc .m-bar-fill { background: var(--green2); }
.exp .m-bar-fill { background: var(--red2); }
.bal .m-bar-fill { background: var(--gold); }
.cnt .m-bar-fill { background: var(--blue); }

/* =============================================
   SUMMARY GRID
   ============================================= */
.sum-grid { display: grid; gap: 16px; margin-bottom: 24px; }

/* =============================================
   PANEL: 2 kolom — Form kiri, List kanan
   ============================================= */
.panel {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 20px;
  align-items: start;
}

/* =============================================
   CARD
   ============================================= */
.card {
  background: var(--card);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid var(--border);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.card-head { margin-bottom: 20px; }
.card-title { font-size: 15px; font-weight: 800; color: var(--text); margin-bottom: 3px; }
.card-sub { font-size: 11px; color: var(--text3); }

/* =============================================
   FORM ELEMENTS
   ============================================= */
.voice-wrapper {
  background: var(--bg3);
  padding: 14px 16px;
  border-radius: 12px;
  margin-bottom: 18px;
  border: 1px dashed var(--border2);
  text-align: center;
}

.type-toggle { display: flex; background: var(--bg3); border-radius: 10px; padding: 4px; margin-bottom: 18px; }
.t-btn { flex: 1; padding: 10px; border: none; border-radius: 7px; font-size: 12px; font-weight: 700; cursor: pointer; background: transparent; color: var(--text3); transition: 0.2s; }
.t-btn.income.active { background: var(--bg2); color: var(--green2); }
.t-btn.expense.active { background: var(--bg2); color: var(--text); }

.f-input-dark {
  width: 100%; padding: 14px 16px;
  border-radius: 10px; border: 1px solid var(--border);
  background-color: var(--bg3) !important;
  color: var(--text) !important;
  outline: none; font-family: 'Outfit', sans-serif;
  font-size: 14px; font-weight: 500;
  appearance: none; -webkit-appearance: none;
  transition: border-color 0.3s;
}
.f-input-dark:focus { border-color: var(--gold); }
.f-input-dark::placeholder { color: var(--text3); }
select.f-input-dark {
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23888899" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat; background-position: right 14px center;
  padding-right: 38px; cursor: pointer;
}
select.f-input-dark option { background: var(--card); color: var(--text); }

.form-row { margin-bottom: 14px; }
.form-label { font-size: 9px; font-weight: 800; color: var(--text3); margin-bottom: 7px; display: block; text-transform: uppercase; letter-spacing: 0.8px; }
.form-row textarea { height: 88px; resize: none; }

.submit-btn {
  width: 100%; padding: 15px;
  background: var(--text); color: var(--bg);
  border: none; border-radius: 10px;
  font-size: 12px; font-weight: 800;
  cursor: pointer; transition: 0.2s;
  text-transform: uppercase; letter-spacing: 0.5px;
  margin-top: 6px;
}
.submit-btn:hover { opacity: 0.88; }
#save-btn { margin-top: auto; }

/* =============================================
   HISTORY LIST ITEMS — gaya baru: baris compact dengan garis kiri
   ============================================= */
.list-wrap { padding: 4px 0; }
.recent-item {
  padding: 14px 16px;
  margin-bottom: 10px;
  border-radius: 12px;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-left: 3px solid var(--border2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.2s;
}
.recent-item:has(.ri-icon.inc) { border-left-color: var(--green2); }
.recent-item:has(.ri-icon.exp) { border-left-color: var(--red2); }

.ri-icon {
  width: 34px; height: 34px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 800;
  background: var(--bg2); margin-right: 12px; flex-shrink: 0;
}
.ri-icon.inc { color: var(--green2); }
.ri-icon.exp { color: var(--red2); }
.ri-left { display: flex; align-items: center; flex: 1; min-width: 0; }

.ri-note { font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 2px; display: flex; align-items: center; gap: 7px; flex-wrap: wrap; line-height: 1.4; }
.ri-meta { font-size: 10px; font-weight: 500; color: var(--text3); }
.cat-badge { font-size: 9px; font-weight: 600; padding: 2px 6px; border-radius: 5px; background: var(--bg); border: 1px solid var(--border); color: var(--text3); text-transform: uppercase; display: inline-block; white-space: nowrap; }

.ri-right-wrap { display: flex; flex-direction: column; align-items: flex-end; gap: 3px; flex-shrink: 0; margin-left: 12px; }
.ri-amounts-col { display: flex; flex-direction: column; align-items: flex-end; }
.ri-amount { font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 800; white-space: nowrap; color: var(--text); }
.ri-usd { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 600; color: var(--text3); margin-top: 1px; }
.del-btn-recent { background: transparent; border: none; color: var(--red2); font-size: 10px; font-weight: 700; cursor: pointer; text-transform: uppercase; margin-top: 4px; opacity: 0.7; }
.del-btn-recent:hover { opacity: 1; }

/* =============================================
   CHART & PERIOD BAR
   ============================================= */
.chart-wrap { margin-bottom: 20px; }
.chart-legend { display: flex; gap: 16px; margin-bottom: 14px; }
.leg-item { display: flex; align-items: center; gap: 7px; font-size: 10px; font-weight: 700; color: var(--text3); text-transform: uppercase; }
.leg-dot { width: 8px; height: 8px; border-radius: 2px; }

.period-bar { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; margin-bottom: 18px; padding-bottom: 4px; }
.period-bar::-webkit-scrollbar { display: none; }
.p-btn { padding: 8px 18px; border: 1px solid var(--border); border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer; background: var(--bg3); color: var(--text3); white-space: nowrap; transition: 0.2s; }
.p-btn.active { border-color: var(--gold); color: var(--gold); background: var(--bg2); }

/* =============================================
   FILTER BAR
   ============================================= */
.filter-bar { display: flex; gap: 12px; width: 100%; margin-bottom: 20px; align-items: center; }
.filter-bar select.f-input-dark { width: 220px; flex-shrink: 0; }
.filter-bar input.f-input-dark { flex: 1; }

/* =============================================
   AUTH SCREEN
   ============================================= */
#auth-screen { position: fixed; inset: 0; background: var(--bg); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.auth-box { background: var(--card); border-radius: 20px; padding: 40px 28px; width: 90%; max-width: 380px; border: 1px solid var(--border); text-align: center; }
.auth-box img { width: 56px; border-radius: 14px; margin-bottom: 14px; border: 1px solid var(--border2); }
.auth-title { font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 4px; }
.auth-sub { font-size: 12px; color: var(--text3); font-weight: 500; margin-bottom: 24px; }
.auth-tabs { display: flex; background: var(--bg3); border-radius: 10px; padding: 4px; margin-bottom: 22px; }
.auth-tab { flex: 1; padding: 10px; font-size: 12px; font-weight: 700; cursor: pointer; background: transparent; border: none; color: var(--text3); border-radius: 7px; }
.auth-tab.active { background: var(--bg2); color: var(--text); }
.auth-field input { width: 100%; padding: 14px 16px; font-size: 14px; font-weight: 500; font-family: 'Outfit', sans-serif; border: 1px solid var(--border); border-radius: 10px; background: var(--bg3); color: var(--text); margin-bottom: 10px; outline: none; }
.auth-btn { width: 100%; padding: 15px; background: var(--text); color: var(--bg); border: none; border-radius: 10px; font-size: 12px; font-weight: 800; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 6px; }

/* =============================================
   MOBILE RESPONSIVE
   ============================================= */
@media (max-width: 900px) {
  .sidebar { transform: translateX(-100%); }
  .sidebar.open { transform: translateX(0); }
  .content-area { margin-left: 0; }
  .topbar { left: 0; }
  .hamburger { display: flex; }

  .metrics { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .sum-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .sum-grid .m-card:nth-child(3) { grid-column: span 2; }

  .panel { grid-template-columns: 1fr; }

  .main { padding: 16px; }

  .filter-bar { flex-direction: column; }
  .filter-bar select.f-input-dark,
  .filter-bar input.f-input-dark { width: 100%; }
}

@media (min-width: 901px) {
  .sum-grid { grid-template-columns: repeat(3, 1fr); }
  .panel > .card { height: 100%; }
}

/* Scrollbar styling */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 99px; }
</style>
</head>
<body>

<!-- AUTH SCREEN -->
<div id="auth-screen">
  <div class="auth-box">
    <img src="RHN LOGO.jpg" alt="RHN Capital Logo">
    <div class="auth-title">RHN CAPITAL</div>
    <div class="auth-sub">Arus Keuangan — Akses Masuk</div>
    <div class="auth-tabs">
      <button class="auth-tab active" id="tab-login" onclick="switchTab('login')">Masuk</button>
      <button class="auth-tab" id="tab-register" onclick="switchTab('register')">Daftar</button>
    </div>
    <div id="auth-err" style="color:var(--red2);font-size:12px;margin-bottom:12px;display:none;"></div>
    <div class="auth-field"><input type="email" id="auth-email" class="f-input-dark" placeholder="Email"></div>
    <div class="auth-field"><input type="password" id="auth-pass" class="f-input-dark" placeholder="Sandi" onkeydown="if(event.key==='Enter')doAuth()"></div>
    <div class="auth-field" id="field-confirm" style="display:none"><input type="password" id="auth-pass2" class="f-input-dark" placeholder="Ulangi Sandi"></div>
    <button class="auth-btn" id="auth-submit-btn" onclick="doAuth()">MASUK</button>
  </div>
</div>

<!-- APP SCREEN -->
<div id="app-screen" style="display:none;">
<div class="app-shell">

  <!-- SIDEBAR -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-logo">
      <div class="logo-img"><img src="RHN LOGO.jpg" alt="Logo"></div>
      <div class="logo-text">
        <div class="main-text">RHN CAPITAL</div>
        <div class="sub-text">ARUS KEUANGAN</div>
      </div>
    </div>

    <div class="sidebar-brand-title">RHN-CAPITAL</div>

    <nav class="sidebar-nav">
      <button class="nav-btn active" onclick="switchPage('dashboard')"><span class="nav-icon">◈</span> DASHBOARD</button>
      <button class="nav-btn" onclick="switchPage('harian')"><span class="nav-icon">◻</span> HARIAN</button>
      <button class="nav-btn" onclick="switchPage('mingguan')"><span class="nav-icon">◻</span> MINGGUAN</button>
      <button class="nav-btn" onclick="switchPage('bulanan')"><span class="nav-icon">◻</span> BULANAN</button>
      <button class="nav-btn" onclick="switchPage('tahunan')"><span class="nav-icon">◻</span> TAHUNAN</button>
      <button class="nav-btn" onclick="switchPage('riwayat')"><span class="nav-icon">◻</span> RIWAYAT</button>
    </nav>

    <div class="sidebar-ext">
      <button class="nav-ext-btn" onclick="window.location.href='latar.html'">📈 HALAMAN RHN CAPITAL ↗</button>
      <button class="nav-ext-btn" onclick="window.location.href='jurnal.html'">📈 JURNAL FOREX ↗</button>
      <button class="nav-ext-btn" onclick="window.location.href='aset.html'">📈 JURNAL ASET ↗</button>
      <button class="nav-ext-btn" onclick="window.location.href='data.html'">📈 DATA PRIBADI ↗</button>
    </div>
  </aside>

  <!-- OVERLAY MOBILE -->
  <div class="sidebar-overlay" id="sidebar-overlay" onclick="closeSidebar()"></div>

  <!-- MAIN CONTENT -->
  <div class="content-area">

    <!-- TOP BAR -->
    <div class="topbar">
      <div class="topbar-left">
        <button class="hamburger" id="hamburger-btn" onclick="openSidebar()">☰</button>
        <div class="status-pill">
          <span class="usd-val" id="usd-rate-val">...</span>
        </div>
        <div class="status-pill">
          <span class="sync-dot" id="sync-dot" style="background:var(--text3);"></span>
          <span class="sync-text" id="sync-label">MENGHUBUNGKAN...</span>
        </div>
      </div>
      <div class="topbar-right">
        <button class="theme-btn" onclick="toggleTheme()" id="theme-toggle">🌙</button>
        <div class="user-pill">
          <div class="u-avatar" id="user-avatar">?</div>
          <div class="u-name" id="user-name">Memuat...</div>
          <button class="logout-btn" onclick="doLogout()">KELUAR</button>
        </div>
      </div>
    </div>

    <!-- PAGES -->
    <div class="main">

      <!-- DASHBOARD -->
      <div id="page-dashboard" class="page active">
        <div class="page-header">
          <h1>Dashboard</h1>
          <p>Ringkasan arus keuangan keseluruhan</p>
        </div>
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
            <div id="recent-list" class="list-wrap"></div>
          </div>
        </div>
      </div>

      <!-- HARIAN -->
      <div id="page-harian" class="page">
        <div class="page-header"><h1>Laporan Harian</h1><p>Pantau transaksi per hari</p></div>
        <div class="sum-grid" id="daily-sum"></div>
        <div class="card">
          <div class="card-head">
            <div class="card-title">Pilih Tanggal</div>
            <div style="margin-top:10px;"><input type="date" id="pick-daily" onchange="renderDaily()" class="f-input-dark" style="max-width:240px;"></div>
          </div>
          <div class="list-wrap" id="daily-body"></div>
        </div>
      </div>

      <!-- MINGGUAN -->
      <div id="page-mingguan" class="page">
        <div class="page-header"><h1>Laporan Mingguan</h1><p>Pantau transaksi per pekan</p></div>
        <div class="period-bar" id="week-sel"></div>
        <div class="sum-grid" id="week-sum"></div>
        <div class="card">
          <div class="card-head"><div class="card-title">Grafik Mingguan</div></div>
          <div class="chart-wrap">
            <div class="chart-legend">
              <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div>
              <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div>
            </div>
            <div style="height:200px"><canvas id="chartWeek"></canvas></div>
          </div>
          <div class="list-wrap" id="week-body"></div>
        </div>
      </div>

      <!-- BULANAN -->
      <div id="page-bulanan" class="page">
        <div class="page-header"><h1>Laporan Bulanan</h1><p>Pantau transaksi per bulan</p></div>
        <div class="period-bar" id="month-sel"></div>
        <div class="sum-grid" id="month-sum"></div>
        <div class="card">
          <div class="card-head"><div class="card-title">Grafik Bulanan</div></div>
          <div class="chart-wrap">
            <div class="chart-legend">
              <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div>
              <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div>
            </div>
            <div style="height:200px"><canvas id="chartMonth"></canvas></div>
          </div>
          <div class="list-wrap" id="month-body"></div>
        </div>
      </div>

      <!-- TAHUNAN -->
      <div id="page-tahunan" class="page">
        <div class="page-header"><h1>Laporan Tahunan</h1><p>Pantau transaksi per tahun</p></div>
        <div class="period-bar" id="year-sel"></div>
        <div class="sum-grid" id="year-sum"></div>
        <div class="card">
          <div class="card-head"><div class="card-title">Grafik Tahunan</div></div>
          <div class="chart-wrap">
            <div class="chart-legend">
              <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div>
              <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div>
            </div>
            <div style="height:200px"><canvas id="chartYear"></canvas></div>
          </div>
          <div class="list-wrap" id="year-body"></div>
        </div>
      </div>

      <!-- RIWAYAT -->
      <div id="page-riwayat" class="page">
        <div class="page-header"><h1>Semua Riwayat</h1><p>Seluruh riwayat transaksi</p></div>
        <div class="sum-grid" id="all-sum"></div>
        <div class="card">
          <div class="card-head"><div class="card-title">Filter & Cari</div></div>
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

    </div><!-- /main -->
  </div><!-- /content-area -->
</div><!-- /app-shell -->
</div><!-- /app-screen -->

<script>
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('show');
}
</script>

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

window.switchPage=function(p){ 
  document.querySelectorAll('.page').forEach(el=>el.classList.remove('active')); 
  document.querySelectorAll('.nav-btn').forEach(el=>{ el.classList.remove('active'); el.querySelector('.nav-icon').textContent='◻'; }); 
  document.getElementById('page-'+p).classList.add('active'); 
  const pages=['dashboard','harian','mingguan','bulanan','tahunan','riwayat']; 
  const activeBtn = document.querySelectorAll('.nav-btn')[pages.indexOf(p)];
  activeBtn.classList.add('active'); 
  activeBtn.querySelector('.nav-icon').textContent='◈';
  activePage=p; refreshAll(); 
  closeSidebar();
};

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
function refreshAll(){ renderMetrics(); renderList(document.getElementById('recent-list'), txs.slice(0,7)); if(activePage==='harian')renderDaily(); if(activePage==='mingguan')renderWeekly(); if(activePage==='bulanan')renderMonthly(); if(activePage==='tahunan')renderYearly(); if(activePage==='riwayat')renderAll(); }
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
    const hasil = event.results[0][0].transcript.toLowerCase();
    btnMic.innerHTML = "🎤 TEKAN UNTUK NGOMONG";

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

        if (jenisTx === 'expense') {
            if (hasil.includes("parkir") || hasil.includes("bensin") || hasil.includes("ongkos") || hasil.includes("gojek") || hasil.includes("grab")) fCat.value = 'Transportasi';
            else if (hasil.includes("makan") || hasil.includes("nasi") || hasil.includes("mie")) fCat.value = 'Makan';
            else if (hasil.includes("minum") || hasil.includes("kopi") || hasil.includes("es") || hasil.includes("jus")) fCat.value = 'Minum';
            else if (hasil.includes("listrik") || hasil.includes("air") || hasil.includes("wifi") || hasil.includes("internet") || hasil.includes("pulsa")) fCat.value = 'Utilitas';
            else if (hasil.includes("infak") || hasil.includes("sedekah") || hasil.includes("zakat") || hasil.includes("masjid")) fCat.value = 'Infak';
            else if (hasil.includes("kas")) fCat.value = 'Kas';
            else if (hasil.includes("aset") || hasil.includes("investasi") || hasil.includes("saham") || hasil.includes("kripto")) fCat.value = 'Pembelian Aset(Investasi)';
            else if (hasil.includes("loss") || hasil.includes("rugi")) fCat.value = 'Loss';
        } else if (jenisTx === 'income') {
            if (hasil.includes("investasi") || hasil.includes("saham")) fCat.value = 'Investasi';
            else if (hasil.includes("bonus")) fCat.value = 'Bonus';
            else if (hasil.includes("dividen")) fCat.value = 'Dividen';
            else if (hasil.includes("profit")) fCat.value = 'Profit';
            else if (hasil.includes("transfer")) fCat.value = 'Transfer Masuk';
        }
    }

    let hasilClean = hasil.replace(/\./g, '')
                          .replace(/\bribu\b/g, '000')
                          .replace(/\bjuta\b/g, '000000');
    
    let harga = "";
    const matchHarga = hasilClean.match(/seharga\s*(\d+)/) || hasilClean.match(/(?:rp|rupiah)\s*(\d+)/) || hasilClean.match(/(\d+)/);
    if (matchHarga) harga = matchHarga[1];

    let item = "";
    let kataKerja = "";
    const matchItem = hasil.match(/(beli|jajan|bayar|terima|dapat)\s+(.*?)\s+(?:seharga|sebesar)/);
    if (matchItem) {
      kataKerja = matchItem[1];
      item = matchItem[2];
    } else {
      const altMatch = hasilClean.match(/(beli|jajan|bayar|terima|dapat)\s+(.*?)\s+\d+/);
      if (altMatch) {
        kataKerja = altMatch[1];
        item = altMatch[2];
      }
    }
    
    if (item) {
        item = item.replace(/jam\s*\d+(\s*(pagi|siang|sore|malam))?/g, '')
                   .replace(/pagi|siang|sore|malam/g, '')
                   .replace(/kemaren|kemarin|besok/g, '')
                   .replace(/hari\s+(ini|minggu|senin|selasa|rabu|kamis|jumat|sabtu)/g, '')
                   .replace(/minggu\s+(ini|kemaren|kemarin|lalu)/g, '')
                   .replace(/bulan\s+(ini|kemaren|kemarin|lalu)/g, '')
                   .replace(/tahun\s+(ini|kemaren|kemarin|lalu)/g, '')
                   .replace(/tanggal\s*\d+/g, '')
                   .replace(/\s+/g, ' ')
                   .trim();
                   
        item = kataKerja + " " + item;
        item = item.trim();
    }
    
    if (!item && harga) {
        item = hasil.replace(/\d+/g, '').replace(/\./g, '').trim() || (jenisTx === 'expense' ? "Pengeluaran (Suara)" : "Pemasukan (Suara)");
    }

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

    if(harga) {
        fNote.value = item.trim();
        fAmount.value = harga;
        fDate.value = localISOTime;

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
