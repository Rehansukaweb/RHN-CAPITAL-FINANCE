<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="color-scheme" content="light dark">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Arus Keuangan — RHN CAPITAL</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
  <style>
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }

    :root {
      /* === LUXURY GREEN & WHITE PALETTE === */
      --emerald:        #1A5C3A;
      --emerald-deep:   #0F3D26;
      --emerald-mid:    #2E7D52;
      --emerald-light:  #3DAA70;
      --emerald-pale:   #E8F5EE;
      --emerald-mist:   #F2FAF6;

      --gold:           #C9A84C;
      --gold-light:     #E8C97A;
      --gold-pale:      #FDF6E7;

      --white:          #FFFFFF;
      --off-white:      #FAFCFB;
      --cream:          #F5F7F5;
      --border-light:   #D6E8DC;
      --border-mid:     #A8CCBA;

      --text-primary:   #0A2416;
      --text-secondary: #2E5540;
      --text-muted:     #6B9480;
      --text-faint:     #9DBDAD;

      --danger:         #C0392B;
      --danger-pale:    #FDF0EE;
      --success:        #1A7A4A;
      --success-pale:   #E6F4EC;

      --radius-sm:  8px;
      --radius-md:  14px;
      --radius-lg:  20px;
      --radius-xl:  28px;

      --shadow-xs:  0 1px 4px rgba(15,61,38,0.06);
      --shadow-sm:  0 2px 12px rgba(15,61,38,0.08);
      --shadow-md:  0 8px 32px rgba(15,61,38,0.12);
      --shadow-lg:  0 20px 60px rgba(15,61,38,0.16);
    }

    /* DARK MODE */
    body.dark {
      --white:          #0C1F16;
      --off-white:      #0F2519;
      --cream:          #132A1E;
      --border-light:   #1E4030;
      --border-mid:     #2A5A40;
      --emerald-pale:   #132A1E;
      --emerald-mist:   #0F2519;

      --text-primary:   #E8F5EE;
      --text-secondary: #A8CCBA;
      --text-muted:     #6B9480;
      --text-faint:     #3A6050;

      --danger-pale:    #2A1010;
      --success-pale:   #0F2519;
    }

    html, body {
      height: 100%;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--off-white);
      color: var(--text-primary);
      font-size: 14px;
      line-height: 1.6;
      overflow-x: hidden;
      transition: background 0.4s ease, color 0.4s ease;
    }

    /* ===================== SCROLLBAR ===================== */
    ::-webkit-scrollbar { width: 4px; height: 4px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--border-mid); border-radius: 4px; }

    /* ===================== AUTH SCREEN ===================== */
    #auth-screen {
      position: fixed;
      inset: 0;
      background: linear-gradient(145deg, var(--emerald-deep) 0%, var(--emerald) 50%, var(--emerald-mid) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      overflow: hidden;
    }

    #auth-screen::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        radial-gradient(circle at 20% 20%, rgba(201,168,76,0.12) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(201,168,76,0.08) 0%, transparent 50%);
      pointer-events: none;
    }

    #auth-screen::after {
      content: '';
      position: absolute;
      top: -120px; right: -120px;
      width: 400px; height: 400px;
      border: 1px solid rgba(201,168,76,0.15);
      border-radius: 50%;
      pointer-events: none;
    }

    .auth-box {
      position: relative;
      background: rgba(255,255,255,0.97);
      backdrop-filter: blur(20px);
      border-radius: var(--radius-xl);
      padding: 48px 40px;
      width: 92%;
      max-width: 420px;
      box-shadow: var(--shadow-lg), 0 0 0 1px rgba(201,168,76,0.2);
      animation: authSlideUp 0.6s cubic-bezier(0.16,1,0.3,1);
    }

    @keyframes authSlideUp {
      from { opacity: 0; transform: translateY(32px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    .auth-brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 32px;
    }

    .auth-logo-ring {
      width: 64px; height: 64px;
      border-radius: 18px;
      border: 2px solid var(--gold);
      padding: 3px;
      margin-bottom: 14px;
      box-shadow: 0 4px 20px rgba(201,168,76,0.25);
    }

    .auth-logo-ring img {
      width: 100%; height: 100%;
      border-radius: 13px;
      object-fit: cover;
    }

    .auth-brand-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 26px;
      font-weight: 700;
      color: var(--emerald-deep);
      letter-spacing: 2px;
    }

    .auth-brand-sub {
      font-size: 10px;
      font-weight: 500;
      color: var(--gold);
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-top: 2px;
    }

    .auth-tabs {
      display: flex;
      background: var(--cream);
      border-radius: var(--radius-md);
      padding: 4px;
      margin-bottom: 24px;
      border: 1px solid var(--border-light);
    }

    .auth-tab {
      flex: 1;
      padding: 11px;
      font-size: 12px;
      font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      background: transparent;
      border: none;
      color: var(--text-muted);
      border-radius: 10px;
      letter-spacing: 0.5px;
      transition: all 0.2s;
    }

    .auth-tab.active {
      background: var(--white);
      color: var(--emerald-deep);
      box-shadow: var(--shadow-xs);
    }

    .auth-err {
      background: var(--danger-pale);
      border: 1px solid rgba(192,57,43,0.2);
      color: var(--danger);
      font-size: 12px;
      padding: 10px 14px;
      border-radius: var(--radius-sm);
      margin-bottom: 14px;
      display: none;
    }

    .auth-input {
      width: 100%;
      padding: 14px 16px;
      font-size: 14px;
      font-weight: 400;
      font-family: 'DM Sans', sans-serif;
      border: 1.5px solid var(--border-light);
      border-radius: var(--radius-md);
      background: var(--off-white);
      color: #0A2416;
      margin-bottom: 12px;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .auth-input:focus {
      border-color: var(--emerald-light);
      box-shadow: 0 0 0 3px rgba(61,170,112,0.12);
    }

    .auth-input::placeholder { color: #9DBDAD; }

    .auth-btn {
      width: 100%;
      padding: 15px;
      background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-mid) 100%);
      color: #fff;
      border: none;
      border-radius: var(--radius-md);
      font-size: 12px;
      font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-top: 8px;
      transition: all 0.2s;
      box-shadow: 0 4px 16px rgba(26,92,58,0.3);
    }

    .auth-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 24px rgba(26,92,58,0.4);
    }

    .auth-btn:active { transform: translateY(0); }

    /* ===================== APP LAYOUT ===================== */
    #app-screen { display: none; min-height: 100vh; }

    /* SIDEBAR (desktop) */
    .sidebar {
      position: fixed;
      left: 0; top: 0; bottom: 0;
      width: 260px;
      background: linear-gradient(180deg, var(--emerald-deep) 0%, var(--emerald) 100%);
      display: flex;
      flex-direction: column;
      z-index: 100;
      transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
      overflow: hidden;
    }

    .sidebar::before {
      content: '';
      position: absolute;
      top: -80px; right: -80px;
      width: 260px; height: 260px;
      border: 1px solid rgba(201,168,76,0.12);
      border-radius: 50%;
      pointer-events: none;
    }

    .sidebar-brand {
      padding: 32px 24px 24px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .sidebar-logo {
      width: 42px; height: 42px;
      border-radius: 12px;
      border: 1.5px solid rgba(201,168,76,0.5);
      padding: 2px;
      flex-shrink: 0;
    }

    .sidebar-logo img {
      width: 100%; height: 100%;
      border-radius: 9px;
      object-fit: cover;
    }

    .sidebar-brand-text .name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 17px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 1.5px;
    }

    .sidebar-brand-text .sub {
      font-size: 9px;
      color: var(--gold-light);
      letter-spacing: 2.5px;
      text-transform: uppercase;
      font-weight: 500;
    }

    /* Sidebar external links */
    .sidebar-ext {
      padding: 16px 20px 8px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }

    .ext-link-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 8px 10px;
      background: transparent;
      border: none;
      color: rgba(255,255,255,0.55);
      font-size: 10px;
      font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: var(--radius-sm);
      text-align: left;
      transition: all 0.2s;
    }

    .ext-link-btn:hover {
      background: rgba(255,255,255,0.07);
      color: var(--gold-light);
    }

    .ext-link-btn .ext-dot {
      width: 5px; height: 5px;
      border-radius: 50%;
      background: var(--gold);
      opacity: 0.6;
      flex-shrink: 0;
    }

    /* Sidebar nav */
    .sidebar-nav {
      flex: 1;
      padding: 16px 16px;
      overflow-y: auto;
    }

    .nav-section-label {
      font-size: 9px;
      font-weight: 600;
      color: rgba(255,255,255,0.3);
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 0 8px;
      margin-bottom: 8px;
      margin-top: 16px;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 11px 14px;
      border-radius: var(--radius-md);
      cursor: pointer;
      color: rgba(255,255,255,0.6);
      font-size: 13px;
      font-weight: 500;
      transition: all 0.2s;
      border: none;
      background: transparent;
      width: 100%;
      text-align: left;
      letter-spacing: 0.2px;
    }

    .nav-item:hover {
      background: rgba(255,255,255,0.07);
      color: rgba(255,255,255,0.9);
    }

    .nav-item.active {
      background: rgba(255,255,255,0.12);
      color: #fff;
      box-shadow: inset 0 0 0 1px rgba(201,168,76,0.25);
    }

    .nav-item .nav-icon {
      width: 18px; height: 18px;
      opacity: 0.7;
      flex-shrink: 0;
    }

    .nav-item.active .nav-icon { opacity: 1; }

    .nav-item .nav-pip {
      width: 5px; height: 5px;
      border-radius: 50%;
      background: var(--gold);
      margin-left: auto;
      display: none;
    }

    .nav-item.active .nav-pip { display: block; }

    /* Sidebar footer */
    .sidebar-footer {
      padding: 16px 20px 24px;
      border-top: 1px solid rgba(255,255,255,0.08);
    }

    .user-card-sidebar {
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255,255,255,0.07);
      border-radius: var(--radius-md);
      padding: 12px 14px;
    }

    .user-avatar-sidebar {
      width: 34px; height: 34px;
      border-radius: 10px;
      background: var(--gold);
      display: flex; align-items: center; justify-content: center;
      font-weight: 700;
      font-size: 13px;
      color: var(--emerald-deep);
      flex-shrink: 0;
    }

    .user-info-sidebar .uname {
      font-size: 12px;
      font-weight: 600;
      color: #fff;
      line-height: 1.3;
    }

    .user-info-sidebar .urole {
      font-size: 10px;
      color: rgba(255,255,255,0.4);
    }

    .logout-btn-sidebar {
      margin-left: auto;
      background: transparent;
      border: 1px solid rgba(255,255,255,0.15);
      color: rgba(255,255,255,0.4);
      width: 28px; height: 28px;
      border-radius: 8px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 12px;
      transition: all 0.2s;
      flex-shrink: 0;
    }

    .logout-btn-sidebar:hover {
      border-color: rgba(192,57,43,0.5);
      color: #E07070;
    }

    /* ===================== MAIN CONTENT ===================== */
    .main-content {
      margin-left: 260px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Top Bar */
    .topbar {
      position: sticky; top: 0; z-index: 50;
      background: rgba(250,252,251,0.92);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border-light);
      padding: 14px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      transition: background 0.4s;
    }

    body.dark .topbar {
      background: rgba(12,31,22,0.92);
    }

    .topbar-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .topbar-page-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 22px;
      font-weight: 700;
      color: var(--emerald-deep);
      letter-spacing: 0.5px;
    }

    body.dark .topbar-page-title { color: var(--emerald-light); }

    .topbar-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .usd-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--emerald-pale);
      border: 1px solid var(--border-light);
      border-radius: 100px;
      padding: 7px 14px;
    }

    .usd-label {
      font-size: 9px;
      font-weight: 700;
      color: var(--text-muted);
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .usd-value {
      font-family: 'DM Mono', monospace;
      font-size: 13px;
      font-weight: 500;
      color: var(--emerald);
    }

    .sync-badge {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 7px 12px;
      background: var(--cream);
      border: 1px solid var(--border-light);
      border-radius: 100px;
    }

    .sync-dot {
      width: 7px; height: 7px;
      border-radius: 50%;
      background: var(--text-faint);
      transition: background 0.3s;
    }

    .sync-dot.live {
      background: var(--success);
      box-shadow: 0 0 0 3px rgba(26,122,74,0.15);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 3px rgba(26,122,74,0.15); }
      50%       { box-shadow: 0 0 0 6px rgba(26,122,74,0.05); }
    }

    .sync-text {
      font-size: 9px;
      font-weight: 700;
      color: var(--text-muted);
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .theme-toggle-btn {
      width: 36px; height: 36px;
      border-radius: 10px;
      background: var(--cream);
      border: 1px solid var(--border-light);
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 16px;
      transition: all 0.2s;
    }

    .theme-toggle-btn:hover {
      background: var(--emerald-pale);
      border-color: var(--border-mid);
    }

    /* Hamburger (mobile) */
    .hamburger {
      display: none;
      width: 36px; height: 36px;
      border-radius: 10px;
      background: var(--cream);
      border: 1px solid var(--border-light);
      cursor: pointer;
      align-items: center; justify-content: center;
      flex-direction: column;
      gap: 4px;
    }

    .hamburger span {
      display: block;
      width: 16px; height: 1.5px;
      background: var(--emerald);
      border-radius: 2px;
      transition: all 0.3s;
    }

    /* Page container */
    .pages-wrap {
      flex: 1;
      padding: 32px;
    }

    .page { display: none; animation: pageIn 0.35s ease; }
    .page.active { display: block; }

    @keyframes pageIn {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ===================== METRIC CARDS ===================== */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 28px;
    }

    .metric-card {
      background: var(--white);
      border-radius: var(--radius-lg);
      padding: 20px 22px;
      border: 1px solid var(--border-light);
      box-shadow: var(--shadow-xs);
      position: relative;
      overflow: hidden;
      transition: box-shadow 0.2s, transform 0.2s;
    }

    .metric-card:hover {
      box-shadow: var(--shadow-sm);
      transform: translateY(-1px);
    }

    .metric-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }

    .metric-card.inc::before  { background: linear-gradient(90deg, var(--emerald), var(--emerald-light)); }
    .metric-card.exp::before  { background: linear-gradient(90deg, var(--danger), #E85D52); }
    .metric-card.bal::before  { background: linear-gradient(90deg, var(--gold), var(--gold-light)); }
    .metric-card.cnt::before  { background: linear-gradient(90deg, var(--emerald-mid), var(--emerald-light)); }

    .metric-icon {
      width: 36px; height: 36px;
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 16px;
      margin-bottom: 14px;
    }

    .metric-card.inc .metric-icon { background: var(--success-pale); }
    .metric-card.exp .metric-icon { background: var(--danger-pale); }
    .metric-card.bal .metric-icon { background: var(--gold-pale); }
    .metric-card.cnt .metric-icon { background: var(--emerald-pale); }

    .metric-label {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 6px;
    }

    .metric-value {
      font-family: 'DM Mono', monospace;
      font-size: 20px;
      font-weight: 500;
      color: var(--text-primary);
      margin-bottom: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .metric-usd {
      font-family: 'DM Mono', monospace;
      font-size: 11px;
      color: var(--text-faint);
      margin-bottom: 12px;
    }

    .metric-sub {
      font-size: 11px;
      color: var(--text-muted);
      margin-bottom: 12px;
    }

    .metric-bar {
      height: 3px;
      background: var(--border-light);
      border-radius: 2px;
      overflow: hidden;
    }

    .metric-bar-fill {
      height: 100%;
      border-radius: 2px;
      transition: width 0.8s cubic-bezier(0.16,1,0.3,1);
    }

    .metric-card.inc .metric-bar-fill { background: var(--emerald); }
    .metric-card.exp .metric-bar-fill { background: var(--danger); }
    .metric-card.bal .metric-bar-fill { background: var(--gold); }
    .metric-card.cnt .metric-bar-fill { background: var(--emerald-mid); }

    /* ===================== LAYOUT PANELS ===================== */
    .panel-grid {
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 24px;
      align-items: start;
    }

    /* ===================== CARDS ===================== */
    .card {
      background: var(--white);
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-light);
      box-shadow: var(--shadow-xs);
      overflow: hidden;
      margin-bottom: 24px;
    }

    .card-header {
      padding: 22px 24px 0;
    }

    .card-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 20px;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: 0.3px;
    }

    .card-sub {
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 2px;
    }

    .card-divider {
      height: 1px;
      background: var(--border-light);
      margin: 18px 0 0;
    }

    .card-body { padding: 22px 24px; }

    /* ===================== FORM ELEMENTS ===================== */
    .type-toggle {
      display: flex;
      background: var(--cream);
      border: 1px solid var(--border-light);
      border-radius: var(--radius-md);
      padding: 4px;
      margin-bottom: 22px;
    }

    .t-btn {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      background: transparent;
      color: var(--text-muted);
      transition: all 0.2s;
      letter-spacing: 0.5px;
    }

    .t-btn.income.active {
      background: var(--white);
      color: var(--success);
      box-shadow: var(--shadow-xs);
    }

    .t-btn.expense.active {
      background: var(--white);
      color: var(--danger);
      box-shadow: var(--shadow-xs);
    }

    .form-group { margin-bottom: 16px; }

    .form-label {
      display: block;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 7px;
    }

    .f-input {
      width: 100%;
      padding: 13px 16px;
      font-size: 14px;
      font-family: 'DM Sans', sans-serif;
      font-weight: 400;
      background: var(--off-white);
      border: 1.5px solid var(--border-light);
      border-radius: var(--radius-md);
      color: var(--text-primary);
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      appearance: none;
      -webkit-appearance: none;
    }

    .f-input:focus {
      border-color: var(--emerald-light);
      box-shadow: 0 0 0 3px rgba(61,170,112,0.1);
      background: var(--white);
    }

    .f-input::placeholder { color: var(--text-faint); }

    textarea.f-input { height: 96px; resize: none; }

    select.f-input {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B9480' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 14px center;
      padding-right: 38px;
      cursor: pointer;
    }

    select.f-input option { background: var(--white); color: var(--text-primary); }

    .submit-btn {
      width: 100%;
      padding: 15px;
      background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-mid) 100%);
      color: #fff;
      border: none;
      border-radius: var(--radius-md);
      font-size: 11px;
      font-weight: 700;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-top: 6px;
      transition: all 0.2s;
      box-shadow: 0 4px 14px rgba(26,92,58,0.25);
    }

    .submit-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 24px rgba(26,92,58,0.35);
    }

    .submit-btn:active { transform: translateY(0); }

    /* ===================== TRANSACTION LIST ===================== */
    .tx-list { padding: 0 4px; }

    .tx-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px;
      border-radius: var(--radius-md);
      margin-bottom: 6px;
      border: 1px solid transparent;
      transition: all 0.2s;
      gap: 12px;
    }

    .tx-item:hover {
      background: var(--emerald-mist);
      border-color: var(--border-light);
    }

    .tx-icon {
      width: 38px; height: 38px;
      border-radius: 11px;
      display: flex; align-items: center; justify-content: center;
      font-size: 15px;
      font-weight: 800;
      flex-shrink: 0;
    }

    .tx-icon.inc { background: var(--success-pale); color: var(--success); }
    .tx-icon.exp { background: var(--danger-pale);  color: var(--danger); }

    .tx-body { flex: 1; min-width: 0; }

    .tx-note {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tx-meta {
      font-size: 11px;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .cat-pill {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.5px;
      padding: 2px 7px;
      border-radius: 100px;
      background: var(--emerald-pale);
      color: var(--emerald-mid);
      border: 1px solid var(--border-light);
      text-transform: uppercase;
    }

    .tx-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; flex-shrink: 0; }

    .tx-amount {
      font-family: 'DM Mono', monospace;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-primary);
      white-space: nowrap;
    }

    .tx-amount.inc { color: var(--success); }
    .tx-amount.exp { color: var(--danger); }

    .tx-usd {
      font-family: 'DM Mono', monospace;
      font-size: 10px;
      color: var(--text-faint);
    }

    .del-btn {
      background: transparent;
      border: none;
      color: var(--text-faint);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.5px;
      cursor: pointer;
      text-transform: uppercase;
      padding: 2px 4px;
      border-radius: 4px;
      transition: color 0.2s;
    }

    .del-btn:hover { color: var(--danger); }

    .empty-state {
      text-align: center;
      padding: 48px 24px;
      color: var(--text-faint);
    }

    .empty-state .empty-icon { font-size: 32px; margin-bottom: 12px; }
    .empty-state p { font-size: 12px; }

    /* ===================== SUM GRID ===================== */
    .sum-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-bottom: 24px;
    }

    /* ===================== PERIOD BAR ===================== */
    .period-bar {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      scrollbar-width: none;
      margin-bottom: 20px;
      padding-bottom: 2px;
    }

    .period-bar::-webkit-scrollbar { display: none; }

    .period-btn {
      padding: 9px 18px;
      border: 1px solid var(--border-light);
      border-radius: 100px;
      font-size: 11px;
      font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      background: var(--white);
      color: var(--text-muted);
      white-space: nowrap;
      transition: all 0.2s;
    }

    .period-btn:hover { border-color: var(--emerald-light); color: var(--emerald); }

    .period-btn.active {
      background: var(--emerald);
      color: #fff;
      border-color: var(--emerald);
      box-shadow: 0 2px 10px rgba(26,92,58,0.25);
    }

    /* ===================== CHART ===================== */
    .chart-container {
      position: relative;
      height: 220px;
      margin-bottom: 4px;
    }

    .chart-legend {
      display: flex;
      gap: 20px;
      justify-content: center;
      margin-bottom: 18px;
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 7px;
      font-size: 11px;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .legend-dot {
      width: 8px; height: 8px;
      border-radius: 2px;
    }

    /* ===================== FILTER BAR ===================== */
    .filter-bar {
      display: flex;
      gap: 12px;
      margin-bottom: 22px;
      align-items: center;
    }

    .filter-bar .f-input { margin: 0; }

    .filter-select { width: 220px; flex-shrink: 0; }

    /* ===================== MOBILE OVERLAY ===================== */
    .sidebar-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.4);
      z-index: 99;
      backdrop-filter: blur(4px);
    }

    /* ===================== RESPONSIVE ===================== */
    @media (max-width: 900px) {
      .sidebar {
        transform: translateX(-100%);
      }

      .sidebar.open {
        transform: translateX(0);
        box-shadow: var(--shadow-lg);
      }

      .sidebar-overlay.open { display: block; }

      .main-content { margin-left: 0; }

      .hamburger { display: flex; }

      .topbar { padding: 12px 20px; }

      .pages-wrap { padding: 20px 16px; }

      .metrics-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }

      .panel-grid {
        grid-template-columns: 1fr;
      }

      .sum-grid {
        grid-template-columns: 1fr 1fr;
      }

      .sum-grid .metric-card:nth-child(3) {
        grid-column: span 2;
      }

      .filter-bar { flex-direction: column; }
      .filter-select { width: 100%; }

      .topbar-page-title { font-size: 18px; }

      .usd-badge { display: none; }
    }

    @media (max-width: 480px) {
      .metrics-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
      .metric-value { font-size: 16px; }
      .card-body { padding: 16px; }
      .card-header { padding: 16px 16px 0; }
    }
  </style>
