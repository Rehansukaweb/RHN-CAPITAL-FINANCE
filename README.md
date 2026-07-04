<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="color-scheme" content="dark">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Edukasi Finance</title>
<meta name="theme-color" content="#050505">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<style>
/* ==========================================================================
   EDUKASI FINANCE (PREMIUM DARK & COMPACT UI)
   ========================================================================== */
* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

:root {
  --bg: #050505; 
  --bg2: #0f0f11; 
  --bg-glass: rgba(15, 15, 17, 0.7);
  --bg3: #1A1A1F; 
  --card: #121215;
  --border: #2a2a30; 
  --border2: #33333E;
  --text: #FFFFFF; 
  --text2: #CCCCCC; 
  --text3: #888899;
  --gold: #FBBF24; 
  --gold-glow: rgba(251, 191, 36, 0.15);
  --gold2: #F59E0B; 
  --green2: #10B981; 
  --red2: #F87171; 
  --blue: #3B82F6;
  --radius: 12px; 
}

body {
  font-family: 'Outfit', sans-serif; background: var(--bg); color: var(--text);
  font-size: 14px; line-height: 1.6; min-height: 100vh; overflow-x: hidden;
}
.mono { font-family: 'JetBrains Mono', monospace; }
.swal2-container { z-index: 100000 !important; font-family: 'Outfit', sans-serif; }

/* HEADER - COMPACT */
.header-area { padding: 16px 20px 0; max-width: 1200px; margin: 0 auto; }
.logo-row { display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 4px; padding: 8px 0 16px; }
.logo-badge { width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px var(--gold-glow); overflow: hidden; }
.logo-badge img { width: 100%; height: 100%; object-fit: cover; }
.logo-text .main-text { font-size: 16px; font-weight: 800; letter-spacing: 0.5px; text-align: center; }

