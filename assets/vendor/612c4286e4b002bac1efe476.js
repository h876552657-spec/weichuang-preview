
      function addBookmark(_this) { try { var _title = document.title; var url = document.URL; if (window.sidebar) { var ua = navigator.userAgent.toLowerCase(); if (ua.indexOf("firefox") > -1 && ua.match(/firefox\/([\d.]+)/)[1] == "23.0") { _this.setAttribute("title", _title) } else { window.sidebar.addPanel(_title, url, "") } } else if (window.opera && window.print) { var __mbm = document.createElement("a"); __mbm.setAttribute("rel", "sidebar"); __mbm.setAttribute("href", url); __mbm.setAttribute("title", _title); __mbm.click() } else if (document.all) { window.external.AddFavorite(url, _title); return } else { alert("浏览器不支持该操作，尝试快捷键 Ctrl + D !") } } catch (e) { alert("浏览器不支持该操作，尝试快捷键 Ctrl + D !") } }
    

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
    

    $(function() {
        var si = setInterval(function() {
            var imgIsShow = $('.p102-proShow-1-pic img').last().height();
            if (imgIsShow > 0) {
                $(".p102-proShow-1-left").slide({
                    mainCell: ".p102-proShow-1-pic ul",
                    vis: 1,
                    scroll: 1,
                    effect: "left",
                    autoPlay: true,
                    autoPage: true,
                    titOnClassName: "cur",
                    prevCell: ".p102-proShow-1-prev",
                    nextCell: ".p102-proShow-1-next",
                    pageStateCell: ".p102-proShow-1-size"
                });
                clearInterval(si);
            }
        }, 10)
    });


        $(function() {
            $('.p14-prodcontent-1-nav li').on('click', function() {
                var indexsi = $(this).index();
                $(".p14-prodcontent-1-text").eq(indexsi).show().siblings().hide();
                if (!$(this).hasClass("cur")) {
                    $(this).addClass("cur").siblings("li").removeClass("cur");
                }
            });
        });
    
$(".p14-product-2").slide({ mainCell: ".p14-product-2-list", autoPlay: true, effect: "leftMarquee", vis: 4, interTime: 30, trigger: "click" });

    $(function() {
        navClick('.p103-fdh-1-nav-one h3', 'dl');
        navClick('.p103-fdh-1-nav-one dt', 'dd');

        function navClick(clickDom, showDom) {
            $(clickDom).on('click', function() {
                if ($(this).hasClass('sidenavcur')) {
                    $(this).next(showDom).hide();
                    $(this).removeClass('sidenavcur');
                } else {
                    $(this).addClass('sidenavcur');
                    $(this).next(showDom).show();
                    $(this).addClass('sidenavcur');
                }
            });
        }

        //副导航焦点定位
        var leftNavFocus1 = {
            init: function() {
                if ($(window).width() < 768) {
                    return false;
                }
                var elnav = $("[navcrumbs]").find("a");
                var elbody = $("[navvicefocus1]").find("a");
                var index = 0;
                if (elnav && elbody) {
                    for (var n = (elnav.length - 1); n >= 0; n--) {
                        $.each(elbody, function(i, item) {
                            if (elnav.eq(n).attr("href") === $(item).attr("href")) {
                                $(item).parent().addClass("sidenavcur");
                                $(item).parent().next().show();
                            }
                        });
                    }
                }
            }
        };
        leftNavFocus1.init();
    });


    jQuery(document).ready(function () {
      jQuery('.rows .sidebar').theiaStickySidebar({
        additionalMarginTop: 0
      });
    });
  

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
    
