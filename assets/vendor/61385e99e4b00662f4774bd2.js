
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
        var navHeight = $('.xf').offset().top;
		$(window).scroll(function(a) {
			if ($(this).scrollTop() > navHeight) {
				$(".xf").addClass('fixed');
			} else {
				$(".xf").removeClass('fixed');
			}
		}).scroll();
        
        navClick('.p102-info-fdh-1-nav-one h3', 'ul');

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
        var leftNavFocus1 = {
            init: function() {
                if ($(window).width() < 768) {
                    return false;
                }
                var elnav = $("[navcrumbs]").find("a");
                var elbody = $("[navvicefocus]").find("a");
                var index = 0;
                if (elnav && elbody) {
                    for (var n = (elnav.length - 1); n >= 0; n--) {
                        $.each(elbody, function(i, item) {
                            if (elnav.eq(n).attr("href") === $(item).attr("href")) {
                                $(item).parent().addClass("sidenavcur");
                                $(item).parent().next().show();
                                $(item).parent('h3').parent('.p102-info-fdh-1-nav-one').siblings('.p102-info-fdh-1-nav-one').children('ul').hide();
                                $(item).parent('li').parent('ul').parent('.p102-info-fdh-1-nav-one').siblings('.p102-info-fdh-1-nav-one').children('ul').hide();
                            }
                        });
                    }
                }
            }
        };
        leftNavFocus1.init();
    })


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
    