.user-row { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
.u-avatar { width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--gold); display: flex; align-items: center; justify-content: center; color: var(--gold); font-weight: 700; font-size: 12px; flex-shrink: 0; background: var(--bg-glass); overflow: hidden; }
.user-pill { flex: 1; background: var(--bg-glass); backdrop-filter: blur(8px); border: 1px solid var(--border); border-radius: 10px; padding: 6px 10px; display: flex; align-items: center; justify-content: space-between; gap: 8px; transition: 0.2s; }
.u-name { font-size: 12px; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.u-sub { font-size: 9px; color: var(--text3); text-transform: uppercase; letter-spacing: 0.5px; }
.logout-btn { background: transparent; border: 1px solid var(--border2); color: var(--text3); padding: 4px 10px; border-radius: 6px; font-size: 9px; font-weight: 800; cursor: pointer; text-transform: uppercase; transition: 0.2s; }
.logout-btn:hover { border-color: var(--red2); color: var(--red2); background: rgba(248, 113, 113, 0.1); }

/* NAV */
.nav { display: flex; gap: 8px; padding: 0 20px 16px; max-width: 1200px; margin: 0 auto; overflow-x: auto; scrollbar-width: none; border-bottom: 1px solid var(--border); }
.nav::-webkit-scrollbar { display: none; }
.nav-btn { padding: 6px 14px; font-size: 10px; font-weight: 700; color: var(--text3); border: 1px solid transparent; border-radius: 100px; background: transparent; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap; transition: 0.3s; }
.nav-btn.active { background: var(--gold-glow); color: var(--gold); border-color: var(--gold); }
.nav-btn:hover:not(.active) { color: var(--text); }

.main { padding: 16px 20px 80px; max-width: 1200px; margin: 0 auto; }
.page { display: none; } .page.active { display: block; animation: fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
@keyframes fadeUp { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: none; } }

/* PROGRESS RING */
.progress-hero { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px; display: flex; align-items: center; gap: 16px; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
.ring-wrap { position: relative; width: 64px; height: 64px; flex-shrink: 0; }
.ring-wrap svg { transform: rotate(-90deg); width: 100%; height: 100%; }
.ring-bg { fill: none; stroke: var(--bg3); stroke-width: 6; }
.ring-fg { fill: none; stroke: var(--gold); stroke-width: 6; stroke-linecap: round; transition: stroke-dashoffset 0.8s ease; }
.ring-label { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; }
.progress-copy .p-title { font-size: 14px; font-weight: 800; margin-bottom: 2px; }
.progress-copy .p-sub { font-size: 10px; color: var(--text3); line-height: 1.4; }

/* FILTER BAR */
.filter-row { display: flex; gap: 6px; overflow-x: auto; scrollbar-width: none; margin-bottom: 12px; }
.filter-row::-webkit-scrollbar { display: none; }
.chip { padding: 6px 12px; border-radius: 100px; border: 1px solid var(--border); background: var(--bg2); color: var(--text3); font-size: 10px; font-weight: 700; cursor: pointer; white-space: nowrap; text-transform: uppercase; transition: 0.2s; }
.chip.active { background: var(--gold); color: #000; border-color: var(--gold); }
.search-wrap { margin-bottom: 16px; }
.f-input { width: 100%; padding: 12px 14px; border-radius: 10px; border: 1px solid var(--border); background: var(--bg2); color: var(--text); outline: none; font-family: 'Outfit'; font-size: 12px; transition: border 0.3s; }
.f-input:focus { border-color: var(--gold); background: #16161a; }
textarea.f-input { resize: vertical; min-height: 120px; }

/* ARTICLE GRID - COMPACT */
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
.art-card { background: var(--card); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; cursor: pointer; display: flex; flex-direction: column; transition: all 0.3s ease; }
.art-card:hover { border-color: var(--gold); transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.4); }
.art-thumb { width: 100%; height: 110px; background: var(--bg3) center/cover no-repeat; display: flex; align-items: center; justify-content: center; color: var(--text3); font-size: 24px; position: relative; }
.art-thumb::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(18,18,21,1) 0%, rgba(18,18,21,0) 100%); opacity: 0.5; }
.art-thumb .lvl-badge { position: absolute; top: 8px; left: 8px; font-size: 8px; font-weight: 800; padding: 3px 6px; border-radius: 4px; text-transform: uppercase; background: rgba(5,5,5,0.8); border: 1px solid var(--border2); z-index: 2; }
.art-thumb .read-badge { position: absolute; top: 8px; right: 8px; font-size: 8px; font-weight: 800; padding: 3px 6px; border-radius: 4px; background: var(--green2); color: #000; z-index: 2; }
.art-body { padding: 12px; flex: 1; display: flex; flex-direction: column; gap: 4px; z-index: 2; }
.art-cat { font-size: 9px; font-weight: 800; color: var(--gold); text-transform: uppercase; letter-spacing: 0.5px; }
.art-title { font-size: 13px; font-weight: 700; line-height: 1.3; }
.art-summary { font-size: 11px; color: var(--text3); line-height: 1.4; flex: 1; margin-top: 4px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.art-meta { font-size: 9px; color: var(--text3); border-top: 1px dashed var(--border2); padding-top: 6px; margin-top: 6px; }

/* ARTICLE DETAIL */
.detail-back { background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border); color: var(--text); padding: 6px 12px; border-radius: 8px; font-weight: 700; font-size: 10px; text-transform: uppercase; cursor: pointer; margin-bottom: 16px; transition: 0.2s; display: inline-flex; align-items: center; gap: 6px; }
.detail-back:hover { border-color: var(--gold); color: var(--gold); }
.detail-hero-img { width: 100%; max-height: 220px; object-fit: cover; border-radius: 12px; margin-bottom: 16px; border: 1px solid var(--border); }
.detail-cat { font-size: 10px; font-weight: 800; color: var(--gold); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
.detail-title { font-size: 20px; font-weight: 800; line-height: 1.3; margin-bottom: 8px; }
.detail-meta { font-size: 10px; color: var(--text3); margin-bottom: 16px; display: flex; gap: 8px; flex-wrap: wrap; }
.detail-meta span { padding: 4px 8px; background: var(--bg2); border: 1px solid var(--border); border-radius: 6px; }
.detail-content { font-size: 13px; line-height: 1.8; color: var(--text2); }
.detail-content p { margin-bottom: 12px; }
.mark-read-btn { width: 100%; padding: 14px; border: none; border-radius: 10px; font-size: 12px; font-weight: 800; text-transform: uppercase; cursor: pointer; margin-top: 20px; transition: 0.3s; }
.mark-read-btn.unread { background: var(--gold); color: #000; box-shadow: 0 4px 15px var(--gold-glow); }
.mark-read-btn.read { background: rgba(16,185,129,0.1); color: var(--green2); border: 1px solid var(--green2); }

/* CARDS / FORMS - COMPACT */
.card { background: var(--card); border-radius: var(--radius); padding: 16px; border: 1px solid var(--border); margin-bottom: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }
.card-title { font-size: 14px; font-weight: 800; margin-bottom: 2px; }
.card-sub { font-size: 10px; color: var(--text3); margin-bottom: 12px; }
.form-row { margin-bottom: 10px; }
.form-label { font-size: 9px; font-weight: 800; color: var(--text3); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; display: block; }
.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.submit-btn { width: 100%; padding: 12px; background: var(--gold); color: #000; border: none; border-radius: 10px; font-size: 11px; font-weight: 800; text-transform: uppercase; cursor: pointer; transition: 0.2s; }
.submit-btn:hover { background: var(--gold2); }
.submit-btn.secondary { background: var(--bg3); color: var(--text); border: 1px solid var(--border); }
.submit-btn.secondary:hover { border-color: var(--text); }

/* ADMIN LIST - COMPACT */
.adm-item { display: flex; align-items: center; gap: 10px; padding: 10px; border: 1px solid var(--border); border-radius: 10px; margin-bottom: 8px; background: var(--bg2); transition: 0.2s; }
.adm-item:hover { border-color: var(--border2); background: var(--bg3); }
.adm-thumb { width: 36px; height: 36px; border-radius: 6px; background: var(--bg3) center/cover no-repeat; flex-shrink: 0; }
.adm-info { flex: 1; min-width: 0; }
.adm-title { font-size: 12px; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--text); }
.adm-sub { font-size: 9px; color: var(--text3); margin-top: 2px; }
.adm-actions { display: flex; gap: 4px; flex-shrink: 0; }
.adm-btn { padding: 6px 10px; font-size: 8px; font-weight: 800; border-radius: 6px; cursor: pointer; text-transform: uppercase; border: 1px solid var(--border2); background: var(--bg); color: var(--text); transition: 0.2s; }
.adm-btn:hover { background: var(--bg3); }
.adm-btn.edit { border-color: rgba(59,130,246,0.3); color: var(--blue); }
.adm-btn.edit:hover { background: rgba(59,130,246,0.1); }
.adm-btn.del { border-color: rgba(248,113,113,0.3); color: var(--red2); }
.adm-btn.del:hover { background: rgba(248,113,113,0.1); }
.pub-pill { font-size: 8px; font-weight: 800; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; display: inline-block; }
.pub-pill.on { background: rgba(16,185,129,0.15); color: var(--green2); }
.pub-pill.off { background: rgba(136,136,153,0.15); color: var(--text3); }

/* AUTH - PREMIUM CENTERED */
#auth-screen { position: fixed; inset: 0; background: var(--bg); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 20px; background-image: radial-gradient(circle at top right, rgba(251,191,36,0.05), transparent 40%); }
.auth-box { background: var(--bg-glass); backdrop-filter: blur(16px); border-radius: 20px; padding: 32px 24px; width: 100%; max-width: 360px; border: 1px solid var(--border); text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.6); }
.auth-badge { width: 64px; height: 64px; border-radius: 12px; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px var(--gold-glow); overflow: hidden; }
.auth-badge img { width: 100%; height: 100%; object-fit: cover; }
.auth-title { font-size: 18px; font-weight: 800; margin-bottom: 20px; }
.auth-tabs { display: flex; background: var(--bg); border-radius: 10px; padding: 4px; margin-bottom: 16px; border: 1px solid var(--border); }
.auth-tab { flex: 1; padding: 10px; font-size: 11px; font-weight: 700; cursor: pointer; background: transparent; border: none; color: var(--text3); border-radius: 6px; transition: 0.2s; }
.auth-tab.active { background: var(--bg2); color: var(--gold); box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
.auth-btn { width: 100%; padding: 14px; background: var(--gold); color: #000; border: none; border-radius: 10px; font-size: 12px; font-weight: 800; cursor: pointer; text-transform: uppercase; margin-top: 10px; transition: 0.2s; }
.auth-btn:hover { background: var(--gold2); }
.auth-btn-google { background: #FFFFFF; color: #000; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 12px; }
.auth-btn-google:hover { background: #f1f1f1; }
.auth-btn-google svg { width: 18px; height: 18px; }
.divider { display: flex; align-items: center; margin: 16px 0; font-size: 10px; color: var(--text3); text-transform: uppercase; letter-spacing: 1px; }
.divider::before, .divider::after { content: ''; flex: 1; border-bottom: 1px solid var(--border); margin: 0 10px; }
.auth-err { color: var(--red2); font-size: 11px; margin-bottom: 12px; background: rgba(248,113,113,0.1); padding: 8px; border-radius: 6px; border: 1px solid rgba(248,113,113,0.2); }

#loading-screen { position: fixed; inset: 0; background: var(--bg); display: flex; align-items: center; justify-content: center; z-index: 10000; flex-direction: column; gap: 12px; }
.loader-spinner { width: 30px; height: 30px; border: 3px solid var(--border2); border-top-color: var(--gold); border-radius: 50%; animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.loader-text { color: var(--gold); font-weight: 700; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; }

@media (max-width: 640px) {
  .form-grid-2 { grid-template-columns: 1fr; }
  .progress-hero { flex-direction: column; text-align: center; }
}
</style>
</head>
<body>

<div id="loading-screen">
  <div class="loader-spinner"></div>
  <div class="loader-text">Memuat Edukasi...</div>
</div>

<div id="auth-screen" style="display:none;">
  <div class="auth-box">
    <div class="auth-badge">
      <img src="WhatsApp Image 2026-07-04 at 22.03.31.jpeg" alt="Logo">
    </div>
    <div class="auth-title">Edukasi Finance</div>
    
    <div class="auth-tabs">
      <button class="auth-tab active" id="tab-login" onclick="switchAuthTab('login')">Masuk</button>
      <button class="auth-tab" id="tab-register" onclick="switchAuthTab('register')">Daftar</button>
    </div>
    
    <div class="auth-err" id="auth-err" style="display:none;"></div>
    
    <div class="form-row"><input type="email" id="auth-email" class="f-input" placeholder="Alamat Email"></div>
    <div class="form-row"><input type="password" id="auth-pass" class="f-input" placeholder="Kata Sandi"></div>
    <div class="form-row" id="field-confirm" style="display:none;"><input type="password" id="auth-pass2" class="f-input" placeholder="Ulangi Kata Sandi"></div>
    
    <button class="auth-btn" id="auth-submit-btn" onclick="doAuth()">MASUK</button>
    
    <div class="divider">Atau</div>
    
    <button class="auth-btn auth-btn-google" onclick="doGoogleLogin()">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      Lanjutkan dengan Google
    </button>
  </div>
</div>

<div id="app-screen" style="display:none;">
  <div class="header-area">
    <div class="logo-row">
      <div class="logo-badge">
        <img src="image_a06fe6.jpg" alt="Logo">
      </div>
      <div class="logo-text">
        <div class="main-text">EDUKASI FINANCE</div>
      </div>
    </div>
    <div class="user-row">
      <div class="u-avatar" id="u-avatar">?</div>
      <div class="user-pill">
        <div>
          <div class="u-name" id="u-name">Memuat...</div>
          <div class="u-sub">Anggota Belajar</div>
        </div>
        <button class="logout-btn" onclick="doLogout()">KELUAR</button>
      </div>
    </div>
  </div>

  <div class="nav">
    <button class="nav-btn active" onclick="goPage('beranda')">BERANDA</button>
    <button class="nav-btn" onclick="goPage('progres')">PROGRES SAYA</button>
    <button class="nav-btn" id="nav-admin" style="display:none;" onclick="goPage('admin')">⚙ ADMIN</button>
  </div>

  <div class="main">

    <div id="page-beranda" class="page active">
      <div class="progress-hero">
        <div class="ring-wrap">
          <svg viewBox="0 0 84 84">
            <circle class="ring-bg" cx="42" cy="42" r="38"></circle>
            <circle class="ring-fg" id="ring-fg" cx="42" cy="42" r="38" stroke-dasharray="239" stroke-dashoffset="239"></circle>
          </svg>
          <div class="ring-label mono" id="ring-label">0%</div>
        </div>
        <div class="progress-copy">
          <div class="p-title">Perjalanan belajarmu</div>
          <div class="p-sub" id="progress-copy-sub">Belum ada artikel dibaca. Mulai dari salah satu topik di bawah.</div>
        </div>
      </div>

      <div class="search-wrap"><input type="text" id="search-input" class="f-input" placeholder="🔍 Cari topik: reksadana, emas, trading..." oninput="renderBeranda()"></div>
      <div class="filter-row" id="cat-filter"></div>
      <div class="filter-row" id="lvl-filter"></div>

      <div id="art-grid" class="grid"></div>
    </div>

    <div id="page-detail" class="page">
      <button class="detail-back" onclick="goPage('beranda')">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> KEMBALI
      </button>
      <img id="detail-img" class="detail-hero-img" style="display:none;">
      <div class="detail-cat" id="detail-cat"></div>
      <div class="detail-title" id="detail-title"></div>
      <div class="detail-meta" id="detail-meta"></div>
      <div class="detail-content" id="detail-content"></div>
      <button class="mark-read-btn unread" id="mark-read-btn" onclick="toggleRead()">TANDAI SUDAH DIBACA</button>
    </div>

    <div id="page-progres" class="page">
      <div class="card">
        <div class="card-title">Ringkasan Progres</div>
        <div class="card-sub" id="progres-summary">Memuat...</div>
      </div>
      <div id="progres-by-cat"></div>
    </div>

    <div id="page-admin" class="page">
      <div class="card">
        <div class="card-title" id="admin-form-title">Tambah Artikel Baru</div>
        <div class="card-sub">Perubahan langsung tayang ke pengguna.</div>
        
        <div class="form-row"><label class="form-label">Judul</label><input type="text" id="f-title" class="f-input" placeholder="Contoh: Cara Menyusun Dana Darurat"></div>
        
        <div class="form-grid-2">
          <div class="form-row">
            <label class="form-label">Kategori</label>
            <input type="text" id="f-cat" class="f-input" placeholder="Contoh: Trading Strategy" list="cat-suggest">
            <datalist id="cat-suggest"></datalist>
          </div>
          <div class="form-row">
            <label class="form-label">Level</label>
            <select id="f-level" class="f-input">
              <option value="Pemula">Pemula</option>
              <option value="Menengah">Menengah</option>
              <option value="Mahir">Mahir</option>
            </select>
          </div>
        </div>

        <div class="form-grid-2">
          <div class="form-row">
            <label class="form-label">Bab / Modul (Opsional)</label>
            <input type="text" id="f-chapter" class="f-input" placeholder="Contoh: Bab 1">
          </div>
          <div class="form-row">
            <label class="form-label">URL Gambar (Opsional)</label>
            <input type="text" id="f-img" class="f-input" placeholder="Contoh: https://i.postimg.cc/...jpg">
          </div>
        </div>

        <div class="form-row"><label class="form-label">Ringkasan Singkat</label><input type="text" id="f-summary" class="f-input" placeholder="1-2 kalimat untuk kartu artikel"></div>
        <div class="form-row"><label class="form-label">Isi Artikel</label><textarea id="f-content" class="f-input" placeholder="Tulis isi artikel di sini. Pisahkan paragraf dengan baris kosong."></textarea></div>
        <div class="form-row">
          <label class="form-label">Status</label>
          <select id="f-published" class="f-input">
            <option value="true">Tayang (terlihat pengguna)</option>
            <option value="false">Draf (disembunyikan)</option>
          </select>
        </div>
        <button class="submit-btn secondary" id="admin-cancel-btn" style="display:none; margin-bottom:10px;" onclick="cancelAdminEdit()">BATAL EDIT</button>
        <button class="submit-btn" id="admin-save-btn" onclick="saveArticle()">SIMPAN ARTIKEL</button>
      </div>

      <div class="card">
        <div class="card-title">Semua Artikel</div>
        <div class="card-sub">Kelola konten yang sudah ada.</div>
        <div id="admin-list"></div>
      </div>
    </div>

  </div>
</div>

<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  initializeFirestore, persistentLocalCache, collection, doc, addDoc,
  updateDoc, deleteDoc, onSnapshot, query, orderBy, serverTimestamp,
  setDoc, getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCx04v3ppq3DxbXDg0PrWBeJYIZjmJF9cg",
  authDomain: "rhn-capital.firebaseapp.com",
  projectId: "rhn-capital",
  storageBucket: "rhn-capital.firebasestorage.app",
  messagingSenderId: "74905216682",
  appId: "1:74905216682:web:4687a5b0bd7bcac09292d3"
};

// Email khusus akses panel Admin
const ADMIN_EMAIL = "rehantop245@gmail.com";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, { localCache: persistentLocalCache() });
const googleProvider = new GoogleAuthProvider();

let currentUser = null;
let articles = [];       
let progressMap = {};    
let authMode = "login";
let activeCat = "";
let activeLevel = "";
let currentArticleId = null;
let editingArticleId = null;
let unsubArticles = null;

const escapeHTML = (s) => (s || "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const paragraphize = (s) => (s || "").split(/\n\s*\n/).map(p => "<p>" + escapeHTML(p).replace(/\n/g,"<br>") + "</p>").join("");
const fmtDate = (ts) => { try { return new Date(ts).toLocaleDateString('id-ID', {day:'2-digit', month:'short', year:'numeric'}); } catch(e){ return ''; } };

window.goPage = function(p){
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('page-' + p).classList.add('active');
  const order = ['beranda','progres','admin'];
  const idx = order.indexOf(p);
  const navBtns = document.querySelectorAll('.nav-btn');
  if (idx === 0) navBtns[0].classList.add('active');
  if (idx === 1) navBtns[1].classList.add('active');
  if (idx === 2 && navBtns[2]) navBtns[2].classList.add('active');
  if (p === 'progres') renderProgres();
  if (p === 'admin') renderAdminList();
};

window.switchAuthTab = function(mode){
  authMode = mode;
  document.getElementById('tab-login').classList.toggle('active', mode==='login');
  document.getElementById('tab-register').classList.toggle('active', mode==='register');
  document.getElementById('field-confirm').style.display = mode==='register' ? 'block' : 'none';
  document.getElementById('auth-submit-btn').textContent = mode==='login' ? 'MASUK' : 'DAFTAR';
  document.getElementById('auth-err').style.display = 'none';
};

window.doAuth = async function(){
  const email = document.getElementById('auth-email').value.trim();
  const pass = document.getElementById('auth-pass').value;
  const errEl = document.getElementById('auth-err');
  errEl.style.display = 'none';
  if (!email || !pass) { errEl.textContent = 'Email dan sandi wajib diisi.'; errEl.style.display='block'; return; }
  
  const btn = document.getElementById('auth-submit-btn');
  btn.textContent = "MEMPROSES..."; btn.disabled = true;
  
  try {
    if (authMode === 'login') {
      await signInWithEmailAndPassword(auth, email, pass);
    } else {
      const pass2 = document.getElementById('auth-pass2').value;
      if (pass !== pass2) { errEl.textContent = 'Konfirmasi sandi tidak cocok.'; errEl.style.display='block'; btn.textContent = "DAFTAR"; btn.disabled = false; return; }
      await createUserWithEmailAndPassword(auth, email, pass);
    }
  } catch(e) {
    errEl.textContent = e.message.replace('Firebase: ', ''); errEl.style.display = 'block';
    btn.textContent = authMode === 'login' ? 'MASUK' : 'DAFTAR'; btn.disabled = false;
  }
};

window.doGoogleLogin = async function() {
  const errEl = document.getElementById('auth-err');
  errEl.style.display = 'none';
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (e) {
    errEl.textContent = e.message.replace('Firebase: ', ''); 
    errEl.style.display = 'block';
  }
};

window.doLogout = async function(){
  const res = await Swal.fire({ title:'Keluar?', text:'Sesi belajar Anda akan diakhiri.', icon:'question', showCancelButton:true, confirmButtonText:'Ya, Keluar', cancelButtonText: 'Batal', background:'var(--card)', color:'var(--text)', confirmButtonColor:'#F87171' });
  if (res.isConfirmed) { if (unsubArticles) unsubArticles(); await signOut(auth); }
};

function isAdmin(){ 
  return currentUser && currentUser.email === ADMIN_EMAIL; 
}

onAuthStateChanged(auth, async (user) => {
  document.getElementById('loading-screen').style.display = 'none';
  if (user) {
    currentUser = user;
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('app-screen').style.display = 'block';
    
    const name = user.displayName || user.email.split('@')[0];
    const photo = user.photoURL;
    
    document.getElementById('u-name').textContent = name;
    const avatarEl = document.getElementById('u-avatar');
    if (photo) {
        avatarEl.innerHTML = `<img src="${photo}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
    } else {
        avatarEl.textContent = name.charAt(0).toUpperCase();
    }
    
    document.getElementById('nav-admin').style.display = isAdmin() ? 'inline-block' : 'none';
    
    await loadProgress();
    listenArticles();
  } else {
    currentUser = null;
    document.getElementById('app-screen').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'flex';
    if (unsubArticles) unsubArticles();
    articles = []; progressMap = {};
    
    document.getElementById('auth-submit-btn').disabled = false;
    document.getElementById('auth-submit-btn').textContent = authMode === 'login' ? 'MASUK' : 'DAFTAR';
  }
});

// ============== ARTIKEL (real-time dari Firestore) ==============
function listenArticles(){
  if (unsubArticles) unsubArticles();
  const q = query(collection(db, 'edu_articles'), orderBy('createdAt', 'desc'));
  unsubArticles = onSnapshot(q, snap => {
    articles = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    renderCatFilter();
    renderBeranda();
    if (document.getElementById('page-admin').classList.contains('active')) renderAdminList();
    if (document.getElementById('page-progres').classList.contains('active')) renderProgres();
  }, err => { console.error(err); });
}

function visibleArticles(){ return articles.filter(a => isAdmin() ? true : a.published !== false); }

function renderCatFilter(){
  const cats = [...new Set(visibleArticles().map(a => a.category).filter(Boolean))];
  const catWrap = document.getElementById('cat-filter');
  catWrap.innerHTML = '<button class="chip ' + (activeCat==='' ? 'active' : '') + '" onclick="setCat(\'\')">Semua Topik</button>' +
    cats.map(c => '<button class="chip ' + (activeCat===c ? 'active':'') + '" onclick="setCat(\'' + c.replace(/'/g,"\\'") + '\')">' + escapeHTML(c) + '</button>').join('');

  const lvlWrap = document.getElementById('lvl-filter');
  const levels = ['Pemula','Menengah','Mahir'];
  lvlWrap.innerHTML = '<button class="chip ' + (activeLevel==='' ? 'active':'') + '" onclick="setLevel(\'\')">Semua Level</button>' +
    levels.map(l => '<button class="chip ' + (activeLevel===l ? 'active':'') + '" onclick="setLevel(\'' + l + '\')">' + l + '</button>').join('');

  const catSuggest = document.getElementById('cat-suggest');
  if (catSuggest) catSuggest.innerHTML = cats.map(c => '<option value="' + escapeHTML(c) + '">').join('');
}

window.setCat = function(c){ activeCat = c; renderCatFilter(); renderBeranda(); };
window.setLevel = function(l){ activeLevel = l; renderCatFilter(); renderBeranda(); };

function renderBeranda(){
  const term = (document.getElementById('search-input').value || '').toLowerCase();
  let list = visibleArticles();
  
  if (activeCat) list = list.filter(a => a.category === activeCat);
  if (activeLevel) list = list.filter(a => a.level === activeLevel);
  if (term) list = list.filter(a => (a.title||'').toLowerCase().includes(term) || (a.summary||'').toLowerCase().includes(term) || (a.category||'').toLowerCase().includes(term) || (a.chapter||'').toLowerCase().includes(term));

  const grid = document.getElementById('art-grid');
  if (!list.length) {
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px 20px; color:var(--text3); font-size:12px;">📭 Belum ada artikel yang cocok.<br>Coba ubah filter atau kata kunci pencarian.</div>';
  } else {
    grid.innerHTML = list.map(a => {
      const isRead = !!progressMap[a.id];
      const thumb = a.imageUrl ? 'style="background-image:url(\'' + a.imageUrl.replace(/'/g,"") + '\')"' : '';
      const draftBadge = (a.published === false) ? '<span class="read-badge" style="background:var(--text3);color:#000;">DRAF</span>' : '';
      
      // Menyiapkan teks Bab (jika diisi)
      const chapterBadge = a.chapter ? escapeHTML(a.chapter) + ' • ' : '';
      
      return '<div class="art-card" onclick="openArticle(\'' + a.id + '\')">' +
        '<div class="art-thumb" ' + thumb + '>' +
          (a.imageUrl ? '' : '📘') +
          '<span class="lvl-badge">' + escapeHTML(a.level||'Umum') + '</span>' +
          (isRead ? '<span class="read-badge">SELESAI ✓</span>' : draftBadge) +
        '</div>' +
        '<div class="art-body">' +
          '<div class="art-cat">' + chapterBadge + escapeHTML(a.category||'Umum') + '</div>' +
          '<div class="art-title">' + escapeHTML(a.title||'Tanpa Judul') + '</div>' +
          '<div class="art-summary">' + escapeHTML(a.summary||'') + '</div>' +
          '<div class="art-meta">' + fmtDate(a.createdAt && a.createdAt.toDate ? a.createdAt.toDate() : Date.now()) + '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }
  renderRing();
}

window.openArticle = function(id){
  const a = articles.find(x => x.id === id);
  if (!a) return;
  currentArticleId = id;
  const imgEl = document.getElementById('detail-img');
  
  if (a.imageUrl) { 
    imgEl.src = a.imageUrl; 
    imgEl.style.display = 'block'; 
  } else { 
    imgEl.style.display = 'none'; 
  }
  
  const chapterBadge = a.chapter ? escapeHTML(a.chapter) + ' • ' : '';
  document.getElementById('detail-cat').textContent = chapterBadge + (a.category || 'Umum');
  
  document.getElementById('detail-title').textContent = a.title || 'Tanpa Judul';
  document.getElementById('detail-meta').innerHTML = '<span>' + escapeHTML(a.level||'Umum') + '</span><span>' + fmtDate(a.createdAt && a.createdAt.toDate ? a.createdAt.toDate() : Date.now()) + '</span>';
  document.getElementById('detail-content').innerHTML = paragraphize(a.content || a.summary || '');
  updateReadButton();
  goPage('detail');
  window.scrollTo({top:0, behavior:'instant'});
};

function updateReadButton(){
  const btn = document.getElementById('mark-read-btn');
  const isRead = !!progressMap[currentArticleId];
  btn.className = 'mark-read-btn ' + (isRead ? 'read' : 'unread');
  btn.textContent = isRead ? '✓ SUDAH DIBACA — BATALKAN' : 'TANDAI SUDAH DIBACA';
}

// ============== PROGRES BACA (per user, Firestore) ==============
async function loadProgress(){
  progressMap = {};
  try {
    const ref = doc(db, 'edu_progress', currentUser.uid);
    const snap = await getDoc(ref);
    if (snap.exists()) progressMap = snap.data().read || {};
  } catch(e) { console.error('Gagal memuat progres', e); }
}

window.toggleRead = async function(){
  if (!currentUser || !currentArticleId) return;
  const isRead = !!progressMap[currentArticleId];
  if (isRead) delete progressMap[currentArticleId]; else progressMap[currentArticleId] = true;
  updateReadButton();
  try {
    await setDoc(doc(db, 'edu_progress', currentUser.uid), { read: progressMap, updatedAt: serverTimestamp() }, { merge: true });
    if (!isRead) Swal.fire({toast:true, position:'top', icon:'success', title:'Progres tersimpan', showConfirmButton:false, timer:1200, background:'var(--card)', color:'var(--text)'});
  } catch(e) { Swal.fire('Gagal menyimpan progres', e.message, 'error'); }
  renderBeranda();
};

function renderRing(){
  const total = visibleArticles().length;
  const done = visibleArticles().filter(a => progressMap[a.id]).length;
  const pct = total ? Math.round((done/total)*100) : 0;
  const circumference = 239;
  const offset = circumference - (circumference * pct / 100);
  document.getElementById('ring-fg').style.strokeDashoffset = offset;
  document.getElementById('ring-label').textContent = pct + '%';
  document.getElementById('progress-copy-sub').textContent = total
    ? (done + ' dari ' + total + ' artikel sudah kamu selesaikan. Terus lanjutkan!')
    : 'Belum ada artikel tersedia.';
}

function renderProgres(){
  const total = visibleArticles().length;
  const done = visibleArticles().filter(a => progressMap[a.id]).length;
  document.getElementById('progres-summary').textContent = total
    ? (done + ' dari ' + total + ' artikel (' + Math.round(total?done/total*100:0) + '%) diselesaikan.')
    : 'Belum ada artikel yang bisa dipelajari.';

  const byCat = {};
  visibleArticles().forEach(a => {
    const c = a.category || 'Umum';
    if (!byCat[c]) byCat[c] = { total:0, done:0 };
    byCat[c].total++;
    if (progressMap[a.id]) byCat[c].done++;
  });

  const wrap = document.getElementById('progres-by-cat');
  const keys = Object.keys(byCat);
  if (!keys.length) { wrap.innerHTML = ''; return; }
  wrap.innerHTML = keys.map(c => {
    const d = byCat[c];
    const pct = d.total ? Math.round(d.done/d.total*100) : 0;
    return '<div class="card" style="margin-bottom:10px; padding:12px 16px;">' +
      '<div style="display:flex;justify-content:space-between;margin-bottom:6px;">' +
        '<div style="font-weight:700;font-size:12px;">' + escapeHTML(c) + '</div>' +
        '<div class="mono" style="font-size:11px;color:var(--gold);">' + d.done + '/' + d.total + '</div>' +
      '</div>' +
      '<div style="height:6px;background:var(--bg3);border-radius:3px;overflow:hidden;">' +
        '<div style="height:100%;width:' + pct + '%;background:linear-gradient(90deg, var(--gold2), var(--gold));"></div>' +
      '</div>' +
    '</div>';
  }).join('');
}

// ============== ADMIN (CRUD dengan URL Input) ==============
window.saveArticle = async function(){
  if (!isAdmin()) {
    Swal.fire('Akses Ditolak', 'Hanya admin yang dapat menyimpan artikel.', 'error');
    return;
  }

  const title = document.getElementById('f-title').value.trim();
  const category = document.getElementById('f-cat').value.trim() || 'Umum';
  const chapter = document.getElementById('f-chapter').value.trim(); // Ambil input Bab
  const level = document.getElementById('f-level').value;
  const imageUrl = document.getElementById('f-img').value.trim(); // Ambil URL Gambar langsung
  const summary = document.getElementById('f-summary').value.trim();
  const content = document.getElementById('f-content').value.trim();
  const published = document.getElementById('f-published').value === 'true';

  if (!title || !content) {
    return Swal.fire({icon:'warning', title:'Judul dan isi artikel wajib diisi', background:'var(--card)', color:'var(--text)'});
  }

  const saveBtn = document.getElementById('admin-save-btn');
  saveBtn.disabled = true; saveBtn.textContent = 'MENYIMPAN ARTIKEL...';

  try {
    const payload = { 
      title, 
      category, 
      chapter, 
      level, 
      imageUrl, 
      summary, 
      content, 
      published, 
      updatedAt: serverTimestamp() 
    };

    if (editingArticleId) {
      await updateDoc(doc(db, 'edu_articles', editingArticleId), payload);
    } else {
      payload.createdAt = serverTimestamp();
      await addDoc(collection(db, 'edu_articles'), payload);
    }
    Swal.fire({icon:'success', title:'Artikel tersimpan', timer:1200, showConfirmButton:false, background:'var(--card)', color:'var(--text)'});
    cancelAdminEdit();
  } catch(e) {
    Swal.fire('Gagal menyimpan', e.message, 'error');
  }
  saveBtn.disabled = false; saveBtn.textContent = 'SIMPAN ARTIKEL';
};

window.editArticleAdmin = function(id){
  const a = articles.find(x => x.id === id);
  if (!a) return;
  editingArticleId = id;
  
  document.getElementById('admin-form-title').textContent = 'Edit Artikel';
  document.getElementById('f-title').value = a.title || '';
  document.getElementById('f-cat').value = a.category || '';
  document.getElementById('f-chapter').value = a.chapter || ''; // Set value bab lama
  document.getElementById('f-level').value = a.level || 'Pemula';
  document.getElementById('f-img').value = a.imageUrl || ''; // Set value URL lama
  document.getElementById('f-summary').value = a.summary || '';
  document.getElementById('f-content').value = a.content || '';
  document.getElementById('f-published').value = (a.published === false) ? 'false' : 'true';

  document.getElementById('admin-cancel-btn').style.display = 'block';
  window.scrollTo({top:0, behavior:'smooth'});
};

window.cancelAdminEdit = function(){
  editingArticleId = null;
  document.getElementById('admin-form-title').textContent = 'Tambah Artikel Baru';
  ['f-title','f-cat','f-chapter','f-img','f-summary','f-content'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('f-level').value = 'Pemula';
  document.getElementById('f-published').value = 'true';
  document.getElementById('admin-cancel-btn').style.display = 'none';
};

window.deleteArticleAdmin = async function(id){
  const res = await Swal.fire({ title:'Hapus artikel ini?', text:'Tindakan ini tidak bisa dibatalkan.', icon:'warning', showCancelButton:true, confirmButtonText:'Ya, Hapus', confirmButtonColor:'#F87171', background:'var(--card)', color:'var(--text)' });
  if (!res.isConfirmed) return;
  try {
    await deleteDoc(doc(db, 'edu_articles', id));
    Swal.fire({icon:'success', title:'Artikel dihapus', timer:1000, showConfirmButton:false, background:'var(--card)', color:'var(--text)'});
  } catch(e) { Swal.fire('Gagal menghapus', e.message, 'error'); }
};

window.togglePublish = async function(id, current){
  try { await updateDoc(doc(db, 'edu_articles', id), { published: !current }); }
  catch(e) { Swal.fire('Gagal mengubah status', e.message, 'error'); }
};

function renderAdminList(){
  if (!isAdmin()) return;
  const wrap = document.getElementById('admin-list');
  if (!articles.length) { wrap.innerHTML = '<div style="text-align:center; padding:20px; color:var(--text3); font-size:11px;">Belum ada artikel. Tambahkan lewat form di atas.</div>'; return; }
  wrap.innerHTML = articles.map(a => {
    const pub = a.published !== false;
    const thumb = a.imageUrl ? 'style="background-image:url(\'' + a.imageUrl.replace(/'/g,"") + '\')"' : '';
    const chapText = a.chapter ? escapeHTML(a.chapter) + ' • ' : '';
    return '<div class="adm-item">' +
      '<div class="adm-thumb" ' + thumb + '></div>' +
      '<div class="adm-info">' +
        '<div class="adm-title">' + escapeHTML(a.title||'Tanpa Judul') + '</div>' +
        '<div class="adm-sub">' + chapText + escapeHTML(a.category||'Umum') + ' · ' + escapeHTML(a.level||'-') + ' &nbsp; <span class="pub-pill ' + (pub?'on':'off') + '">' + (pub?'TAYANG':'DRAF') + '</span></div>' +
      '</div>' +
      '<div class="adm-actions">' +
        '<button class="adm-btn" onclick="togglePublish(\'' + a.id + '\', ' + pub + ')">' + (pub?'Sembunyikan':'Tayangkan') + '</button>' +
        '<button class="adm-btn edit" onclick="editArticleAdmin(\'' + a.id + '\')">Edit</button>' +
        '<button class="adm-btn del" onclick="deleteArticleAdmin(\'' + a.id + '\')">Hapus</button>' +
      '</div>' +
    '</div>';
  }).join('');
}
</script>
</body>
</html>
