/* 伟创业原型：本地导航辅助
   1) 站内链接已改写成本地文件名，可以像正常网站一样点击跳转
   2) 原站有、但这次没抓下来的页面标了 data-stub，点了不跳转，弹一条提示 */
(function () {
  var TIP = '这个页面原站有，但没抓到本地原型里，所以点不开。';
  var box;

  function toast(msg) {
    if (!box) {
      box = document.createElement('div');
      box.setAttribute('role', 'status');
      box.style.cssText =
        'position:fixed;left:50%;bottom:36px;transform:translateX(-50%);z-index:99999;' +
        'max-width:80vw;padding:11px 18px;border-radius:3px;background:#22252c;color:#fff;' +
        'font:14px/1.6 "Microsoft YaHei",sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.28);' +
        'opacity:0;transition:opacity .18s ease;pointer-events:none';
      document.body.appendChild(box);
    }
    box.textContent = msg;
    box.style.opacity = '1';
    clearTimeout(box._t);
    box._t = setTimeout(function () { box.style.opacity = '0'; }, 2200);
  }

  document.addEventListener('click', function (ev) {
    var a = ev.target.closest ? ev.target.closest('a[data-stub]') : null;
    if (!a) return;
    ev.preventDefault();
    toast(TIP);
  }, true);

  document.addEventListener('DOMContentLoaded', function () {
    var stubs = document.querySelectorAll('a[data-stub]');
    for (var i = 0; i < stubs.length; i++) {
      if (!stubs[i].getAttribute('title')) stubs[i].setAttribute('title', TIP);
      stubs[i].style.cursor = 'not-allowed';
    }
  });
})();
