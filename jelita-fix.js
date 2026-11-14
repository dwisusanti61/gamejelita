(function () {
  // 1. Kunci viewport agar WebView APK tidak melakukan zoom jumbo
  function kunciViewportAPK() {
    let meta = document.querySelector('meta[name="viewport"]');
    const kontenAman = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no';
    if (meta) {
      meta.setAttribute('content', kontenAman);
    } else {
      meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = kontenAman;
      document.head.appendChild(meta);
    }
  }

  kunciViewportAPK();
  window.addEventListener('load', kunciViewportAPK);
  window.addEventListener('resize', kunciViewportAPK);

  // 2. Hentikan semua audio otomatis saat keluar APK / pindah aplikasi / kunci layar
  let pernahDiputar = false;

  function matikanSemuaAudio() {
    const semuaAudio = document.querySelectorAll('audio');
    semuaAudio.forEach(function (audio) {
      if (!audio.paused) {
        pernahDiputar = true;
        audio.pause();
      }
    });
  }

  function lanjutkanAudioJikaTidakMute() {
    const isMuted = localStorage.getItem('jelita_bgm_muted') === 'true';
    if (!isMuted && pernahDiputar) {
      const semuaAudio = document.querySelectorAll('audio');
      semuaAudio.forEach(function (audio) {
        audio.play().catch(function () {});
      });
    }
  }

  // Deteksi saat pengguna keluar aplikasi (Home / Recent Apps / Layar Mati)
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      matikanSemuaAudio();
    } else {
      lanjutkanAudioJikaTidakMute();
    }
  });

  window.addEventListener('pagehide', matikanSemuaAudio);
  window.addEventListener('blur', matikanSemuaAudio);
  window.addEventListener('beforeunload', matikanSemuaAudio);
})();