</head>
<body>

<!-- ============================================================
     AUTH SCREEN
     ============================================================ -->
<div id="auth-screen">
  <div class="auth-box">
    <div class="auth-brand">
      <div class="auth-logo-ring">
        <img src="RHN LOGO.jpg" alt="RHN Capital">
      </div>
      <div class="auth-brand-name">RHN CAPITAL</div>
      <div class="auth-brand-sub">Arus Keuangan</div>
    </div>

    <div class="auth-tabs">
      <button class="auth-tab active" id="tab-login"    onclick="switchTab('login')">Masuk</button>
      <button class="auth-tab"        id="tab-register" onclick="switchTab('register')">Daftar</button>
    </div>

    <div class="auth-err" id="auth-err"></div>

    <input type="email"    id="auth-email" class="auth-input" placeholder="Alamat email">
    <input type="password" id="auth-pass"  class="auth-input" placeholder="Sandi"
           onkeydown="if(event.key==='Enter')doAuth()">
    <input type="password" id="auth-pass2" class="auth-input" placeholder="Ulangi sandi"
           style="display:none" id2="field-confirm">

    <div id="field-confirm" style="display:none">
      <input type="password" id="auth-pass2-wrap" class="auth-input" placeholder="Ulangi sandi">
    </div>

    <button class="auth-btn" id="auth-submit-btn" onclick="doAuth()">MASUK</button>
  </div>
