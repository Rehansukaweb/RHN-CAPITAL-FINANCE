<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Buku Kas Lengkap — Arus Keuangan, Forex &amp; Kripto</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,500&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.4/chart.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<style>
/* ============================================================
   BUKU KAS LENGKAP — DESIGN TOKENS (tema ledger fisik digital)
   ============================================================ */
:root{
  --bg-deep:#0E2A21; --bg-deep-2:#123626; --bg-deep-3:#0A2019;
  --paper:#FBF6EA; --paper-2:#F2ECDB; --paper-3:#EAE2C9;
  --line:#DED2AE; --line-soft:#E9E0C6;
  --ink:#1C2B22; --ink-soft:#5B6B5E; --ink-faint:#8B9A8C;
  --gold:#B8901F; --gold-soft:#E7CD86; --gold-bg:#FBF0D4;
  --rust:#AE4E2D; --rust-soft:#E4A484; --rust-bg:#FBE7DC;
  --sage:#5C7D61; --sage-bg:#E3EBE0;
  --blue:#3D6E9A; --blue-bg:#DCE8F2;
  --white:#FFFFFF;
  --shadow-sm: 0 2px 8px rgba(20,40,30,0.08);
  --shadow-md: 0 8px 24px rgba(20,40,30,0.14);
  --shadow-lg: 0 20px 48px rgba(20,40,30,0.22);
  --radius-sm:8px; --radius-md:14px; --radius-lg:22px;
  --font-display:'Fraunces', serif; --font-body:'Manrope', sans-serif; --font-mono:'IBM Plex Mono', monospace;
  --sidebar-w: 264px;
}
[data-theme="malam"]{
  --bg-deep:#081A14; --bg-deep-2:#0C2119; --bg-deep-3:#05120D;
  --paper:#16241C; --paper-2:#1C2E23; --paper-3:#233826;
  --line:#33473A; --line-soft:#2A3D30;
  --ink:#EDE7D4; --ink-soft:#AEBBA9; --ink-faint:#71857A;
  --gold:#E7CD86; --gold-soft:#B8901F; --gold-bg:#2C2712;
  --rust:#E4A484; --rust-soft:#AE4E2D; --rust-bg:#2E1B12;
  --sage:#8FB491; --sage-bg:#16261A;
  --blue:#7FB0DE; --blue-bg:#122334;
  --white:#0F1D16;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.25); --shadow-md: 0 8px 24px rgba(0,0,0,0.35); --shadow-lg: 0 20px 48px rgba(0,0,0,0.5);
}
*{box-sizing:border-box; margin:0; padding:0;}
html,body{height:100%;}
body{font-family:var(--font-body); background:var(--paper-2); color:var(--ink); -webkit-font-smoothing:antialiased; overflow-x:hidden; transition:background .3s ease, color .3s ease;}
::selection{ background:var(--gold-soft); color:var(--bg-deep);}
a{color:inherit;} button{font-family:inherit; cursor:pointer;} input,select,textarea{font-family:inherit;}
::-webkit-scrollbar{width:10px; height:10px;} ::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:var(--line); border-radius:10px;} ::-webkit-scrollbar-thumb:hover{background:var(--gold-soft);}
.swal2-container{ z-index:100000 !important; }

