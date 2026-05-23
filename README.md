<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="color-scheme" content="dark light">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Arus Keuangan — RHN CAPITAL</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap');

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }

    :root {
      /* === DARK MODE: ORIGINAL PITCH BLACK === */
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

      /* Pemetaan dari variabel baru ke styling lama */
      --radius-sm: 8px;
      --radius-md: 12px;
      --radius-lg: 16px;
      --radius-xl: 24px;
      --shadow-xs: none;
      --shadow-sm: none;
      --shadow-md: none;
      --shadow-lg: none;
    }

    /* LIGHT MODE */
    body.light-mode {
      --bg: #F8F9FA; --bg2: #FFFFFF; --bg3: #E9ECEF;
      --card: #FFFFFF; --border: #DEE2E6; --border2: #CED4DA;
      --text: #111111; --text2: #444444; --text3: #6C757D;
      --blue-title: #0056b3;
    }

    html, body {
      height: 100%;
    }

    body {
      font-family: 'Outfit', sans-serif;
      background: var(--bg);
      color: var(--text);
      font-size: 14px;
      line-height: 1.5;
      overflow-x: hidden;
      transition: background-color 0.4s ease, color 0.4s ease;
    }

    /* ===================== SCROLLBAR ===================== */
    ::-webkit-scrollbar { display: none; }

    /* ===================== AUTH SCREEN ===================== */
    #auth-screen {
      position: fixed; inset: 0; background: var(--bg);
      display: flex; align-items: center; justify-content: center; z-index: 9999;
    }
    #auth-screen::before, #auth-screen::after { display: none; }

    .auth-box {
      background: var(--card); border-radius: 24px; padding: 40px 24px;
      width: 90%; max-width: 400px; border: 1px solid var(--border); text-align: center;
      animation: fadeIn 0.4s ease;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

    .auth-brand { display: flex; flex-direction: column; align-items: center; margin-bottom: 24px; }
    .auth-logo-ring { width: 64px; height: 64px; border-radius: 16px; border: 1px solid var(--border2); padding: 0; margin-bottom: 16px; box-shadow: none; }
    .auth-logo-ring img { width: 100%; height: 100%; border-radius: 16px; object-fit: cover; }
    
    .auth-brand-name { font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 800; color: var(--text); letter-spacing: -0.5px; margin-bottom: 4px; }
    .auth-brand-sub { font-family: 'Outfit', sans-serif; font-size: 12px; font-weight: 500; color: var(--text3); letter-spacing: 0; text-transform: none; }

    .auth-tabs { display: flex; background: var(--bg3); border-radius: 12px; padding: 4px; margin-bottom: 24px; border: none; }
    .auth-tab { flex: 1; padding: 12px; font-size: 12px; font-weight: 700; font-family: 'Outfit', sans-serif; cursor: pointer; background: transparent; border: none; color: var(--text3); border-radius: 8px; }
    .auth-tab.active { background: var(--bg2); color: var(--text); box-shadow: none; }

    .auth-err { background: transparent; border: none; color: var(--red2); font-size: 12px; padding: 0; margin-bottom: 12px; display: none; font-family: 'Outfit', sans-serif; }

    .auth-input { width: 100%; padding: 16px; font-size: 14px; font-weight: 500; font-family: 'Outfit', sans-serif; border: 1px solid var(--border); border-radius: 12px; background: var(--bg2); color: var(--text); margin-bottom: 12px; outline: none; }
    .auth-input:focus { border-color: var(--text); box-shadow: none; }
    .auth-input::placeholder { color: var(--text3); }

    .auth-btn { width: 100%; padding: 16px; background: var(--text); color: var(--bg); border: none; border-radius: 12px; font-size: 13px; font-weight: 800; font-family: 'Outfit', sans-serif; cursor: pointer; text-transform: uppercase; margin-top: 8px; box-shadow: none; letter-spacing: 0; }

    /* ===================== APP LAYOUT ===================== */
    #app-screen { display: none; min-height: 100vh; }

    /* SIDEBAR (desktop) */
    .sidebar { position: fixed; left: 0; top: 0; bottom: 0; width: 260px; background: var(--bg2); border-right: 1px solid var(--border); display: flex; flex-direction: column; z-index: 100; transition: transform 0.3s; }
    .sidebar::before { display: none; }
    .sidebar-brand { padding: 24px; border-bottom: none; display: flex; align-items: center; gap: 12px; }
    .sidebar-logo { width: 44px; height: 44px; border-radius: 12px; border: 1px solid var(--text3); padding: 2px; flex-shrink: 0; }
    .sidebar-logo img { width: 100%; height: 100%; border-radius: 8px; object-fit: cover; }
    .sidebar-brand-text .name { font-family: 'Outfit', sans-serif; font-size: 18px; font-weight: 800; color: var(--text); letter-spacing: 0.5px; }
    .sidebar-brand-text .sub { font-size: 10px; font-weight: 700; color: var(--text); text-transform: uppercase; letter-spacing: 1px; font-family: 'Outfit', sans-serif; }

    .sidebar-ext { padding: 0 24px 16px; border-bottom: 1px solid var(--border); display: flex; flex-direction: column; gap: 8px; }
    .ext-link-btn { display: flex; align-items: center; gap: 8px; padding: 0; background: transparent; border: none; color: var(--text); font-size: 11px; font-weight: 700; font-family: 'Outfit', sans-serif; letter-spacing: 0.5px; text-transform: uppercase; cursor: pointer; border-radius: 0; }
    .ext-link-btn:hover { color: var(--text2); background: transparent; }
    .ext-link-btn .ext-dot { display: none; }

    .sidebar-nav { flex: 1; padding: 16px 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; }
    .nav-section-label { display: none; }
    .nav-item { display: flex; align-items: center; gap: 12px; padding: 10px 20px; border-radius: 100px; cursor: pointer; color: var(--text3); font-size: 11px; font-weight: 700; font-family: 'Outfit', sans-serif; border: 1px solid var(--border); background: transparent; width: 100%; text-transform: uppercase; letter-spacing: 0.5px; }
    .nav-item:hover { background: var(--bg3); color: var(--text); }
    .nav-item.active { background: var(--text); color: var(--bg); border-color: var(--text); box-shadow: none; }
    .nav-item .nav-icon, .nav-item .nav-pip { display: none; }

    .sidebar-footer { padding: 16px 24px 24px; border-top: none; }
    .user-card-sidebar { display: flex; align-items: center; justify-content: space-between; background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; padding: 4px 12px 4px 4px; }
    .user-avatar-sidebar { width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--text); background: transparent; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 12px; color: var(--text); }
    .user-info-sidebar { display: flex; align-items: center; flex: 1; padding-left: 10px; }
    .user-info-sidebar .uname { font-size: 12px; font-weight: 600; color: var(--text); font-family: 'Outfit', sans-serif; }
    .user-info-sidebar .urole { display: none; }
    .logout-btn-sidebar { background: transparent; border: 1px solid var(--border2); color: var(--text3); padding: 6px 12px; border-radius: 8px; font-size: 10px; font-weight: 700; font-family: 'Outfit', sans-serif; cursor: pointer; text-transform: uppercase; width: auto; height: auto; }

    /* MAIN CONTENT */
    .main-content { margin-left: 260px; min-height: 100vh; display: flex; flex-direction: column; background: var(--bg); }
    
    .topbar { position: sticky; top: 0; z-index: 50; background: var(--bg); border-bottom: none; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; backdrop-filter: none; }
    body.light-mode .topbar { background: var(--bg); }
    .topbar-left { display: flex; align-items: center; gap: 16px; }
    .topbar-page-title { font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 800; color: var(--blue-title); letter-spacing: -0.5px; }
    .topbar-right { display: flex; align-items: center; gap: 12px; }

    .usd-badge { display: flex; align-items: center; gap: 8px; background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; padding: 8px 16px; }
    .usd-label { display: none; }
    .usd-value { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: var(--text); }
    
    .sync-badge { display: flex; align-items: center; gap: 8px; background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; padding: 8px 16px; }
    .sync-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--text3); transition: 0.3s; box-shadow: none; }
    .sync-dot.live { background: var(--green2); box-shadow: 0 0 8px var(--green2); animation: none; }
    .sync-text { font-size: 10px; font-weight: 700; color: var(--text3); letter-spacing: 1px; text-transform: uppercase; font-family: 'Outfit', sans-serif; }

    .theme-toggle-btn { width: 40px; height: 40px; border-radius: 12px; background: var(--bg2); border: 1px solid var(--border); color: var(--text); font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; }

    .hamburger { display: none; width: 40px; height: 40px; border-radius: 12px; background: var(--bg2); border: 1px solid var(--border); flex-direction: column; gap: 4px; align-items: center; justify-content: center; }
    .hamburger span { display: block; width: 16px; height: 2px; background: var(--text); border-radius: 2px; }

    .pages-wrap { flex: 1; padding: 0 24px 80px; max-width: 1400px; margin: 0 auto; width: 100%; }
    .page { display: none; animation: fadeIn 0.4s ease; }
    .page.active { display: block; }

    /* ===================== METRIC CARDS ===================== */
    .metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
    .metric-card { background: var(--card); border-radius: var(--radius); padding: 16px; border: 1px solid var(--border); display: flex; flex-direction: column; box-shadow: none; }
    .metric-card::before, .metric-icon { display: none; }
    .metric-label { font-size: 9px; font-weight: 800; text-transform: uppercase; color: var(--text3); margin-bottom: 8px; letter-spacing: 0.5px; font-family: 'Outfit', sans-serif; }
    .metric-value { font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 800; margin-bottom: 4px; white-space: nowrap; color: var(--text); }
    .metric-usd { display: inline-block; background: var(--bg3); color: var(--text3); font-size: 10px; font-family: 'JetBrains Mono', monospace; font-weight: 600; padding: 2px 8px; border-radius: 6px; align-self: flex-start; margin-bottom: 8px; border: none; }
    .metric-sub { font-size: 10px; font-weight: 500; color: var(--text3); margin-bottom: 12px; flex-grow: 1; font-family: 'Outfit', sans-serif; }
    
    .metric-bar { height: 4px; background: var(--bg3); border-radius: 2px; width: 100%; overflow: hidden; }
    .metric-bar-fill { height: 100%; border-radius: 2px; transition: width 0.6s ease; }
    .metric-card.inc .metric-bar-fill { background: var(--green2); }
    .metric-card.exp .metric-bar-fill { background: var(--red2); }
    .metric-card.bal .metric-bar-fill { background: var(--border2); }
    .metric-card.cnt .metric-bar-fill { background: var(--blue); }

    .sum-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }

    /* ===================== LAYOUT PANELS ===================== */
    .panel-grid { display: grid; grid-template-columns: 380px 1fr; gap: 24px; align-items: start; }

    /* ===================== CARDS ===================== */
    .card { background: var(--card); border-radius: var(--radius); border: 1px solid var(--border); margin-bottom: 24px; box-shadow: none; }
    .card-header { padding: 24px 24px 16px; border-bottom: none; }
    .card-title { font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px; letter-spacing: 0; }
    .card-sub { font-size: 12px; color: var(--text3); font-family: 'Outfit', sans-serif; margin-top: 0; }
    .card-divider { display: none; }
    .card-body { padding: 0 24px 24px; }

    /* ===================== FORM ELEMENTS ===================== */
    .type-toggle { display: flex; background: var(--bg3); border-radius: 12px; padding: 4px; margin-bottom: 20px; border: none; }
    .t-btn { flex: 1; padding: 12px; border: none; border-radius: 8px; font-size: 12px; font-weight: 700; font-family: 'Outfit', sans-serif; cursor: pointer; background: transparent; color: var(--text3); transition: 0.2s; letter-spacing: 0; }
    .t-btn.income.active { background: var(--bg2); color: var(--green2); box-shadow: none; }
    .t-btn.expense.active { background: var(--bg2); color: var(--text); box-shadow: none; }

    .form-group { margin-bottom: 16px; }
    .form-label { font-size: 10px; font-weight: 800; color: var(--text3); margin-bottom: 8px; display: block; text-transform: uppercase; letter-spacing: 0.5px; font-family: 'Outfit', sans-serif; }
    
    .f-input { width: 100%; padding: 16px; border-radius: 12px; border: 1px solid var(--border); background-color: var(--bg2) !important; color: var(--text) !important; outline: none; font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 500; appearance: none; -webkit-appearance: none; transition: border-color 0.3s; box-shadow: none; }
    .f-input:focus { border-color: var(--text); box-shadow: none; }
    .f-input::placeholder { color: var(--text3); }
    textarea.f-input { height: 100px; resize: none; }
    select.f-input { background-image: url('data:image/svg+xml;utf8,<svg fill="%23888899" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>'); background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px; cursor: pointer; }
    select.f-input option { background: var(--card); color: var(--text); }

    .submit-btn { width: 100%; padding: 16px; background: var(--text); color: var(--bg); border: none; border-radius: 12px; font-size: 13px; font-weight: 800; font-family: 'Outfit', sans-serif; cursor: pointer; transition: 0.2s; text-transform: uppercase; margin-top: 8px; box-shadow: none; letter-spacing: 0; }

    /* ===================== TRANSACTION LIST ===================== */
    .tx-list { padding: 8px 0; }
    .tx-item { padding: 16px; margin-bottom: 12px; border-radius: 16px; background: var(--bg2); border: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 12px; transition: none; }
    .tx-item:hover { background: var(--bg3); border-color: var(--border); }
    
    .tx-icon { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800; background: var(--bg3) !important; flex-shrink: 0; }
    .tx-icon.inc { color: var(--green2); }
    .tx-icon.exp { color: var(--red2); }

    .tx-body { flex: 1; min-width: 0; }
    .tx-note { font-size: 14px; font-weight: 700; color: var(--text); font-family: 'Outfit', sans-serif; margin-bottom: 2px; white-space: normal; word-wrap: break-word; line-height: 1.4; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .tx-meta { font-size: 11px; font-weight: 500; color: var(--text3); font-family: 'Outfit', sans-serif; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    
    .cat-pill { font-size: 9px; font-weight: 600; padding: 2px 6px; border-radius: 6px; background: var(--bg) !important; border: 1px solid var(--border); color: var(--text3); text-transform: uppercase; letter-spacing: 0; }

    .tx-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; flex-shrink: 0; margin-left: 12px; }
    .tx-amount { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 800; white-space: nowrap; color: var(--text) !important; }
    .tx-usd { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; color: var(--text3); margin-top: 2px; }
    
    .del-btn { background: transparent; border: none; color: var(--red2); font-size: 11px; font-weight: 700; font-family: 'Outfit', sans-serif; cursor: pointer; text-transform: uppercase; margin-top: 4px; padding: 0; }

    .empty-state { text-align: center; padding: 40px; color: var(--text3); font-family: 'Outfit', sans-serif; font-size: 12px; }
    .empty-state .empty-icon { display: none; }

    /* ===================== PERIOD BAR ===================== */
    .period-bar { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; margin-bottom: 20px; padding-bottom: 8px; }
    .period-btn { padding: 10px 20px; border: 1px solid var(--border); border-radius: 100px; font-size: 11px; font-weight: 700; font-family: 'Outfit', sans-serif; cursor: pointer; background: var(--bg2); color: var(--text3); white-space: nowrap; transition: 0.2s; }
    .period-btn.active { border-color: var(--text); color: var(--text); background: var(--bg); box-shadow: none; }

    /* ===================== FILTER BAR ===================== */
    .filter-bar { display: flex; gap: 16px; margin-bottom: 24px; align-items: center; width: 100%; }
    .filter-select { width: 250px; flex-shrink: 0; }

    /* ===================== CHART ===================== */
    .chart-container { position: relative; height: 200px; margin-bottom: 24px; }
    .chart-legend { display: flex; gap: 16px; margin-bottom: 16px; justify-content: center; }
    .legend-item { display: flex; align-items: center; gap: 8px; font-size: 10px; font-weight: 700; font-family: 'Outfit', sans-serif; color: var(--text3); text-transform: uppercase; letter-spacing: 0; }
    .legend-dot { width: 10px; height: 10px; border-radius: 2px; }

    /* ===================== MOBILE OVERLAY ===================== */
    .sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 99; backdrop-filter: none; }

    /* ===================== RESPONSIVE (LAPTOP) ===================== */
    @media (min-width: 901px) {
      .topbar-page-title { display: block; font-size: 22px; color: var(--blue-title); }
    }

    /* ===================== RESPONSIVE (TABLET) ===================== */
    @media (max-width: 900px) {
      .sidebar { transform: translateX(-100%); width: 280px; }
      .sidebar.open { transform: translateX(0); box-shadow: var(--shadow-float); }
      .sidebar-overlay.open { display: block; }
      .main-content { margin-left: 0; }
      .hamburger { display: flex; }
      .topbar { padding: 16px 20px; border-bottom: 1px solid var(--border); }
      .topbar-page-title { font-size: 18px; display: block; }
      .usd-badge { display: none; }
      .pages-wrap { padding: 20px 16px; }
      .panel-grid { grid-template-columns: 1fr; }
    }

    /* ===================== RESPONSIVE (HP - 100% MENTOK LAYAR) ===================== */
    @media (max-width: 768px) {
      .pages-wrap { padding: 0 0 80px 0 !important; width: 100%; overflow-x: hidden; }
      .topbar { border-bottom: none; }
      
      .metrics-grid {
        grid-template-columns: repeat(2, 1fr); gap: 8px;
        padding: 0 !important; margin: 0 !important;
        background: transparent; border: none;
      }
      .metrics-grid .metric-card { border-radius: 24px !important; border-left: none; border-right: none; }

      .sum-grid {
        grid-template-columns: repeat(2, 1fr); gap: 8px;
        padding: 0 !important; margin: 0 0 24px 0 !important;
        background: transparent; border: none;
      }
      .sum-grid .metric-card { border-radius: 24px !important; border-left: none; border-right: none; }
      .sum-grid .metric-card:nth-child(3) { grid-column: span 2; }

      .panel-grid { display: flex; flex-direction: column; gap: 16px; background: transparent; }
      .card { padding: 16px 0 !important; border-radius: 0 !important; border: none !important; background: transparent !important; margin-bottom: 0; }
      
      .card-header, .form-group, .filter-bar, .chart-container, .period-bar, .type-toggle, .submit-btn, .chart-legend {
        padding-left: 16px !important; padding-right: 16px !important;
      }
      .card-body { padding-left: 0 !important; padding-right: 0 !important; }

      .filter-bar { flex-direction: column; }
      .type-toggle, .submit-btn { width: calc(100% - 32px) !important; margin-left: 16px !important; margin-right: 16px !important; }
      .filter-select, .filter-bar .f-input { width: 100%; border-radius: 16px; }
      .f-input { padding: 18px 16px; font-size: 15px; border-radius: 16px; }

      .tx-list { padding: 0 !important; margin: 0 !important; width: 100%; }
      .tx-item {
        width: 100% !important; margin: 0 0 12px 0 !important; padding: 16px 16px !important;
        border-radius: 24px !important; border-left: none !important; border-right: none !important;
        background: var(--card); flex-direction: row; justify-content: space-between; align-items: center; gap: 12px;
      }
      .tx-right { margin-left: 0; align-items: flex-end; }
      .del-btn { margin-top: 6px; }
      .cat-pill { display: inline-block !important; }
    }
  </style>
