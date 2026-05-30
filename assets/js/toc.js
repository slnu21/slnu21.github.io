// 글 본문(h2/h3)으로 목차 생성 (외부 의존 없음, 순수 JS)
(function () {
  var content = document.getElementById('post-content');
  var toc = document.getElementById('toc');
  if (!content || !toc) return;

  var headings = content.querySelectorAll('h2, h3');
  if (headings.length < 2) return; // 헤딩 적으면 목차 생략

  var list = toc.querySelector('.toc-list');

  headings.forEach(function (h) {
    // kramdown auto_ids 로 id 가 보통 있지만, 없으면 생성
    if (!h.id) {
      h.id = h.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w가-힣-]/g, '');
    }
    var li = document.createElement('li');
    li.className = 'toc-' + h.tagName.toLowerCase(); // toc-h2 / toc-h3
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    list.appendChild(li);
  });

  toc.hidden = false;

  // 현재 보고 있는 섹션 하이라이트
  var links = toc.querySelectorAll('a');
  function onScroll() {
    var pos = window.scrollY + 120;
    var current = null;
    headings.forEach(function (h) {
      if (h.offsetTop <= pos) current = h.id;
    });
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