</div>


<!-- ============================================================
     APP SCREEN
     ============================================================ -->
<div id="app-screen">

  <!-- SIDEBAR OVERLAY (mobile) -->
  <div class="sidebar-overlay" id="sidebar-overlay" onclick="closeSidebar()"></div>

  <!-- SIDEBAR -->
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
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
        </svg>
        Dashboard
        <span class="nav-pip"></span>
      </button>

      <button class="nav-item" onclick="switchPage('harian',this)">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
        </svg>
        Harian
        <span class="nav-pip"></span>
      </button>

      <button class="nav-item" onclick="switchPage('mingguan',this)">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 4-6"/>
        </svg>
        Mingguan
        <span class="nav-pip"></span>
      </button>

      <button class="nav-item" onclick="switchPage('bulanan',this)">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="8"/><rect x="13" y="6" width="3" height="12"/>
        </svg>
        Bulanan
        <span class="nav-pip"></span>
      </button>

      <button class="nav-item" onclick="switchPage('tahunan',this)">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>
        </svg>
        Tahunan
        <span class="nav-pip"></span>
      </button>

      <button class="nav-item" onclick="switchPage('riwayat',this)">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>
        </svg>
        Semua Riwayat
        <span class="nav-pip"></span>
      </button>
    </nav>

    <div class="sidebar-footer">
      <div class="user-card-sidebar">
        <div class="user-avatar-sidebar" id="user-avatar">?</div>
        <div class="user-info-sidebar">
          <div class="uname" id="user-name">Memuat...</div>
          <div class="urole">Member</div>
        </div>
        <button class="logout-btn-sidebar" onclick="doLogout()" title="Keluar">✕</button>
      </div>
    </div>
  </aside>

  <!-- MAIN CONTENT -->
  <div class="main-content">

    <!-- TOP BAR -->
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
        <button class="theme-toggle-btn" id="theme-toggle" onclick="toggleTheme()">🌙</button>
      </div>
    </header>

    <!-- PAGES -->
    <div class="pages-wrap">

      <!-- PAGE: DASHBOARD -->
      <div id="page-dashboard" class="page active">
        <div class="metrics-grid" id="metric-cards"></div>
        <div class="panel-grid">

          <!-- Form -->
          <div class="card">
            <div class="card-header">
              <div class="card-title">Tambah Transaksi</div>
              <div class="card-sub">Catat pemasukan atau pengeluaran baru</div>
              <div class="card-divider"></div>
            </div>
            <div class="card-body">
              <div class="type-toggle">
                <button class="t-btn income active" id="btn-inc" onclick="selType('income')">↑ Pemasukan</button>
                <button class="t-btn expense"        id="btn-exp" onclick="selType('expense')">↓ Pengeluaran</button>
              </div>
              <div class="form-group">
                <label class="form-label">Jumlah (Rp)</label>
                <input type="number" id="f-amount" class="f-input" placeholder="0">
              </div>
              <div class="form-group">
                <label class="form-label">Kategori</label>
                <select id="f-cat" class="f-input"></select>
              </div>
              <div class="form-group">
                <label class="form-label">Keterangan</label>
                <textarea id="f-note" class="f-input" placeholder="Catatan transaksi..."></textarea>
              </div>
              <div class="form-group">
                <label class="form-label">Waktu</label>
                <input type="datetime-local" id="f-date" class="f-input">
              </div>
              <button class="submit-btn" id="save-btn" onclick="addTx()">SIMPAN TRANSAKSI</button>
            </div>
          </div>

          <!-- Recent -->
          <div class="card">
            <div class="card-header">
              <div class="card-title">Aktivitas Terakhir</div>
              <div class="card-sub">10 transaksi terkini</div>
              <div class="card-divider"></div>
            </div>
            <div class="card-body" style="padding-top:14px;">
              <div id="recent-list" class="tx-list" style="max-height:560px;overflow-y:auto;"></div>
            </div>
          </div>

        </div>
      </div><!-- /dashboard -->

      <!-- PAGE: HARIAN -->
      <div id="page-harian" class="page">
        <div class="card" style="margin-bottom:20px;">
          <div class="card-body" style="display:flex;align-items:center;gap:14px;">
            <label class="form-label" style="margin:0;white-space:nowrap;">Pilih Tanggal</label>
            <input type="date" id="pick-daily" onchange="renderDaily()" class="f-input" style="margin:0;max-width:200px;">
          </div>
        </div>
        <div class="sum-grid" id="daily-sum"></div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">Laporan Harian</div>
            <div class="card-divider"></div>
          </div>
          <div class="card-body" style="padding-top:14px;">
            <div class="tx-list" id="daily-body"></div>
          </div>
        </div>
      </div>

      <!-- PAGE: MINGGUAN -->
      <div id="page-mingguan" class="page">
        <div class="period-bar" id="week-sel"></div>
        <div class="sum-grid" id="week-sum"></div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">Laporan Mingguan</div>
            <div class="card-divider"></div>
          </div>
          <div class="card-body">
            <div class="chart-legend">
              <div class="legend-item"><div class="legend-dot" style="background:var(--emerald)"></div>Pemasukan</div>
              <div class="legend-item"><div class="legend-dot" style="background:var(--danger)"></div>Pengeluaran</div>
            </div>
            <div class="chart-container"><canvas id="chartWeek"></canvas></div>
          </div>
          <div class="card-body" style="padding-top:0;">
            <div class="tx-list" id="week-body"></div>
          </div>
        </div>
      </div>

      <!-- PAGE: BULANAN -->
      <div id="page-bulanan" class="page">
        <div class="period-bar" id="month-sel"></div>
        <div class="sum-grid" id="month-sum"></div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">Laporan Bulanan</div>
            <div class="card-divider"></div>
          </div>
          <div class="card-body">
            <div class="chart-legend">
              <div class="legend-item"><div class="legend-dot" style="background:var(--emerald)"></div>Pemasukan</div>
              <div class="legend-item"><div class="legend-dot" style="background:var(--danger)"></div>Pengeluaran</div>
            </div>
            <div class="chart-container"><canvas id="chartMonth"></canvas></div>
          </div>
          <div class="card-body" style="padding-top:0;">
            <div class="tx-list" id="month-body"></div>
          </div>
        </div>
      </div>

      <!-- PAGE: TAHUNAN -->
      <div id="page-tahunan" class="page">
        <div class="period-bar" id="year-sel"></div>
        <div class="sum-grid" id="year-sum"></div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">Laporan Tahunan</div>
            <div class="card-divider"></div>
          </div>
          <div class="card-body">
            <div class="chart-legend">
              <div class="legend-item"><div class="legend-dot" style="background:var(--emerald)"></div>Pemasukan</div>
              <div class="legend-item"><div class="legend-dot" style="background:var(--danger)"></div>Pengeluaran</div>
            </div>
            <div class="chart-container"><canvas id="chartYear"></canvas></div>
          </div>
          <div class="card-body" style="padding-top:0;">
            <div class="tx-list" id="year-body"></div>
          </div>
        </div>
      </div>

      <!-- PAGE: RIWAYAT -->
      <div id="page-riwayat" class="page">
        <div class="sum-grid" id="all-sum"></div>
        <div class="card">
          <div class="card-header">
            <div class="card-title">Semua Riwayat</div>
            <div class="card-divider"></div>
          </div>
          <div class="card-body">
            <div class="filter-bar">
              <select id="flt-type" class="f-input filter-select" onchange="renderAll()">
                <option value="">Semua Tipe</option>
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

    </div><!-- /pages-wrap -->
  </div><!-- /main-content -->
