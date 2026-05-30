// 코드 블록마다 '복사' 버튼 주입 (외부 의존 없음)
(function () {
  var blocks = document.querySelectorAll('.prose pre');
  if (!blocks.length || !navigator.clipboard) return;

  blocks.forEach(function (pre) {
    // rouge 는 <pre> 안에 코드를 넣음. 버튼 위치를 위해 relative 래퍼 처리
    pre.style.position = 'relative';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.textContent = '복사';
    btn.setAttribute('aria-label', '코드 복사');

    btn.addEventListener('click', function () {
      var code = pre.querySelector('code') || pre;
      var text = code.innerText;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = '복사됨!';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = '복사';
          btn.classList.remove('copied');
        }, 1500);
      }).catch(function () {
        btn.textContent = '실패';
        setTimeout(function () { btn.textContent = '복사'; }, 1500);
      });
    });

    pre.appendChild(btn);
  });
})();
