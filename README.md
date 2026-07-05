<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Buku Kas — Arus Keuangan</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,500&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.4/chart.umd.min.js"></script>
<style>
/* ============================================================
   BUKU KAS — DESIGN TOKENS
   Tema: buku kas / ledger fisik yang dijadikan digital.
   ============================================================ */
:root{
  --bg-deep:#0E2A21;
  --bg-deep-2:#123626;
  --bg-deep-3:#0A2019;
  --paper:#FBF6EA;
  --paper-2:#F2ECDB;
  --paper-3:#EAE2C9;
  --line:#DED2AE;
  --line-soft:#E9E0C6;
  --ink:#1C2B22;
  --ink-soft:#5B6B5E;
  --ink-faint:#8B9A8C;
  --gold:#B8901F;
  --gold-soft:#E7CD86;
  --gold-bg:#FBF0D4;
  --rust:#AE4E2D;
  --rust-soft:#E4A484;
  --rust-bg:#FBE7DC;
  --sage:#5C7D61;
  --sage-bg:#E3EBE0;
  --white:#FFFFFF;
  --shadow-sm: 0 2px 8px rgba(20,40,30,0.08);
  --shadow-md: 0 8px 24px rgba(20,40,30,0.14);
  --shadow-lg: 0 20px 48px rgba(20,40,30,0.22);
  --radius-sm:8px;
  --radius-md:14px;
  --radius-lg:22px;
  --font-display:'Fraunces', serif;
  --font-body:'Manrope', sans-serif;
  --font-mono:'IBM Plex Mono', monospace;
  --sidebar-w: 264px;
}

[data-theme="malam"]{
  --bg-deep:#081A14;
  --bg-deep-2:#0C2119;
  --bg-deep-3:#05120D;
  --paper:#16241C;
  --paper-2:#1C2E23;
  --paper-3:#233826;
  --line:#33473A;
  --line-soft:#2A3D30;
  --ink:#EDE7D4;
  --ink-soft:#AEBBA9;
  --ink-faint:#71857A;
  --gold:#E7CD86;
  --gold-soft:#B8901F;
  --gold-bg:#2C2712;
  --rust:#E4A484;
  --rust-soft:#AE4E2D;
  --rust-bg:#2E1B12;
  --sage:#8FB491;
  --sage-bg:#16261A;
  --white:#0F1D16;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.25);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.35);
  --shadow-lg: 0 20px 48px rgba(0,0,0,0.5);
}

*{box-sizing:border-box; margin:0; padding:0;}
html,body{height:100%;}
body{
  font-family:var(--font-body);
  background:var(--paper-2);
  color:var(--ink);
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
  transition:background .3s ease, color .3s ease;
}
::selection{ background:var(--gold-soft); color:var(--bg-deep);}
a{color:inherit;}
button{font-family:inherit; cursor:pointer;}
input,select,textarea{font-family:inherit;}

::-webkit-scrollbar{width:10px; height:10px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:var(--line); border-radius:10px;}
::-webkit-scrollbar-thumb:hover{background:var(--gold-soft);}

/* ============================================================
   LAYOUT
   ============================================================ */
.app-shell{
  display:flex;
  min-height:100vh;
}

/* ---------- SIDEBAR: "tulang punggung buku" ---------- */
.sidebar{
  width:var(--sidebar-w);
  min-width:var(--sidebar-w);
  background:linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-deep-3) 100%);
  color:var(--gold-bg);
  display:flex;
  flex-direction:column;
  position:relative;
  z-index:20;
  box-shadow: 4px 0 24px rgba(0,0,0,0.18);
}
.sidebar::after{
  content:"";
  position:absolute; top:0; right:0; bottom:0; width:6px;
  background:repeating-linear-gradient(180deg, var(--gold) 0 10px, transparent 10px 20px);
  opacity:.55;
}
.brand{
  display:flex; align-items:center; gap:12px;
  padding:28px 24px 20px 24px;
}
.brand-mark{
  width:42px; height:42px; border-radius:10px;
  background:linear-gradient(135deg, var(--gold-soft), var(--gold));
  display:flex; align-items:center; justify-content:center;
  font-family:var(--font-display); font-weight:700; font-size:20px;
  color:var(--bg-deep-3);
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.25);
  flex-shrink:0;
}
.brand-text h1{
  font-family:var(--font-display); font-weight:600; font-size:19px; line-height:1.1;
  color:#F6EFDA;
}
.brand-text span{
  font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--gold-soft); opacity:.85;
}

.ledger-tabs{
  list-style:none;
  padding:8px 14px;
  display:flex; flex-direction:column; gap:2px;
  flex:1;
  overflow-y:auto;
}
.ledger-tabs .tab-group-label{
  font-size:10.5px; letter-spacing:.14em; text-transform:uppercase;
  color:rgba(231,205,134,0.55);
  padding:16px 12px 6px;
}
.ledger-tab{
  display:flex; align-items:center; gap:12px;
  padding:11px 14px;
  border-radius:10px;
  color:rgba(246,239,218,0.78);
  font-weight:600; font-size:14.5px;
  position:relative;
  border:1px dashed transparent;
  transition: all .18s ease;
  background:none;
  width:100%;
  text-align:left;
}
.ledger-tab .tab-ico{
  width:20px; text-align:center; font-size:16px; opacity:.9;
}
.ledger-tab:hover{
  background:rgba(255,255,255,0.05);
  color:#fff;
}
.ledger-tab.active{
  background:var(--paper);
  color:var(--bg-deep-3);
  box-shadow:var(--shadow-md);
}
.ledger-tab.active .tab-ico{ opacity:1; }
.ledger-tab.active::before{
  content:"";
  position:absolute; left:-14px; top:50%; transform:translateY(-50%);
  width:0; height:0;
  border-top:7px solid transparent;
  border-bottom:7px solid transparent;
  border-left:7px solid var(--paper);
}

.sidebar-foot{
  padding:16px 20px 22px;
  border-top:1px dashed rgba(231,205,134,0.25);
}
.mini-balance{
  font-family:var(--font-mono);
  font-size:12px;
  color:rgba(246,239,218,0.6);
  margin-bottom:6px;
}
.mini-balance strong{
  display:block;
  font-family:var(--font-display);
  font-size:20px;
  color:#F6EFDA;
  font-weight:600;
}

/* ---------- MAIN ---------- */
.main{
  flex:1;
  min-width:0;
  display:flex;
  flex-direction:column;
  height:100vh;
  overflow-y:auto;
}
.topbar{
  position:sticky; top:0; z-index:15;
  display:flex; align-items:center; justify-content:space-between;
  gap:16px;
  padding:22px 34px;
  background:linear-gradient(180deg, var(--paper-2) 70%, transparent);
  backdrop-filter:blur(6px);
}
.topbar h2{
  font-family:var(--font-display);
  font-size:26px; font-weight:600;
}
.topbar .sub{
  font-size:13px; color:var(--ink-soft); margin-top:2px;
}
.topbar-actions{ display:flex; align-items:center; gap:10px; }
.icon-btn{
  width:40px; height:40px; border-radius:50%;
  border:1px solid var(--line);
  background:var(--paper);
  display:flex; align-items:center; justify-content:center;
  font-size:16px;
  color:var(--ink);
  transition:.15s;
}
.icon-btn:hover{ background:var(--gold-bg); border-color:var(--gold-soft); transform:translateY(-1px); }
.menu-toggle{ display:none; }
.notif-dot{ position:absolute; top:6px; right:7px; width:8px; height:8px; border-radius:50%; background:var(--rust); border:1.5px solid var(--paper); }
.notif-panel{
  position:absolute; top:48px; right:0; width:320px; max-height:400px; overflow-y:auto;
  background:var(--paper); border:1px solid var(--line-soft); border-radius:var(--radius-md);
  box-shadow:var(--shadow-lg); padding:8px; display:none; z-index:50;
}
.notif-panel.open{ display:block; animation:popIn .18s ease; }
.notif-panel .notif-title{ font-family:var(--font-display); font-weight:600; font-size:14px; padding:10px 10px 6px; }
.notif-item{ display:flex; gap:10px; padding:10px; border-radius:10px; font-size:12.5px; }
.notif-item:hover{ background:var(--paper-3); }
.notif-item .ico{ font-size:16px; flex-shrink:0; }
.notif-item .txt strong{ display:block; font-size:12.5px; margin-bottom:2px; }
.notif-item .txt span{ color:var(--ink-soft); font-size:11.5px; }
.notif-empty{ padding:24px 10px; text-align:center; color:var(--ink-soft); font-size:12.5px; }
.month-nav{ display:flex; align-items:center; gap:10px; }
.month-nav button{ width:32px; height:32px; border-radius:9px; border:1px solid var(--line); background:var(--paper); }
.month-nav button:hover{ background:var(--gold-bg); }
.month-nav .lbl{ font-weight:700; font-family:var(--font-display); font-size:15px; min-width:150px; text-align:center; }
.kbd{ display:inline-block; padding:2px 7px; border-radius:6px; background:var(--paper-3); border:1px solid var(--line); font-family:var(--font-mono); font-size:11.5px; font-weight:700; }
.shortcut-row{ display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px dashed var(--line-soft); font-size:13px;}
.shortcut-row:last-child{ border-bottom:none; }
.quick-dates{ display:flex; gap:8px; margin-top:8px; }
.quick-dates button{ padding:6px 12px; border-radius:8px; border:1px solid var(--line); background:var(--paper); font-size:12px; font-weight:700; color:var(--ink-soft); }
.quick-dates button:hover{ background:var(--gold-bg); color:var(--ink); }

.page{ display:none; padding:0 34px 48px; animation:fadeUp .35s ease; }
.page.active{ display:block; }
@keyframes fadeUp{ from{opacity:0; transform:translateY(8px);} to{opacity:1; transform:translateY(0);} }

/* ============================================================
   COMPONENTS
   ============================================================ */

/* --- Buttons --- */
.btn{
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  padding:11px 18px;
  border-radius:11px;
  font-weight:700; font-size:14px;
  border:1px solid transparent;
  transition:.15s ease;
  white-space:nowrap;
}
.btn-primary{ background:var(--bg-deep); color:var(--gold-bg); }
.btn-primary:hover{ background:var(--bg-deep-2); transform:translateY(-1px); box-shadow:var(--shadow-sm); }
.btn-gold{ background:linear-gradient(135deg,var(--gold-soft),var(--gold)); color:var(--bg-deep-3); }
.btn-gold:hover{ filter:brightness(1.05); transform:translateY(-1px); }
.btn-ghost{ background:transparent; color:var(--ink); border:1px solid var(--line); }
.btn-ghost:hover{ background:var(--paper-3); }
.btn-danger{ background:var(--rust-bg); color:var(--rust); }
.btn-danger:hover{ background:var(--rust); color:#fff; }
.btn-sm{ padding:7px 12px; font-size:12.5px; border-radius:9px; }
.btn:disabled{ opacity:.5; cursor:not-allowed; }
.btn-block{ width:100%; }

/* --- Ledger Card: elemen SIGNATURE — kartu seperti kertas robek/struk --- */
.ledger-card{
  position:relative;
  background:var(--paper);
  border-radius:var(--radius-md) var(--radius-md) 0 0;
  padding:22px 22px 28px;
  box-shadow:var(--shadow-sm);
  border:1px solid var(--line-soft);
  border-bottom:none;
}
.ledger-card::after{
  content:"";
  position:absolute; left:0; right:0; bottom:-11px; height:12px;
  background:
    linear-gradient(135deg, transparent 50%, var(--paper) 50%) 0 0/14px 14px repeat-x,
    linear-gradient(45deg, transparent 50%, var(--paper) 50%) 0 0/14px 14px repeat-x;
  filter:drop-shadow(0 3px 2px rgba(20,40,30,0.06));
}
.ledger-card.no-tear{ border-radius:var(--radius-md); padding-bottom:22px; }
.ledger-card.no-tear::after{ display:none; }

.card-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:32px 20px; margin-bottom:38px;}
@media(max-width:1200px){ .card-grid{ grid-template-columns:repeat(2,1fr);} }
@media(max-width:640px){ .card-grid{ grid-template-columns:1fr;} }

.stat-card{ display:flex; flex-direction:column; gap:10px; }
.stat-top{ display:flex; align-items:center; justify-content:space-between; }
.stat-label{ font-size:12.5px; text-transform:uppercase; letter-spacing:.09em; color:var(--ink-soft); font-weight:700; }
.stat-ico{
  width:34px; height:34px; border-radius:9px; display:flex; align-items:center; justify-content:center; font-size:16px;
}
.stat-value{ font-family:var(--font-mono); font-weight:700; font-size:25px; letter-spacing:-.01em; }
.stat-foot{ font-size:12px; color:var(--ink-soft); display:flex; align-items:center; gap:6px; }
.trend-up{ color:var(--sage); font-weight:700; }
.trend-down{ color:var(--rust); font-weight:700; }

.stamp{
  position:absolute; top:14px; right:16px;
  font-family:var(--font-display); font-weight:700; font-size:10.5px;
  letter-spacing:.08em; text-transform:uppercase;
  padding:4px 10px; border-radius:20px;
  border:1.5px dashed currentColor;
  transform:rotate(4deg);
  opacity:.85;
}

/* --- Section headers --- */
.section-head{ display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; gap:12px; flex-wrap:wrap;}
.section-head h3{ font-family:var(--font-display); font-size:20px; font-weight:600; }
.section-head .desc{ font-size:12.5px; color:var(--ink-soft); margin-top:2px; }

.two-col{ display:grid; grid-template-columns:1.5fr 1fr; gap:22px; margin-bottom:38px; align-items:start; }
@media(max-width:1050px){ .two-col{ grid-template-columns:1fr; } }

.panel{
  background:var(--paper);
  border-radius:var(--radius-md);
  padding:22px;
  border:1px solid var(--line-soft);
  box-shadow:var(--shadow-sm);
}
.panel-title{ font-family:var(--font-display); font-weight:600; font-size:17px; margin-bottom:4px;}
.panel-sub{ font-size:12px; color:var(--ink-soft); margin-bottom:16px;}

.chart-wrap{ position:relative; height:260px; }
.chart-wrap.small{ height:200px; }

/* --- Category legend list --- */
.legend-list{ display:flex; flex-direction:column; gap:12px; margin-top:14px;}
.legend-row{ display:flex; align-items:center; gap:10px; font-size:13px;}
.legend-dot{ width:10px; height:10px; border-radius:50%; flex-shrink:0;}
.legend-row .lbl{ flex:1; color:var(--ink);}
.legend-row .pct{ font-family:var(--font-mono); color:var(--ink-soft); font-weight:600;}

/* --- Tables --- */
.table-wrap{ overflow-x:auto; }
table.data-table{ width:100%; border-collapse:collapse; font-size:13.5px; }
table.data-table thead th{
  text-align:left; font-size:11px; text-transform:uppercase; letter-spacing:.08em;
  color:var(--ink-soft); padding:10px 12px; border-bottom:2px solid var(--line);
  white-space:nowrap;
}
table.data-table tbody td{
  padding:13px 12px; border-bottom:1px dashed var(--line-soft); vertical-align:middle;
}
table.data-table tbody tr{ transition:.12s; }
table.data-table tbody tr:hover{ background:var(--paper-3); }
.amount-in{ color:var(--sage); font-family:var(--font-mono); font-weight:700; }
.amount-out{ color:var(--rust); font-family:var(--font-mono); font-weight:700; }
.amount-transfer{ color:var(--ink-soft); font-family:var(--font-mono); font-weight:700; }