</div><!-- /app-screen -->


<script type="module">

  /* ============================================================
     THEME
     ============================================================ */
  window.toggleTheme = function() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    document.getElementById('theme-toggle').textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('rhn-theme', isDark ? 'dark' : 'light');
    refreshAll();
  };

  if (localStorage.getItem('rhn-theme') === 'dark') {
    document.body.classList.add('dark');
    document.getElementById('theme-toggle').textContent = '☀️';
  }

  /* ============================================================
     MOBILE SIDEBAR
     ============================================================ */
  window.toggleSidebar = function() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('open');
  };

  window.closeSidebar = function() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('open');
  };

  /* ============================================================
     FIREBASE
     ============================================================ */
  import { initializeApp }
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
           signOut, onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { initializeFirestore, persistentLocalCache,
           collection, doc, addDoc, deleteDoc,
           onSnapshot, query, orderBy, serverTimestamp }
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey:            "AIzaSyCx04v3ppq3DxbXDg0PrWBeJYIZjmJF9cg",
    authDomain:        "rhn-capital.firebaseapp.com",
    projectId:         "rhn-capital",
    storageBucket:     "rhn-capital.firebasestorage.app",
    messagingSenderId: "74905216682",
    appId:             "1:74905216682:web:4687a5b0bd7bcac09292d3"
  };

  const app  = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db   = initializeFirestore(app, { localCache: persistentLocalCache() });

  /* ============================================================
     STATE & CONSTANTS
     ============================================================ */
  const CATS = {
    income:  ['Pemberian','Investasi','Ongkos Harian','Bonus','Dividen','Profit','Transfer Masuk','Lainnya'],
    expense: ['Jajan','Pembelian Aset(Investasi)','Infak','Kas','Utilitas','Transportasi','Makan','Minum','Loss','Lainnya']
  };

  const PAGE_TITLES = {
    dashboard: 'Dashboard',
    harian:    'Laporan Harian',
    mingguan:  'Laporan Mingguan',
    bulanan:   'Laporan Bulanan',
    tahunan:   'Laporan Tahunan',
    riwayat:   'Semua Riwayat'
  };

  let txs = [], curType = 'income', activePage = 'dashboard',
      charts = {}, currentUSDRate = 16000, currentUser = null,
      unsubListener = null, authMode = 'login';

  /* ============================================================
     HELPERS
     ============================================================ */
  const fmt     = n  => 'Rp ' + Math.round(n).toLocaleString('id-ID');
  const fmtDate = dt => new Date(dt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short' });
  const fmtTime = dt => new Date(dt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  const nowISO  = () => new Date().toISOString().slice(0, 16);
  const kursIndo = new Intl.NumberFormat('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const getUSD  = n  => '$' + (n / currentUSDRate).toFixed(2);

  /* ============================================================
     USD RATE
     ============================================================ */
  function initLiveUSD() {
    const socket = new WebSocket('wss://stream.binance.com:9443/ws/usdtidr@ticker');
    socket.addEventListener('message', e => {
      const p = parseFloat(JSON.parse(e.data).c);
      if (p && p !== currentUSDRate) {
        currentUSDRate = p;
        document.getElementById('usd-rate-val').textContent = kursIndo.format(p);
        refreshAll();
      }
    });
    socket.addEventListener('close', () => setTimeout(initLiveUSD, 3000));
  }

  async function fetchUSDRate() {
    try {
      const r = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      currentUSDRate = (await r.json()).rates.IDR;
      document.getElementById('usd-rate-val').textContent = kursIndo.format(currentUSDRate);
      refreshAll();
    } catch {
      document.getElementById('usd-rate-val').textContent = 'Offline';
    }
  }

  fetchUSDRate().then(initLiveUSD);
  setInterval(fetchUSDRate, 300000);

  /* ============================================================
     AUTH
     ============================================================ */
  function showErr(msg) {
    const el = document.getElementById('auth-err');
    el.textContent = msg;
    el.style.display = 'block';
  }

  function hideErr() {
    document.getElementById('auth-err').style.display = 'none';
  }

  function setLoading(on) {
    const btn = document.getElementById('auth-submit-btn');
    btn.disabled   = on;
    btn.textContent = on ? 'Memproses...' : (authMode === 'login' ? 'MASUK' : 'DAFTAR');
  }

  function setSyncStatus(ok) {
    const dot   = document.getElementById('sync-dot');
    const label = document.getElementById('sync-label');
    dot.style.background = ok ? 'var(--success)' : 'var(--danger)';
    dot.classList.toggle('live', ok);
    label.textContent = ok ? 'TERSINKRON' : 'OFFLINE';
  }

  window.switchTab = function(mode) {
    authMode = mode;
    document.getElementById('tab-login').classList.toggle('active',    mode === 'login');
    document.getElementById('tab-register').classList.toggle('active', mode === 'register');
    document.getElementById('field-confirm').style.display = mode === 'register' ? 'block' : 'none';
    document.getElementById('auth-submit-btn').textContent = mode === 'login' ? 'MASUK' : 'DAFTAR';
    hideErr();
  };

  window.doAuth = async function() {
    const email = document.getElementById('auth-email').value.trim();
    const pass  = document.getElementById('auth-pass').value;
    hideErr();
    if (!email || !pass) return showErr('Kredensial kosong.');
    setLoading(true);
    try {
      if (authMode === 'login') {
        await signInWithEmailAndPassword(auth, email, pass);
      } else {
        const pass2 = document.getElementById('auth-pass2').value;
        if (pass !== pass2) { setLoading(false); return showErr('Sandi beda.'); }
        await createUserWithEmailAndPassword(auth, email, pass);
      }
    } catch (e) {
      showErr(e.message);
      setLoading(false);
    }
  };

  window.doLogout = async function() {
    if (unsubListener) { unsubListener(); unsubListener = null; }
    txs = [];
    await signOut(auth);
  };

  onAuthStateChanged(auth, user => {
    if (user) {
      currentUser = user;
      document.getElementById('auth-screen').style.display = 'none';
      document.getElementById('app-screen').style.display  = 'block';
      setLoading(false);
      const name = user.displayName || user.email.split('@')[0];
      document.getElementById('user-name').textContent   = name;
      document.getElementById('user-avatar').textContent = name.charAt(0).toUpperCase();
      listenTransactions(user.uid);
    } else {
      currentUser = null;
      document.getElementById('auth-screen').style.display = 'flex';
      document.getElementById('app-screen').style.display  = 'none';
      if (unsubListener) { unsubListener(); unsubListener = null; }
      txs = [];
    }
  });

  function listenTransactions(uid) {
    if (unsubListener) unsubListener();
    unsubListener = onSnapshot(
      query(collection(db, 'users', uid, 'transactions'), orderBy('createdAt', 'desc')),
      snap  => { txs = snap.docs.map(d => ({ id: d.id, ...d.data() })); setSyncStatus(true); refreshAll(); },
      err   => { console.error(err); setSyncStatus(false); }
    );
  }

  /* ============================================================
     TRANSACTIONS
     ============================================================ */
  window.addTx = async function() {
    if (!currentUser) return;
    const amt  = parseFloat(document.getElementById('f-amount').value);
    const cat  = document.getElementById('f-cat').value;
    const note = document.getElementById('f-note').value.trim();
    const dt   = document.getElementById('f-date').value;
    if (!amt || !cat) return alert('Isi data yang lengkap.');
    const btn = document.getElementById('save-btn');
    btn.textContent = '...';
    try {
      await addDoc(collection(db, 'users', currentUser.uid, 'transactions'), {
        type: curType, amount: amt, category: cat,
        note: note || '-', date: dt || nowISO(), createdAt: serverTimestamp()
      });
      document.getElementById('f-amount').value = '';
      document.getElementById('f-note').value   = '';
    } catch (e) { alert(e.message); }
    btn.textContent = 'SIMPAN TRANSAKSI';
  };

  window.delTx = async function(id) {
    if (!currentUser || !confirm('Yakin mau hapus riwayat ini?')) return;
    await deleteDoc(doc(db, 'users', currentUser.uid, 'transactions', id));
  };

  window.selType = function(t) {
    curType = t;
    document.getElementById('btn-inc').classList.toggle('active', t === 'income');
    document.getElementById('btn-exp').classList.toggle('active', t === 'expense');
    const sel = document.getElementById('f-cat');
    sel.innerHTML = '<option value="">Pilih kategori...</option>';
    CATS[t].forEach(c => {
      const o = document.createElement('option');
      o.value = c; o.textContent = c;
      sel.appendChild(o);
    });
  };

  /* ============================================================
     NAVIGATION
     ============================================================ */
  window.switchPage = function(p, btn) {
    document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.getElementById('page-' + p).classList.add('active');
    if (btn) btn.classList.add('active');
    document.getElementById('topbar-title').textContent = PAGE_TITLES[p] || p;
    activePage = p;
    closeSidebar();
    refreshAll();
  };

  /* ============================================================
     RENDER HELPERS
     ============================================================ */
  function calcSum(arr) {
    const inc = arr.filter(t => t.type === 'income').reduce((s, t)  => s + t.amount, 0);
    const exp = arr.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    return { inc, exp, bal: inc - exp, count: arr.length };
  }

  function renderSumGrid(el, arr) {
    const s   = calcSum(arr);
    const pct = s.inc > 0 ? Math.min(100, Math.round((s.exp / s.inc) * 100)) : 0;
    const balPct = s.inc > 0 ? Math.max(0, Math.min(100, Math.round((s.bal / s.inc) * 100))) : 0;
    el.innerHTML = `
      <div class="metric-card inc">
        <div class="metric-label">Total Pemasukan</div>
        <div class="metric-value">${fmt(s.inc)}</div>
        <div class="metric-usd">${getUSD(s.inc)}</div>
        <div class="metric-sub">${s.inc > 0 ? s.count + ' transaksi' : '—'}</div>
        <div class="metric-bar"><div class="metric-bar-fill" style="width:100%"></div></div>
      </div>
      <div class="metric-card exp">
        <div class="metric-label">Total Pengeluaran</div>
        <div class="metric-value">${fmt(s.exp)}</div>
        <div class="metric-usd">${getUSD(s.exp)}</div>
        <div class="metric-sub">${pct}% dari pemasukan</div>
        <div class="metric-bar"><div class="metric-bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="metric-card bal">
        <div class="metric-label">Saldo Bersih</div>
        <div class="metric-value">${fmt(s.bal)}</div>
        <div class="metric-usd">${getUSD(s.bal)}</div>
        <div class="metric-sub">${s.bal >= 0 ? 'Surplus' : 'Defisit'}</div>
        <div class="metric-bar"><div class="metric-bar-fill" style="width:${balPct}%"></div></div>
      </div>`;
  }

  function txCard(t) {
    return `
      <div class="tx-item">
        <div class="tx-icon ${t.type}">${t.type === 'income' ? '↑' : '↓'}</div>
        <div class="tx-body">
          <div class="tx-note">${t.note}</div>
          <div class="tx-meta">
            <span class="cat-pill">${t.category}</span>
            ${fmtDate(t.date)} · ${fmtTime(t.date)}
          </div>
        </div>
        <div class="tx-right">
          <div class="tx-amount ${t.type}">${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}</div>
          <div class="tx-usd">${getUSD(t.amount)}</div>
          <button class="del-btn" onclick="delTx('${t.id}')">HAPUS</button>
        </div>
      </div>`;
  }

  function renderList(container, arr) {
    if (!container) return;
    container.innerHTML = arr.length
      ? arr.map(t => txCard(t)).join('')
      : `<div class="empty-state"><div class="empty-icon">🌿</div><p>Belum ada transaksi</p></div>`;
  }

  function renderMetrics() {
    const s   = calcSum(txs);
    const ts  = calcSum(txs.filter(t => new Date(t.date).toDateString() === new Date().toDateString()));
    const pct = s.inc > 0 ? Math.min(100, Math.round((s.exp / s.inc) * 100)) : 0;
    const balPct = s.inc > 0 ? Math.max(0, Math.min(100, Math.round((s.bal / s.inc) * 100))) : 0;
    document.getElementById('metric-cards').innerHTML = `
      <div class="metric-card inc">
        <div class="metric-icon">↑</div>
        <div class="metric-label">Total Pemasukan</div>
        <div class="metric-value">${fmt(s.inc)}</div>
        <div class="metric-usd">${getUSD(s.inc)}</div>
        <div class="metric-sub">${s.count} transaksi tercatat</div>
        <div class="metric-bar"><div class="metric-bar-fill" style="width:100%"></div></div>
      </div>
      <div class="metric-card exp">
        <div class="metric-icon">↓</div>
        <div class="metric-label">Total Pengeluaran</div>
        <div class="metric-value">${fmt(s.exp)}</div>
        <div class="metric-usd">${getUSD(s.exp)}</div>
        <div class="metric-sub">${pct}% dari pemasukan</div>
        <div class="metric-bar"><div class="metric-bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="metric-card bal">
        <div class="metric-icon">◈</div>
        <div class="metric-label">Saldo Bersih</div>
        <div class="metric-value">${fmt(s.bal)}</div>
        <div class="metric-usd">${getUSD(s.bal)}</div>
        <div class="metric-sub">${s.bal >= 0 ? 'Surplus' : 'Defisit'}</div>
        <div class="metric-bar"><div class="metric-bar-fill" style="width:${balPct}%"></div></div>
      </div>
      <div class="metric-card cnt">
        <div class="metric-icon">◎</div>
        <div class="metric-label">Hari Ini</div>
        <div class="metric-value">${ts.count} transaksi</div>
        <div class="metric-usd">&nbsp;</div>
        <div class="metric-sub">${ts.inc > 0 ? fmt(ts.inc) : 'Belum ada'}</div>
        <div class="metric-bar"><div class="metric-bar-fill" style="width:${ts.count > 0 ? 100 : 0}%"></div></div>
      </div>`;
  }

  /* ============================================================
     CHART
     ============================================================ */
  function mkChart(id, labels, incData, expData) {
    if (charts[id]) charts[id].destroy();
    const c = document.getElementById(id);
    if (!c) return;
    const isDark = document.body.classList.contains('dark');
    const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
    const tickColor = isDark ? '#6B9480' : '#9DBDAD';
    charts[id] = new Chart(c, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: 'Pemasukan',   data: incData, backgroundColor: 'rgba(26,92,58,0.8)',  borderRadius: 6, borderSkipped: false },
          { label: 'Pengeluaran', data: expData, backgroundColor: 'rgba(192,57,43,0.75)', borderRadius: 6, borderSkipped: false }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            ticks:  { color: tickColor, font: { size: 10, family: "'DM Sans'" } },
            grid:   { display: false },
            border: { display: false }
          },
          y: {
            ticks: {
              color: tickColor,
              font:  { size: 10 },
              callback: v => Intl.NumberFormat('id-ID', { notation: 'compact' }).format(v)
            },
            grid:   { color: gridColor, drawBorder: false },
            border: { display: false }
          }
        }
      }
    });
  }

  /* ============================================================
     DAILY
     ============================================================ */
  window.renderDaily = function() {
    const pick   = document.getElementById('pick-daily').value;
    const target = pick ? new Date(pick).toDateString() : new Date().toDateString();
    const arr    = txs.filter(t => new Date(t.date).toDateString() === target)
                      .sort((a, b) => new Date(b.date) - new Date(a.date));
    renderSumGrid(document.getElementById('daily-sum'), arr);
    renderList(document.getElementById('daily-body'), arr);
  };

  /* ============================================================
     WEEKLY
     ============================================================ */
  function wkKey(d) {
    const dt  = new Date(d);
    const day = dt.getDay();
    const diff = dt.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(new Date(d).setDate(diff)).toISOString().slice(0, 10);
  }

  function renderWeekly() {
    const weeks = {};
    txs.forEach(t => { const k = wkKey(t.date); (weeks[k] = weeks[k] || []).push(t); });
    const keys = Object.keys(weeks).sort().reverse().slice(0, 8);
    document.getElementById('week-sel').innerHTML = keys.map((k, i) => {
      const m = new Date(k), e = new Date(k);
      e.setDate(e.getDate() + 6);
      return `<button class="period-btn${i === 0 ? ' active' : ''}" onclick="selWeek('${k}',this)">
        ${m.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' })} – ${e.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' })}
      </button>`;
    }).join('');
    if (keys.length) showWeek(keys[0]);
  }

  window.selWeek = function(k, btn) {
    document.querySelectorAll('#week-sel .period-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showWeek(k);
  };

  function showWeek(k) {
    const arr  = txs.filter(t => wkKey(t.date) === k).sort((a, b) => new Date(b.date) - new Date(a.date));
    renderSumGrid(document.getElementById('week-sum'), arr);
    renderList(document.getElementById('week-body'), arr);
    const days = ['Sen','Sel','Rab','Kam','Jum','Sab','Min'];
    const inc  = new Array(7).fill(0), exp = new Array(7).fill(0);
    arr.forEach(t => {
      const idx = (new Date(t.date).getDay() + 6) % 7;
      if (t.type === 'income') inc[idx] += t.amount; else exp[idx] += t.amount;
    });
    mkChart('chartWeek', days, inc, exp);
  }

  /* ============================================================
     MONTHLY
     ============================================================ */
  function renderMonthly() {
    const months = {};
    txs.forEach(t => { const k = t.date.slice(0, 7); (months[k] = months[k] || []).push(t); });
    const keys = Object.keys(months).sort().reverse().slice(0, 12);
    document.getElementById('month-sel').innerHTML = keys.map((k, i) => {
      const [y, m] = k.split('-');
      return `<button class="period-btn${i === 0 ? ' active' : ''}" onclick="selMonth('${k}',this)">
        ${new Date(y, m - 1).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
      </button>`;
    }).join('');
    if (keys.length) showMonth(keys[0]);
  }

  window.selMonth = function(k, btn) {
    document.querySelectorAll('#month-sel .period-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showMonth(k);
  };

  function showMonth(k) {
    const arr = txs.filter(t => t.date.slice(0, 7) === k).sort((a, b) => new Date(b.date) - new Date(a.date));
    renderSumGrid(document.getElementById('month-sum'), arr);
    renderList(document.getElementById('month-body'), arr);
    const [y, m] = k.split('-');
    const dim    = new Date(y, m, 0).getDate();
    const labels = Array.from({ length: dim }, (_, i) => String(i + 1));
    const inc    = new Array(dim).fill(0), exp = new Array(dim).fill(0);
    arr.forEach(t => {
      const d = new Date(t.date).getDate() - 1;
      if (t.type === 'income') inc[d] += t.amount; else exp[d] += t.amount;
    });
    mkChart('chartMonth', labels, inc, exp);
  }

  /* ============================================================
     YEARLY
     ============================================================ */
  function renderYearly() {
    const years = {};
    txs.forEach(t => { const k = t.date.slice(0, 4); (years[k] = years[k] || []).push(t); });
    const keys = Object.keys(years).sort().reverse();
    document.getElementById('year-sel').innerHTML = keys.map((k, i) =>
      `<button class="period-btn${i === 0 ? ' active' : ''}" onclick="selYear('${k}',this)">${k}</button>`
    ).join('');
    if (keys.length) showYear(keys[0]);
  }

  window.selYear = function(k, btn) {
    document.querySelectorAll('#year-sel .period-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showYear(k);
  };

  function showYear(k) {
    const arr   = txs.filter(t => t.date.startsWith(k)).sort((a, b) => new Date(b.date) - new Date(a.date));
    renderSumGrid(document.getElementById('year-sum'), arr);
    renderList(document.getElementById('year-body'), arr);
    const MNTHS = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
    const inc   = new Array(12).fill(0), exp = new Array(12).fill(0);
    arr.forEach(t => {
      const m = new Date(t.date).getMonth();
      if (t.type === 'income') inc[m] += t.amount; else exp[m] += t.amount;
    });
    mkChart('chartYear', MNTHS, inc, exp);
  }

  /* ============================================================
     ALL HISTORY
     ============================================================ */
  window.renderAll = function() {
    const tf  = document.getElementById('flt-type').value;
    const s   = (document.getElementById('flt-search').value || '').toLowerCase();
    let arr   = [...txs];
    if (tf) arr = arr.filter(t => t.type === tf);
    if (s)  arr = arr.filter(t => t.note.toLowerCase().includes(s) || t.category.toLowerCase().includes(s));
    arr.sort((a, b) => new Date(b.date) - new Date(a.date));
    renderSumGrid(document.getElementById('all-sum'), arr);
    renderList(document.getElementById('all-body'), arr);
  };

  /* ============================================================
     REFRESH ALL
     ============================================================ */
  function refreshAll() {
    renderMetrics();
    renderList(document.getElementById('recent-list'), txs.slice(0, 10));
    if (activePage === 'harian')   renderDaily();
    if (activePage === 'mingguan') renderWeekly();
    if (activePage === 'bulanan')  renderMonthly();
    if (activePage === 'tahunan')  renderYearly();
    if (activePage === 'riwayat')  renderAll();
  }

  /* ============================================================
     INIT
     ============================================================ */
  document.getElementById('pick-daily').value = nowISO().slice(0, 10);
  document.getElementById('f-date').value     = nowISO();
  selType('income');

</script>
</body>
</html>
