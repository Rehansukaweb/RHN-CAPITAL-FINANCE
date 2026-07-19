<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="color-scheme" content="dark light">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no">
<title>Arus Keuangan | RHN CAPITAL</title>

<meta name="theme-color" content="#050505">
<link rel="apple-touch-icon" href="RHN LOGO.jpg">

<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<!-- Library QRIS & SweetAlert2 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
  // FIX GLOBAL: Mencegah semua pop-up merusak scale/ngedet
  const OriginalSwal = window.Swal;
  window.Swal = OriginalSwal.mixin({
    heightAuto: false
  });

  window.addEventListener('DOMContentLoaded', function() {
    // --- FIX SPLASH SCREEN (DIPERCEPAT NO DELAY) ---
    setTimeout(function() {
      const splash = document.getElementById('splash-screen');
      if (splash) {
        splash.classList.add('splash-exit');
        setTimeout(() => { splash.style.display = 'none'; }, 400);
      }
    }, 800);

    // Zoom checker
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
   TEMA ORIGINAL (GELAP PEKAT)
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

/* Kunci lay out saat popup muncul agar tidak lompat */
body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {
  overflow: hidden !important;
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
  display: flex; align-items: center; justify-content: center; color: var(--gold); font-weight: 700; font-size: 14px; flex-shrink: 0;
  background: var(--bg3);
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
.bal .m-bar-fill { background: var(--border2); } .cnt .m-bar-fill { background: var(--blue); }

/* WALLETS */
.wallet-scroll { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 24px; }
.w-card { background: var(--bg3); border: 1px solid var(--border); border-radius: 12px; padding: 10px 8px; display: flex; flex-direction: column; justify-content: center; overflow: hidden; position: relative; transition: 0.2s; }
.w-card:hover { border-color: var(--gold); background: var(--bg2); }
.w-label { font-size: 8px; font-weight: 800; color: var(--text3); text-transform: uppercase; margin-bottom: 2px; letter-spacing: 0.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.w-val { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700; color: var(--text); white-space: nowrap; overflow-x: auto; scrollbar-width: none; width: 100%; display: block; letter-spacing: -0.5px; }
.w-val::-webkit-scrollbar { display: none; }
.w-val.min { color: var(--red2); }
.w-pct-badge { position: absolute; top: 8px; right: 8px; font-size: 8px; font-weight: 800; background: var(--border); padding: 2px 4px; border-radius: 4px; color: var(--text2); display: none; }

.sum-grid { display: grid; gap: 16px; margin-bottom: 24px; }

/* FORMS */
.card { background: var(--card); border-radius: var(--radius); padding: 32px; border: 1px solid var(--border); margin-bottom: 24px; }
.card-head { margin-bottom: 16px; }
.card-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.card-sub { font-size: 12px; color: var(--text3); }

.type-toggle { display: flex; background: var(--bg3); border-radius: 16px; padding: 4px; margin-bottom: 20px; }
.t-btn { flex: 1; padding: 12px; border: none; border-radius: 12px; font-size: 12px; font-weight: 700; cursor: pointer; background: transparent; color: var(--text3); transition: 0.2s; }
.t-btn.income.active { background: var(--bg2); color: var(--green2); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.t-btn.expense.active { background: var(--bg2); color: var(--text); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

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
input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
input[type="number"] { -moz-appearance: textfield; }

select.f-input-dark {
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23888899" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px; cursor: pointer;
}
select.f-input-dark option { background: var(--bg2); color: var(--text); font-weight: 500; padding: 12px; }

.form-row { margin-bottom: 16px; }
.form-label { font-size: 10px; font-weight: 800; color: var(--text3); margin-bottom: 8px; display: block; text-transform: uppercase; letter-spacing: 0.5px; }
.form-row textarea { height: 100px; resize: none; border-radius: 16px; }
.submit-btn { width: 100%; padding: 16px; background: var(--text); color: var(--bg); border: none; border-radius: 16px; font-size: 13px; font-weight: 800; cursor: pointer; transition: 0.2s; text-transform: uppercase; margin-top: 8px; }

/* HISTORY CARDS */
#recent-list { overflow-y: auto; scrollbar-width: none; }
#recent-list::-webkit-scrollbar { display: none; }

.list-wrap { padding: 8px 0; }
.list-wrap::-webkit-scrollbar { width: 6px; }
.list-wrap::-webkit-scrollbar-track { background: var(--bg); border-radius: 4px; }
.list-wrap::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 4px; }

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

/* KALKULATOR MATA UANG */
.calc-curr-item { display: flex; justify-content: space-between; align-items: center; padding: 16px; cursor: pointer; border-radius: 12px; transition: 0.2s; margin-bottom: 4px; border: 1px solid transparent; }
.calc-curr-item:hover { background: rgba(255,255,255,0.02); border-color: var(--border); }
.calc-curr-item.active { background: rgba(16, 185, 129, 0.05); border-color: var(--green2); }
.calc-curr-item.active .calc-amount { color: var(--green2); border-right: 2px solid var(--green2); padding-right: 6px; animation: blinkCursor 1s step-end infinite; }
@keyframes blinkCursor { 50% { border-color: transparent; } }

.calc-left { display: flex; align-items: center; gap: 12px; }
.calc-flag { display: flex; align-items: center; justify-content: center; }
.calc-code-wrap { display: flex; flex-direction: column; align-items: flex-start; }

.calc-select {
    background: transparent; color: var(--text); border: none; font-size: 16px; font-weight: 800;
    outline: none; cursor: pointer; font-family: 'Outfit', sans-serif; appearance: none; -webkit-appearance: none; padding-right: 18px;
    background-image: url('data:image/svg+xml;utf8,<svg fill="%23888899" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
    background-repeat: no-repeat; background-position: right center;
}
.calc-name { font-size: 10px; color: var(--text3); margin-top: 2px; padding-left: 2px; }
.calc-right { text-align: right; overflow: hidden; }
.calc-amount { font-family: 'JetBrains Mono', monospace; font-size: 20px; font-weight: 600; color: var(--text); margin-bottom: 2px; transition: color 0.2s; max-width: 55vw; overflow-x: auto; white-space: nowrap; scrollbar-width: none; }

.swap-btn { background: var(--bg2); border: 1px solid var(--border); color: var(--text3); width: 32px; height: 32px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 14px; transition: 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
.swap-btn:hover { background: var(--bg3); color: var(--text); border-color: var(--text3); }
.calc-keypad-wrap { background: #1A1C1F; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; padding: 24px 16px; margin-top: 8px; }
.calc-keypad { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 55px); gap: 12px; }
.calc-btn { background: transparent; border: none; color: var(--text); font-size: 22px; font-family: 'Outfit', sans-serif; cursor: pointer; border-radius: 12px; transition: 0.1s; display: flex; align-items: center; justify-content: center; }
.calc-btn:active { background: rgba(255,255,255,0.1); }
.calc-btn-ac { background: #23342B; color: #4ADE80; grid-column: 4; grid-row: 1 / 3; font-size: 20px; font-weight: 700; border-radius: 16px; }
.calc-btn-del { background: #23342B; color: #4ADE80; grid-column: 4; grid-row: 3 / 5; border-radius: 16px; }

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
  
  .wallet-scroll { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding-left: 16px; padding-right: 16px; margin: 8px 0 16px 0 !important; width: 100%; }
  .w-card { border-radius: 12px !important; padding: 6px !important; }

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
  .cat-badge, .wallet-badge { font-size: 7px; padding: 2px 4px; display: inline-block !important; }
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
  .wallet-scroll { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding-bottom: 0; }
  .w-card { min-width: 0; }
  
  .panel { display: flex; align-items: stretch; gap: 24px; }
  .panel > .card:nth-child(1) { width: 380px; flex-shrink: 0; margin-bottom: 0; }
  .panel > .card:nth-child(2) { flex-grow: 1; display: flex; flex-direction: column; margin-bottom: 0; }
  .panel > .card:nth-child(2) .list-wrap { flex-grow: 1; overflow-y: auto; height: 0; padding-right: 8px; }
  
  #recent-list { max-height: none !important; }
  
  .main, .header-area, .nav { max-width: 1200px; margin: 0 auto; }
  
  .status-row { justify-content: center; align-items: center; }
  .status-row .status-pill { flex: 0 1 auto !important; min-width: 180px; }
}

/* STYLING HUTANG PIUTANG & DOMPET */
.t-btn.debt.active { background: var(--bg2); color: var(--gold); border: 1px solid var(--gold); }
.t-btn.recv.active { background: var(--bg2); color: var(--blue); border: 1px solid var(--blue); }
.t-btn.transfer.active { background: var(--bg2); color: var(--text); border: 1px solid var(--text); }
.ri-icon.debt { color: var(--gold); background: rgba(251, 191, 36, 0.15); }
.ri-icon.recv { color: var(--blue); background: rgba(59, 130, 246, 0.15); }
.ri-icon.transfer { color: var(--text); background: var(--bg3); }
.ri-amount.debt { color: var(--gold); }
.ri-amount.recv { color: var(--blue); }
.ri-amount.transfer { color: var(--text); }
.wallet-badge { background: var(--bg3); color: var(--text2); font-size: 7px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; font-weight: 800; border: 1px solid var(--border2); text-transform: uppercase; display: inline-block; white-space: normal; word-break: break-word; line-height: 1.2; }

body.hide-usd .usd-pill, body.hide-usd .ri-usd, body.hide-usd .usd-wallet-val, body.hide-usd .usd-status-pill { display: none !important; }

/* ==========================================================================
   🌟 SPLASH SCREEN V8
   ========================================================================== */
#splash-screen {
  position: fixed; inset: 0; background: #050505; z-index: 999999;
  display: flex; align-items: center; justify-content: center;
}

#splash-screen.splash-exit {
  animation: splashSlideUpOut 0.4s cubic-bezier(0.8, 0, 0.2, 1) forwards;
}

@keyframes splashSlideUpOut {
  to { transform: translateY(-100%); opacity: 0; visibility: hidden; }
}

.splash-content {
  display: flex; flex-direction: column; align-items: center;
}

.splash-logo-minimal {
  width: 90px; height: 90px; border-radius: 24px;
  border: 2px solid var(--gold); padding: 4px;
  opacity: 0; transform: translateY(20px);
  animation: fadeUpItem 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.1s;
}

.splash-text-group {
  margin-top: 24px; text-align: center;
  opacity: 0; transform: translateY(20px);
  animation: fadeUpItem 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
}

.splash-title-minimal {
  font-size: 36px; font-weight: 800; color: #fff; font-family: 'Outfit', sans-serif;
  letter-spacing: 6px; margin-bottom: 8px;
}

.splash-subtitle-minimal {
  font-size: 14px; font-weight: 700; color: var(--gold); letter-spacing: 8px;
  text-transform: uppercase;
}

.splash-line-loader {
  width: 0%; height: 2px; background: var(--gold);
  margin-top: 32px; border-radius: 2px;
  animation: expandLine 0.8s cubic-bezier(0.7, 0, 0.3, 1) forwards 0.3s;
}

@keyframes fadeUpItem {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes expandLine {
  0% { width: 0%; opacity: 0; }
  10% { opacity: 1; }
  100% { width: 150px; opacity: 0; }
}
</style>
</head>
<body>

<div id="splash-screen">
  <div class="splash-content">
    <img src="RHN LOGO.jpg" alt="RHN Capital Logo" class="splash-logo-minimal">
    <div class="splash-text-group">
      <div class="splash-title-minimal">RHN CAPITAL</div>
      <div class="splash-subtitle-minimal">ARUS KEUANGAN</div>
    </div>
    <div class="splash-line-loader"></div>
  </div>
</div>

<div id="offline-banner" style="display:none; background:#F87171; color:#000; text-align:center; padding:10px; font-size:12px; font-weight:800; position:fixed; top:0; left:0; width:100%; z-index:100000; text-transform:uppercase; box-shadow:0 4px 12px rgba(0,0,0,0.5);">
  ⚠️ Koneksi Terputus - Mode Offline Aktif
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
    
    <button class="auth-btn btn-google" id="btn-google" onclick="doGoogleAuth()">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
      MASUK DENGAN GOOGLE
    </button>

    <button style="background:transparent; border:none; color:var(--text3); font-size:10px; margin-top:16px; cursor:pointer; font-weight:700; text-transform:uppercase; text-decoration:underline; width:100%;" onclick="doResetPassword()" id="btn-forgot">Lupa Sandi?</button>
    <div style="font-size: 10px; color: var(--gold); margin-top: 6px; text-align: center;">Cek folder SPAM jika email reset tidak masuk</div>
  </div>
</div>

<div id="pin-screen" onclick="document.getElementById('app-pin').focus()" ontouchstart="document.getElementById('app-pin').focus()" style="display:none; position: fixed; inset: 0; background: var(--bg); align-items: center; justify-content: center; z-index: 9999;">
  <div class="auth-box">
    <img src="RHN LOGO.jpg" alt="RHN Capital Logo">
    <div class="auth-title" id="pin-title">Masukkan PIN</div>
    <div class="auth-sub" id="pin-sub">Masukkan 6 digit PIN keamanan</div>
    <div id="pin-err" style="color:var(--red2);font-size:12px;margin-bottom:12px;display:none;"></div>
    <div class="form-row">
       <input type="password" id="app-pin" class="f-input-dark" style="text-align:center; letter-spacing: 12px; font-size: 24px; padding: 12px;" inputmode="numeric" maxlength="6" placeholder="••••••" autofocus>
    </div>
    <button class="auth-btn" id="pin-submit-btn" onclick="verifyPin()" style="display:none;">BUKA APLIKASI</button>
    
    <div style="display: flex; justify-content: space-between; gap: 16px; margin-top: 24px;">
      <button style="background:transparent; border:none; color:var(--text3); font-size:10px; cursor:pointer; font-weight:700; text-transform:uppercase; text-decoration:underline;" onclick="event.stopPropagation(); resetAccount()">Ganti Akun</button>
      <button style="background:transparent; border:none; color:var(--text3); font-size:10px; cursor:pointer; font-weight:700; text-transform:uppercase; text-decoration:underline;" onclick="event.stopPropagation(); resetPinFromLogin()">Reset PIN</button>
    </div>
  </div>
</div>

<div id="app-screen" style="display:none;">
<div class="header-area">
  
  <div class="logo-row">
    <div class="logo-img"><img src="RHN LOGO.jpg" alt="Logo"></div>
    <div class="logo-text">
      <div class="main-text">RHN CAPITAL</div>
      <div class="sub-text">ARUS KEUANGAN</div>
    </div>
  </div>

  <div class="top-ext-links">
    <button class="nav-ext-btn" onclick="window.location.href='latar.html'">📈 HALAMAN RHN CAPITAL ↗</button>
    <button class="nav-ext-btn" onclick="window.location.href='jurnal.html'">📈 JURNAL FOREX ↗</button>
    <button class="nav-ext-btn" onclick="window.location.href='aset.html'">📈 JURNAL ASET ↗</button>
    <button class="nav-ext-btn" onclick="window.location.href='data.html'">📈 DATA PRIBADI ↗</button>
  </div>
  
  <div class="status-row">
    <div class="status-pill usd-status-pill" style="padding: 6px 4px;">
      <span class="usd-val" id="usd-rate-val" style="font-size: 9px;">...</span>
    </div>
    
    <div class="status-pill" style="padding: 6px 4px; flex-direction: column; justify-content: center; gap: 2px; font-size: 8px; font-weight: 800; color: var(--gold);">
      <span style="line-height: 1; white-space: nowrap;">XAU <span id="xau-rate-val" style="color: var(--text); font-family: 'JetBrains Mono', monospace; margin-left: 2px;">...</span></span>
      <span id="xau-idr-oz" style="display: none;"></span>
      <span style="line-height: 1; white-space: nowrap;">GRAM <span id="xau-idr-gr" style="color: var(--text); font-family: 'JetBrains Mono', monospace; margin-left: 2px;">...</span></span>
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
        <div class="u-avatar" id="user-avatar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </div>
        <div class="u-name">
          <span id="user-name">Memuat...</span>
          <span id="user-transfer-info" style="font-size: 8px; font-weight: 800; color: var(--bg); background: var(--gold); padding: 2px 4px; border-radius: 4px; margin-left: 4px; flex-shrink: 0; display: none; letter-spacing: 0.5px;">Memuat...</span>
        </div>
      </div>
      <div class="user-action-wrap">
        <button class="setting-btn" onclick="switchPage('pengaturan')" title="Pengaturan">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
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
  <button class="nav-btn" id="nav-admin" onclick="switchPage('admin')" style="display:none; color: var(--gold);">👑 ADMIN</button>
</div>

<div class="main">

<div id="page-dashboard" class="page active">
  <div class="metrics" id="metric-cards"></div>
  <div id="wallet-balances" class="wallet-scroll"></div>
  
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <div class="card-title" style="margin:0; font-size:14px;">🎯 Target Tabungan</div>
      <button onclick="addSavingsGoal()" style="background:transparent; border:1px solid var(--gold); color:var(--gold); border-radius:8px; padding:4px 12px; font-size:10px; font-weight:800; cursor:pointer;">+ BUAT TARGET</button>
  </div>
  <div id="savings-goals-container" style="display:flex; flex-wrap:wrap; gap:12px; margin-bottom:24px;"></div>

  <div class="panel">
    <div class="card">
      <div class="card-head">
        <div class="card-title">Tambah Transaksi</div>
        <div class="card-sub">Catat pemasukan atau pengeluaran baru</div>
      </div>
      <div class="type-toggle" style="flex-wrap: wrap; gap: 8px;">
        <button class="t-btn income active" id="btn-inc" onclick="selType('income')" style="flex-basis: 31%;">+ Pemasukan</button>
        <button class="t-btn expense" id="btn-exp" onclick="selType('expense')" style="flex-basis: 31%;"> - Pengeluaran</button>
        <button class="t-btn transfer" id="btn-transfer" onclick="selType('transfer')" style="flex-basis: 31%;">🔄 Transfer</button>
        <button class="t-btn debt" id="btn-debt" onclick="selType('debt')" style="flex-basis: 48%;">💳 Hutang</button>
        <button class="t-btn recv" id="btn-recv" onclick="selType('recv')" style="flex-basis: 48%;">💸 Piutang</button>
      </div>
      
      <div class="form-row">
        <label class="form-label">JUMLAH (RP)</label>
        <input type="text" inputmode="numeric" id="f-amount" class="f-input-dark" placeholder="0" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');">
      </div>
      
      <div class="form-row" id="row-cat">
        <label class="form-label">KATEGORI</label>
        <select id="f-cat" class="f-input-dark"></select>
      </div>
      
      <div class="form-row">
        <label class="form-label" id="label-wallet">SUMBER DANA / DOMPET</label>
        <select id="f-wallet" class="f-input-dark">
          <option value="Kas Tunai">Kas Tunai</option>
          <option value="DANA">DANA</option>
          <option value="GoPay">GoPay</option>
          <option value="ShopeePay">ShopeePay</option>
          <option value="MT5 Trading">Saldo MT5 Trading</option>
          <option value="Bank">Bank</option>
          <option value="Hutang">Hutang (Tarik/Bayar)</option>
          <option value="Piutang">Piutang (Beri/Tarik)</option>
        </select>
      </div>
      
      <div class="form-row" id="row-wallet-to" style="display:none;">
        <label class="form-label">TUJUAN DANA / DOMPET</label>
        <select id="f-wallet-to" class="f-input-dark">
          <option value="Kas Tunai">Kas Tunai</option>
          <option value="DANA">DANA</option>
          <option value="GoPay">GoPay</option>
          <option value="ShopeePay">ShopeePay</option>
          <option value="MT5 Trading">Saldo MT5 Trading</option>
          <option value="Bank">Bank</option>
          <option value="Hutang">Hutang (Tarik/Bayar)</option>
          <option value="Piutang">Piutang (Beri/Tarik)</option>
        </select>
      </div>
      
      <div class="form-row">
        <label class="form-label">KETERANGAN</label>
        <textarea id="f-note" class="f-input-dark" placeholder="Catatan transaksi..."></textarea>
      </div>

      <div class="form-row" id="row-recurring">
        <label class="form-label">JADIKAN TRANSAKSI RUTIN?</label>
        <select id="f-recurring" class="f-input-dark" onchange="window.toggleRecTime()">
            <option value="">Tidak / Sekali Saja</option>
            <option value="daily">Rutin Tiap Hari</option>
            <option value="weekly">Rutin Tiap Minggu</option>
            <option value="monthly">Rutin Tiap Bulan</option>
        </select>
      </div>
      
      <div class="form-row" id="row-recurring-time" style="display:none;">
        <label class="form-label">JAM EKSEKUSI RUTIN</label>
        <input type="time" id="f-recurring-time" class="f-input-dark" value="09:00">
      </div>
      
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
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div>
        <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div>
      </div>
      <div style="height:250px"><canvas id="chartWeek"></canvas></div>
    </div>
    <div class="list-wrap" id="week-body"></div>
  </div>
</div>

<div id="page-bulanan" class="page">
  <div class="period-bar" id="month-sel"></div>
  <div class="sum-grid" id="month-sum"></div>
  <div class="card" style="padding-bottom:16px;">
    <div class="card-head"><div class="card-title">Laporan Bulanan</div></div>
    <div class="chart-wrap">
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div>
        <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div>
      </div>
      <div style="height:250px"><canvas id="chartMonth"></canvas></div>
    </div>
    
    <div id="budget-progress-container"></div>

    <div class="list-wrap" id="month-body" style="margin-top:24px;"></div>
  </div>
</div>

<div id="page-tahunan" class="page">
  <div class="period-bar" id="year-sel"></div>
  <div class="sum-grid" id="year-sum"></div>
  <div class="card">
    <div class="card-head"><div class="card-title">Laporan Tahunan</div></div>
    <div class="chart-wrap">
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div>
        <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div>
      </div>
      <div style="height:250px"><canvas id="chartYear"></canvas></div>
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
      <button class="export-btn" onclick="window.promptTransferAll()" style="background:var(--blue); color:#fff; margin-left:8px;">TRANSFER SEMUA 🚀</button>
      
      <button class="export-btn" id="btn-batch-del" onclick="execBatchDelete()" style="display:none; background:var(--red2); color:#fff; margin-left:8px;">🗑️ HAPUS TERPILIH</button>
      <button class="export-btn" onclick="toggleBatchMode()" style="background:var(--bg3); color:var(--text); margin-left:8px;">PILIH BANYAK ☑</button>
    </div>
    <div class="chart-wrap" style="margin-top: 16px;">
      <div class="chart-legend">
        <div class="leg-item"><div class="leg-dot" style="background:var(--green2)"></div>Pemasukan</div>
        <div class="leg-item"><div class="leg-dot" style="background:var(--red2)"></div>Pengeluaran</div>
      </div>
      <div style="height:250px"><canvas id="chartRiwayat"></canvas></div>
    </div>
    <div class="list-wrap" id="all-body"></div>
  </div>
</div>

<div id="page-admin" class="page">
  <div class="card">
    <div class="card-head">
      <div class="card-title" style="color: var(--gold);">👑 Aktivitas Seluruh User (Admin Only)</div>
      <div class="card-sub">Memantau transaksi dari semua pengguna di database.</div>
    </div>
    <div class="filter-bar">
      <button class="export-btn" onclick="loadAllUsersData()" style="background:var(--gold); color:#000;">🔄 MUAT DATA SEMUA USER</button>
    </div>
    <div class="list-wrap" id="admin-all-body">
      <div style="padding:40px;text-align:center;color:#888;font-size:12px;">Klik tombol muat data untuk memanggil database.</div>
    </div>
  </div>
</div>

<div id="page-pengaturan" class="page">
  
  <div class="set-group" style="padding: 0; overflow: hidden; border-color: var(--border2);">
    <div class="set-title" style="padding: 16px 16px 8px 16px; margin: 0; border-bottom: none; font-size: 13px;">
      ⬅️ Kalkulator Mata Uang Online <span style="margin-left: 6px; font-size: 9px; background: var(--green2); color: #000; padding: 2px 6px; border-radius: 4px; font-weight: 800;">LIVE REALTIME Ticker</span>
    </div>
    <div id="calc-display" style="display: flex; flex-direction: column; padding: 0 8px;"></div>
    <div style="font-size: 9px; color: var(--text3); text-align: center; padding: 4px 0 8px 0;">
      Diperbarui pada <span id="calc-last-update">...</span>
    </div>

    <div class="calc-keypad-wrap">
      <div class="calc-keypad">
        <button class="calc-btn" onclick="calcPress('7')">7</button>
        <button class="calc-btn" onclick="calcPress('8')">8</button>
        <button class="calc-btn" onclick="calcPress('9')">9</button>
        <button class="calc-btn calc-btn-ac" onclick="calcPress('AC')">AC</button>
        
        <button class="calc-btn" onclick="calcPress('4')">4</button>
        <button class="calc-btn" onclick="calcPress('5')">5</button>
        <button class="calc-btn" onclick="calcPress('6')">6</button>
        
        <button class="calc-btn" onclick="calcPress('1')">1</button>
        <button class="calc-btn" onclick="calcPress('2')">2</button>
        <button class="calc-btn" onclick="calcPress('3')">3</button>
        <button class="calc-btn calc-btn-del" onclick="calcPress('DEL')">⌫</button>
        
        <button class="calc-btn" onclick="calcPress('00')">00</button>
        <button class="calc-btn" onclick="calcPress('0')">0</button>
        <button class="calc-btn" onclick="calcPress('.')">,</button>
      </div>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title" onclick="window.promptInputQris()" style="cursor: default;" title="Ketuk untuk mengatur Data QRIS (Rahasia)">💳 GENERATOR QRIS PENGGUNA</div>

    <div style="font-size: 11px; color: var(--text3); margin-bottom: 16px;">Masukkan nominal tagihan untuk membuat QR Code pembayaran.</div>
    
    <div class="form-row">
      <label class="form-label">Nominal Tagihan (Rp)</label>
      <input type="text" inputmode="numeric" id="qris-nominal" class="f-input-dark" placeholder="Contoh: 150.000" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');">
    </div>
    
    <div class="form-row">
      <label class="form-label">Tipe Pencatatan</label>
      <select id="qris-tipe" class="f-input-dark">
        <option value="income">Pemasukan (Penjualan / Gaji dll)</option>
        <option value="transfer">Transfer (Titip Saldo via QRIS)</option>
      </select>
    </div>
    
    <div class="form-row">
      <label class="form-label">Dompet Tujuan (QRIS Cair Ke Mana?)</label>
      <select id="qris-wallet" class="f-input-dark">
        <option value="GoPay">GoPay</option>
        <option value="DANA">DANA</option>
        <option value="ShopeePay">ShopeePay</option>
        <option value="Bank">Bank</option>
      </select>
    </div>
    
    <div class="form-row">
      <label class="form-label">Keterangan</label>
      <input type="text" id="qris-note" class="f-input-dark" placeholder="Contoh: Bayar jajan / TF dari Budi">
    </div>
    
    <div class="form-row">
      <label class="form-label" style="display:flex; justify-content:space-between; align-items:center;">
        <span>WAKTU TRANSAKSI</span>
        <button type="button" onclick="document.getElementById('qris-date').value = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16)" style="background:transparent; border:none; color:var(--gold); font-size:10px; font-weight:800; font-family:'Outfit', sans-serif; cursor:pointer;">SEKARANG ⏱</button>
      </label>
      <input type="datetime-local" id="qris-date" class="f-input-dark">
    </div>
    
    <button class="set-action" style="width: 100%; margin-bottom: 16px; background: var(--blue); color: #fff; border: none; padding: 12px; border-radius: 12px;" onclick="window.generateQris()">BUAT QRIS DINAMIS</button>
    
    <div id="qris-qrcode-container" style="display: none; flex-direction: column; align-items: center; background: #ffffff; color: #000000; border-radius: 24px; padding: 24px 20px 0px 20px; margin-bottom: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.15); position: relative; overflow: hidden; width: 100%; max-width: 420px; margin-left: auto; margin-right: auto; box-sizing: border-box; border: 1px solid #e2e8f0; background-image: radial-gradient(#e2e8f0 1.2px, transparent 1.2px), radial-gradient(#e2e8f0 1.2px, #ffffff 1.2px); background-size: 16px 16px; background-position: 0 0, 8px 8px;">
      
      <div style="position: absolute; left: 0; top: 22%; width: 0; height: 0; border-top: 45px transparent solid; border-bottom: 45px transparent solid; border-left: 24px solid #d91b29; z-index: 2;"></div>
      
      <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%; margin-bottom: 20px; padding: 0 4px; z-index: 3;">
        <div style="display: flex; align-items: flex-start; gap: 4px;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg" alt="QRIS" style="height: 24px;">
          <div style="height: 18px; width: 4px; border-left: 2px solid #0f172a; border-bottom: 2px solid #0f172a; margin-top: 2px;"></div>
          <div style="display: flex; flex-direction: column; justify-content: center; margin-top: 2px;">
            <span style="font-family: 'Outfit', sans-serif; font-size: 7.5px; font-weight: 800; color: #0f172a; line-height: 1.1;">QR Code Standar</span>
            <span style="font-family: 'Outfit', sans-serif; font-size: 7.5px; font-weight: 800; color: #0f172a; line-height: 1.1;">Pembayaran Nasional</span>
          </div>
        </div>
        <div>
          <svg width="45" height="35" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2 L42 2 L35 11 Z" fill="#d91b29"/>
            <path d="M25 6 L45 7 L37 16 Z" fill="#d91b29"/>
            <path d="M28 11 L48 12 L40 21 Z" fill="#d91b29"/>
            <text x="2" y="30" font-family="'Outfit', sans-serif" font-size="12" font-weight="900" fill="#0c2340" letter-spacing="0.5">GPN</text>
          </svg>
        </div>
      </div>

      <div style="text-align: center; margin-bottom: 14px; width: 100%; z-index: 3; color: #000000;">
        <div style="font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.3px; margin-bottom: 2px; color: #000000;">RHN CAPITAL FINANCE</div>
        <div style="font-size: 11px; font-weight: 600; color: #334155; margin-bottom: 2px; letter-spacing: 0.2px;">NMID: ID1026489225353</div>
        <div style="font-size: 12px; font-weight: 700; color: #0f172a; margin-bottom: 2px;">A01</div>
      </div>

      <div style="background: #ffffff; padding: 10px; border-radius: 14px; border: 1px solid #e2e8f0; display: flex; justify-content: center; align-items: center; margin-bottom: 16px; z-index: 3;">
        <div id="qris-qrcode" style="padding: 2px; background: #ffffff;"></div>
      </div>

      <div style="text-align: center; margin-bottom: 20px; width: 100%; z-index: 3;">
        <div style="font-size: 10.5px; font-weight: 800; text-transform: uppercase; color: #0f172a; letter-spacing: 0.4px; margin-bottom: 1px;">SATU QRIS untuk semua</div>
        <div style="font-size: 8.5px; font-weight: 600; color: #64748B;">Cek aplikasi penyelenggara di: <span style="color: #0f172a; font-weight: 700;">www.aspi-qris.id</span></div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-end; width: 120%; margin-left: -10%; margin-right: -10%; background: transparent; position: relative; z-index: 3; padding-left: 10%; box-sizing: border-box;">
        
        <div style="text-align: left; padding-bottom: 10px; color: #475569; font-size: 9px; font-weight: 700; line-height: 1.4; font-family: 'Outfit', sans-serif;">
          <div>Dicetak oleh: 93600914</div>
          <div id="qris-print-version" style="color: #000; font-weight: 800; font-size: 10px; margin-top: 2px;">Waktu Cetak: -</div>
        </div>

        <div style="background: #d91b29; color: #ffffff; padding: 5px 20px 8px 30px; width: 56%; clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%); display: flex; flex-direction: column; align-items: flex-end; box-sizing: border-box;">
          <div style="font-size: 7.5px; font-weight: 800; text-transform: uppercase; margin-bottom: 5px; letter-spacing: 0.2px; width: 100%; text-align: right; padding-right: 4px;">Cara pembayaran QRIS</div>
          <div style="display: flex; justify-content: flex-end; gap: 8px; align-items: center; width: 100%;">
            
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1px;">
              <div style="background: #ffffff; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#d91b29" stroke-width="3"><rect x="5" y="2" width="14" height="20" rx="2"></rect><circle cx="12" cy="18" r="1"></circle></svg>
              </div>
              <span style="font-size: 5px; font-weight: 800; white-space: nowrap;">Buka Aplikasi</span>
              <span style="font-size: 4.5px; font-weight: 500; white-space: nowrap; margin-top: -2px; opacity: 0.85;">Berlogo QRIS</span>
            </div>
            
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1px;">
              <div style="background: #ffffff; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#d91b29" stroke-width="3"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              </div>
              <span style="font-size: 5px; font-weight: 800; white-space: nowrap;">Scan dan cek</span>
            </div>
            
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1px;">
              <div style="background: #ffffff; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center;">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#d91b29" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span style="font-size: 5px; font-weight: 800; white-space: nowrap;">Bayar</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
    <button id="btn-qris-konfirmasi" class="set-action" style="width: 100%; display: none; background: var(--green2); color: #000; border: none; padding: 12px; border-radius: 12px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);" onclick="window.konfirmasiPembayaranQris()">✅ KONFIRMASI SUDAH BAYAR</button>
  </div>

  <div class="set-group">
    <div class="set-title">🗂️ KUSTOMISASI KATEGORI</div>
    <div class="set-item">
      <div>
        <div class="set-label">Atur Kategori Transaksi</div>
        <div class="set-sub">Tambah atau hapus kategori bawaan sesuai kebutuhan</div>
      </div>
      <button class="set-action" onclick="manageCategories()">ATUR KATEGORI</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">📊 ANGGARAN BULANAN (BUDGETING)</div>
    <div class="set-item">
        <div>
            <div class="set-label">Target Pengeluaran</div>
            <div class="set-sub">Atur batas maksimal pengeluaran per kategori</div>
        </div>
        <button class="set-action" onclick="showBudgetSetup()">ATUR BUDGET</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">⏱️ MANAJEMEN TRANSAKSI RUTIN</div>
    <div class="set-item">
      <div>
        <div class="set-label">Atur Jadwal Otomatis</div>
        <div class="set-sub">Lihat dan matikan transaksi yang berulang otomatis</div>
      </div>
      <button class="set-action" style="background:var(--blue); color:#fff; border:none;" onclick="manageRecurring()">LIHAT JADWAL</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">🗑️ TEMPAT SAMPAH & RECOVERY</div>
    <div class="set-item">
        <div>
            <div class="set-label">Folder Sampah (Recycle Bin)</div>
            <div class="set-sub">Pulihkan atau hapus permanen data yang terhapus</div>
        </div>
        <button class="set-action" onclick="showRecycleBin()">BUKA SAMPAH</button>
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
    <div class="set-title">⚡ PREFERENSI BAWAAN FORM</div>
    <div style="font-size: 11px; color: var(--text3); margin-bottom: 16px;">Pengaturan ini otomatis terpilih di formulir tambah transaksi setiap aplikasi dibuka.</div>
    <div class="set-item">
      <div><div class="set-label">Tipe Transaksi</div></div>
      <select id="pref-type" class="set-select" onchange="updatePrefCategories()">
        <option value="expense">Pengeluaran</option>
        <option value="income">Pemasukan</option>
      </select>
    </div>
    <div class="set-item">
      <div><div class="set-label">Kategori Rutin</div></div>
      <select id="pref-cat" class="set-select"></select>
    </div>
    <div class="set-item">
      <div><div class="set-label">Dompet Utama</div></div>
      <select id="pref-wallet" class="set-select">
        <option value="Kas Tunai">Kas Tunai</option>
        <option value="DANA">DANA</option>
        <option value="GoPay">GoPay</option>
        <option value="ShopeePay">ShopeePay</option>
        <option value="MT5 Trading">Saldo MT5 Trading</option>
        <option value="Bank">Bank</option>
      </select>
    </div>
    <div class="set-item" style="justify-content: flex-end; padding-top: 16px;">
      <button class="set-action" style="background:var(--gold); color:#000; border:none;" onclick="savePreferences()">SIMPAN PREFERENSI</button>
    </div>
  </div>

  <div class="set-group">
    <div class="set-title">⚙️ 7 FITUR FINANSIAL & SISTEM TAMBAHAN</div>
    <div class="set-item">
      <div>
        <div class="set-label">Kunci Otomatis (Auto-Lock)</div>
        <div class="set-sub">Kunci otomatis jika didiamkan 30 detik</div>
      </div>
      <select id="ext_autolock" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Tidak Aktif</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">1. Sembunyikan Dompet Bersaldo Nol</div>
        <div class="set-sub">Hilangkan dompet dari layar jika uangnya kosong</div>
      </div>
      <select id="ext_hidezero" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">2. Tampilkan Persentase Aset (%)</div>
        <div class="set-sub">Tampilkan porsi persentase saldo di tiap dompet</div>
      </div>
      <select id="ext_walletpct" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">3. Format Angka Ringkas (Dashboard)</div>
        <div class="set-sub">Ubah format panjang Rp 1.500.000 menjadi 1,5 Jt</div>
      </div>
      <select id="ext_shortnum" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">4. Peringatan Saldo Kritis</div>
        <div class="set-sub">Efek merah menyala bila saldo keseluruhan turun di bawah 50rb</div>
      </div>
      <select id="ext_warnbalance" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">5. Mode Hemat Harian (Budget Alert)</div>
        <div class="set-sub">Indikator merah jika pengeluaran harian melebihi Rp 100.000</div>
      </div>
      <select id="ext_budget" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">6. Sorotan Label Hutang & Piutang</div>
        <div class="set-sub">Tampilkan label "Belum Lunas" secara tegas di riwayat</div>
      </div>
      <select id="ext_debtbadge" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
    <div class="set-item">
      <div>
        <div class="set-label">7. Anti Intip Saldo</div>
        <div class="set-sub">Sembunyikan/blur nominal saldo di seluruh aplikasi</div>
      </div>
      <select id="ext_antiintip" class="set-select" onchange="saveExtraPrefs()">
        <option value="off">Mati</option>
        <option value="on">Aktif</option>
      </select>
    </div>
  </div>
  
  <div class="set-group">
    <div class="set-title">💾 MANAJEMEN DATA</div>
    <div class="set-item">
      <div>
        <div class="set-label">Unduh Laporan CSV</div>
        <div class="set-sub">Ekspor semua riwayat transaksi untuk di Excel</div>
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
        <div class="set-sub">RHN Capital OS v4.7 (Transfer Perantara)</div>
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
    Platform Arus Keuangan yang aman, cepat, dan terenkripsi.<br>
    Didesain khusus untuk memudahkan pengelolaan aset dan transaksi Anda secara presisi.
</div>

</div></div>

<script>
  const lastUid = localStorage.getItem('last_uid_rhn');
  const localPin = localStorage.getItem('local_pin_rhn');
  window.appUnlocked = false; 

  window.forceFocusPin = () => {
      // FIX: Tahan keyboard kalau animasi splash screen masih jalan
      const splash = document.getElementById('splash-screen');
      if (splash && splash.style.display !== 'none' && !splash.classList.contains('splash-exit')) return;

      const pinEl = document.getElementById('app-pin');
      if (pinEl && document.getElementById('pin-screen').style.display !== 'none') {
          pinEl.focus();
          try { pinEl.click(); } catch(e){}
      }
  };

  if (lastUid) {
     document.addEventListener("DOMContentLoaded", () => {
         document.getElementById('auth-screen').style.display = 'none';
         document.getElementById('pin-screen').style.display = 'flex';
         document.getElementById('app-pin').style.display = 'block';
         
         if (localPin) {
             document.getElementById('pin-title').textContent = 'Masukkan PIN';
             document.getElementById('pin-sub').textContent = 'Keamanan Aktif';
             window.pinMode = 'verify_local';
             
             window.pinFocusInterval = setInterval(window.forceFocusPin, 200);
         } else {
             document.getElementById('pin-title').textContent = 'Memuat Keamanan...';
             document.getElementById('pin-sub').textContent = 'Sinkronisasi dengan server';
             window.pinMode = 'verify';
         }
     });
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

window.toggleRecTime = function() {
    const val = document.getElementById('f-recurring').value;
    const rt = document.getElementById('row-recurring-time');
    if(rt) rt.style.display = val ? 'block' : 'none';
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
  signOut, onAuthStateChanged, sendPasswordResetEmail, 
  GoogleAuthProvider, signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { 
  initializeFirestore, persistentLocalCache, collection, doc, 
  addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy, 
  serverTimestamp, getDoc, setDoc, collectionGroup, getDocs
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

const QRIS_STATIS_ASLI = "00020101021126610014COM.GO-JEK.WWW01189360091430598840940210G0598840940303UMI51440014ID.CO.QRIS.WWW0215ID10264892253530303UMI5204899953033605802ID5919RHN CAPITAL FINANCE6005DEPOK61051645162070703A016304A525";
window.userQrisBase = "";

function crc16(str) {
    let crc = 0xFFFF;
    for (let c = 0; c < str.length; c++) {
        crc ^= str.charCodeAt(c) << 8;
        for (let i = 0; i < 8; i++) {
            if (crc & 0x8000) crc = (crc << 1) ^ 0x1021;
            else crc = crc << 1;
        }
    }
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}

window.promptInputQris = async function() {
    const { value: qrisString } = await Swal.fire({
        title: 'Input Data QRIS Statis',
        input: 'textarea',
        inputPlaceholder: 'Tempel teks payload kode QRIS lu di sini...',
        inputValue: window.userQrisBase || "",
        background: 'var(--card)', color: 'var(--text)',
        showCancelButton: true,
        confirmButtonColor: 'var(--gold)',
        confirmButtonText: 'SIMPAN',
    });

    if (qrisString) {
        window.userQrisBase = qrisString.trim();
        if(currentUser) {
            try {
                await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'preferences'), {
                    userQrisBase: window.userQrisBase
                }, { merge: true });
                Swal.fire({icon: 'success', title: 'Data QRIS Tersimpan!', background: 'var(--card)', color: 'var(--text)', timer: 800, showConfirmButton: false});
            } catch(e) {
                Swal.fire({icon: 'error', title: 'Gagal Menyimpan', text: e.message, background: 'var(--card)', color: 'var(--text)'});
            }
        }
    }
};

window.generateQris = function() {
    const nominalRaw = document.getElementById("qris-nominal").value;
    const nominalInput = nominalRaw.replace(/\./g, '');
    if (!nominalInput || parseInt(nominalInput) <= 0) {
        Swal.fire({ icon: 'warning', title: 'Nominal Kosong', text: 'Masukkan nominal tagihan!', background: 'var(--card)', color: 'var(--text)' });
        return;
    }

    const currentBase = window.userQrisBase || QRIS_STATIS_ASLI;
    if(currentBase.length < 20 || !currentBase.startsWith("00")) {
        Swal.fire({ icon: 'error', title: 'Format QRIS Invalid', text: 'String QRIS terdeteksi rusak atau bukan standar merchant resmi.', background: 'var(--card)', color: 'var(--text)' });
        return;
    }

    let qrisTanpaCrc = currentBase.slice(0, -4);
    let qrisBase = qrisTanpaCrc.slice(0, -4);

    let nomStr = parseInt(nominalInput).toString();
    let nomLen = nomStr.length.toString().padStart(2, '0');
    let tagNominal = "54" + nomLen + nomStr;

    let qrisBaruTanpaCrc = qrisBase + tagNominal + "6304";
    let crcBaru = crc16(qrisBaruTanpaCrc);
    let qrisDinamis = qrisBaruTanpaCrc + crcBaru;

    const qrContainer = document.getElementById("qris-qrcode-container");
    const qrElement = document.getElementById("qris-qrcode");
    
    const now = new Date();
    const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][now.getDay()];
    const tanggal = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
    const waktu = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second:'2-digit' });
    document.getElementById("qris-print-version").innerText = `Waktu Cetak: ${namaHari}, ${tanggal} | ${waktu} WIB`;

    qrElement.innerHTML = ""; 
    qrContainer.style.display = "flex"; 

    new QRCode(qrElement, {
        text: qrisDinamis, width: 220, height: 220,
        colorDark : "#000000", colorLight : "#ffffff", correctLevel : QRCode.CorrectLevel.M
    });

    document.getElementById("btn-qris-konfirmasi").style.display = "block";
};

window.konfirmasiPembayaranQris = async function() {
    const nominalRaw = document.getElementById("qris-nominal").value;
    const nominalInput = nominalRaw.replace(/\./g, '');
    if (!nominalInput) return Swal.fire({ icon: 'warning', title: 'Nominal Kosong', text: 'Tolong isi nominalnya bro.', background: 'var(--card)', color: 'var(--text)' });
    if (!currentUser) return;

    const qrisTipe = document.getElementById("qris-tipe").value;
    const qrisWallet = document.getElementById("qris-wallet").value;
    const qrisNote = document.getElementById("qris-note").value.trim() || 'Pembayaran QRIS';
    const qrisDate = document.getElementById("qris-date").value || nowISO(); 

    const btn = document.getElementById("btn-qris-konfirmasi");
    btn.innerText = "MENYIMPAN..."; btn.disabled = true;

    try {
        let payload = {
            type: qrisTipe,
            amount: parseFloat(nominalInput),
            note: qrisNote,
            date: qrisDate, 
            ownerEmail: currentUser.email,
            createdAt: serverTimestamp(),
            isDeleted: false
        };

        if (qrisTipe === 'transfer') {
            payload.category = 'Transfer Antar Dompet';
            payload.wallet = 'Kas Tunai';
            payload.walletTo = qrisWallet;
        } else {
            payload.category = 'Pemasukan QRIS';
            payload.wallet = qrisWallet;
        }

        await addDoc(collection(db, 'users', currentUser.uid, 'transactions'), payload);

        Swal.fire({
            icon: 'success',
            title: 'Terkonfirmasi!',
            text: 'Data Rp ' + parseInt(nominalInput).toLocaleString('id-ID') + ' telah dicatat masuk ke ' + qrisWallet,
            background: 'var(--card)', color: 'var(--text)',
            confirmButtonColor: 'var(--green2)',
            timer: 1500
        }).then(() => {
            document.getElementById("qris-nominal").value = "";
            document.getElementById("qris-note").value = "";
            window.setRealLocalTime();
            document.getElementById("qris-qrcode-container").style.display = "none";
            btn.style.display = "none";
            btn.innerText = "✅ KONFIRMASI SUDAH BAYAR";
            btn.disabled = false;
        });
    } catch(e) {
        Swal.fire({ icon: 'error', title: 'Gagal Menyimpan', text: e.message, background: 'var(--card)', color: 'var(--text)' });
        btn.innerText = "✅ KONFIRMASI SUDAH BAYAR";
        btn.disabled = false;
    }
};

window.defaultCATS = { 
  income: ['Gaji', 'Hasil Trading', 'Bonus / THR', 'Penjualan', 'Pendapatan Lainnya', 'Pemberian', 'Investasi', 'Ongkos Harian', 'Dividen', 'Profit', 'Transfer Masuk', 'Lainnya'], 
  expense: ['Makan & Minum', 'Transportasi', 'Tagihan', 'Belanja Bulanan', 'Cicilan', 'Hiburan / Nongkrong', 'Sedekah / Donasi', 'Jajan', 'Pembelian Aset(Investasi)', 'Infak', 'Kas', 'Utilitas', 'Loss', 'Pengeluaran Lainnya', 'Lainnya'],
  debt: ['Pinjaman Bank', 'Pinjaman Pribadi', 'Titipan Dana', 'Lainnya'],
  recv: ['Dipinjam Teman', 'Kasbon Karyawan', 'Lainnya'] 
};
window.userCats = JSON.parse(JSON.stringify(window.defaultCATS));
window.savingsGoals = [];

let txs = [], deletedTxs = [], curType = 'income', activePage = 'dashboard', charts = {};
let currentUSDRate = 16000, currentUser = null, unsubListener = null, authMode = 'login';
let editId = null;
let batchMode = false;
window.userBudgets = {};

let appPrefs = { type: 'income', category: '', wallet: 'Kas Tunai' };
let extraPrefs = { 
    ext_autolock: 'off', ext_warnbalance: 'off', ext_shortnum: 'off', ext_budget: 'off', 
    ext_hidezero: 'off', ext_walletpct: 'off', ext_debtbadge: 'off', ext_antiintip: 'off'
};

window.initTransferAccount = async function() {
    if (!currentUser) return;
    const infoEl = document.getElementById('user-transfer-info');
    
    try {
        const trRef = doc(db, 'users', currentUser.uid, 'settings', 'transfer');
        const trSnap = await getDoc(trRef);
        let tCode;

        if (!trSnap.exists() || !trSnap.data().transferCode || trSnap.data().transferCode.length !== 3) {
            tCode = Math.floor(100 + Math.random() * 900).toString();
            if (infoEl) {
                infoEl.textContent = tCode;
                infoEl.style.display = 'inline-block';
            }
            await setDoc(trRef, { transferCode: tCode }, { merge: true });
            await setDoc(doc(db, 'transfer_registry', tCode), { uid: currentUser.uid }); 
        } else {
            tCode = trSnap.data().transferCode;
            if (infoEl) {
                infoEl.textContent = tCode;
                infoEl.style.display = 'inline-block';
            }
        }
    } catch (err) {
        if (infoEl) {
            infoEl.textContent = `⚠️ GAGAL MEMUAT KODE`;
            infoEl.style.background = 'var(--red2)';
            infoEl.style.color = '#fff';
            infoEl.style.display = 'inline-block';
        }
    }
};

window.promptTransfer = async function(txId) {
    if (!currentUser) return;
    const t = txs.find(x => x.id === txId);
    if (!t) return;

    const { value: targetCode } = await Swal.fire({
        title: 'Transfer 1 Transaksi',
        html: '<input id="swal-tcode" class="swal2-input" placeholder="Masukkan 3 Angka" maxlength="3" type="number" style="text-align:center; font-family:Outfit; font-weight:800; font-size:18px; letter-spacing:2px; max-width:100%; width:80%; margin:0 auto; display:block; box-sizing:border-box;">',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'TRANSFER SEKARANG',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--blue)', cancelButtonColor: 'var(--bg3)',
        preConfirm: () => { return document.getElementById('swal-tcode').value }
    });

    if (targetCode) {
        if (targetCode.length !== 3) return Swal.fire({icon:'error', title:'Harus 3 Angka!', background:'var(--card)', color:'var(--text)'});
        window.executeTransfer([t], targetCode, true);
    }
};

window.promptTransferAll = async function() {
    if (!currentUser) return;
    if (txs.length === 0) return Swal.fire({icon:'info', title:'Data Kosong!', background:'var(--card)', color:'var(--text)'});

    const { value: targetCode } = await Swal.fire({
        title: 'Transfer Semua Riwayat',
        html: '<p style="font-size:12px; color:var(--text3); margin-bottom:16px;">Semua data akan dipindah ke akun tujuan dan dihapus dari akun ini.</p>' +
              '<input id="swal-tcode-all" class="swal2-input" placeholder="Masukkan 3 Angka" maxlength="3" type="number" style="text-align:center; font-family:Outfit; font-weight:800; font-size:18px; letter-spacing:2px; max-width:100%; width:80%; margin:0 auto; display:block; box-sizing:border-box;">',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'TRANSFER SEMUA',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--blue)', cancelButtonColor: 'var(--bg3)',
        preConfirm: () => { return document.getElementById('swal-tcode-all').value }
    });

    if (targetCode) {
        if (targetCode.length !== 3) return Swal.fire({icon:'error', title:'Harus 3 Angka!', background:'var(--card)', color:'var(--text)'});
        window.executeTransfer(txs, targetCode, false);
    }
};

window.executeTransfer = async function(txList, targetCode, isSingle) {
    Swal.fire({title: 'Memproses...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});

    try {
        const registryRef = doc(db, 'transfer_registry', targetCode);
        const registrySnap = await getDoc(registryRef);

        if (!registrySnap.exists()) {
            return Swal.fire({icon:'error', title:'Transfer Gagal', text:'Kode 3 Angka tidak ditemukan! Pastikan akun tujuan buka aplikasinya.', background:'var(--card)', color:'var(--text)'});
        }
        const targetUid = registrySnap.data().uid;
        if (targetUid === currentUser.uid) {
            return Swal.fire({icon:'warning', title:'Gagal', text:'Nggak bisa transfer ke akun lu sendiri bro!', background:'var(--card)', color:'var(--text)'});
        }
        for (let t of txList) {
            let payload = { ...t };
            delete payload.id; 
            payload.createdAt = serverTimestamp(); 
            await addDoc(collection(db, 'users', targetUid, 'transactions'), payload);
            await deleteDoc(doc(db, 'users', currentUser.uid, 'transactions', t.id));
        }
        Swal.fire({icon:'success', title:'Transfer Berhasil!', text: isSingle ? '1 transaksi dipindahkan.' : `${txList.length} transaksi dipindahkan.`, background:'var(--card)', color:'var(--text)'});
    } catch(e) {
        Swal.fire({icon:'error', title:'Error Sistem', text: "Gagal: " + e.message, background:'var(--card)', color:'var(--text)'});
    }
};

const fmtFull = n => {
    if (Math.abs(n) >= 1000000000) return 'Rp ' + (n / 1000000000).toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 3 }) + ' M';
    return 'Rp ' + Math.round(n).toLocaleString('id-ID');
};

const fmt = (n, isDash = false) => {
    if (isDash && typeof extraPrefs !== 'undefined' && extraPrefs.ext_shortnum === 'on') {
        if (Math.abs(n) >= 1000000000) return 'Rp ' + (n/1000000000).toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 3 }) + ' M';
        if (Math.abs(n) >= 1000000) return 'Rp ' + (n/1000).toFixed(2).replace('.',',') + ' Jt';
        if (Math.abs(n) >= 10000) return 'Rp ' + (n/1000).toFixed(1).replace('.',',') + ' Rb';
    }
    return fmtFull(n);
};

const fmtDate = dt => new Date(dt).toLocaleDateString('id-ID',{day:'2-digit',month:'short'});
const fmtTime = dt => new Date(dt).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
const nowISO = () => new Date().toISOString().slice(0,16);
const kursIndo = new Intl.NumberFormat('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const getUSD = n => '$' + (n / currentUSDRate).toFixed(2);

function initLiveCurrencies() {
  const socket = new WebSocket('wss://stream.binance.com:9443/stream?streams=usdtidr@ticker/eurusdt@ticker/gbpusdt@ticker/audusdt@ticker/brlusdt@ticker/tryusdt@ticker');
  socket.addEventListener('message', e => { 
      const msg = JSON.parse(e.data); 
      const stream = msg.stream; 
      const price = parseFloat(msg.data.c); 
      if (!price) return;
      if (stream === 'usdtidr@ticker') { 
          if (price !== currentUSDRate) { 
              currentUSDRate = price; 
              const usdEl = document.getElementById('usd-rate-val'); 
              if (usdEl) usdEl.textContent = kursIndo.format(currentUSDRate); 
              if (calcRates) { 
                  calcRates['IDR'] = currentUSDRate; 
                  Object.keys(calcRates).forEach(code => { 
                      if (code !== 'USD' && code !== 'IDR' && code !== 'EUR' && code !== 'GBP' && code !== 'AUD' && code !== 'TRY' && code !== 'BRL') { 
                          const noise = 1 + (Math.random() - 0.5) * 0.00004; 
                          calcRates[code] *= noise; 
                      } 
                  }); 
              } 
              refreshAll(); 
          }
      } else if (stream === 'eurusdt@ticker') { if (calcRates) calcRates['EUR'] = 1 / price; window.renderCalcDisplay();
      } else if (stream === 'gbpusdt@ticker') { if (calcRates) calcRates['GBP'] = 1 / price; window.renderCalcDisplay();
      } else if (stream === 'audusdt@ticker') { if (calcRates) calcRates['AUD'] = 1 / price; window.renderCalcDisplay();
      } else if (stream === 'brlusdt@ticker') { if (calcRates) calcRates['BRL'] = 1 / price; window.renderCalcDisplay();
      } else if (stream === 'tryusdt@ticker') { if (calcRates) calcRates['TRY'] = 1 / price; window.renderCalcDisplay(); }
  });
  socket.addEventListener('close', () => setTimeout(initLiveCurrencies, 3000));
}

async function fetchUSDRate() { 
  try { 
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); 
      currentUSDRate = (await res.json()).rates.IDR; 
      document.getElementById('usd-rate-val').textContent = kursIndo.format(currentUSDRate); 
      refreshAll(); 
  } catch (e) { document.getElementById('usd-rate-val').textContent = "Offline"; } 
}
fetchUSDRate().then(initLiveCurrencies); 
setInterval(fetchUSDRate, 300000); 

function initLiveXAU() {
  const socketXAU = new WebSocket('wss://stream.binance.com:9443/ws/paxgusdt@ticker');
  socketXAU.addEventListener('message', e => { 
      const newPrice = parseFloat(JSON.parse(e.data).c); 
      if (newPrice) { 
          const xauRate = document.getElementById('xau-rate-val'); 
          if (xauRate) xauRate.textContent = '$' + newPrice.toFixed(2); 
          if (currentUSDRate > 0) { 
              const idrPriceOz = newPrice * currentUSDRate; 
              const idrPriceGram = idrPriceOz / 31.1034768; 
              const ozEl = document.getElementById('xau-idr-oz'); 
              if (ozEl) ozEl.textContent = `Rp ` + kursIndo.format(idrPriceOz); 
              const grEl = document.getElementById('xau-idr-gr'); 
              if (grEl) grEl.textContent = `Rp ` + kursIndo.format(idrPriceGram); 
          } 
      } 
  });
  socketXAU.addEventListener('close', () => setTimeout(initLiveXAU, 3000));
}
initLiveXAU();

let calcRates = null, calcFromCode = 'USD', calcToCode = 'IDR', calcActiveRow = 'from', calcInputVal = '100';

const calcCurrencies = [ 
  { code: 'IDR', name: 'Rupiah Indonesia', flag: '🇮🇩' }, { code: 'USD', name: 'Dolar Amerika', flag: '🇺🇸' }, 
  { code: 'AED', name: 'Dirham Uni Emirat Arab', flag: '🇦🇪' }, { code: 'AUD', name: 'Dolar Australia', flag: '🇦🇺' }, 
  { code: 'BRL', name: 'Real Brasil', flag: '🇧🇷' }, { code: 'CAD', name: 'Dolar Kanada', flag: '🇨🇦' }, 
  { code: 'CHF', name: 'Franc Swiss', flag: '🇨🇭' }, { code: 'CNY', name: 'Yuan Tiongkok', flag: '🇨🇳' }, 
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' }, { code: 'GBP', name: 'Poundsterling Inggris', flag: '🇬🇧' }, 
  { code: 'HKD', name: 'Dolar Hong Kong', flag: '🇭🇰' }, { code: 'INR', name: 'Rupee India', flag: '🇮🇳' }, 
  { code: 'JPY', name: 'Yen Jepang', flag: '🇯🇵' }, { code: 'KRW', name: 'Won Korea Selatan', flag: '🇰🇷' }, 
  { code: 'MYR', name: 'Ringgit Malaysia', flag: '🇲🇾' }, { code: 'NZD', name: 'Dolar Selandia Baru', flag: '🇳🇿' }, 
  { code: 'PHP', name: 'Peso Filipina', flag: '🇵🇭' }, { code: 'RUB', name: 'Rubel Rusia', flag: '🇷🇺' }, 
  { code: 'SAR', name: 'Riyal Arab Saudi', flag: '🇸🇦' }, { code: 'SEK', name: 'Krona Swedia', flag: '🇸🇪' }, 
  { code: 'SGD', name: 'Dolar Singapura', flag: '🇸🇬' }, { code: 'THB', name: 'Baht Thailand', flag: '🇹🇭' }, 
  { code: 'TRY', name: 'Lira Turki', flag: '🇹🇷' }, { code: 'ZAR', name: 'Rand Afrika Selatan', flag: '🇿🇦' } 
];

async function initCalc() { 
  try { 
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); 
      calcRates = (await response.json()).rates; 
      const now = new Date(); 
      document.getElementById('calc-last-update').textContent = `${now.toLocaleDateString('id-ID', { year:'numeric', month:'2-digit', day:'2-digit' }).replace(/\//g, '-')} ${now.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit' })}`; 
      window.renderCalcDisplay(); 
  } catch (e) { document.getElementById('calc-last-update').textContent = "Offline / Gagal Memuat"; } 
}

