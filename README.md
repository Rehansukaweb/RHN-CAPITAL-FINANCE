<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="color-scheme" content="dark light">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no">
<title>Jurnal Forex Cent | RHN CAPITAL</title>

<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#050505">
<link rel="apple-touch-icon" href="RHN LOGO.jpg">

<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
  window.addEventListener('DOMContentLoaded', function() {
    var testEl = document.createElement('div');
    testEl.style.cssText = 'font-size: 100px; position: absolute; visibility: hidden; z-index: -999;';
    document.body.appendChild(testEl);
    
    var actualSize = parseFloat(window.getComputedStyle(testEl).fontSize);
    document.body.removeChild(testEl);
    
    if (actualSize !== 100 && actualSize > 0) {
       var zoomRatio = 100 / actualSize;
       document.documentElement.style.zoom = zoomRatio;
    }
  });
</script>

<style>
/* ==========================================================================
   TEMA ORIGINAL (GELAP PEKAT) + TEKS NOMINAL PUTIH ELEGAN
   ========================================================================== */
* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; -webkit-text-size-adjust: none; text-size-adjust: none; }

h1, hr, .page-header, .site-header, .project-name { display: none !important; }

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
  --bg: #DFE2E6; 
  --bg2: #E9EDF1; 
  --bg3: #D0D5DB;
  --card: #E9EDF1; 
  --border: #C2C8D0; 
  --border2: #9CA3AF;
  --text: #111827; 
  --text2: #374151; 
  --text3: #4B5563;
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

.swal2-container { z-index: 100000 !important; }
.centered-modal { border-radius: 24px !important; overflow: hidden; box-shadow: var(--shadow-float) !important; }

/* HEADER */
.header-area { padding: 20px 24px; }
.logo-row { display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 8px; margin-bottom: 20px; padding-top: 10px; }
.logo-img { width: 60px; height: 60px; border-radius: 14px; border: 1px solid var(--gold2); padding: 2px; }
.logo-img img { width: 100%; height: 100%; border-radius: 10px; object-fit: cover; }
.logo-text { text-align: center; }
.logo-text .main-text { font-size: 20px; font-weight: 800; color: var(--text); letter-spacing: 0.5px; }
.logo-text .sub-text { font-size: 10px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 1.5px; }

/* EXTERNAL LINKS */
.top-ext-links {
  display: flex; gap: 16px; padding: 0 0 24px 0;
  flex-wrap: wrap; align-items: center; justify-content: center;
}
.nav-ext-btn {
  background: transparent; border: none; color: var(--gold);
  font-weight: 700; font-size: 11px; font-family: 'Outfit', sans-serif;
  cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;
}
.nav-ext-btn:hover { color: var(--text); }

.status-row { display: flex; gap: 12px; margin-bottom: 20px; }
.status-pill {
  background: var(--bg2); border: 1px solid var(--border); border-radius: 12px;
  padding: 8px 16px; display: flex; align-items: center; justify-content: center; gap: 8px;
}
.usd-val { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 700; color: var(--text); }
.sync-dot { width: 8px; height: 8px; border-radius: 50%; box-shadow: 0 0 8px currentColor; }
.sync-text { font-size: 10px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 1px; }

/* USER ROW */
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
.user-pill-left { display: flex; align-items: center; gap: 8px; flex-wrap: nowrap; overflow: hidden; }
.u-avatar {
  width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--gold);
  display: flex; align-items: center; justify-content: center; color: var(--gold); font-weight: 700; font-size: 12px; flex-shrink: 0;
}
.u-name { font-size: 12px; font-weight: 600; color: var(--text); display: flex; align-items: center; gap: 4px; flex-wrap: nowrap; overflow: hidden; white-space: nowrap; max-width: 140px;}

.user-action-wrap { display: flex; gap: 6px; padding-right: 4px; align-items: center; }
.setting-btn { background: transparent; border: 1px solid var(--border2); color: var(--text3); width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; padding: 0; }
.logout-btn { background: transparent; border: 1px solid var(--border2); color: var(--text3); height: 32px; padding: 0 12px; border-radius: 8px; font-size: 10px; font-weight: 800; cursor: pointer; text-transform: uppercase; transition: 0.3s; display: flex; align-items: center; justify-content: center; }
.setting-btn:hover { background: rgba(255,255,255,0.05); border-color: var(--text); color: var(--text); }
.logout-btn:hover { background: rgba(248,113,113,0.1); border-color: var(--red2); color: var(--red2); }

/* NAVIGATION */
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

/* METRICS */
.metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
.m-card { background: var(--card); border-radius: var(--radius); padding: 16px; border: 1px solid var(--border); display: flex; flex-direction: column; }
.m-label { font-size: 9px; font-weight: 800; text-transform: uppercase; color: var(--text3); margin-bottom: 8px; letter-spacing: 0.5px; }
.m-val { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 800; margin-bottom: 4px; color: var(--text); white-space: nowrap; overflow-x: auto; scrollbar-width: none; width: 100%; display: block; letter-spacing: -0.5px; }
.m-val::-webkit-scrollbar { display: none; }
.usd-pill {
  display: inline-block; background: var(--bg3); color: var(--text3);
  font-size: 10px; font-family: 'JetBrains Mono', monospace; font-weight: 600;
  padding: 2px 8px; border-radius: 6px; align-self: flex-start; margin-bottom: 8px;
}
.m-sub { font-size: 10px; font-weight: 500; color: var(--text3); margin-bottom: 12px; flex-grow: 1; }
.m-bar { height: 4px; background: var(--bg3); border-radius: 2px; width: 100%; overflow: hidden; }
.m-bar-fill { height: 100%; border-radius: 2px; transition: width 0.6s ease; }
.inc .m-bar-fill { background: var(--green2); } .exp .m-bar-fill { background: var(--red2); }
.bal .m-bar-fill { background: var(--gold); } .cnt .m-bar-fill { background: var(--blue); }

.sum-grid { display: grid; gap: 16px; margin-bottom: 24px; }

/* FORMS */
.card { background: var(--card); border-radius: var(--radius); padding: 32px; border: 1px solid var(--border); margin-bottom: 24px; }
.card-head { margin-bottom: 16px; }
.card-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.card-sub { font-size: 12px; color: var(--text3); }

.type-toggle { display: flex; background: var(--bg3); border-radius: 16px; padding: 4px; margin-bottom: 20px; }
.t-btn { flex: 1; padding: 12px; border: none; border-radius: 12px; font-size: 12px; font-weight: 700; cursor: pointer; background: transparent; color: var(--text3); transition: 0.2s; }
.t-btn.income.active { background: rgba(16, 185, 129, 0.1); color: var(--green2); box-shadow: 0 2px 8px rgba(0,0,0,0.1); border: 1px solid var(--green2); }
.t-btn.expense.active { background: rgba(248, 113, 113, 0.1); color: var(--red2); box-shadow: 0 2px 8px rgba(0,0,0,0.1); border: 1px solid var(--red2); }

.f-input-dark {
  width: 100%; padding: 16px; border-radius: 16px; border: 1px solid var(--border);
  background-color: var(--bg2) !important; color: var(--text) !important;
  outline: none; font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 500;
  appearance: none; -webkit-appearance: none; transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.03); 
}
#f-amount { overflow-x: auto; white-space: nowrap; scrollbar-width: none; font-size: 20px; font-weight: 800; }
.f-input-dark:focus { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.15); }
.f-input-dark::placeholder { color: var(--text3); }

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}

select.f-input-dark {
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23888899" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px; cursor: pointer;
}
select.f-input-dark option { background: var(--bg2); color: var(--text); font-weight: 500; padding: 12px; }