.tx-type-badge{
  display:inline-flex; align-items:center; gap:6px;
  font-size:11.5px; font-weight:700; padding:4px 10px; border-radius:20px;
}
.badge-in{ background:var(--sage-bg); color:var(--sage); }
.badge-out{ background:var(--rust-bg); color:var(--rust); }
.badge-transfer{ background:var(--gold-bg); color:var(--gold); }

.cat-chip{
  display:inline-flex; align-items:center; gap:6px; font-size:12.5px;
  padding:4px 10px; border-radius:20px; background:var(--paper-3); font-weight:600;
}
.row-actions{ display:flex; gap:6px; }
.row-actions button{
  width:30px; height:30px; border-radius:8px; border:1px solid var(--line);
  background:var(--paper); font-size:13px; display:flex; align-items:center; justify-content:center;
}
.row-actions button:hover{ background:var(--gold-bg); }
.row-actions button.del:hover{ background:var(--rust); color:#fff; border-color:var(--rust); }

/* --- Toolbar / filter bar --- */
.toolbar{
  display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:18px;
}
.search-box{
  display:flex; align-items:center; gap:8px;
  background:var(--paper); border:1px solid var(--line); border-radius:11px;
  padding:9px 14px; min-width:220px; flex:1;
}
.search-box input{ border:none; background:none; outline:none; font-size:13.5px; width:100%; color:var(--ink);}
.filter-select, select.field, input.field, textarea.field{
  border:1px solid var(--line); background:var(--paper); border-radius:11px;
  padding:9px 12px; font-size:13.5px; color:var(--ink); outline:none;
}
.filter-select:focus, select.field:focus, input.field:focus, textarea.field:focus{ border-color:var(--gold-soft); box-shadow:0 0 0 3px var(--gold-bg); }

.pill-tabs{ display:flex; gap:6px; background:var(--paper-3); padding:4px; border-radius:12px; }
.pill-tab{
  padding:8px 14px; border-radius:9px; font-size:12.5px; font-weight:700; color:var(--ink-soft); background:none; border:none;
}
.pill-tab.active{ background:var(--paper); color:var(--ink); box-shadow:var(--shadow-sm); }

/* --- Empty state --- */
.empty-state{ text-align:center; padding:60px 20px; color:var(--ink-soft); }
.empty-state .ico{ font-size:38px; margin-bottom:14px; }
.empty-state h4{ font-family:var(--font-display); font-size:18px; color:var(--ink); margin-bottom:6px; }

/* --- Pagination --- */
.pagination{ display:flex; align-items:center; justify-content:space-between; margin-top:16px; font-size:12.5px; color:var(--ink-soft);}
.pagination .pg-btns{ display:flex; gap:6px; }
.pagination button{
  width:30px; height:30px; border-radius:8px; border:1px solid var(--line); background:var(--paper);
}
.pagination button.active{ background:var(--bg-deep); color:var(--gold-bg); border-color:var(--bg-deep); }
.pagination button:disabled{ opacity:.4; }

/* --- Account cards --- */
.acc-grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(250px,1fr)); gap:18px; margin-bottom:30px;}
.acc-card{
  border-radius:var(--radius-md); padding:20px; color:#fff; position:relative; overflow:hidden;
  min-height:150px; display:flex; flex-direction:column; justify-content:space-between;
  box-shadow:var(--shadow-md);
}
.acc-card::before{
  content:""; position:absolute; inset:0; opacity:.15;
  background-image:repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 22px);
}
.acc-card .acc-top{ display:flex; justify-content:space-between; align-items:flex-start; position:relative; z-index:1;}
.acc-card .acc-name{ font-weight:700; font-size:14.5px; }
.acc-card .acc-type{ font-size:11px; opacity:.8; text-transform:uppercase; letter-spacing:.08em; }
.acc-card .acc-balance{ font-family:var(--font-mono); font-size:24px; font-weight:700; position:relative; z-index:1;}
.acc-card .acc-ico{ font-size:22px; opacity:.9; }
.acc-card .acc-actions{ position:relative; z-index:1; display:flex; gap:6px; }
.acc-card .acc-actions button{
  background:rgba(255,255,255,0.18); border:none; color:#fff; width:28px; height:28px; border-radius:7px; font-size:12px;
}
.acc-card .acc-actions button:hover{ background:rgba(255,255,255,0.32); }
.acc-add-card{
  border:2px dashed var(--line); border-radius:var(--radius-md); min-height:150px;
  display:flex; align-items:center; justify-content:center; flex-direction:column; gap:8px;
  color:var(--ink-soft); font-weight:700; font-size:13.5px; background:transparent;
}
.acc-add-card:hover{ border-color:var(--gold-soft); color:var(--gold); background:var(--gold-bg); }

/* --- Budget bars --- */
.budget-item{ padding:16px 0; border-bottom:1px dashed var(--line-soft); }
.budget-item:last-child{ border-bottom:none; }
.budget-top{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; font-size:13.5px;}
.budget-top .cat{ display:flex; align-items:center; gap:8px; font-weight:700; }
.budget-top .val{ font-family:var(--font-mono); font-size:12.5px; color:var(--ink-soft); }
.progress-track{ height:10px; border-radius:20px; background:var(--paper-3); overflow:hidden; }
.progress-fill{ height:100%; border-radius:20px; transition:width .4s ease; }
.budget-meta{ display:flex; justify-content:space-between; font-size:11.5px; color:var(--ink-soft); margin-top:6px;}
.over-budget{ color:var(--rust); font-weight:700;}

/* --- Goals --- */
.goal-grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(270px,1fr)); gap:18px; }
.goal-card{ background:var(--paper); border-radius:var(--radius-md); padding:20px; border:1px solid var(--line-soft); box-shadow:var(--shadow-sm);}
.goal-head{ display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:14px;}
.goal-name{ font-family:var(--font-display); font-weight:600; font-size:16.5px; }
.goal-deadline{ font-size:11.5px; color:var(--ink-soft); }
.goal-ring-wrap{ display:flex; align-items:center; gap:16px; margin-bottom:14px; }
.goal-amounts{ font-size:12.5px; color:var(--ink-soft); }
.goal-amounts strong{ display:block; font-family:var(--font-mono); font-size:16px; color:var(--ink); }
.goal-actions{ display:flex; gap:8px; }

/* --- Modal --- */
.modal-overlay{
  position:fixed; inset:0; background:rgba(10,25,18,0.55); backdrop-filter:blur(2px);
  display:none; align-items:center; justify-content:center; z-index:100; padding:20px;
}
.modal-overlay.open{ display:flex; animation:fadeIn .2s ease; }
@keyframes fadeIn{ from{opacity:0;} to{opacity:1;} }
.modal-box{
  background:var(--paper); border-radius:var(--radius-lg); width:100%; max-width:520px;
  max-height:90vh; overflow-y:auto; box-shadow:var(--shadow-lg);
  animation:popIn .22s cubic-bezier(.2,.9,.3,1.2);
  border:1px solid var(--line-soft);
}
@keyframes popIn{ from{opacity:0; transform:translateY(14px) scale(.97);} to{opacity:1; transform:translateY(0) scale(1);} }
.modal-head{ display:flex; justify-content:space-between; align-items:center; padding:22px 24px 14px; border-bottom:1px dashed var(--line-soft);}
.modal-head h3{ font-family:var(--font-display); font-size:19px; font-weight:600; }
.modal-close{ width:32px; height:32px; border-radius:50%; border:none; background:var(--paper-3); font-size:15px; }
.modal-close:hover{ background:var(--rust-bg); color:var(--rust); }
.modal-body{ padding:20px 24px; }
.modal-foot{ display:flex; justify-content:flex-end; gap:10px; padding:16px 24px 22px; }

.form-group{ margin-bottom:16px; }
.form-group label{ display:block; font-size:12.5px; font-weight:700; margin-bottom:6px; color:var(--ink-soft); }
.form-row{ display:grid; grid-template-columns:1fr 1fr; gap:12px; }
.type-toggle{ display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:16px; }
.type-toggle button{
  padding:10px; border-radius:10px; border:1.5px solid var(--line); background:var(--paper); font-weight:700; font-size:13px;
}
.type-toggle button.sel-income.active{ background:var(--sage-bg); border-color:var(--sage); color:var(--sage); }
.type-toggle button.sel-expense.active{ background:var(--rust-bg); border-color:var(--rust); color:var(--rust); }
.type-toggle button.sel-transfer.active{ background:var(--gold-bg); border-color:var(--gold); color:var(--gold); }
.hint-text{ font-size:11.5px; color:var(--ink-faint); margin-top:5px; }
.error-text{ font-size:11.5px; color:var(--rust); margin-top:5px; display:none; }
.form-group.has-error .error-text{ display:block; }
.form-group.has-error input, .form-group.has-error select{ border-color:var(--rust); }

.color-swatches, .icon-swatches{ display:flex; flex-wrap:wrap; gap:8px; }
.swatch{ width:30px; height:30px; border-radius:9px; border:2px solid transparent; cursor:pointer; }
.swatch.sel{ border-color:var(--ink); transform:scale(1.08); }
.icon-swatch{
  width:36px; height:36px; border-radius:9px; border:1.5px solid var(--line); background:var(--paper);
  display:flex; align-items:center; justify-content:center; font-size:16px;
}
.icon-swatch.sel{ border-color:var(--gold); background:var(--gold-bg); }