</head>
<body>

<div id="auth-screen">
  <div class="auth-box">
    <div class="auth-brand">
      <div class="auth-logo-ring"><img src="RHN LOGO.jpg" alt="RHN Capital"></div>
      <div class="auth-brand-name">RHN CAPITAL</div>
      <div class="auth-brand-sub">Arus Keuangan Akses Masuk</div>
    </div>

    <div class="auth-tabs">
      <button class="auth-tab active" id="tab-login" onclick="switchTab('login')">Masuk</button>
      <button class="auth-tab" id="tab-register" onclick="switchTab('register')">Daftar</button>
    </div>

    <div id="auth-err" style="color:var(--red2);font-size:12px;margin-bottom:12px;display:none;font-family:'Outfit',sans-serif;"></div>
    
    <div style="margin-bottom:12px;"><input type="email" id="auth-email" class="auth-input" placeholder="Email"></div>
    <div style="margin-bottom:12px;"><input type="password" id="auth-pass" class="auth-input" placeholder="Sandi" onkeydown="if(event.key==='Enter')doAuth()"></div>
    <div style="margin-bottom:12px;display:none;" id="field-confirm"><input type="password" id="auth-pass2" class="auth-input" placeholder="Ulangi Sandi"></div>
    
    <button class="auth-btn" id="auth-submit-btn" onclick="doAuth()">MASUK</button>
  </div>