/* ---------- SPLASH ---------- */
#splash{ position:fixed; inset:0; background:var(--bg-deep-3); z-index:99999; display:flex; align-items:center; justify-content:center; transition:opacity .5s ease, visibility .5s ease;}
#splash.hide{ opacity:0; visibility:hidden; pointer-events:none; }
.splash-box{ text-align:center; }
.splash-mark{ width:64px; height:64px; border-radius:16px; background:linear-gradient(135deg,var(--gold-soft),var(--gold)); display:flex; align-items:center; justify-content:center; font-family:var(--font-display); font-weight:800; font-size:26px; color:var(--bg-deep-3); margin:0 auto 18px; box-shadow:0 0 40px rgba(231,205,134,0.35);}
.splash-title{ font-family:var(--font-display); font-size:24px; font-weight:700; color:#F6EFDA; letter-spacing:.04em;}
.splash-sub{ font-size:11px; letter-spacing:.24em; text-transform:uppercase; color:var(--gold-soft); margin-top:6px;}
.splash-bar{ width:180px; height:3px; border-radius:4px; background:rgba(255,255,255,0.12); margin:22px auto 0; overflow:hidden;}
.splash-bar i{ display:block; height:100%; width:40%; background:var(--gold-soft); animation:splashMove 1.1s ease-in-out infinite;}
@keyframes splashMove{ 0%{transform:translateX(-100%);} 100%{transform:translateX(340%);} }

/* ---------- AUTH & PIN ---------- */
.auth-shell{ position:fixed; inset:0; background:var(--bg-deep-3); display:flex; align-items:center; justify-content:center; z-index:9998; padding:20px;}
.auth-card{ width:100%; max-width:420px; background:var(--paper); border-radius:var(--radius-lg); padding:34px 30px; box-shadow:var(--shadow-lg); text-align:center; border:1px solid var(--line-soft);}
.auth-mark{ width:56px; height:56px; border-radius:14px; margin:0 auto 14px; background:linear-gradient(135deg,var(--gold-soft),var(--gold)); display:flex; align-items:center; justify-content:center; font-family:var(--font-display); font-weight:800; font-size:22px; color:var(--bg-deep-3);}
.auth-title{ font-family:var(--font-display); font-size:22px; font-weight:700;}
.auth-sub{ font-size:12.5px; color:var(--ink-soft); margin:4px 0 20px;}
.auth-tabs{ display:flex; background:var(--paper-3); border-radius:12px; padding:4px; margin-bottom:18px;}
.auth-tab{ flex:1; padding:10px; border:none; background:none; border-radius:9px; font-weight:700; font-size:12.5px; color:var(--ink-soft);}
.auth-tab.active{ background:var(--paper); color:var(--ink); box-shadow:var(--shadow-sm);}
.auth-card input{ width:100%; padding:13px 14px; border-radius:11px; border:1px solid var(--line); background:var(--paper-2); color:var(--ink); font-size:14px; margin-bottom:10px; outline:none;}
.auth-card input:focus{ border-color:var(--gold-soft); box-shadow:0 0 0 3px var(--gold-bg);}
.auth-err{ font-size:12px; color:var(--rust); margin-bottom:8px; display:none;}
.auth-divider{ display:flex; align-items:center; gap:10px; margin:14px 0; font-size:11px; color:var(--ink-faint); text-transform:uppercase; letter-spacing:.08em;}
.auth-divider::before,.auth-divider::after{ content:""; flex:1; height:1px; background:var(--line);}
.btn-google{ background:#fff; color:#222; border:1px solid var(--line); display:flex; align-items:center; justify-content:center; gap:10px;}
.auth-forgot{ background:none; border:none; color:var(--ink-soft); font-size:11.5px; text-decoration:underline; margin-top:14px; font-weight:700;}
#pinScreen .auth-card input{ text-align:center; letter-spacing:14px; font-size:22px; font-family:var(--font-mono); padding:14px;}
.pin-links{ display:flex; justify-content:space-between; margin-top:16px;}
.pin-links button{ background:none; border:none; color:var(--ink-soft); font-size:11px; text-decoration:underline; font-weight:700;}

/* ============================================================
   LAYOUT
   ============================================================ */
.app-shell{ display:flex; min-height:100vh; display:none;}
.app-shell.show{ display:flex; }
.sidebar{ width:var(--sidebar-w); min-width:var(--sidebar-w); background:linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-deep-3) 100%); color:var(--gold-bg); display:flex; flex-direction:column; position:relative; z-index:20; box-shadow: 4px 0 24px rgba(0,0,0,0.18);}
.sidebar::after{ content:""; position:absolute; top:0; right:0; bottom:0; width:6px; background:repeating-linear-gradient(180deg, var(--gold) 0 10px, transparent 10px 20px); opacity:.55;}
.brand{ display:flex; align-items:center; gap:12px; padding:26px 24px 16px 24px;}
.brand-mark{ width:42px; height:42px; border-radius:10px; background:linear-gradient(135deg, var(--gold-soft), var(--gold)); display:flex; align-items:center; justify-content:center; font-family:var(--font-display); font-weight:700; font-size:20px; color:var(--bg-deep-3); box-shadow: inset 0 0 0 2px rgba(255,255,255,0.25); flex-shrink:0;}
.brand-text h1{ font-family:var(--font-display); font-weight:600; font-size:18px; line-height:1.1; color:#F6EFDA;}
.brand-text span{ font-size:10.5px; letter-spacing:.14em; text-transform:uppercase; color:var(--gold-soft); opacity:.85;}
.user-chip{ margin:0 16px 10px; padding:10px 12px; background:rgba(255,255,255,0.05); border:1px dashed rgba(231,205,134,0.3); border-radius:12px; display:flex; align-items:center; gap:10px;}
.user-chip .ua{ width:30px; height:30px; border-radius:50%; background:var(--gold-soft); color:var(--bg-deep-3); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:12.5px; flex-shrink:0;}
.user-chip .un{ font-size:11.5px; font-weight:700; color:#F6EFDA; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
.user-chip .ucode{ font-size:9.5px; color:var(--gold-soft); font-family:var(--font-mono);}
.ledger-tabs{ list-style:none; padding:4px 14px; display:flex; flex-direction:column; gap:2px; flex:1; overflow-y:auto;}
.ledger-tabs .tab-group-label{ font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:rgba(231,205,134,0.55); padding:14px 12px 6px;}
.ledger-tab{ display:flex; align-items:center; gap:12px; padding:10px 14px; border-radius:10px; color:rgba(246,239,218,0.78); font-weight:600; font-size:14px; position:relative; border:1px dashed transparent; transition: all .18s ease; background:none; width:100%; text-align:left;}
.ledger-tab .tab-ico{ width:20px; text-align:center; font-size:15px; opacity:.9;}
.ledger-tab:hover{ background:rgba(255,255,255,0.05); color:#fff;}
.ledger-tab.active{ background:var(--paper); color:var(--bg-deep-3); box-shadow:var(--shadow-md);}
.sidebar-foot{ padding:14px 20px 20px; border-top:1px dashed rgba(231,205,134,0.25);}
.mini-balance{ font-family:var(--font-mono); font-size:11.5px; color:rgba(246,239,218,0.6); margin-bottom:6px;}
.mini-balance strong{ display:block; font-family:var(--font-display); font-size:19px; color:#F6EFDA; font-weight:600;}
.logout-mini{ width:100%; padding:9px; margin-top:8px; border-radius:9px; background:rgba(174,78,45,0.2); border:1px solid rgba(228,164,132,0.4); color:var(--rust-soft); font-weight:700; font-size:11.5px;}

.main{ flex:1; min-width:0; display:flex; flex-direction:column; height:100vh; overflow-y:auto;}
.topbar{ position:sticky; top:0; z-index:15; display:flex; align-items:center; justify-content:space-between; gap:16px; padding:20px 34px; background:linear-gradient(180deg, var(--paper-2) 70%, transparent); backdrop-filter:blur(6px);}
.topbar h2{ font-family:var(--font-display); font-size:24px; font-weight:600;}
.topbar .sub{ font-size:12.5px; color:var(--ink-soft); margin-top:2px;}
.topbar-actions{ display:flex; align-items:center; gap:10px;}
.icon-btn{ width:38px; height:38px; border-radius:50%; border:1px solid var(--line); background:var(--paper); display:flex; align-items:center; justify-content:center; font-size:15px; color:var(--ink); transition:.15s; position:relative;}
.icon-btn:hover{ background:var(--gold-bg); border-color:var(--gold-soft); transform:translateY(-1px);}
.menu-toggle{ display:none;}
.rate-pill{ display:flex; align-items:center; gap:6px; background:var(--paper); border:1px solid var(--line); border-radius:20px; padding:8px 14px; font-family:var(--font-mono); font-size:12px; font-weight:700;}
.page{ display:none; padding:0 34px 48px; animation:fadeUp .35s ease;}
.page.active{ display:block;}
@keyframes fadeUp{ from{opacity:0; transform:translateY(8px);} to{opacity:1; transform:translateY(0);} }

.btn{ display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:11px 18px; border-radius:11px; font-weight:700; font-size:14px; border:1px solid transparent; transition:.15s ease; white-space:nowrap;}
.btn-primary{ background:var(--bg-deep); color:var(--gold-bg);} .btn-primary:hover{ background:var(--bg-deep-2); transform:translateY(-1px);}
.btn-gold{ background:linear-gradient(135deg,var(--gold-soft),var(--gold)); color:var(--bg-deep-3);} .btn-gold:hover{ filter:brightness(1.05);}
.btn-ghost{ background:transparent; color:var(--ink); border:1px solid var(--line);} .btn-ghost:hover{ background:var(--paper-3);}
.btn-danger{ background:var(--rust-bg); color:var(--rust);} .btn-danger:hover{ background:var(--rust); color:#fff;}
.btn-blue{ background:var(--blue-bg); color:var(--blue);} .btn-blue:hover{ background:var(--blue); color:#fff;}
.btn-sm{ padding:7px 12px; font-size:12.5px; border-radius:9px;} .btn-block{ width:100%;}

.ledger-card{ position:relative; background:var(--paper); border-radius:var(--radius-md); padding:20px 20px 22px; box-shadow:var(--shadow-sm); border:1px solid var(--line-soft);}
.card-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:20px; margin-bottom:32px;}
@media(max-width:1200px){ .card-grid{ grid-template-columns:repeat(2,1fr);} }
@media(max-width:640px){ .card-grid{ grid-template-columns:1fr;} }
.stat-card{ display:flex; flex-direction:column; gap:8px;}
.stat-top{ display:flex; align-items:center; justify-content:space-between;}
.stat-label{ font-size:12px; text-transform:uppercase; letter-spacing:.08em; color:var(--ink-soft); font-weight:700;}
.stat-ico{ width:32px; height:32px; border-radius:9px; display:flex; align-items:center; justify-content:center; font-size:15px;}
.stat-value{ font-family:var(--font-mono); font-weight:700; font-size:22px; letter-spacing:-.01em;}
.stat-foot{ font-size:11.5px; color:var(--ink-soft);}

.section-head{ display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; gap:12px; flex-wrap:wrap;}
.section-head h3{ font-family:var(--font-display); font-size:20px; font-weight:600;}
.section-head .desc{ font-size:12.5px; color:var(--ink-soft); margin-top:2px;}
.two-col{ display:grid; grid-template-columns:1.5fr 1fr; gap:20px; margin-bottom:32px; align-items:start;}
@media(max-width:1050px){ .two-col{ grid-template-columns:1fr;} }
.panel{ background:var(--paper); border-radius:var(--radius-md); padding:20px; border:1px solid var(--line-soft); box-shadow:var(--shadow-sm);}
.panel-title{ font-family:var(--font-display); font-weight:600; font-size:16px; margin-bottom:4px;}
.panel-sub{ font-size:12px; color:var(--ink-soft); margin-bottom:14px;}
.chart-wrap{ position:relative; height:250px;} .chart-wrap.small{ height:200px;}
.legend-list{ display:flex; flex-direction:column; gap:10px; margin-top:12px;}
.legend-row{ display:flex; align-items:center; gap:10px; font-size:13px;}
.legend-dot{ width:10px; height:10px; border-radius:50%; flex-shrink:0;}
.legend-row .lbl{ flex:1;} .legend-row .pct{ font-family:var(--font-mono); color:var(--ink-soft); font-weight:600;}

.table-wrap{ overflow-x:auto;}
table.data-table{ width:100%; border-collapse:collapse; font-size:13px;}
table.data-table thead th{ text-align:left; font-size:10.5px; text-transform:uppercase; letter-spacing:.08em; color:var(--ink-soft); padding:10px 12px; border-bottom:2px solid var(--line); white-space:nowrap;}
table.data-table tbody td{ padding:12px; border-bottom:1px dashed var(--line-soft); vertical-align:middle;}
table.data-table tbody tr:hover{ background:var(--paper-3);}
.amount-in{ color:var(--sage); font-family:var(--font-mono); font-weight:700;}
.amount-out{ color:var(--rust); font-family:var(--font-mono); font-weight:700;}
.amount-transfer{ color:var(--ink-soft); font-family:var(--font-mono); font-weight:700;}
.amount-debt{ color:var(--gold); font-family:var(--font-mono); font-weight:700;}
.amount-recv{ color:var(--blue); font-family:var(--font-mono); font-weight:700;}
.tx-type-badge{ display:inline-flex; align-items:center; gap:6px; font-size:11px; font-weight:700; padding:4px 10px; border-radius:20px;}
.badge-in{ background:var(--sage-bg); color:var(--sage);} .badge-out{ background:var(--rust-bg); color:var(--rust);}
.badge-transfer{ background:var(--paper-3); color:var(--ink-soft);} .badge-debt{ background:var(--gold-bg); color:var(--gold);} .badge-recv{ background:var(--blue-bg); color:var(--blue);}
.cat-chip{ display:inline-flex; align-items:center; gap:6px; font-size:12px; padding:4px 10px; border-radius:20px; background:var(--paper-3); font-weight:600;}
.row-actions{ display:flex; gap:6px;} .row-actions button{ width:29px; height:29px; border-radius:8px; border:1px solid var(--line); background:var(--paper); font-size:12.5px;}
.row-actions button:hover{ background:var(--gold-bg);} .row-actions button.del:hover{ background:var(--rust); color:#fff; border-color:var(--rust);}
.toolbar{ display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:18px;}
.search-box{ display:flex; align-items:center; gap:8px; background:var(--paper); border:1px solid var(--line); border-radius:11px; padding:9px 14px; min-width:220px; flex:1;}
.search-box input{ border:none; background:none; outline:none; font-size:13px; width:100%; color:var(--ink);}
.filter-select, select.field, input.field, textarea.field{ border:1px solid var(--line); background:var(--paper); border-radius:11px; padding:9px 12px; font-size:13px; color:var(--ink); outline:none;}
.filter-select:focus, select.field:focus, input.field:focus, textarea.field:focus{ border-color:var(--gold-soft); box-shadow:0 0 0 3px var(--gold-bg);}
.empty-state{ text-align:center; padding:50px 20px; color:var(--ink-soft);}
.empty-state .ico{ font-size:34px; margin-bottom:12px;} .empty-state h4{ font-family:var(--font-display); font-size:17px; color:var(--ink); margin-bottom:6px;}
.pagination{ display:flex; align-items:center; justify-content:space-between; margin-top:14px; font-size:12px; color:var(--ink-soft);}
.pagination .pg-btns{ display:flex; gap:6px;} .pagination button{ width:29px; height:29px; border-radius:8px; border:1px solid var(--line); background:var(--paper);}
.pagination button.active{ background:var(--bg-deep); color:var(--gold-bg); border-color:var(--bg-deep);} .pagination button:disabled{ opacity:.4;}

.acc-grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:16px; margin-bottom:28px;}
.acc-card{ border-radius:var(--radius-md); padding:18px; color:#fff; position:relative; overflow:hidden; min-height:140px; display:flex; flex-direction:column; justify-content:space-between; box-shadow:var(--shadow-md);}
.acc-card::before{ content:""; position:absolute; inset:0; opacity:.15; background-image:repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 22px);}
.acc-card .acc-top{ display:flex; justify-content:space-between; align-items:flex-start; position:relative; z-index:1;}
.acc-card .acc-name{ font-weight:700; font-size:14px;} .acc-card .acc-type{ font-size:10.5px; opacity:.8; text-transform:uppercase; letter-spacing:.08em;}
.acc-card .acc-balance{ font-family:var(--font-mono); font-size:22px; font-weight:700; position:relative; z-index:1;}
.acc-card .acc-actions{ position:relative; z-index:1; display:flex; gap:6px;}
.acc-card .acc-actions button{ background:rgba(255,255,255,0.18); border:none; color:#fff; width:27px; height:27px; border-radius:7px; font-size:12px;}
.acc-add-card{ border:2px dashed var(--line); border-radius:var(--radius-md); min-height:140px; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:8px; color:var(--ink-soft); font-weight:700; font-size:13px; background:transparent;}
.acc-add-card:hover{ border-color:var(--gold-soft); color:var(--gold); background:var(--gold-bg);}

.budget-item{ padding:14px 0; border-bottom:1px dashed var(--line-soft);} .budget-item:last-child{ border-bottom:none;}
.budget-top{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; font-size:13px;}
.budget-top .cat{ display:flex; align-items:center; gap:8px; font-weight:700;} .budget-top .val{ font-family:var(--font-mono); font-size:12px; color:var(--ink-soft);}
.progress-track{ height:9px; border-radius:20px; background:var(--paper-3); overflow:hidden;} .progress-fill{ height:100%; border-radius:20px; transition:width .4s ease;}
.budget-meta{ display:flex; justify-content:space-between; font-size:11px; color:var(--ink-soft); margin-top:6px;} .over-budget{ color:var(--rust); font-weight:700;}

.goal-grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:16px;}
.goal-card{ background:var(--paper); border-radius:var(--radius-md); padding:18px; border:1px solid var(--line-soft); box-shadow:var(--shadow-sm);}
.goal-head{ display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;}
.goal-name{ font-family:var(--font-display); font-weight:600; font-size:16px;} .goal-deadline{ font-size:11px; color:var(--ink-soft);}
.goal-ring-wrap{ display:flex; align-items:center; gap:14px; margin-bottom:12px;}
.goal-amounts{ font-size:12px; color:var(--ink-soft);} .goal-amounts strong{ display:block; font-family:var(--font-mono); font-size:15px; color:var(--ink);}

.crypto-grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(210px,1fr)); gap:14px; margin-bottom:26px;}
.crypto-card{ background:var(--paper); border:1px solid var(--line-soft); border-radius:var(--radius-md); padding:16px; box-shadow:var(--shadow-sm);}
.crypto-card .cc-top{ display:flex; align-items:center; gap:10px; margin-bottom:10px;}
.crypto-card .cc-ico{ width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:13px; color:#fff;}
.crypto-card .cc-name{ font-weight:700; font-size:13px;} .crypto-card .cc-sym{ font-size:10.5px; color:var(--ink-soft); text-transform:uppercase;}
.crypto-card .cc-price{ font-family:var(--font-mono); font-weight:700; font-size:17px;}
.crypto-card .cc-chg{ font-size:11.5px; font-weight:700; margin-top:2px;}

.forex-badge-buy{ background:var(--sage-bg); color:var(--sage); padding:3px 9px; border-radius:20px; font-size:11px; font-weight:800;}
.forex-badge-sell{ background:var(--rust-bg); color:var(--rust); padding:3px 9px; border-radius:20px; font-size:11px; font-weight:800;}
.forex-badge-open{ background:var(--gold-bg); color:var(--gold); padding:3px 9px; border-radius:20px; font-size:11px; font-weight:800;}
.forex-badge-closed{ background:var(--paper-3); color:var(--ink-soft); padding:3px 9px; border-radius:20px; font-size:11px; font-weight:800;}

.modal-overlay{ position:fixed; inset:0; background:rgba(10,25,18,0.55); backdrop-filter:blur(2px); display:none; align-items:center; justify-content:center; z-index:100; padding:20px;}
.modal-overlay.open{ display:flex; animation:fadeIn .2s ease;} @keyframes fadeIn{ from{opacity:0;} to{opacity:1;} }
.modal-box{ background:var(--paper); border-radius:var(--radius-lg); width:100%; max-width:520px; max-height:90vh; overflow-y:auto; box-shadow:var(--shadow-lg); animation:popIn .22s cubic-bezier(.2,.9,.3,1.2); border:1px solid var(--line-soft);}
@keyframes popIn{ from{opacity:0; transform:translateY(14px) scale(.97);} to{opacity:1; transform:translateY(0) scale(1);} }
.modal-head{ display:flex; justify-content:space-between; align-items:center; padding:20px 22px 12px; border-bottom:1px dashed var(--line-soft);}
.modal-head h3{ font-family:var(--font-display); font-size:18px; font-weight:600;}
.modal-close{ width:30px; height:30px; border-radius:50%; border:none; background:var(--paper-3); font-size:14px;} .modal-close:hover{ background:var(--rust-bg); color:var(--rust);}
.modal-body{ padding:18px 22px;} .modal-foot{ display:flex; justify-content:flex-end; gap:10px; padding:14px 22px 20px;}
.form-group{ margin-bottom:14px;} .form-group label{ display:block; font-size:12px; font-weight:700; margin-bottom:6px; color:var(--ink-soft);}
.form-row{ display:grid; grid-template-columns:1fr 1fr; gap:12px;}
.type-toggle{ display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:8px;}
.type-toggle.wide5{ grid-template-columns:repeat(5,1fr);}
.type-toggle button{ padding:9px 4px; border-radius:10px; border:1.5px solid var(--line); background:var(--paper); font-weight:700; font-size:12px;}
.type-toggle button.sel-income.active{ background:var(--sage-bg); border-color:var(--sage); color:var(--sage);}
.type-toggle button.sel-expense.active{ background:var(--rust-bg); border-color:var(--rust); color:var(--rust);}
.type-toggle button.sel-transfer.active{ background:var(--paper-3); border-color:var(--ink-soft); color:var(--ink);}
.type-toggle button.sel-debt.active{ background:var(--gold-bg); border-color:var(--gold); color:var(--gold);}
.type-toggle button.sel-recv.active{ background:var(--blue-bg); border-color:var(--blue); color:var(--blue);}
.color-swatches{ display:flex; flex-wrap:wrap; gap:8px;} .swatch{ width:28px; height:28px; border-radius:9px; border:2px solid transparent;} .swatch.sel{ border-color:var(--ink); transform:scale(1.08);}

.toast-stack{ position:fixed; bottom:22px; right:22px; z-index:200; display:flex; flex-direction:column; gap:10px;}
.toast{ background:var(--bg-deep); color:#F6EFDA; padding:13px 17px; border-radius:12px; box-shadow:var(--shadow-lg); display:flex; align-items:center; gap:10px; min-width:250px; font-size:13px; font-weight:600; animation:slideIn .25s ease; border:1px solid rgba(231,205,134,0.25);}
@keyframes slideIn{ from{opacity:0; transform:translateX(30px);} to{opacity:1; transform:translateX(0);} }
.toast.error{ background:#5A2A1B;}

.settings-list{ display:flex; flex-direction:column;}
.settings-row{ display:flex; align-items:center; justify-content:space-between; padding:15px 0; border-bottom:1px dashed var(--line-soft); gap:16px;} .settings-row:last-child{ border-bottom:none;}
.settings-row .info h4{ font-size:13.5px; font-weight:700; margin-bottom:3px;} .settings-row .info p{ font-size:11.5px; color:var(--ink-soft); max-width:400px;}
.theme-toggle-group{ display:flex; gap:8px; background:var(--paper-3); padding:4px; border-radius:11px;}
.theme-toggle-group button{ padding:8px 14px; border-radius:8px; border:none; background:none; font-size:12px; font-weight:700; color:var(--ink-soft);}
.theme-toggle-group button.active{ background:var(--paper); color:var(--ink); box-shadow:var(--shadow-sm);}

.kicker{ font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--gold); font-weight:800; margin-bottom:6px;}
.mono{ font-family:var(--font-mono);} .text-muted{ color:var(--ink-soft);} .flex-between{ display:flex; align-items:center; justify-content:space-between;}
.hidden{ display:none !important;} .mb-16{margin-bottom:16px;} .mt-8{margin-top:8px;} .mt-16{margin-top:16px;}

@media(max-width:900px){
  .sidebar{ position:fixed; left:0; top:0; bottom:0; transform:translateX(-100%); transition:.25s ease; z-index:60;}
  .sidebar.open{ transform:translateX(0);} .menu-toggle{ display:flex;} .main{ width:100%;}
  .topbar{ padding:16px;} .page{ padding:0 16px 40px;} .form-row{ grid-template-columns:1fr;}
  .overlay-bg{ position:fixed; inset:0; background:rgba(0,0,0,.4); z-index:19; display:none;} .overlay-bg.show{ display:block;}
}
</style>
</head>
<body data-theme="siang">

<!-- SPLASH -->
<div id="splash"><div class="splash-box">
  <div class="splash-mark">₿</div>
  <div class="splash-title">Buku Kas Lengkap</div>
  <div class="splash-sub">Arus Keuangan · Forex · Kripto</div>
  <div class="splash-bar"><i></i></div>
</div></div>

<!-- AUTH -->
<div class="auth-shell" id="authShell">
  <div class="auth-card">
    <div class="auth-mark">₿</div>
    <div class="auth-title">Buku Kas Lengkap</div>
    <div class="auth-sub">Masuk untuk menyinkronkan data Anda ke cloud</div>
    <div class="auth-tabs">
      <button class="auth-tab active" id="tabLogin">Masuk</button>
      <button class="auth-tab" id="tabRegister">Daftar</button>
    </div>
    <div class="auth-err" id="authErr"></div>
    <input type="email" id="authEmail" placeholder="Email">
    <input type="password" id="authPass" placeholder="Kata sandi">
    <input type="password" id="authPass2" class="hidden" placeholder="Ulangi kata sandi">
    <button class="btn btn-primary btn-block" id="authSubmitBtn">MASUK</button>
    <div class="auth-divider">atau</div>
    <button class="btn btn-block btn-google" id="googleBtn">
      <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C39.205,36.971,44,31,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
      Masuk dengan Google
    </button>
    <button class="auth-forgot" id="forgotBtn">Lupa kata sandi?</button>
  </div>
</div>

<!-- PIN -->
<div class="auth-shell hidden" id="pinScreen">
  <div class="auth-card">
    <div class="auth-mark">🔒</div>
    <div class="auth-title" id="pinTitle">Masukkan PIN</div>
    <div class="auth-sub" id="pinSub">Keamanan akun Anda</div>
    <div class="auth-err" id="pinErr"></div>
    <input type="password" id="pinInput" inputmode="numeric" maxlength="6" placeholder="••••••">
    <button class="btn btn-primary btn-block" id="pinSubmitBtn">LANJUTKAN</button>
    <div class="pin-links">
      <button id="pinLogoutBtn">Ganti Akun</button>
      <button id="pinForgotBtn">Lupa PIN</button>
    </div>
  </div>
</div>

<div class="overlay-bg" id="overlayBg"></div>
<div class="app-shell" id="appShell">
  <aside class="sidebar" id="sidebar">
    <div class="brand">
      <div class="brand-mark">₿</div>
      <div class="brand-text"><h1>Buku Kas</h1><span>Lengkap · Cloud Sync</span></div>
    </div>
    <div class="user-chip">
      <div class="ua" id="uaLetter">?</div>
      <div style="min-width:0;">
        <div class="un" id="unName">Memuat...</div>
        <div class="ucode">Kode transfer: <span id="ucodeVal">···</span></div>
      </div>
    </div>
    <ul class="ledger-tabs" id="navTabs">
      <div class="tab-group-label">Ikhtisar</div>
      <li><button class="ledger-tab active" data-page="dashboard"><span class="tab-ico">📖</span> Dasbor</button></li>
      <li><button class="ledger-tab" data-page="transaksi"><span class="tab-ico">🧾</span> Transaksi</button></li>
      <li><button class="ledger-tab" data-page="akun"><span class="tab-ico">👛</span> Akun</button></li>
      <div class="tab-group-label">Perencanaan</div>
      <li><button class="ledger-tab" data-page="anggaran"><span class="tab-ico">🎯</span> Anggaran</button></li>
      <li><button class="ledger-tab" data-page="target"><span class="tab-ico">🏺</span> Target Tabungan</button></li>
      <li><button class="ledger-tab" data-page="berulang"><span class="tab-ico">🔁</span> Transaksi Berulang</button></li>
      <div class="tab-group-label">Investasi &amp; Trading</div>
      <li><button class="ledger-tab" data-page="forex"><span class="tab-ico">📈</span> Jurnal Forex</button></li>
      <li><button class="ledger-tab" data-page="kripto"><span class="tab-ico">🪙</span> Aset Kripto</button></li>
      <div class="tab-group-label">Analisa &amp; Akun</div>
      <li><button class="ledger-tab" data-page="laporan"><span class="tab-ico">📊</span> Laporan</button></li>
      <li><button class="ledger-tab" data-page="kategori"><span class="tab-ico">🏷️</span> Kategori</button></li>
      <li><button class="ledger-tab" data-page="transfer"><span class="tab-ico">🚀</span> Transfer Antar User</button></li>
      <li><button class="ledger-tab hidden" id="navAdmin" data-page="admin"><span class="tab-ico">👑</span> Admin</button></li>
      <li><button class="ledger-tab" data-page="pengaturan"><span class="tab-ico">⚙️</span> Pengaturan</button></li>
    </ul>
    <div class="sidebar-foot">
      <div class="mini-balance">Total Saldo<strong id="sidebarBalance">Rp 0</strong></div>
      <button class="btn btn-gold btn-block" id="quickAddBtn" style="margin-top:8px;">+ Catat Transaksi</button>
      <button class="logout-mini" id="logoutBtn">KELUAR</button>
    </div>
  </aside>

  <main class="main">
    <div class="topbar">
      <div style="display:flex; align-items:center; gap:12px;">
        <button class="icon-btn menu-toggle" id="menuToggle">☰</button>
        <div><h2 id="pageTitle">Dasbor</h2><div class="sub" id="pageSub">Ringkasan arus kas Anda hari ini</div></div>
      </div>
      <div class="topbar-actions">
        <div class="rate-pill">$1 = <span id="usdRateVal">...</span></div>
        <button class="icon-btn" id="themeBtn" title="Ganti tema">🌙</button>
        <button class="icon-btn" id="exportBtn" title="Ekspor CSV">⬇️</button>
        <button class="btn btn-primary" id="topAddBtn">+ Transaksi Baru</button>
      </div>
    </div>

    <!-- DASHBOARD -->
    <section class="page active" id="page-dashboard">
      <div class="card-grid" id="statCards"></div>
      <div class="two-col">
        <div class="panel">
          <div class="panel-title">Arus Kas 6 Bulan Terakhir</div>
          <div class="panel-sub">Perbandingan pemasukan vs pengeluaran per bulan</div>
          <div class="chart-wrap"><canvas id="cashflowChart"></canvas></div>
        </div>
        <div class="panel">
          <div class="panel-title">Pengeluaran per Kategori</div>
          <div class="panel-sub">Bulan berjalan</div>
          <div class="chart-wrap small"><canvas id="categoryPieChart"></canvas></div>
          <div class="legend-list" id="pieLegend"></div>
        </div>
      </div>
      <div class="two-col">
        <div class="panel">
          <div class="flex-between mb-16"><div class="panel-title" style="margin-bottom:0;">Transaksi Terbaru</div><button class="btn btn-ghost btn-sm" data-goto="transaksi">Lihat semua</button></div>
          <div class="table-wrap"><table class="data-table" id="recentTxTable"><thead><tr><th>Tanggal</th><th>Keterangan</th><th>Kategori</th><th>Akun</th><th style="text-align:right;">Jumlah</th></tr></thead><tbody></tbody></table></div>
        </div>
        <div class="panel">
          <div class="panel-title">Status Anggaran</div>
          <div class="panel-sub">5 kategori dengan penggunaan tertinggi</div>
          <div id="dashBudgetList"></div>
        </div>
      </div>
    </section>

    <!-- TRANSAKSI -->
    <section class="page" id="page-transaksi">
      <div class="toolbar">
        <div class="search-box">🔍<input type="text" id="txSearch" placeholder="Cari keterangan, kategori, atau akun..."></div>
        <select class="filter-select" id="filterType"><option value="all">Semua Tipe</option><option value="income">Pemasukan</option><option value="expense">Pengeluaran</option><option value="transfer">Transfer</option><option value="debt">Hutang</option><option value="recv">Piutang</option></select>
        <select class="filter-select" id="filterAccount"><option value="all">Semua Akun</option></select>
        <select class="filter-select" id="filterRange"><option value="all">Sepanjang Waktu</option><option value="thismonth" selected>Bulan Ini</option><option value="lastmonth">Bulan Lalu</option><option value="thisyear">Tahun Ini</option></select>
        <button class="btn btn-ghost btn-sm" id="clearFilters">Bersihkan</button>
      </div>
      <div class="panel">
        <div class="table-wrap"><table class="data-table" id="txTable"><thead><tr><th>Tanggal</th><th>Tipe</th><th>Keterangan</th><th>Kategori</th><th>Akun</th><th style="text-align:right;">Jumlah</th><th></th></tr></thead><tbody></tbody></table></div>
        <div id="txEmpty" class="empty-state hidden"><div class="ico">🧾</div><h4>Belum ada transaksi</h4><p>Coba ubah filter, atau catat transaksi baru.</p></div>
        <div class="pagination" id="txPagination"></div>
      </div>
    </section>

    <!-- AKUN -->
    <section class="page" id="page-akun">
      <div class="section-head"><div><h3>Akun Saya</h3><div class="desc">Kelola dompet, rekening bank, dan e-wallet Anda</div></div><button class="btn btn-primary" id="addAccBtn">+ Tambah Akun</button></div>
      <div class="acc-grid" id="accGrid"></div>
      <div class="card-grid" style="grid-template-columns:repeat(2,1fr); margin-top:4px;">
        <div class="ledger-card stat-card"><div class="stat-label">Total Hutang Aktif</div><div class="stat-value" style="color:var(--gold)" id="totalDebtVal">Rp 0</div></div>
        <div class="ledger-card stat-card"><div class="stat-label">Total Piutang Aktif</div><div class="stat-value" style="color:var(--blue)" id="totalRecvVal">Rp 0</div></div>
      </div>
      <div class="section-head" style="margin-top:26px;"><div><h3>Transfer Antar Akun</h3><div class="desc">Pindahkan saldo tanpa memengaruhi laporan pemasukan/pengeluaran</div></div></div>
      <div class="panel" style="max-width:560px;">
        <div class="form-row"><div class="form-group"><label>Dari Akun</label><select class="field" id="trFrom"></select></div><div class="form-group"><label>Ke Akun</label><select class="field" id="trTo"></select></div></div>
        <div class="form-row"><div class="form-group"><label>Jumlah (Rp)</label><input class="field" type="text" id="trAmount" placeholder="0"></div><div class="form-group"><label>Tanggal</label><input class="field" type="date" id="trDate"></div></div>
        <div class="form-group"><label>Catatan</label><input class="field" type="text" id="trNote" placeholder="Opsional"></div>
        <button class="btn btn-gold btn-block" id="doTransferBtn">Proses Transfer</button>
      </div>
    </section>

    <!-- ANGGARAN -->
    <section class="page" id="page-anggaran">
      <div class="section-head"><div><h3>Anggaran Bulanan</h3><div class="desc" id="budgetPeriodLabel">Periode berjalan</div></div>
        <div style="display:flex; align-items:center; gap:14px;"><div class="month-nav" style="display:flex; align-items:center; gap:10px;"><button class="icon-btn" id="budgetPrevMonth">‹</button><span class="mono" id="budgetMonthLbl" style="min-width:140px; text-align:center; font-weight:700;">-</span><button class="icon-btn" id="budgetNextMonth">›</button></div><button class="btn btn-primary" id="addBudgetBtn">+ Buat Anggaran</button></div>
      </div>
      <div class="panel"><div id="budgetList"></div><div id="budgetEmpty" class="empty-state hidden"><div class="ico">🎯</div><h4>Belum ada anggaran</h4><p>Buat anggaran untuk mengontrol pengeluaran per kategori.</p></div></div>
    </section>

    <!-- TARGET -->
    <section class="page" id="page-target">
      <div class="section-head"><div><h3>Target Tabungan</h3><div class="desc">Wujudkan rencana keuangan Anda selangkah demi selangkah</div></div><button class="btn btn-primary" id="addGoalBtn">+ Buat Target</button></div>
      <div class="goal-grid" id="goalGrid"></div>
    </section>

    <!-- BERULANG -->
    <section class="page" id="page-berulang">
      <div class="section-head"><div><h3>Transaksi Berulang</h3><div class="desc">Otomatiskan pencatatan pemasukan &amp; pengeluaran rutin</div></div><button class="btn btn-primary" id="addRecurBtn">+ Tambah Jadwal</button></div>
      <div class="panel"><div id="recurList"></div></div>
    </section>

    <!-- FOREX -->
    <section class="page" id="page-forex">
      <div class="section-head"><div><h3>Jurnal Forex</h3><div class="desc">Catat setiap posisi trading, pantau win-rate dan performa</div></div><button class="btn btn-primary" id="addTradeBtn">+ Tambah Trade</button></div>
      <div class="card-grid" id="forexStats"></div>
      <div class="panel">
        <div class="table-wrap"><table class="data-table" id="forexTable"><thead><tr><th>Tanggal Buka</th><th>Pair</th><th>Arah</th><th>Lot</th><th>Entry</th><th>Exit</th><th>Status</th><th style="text-align:right;">P/L (Rp)</th><th></th></tr></thead><tbody></tbody></table></div>
        <div id="forexEmpty" class="empty-state hidden"><div class="ico">📈</div><h4>Belum ada catatan trading</h4><p>Tambahkan posisi trading pertama Anda.</p></div>
      </div>
    </section>

    <!-- KRIPTO -->
    <section class="page" id="page-kripto">
      <div class="section-head"><div><h3>Aset Kripto</h3><div class="desc">Harga langsung dari CoinGecko, tersinkron otomatis tiap 60 detik</div></div><button class="btn btn-primary" id="addHoldingBtn">+ Tambah Aset</button></div>
      <div class="crypto-grid" id="cryptoPriceGrid"></div>
      <div class="card-grid" style="grid-template-columns:repeat(3,1fr);" id="cryptoStats"></div>
      <div class="panel">
        <div class="table-wrap"><table class="data-table" id="cryptoTable"><thead><tr><th>Koin</th><th>Jumlah</th><th>Harga Rata Beli ($)</th><th>Harga Sekarang ($)</th><th style="text-align:right;">Nilai (Rp)</th><th style="text-align:right;">Untung/Rugi</th><th></th></tr></thead><tbody></tbody></table></div>
        <div id="cryptoEmpty" class="empty-state hidden"><div class="ico">🪙</div><h4>Belum ada aset kripto</h4><p>Tambahkan koin pertama Anda untuk mulai memantau portofolio.</p></div>
      </div>
    </section>

    <!-- LAPORAN -->
    <section class="page" id="page-laporan">
      <div class="section-head"><div><h3>Laporan Keuangan</h3><div class="desc">Analisa performa keuangan bulanan &amp; tahunan</div></div><button class="btn btn-primary" id="exportCsvBtn">⬇️ Ekspor CSV</button></div>
      <div class="card-grid" id="reportStats" style="grid-template-columns:repeat(3,1fr);"></div>
      <div class="two-col">
        <div class="panel"><div class="panel-title">Tren Tahunan</div><div class="panel-sub" id="yearLabel">2026</div><div class="chart-wrap"><canvas id="yearlyChart"></canvas></div></div>
        <div class="panel"><div class="panel-title">Komposisi Pemasukan vs Pengeluaran</div><div class="chart-wrap small"><canvas id="donutChart"></canvas></div></div>
      </div>
      <div class="panel"><div class="panel-title mb-16">Rincian Bulanan</div><div class="table-wrap"><table class="data-table" id="monthlyTable"><thead><tr><th>Bulan</th><th style="text-align:right;">Pemasukan</th><th style="text-align:right;">Pengeluaran</th><th style="text-align:right;">Arus Bersih</th><th style="text-align:right;">Tabungan (%)</th></tr></thead><tbody></tbody></table></div></div>
    </section>

    <!-- KATEGORI -->
    <section class="page" id="page-kategori">
      <div class="section-head"><div><h3>Kategori</h3><div class="desc">Atur label pemasukan &amp; pengeluaran sesuai kebutuhan Anda</div></div><button class="btn btn-primary" id="addCatBtn">+ Tambah Kategori</button></div>
      <div class="two-col" style="grid-template-columns:1fr 1fr;">
        <div class="panel"><div class="panel-title" style="color:var(--sage);">↑ Kategori Pemasukan</div><div id="catListIncome" class="mt-16"></div></div>
        <div class="panel"><div class="panel-title" style="color:var(--rust);">↓ Kategori Pengeluaran</div><div id="catListExpense" class="mt-16"></div></div>
      </div>
    </section>

    <!-- TRANSFER ANTAR USER -->
    <section class="page" id="page-transfer">
      <div class="section-head"><div><h3>Transfer Antar Pengguna</h3><div class="desc">Pindahkan data transaksi ke akun lain menggunakan kode 3 angka</div></div></div>
      <div class="panel" style="max-width:560px;">
        <div class="panel-title">Kode Transfer Anda</div>
        <div class="panel-sub">Bagikan kode ini agar pengguna lain bisa mengirim transaksi ke akun Anda</div>
        <div class="mono" style="font-size:32px; font-weight:800; letter-spacing:6px; color:var(--gold); text-align:center; padding:14px 0;" id="myTransferCode">···</div>
        <div class="form-group mt-16"><label>Kirim SEMUA transaksi ke kode tujuan</label><input class="field" type="text" id="transferTargetCode" maxlength="3" placeholder="Contoh: 482"></div>
        <button class="btn btn-blue btn-block" id="doUserTransferBtn">🚀 Transfer Semua Transaksi</button>
      </div>
    </section>

    <!-- ADMIN -->
    <section class="page" id="page-admin">
      <div class="section-head"><div><h3>👑 Admin — Aktivitas Semua Pengguna</h3><div class="desc">Pantau transaksi seluruh pengguna terdaftar</div></div><button class="btn btn-primary" id="loadAdminBtn">🔄 Muat Data</button></div>
      <div class="panel"><div class="table-wrap"><table class="data-table" id="adminTable"><thead><tr><th>Pengguna</th><th>Tanggal</th><th>Tipe</th><th>Keterangan</th><th style="text-align:right;">Jumlah</th></tr></thead><tbody></tbody></table></div></div>
    </section>

    <!-- PENGATURAN -->
    <section class="page" id="page-pengaturan">
      <div class="section-head"><div><h3>Pengaturan</h3><div class="desc">Preferensi tampilan, keamanan &amp; pengelolaan data</div></div></div>
      <div class="panel" style="max-width:640px;">
        <div class="settings-list">
          <div class="settings-row"><div class="info"><h4>Tema Tampilan</h4><p>Pilih tampilan terang (siang) atau gelap (malam)</p></div><div class="theme-toggle-group"><button data-theme-choice="siang" class="active">☀️ Siang</button><button data-theme-choice="malam">🌙 Malam</button></div></div>
          <div class="settings-row"><div class="info"><h4>Ubah PIN Keamanan</h4><p>Ganti 6 digit PIN kunci aplikasi Anda</p></div><button class="btn btn-ghost" id="changePinBtn">GANTI PIN</button></div>
          <div class="settings-row"><div class="info"><h4>Reset Kata Sandi</h4><p>Kirim link reset password ke email Anda</p></div><button class="btn btn-ghost" id="resetPassBtn">KIRIM LINK</button></div>
          <div class="settings-row"><div class="info"><h4>Ekspor Data</h4><p>Unduh seluruh data sebagai berkas JSON</p></div><button class="btn btn-ghost" id="exportJsonBtn">Unduh JSON</button></div>
          <div class="settings-row"><div class="info"><h4>Muat Data Contoh</h4><p>Isi ulang aplikasi dengan data ilustrasi (Firestore)</p></div><button class="btn btn-ghost" id="seedDataBtn">Muat Contoh</button></div>
          <div class="settings-row"><div class="info"><h4>Hapus Semua Data</h4><p>Tindakan ini akan mengosongkan seluruh catatan Anda di cloud</p></div><button class="btn btn-danger" id="resetDataBtn">Hapus Semua</button></div>
        </div>
      </div>
      <div class="panel mt-16" style="max-width:640px;">
        <div class="panel-title">Tentang</div>
        <p class="text-muted" style="font-size:12.5px; line-height:1.7;">Buku Kas Lengkap menggabungkan pencatatan arus kas klasik dengan hutang/piutang, jurnal trading forex, dan pelacakan aset kripto real-time. Seluruh data tersimpan permanen di Firebase Cloud Firestore milik akun Anda dan otomatis tersinkron di semua perangkat.</p>
      </div>
    </section>
  </main>
</div>

<!-- ===================== MODALS ===================== -->
<div class="modal-overlay" id="modalTx"><div class="modal-box">
  <div class="modal-head"><h3 id="txModalTitle">Transaksi Baru</h3><button class="modal-close" data-close="modalTx">✕</button></div>
  <div class="modal-body">
    <div class="type-toggle wide5" id="txTypeToggle">
      <button type="button" class="sel-income" data-val="income">↑ Masuk</button>
      <button type="button" class="sel-expense active" data-val="expense">↓ Keluar</button>
      <button type="button" class="sel-transfer" data-val="transfer">⇄ Transfer</button>
      <button type="button" class="sel-debt" data-val="debt">💳 Hutang</button>
      <button type="button" class="sel-recv" data-val="recv">💸 Piutang</button>
    </div>
    <div class="form-row"><div class="form-group"><label>Jumlah (Rp)</label><input class="field" type="text" id="txAmount" placeholder="0" inputmode="numeric"></div><div class="form-group"><label>Tanggal</label><input class="field" type="date" id="txDate"></div></div>
    <div class="form-group" id="txAccGroupSingle"><label>Akun</label><select class="field" id="txAccount"></select></div>
    <div class="form-row hidden" id="txAccGroupTransfer"><div class="form-group"><label>Dari Akun</label><select class="field" id="txAccountFrom"></select></div><div class="form-group"><label>Ke Akun</label><select class="field" id="txAccountTo"></select></div></div>
    <div class="form-group" id="txCatGroup"><label>Kategori</label><select class="field" id="txCategory"></select></div>
    <div class="form-group"><label>Keterangan</label><input class="field" type="text" id="txNote" placeholder="mis. Makan siang di kantor"></div>
  </div>
  <div class="modal-foot"><button class="btn btn-ghost" data-close="modalTx">Batal</button><button class="btn btn-primary" id="saveTxBtn">Simpan Transaksi</button></div>
</div></div>

<div class="modal-overlay" id="modalAcc"><div class="modal-box">
  <div class="modal-head"><h3 id="accModalTitle">Tambah Akun</h3><button class="modal-close" data-close="modalAcc">✕</button></div>
  <div class="modal-body">
    <div class="form-group"><label>Nama Akun</label><input class="field" type="text" id="accName" placeholder="mis. Bank BCA"></div>
    <div class="form-group"><label>Jenis Akun</label><select class="field" id="accType"><option value="cash">Tunai</option><option value="bank">Rekening Bank</option><option value="ewallet">E-Wallet</option><option value="other">Lainnya</option></select></div>
    <div class="form-group"><label>Saldo Awal (Rp)</label><input class="field" type="text" id="accBalance" placeholder="0"></div>
    <div class="form-group"><label>Warna</label><div class="color-swatches" id="accColorSwatches"></div></div>
  </div>
  <div class="modal-foot"><button class="btn btn-ghost" data-close="modalAcc">Batal</button><button class="btn btn-primary" id="saveAccBtn">Simpan Akun</button></div>
</div></div>

<div class="modal-overlay" id="modalCat"><div class="modal-box">
  <div class="modal-head"><h3>Tambah Kategori</h3><button class="modal-close" data-close="modalCat">✕</button></div>
  <div class="modal-body">
    <div class="form-group"><label>Tipe</label><select class="field" id="catType"><option value="expense">Pengeluaran</option><option value="income">Pemasukan</option></select></div>
    <div class="form-group"><label>Nama Kategori</label><input class="field" type="text" id="catName" placeholder="mis. Langganan Streaming"></div>
    <div class="form-group"><label>Ikon</label><div class="icon-swatches" id="catIconSwatches" style="display:flex; flex-wrap:wrap; gap:8px;"></div></div>
    <div class="form-group"><label>Warna</label><div class="color-swatches" id="catColorSwatches"></div></div>
  </div>
  <div class="modal-foot"><button class="btn btn-ghost" data-close="modalCat">Batal</button><button class="btn btn-primary" id="saveCatBtn">Simpan Kategori</button></div>
</div></div>

<div class="modal-overlay" id="modalBudget"><div class="modal-box">
  <div class="modal-head"><h3>Buat Anggaran</h3><button class="modal-close" data-close="modalBudget">✕</button></div>
  <div class="modal-body"><div class="form-group"><label>Kategori Pengeluaran</label><select class="field" id="budgetCategory"></select></div><div class="form-group"><label>Batas Anggaran Bulanan (Rp)</label><input class="field" type="text" id="budgetLimit" placeholder="0"></div></div>
  <div class="modal-foot"><button class="btn btn-ghost" data-close="modalBudget">Batal</button><button class="btn btn-primary" id="saveBudgetBtn">Simpan Anggaran</button></div>
</div></div>

<div class="modal-overlay" id="modalGoal"><div class="modal-box">
  <div class="modal-head"><h3 id="goalModalTitle">Buat Target Tabungan</h3><button class="modal-close" data-close="modalGoal">✕</button></div>
  <div class="modal-body">
    <div class="form-group"><label>Nama Target</label><input class="field" type="text" id="goalName" placeholder="mis. Liburan ke Bali"></div>
    <div class="form-row"><div class="form-group"><label>Target Dana (Rp)</label><input class="field" type="text" id="goalTarget" placeholder="0"></div><div class="form-group"><label>Dana Terkumpul (Rp)</label><input class="field" type="text" id="goalCurrent" placeholder="0"></div></div>
    <div class="form-group"><label>Tenggat Waktu</label><input class="field" type="date" id="goalDeadline"></div>
    <div class="form-group"><label>Warna</label><div class="color-swatches" id="goalColorSwatches"></div></div>
  </div>
  <div class="modal-foot"><button class="btn btn-ghost" data-close="modalGoal">Batal</button><button class="btn btn-primary" id="saveGoalBtn">Simpan Target</button></div>
</div></div>

<div class="modal-overlay" id="modalRecur"><div class="modal-box">
  <div class="modal-head"><h3>Tambah Transaksi Berulang</h3><button class="modal-close" data-close="modalRecur">✕</button></div>
  <div class="modal-body">
    <div class="type-toggle" id="recurTypeToggle"><button type="button" class="sel-income" data-val="income">↑ Pemasukan</button><button type="button" class="sel-expense active" data-val="expense">↓ Pengeluaran</button></div>
    <div class="form-group"><label>Nama Jadwal</label><input class="field" type="text" id="recurName" placeholder="mis. Tagihan Listrik"></div>
    <div class="form-row"><div class="form-group"><label>Jumlah (Rp)</label><input class="field" type="text" id="recurAmount" placeholder="0"></div><div class="form-group"><label>Frekuensi</label><select class="field" id="recurFreq"><option value="daily">Harian</option><option value="weekly">Mingguan</option><option value="monthly" selected>Bulanan</option><option value="yearly">Tahunan</option></select></div></div>
    <div class="form-row"><div class="form-group"><label>Akun</label><select class="field" id="recurAccount"></select></div><div class="form-group"><label>Kategori</label><select class="field" id="recurCategory"></select></div></div>
    <div class="form-group"><label>Tanggal Berikutnya</label><input class="field" type="date" id="recurNextDate"></div>
  </div>
  <div class="modal-foot"><button class="btn btn-ghost" data-close="modalRecur">Batal</button><button class="btn btn-primary" id="saveRecurBtn">Simpan Jadwal</button></div>
</div></div>

<div class="modal-overlay" id="modalTrade"><div class="modal-box">
  <div class="modal-head"><h3 id="tradeModalTitle">Tambah Trade Forex</h3><button class="modal-close" data-close="modalTrade">✕</button></div>
  <div class="modal-body">
    <div class="type-toggle" id="tradeDirToggle"><button type="button" class="sel-income active" data-val="buy">↑ BUY</button><button type="button" class="sel-expense" data-val="sell">↓ SELL</button></div>
    <div class="form-row"><div class="form-group"><label>Pasangan / Instrumen</label><input class="field" type="text" id="tradePair" placeholder="mis. XAUUSD"></div><div class="form-group"><label>Lot</label><input class="field" type="text" id="tradeLot" placeholder="0.10"></div></div>
    <div class="form-row"><div class="form-group"><label>Harga Entry</label><input class="field" type="text" id="tradeEntry" placeholder="0"></div><div class="form-group"><label>Harga Exit</label><input class="field" type="text" id="tradeExit" placeholder="Kosongkan jika masih open"></div></div>
    <div class="form-row"><div class="form-group"><label>Tanggal Buka</label><input class="field" type="date" id="tradeOpenDate"></div><div class="form-group"><label>Tanggal Tutup</label><input class="field" type="date" id="tradeCloseDate"></div></div>
    <div class="form-group"><label>Profit / Rugi (Rp) — isi 0 atau kosongkan jika masih open</label><input class="field" type="text" id="tradePnl" placeholder="0"></div>
    <div class="form-group"><label>Catatan / Strategi</label><textarea class="field" id="tradeNote" style="height:80px; resize:none;" placeholder="Alasan entry, kondisi market, dsb."></textarea></div>
  </div>
  <div class="modal-foot"><button class="btn btn-ghost" data-close="modalTrade">Batal</button><button class="btn btn-primary" id="saveTradeBtn">Simpan Trade</button></div>
</div></div>

<div class="modal-overlay" id="modalHolding"><div class="modal-box">
  <div class="modal-head"><h3 id="holdingModalTitle">Tambah Aset Kripto</h3><button class="modal-close" data-close="modalHolding">✕</button></div>
  <div class="modal-body">
    <div class="form-group"><label>Pilih Koin</label><select class="field" id="holdingCoin"></select></div>
    <div class="form-row"><div class="form-group"><label>Jumlah Koin</label><input class="field" type="text" id="holdingAmount" placeholder="0.5"></div><div class="form-group"><label>Harga Rata Beli ($)</label><input class="field" type="text" id="holdingAvgPrice" placeholder="mis. 65000"></div></div>
    <div class="form-group"><label>Catatan</label><input class="field" type="text" id="holdingNote" placeholder="Opsional"></div>
  </div>
  <div class="modal-foot"><button class="btn btn-ghost" data-close="modalHolding">Batal</button><button class="btn btn-primary" id="saveHoldingBtn">Simpan Aset</button></div>
</div></div>

<div class="modal-overlay" id="modalConfirm"><div class="modal-box" style="max-width:400px;">
  <div class="modal-head"><h3>Konfirmasi</h3><button class="modal-close" data-close="modalConfirm">✕</button></div>
  <div class="modal-body"><p id="confirmText" style="font-size:14px; line-height:1.6;">Apakah Anda yakin?</p></div>
  <div class="modal-foot"><button class="btn btn-ghost" data-close="modalConfirm">Batal</button><button class="btn btn-danger" id="confirmActionBtn">Ya, Hapus</button></div>
</div></div>

<div class="toast-stack" id="toastStack"></div>

<script type="module">
/* ================================================================
   FIREBASE — auth + firestore (menggunakan konfigurasi proyek Anda)
   ================================================================ */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,
  onAuthStateChanged, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  initializeFirestore, persistentLocalCache, collection, doc, addDoc, updateDoc,
  deleteDoc, onSnapshot, query, orderBy, serverTimestamp, getDoc, setDoc,
  collectionGroup, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCx04v3ppq3DxbXDg0PrWBeJYIZjmJF9cg",
  authDomain: "rhn-capital.firebaseapp.com",
  projectId: "rhn-capital",
  storageBucket: "rhn-capital.firebasestorage.app",
  messagingSenderId: "74905216682",
  appId: "1:74905216682:web:4687a5b0bd7bcac09292d3"
};
const fbApp = initializeApp(firebaseConfig);
const auth = getAuth(fbApp);
const db = initializeFirestore(fbApp, { localCache: persistentLocalCache() });
const ADMIN_EMAIL = "rehantop245@gmail.com";

/* ---------------------- UTILITIES ---------------------- */
const uid = () => 'id-' + Math.random().toString(36).slice(2,10) + Date.now().toString(36);
const todayISO = () => new Date().toISOString().slice(0,10);
const fmtRupiah = (n) => { const num = Math.round(Number(n)||0); const neg = num<0; return (neg?'-':'')+'Rp'+Math.abs(num).toLocaleString('id-ID'); };
const parseNum = (str) => { if (typeof str==='number') return str; if(!str) return 0; return Number(String(str).replace(/[^0-9.-]/g,''))||0; };
const fmtDate = (iso) => new Date(iso+'T00:00:00').toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'});
const monthLabel = (ym) => { const [y,m]=ym.split('-'); return new Date(Number(y),Number(m)-1,1).toLocaleDateString('id-ID',{month:'long',year:'numeric'}); };
const monthShort = (ym) => { const [y,m]=ym.split('-'); return new Date(Number(y),Number(m)-1,1).toLocaleDateString('id-ID',{month:'short'}); };
const ymOf = (iso) => iso.slice(0,7);
const clamp = (n,a,b) => Math.max(a,Math.min(b,n));
function debounce(fn,ms){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a),ms); }; }
function toast(msg, opts={}){
  const stack = document.getElementById('toastStack');
  const el = document.createElement('div'); el.className='toast'+(opts.error?' error':'');
  el.innerHTML = `<span>${opts.error?'⚠️':'✅'}</span><span>${msg}</span>`;
  stack.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='.3s'; setTimeout(()=>el.remove(),300); }, 4000);
}
const COLORS = ['#5C7D61','#B8901F','#AE4E2D','#7C6C9B','#3D7A8A','#C46B8F','#8A9A3D','#4E6E8E'];
const ICONS = ['💰','🍔','🚗','🛍️','💡','🎬','🏥','📚','🏠','🎁','📶','🐾','✈️','⚽','☕','📦','💊','🧾','🎓','🚌'];
const COIN_LIST = [
  {id:'bitcoin', sym:'BTC', name:'Bitcoin', color:'#F7931A'},
  {id:'ethereum', sym:'ETH', name:'Ethereum', color:'#627EEA'},
  {id:'binancecoin', sym:'BNB', name:'BNB', color:'#F0B90B'},
  {id:'solana', sym:'SOL', name:'Solana', color:'#14F195'},
  {id:'ripple', sym:'XRP', name:'XRP', color:'#23292F'},
  {id:'cardano', sym:'ADA', name:'Cardano', color:'#0033AD'},
  {id:'dogecoin', sym:'DOGE', name:'Dogecoin', color:'#C2A633'},
  {id:'tron', sym:'TRX', name:'TRON', color:'#EF0027'},
  {id:'toncoin', sym:'TON', name:'Toncoin', color:'#0088CC'},
  {id:'avalanche-2', sym:'AVAX', name:'Avalanche', color:'#E84142'},
];