/* --- Toasts --- */
.toast-stack{ position:fixed; bottom:22px; right:22px; z-index:200; display:flex; flex-direction:column; gap:10px; }
.toast{
  background:var(--bg-deep); color:#F6EFDA; padding:14px 18px; border-radius:12px; box-shadow:var(--shadow-lg);
  display:flex; align-items:center; gap:12px; min-width:260px; font-size:13.5px; font-weight:600;
  animation:slideIn .25s ease;
  border:1px solid rgba(231,205,134,0.25);
}
@keyframes slideIn{ from{opacity:0; transform:translateX(30px);} to{opacity:1; transform:translateX(0);} }
.toast.error{ background:#5A2A1B; }
.toast .toast-ico{ font-size:17px; }
.toast button.undo{ background:none; border:none; color:var(--gold-soft); font-weight:800; text-decoration:underline; margin-left:auto; font-size:12.5px; }

/* --- Recurring list --- */
.recur-item{ display:flex; align-items:center; gap:14px; padding:14px 0; border-bottom:1px dashed var(--line-soft); }
.recur-item:last-child{ border-bottom:none; }
.recur-ico{ width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:17px; flex-shrink:0;}
.recur-info{ flex:1; min-width:0; }
.recur-info .nm{ font-weight:700; font-size:13.5px; }
.recur-info .meta{ font-size:11.5px; color:var(--ink-soft); }
.switch{ position:relative; width:40px; height:22px; border-radius:20px; background:var(--line); flex-shrink:0; border:none; }
.switch::after{ content:""; position:absolute; top:2px; left:2px; width:18px; height:18px; border-radius:50%; background:#fff; transition:.2s; }
.switch.on{ background:var(--sage); }
.switch.on::after{ left:20px; }

/* --- Settings --- */
.settings-list{ display:flex; flex-direction:column; }
.settings-row{ display:flex; align-items:center; justify-content:space-between; padding:16px 0; border-bottom:1px dashed var(--line-soft); gap:16px;}
.settings-row:last-child{ border-bottom:none; }
.settings-row .info h4{ font-size:14px; font-weight:700; margin-bottom:3px; }
.settings-row .info p{ font-size:12px; color:var(--ink-soft); max-width:420px;}
.theme-toggle-group{ display:flex; gap:8px; background:var(--paper-3); padding:4px; border-radius:11px;}
.theme-toggle-group button{ padding:8px 14px; border-radius:8px; border:none; background:none; font-size:12.5px; font-weight:700; color:var(--ink-soft);}
.theme-toggle-group button.active{ background:var(--paper); color:var(--ink); box-shadow:var(--shadow-sm);}

/* --- Print area (report) --- */
.print-only{ display:none; }
@media print{
  .sidebar, .topbar, .toolbar, .no-print{ display:none !important; }
  .page{ display:block !important; padding:0; }
  body{ background:#fff; }
  .print-only{ display:block; }
}

/* --- Misc --- */
.kicker{ font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--gold); font-weight:800; margin-bottom:6px;}
.mono{ font-family:var(--font-mono); }
.text-muted{ color:var(--ink-soft); }
.flex-between{ display:flex; align-items:center; justify-content:space-between; }
.gap-8{ gap:8px; } .gap-12{ gap:12px; }
.mt-8{margin-top:8px;} .mt-16{margin-top:16px;} .mb-16{margin-bottom:16px;}
.hidden{ display:none !important; }
.spacer{ flex:1; }

@media(max-width:900px){
  .sidebar{ position:fixed; left:0; top:0; bottom:0; transform:translateX(-100%); transition:.25s ease; }
  .sidebar.open{ transform:translateX(0); }
  .menu-toggle{ display:flex; }
  .main{ width:100%; }
  .topbar{ padding:18px; }
  .page{ padding:0 18px 40px; }
  .form-row{ grid-template-columns:1fr; }
  .overlay-bg{ position:fixed; inset:0; background:rgba(0,0,0,.4); z-index:19; display:none;}
  .overlay-bg.show{ display:block; }
}
</style>
</head>
<body data-theme="siang">
<div class="overlay-bg" id="overlayBg"></div>
<div class="app-shell">

  <!-- ============================================================
       SIDEBAR
  ============================================================ -->
  <aside class="sidebar" id="sidebar">
    <div class="brand">
      <div class="brand-mark">₿</div>
      <div class="brand-text">
        <h1>Buku Kas</h1>
        <span>Arus Keuangan</span>
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

      <div class="tab-group-label">Analisa</div>
      <li><button class="ledger-tab" data-page="laporan"><span class="tab-ico">📊</span> Laporan</button></li>
      <li><button class="ledger-tab" data-page="kategori"><span class="tab-ico">🏷️</span> Kategori</button></li>
      <li><button class="ledger-tab" data-page="pengaturan"><span class="tab-ico">⚙️</span> Pengaturan</button></li>
    </ul>

    <div class="sidebar-foot">
      <div class="mini-balance">
        Total Saldo
        <strong id="sidebarBalance">Rp 0</strong>
      </div>
      <button class="btn btn-gold btn-block" id="quickAddBtn" style="margin-top:10px;">+ Catat Transaksi</button>
    </div>
  </aside>

  <!-- ============================================================
       MAIN
  ============================================================ -->
  <main class="main">
    <div class="topbar">
      <div style="display:flex; align-items:center; gap:12px;">
        <button class="icon-btn menu-toggle" id="menuToggle">☰</button>
        <div>
          <h2 id="pageTitle">Dasbor</h2>
          <div class="sub" id="pageSub">Ringkasan arus kas Anda hari ini</div>
        </div>
      </div>
      <div class="topbar-actions">
        <div style="position:relative;">
          <button class="icon-btn" id="notifBtn" title="Notifikasi">🔔<span id="notifDot" class="notif-dot hidden"></span></button>
          <div class="notif-panel" id="notifPanel"></div>
        </div>
        <button class="icon-btn" id="themeBtn" title="Ganti tema">🌙</button>
        <button class="icon-btn" id="exportBtn" title="Ekspor data">⬇️</button>
        <button class="icon-btn" id="helpBtn" title="Pintasan keyboard">⌨️</button>
        <button class="btn btn-primary" id="topAddBtn">+ Transaksi Baru</button>
      </div>
    </div>

    <!-- ===================== DASHBOARD ===================== -->
    <section class="page active" id="page-dashboard">
      <div class="card-grid" id="statCards"></div>

      <div class="two-col">
        <div class="panel">
          <div class="flex-between">
            <div>
              <div class="panel-title">Arus Kas 6 Bulan Terakhir</div>
              <div class="panel-sub">Perbandingan pemasukan vs pengeluaran per bulan</div>
            </div>
          </div>
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
          <div class="flex-between mb-16">
            <div class="panel-title" style="margin-bottom:0;">Transaksi Terbaru</div>
            <button class="btn btn-ghost btn-sm" data-goto="transaksi">Lihat semua</button>
          </div>
          <div class="table-wrap"><table class="data-table" id="recentTxTable">
            <thead><tr><th>Tanggal</th><th>Keterangan</th><th>Kategori</th><th>Akun</th><th style="text-align:right;">Jumlah</th></tr></thead>
            <tbody></tbody>
          </table></div>
        </div>
        <div class="panel">
          <div class="panel-title">Status Anggaran</div>
          <div class="panel-sub">5 kategori dengan penggunaan tertinggi</div>
          <div id="dashBudgetList"></div>
        </div>
      </div>
    </section>

    <!-- ===================== TRANSAKSI ===================== -->
    <section class="page" id="page-transaksi">
      <div class="toolbar">
        <div class="search-box">🔍<input type="text" id="txSearch" placeholder="Cari keterangan, kategori, atau akun..."></div>
        <select class="filter-select" id="filterType">
          <option value="all">Semua Tipe</option>
          <option value="income">Pemasukan</option>
          <option value="expense">Pengeluaran</option>
          <option value="transfer">Transfer</option>
        </select>
        <select class="filter-select" id="filterAccount"><option value="all">Semua Akun</option></select>
        <select class="filter-select" id="filterCategory"><option value="all">Semua Kategori</option></select>
        <select class="filter-select" id="filterRange">
          <option value="all">Sepanjang Waktu</option>
          <option value="thismonth" selected>Bulan Ini</option>
          <option value="lastmonth">Bulan Lalu</option>
          <option value="thisyear">Tahun Ini</option>
        </select>
        <select class="filter-select" id="sortBy">
          <option value="date_desc">Tanggal Terbaru</option>
          <option value="date_asc">Tanggal Terlama</option>
          <option value="amount_desc">Jumlah Terbesar</option>
          <option value="amount_asc">Jumlah Terkecil</option>
        </select>
        <button class="btn btn-ghost btn-sm" id="clearFilters">Bersihkan</button>
      </div>

      <div class="panel">
        <div class="table-wrap">
          <table class="data-table" id="txTable">
            <thead><tr>
              <th>Tanggal</th><th>Tipe</th><th>Keterangan</th><th>Kategori</th><th>Akun</th>
              <th style="text-align:right;">Jumlah</th><th></th>
            </tr></thead>
            <tbody></tbody>
          </table>
        </div>
        <div id="txEmpty" class="empty-state hidden">
          <div class="ico">🧾</div>
          <h4>Belum ada transaksi</h4>
          <p>Coba ubah filter, atau catat transaksi baru.</p>
        </div>
        <div class="pagination" id="txPagination"></div>
      </div>
    </section>

    <!-- ===================== AKUN ===================== -->
    <section class="page" id="page-akun">
      <div class="section-head">
        <div><h3>Akun Saya</h3><div class="desc">Kelola dompet, rekening bank, dan e-wallet Anda</div></div>
        <button class="btn btn-primary" id="addAccBtn">+ Tambah Akun</button>
      </div>
      <div class="acc-grid" id="accGrid"></div>

      <div class="section-head"><div><h3>Transfer Antar Akun</h3><div class="desc">Pindahkan saldo tanpa memengaruhi laporan pemasukan/pengeluaran</div></div></div>
      <div class="panel" style="max-width:560px;">
        <div class="form-row">
          <div class="form-group"><label>Dari Akun</label><select class="field" id="trFrom"></select></div>
          <div class="form-group"><label>Ke Akun</label><select class="field" id="trTo"></select></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>Jumlah (Rp)</label><input class="field" type="text" id="trAmount" placeholder="0"></div>
          <div class="form-group"><label>Tanggal</label><input class="field" type="date" id="trDate"></div>
        </div>
        <div class="form-group"><label>Catatan</label><input class="field" type="text" id="trNote" placeholder="Opsional"></div>
        <button class="btn btn-gold btn-block" id="doTransferBtn">Proses Transfer</button>
      </div>
    </section>

    <!-- ===================== ANGGARAN ===================== -->
    <section class="page" id="page-anggaran">
      <div class="section-head">
        <div><h3>Anggaran Bulanan</h3><div class="desc" id="budgetPeriodLabel">Periode berjalan</div></div>
        <div style="display:flex; align-items:center; gap:14px;">
          <div class="month-nav">
            <button id="budgetPrevMonth">‹</button>
            <span class="lbl" id="budgetMonthLbl">-</span>
            <button id="budgetNextMonth">›</button>
          </div>
          <button class="btn btn-primary" id="addBudgetBtn">+ Buat Anggaran</button>
        </div>
      </div>
      <div class="panel"><div id="budgetList"></div>
        <div id="budgetEmpty" class="empty-state hidden"><div class="ico">🎯</div><h4>Belum ada anggaran</h4><p>Buat anggaran untuk mengontrol pengeluaran per kategori.</p></div>
      </div>
    </section>

    <!-- ===================== TARGET TABUNGAN ===================== -->
    <section class="page" id="page-target">
      <div class="section-head">
        <div><h3>Target Tabungan</h3><div class="desc">Wujudkan rencana keuangan Anda selangkah demi selangkah</div></div>
        <button class="btn btn-primary" id="addGoalBtn">+ Buat Target</button>
      </div>
      <div class="goal-grid" id="goalGrid"></div>
    </section>

    <!-- ===================== TRANSAKSI BERULANG ===================== -->
    <section class="page" id="page-berulang">
      <div class="section-head">
        <div><h3>Transaksi Berulang</h3><div class="desc">Otomatiskan pencatatan pemasukan &amp; pengeluaran rutin</div></div>
        <button class="btn btn-primary" id="addRecurBtn">+ Tambah Jadwal</button>
      </div>
      <div class="panel"><div id="recurList"></div></div>
    </section>

    <!-- ===================== LAPORAN ===================== -->
    <section class="page" id="page-laporan">
      <div class="section-head">
        <div><h3>Laporan Keuangan</h3><div class="desc">Analisa performa keuangan bulanan &amp; tahunan</div></div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-ghost" id="printReportBtn">🖨️ Cetak</button>
          <button class="btn btn-primary" id="exportCsvBtn">⬇️ Ekspor CSV</button>
        </div>
      </div>

      <div class="card-grid" id="reportStats" style="grid-template-columns:repeat(3,1fr);"></div>

      <div class="two-col">
        <div class="panel">
          <div class="panel-title">Tren Tahunan</div>
          <div class="panel-sub" id="yearLabel">2026</div>
          <div class="chart-wrap"><canvas id="yearlyChart"></canvas></div>
        </div>
        <div class="panel">
          <div class="panel-title">Komposisi Pemasukan vs Pengeluaran</div>
          <div class="chart-wrap small"><canvas id="donutChart"></canvas></div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-title mb-16">Rincian Bulanan</div>
        <div class="table-wrap">
          <table class="data-table" id="monthlyTable">
            <thead><tr><th>Bulan</th><th style="text-align:right;">Pemasukan</th><th style="text-align:right;">Pengeluaran</th><th style="text-align:right;">Arus Bersih</th><th style="text-align:right;">Tabungan (%)</th></tr></thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ===================== KATEGORI ===================== -->
    <section class="page" id="page-kategori">
      <div class="section-head">
        <div><h3>Kategori</h3><div class="desc">Atur label pemasukan &amp; pengeluaran sesuai kebutuhan Anda</div></div>
        <button class="btn btn-primary" id="addCatBtn">+ Tambah Kategori</button>
      </div>
      <div class="two-col" style="grid-template-columns:1fr 1fr;">
        <div class="panel">
          <div class="panel-title" style="color:var(--sage);">↑ Kategori Pemasukan</div>
          <div id="catListIncome" class="mt-16"></div>
        </div>
        <div class="panel">
          <div class="panel-title" style="color:var(--rust);">↓ Kategori Pengeluaran</div>
          <div id="catListExpense" class="mt-16"></div>
        </div>
      </div>
    </section>

    <!-- ===================== PENGATURAN ===================== -->
    <section class="page" id="page-pengaturan">
      <div class="section-head"><div><h3>Pengaturan</h3><div class="desc">Preferensi tampilan &amp; pengelolaan data</div></div></div>
      <div class="panel" style="max-width:640px;">
        <div class="settings-list">
          <div class="settings-row">
            <div class="info"><h4>Tema Tampilan</h4><p>Pilih tampilan terang (siang) atau gelap (malam)</p></div>
            <div class="theme-toggle-group">
              <button data-theme-choice="siang" class="active">☀️ Siang</button>
              <button data-theme-choice="malam">🌙 Malam</button>
            </div>
          </div>
          <div class="settings-row">
            <div class="info"><h4>Mata Uang</h4><p>Format tampilan nominal transaksi</p></div>
            <select class="field" id="currencySelect">
              <option value="IDR" selected>Rupiah (Rp)</option>
              <option value="USD">US Dollar ($)</option>
            </select>
          </div>
          <div class="settings-row">
            <div class="info"><h4>Ekspor Data</h4><p>Unduh seluruh data sebagai berkas JSON</p></div>
            <button class="btn btn-ghost" id="exportJsonBtn">Unduh JSON</button>
          </div>
          <div class="settings-row">
            <div class="info"><h4>Impor Data</h4><p>Pulihkan data dari berkas cadangan JSON</p></div>
            <label class="btn btn-ghost" style="cursor:pointer;">Pilih Berkas<input type="file" id="importJsonInput" accept=".json" style="display:none;"></label>
          </div>
          <div class="settings-row">
            <div class="info"><h4>Muat Data Contoh</h4><p>Isi ulang aplikasi dengan data ilustrasi</p></div>
            <button class="btn btn-ghost" id="seedDataBtn">Muat Contoh</button>
          </div>
          <div class="settings-row">
            <div class="info"><h4>Hapus Semua Data</h4><p>Tindakan ini akan mengosongkan seluruh catatan Anda</p></div>
            <button class="btn btn-danger" id="resetDataBtn">Hapus Semua</button>
          </div>
        </div>
      </div>
      <div class="panel mt-16" style="max-width:640px;">
        <div class="panel-title">Tentang</div>
        <p class="text-muted" style="font-size:13px; line-height:1.7;">
          Buku Kas adalah aplikasi pencatat arus keuangan pribadi bertema buku kas klasik.
          Seluruh data disimpan sementara di memori peramban selama sesi berjalan — gunakan fitur
          ekspor untuk menyimpan cadangan data Anda secara permanen.
        </p>
      </div>
    </section>

  </main>
</div>

<!-- ============================================================
     MODAL: TRANSAKSI
============================================================ -->
<div class="modal-overlay" id="modalTx">
  <div class="modal-box">
    <div class="modal-head"><h3 id="txModalTitle">Transaksi Baru</h3><button class="modal-close" data-close="modalTx">✕</button></div>
    <div class="modal-body">
      <div class="type-toggle" id="txTypeToggle">
        <button type="button" class="sel-income" data-val="income">↑ Pemasukan</button>
        <button type="button" class="sel-expense active" data-val="expense">↓ Pengeluaran</button>
        <button type="button" class="sel-transfer" data-val="transfer">⇄ Transfer</button>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Jumlah (Rp)</label><input class="field" type="text" id="txAmount" placeholder="0" inputmode="numeric"><div class="error-text">Masukkan jumlah yang valid</div></div>
        <div class="form-group"><label>Tanggal</label><input class="field" type="date" id="txDate"></div>
      </div>
      <div class="form-group" id="txAccGroupSingle"><label>Akun</label><select class="field" id="txAccount"></select></div>
      <div class="form-row hidden" id="txAccGroupTransfer">
        <div class="form-group"><label>Dari Akun</label><select class="field" id="txAccountFrom"></select></div>
        <div class="form-group"><label>Ke Akun</label><select class="field" id="txAccountTo"></select></div>
      </div>
      <div class="form-group" id="txCatGroup"><label>Kategori</label><select class="field" id="txCategory"></select></div>
      <div class="form-group"><label>Keterangan</label><input class="field" type="text" id="txNote" placeholder="mis. Makan siang di kantor"></div>
      <div class="form-group"><label>Tag (pisahkan dengan koma)</label><input class="field" type="text" id="txTags" placeholder="mis. penting, kantor"></div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" data-close="modalTx">Batal</button>
      <button class="btn btn-primary" id="saveTxBtn">Simpan Transaksi</button>
    </div>
  </div>
</div>

<!-- MODAL: AKUN -->
<div class="modal-overlay" id="modalAcc">
  <div class="modal-box">
    <div class="modal-head"><h3 id="accModalTitle">Tambah Akun</h3><button class="modal-close" data-close="modalAcc">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Nama Akun</label><input class="field" type="text" id="accName" placeholder="mis. Bank BCA"></div>
      <div class="form-group"><label>Jenis Akun</label><select class="field" id="accType">
        <option value="cash">Tunai</option><option value="bank">Rekening Bank</option><option value="ewallet">E-Wallet</option><option value="other">Lainnya</option>
      </select></div>
      <div class="form-group"><label>Saldo Awal (Rp)</label><input class="field" type="text" id="accBalance" placeholder="0"></div>
      <div class="form-group"><label>Warna</label><div class="color-swatches" id="accColorSwatches"></div></div>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" data-close="modalAcc">Batal</button><button class="btn btn-primary" id="saveAccBtn">Simpan Akun</button></div>
  </div>
</div>

<!-- MODAL: KATEGORI -->
<div class="modal-overlay" id="modalCat">
  <div class="modal-box">
    <div class="modal-head"><h3>Tambah Kategori</h3><button class="modal-close" data-close="modalCat">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Tipe</label><select class="field" id="catType"><option value="expense">Pengeluaran</option><option value="income">Pemasukan</option></select></div>
      <div class="form-group"><label>Nama Kategori</label><input class="field" type="text" id="catName" placeholder="mis. Langganan Streaming"></div>
      <div class="form-group"><label>Ikon</label><div class="icon-swatches" id="catIconSwatches"></div></div>
      <div class="form-group"><label>Warna</label><div class="color-swatches" id="catColorSwatches"></div></div>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" data-close="modalCat">Batal</button><button class="btn btn-primary" id="saveCatBtn">Simpan Kategori</button></div>
  </div>
</div>

<!-- MODAL: ANGGARAN -->
<div class="modal-overlay" id="modalBudget">
  <div class="modal-box">
    <div class="modal-head"><h3>Buat Anggaran</h3><button class="modal-close" data-close="modalBudget">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Kategori Pengeluaran</label><select class="field" id="budgetCategory"></select></div>
      <div class="form-group"><label>Batas Anggaran Bulanan (Rp)</label><input class="field" type="text" id="budgetLimit" placeholder="0"></div>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" data-close="modalBudget">Batal</button><button class="btn btn-primary" id="saveBudgetBtn">Simpan Anggaran</button></div>
  </div>
</div>

<!-- MODAL: TARGET TABUNGAN -->
<div class="modal-overlay" id="modalGoal">
  <div class="modal-box">
    <div class="modal-head"><h3 id="goalModalTitle">Buat Target Tabungan</h3><button class="modal-close" data-close="modalGoal">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Nama Target</label><input class="field" type="text" id="goalName" placeholder="mis. Liburan ke Bali"></div>
      <div class="form-row">
        <div class="form-group"><label>Target Dana (Rp)</label><input class="field" type="text" id="goalTarget" placeholder="0"></div>
        <div class="form-group"><label>Dana Terkumpul (Rp)</label><input class="field" type="text" id="goalCurrent" placeholder="0"></div>
      </div>
      <div class="form-group"><label>Tenggat Waktu</label><input class="field" type="date" id="goalDeadline"></div>
      <div class="form-group"><label>Warna</label><div class="color-swatches" id="goalColorSwatches"></div></div>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" data-close="modalGoal">Batal</button><button class="btn btn-primary" id="saveGoalBtn">Simpan Target</button></div>
  </div>
</div>

<!-- MODAL: TAMBAH DANA TARGET -->
<div class="modal-overlay" id="modalGoalAdd">
  <div class="modal-box">
    <div class="modal-head"><h3>Tambah Dana</h3><button class="modal-close" data-close="modalGoalAdd">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label>Jumlah Dana (Rp)</label><input class="field" type="text" id="goalAddAmount" placeholder="0"></div>
      <div class="form-group"><label>Ambil dari Akun</label><select class="field" id="goalAddAccount"></select></div>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" data-close="modalGoalAdd">Batal</button><button class="btn btn-primary" id="saveGoalAddBtn">Tambahkan</button></div>
  </div>
</div>

<!-- MODAL: TRANSAKSI BERULANG -->
<div class="modal-overlay" id="modalRecur">
  <div class="modal-box">
    <div class="modal-head"><h3>Tambah Transaksi Berulang</h3><button class="modal-close" data-close="modalRecur">✕</button></div>
    <div class="modal-body">
      <div class="type-toggle" id="recurTypeToggle">
        <button type="button" class="sel-income" data-val="income">↑ Pemasukan</button>
        <button type="button" class="sel-expense active" data-val="expense">↓ Pengeluaran</button>
      </div>
      <div class="form-group"><label>Nama Jadwal</label><input class="field" type="text" id="recurName" placeholder="mis. Tagihan Listrik"></div>
      <div class="form-row">
        <div class="form-group"><label>Jumlah (Rp)</label><input class="field" type="text" id="recurAmount" placeholder="0"></div>
        <div class="form-group"><label>Frekuensi</label><select class="field" id="recurFreq">
          <option value="daily">Harian</option><option value="weekly">Mingguan</option><option value="monthly" selected>Bulanan</option><option value="yearly">Tahunan</option>
        </select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Akun</label><select class="field" id="recurAccount"></select></div>
        <div class="form-group"><label>Kategori</label><select class="field" id="recurCategory"></select></div>
      </div>
      <div class="form-group"><label>Tanggal Berikutnya</label><input class="field" type="date" id="recurNextDate"></div>
    </div>
    <div class="modal-foot"><button class="btn btn-ghost" data-close="modalRecur">Batal</button><button class="btn btn-primary" id="saveRecurBtn">Simpan Jadwal</button></div>
  </div>
</div>

<!-- MODAL: PINTASAN KEYBOARD -->
<div class="modal-overlay" id="modalHelp">
  <div class="modal-box" style="max-width:420px;">
    <div class="modal-head"><h3>Pintasan Keyboard</h3><button class="modal-close" data-close="modalHelp">✕</button></div>
    <div class="modal-body">
      <div class="shortcut-row"><span>Catat transaksi baru</span><span class="kbd">N</span></div>
      <div class="shortcut-row"><span>Fokus pencarian transaksi</span><span class="kbd">/</span></div>
      <div class="shortcut-row"><span>Ke halaman Dasbor</span><span class="kbd">G</span> + <span class="kbd">D</span></div>
      <div class="shortcut-row"><span>Ke halaman Transaksi</span><span class="kbd">G</span> + <span class="kbd">T</span></div>
      <div class="shortcut-row"><span>Tutup jendela dialog</span><span class="kbd">Esc</span></div>
    </div>
    <div class="modal-foot"><button class="btn btn-primary" data-close="modalHelp">Mengerti</button></div>
  </div>
</div>

<!-- MODAL: KONFIRMASI HAPUS -->
<div class="modal-overlay" id="modalConfirm">
  <div class="modal-box" style="max-width:400px;">
    <div class="modal-head"><h3>Konfirmasi</h3><button class="modal-close" data-close="modalConfirm">✕</button></div>
    <div class="modal-body"><p id="confirmText" style="font-size:14px; line-height:1.6;">Apakah Anda yakin?</p></div>
    <div class="modal-foot"><button class="btn btn-ghost" data-close="modalConfirm">Batal</button><button class="btn btn-danger" id="confirmActionBtn">Ya, Hapus</button></div>
  </div>
</div>

<div class="toast-stack" id="toastStack"></div>

<script>
/* ================================================================
   BUKU KAS — APPLICATION SCRIPT
   Seluruh data disimpan in-memory (tidak menggunakan localStorage)
   agar konsisten & aman ketika dijalankan sebagai artifact.
   ================================================================ */

/* ---------------------- UTILITIES ---------------------- */
const uid = () => 'id-' + Math.random().toString(36).slice(2,10) + Date.now().toString(36);
const todayISO = () => new Date().toISOString().slice(0,10);
const fmtRupiah = (n) => {
  const num = Math.round(Number(n) || 0);
  const neg = num < 0;
  const s = Math.abs(num).toLocaleString('id-ID');
  return (neg? '-':'') + 'Rp' + s;
};
const parseNum = (str) => {
  if (typeof str === 'number') return str;
  if (!str) return 0;
  return Number(String(str).replace(/[^0-9-]/g,'')) || 0;
};
const fmtDate = (iso) => {
  const d = new Date(iso+'T00:00:00');
  return d.toLocaleDateString('id-ID', {day:'2-digit', month:'short', year:'numeric'});
};
const monthLabel = (ym) => {
  const [y,m] = ym.split('-');
  const d = new Date(Number(y), Number(m)-1, 1);
  return d.toLocaleDateString('id-ID', {month:'long', year:'numeric'});
};
const monthShort = (ym) => {
  const [y,m] = ym.split('-');
  const d = new Date(Number(y), Number(m)-1, 1);
  return d.toLocaleDateString('id-ID', {month:'short'});
};
const ymOf = (iso) => iso.slice(0,7);
const clamp = (n,a,b) => Math.max(a, Math.min(b,n));
function debounce(fn, ms){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms); }; }