</div>


<div id="app-screen">

  <div class="sidebar-overlay" id="sidebar-overlay" onclick="closeSidebar()"></div>

  <aside class="sidebar" id="sidebar">

    <div class="sidebar-brand">
      <div class="sidebar-logo"><img src="RHN LOGO.jpg" alt="Logo"></div>
      <div class="sidebar-brand-text">
        <div class="name">RHN CAPITAL</div>
        <div class="sub">Arus Keuangan</div>
      </div>
    </div>

    <div class="sidebar-ext">
      <button class="ext-link-btn" onclick="window.location.href='latar.html'">
        <span class="ext-dot"></span> Halaman RHN Capital ↗
      </button>
      <button class="ext-link-btn" onclick="window.location.href='jurnal.html'">
        <span class="ext-dot"></span> Jurnal Forex ↗
      </button>
      <button class="ext-link-btn" onclick="window.location.href='aset.html'">
        <span class="ext-dot"></span> Jurnal Aset ↗
      </button>
      <button class="ext-link-btn" onclick="window.location.href='data.html'">
        <span class="ext-dot"></span> Data Pribadi ↗
      </button>
    </div>

    <nav class="sidebar-nav">
      <div class="nav-section-label">Menu Utama</div>

      <button class="nav-item active" onclick="switchPage('dashboard',this)">
        Dashboard
      </button>

      <button class="nav-item" onclick="switchPage('harian',this)">
        Harian
      </button>

      <button class="nav-item" onclick="switchPage('mingguan',this)">
        Mingguan
      </button>

      <button class="nav-item" onclick="switchPage('bulanan',this)">
        Bulanan
      </button>

      <button class="nav-item" onclick="switchPage('tahunan',this)">
        Tahunan
      </button>

      <button class="nav-item" onclick="switchPage('riwayat',this)">
        Semua Riwayat
      </button>
    </nav>

    <div class="sidebar-footer">
      <div class="user-card-sidebar">
        <div style="display:flex; align-items:center;">
          <div class="user-avatar-sidebar" id="user-avatar">?</div>
          <div class="user-info-sidebar">
            <div class="uname" id="user-name">Memuat...</div>
          </div>
        </div>
        <button class="logout-btn-sidebar" onclick="doLogout()" title="Keluar">KELUAR</button>
      </div>
    </div>
  </aside>

  <div class="main-content">

    <header class="topbar">
      <div class="topbar-left">
        <button class="hamburger" id="hamburger-btn" onclick="toggleSidebar()">
          <span></span><span></span><span></span>
        </button>
        <div class="topbar-page-title" id="topbar-title">Dashboard</div>
      </div>
      <div class="topbar-right">
        <div class="usd-badge">
          <span class="usd-label">USD/IDR</span>
          <span class="usd-value" id="usd-rate-val">...</span>
        </div>
        <div class="sync-badge">
          <span class="sync-dot" id="sync-dot"></span>
          <span class="sync-text" id="sync-label">MENGHUBUNGKAN</span>
        </div>
        <button class="theme-toggle-btn" id="theme-toggle" onclick="toggleTheme()">☀️</button>
      </div>
    </header>

    <div class="pages-wrap">

      <div id="page-dashboard" class="page active">
        <div class="metrics-grid" id="metric-cards"></div>
        <div class="panel-grid">

          <div class="card">
            <div class="card-header">
              <div class="card-title">Tambah Transaksi</div>
              <div class="card-sub">Catat pemasukan atau pengeluaran baru</div>
            </div>
            <div class="card-body">
              <div class="type-toggle">
                <button class="t-btn income active" id="btn-inc" onclick="selType('income')">+ Pemasukan</button>
                <button class="t-btn expense"        id="btn-exp" onclick="selType('expense')">- Pengeluaran</button>
              </div>
              <div class="form-group">
                <label class="form-label">JUMLAH (RP)</label>
                <input type="number" id="f-amount" class="f-input" placeholder="0">
              </div>
              <div class="form-group">
                <label class="form-label">KATEGORI</label>
                <select id="f-cat" class="f-input"></select>
              </div>
              <div class="form-group">
                <label class="form-label">KETERANGAN</label>
                <textarea id="f-note" class="f-input" placeholder="Catatan transaksi..."></textarea>
              </div>
              <div class="form-group">
                <label class="form-label">WAKTU</label>
                <input type="datetime-local" id="f-date" class="f-input">
              </div>
              <button class="submit-btn" id="save-btn" onclick="addTx()">SIMPAN TRANSAKSI</button>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <div class="card-title">Aktivitas Terakhir</div>
            </div>
            <div class="card-body" style="padding-top:14px;">
              <div id="recent-list" class="tx-list" style="max-height:560px;overflow-y:auto;"></div>
            </div>
          </div>

        </div>
      </div><div id="page-harian" class="page">
        <div class="card" style="margin-bottom:20px;">
          <div class="card-body" style="display:flex;align-items:center;gap:14px;padding-top:24px;">
            <label class="form-label" style="margin:0;white-space:nowrap;">PILIH TANGGAL</label>
            <input type="date" id="pick-daily" onchange="renderDaily()" class="f-input" style="margin:0;max-width:200px;">
          </div>
        </div>
        <div class="sum-grid" id="daily-sum"></div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">Laporan Harian</div>
          </div>
          <div class="card-body" style="padding-top:14px;">
            <div class="tx-list" id="daily-body"></div>
          </div>
        </div>
      </div>

      <div id="page-mingguan" class="page">
        <div class="period-bar" id="week-sel"></div>
        <div class="sum-grid" id="week-sum"></div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">Laporan Mingguan</div>
          </div>
          <div class="card-body">
            <div class="chart-legend">
              <div class="legend-item"><div class="legend-dot" style="background:var(--green2)"></div>Pemasukan</div>
              <div class="legend-item"><div class="legend-dot" style="background:var(--red2)"></div>Pengeluaran</div>
            </div>
            <div class="chart-container"><canvas id="chartWeek"></canvas></div>
          </div>
          <div class="card-body" style="padding-top:0;">
            <div class="tx-list" id="week-body"></div>
          </div>
        </div>
      </div>

      <div id="page-bulanan" class="page">
        <div class="period-bar" id="month-sel"></div>
        <div class="sum-grid" id="month-sum"></div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">Laporan Bulanan</div>
          </div>
          <div class="card-body">
            <div class="chart-legend">
              <div class="legend-item"><div class="legend-dot" style="background:var(--green2)"></div>Pemasukan</div>
              <div class="legend-item"><div class="legend-dot" style="background:var(--red2)"></div>Pengeluaran</div>
            </div>
            <div class="chart-container"><canvas id="chartMonth"></canvas></div>
          </div>
          <div class="card-body" style="padding-top:0;">
            <div class="tx-list" id="month-body"></div>
          </div>
        </div>
      </div>

      <div id="page-tahunan" class="page">
        <div class="period-bar" id="year-sel"></div>
        <div class="sum-grid" id="year-sum"></div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">Laporan Tahunan</div>
          </div>
          <div class="card-body">
            <div class="chart-legend">
              <div class="legend-item"><div class="legend-dot" style="background:var(--green2)"></div>Pemasukan</div>
              <div class="legend-item"><div class="legend-dot" style="background:var(--red2)"></div>Pengeluaran</div>
            </div>
            <div class="chart-container"><canvas id="chartYear"></canvas></div>
          </div>
          <div class="card-body" style="padding-top:0;">
            <div class="tx-list" id="year-body"></div>
          </div>
        </div>
      </div>

      <div id="page-riwayat" class="page">
        <div class="sum-grid" id="all-sum"></div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">Semua Riwayat</div>
          </div>
          <div class="card-body">
            <div class="filter-bar">
              <select id="flt-type" class="f-input filter-select" onchange="renderAll()">
                <option value="">Semua Filter</option>
                <option value="income">Pemasukan Saja</option>
                <option value="expense">Pengeluaran Saja</option>
              </select>
              <input type="text" id="flt-search" class="f-input" style="flex:1;margin:0;"
                     placeholder="Cari berdasarkan keterangan atau kategori..." oninput="renderAll()">
            </div>
            <div class="tx-list" id="all-body"></div>
          </div>
        </div>
      </div>

    </div></div></div><script type="module">