window.setCalcActiveRow = function(row) { 
  if (calcActiveRow === row) return; 
  if (navigator.vibrate) navigator.vibrate(15); 
  let currentNum = parseFloat(calcInputVal || '0'); 
  let baseInUSD = currentNum / (calcActiveRow === 'from' ? calcRates[calcFromCode] : calcRates[calcToCode]); 
  let targetVal = baseInUSD * (row === 'from' ? calcRates[calcFromCode] : calcRates[calcToCode]); 
  let newValStr = targetVal.toString(); 
  if(newValStr.includes('.')) newValStr = targetVal.toFixed(2).replace(/\.?0+$/, ''); 
  calcInputVal = newValStr; 
  calcActiveRow = row; 
  window.renderCalcDisplay(); 
}

window.changeCalcCurr = function(row, newCode) { 
  if (row === 'from') calcFromCode = newCode; 
  if (row === 'to') calcToCode = newCode; 
  window.renderCalcDisplay(); 
}

window.swapCalcCurr = function() { 
  if (navigator.vibrate) navigator.vibrate(15); 
  let tempCode = calcFromCode; calcFromCode = calcToCode; calcToCode = tempCode; 
  calcActiveRow = calcActiveRow === 'from' ? 'to' : 'from'; 
  window.renderCalcDisplay(); 
}