/* ---------------------- STATE ---------------------- */
const COLORS = ['#5C7D61','#B8901F','#AE4E2D','#7C6C9B','#3D7A8A','#C46B8F','#8A9A3D','#4E6E8E'];
const ICONS = ['💰','🍔','🚗','🛍️','💡','🎬','🏥','📚','🏠','🎁','📶','🐾','✈️','⚽','☕','📦','💊','🧾','🎓','🚌'];

let state = {
  theme: 'siang',
  accounts: [],
  categories: { income: [], expense: [] },
  transactions: [],
  budgets: [],
  goals: [],
  recurring: [],
  ui: {
    txFilters: { search:'', type:'all', account:'all', category:'all', range:'thismonth', sort:'date_desc', page:1 },
    pageSize: 8,
    selectedTxType: 'expense',
    editingTxId: null,
    editingAccId: null,
    editingGoalId: null,
    editingGoalAddId: null,
    accColor: COLORS[0],
    catColor: COLORS[0],
    catIcon: ICONS[0],
    goalColor: COLORS[0],
    recurType: 'expense',
    confirmCallback: null,
  }
};

let charts = {};

/* ---------------------- SEED DATA ---------------------- */
function seedData(){
  state.accounts = [
    { id: uid(), name:'Kas Tunai', type:'cash', initialBalance: 850000, color: COLORS[0] },
    { id: uid(), name:'Bank BCA', type:'bank', initialBalance: 12500000, color: COLORS[4] },
    { id: uid(), name:'GoPay', type:'ewallet', initialBalance: 320000, color: COLORS[1] },
  ];
  const [kas, bca, gopay] = state.accounts;

  state.categories = {
    income: [
      { id: uid(), name:'Gaji', icon:'💰', color: COLORS[0] },
      { id: uid(), name:'Bonus', icon:'🎁', color: COLORS[1] },
      { id: uid(), name:'Investasi', icon:'📈', color: COLORS[4] },
      { id: uid(), name:'Penjualan', icon:'🛒', color: COLORS[6] },
      { id: uid(), name:'Lainnya', icon:'📦', color: COLORS[7] },
    ],
    expense: [
      { id: uid(), name:'Makanan & Minuman', icon:'🍔', color: COLORS[2] },
      { id: uid(), name:'Transportasi', icon:'🚗', color: COLORS[4] },
      { id: uid(), name:'Belanja', icon:'🛍️', color: COLORS[5] },
      { id: uid(), name:'Tagihan & Utilitas', icon:'💡', color: COLORS[1] },
      { id: uid(), name:'Hiburan', icon:'🎬', color: COLORS[3] },
      { id: uid(), name:'Kesehatan', icon:'🏥', color: COLORS[2] },
      { id: uid(), name:'Pendidikan', icon:'📚', color: COLORS[6] },
      { id: uid(), name:'Cicilan/Utang', icon:'🧾', color: COLORS[7] },
    ]
  };
  const ic = state.categories.income, ec = state.categories.expense;

  const tx = [];
  const now = new Date();
  function addTx(daysAgo, type, amount, catId, accId, note, toAccId){
    const d = new Date(now); d.setDate(d.getDate()-daysAgo);
    tx.push({ id: uid(), type, amount, date: d.toISOString().slice(0,10), categoryId: catId||null, accountId: accId, toAccountId: toAccId||null, note, tags:[] });
  }
  // 5 bulan histori
  for(let m=5; m>=0; m--){
    const base = m*30;
    addTx(base+2, 'income', 8500000, ic[0].id, bca.id, 'Gaji bulanan');
    addTx(base+5, 'expense', 1200000+Math.random()*300000|0, ec[0].id, kas.id, 'Belanja bulanan & makan');
    addTx(base+7, 'expense', 450000, ec[3].id, bca.id, 'Listrik & internet');
    addTx(base+9, 'expense', 300000+Math.random()*150000|0, ec[1].id, gopay.id, 'Bensin & ojek online');
    addTx(base+11, 'expense', 250000, ec[4].id, gopay.id, 'Nonton & langganan streaming');
    addTx(base+14, 'expense', 600000+Math.random()*400000|0, ec[2].id, bca.id, 'Belanja kebutuhan');
    addTx(base+18, 'income', 500000+Math.random()*700000|0, ic[2].id, bca.id, 'Dividen investasi');
    addTx(base+21, 'expense', 200000, ec[5].id, kas.id, 'Obat & vitamin');
    addTx(base+25, 'expense', 350000, ec[6].id, bca.id, 'Buku & kursus online');
  }
  addTx(1,'expense', 75000, ec[0].id, kas.id, 'Makan siang tim');
  addTx(3,'income', 1500000, ic[3].id, bca.id, 'Jual barang preloved');
  addTx(0,'expense', 45000, ec[0].id, gopay.id, 'Kopi pagi');
  state.transactions = tx;

  state.budgets = [
    { id: uid(), categoryId: ec[0].id, limit: 1500000 },
    { id: uid(), categoryId: ec[1].id, limit: 500000 },
    { id: uid(), categoryId: ec[2].id, limit: 1000000 },
    { id: uid(), categoryId: ec[3].id, limit: 500000 },
    { id: uid(), categoryId: ec[4].id, limit: 300000 },
  ];

  state.goals = [
    { id: uid(), name:'Dana Darurat', target: 30000000, current: 12500000, deadline: '2026-12-31', color: COLORS[0] },
    { id: uid(), name:'Liburan ke Bali', target: 8000000, current: 3200000, deadline: '2026-10-01', color: COLORS[4] },
    { id: uid(), name:'Laptop Baru', target: 15000000, current: 4750000, deadline: '2027-02-15', color: COLORS[1] },
  ];

  state.recurring = [
    { id: uid(), name:'Gaji Bulanan', type:'income', amount:8500000, accountId: bca.id, categoryId: ic[0].id, frequency:'monthly', nextDate: addDaysISO(todayISO(), 20), active:true },
    { id: uid(), name:'Tagihan Listrik', type:'expense', amount:450000, accountId: bca.id, categoryId: ec[3].id, frequency:'monthly', nextDate: addDaysISO(todayISO(), 12), active:true },
    { id: uid(), name:'Langganan Streaming', type:'expense', amount:120000, accountId: gopay.id, categoryId: ec[4].id, frequency:'monthly', nextDate: addDaysISO(todayISO(), 6), active:true },
    { id: uid(), name:'Iuran Internet', type:'expense', amount:350000, accountId: bca.id, categoryId: ec[3].id, frequency:'monthly', nextDate: addDaysISO(todayISO(), 15), active:false },
  ];
}
function addDaysISO(iso, days){ const d=new Date(iso+'T00:00:00'); d.setDate(d.getDate()+days); return d.toISOString().slice(0,10); }

/* ---------------------- DERIVED / COMPUTED ---------------------- */
function accountBalance(accId){
  const acc = state.accounts.find(a=>a.id===accId);
  if(!acc) return 0;
  let bal = acc.initialBalance;
  for(const t of state.transactions){
    if(t.type==='income' && t.accountId===accId) bal += t.amount;
    else if(t.type==='expense' && t.accountId===accId) bal -= t.amount;
    else if(t.type==='transfer'){
      if(t.accountId===accId) bal -= t.amount;
      if(t.toAccountId===accId) bal += t.amount;
    }
  }
  return bal;
}
function totalBalance(){ return state.accounts.reduce((s,a)=>s+accountBalance(a.id),0); }

function findCategory(id){
  return state.categories.income.find(c=>c.id===id) || state.categories.expense.find(c=>c.id===id);
}
function findAccount(id){ return state.accounts.find(a=>a.id===id); }

