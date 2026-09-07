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
    initMobile();
  });

  /* ---------------------------------------------------------------
     移动端：汉堡菜单 + 侧边抽屉 + 底部固定条

     这两个控件都由 JS 注入，不写进 300 个 HTML 文件——它们是交互控件，
     不是内容。导航链接本身始终在 HTML 源码里（抽屉只是用 CSS transform
     把 <ul> 移出屏幕），爬虫抓到的 DOM 和桌面端完全一致。
     --------------------------------------------------------------- */
  function initMobile() {
    var nav = document.querySelector('.menu > ul');
    var bar = document.querySelector('.h-nr .header');
    if (!nav || !bar || document.querySelector('.wcy-burger')) return;

    // 汉堡按钮
    var burger = document.createElement('button');
    burger.className = 'wcy-burger';
    burger.type = 'button';
    burger.setAttribute('aria-label', '打开导航菜单');
    burger.setAttribute('aria-expanded', 'false');
    burger.innerHTML = '<i></i><i></i><i></i>';
    bar.appendChild(burger);

    // 遮罩
    var mask = document.createElement('div');
    mask.className = 'wcy-mask';
    document.body.appendChild(mask);

    function setOpen(open) {
      document.body.classList.toggle('wcy-nav-open', open);
      nav.classList.toggle('wcy-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
    }
    burger.addEventListener('click', function () {
      setOpen(!document.body.classList.contains('wcy-nav-open'));
    });
    mask.addEventListener('click', function () { setOpen(false); });
    nav.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });

    // 底部固定条：电话取页眉里已有的号码，不新增内容
    var telEl = document.querySelector('.hd-tel b');
    var tel = telEl ? telEl.textContent.replace(/\D/g, '') : '';
    var qq = document.querySelector('a[href*="wpa.qq.com"]');
    var footer = document.createElement('div');
    footer.className = 'wcy-bottombar';
    footer.innerHTML =
      (tel ? '<a class="pri" href="tel:' + tel + '">拨打电话</a>' : '') +
      (qq ? '<a href="' + qq.getAttribute('href') + '" target="_blank" rel="nofollow">在线咨询</a>' : '');
    if (footer.children.length) document.body.appendChild(footer);
  }
})();
