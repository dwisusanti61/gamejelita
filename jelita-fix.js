(function() {
  // 1. AUTO-PAUSE AUDIO SAAT KELUAR / KUNCI LAYAR HP
  document.addEventListener('visibilitychange', function() {
    var musik = document.getElementById('bgMusic');
    if (!musik) return;
    if (document.hidden) {
      musik.pause();
    } else if (localStorage.getItem('jelita_bgm_muted') !== 'true') {
      musik.play().catch(function() {});
    }
  });

  window.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    var namaFile = path.split('/').pop() || 'index.html';

    // Daftar halaman yang memakai 2 latar (panggung 16:9 presisi)
    var halamanDuaLatar = ['map.html', 'pos1.html', 'pos2.html', 'pos3.html', 'finish.html'];
    var gambarLatar = '';

    if (namaFile.includes('index')) gambarLatar = 'assets/images/splash.png';
    else if (namaFile.includes('menu')) gambarLatar = 'assets/images/menu.png';
    else if (namaFile.includes('map')) gambarLatar = 'assets/images/map.png';
    else if (namaFile.includes('pos01')) gambarLatar = 'assets/images/pos01.png';
    else if (namaFile.includes('pos1')) gambarLatar = 'assets/images/pos1.png';
    else if (namaFile.includes('pos02')) gambarLatar = 'assets/images/pos02.png';
    else if (namaFile.includes('pos2')) gambarLatar = 'assets/images/pos2.png';
    else if (namaFile.includes('pos03')) gambarLatar = 'assets/images/pos03.png';
    else if (namaFile.includes('pos3')) gambarLatar = 'assets/images/pos3.png';
    else if (namaFile.includes('finish')) gambarLatar = 'assets/images/finish.png';

    // Terapkan 2 latar otomatis jika termasuk halaman arena/peta/sertifikat
    if (halamanDuaLatar.some(function(h) { return namaFile.includes(h.replace('.html', '')); })) {
      document.body.classList.add('mode-dua-latar');
      if (gambarLatar) {
        document.body.style.backgroundImage = "url('" + gambarLatar + "')";
      }
    }

    // 2. TUNGGU GAMBAR LATAR SELESAI DIMUAT BARU TAMPILKAN TOMBOL BERSAMAAN
    if (gambarLatar) {
      var img = new Image();
      img.src = gambarLatar;
      img.onload = function() { document.body.classList.add('bg-ready'); };
      img.onerror = function() { document.body.classList.add('bg-ready'); };
      setTimeout(function() { document.body.classList.add('bg-ready'); }, 1500);
    } else {
      document.body.classList.add('bg-ready');
    }
  });
})();