function txInRange(t, range){
  const now = new Date();
  const d = new Date(t.date+'T00:00:00');
  if(range==='thismonth') return d.getFullYear()===now.getFullYear() && d.getMonth()===now.getMonth();
  if(range==='lastmonth'){
    const lm = new Date(now.getFullYear(), now.getMonth()-1, 1);
    return d.getFullYear()===lm.getFullYear() && d.getMonth()===lm.getMonth();
  }
  if(range==='thisyear') return d.getFullYear()===now.getFullYear();
  return true;
}
function monthTotals(ym){
  let income=0, expense=0;
  for(const t of state.transactions){
    if(ymOf(t.date)!==ym) continue;
    if(t.type==='income') income += t.amount;
    if(t.type==='expense') expense += t.amount;
  }
  return {income, expense, net: income-expense};
}
function last6Months(){
  const arr = [];
  const now = new Date();
  for(let i=5;i>=0;i--){
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
    arr.push(d.toISOString().slice(0,7));
  }
  return arr;
}
function currentMonthYm(){ return todayISO().slice(0,7); }

/* ---------------------- TOASTS ---------------------- */
function toast(msg, opts={}){
  const stack = document.getElementById('toastStack');
  const el = document.createElement('div');
  el.className = 'toast' + (opts.error? ' error':'');
  el.innerHTML = `<span class="toast-ico">${opts.error?'⚠️':'✅'}</span><span>${msg}</span>`;
  if(opts.undo){
    const btn = document.createElement('button');
    btn.className='undo'; btn.textContent='URUNGKAN';
    btn.onclick = ()=>{ opts.undo(); el.remove(); };
    el.appendChild(btn);
  }
  stack.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='.3s'; setTimeout(()=>el.remove(),300); }, opts.duration||4200);
}

/* ---------------------- NAVIGATION ---------------------- */
const PAGE_META = {
  dashboard:{title:'Dasbor', sub:'Ringkasan arus kas Anda hari ini'},
  transaksi:{title:'Transaksi', sub:'Riwayat pemasukan, pengeluaran & transfer'},
  akun:{title:'Akun', sub:'Kelola dompet, rekening, dan e-wallet'},
  anggaran:{title:'Anggaran', sub:'Kontrol pengeluaran per kategori tiap bulan'},
  target:{title:'Target Tabungan', sub:'Pantau progres rencana keuangan Anda'},
  berulang:{title:'Transaksi Berulang', sub:'Jadwal otomatis pemasukan & pengeluaran'},
  laporan:{title:'Laporan', sub:'Analisa performa keuangan bulanan & tahunan'},
  kategori:{title:'Kategori', sub:'Atur label transaksi Anda'},
  pengaturan:{title:'Pengaturan', sub:'Preferensi tampilan & data'},
};
function goPage(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.ledger-tab').forEach(t=>t.classList.toggle('active', t.dataset.page===page));
  document.getElementById('pageTitle').textContent = PAGE_META[page].title;
  document.getElementById('pageSub').textContent = PAGE_META[page].sub;
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlayBg').classList.remove('show');
  renderPage(page);
  window.scrollTo(0,0);
}
function renderPage(page){
  if(page==='dashboard') renderDashboard();
  if(page==='transaksi') renderTransaksi();
  if(page==='akun') renderAkun();
  if(page==='anggaran') renderAnggaran();
  if(page==='target') renderTarget();
  if(page==='berulang') renderBerulang();
  if(page==='laporan') renderLaporan();
  if(page==='kategori') renderKategori();
}

