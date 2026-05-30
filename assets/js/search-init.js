// 클라이언트 글 검색 (외부 의존 없음). search.json 을 불러와 제목/요약/본문/태그를 매칭.
(function () {
  var script = document.currentScript;
  var jsonUrl = (script && script.getAttribute('data-json')) || '/search.json';
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  if (!input || !results) return;

  var data = [];
  var loaded = false;

  fetch(jsonUrl)
    .then(function (r) { return r.json(); })
    .then(function (json) { data = json; loaded = true; if (input.value) run(input.value); })
    .catch(function () { if (status) status.textContent = '검색 인덱스를 불러오지 못했습니다.'; });

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function run(q) {
    q = q.trim().toLowerCase();
    results.innerHTML = '';
    if (!q) { if (status) status.textContent = ''; return; }
    if (!loaded) { if (status) status.textContent = '인덱스 로딩 중…'; return; }

    var terms = q.split(/\s+/);
    var hits = data.filter(function (p) {
      var hay = (p.title + ' ' + p.excerpt + ' ' + p.content + ' ' + p.tags + ' ' + p.categories).toLowerCase();
      return terms.every(function (t) { return hay.indexOf(t) !== -1; });
    });

    if (status) status.textContent = hits.length + '개의 글을 찾았습니다.';
    hits.forEach(function (p) {
      var el = document.createElement('article');
      el.className = 'post-row';
      el.innerHTML =
        '<a class="post-title" href="' + p.url + '">' + esc(p.title) + '</a>' +
        '<div class="post-date">' + esc(p.date) + (p.categories ? ' · ' + esc(p.categories) : '') + '</div>' +
        (p.excerpt ? '<p class="post-excerpt">' + esc(p.excerpt).slice(0, 140) + '</p>' : '');
      results.appendChild(el);
    });
  }

  var timer;
  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () { run(input.value); }, 120);
  });
})();