window.toggleTheme = function() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById('theme-toggle').textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  refreshAll(); 
};
if(localStorage.getItem('theme') === 'light') { document.body.classList.add('light-mode'); document.getElementById('theme-toggle').textContent = '☀️'; }

window.toggleSidebar = function() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('open');
};
window.closeSidebar = function() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
};

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

window.switchPage=function(p,btn){ document.querySelectorAll('.page').forEach(el=>el.classList.remove('active')); document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('active')); document.getElementById('page-'+p).classList.add('active'); if(btn)btn.classList.add('active'); const titles={'dashboard':'Dashboard','harian':'Laporan Harian','mingguan':'Laporan Mingguan','bulanan':'Laporan Bulanan','tahunan':'Laporan Tahunan','riwayat':'Semua Riwayat'}; document.getElementById('topbar-title').textContent=titles[p]||p; activePage=p; closeSidebar(); refreshAll(); };

function calcSum(arr){ const inc=arr.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0), exp=arr.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0); return{inc,exp,bal:inc-exp,count:arr.length}; }

function renderSumGrid(el,arr){ 
  const s=calcSum(arr); 
  const pct=s.inc>0?Math.min(100,Math.round((s.exp/s.inc)*100)):0; 
  el.innerHTML=`
    <div class="metric-card inc">
      <div class="metric-label">TOTAL PEMASUKAN</div>
      <div class="metric-value">${fmt(s.inc)}</div>
      <div class="metric-usd">${getUSD(s.inc)}</div>
      <div class="metric-sub">${s.inc>0?s.count+' transaksi':'-'}</div>
      <div class="metric-bar"><div class="metric-bar-fill" style="width:100%"></div></div>
    </div>
    <div class="metric-card exp">
      <div class="metric-label">TOTAL PENGELUARAN</div>
      <div class="metric-value">${fmt(s.exp)}</div>
      <div class="metric-usd">${getUSD(s.exp)}</div>
      <div class="metric-sub">${pct}% dari pemasukan</div>
      <div class="metric-bar"><div class="metric-bar-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="metric-card bal">
      <div class="metric-label">SALDO BERSIH</div>
      <div class="metric-value">${fmt(s.bal)}</div>
      <div class="metric-usd">${getUSD(s.bal)}</div>
      <div class="metric-sub">${s.bal>=0?'Surplus':'Defisit'}</div>
      <div class="metric-bar"><div class="metric-bar-fill" style="width:${s.inc>0?Math.max(0,Math.min(100,Math.round((s.bal/s.inc)*100))):0}%"></div></div>
    </div>
  `; 
}