/* ---------------------- MODALS ---------------------- */
function openModal(id){ document.getElementById(id).classList.add('open'); }
function closeModal(id){ document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('[data-close]').forEach(btn=>{
  btn.addEventListener('click', ()=>closeModal(btn.dataset.close));
});
document.querySelectorAll('.modal-overlay').forEach(ov=>{
  ov.addEventListener('click', (e)=>{ if(e.target===ov) ov.classList.remove('open'); });
});
function confirmAction(text, cb){
  document.getElementById('confirmText').textContent = text;
  state.ui.confirmCallback = cb;
  openModal('modalConfirm');
}
document.getElementById('confirmActionBtn').addEventListener('click', ()=>{
  if(state.ui.confirmCallback) state.ui.confirmCallback();
  closeModal('modalConfirm');
});

/* ================================================================
   RENDER: DASHBOARD
   ================================================================ */
function renderDashboard(){
  document.getElementById('sidebarBalance').textContent = fmtRupiah(totalBalance());

  const ym = currentMonthYm();
  const mt = monthTotals(ym);
  const prevD = new Date(); prevD.setMonth(prevD.getMonth()-1);
  const prevYm = prevD.toISOString().slice(0,7);
  const pt = monthTotals(prevYm);
  const incomeDelta = pt.income? ((mt.income-pt.income)/pt.income*100) : 0;
  const expenseDelta = pt.expense? ((mt.expense-pt.expense)/pt.expense*100) : 0;
  const savingsRate = mt.income? (mt.net/mt.income*100) : 0;

  const cards = [
    { label:'Total Saldo', value: totalBalance(), ico:'👛', bg:'var(--gold-bg)', color:'var(--gold)', foot:`${state.accounts.length} akun aktif` },
    { label:'Pemasukan Bulan Ini', value: mt.income, ico:'↑', bg:'var(--sage-bg)', color:'var(--sage)', foot: trendFoot(incomeDelta) },
    { label:'Pengeluaran Bulan Ini', value: mt.expense, ico:'↓', bg:'var(--rust-bg)', color:'var(--rust)', foot: trendFoot(expenseDelta, true) },
    { label:'Arus Kas Bersih', value: mt.net, ico:'Σ', bg:'var(--paper-3)', color:'var(--ink)', foot:`Tingkat tabungan ${savingsRate.toFixed(1)}%` },
  ];
  document.getElementById('statCards').innerHTML = cards.map(c=>`
    <div class="ledger-card stat-card">
      <div class="stat-top">
        <div class="stat-label">${c.label}</div>
        <div class="stat-ico" style="background:${c.bg}; color:${c.color};">${c.ico}</div>
      </div>
      <div class="stat-value" style="color:${c.color==='var(--ink)'? 'var(--ink)': c.color};">${fmtRupiah(c.value)}</div>
      <div class="stat-foot">${c.foot}</div>
    </div>
  `).join('');

  renderCashflowChart();
  renderCategoryPie();
  renderRecentTx();
  renderDashBudgets();
}
function trendFoot(pct, invert=false){
  if(pct===0) return '<span class="text-muted">Tidak ada data bulan lalu</span>';
  const up = pct>0;
  const good = invert? !up : up;
  const cls = good? 'trend-up':'trend-down';
  const arrow = up? '▲':'▼';
  return `<span class="${cls}">${arrow} ${Math.abs(pct).toFixed(1)}%</span> vs bulan lalu`;
}

function renderCashflowChart(){
  const months = last6Months();
  const incomeArr = months.map(m=>monthTotals(m).income);
  const expenseArr = months.map(m=>monthTotals(m).expense);
  const ctx = document.getElementById('cashflowChart');
  if(charts.cashflow) charts.cashflow.destroy();
  charts.cashflow = new Chart(ctx, {
    type:'line',
    data:{ labels: months.map(monthShort), datasets:[
      { label:'Pemasukan', data:incomeArr, borderColor: getCss('--sage'), backgroundColor: hexA(getCss('--sage'),0.12), fill:true, tension:.35, borderWidth:2.5, pointRadius:3 },
      { label:'Pengeluaran', data:expenseArr, borderColor: getCss('--rust'), backgroundColor: hexA(getCss('--rust'),0.12), fill:true, tension:.35, borderWidth:2.5, pointRadius:3 },
    ]},
    options: baseChartOpts({ y:{ ticks:{ callback:(v)=>fmtShort(v) } } })
  });
}
function renderCategoryPie(){
  const ym = currentMonthYm();
  const totals = {};
  for(const t of state.transactions){
    if(t.type!=='expense' || ymOf(t.date)!==ym) continue;
    totals[t.categoryId] = (totals[t.categoryId]||0) + t.amount;
  }
  const entries = Object.entries(totals).sort((a,b)=>b[1]-a[1]);
  const labels = entries.map(([id])=> findCategory(id)?.name || 'Lainnya');
  const data = entries.map(([,v])=>v);
  const colors = entries.map(([id])=> findCategory(id)?.color || '#999');
  const ctx = document.getElementById('categoryPieChart');
  if(charts.pie) charts.pie.destroy();
  if(entries.length===0){
    ctx.parentElement.innerHTML = '<div class="empty-state" style="padding:30px;"><div class="ico">🥧</div><p>Belum ada pengeluaran bulan ini</p></div>';
  } else {
    charts.pie = new Chart(ctx, { type:'doughnut', data:{ labels, datasets:[{ data, backgroundColor: colors, borderWidth:2, borderColor: getCss('--paper') }]},
      options:{ responsive:true, maintainAspectRatio:false, cutout:'68%', plugins:{ legend:{display:false} } } });
    const total = data.reduce((a,b)=>a+b,0);
    document.getElementById('pieLegend').innerHTML = entries.slice(0,6).map(([id,v],i)=>`
      <div class="legend-row"><span class="legend-dot" style="background:${colors[i]}"></span><span class="lbl">${labels[i]}</span><span class="pct">${((v/total)*100).toFixed(0)}%</span></div>
    `).join('');
  }
}
function renderRecentTx(){
  const list = [...state.transactions].sort((a,b)=> b.date.localeCompare(a.date)).slice(0,6);
  const tbody = document.querySelector('#recentTxTable tbody');
  if(list.length===0){ tbody.innerHTML = `<tr><td colspan="5" class="text-muted" style="text-align:center; padding:30px;">Belum ada transaksi</td></tr>`; return; }
  tbody.innerHTML = list.map(t=>{
    const cat = findCategory(t.categoryId);
    const acc = findAccount(t.accountId);
    const amtClass = t.type==='income'?'amount-in': t.type==='expense'?'amount-out':'amount-transfer';
    const sign = t.type==='income'?'+': t.type==='expense'?'-':'';
    return `<tr><td>${fmtDate(t.date)}</td><td>${t.note||'-'}</td><td>${cat? `<span class="cat-chip">${cat.icon} ${cat.name}</span>` : '<span class="text-muted">Transfer</span>'}</td><td>${acc?acc.name:'-'}</td><td style="text-align:right;" class="${amtClass}">${sign}${fmtRupiah(t.amount)}</td></tr>`;
  }).join('');
}
function renderDashBudgets(){
  const ym = currentMonthYm();
  const rows = state.budgets.map(b=>{
    const cat = findCategory(b.categoryId);
    const spent = state.transactions.filter(t=>t.type==='expense' && t.categoryId===b.categoryId && ymOf(t.date)===ym).reduce((s,t)=>s+t.amount,0);
    return { ...b, cat, spent, pct: b.limit? clamp(spent/b.limit*100,0,999):0 };
  }).sort((a,b)=>b.pct-a.pct).slice(0,5);
  const wrap = document.getElementById('dashBudgetList');
  if(rows.length===0){ wrap.innerHTML = '<p class="text-muted" style="font-size:13px;">Belum ada anggaran dibuat.</p>'; return; }
  wrap.innerHTML = rows.map(r=>budgetItemHtml(r)).join('');
}
function budgetItemHtml(r){
  const over = r.pct>100;
  const barColor = over? getCss('--rust') : r.pct>80? getCss('--gold') : getCss('--sage');
  return `<div class="budget-item">
    <div class="budget-top"><span class="cat">${r.cat?.icon||'🏷️'} ${r.cat?.name||'—'}</span><span class="val ${over?'over-budget':''}">${fmtRupiah(r.spent)} / ${fmtRupiah(r.limit)}</span></div>
    <div class="progress-track"><div class="progress-fill" style="width:${clamp(r.pct,0,100)}%; background:${barColor};"></div></div>
    <div class="budget-meta"><span>${over? 'Melebihi anggaran' : clamp(r.pct,0,100).toFixed(0)+'% terpakai'}</span>${over?`<span class="over-budget">+${fmtRupiah(r.spent-r.limit)}</span>`:''}</div>
  </div>`;
}

/* helpers for charts */
function getCss(varName){ return getComputedStyle(document.body).getPropertyValue(varName).trim(); }
function hexA(hex, a){
  let c = hex.replace('#','');
  if(c.length===3) c = c.split('').map(x=>x+x).join('');
  const r=parseInt(c.substr(0,2),16), g=parseInt(c.substr(2,2),16), b=parseInt(c.substr(4,2),16);
  return `rgba(${r},${g},${b},${a})`;
}
function fmtShort(v){
  if(Math.abs(v)>=1000000) return (v/1000000).toFixed(1).replace('.0','')+'jt';
  if(Math.abs(v)>=1000) return (v/1000).toFixed(0)+'rb';
  return v;
}
function baseChartOpts(extra={}){
  return Object.assign({
    responsive:true, maintainAspectRatio:false,
    interaction:{ mode:'index', intersect:false },
    plugins:{ legend:{ position:'bottom', labels:{ boxWidth:10, boxHeight:10, usePointStyle:true, font:{family:"Manrope"} } },
      tooltip:{ callbacks:{ label: (ctx)=> `${ctx.dataset.label}: ${fmtRupiah(ctx.parsed.y)}` } } },
    scales:{ x:{ grid:{ display:false } }, y:{ grid:{ color: hexA(getCss('--ink'),0.06) }, ticks:{ callback:(v)=>fmtShort(v) } } }
  }, extra);
}

/* ================================================================
   RENDER: TRANSAKSI
   ================================================================ */
function populateAccountSelects(){
  const opts = state.accounts.map(a=>`<option value="${a.id}">${a.name}</option>`).join('');
  ['txAccount','txAccountFrom','txAccountTo','trFrom','trTo','recurAccount','goalAddAccount'].forEach(id=>{
    const el = document.getElementById(id); if(el) el.innerHTML = opts;
  });
  const fa = document.getElementById('filterAccount');
  fa.innerHTML = '<option value="all">Semua Akun</option>' + opts;
}
function populateCategorySelect(type, selectId){
  const cats = type==='income'? state.categories.income : state.categories.expense;
  document.getElementById(selectId).innerHTML = cats.map(c=>`<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
}
function populateFilterCategory(){
  const all = [...state.categories.income, ...state.categories.expense];
  document.getElementById('filterCategory').innerHTML = '<option value="all">Semua Kategori</option>' + all.map(c=>`<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
}
function populateBudgetCategorySelect(){
  const used = new Set(state.budgets.map(b=>b.categoryId));
  const avail = state.categories.expense.filter(c=> state.ui.editingBudgetId ? true : !used.has(c.id));
  document.getElementById('budgetCategory').innerHTML = (avail.length? avail : state.categories.expense).map(c=>`<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
}

function getFilteredTx(){
  const f = state.ui.txFilters;
  let list = state.transactions.filter(t=>{
    if(f.type!=='all' && t.type!==f.type) return false;
    if(f.account!=='all' && t.accountId!==f.account && t.toAccountId!==f.account) return false;
    if(f.category!=='all' && t.categoryId!==f.category) return false;
    if(f.range!=='all' && !txInRange(t, f.range)) return false;
    if(f.search){
      const s = f.search.toLowerCase();
      const cat = findCategory(t.categoryId);
      const acc = findAccount(t.accountId);
      const hay = `${t.note||''} ${cat?.name||''} ${acc?.name||''} ${(t.tags||[]).join(' ')}`.toLowerCase();
      if(!hay.includes(s)) return false;
    }
    return true;
  });
  const [key,dir] = f.sort.split('_');
  list.sort((a,b)=>{
    let va = key==='date'? a.date : a.amount;
    let vb = key==='date'? b.date : b.amount;
    if(va<vb) return dir==='asc'? -1:1;
    if(va>vb) return dir==='asc'? 1:-1;
    return 0;
  });
  return list;
}

function renderTransaksi(){
  populateAccountSelects();
  populateFilterCategory();
  const f = state.ui.txFilters;
  document.getElementById('txSearch').value = f.search;
  document.getElementById('filterType').value = f.type;
  document.getElementById('filterAccount').value = f.account;
  document.getElementById('filterCategory').value = f.category;
  document.getElementById('filterRange').value = f.range;
  document.getElementById('sortBy').value = f.sort;

  const all = getFilteredTx();
  const pageSize = state.ui.pageSize;
  const totalPages = Math.max(1, Math.ceil(all.length/pageSize));
  state.ui.txFilters.page = clamp(state.ui.txFilters.page,1,totalPages);
  const page = state.ui.txFilters.page;
  const list = all.slice((page-1)*pageSize, page*pageSize);

  const tbody = document.querySelector('#txTable tbody');
  document.getElementById('txEmpty').classList.toggle('hidden', all.length>0);
  tbody.innerHTML = list.map(t=>{
    const cat = findCategory(t.categoryId);
    const acc = findAccount(t.accountId);
    const toAcc = findAccount(t.toAccountId);
    const amtClass = t.type==='income'?'amount-in': t.type==='expense'?'amount-out':'amount-transfer';
    const sign = t.type==='income'?'+': t.type==='expense'?'-':'';
    const badge = t.type==='income'? '<span class="tx-type-badge badge-in">↑ Masuk</span>' : t.type==='expense'? '<span class="tx-type-badge badge-out">↓ Keluar</span>' : '<span class="tx-type-badge badge-transfer">⇄ Transfer</span>';
    return `<tr>
      <td>${fmtDate(t.date)}</td>
      <td>${badge}</td>
      <td>${t.note||'-'}${t.tags&&t.tags.length? '<div style="margin-top:4px;">'+t.tags.map(tg=>`<span class="cat-chip" style="margin-right:4px; font-size:11px;">#${tg}</span>`).join('')+'</div>':''}</td>
      <td>${cat? `<span class="cat-chip">${cat.icon} ${cat.name}</span>` : '<span class="text-muted">—</span>'}</td>
      <td>${t.type==='transfer'? `${acc?.name} → ${toAcc?.name}` : (acc?acc.name:'-')}</td>
      <td style="text-align:right;" class="${amtClass}">${sign}${fmtRupiah(t.amount)}</td>
      <td><div class="row-actions"><button data-edit-tx="${t.id}" title="Ubah">✏️</button><button data-del-tx="${t.id}" class="del" title="Hapus">🗑️</button></div></td>
    </tr>`;
  }).join('');

  const pag = document.getElementById('txPagination');
  pag.innerHTML = `<span>Menampilkan ${list.length? (page-1)*pageSize+1:0}–${(page-1)*pageSize+list.length} dari ${all.length} transaksi</span>
    <div class="pg-btns">
      <button ${page<=1?'disabled':''} data-pg="prev">‹</button>
      ${Array.from({length: totalPages}, (_,i)=>i+1).slice(0,6).map(p=>`<button class="${p===page?'active':''}" data-pg="${p}">${p}</button>`).join('')}
      <button ${page>=totalPages?'disabled':''} data-pg="next">›</button>
    </div>`;
}

/* ================================================================
   RENDER: AKUN
   ================================================================ */
const ACC_TYPE_LABEL = {cash:'Tunai', bank:'Rekening Bank', ewallet:'E-Wallet', other:'Lainnya'};
const ACC_TYPE_ICON = {cash:'💵', bank:'🏦', ewallet:'📱', other:'💼'};
function renderAkun(){
  const wrap = document.getElementById('accGrid');
  wrap.innerHTML = state.accounts.map(a=>{
    const bal = accountBalance(a.id);
    return `<div class="acc-card" style="background:linear-gradient(135deg, ${a.color}, ${shade(a.color,-18)});">
      <div class="acc-top">
        <div>
          <div class="acc-name">${a.name}</div>
          <div class="acc-type">${ACC_TYPE_ICON[a.type]} ${ACC_TYPE_LABEL[a.type]}</div>
        </div>
        <div class="acc-actions">
          <button data-edit-acc="${a.id}" title="Ubah">✏️</button>
          <button data-del-acc="${a.id}" title="Hapus">🗑️</button>
        </div>
      </div>
      <div class="acc-balance">${fmtRupiah(bal)}</div>
    </div>`;
  }).join('') + `<button class="acc-add-card" id="accGridAdd"><span style="font-size:22px;">+</span> Tambah Akun</button>`;
  document.getElementById('accGridAdd').addEventListener('click', ()=>openAccModal());
  populateAccountSelects();
  document.getElementById('trDate').value = todayISO();
}
function shade(hex, pct){
  let c = hex.replace('#','');
  if(c.length===3) c=c.split('').map(x=>x+x).join('');
  let r=parseInt(c.substr(0,2),16), g=parseInt(c.substr(2,2),16), b=parseInt(c.substr(4,2),16);
  r = clamp(Math.round(r+(pct/100)*255),0,255); g = clamp(Math.round(g+(pct/100)*255),0,255); b = clamp(Math.round(b+(pct/100)*255),0,255);
  return '#'+[r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');
}

/* ================================================================
   RENDER: ANGGARAN
   ================================================================ */
function renderAnggaran(){
  if(!state.ui.budgetYm) state.ui.budgetYm = currentMonthYm();
  const ym = state.ui.budgetYm;
  document.getElementById('budgetMonthLbl').textContent = monthLabel(ym);
  document.getElementById('budgetPeriodLabel').textContent = ym===currentMonthYm() ? 'Periode berjalan' : 'Menampilkan riwayat periode terpilih';
  const rows = state.budgets.map(b=>{
    const cat = findCategory(b.categoryId);
    const spent = state.transactions.filter(t=>t.type==='expense' && t.categoryId===b.categoryId && ymOf(t.date)===ym).reduce((s,t)=>s+t.amount,0);
    return { ...b, cat, spent, pct: b.limit? clamp(spent/b.limit*100,0,999):0 };
  });
  const wrap = document.getElementById('budgetList');
  document.getElementById('budgetEmpty').classList.toggle('hidden', rows.length>0);
  wrap.innerHTML = rows.map(r=>`
    <div class="budget-item">
      <div class="budget-top">
        <span class="cat">${r.cat?.icon||'🏷️'} ${r.cat?.name||'—'}</span>
        <div class="row-actions">
          <span class="val ${r.pct>100?'over-budget':''}">${fmtRupiah(r.spent)} / ${fmtRupiah(r.limit)}</span>
          <button data-del-budget="${r.id}" class="del" style="margin-left:8px;">🗑️</button>
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${clamp(r.pct,0,100)}%; background:${r.pct>100? getCss('--rust') : r.pct>80? getCss('--gold') : getCss('--sage')};"></div></div>
      <div class="budget-meta"><span>${r.pct>100? 'Melebihi anggaran '+r.pct.toFixed(0)+'%' : r.pct.toFixed(0)+'% terpakai · sisa '+fmtRupiah(Math.max(0,r.limit-r.spent))}</span></div>
    </div>
  `).join('');
}

document.getElementById('budgetPrevMonth').addEventListener('click', ()=>{
  const d = new Date(state.ui.budgetYm+'-01T00:00:00'); d.setMonth(d.getMonth()-1);
  state.ui.budgetYm = d.toISOString().slice(0,7); renderAnggaran();
});
document.getElementById('budgetNextMonth').addEventListener('click', ()=>{
  const d = new Date(state.ui.budgetYm+'-01T00:00:00'); d.setMonth(d.getMonth()+1);
  state.ui.budgetYm = d.toISOString().slice(0,7); renderAnggaran();
});

/* ================================================================
   RENDER: TARGET TABUNGAN
   ================================================================ */
function renderTarget(){
  const wrap = document.getElementById('goalGrid');
  if(state.goals.length===0){ wrap.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><div class="ico">🏺</div><h4>Belum ada target</h4><p>Buat target tabungan pertama Anda.</p></div>`; return; }
  wrap.innerHTML = state.goals.map(g=>{
    const pct = clamp(g.current/g.target*100,0,100);
    const daysLeft = Math.ceil((new Date(g.deadline)-new Date())/86400000);
    return `<div class="goal-card">
      <div class="goal-head">
        <div><div class="goal-name">${g.name}</div><div class="goal-deadline">${daysLeft>0? daysLeft+' hari lagi' : 'Tenggat terlewati'} · ${fmtDate(g.deadline)}</div></div>
        <div class="row-actions"><button data-edit-goal="${g.id}">✏️</button><button data-del-goal="${g.id}" class="del">🗑️</button></div>
      </div>
      ${ringSvg(pct, g.color)}
      <div class="goal-amounts" style="margin-top:12px;">Terkumpul <strong>${fmtRupiah(g.current)}</strong> dari target ${fmtRupiah(g.target)}</div>
      <div class="goal-actions" style="margin-top:14px;">
        <button class="btn btn-gold btn-sm" data-addfund-goal="${g.id}">+ Tambah Dana</button>
      </div>
    </div>`;
  }).join('');
}
function ringSvg(pct, color){
  const r=34, c=2*Math.PI*r, off = c - (pct/100)*c;
  return `<div class="goal-ring-wrap">
    <svg width="84" height="84" viewBox="0 0 84 84">
      <circle cx="42" cy="42" r="${r}" fill="none" stroke="var(--paper-3)" stroke-width="9"/>
      <circle cx="42" cy="42" r="${r}" fill="none" stroke="${color}" stroke-width="9" stroke-linecap="round"
        stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 42 42)"/>
      <text x="42" y="47" text-anchor="middle" font-family="IBM Plex Mono" font-size="15" font-weight="700" fill="var(--ink)">${pct.toFixed(0)}%</text>
    </svg>
    <div class="goal-amounts">Progres tercapai<br><strong style="color:${color};">${pct.toFixed(1)}%</strong></div>
  </div>`;
}

/* ================================================================
   RENDER: TRANSAKSI BERULANG
   ================================================================ */
const FREQ_LABEL = {daily:'Harian', weekly:'Mingguan', monthly:'Bulanan', yearly:'Tahunan'};
function renderBerulang(){
  const wrap = document.getElementById('recurList');
  if(state.recurring.length===0){ wrap.innerHTML = `<div class="empty-state"><div class="ico">🔁</div><h4>Belum ada jadwal</h4><p>Tambahkan transaksi berulang agar tidak lupa mencatat.</p></div>`; return; }
  wrap.innerHTML = state.recurring.map(r=>{
    const cat = findCategory(r.categoryId);
    const acc = findAccount(r.accountId);
    const isIncome = r.type==='income';
    return `<div class="recur-item">
      <div class="recur-ico" style="background:${isIncome?'var(--sage-bg)':'var(--rust-bg)'}; color:${isIncome?'var(--sage)':'var(--rust)'};">${cat?.icon||(isIncome?'↑':'↓')}</div>
      <div class="recur-info">
        <div class="nm">${r.name}</div>
        <div class="meta">${FREQ_LABEL[r.frequency]} · ${acc?.name||'-'} · Berikutnya ${fmtDate(r.nextDate)}</div>
      </div>
      <div class="mono" style="font-weight:700; color:${isIncome?'var(--sage)':'var(--rust)'};">${isIncome?'+':'-'}${fmtRupiah(r.amount)}</div>
      <button class="switch ${r.active?'on':''}" data-toggle-recur="${r.id}" title="Aktif/Nonaktif"></button>
      <div class="row-actions"><button data-run-recur="${r.id}" title="Catat sekarang">▶️</button><button data-del-recur="${r.id}" class="del" title="Hapus">🗑️</button></div>
    </div>`;
  }).join('');
}

/* ================================================================
   RENDER: LAPORAN
   ================================================================ */
function renderLaporan(){
  const year = new Date().getFullYear();
  document.getElementById('yearLabel').textContent = 'Tahun ' + year;
  let yIncome=0, yExpense=0;
  const monthsData = [];
  for(let m=0;m<12;m++){
    const ym = `${year}-${String(m+1).padStart(2,'0')}`;
    const t = monthTotals(ym);
    yIncome+=t.income; yExpense+=t.expense;
    monthsData.push({ym,...t});
  }
  const avgSavingsRate = yIncome? ((yIncome-yExpense)/yIncome*100):0;

  document.getElementById('reportStats').innerHTML = [
    {label:'Total Pemasukan '+year, value:yIncome, color:'var(--sage)'},
    {label:'Total Pengeluaran '+year, value:yExpense, color:'var(--rust)'},
    {label:'Rata-rata Tabungan', value:null, color:'var(--gold)', raw: avgSavingsRate.toFixed(1)+'%'},
  ].map(c=>`<div class="ledger-card stat-card"><div class="stat-label">${c.label}</div><div class="stat-value" style="color:${c.color}">${c.raw||fmtRupiah(c.value)}</div></div>`).join('');

  const ctx = document.getElementById('yearlyChart');
  if(charts.yearly) charts.yearly.destroy();
  charts.yearly = new Chart(ctx, { type:'bar', data:{ labels: monthsData.map(m=>monthShort(m.ym)), datasets:[
    { label:'Pemasukan', data: monthsData.map(m=>m.income), backgroundColor: hexA(getCss('--sage'),0.85), borderRadius:5 },
    { label:'Pengeluaran', data: monthsData.map(m=>m.expense), backgroundColor: hexA(getCss('--rust'),0.85), borderRadius:5 },
  ]}, options: baseChartOpts() });

  const ctx2 = document.getElementById('donutChart');
  if(charts.donut) charts.donut.destroy();
  charts.donut = new Chart(ctx2, { type:'doughnut', data:{ labels:['Pemasukan','Pengeluaran'], datasets:[{ data:[yIncome,yExpense], backgroundColor:[getCss('--sage'),getCss('--rust')], borderWidth:2, borderColor:getCss('--paper') }]},
    options:{ responsive:true, maintainAspectRatio:false, cutout:'65%', plugins:{legend:{position:'bottom'}} } });

  const tbody = document.querySelector('#monthlyTable tbody');
  tbody.innerHTML = monthsData.slice().reverse().map(m=>{
    const rate = m.income? (m.net/m.income*100):0;
    return `<tr><td>${monthLabel(m.ym)}</td><td style="text-align:right;" class="amount-in">${fmtRupiah(m.income)}</td><td style="text-align:right;" class="amount-out">${fmtRupiah(m.expense)}</td><td style="text-align:right;" class="mono" style="font-weight:700;">${fmtRupiah(m.net)}</td><td style="text-align:right;">${m.income? rate.toFixed(1)+'%':'-'}</td></tr>`;
  }).join('');
}

/* ================================================================
   RENDER: KATEGORI
   ================================================================ */
function renderKategori(){
  const mkRow = (c,type) => {
    const usedCount = state.transactions.filter(t=>t.categoryId===c.id).length;
    return `<div class="recur-item">
      <div class="recur-ico" style="background:${hexA(c.color,0.15)}; color:${c.color};">${c.icon}</div>
      <div class="recur-info"><div class="nm">${c.name}</div><div class="meta">${usedCount} transaksi</div></div>
      <div class="row-actions"><button data-del-cat="${c.id}" data-cat-type="${type}" class="del" title="Hapus">🗑️</button></div>
    </div>`;
  };
  document.getElementById('catListIncome').innerHTML = state.categories.income.map(c=>mkRow(c,'income')).join('') || '<p class="text-muted">Belum ada kategori.</p>';
  document.getElementById('catListExpense').innerHTML = state.categories.expense.map(c=>mkRow(c,'expense')).join('') || '<p class="text-muted">Belum ada kategori.</p>';
}

/* ================================================================
   MODAL LOGIC: TRANSAKSI
   ================================================================ */
function setTxType(type){
  state.ui.selectedTxType = type;
  document.querySelectorAll('#txTypeToggle button').forEach(b=>b.classList.toggle('active', b.dataset.val===type));
  document.getElementById('txAccGroupSingle').classList.toggle('hidden', type==='transfer');
  document.getElementById('txAccGroupTransfer').classList.toggle('hidden', type!=='transfer');
  document.getElementById('txCatGroup').classList.toggle('hidden', type==='transfer');
  if(type!=='transfer') populateCategorySelect(type, 'txCategory');
}
document.getElementById('txTypeToggle').addEventListener('click', (e)=>{
  const btn = e.target.closest('button'); if(!btn) return;
  setTxType(btn.dataset.val);
});
function openTxModal(editId=null){
  state.ui.editingTxId = editId;
  populateAccountSelects();
  const t = editId? state.transactions.find(x=>x.id===editId) : null;
  document.getElementById('txModalTitle').textContent = editId? 'Ubah Transaksi' : 'Transaksi Baru';
  setTxType(t? t.type : 'expense');
  document.getElementById('txAmount').value = t? t.amount.toLocaleString('id-ID') : '';
  document.getElementById('txDate').value = t? t.date : todayISO();
  document.getElementById('txNote').value = t? (t.note||'') : '';
  document.getElementById('txTags').value = t? (t.tags||[]).join(', ') : '';
  if(t){
    if(t.type==='transfer'){ document.getElementById('txAccountFrom').value=t.accountId; document.getElementById('txAccountTo').value=t.toAccountId; }
    else { document.getElementById('txAccount').value = t.accountId; populateCategorySelect(t.type,'txCategory'); document.getElementById('txCategory').value = t.categoryId; }
  }
  document.querySelectorAll('#modalTx .form-group').forEach(g=>g.classList.remove('has-error'));
  openModal('modalTx');
}
document.getElementById('quickAddBtn').addEventListener('click', ()=>openTxModal());
document.getElementById('topAddBtn').addEventListener('click', ()=>openTxModal());

document.getElementById('saveTxBtn').addEventListener('click', ()=>{
  const type = state.ui.selectedTxType;
  const amount = parseNum(document.getElementById('txAmount').value);
  const date = document.getElementById('txDate').value || todayISO();
  const note = document.getElementById('txNote').value.trim();
  const tags = document.getElementById('txTags').value.split(',').map(s=>s.trim()).filter(Boolean);
  const amtGroup = document.getElementById('txAmount').closest('.form-group');
  if(!amount || amount<=0){ amtGroup.classList.add('has-error'); return; } else amtGroup.classList.remove('has-error');

  let payload = { type, amount, date, note, tags };
  if(type==='transfer'){
    const from = document.getElementById('txAccountFrom').value, to = document.getElementById('txAccountTo').value;
    if(from===to){ toast('Akun asal dan tujuan tidak boleh sama', {error:true}); return; }
    payload.accountId = from; payload.toAccountId = to; payload.categoryId = null;
  } else {
    payload.accountId = document.getElementById('txAccount').value;
    payload.categoryId = document.getElementById('txCategory').value;
    payload.toAccountId = null;
  }

  if(state.ui.editingTxId){
    const idx = state.transactions.findIndex(t=>t.id===state.ui.editingTxId);
    state.transactions[idx] = { ...state.transactions[idx], ...payload };
    toast('Transaksi berhasil diperbarui');
  } else {
    state.transactions.push({ id: uid(), ...payload });
    toast('Transaksi berhasil dicatat');
  }
  closeModal('modalTx');
  refreshCurrentPage();
});

/* delete / edit transaksi (delegated) */
document.getElementById('txTable').addEventListener('click', (e)=>{
  const editId = e.target.closest('[data-edit-tx]')?.dataset.editTx;
  const delId = e.target.closest('[data-del-tx]')?.dataset.delTx;
  if(editId) openTxModal(editId);
  if(delId){
    confirmAction('Hapus transaksi ini? Tindakan ini tidak dapat diurungkan setelah konfirmasi.', ()=>{
      const removed = state.transactions.find(t=>t.id===delId);
      state.transactions = state.transactions.filter(t=>t.id!==delId);
      refreshCurrentPage();
      toast('Transaksi dihapus', { undo: ()=>{ state.transactions.push(removed); refreshCurrentPage(); toast('Penghapusan diurungkan'); } });
    });
  }
});
document.getElementById('txPagination').addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-pg]'); if(!btn) return;
  const val = btn.dataset.pg;
  if(val==='prev') state.ui.txFilters.page--;
  else if(val==='next') state.ui.txFilters.page++;
  else state.ui.txFilters.page = Number(val);
  renderTransaksi();
});

