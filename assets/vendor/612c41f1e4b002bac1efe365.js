
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
    