/* ---------------------- STATE ---------------------- */
let currentUser=null, currentUserDocMeta={}, userCloudPin=null, pinMode='verify', pendingUnlock=false;
let currentUSDRate = 16000;
let cryptoPrices = {}; // {coinId: {usd, usd_24h_change, idr}}
let unsubs = [];
let state = {
  accounts: [], categories:{income:[],expense:[]}, transactions:[], budgets:[], goals:[], recurring:[],
  forexTrades: [], cryptoHoldings: [],
  ui: {
    txFilters: { search:'', type:'all', account:'all', range:'thismonth', page:1 },
    pageSize: 8, selectedTxType:'expense', editingTxId:null, editingAccId:null,
    editingGoalId:null, editingBudgetId:null, editingTradeId:null, editingHoldingId:null,
    accColor: COLORS[0], catColor: COLORS[0], catIcon: ICONS[0], goalColor: COLORS[0],
    recurType:'expense', tradeDir:'buy', confirmCallback:null, budgetYm:null,
  }
};
let charts = {};

/* ================================================================
   AUTH FLOW
   ================================================================ */
let authMode='login';
document.getElementById('tabLogin').addEventListener('click', ()=>switchAuthTab('login'));
document.getElementById('tabRegister').addEventListener('click', ()=>switchAuthTab('register'));
function switchAuthTab(m){
  authMode=m;
  document.getElementById('tabLogin').classList.toggle('active', m==='login');
  document.getElementById('tabRegister').classList.toggle('active', m==='register');
  document.getElementById('authPass2').classList.toggle('hidden', m!=='register');
  document.getElementById('authSubmitBtn').textContent = m==='login' ? 'MASUK' : 'DAFTAR';
  hideAuthErr();
}
function showAuthErr(msg){ const e=document.getElementById('authErr'); e.textContent=msg; e.style.display='block'; }
function hideAuthErr(){ document.getElementById('authErr').style.display='none'; }
document.getElementById('authSubmitBtn').addEventListener('click', async ()=>{
  const email = document.getElementById('authEmail').value.trim();
  const pass = document.getElementById('authPass').value;
  hideAuthErr();
  if(!email||!pass) return showAuthErr('Email dan kata sandi wajib diisi.');
  try{
    if(authMode==='login'){ await signInWithEmailAndPassword(auth, email, pass); }
    else{
      const pass2 = document.getElementById('authPass2').value;
      if(pass!==pass2) return showAuthErr('Konfirmasi kata sandi tidak sama.');
      await createUserWithEmailAndPassword(auth, email, pass);
    }
  }catch(e){ showAuthErr(translateFirebaseErr(e.message)); }
});
document.getElementById('googleBtn').addEventListener('click', async ()=>{
  hideAuthErr();
  try{ await signInWithPopup(auth, new GoogleAuthProvider()); }
  catch(e){ showAuthErr(translateFirebaseErr(e.message)); }
});
document.getElementById('forgotBtn').addEventListener('click', async ()=>{
  const email = document.getElementById('authEmail').value.trim();
  if(!email) return showAuthErr('Masukkan email Anda terlebih dahulu.');
  try{ await sendPasswordResetEmail(auth, email); Swal.fire({icon:'success', title:'Email Terkirim', text:'Cek folder Inbox / SPAM Anda.'}); }
  catch(e){ showAuthErr(translateFirebaseErr(e.message)); }
});
function translateFirebaseErr(msg){
  if(msg.includes('user-not-found')||msg.includes('wrong-password')||msg.includes('invalid-credential')) return 'Email atau kata sandi salah.';
  if(msg.includes('email-already-in-use')) return 'Email sudah terdaftar.';
  if(msg.includes('weak-password')) return 'Kata sandi minimal 6 karakter.';
  if(msg.includes('invalid-email')) return 'Format email tidak valid.';
  return msg.replace('Firebase: ','');
}