window.openCurrencySelector = function(rId) { 
  let html = '<div style="display:flex; flex-direction:column; gap:8px; max-height:60vh; overflow-y:auto; padding-bottom:12px; scrollbar-width:none;">'; 
  calcCurrencies.forEach(c => { 
      let isActive = (rId === 'from' && calcFromCode === c.code) || (rId === 'to' && calcToCode === c.code); 
      html += `<button onclick="changeCalcCurr('${rId}', '${c.code}'); Swal.close();" style="background:${isActive?'var(--bg3)':'var(--bg2)'}; color:var(--text); border:1px solid ${isActive?'var(--gold)':'var(--border)'}; padding:14px; border-radius:12px; font-family:'Outfit'; text-align:left; font-size:14px; font-weight:600; display:flex; align-items:center; gap:12px;"><span style="font-size:20px;">${c.flag}</span> ${c.code} - ${c.name}</button>`; 
  }); 
  html += '</div>'; 
  Swal.fire({ title: '<div style="font-size:18px; text-align:left; font-weight:800; border-bottom:1px dashed var(--border); padding-bottom:12px; margin-bottom:8px;">Pilih Mata Uang</div>', html: html, showConfirmButton: false, background: 'var(--card)', color: 'var(--text)', position: 'center', padding: '24px 16px', margin:0, width: window.innerWidth <= 768 ? '90%' : '400px', customClass: { popup: 'centered-modal' } }); 
}

