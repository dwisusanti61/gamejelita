function sesuaikanLayarLandscape() {
  const container = document.getElementById('game-container');
  if (!container) return;

  // Ukuran desain asli game kamu (samakan dengan CSS di atas)
  const desainLebar = 1280;
  const desainTinggi = 720;

  const layarLebar = window.innerWidth;
  const layarTinggi = window.innerHeight;

  // Hitung rasio pengecilan agar pas di layar HP tanpa terpotong
  const skala = Math.min(layarLebar / desainLebar, layarTinggi / desainTinggi);

  container.style.transform = `scale(${skala})`;
}

// Jalankan saat halaman dibuka dan saat HP diputar (rotasi)
window.addEventListener('load', sesuaikanLayarLandscape);
window.addEventListener('resize', sesuaikanLayarLandscape);

// Pengaturan UI Atas & Info Sekali Tampil
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. UI Atas: Hilang permanen setelah klik pertama di mana saja
  const uiAtas = document.querySelector('header, nav, .ui-atas'); 
  if (uiAtas) {
    if (sessionStorage.getItem('uiAtasSembunyi') === 'true') {
      uiAtas.style.display = 'none';
    } else {
      document.addEventListener('click', function() {
        uiAtas.style.display = 'none';
        sessionStorage.setItem('uiAtasSembunyi', 'true');
      }, { once: true });
    }
  }

  // 2. Pop-up Info: Hanya muncul otomatis 1 kali saja
  const infoBox = document.getElementById('modal-info'); 
  if (infoBox) {
    if (localStorage.getItem('infoSudahTampil') === 'true') {
      infoBox.style.display = 'none';
    } else {
      localStorage.setItem('infoSudahTampil', 'true');
    }
  }
});