/* filters */
document.getElementById('txSearch').addEventListener('input', debounce((e)=>{ state.ui.txFilters.search = e.target.value; state.ui.txFilters.page=1; renderTransaksi(); }, 220));
['filterType','filterAccount','filterCategory','filterRange','sortBy'].forEach(id=>{
  document.getElementById(id).addEventListener('change', (e)=>{
    const map = {filterType:'type', filterAccount:'account', filterCategory:'category', filterRange:'range', sortBy:'sort'};
    state.ui.txFilters[map[id]] = e.target.value; state.ui.txFilters.page=1; renderTransaksi();
  });
});
document.getElementById('clearFilters').addEventListener('click', ()=>{
  state.ui.txFilters = { search:'', type:'all', account:'all', category:'all', range:'all', sort:'date_desc', page:1 };
  renderTransaksi();
});
document.querySelectorAll('[data-goto]').forEach(b=> b.addEventListener('click', ()=>goPage(b.dataset.goto)));

/* ================================================================
   MODAL LOGIC: AKUN
   ================================================================ */
function buildColorSwatches(containerId, current, onPick){
  const el = document.getElementById(containerId);
  el.innerHTML = COLORS.map(c=>`<div class="swatch ${c===current?'sel':''}" style="background:${c}" data-color="${c}"></div>`).join('');
  el.querySelectorAll('.swatch').forEach(sw=> sw.addEventListener('click', ()=>{
    el.querySelectorAll('.swatch').forEach(s=>s.classList.remove('sel')); sw.classList.add('sel'); onPick(sw.dataset.color);
  }));
}
function openAccModal(editId=null){
  state.ui.editingAccId = editId;
  const a = editId? state.accounts.find(x=>x.id===editId): null;
  document.getElementById('accModalTitle').textContent = editId? 'Ubah Akun':'Tambah Akun';
  document.getElementById('accName').value = a? a.name : '';
  document.getElementById('accType').value = a? a.type : 'cash';
  document.getElementById('accBalance').value = a? a.initialBalance.toLocaleString('id-ID') : '';
  state.ui.accColor = a? a.color : COLORS[state.accounts.length % COLORS.length];
  buildColorSwatches('accColorSwatches', state.ui.accColor, (c)=>state.ui.accColor=c);
  openModal('modalAcc');
}
document.getElementById('addAccBtn').addEventListener('click', ()=>openAccModal());
document.getElementById('saveAccBtn').addEventListener('click', ()=>{
  const name = document.getElementById('accName').value.trim();
  if(!name){ toast('Nama akun wajib diisi', {error:true}); return; }
  const payload = { name, type: document.getElementById('accType').value, initialBalance: parseNum(document.getElementById('accBalance').value), color: state.ui.accColor };
  if(state.ui.editingAccId){
    const idx = state.accounts.findIndex(a=>a.id===state.ui.editingAccId);
    state.accounts[idx] = { ...state.accounts[idx], ...payload };
    toast('Akun diperbarui');
  } else { state.accounts.push({ id: uid(), ...payload }); toast('Akun ditambahkan'); }
  closeModal('modalAcc'); refreshCurrentPage();
});
document.getElementById('accGrid').addEventListener('click', (e)=>{
  const editId = e.target.closest('[data-edit-acc]')?.dataset.editAcc;
  const delId = e.target.closest('[data-del-acc]')?.dataset.delAcc;
  if(editId) openAccModal(editId);
  if(delId){
    confirmAction('Hapus akun ini? Transaksi terkait akun ini tidak akan dihapus otomatis.', ()=>{
      state.accounts = state.accounts.filter(a=>a.id!==delId);
      refreshCurrentPage(); toast('Akun dihapus');
    });
  }
});
document.getElementById('doTransferBtn').addEventListener('click', ()=>{
  const from = document.getElementById('trFrom').value, to = document.getElementById('trTo').value;
  const amount = parseNum(document.getElementById('trAmount').value);
  if(from===to){ toast('Akun asal dan tujuan tidak boleh sama', {error:true}); return; }
  if(!amount||amount<=0){ toast('Masukkan jumlah transfer yang valid', {error:true}); return; }
  state.transactions.push({ id: uid(), type:'transfer', amount, date: document.getElementById('trDate').value||todayISO(), accountId: from, toAccountId: to, categoryId:null, note: document.getElementById('trNote').value.trim()||'Transfer antar akun', tags:[] });
  document.getElementById('trAmount').value=''; document.getElementById('trNote').value='';
  refreshCurrentPage(); toast('Transfer berhasil diproses');
});

/* ================================================================
   MODAL LOGIC: KATEGORI
   ================================================================ */
function buildIconSwatches(containerId, current, onPick){
  const el = document.getElementById(containerId);
  el.innerHTML = ICONS.map(i=>`<div class="icon-swatch ${i===current?'sel':''}" data-icon="${i}">${i}</div>`).join('');
  el.querySelectorAll('.icon-swatch').forEach(sw=> sw.addEventListener('click', ()=>{
    el.querySelectorAll('.icon-swatch').forEach(s=>s.classList.remove('sel')); sw.classList.add('sel'); onPick(sw.dataset.icon);
  }));
}
document.getElementById('addCatBtn').addEventListener('click', ()=>{
  document.getElementById('catName').value=''; document.getElementById('catType').value='expense';
  state.ui.catColor = COLORS[Math.floor(Math.random()*COLORS.length)]; state.ui.catIcon = ICONS[Math.floor(Math.random()*ICONS.length)];
  buildColorSwatches('catColorSwatches', state.ui.catColor, c=>state.ui.catColor=c);
  buildIconSwatches('catIconSwatches', state.ui.catIcon, i=>state.ui.catIcon=i);
  openModal('modalCat');
});
document.getElementById('saveCatBtn').addEventListener('click', ()=>{
  const name = document.getElementById('catName').value.trim();
  if(!name){ toast('Nama kategori wajib diisi', {error:true}); return; }
  const type = document.getElementById('catType').value;
  state.categories[type].push({ id: uid(), name, icon: state.ui.catIcon, color: state.ui.catColor });
  closeModal('modalCat'); refreshCurrentPage(); toast('Kategori ditambahkan');
});
['catListIncome','catListExpense'].forEach(id=>{
  document.getElementById(id).addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-del-cat]'); if(!btn) return;
    const catId = btn.dataset.delCat, type = btn.dataset.catType;
    confirmAction('Hapus kategori ini? Transaksi yang sudah tercatat tidak akan terhapus.', ()=>{
      state.categories[type] = state.categories[type].filter(c=>c.id!==catId);
      refreshCurrentPage(); toast('Kategori dihapus');
    });
  });
});

/* ================================================================
   MODAL LOGIC: ANGGARAN
   ================================================================ */
document.getElementById('addBudgetBtn').addEventListener('click', ()=>{
  state.ui.editingBudgetId = null;
  populateBudgetCategorySelect();
  document.getElementById('budgetLimit').value='';
  openModal('modalBudget');
});
document.getElementById('saveBudgetBtn').addEventListener('click', ()=>{
  const categoryId = document.getElementById('budgetCategory').value;
  const limit = parseNum(document.getElementById('budgetLimit').value);
  if(!limit||limit<=0){ toast('Masukkan batas anggaran yang valid', {error:true}); return; }
  const existing = state.budgets.find(b=>b.categoryId===categoryId);
  if(existing){ existing.limit = limit; toast('Anggaran diperbarui'); }
  else { state.budgets.push({ id: uid(), categoryId, limit }); toast('Anggaran ditambahkan'); }
  closeModal('modalBudget'); refreshCurrentPage();
});
document.getElementById('budgetList').addEventListener('click', (e)=>{
  const delId = e.target.closest('[data-del-budget]')?.dataset.delBudget;
  if(delId){ confirmAction('Hapus anggaran ini?', ()=>{ state.budgets = state.budgets.filter(b=>b.id!==delId); refreshCurrentPage(); toast('Anggaran dihapus'); }); }
});

/* ================================================================
   MODAL LOGIC: TARGET TABUNGAN
   ================================================================ */