.form-row { margin-bottom: 16px; }
.form-label { font-size: 10px; font-weight: 800; color: var(--text3); margin-bottom: 8px; display: block; text-transform: uppercase; letter-spacing: 0.5px; }
.form-row textarea { height: 100px; resize: none; border-radius: 16px; }
.submit-btn { width: 100%; padding: 16px; background: var(--green2); color: #000; border: none; border-radius: 16px; font-size: 13px; font-weight: 800; cursor: pointer; transition: 0.2s; text-transform: uppercase; margin-top: 8px; }

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
.ri-icon.profit { color: var(--green2); background: rgba(16, 185, 129, 0.15); } 
.ri-icon.loss { color: var(--red2); background: rgba(248, 113, 113, 0.15); }
.ri-left { display: flex; align-items: center; flex: 1; min-width: 0; }

.ri-note { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 2px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; line-height: 1.4; }
.ri-meta { font-size: 11px; font-weight: 500; color: var(--text3); }
.cat-badge { font-size: 9px; font-weight: 600; padding: 2px 6px; border-radius: 6px; background: var(--bg); border: 1px solid var(--border); color: var(--text3); text-transform: uppercase; display: inline-block; white-space: nowrap; }

.ri-right-wrap { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; flex-shrink: 0; margin-left: 12px; }
.ri-amounts-col { display: flex; flex-direction: column; align-items: flex-end; }
.ri-amount { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 800; white-space: nowrap; color: var(--text); }
.ri-usd { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; color: var(--text3); margin-top: 2px; }

.edit-btn-recent { background: rgba(59, 130, 246, 0.15); border: 1px solid var(--blue); color: var(--blue); padding: 6px 12px; font-size: 10px; font-weight: 800; border-radius: 8px; cursor: pointer; text-transform: uppercase; margin-top: 4px; transition: 0.3s; text-decoration: none; }
.del-btn-recent { background: rgba(248, 113, 113, 0.15); border: 1px solid var(--red2); color: var(--red2); padding: 6px 12px; font-size: 10px; font-weight: 800; border-radius: 8px; cursor: pointer; text-transform: uppercase; margin-top: 4px; transition: 0.3s; text-decoration: none; }
.edit-btn-recent:hover { background: var(--blue); color: #fff; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4); }
.del-btn-recent:hover { background: var(--red2); color: #fff; box-shadow: 0 4px 12px rgba(248, 113, 113, 0.4); }

.export-btn { background: var(--text); color: var(--bg); padding: 16px 24px; border: none; border-radius: 12px; font-size: 12px; font-weight: 800; cursor: pointer; text-transform: uppercase; flex-shrink: 0; white-space: nowrap; }
.action-btns { display: flex; gap: 8px; margin-top: 4px; align-items: center; justify-content: flex-end; flex-wrap: wrap;}

/* SETTINGS MODULE */
.set-group { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 20px; margin-bottom: 24px; }
.set-title { font-size: 11px; font-weight: 800; color: var(--gold); text-transform: uppercase; margin-bottom: 16px; letter-spacing: 1px; border-bottom: 1px solid var(--border2); padding-bottom: 12px; display: flex; align-items: center; gap: 8px; }
.set-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px dashed var(--border2); }
.set-item:last-child { border-bottom: none; padding-bottom: 0; }
.set-label { font-size: 13px; font-weight: 700; color: var(--text); }
.set-sub { font-size: 10px; color: var(--text3); margin-top: 4px; font-weight: 500; }
.set-action { padding: 8px 16px; background: var(--bg3); border: 1px solid var(--border); color: var(--text); border-radius: 8px; font-size: 10px; font-weight: 800; cursor: pointer; transition: 0.2s; text-transform: uppercase; white-space: nowrap; }
.set-action:hover { background: var(--bg2); border-color: var(--gold); color: var(--gold); }
.set-action.danger { color: var(--red2); border-color: rgba(248,113,113,0.3); }
.set-action.danger:hover { background: rgba(248,113,113,0.1); border-color: var(--red2); }
.set-select { background: var(--bg2); border: 1px solid var(--border); color: var(--text); padding: 8px 12px; border-radius: 8px; font-size: 12px; font-weight: 600; outline: none; font-family: 'Outfit', sans-serif; cursor: pointer; }

/* CHART & FILTERS BAR */
.chart-wrap { margin-bottom: 24px; }
.chart-legend { display: flex; gap: 16px; margin-bottom: 16px; justify-content: center; }
.leg-item { display: flex; align-items: center; gap: 8px; font-size: 10px; font-weight: 700; color: var(--text3); text-transform: uppercase; }
.leg-dot { width: 10px; height: 10px; border-radius: 2px; }
.period-bar { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; margin-bottom: 20px; padding-bottom: 8px; }
.p-btn { padding: 10px 20px; border: 1px solid var(--border); border-radius: 100px; font-size: 11px; font-weight: 700; cursor: pointer; background: var(--bg2); color: var(--text3); white-space: nowrap; }
.p-btn.active { border-color: var(--text); color: var(--text); background: var(--bg); }
.filter-bar { display: flex; gap: 16px; width: 100%; margin-bottom: 24px; align-items: center; flex-wrap: wrap; }
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
.btn-google { background: #fff !important; color: #000 !important; border: 1px solid #ddd !important; display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 12px; }

/* ==========================================================================
   MOBILE RESPONSIVE
   ========================================================================== */
@media (max-width: 768px) {
  .top-ext-links { justify-content: center; padding: 0 0 16px 0; }
  .header-area { padding: 16px; }
  .status-row { flex-direction: row; }
  .status-pill { flex: 1; }
  .user-row { flex-direction: row; justify-content: flex-start; }
  .nav { padding: 0 16px 20px; }
  
  .main { padding: 0 0 80px 0 !important; width: 100%; overflow-x: hidden; }
  
  .metrics { grid-template-columns: repeat(2, 1fr); gap: 8px; padding: 0 !important; margin: 0 !important; background: transparent; border: none; }
  .metrics .m-card { border-radius: 24px !important; border-left: none; border-right: none; }
  
  .sum-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; padding: 0 !important; margin: 0 0 24px 0 !important; background: transparent; border: none; }
  .sum-grid .m-card { border-radius: 24px !important; border-left: none; border-right: none; }

  .panel { display: flex; flex-direction: column; gap: 16px; background: transparent; }
  .card { padding: 16px 0 !important; border-radius: 0 !important; border: none !important; background: transparent !important; margin-bottom: 0; }
  
  .card-head, .form-row, .filter-bar, .chart-wrap, .period-bar { padding-left: 16px !important; padding-right: 16px !important; }
  
  .filter-bar { flex-direction: column; } 
  .export-btn { width: 100%; text-align: center; border-radius: 16px; padding: 18px 16px; margin-left: 0 !important; margin-top: 8px;}
  
  .type-toggle, .submit-btn { width: calc(100% - 32px) !important; margin-left: 16px !important; margin-right: 16px !important; }
  .filter-bar select.f-input-dark, .filter-bar input.f-input-dark { width: 100%; border-radius: 16px; }
  .f-input-dark { padding: 18px 16px; font-size: 15px; border-radius: 16px; }
  
  .list-wrap { padding: 0 !important; margin: 0 !important; width: 100%; }
  .recent-item { width: 100% !important; margin: 0 0 12px 0 !important; padding: 12px 16px !important; border-radius: 24px !important; border-left: none !important; border-right: none !important; background: var(--card); flex-direction: row; justify-content: space-between; align-items: center; }
  .ri-right-wrap { margin-left: 8px !important; align-items: flex-end; flex-shrink: 0; max-width: 55%; }
  .action-btns { flex-wrap: nowrap !important; overflow-x: auto; scrollbar-width: none; padding-bottom: 2px; justify-content: flex-end; width: 100%; }
  .action-btns::-webkit-scrollbar { display: none; }
  .del-btn-recent, .edit-btn-recent { margin-top: 0px !important; padding: 4px 8px !important; font-size: 8px !important; flex-shrink: 0; }
  .cat-badge { font-size: 7px; padding: 2px 4px; display: inline-block !important; }
  .u-name { max-width: 90px; }
  .user-pill { padding: 4px; }

  .set-group { border-radius: 0; border-left: none; border-right: none; padding: 20px 16px; }
  .logout-btn { padding: 0 8px; font-size: 9px; height: 28px; }
  .setting-btn { width: 28px; height: 28px; padding: 4px; }
}

/* ==========================================================================
   DESKTOP RESPONSIVE (LAPTOP/PC)
   ========================================================================== */
@media (min-width: 769px) {
  .metrics { grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .sum-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .panel { display: grid; grid-template-columns: 380px 1fr; gap: 24px; align-items: start; }
  .main, .header-area, .nav { max-width: 1200px; margin: 0 auto; }
  
  .status-row { 
      justify-content: center; 
      align-items: center; 
  }
  .status-row .status-pill { 
      flex: 0 1 auto !important; 
      min-width: 180px; 
  }
}

/* ==========================================================================
   🌟 SPLASH SCREEN V6
   ========================================================================== */
#splash-screen {
  position: fixed; inset: 0; background: #050505; z-index: 999999;
  display: flex; align-items: center; justify-content: center; overflow: hidden;
}

.splash-bg-grid {
  position: absolute; inset: 0;
  background-size: 40px 40px;
  background-image: linear-gradient(to right, rgba(251, 191, 36, 0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(251, 191, 36, 0.03) 1px, transparent 1px);
  animation: gridMove 10s linear infinite;
}
@keyframes gridMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(40px); }
}

#splash-screen.splash-exit {
  animation: exitSplash 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes exitSplash {
  0% { opacity: 1; transform: scale(1); filter: blur(0); }
  100% { opacity: 0; transform: scale(1.05); filter: blur(10px); visibility: hidden; }
}

.splash-glass-panel {
  position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 40px 60px; background: rgba(18, 18, 21, 0.6);
  border: 1px solid rgba(251, 191, 36, 0.1); border-radius: 32px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px); text-align: center;
  transform: translateY(20px); opacity: 0;
  animation: panelUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
}
@keyframes panelUp {
  to { transform: translateY(0); opacity: 1; }
}

.splash-logo-container { position: relative; margin-bottom: 24px; }
.splash-img-new {
  width: 80px; height: 80px; border-radius: 20px;
  border: 2px solid rgba(251, 191, 36, 0.8); padding: 4px;
  opacity: 0; transform: scale(0.8);
  animation: logoFlipSimple 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.5s;
}
@keyframes logoFlipSimple {
  to { opacity: 1; transform: scale(1); }
}

.splash-glow {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 100px; height: 100px; background: rgba(251, 191, 36, 0.4);
  border-radius: 50%; filter: blur(20px); opacity: 0; z-index: -1;
  animation: pulseGlowNew 2s infinite alternate 1s;
}
@keyframes pulseGlowNew {
  from { opacity: 0.3; transform: translate(-50%, -50%) scale(0.8); }
  to { opacity: 0.8; transform: translate(-50%, -50%) scale(1.2); }
}

