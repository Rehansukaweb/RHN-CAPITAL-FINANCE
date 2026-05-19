
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistem Kasir RHN STORE - QRIS Edition</title>
    <script src="https://unpkg.com/html5-qrcode"></script>
    <style>
        * { box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        
        body { margin: 0; padding: 0; background-color: #eef2f5; display: flex; height: 100vh; overflow: hidden; }
        
        :root { --primary: #005bb5; --secondary: #ffde00; --danger: #dc3545; --success: #28a745; --dark: #343a40; --light: #f8f9fa; }

        .main-app { display: flex; width: 100%; height: 100vh; overflow: hidden; }

        .left-panel { flex: 6.5; padding: 20px; overflow-y: auto; background: var(--light); height: 100%; }
        .right-panel { flex: 3.5; background: white; border-left: 2px solid #ddd; display: flex; flex-direction: column; height: 100%; box-shadow: -2px 0 5px rgba(0,0,0,0.1); }

        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; background: var(--primary); color: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header-title h1 { margin: 0; font-size: 24px; color: var(--secondary); text-transform: uppercase; }
        .clock { font-size: 16px; font-weight: bold; background: rgba(0,0,0,0.2); padding: 5px 10px; border-radius: 5px; margin-top: 5px; display: inline-block; }
        .badge-pembeli { font-size: 14px; font-weight: bold; background: var(--success); padding: 5px 10px; border-radius: 5px; margin-top: 5px; display: inline-block; color: white; margin-left: 10px; }
        
        .input-group { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; justify-content: flex-end; }
        .barcode-input { padding: 10px; font-size: 16px; border-radius: 5px; border: 1px solid #ccc; width: 220px; outline: none; }
        .barcode-input:focus { border-color: var(--secondary); box-shadow: 0 0 5px var(--secondary); }
        
        .btn-scan, .btn-add { padding: 10px 15px; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; transition: 0.2s; }
        .btn-scan { background: var(--secondary); color: var(--dark); }
        .btn-scan:hover { background: #e6c800; transform: scale(1.05); }
        .btn-add { background: var(--success); color: white; }
        .btn-add:hover { background: #218838; transform: scale(1.05); }

        #reader-container { display: none; margin-bottom: 20px; background: white; padding: 15px; border-radius: 8px; border: 2px solid var(--primary); }
        #reader { width: 100%; max-width: 400px; margin: auto; }
        .btn-close-cam { background: var(--danger); color: white; border: none; padding: 10px; width: 100%; margin-top: 15px; cursor: pointer; border-radius: 5px; font-weight: bold; }

        .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 15px; padding-bottom: 20px; }
        
        .product-card { position: relative; background: white; border-radius: 8px; padding: 25px 15px 15px; text-align: center; cursor: pointer; transition: 0.2s; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .product-card:hover { transform: translateY(-3px); border-color: var(--primary); box-shadow: 0 4px 8px rgba(0,123,255,0.2); }
        .product-card h3 { font-size: 14px; margin: 5px 0; color: var(--dark); }
        .product-card p { color: var(--primary); font-weight: bold; margin: 0; font-size: 16px; }
        .product-card small { color: #888; font-size: 11px; display: block; margin-top: 3px; }
        
        /* Gaya Tampilan Informasi Stok */
        .stok-badge { font-weight: bold; color: var(--success); }
        .stok-habis { color: var(--danger); font-weight: bold; background: #fce8e6; padding: 2px 6px; border-radius: 4px; }

        .btn-delete-product { position: absolute; top: 5px; right: 5px; background: var(--danger); color: white; border: none; border-radius: 4px; width: 22px; height: 22px; font-size: 12px; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: 0.2s; }
        .btn-delete-product:hover { background: #b02a37; transform: scale(1.1); }

        .cart-header { background: var(--dark); color: white; padding: 15px; text-align: center; display: flex; justify-content: space-between; align-items: center; flex-shrink: 0; }
        .cart-header h2 { margin: 0; font-size: 18px; }
        .btn-clear { background: var(--danger); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; }

        .cart-items { flex-grow: 1; overflow-y: auto; padding: 10px; }
        .cart-item { display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee; }
        .cart-item-info { width: 60%; }
        .cart-item-name { font-weight: bold; font-size: 14px; margin-bottom: 5px; }
        .cart-item-qty { font-size: 12px; color: #666; }
        .cart-item-total { font-weight: bold; color: var(--primary); }
        .btn-del { background: var(--danger); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; }

        .cart-summary { padding: 15px; background: #fdfdfd; border-top: 2px solid #ddd; box-shadow: 0 -2px 5px rgba(0,0,0,0.05); flex-shrink: 0; }
        .summary-line { display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 14px; }
        .summary-total { font-size: 18px; font-weight: bold; color: var(--danger); border-top: 2px dashed #ccc; padding-top: 10px; margin-top: 5px; }
        
        .payment-methods { display: flex; gap: 5px; margin: 10px 0; }
        .pay-option { flex: 1; text-align: center; padding: 8px 5px; border: 2px solid #ddd; border-radius: 5px; cursor: pointer; font-size: 13px; font-weight: bold; background: white; transition: 0.2s; color: #555; }
        .pay-option.active { border-color: var(--primary); background: #e6f2ff; color: var(--primary); }

        .pay-content { padding: 10px; border: 1px dashed #ccc; border-radius: 5px; margin-bottom: 10px; background: #fafafa; min-height: 60px; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        .payment-input { width: 100%; padding: 12px; font-size: 18px; font-weight: bold; border: 2px solid var(--primary); border-radius: 5px; text-align: right; }
        .input-kiri { text-align: left; font-size: 16px; margin-bottom: 10px; border-color: #ccc; }
        .input-kiri:focus { border-color: var(--primary); }
        
        .btn-pay { width: 100%; padding: 15px; font-size: 16px; font-weight: bold; background: var(--success); color: white; border: none; border-radius: 5px; cursor: pointer; transition: 0.2s; text-transform: uppercase; }
        .btn-pay:hover { background: #218838; transform: translateY(1px); }

        .modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 1000; justify-content: center; align-items: center; }
        .modal-content { background: white; padding: 30px; border-radius: 10px; text-align: center; width: 400px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); animation: popIn 0.3s ease-out; }
        @keyframes popIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .modal-content h2 { margin-top: 0; font-size: 24px; }
        .change-amount { font-size: 40px; font-weight: bold; color: var(--primary); margin: 20px 0; border-bottom: 2px dashed #ccc; padding-bottom: 20px; }
        .btn-close-modal { background: var(--dark); color: white; border: none; padding: 10px 20px; font-size: 16px; border-radius: 5px; cursor: pointer; width: 100%; }

        #printArea { display: none; font-family: 'Courier New', Courier, monospace; color: black; }

        /* ----- ATURAN LAYAR HP ----- */
        @media screen and (max-width: 1024px) {
            body { height: auto; overflow: auto; display: block; }
            .main-app { flex-direction: column; height: auto; display: flex; }
            .left-panel { width: 100%; height: auto; overflow: visible; padding: 10px; flex: none; }
            .right-panel { width: 100%; height: auto; border-left: none; border-top: 4px solid var(--primary); flex: none; }
            
            .header { flex-direction: column; text-align: center; gap: 10px; }
            .input-group { width: 100%; flex-direction: column; }
            .barcode-input, .btn-scan, .btn-add { width: 100%; }
            .product-grid { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); }
            
            .cart-items { min-height: 200px; max-height: 40vh; } 
            
            .modal-content { width: 90%; padding: 20px; }
        }

        /* ----- ATURAN CETAK STRUK ----- */
        @media print {
            @page { margin: 0; size: auto; }
            body { background: white !important; margin: 0 !important; padding: 15px !important; display: block !important; height: auto !important; overflow: visible !important; }
            .main-app, .modal-overlay { display: none !important; }
            #printArea { display: block !important; position: relative; width: 100%; max-width: 300px; margin: 0 auto; font-size: 12px; }
            .print-header { text-align: center; margin-bottom: 10px; }
            .print-header h2 { margin: 0; font-size: 18px; }
            .print-table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
            .print-table td { padding: 3px 0; }
            .print-right { text-align: right; }
            .print-bold { font-weight: bold; }
            .print-line { border-bottom: 1px dashed black; margin: 8px 0; }
            .print-footer { text-align: center; font-weight: bold; margin-top: 15px; font-size: 11px; }
        }
    </style>
</head>
<body>

    <div class="main-app">
        <div class="left-panel">
            <div class="header">
                <div class="header-title">
                    <h1>🛒 RHN STORE POS</h1>
                    <div class="clock" id="realtimeClock">00:00:00</div>
                    <div class="badge-pembeli">👥 Total Pembeli: <span id="counterPembeli">0</span></div>
                </div>
                <div class="input-group">
                    <input type="text" id="barcodeInput" class="barcode-input" placeholder="Scan / Ketik Kode..." autofocus autocomplete="off">
                    <button class="btn-scan" onclick="bukaKamera()">📷 Scan Kamera</button>
                    <button class="btn-add" onclick="bukaModalTambah()">➕ Tambah Barang</button>
                </div>
            </div>

            <div id="reader-container">
                <div id="reader"></div>
                <button class="btn-close-cam" onclick="tutupKamera()">Tutup Kamera Scanner</button>
            </div>

            <div class="product-grid" id="productGrid"></div>
        </div>

        <div class="right-panel">
            <div class="cart-header">
                <h2>Rincian Transaksi</h2>
                <button class="btn-clear" onclick="kosongkanKeranjang()">🗑️ Batal</button>
            </div>
            
            <div class="cart-items" id="cartItems">
                <div style="text-align: center; color: #999; margin-top: 20px;">Belum ada barang</div>
            </div>

            <div class="cart-summary">
                <div class="summary-line"><span>Subtotal</span><span id="subtotalText">Rp 0</span></div>
                <div class="summary-line"><span>PPN (11%)</span><span id="ppnText">Rp 0</span></div>
                <div class="summary-line summary-total"><span>TOTAL</span><span id="totalText" data-total="0">Rp 0</span></div>

                <div class="payment-methods">
                    <div class="pay-option active" id="btn-cash" onclick="gantiMetodeBayar('cash')">💵 Tunai</div>
                    <div class="pay-option" id="btn-qris" onclick="gantiMetodeBayar('qris')">📱 QRIS / E-Wallet</div>
                </div>

                <div class="pay-content" id="area-cash">
                    <input type="number" id="paymentInput" class="payment-input" placeholder="Nominal Uang (Rp)">
                </div>
                
                <div class="pay-content" id="area-qris" style="display: none; text-align: center;">
                    <span style="font-size: 11px; margin-bottom:5px; font-weight: bold;">Scan QRIS Asli RHN CAPITAL FINANCE:</span>
                    <img src="qris.jpg" alt="QRIS RHN Store" style="width: 130px; border-radius: 8px; border: 2px solid #ccc; margin: 5px 0;">
                    <span style="font-size: 10px; color: #555;">NMID: ID1026489225353</span>
                    <div style="margin-top: 5px; padding: 5px; background: #e6f2ff; border-radius: 5px; width: 100%;">
                        <span style="font-size: 12px; color: #333;">Total yang harus dibayar:</span><br>
                        <span style="font-size: 18px; font-weight: bold; color: var(--primary);" id="qrisAmountText">Rp 0</span>
                    </div>
                </div>
                
                <button class="btn-pay" onclick="prosesPembayaran()">PROSES BAYAR & CETAK</button>
            </div>
        </div>
    </div>

    <div class="modal-overlay" id="successModal">
        <div class="modal-content">
            <h2 id="modalTitle" style="color: var(--success);">✅ TRANSAKSI SUKSES</h2>
            <p id="modalSubtitle">Uang Kembalian Pelanggan:</p>
            <div class="change-amount" id="changeAmountText">Rp 0</div>
            <button class="btn-close-modal" onclick="tutupModalDanLanjut()">Lanjut Transaksi Berikutnya</button>
        </div>
    </div>

    <div class="modal-overlay" id="tambahBarangModal">
        <div class="modal-content">
            <h2 style="color: var(--primary);">➕ Tambah Barang</h2>
            <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Masukkan detail barang baru di bawah ini</p>
            
            <input type="text" id="inputKodeBaru" class="payment-input input-kiri" placeholder="Kode Barang / Barcode">
            <input type="text" id="inputNamaBaru" class="payment-input input-kiri" placeholder="Nama Barang / Makanan">
            <input type="number" id="inputHargaBaru" class="payment-input input-kiri" placeholder="Harga Jual (Rp)">
            <input type="number" id="inputStokBaru" class="payment-input input-kiri" placeholder="Jumlah Stok Awal">
            
            <button class="btn-pay" style="margin-bottom: 10px; margin-top: 10px;" onclick="simpanBarangBaru()">SIMPAN BARANG</button>
            <button class="btn-close-modal" onclick="tutupModalTambah()">Batal</button>
        </div>
    </div>

    <div id="printArea"></div>

    <script>
        let keranjang = [];
        let html5QrcodeScanner = null;
        const ppnRate = 0.11;
        let metodeAktif = 'cash'; 
        let jumlahPembeli = 0; 

        function updateClock() {
            const now = new Date();
            document.getElementById('realtimeClock').innerText = now.toLocaleTimeString('id-ID');
        }
        setInterval(updateClock, 1000); updateClock();

        // Database Produk (Dilengkapi Dengan Nominal Jumlah Stok Sesuai Request)
        let databaseProduk = [
            { kode: "89686010023", nama: "Aqua Botol 600ml", harga: 3500, stok: 50 },
            { kode: "08968604321", nama: "Indomie Goreng", harga: 3500, stok: 100 },
            { kode: "003", nama: "Susu Bear Brand", harga: 10500, stok: 30 },
            { kode: "004", nama: "Roti Aoka Coklat", harga: 3000, stok: 45 },
            { kode: "005", nama: "Chitato Sapi 68g", harga: 11000, stok: 20 },
            { kode: "006", nama: "Kopi Kenangan 220ml", harga: 9500, stok: 25 },
            { kode: "007", nama: "Teh Pucuk Harum 350ml", harga: 4000, stok: 60 },
            { kode: "008", nama: "Beng-Beng Coklat", harga: 2500, stok: 80 },
            { kode: "009", nama: "Nasi Bakar Ayam", harga: 15000, stok: 15 },
            { kode: "010", nama: "Taro Snack Seaweed", harga: 5500, stok: 40 },
            { kode: "011", nama: "Pocari Sweat 500ml", harga: 7500, stok: 35 },
            { kode: "012", nama: "Roti O / Roti Boy", harga: 13000, stok: 10 }
        ];

        function playBeepSound() {
            const context = new (window.AudioContext || window.webkitAudioContext)();
            const osc = context.createOscillator();
            const gain = context.createGain();
            osc.type = "sine"; osc.frequency.value = 1350; 
            gain.gain.setValueAtTime(0.3, context.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.08); 
            osc.connect(gain); gain.connect(context.destination);
            osc.start(); osc.stop(context.currentTime + 0.08);
        }

        function formatRupiah(angka) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
        }

        function bukaModalTambah() {
            document.getElementById('tambahBarangModal').style.display = 'flex';
            document.getElementById('inputKodeBaru').focus();
        }

        function tutupModalTambah() {
            document.getElementById('tambahBarangModal').style.display = 'none';
            document.getElementById('inputKodeBaru').value = '';
            document.getElementById('inputNamaBaru').value = '';
            document.getElementById('inputHargaBaru').value = '';
            document.getElementById('inputStokBaru').value = '';
            document.getElementById('barcodeInput').focus();
        }

        function simpanBarangBaru() {
            const kode = document.getElementById('inputKodeBaru').value.trim();
            const nama = document.getElementById('inputNamaBaru').value.trim();
            const harga = parseFloat(document.getElementById('inputHargaBaru').value);
            const stok = parseInt(document.getElementById('inputStokBaru').value);

            if (kode === "" || nama === "" || isNaN(harga) || harga <= 0 || isNaN(stok) || stok < 0) {
                alert("Harap isi Kode, Nama, Harga, dan Stok dengan angka yang benar!");
                return;
            }

            const cekKode = databaseProduk.find(p => p.kode === kode);
            if (cekKode) {
                alert("Kode Barang tersebut sudah digunakan! Masukkan kode yang berbeda.");
                return;
            }

            databaseProduk.push({ kode: kode, nama: nama, harga: harga, stok: stok });
            renderProduk();
            tutupModalTambah();
            alert("✅ Barang Baru Berhasil Ditambahkan!");
        }

        function hapusBarangDariSistem(event, kode) {
            event.stopPropagation(); 
            if (confirm("Yakin ingin menghapus barang ini secara permanen dari sistem?")) {
                databaseProduk = databaseProduk.filter(p => p.kode !== kode);
                keranjang = keranjang.filter(item => item.kode !== kode);
                updateUIKeranjang();
                renderProduk();
            }
        }

        function gantiMetodeBayar(metode) {
            metodeAktif = metode;
            document.getElementById('btn-cash').classList.remove('active');
            document.getElementById('btn-qris').classList.remove('active');
            document.getElementById('area-cash').style.display = 'none';
            document.getElementById('area-qris').style.display = 'none';
            document.getElementById('btn-' + metode).classList.add('active');
            if (metode === 'cash') {
                document.getElementById('area-cash').style.display = 'block';
                setTimeout(() => document.getElementById('paymentInput').focus(), 100);
            } else if (metode === 'qris') {
                document.getElementById('area-qris').style.display = 'flex';
            }
        }

        // MENAMPILKAN INDIKATOR JUMLAH STOK DI KARTU BARANG
        function renderProduk() {
            const grid = document.getElementById('productGrid');
            grid.innerHTML = '';
            databaseProduk.forEach(produk => {
                let infoStok = produk.stok > 0 
                    ? `<span class="stok-badge">Stok: ${produk.stok}</span>` 
                    : `<span class="stok-habis">HABIS</span>`;

                grid.innerHTML += `
                    <div class="product-card" onclick="tambahKeKeranjang('${produk.kode}')">
                        <button class="btn-delete-product" onclick="hapusBarangDariSistem(event, '${produk.kode}')" title="Hapus Barang">✖</button>
                        <h3>${produk.nama}</h3>
                        <p>${formatRupiah(produk.harga)}</p>
                        <small>Kode: ${produk.kode}</small>
                        <small style="margin-top:5px;">${infoStok}</small>
                    </div>`;
            });
        }

        // FITUR PROTEKSI AGAR TIDAK BISA TRANSAKSI KALAU STOK KOSONG
        function tambahKeKeranjang(kode) {
            const produk = databaseProduk.find(p => p.kode === kode);
            if (!produk) { alert("Produk tidak ditemukan!"); return; }
            
            const itemDiKeranjang = keranjang.find(i => i.kode === kode);
            const qtySekarang = itemDiKeranjang ? itemDiKeranjang.qty : 0;

            if (qtySekarang >= produk.stok) {
                alert(`⚠️ Maaf, Stok ${produk.nama} tidak mencukupi/habis!`);
                return;
            }

            if (itemDiKeranjang) {
                itemDiKeranjang.qty += 1;
                itemDiKeranjang.subtotal = itemDiKeranjang.qty * itemDiKeranjang.harga;
            } else {
                keranjang.push({ ...produk, qty: 1, subtotal: produk.harga });
            }
            
            playBeepSound(); 
            updateUIKeranjang();
        }

        function hapusDariKeranjang(kode) {
            keranjang = keranjang.filter(item => item.kode !== kode);
            updateUIKeranjang();
        }

        function kosongkanKeranjang() {
            if(confirm("Yakin batalkan transaksi?")) {
                keranjang = []; document.getElementById('paymentInput').value = ''; updateUIKeranjang();
            }
        }

        function updateUIKeranjang() {
            const container = document.getElementById('cartItems');
            container.innerHTML = ''; let subtotal = 0;
            if (keranjang.length === 0) container.innerHTML = '<div style="text-align: center; color: #999; margin-top: 20px;">Belum ada barang</div>';
            else keranjang.forEach(item => {
                subtotal += item.subtotal;
                container.innerHTML += `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.nama}</div>
                            <div class="cart-item-qty">${item.qty} x ${formatRupiah(item.harga)}</div>
                        </div>
                        <div class="cart-item-total">${formatRupiah(item.subtotal)}</div>
                        <button class="btn-del" onclick="hapusDariKeranjang('${item.kode}')">X</button>
                    </div>`;
            });
            
            const ppn = subtotal * ppnRate;
            const total = subtotal + ppn;
            
            document.getElementById('subtotalText').innerText = formatRupiah(subtotal);
            document.getElementById('ppnText').innerText = formatRupiah(ppn);
            document.getElementById('totalText').innerText = formatRupiah(total);
            document.getElementById('totalText').setAttribute('data-total', total);
            
            document.getElementById('qrisAmountText').innerText = formatRupiah(total);
        }

        document.getElementById('barcodeInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim() !== "") {
                tambahKeKeranjang(this.value.trim()); this.value = '';
            }
        });

        function bukaKamera() {
            document.getElementById('reader-container').style.display = 'block';
            if (!html5QrcodeScanner) html5QrcodeScanner = new Html5Qrcode("reader");
            html5QrcodeScanner.start({ facingMode: "environment" }, { fps: 10, qrbox: {width: 250, height: 150} },
                (decodedText) => { tutupKamera(); tambahKeKeranjang(decodedText); }, (err) => {}
            ).catch(() => { alert("Gagal buka kamera."); tutupKamera(); });
        }
        function tutupKamera() {
            if (html5QrcodeScanner) html5QrcodeScanner.stop().then(() => document.getElementById('reader-container').style.display = 'none');
            else document.getElementById('reader-container').style.display = 'none';
        }

        function prosesPembayaran() {
            if (keranjang.length === 0) { alert("Keranjang kosong!"); return; }
            
            const totalTagihan = parseFloat(document.getElementById('totalText').getAttribute('data-total'));
            let uangBayar = 0;
            let kembalian = 0;
            let teksMetodeStruk = "";

            if (metodeAktif === 'cash') {
                uangBayar = parseFloat(document.getElementById('paymentInput').value);
                if (isNaN(uangBayar) || uangBayar < totalTagihan) {
                    alert("Nominal uang tunai kurang!"); return;
                }
                kembalian = uangBayar - totalTagihan;
                teksMetodeStruk = "TUNAI";
                document.getElementById('modalSubtitle').innerText = "Uang Kembalian Pelanggan:";
                document.getElementById('changeAmountText').innerText = formatRupiah(kembalian);

            } else if (metodeAktif === 'qris') {
                uangBayar = totalTagihan;
                kembalian = 0;
                teksMetodeStruk = "QRIS / E-WALLET";
                document.getElementById('modalSubtitle').innerText = "Pembayaran via QRIS Berhasil";
                document.getElementById('changeAmountText').innerText = "LUNAS";
            }

            // OTOMATIS MEMOTONG JUMLAH STOK DI DATABASE KETIKA BAYAR SUKSES
            keranjang.forEach(item => {
                const p = databaseProduk.find(x => x.kode === item.kode);
                if (p) p.stok -= item.qty; 
            });
            
            jumlahPembeli += 1;
            document.getElementById('counterPembeli').innerText = jumlahPembeli;
            
            renderProduk(); // Update tampilan stok baru di layar utama

            document.getElementById('successModal').style.display = 'flex';
            siapkanStrukPrint(totalTagihan, uangBayar, kembalian, teksMetodeStruk);
            
            setTimeout(() => { window.print(); }, 800);
        }

        function siapkanStrukPrint(total, bayar, kembali, tipePembayaran) {
            let isiStruk = `
                <div class="print-header">
                    <h2>RHN STORE</h2>
                    <div>Jl. Teknologi No. 99, Jakarta</div>
                    <div style="font-size: 10px; margin-top: 3px;">Tanggal: ${new Date().toLocaleString('id-ID')}</div>
                </div>
                <div class="print-line"></div>
                <table class="print-table">
            `;
            let subtotal = 0;
            keranjang.forEach(item => {
                subtotal += item.subtotal;
                isiStruk += `<tr><td colspan="2" class="print-bold">${item.nama}</td></tr>
                             <tr><td>${item.qty} x ${item.harga}</td><td class="print-right">${item.subtotal}</td></tr>`;
            });
            const ppn = subtotal * ppnRate;
            isiStruk += `
                </table>
                <div class="print-line"></div>
                <table class="print-table">
                    <tr><td>Subtotal</td><td class="print-right">${formatRupiah(subtotal)}</td></tr>
                    <tr><td>PPN 11%</td><td class="print-right">${formatRupiah(ppn)}</td></tr>
                    <tr class="print-bold" style="font-size: 14px;"><td>TOTAL</td><td class="print-right">${formatRupiah(total)}</td></tr>
                    <tr><td style="font-size:11px;">BAYAR (${tipePembayaran})</td><td class="print-right">${formatRupiah(bayar)}</td></tr>
                    <tr><td>KEMBALI</td><td class="print-right">${formatRupiah(kembali)}</td></tr>
                </table>
                <div class="print-line"></div>
                <div class="print-footer">Terima kasih telah belanja di toko RHN STORE<br>Barang yang dibeli tidak dapat ditukar.</div>
            `;
            document.getElementById('printArea').innerHTML = isiStruk;
        }

        function tutupModalDanLanjut() {
            document.getElementById('successModal').style.display = 'none';
            keranjang = []; 
            document.getElementById('paymentInput').value = ''; 
            updateUIKeranjang();
            document.getElementById('barcodeInput').focus();
        }

        window.onload = function() { renderProduk(); document.getElementById('barcodeInput').focus(); };
    </script>
</body>
</html>