window.calcPress = function(key) { 
  if (navigator.vibrate) navigator.vibrate(20); 
  if (key === 'AC') { calcInputVal = '0'; } else if (key === 'DEL') { calcInputVal = calcInputVal.slice(0, -1); if (calcInputVal === '') calcInputVal = '0'; } else if (key === '.') { if (!calcInputVal.includes('.')) calcInputVal += '.'; } else { if (calcInputVal === '0' && key !== '00') { calcInputVal = key; } else if (calcInputVal === '0' && key === '00') { /* do nothing */ } else { if(calcInputVal.replace('.', '').length < 15) { calcInputVal += key; } } } 
  window.renderCalcDisplay(); 
}

function renderRow(rId, code, isAct, displayVal) { 
  let currObj = calcCurrencies.find(c => c.code === code) || {name:'', flag:''}; 
  let countryCode = code.slice(0, 2).toLowerCase(); 
  if (code === 'EUR') countryCode = 'eu'; if (code === 'GBP') countryCode = 'gb'; 
  let flagImgHtml = `<img src="https://flagcdn.com/w40/${countryCode}.png" style="width:32px; height:22px; object-fit:cover; border-radius:4px; display:block; border:1px solid rgba(255,255,255,0.15);" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23888899\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9\'></path></svg>';">`; 
  return `
  <div class="calc-curr-item ${isAct ? 'active' : ''}" onclick="setCalcActiveRow('${rId}')">
    <div class="calc-left">
      <div class="calc-flag" style="width:40px; justify-content:center;">${flagImgHtml}</div>
      <div class="calc-code-wrap">
        <div class="calc-select" onclick="event.stopPropagation(); openCurrencySelector('${rId}')" style="display:flex; align-items:center; gap:8px;">${currObj.code} <span style="font-size:10px; color:var(--text3);">▼</span></div>
        <div class="calc-name">${currObj.name}</div>
      </div>
    </div>
    <div class="calc-right"><div class="calc-amount">${displayVal}</div></div>
  </div>`; 
}

window.renderCalcDisplay = function() { 
  const container = document.getElementById('calc-display'); 
  if (!container) return; 
  let currentNum = parseFloat(calcInputVal || '0'); 
  let baseInUSD = 0; 
  if (calcRates) { calcRates['IDR'] = currentUSDRate; let activeCode = calcActiveRow === 'from' ? calcFromCode : calcToCode; if (calcRates[activeCode]) { baseInUSD = currentNum / calcRates[activeCode]; } } 
  let fromValStr = '0'; 
  if (calcActiveRow === 'from') { let parts = calcInputVal.split('.'); let intPart = parts[0] ? parseInt(parts[0], 10).toLocaleString('id-ID') : '0'; fromValStr = parts.length > 1 ? `${intPart},${parts[1]}` : intPart; } else { if (calcRates && calcRates[calcFromCode]) { let val = baseInUSD * calcRates[calcFromCode]; fromValStr = val === 0 ? '0' : val.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 4}); } else { fromValStr = '...'; } } 
  let toValStr = '0'; 
  if (calcActiveRow === 'to') { let parts = calcInputVal.split('.'); let intPart = parts[0] ? parseInt(parts[0], 10).toLocaleString('id-ID') : '0'; toValStr = parts.length > 1 ? `${intPart},${parts[1]}` : intPart; } else { if (calcRates && calcRates[calcToCode]) { let val = baseInUSD * calcRates[calcToCode]; toValStr = val === 0 ? '0' : val.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 4}); } else { toValStr = '...'; } } 
  const cacheKey = `${calcFromCode}_${calcToCode}_${calcActiveRow}`; 
  if (container.dataset.cacheKey !== cacheKey || !container.innerHTML.trim()) { 
      container.innerHTML = renderRow('from', calcFromCode, calcActiveRow === 'from', fromValStr) + `<div style="display:flex; justify-content:center; margin: -16px 0; position: relative; z-index: 10;"><button class="swap-btn" onclick="event.stopPropagation(); swapCalcCurr()" title="Tukar Mata Uang">⇅</button></div>` + renderRow('to', calcToCode, calcActiveRow === 'to', toValStr); 
      container.dataset.cacheKey = cacheKey; 
  } else { 
      const fromAmtEl = container.querySelector('.calc-curr-item:first-child .calc-amount'); const toAmtEl = container.querySelector('.calc-curr-item:last-child .calc-amount'); 
      if (fromAmtEl) fromAmtEl.textContent = fromValStr; if (toAmtEl) toAmtEl.textContent = toValStr; 
  } 
}

document.addEventListener('DOMContentLoaded', () => {
    initCalc();
    const syncSelectUI = (sel, ui) => { let text = sel.options[sel.selectedIndex]?.text; if(!text && sel.options.length > 0) text = sel.options[0].text; ui.querySelector('.sel-text').innerHTML = text || 'Pilih...'; };
    document.querySelectorAll('select.f-input-dark, select.set-select').forEach(sel => { 
        sel.style.display = 'none'; let ui = document.createElement('div'); ui.className = sel.className; ui.style.display = 'flex'; ui.style.justifyContent = 'space-between'; ui.style.alignItems = 'center'; ui.style.cursor = 'pointer'; ui.innerHTML = `<span class="sel-text" style="pointer-events:none; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:90%;"></span><span style="font-size:10px; color:var(--text3); pointer-events:none;">▼</span>`; sel.parentNode.insertBefore(ui, sel); syncSelectUI(sel, ui); sel.addEventListener('change', () => syncSelectUI(sel, ui)); const observer = new MutationObserver(() => syncSelectUI(sel, ui)); observer.observe(sel, { childList: true, subtree: true }); ui.addEventListener('click', (e) => { e.stopPropagation(); if (navigator.vibrate) navigator.vibrate(10); let html = '<div style="display:flex; flex-direction:column; gap:8px; max-height:60vh; overflow-y:auto; padding-bottom:12px; scrollbar-width:none;">'; Array.from(sel.options).forEach((opt, idx) => { if(!opt.value && opt.text.toLowerCase().includes('pilih')) return; let isSel = sel.value === opt.value; html += `<button onclick="window.selectCustomOpt('${sel.id}', ${idx})" style="background:${isSel?'var(--bg3)':'var(--bg2)'}; color:var(--text); border:1px solid ${isSel?'var(--gold)':'var(--border)'}; padding:16px; border-radius:12px; font-family:'Outfit'; text-align:left; font-size:14px; font-weight:600; cursor:pointer; transition:0.2s;">${opt.innerHTML || opt.text}</button>`; }); html += '</div>'; Swal.fire({ title: '<div style="font-size:16px; text-align:left; font-weight:800; color:var(--text); border-bottom: 1px dashed var(--border); padding-bottom: 12px; margin-bottom: 8px;">Pilih Opsi</div>', html: html, showConfirmButton: false, background: 'var(--card)', color: 'var(--text)', position: 'center', padding: '24px 16px 16px 16px', margin:0, width: window.innerWidth <= 768 ? '90%' : '400px', customClass: { popup: 'centered-modal' } }); }); 
    });
    window.selectCustomOpt = function(selId, optIdx) { let sel = document.getElementById(selId); if (sel) { sel.selectedIndex = optIdx; sel.dispatchEvent(new Event('change')); if(sel.onchange) sel.onchange(); } Swal.close(); };
    
    const recSelect = document.getElementById('f-recurring');
    if (recSelect) {
        recSelect.addEventListener('change', window.toggleRecTime);
    }
});

function showErr(msg) { const el = document.getElementById('auth-err'); el.textContent = msg; el.style.display = 'block'; }
function hideErr() { document.getElementById('auth-err').style.display = 'none'; }
function setLoading(on) { document.getElementById('auth-submit-btn').disabled = on; document.getElementById('auth-submit-btn').textContent = on ? 'Memproses...' : (authMode === 'login' ? 'MASUK' : 'DAFTAR'); }
function setSyncStatus(ok) { document.getElementById('sync-dot').style.background = ok ? 'var(--green2)' : 'var(--red2)'; document.getElementById('sync-label').textContent = ok ? 'TERSINKRON' : 'OFFLINE'; document.getElementById('sync-dot').style.boxShadow = ok ? '0 0 8px var(--green2)' : 'none'; }

window.switchTab = function(mode) { authMode = mode; document.getElementById('tab-login').classList.toggle('active', mode === 'login'); document.getElementById('tab-register').classList.toggle('active', mode === 'register'); document.getElementById('field-confirm').style.display = mode === 'register' ? 'block' : 'none'; document.getElementById('auth-submit-btn').textContent = mode === 'login' ? 'MASUK' : 'DAFTAR'; hideErr(); };
window.doGoogleAuth = async function() { const provider = new GoogleAuthProvider(); hideErr(); setLoading(true); try { await signInWithPopup(auth, provider); } catch(e) { showErr(e.message); setLoading(false); } };
window.doAuth = async function() { 
    const email = document.getElementById('auth-email').value.trim(); 
    const pass = document.getElementById('auth-pass').value; 
    hideErr(); 
    if (!email || !pass) return showErr('Kredensial kosong.'); 
    setLoading(true); 
    try { 
        if (authMode === 'login') { await signInWithEmailAndPassword(auth, email, pass); } 
        else { 
            if (pass !== document.getElementById('auth-pass2').value) {
                setLoading(false);
                return showErr('Sandi beda.');
            }
            await createUserWithEmailAndPassword(auth, email, pass); 
        } 
    } catch(e) { showErr(e.message); setLoading(false); } 
};
window.doResetPassword = async function() { const email = document.getElementById('auth-email').value.trim(); hideErr(); if (!email) { return showErr('Masukkan email kamu dulu di kolom atas untuk reset sandi.'); } setLoading(true); document.getElementById('auth-submit-btn').textContent = 'MENGIRIM...'; try { await sendPasswordResetEmail(auth, email); Swal.fire({ position: 'center', icon: 'success', title: 'Email Terkirim!', html: 'Cek <b>Inbox</b> atau folder <b>SPAM</b> email kamu.', showConfirmButton: true, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); } catch(e) { showErr(e.message); } setLoading(false); document.getElementById('auth-submit-btn').textContent = authMode === 'login' ? 'MASUK' : 'DAFTAR'; };
window.reqResetPasswordViaSettings = async function() { if (!currentUser) return; try { await sendPasswordResetEmail(auth, currentUser.email); Swal.fire({ position: 'center', icon: 'success', title: 'Terkirim!', html: `Link reset sandi telah dikirim ke <b>${currentUser.email}</b>`, showConfirmButton: true, background: 'var(--card)', color: 'var(--text)' }); } catch(e) { Swal.fire('Gagal', e.message, 'error'); } };
window.clearLocalCache = function() { Swal.fire({ title: 'Bersihkan Cache?', text: "Data inti di cloud aman, hanya mereset preferensi hp ini.", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)' }).then((res) => { if (res.isConfirmed) { let tempLastUid = localStorage.getItem('last_uid_rhn'); localStorage.clear(); if (tempLastUid) localStorage.setItem('last_uid_rhn', tempLastUid); Swal.fire({ position: 'center', icon: 'success', title: 'Bersih!', showConfirmButton: false, timer: 800, background: 'var(--card)', color: 'var(--text)' }); setTimeout(() => location.reload(), 800); } }); };
window.deleteAllData = async function() { if (!currentUser) return; Swal.fire({ title: 'Verifikasi PIN Keamanan', text: 'Masukkan 6 digit PIN untuk format total akun:', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, autofocus: true, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;' }, icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'HAPUS SEMUA', background: 'var(--card)', color: 'var(--text)' }).then(async (res) => { if (res.isConfirmed) { if (res.value !== window.userCloudPin && res.value !== localStorage.getItem('local_pin_rhn')) return Swal.fire({icon: 'error', title: 'PIN Salah!', background:'var(--card)', color:'var(--text)'}); Swal.fire({title: 'Menghapus...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}}); try { for (let t of txs) { await deleteDoc(doc(db, 'users', currentUser.uid, 'transactions', t.id)); } Swal.fire({icon: 'success', title: 'Data Diformat!', background:'var(--card)', color:'var(--text)', timer: 1000, showConfirmButton: false}); } catch(e) { Swal.fire('Error', e.message, 'error'); } } }); };

window.manageCategories = async function() {
    const { value: type } = await Swal.fire({
        title: 'Pilih Tipe Kategori',
        input: 'select',
        inputOptions: { 'income': 'Pemasukan', 'expense': 'Pengeluaran', 'debt': 'Hutang', 'recv': 'Piutang' },
        background: 'var(--card)', color: 'var(--text)'
    });
    if (!type) return;

    let html = '<div style="text-align:left; max-height:50vh; overflow-y:auto; margin-bottom:12px;">';
    if(window.userCats[type]) {
        window.userCats[type].forEach((cat, idx) => {
            html += `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding:8px 12px; background:var(--bg2); border-radius:8px; border:1px solid var(--border);">
                        <span style="font-size:12px; font-weight:600;">${cat}</span>
                        <button onclick="delCategory('${type}', ${idx})" style="color:var(--red2); background:rgba(248,113,113,0.1); border:none; padding:4px 8px; border-radius:6px; cursor:pointer; font-weight:bold; font-size:10px;">HAPUS</button>
                     </div>`;
        });
    }
    html += `</div>`;
    
    Swal.fire({
        title: `Kategori ${type.toUpperCase()}`,
        html: html,
        showDenyButton: true,
        confirmButtonText: 'Selesai / Tutup',
        denyButtonText: '+ Tambah Baru',
        background: 'var(--card)', color: 'var(--text)',
        confirmButtonColor: 'var(--bg3)', denyButtonColor: 'var(--gold)'
    }).then((res) => {
        if (res.isDenied) { promptAddCategory(type); }
    });
};

window.delCategory = async function(type, idx) {
    Swal.fire({ title: 'Hapus Kategori?', icon: 'warning', showCancelButton: true, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal', confirmButtonText: 'Ya, Hapus' }).then(async (res) => {
        if(res.isConfirmed) {
            window.userCats[type].splice(idx, 1);
            await savePreferencesData();
            manageCategories(); 
        }
    });
};

window.promptAddCategory = async function(type) {
    const { value: newCat } = await Swal.fire({
        title: 'Nama Kategori Baru', input: 'text',
        background: 'var(--card)', color: 'var(--text)'
    });
    if (newCat && newCat.trim() !== '') {
        if(!window.userCats[type]) window.userCats[type] = [];
        window.userCats[type].push(newCat.trim());
        await savePreferencesData();
        Swal.fire({icon:'success', title:'Ditambahkan', background:'var(--card)', color:'var(--text)', timer:800, showConfirmButton:false});
    }
    manageCategories();
};

window.manageRecurring = async function() {
    if(!currentUser) return;
    Swal.fire({title: 'Memuat Jadwal...', background:'var(--card)', color:'var(--text)', didOpen: () => Swal.showLoading()});
    try {
        const snap = await getDocs(collection(db, 'users', currentUser.uid, 'recurring_txs'));
        if(snap.empty) {
            return Swal.fire({icon:'info', title:'Kosong', text:'Belum ada jadwal transaksi rutin yang aktif.', background:'var(--card)', color:'var(--text)'});
        }
        let html = '<div style="max-height:60vh; overflow-y:auto; text-align:left;">';
        snap.forEach(d => {
            let r = d.data();
            let intv = r.interval === 'daily' ? 'Harian' : (r.interval === 'weekly' ? 'Mingguan' : 'Bulanan');
            html += `<div style="padding:12px; border:1px solid var(--border); border-radius:12px; margin-bottom:8px; background:var(--bg2);">
                <div style="font-size:12px; font-weight:700; color:var(--text);">${escapeHTML(r.note)} (${r.category})</div>
                <div style="font-size:10px; color:var(--text3); margin-bottom:8px;">${fmtFull(r.amount)} | ${intv} | Jam: ${r.runTime || '09:00'}</div>
                <button onclick="stopRecurring('${d.id}')" style="width:100%; background:rgba(248, 113, 113, 0.1); color:var(--red2); border:1px solid var(--red2); padding:6px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer;">HENTIKAN JADWAL</button>
            </div>`;
        });
        html += '</div>';
        Swal.fire({title: 'Jadwal Rutin Aktif', html: html, showConfirmButton: false, background:'var(--card)', color:'var(--text)'});
    } catch(e) { Swal.fire('Error', e.message, 'error'); }
};