/* ---------------------- PIN ---------------------- */
document.getElementById('pinSubmitBtn').addEventListener('click', submitPin);
document.getElementById('pinInput').addEventListener('keydown', e=>{ if(e.key==='Enter') submitPin(); });
async function submitPin(){
  const val = document.getElementById('pinInput').value;
  const errEl = document.getElementById('pinErr');
  errEl.style.display='none';
  if(val.length!==6){ errEl.textContent='PIN harus 6 digit.'; errEl.style.display='block'; return; }
  if(pinMode==='setup'){
    try{
      await setDoc(doc(db,'users',currentUser.uid,'settings','security'), {pin:val}, {merge:true});
      userCloudPin = val; unlockApp();
    }catch(e){ errEl.textContent='Gagal menyimpan PIN.'; errEl.style.display='block'; }
  } else {
    if(val===userCloudPin){ unlockApp(); }
    else{ errEl.textContent='PIN salah.'; errEl.style.display='block'; document.getElementById('pinInput').value=''; }
  }
}
document.getElementById('pinLogoutBtn').addEventListener('click', ()=> doLogout());
document.getElementById('pinForgotBtn').addEventListener('click', ()=>{
  Swal.fire({ title:'Lupa PIN?', text:'PIN akan direset. Anda perlu membuat PIN baru.', icon:'question', showCancelButton:true, confirmButtonText:'Reset PIN' })
  .then(async res=>{ if(res.isConfirmed){ await setDoc(doc(db,'users',currentUser.uid,'settings','security'), {pin:null}, {merge:true}); pinMode='setup'; document.getElementById('pinTitle').textContent='Buat PIN Baru'; document.getElementById('pinSub').textContent='Buat 6 digit PIN keamanan baru'; document.getElementById('pinInput').value=''; } });
});
function unlockApp(){
  document.getElementById('pinScreen').classList.add('hidden');
  document.getElementById('appShell').classList.add('show');
  const name = currentUser.displayName || currentUser.email.split('@')[0];
  document.getElementById('unName').textContent = name;
  document.getElementById('uaLetter').textContent = name.charAt(0).toUpperCase();
  initUserTransferCode();
  bindFirestoreListeners();
  goPage('dashboard');
}

/* ---------------------- AUTH STATE ---------------------- */
onAuthStateChanged(auth, async user=>{
  if(user){
    currentUser=user;
    document.getElementById('authShell').classList.add('hidden');
    try{ await setDoc(doc(db,'users',user.uid), {email:user.email, nama:user.displayName||user.email.split('@')[0]}, {merge:true}); }catch(e){}
    document.getElementById('navAdmin').classList.toggle('hidden', user.email!==ADMIN_EMAIL);
    try{
      const secSnap = await getDoc(doc(db,'users',user.uid,'settings','security'));
      document.getElementById('pinScreen').classList.remove('hidden');
      if(!secSnap.exists() || !secSnap.data().pin){
        pinMode='setup'; document.getElementById('pinTitle').textContent='Buat PIN Baru'; document.getElementById('pinSub').textContent='Buat 6 digit PIN untuk mengunci aplikasi';
      } else {
        pinMode='verify'; userCloudPin = secSnap.data().pin; document.getElementById('pinTitle').textContent='Masukkan PIN'; document.getElementById('pinSub').textContent='Keamanan akun Anda';
      }
      document.getElementById('pinInput').value='';
    }catch(e){ toast('Gagal memuat keamanan akun', {error:true}); }
  } else {
    currentUser=null;
    unsubs.forEach(u=>u()); unsubs=[];
    document.getElementById('authShell').classList.remove('hidden');
    document.getElementById('pinScreen').classList.add('hidden');
    document.getElementById('appShell').classList.remove('show');
  }
});
document.getElementById('logoutBtn').addEventListener('click', ()=>{
  Swal.fire({title:'Keluar Akun?', icon:'warning', showCancelButton:true, confirmButtonText:'Ya, Keluar'}).then(r=>{ if(r.isConfirmed) doLogout(); });
});
async function doLogout(){ unsubs.forEach(u=>u()); unsubs=[]; await signOut(auth); }
document.getElementById('resetPassBtn').addEventListener('click', async ()=>{
  if(!currentUser) return;
  try{ await sendPasswordResetEmail(auth, currentUser.email); Swal.fire({icon:'success', title:'Terkirim', text:`Link reset dikirim ke ${currentUser.email}`}); }catch(e){ Swal.fire('Gagal', e.message, 'error'); }
});
document.getElementById('changePinBtn').addEventListener('click', async ()=>{
  const {value: oldPin} = await Swal.fire({title:'Masukkan PIN Lama', input:'password', inputAttributes:{maxlength:6, inputmode:'numeric'}, showCancelButton:true});
  if(!oldPin) return;
  if(oldPin!==userCloudPin) return Swal.fire('Gagal','PIN lama salah','error');
  const {value:newPin} = await Swal.fire({title:'PIN Baru', input:'password', inputAttributes:{maxlength:6, inputmode:'numeric'}, showCancelButton:true});
  if(newPin && newPin.length===6){ await setDoc(doc(db,'users',currentUser.uid,'settings','security'), {pin:newPin}, {merge:true}); userCloudPin=newPin; Swal.fire({icon:'success', title:'PIN diperbarui'}); }
});

/* ---------------------- TRANSFER CODE (antar user) ---------------------- */
async function initUserTransferCode(){
  try{
    const ref = doc(db,'users',currentUser.uid,'settings','transfer');
    const snap = await getDoc(ref);
    let code;
    if(!snap.exists() || !snap.data().code){
      code = String(Math.floor(100+Math.random()*900));
      await setDoc(ref, {code}, {merge:true});
      await setDoc(doc(db,'transfer_registry',code), {uid:currentUser.uid});
    } else code = snap.data().code;
    document.getElementById('ucodeVal').textContent = code;
    document.getElementById('myTransferCode').textContent = code;
  }catch(e){ document.getElementById('ucodeVal').textContent='error'; }
}
document.getElementById('doUserTransferBtn').addEventListener('click', async ()=>{
  const targetCode = document.getElementById('transferTargetCode').value.trim();
  if(targetCode.length!==3) return toast('Kode harus 3 angka', {error:true});
  try{
    const regSnap = await getDoc(doc(db,'transfer_registry',targetCode));
    if(!regSnap.exists()) return toast('Kode tujuan tidak ditemukan', {error:true});
    const targetUid = regSnap.data().uid;
    if(targetUid===currentUser.uid) return toast('Tidak bisa transfer ke akun sendiri', {error:true});
    Swal.fire({title:'Memproses transfer...', didOpen:()=>Swal.showLoading()});
    for(const t of state.transactions){
      const payload = {...t}; delete payload.id; payload.createdAt = serverTimestamp();
      await addDoc(collection(db,'users',targetUid,'transactions'), payload);
      await deleteDoc(doc(db,'users',currentUser.uid,'transactions', t.id));
    }
    Swal.fire({icon:'success', title:'Transfer Berhasil', text:`${state.transactions.length} transaksi dipindahkan.`});
  }catch(e){ Swal.fire('Error', e.message, 'error'); }
});