.splash-text-mask { display: flex; justify-content: center; width: 100%; padding-bottom: 4px; margin-bottom: 8px; }
.splash-title-new {
  font-size: 32px; font-weight: 800; color: #fff; font-family: 'Outfit', sans-serif;
  letter-spacing: 4px; text-align: center;
  background: linear-gradient(90deg, #fff 0%, var(--gold) 50%, #fff 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  opacity: 0; transform: scale(0.9);
  animation: titleFadeScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.8s;
}
@keyframes titleFadeScale { to { opacity: 1; transform: scale(1); } }

.splash-subtitle-new {
  font-size: 12px; font-weight: 700; color: var(--gold); letter-spacing: 6px;
  opacity: 0; text-transform: uppercase; text-align: center; width: 100%;
  animation: fadeSub 0.8s ease forwards 1.2s;
}
@keyframes fadeSub { to { opacity: 1; } }

.splash-loader {
  width: 100%; height: 3px; background: rgba(255,255,255,0.1);
  border-radius: 4px; margin-top: 30px; overflow: hidden; position: relative;
}
.splash-loader-bar {
  position: absolute; top: 0; left: 0; height: 100%; background: var(--gold);
  width: 0%; border-radius: 4px;
  animation: loadBar 2s cubic-bezier(0.7, 0, 0.3, 1) forwards 0.5s;
}
@keyframes loadBar {
  0% { width: 0%; }
  50% { width: 70%; }
  100% { width: 100%; }
}

</style>
</head>
<body>

<div id="splash-screen">
  <div class="splash-bg-grid"></div>
  <div class="splash-glass-panel">
    <div class="splash-logo-container">
      <img src="RHN LOGO.jpg" alt="RHN Capital Logo" class="splash-img-new">
      <div class="splash-glow"></div>
    </div>
    <div class="splash-text-mask">
      <div class="splash-title-new">RHN CAPITAL</div>
    </div>
    <div class="splash-subtitle-new">JURNAL FOREX</div>
    <div class="splash-loader">
      <div class="splash-loader-bar"></div>
    </div>
  </div>
</div>

<div id="offline-banner" style="display:none; background:#F87171; color:#000; text-align:center; padding:10px; font-size:12px; font-weight:800; position:fixed; top:0; left:0; width:100%; z-index:100000; text-transform:uppercase; box-shadow:0 4px 12px rgba(0,0,0,0.5);">
  ⚠️ Koneksi Terputus - Mode Offline Aktif
</div>

<div id="auth-screen">
  <div class="auth-box">
    <img src="RHN LOGO.jpg" alt="RHN Capital Logo">
    <div class="auth-title">RHN CAPITAL</div>
    <div class="auth-sub">Jurnal Forex Akses Masuk</div>
    <div class="auth-tabs">
      <button class="auth-tab active" id="tab-login" onclick="switchTab('login')">Masuk</button>
      <button class="auth-tab" id="tab-register" onclick="switchTab('register')">Daftar</button>
    </div>
    <div id="auth-err" style="color:var(--red2);font-size:12px;margin-bottom:12px;display:none;"></div>
    
    <div class="form-row"><input type="email" id="auth-email" class="f-input-dark" placeholder="Email"></div>
    <div class="form-row"><input type="password" id="auth-pass" class="f-input-dark" placeholder="Sandi" onkeydown="if(event.key==='Enter')doAuth()"></div>
    <div class="form-row" id="field-confirm" style="display:none"><input type="password" id="auth-pass2" class="f-input-dark" placeholder="Ulangi Sandi"></div>
    
    <button class="auth-btn" id="auth-submit-btn" onclick="doAuth()">MASUK</button>
    
    <button class="auth-btn btn-google" id="btn-google" onclick="doGoogleAuth()">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
      MASUK DENGAN GOOGLE
    </button>

    <button style="background:transparent; border:none; color:var(--text3); font-size:10px; margin-top:16px; cursor:pointer; font-weight:700; text-transform:uppercase; text-decoration:underline; width:100%;" onclick="doResetPassword()" id="btn-forgot">Lupa Sandi?</button>
    <div style="font-size: 10px; color: var(--gold); margin-top: 6px; text-align: center;">Cek folder SPAM jika email reset tidak masuk</div>
  </div>
</div>

<div id="pin-screen" style="display:none; position: fixed; inset: 0; background: var(--bg); align-items: center; justify-content: center; z-index: 9999;">
  <div class="auth-box">
    <img src="RHN LOGO.jpg" alt="RHN Capital Logo">
    <div class="auth-title" id="pin-title">Masukkan PIN</div>
    <div class="auth-sub" id="pin-sub">Masukkan 6 digit PIN keamanan</div>
    <div id="pin-err" style="color:var(--red2);font-size:12px;margin-bottom:12px;display:none;"></div>
    <div class="form-row">
       <input type="password" id="app-pin" class="f-input-dark" style="text-align:center; letter-spacing: 12px; font-size: 24px; padding: 12px;" inputmode="numeric" maxlength="6" placeholder="••••••">
    </div>
    <button class="auth-btn" id="pin-submit-btn" onclick="verifyPin()" style="display:none;">BUKA APLIKASI</button>
    
    <div style="display: flex; justify-content: space-between; gap: 16px; margin-top: 24px;">
      <button style="background:transparent; border:none; color:var(--text3); font-size:10px; cursor:pointer; font-weight:700; text-transform:uppercase; text-decoration:underline;" onclick="resetAccount()">Ganti Akun</button>
      <button style="background:transparent; border:none; color:var(--text3); font-size:10px; cursor:pointer; font-weight:700; text-transform:uppercase; text-decoration:underline;" onclick="resetPinFromLogin()">Reset PIN</button>
    </div>
  </div>
</div>

<div id="app-screen" style="display:none;">
<div class="header-area">
  
  <div class="logo-row">
    <div class="logo-img"><img src="RHN LOGO.jpg" alt="Logo"></div>
    <div class="logo-text">
      <div class="main-text">RHN CAPITAL</div>
      <div class="sub-text">JURNAL FOREX CENT</div>
    </div>
  </div>

  <div class="top-ext-links">
    <button class="nav-ext-btn" onclick="window.location.href='latar.html'">📈 HALAMAN RHN CAPITAL ↗</button>
  </div>
  
  <div class="status-row">
    <div class="status-pill usd-status-pill" style="padding: 6px 4px;">
      <span class="usd-val" id="usd-rate-val" style="font-size: 9px;">...</span>
    </div>
    
    <div class="status-pill" style="padding: 6px 4px; flex-direction: column; justify-content: center; gap: 2px; font-size: 8px; font-weight: 800; color: var(--gold);">
      <span style="line-height: 1; white-space: nowrap;">XAU <span id="xau-rate-val" style="color: var(--text); font-family: 'JetBrains Mono', monospace; margin-left: 2px;">...</span></span>
    </div>

    <div class="status-pill" style="padding: 6px 4px; gap: 4px;">
      <span class="sync-dot" id="sync-dot" style="background:var(--text3); width: 6px; height: 6px;"></span>
      <span class="sync-text" id="sync-label" style="font-size: 8px; letter-spacing: 0.5px;">MENGHUBUNGKAN...</span>
    </div>
  </div>

  <div class="user-row">
    <button class="theme-btn" onclick="toggleTheme()" id="theme-toggle">🌙</button>
    <div class="user-pill">
      <div class="user-pill-left">
        <div class="u-avatar" id="user-avatar">?</div>
        <div class="u-name">
          <span id="user-name">Memuat...</span>
        </div>
      </div>
      <div class="user-action-wrap">
        <button class="setting-btn" onclick="switchPage('pengaturan')" title="Pengaturan">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
        <button class="logout-btn" onclick="doLogout()">KELUAR</button>
      </div>
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
  <!-- === KARTU SALDO AWAL (DIPINDAH KE ATAS METRICS) === -->
  <div class="card" style="margin-bottom: 24px; padding: 24px 32px;">
    <div class="card-head" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0;">
      <div>
        <div class="card-title" style="font-size: 14px; color: var(--gold);">Saldo Awal (Modal)</div>
        <div class="card-sub" id="display-saldo-awal" style="font-size: 14px; font-weight: 700; color: var(--text);">Memuat...</div>
      </div>
      <button class="set-action" style="padding: 10px 16px; font-size: 10px; font-weight: 800; background: var(--bg2); color: var(--text); border: 1px solid var(--border); border-radius: 8px; cursor: pointer; transition: 0.2s;" onclick="setModalAwal()" onmouseover="this.style.borderColor='var(--gold)'; this.style.color='var(--gold)';" onmouseout="this.style.borderColor='var(--border)'; this.style.color='var(--text)';">
        UBAH SALDO
      </button>
    </div>
  </div>
  <!-- === END KARTU SALDO AWAL === -->

  <div class="metrics" id="metric-cards"></div>
  
  <div class="panel">
    <div class="card">
      <div class="card-head">
        <div class="card-title">Tambah Jurnal Trading</div>
        <div class="card-sub">Catat hasil eksekusi akun MT5 Cent kamu</div>
      </div>
      <div class="type-toggle" style="flex-wrap: wrap; gap: 8px;">
        <button class="t-btn income active" id="btn-inc" onclick="selType('profit')" style="flex-basis: 48%;">+ PROFIT</button>
        <button class="t-btn expense" id="btn-exp" onclick="selType('loss')" style="flex-basis: 48%;"> - LOSS</button>
      </div>
      
      <div class="form-row">
        <label class="form-label">JUMLAH (USC / CENT)</label>
        <input type="text" inputmode="numeric" id="f-amount" class="f-input-dark" placeholder="Contoh: 150 (Berarti $1.50)">
      </div>
      
      <div class="form-row" id="row-cat">
        <label class="form-label">METODE</label>
        <input type="text" id="f-cat" class="f-input-dark" placeholder="Ketik metode (misal: Scalping, SMC, dll)...">
      </div>
      
      <div class="form-row">
        <label class="form-label">PAIR & KETERANGAN (Alasan Entry/Kondisi)</label>
        <textarea id="f-note" class="f-input-dark" placeholder="Catat Pair (misal XAUUSD) dan alasan trading..."></textarea>
      </div>
      
      <div class="form-row">
        <label class="form-label" style="display:flex; justify-content:space-between; align-items:center;">
          <span>WAKTU EKSEKUSI</span>
          <button type="button" onclick="setRealLocalTime()" style="background:transparent; border:none; color:var(--gold); font-size:10px; font-weight:800; font-family:'Outfit', sans-serif; cursor:pointer;">SEKARANG ⏱</button>
        </label>
        <input type="datetime-local" id="f-date" class="f-input-dark">
      </div>
      
      <button class="submit-btn" id="cancel-edit-btn" onclick="cancelEdit()" style="display:none; background:var(--bg3); color:var(--text); margin-bottom:8px;">BATAL EDIT</button>
      <button class="submit-btn" id="save-btn" onclick="addTx()">SIMPAN JURNAL</button>
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
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Profit</div>
        <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Loss</div>
      </div>
      <div style="height:250px"><canvas id="chartWeek"></canvas></div>
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
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Profit</div>
        <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Loss</div>
      </div>
      <div style="height:250px"><canvas id="chartMonth"></canvas></div>
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
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Profit</div>
        <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Loss</div>
      </div>
      <div style="height:250px"><canvas id="chartYear"></canvas></div>
    </div>
    <div class="list-wrap" id="year-body"></div>
  </div>
</div>

<div id="page-riwayat" class="page">
  <div class="sum-grid" id="all-sum"></div>
  <div class="card">
    <div class="card-head"><div class="card-title">Semua Riwayat Jurnal</div></div>
    <div class="filter-bar">
      <select id="flt-type" class="f-input-dark" onchange="renderAll()">
        <option value="">Semua Filter</option>
        <option value="profit">Profit Saja</option>
        <option value="loss">Loss Saja</option>
      </select>
      <input type="text" id="flt-search" class="f-input-dark" placeholder="Cari berdasarkan Pair/Keterangan atau Metode..." oninput="renderAll()">
      <button class="export-btn" onclick="exportCSV()">UNDUH CSV 📥</button>
    </div>
    <div class="chart-wrap" style="margin-top: 16px;">
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Profit</div>
        <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Loss</div>
      </div>
      <div style="height:250px"><canvas id="chartRiwayat"></canvas></div>
    </div>
    <div class="list-wrap" id="all-body"></div>
  </div>
</div>

<div id="page-pengaturan" class="page">
  
  <div class="set-group">
    <div class="set-title">💰 KEUANGAN & MODAL</div>
    <div class="set-item">
      <div>
        <div class="set-label">Modal Awal (USC)</div>
        <div class="set-sub">Atur modal untuk hitung Saldo Akhir di Dasbor</div>
      </div>
      <button class="set-action" onclick="setModalAwal()">ATUR MODAL</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">🔒 KEAMANAN AKUN</div>
    <div class="set-item">
      <div>
        <div class="set-label">Reset Kata Sandi</div>
        <div class="set-sub">Kirim link reset ke email kamu</div>
      </div>
      <button class="set-action" onclick="reqResetPasswordViaSettings()">KIRIM LINK</button>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">Ubah PIN Keamanan</div>
        <div class="set-sub">Ganti 6 digit PIN tanpa perlu keluar (logout)</div>
      </div>
      <button class="set-action" onclick="changePinInApp()">GANTI PIN</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">💾 MANAJEMEN DATA</div>
    <div class="set-item">
      <div>
        <div class="set-label">Unduh Laporan CSV</div>
        <div class="set-sub">Ekspor semua riwayat jurnal untuk di Excel</div>
      </div>
      <button class="set-action" onclick="exportCSV()">UNDUH DATA</button>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">Hapus Semua Riwayat</div>
        <div class="set-sub">Peringatan: Format ulang seluruh database akun ini</div>
      </div>
      <button class="set-action danger" onclick="deleteAllData()">FORMAT DATA</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">ℹ️ DETAIL APLIKASI</div>
    <div class="set-item">
      <div>
        <div class="set-label">Versi Sistem</div>
        <div class="set-sub">RHN Capital Journal v4.0 Cent Edition</div>
      </div>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">Hapus Cache Lokal</div>
        <div class="set-sub">Perbaiki jika aplikasi terasa berat</div>
      </div>
      <button class="set-action danger" onclick="clearLocalCache()">BERSIHKAN</button>
    </div>
  </div>

</div>

<div style="text-align: center; padding: 24px; font-size: 10px; color: var(--text3); margin-top: 32px; border-top: 1px dashed var(--border2); line-height: 1.6;">
    &copy; 2026 RHN CAPITAL. Hak Cipta Dilindungi.<br>
    Platform Jurnal Forex yang aman, cepat, dan terenkripsi.<br>
    Didesain khusus untuk memudahkan evaluasi trading Anda secara presisi.
</div>

</div></div>

<script>
  const lastUid = localStorage.getItem('last_uid_rhn');
  if (lastUid) {
     document.getElementById('auth-screen').style.display = 'none';
     document.getElementById('pin-screen').style.display = 'flex';
     document.getElementById('pin-title').textContent = 'Memuat Keamanan...';
     document.getElementById('pin-sub').textContent = 'Sinkronisasi dengan server';
     document.getElementById('app-pin').style.display = 'none';
     window.pinMode = 'verify';
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

if (localStorage.getItem('theme') === 'light') { 
  document.body.classList.add('light-mode'); 
  document.getElementById('theme-toggle').textContent = '☀️'; 
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
  signOut, onAuthStateChanged, sendPasswordResetEmail, 
  GoogleAuthProvider, signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
  initializeFirestore, persistentLocalCache, collection, doc, 
  addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy, 
  serverTimestamp, getDoc, setDoc 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = { 
  apiKey: "AIzaSyCx04v3ppq3DxbXDg0PrWBeJYIZjmJF9cg", 
  authDomain: "rhn-capital.firebaseapp.com", 
  projectId: "rhn-capital", 
  storageBucket: "rhn-capital.firebasestorage.app", 
  messagingSenderId: "74905216682", 
  appId: "1:74905216682:web:4687a5b0bd7bcac09292d3" 
};

const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 
const db = initializeFirestore(app, { localCache: persistentLocalCache() });

let txs = [], curType = 'profit', activePage = 'dashboard', charts = {};
let modalAwal = 0; // Variabel penyimpan modal awal
let currentUSDRate = 16000, currentUser = null, unsubListener = null, authMode = 'login';
let editId = null;

const fmtFull = n => {
    return (Math.round(n)).toLocaleString('id-ID') + ' USC';
};

const fmt = (n, isDash = false) => {
    return fmtFull(n);
};

const fmtDate = dt => new Date(dt).toLocaleDateString('id-ID',{day:'2-digit',month:'short'});
const fmtTime = dt => new Date(dt).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
const nowISO = () => new Date().toISOString().slice(0,16);
const kursIndo = new Intl.NumberFormat('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const getUSD = n => '$' + (n / 100).toFixed(2); // USC to USD

async function fetchUSDRate() { 
  try { 
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); 
      currentUSDRate = (await res.json()).rates.IDR; 
      document.getElementById('usd-rate-val').textContent = kursIndo.format(currentUSDRate); 
      refreshAll(); 
  } catch (e) { document.getElementById('usd-rate-val').textContent = "Offline"; } 
}
fetchUSDRate(); 
setInterval(fetchUSDRate, 300000); 

function initLiveXAU() {
  const socketXAU = new WebSocket('wss://stream.binance.com:9443/ws/paxgusdt@ticker');
  socketXAU.addEventListener('message', e => { 
      const newPrice = parseFloat(JSON.parse(e.data).c); 
      if (newPrice) { 
          const xauRate = document.getElementById('xau-rate-val'); 
          if (xauRate) xauRate.textContent = '$' + newPrice.toFixed(2); 
      } 
  });
  socketXAU.addEventListener('close', () => setTimeout(initLiveXAU, 3000));
}
initLiveXAU();

document.addEventListener('DOMContentLoaded', () => {
    const syncSelectUI = (sel, ui) => { let text = sel.options[sel.selectedIndex]?.text; if(!text && sel.options.length > 0) text = sel.options[0].text; ui.querySelector('.sel-text').innerHTML = text || 'Pilih...'; };
    document.querySelectorAll('select.f-input-dark, select.set-select').forEach(sel => { 
        sel.style.display = 'none'; let ui = document.createElement('div'); ui.className = sel.className; ui.style.display = 'flex'; ui.style.justifyContent = 'space-between'; ui.style.alignItems = 'center'; ui.style.cursor = 'pointer'; ui.innerHTML = `<span class="sel-text" style="pointer-events:none; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:90%;"></span><span style="font-size:10px; color:var(--text3); pointer-events:none;">▼</span>`; sel.parentNode.insertBefore(ui, sel); syncSelectUI(sel, ui); sel.addEventListener('change', () => syncSelectUI(sel, ui)); const observer = new MutationObserver(() => syncSelectUI(sel, ui)); observer.observe(sel, { childList: true, subtree: true }); ui.addEventListener('click', (e) => { e.stopPropagation(); if (navigator.vibrate) navigator.vibrate(10); let html = '<div style="display:flex; flex-direction:column; gap:8px; max-height:60vh; overflow-y:auto; padding-bottom:12px; scrollbar-width:none;">'; Array.from(sel.options).forEach((opt, idx) => { if(!opt.value && opt.text.toLowerCase().includes('pilih')) return; let isSel = sel.value === opt.value; html += `<button onclick="window.selectCustomOpt('${sel.id}', ${idx})" style="background:${isSel?'var(--bg3)':'var(--bg2)'}; color:var(--text); border:1px solid ${isSel?'var(--gold)':'var(--border)'}; padding:16px; border-radius:12px; font-family:'Outfit'; text-align:left; font-size:14px; font-weight:600; cursor:pointer; transition:0.2s;">${opt.innerHTML || opt.text}</button>`; }); html += '</div>'; Swal.fire({ title: '<div style="font-size:16px; text-align:left; font-weight:800; color:var(--text); border-bottom: 1px dashed var(--border); padding-bottom: 12px; margin-bottom: 8px;">Pilih Opsi</div>', html: html, showConfirmButton: false, background: 'var(--card)', color: 'var(--text)', position: 'center', padding: '24px 16px 16px 16px', margin:0, width: window.innerWidth <= 768 ? '90%' : '400px', customClass: { popup: 'centered-modal' } }); }); 
    });
    window.selectCustomOpt = function(selId, optIdx) { let sel = document.getElementById(selId); if (sel) { sel.selectedIndex = optIdx; sel.dispatchEvent(new Event('change')); if(sel.onchange) sel.onchange(); } Swal.close(); };
});

function showErr(msg) { const el = document.getElementById('auth-err'); el.textContent = msg; el.style.display = 'block'; }
function hideErr() { document.getElementById('auth-err').style.display = 'none'; }
function setLoading(on) { document.getElementById('auth-submit-btn').disabled = on; document.getElementById('auth-submit-btn').textContent = on ? 'Memproses...' : (authMode === 'login' ? 'MASUK' : 'DAFTAR'); }
function setSyncStatus(ok) { document.getElementById('sync-dot').style.background = ok ? 'var(--green2)' : 'var(--red2)'; document.getElementById('sync-label').textContent = ok ? 'TERSINKRON' : 'OFFLINE'; document.getElementById('sync-dot').style.boxShadow = ok ? '0 0 8px var(--green2)' : 'none'; }

window.switchTab = function(mode) { authMode = mode; document.getElementById('tab-login').classList.toggle('active', mode === 'login'); document.getElementById('tab-register').classList.toggle('active', mode === 'register'); document.getElementById('field-confirm').style.display = mode === 'register' ? 'block' : 'none'; document.getElementById('auth-submit-btn').textContent = mode === 'login' ? 'MASUK' : 'DAFTAR'; hideErr(); };
window.doGoogleAuth = async function() { const provider = new GoogleAuthProvider(); hideErr(); setLoading(true); try { await signInWithPopup(auth, provider); } catch(e) { showErr(e.message); setLoading(false); } };
window.doAuth = async function() { const email = document.getElementById('auth-email').value.trim(); const pass = document.getElementById('auth-pass').value; hideErr(); if (!email || !pass) return showErr('Kredensial kosong.'); setLoading(true); try { if (authMode === 'login') { await signInWithEmailAndPassword(auth, email, pass); } else { if (pass !== document.getElementById('auth-pass2').value) return showErr('Sandi beda.'); await createUserWithEmailAndPassword(auth, email, pass); } } catch(e) { showErr(e.message); setLoading(false); } };
window.doResetPassword = async function() { const email = document.getElementById('auth-email').value.trim(); hideErr(); if (!email) { return showErr('Masukkan email kamu dulu di kolom atas untuk reset sandi.'); } setLoading(true); document.getElementById('auth-submit-btn').textContent = 'MENGIRIM...'; try { await sendPasswordResetEmail(auth, email); Swal.fire({ position: 'center', icon: 'success', title: 'Email Terkirim!', html: 'Cek <b>Inbox</b> atau folder <b>SPAM</b> email kamu.', showConfirmButton: true, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); } catch(e) { showErr(e.message); } setLoading(false); document.getElementById('auth-submit-btn').textContent = authMode === 'login' ? 'MASUK' : 'DAFTAR'; };
window.reqResetPasswordViaSettings = async function() { if (!currentUser) return; try { await sendPasswordResetEmail(auth, currentUser.email); Swal.fire({ position: 'center', icon: 'success', title: 'Terkirim!', html: `Link reset sandi telah dikirim ke <b>${currentUser.email}</b>`, showConfirmButton: true, background: 'var(--card)', color: 'var(--text)' }); } catch(e) { Swal.fire('Gagal', e.message, 'error'); } };
window.clearLocalCache = function() { Swal.fire({ title: 'Bersihkan Cache?', text: "Data inti di cloud aman, hanya mereset preferensi hp ini.", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', background: 'var(--card)', color: 'var(--text)' }).then((res) => { if (res.isConfirmed) { let tempLastUid = localStorage.getItem('last_uid_rhn'); localStorage.clear(); if (tempLastUid) localStorage.setItem('last_uid_rhn', tempLastUid); Swal.fire({ position: 'center', icon: 'success', title: 'Bersih!', showConfirmButton: false, timer: 1500, background: 'var(--card)', color: 'var(--text)' }); setTimeout(() => location.reload(), 1500); } }); };
window.deleteAllData = async function() { if (!currentUser) return; Swal.fire({ title: 'Verifikasi PIN Keamanan', text: 'Masukkan 6 digit PIN untuk format total akun:', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, autofocus: true, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;' }, icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'HAPUS SEMUA', background: 'var(--card)', color: 'var(--text)' }).then(async (res) => { if (res.isConfirmed) { if (res.value !== window.userCloudPin) return Swal.fire({icon: 'error', title: 'PIN Salah!', background:'var(--card)', color:'var(--text)'}); Swal.fire({title: 'Menghapus...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}}); try { for (let t of txs) { await deleteDoc(doc(db, 'users', currentUser.uid, 'journal_cent', t.id)); } Swal.fire({icon: 'success', title: 'Data Diformat!', background:'var(--card)', color:'var(--text)'}); } catch(e) { Swal.fire('Error', e.message, 'error'); } } }); };

window.changePinInApp = async function() { if (!currentUser) return; const { value: choice } = await Swal.fire({ title: 'Pengaturan PIN', text: 'Pilih aksi yang mau lu lakuin:', icon: 'question', showCancelButton: true, showDenyButton: true, confirmButtonText: 'Lupa PIN (Buat Baru)', denyButtonText: 'Ingat PIN (Ganti PIN)', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', denyButtonColor: 'var(--gold)', cancelButtonColor: 'var(--bg3)' }); const promptNewPin = async () => { const { value: newPin } = await Swal.fire({ title: 'Buat PIN Baru', text: 'Masukkan 6 angka PIN baru kamu', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;', autofocus: true }, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--gold)', confirmButtonText: 'SIMPAN PIN BARU' }); if (newPin && newPin.length === 6) { try { await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'security'), { pin: newPin }, { merge: true }); window.userCloudPin = newPin; Swal.fire({icon:'success', title:'PIN Berhasil Disimpan!', background:'var(--card)', color:'var(--text)', timer: 1500, showConfirmButton: false}); } catch(e) { Swal.fire({icon:'error', title:'Gagal mengubah PIN', text: e.message, background:'var(--card)', color:'var(--text)'}); } } else if (newPin) { Swal.fire({icon:'warning', title:'Gagal, harus 6 digit!', background:'var(--card)', color:'var(--text)'}); } }; if (choice === true) { promptNewPin(); } else if (choice === false) { const { value: oldPin } = await Swal.fire({ title: 'Masukkan PIN Lama', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;', autofocus: true }, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--border2)' }); if (!oldPin) return; if (oldPin !== window.userCloudPin) { return Swal.fire({icon:'error', title:'PIN Lama Salah!', background:'var(--card)', color:'var(--text)'}); } promptNewPin(); } };
window.doLogout = async function() { if (unsubListener) { unsubListener(); unsubListener = null; } txs = []; localStorage.removeItem('last_uid_rhn'); await signOut(auth); };

onAuthStateChanged(auth, async user => {
  if (user) {
    currentUser = user; localStorage.setItem('last_uid_rhn', user.uid); document.getElementById('auth-screen').style.display = 'none';
    const secRef = doc(db, 'users', user.uid, 'settings', 'security');
    const accRef = doc(db, 'users', user.uid, 'settings', 'account');
    try {
        const accSnap = await getDoc(accRef);
        if(accSnap.exists() && accSnap.data().modalAwal) { modalAwal = accSnap.data().modalAwal; } else { modalAwal = 0; }
        
        const secSnap = await getDoc(secRef); document.getElementById('app-pin').style.display = 'block';
        if (!secSnap.exists() || !secSnap.data().pin) { document.getElementById('app-screen').style.display = 'none'; document.getElementById('pin-screen').style.display = 'flex'; document.getElementById('pin-title').textContent = 'Buat PIN Baru'; document.getElementById('pin-sub').textContent = 'Buat 6 digit PIN untuk akses cepat'; document.getElementById('pin-submit-btn').textContent = 'SIMPAN PIN'; window.pinMode = 'setup'; window.userCloudPin = null; } else { document.getElementById('app-screen').style.display = 'none'; document.getElementById('pin-screen').style.display = 'flex'; document.getElementById('pin-title').textContent = 'Masukkan PIN'; document.getElementById('pin-sub').textContent = 'Keamanan aktif'; document.getElementById('pin-submit-btn').textContent = 'BUKA APLIKASI'; window.pinMode = 'verify'; window.userCloudPin = secSnap.data().pin; if (window.pendingUnlock) { window.pendingUnlock = false; unlockApp(); } }
    } catch(err) { console.error(err); }
  } else {
    currentUser = null; localStorage.removeItem('last_uid_rhn'); document.getElementById('auth-screen').style.display = 'flex'; document.getElementById('app-screen').style.display = 'none'; document.getElementById('pin-screen').style.display = 'none';
    if (unsubListener) { unsubListener(); unsubListener = null; } txs = [];
  }
});

window.verifyPin = async function() { const pinInput = document.getElementById('app-pin').value; const errEl = document.getElementById('pin-err'); if (pinInput.length < 6) { errEl.textContent = 'PIN harus 6 digit.'; errEl.style.display = 'block'; return; } errEl.style.display = 'none'; if (window.pinMode === 'setup') { document.getElementById('pin-submit-btn').textContent = 'MENYIMPAN...'; try { await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'security'), { pin: pinInput }, { merge: true }); window.userCloudPin = pinInput; Swal.fire({position: 'center', icon: 'success', title: 'PIN Berhasil Dibuat!', showConfirmButton: false, timer: 1500, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)'}); unlockApp(); } catch(e) { errEl.textContent = 'Gagal menyimpan PIN ke server.'; errEl.style.display = 'block'; document.getElementById('pin-submit-btn').textContent = 'SIMPAN PIN'; } } else { const uid = currentUser ? currentUser.uid : localStorage.getItem('last_uid_rhn'); if (!uid) return; if (pinInput === window.userCloudPin) { if (currentUser) { unlockApp(); } else { document.getElementById('pin-title').textContent = 'Memuat Data...'; document.getElementById('pin-sub').textContent = 'Tunggu sebentar...'; document.getElementById('app-pin').blur(); window.pendingUnlock = true; } } else { errEl.textContent = 'PIN Salah!'; errEl.style.display = 'block'; document.getElementById('app-pin').value = ''; document.getElementById('app-pin').classList.add('shake-error'); setTimeout(() => document.getElementById('app-pin').classList.remove('shake-error'), 400); if (navigator.vibrate) navigator.vibrate([30, 50, 30]); } } };

function unlockApp() { document.getElementById('pin-screen').style.display = 'none'; document.getElementById('app-screen').style.display = 'block'; setLoading(false); const name = currentUser.displayName || currentUser.email.split('@')[0]; document.getElementById('user-name').textContent = name; listenTransactions(currentUser.uid); document.getElementById('app-pin').value = ''; }
window.resetAccount = function() { Swal.fire({ title: 'Ganti Akun?', text: "Lu harus login Email lagi.", icon: 'warning', showCancelButton: true, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Ganti' }).then((result) => { if (result.isConfirmed) { localStorage.removeItem('last_uid_rhn'); document.getElementById('app-pin').value = ''; doLogout(); } }); };
window.resetPinFromLogin = async function() { const uid = currentUser ? currentUser.uid : localStorage.getItem('last_uid_rhn'); if (!uid) { return Swal.fire({icon: 'error', title: 'Belum Login', text: 'Tunggu proses ke server sebentar', background: 'var(--card)', color: 'var(--text)'}); } const { value: choice } = await Swal.fire({ title: 'Opsi Keamanan', text: 'Pilih tindakan untuk PIN lu:', icon: 'question', showCancelButton: true, showDenyButton: true, confirmButtonText: 'Lupa PIN (Buat Baru)', denyButtonText: 'Ingat PIN (Ganti PIN)', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', denyButtonColor: 'var(--gold)', cancelButtonColor: 'var(--bg3)' }); const promptNewPin = async () => { const { value: newPin } = await Swal.fire({ title: 'Buat PIN Baru', text: 'Masukkan 6 angka PIN baru kamu', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;', autofocus: true }, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--gold)', confirmButtonText: 'SIMPAN PIN BARU' }); if (newPin && newPin.length === 6) { try { await setDoc(doc(db, 'users', uid, 'settings', 'security'), { pin: newPin }, { merge: true }); window.userCloudPin = newPin; Swal.fire({icon:'success', title:'PIN Berhasil Disimpan!', background:'var(--card)', color:'var(--text)', timer: 1500, showConfirmButton: false}); document.getElementById('app-pin').value = ''; } catch(e) { Swal.fire({icon:'error', title:'Gagal mengubah PIN', text: e.message, background:'var(--card)', color:'var(--text)'}); } } else if (newPin) { Swal.fire({icon:'warning', title:'Gagal, harus 6 digit!', background:'var(--card)', color:'var(--text)'}); } }; if (choice === true) { promptNewPin(); } else if (choice === false) { const { value: oldPin } = await Swal.fire({ title: 'Masukkan PIN Lama', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;', autofocus: true }, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--border2)' }); if (!oldPin) return; if (oldPin !== window.userCloudPin) return Swal.fire({icon:'error', title:'PIN Lama Salah!', background:'var(--card)', color:'var(--text)'}); promptNewPin(); } };
document.getElementById('app-pin').addEventListener('input', function(e) { this.value = this.value.replace(/[^0-9]/g, ''); if (this.value.length === 6) { window.verifyPin(); } });

function listenTransactions(uid) { if (unsubListener) unsubListener(); unsubListener = onSnapshot(query(collection(db, 'users', uid, 'journal_cent'), orderBy('createdAt', 'desc')), snap => { txs = snap.docs.map(d => { let data = d.data(); return {id: d.id, ...data}; }); setSyncStatus(true); refreshAll(); }, err => { console.error(err); setSyncStatus(false); }); }

window.addTx = async function() { 
  if(!currentUser) return; 
  const amountInput = document.getElementById('f-amount'); const catInput = document.getElementById('f-cat'); const noteInput = document.getElementById('f-note'); 
  const rawValue = amountInput.value.replace(/\./g, ''); const amt = parseFloat(rawValue); 
  let strategy = catInput.value.trim(); 
  const isAmtEmpty = !amt || isNaN(amt); const isCatEmpty = !strategy; const note = noteInput.value.trim(); const isNoteEmpty = !note;

  if (isAmtEmpty && isCatEmpty && isNoteEmpty) { amountInput.classList.add('shake-error'); catInput.classList.add('shake-error'); noteInput.classList.add('shake-error'); setTimeout(() => { amountInput.classList.remove('shake-error'); catInput.classList.remove('shake-error'); noteInput.classList.remove('shake-error'); }, 400); return Swal.fire({ position: 'center', icon: 'warning', title: 'Data Masih Kosong!', text: 'Nominal, Metode, dan Keterangan Pair harus diisi!', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); } else if (isAmtEmpty) { amountInput.classList.add('shake-error'); setTimeout(() => amountInput.classList.remove('shake-error'), 400); return Swal.fire({ position: 'center', icon: 'warning', title: 'Jumlah Belum Diisi!', text: 'Silakan isi nominal (USC) transaksi terlebih dahulu.', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); } else if (isCatEmpty) { catInput.classList.add('shake-error'); setTimeout(() => catInput.classList.remove('shake-error'), 400); return Swal.fire({ position: 'center', icon: 'warning', title: 'Metode Belum Diisi!', text: 'Ketik Metode transaksi terlebih dahulu, bro!', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); } else if (isNoteEmpty) { noteInput.classList.add('shake-error'); setTimeout(() => noteInput.classList.remove('shake-error'), 400); return Swal.fire({ position: 'center', icon: 'warning', title: 'Keterangan Kosong!', text: 'Jangan lupa isi keterangan/Pair transaksinya ya.', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); }

  const dt = document.getElementById('f-date').value; 
  if (document.activeElement) document.activeElement.blur();
  const saveBtn = document.getElementById('save-btn'); saveBtn.textContent = 'MENYIMPAN...'; saveBtn.style.opacity = '0.7'; saveBtn.disabled = true;

  try { 
      let payload = { type: curType, amount: amt, strategy: strategy, note: note, date: dt || nowISO() }; 
      if (editId) { await updateDoc(doc(db, 'users', currentUser.uid, 'journal_cent', editId), payload); cancelEdit(); } else { payload.createdAt = serverTimestamp(); await addDoc(collection(db, 'users', currentUser.uid, 'journal_cent'), payload); } 
      amountInput.value = ''; document.getElementById('f-cat').value = ''; document.getElementById('f-note').value = ''; 
      saveBtn.style.opacity = '1'; saveBtn.style.transform = 'scale(0.95)'; setTimeout(() => saveBtn.style.transform = 'scale(1)', 150); 
      saveBtn.style.background = 'var(--green2)'; saveBtn.style.color = '#000'; saveBtn.textContent = 'TERSIMPAN ✅'; saveBtn.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.5)'; 
      if (navigator.vibrate) navigator.vibrate([30, 50, 30]); 
      let titleMsg = 'Jurnal Disimpan!'; 
      Swal.fire({ position: 'center', icon: 'success', title: titleMsg, showConfirmButton: false, timer: 2000, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); 
      setTimeout(() => { saveBtn.style.boxShadow = 'none'; saveBtn.disabled = false; window.setRealLocalTime(); selType('profit'); }, 2000);
  } catch(e) { Swal.fire({ position: 'center', icon: 'error', title: 'Koneksi Terputus / Error', text: e.message, showConfirmButton: true, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); saveBtn.textContent = 'COBA LAGI'; saveBtn.style.opacity = '1'; saveBtn.disabled = false; } 
};

window.delTx = async function(id) { if (!currentUser || !confirm('Yakin mau hapus riwayat ini?')) return; await deleteDoc(doc(db, 'users', currentUser.uid, 'journal_cent', id)); };

window.editTx = function(id) { 
    const t = txs.find(x => x.id === id); if (!t) return; 
    editId = id; selType(t.type); document.getElementById('f-amount').value = t.amount; 
    if (document.getElementById('f-cat')) { document.getElementById('f-cat').value = t.strategy; } 
    document.getElementById('f-note').value = t.note === '-' ? '' : t.note; document.getElementById('f-date').value = t.date; document.getElementById('save-btn').textContent = 'UPDATE JURNAL'; document.getElementById('cancel-edit-btn').style.display = 'block'; 
    switchPage('dashboard'); 
};

window.cancelEdit = function() { editId = null; document.getElementById('f-amount').value = ''; document.getElementById('f-cat').value = ''; document.getElementById('f-note').value = ''; document.getElementById('f-date').value = nowISO(); document.getElementById('save-btn').textContent = 'SIMPAN JURNAL'; document.getElementById('cancel-edit-btn').style.display = 'none'; };

window.selType = function(t) { 
    curType = t; document.getElementById('btn-inc').classList.toggle('active', t === 'profit'); document.getElementById('btn-exp').classList.toggle('active', t === 'loss'); 
    const saveBtn = document.getElementById('save-btn'); if (saveBtn) { if (t === 'profit') { saveBtn.style.background = 'var(--green2)'; saveBtn.style.color = '#000'; saveBtn.textContent = 'SIMPAN PROFIT'; } else if (t === 'loss') { saveBtn.style.background = 'var(--red2)'; saveBtn.style.color = '#fff'; saveBtn.textContent = 'SIMPAN LOSS'; } } 
};

window.switchPage = function(p) { document.querySelectorAll('.page').forEach(el => el.classList.remove('active')); document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active')); document.getElementById('page-' + p).classList.add('active'); const pages = ['dashboard', 'harian', 'mingguan', 'bulanan', 'tahunan', 'riwayat']; const idx = pages.indexOf(p); if (idx !== -1) { document.querySelectorAll('.nav-btn')[idx].classList.add('active'); } activePage = p; refreshAll(); };

function calcSum(arr) { let inc = 0, exp = 0, winCount = 0, totalCount = arr.length; arr.forEach(t => { if (t.type === 'profit') { inc += t.amount; winCount++; } else if (t.type === 'loss') { exp += t.amount; } }); let wr = totalCount > 0 ? ((winCount / totalCount) * 100).toFixed(1) : 0; return {inc, exp, bal: inc - exp, count: totalCount, winRate: wr}; }

window.setModalAwal = async function() {
  if (!currentUser) return;
  const { value: modalInput } = await Swal.fire({
    title: 'Atur Modal Awal',
    text: 'Masukkan jumlah modal awal kamu dalam Cent (USC)',
    input: 'number',
    inputValue: modalAwal > 0 ? modalAwal : '',
    inputAttributes: { min: 0, step: 1 },
    showCancelButton: true,
    background: 'var(--card)', color: 'var(--text)',
    confirmButtonText: 'SIMPAN MODAL', confirmButtonColor: 'var(--gold)'
  });

  if (modalInput !== undefined && modalInput !== '') {
    const numVal = parseFloat(modalInput);
    if (!isNaN(numVal)) {
      try {
        await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'account'), { modalAwal: numVal }, { merge: true });
        modalAwal = numVal;
        Swal.fire({icon: 'success', title: 'Modal Disimpan!', background: 'var(--card)', color: 'var(--text)', timer: 1500, showConfirmButton: false});
        refreshAll();
      } catch(e) { Swal.fire('Error', e.message, 'error'); }
    }
  }
};

function renderSumGrid(el, arr, isDash = false) { 
    const s = calcSum(arr); const ts = calcSum(txs.filter(t => new Date(t.date).toDateString() === new Date().toDateString())); const pct = s.inc > 0 ? Math.min(100, Math.round((s.exp / s.inc) * 100)) : 0; 
    
    let balLabel = isDash ? "SALDO AKHIR" : "NET P/L";
    let balVal = isDash ? (modalAwal + s.bal) : s.bal;
    let balPill = isDash ? `Net P/L: ${s.bal >= 0 ? '+' : ''}${fmtFull(s.bal)}` : getUSD(s.bal);
    let balSub = isDash ? `Modal: ${fmtFull(modalAwal)}` : (s.bal >= 0 ? 'Surplus' : 'Drawdown');
    let balWidth = s.inc > 0 ? Math.max(0, Math.min(100, Math.round((s.bal / s.inc) * 100))) : 0;
    if(isDash && modalAwal > 0) {
        balWidth = Math.max(0, Math.min(100, Math.round(((modalAwal + s.bal) / modalAwal) * 100)));
    }

    el.innerHTML = ` 
    <div class="m-card inc"> <div class="m-label">TOTAL PROFIT</div> <div class="m-val">${fmt(s.inc, isDash)}</div> <div class="usd-pill">${getUSD(s.inc)}</div> <div class="m-sub">${s.inc > 0 ? s.count + ' trades tercatat' : '-'}</div> <div class="m-bar"><div class="m-bar-fill" style="width:100%"></div></div> </div> 
    <div class="m-card exp"> <div class="m-label">TOTAL LOSS</div> <div class="m-val">${fmt(s.exp, isDash)}</div> <div class="usd-pill">${getUSD(s.exp)}</div> <div class="m-sub">${pct}% dibanding profit</div> <div class="m-bar"><div class="m-bar-fill" style="width:${pct}%"></div></div> </div> 
    <div class="m-card bal"> <div class="m-label">${balLabel}</div> <div class="m-val">${fmt(balVal, isDash)}</div> <div class="usd-pill">${balPill}</div> <div class="m-sub">${balSub}</div> <div class="m-bar"><div class="m-bar-fill" style="width:${balWidth}%"></div></div> </div> 
    <div class="m-card cnt"> <div class="m-label">WIN RATE</div> <div class="m-val">${s.winRate}%</div> <div class="usd-pill">Hari Ini: ${ts.count} trades</div> <div class="m-sub" style="font-weight:700;">+ ${fmt(ts.inc, isDash)} | - <span>${fmt(ts.exp, isDash)}</span></div> <div class="m-bar"><div class="m-bar-fill" style="width:${s.winRate}%; background: var(--blue);"></div></div> </div> `; 
}

const escapeHTML = (str) => str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag]));

const createTxCard = (t) => { 
    let icon = t.type === 'profit' ? '📈' : '📉'; 
    let sign = t.type === 'profit' ? '+' : '-'; 
    return `
    <div class="recent-item" data-id="${t.id}"> 
        <div class="ri-left"> 
            <div class="ri-icon ${t.type}">${icon}</div> 
            <div> 
                <div class="ri-note">${escapeHTML(t.note)} <span class="cat-badge">${escapeHTML(t.strategy)}</span></div> 
                <div class="ri-meta">${fmtDate(t.date)} · ${fmtTime(t.date)}</div> 
            </div> 
            </div> 
        <div class="ri-right-wrap"> 
            <div class="ri-amounts-col"> 
                <div class="ri-amount ${t.type}">${sign}${fmtFull(t.amount)}</div> 
                <div class="ri-usd">${sign}${getUSD(t.amount)}</div> 
            </div> 
            <div class="action-btns"> 
                <button class="edit-btn-recent" onclick="editTx('${t.id}')">EDIT</button> 
                <button class="del-btn-recent" onclick="delTx('${t.id}')">HAPUS</button> 
            </div> 
        </div> 
    </div>`; 
};

function renderList(container, arr) { container.innerHTML = arr.length ? arr.map(t => createTxCard(t)).join('') : '<div style="padding:40px;text-align:center;color:#888;font-size:12px;">Kosong</div>'; }
function renderMetrics() { renderSumGrid(document.getElementById('metric-cards'), txs, true); }

function mkChart(id, labels, incData, expData) { 
    if (charts[id]) charts[id].destroy(); const c = document.getElementById(id); if (!c) return; 
    const isLight = document.body.classList.contains('light-mode'); const isMobile = window.innerWidth <= 768; 
    charts[id] = new Chart(c, { type: 'bar', data: { labels, datasets: [ {label: 'Profit', data: incData, backgroundColor: isLight ? '#10B981' : '#10B981', borderRadius: 4, barPercentage: 0.6}, {label: 'Loss', data: expData, backgroundColor: isLight ? '#F87171' : '#F87171', borderRadius: 4, barPercentage: 0.6} ] }, options: { responsive: true, maintainAspectRatio: false, plugins: {legend: {display: false}}, scales: { x: { ticks: {color: isLight ? '#888' : '#888', font: {size: isMobile ? 5 : 8, family: "'Outfit'", style: 'normal'}, autoSkip: false, maxRotation: 0, minRotation: 0}, grid: {display: false}, border: {display: false} }, y: { ticks: {color: isLight ? '#888' : '#888', font: {size: isMobile ? 8 : 10, family: "'Outfit'", style: 'normal'}, callback: v => Intl.NumberFormat('id-ID', {notation: 'compact'}).format(v)}, grid: {color: isLight ? '#DEE2E6' : '#222228', drawBorder: false}, border: {display: false} } } } }); 
}

window.renderDaily = function() { const pick = document.getElementById('pick-daily').value; const target = pick ? new Date(pick).toDateString() : new Date().toDateString(); const arr = txs.filter(t => new Date(t.date).toDateString() === target).sort((a, b) => new Date(b.date) - new Date(a.date)); renderSumGrid(document.getElementById('daily-sum'), arr); renderList(document.getElementById('daily-body'), arr); };

function wkKey(d) { const dt = new Date(d); const day = dt.getDay(); const diff = dt.getDate() - day + (day === 0 ? -6 : 1); const monday = new Date(new Date(d).setDate(diff)); monday.setMinutes(monday.getMinutes() - monday.getTimezoneOffset()); return monday.toISOString().slice(0, 10); }

function renderWeekly() { const weeks = {}; txs.forEach(t => { const k = wkKey(t.date); (weeks[k] = weeks[k] || []).push(t); }); const keys = Object.keys(weeks).sort().reverse().slice(0, 8); document.getElementById('week-sel').innerHTML = keys.map((k, i) => { const m = new Date(k), s = new Date(k); s.setDate(s.getDate() + 6); return `<button class="p-btn${i === 0 ? ' active' : ''}" onclick="selWeek('${k}',this)">${m.toLocaleDateString('id-ID', {day: '2-digit', month: 'short'})} – ${s.toLocaleDateString('id-ID', {day: '2-digit', month: 'short'})}</button>`; }).join(''); if (keys.length) showWeek(keys[0]); }
window.selWeek = function(k, btn) { document.querySelectorAll('#week-sel .p-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); showWeek(k); };
function showWeek(k) { const arr = txs.filter(t => wkKey(t.date) === k).sort((a, b) => new Date(b.date) - new Date(a.date)); renderSumGrid(document.getElementById('week-sum'), arr); renderList(document.getElementById('week-body'), arr); const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']; const inc = new Array(7).fill(0), exp = new Array(7).fill(0); arr.forEach(t => { const idx = (new Date(t.date).getDay() + 6) % 7; if (t.type === 'profit') inc[idx] += t.amount; else if (t.type === 'loss') exp[idx] += t.amount; }); mkChart('chartWeek', days, inc, exp); }

function renderMonthly() { const months = {}; txs.forEach(t => { const k = t.date.slice(0, 7); (months[k] = months[k] || []).push(t); }); const keys = Object.keys(months).sort().reverse().slice(0, 12); document.getElementById('month-sel').innerHTML = keys.map((k, i) => { const [y, m] = k.split('-'); const d = new Date(y, m - 1); return `<button class="p-btn${i === 0 ? ' active' : ''}" onclick="selMonth('${k}',this)">${d.toLocaleDateString('id-ID', {month: 'long', year: 'numeric'})}</button>`; }).join(''); if (keys.length) showMonth(keys[0]); }
window.selMonth = function(k, btn) { document.querySelectorAll('#month-sel .p-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); showMonth(k); };
function showMonth(k) { const arr = txs.filter(t => t.date.slice(0, 7) === k).sort((a, b) => new Date(b.date) - new Date(a.date)); renderSumGrid(document.getElementById('month-sum'), arr); renderList(document.getElementById('month-body'), arr); const [y, m] = k.split('-'); const dim = new Date(y, m, 0).getDate(); const labels = [], inc = new Array(dim).fill(0), exp = new Array(dim).fill(0); for (let i = 1; i <= dim; i++) labels.push(i + ''); arr.forEach(t => { const d = new Date(t.date).getDate() - 1; if (t.type === 'profit') inc[d] += t.amount; else if (t.type === 'loss') exp[d] += t.amount; }); mkChart('chartMonth', labels, inc, exp); }

function renderYearly() { const years = {}; txs.forEach(t => { const k = t.date.slice(0, 4); (years[k] = years[k] || []).push(t); }); const keys = Object.keys(years).sort().reverse(); document.getElementById('year-sel').innerHTML = keys.map((k, i) => `<button class="p-btn${i === 0 ? ' active' : ''}" onclick="selYear('${k}',this)">${k}</button>`).join(''); if (keys.length) showYear(keys[0]); }
window.selYear = function(k, btn) { document.querySelectorAll('#year-sel .p-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); showYear(k); };
function showYear(k) { const arr = txs.filter(t => t.date.startsWith(k)).sort((a, b) => new Date(b.date) - new Date(a.date)); renderSumGrid(document.getElementById('year-sum'), arr); renderList(document.getElementById('year-body'), arr); const MNTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']; const inc = new Array(12).fill(0), exp = new Array(12).fill(0); arr.forEach(t => { const m = new Date(t.date).getMonth(); if (t.type === 'profit') inc[m] += t.amount; else if (t.type === 'loss') exp[m] += t.amount; }); mkChart('chartYear', MNTHS, inc, exp); }

window.renderAll = function() { const tf = document.getElementById('flt-type').value; const s = (document.getElementById('flt-search').value || '').toLowerCase(); let arr = [...txs]; if (tf) arr = arr.filter(t => t.type === tf); if (s) arr = arr.filter(t => t.note.toLowerCase().includes(s) || (t.strategy && t.strategy.toLowerCase().includes(s))); arr.sort((a, b) => new Date(b.date) - new Date(a.date)); renderSumGrid(document.getElementById('all-sum'), arr); renderList(document.getElementById('all-body'), arr); const sObj = {}; arr.forEach(t => { const strat = t.strategy || 'Lainnya'; if (!sObj[strat]) sObj[strat] = {inc: 0, exp: 0}; if (t.type === 'profit') sObj[strat].inc += t.amount; else if (t.type === 'loss') sObj[strat].exp += t.amount; }); const sLabels = Object.keys(sObj); const sInc = sLabels.map(strat => sObj[strat].inc); const sExp = sLabels.map(strat => sObj[strat].exp); mkChart('chartRiwayat', sLabels, sInc, sExp); };

function refreshAll() { 
  renderMetrics(); 
  renderList(document.getElementById('recent-list'), txs.slice(0, 6)); 
  if (activePage === 'harian') renderDaily(); 
  if (activePage === 'mingguan') renderWeekly(); 
  if (activePage === 'bulanan') renderMonthly(); 
  if (activePage === 'tahunan') renderYearly(); 
  if (activePage === 'riwayat') renderAll(); 
  
  // PEMBARUAN TEKS SALDO AWAL
  const displaySaldo = document.getElementById('display-saldo-awal');
  if (displaySaldo) {
    displaySaldo.textContent = 'Saat ini: ' + fmtFull(modalAwal);
  }
}

document.getElementById('pick-daily').value = nowISO().slice(0, 10); 
document.getElementById('f-date').value = nowISO();

window.exportCSV = function() { if (!txs.length) return Swal.fire('Kosong', 'Tidak ada data untuk diunduh', 'info'); let csv = "Tanggal,Waktu,Tipe,Metode,Nominal(USC),Keterangan\n"; txs.forEach(t => { const d = t.date.split('T'); csv += `${d[0]},${d[1] || '-'},${t.type === 'profit' ? 'Profit' : 'Loss'},"${t.strategy}","${t.amount}","${t.note}"\n`; }); const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'}); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'Jurnal_Forex_RHN.csv'; link.click(); };

if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(e => console.log('SW Error:', e)); }); }
</script>

<style>
  html { overflow-y: scroll !important; } 
  .page { animation: none !important; transition: none !important; } 
  .m-bar-fill { transition: none !important; } 
  
  body.swal2-shown, body.swal2-height-auto { padding-right: 0 !important; }

  .nav { 
      position: sticky !important; top: 0; z-index: 100; 
      background-color: var(--bg); border-bottom: 4px solid #000000 !important; 
      padding-bottom: 12px !important; transition: none !important; 
  } 
  .main { padding-top: 16px !important; }
  
  .filter-bar { 
      position: sticky !important; top: 70px; z-index: 90; 
      background: var(--bg); padding-top: 16px !important; 
      margin-top: -16px; padding-bottom: 16px !important; 
      border-bottom: 1px solid var(--border); transition: 0.3s ease; 
  }
  .nav.hidden-nav + .main .filter-bar { top: 0px !important; }

  .m-card.bal, .ri-amount, .cat-badge { cursor: pointer; transition: 0.2s; }
  .ri-amount:hover, .cat-badge:hover { opacity: 0.7; }
  
  .inc .m-bar-fill { background: linear-gradient(90deg, #10B981 0%, #34D399 100%); }
  .exp .m-bar-fill { background: linear-gradient(90deg, #F87171 0%, #FCA5A5 100%); }
  
  @keyframes shake { 0%, 100% {transform: translateX(0);} 25% {transform: translateX(-5px);} 75% {transform: translateX(5px);} }
  .shake-error { animation: shake 0.3s ease-in-out; border-color: var(--red2) !important; box-shadow: 0 0 8px rgba(248,113,113,0.3) !important; }

  .swal-btn-darktext { color: #000 !important; font-weight: 800 !important; }
</style>

<script>
window.addEventListener('DOMContentLoaded', (event) => {
  const Toast = Swal.mixin({ position: 'center', showConfirmButton: false, timer: 2000, timerProgressBar: true, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' });
  
  window.addEventListener('offline', () => { document.getElementById('offline-banner').style.display = 'block'; Toast.fire({ icon: 'warning', title: 'Koneksi Terputus!' }); });
  window.addEventListener('online', () => { document.getElementById('offline-banner').style.display = 'none'; Toast.fire({ icon: 'success', title: 'Online Kembali!' }); });

  window.history.pushState({ noBackExitsApp: true }, '');
  window.addEventListener('popstate', function(event) {
      Swal.fire({ title: 'Keluar Aplikasi?', text: "Anda serius ingin keluar dari aplikasi RHN CAPITAL?", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Keluar', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)', position: 'center' }).then((result) => { if (result.isConfirmed) { window.history.back(); } else { window.history.pushState({ noBackExitsApp: true }, ''); } });
  });

  if (window.Chart) { Chart.defaults.animation = false; Chart.defaults.transitions.active.animation.duration = 0; }

  const originalDelTx = window.delTx; 
  window.delTx = function(id) { if (navigator.vibrate) navigator.vibrate(20); Swal.fire({ title: 'Hapus Jurnal?', text: "Data yang dihapus tidak bisa dikembalikan.", icon: 'warning', showCancelButton: true, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Hapus', position: 'center', backdrop: 'rgba(0,0,0,0.6)' }).then((result) => { if (result.isConfirmed) { const nativeConfirm = window.confirm; window.confirm = () => true; originalDelTx(id).then(() => { window.confirm = nativeConfirm; Toast.fire({ icon: 'success', title: 'Data terhapus!' }); }).catch(err => { window.confirm = nativeConfirm; }); } }); };
  
  const originalEditTx = window.editTx; 
  window.editTx = function(id) { if (navigator.vibrate) navigator.vibrate(20); Swal.fire({ title: 'Edit Jurnal?', text: "Data riwayat ini akan ditarik ke form untuk diubah.", icon: 'question', showCancelButton: true, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--blue)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Edit', cancelButtonText: 'Batal', position: 'center', backdrop: 'rgba(0,0,0,0.6)' }).then((result) => { if (result.isConfirmed) { originalEditTx(id); } }); };
  
  const originalDoLogout = window.doLogout; 
  window.doLogout = function() { if (navigator.vibrate) navigator.vibrate(20); Swal.fire({ title: 'Keluar Akun?', text: "Lu yakin mau keluar dari aplikasi?", icon: 'warning', showCancelButton: true, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Keluar', position: 'center', backdrop: 'rgba(0,0,0,0.6)' }).then((result) => { if (result.isConfirmed) { originalDoLogout(); } }); };

  const amountInput = document.getElementById('f-amount');
  if (amountInput) { amountInput.type = 'text'; amountInput.inputMode = 'numeric'; amountInput.addEventListener('blur', function() { let val = this.value.replace(/[^0-9+\-*/().]/g, ''); try { if (val && /[+\-*/]/.test(val)) { let cleanMath = val.replace(/\./g, ''); let result = new Function('return (' + cleanMath + ')')(); this.value = parseInt(result, 10).toLocaleString('id-ID'); Toast.fire({ icon: 'info', title: 'Auto-hitung berhasil!' }); } else if (val) { this.value = parseInt(val.replace(/\./g, ''), 10).toLocaleString('id-ID'); } } catch (e) { this.value = ''; } }); amountInput.addEventListener('input', function(e) { let raw = this.value.replace(/[^0-9+\-*/().]/g, ''); if (/[+\-*/()]/.test(raw)) { this.value = raw; } else { let nums = raw.replace(/\./g, ''); this.value = nums ? parseInt(nums, 10).toLocaleString('id-ID') : ''; } }); }

  window.setRealLocalTime = function() { const now = new Date(); now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); const dateInput = document.getElementById('f-date'); if (dateInput) dateInput.value = now.toISOString().slice(0,16); }; 
  window.setRealLocalTime(); 
  const originalCancelEdit = window.cancelEdit; window.cancelEdit = function() { originalCancelEdit(); window.setRealLocalTime(); };

  function applyBalanceColor() { document.querySelectorAll('.m-card.bal').forEach(card => { const el = card.querySelector('.m-val'); const textVal = el.innerText; if (textVal.includes('-')) { el.style.color = 'var(--red2)'; card.style.boxShadow = '0 0 15px rgba(248,113,113,0.15)'; card.style.borderColor = 'rgba(248,113,113,0.4)'; } else { card.style.boxShadow = 'none'; card.style.borderColor = 'var(--border)'; if (textVal !== '0 USC' && textVal !== 'NaN USC' && textVal !== '') { el.style.color = 'var(--gold)'; } else { el.style.color = 'var(--text)'; } } }); }
  const originalRefreshAll = window.refreshAll; window.refreshAll = function() { originalRefreshAll(); setTimeout(applyBalanceColor, 50); };
  const originalRenderSumGrid = window.renderSumGrid; window.renderSumGrid = function(el, arr, isDash) { originalRenderSumGrid(el, arr, isDash); setTimeout(applyBalanceColor, 50); };

  const originalSwitchPage = window.switchPage; window.switchPage = function(p) { if (amountInput && amountInput.value && amountInput.value !== '' && p !== 'dashboard' && p !== 'pengaturan') { Swal.fire({ title: 'Pindah Tab?', text: "Ada nominal yang belum lu simpan. Lanjut pindah?", icon: 'warning', showCancelButton: true, confirmButtonText: 'Tetap Pindah', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--border2)', position: 'center', backdrop: 'rgba(0,0,0,0.6)' }).then((result) => { if (result.isConfirmed) { originalSwitchPage(p); } }); } else { originalSwitchPage(p); } };

  document.addEventListener('dblclick', function(e) { const txCard = e.target.closest('.recent-item'); if (txCard) { const editBtn = txCard.querySelector('.edit-btn-recent'); if (editBtn) { if (navigator.vibrate) navigator.vibrate([15, 30]); editBtn.click(); } } });
  
  document.body.addEventListener('click', function(e) { if (e.target && e.target.classList.contains('cat-badge')) { const cat = e.target.innerText.replace(/[^a-zA-Z0-9\s]/g, '').trim(); const searchInput = document.getElementById('flt-search'); if (searchInput) { if (searchInput.value === cat) { searchInput.value = ''; } else { searchInput.value = cat; Toast.fire({ icon: 'info', title: `Filter: ${cat}` }); } window.switchPage('riwayat'); window.renderAll(); } } });

  const originalRenderAll = window.renderAll; window.renderAll = function() { originalRenderAll(); const searchInput = document.getElementById('flt-search'); if (searchInput && searchInput.value.trim() !== '') { const keyword = searchInput.value.trim().toLowerCase(); document.querySelectorAll('#all-body .ri-note').forEach(noteEl => { const originalHTML = noteEl.innerHTML; const regex = new RegExp(`(${keyword})`, "gi"); noteEl.innerHTML = originalHTML.replace(/(>([^<]+)<)/ig, function(match, p1, p2) { return ">" + p2.replace(regex, `<mark style="background:var(--gold); color:#000; border-radius:2px; padding:0 2px;">$1</mark>`) + "<"; }); }); } };
});

window.addEventListener('DOMContentLoaded', () => { setTimeout(() => { const splash = document.getElementById('splash-screen'); if (splash) { splash.classList.add('splash-exit'); setTimeout(() => { splash.style.display = 'none'; splash.remove(); }, 600); } }, 3000); });
</script>
</body>
</html>