window.stopRecurring = function(id) {
    Swal.fire({ title: 'Hentikan Jadwal?', icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Hentikan', background: 'var(--card)', color: 'var(--text)'}).then(async (res) => {
        if(res.isConfirmed) {
            Swal.fire({title: 'Memproses...', background:'var(--card)', color:'var(--text)', didOpen: () => Swal.showLoading()});
            await deleteDoc(doc(db, 'users', currentUser.uid, 'recurring_txs', id));
            Swal.fire({icon:'success', title:'Dihentikan', background:'var(--card)', color:'var(--text)', timer:800, showConfirmButton:false});
            manageRecurring();
        }
    });
};

window.updatePrefCategories = function(resetCat = true) { 
    const selType = document.getElementById('pref-type').value; 
    const catDrop = document.getElementById('pref-cat'); 
    if (!catDrop) return; 
    catDrop.innerHTML = ''; 
    if (window.userCats[selType]) { 
        window.userCats[selType].forEach(c => { let opt = document.createElement('option'); opt.value = c; opt.textContent = c; catDrop.appendChild(opt); }); 
    } 
    if (!resetCat && appPrefs.category) { setTimeout(() => { catDrop.value = appPrefs.category; catDrop.dispatchEvent(new Event('change')); }, 10); } 
    if (!resetCat) { document.getElementById('pref-type').value = appPrefs.type || 'income'; document.getElementById('pref-type').dispatchEvent(new Event('change')); document.getElementById('pref-wallet').value = appPrefs.wallet || 'Kas Tunai'; document.getElementById('pref-wallet').dispatchEvent(new Event('change')); } 
};

window.savePreferencesData = async function() {
    if(!currentUser) return;
    try {
        await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'preferences'), { 
            categories: window.userCats,
            savingsGoals: window.savingsGoals
        }, { merge: true });
        selType(curType); 
    } catch(e) { console.error("Gagal simpan data custom", e); }
};

window.savePreferences = async function() { 
    if (!currentUser) return; 
    appPrefs = { type: document.getElementById('pref-type').value, category: document.getElementById('pref-cat').value, wallet: document.getElementById('pref-wallet').value }; 
    localStorage.setItem('rhn_prefs_' + currentUser.uid, JSON.stringify(appPrefs)); 
    try { await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'preferences'), { appPrefs: appPrefs }, { merge: true }); Swal.fire({position: 'center', icon: 'success', title: 'Tersimpan ke Cloud!', showConfirmButton: false, timer: 1000, background: 'var(--card)', color: 'var(--text)'}); } catch(e) { console.error("Gagal nyimpan preferensi ke cloud", e); } 
    selType(appPrefs.type); setTimeout(() => { if(document.getElementById('f-cat') && appPrefs.category) { document.getElementById('f-cat').value = appPrefs.category; document.getElementById('f-cat').dispatchEvent(new Event('change')); } if(document.getElementById('f-wallet') && appPrefs.wallet) { document.getElementById('f-wallet').value = appPrefs.wallet; document.getElementById('f-wallet').dispatchEvent(new Event('change')); } }, 10); 
};

window.saveExtraPrefs = async function() { 
    if (!currentUser || window.isAppLoading) return; 
    extraPrefs = { ext_autolock: document.getElementById('ext_autolock').value, ext_warnbalance: document.getElementById('ext_warnbalance').value, ext_shortnum: document.getElementById('ext_shortnum').value, ext_budget: document.getElementById('ext_budget').value, ext_hidezero: document.getElementById('ext_hidezero').value, ext_walletpct: document.getElementById('ext_walletpct').value, ext_debtbadge: document.getElementById('ext_debtbadge').value, ext_antiintip: document.getElementById('ext_antiintip').value }; 
    localStorage.setItem('rhn_extra_prefs_v2_' + currentUser.uid, JSON.stringify(extraPrefs)); 
    try { await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'preferences'), { extraPrefs: extraPrefs }, { merge: true }); } catch(e) { console.error("Gagal nyimpan 7 fitur pengaturan ke cloud", e); } 
    if (extraPrefs.ext_antiintip === 'on') { document.body.classList.add('global-privacy'); } else { document.body.classList.remove('global-privacy'); } 
    if (window.resetIdle) window.resetIdle(); refreshAll(); 
};

window.changePinInApp = async function() { 
    if (!currentUser) return; 
    const { value: choice } = await Swal.fire({ title: 'Pengaturan PIN', text: 'Pilih aksi yang mau lu lakuin:', icon: 'question', showCancelButton: true, showDenyButton: true, confirmButtonText: 'Lupa PIN (Buat Baru)', denyButtonText: 'Ingat PIN (Ganti PIN)', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', denyButtonColor: 'var(--gold)', cancelButtonColor: 'var(--bg3)' }); 
    const promptNewPin = async () => { 
        const { value: newPin } = await Swal.fire({ title: 'Buat PIN Baru', text: 'Masukkan 6 angka PIN baru kamu', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;', autofocus: true }, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--gold)', confirmButtonText: 'SIMPAN PIN BARU' }); 
        if (newPin && newPin.length === 6) { 
            try { 
                await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'security'), { pin: newPin }, { merge: true }); 
                window.userCloudPin = newPin; 
                localStorage.setItem('local_pin_rhn', newPin);
                Swal.fire({icon:'success', title:'PIN Berhasil Disimpan!', background:'var(--card)', color:'var(--text)', timer: 1000, showConfirmButton: false}); 
            } catch(e) { Swal.fire({icon:'error', title:'Gagal mengubah PIN', text: e.message, background:'var(--card)', color:'var(--text)'}); } 
        } else if (newPin) { Swal.fire({icon:'warning', title:'Gagal, harus 6 digit!', background:'var(--card)', color:'var(--text)'}); } 
    }; 
    if (choice === true) { promptNewPin(); } else if (choice === false) { 
        const { value: oldPin } = await Swal.fire({ title: 'Masukkan PIN Lama', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;', autofocus: true }, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--border2)' }); 
        if (!oldPin) return; 
        if (oldPin !== window.userCloudPin && oldPin !== localStorage.getItem('local_pin_rhn')) { return Swal.fire({icon:'error', title:'PIN Lama Salah!', background:'var(--card)', color:'var(--text)'}); } 
        promptNewPin(); 
    } 
};

window.doLogout = function() { 
    Swal.fire({
        title: 'Keluar Akun?',
        text: "Apakah kamu yakin ingin keluar dari akun ini?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--red2)',
        cancelButtonColor: 'var(--bg3)',
        confirmButtonText: 'Ya, Keluar',
        cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)'
    }).then(async (result) => {
        if (result.isConfirmed) {
            Swal.fire({title: 'Keluar...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
            if (unsubListener) { unsubListener(); unsubListener = null; } 
            txs = []; deletedTxs = []; 
            
            localStorage.removeItem('last_uid_rhn'); 
            localStorage.removeItem('local_pin_rhn');
            window.appUnlocked = false; 
            window.userCloudPin = null; 
            
            await signOut(auth); 
            Swal.close();
        }
    });
};

onAuthStateChanged(auth, async user => {
  if (user) {
    currentUser = user; localStorage.setItem('last_uid_rhn', user.uid); 
    
    try {
        await setDoc(doc(db, 'users', user.uid), { email: user.email, nama: user.displayName || user.email.split('@')[0] }, { merge: true });
        const txRef = collection(db, 'users', user.uid, 'transactions');
        const txSnap = await getDocs(txRef);
        const promises = [];
        txSnap.forEach(d => { if (!d.data().ownerEmail) { promises.push(updateDoc(d.ref, { ownerEmail: user.email })); } });
        if (promises.length > 0) { await Promise.all(promises); }
    } catch(e) { console.error("Gagal sinkron email lama", e); }
    
    const adminEmail = "rehantop245@gmail.com"; 
    if (user.email === adminEmail) { document.getElementById('nav-admin').style.display = 'inline-block'; } else { document.getElementById('nav-admin').style.display = 'none'; }

    try {
        const prefRef = doc(db, 'users', user.uid, 'settings', 'preferences'); const prefSnap = await getDoc(prefRef);
        if (prefSnap.exists()) { 
            const data = prefSnap.data(); 
            if (data.appPrefs) { appPrefs = data.appPrefs; localStorage.setItem('rhn_prefs_' + user.uid, JSON.stringify(appPrefs)); } 
            if (data.extraPrefs) { extraPrefs = data.extraPrefs; localStorage.setItem('rhn_extra_prefs_v2_' + user.uid, JSON.stringify(extraPrefs)); } 
            if (data.budgets) { window.userBudgets = data.budgets; } else { window.userBudgets = {}; }
            if (data.categories) { window.userCats = data.categories; } else { window.userCats = JSON.parse(JSON.stringify(window.defaultCATS)); }
            if (data.savingsGoals) { window.savingsGoals = data.savingsGoals; } else { window.savingsGoals = []; }
            if (data.userQrisBase) { window.userQrisBase = data.userQrisBase; } else { window.userQrisBase = ""; }
        } else { 
            const savedPrefs = localStorage.getItem('rhn_prefs_' + user.uid); if(savedPrefs) appPrefs = JSON.parse(savedPrefs); 
            const savedExtraPrefs = localStorage.getItem('rhn_extra_prefs_v2_' + user.uid); if(savedExtraPrefs) extraPrefs = JSON.parse(savedExtraPrefs); 
            window.userBudgets = {};
            window.userCats = JSON.parse(JSON.stringify(window.defaultCATS));
            window.savingsGoals = [];
            window.userQrisBase = "";
        }
    } catch(err) { console.error("Gagal sinkron data pengaturan", err); }

    try {
        const recSnap = await getDocs(collection(db, 'users', user.uid, 'recurring_txs'));
        const todayStr = nowISO().slice(0,10);
        const nowTimeStr = new Date().toTimeString().slice(0,5);
        
        recSnap.forEach(async (d) => {
            let rData = d.data();
            let shouldRun = false;
            
            if (rData.nextRun < todayStr) { shouldRun = true; } 
            else if (rData.nextRun === todayStr) { if (!rData.runTime || nowTimeStr >= rData.runTime) { shouldRun = true; } }

            if (shouldRun) {
                await addDoc(collection(db, 'users', user.uid, 'transactions'), {
                   type: rData.type, amount: rData.amount, category: rData.category, wallet: rData.wallet, walletTo: rData.walletTo || null, note: rData.note + ' (Auto-Rutin)', date: new Date().toISOString(), ownerEmail: user.email, createdAt: serverTimestamp(), isDeleted: false
                });
                
                let nextD = new Date();
                if(rData.interval === 'daily') nextD.setDate(nextD.getDate()+1);
                else if(rData.interval === 'weekly') nextD.setDate(nextD.getDate()+7);
                else if(rData.interval === 'monthly') nextD.setMonth(nextD.getMonth()+1);
                
                await updateDoc(d.ref, { nextRun: nextD.toISOString().slice(0,10) });
            }
        });
    } catch(err) { console.error("Gagal memproses transaksi rutin", err); }

    window.isAppLoading = true;
    ['ext_autolock', 'ext_warnbalance', 'ext_shortnum', 'ext_budget', 'ext_hidezero', 'ext_walletpct', 'ext_debtbadge', 'ext_antiintip'].forEach(id => { if (document.getElementById(id) && extraPrefs[id]) { document.getElementById(id).value = extraPrefs[id]; document.getElementById(id).dispatchEvent(new Event('change')); } });
    if (extraPrefs.ext_antiintip === 'on') { document.body.classList.add('global-privacy'); } else { document.body.classList.remove('global-privacy'); }
    setTimeout(() => { window.updatePrefCategories(false); if (window.selType && appPrefs && appPrefs.type) { selType(appPrefs.type); } else { selType('income'); } }, 10);
    setTimeout(() => { window.isAppLoading = false; }, 300); 
    
    const secRef = doc(db, 'users', user.uid, 'settings', 'security');
    try {
        const secSnap = await getDoc(secRef); 
        document.getElementById('app-pin').style.display = 'block';
        if (!secSnap.exists() || !secSnap.data().pin) { 
            if (!window.appUnlocked) {
                document.getElementById('app-screen').style.display = 'none'; 
                document.getElementById('pin-screen').style.display = 'flex'; 
                document.getElementById('pin-title').textContent = 'Buat PIN Baru'; 
                document.getElementById('pin-sub').textContent = 'Buat 6 digit PIN untuk akses cepat'; 
                document.getElementById('pin-submit-btn').textContent = 'SIMPAN PIN'; 
                window.pinMode = 'setup'; 
                window.userCloudPin = null; 
                setLoading(false); 
                if (!window.pinFocusInterval) window.pinFocusInterval = setInterval(window.forceFocusPin, 200);
            }
        } else { 
            window.userCloudPin = secSnap.data().pin; 
            localStorage.setItem('local_pin_rhn', window.userCloudPin);
            if (!window.appUnlocked) {
                document.getElementById('app-screen').style.display = 'none'; 
                document.getElementById('pin-screen').style.display = 'flex'; 
                document.getElementById('pin-title').textContent = 'Masukkan PIN'; 
                document.getElementById('pin-sub').textContent = 'Keamanan aktif'; 
                document.getElementById('pin-submit-btn').textContent = 'BUKA APLIKASI'; 
                window.pinMode = 'verify'; 
                setLoading(false); 
                if (!window.pinFocusInterval) window.pinFocusInterval = setInterval(window.forceFocusPin, 200);
            } else {
                unlockApp();
            }
        }
    } catch(err) { console.error(err); setLoading(false); }
    if(window.resetIdle) window.resetIdle();
  } else {
    currentUser = null; 
    localStorage.removeItem('last_uid_rhn'); 
    localStorage.removeItem('local_pin_rhn');
    window.appUnlocked = false;
    window.userCloudPin = null;

    document.getElementById('auth-screen').style.display = 'flex'; 
    document.getElementById('app-screen').style.display = 'none'; 
    document.getElementById('pin-screen').style.display = 'none';
    
    setLoading(false); 
    document.getElementById('auth-submit-btn').textContent = 'MASUK'; 

    if (unsubListener) { unsubListener(); unsubListener = null; } 
    txs = []; deletedTxs = [];
  }
});

window.verifyPin = async function() { 
    const pinInput = document.getElementById('app-pin').value; 
    const errEl = document.getElementById('pin-err'); 
    if (pinInput.length < 6) { errEl.textContent = 'PIN harus 6 digit.'; errEl.style.display = 'block'; return; } 
    errEl.style.display = 'none'; 

    if (window.pinMode === 'setup') { 
        document.getElementById('pin-submit-btn').textContent = 'MENYIMPAN...'; 
        try { 
            await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'security'), { pin: pinInput }, { merge: true }); 
            window.userCloudPin = pinInput; 
            localStorage.setItem('local_pin_rhn', pinInput);
            Swal.fire({position: 'center', icon: 'success', title: 'PIN Berhasil Dibuat!', showConfirmButton: false, timer: 1000, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)'}); 
            window.appUnlocked = true;
            unlockApp(); 
        } catch(e) { 
            errEl.textContent = 'Gagal menyimpan PIN ke server.'; errEl.style.display = 'block'; 
            document.getElementById('pin-submit-btn').textContent = 'SIMPAN PIN'; 
        } 
    } else { 
        const uid = currentUser ? currentUser.uid : localStorage.getItem('last_uid_rhn'); 
        if (!uid) return; 
        
        const localPin = localStorage.getItem('local_pin_rhn');

        if (pinInput === localPin || pinInput === window.userCloudPin) { 
            window.appUnlocked = true;
            unlockApp(); 
        } else { 
            errEl.textContent = 'PIN Salah!'; errEl.style.display = 'block'; 
            document.getElementById('app-pin').value = ''; 
            document.getElementById('app-pin').classList.add('shake-error'); 
            setTimeout(() => document.getElementById('app-pin').classList.remove('shake-error'), 400); 
            if (navigator.vibrate) navigator.vibrate([30, 50, 30]); 
        } 
    } 
};

function unlockApp() { 
    if (window.pinFocusInterval) {
        clearInterval(window.pinFocusInterval);
        window.pinFocusInterval = null;
    }
    
    document.getElementById('pin-screen').style.display = 'none'; 
    document.getElementById('app-screen').style.display = 'block'; 
    setLoading(false); 
    
    if (currentUser) {
        const name = currentUser.displayName || currentUser.email.split('@')[0]; 
        document.getElementById('user-name').textContent = name; 
        
        const avatarEl = document.getElementById('user-avatar');
        if (avatarEl) {
            avatarEl.style.fontWeight = '800';
            avatarEl.style.fontSize = '16px';
            avatarEl.textContent = name.charAt(0).toUpperCase();
        }

        if (typeof window.initTransferAccount === 'function') { window.initTransferAccount(); } 
        listenTransactions(currentUser.uid); 
    } else {
        document.getElementById('user-name').textContent = 'Memuat...';
    }

    document.getElementById('app-pin').value = ''; 
    if (window.resetIdle) window.resetIdle(); 
}