/* ================================================================
   FIRESTORE LISTENERS
   ================================================================ */
function bindFirestoreListeners(){
  const u = currentUser.uid;
  const listen = (col, arrKey, sortFn) => {
    const un = onSnapshot(query(collection(db,'users',u,col), orderBy('createdAt','desc')), snap=>{
      state[arrKey] = snap.docs.map(d=>({id:d.id, ...d.data()}));
      if(sortFn) state[arrKey].sort(sortFn);
      refreshCurrentPage();
    }, err=>{ console.error(col, err); });
    unsubs.push(un);
  };
  listen('transactions','transactions');
  listen('accounts','accounts');
  listen('budgets','budgets');
  listen('goals','goals');
  listen('recurring','recurring');
  listen('forexTrades','forexTrades');
  listen('cryptoHoldings','cryptoHoldings');
  const unCat = onSnapshot(doc(db,'users',u,'meta','categories'), snap=>{
    if(snap.exists()) state.categories = snap.data();
    else { state.categories = defaultCategories(); setDoc(doc(db,'users',u,'meta','categories'), state.categories); }
    refreshCurrentPage();
  });
  unsubs.push(unCat);
}
function defaultCategories(){
  return {
    income: [ {id:uid(),name:'Gaji',icon:'💰',color:COLORS[0]}, {id:uid(),name:'Bonus',icon:'🎁',color:COLORS[1]}, {id:uid(),name:'Investasi',icon:'📈',color:COLORS[4]}, {id:uid(),name:'Lainnya',icon:'📦',color:COLORS[7]} ],
    expense: [ {id:uid(),name:'Makanan & Minuman',icon:'🍔',color:COLORS[2]}, {id:uid(),name:'Transportasi',icon:'🚗',color:COLORS[4]}, {id:uid(),name:'Belanja',icon:'🛍️',color:COLORS[5]}, {id:uid(),name:'Tagihan & Utilitas',icon:'💡',color:COLORS[1]}, {id:uid(),name:'Hiburan',icon:'🎬',color:COLORS[3]}, {id:uid(),name:'Kesehatan',icon:'🏥',color:COLORS[2]} ]
  };
}
async function saveCategories(){ await setDoc(doc(db,'users',currentUser.uid,'meta','categories'), state.categories); }
const colRef = (name) => collection(db,'users',currentUser.uid,name);
const docRef = (name,id) => doc(db,'users',currentUser.uid,name,id);

/* ================================================================
   DERIVED / COMPUTED (saldo, hutang, piutang)
   ================================================================ */
function accountBalance(accId){
  const acc = state.accounts.find(a=>a.id===accId); if(!acc) return 0;
  let bal = acc.initialBalance;
  for(const t of state.transactions){
    if(t.type==='income' && t.accountId===accId) bal += t.amount;
    else if(t.type==='expense' && t.accountId===accId) bal -= t.amount;
    else if(t.type==='transfer'){ if(t.accountId===accId) bal -= t.amount; if(t.toAccountId===accId) bal += t.amount; }
    else if(t.type==='debt' && t.accountId===accId){ if(!t.isPaid) bal += t.amount; }
    else if(t.type==='recv' && t.accountId===accId){ if(!t.isPaid) bal -= t.amount; }
  }
  return bal;
}
function totalBalance(){ return state.accounts.reduce((s,a)=>s+accountBalance(a.id),0); }
function totalDebt(){ return state.transactions.filter(t=>t.type==='debt'&&!t.isPaid).reduce((s,t)=>s+t.amount,0); }
function totalReceivable(){ return state.transactions.filter(t=>t.type==='recv'&&!t.isPaid).reduce((s,t)=>s+t.amount,0); }
function findCategory(id){ return state.categories.income.find(c=>c.id===id) || state.categories.expense.find(c=>c.id===id); }
function findAccount(id){ return state.accounts.find(a=>a.id===id); }
function txInRange(t, range){
  const now=new Date(); const d=new Date(t.date+'T00:00:00');
  if(range==='thismonth') return d.getFullYear()===now.getFullYear() && d.getMonth()===now.getMonth();
  if(range==='lastmonth'){ const lm=new Date(now.getFullYear(),now.getMonth()-1,1); return d.getFullYear()===lm.getFullYear() && d.getMonth()===lm.getMonth(); }
  if(range==='thisyear') return d.getFullYear()===now.getFullYear();
  return true;
}
function monthTotals(ym){
  let income=0, expense=0;
  for(const t of state.transactions){ if(ymOf(t.date)!==ym) continue; if(t.type==='income') income+=t.amount; if(t.type==='expense') expense+=t.amount; }
  return {income, expense, net: income-expense};
}
function last6Months(){ const arr=[]; const now=new Date(); for(let i=5;i>=0;i--){ const d=new Date(now.getFullYear(),now.getMonth()-i,1); arr.push(d.toISOString().slice(0,7)); } return arr; }
function currentMonthYm(){ return todayISO().slice(0,7); }
function getCss(v){ return getComputedStyle(document.body).getPropertyValue(v).trim(); }
function hexA(hex,a){ let c=hex.replace('#',''); if(c.length===3) c=c.split('').map(x=>x+x).join(''); const r=parseInt(c.substr(0,2),16),g=parseInt(c.substr(2,2),16),b=parseInt(c.substr(4,2),16); return `rgba(${r},${g},${b},${a})`; }
function fmtShort(v){ if(Math.abs(v)>=1000000) return (v/1000000).toFixed(1).replace('.0','')+'jt'; if(Math.abs(v)>=1000) return (v/1000).toFixed(0)+'rb'; return v; }
function baseChartOpts(extra={}){ return Object.assign({ responsive:true, maintainAspectRatio:false, interaction:{mode:'index',intersect:false}, plugins:{legend:{position:'bottom',labels:{boxWidth:10,boxHeight:10,usePointStyle:true}}, tooltip:{callbacks:{label:ctx=>`${ctx.dataset.label}: ${fmtRupiah(ctx.parsed.y)}`}}}, scales:{x:{grid:{display:false}}, y:{grid:{color:hexA(getCss('--ink'),0.06)}, ticks:{callback:v=>fmtShort(v)}}} }, extra); }
function shade(hex,pct){ let c=hex.replace('#',''); if(c.length===3) c=c.split('').map(x=>x+x).join(''); let r=parseInt(c.substr(0,2),16),g=parseInt(c.substr(2,2),16),b=parseInt(c.substr(4,2),16); r=clamp(Math.round(r+(pct/100)*255),0,255); g=clamp(Math.round(g+(pct/100)*255),0,255); b=clamp(Math.round(b+(pct/100)*255),0,255); return '#'+[r,g,b].map(x=>x.toString(16).padStart(2,'0')).join(''); }

/* ================================================================
   NAVIGATION
   ================================================================ */