const createTxCard = (t) => `<div class="tx-item"><div class="tx-icon ${t.type}">${t.type==='income'?'↑':'↓'}</div><div class="tx-body"><div class="tx-note">${t.note}</div><div class="tx-meta"><span class="cat-pill">${t.category}</span>${fmtDate(t.date)} · ${fmtTime(t.date)}</div></div><div class="tx-right"><div class="tx-amount ${t.type}">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div><div class="tx-usd">${getUSD(t.amount)}</div><button class="del-btn" onclick="delTx('${t.id}')">HAPUS</button></div></div>`;
function renderList(container, arr) { container.innerHTML = arr.length ? arr.map(t => createTxCard(t)).join('') : '<div class="empty-state">Belum ada transaksi</div>'; }

function renderMetrics(){
  const s=calcSum(txs), ts=calcSum(txs.filter(t=>new Date(t.date).toDateString()===new Date().toDateString())), pct=s.inc>0?Math.min(100,Math.round((s.exp/s.inc)*100)):0;
  document.getElementById('metric-cards').innerHTML=`<div class="metric-card inc"><div class="metric-label">TOTAL PEMASUKAN</div><div class="metric-value">${fmt(s.inc)}</div><div class="metric-usd">${getUSD(s.inc)}</div><div class="metric-sub">${s.count} transaksi</div><div class="metric-bar"><div class="metric-bar-fill" style="width:100%"></div></div></div><div class="metric-card exp"><div class="metric-label">TOTAL PENGELUARAN</div><div class="metric-value">${fmt(s.exp)}</div><div class="metric-usd">${getUSD(s.exp)}</div><div class="metric-sub">${pct}% dari pemasukan</div><div class="metric-bar"><div class="metric-bar-fill" style="width:${pct}%"></div></div></div><div class="metric-card bal"><div class="metric-label">SALDO BERSIH</div><div class="metric-value">${fmt(s.bal)}</div><div class="metric-usd">${getUSD(s.bal)}</div><div class="metric-sub">${s.bal>=0?'Surplus':'Defisit'}</div><div class="metric-bar"><div class="metric-bar-fill" style="width:${s.inc>0?Math.max(0,Math.min(100,Math.round((s.bal/s.inc)*100))):0}%"></div></div></div><div class="metric-card cnt"><div class="metric-label">HARI INI</div><div class="metric-value">${ts.count} transaksi</div><div class="metric-usd" style="visibility:hidden;">.</div><div class="metric-sub" style="font-weight:700;">${ts.inc>0?fmt(ts.inc):'Kosong'}</div><div class="metric-bar"><div class="metric-bar-fill" style="width:${ts.count>0?100:0}%"></div></div></div>`;
}

