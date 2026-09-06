
      function addBookmark(_this) { try { var _title = document.title; var url = document.URL; if (window.sidebar) { var ua = navigator.userAgent.toLowerCase(); if (ua.indexOf("firefox") > -1 && ua.match(/firefox\/([\d.]+)/)[1] == "23.0") { _this.setAttribute("title", _title) } else { window.sidebar.addPanel(_title, url, "") } } else if (window.opera && window.print) { var __mbm = document.createElement("a"); __mbm.setAttribute("rel", "sidebar"); __mbm.setAttribute("href", url); __mbm.setAttribute("title", _title); __mbm.click() } else if (document.all) { window.external.AddFavorite(url, _title); return } else { alert("浏览器不支持该操作，尝试快捷键 Ctrl + D !") } } catch (e) { alert("浏览器不支持该操作，尝试快捷键 Ctrl + D !") } }
    

      $(document).ready(function () {
        $(".banner").hover(function () {
          $(this).find(".slick-prev,.slick-next").stop(true, true).fadeTo("show", 0.9)
        }, function () {
          $(this).find(".slick-prev,.slick-next").fadeOut()
        });
        $('.banner').slick({
          autoplay: true,
          autoplaySpeed: 3500,
          dots: true
        });
      });
    

        var keys = document.getElementById("keys");

        function searchInfos() {
            var base = $('head').data('base');
            if (keys.value) {
                location.href = base + "search.php?key=" + keys.value;
            } else {
                alert('请输入您要搜索的关键词！');
            }
        }
        keys.addEventListener('keypress', function(event) {
            var keycode = event.keycode || event.which;
            if (keycode == "13") {
                searchInfos();
            }
        });

        function searchLinks(el) {
            var href = $(el).attr("href");
            location.href = href ? href : "/search.php?key=" + $(el).html();
        }
    

      $(document).ready(function () {
        $('.pro-ad-pic').slick({
          autoplay: true,
          autoplaySpeed: 3500,
          dots: true
        });
      });
    

      jQuery(".g-super").slide({ prevCell: ".super-prev", nextCell: ".super-next", mainCell: ".super-c", titCell: ".super-nav li", effect: "fade", autoPlay: true, titOnClassName: "cur" });
    

      $(".g-partner").slide({ mainCell: ".partner ul", autoPlay: true, effect: "leftMarquee", vis: 6, interTime: 30, trigger: "click" });
    

      $(".news1").slide({ titCell: ".news1-c h5", mainCell: ".news1-con", autoPlay: true, autoPage: "<em></em>", effect: "leftLoop", vis: 1, });
      $(".news3").slide({ mainCell: ".news3-con ul", autoPlay: true, effect: "leftMarquee", vis: 3, interTime: 30, trigger: "click" });
        var key = document.getElementById("key");

        function searchInfo() {
            var base = $('head').data('base');
            if (key.value) {
                location.href = base + "search.php?key=" + key.value;
            } else {
                alert('请输入您要搜索的关键词！');
            }
        }
        key.addEventListener('keypress', function(event) {
            var keycode = event.keycode || event.which;
            if (keycode == "13") {
                searchInfo();
            }
        });

        function searchLink(el) {
            var href = $(el).attr("href");
            location.href = href ? href : "/search.php?key=" + $(el).html();
        }
    

      $(".g-show").slide({ titCell: ".show-tit a", mainCell: ".show", autoPlay: false, effect: "fade", titOnClassName: "cur" })
      $(".show-bd").slide({ mainCell: "ul", prevCell: ".show-left", nextCell: ".show-right", autoPlay: true, effect: "leftMarquee", interTime: 30, vis: 4 })
    

    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
      var wow = new WOW(
        {
          boxClass: 'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset: 50,          // distance to the element when triggering the animation (default is 0)
          mobile: true,       // trigger animations on mobile devices (default is true)
          live: true,       // act on asynchronously loaded content (default is true)
          callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
        }
      );
      wow.init();
    };
  

        $(function() {
            var time;
            //var winHeight = top.window.document.body.clientHeight || $(window.parent).height();
            $('.client-2').css({
                'marginTop': -($('.client-2').height() / 2)
            });
            //返回顶部
            $(window).scroll(function() {
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                var eltop = $("#client-2").find(".my-kefu-ftop");
                if (scrollTop > 0) {
                    eltop.show();
                } else {
                    eltop.hide();
                }
            });
            $("#client-2").find(".my-kefu-ftop").click(function() {
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                if (scrollTop > 0) {
                    $("html,body").animate({
                        scrollTop: 0
                    }, "slow");
                }
            });
        });
    