const PAGE_META = {
  dashboard:{title:'Dasbor', sub:'Ringkasan arus kas Anda hari ini'}, transaksi:{title:'Transaksi', sub:'Riwayat pemasukan, pengeluaran, transfer, hutang & piutang'},
  akun:{title:'Akun', sub:'Kelola dompet, rekening, dan e-wallet'}, anggaran:{title:'Anggaran', sub:'Kontrol pengeluaran per kategori tiap bulan'},
  target:{title:'Target Tabungan', sub:'Pantau progres rencana keuangan Anda'}, berulang:{title:'Transaksi Berulang', sub:'Jadwal otomatis pemasukan & pengeluaran'},
  forex:{title:'Jurnal Forex', sub:'Catatan & performa trading Anda'}, kripto:{title:'Aset Kripto', sub:'Portofolio kripto real-time'},
  laporan:{title:'Laporan', sub:'Analisa performa keuangan bulanan & tahunan'}, kategori:{title:'Kategori', sub:'Atur label transaksi Anda'},
  transfer:{title:'Transfer Antar User', sub:'Pindahkan data ke akun lain via kode'}, admin:{title:'Admin', sub:'Pantauan lintas pengguna'},
  pengaturan:{title:'Pengaturan', sub:'Preferensi tampilan & data'},
};
function goPage(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.ledger-tab').forEach(t=>t.classList.toggle('active', t.dataset.page===page));
  document.getElementById('pageTitle').textContent = PAGE_META[page].title;
  document.getElementById('pageSub').textContent = PAGE_META[page].sub;
  document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlayBg').classList.remove('show');
  renderPage(page); window.scrollTo(0,0);
}
function renderPage(page){
  if(page==='dashboard') renderDashboard(); if(page==='transaksi') renderTransaksi(); if(page==='akun') renderAkun();
  if(page==='anggaran') renderAnggaran(); if(page==='target') renderTarget(); if(page==='berulang') renderBerulang();
  if(page==='forex') renderForex(); if(page==='kripto') renderKripto(); if(page==='laporan') renderLaporan();
  if(page==='kategori') renderKategori(); if(page==='transfer'){} if(page==='admin'){}
}
document.querySelectorAll('.ledger-tab').forEach(tab=> tab.addEventListener('click', ()=> goPage(tab.dataset.page)));
document.querySelectorAll('[data-goto]').forEach(b=> b.addEventListener('click', ()=>goPage(b.dataset.goto)));
document.getElementById('menuToggle').addEventListener('click', ()=>{ document.getElementById('sidebar').classList.add('open'); document.getElementById('overlayBg').classList.add('show'); });
document.getElementById('overlayBg').addEventListener('click', ()=>{ document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlayBg').classList.remove('show'); });
function refreshCurrentPage(){
  const active = document.querySelector('.page.active'); const page = active ? active.id.replace('page-','') : 'dashboard';
  document.getElementById('sidebarBalance').textContent = fmtRupiah(totalBalance());
  renderPage(page);
}

/* ---------------------- MODALS ---------------------- */
function openModal(id){ document.getElementById(id).classList.add('open'); }
function closeModal(id){ document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('[data-close]').forEach(btn=> btn.addEventListener('click', ()=>closeModal(btn.dataset.close)));
document.querySelectorAll('.modal-overlay').forEach(ov=> ov.addEventListener('click', e=>{ if(e.target===ov) ov.classList.remove('open'); }));
function confirmAction(text, cb){ document.getElementById('confirmText').textContent=text; state.ui.confirmCallback=cb; openModal('modalConfirm'); }
document.getElementById('confirmActionBtn').addEventListener('click', ()=>{ if(state.ui.confirmCallback) state.ui.confirmCallback(); closeModal('modalConfirm'); });

/* ================================================================
   RENDER: DASHBOARD
   ================================================================ */
function renderDashboard(){
  document.getElementById('sidebarBalance').textContent = fmtRupiah(totalBalance());
  const ym = currentMonthYm(); const mt = monthTotals(ym);
  const prevD = new Date(); prevD.setMonth(prevD.getMonth()-1); const prevYm = prevD.toISOString().slice(0,7); const pt = monthTotals(prevYm);
  const incomeDelta = pt.income? ((mt.income-pt.income)/pt.income*100):0; const expenseDelta = pt.expense? ((mt.expense-pt.expense)/pt.expense*100):0;
  const savingsRate = mt.income? (mt.net/mt.income*100):0;
  const cards = [
    {label:'Total Saldo', value:totalBalance(), ico:'👛', bg:'var(--gold-bg)', color:'var(--gold)', foot:`${state.accounts.length} akun aktif`},
    {label:'Pemasukan Bulan Ini', value:mt.income, ico:'↑', bg:'var(--sage-bg)', color:'var(--sage)', foot:trendFoot(incomeDelta)},
    {label:'Pengeluaran Bulan Ini', value:mt.expense, ico:'↓', bg:'var(--rust-bg)', color:'var(--rust)', foot:trendFoot(expenseDelta,true)},
    {label:'Hutang / Piutang', value:null, raw:`${fmtRupiah(totalDebt())} / ${fmtRupiah(totalReceivable())}`, ico:'⚖️', bg:'var(--blue-bg)', color:'var(--blue)', foot:`Tingkat tabungan ${savingsRate.toFixed(1)}%`},
  ];
  document.getElementById('statCards').innerHTML = cards.map(c=>`
    <div class="ledger-card stat-card"><div class="stat-top"><div class="stat-label">${c.label}</div><div class="stat-ico" style="background:${c.bg}; color:${c.color};">${c.ico}</div></div>
    <div class="stat-value" style="color:${c.color==='var(--ink)'?'var(--ink)':c.color};">${c.raw||fmtRupiah(c.value)}</div><div class="stat-foot">${c.foot}</div></div>`).join('');
  renderCashflowChart(); renderCategoryPie(); renderRecentTx(); renderDashBudgets();
}
function trendFoot(pct, invert=false){
  if(pct===0) return '<span class="text-muted">Tidak ada data bulan lalu</span>';
  const up=pct>0; const good=invert?!up:up; const cls=good?'trend-up':'trend-down'; const arrow=up?'▲':'▼';
  return `<span style="color:${good?'var(--sage)':'var(--rust)'}; font-weight:700;">${arrow} ${Math.abs(pct).toFixed(1)}%</span> vs bulan lalu`;
}
function renderCashflowChart(){
  const months=last6Months(); const incomeArr=months.map(m=>monthTotals(m).income); const expenseArr=months.map(m=>monthTotals(m).expense);
  if(charts.cashflow) charts.cashflow.destroy();
  charts.cashflow = new Chart(document.getElementById('cashflowChart'), { type:'line', data:{ labels:months.map(monthShort), datasets:[
    {label:'Pemasukan', data:incomeArr, borderColor:getCss('--sage'), backgroundColor:hexA(getCss('--sage'),0.12), fill:true, tension:.35, borderWidth:2.5, pointRadius:3},
    {label:'Pengeluaran', data:expenseArr, borderColor:getCss('--rust'), backgroundColor:hexA(getCss('--rust'),0.12), fill:true, tension:.35, borderWidth:2.5, pointRadius:3} ]},
    options: baseChartOpts({y:{ticks:{callback:v=>fmtShort(v)}}}) });
}
function renderCategoryPie(){
  const ym=currentMonthYm(); const totals={};
  for(const t of state.transactions){ if(t.type!=='expense'||ymOf(t.date)!==ym) continue; totals[t.categoryId]=(totals[t.categoryId]||0)+t.amount; }
  const entries=Object.entries(totals).sort((a,b)=>b[1]-a[1]);
  const labels=entries.map(([id])=>findCategory(id)?.name||'Lainnya'); const data=entries.map(([,v])=>v); const colors=entries.map(([id])=>findCategory(id)?.color||'#999');
  const wrap = document.getElementById('categoryPieChart').parentElement;
  if(charts.pie) charts.pie.destroy();
  if(entries.length===0){ wrap.innerHTML='<div class="empty-state" style="padding:20px;"><div class="ico">🥧</div><p>Belum ada pengeluaran bulan ini</p></div>'; document.getElementById('pieLegend').innerHTML=''; return; }
  if(!document.getElementById('categoryPieChart')) wrap.innerHTML='<canvas id="categoryPieChart"></canvas>';
  charts.pie = new Chart(document.getElementById('categoryPieChart'), {type:'doughnut', data:{labels, datasets:[{data, backgroundColor:colors, borderWidth:2, borderColor:getCss('--paper')}]}, options:{responsive:true, maintainAspectRatio:false, cutout:'68%', plugins:{legend:{display:false}}}});
  const total=data.reduce((a,b)=>a+b,0);
  document.getElementById('pieLegend').innerHTML = entries.slice(0,6).map(([id],i)=>`<div class="legend-row"><span class="legend-dot" style="background:${colors[i]}"></span><span class="lbl">${labels[i]}</span><span class="pct">${((data[i]/total)*100).toFixed(0)}%</span></div>`).join('');
}
function renderRecentTx(){
  const list=[...state.transactions].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,6);
  const tbody=document.querySelector('#recentTxTable tbody');
  if(list.length===0){ tbody.innerHTML=`<tr><td colspan="5" class="text-muted" style="text-align:center; padding:30px;">Belum ada transaksi</td></tr>`; return; }
  tbody.innerHTML = list.map(t=>{
    const cat=findCategory(t.categoryId); const acc=findAccount(t.accountId);
    const cls = t.type==='income'?'amount-in':t.type==='expense'?'amount-out':t.type==='debt'?'amount-debt':t.type==='recv'?'amount-recv':'amount-transfer';
    const sign = t.type==='income'||t.type==='debt'?'+':t.type==='expense'||t.type==='recv'?'-':'';
    return `<tr><td>${fmtDate(t.date)}</td><td>${t.note||'-'}</td><td>${cat?`<span class="cat-chip">${cat.icon} ${cat.name}</span>`:'<span class="text-muted">—</span>'}</td><td>${acc?acc.name:'-'}</td><td style="text-align:right;" class="${cls}">${sign}${fmtRupiah(t.amount)}</td></tr>`;
  }).join('');
}
function renderDashBudgets(){
  const ym=currentMonthYm();
  const rows = state.budgets.map(b=>{ const cat=findCategory(b.categoryId); const spent=state.transactions.filter(t=>t.type==='expense'&&t.categoryId===b.categoryId&&ymOf(t.date)===ym).reduce((s,t)=>s+t.amount,0); return {...b, cat, spent, pct: b.limit?clamp(spent/b.limit*100,0,999):0}; }).sort((a,b)=>b.pct-a.pct).slice(0,5);
  const wrap=document.getElementById('dashBudgetList');
  if(rows.length===0){ wrap.innerHTML='<p class="text-muted" style="font-size:13px;">Belum ada anggaran dibuat.</p>'; return; }
  wrap.innerHTML = rows.map(r=>budgetItemHtml(r)).join('');
}
function budgetItemHtml(r){
  const over=r.pct>100; const barColor= over?getCss('--rust'): r.pct>80?getCss('--gold'):getCss('--sage');
  return `<div class="budget-item"><div class="budget-top"><span class="cat">${r.cat?.icon||'🏷️'} ${r.cat?.name||'—'}</span><span class="val ${over?'over-budget':''}">${fmtRupiah(r.spent)} / ${fmtRupiah(r.limit)}</span></div>
  <div class="progress-track"><div class="progress-fill" style="width:${clamp(r.pct,0,100)}%; background:${barColor};"></div></div>
  <div class="budget-meta"><span>${over?'Melebihi anggaran':clamp(r.pct,0,100).toFixed(0)+'% terpakai'}</span>${over?`<span class="over-budget">+${fmtRupiah(r.spent-r.limit)}</span>`:''}</div></div>`;
}

/* ================================================================
   RENDER: TRANSAKSI
   ================================================================ */
function populateAccountSelects(){
  const opts = state.accounts.map(a=>`<option value="${a.id}">${a.name}</option>`).join('');
  ['txAccount','txAccountFrom','txAccountTo','trFrom','trTo','recurAccount'].forEach(id=>{ const el=document.getElementById(id); if(el) el.innerHTML=opts; });
  document.getElementById('filterAccount').innerHTML = '<option value="all">Semua Akun</option>'+opts;
}
function populateCategorySelect(type, selectId){ const cats = type==='income'?state.categories.income:state.categories.expense; document.getElementById(selectId).innerHTML = cats.map(c=>`<option value="${c.id}">${c.icon} ${c.name}</option>`).join(''); }
function populateBudgetCategorySelect(){ const used=new Set(state.budgets.map(b=>b.categoryId)); const avail=state.categories.expense.filter(c=> state.ui.editingBudgetId? true : !used.has(c.id)); document.getElementById('budgetCategory').innerHTML = (avail.length?avail:state.categories.expense).map(c=>`<option value="${c.id}">${c.icon} ${c.name}</option>`).join(''); }
function getFilteredTx(){
  const f=state.ui.txFilters;
  let list = state.transactions.filter(t=>{
    if(f.type!=='all' && t.type!==f.type) return false;
    if(f.account!=='all' && t.accountId!==f.account && t.toAccountId!==f.account) return false;
    if(f.range!=='all' && !txInRange(t, f.range)) return false;
    if(f.search){ const s=f.search.toLowerCase(); const cat=findCategory(t.categoryId); const acc=findAccount(t.accountId); const hay=`${t.note||''} ${cat?.name||''} ${acc?.name||''}`.toLowerCase(); if(!hay.includes(s)) return false; }
    return true;
  });
  list.sort((a,b)=> b.date.localeCompare(a.date));
  return list;
}
function renderTransaksi(){
  populateAccountSelects();
  const f=state.ui.txFilters;
  document.getElementById('txSearch').value=f.search; document.getElementById('filterType').value=f.type; document.getElementById('filterAccount').value=f.account; document.getElementById('filterRange').value=f.range;
  const all=getFilteredTx(); const pageSize=state.ui.pageSize; const totalPages=Math.max(1,Math.ceil(all.length/pageSize));
  state.ui.txFilters.page = clamp(state.ui.txFilters.page,1,totalPages); const page=state.ui.txFilters.page;
  const list = all.slice((page-1)*pageSize, page*pageSize);
  const tbody = document.querySelector('#txTable tbody');
  document.getElementById('txEmpty').classList.toggle('hidden', all.length>0);
  tbody.innerHTML = list.map(t=>{
    const cat=findCategory(t.categoryId); const acc=findAccount(t.accountId); const toAcc=findAccount(t.toAccountId);
    const cls = t.type==='income'?'amount-in':t.type==='expense'?'amount-out':t.type==='debt'?'amount-debt':t.type==='recv'?'amount-recv':'amount-transfer';
    const sign = t.type==='income'||t.type==='debt'?'+':t.type==='expense'||t.type==='recv'?'-':'';
    const badgeMap={income:'<span class="tx-type-badge badge-in">↑ Masuk</span>', expense:'<span class="tx-type-badge badge-out">↓ Keluar</span>', transfer:'<span class="tx-type-badge badge-transfer">⇄ Transfer</span>', debt:'<span class="tx-type-badge badge-debt">💳 Hutang</span>', recv:'<span class="tx-type-badge badge-recv">💸 Piutang</span>'};
    let payAction = '';
    if((t.type==='debt'||t.type==='recv') && !t.isPaid) payAction = `<button data-pay-tx="${t.id}" title="Tandai Lunas">✅</button>`;
    return `<tr><td>${fmtDate(t.date)}</td><td>${badgeMap[t.type]}${(t.type==='debt'||t.type==='recv')?(t.isPaid?' <span class="text-muted" style="font-size:10px;">(lunas)</span>':' <span style="color:var(--rust);font-size:10px;font-weight:700;">(belum lunas)</span>'):''}</td>
    <td>${t.note||'-'}</td><td>${cat?`<span class="cat-chip">${cat.icon} ${cat.name}</span>`:'<span class="text-muted">—</span>'}</td>
    <td>${t.type==='transfer'?`${acc?.name} → ${toAcc?.name}`:(acc?acc.name:'-')}</td><td style="text-align:right;" class="${cls}">${sign}${fmtRupiah(t.amount)}</td>
    <td><div class="row-actions">${payAction}<button data-edit-tx="${t.id}" title="Ubah">✏️</button><button data-del-tx="${t.id}" class="del" title="Hapus">🗑️</button></div></td></tr>`;
  }).join('');
  const pag = document.getElementById('txPagination');
  pag.innerHTML = `<span>Menampilkan ${list.length?(page-1)*pageSize+1:0}–${(page-1)*pageSize+list.length} dari ${all.length} transaksi</span>
  <div class="pg-btns"><button ${page<=1?'disabled':''} data-pg="prev">‹</button>${Array.from({length:totalPages},(_,i)=>i+1).slice(0,6).map(p=>`<button class="${p===page?'active':''}" data-pg="${p}">${p}</button>`).join('')}<button ${page>=totalPages?'disabled':''} data-pg="next">›</button></div>`;
}
document.getElementById('txSearch').addEventListener('input', debounce(e=>{ state.ui.txFilters.search=e.target.value; state.ui.txFilters.page=1; renderTransaksi(); },220));
['filterType','filterAccount','filterRange'].forEach(id=>{ document.getElementById(id).addEventListener('change', e=>{ const map={filterType:'type',filterAccount:'account',filterRange:'range'}; state.ui.txFilters[map[id]]=e.target.value; state.ui.txFilters.page=1; renderTransaksi(); }); });
document.getElementById('clearFilters').addEventListener('click', ()=>{ state.ui.txFilters={search:'',type:'all',account:'all',range:'all',page:1}; renderTransaksi(); });
document.getElementById('txPagination').addEventListener('click', e=>{ const btn=e.target.closest('[data-pg]'); if(!btn) return; const val=btn.dataset.pg; if(val==='prev') state.ui.txFilters.page--; else if(val==='next') state.ui.txFilters.page++; else state.ui.txFilters.page=Number(val); renderTransaksi(); });

/* ---- Modal: Transaksi ---- */
function setTxType(type){
  state.ui.selectedTxType=type;
  document.querySelectorAll('#txTypeToggle button').forEach(b=>b.classList.toggle('active', b.dataset.val===type));
  document.getElementById('txAccGroupSingle').classList.toggle('hidden', type==='transfer');
  document.getElementById('txAccGroupTransfer').classList.toggle('hidden', type!=='transfer');
  document.getElementById('txCatGroup').classList.toggle('hidden', type==='transfer'||type==='debt'||type==='recv');
  if(type==='income'||type==='expense') populateCategorySelect(type,'txCategory');
}
document.getElementById('txTypeToggle').addEventListener('click', e=>{ const btn=e.target.closest('button'); if(!btn) return; setTxType(btn.dataset.val); });
function openTxModal(editId=null){
  state.ui.editingTxId=editId; populateAccountSelects();
  const t = editId? state.transactions.find(x=>x.id===editId):null;
  document.getElementById('txModalTitle').textContent = editId?'Ubah Transaksi':'Transaksi Baru';
  setTxType(t? t.type:'expense');
  document.getElementById('txAmount').value = t? t.amount.toLocaleString('id-ID'):'';
  document.getElementById('txDate').value = t? t.date: todayISO();
  document.getElementById('txNote').value = t? (t.note||''):'';
  if(t){ if(t.type==='transfer'){ document.getElementById('txAccountFrom').value=t.accountId; document.getElementById('txAccountTo').value=t.toAccountId; } else { document.getElementById('txAccount').value=t.accountId; if(t.type==='income'||t.type==='expense'){ populateCategorySelect(t.type,'txCategory'); document.getElementById('txCategory').value=t.categoryId; } } }
  openModal('modalTx');
}
document.getElementById('quickAddBtn').addEventListener('click', ()=>openTxModal());
document.getElementById('topAddBtn').addEventListener('click', ()=>openTxModal());
document.getElementById('saveTxBtn').addEventListener('click', async ()=>{
  const type=state.ui.selectedTxType; const amount=parseNum(document.getElementById('txAmount').value); const date=document.getElementById('txDate').value||todayISO(); const note=document.getElementById('txNote').value.trim();
  if(!amount||amount<=0) return toast('Masukkan jumlah yang valid', {error:true});
  let payload={type, amount, date, note};
  if(type==='transfer'){ const from=document.getElementById('txAccountFrom').value, to=document.getElementById('txAccountTo').value; if(from===to) return toast('Akun asal dan tujuan tidak boleh sama',{error:true}); payload.accountId=from; payload.toAccountId=to; payload.categoryId=null; }
  else if(type==='debt'||type==='recv'){ payload.accountId=document.getElementById('txAccount').value; payload.categoryId=null; payload.toAccountId=null; payload.isPaid=false; }
  else { payload.accountId=document.getElementById('txAccount').value; payload.categoryId=document.getElementById('txCategory').value; payload.toAccountId=null; }
  try{
    if(state.ui.editingTxId){ await updateDoc(docRef('transactions', state.ui.editingTxId), payload); toast('Transaksi berhasil diperbarui'); }
    else{ payload.createdAt=serverTimestamp(); await addDoc(colRef('transactions'), payload); toast('Transaksi berhasil dicatat'); }
    closeModal('modalTx');
  }catch(e){ toast('Gagal menyimpan: '+e.message, {error:true}); }
});
document.getElementById('txTable').addEventListener('click', async e=>{
  const editId=e.target.closest('[data-edit-tx]')?.dataset.editTx; const delId=e.target.closest('[data-del-tx]')?.dataset.delTx; const payId=e.target.closest('[data-pay-tx]')?.dataset.payTx;
  if(editId) openTxModal(editId);
  if(delId) confirmAction('Hapus transaksi ini?', async ()=>{ await deleteDoc(docRef('transactions', delId)); toast('Transaksi dihapus'); });
  if(payId){ await updateDoc(docRef('transactions', payId), {isPaid:true}); toast('Ditandai lunas'); }
});

/* ================================================================
   RENDER: AKUN
   ================================================================ */
const ACC_TYPE_LABEL={cash:'Tunai',bank:'Rekening Bank',ewallet:'E-Wallet',other:'Lainnya'};
const ACC_TYPE_ICON={cash:'💵',bank:'🏦',ewallet:'📱',other:'💼'};
function renderAkun(){
  document.getElementById('totalDebtVal').textContent = fmtRupiah(totalDebt());
  document.getElementById('totalRecvVal').textContent = fmtRupiah(totalReceivable());
  const wrap=document.getElementById('accGrid');
  wrap.innerHTML = state.accounts.map(a=>{ const bal=accountBalance(a.id); return `<div class="acc-card" style="background:linear-gradient(135deg, ${a.color}, ${shade(a.color,-18)});">
    <div class="acc-top"><div><div class="acc-name">${a.name}</div><div class="acc-type">${ACC_TYPE_ICON[a.type]} ${ACC_TYPE_LABEL[a.type]}</div></div>
    <div class="acc-actions"><button data-edit-acc="${a.id}" title="Ubah">✏️</button><button data-del-acc="${a.id}" title="Hapus">🗑️</button></div></div>
    <div class="acc-balance">${fmtRupiah(bal)}</div></div>`; }).join('') + `<button class="acc-add-card" id="accGridAdd"><span style="font-size:22px;">+</span> Tambah Akun</button>`;
  document.getElementById('accGridAdd').addEventListener('click', ()=>openAccModal());
  populateAccountSelects(); document.getElementById('trDate').value=todayISO();
}
function buildColorSwatches(containerId, current, onPick){
  const el=document.getElementById(containerId);
  el.innerHTML = COLORS.map(c=>`<div class="swatch ${c===current?'sel':''}" style="background:${c}" data-color="${c}"></div>`).join('');
  el.querySelectorAll('.swatch').forEach(sw=> sw.addEventListener('click', ()=>{ el.querySelectorAll('.swatch').forEach(s=>s.classList.remove('sel')); sw.classList.add('sel'); onPick(sw.dataset.color); }));
}
function openAccModal(editId=null){
  state.ui.editingAccId=editId; const a=editId? state.accounts.find(x=>x.id===editId):null;
  document.getElementById('accModalTitle').textContent = editId?'Ubah Akun':'Tambah Akun';
  document.getElementById('accName').value=a?a.name:''; document.getElementById('accType').value=a?a.type:'cash'; document.getElementById('accBalance').value=a?a.initialBalance.toLocaleString('id-ID'):'';
  state.ui.accColor = a? a.color: COLORS[state.accounts.length % COLORS.length];
  buildColorSwatches('accColorSwatches', state.ui.accColor, c=>state.ui.accColor=c);
  openModal('modalAcc');
}
document.getElementById('addAccBtn').addEventListener('click', ()=>openAccModal());
document.getElementById('saveAccBtn').addEventListener('click', async ()=>{
  const name=document.getElementById('accName').value.trim(); if(!name) return toast('Nama akun wajib diisi',{error:true});
  const payload={name, type:document.getElementById('accType').value, initialBalance:parseNum(document.getElementById('accBalance').value), color:state.ui.accColor};
  try{
    if(state.ui.editingAccId){ await updateDoc(docRef('accounts', state.ui.editingAccId), payload); toast('Akun diperbarui'); }
    else{ payload.createdAt=serverTimestamp(); await addDoc(colRef('accounts'), payload); toast('Akun ditambahkan'); }
    closeModal('modalAcc');
  }catch(e){ toast('Gagal: '+e.message, {error:true}); }
});
document.getElementById('accGrid').addEventListener('click', e=>{
  const editId=e.target.closest('[data-edit-acc]')?.dataset.editAcc; const delId=e.target.closest('[data-del-acc]')?.dataset.delAcc;
  if(editId) openAccModal(editId);
  if(delId) confirmAction('Hapus akun ini? Transaksi terkait tidak dihapus otomatis.', async ()=>{ await deleteDoc(docRef('accounts', delId)); toast('Akun dihapus'); });
});
document.getElementById('doTransferBtn').addEventListener('click', async ()=>{
  const from=document.getElementById('trFrom').value, to=document.getElementById('trTo').value, amount=parseNum(document.getElementById('trAmount').value);
  if(from===to) return toast('Akun asal dan tujuan tidak boleh sama',{error:true});
  if(!amount||amount<=0) return toast('Masukkan jumlah transfer yang valid',{error:true});
  try{
    await addDoc(colRef('transactions'), {type:'transfer', amount, date:document.getElementById('trDate').value||todayISO(), accountId:from, toAccountId:to, categoryId:null, note:document.getElementById('trNote').value.trim()||'Transfer antar akun', createdAt:serverTimestamp()});
    document.getElementById('trAmount').value=''; document.getElementById('trNote').value=''; toast('Transfer berhasil diproses');
  }catch(e){ toast('Gagal: '+e.message,{error:true}); }
});

/* ================================================================
   RENDER: ANGGARAN
   ================================================================ */
function renderAnggaran(){
  if(!state.ui.budgetYm) state.ui.budgetYm=currentMonthYm(); const ym=state.ui.budgetYm;
  document.getElementById('budgetMonthLbl').textContent = monthLabel(ym);
  document.getElementById('budgetPeriodLabel').textContent = ym===currentMonthYm()?'Periode berjalan':'Menampilkan riwayat periode terpilih';
  const rows = state.budgets.map(b=>{ const cat=findCategory(b.categoryId); const spent=state.transactions.filter(t=>t.type==='expense'&&t.categoryId===b.categoryId&&ymOf(t.date)===ym).reduce((s,t)=>s+t.amount,0); return {...b, cat, spent, pct: b.limit?clamp(spent/b.limit*100,0,999):0}; });
  const wrap=document.getElementById('budgetList'); document.getElementById('budgetEmpty').classList.toggle('hidden', rows.length>0);
  wrap.innerHTML = rows.map(r=>`<div class="budget-item"><div class="budget-top"><span class="cat">${r.cat?.icon||'🏷️'} ${r.cat?.name||'—'}</span>
  <div class="row-actions"><span class="val ${r.pct>100?'over-budget':''}">${fmtRupiah(r.spent)} / ${fmtRupiah(r.limit)}</span><button data-del-budget="${r.id}" class="del" style="margin-left:8px;">🗑️</button></div></div>
  <div class="progress-track"><div class="progress-fill" style="width:${clamp(r.pct,0,100)}%; background:${r.pct>100?getCss('--rust'):r.pct>80?getCss('--gold'):getCss('--sage')};"></div></div>
  <div class="budget-meta"><span>${r.pct>100?'Melebihi anggaran '+r.pct.toFixed(0)+'%':r.pct.toFixed(0)+'% terpakai · sisa '+fmtRupiah(Math.max(0,r.limit-r.spent))}</span></div></div>`).join('');
}
document.getElementById('budgetPrevMonth').addEventListener('click', ()=>{ const d=new Date(state.ui.budgetYm+'-01T00:00:00'); d.setMonth(d.getMonth()-1); state.ui.budgetYm=d.toISOString().slice(0,7); renderAnggaran(); });
document.getElementById('budgetNextMonth').addEventListener('click', ()=>{ const d=new Date(state.ui.budgetYm+'-01T00:00:00'); d.setMonth(d.getMonth()+1); state.ui.budgetYm=d.toISOString().slice(0,7); renderAnggaran(); });
document.getElementById('addBudgetBtn').addEventListener('click', ()=>{ state.ui.editingBudgetId=null; populateBudgetCategorySelect(); document.getElementById('budgetLimit').value=''; openModal('modalBudget'); });
document.getElementById('saveBudgetBtn').addEventListener('click', async ()=>{
  const categoryId=document.getElementById('budgetCategory').value; const limit=parseNum(document.getElementById('budgetLimit').value);
  if(!limit||limit<=0) return toast('Masukkan batas anggaran yang valid',{error:true});
  try{
    const existing=state.budgets.find(b=>b.categoryId===categoryId);
    if(existing){ await updateDoc(docRef('budgets',existing.id), {limit}); toast('Anggaran diperbarui'); }
    else{ await addDoc(colRef('budgets'), {categoryId, limit, createdAt:serverTimestamp()}); toast('Anggaran ditambahkan'); }
    closeModal('modalBudget');
  }catch(e){ toast('Gagal: '+e.message,{error:true}); }
});
document.getElementById('budgetList').addEventListener('click', e=>{ const delId=e.target.closest('[data-del-budget]')?.dataset.delBudget; if(delId) confirmAction('Hapus anggaran ini?', async ()=>{ await deleteDoc(docRef('budgets', delId)); toast('Anggaran dihapus'); }); });

/* ================================================================
   RENDER: TARGET TABUNGAN
   ================================================================ */
function renderTarget(){
  const wrap=document.getElementById('goalGrid');
  if(state.goals.length===0){ wrap.innerHTML=`<div class="empty-state" style="grid-column:1/-1;"><div class="ico">🏺</div><h4>Belum ada target</h4><p>Buat target tabungan pertama Anda.</p></div>`; return; }
  wrap.innerHTML = state.goals.map(g=>{ const pct=clamp(g.current/g.target*100,0,100); const daysLeft=Math.ceil((new Date(g.deadline)-new Date())/86400000);
    return `<div class="goal-card"><div class="goal-head"><div><div class="goal-name">${g.name}</div><div class="goal-deadline">${daysLeft>0?daysLeft+' hari lagi':'Tenggat terlewati'} · ${fmtDate(g.deadline)}</div></div>
    <div class="row-actions"><button data-edit-goal="${g.id}">✏️</button><button data-del-goal="${g.id}" class="del">🗑️</button></div></div>
    ${ringSvg(pct, g.color)}<div class="goal-amounts" style="margin-top:10px;">Terkumpul <strong>${fmtRupiah(g.current)}</strong> dari target ${fmtRupiah(g.target)}</div>
    <div style="margin-top:12px;"><button class="btn btn-gold btn-sm" data-addfund-goal="${g.id}">+ Tambah Dana</button></div></div>`; }).join('');
}
function ringSvg(pct,color){ const r=32,c=2*Math.PI*r,off=c-(pct/100)*c; return `<div class="goal-ring-wrap"><svg width="78" height="78" viewBox="0 0 78 78"><circle cx="39" cy="39" r="${r}" fill="none" stroke="var(--paper-3)" stroke-width="8"/><circle cx="39" cy="39" r="${r}" fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 39 39)"/><text x="39" y="44" text-anchor="middle" font-family="IBM Plex Mono" font-size="14" font-weight="700" fill="var(--ink)">${pct.toFixed(0)}%</text></svg><div class="goal-amounts">Progres<br><strong style="color:${color};">${pct.toFixed(1)}%</strong></div></div>`; }
document.getElementById('addGoalBtn').addEventListener('click', ()=>{
  state.ui.editingGoalId=null; document.getElementById('goalModalTitle').textContent='Buat Target Tabungan';
  document.getElementById('goalName').value=''; document.getElementById('goalTarget').value=''; document.getElementById('goalCurrent').value='0'; document.getElementById('goalDeadline').value='';
  state.ui.goalColor=COLORS[Math.floor(Math.random()*COLORS.length)]; buildColorSwatches('goalColorSwatches', state.ui.goalColor, c=>state.ui.goalColor=c); openModal('modalGoal');
});
document.getElementById('saveGoalBtn').addEventListener('click', async ()=>{
  const name=document.getElementById('goalName').value.trim(); const target=parseNum(document.getElementById('goalTarget').value); const current=parseNum(document.getElementById('goalCurrent').value); const deadline=document.getElementById('goalDeadline').value||todayISO();
  if(!name||!target) return toast('Lengkapi nama dan target dana',{error:true});
  try{
    if(state.ui.editingGoalId){ await updateDoc(docRef('goals', state.ui.editingGoalId), {name,target,current,deadline,color:state.ui.goalColor}); toast('Target diperbarui'); }
    else{ await addDoc(colRef('goals'), {name,target,current,deadline,color:state.ui.goalColor, createdAt:serverTimestamp()}); toast('Target ditambahkan'); }
    closeModal('modalGoal');
  }catch(e){ toast('Gagal: '+e.message,{error:true}); }
});
document.getElementById('goalGrid').addEventListener('click', async e=>{
  const editId=e.target.closest('[data-edit-goal]')?.dataset.editGoal; const delId=e.target.closest('[data-del-goal]')?.dataset.delGoal; const addFundId=e.target.closest('[data-addfund-goal]')?.dataset.addfundGoal;
  if(editId){ const g=state.goals.find(x=>x.id===editId); state.ui.editingGoalId=editId; document.getElementById('goalModalTitle').textContent='Ubah Target Tabungan'; document.getElementById('goalName').value=g.name; document.getElementById('goalTarget').value=g.target.toLocaleString('id-ID'); document.getElementById('goalCurrent').value=g.current.toLocaleString('id-ID'); document.getElementById('goalDeadline').value=g.deadline; state.ui.goalColor=g.color; buildColorSwatches('goalColorSwatches', g.color, c=>state.ui.goalColor=c); openModal('modalGoal'); }
  if(delId) confirmAction('Hapus target tabungan ini?', async ()=>{ await deleteDoc(docRef('goals', delId)); toast('Target dihapus'); });
  if(addFundId){ const {value: amountStr} = await Swal.fire({title:'Tambah Dana', input:'text', inputPlaceholder:'Jumlah (Rp)', showCancelButton:true}); const amount=parseNum(amountStr); if(amount>0){ const g=state.goals.find(x=>x.id===addFundId); await updateDoc(docRef('goals', addFundId), {current: g.current+amount}); toast('Dana ditambahkan'); } }
});

/* ================================================================
   RENDER: BERULANG
   ================================================================ */
const FREQ_LABEL={daily:'Harian',weekly:'Mingguan',monthly:'Bulanan',yearly:'Tahunan'};
function renderBerulang(){
  const wrap=document.getElementById('recurList');
  if(state.recurring.length===0){ wrap.innerHTML=`<div class="empty-state"><div class="ico">🔁</div><h4>Belum ada jadwal</h4><p>Tambahkan transaksi berulang agar tidak lupa mencatat.</p></div>`; return; }
  wrap.innerHTML = state.recurring.map(r=>{ const cat=findCategory(r.categoryId); const acc=findAccount(r.accountId); const isIncome=r.type==='income';
    return `<div class="budget-item" style="display:flex; align-items:center; gap:14px;"><div class="stat-ico" style="background:${isIncome?'var(--sage-bg)':'var(--rust-bg)'}; color:${isIncome?'var(--sage)':'var(--rust)'}; width:36px; height:36px;">${cat?.icon||(isIncome?'↑':'↓')}</div>
    <div style="flex:1;"><div style="font-weight:700; font-size:13.5px;">${r.name}</div><div class="text-muted" style="font-size:11px;">${FREQ_LABEL[r.frequency]} · ${acc?.name||'-'} · Berikutnya ${fmtDate(r.nextDate)}</div></div>
    <div class="mono" style="font-weight:700; color:${isIncome?'var(--sage)':'var(--rust)'};">${isIncome?'+':'-'}${fmtRupiah(r.amount)}</div>
    <button class="btn btn-ghost btn-sm" data-run-recur="${r.id}">▶️ Catat</button><button class="row-actions" data-del-recur="${r.id}" style="border:1px solid var(--line); border-radius:8px; width:32px; height:32px; background:var(--paper);">🗑️</button></div>`; }).join('');
}
document.getElementById('recurTypeToggle').addEventListener('click', e=>{ const btn=e.target.closest('button'); if(!btn) return; state.ui.recurType=btn.dataset.val; document.querySelectorAll('#recurTypeToggle button').forEach(b=>b.classList.toggle('active', b===btn)); populateCategorySelect(state.ui.recurType,'recurCategory'); });
document.getElementById('addRecurBtn').addEventListener('click', ()=>{
  document.getElementById('recurName').value=''; document.getElementById('recurAmount').value=''; document.getElementById('recurFreq').value='monthly'; document.getElementById('recurNextDate').value=todayISO();
  state.ui.recurType='expense'; document.querySelectorAll('#recurTypeToggle button').forEach(b=>b.classList.toggle('active', b.dataset.val==='expense'));
  populateAccountSelects(); populateCategorySelect('expense','recurCategory'); openModal('modalRecur');
});
document.getElementById('saveRecurBtn').addEventListener('click', async ()=>{
  const name=document.getElementById('recurName').value.trim(); const amount=parseNum(document.getElementById('recurAmount').value);
  if(!name||!amount) return toast('Lengkapi nama dan jumlah',{error:true});
  try{ await addDoc(colRef('recurring'), {name, type:state.ui.recurType, amount, accountId:document.getElementById('recurAccount').value, categoryId:document.getElementById('recurCategory').value, frequency:document.getElementById('recurFreq').value, nextDate:document.getElementById('recurNextDate').value||todayISO(), active:true, createdAt:serverTimestamp()}); closeModal('modalRecur'); toast('Jadwal ditambahkan'); }
  catch(e){ toast('Gagal: '+e.message,{error:true}); }
});
document.getElementById('recurList').addEventListener('click', async e=>{
  const delId=e.target.closest('[data-del-recur]')?.dataset.delRecur; const runId=e.target.closest('[data-run-recur]')?.dataset.runRecur;
  if(delId) confirmAction('Hapus jadwal ini?', async ()=>{ await deleteDoc(docRef('recurring', delId)); toast('Jadwal dihapus'); });
  if(runId){ const r=state.recurring.find(x=>x.id===runId); await addDoc(colRef('transactions'), {type:r.type, amount:r.amount, date:todayISO(), accountId:r.accountId, categoryId:r.categoryId, note:r.name+' (otomatis)', createdAt:serverTimestamp()}); const nd=advanceDate(r.nextDate,r.frequency); await updateDoc(docRef('recurring', runId), {nextDate:nd}); toast(`"${r.name}" dicatat sebagai transaksi`); }
});
function advanceDate(iso,freq){ const d=new Date(iso+'T00:00:00'); if(freq==='daily') d.setDate(d.getDate()+1); if(freq==='weekly') d.setDate(d.getDate()+7); if(freq==='monthly') d.setMonth(d.getMonth()+1); if(freq==='yearly') d.setFullYear(d.getFullYear()+1); return d.toISOString().slice(0,10); }

/* ================================================================
   RENDER: JURNAL FOREX
   ================================================================ */
function renderForex(){
  const trades = [...state.forexTrades].sort((a,b)=> (b.openDate||'').localeCompare(a.openDate||''));
  const closed = trades.filter(t=>t.status==='closed'); const wins = closed.filter(t=>Number(t.pnl)>0);
  const totalPnl = closed.reduce((s,t)=>s+Number(t.pnl||0),0); const winRate = closed.length? (wins.length/closed.length*100):0;
  document.getElementById('forexStats').innerHTML = [
    {label:'Total Trade', value:trades.length+'', color:'var(--ink)'},
    {label:'Trade Terbuka', value:trades.filter(t=>t.status==='open').length+'', color:'var(--gold)'},
    {label:'Win Rate', value:winRate.toFixed(1)+'%', color:'var(--sage)'},
    {label:'Total P/L', value:fmtRupiah(totalPnl), color: totalPnl>=0?'var(--sage)':'var(--rust)'},
  ].map(c=>`<div class="ledger-card stat-card"><div class="stat-label">${c.label}</div><div class="stat-value" style="color:${c.color}">${c.value}</div></div>`).join('');
  const tbody=document.querySelector('#forexTable tbody'); document.getElementById('forexEmpty').classList.toggle('hidden', trades.length>0);
  tbody.innerHTML = trades.map(t=>{
    const pnl=Number(t.pnl||0);
    return `<tr><td>${t.openDate?fmtDate(t.openDate):'-'}</td><td class="mono" style="font-weight:700;">${t.pair}</td><td>${t.direction==='buy'?'<span class="forex-badge-buy">BUY</span>':'<span class="forex-badge-sell">SELL</span>'}</td>
    <td>${t.lot}</td><td class="mono">${t.entryPrice||'-'}</td><td class="mono">${t.exitPrice||'-'}</td>
    <td>${t.status==='open'?'<span class="forex-badge-open">OPEN</span>':'<span class="forex-badge-closed">CLOSED</span>'}</td>
    <td style="text-align:right;" class="${pnl>=0?'amount-in':'amount-out'}">${pnl>=0?'+':''}${fmtRupiah(pnl)}</td>
    <td><div class="row-actions"><button data-edit-trade="${t.id}">✏️</button><button data-del-trade="${t.id}" class="del">🗑️</button></div></td></tr>`;
  }).join('');
}
document.getElementById('tradeDirToggle').addEventListener('click', e=>{ const btn=e.target.closest('button'); if(!btn) return; state.ui.tradeDir=btn.dataset.val; document.querySelectorAll('#tradeDirToggle button').forEach(b=>b.classList.toggle('active', b===btn)); });
document.getElementById('addTradeBtn').addEventListener('click', ()=>{
  state.ui.editingTradeId=null; document.getElementById('tradeModalTitle').textContent='Tambah Trade Forex';
  state.ui.tradeDir='buy'; document.querySelectorAll('#tradeDirToggle button').forEach(b=>b.classList.toggle('active', b.dataset.val==='buy'));
  ['tradePair','tradeLot','tradeEntry','tradeExit','tradePnl','tradeNote'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('tradeOpenDate').value=todayISO(); document.getElementById('tradeCloseDate').value='';
  openModal('modalTrade');
});
document.getElementById('saveTradeBtn').addEventListener('click', async ()=>{
  const pair=document.getElementById('tradePair').value.trim().toUpperCase(); const lot=document.getElementById('tradeLot').value.trim();
  if(!pair) return toast('Pasangan/instrumen wajib diisi',{error:true});
  const exitVal=document.getElementById('tradeExit').value.trim(); const closeDate=document.getElementById('tradeCloseDate').value;
  const status = exitVal || closeDate ? 'closed' : 'open';
  const payload = { pair, direction:state.ui.tradeDir, lot: lot||'-', entryPrice:document.getElementById('tradeEntry').value.trim(), exitPrice:exitVal, openDate:document.getElementById('tradeOpenDate').value||todayISO(), closeDate:closeDate||null, pnl: parseNum(document.getElementById('tradePnl').value), note:document.getElementById('tradeNote').value.trim(), status };
  try{
    if(state.ui.editingTradeId){ await updateDoc(docRef('forexTrades', state.ui.editingTradeId), payload); toast('Trade diperbarui'); }
    else{ payload.createdAt=serverTimestamp(); await addDoc(colRef('forexTrades'), payload); toast('Trade dicatat'); }
    closeModal('modalTrade');
  }catch(e){ toast('Gagal: '+e.message,{error:true}); }
});
document.getElementById('forexTable').addEventListener('click', e=>{
  const editId=e.target.closest('[data-edit-trade]')?.dataset.editTrade; const delId=e.target.closest('[data-del-trade]')?.dataset.delTrade;
  if(editId){ const t=state.forexTrades.find(x=>x.id===editId); state.ui.editingTradeId=editId; document.getElementById('tradeModalTitle').textContent='Ubah Trade Forex';
    state.ui.tradeDir=t.direction; document.querySelectorAll('#tradeDirToggle button').forEach(b=>b.classList.toggle('active', b.dataset.val===t.direction));
    document.getElementById('tradePair').value=t.pair; document.getElementById('tradeLot').value=t.lot; document.getElementById('tradeEntry').value=t.entryPrice; document.getElementById('tradeExit').value=t.exitPrice;
    document.getElementById('tradeOpenDate').value=t.openDate||''; document.getElementById('tradeCloseDate').value=t.closeDate||''; document.getElementById('tradePnl').value=t.pnl; document.getElementById('tradeNote').value=t.note||'';
    openModal('modalTrade'); }
  if(delId) confirmAction('Hapus catatan trade ini?', async ()=>{ await deleteDoc(docRef('forexTrades', delId)); toast('Trade dihapus'); });
});

/* ================================================================
   RENDER: ASET KRIPTO (harga live via CoinGecko)
   ================================================================ */
function populateHoldingCoinSelect(){ document.getElementById('holdingCoin').innerHTML = COIN_LIST.map(c=>`<option value="${c.id}">${c.name} (${c.sym})</option>`).join(''); }
function renderKripto(){
  populateHoldingCoinSelect();
  document.getElementById('cryptoPriceGrid').innerHTML = COIN_LIST.map(c=>{
    const p = cryptoPrices[c.id]; const price = p? p.usd : null; const chg = p? p.usd_24h_change : null;
    return `<div class="crypto-card"><div class="cc-top"><div class="cc-ico" style="background:${c.color};">${c.sym.slice(0,1)}</div><div><div class="cc-name">${c.name}</div><div class="cc-sym">${c.sym}</div></div></div>
    <div class="cc-price">${price!=null? '$'+price.toLocaleString('en-US',{maximumFractionDigits: price<1?4:2}) : '...'}</div>
    <div class="cc-chg" style="color:${chg==null?'var(--ink-soft)':chg>=0?'var(--sage)':'var(--rust)'}">${chg==null?'Memuat...':(chg>=0?'▲ ':'▼ ')+Math.abs(chg).toFixed(2)+'% (24j)'}</div></div>`;
  }).join('');
  const rows = state.cryptoHoldings.map(h=>{
    const coin = COIN_LIST.find(c=>c.id===h.coinId) || {name:h.coinId, sym:h.coinId};
    const p = cryptoPrices[h.coinId]; const curPrice = p? p.usd : null; const curIdr = p? p.idr : null;
    const valueUsd = curPrice!=null? curPrice*h.amount : null; const valueIdr = curIdr!=null? curIdr*h.amount : null;
    const costUsd = h.avgPrice*h.amount; const gainUsd = valueUsd!=null? valueUsd-costUsd : null; const gainPct = costUsd? (gainUsd/costUsd*100):0;
    return {h, coin, curPrice, valueIdr, gainUsd, gainPct};
  });
  const tbody=document.querySelector('#cryptoTable tbody'); document.getElementById('cryptoEmpty').classList.toggle('hidden', rows.length>0);
  tbody.innerHTML = rows.map(r=>`<tr><td><span class="cat-chip">${r.coin.sym}</span> ${r.coin.name}</td><td class="mono">${r.h.amount}</td><td class="mono">$${r.h.avgPrice.toLocaleString('en-US')}</td>
    <td class="mono">${r.curPrice!=null?'$'+r.curPrice.toLocaleString('en-US',{maximumFractionDigits:r.curPrice<1?4:2}):'...'}</td>
    <td style="text-align:right;" class="mono">${r.valueIdr!=null?fmtRupiah(r.valueIdr):'...'}</td>
    <td style="text-align:right;" class="${r.gainUsd==null?'':(r.gainUsd>=0?'amount-in':'amount-out')}">${r.gainUsd==null?'...':(r.gainUsd>=0?'+':'')+'$'+r.gainUsd.toFixed(2)+' ('+r.gainPct.toFixed(1)+'%)'}</td>
    <td><div class="row-actions"><button data-edit-hold="${r.h.id}">✏️</button><button data-del-hold="${r.h.id}" class="del">🗑️</button></div></td></tr>`).join('');
  const totalValueIdr = rows.reduce((s,r)=>s+(r.valueIdr||0),0);
  const totalCostUsd = rows.reduce((s,r)=>s+r.h.avgPrice*r.h.amount,0);
  const totalValueUsd = rows.reduce((s,r)=>{ const p=cryptoPrices[r.h.coinId]; return s+(p? p.usd*r.h.amount:0); },0);
  const totalGainUsd = totalValueUsd - totalCostUsd;
  document.getElementById('cryptoStats').innerHTML = [
    {label:'Total Nilai Portofolio', value:fmtRupiah(totalValueIdr), color:'var(--gold)'},
    {label:'Modal Investasi', value:'$'+totalCostUsd.toLocaleString('en-US'), color:'var(--ink)'},
    {label:'Untung / Rugi', value:(totalGainUsd>=0?'+':'')+'$'+totalGainUsd.toFixed(2), color: totalGainUsd>=0?'var(--sage)':'var(--rust)'},
  ].map(c=>`<div class="ledger-card stat-card"><div class="stat-label">${c.label}</div><div class="stat-value" style="color:${c.color}">${c.value}</div></div>`).join('');
}
document.getElementById('addHoldingBtn').addEventListener('click', ()=>{
  state.ui.editingHoldingId=null; document.getElementById('holdingModalTitle').textContent='Tambah Aset Kripto'; populateHoldingCoinSelect();
  document.getElementById('holdingAmount').value=''; document.getElementById('holdingAvgPrice').value=''; document.getElementById('holdingNote').value='';
  openModal('modalHolding');
});
document.getElementById('saveHoldingBtn').addEventListener('click', async ()=>{
  const coinId=document.getElementById('holdingCoin').value; const amount=parseNum(document.getElementById('holdingAmount').value); const avgPrice=parseNum(document.getElementById('holdingAvgPrice').value);
  if(!amount||amount<=0) return toast('Masukkan jumlah koin yang valid',{error:true});
  const payload = {coinId, amount, avgPrice, note:document.getElementById('holdingNote').value.trim()};
  try{
    if(state.ui.editingHoldingId){ await updateDoc(docRef('cryptoHoldings', state.ui.editingHoldingId), payload); toast('Aset diperbarui'); }
    else{ payload.createdAt=serverTimestamp(); await addDoc(colRef('cryptoHoldings'), payload); toast('Aset ditambahkan'); }
    closeModal('modalHolding');
  }catch(e){ toast('Gagal: '+e.message,{error:true}); }
});
document.getElementById('cryptoTable').addEventListener('click', e=>{
  const editId=e.target.closest('[data-edit-hold]')?.dataset.editHold; const delId=e.target.closest('[data-del-hold]')?.dataset.delHold;
  if(editId){ const h=state.cryptoHoldings.find(x=>x.id===editId); state.ui.editingHoldingId=editId; document.getElementById('holdingModalTitle').textContent='Ubah Aset Kripto'; populateHoldingCoinSelect(); document.getElementById('holdingCoin').value=h.coinId; document.getElementById('holdingAmount').value=h.amount; document.getElementById('holdingAvgPrice').value=h.avgPrice; document.getElementById('holdingNote').value=h.note||''; openModal('modalHolding'); }
  if(delId) confirmAction('Hapus aset kripto ini?', async ()=>{ await deleteDoc(docRef('cryptoHoldings', delId)); toast('Aset dihapus'); });
});
async function fetchCryptoPrices(){
  try{
    const ids = COIN_LIST.map(c=>c.id).join(',');
    const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd,idr&include_24hr_change=true`);
    const data = await res.json();
    Object.keys(data).forEach(id=>{ cryptoPrices[id] = {usd:data[id].usd, idr:data[id].idr, usd_24h_change:data[id].usd_24h_change}; });
    const active = document.querySelector('.page.active');
    if(active && (active.id==='page-kripto'||active.id==='page-dashboard')) renderPage(active.id.replace('page-',''));
  }catch(e){ console.error('Gagal memuat harga kripto', e); }
}
fetchCryptoPrices(); setInterval(fetchCryptoPrices, 60000);
async function fetchUsdRate(){
  try{ const res=await fetch('https://api.exchangerate-api.com/v4/latest/USD'); const data=await res.json(); currentUSDRate=data.rates.IDR; document.getElementById('usdRateVal').textContent = 'Rp '+Math.round(currentUSDRate).toLocaleString('id-ID'); }
  catch(e){ document.getElementById('usdRateVal').textContent='Offline'; }
}
fetchUsdRate(); setInterval(fetchUsdRate, 300000);

/* ================================================================
   RENDER: LAPORAN
   ================================================================ */
function renderLaporan(){
  const year=new Date().getFullYear(); document.getElementById('yearLabel').textContent='Tahun '+year;
  let yIncome=0,yExpense=0; const monthsData=[];
  for(let m=0;m<12;m++){ const ym=`${year}-${String(m+1).padStart(2,'0')}`; const t=monthTotals(ym); yIncome+=t.income; yExpense+=t.expense; monthsData.push({ym,...t}); }
  const avgSavingsRate = yIncome? ((yIncome-yExpense)/yIncome*100):0;
  document.getElementById('reportStats').innerHTML = [ {label:'Total Pemasukan '+year, value:yIncome, color:'var(--sage)'}, {label:'Total Pengeluaran '+year, value:yExpense, color:'var(--rust)'}, {label:'Rata-rata Tabungan', value:null, color:'var(--gold)', raw:avgSavingsRate.toFixed(1)+'%'} ].map(c=>`<div class="ledger-card stat-card"><div class="stat-label">${c.label}</div><div class="stat-value" style="color:${c.color}">${c.raw||fmtRupiah(c.value)}</div></div>`).join('');
  if(charts.yearly) charts.yearly.destroy();
  charts.yearly = new Chart(document.getElementById('yearlyChart'), {type:'bar', data:{labels: monthsData.map(m=>monthShort(m.ym)), datasets:[
    {label:'Pemasukan', data:monthsData.map(m=>m.income), backgroundColor:hexA(getCss('--sage'),0.85), borderRadius:5},
    {label:'Pengeluaran', data:monthsData.map(m=>m.expense), backgroundColor:hexA(getCss('--rust'),0.85), borderRadius:5} ]}, options:baseChartOpts()});
  if(charts.donut) charts.donut.destroy();
  charts.donut = new Chart(document.getElementById('donutChart'), {type:'doughnut', data:{labels:['Pemasukan','Pengeluaran'], datasets:[{data:[yIncome,yExpense], backgroundColor:[getCss('--sage'),getCss('--rust')], borderWidth:2, borderColor:getCss('--paper')}]}, options:{responsive:true, maintainAspectRatio:false, cutout:'65%', plugins:{legend:{position:'bottom'}}}});
  const tbody=document.querySelector('#monthlyTable tbody');
  tbody.innerHTML = monthsData.slice().reverse().map(m=>{ const rate=m.income?(m.net/m.income*100):0; return `<tr><td>${monthLabel(m.ym)}</td><td style="text-align:right;" class="amount-in">${fmtRupiah(m.income)}</td><td style="text-align:right;" class="amount-out">${fmtRupiah(m.expense)}</td><td style="text-align:right;" class="mono">${fmtRupiah(m.net)}</td><td style="text-align:right;">${m.income?rate.toFixed(1)+'%':'-'}</td></tr>`; }).join('');
}

/* ================================================================
   RENDER: KATEGORI
   ================================================================ */
function renderKategori(){
  const mkRow=(c,type)=>{ const usedCount=state.transactions.filter(t=>t.categoryId===c.id).length; return `<div class="budget-item" style="display:flex; align-items:center; gap:12px;"><div class="stat-ico" style="background:${hexA(c.color,0.15)}; color:${c.color}; width:34px; height:34px;">${c.icon}</div><div style="flex:1;"><div style="font-weight:700; font-size:13px;">${c.name}</div><div class="text-muted" style="font-size:11px;">${usedCount} transaksi</div></div><button data-del-cat="${c.id}" data-cat-type="${type}" class="del" style="width:30px;height:30px;border-radius:8px;border:1px solid var(--line); background:var(--paper);">🗑️</button></div>`; };
  document.getElementById('catListIncome').innerHTML = state.categories.income.map(c=>mkRow(c,'income')).join('') || '<p class="text-muted">Belum ada kategori.</p>';
  document.getElementById('catListExpense').innerHTML = state.categories.expense.map(c=>mkRow(c,'expense')).join('') || '<p class="text-muted">Belum ada kategori.</p>';
}
function buildIconSwatches(containerId, current, onPick){ const el=document.getElementById(containerId); el.innerHTML = ICONS.map(i=>`<div class="swatch ${i===current?'sel':''}" style="display:flex;align-items:center;justify-content:center;background:var(--paper-3);" data-icon="${i}">${i}</div>`).join(''); el.querySelectorAll('.swatch').forEach(sw=> sw.addEventListener('click', ()=>{ el.querySelectorAll('.swatch').forEach(s=>s.classList.remove('sel')); sw.classList.add('sel'); onPick(sw.dataset.icon); })); }
document.getElementById('addCatBtn').addEventListener('click', ()=>{
  document.getElementById('catName').value=''; document.getElementById('catType').value='expense';
  state.ui.catColor=COLORS[Math.floor(Math.random()*COLORS.length)]; state.ui.catIcon=ICONS[Math.floor(Math.random()*ICONS.length)];
  buildColorSwatches('catColorSwatches', state.ui.catColor, c=>state.ui.catColor=c); buildIconSwatches('catIconSwatches', state.ui.catIcon, i=>state.ui.catIcon=i);
  openModal('modalCat');
});
document.getElementById('saveCatBtn').addEventListener('click', async ()=>{
  const name=document.getElementById('catName').value.trim(); if(!name) return toast('Nama kategori wajib diisi',{error:true});
  const type=document.getElementById('catType').value;
  state.categories[type].push({id:uid(), name, icon:state.ui.catIcon, color:state.ui.catColor});
  try{ await saveCategories(); closeModal('modalCat'); toast('Kategori ditambahkan'); renderKategori(); }catch(e){ toast('Gagal: '+e.message,{error:true}); }
});
['catListIncome','catListExpense'].forEach(id=>{ document.getElementById(id).addEventListener('click', e=>{ const btn=e.target.closest('[data-del-cat]'); if(!btn) return; const catId=btn.dataset.delCat, type=btn.dataset.catType; confirmAction('Hapus kategori ini? Transaksi yang sudah tercatat tidak akan terhapus.', async ()=>{ state.categories[type]=state.categories[type].filter(c=>c.id!==catId); await saveCategories(); toast('Kategori dihapus'); renderKategori(); }); }); });

/* ================================================================
   ADMIN
   ================================================================ */
document.getElementById('loadAdminBtn').addEventListener('click', async ()=>{
  const tbody=document.querySelector('#adminTable tbody'); tbody.innerHTML=`<tr><td colspan="5" style="text-align:center; padding:24px;">Memuat data...</td></tr>`;
  try{
    const snap = await getDocs(query(collectionGroup(db,'transactions'), orderBy('createdAt','desc')));
    const rows = snap.docs.map(d=>{ const data=d.data(); const uidPath=d.ref.path.split('/')[1]; return {...data, ownerUid:uidPath}; });
    const uids = [...new Set(rows.map(r=>r.ownerUid))]; const emails={};
    for(const u of uids){ try{ const s=await getDoc(doc(db,'users',u)); if(s.exists()) emails[u]=s.data().email||u; }catch(e){} }
    tbody.innerHTML = rows.slice(0,300).map(r=>`<tr><td>${emails[r.ownerUid]||r.ownerUid}</td><td>${r.date?fmtDate(r.date):'-'}</td><td>${r.type}</td><td>${r.note||'-'}</td><td style="text-align:right;" class="mono">${fmtRupiah(r.amount)}</td></tr>`).join('') || '<tr><td colspan="5" style="text-align:center;">Kosong</td></tr>';
  }catch(e){ tbody.innerHTML=`<tr><td colspan="5" style="text-align:center; color:var(--rust);">Gagal memuat (pastikan akun ini admin & rules Firestore mengizinkan): ${e.message}</td></tr>`; }
});

/* ================================================================
   EXPORT / DATA MANAGEMENT
   ================================================================ */
function downloadFile(filename, content, type='application/json'){ const blob=new Blob([content],{type}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url); }
function exportCSV(){
  const rows=[['Tanggal','Tipe','Keterangan','Kategori','Akun','Akun Tujuan','Jumlah']];
  state.transactions.forEach(t=> rows.push([t.date, t.type, t.note||'', findCategory(t.categoryId)?.name||'', findAccount(t.accountId)?.name||'', findAccount(t.toAccountId)?.name||'', t.amount]));
  const csv = rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadFile('transaksi-buku-kas.csv', csv, 'text/csv'); toast('CSV berhasil diunduh');
}
document.getElementById('exportCsvBtn').addEventListener('click', exportCSV);
document.getElementById('exportBtn').addEventListener('click', exportCSV);
document.getElementById('exportJsonBtn').addEventListener('click', ()=>{ downloadFile('backup-buku-kas.json', JSON.stringify(state,null,2)); toast('JSON berhasil diunduh'); });
document.getElementById('seedDataBtn').addEventListener('click', ()=>{
  confirmAction('Muat data contoh ke akun cloud Anda?', async ()=>{
    try{
      const accA = await addDoc(colRef('accounts'), {name:'Kas Tunai', type:'cash', initialBalance:500000, color:COLORS[0], createdAt:serverTimestamp()});
      const accB = await addDoc(colRef('accounts'), {name:'Bank BCA', type:'bank', initialBalance:8000000, color:COLORS[4], createdAt:serverTimestamp()});
      if(!state.categories.income.length) { state.categories = defaultCategories(); await saveCategories(); }
      const incCat = state.categories.income[0]?.id, expCat = state.categories.expense[0]?.id;
      await addDoc(colRef('transactions'), {type:'income', amount:6500000, date:todayISO(), accountId:accB.id, categoryId:incCat, note:'Gaji bulanan', createdAt:serverTimestamp()});
      await addDoc(colRef('transactions'), {type:'expense', amount:150000, date:todayISO(), accountId:accA.id, categoryId:expCat, note:'Makan siang', createdAt:serverTimestamp()});
      toast('Data contoh berhasil dimuat');
    }catch(e){ toast('Gagal memuat contoh: '+e.message, {error:true}); }
  });
});
document.getElementById('resetDataBtn').addEventListener('click', ()=>{
  confirmAction('Hapus SEMUA data cloud Anda (akun, transaksi, anggaran, target, forex, kripto)? Tindakan ini permanen.', async ()=>{
    try{
      const cols=['transactions','accounts','budgets','goals','recurring','forexTrades','cryptoHoldings'];
      for(const c of cols){ for(const item of state[c]||[]){ await deleteDoc(docRef(c, item.id)); } }
      state.categories = defaultCategories(); await saveCategories();
      toast('Seluruh data telah dihapus');
    }catch(e){ toast('Gagal: '+e.message,{error:true}); }
  });
});

/* ================================================================
   THEME
   ================================================================ */
function setTheme(t){ document.body.setAttribute('data-theme', t); document.getElementById('themeBtn').textContent = t==='malam'?'☀️':'🌙'; document.querySelectorAll('[data-theme-choice]').forEach(b=>b.classList.toggle('active', b.dataset.themeChoice===t)); refreshCurrentPage(); localStorage.setItem('bk_theme', t); }
document.getElementById('themeBtn').addEventListener('click', ()=> setTheme(document.body.getAttribute('data-theme')==='siang'?'malam':'siang'));
document.querySelectorAll('[data-theme-choice]').forEach(b=> b.addEventListener('click', ()=> setTheme(b.dataset.themeChoice)));
if(localStorage.getItem('bk_theme')==='malam') setTheme('malam');

/* live formatting for money inputs */
document.querySelectorAll('#txAmount,#accBalance,#budgetLimit,#goalTarget,#goalCurrent,#recurAmount,#trAmount').forEach(inp=>{
  inp.addEventListener('input', e=>{ const raw=parseNum(e.target.value); e.target.value = raw? raw.toLocaleString('id-ID'):''; });
});

/* ---------------------- SPLASH OUT ---------------------- */
setTimeout(()=>{ document.getElementById('splash').classList.add('hide'); }, 1400);
document.getElementById('txDate') && (document.getElementById('txDate').value = todayISO());
document.getElementById('tradeOpenDate') && (document.getElementById('tradeOpenDate').value = todayISO());
document.getElementById('recurNextDate') && (document.getElementById('recurNextDate').value = todayISO());
</script>
</body>
</html>
