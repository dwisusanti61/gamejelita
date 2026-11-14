(function () {
  // Paksa viewport agar WebView APK tidak melakukan zoom jumbo
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
})();