window.resetAccount = function() { Swal.fire({ title: 'Ganti Akun?', text: "Lu harus login Email lagi.", icon: 'warning', showCancelButton: true, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Ganti' }).then((result) => { if (result.isConfirmed) { localStorage.removeItem('last_uid_rhn'); localStorage.removeItem('local_pin_rhn'); document.getElementById('app-pin').value = ''; window.appUnlocked = false; window.userCloudPin = null; doLogout(); } }); };
window.resetPinFromLogin = async function() { 
    const uid = currentUser ? currentUser.uid : localStorage.getItem('last_uid_rhn'); 
    if (!uid) { return Swal.fire({icon: 'error', title: 'Belum Login', text: 'Tunggu proses ke server sebentar', background: 'var(--card)', color: 'var(--text)'}); } 
    const { value: choice } = await Swal.fire({ title: 'Opsi Keamanan', text: 'Pilih tindakan untuk PIN lu:', icon: 'question', showCancelButton: true, showDenyButton: true, confirmButtonText: 'Lupa PIN (Buat Baru)', denyButtonText: 'Ingat PIN (Ganti PIN)', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', denyButtonColor: 'var(--gold)', cancelButtonColor: 'var(--bg3)' }); 
    const promptNewPin = async () => { 
        const { value: newPin } = await Swal.fire({ title: 'Buat PIN Baru', text: 'Masukkan 6 angka PIN baru kamu', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;', autofocus: true }, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--gold)', confirmButtonText: 'SIMPAN PIN BARU' }); 
        if (newPin && newPin.length === 6) { 
            try { 
                await setDoc(doc(db, 'users', uid, 'settings', 'security'), { pin: newPin }, { merge: true }); 
                window.userCloudPin = newPin; 
                localStorage.setItem('local_pin_rhn', newPin);
                Swal.fire({icon:'success', title:'PIN Berhasil Disimpan!', background:'var(--card)', color:'var(--text)', timer: 1000, showConfirmButton: false}); 
                document.getElementById('app-pin').value = ''; 
            } catch(e) { Swal.fire({icon:'error', title:'Gagal mengubah PIN', text: e.message, background:'var(--card)', color:'var(--text)'}); } 
        } else if (newPin) { Swal.fire({icon:'warning', title:'Gagal, harus 6 digit!', background:'var(--card)', color:'var(--text)'}); } 
    }; 
    if (choice === true) { promptNewPin(); } else if (choice === false) { 
        const { value: oldPin } = await Swal.fire({ title: 'Masukkan PIN Lama', input: 'password', inputAttributes: { inputmode: 'numeric', maxlength: 6, style: 'text-align: center; letter-spacing: 10px; font-size: 24px;', autofocus: true }, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--border2)' }); 
        if (!oldPin) return; 
        if (oldPin !== window.userCloudPin && oldPin !== localStorage.getItem('local_pin_rhn')) return Swal.fire({icon:'error', title:'PIN Lama Salah!', background:'var(--card)', color:'var(--text)'}); 
        promptNewPin(); 
    } 
};

document.getElementById('app-pin').addEventListener('input', function(e) { this.value = this.value.replace(/[^0-9]/g, ''); if (this.value.length === 6) { window.verifyPin(); } });

window.loadAllUsersData = async function() {
  if (!currentUser) return;
  const adminContainer = document.getElementById('admin-all-body');
  
  Swal.fire({
      title: 'Memuat Database...',
      html: 'Sedang menarik data seluruh pengguna.<br>Harap tunggu sebentar...',
      background: 'var(--card)', 
      color: 'var(--text)',
      heightAuto: false, 
      allowOutsideClick: false,
      didOpen: () => { Swal.showLoading() }
  });

  try {
    const txQuery = query(collectionGroup(db, 'transactions'), orderBy('createdAt', 'desc'));
    const snap = await getDocs(txQuery);
    
    if (snap.empty) {
      adminContainer.innerHTML = '<div style="padding:40px;text-align:center;color:#888;font-size:12px;">Tidak ada data atau akses ditolak.</div>';
      Swal.fire({icon: 'info', title: 'Data Kosong', text: 'Tidak ada data ditemukan.', background: 'var(--card)', color: 'var(--text)'});
      return;
    }

    let allUsersTxs = snap.docs.map(d => {
      let data = d.data();
      let pathSegments = d.ref.path.split('/');
      let ownerUid = pathSegments.length > 2 ? pathSegments[1] : 'Unknown';
      return { id: d.id, ownerUid: ownerUid, ...data };
    });

    let uniqueUids = [...new Set(allUsersTxs.map(t => t.ownerUid))];
    let userInfos = {};
    
    for (let uid of uniqueUids) {
        if (uid === currentUser.uid) {
            userInfos[uid] = {
                email: currentUser.email,
                nama: currentUser.displayName || currentUser.email.split('@')[0]
            };
        } else {
            try {
                let uSnap = await getDoc(doc(db, 'users', uid));
                if (uSnap.exists()) {
                    let dUser = uSnap.data();
                    if (dUser.email) {
                        userInfos[uid] = {
                            email: dUser.email,
                            nama: dUser.nama || dUser.email.split('@')[0]
                        };
                    }
                }
            } catch(err) {}
        }
    }

    adminContainer.innerHTML = allUsersTxs.map(t => {
      let icon = t.type === 'income' ? '↑' : t.type === 'expense' ? '↓' : t.type === 'debt' ? '💳' : t.type === 'transfer' ? '🔄' : '💸';
      let sign = (t.type === 'income' || t.type === 'recv') ? '+' : (t.type === 'transfer' ? '' : '-');
      if (t.type === 'debt') sign = '-'; if (t.type === 'recv') sign = '-';
      
      let fallbackInfo = userInfos[t.ownerUid] || {};
      let finalEmail = t.ownerEmail || fallbackInfo.email;
      let ownerLabel = "";
      
      if (finalEmail) {
          let finalNama = fallbackInfo.nama || finalEmail.split('@')[0];
          ownerLabel = `${finalNama} (${finalEmail})`;
      } else {
          ownerLabel = `User-${t.ownerUid.substring(0,6)} (Perlu Login Ulang)`;
      }

      return `
      <div class="recent-item" style="border-left: 4px solid var(--gold);"> 
          <div class="ri-left"> 
              <div class="ri-icon ${t.type}">${icon}</div> 
              <div> 
                  <div class="ri-note">${escapeHTML(t.note)} <span class="cat-badge">${t.category}</span></div> 
                  <div class="ri-meta" style="color: var(--gold); margin-bottom: 2px;">👤 ${ownerLabel}</div> 
                  <div class="ri-meta">📅 ${fmtDate(t.date)} · ⏱️ ${fmtTime(t.date)}</div> 
              </div> 
          </div> 
          <div class="ri-right-wrap"> 
              <div class="ri-amounts-col"> 
                  <div class="ri-amount ${t.type}">${sign}${fmtFull(t.amount)}</div> 
              </div> 
          </div> 
      </div>`;
    }).join('');

    Swal.fire({
        icon: 'success', 
        title: 'Data Ditemukan', 
        text: `Berhasil memuat ${allUsersTxs.length} transaksi.`, 
        background: 'var(--card)', color: 'var(--text)', 
        timer: 1500,
        showConfirmButton: false
    });

  } catch (error) {
    adminContainer.innerHTML = `<div style="padding:40px;text-align:center;color:var(--red2);font-size:12px;">Gagal memuat. Periksa status admin. Error: ${error.message}</div>`;
    Swal.fire({icon: 'error', title: 'Gagal', text: error.message, background: 'var(--card)', color: 'var(--text)'});
  }
};

function listenTransactions(uid) { 
    if (unsubListener) unsubListener(); 
    unsubListener = onSnapshot(query(collection(db, 'users', uid, 'transactions'), orderBy('createdAt', 'desc')), snap => { 
        let allDocs = snap.docs.map(d => { 
            let data = d.data(); 
            if (data.wallet && data.wallet.toUpperCase().includes('REKENING')) data.wallet = 'Bank'; 
            if (data.walletTo && data.walletTo.toUpperCase().includes('REKENING')) data.walletTo = 'Bank'; 
            return {id: d.id, ...data}; 
        }); 
        txs = allDocs.filter(t => !t.isDeleted);
        deletedTxs = allDocs.filter(t => t.isDeleted);
        setSyncStatus(true); 
        refreshAll(); 
    }, err => { 
        console.error(err); 
        setSyncStatus(false); 
    }); 
}

window.delTx = function(id) { 
    if (navigator.vibrate) navigator.vibrate(20); 
    Swal.fire({ 
        title: 'Pindah ke Sampah?', 
        text: "Data ini akan masuk ke Folder Sampah di Pengaturan.", 
        icon: 'warning', 
        showCancelButton: true, 
        background: 'var(--card)', color: 'var(--text)', 
        confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', 
        confirmButtonText: 'Ya, Pindahkan', cancelButtonText: 'Batal', position: 'center', backdrop: 'rgba(0,0,0,0.6)' 
    }).then(async (result) => { 
        if (result.isConfirmed) { 
            try {
                await updateDoc(doc(db, 'users', currentUser.uid, 'transactions', id), { isDeleted: true });
                Swal.fire({ icon: 'success', title: 'Masuk Tempat Sampah!', background:'var(--card)', color:'var(--text)', showConfirmButton:false, timer:800}); 
            } catch(e) { Swal.fire('Error', e.message, 'error'); }
        } 
    }); 
};

window.addTx = async function() { 
  if(!currentUser) return; 
  const amountInput = document.getElementById('f-amount'); const catInput = document.getElementById('f-cat'); const noteInput = document.getElementById('f-note'); 
  const rawValue = amountInput.value.replace(/\./g, ''); const amt = parseFloat(rawValue); 
  let cat = catInput.value; if (curType === 'transfer') cat = 'Transfer Antar Dompet';
  const isAmtEmpty = !amt || isNaN(amt); const isCatEmpty = !cat; const note = noteInput.value.trim(); const isNoteEmpty = !note;

  if (isAmtEmpty && isCatEmpty && isNoteEmpty && curType !== 'transfer') { amountInput.classList.add('shake-error'); catInput.parentNode.previousSibling.classList.add('shake-error'); noteInput.classList.add('shake-error'); setTimeout(() => { amountInput.classList.remove('shake-error'); catInput.parentNode.previousSibling.classList.remove('shake-error'); noteInput.classList.remove('shake-error'); }, 400); return Swal.fire({ position: 'center', icon: 'warning', title: 'Data Masih Kosong!', text: 'Nominal, Kategori, dan Keterangan harus diisi!', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); } else if (isAmtEmpty) { amountInput.classList.add('shake-error'); setTimeout(() => amountInput.classList.remove('shake-error'), 400); return Swal.fire({ position: 'center', icon: 'warning', title: 'Jumlah Belum Diisi!', text: 'Silakan isi nominal (Jumlah) transaksi terlebih dahulu.', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); } else if (isCatEmpty && curType !== 'transfer') { catInput.parentNode.previousSibling.classList.add('shake-error'); setTimeout(() => catInput.parentNode.previousSibling.classList.remove('shake-error'), 400); return Swal.fire({ position: 'center', icon: 'warning', title: 'Kategori Belum Diisi!', text: 'Pilih Kategori transaksi terlebih dahulu, bro!', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); } else if (isNoteEmpty) { noteInput.classList.add('shake-error'); setTimeout(() => noteInput.classList.remove('shake-error'), 400); return Swal.fire({ position: 'center', icon: 'warning', title: 'Keterangan Kosong!', text: 'Jangan lupa isi keterangan transaksinya ya.', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); }

  const dt = document.getElementById('f-date').value; const wallet = document.getElementById('f-wallet') ? document.getElementById('f-wallet').value : 'Kas Tunai'; const walletTo = document.getElementById('f-wallet-to') ? document.getElementById('f-wallet-to').value : 'Kas Tunai'; 
  const recVal = document.getElementById('f-recurring') ? document.getElementById('f-recurring').value : '';
  const recTime = document.getElementById('f-recurring-time') ? document.getElementById('f-recurring-time').value : '09:00';

  if (curType === 'transfer' && wallet === walletTo) { return Swal.fire({position: 'center', icon: 'warning', title: 'Oops...', text: 'Dompet asal dan tujuan tidak boleh sama!', showConfirmButton: true, confirmButtonText: 'OKE, PAHAM', confirmButtonColor: 'var(--gold)', background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)'}); }
  
  if (document.activeElement) document.activeElement.blur();
  const saveBtn = document.getElementById('save-btn'); saveBtn.textContent = 'MENYIMPAN...'; saveBtn.style.opacity = '0.7'; saveBtn.disabled = true;

  if (curType === 'expense' && window.userBudgets && window.userBudgets[cat]) {
      let currentMonth = (dt || nowISO()).slice(0,7);
      let spent = 0;
      txs.forEach(t => {
          if (t.type === 'expense' && t.category === cat && t.date.slice(0,7) === currentMonth && !t.isDeleted) { spent += t.amount; }
      });
      if (spent + amt > window.userBudgets[cat]) {
          let limitStr = fmtFull(window.userBudgets[cat]);
          let spentStr = fmtFull(spent + amt);
          let res = await Swal.fire({
              title: 'Batas Budget Terlewati!', html: `Pengeluaran <b>${cat}</b> bulan ini akan mencapai <b style="color:var(--red2)">${spentStr}</b>.<br>Batas budget kamu hanya <b>${limitStr}</b>.`,
              icon: 'warning', background: 'var(--card)', color: 'var(--text)', confirmButtonText: 'TETAP SIMPAN', showCancelButton: true, cancelButtonText: 'Batal', confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)'
          });
          if (!res.isConfirmed) { saveBtn.textContent = 'SIMPAN TRANSAKSI'; saveBtn.style.opacity = '1'; saveBtn.disabled = false; return; }
      }
  }

  try { 
      let payload = { type: curType, amount: amt, category: cat, wallet: wallet, note: note, date: dt || nowISO(), ownerEmail: currentUser.email, isDeleted: false }; 
      if (curType === 'transfer') payload.walletTo = walletTo; if (curType === 'debt' || curType === 'recv') payload.isPaid = false;
      
      if (editId) { 
          await updateDoc(doc(db, 'users', currentUser.uid, 'transactions', editId), payload); cancelEdit(); 
      } else { 
          payload.createdAt = serverTimestamp(); 
          await addDoc(collection(db, 'users', currentUser.uid, 'transactions'), payload); 
          if (recVal) {
             let nextD = new Date();
             if(recVal==='daily') nextD.setDate(nextD.getDate()+1);
             if(recVal==='weekly') nextD.setDate(nextD.getDate()+7);
             if(recVal==='monthly') nextD.setMonth(nextD.getMonth()+1);
             await addDoc(collection(db, 'users', currentUser.uid, 'recurring_txs'), { type: payload.type, amount: payload.amount, category: payload.category, wallet: payload.wallet, walletTo: payload.walletTo || null, note: payload.note, interval: recVal, nextRun: nextD.toISOString().slice(0,10), runTime: recTime });
          }
      } 
      amountInput.value = ''; document.getElementById('f-note').value = ''; 
      saveBtn.style.opacity = '1';
      saveBtn.style.background = 'var(--green2)'; saveBtn.style.color = '#000'; saveBtn.textContent = 'TERSIMPAN ✅'; saveBtn.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.5)'; 
      if (navigator.vibrate) navigator.vibrate([30, 50, 30]); 
      let titleMsg = 'Berhasil Disimpan!'; if (curType === 'debt') titleMsg = '💳 Hutang Tercatat!'; if (curType === 'recv') titleMsg = '💸 Piutang Tercatat!'; if (curType === 'transfer') titleMsg = '🔄 Transfer Berhasil!'; 
      if (recVal) titleMsg += ' & Rutin Aktif!';
      
      Swal.fire({ position: 'center', icon: 'success', title: titleMsg, showConfirmButton: false, timer: 800, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); 
      
      setTimeout(() => { saveBtn.style.boxShadow = 'none'; saveBtn.disabled = false; window.setRealLocalTime(); if (appPrefs && appPrefs.type) { selType(appPrefs.type); setTimeout(() => { if (document.getElementById('f-cat') && appPrefs.category) { document.getElementById('f-cat').value = appPrefs.category; document.getElementById('f-cat').dispatchEvent(new Event('change')); } if (document.getElementById('f-wallet') && appPrefs.wallet) { document.getElementById('f-wallet').value = appPrefs.wallet; document.getElementById('f-wallet').dispatchEvent(new Event('change')); } }, 10); } else { selType('income'); } }, 800);
      const recSelect = document.getElementById('f-recurring'); if(recSelect) { recSelect.value = ''; window.toggleRecTime(); }
  } catch(e) { Swal.fire({ position: 'center', icon: 'error', title: 'Koneksi Terputus / Error', text: e.message, showConfirmButton: true, background: 'var(--card)', color: 'var(--text)', backdrop: 'rgba(0,0,0,0.6)' }); saveBtn.textContent = 'COBA LAGI'; saveBtn.style.opacity = '1'; saveBtn.disabled = false; } 
};

window.toggleBatchMode = function() {
    batchMode = !batchMode;
    document.getElementById('btn-batch-del').style.display = batchMode ? 'inline-block' : 'none';
    renderAll();
};
window.execBatchDelete = async function() {
    const checkboxes = document.querySelectorAll('.batch-cb:checked');
    if(checkboxes.length === 0) return Swal.fire({icon:'info', title:'Kosong', text:'Pilih minimal 1 transaksi', background:'var(--card)', color:'var(--text)'});
    
    Swal.fire({ title: 'Hapus ' + checkboxes.length + ' Transaksi?', text: "Data akan dipindah ke Tempat Sampah.", icon: 'warning', showCancelButton: true, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Hapus', cancelButtonText: 'Batal' }).then(async (result) => { 
        if (result.isConfirmed) { 
            Swal.fire({title: 'Memproses...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
            try {
                for (let i = 0; i < checkboxes.length; i++) {
                    await updateDoc(doc(db, 'users', currentUser.uid, 'transactions', checkboxes[i].value), { isDeleted: true });
                }
                batchMode = false;
                document.getElementById('btn-batch-del').style.display = 'none';
                Swal.fire({icon: 'success', title: 'Masuk ke Tempat Sampah!', background:'var(--card)', color:'var(--text)', timer: 800, showConfirmButton: false});
            } catch(e) { Swal.fire('Error', e.message, 'error'); }
        } 
    });
};

window.showRecycleBin = function() {
    if(deletedTxs.length === 0) return Swal.fire({icon:'info', title:'Sampah Kosong', text:'Belum ada data yang terhapus.', background:'var(--card)', color:'var(--text)'});
    
    let html = '<div style="margin-bottom:12px;"><button onclick="emptyRecycleBin()" style="width:100%; background:rgba(248, 113, 113, 0.1); color:var(--red2); border:1px solid var(--red2); padding:10px; border-radius:8px; font-size:11px; font-weight:800; cursor:pointer; transition:0.2s;">🗑️ KOSONGKAN SEMUA SAMPAH</button></div>';
    html += '<div style="max-height:55vh; overflow-y:auto; text-align:left;">';
    
    deletedTxs.sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(t => {
        html += `
        <div style="padding:12px; border:1px solid var(--border); border-radius:12px; margin-bottom:8px; background:var(--bg2);">
            <div style="font-size:12px; font-weight:700; color:var(--text);">${escapeHTML(t.note)} (${t.category})</div>
            <div style="font-size:10px; color:var(--text3); margin-bottom:8px;">${fmtFull(t.amount)} | ${fmtDate(t.date)}</div>
            <div style="display:flex; gap:8px;">
                <button onclick="restoreTx('${t.id}')" style="background:rgba(16, 185, 129, 0.2); color:var(--green2); border:1px solid var(--green2); padding:6px 12px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer; flex:1;">PULIHKAN</button>
                <button onclick="hardDeleteTx('${t.id}')" style="background:rgba(248, 113, 113, 0.2); color:var(--red2); border:1px solid var(--red2); padding:6px 12px; border-radius:8px; font-size:10px; font-weight:bold; cursor:pointer; flex:1;">HAPUS PERMANEN</button>
            </div>
        </div>`;
    });
    html += '</div>';
    Swal.fire({title: 'Tempat Sampah 🗑️', html: html, showConfirmButton: false, background:'var(--card)', color:'var(--text)'});
};

window.emptyRecycleBin = async function() {
    Swal.fire({ title: 'Kosongkan Semua?', text: "Seluruh data di tempat sampah ini akan musnah selamanya dan tidak bisa dikembalikan.", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', confirmButtonText: 'Ya, Musnahkan', cancelButtonText: 'Batal', background: 'var(--card)', color: 'var(--text)'}).then(async (res) => {
        if(res.isConfirmed) {
            Swal.fire({title: 'Memusnahkan Data...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
            try {
                for (let t of deletedTxs) {
                    await deleteDoc(doc(db, 'users', currentUser.uid, 'transactions', t.id));
                }
                Swal.fire({icon:'success', title:'Bersih Total!', background:'var(--card)', color:'var(--text)', timer:800, showConfirmButton:false});
            } catch(e) {
                Swal.fire('Error', e.message, 'error');
            }
        }
    });
};

window.restoreTx = async function(id) {
    Swal.fire({title: 'Memulihkan...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
    await updateDoc(doc(db, 'users', currentUser.uid, 'transactions', id), { isDeleted: false });
    Swal.fire({icon:'success', title:'Dipulihkan', background:'var(--card)', color:'var(--text)', timer:800, showConfirmButton:false});
};
window.hardDeleteTx = async function(id) {
    Swal.fire({ title: 'Hapus Permanen?', text: "Tindakan ini tidak bisa dibatalkan.", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal', confirmButtonText: 'Ya, Hapus', background: 'var(--card)', color: 'var(--text)'}).then(async (res) => {
        if(res.isConfirmed) {
            Swal.fire({title: 'Menghapus...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
            await deleteDoc(doc(db, 'users', currentUser.uid, 'transactions', id));
            Swal.fire({icon:'success', title:'Terhapus Permanen', background:'var(--card)', color:'var(--text)', timer:800, showConfirmButton:false});
        }
    });
};

window.showBudgetSetup = async function() {
    let catOpts = window.userCats['expense'].map(c => `<option value="${c}">${c}</option>`).join('');
    let existingHtml = '';
    
    if (window.userBudgets && Object.keys(window.userBudgets).length > 0) {
        existingHtml = '<div style="font-size:10px; color:var(--gold); margin-bottom:12px; text-align:left;">BUDGET YANG SEDANG AKTIF:</div>';
        for (let c in window.userBudgets) {
            existingHtml += `<div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px; padding-bottom:4px; border-bottom:1px dashed var(--border2); color:var(--text);"><span>${c}</span><span style="font-family:'JetBrains Mono', monospace;">${fmtFull(window.userBudgets[c])}</span></div>`;
        }
        existingHtml += '<div style="margin-bottom:16px;"></div>';
    }
    
    const { value: formValues } = await Swal.fire({
        title: 'Target Budget / Kategori',
        html: existingHtml + `
            <div style="font-size:11px; color:var(--text3); margin-bottom:12px; text-align:left;">Pilih kategori pengeluaran dan set batas maksimalnya.<br><span style="color:var(--red2)">Ketik angka 0 untuk menghapus budget.</span></div>
            <select id="swal-budget-cat" class="f-input-dark" style="width:100%; margin-bottom:12px;">${catOpts}</select>
            <input id="swal-budget-amt" type="number" class="f-input-dark" style="width:100%;" placeholder="Nominal Budget (Cth: 1000000)">
        `,
        background: 'var(--card)', color: 'var(--text)',
        showCancelButton: true, confirmButtonText: 'SIMPAN BUDGET', cancelButtonText: 'Batal',
        confirmButtonColor: 'var(--gold)', cancelButtonColor: 'var(--bg3)',
        preConfirm: () => {
            let inputAmt = document.getElementById('swal-budget-amt').value;
            if (!inputAmt) return false;
            return { cat: document.getElementById('swal-budget-cat').value, amt: parseFloat(inputAmt) }
        }
    });
    
    if (formValues && formValues.amt !== undefined && !isNaN(formValues.amt)) {
        if (!window.userBudgets) window.userBudgets = {};
        if (formValues.amt === 0) { delete window.userBudgets[formValues.cat]; } else { window.userBudgets[formValues.cat] = formValues.amt; }
        await setDoc(doc(db, 'users', currentUser.uid, 'settings', 'preferences'), { budgets: window.userBudgets }, { merge: true });
        Swal.fire({icon:'success', title:'Budget Diperbarui!', background:'var(--card)', color:'var(--text)', timer: 1000, showConfirmButton: false});
        if(activePage === 'bulanan') renderMonthly();
    }
};

function renderBudgets(k) {
    const container = document.getElementById('budget-progress-container');
    if(!container) return;
    if(!window.userBudgets || Object.keys(window.userBudgets).length === 0) { container.innerHTML = ''; return; }
    const targetTxs = txs.filter(t => t.date.slice(0, 7) === k && t.type === 'expense');
    let expByCat = {};
    targetTxs.forEach(t => { expByCat[t.category] = (expByCat[t.category] || 0) + t.amount; });
    
    let html = '<div class="set-title" style="margin-top:24px;">📊 PROGRESS BUDGET BULAN INI</div><div style="padding:16px; background:var(--bg3); border-radius:16px; border:1px solid var(--border);">';
    for(let cat in window.userBudgets) {
        let limit = window.userBudgets[cat]; let spent = expByCat[cat] || 0;
        let pct = Math.min(100, Math.round((spent/limit)*100));
        let color = pct >= 100 ? 'var(--red2)' : (pct >= 80 ? 'var(--gold)' : 'var(--green2)');
        html += `
        <div style="margin-bottom:16px;">
            <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; margin-bottom:6px;">
                <span>${cat}</span><span style="color:${color}">${fmtFull(spent)} / ${fmtFull(limit)}</span>
            </div>
            <div class="m-bar" style="height:6px; background:var(--bg2);"><div class="m-bar-fill" style="width:${pct}%; background:${color};"></div></div>
        </div>`;
    }
    html += '</div>';
    container.innerHTML = html;
}

window.renderSavings = function() {
    const container = document.getElementById('savings-goals-container');
    if(!container) return;
    if(!window.savingsGoals || window.savingsGoals.length === 0) {
        container.innerHTML = '<div style="flex:1; text-align:center; padding:16px; color:var(--text3); font-size:12px; background:var(--bg3); border-radius:12px; border:1px dashed var(--border2);">Belum ada target tabungan yang dibuat.</div>';
        return;
    }
    let html = '';
    window.savingsGoals.forEach((g, idx) => {
        let pct = Math.min(100, Math.round((g.current / g.target) * 100));
        html += `
        <div class="w-card" style="flex: 1 1 300px; padding:16px; background:var(--bg2); border:1px solid var(--border); cursor:default;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <div style="font-weight:800; font-size:12px; color:var(--gold); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${g.name}</div>
                <button onclick="editGoal(${idx})" style="background:none; border:none; color:var(--text3); cursor:pointer; font-size:12px;">⚙️</button>
            </div>
            <div style="font-size:16px; font-weight:800; font-family:'JetBrains Mono', monospace; margin-bottom:2px; color:var(--text);">${fmtFull(g.current)}</div>
            <div style="font-size:9px; color:var(--text3); margin-bottom:12px; font-weight:600;">DARI TARGET ${fmtFull(g.target)}</div>
            <div class="m-bar" style="height:6px; background:var(--bg3); margin-bottom:12px;"><div class="m-bar-fill" style="width:${pct}%; background:var(--gold);"></div></div>
            <button onclick="addGoalProgress(${idx})" style="width:100%; padding:8px; background:transparent; border:1px solid var(--gold); color:var(--gold); border-radius:8px; font-weight:800; font-size:10px; cursor:pointer;">+ ISI TABUNGAN</button>
        </div>`;
    });
    container.innerHTML = html;
};

window.addSavingsGoal = async function() {
    const { value: formValues } = await Swal.fire({
        title: 'Buat Target Tabungan',
        html: `<input id="swal-g-name" class="f-input-dark" placeholder="Nama Target (Misal: Beli PC)" style="margin-bottom:12px;">
               <input id="swal-g-target" type="number" class="f-input-dark" placeholder="Target Nominal (Misal: 10000000)">`,
        focusConfirm: false, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--gold)', confirmButtonText: 'SIMPAN', showCancelButton: true, cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal',
        preConfirm: () => { return { name: document.getElementById('swal-g-name').value, target: parseFloat(document.getElementById('swal-g-target').value) } }
    });
    if(formValues && formValues.name && formValues.target) {
        if(!window.savingsGoals) window.savingsGoals = [];
        window.savingsGoals.push({ name: formValues.name, target: formValues.target, current: 0 });
        await savePreferencesData();
        renderSavings();
        Swal.fire({icon:'success', title:'Target Dibuat!', background:'var(--card)', color: 'var(--text)', timer:1000, showConfirmButton:false});
    }
};

window.addGoalProgress = async function(idx) {
    const { value: amt } = await Swal.fire({
        title: 'Isi Tabungan', input: 'number', inputPlaceholder: 'Nominal yang ditabung...',
        background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--gold)', confirmButtonText: 'TAMBAH', showCancelButton: true, cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal'
    });
    if(amt && !isNaN(amt)) {
        window.savingsGoals[idx].current += parseFloat(amt);
        await savePreferencesData();
        renderSavings();
        if(window.savingsGoals[idx].current >= window.savingsGoals[idx].target) {
            Swal.fire({icon:'success', title:'TARGET TERCAPAI! 🎉', text:`Selamat! Tabungan ${window.savingsGoals[idx].name} sudah penuh!`, background:'var(--card)', color:'var(--text)'});
        }
    }
};

window.editGoal = async function(idx) {
    Swal.fire({
        title: 'Opsi Tabungan', showDenyButton: true, showCancelButton: true,
        confirmButtonText: 'Edit Target', denyButtonText: 'Hapus Target', cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--blue)', denyButtonColor: 'var(--red2)', cancelButtonColor: 'var(--bg3)'
    }).then(async (res) => {
        if (res.isConfirmed) {
            const { value: formValues } = await Swal.fire({
                title: 'Edit Target',
                html: `<input id="swal-g-name-edit" class="f-input-dark" value="${window.savingsGoals[idx].name}" style="margin-bottom:12px;">
                       <input id="swal-g-target-edit" type="number" class="f-input-dark" value="${window.savingsGoals[idx].target}">`,
                focusConfirm: false, background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--gold)',
                preConfirm: () => { return { name: document.getElementById('swal-g-name-edit').value, target: parseFloat(document.getElementById('swal-g-target-edit').value) } }
            });
            if(formValues && formValues.name && formValues.target) {
                window.savingsGoals[idx].name = formValues.name; window.savingsGoals[idx].target = formValues.target;
                await savePreferencesData(); renderSavings();
            }
        } else if (res.isDenied) {
            window.savingsGoals.splice(idx, 1);
            await savePreferencesData(); renderSavings();
        }
    });
};

window.editTx = function(id) { 
    const t = txs.find(x => x.id === id); if (!t) return; 
    editId = id; selType(t.type); document.getElementById('f-amount').value = t.amount; 
    setTimeout(() => { if (document.getElementById('f-cat')) { document.getElementById('f-cat').value = t.category; document.getElementById('f-cat').dispatchEvent(new Event('change')); } }, 10); 
    if (document.getElementById('f-wallet') && t.wallet) { document.getElementById('f-wallet').value = t.wallet; document.getElementById('f-wallet').dispatchEvent(new Event('change')); } 
    if (document.getElementById('f-wallet-to') && t.walletTo) { document.getElementById('f-wallet-to').value = t.walletTo; document.getElementById('f-wallet-to').dispatchEvent(new Event('change')); } 
    document.getElementById('f-note').value = t.note === '-' ? '' : t.note; document.getElementById('f-date').value = t.date; document.getElementById('save-btn').textContent = 'UPDATE TRANSAKSI'; document.getElementById('cancel-edit-btn').style.display = 'block'; 
    switchPage('dashboard'); 
};

window.cancelEdit = function() { 
    editId = null; 
    document.getElementById('f-amount').value = ''; 
    document.getElementById('f-note').value = ''; 
    document.getElementById('f-date').value = nowISO(); 
    const recSelect = document.getElementById('f-recurring'); if(recSelect) { recSelect.value = ''; window.toggleRecTime(); }
    document.getElementById('save-btn').textContent = 'SIMPAN TRANSAKSI'; 
    document.getElementById('cancel-edit-btn').style.display = 'none'; 
};

window.selType = function(t) { 
    curType = t; document.getElementById('btn-inc').classList.toggle('active', t === 'income'); document.getElementById('btn-exp').classList.toggle('active', t === 'expense'); 
    const btnDebt = document.getElementById('btn-debt'); if (btnDebt) btnDebt.classList.toggle('active', t === 'debt'); 
    const btnRecv = document.getElementById('btn-recv'); if (btnRecv) btnRecv.classList.toggle('active', t === 'recv'); 
    const btnTransfer = document.getElementById('btn-transfer'); if (btnTransfer) btnTransfer.classList.toggle('active', t === 'transfer'); 
    const s = document.getElementById('f-cat'); if (s) { s.innerHTML = '<option value="">Pilih kategori...</option>'; if (window.userCats[t]) { window.userCats[t].forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; s.appendChild(o); }); } s.dispatchEvent(new Event('change')); } 
    const saveBtn = document.getElementById('save-btn'); if (saveBtn) { if (t === 'income') { saveBtn.style.background = 'var(--green2)'; saveBtn.style.color = '#000'; saveBtn.textContent = 'SIMPAN PEMASUKAN'; } else if (t === 'expense') { saveBtn.style.background = 'var(--red2)'; saveBtn.style.color = '#fff'; saveBtn.textContent = 'SIMPAN PENGELUARAN'; } else if (t === 'debt') { saveBtn.style.background = 'var(--gold)'; saveBtn.style.color = '#000'; saveBtn.textContent = 'CATAT HUTANG'; } else if (t === 'recv') { saveBtn.style.background = 'var(--blue)'; saveBtn.style.color = '#fff'; saveBtn.textContent = 'CATAT PIUTANG'; } else if (t === 'transfer') { saveBtn.style.background = 'var(--text)'; saveBtn.style.color = 'var(--bg)'; saveBtn.textContent = 'LAKUKAN TRANSFER'; } } 
    const catRow = document.getElementById('row-cat'); const walletToRow = document.getElementById('row-wallet-to'); const walletLabel = document.getElementById('label-wallet'); 
    if (t === 'transfer') { if (catRow) catRow.style.display = 'none'; if (walletToRow) walletToRow.style.display = 'block'; if (walletLabel) walletLabel.textContent = 'SUMBER DANA (ASAL)'; } else { if (catRow) catRow.style.display = 'block'; if (walletToRow) walletToRow.style.display = 'none'; if (walletLabel) walletLabel.textContent = 'SUMBER DANA / DOMPET'; } 
};

window.switchPage = function(p) { 
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active')); 
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active')); 
  document.getElementById('page-' + p).classList.add('active'); 
  const pages = ['dashboard', 'harian', 'mingguan', 'bulanan', 'tahunan', 'riwayat', 'admin']; 
  const idx = pages.indexOf(p); 
  if (idx !== -1) { document.querySelectorAll('.nav-btn')[idx].classList.add('active'); } 
  activePage = p; 
  refreshAll(); 
};

function calcSum(arr) { let inc = 0, exp = 0; arr.forEach(t => { if (t.type === 'income') { inc += t.amount; } else if (t.type === 'expense') { exp += t.amount; } else if (t.type === 'debt') { if (!t.isPaid) inc += t.amount; else { inc += t.amount; exp += t.amount; } } else if (t.type === 'recv') { if (!t.isPaid) exp += t.amount; else { exp += t.amount; inc += t.amount; } } }); return {inc, exp, bal: inc - exp, count: arr.length}; }

function renderSumGrid(el, arr, isDash = false) { 
    const s = calcSum(arr); const ts = calcSum(txs.filter(t => new Date(t.date).toDateString() === new Date().toDateString())); const pct = s.inc > 0 ? Math.min(100, Math.round((s.exp / s.inc) * 100)) : 0; 
    const warnStyle = (isDash && typeof extraPrefs !== 'undefined' && extraPrefs.ext_warnbalance === 'on' && s.bal < 50000) ? `style="border-color: var(--red2); box-shadow: 0 0 15px rgba(248,113,113,0.3);"` : ''; 
    const dailyColor = (typeof extraPrefs !== 'undefined' && extraPrefs.ext_budget === 'on' && ts.exp > 100000) ? 'color: var(--red2); text-shadow: 0 0 10px rgba(248,113,113,0.5);' : ''; 
    const dailyBorder = (typeof extraPrefs !== 'undefined' && extraPrefs.ext_budget === 'on' && ts.exp > 100000) ? 'border-color: rgba(248,113,113,0.5);' : ''; 
    el.innerHTML = ` 
    <div class="m-card inc"> <div class="m-label">TOTAL PEMASUKAN</div> <div class="m-val">${fmt(s.inc, isDash)}</div> <div class="usd-pill">${getUSD(s.inc)}</div> <div class="m-sub">${s.inc > 0 ? s.count + ' transaksi' : '-'}</div> <div class="m-bar"><div class="m-bar-fill" style="width:100%"></div></div> </div> 
    <div class="m-card exp"> <div class="m-label">TOTAL PENGELUARAN</div> <div class="m-val">${fmt(s.exp, isDash)}</div> <div class="usd-pill">${getUSD(s.exp)}</div> <div class="m-sub">${pct}% dari pemasukan</div> <div class="m-bar"><div class="m-bar-fill" style="width:${pct}%"></div></div> </div> 
    <div class="m-card bal" ${warnStyle}> <div class="m-label">SALDO BERSIH ${warnStyle !== '' ? '⚠️ KRITIS' : ''}</div> <div class="m-val">${fmt(s.bal, isDash)}</div> <div class="usd-pill">${getUSD(s.bal)}</div> <div class="m-sub">${s.bal >= 0 ? 'Surplus' : 'Defisit'}</div> <div class="m-bar"><div class="m-bar-fill" style="width:${s.inc > 0 ? Math.max(0, Math.min(100, Math.round((s.bal / s.inc) * 100))) : 0}%"></div></div> </div> 
    <div class="m-card cnt" style="${dailyBorder}"> <div class="m-label">HARI INI ${dailyColor ? '⚠️ OVER LIMIT' : ''}</div> <div class="m-val" style="${dailyColor}">${ts.count} transaksi</div> <div class="m-sub" style="font-weight:700;">+ ${fmt(ts.inc, isDash)} | - <span style="${dailyColor}">${fmt(ts.exp, isDash)}</span></div> <div class="m-bar"><div class="m-bar-fill" style="width:${ts.count > 0 ? 100 : 0}%; background: ${dailyColor ? 'var(--red2)' : 'var(--blue)'};"></div></div> </div> `; 
}

const escapeHTML = (str) => str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag]));

const createTxCard = (t) => { 
    let icon = t.type === 'income' ? '↑' : t.type === 'expense' ? '↓' : t.type === 'debt' ? '💳' : t.type === 'transfer' ? '🔄' : '💸'; 
    let sign = (t.type === 'income' || t.type === 'recv') ? '+' : (t.type === 'transfer' ? '' : '-'); 
    if (t.type === 'debt') sign = '-'; if (t.type === 'recv') sign = '-'; 
    let walletBadge = t.wallet ? `<span class="wallet-badge">${t.wallet}</span>` : ''; 
    if (t.type === 'transfer') walletBadge = `<span class="wallet-badge">${t.wallet} ➔ ${t.walletTo}</span>`; 
    
    let debtWarn = ''; 
    if (typeof extraPrefs !== 'undefined' && extraPrefs.ext_debtbadge === 'on') { if ((t.type === 'debt' || t.type === 'recv') && !t.isPaid) { debtWarn = `<div style="font-size:8px; font-weight:800; background:var(--red2); color:#000; padding:2px 6px; border-radius:4px; display:inline-block; margin-left:6px;">BELUM LUNAS</div>`; } } 
    
    let actionBtn = ''; 
    if (t.type === 'debt' && !t.isPaid) { actionBtn = `<button class="edit-btn-recent" style="color:var(--gold); border: 1px solid var(--gold); padding: 4px 8px; border-radius: 6px; background: rgba(251, 191, 36, 0.1);" onclick="payDebt('${t.id}')">LUNAS</button>`; } else if (t.type === 'debt' && t.isPaid) { actionBtn = `<span style="color:var(--green2); font-size:10px; font-weight:800; padding: 4px 0;">LUNAS ✅</span>`; } else if (t.type === 'recv' && !t.isPaid) { actionBtn = `<button class="edit-btn-recent" style="color:var(--blue); border: 1px solid var(--blue); padding: 4px 8px; border-radius: 6px; background: rgba(59, 130, 246, 0.1);" onclick="payRecv('${t.id}')">SUDAH BAYAR</button>`; } else if (t.type === 'recv' && t.isPaid) { actionBtn = `<span style="color:var(--green2); font-size:10px; font-weight:800; padding: 4px 0;">LUNAS ✅</span>`; } 
    
    let cbHtml = batchMode ? `<input type="checkbox" class="batch-cb" value="${t.id}" style="margin-right:12px; width:20px; height:20px; flex-shrink:0;">` : '';
    return `
    <div class="recent-item" data-id="${t.id}"> 
        <div class="ri-left"> 
            ${cbHtml}
            <div class="ri-icon ${t.type}">${icon}</div> 
            <div> 
                <div class="ri-note">${escapeHTML(t.note)} <span class="cat-badge">${t.category}</span>${walletBadge}${debtWarn}</div> 
                <div class="ri-meta">${fmtDate(t.date)} · ${fmtTime(t.date)}</div> 
            </div> 
        </div> 
        <div class="ri-right-wrap"> 
            <div class="ri-amounts-col"> 
                <div class="ri-amount ${t.type}">${sign}${fmtFull(t.amount)}</div> 
                <div class="ri-usd">${getUSD(t.amount)}</div> 
            </div> 
            <div class="action-btns"> 
                ${actionBtn} 
                <button class="edit-btn-recent" onclick="editTx('${t.id}')">EDIT</button> 
                <button class="edit-btn-recent" onclick="promptTransfer('${t.id}')" style="color:var(--text); border:1px solid var(--border2); background:var(--bg3);">TF</button>
                <button class="del-btn-recent" onclick="delTx('${t.id}')">HAPUS</button> 
            </div> 
        </div> 
    </div>`; 
};

function renderList(container, arr) { container.innerHTML = arr.length ? arr.map(t => createTxCard(t)).join('') : '<div style="padding:40px;text-align:center;color:#888;font-size:12px;">Kosong</div>'; }
function renderMetrics() { renderSumGrid(document.getElementById('metric-cards'), txs, true); }

window.promptKoreksi = async function(walletName, recordedBal) {
    if(!currentUser) return;
    const { value: formValues } = await Swal.fire({
        title: `Koreksi Saldo ${walletName}`,
        html: `<div style="font-size:12px; color:var(--text3); margin-bottom:16px;">Saldo Tercatat: <b style="color:var(--text);">${fmtFull(recordedBal)}</b></div>
               <div style="font-size:10px; color:var(--text3); margin-bottom:8px; text-align:left;">Masukkan saldo nyata kamu saat ini:</div>
               <input id="swal-koreksi-amt" type="number" class="f-input-dark" style="width:100%; margin-bottom:16px;" placeholder="Cth: 150000">
               <div style="font-size:10px; color:var(--text3); margin-bottom:8px; text-align:left;">Tulis Keterangan / Alasan:</div>
               <input id="swal-koreksi-note" type="text" class="f-input-dark" style="width:100%;" placeholder="Contoh: Lupa catat jajan kemaren...">`,
        showCancelButton: true, confirmButtonText: 'KOREKSI SALDO', cancelButtonText: 'Batal',
        background: 'var(--card)', color: 'var(--text)', confirmButtonColor: 'var(--blue)', cancelButtonColor: 'var(--bg3)',
        preConfirm: () => {
            const amt = document.getElementById('swal-koreksi-amt').value;
            const note = document.getElementById('swal-koreksi-note').value;
            if (!amt) { Swal.showValidationMessage('Saldo asli harus diisi!'); return false; }
            if (!note) { Swal.showValidationMessage('Keterangan harus diisi biar riwayatnya jelas!'); return false; }
            return { amt: parseFloat(amt), note: note };
        }
    });

    if(formValues) {
        const actual = formValues.amt;
        const userNote = formValues.note;
        const diff = actual - recordedBal;
        if(diff === 0) return Swal.fire({icon:'info', title:'Saldo Sudah Sesuai!', background:'var(--card)', color:'var(--text)'});
        
        const isSurplus = diff > 0;
        const typeStr = isSurplus ? 'income' : 'expense';
        const amt = Math.abs(diff);

        Swal.fire({
            title: 'Menyesuaikan...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}
        });
        
        try {
            await addDoc(collection(db, 'users', currentUser.uid, 'transactions'), {
               type: typeStr, amount: amt, category: 'Lainnya', wallet: walletName, note: userNote, date: new Date().toISOString(), ownerEmail: currentUser.email, createdAt: serverTimestamp(), isDeleted: false
            });
            Swal.fire({icon:'success', title:'Saldo Terkoreksi!', html:`Ditambahkan transaksi <b style="color:${isSurplus?'var(--green2)':'var(--red2)'}">${fmtFull(amt)}</b>`, background:'var(--card)', color:'var(--text)', timer: 1500, showConfirmButton: false});
        } catch(e) {
            Swal.fire('Error', e.message, 'error');
        }
    }
};

function renderWalletBalances() { 
    const wallets = { 'Kas Tunai': 0, 'DANA': 0, 'GoPay': 0, 'ShopeePay': 0, 'MT5 Trading': 0, 'Bank': 0 }; 
    let hutangBal = 0; let piutangBal = 0; let totalAset = 0; 
    txs.forEach(t => { 
        let w = t.wallet || 'Kas Tunai'; let wTo = t.walletTo; 
        if (w !== 'Hutang' && w !== 'Piutang' && !wallets.hasOwnProperty(w)) wallets[w] = 0; 
        if (wTo && wTo !== 'Hutang' && wTo !== 'Piutang' && !wallets.hasOwnProperty(wTo)) wallets[wTo] = 0; 
        if (t.type === 'income') { if (wallets.hasOwnProperty(w)) wallets[w] += t.amount; } else if (t.type === 'expense') { if (wallets.hasOwnProperty(w)) wallets[w] -= t.amount; } else if (t.type === 'transfer') { if (w === 'Hutang') hutangBal -= t.amount; else if (w === 'Piutang') piutangBal += t.amount; else if (wallets.hasOwnProperty(w)) wallets[w] -= t.amount; if (wTo === 'Hutang') hutangBal += t.amount; else if (wTo === 'Piutang') piutangBal -= t.amount; else if (wTo && wallets.hasOwnProperty(wTo)) wallets[wTo] += t.amount; } else if (t.type === 'debt') { if (wallets.hasOwnProperty(w)) wallets[w] += t.amount; if (!t.isPaid) { hutangBal -= t.amount; } else { if (wallets.hasOwnProperty(w)) wallets[w] -= t.amount; } } else if (t.type === 'recv') { if (wallets.hasOwnProperty(w)) wallets[w] -= t.amount; if (!t.isPaid) { piutangBal -= t.amount; } else { if (wallets.hasOwnProperty(w)) wallets[w] += t.amount; } } 
    }); 
    for (let key in wallets) { if (wallets[key] > 0) totalAset += wallets[key]; } 
    const container = document.getElementById('wallet-balances'); if (!container) return; 
    let html = Object.entries(wallets).filter(([name, bal]) => { if (typeof extraPrefs !== 'undefined' && extraPrefs.ext_hidezero === 'on' && bal === 0) return false; return true; }).map(([name, bal]) => { 
        let pct = (typeof extraPrefs !== 'undefined' && extraPrefs.ext_walletpct === 'on' && totalAset > 0 && bal > 0) ? `<div class="w-pct-badge" style="display:block;">${((bal/totalAset)*100).toFixed(1)}%</div>` : ''; 
        return `<div class="w-card" style="position:relative; cursor:pointer;" onclick="promptKoreksi('${name}', ${bal})" title="Klik untuk Koreksi Saldo">
                    <span style="position:absolute; top:8px; right:${pct ? '42px' : '8px'}; font-size:12px; opacity:0.4;">✏️</span>
                    ${pct}
                    <div class="w-label">${name}</div><div class="w-val ${bal < 0 ? 'min' : ''}">${fmtFull(bal)}</div><div class="usd-wallet-val" style="font-size: 8px; color: var(--text3); font-family: 'JetBrains Mono', monospace; margin-top: 2px;">${getUSD(bal)}</div>
                </div>` 
    }).join(''); 
    html += `
    <div style="grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 1fr; gap: inherit;"> 
        <div class="w-card" style="border-color:rgba(251, 191, 36, 0.5); background:rgba(251, 191, 36, 0.05);">
            <div class="w-label" style="color:var(--gold);">TOTAL HUTANG</div>
            <div class="w-val min">${fmtFull(hutangBal)}</div>
            <div class="usd-wallet-val" style="font-size: 8px; color: var(--text3); font-family: 'JetBrains Mono', monospace; margin-top: 2px;">${getUSD(hutangBal)}</div>
        </div> 
        <div class="w-card" style="border-color:rgba(59, 130, 246, 0.5); background:rgba(59, 130, 246, 0.05);">
            <div class="w-label" style="color:var(--blue);">TOTAL PIUTANG</div>
            <div class="w-val min">${fmtFull(piutangBal)}</div>
            <div class="usd-wallet-val" style="font-size: 8px; color: var(--text3); font-family: 'JetBrains Mono', monospace; margin-top: 2px;">${getUSD(piutangBal)}</div>
        </div> 
    </div>`; 
    container.innerHTML = html; 
}

function mkChart(id, labels, incData, expData) { 
    if (charts[id]) charts[id].destroy(); const c = document.getElementById(id); if (!c) return; 
    const isLight = document.body.classList.contains('light-mode'); const isMobile = window.innerWidth <= 768; 
    charts[id] = new Chart(c, { 
        type: 'bar', 
        data: { 
            labels, 
            datasets: [ 
                {label: 'Pemasukan', data: incData, backgroundColor: isLight ? '#10B981' : '#10B981', borderRadius: 4, barPercentage: 0.6}, 
                {label: 'Pengeluaran', data: expData, backgroundColor: isLight ? '#F87171' : '#F87171', borderRadius: 4, barPercentage: 0.6} 
            ] 
        }, 
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            plugins: {
                legend: {display: false},
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': Rp ' + new Intl.NumberFormat('id-ID').format(context.parsed.y);
                        }
                    },
                    titleFont: { family: "'Outfit'", size: 10 },
                    bodyFont: { family: "'Outfit'", size: 10 }
                }
            }, 
            scales: { 
                x: { 
                    ticks: {color: isLight ? '#888' : '#888', font: {size: isMobile ? 5 : 8, family: "'Outfit'", style: 'normal'}, autoSkip: false, maxRotation: 0, minRotation: 0}, 
                    grid: {display: false}, border: {display: false} 
                }, 
                y: { 
                    ticks: {
                        color: isLight ? '#888' : '#888', 
                        font: {size: isMobile ? 6 : 10, family: "'Outfit'", style: 'normal'}, 
                        callback: v => new Intl.NumberFormat('id-ID').format(v) 
                    }, 
                    grid: {color: isLight ? '#DEE2E6' : '#222228', drawBorder: false}, border: {display: false} 
                } 
            } 
        } 
    }); 
}

window.renderDaily = function() { const pick = document.getElementById('pick-daily').value; const target = pick ? new Date(pick).toDateString() : new Date().toDateString(); const arr = txs.filter(t => new Date(t.date).toDateString() === target).sort((a, b) => new Date(b.date) - new Date(a.date)); renderSumGrid(document.getElementById('daily-sum'), arr); renderList(document.getElementById('daily-body'), arr); };

function wkKey(d) { const dt = new Date(d); const day = dt.getDay(); const diff = dt.getDate() - day + (day === 0 ? -6 : 1); const monday = new Date(new Date(d).setDate(diff)); monday.setMinutes(monday.getMinutes() - monday.getTimezoneOffset()); return monday.toISOString().slice(0, 10); }

function renderWeekly() { const weeks = {}; txs.forEach(t => { const k = wkKey(t.date); (weeks[k] = weeks[k] || []).push(t); }); const keys = Object.keys(weeks).sort().reverse().slice(0, 8); document.getElementById('week-sel').innerHTML = keys.map((k, i) => { const m = new Date(k), s = new Date(k); s.setDate(s.getDate() + 6); return `<button class="p-btn${i === 0 ? ' active' : ''}" onclick="selWeek('${k}',this)">${m.toLocaleDateString('id-ID', {day: '2-digit', month: 'short'})} – ${s.toLocaleDateString('id-ID', {day: '2-digit', month: 'short'})}</button>`; }).join(''); if (keys.length) showWeek(keys[0]); }
window.selWeek = function(k, btn) { document.querySelectorAll('#week-sel .p-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); showWeek(k); };

function showWeek(k) {
    const arr = txs.filter(t => wkKey(t.date) === k).sort((a, b) => new Date(b.date) - new Date(a.date));
    renderSumGrid(document.getElementById('week-sum'), arr);
    renderList(document.getElementById('week-body'), arr);
    let incData = [0,0,0,0,0,0,0], expData = [0,0,0,0,0,0,0];
    arr.forEach(t => {
        let day = new Date(t.date).getDay();
        let idx = day === 0 ? 6 : day - 1;
        if (t.type === 'income') incData[idx] += t.amount;
        if (t.type === 'expense') expData[idx] += t.amount;
    });
    mkChart('chartWeek', ['Sen','Sel','Rab','Kam','Jum','Sab','Min'], incData, expData);
}

window.renderMonthly = function() {
    const months = {};
    txs.forEach(t => {
        const k = t.date.slice(0, 7);
        (months[k] = months[k] || []).push(t);
    });
    const keys = Object.keys(months).sort().reverse().slice(0, 12);
    document.getElementById('month-sel').innerHTML = keys.map((k, i) => {
        const [y, m] = k.split('-');
        const nama = new Date(y, m - 1).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' });
        return `<button class="p-btn${i === 0 ? ' active' : ''}" onclick="selMonth('${k}',this)">${nama}</button>`;
    }).join('');
    if (keys.length) showMonth(keys[0]);
};
window.selMonth = function(k, btn) {
    document.querySelectorAll('#month-sel .p-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showMonth(k);
};
function showMonth(k) {
    const arr = txs.filter(t => t.date.slice(0, 7) === k).sort((a, b) => new Date(b.date) - new Date(a.date));
    renderSumGrid(document.getElementById('month-sum'), arr);
    renderList(document.getElementById('month-body'), arr);
    if(window.renderBudgets) renderBudgets(k);
    let days = new Date(k.split('-')[0], k.split('-')[1], 0).getDate();
    let labels = Array.from({length: days}, (_, i) => i + 1);
    let incData = new Array(days).fill(0), expData = new Array(days).fill(0);
    arr.forEach(t => {
        let d = new Date(t.date).getDate() - 1;
        if (t.type === 'income') incData[d] += t.amount;
        if (t.type === 'expense') expData[d] += t.amount;
    });
    mkChart('chartMonth', labels, incData, expData);
}

window.renderYearly = function() {
    const years = {};
    txs.forEach(t => {
        const k = t.date.slice(0, 4);
        (years[k] = years[k] || []).push(t);
    });
    const keys = Object.keys(years).sort().reverse();
    document.getElementById('year-sel').innerHTML = keys.map((k, i) => {
        return `<button class="p-btn${i === 0 ? ' active' : ''}" onclick="selYear('${k}',this)">${k}</button>`;
    }).join('');
    if (keys.length) showYear(keys[0]);
};
window.selYear = function(k, btn) {
    document.querySelectorAll('#year-sel .p-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showYear(k);
};
function showYear(k) {
    const arr = txs.filter(t => t.date.slice(0, 4) === k).sort((a, b) => new Date(b.date) - new Date(a.date));
    renderSumGrid(document.getElementById('year-sum'), arr);
    renderList(document.getElementById('year-body'), arr);
    let incData = new Array(12).fill(0), expData = new Array(12).fill(0);
    arr.forEach(t => {
        let m = new Date(t.date).getMonth();
        if (t.type === 'income') incData[m] += t.amount;
        if (t.type === 'expense') expData[m] += t.amount;
    });
    mkChart('chartYear', ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Ags','Sep','Okt','Nov','Des'], incData, expData);
}

window.renderAll = function() {
    let arr = [...txs];
    const typeFilter = document.getElementById('flt-type').value;
    const searchFilter = document.getElementById('flt-search').value.toLowerCase();
    if (typeFilter) arr = arr.filter(t => t.type === typeFilter);
    if (searchFilter) arr = arr.filter(t => t.note.toLowerCase().includes(searchFilter) || t.category.toLowerCase().includes(searchFilter));
    arr.sort((a, b) => new Date(b.date) - new Date(a.date));
    renderSumGrid(document.getElementById('all-sum'), arr);
    renderList(document.getElementById('all-body'), arr);
    
    let incData = [0,0,0,0,0,0], expData = [0,0,0,0,0,0], labels = [];
    for (let i=5; i>=0; i--) {
        let d = new Date(); d.setMonth(d.getMonth() - i);
        labels.push(d.toLocaleDateString('id-ID', {month:'short', year:'2-digit'}));
        let k = d.toISOString().slice(0,7);
        arr.forEach(t => {
            if (t.date.slice(0,7) === k) {
                if (t.type === 'income') incData[5-i] += t.amount;
                if (t.type === 'expense') expData[5-i] += t.amount;
            }
        });
    }
    mkChart('chartRiwayat', labels, incData, expData);
};

window.exportCSV = function() {
    if (!txs.length) return Swal.fire({icon: 'warning', title: 'Data Kosong!', background: 'var(--card)', color: 'var(--text)'});
    let csv = 'Tanggal,Waktu,Tipe,Kategori,Dompet,Catatan,Jumlah,Status\n';
    txs.forEach(t => {
        let status = (t.type === 'debt' || t.type === 'recv') ? (t.isPaid ? 'Lunas' : 'Belum Lunas') : 'Selesai';
        csv += `"${fmtDate(t.date)}","${fmtTime(t.date)}","${t.type}","${t.category}","${t.wallet}","${t.note.replace(/"/g, '""')}","${t.amount}","${status}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'RHN_Capital_Export.csv'; a.click();
    window.URL.revokeObjectURL(url);
};

window.payDebt = async function(id) {
    Swal.fire({title: 'Lunasi Hutang?', text: "Saldo dompet terkait akan terpotong sesuai nominal.", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--gold)', cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal', background:'var(--card)', color:'var(--text)', confirmButtonText: 'LUNASKAN'}).then(async (res) => {
        if (res.isConfirmed) {
            Swal.fire({title: 'Memproses...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
            await updateDoc(doc(db, 'users', currentUser.uid, 'transactions', id), { isPaid: true });
            Swal.fire({icon: 'success', title: 'Hutang Lunas!', background:'var(--card)', color:'var(--text)', timer: 800, showConfirmButton: false});
        }
    });
};

window.payRecv = async function(id) {
    Swal.fire({title: 'Terima Pembayaran Piutang?', text: "Saldo dompet terkait akan bertambah sesuai nominal.", icon: 'warning', showCancelButton: true, confirmButtonColor: 'var(--blue)', cancelButtonColor: 'var(--bg3)', cancelButtonText: 'Batal', background:'var(--card)', color:'var(--text)', confirmButtonText: 'SUDAH DIBAYAR'}).then(async (res) => {
        if (res.isConfirmed) {
            Swal.fire({title: 'Memproses...', background:'var(--card)', color:'var(--text)', didOpen: () => {Swal.showLoading()}});
            await updateDoc(doc(db, 'users', currentUser.uid, 'transactions', id), { isPaid: true });
            Swal.fire({icon: 'success', title: 'Piutang Lunas!', background:'var(--card)', color:'var(--text)', timer: 800, showConfirmButton: false});
        }
    });
};

window.setRealLocalTime = function() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const isoTime = now.toISOString().slice(0, 16);
    
    const dt = document.getElementById('f-date');
    if (dt) dt.value = isoTime;
    
    const qrisDt = document.getElementById('qris-date');
    if (qrisDt) qrisDt.value = isoTime;
};

function refreshAll() {
    if (activePage === 'dashboard') { renderMetrics(); renderWalletBalances(); const arr = txs.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 20); renderList(document.getElementById('recent-list'), arr); renderSavings(); }
    else if (activePage === 'harian') renderDaily();
    else if (activePage === 'mingguan') renderWeekly();
    else if (activePage === 'bulanan') renderMonthly();
    else if (activePage === 'tahunan') renderYearly();
    else if (activePage === 'riwayat') renderAll();
    // BAGIAN ADMIN DIHAPUS DARI SINI BIAR GAK AUTO-LOAD & SPAM POPUP
}

setInterval(() => {
    const btn = document.getElementById('save-btn');
    if (btn && btn.textContent.includes('TERSIMPAN')) {
        btn.style.background = curType === 'income' ? 'var(--green2)' : curType === 'expense' ? 'var(--red2)' : curType === 'debt' ? 'var(--gold)' : curType === 'recv' ? 'var(--blue)' : 'var(--text)';
        btn.style.color = (curType === 'income' || curType === 'debt') ? '#000' : '#fff';
        btn.textContent = curType === 'income' ? 'SIMPAN PEMASUKAN' : curType === 'expense' ? 'SIMPAN PENGELUARAN' : curType === 'debt' ? 'CATAT HUTANG' : curType === 'recv' ? 'CATAT PIUTANG' : 'LAKUKAN TRANSFER';
    }
}, 3000);

document.addEventListener('DOMContentLoaded', () => { window.setRealLocalTime(); });
</script>
</body>
</html>
