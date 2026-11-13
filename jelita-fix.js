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

  // 2. TAMPILKAN HALAMAN BEGITU GAMBAR LATAR SIAP (MAKSIMAL TUNGGU 0.6 DETIK)
  function tampilkanSekarang() {
    document.body.classList.add('bg-ready');
  }

  window.addEventListener('DOMContentLoaded', function() {
    var namaFile = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var gambarLatar = '';

    if (namaFile.includes('index')) gambarLatar = 'assets/images/splash.png';
    else if (namaFile.includes('name')) gambarLatar = 'assets/images/name.png';
    else if (namaFile.includes('menu')) gambarLatar = 'assets/images/menu.png';
    else if (namaFile.includes('map')) gambarLatar = 'assets/images/map.png';
    else if (namaFile.includes('pos01') || namaFile.includes('pos1')) gambarLatar = 'assets/images/pos01.png';
    else if (namaFile.includes('pos02') || namaFile.includes('pos2')) gambarLatar = 'assets/images/pos02.png';
    else if (namaFile.includes('pos03') || namaFile.includes('pos3')) gambarLatar = 'assets/images/pos03.png';
    else if (namaFile.includes('finish')) gambarLatar = 'assets/images/finish.png';

    if (gambarLatar) {
      var img = new Image();
      img.src = gambarLatar;
      img.onload = tampilkanSekarang;
      img.onerror = tampilkanSekarang;
      setTimeout(tampilkanSekarang, 600);
    } else {
      tampilkanSekarang();
    }
  });
})();