function mkChart(id,labels,incData,expData){ if(charts[id]) charts[id].destroy(); const c=document.getElementById(id); if(!c)return; const isLight = document.body.classList.contains('light-mode'); charts[id]=new Chart(c,{type:'bar',data:{labels,datasets:[{label:'Pemasukan',data:incData,backgroundColor:isLight?'#10B981':'#10B981',borderRadius:4},{label:'Pengeluaran',data:expData,backgroundColor:isLight?'#F87171':'#F87171',borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:isLight?'#888':'#888',font:{size:10,family:"'Outfit'"}},grid:{display:false},border:{display:false}},y:{ticks:{color:isLight?'#888':'#888',font:{size:10,family:"'Outfit'"},callback:v=>Intl.NumberFormat('id-ID',{notation:'compact'}).format(v)},grid:{color:isLight?'#DEE2E6':'#222228',drawBorder:false},border:{display:false}}}}}); }

window.renderDaily=function(){ const pick=document.getElementById('pick-daily').value, target=pick?new Date(pick).toDateString():new Date().toDateString(), arr=txs.filter(t=>new Date(t.date).toDateString()===target).sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('daily-sum'),arr); renderList(document.getElementById('daily-body'), arr); };
function wkKey(d){const dt=new Date(d);const day=dt.getDay();const diff=dt.getDate()-day+(day===0?-6:1);return new Date(new Date(d).setDate(diff)).toISOString().slice(0,10)}
function renderWeekly(){ const weeks={};txs.forEach(t=>{const k=wkKey(t.date);(weeks[k]=weeks[k]||[]).push(t)}); const keys=Object.keys(weeks).sort().reverse().slice(0,8); document.getElementById('week-sel').innerHTML=keys.map((k,i)=>{const m=new Date(k),s=new Date(k);s.setDate(s.getDate()+6);return`<button class="period-btn${i===0?' active':''}" onclick="selWeek('${k}',this)">${m.toLocaleDateString('id-ID',{day:'2-digit',month:'short'})} – ${s.toLocaleDateString('id-ID',{day:'2-digit',month:'short'})}</button>`}).join(''); if(keys.length)showWeek(keys[0]); }
window.selWeek=function(k,btn){document.querySelectorAll('#week-sel .period-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showWeek(k)};
function showWeek(k){ const arr=txs.filter(t=>wkKey(t.date)===k).sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('week-sum'),arr); renderList(document.getElementById('week-body'),arr); const days=['Sen','Sel','Rab','Kam','Jum','Sab','Min'],inc=new Array(7).fill(0),exp=new Array(7).fill(0); arr.forEach(t=>{const idx=(new Date(t.date).getDay()+6)%7;if(t.type==='income')inc[idx]+=t.amount;else exp[idx]+=t.amount}); mkChart('chartWeek',days,inc,exp); }
function renderMonthly(){ const months={};txs.forEach(t=>{const k=t.date.slice(0,7);(months[k]=months[k]||[]).push(t)}); const keys=Object.keys(months).sort().reverse().slice(0,12); document.getElementById('month-sel').innerHTML=keys.map((k,i)=>{const[y,m]=k.split('-');const d=new Date(y,m-1);return`<button class="period-btn${i===0?' active':''}" onclick="selMonth('${k}',this)">${d.toLocaleDateString('id-ID',{month:'long',year:'numeric'})}</button>`}).join(''); if(keys.length)showMonth(keys[0]); }
window.selMonth=function(k,btn){document.querySelectorAll('#month-sel .period-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showMonth(k)};
function showMonth(k){ const arr=txs.filter(t=>t.date.slice(0,7)===k).sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('month-sum'),arr); renderList(document.getElementById('month-body'),arr); const[y,m]=k.split('-');const dim=new Date(y,m,0).getDate(), labels=[],inc=new Array(dim).fill(0),exp=new Array(dim).fill(0); for(let i=1;i<=dim;i++)labels.push(i+''); arr.forEach(t=>{const d=new Date(t.date).getDate()-1;if(t.type==='income')inc[d]+=t.amount;else exp[d]+=t.amount}); mkChart('chartMonth',labels,inc,exp); }
function renderYearly(){ const years={};txs.forEach(t=>{const k=t.date.slice(0,4);(years[k]=years[k]||[]).push(t)}); const keys=Object.keys(years).sort().reverse(); document.getElementById('year-sel').innerHTML=keys.map((k,i)=>`<button class="period-btn${i===0?' active':''}" onclick="selYear('${k}',this)">${k}</button>`).join(''); if(keys.length)showYear(keys[0]); }
window.selYear=function(k,btn){document.querySelectorAll('#year-sel .period-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');showYear(k)};
function showYear(k){ const arr=txs.filter(t=>t.date.startsWith(k)).sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('year-sum'),arr); renderList(document.getElementById('year-body'),arr); const MNTHS=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'], inc=new Array(12).fill(0),exp=new Array(12).fill(0); arr.forEach(t=>{const m=new Date(t.date).getMonth();if(t.type==='income')inc[m]+=t.amount;else exp[m]+=t.amount}); mkChart('chartYear',MNTHS,inc,exp); }
window.renderAll=function(){ const tf=document.getElementById('flt-type').value, s=(document.getElementById('flt-search').value||'').toLowerCase(); let arr=[...txs]; if(tf)arr=arr.filter(t=>t.type===tf); if(s)arr=arr.filter(t=>t.note.toLowerCase().includes(s)||t.category.toLowerCase().includes(s)); arr.sort((a,b)=>new Date(b.date)-new Date(a.date)); renderSumGrid(document.getElementById('all-sum'),arr); renderList(document.getElementById('all-body'),arr); };
function refreshAll(){ renderMetrics(); renderList(document.getElementById('recent-list'), txs.slice(0,10)); if(activePage==='harian')renderDaily(); if(activePage==='mingguan')renderWeekly(); if(activePage==='bulanan')renderMonthly(); if(activePage==='tahunan')renderYearly(); if(activePage==='riwayat')renderAll(); }
document.getElementById('pick-daily').value=nowISO().slice(0,10); document.getElementById('f-date').value=nowISO(); selType('income');
</script>
</body>
</html>
