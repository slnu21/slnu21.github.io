// 다크/라이트 토글 + 모바일 메뉴 + Utterances 테마 동기화
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var burger = document.querySelector('.nav-burger');
  var menu = document.querySelector('.menu');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    syncUtterances(theme);
  }

  // Utterances iframe 에 테마 변경 메시지 전송
  function syncUtterances(theme) {
    var frame = document.querySelector('iframe.utterances-frame');
    if (!frame) return;
    var uTheme = theme === 'light' ? 'github-light' : 'github-dark';
    frame.contentWindow.postMessage(
      { type: 'set-theme', theme: uTheme },
      'https://utteranc.es'
    );
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      setTheme(next);
    });
  }

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
