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

  // 2. TUNGGU GAMBAR LATAR SELESAI DIMUAT BARU TAMPILKAN TOMBOL BERSAMAAN
  window.addEventListener('DOMContentLoaded', function() {
    var namaFile = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
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

    if (gambarLatar) {
      var img = new Image();
      img.src = gambarLatar;
      img.onload = function() { document.body.classList.add('bg-ready'); };
      img.onerror = function() { document.body.classList.add('bg-ready'); };
      setTimeout(function() { document.body.classList.add('bg-ready'); }, 1200);
    } else {
      document.body.classList.add('bg-ready');
    }
  });
})();