document.getElementById('addGoalBtn').addEventListener('click', ()=>{
  state.ui.editingGoalId = null;
  document.getElementById('goalModalTitle').textContent='Buat Target Tabungan';
  document.getElementById('goalName').value=''; document.getElementById('goalTarget').value=''; document.getElementById('goalCurrent').value='0';
  document.getElementById('goalDeadline').value='';
  state.ui.goalColor = COLORS[Math.floor(Math.random()*COLORS.length)];
  buildColorSwatches('goalColorSwatches', state.ui.goalColor, c=>state.ui.goalColor=c);
  openModal('modalGoal');
});
document.getElementById('saveGoalBtn').addEventListener('click', ()=>{
  const name = document.getElementById('goalName').value.trim();
  const target = parseNum(document.getElementById('goalTarget').value);
  const current = parseNum(document.getElementById('goalCurrent').value);
  const deadline = document.getElementById('goalDeadline').value || todayISO();
  if(!name || !target){ toast('Lengkapi nama dan target dana', {error:true}); return; }
  if(state.ui.editingGoalId){
    const idx = state.goals.findIndex(g=>g.id===state.ui.editingGoalId);
    state.goals[idx] = { ...state.goals[idx], name, target, current, deadline, color: state.ui.goalColor };
    toast('Target diperbarui');
  } else { state.goals.push({ id: uid(), name, target, current, deadline, color: state.ui.goalColor }); toast('Target ditambahkan'); }
  closeModal('modalGoal'); refreshCurrentPage();
});
document.getElementById('goalGrid').addEventListener('click', (e)=>{
  const editId = e.target.closest('[data-edit-goal]')?.dataset.editGoal;
  const delId = e.target.closest('[data-del-goal]')?.dataset.delGoal;
  const addFundId = e.target.closest('[data-addfund-goal]')?.dataset.addfundGoal;
  if(editId){
    const g = state.goals.find(x=>x.id===editId);
    state.ui.editingGoalId = editId;
    document.getElementById('goalModalTitle').textContent='Ubah Target Tabungan';
    document.getElementById('goalName').value=g.name; document.getElementById('goalTarget').value=g.target.toLocaleString('id-ID');
    document.getElementById('goalCurrent').value=g.current.toLocaleString('id-ID'); document.getElementById('goalDeadline').value=g.deadline;
    state.ui.goalColor = g.color; buildColorSwatches('goalColorSwatches', g.color, c=>state.ui.goalColor=c);
    openModal('modalGoal');
  }
  if(delId){ confirmAction('Hapus target tabungan ini?', ()=>{ state.goals = state.goals.filter(g=>g.id!==delId); refreshCurrentPage(); toast('Target dihapus'); }); }
  if(addFundId){
    state.ui.editingGoalAddId = addFundId;
    document.getElementById('goalAddAmount').value='';
    populateAccountSelects();
    openModal('modalGoalAdd');
  }
});
document.getElementById('saveGoalAddBtn').addEventListener('click', ()=>{
  const amount = parseNum(document.getElementById('goalAddAmount').value);
  if(!amount||amount<=0){ toast('Masukkan jumlah dana yang valid', {error:true}); return; }
  const g = state.goals.find(x=>x.id===state.ui.editingGoalAddId);
  g.current += amount;
  const accId = document.getElementById('goalAddAccount').value;
  state.transactions.push({ id: uid(), type:'expense', amount, date: todayISO(), accountId: accId, categoryId: ensureGoalCategory(), note: 'Menabung untuk '+g.name, tags:['tabungan'] });
  closeModal('modalGoalAdd'); refreshCurrentPage(); toast('Dana berhasil ditambahkan ke target');
});
function ensureGoalCategory(){
  let cat = state.categories.expense.find(c=>c.name==='Tabungan & Investasi');
  if(!cat){ cat = { id: uid(), name:'Tabungan & Investasi', icon:'🏺', color: COLORS[0] }; state.categories.expense.push(cat); }
  return cat.id;
}

/* ================================================================
   MODAL LOGIC: TRANSAKSI BERULANG
   ================================================================ */
document.getElementById('recurTypeToggle').addEventListener('click', (e)=>{
  const btn = e.target.closest('button'); if(!btn) return;
  state.ui.recurType = btn.dataset.val;
  document.querySelectorAll('#recurTypeToggle button').forEach(b=>b.classList.toggle('active', b===btn));
  populateCategorySelect(state.ui.recurType, 'recurCategory');
});
document.getElementById('addRecurBtn').addEventListener('click', ()=>{
  document.getElementById('recurName').value=''; document.getElementById('recurAmount').value='';
  document.getElementById('recurFreq').value='monthly'; document.getElementById('recurNextDate').value = todayISO();
  state.ui.recurType='expense';
  document.querySelectorAll('#recurTypeToggle button').forEach(b=>b.classList.toggle('active', b.dataset.val==='expense'));
  populateAccountSelects(); populateCategorySelect('expense','recurCategory');
  openModal('modalRecur');
});
document.getElementById('saveRecurBtn').addEventListener('click', ()=>{
  const name = document.getElementById('recurName').value.trim();
  const amount = parseNum(document.getElementById('recurAmount').value);
  if(!name||!amount){ toast('Lengkapi nama dan jumlah', {error:true}); return; }
  state.recurring.push({ id: uid(), name, type: state.ui.recurType, amount, accountId: document.getElementById('recurAccount').value,
    categoryId: document.getElementById('recurCategory').value, frequency: document.getElementById('recurFreq').value,
    nextDate: document.getElementById('recurNextDate').value || todayISO(), active:true });
  closeModal('modalRecur'); refreshCurrentPage(); toast('Jadwal transaksi berulang ditambahkan');
});
document.getElementById('recurList').addEventListener('click', (e)=>{
  const toggleId = e.target.closest('[data-toggle-recur]')?.dataset.toggleRecur;
  const delId = e.target.closest('[data-del-recur]')?.dataset.delRecur;
  const runId = e.target.closest('[data-run-recur]')?.dataset.runRecur;
  if(toggleId){ const r = state.recurring.find(x=>x.id===toggleId); r.active=!r.active; renderBerulang(); }
  if(delId){ confirmAction('Hapus jadwal transaksi berulang ini?', ()=>{ state.recurring = state.recurring.filter(x=>x.id!==delId); renderBerulang(); toast('Jadwal dihapus'); }); }
  if(runId){
    const r = state.recurring.find(x=>x.id===runId);
    state.transactions.push({ id: uid(), type:r.type, amount:r.amount, date: todayISO(), accountId:r.accountId, categoryId:r.categoryId, note:r.name+' (otomatis)', tags:['berulang'] });
    r.nextDate = advanceDate(r.nextDate, r.frequency);
    refreshCurrentPage(); toast(`"${r.name}" berhasil dicatat sebagai transaksi`);
  }
});
function advanceDate(iso, freq){
  const d = new Date(iso+'T00:00:00');
  if(freq==='daily') d.setDate(d.getDate()+1);
  if(freq==='weekly') d.setDate(d.getDate()+7);
  if(freq==='monthly') d.setMonth(d.getMonth()+1);
  if(freq==='yearly') d.setFullYear(d.getFullYear()+1);
  return d.toISOString().slice(0,10);
}

/* ================================================================
   EXPORT / IMPORT / RESET
   ================================================================ */
function downloadFile(filename, content, type='application/json'){
  const blob = new Blob([content], {type});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}
function exportCSV(){
  const rows = [['Tanggal','Tipe','Keterangan','Kategori','Akun','Akun Tujuan','Jumlah']];
  state.transactions.forEach(t=>{
    rows.push([t.date, t.type, t.note||'', findCategory(t.categoryId)?.name||'', findAccount(t.accountId)?.name||'', findAccount(t.toAccountId)?.name||'', t.amount]);
  });
  const csv = rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\\n');
  downloadFile('transaksi-buku-kas.csv', csv, 'text/csv');
  toast('Berkas CSV berhasil diunduh');
}
document.getElementById('exportCsvBtn').addEventListener('click', exportCSV);
document.getElementById('exportBtn').addEventListener('click', exportCSV);
document.getElementById('printReportBtn').addEventListener('click', ()=>window.print());
document.getElementById('exportJsonBtn').addEventListener('click', ()=>{
  downloadFile('backup-buku-kas.json', JSON.stringify(state, null, 2));
  toast('Cadangan JSON berhasil diunduh');
});
document.getElementById('importJsonInput').addEventListener('change', (e)=>{
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const data = JSON.parse(reader.result);
      if(!data.accounts || !data.transactions) throw new Error('format tidak sesuai');
      state = Object.assign(state, data);
      refreshCurrentPage(); toast('Data berhasil dipulihkan dari cadangan');
    }catch(err){ toast('Gagal memuat berkas: format tidak valid', {error:true}); }
  };
  reader.readAsText(file);
});
document.getElementById('seedDataBtn').addEventListener('click', ()=>{
  confirmAction('Muat data contoh? Data yang ada saat ini akan digantikan.', ()=>{
    seedData(); refreshCurrentPage(); toast('Data contoh berhasil dimuat');
  });
});
document.getElementById('resetDataBtn').addEventListener('click', ()=>{
  confirmAction('Hapus SEMUA data (akun, transaksi, anggaran, target)? Tindakan ini permanen untuk sesi ini.', ()=>{
    state.accounts=[]; state.transactions=[]; state.budgets=[]; state.goals=[]; state.recurring=[];
    state.categories={income:[],expense:[]};
    refreshCurrentPage(); toast('Seluruh data telah dihapus');
  });
});

/* ================================================================
   THEME
   ================================================================ */
function setTheme(t){
  state.theme = t;
  document.body.setAttribute('data-theme', t);
  document.getElementById('themeBtn').textContent = t==='malam'? '☀️' : '🌙';
  document.querySelectorAll('[data-theme-choice]').forEach(b=>b.classList.toggle('active', b.dataset.themeChoice===t));
  refreshCurrentPage();
}
document.getElementById('themeBtn').addEventListener('click', ()=> setTheme(state.theme==='siang'?'malam':'siang'));
document.querySelectorAll('[data-theme-choice]').forEach(b=> b.addEventListener('click', ()=> setTheme(b.dataset.themeChoice)));

/* ================================================================
   NAV WIRE-UP
   ================================================================ */
document.querySelectorAll('.ledger-tab').forEach(tab=>{
  tab.addEventListener('click', ()=> goPage(tab.dataset.page));
});
document.getElementById('menuToggle').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlayBg').classList.add('show');
});
document.getElementById('overlayBg').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlayBg').classList.remove('show');
});

/* live formatting for money inputs */
document.querySelectorAll('#txAmount,#accBalance,#budgetLimit,#goalTarget,#goalCurrent,#recurAmount,#trAmount,#goalAddAmount').forEach(inp=>{
  inp.addEventListener('input', (e)=>{
    const raw = parseNum(e.target.value);
    e.target.value = raw? raw.toLocaleString('id-ID') : '';
  });
});

/* ================================================================
   NOTIFIKASI
   ================================================================ */
function buildNotifications(){
  const notifs = [];
  const ym = currentMonthYm();
  // 1. Anggaran yang mendekati/melebihi batas
  state.budgets.forEach(b=>{
    const cat = findCategory(b.categoryId);
    const spent = state.transactions.filter(t=>t.type==='expense' && t.categoryId===b.categoryId && ymOf(t.date)===ym).reduce((s,t)=>s+t.amount,0);
    const pct = b.limit? spent/b.limit*100 : 0;
    if(pct>=100) notifs.push({ ico:'🚨', title:`Anggaran ${cat?.name||''} terlampaui`, desc:`Sudah ${fmtRupiah(spent)} dari batas ${fmtRupiah(b.limit)}`, urgent:true });
    else if(pct>=80) notifs.push({ ico:'⚠️', title:`Anggaran ${cat?.name||''} hampir habis`, desc:`${pct.toFixed(0)}% dari batas bulanan terpakai`, urgent:false });
  });
  // 2. Transaksi berulang yang akan datang (≤3 hari)
  const now = new Date();
  state.recurring.filter(r=>r.active).forEach(r=>{
    const days = Math.ceil((new Date(r.nextDate)-now)/86400000);
    if(days<=3 && days>=0) notifs.push({ ico:'🔁', title:`${r.name} akan jatuh tempo`, desc: days===0? 'Hari ini' : `${days} hari lagi · ${fmtRupiah(r.amount)}`, urgent: days===0 });
  });
  // 3. Target tabungan mendekati tenggat namun progres masih rendah
  state.goals.forEach(g=>{
    const daysLeft = Math.ceil((new Date(g.deadline)-now)/86400000);
    const pct = g.target? g.current/g.target*100 : 0;
    if(daysLeft>0 && daysLeft<=30 && pct<80) notifs.push({ ico:'🏺', title:`Target "${g.name}" perlu perhatian`, desc:`${daysLeft} hari tersisa, baru ${pct.toFixed(0)}% tercapai`, urgent:false });
  });
  return notifs;
}
function renderNotifications(){
  const notifs = buildNotifications();
  document.getElementById('notifDot').classList.toggle('hidden', notifs.length===0);
  const panel = document.getElementById('notifPanel');
  if(notifs.length===0){
    panel.innerHTML = `<div class="notif-title">Notifikasi</div><div class="notif-empty">🎉 Tidak ada pemberitahuan saat ini</div>`;
  } else {
    panel.innerHTML = `<div class="notif-title">Notifikasi (${notifs.length})</div>` + notifs.map(n=>`
      <div class="notif-item"><span class="ico">${n.ico}</span><div class="txt"><strong style="${n.urgent?'color:var(--rust);':''}">${n.title}</strong><span>${n.desc}</span></div></div>
    `).join('');
  }
}
document.getElementById('notifBtn').addEventListener('click', (e)=>{
  e.stopPropagation();
  renderNotifications();
  document.getElementById('notifPanel').classList.toggle('open');
});
document.addEventListener('click', (e)=>{
  const panel = document.getElementById('notifPanel');
  if(panel.classList.contains('open') && !e.target.closest('#notifPanel') && !e.target.closest('#notifBtn')) panel.classList.remove('open');
});

/* ================================================================
   PINTASAN KEYBOARD
   ================================================================ */
document.getElementById('helpBtn').addEventListener('click', ()=>openModal('modalHelp'));
let gPressed = false;
document.addEventListener('keydown', (e)=>{
  const tag = (e.target.tagName||'').toLowerCase();
  const typing = tag==='input' || tag==='textarea' || tag==='select';
  if(e.key==='Escape'){
    document.querySelectorAll('.modal-overlay.open').forEach(m=>m.classList.remove('open'));
    return;
  }
  if(typing) return;
  if(e.key==='n' || e.key==='N'){ openTxModal(); return; }
  if(e.key==='/'){ e.preventDefault(); goPage('transaksi'); setTimeout(()=>document.getElementById('txSearch').focus(), 50); return; }
  if(e.key==='g' || e.key==='G'){ gPressed = true; setTimeout(()=>gPressed=false, 900); return; }
  if(gPressed){
    const map = {d:'dashboard', t:'transaksi', a:'akun', b:'anggaran', l:'laporan'};
    const target = map[e.key.toLowerCase()];
    if(target){ goPage(target); gPressed=false; }
  }
});

/* quick date buttons injected into transaction modal */
(function addQuickDates(){
  const dateInput = document.getElementById('txDate');
  const wrap = document.createElement('div');
  wrap.className='quick-dates';
  wrap.innerHTML = `<button type="button" data-qd="0">Hari ini</button><button type="button" data-qd="-1">Kemarin</button><button type="button" data-qd="-7">Minggu lalu</button>`;
  dateInput.closest('.form-group').appendChild(wrap);
  wrap.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-qd]'); if(!btn) return;
    const d = new Date(); d.setDate(d.getDate()+Number(btn.dataset.qd));
    dateInput.value = d.toISOString().slice(0,10);
  });
})();

/* ================================================================
   BOOTSTRAP
   ================================================================ */
function refreshCurrentPage(){
  const active = document.querySelector('.page.active');
  const page = active ? active.id.replace('page-','') : 'dashboard';
  document.getElementById('sidebarBalance').textContent = fmtRupiah(totalBalance());
  renderPage(page);
  renderNotifications();
}
function init(){
  seedData();
  document.getElementById('txDate').value = todayISO();
  populateAccountSelects();
  populateCategorySelect('expense','txCategory');
  populateCategorySelect('expense','recurCategory');
  goPage('dashboard');
  renderNotifications();
}
init();
</script>
</body>
</html>
