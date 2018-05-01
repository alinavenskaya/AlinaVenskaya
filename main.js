        var total_pics_num = 3; // колличество изображений 
        var interval = 5000; // задержка между изображениями 
        var time_out = 1; // задержка смены изображений 
        var i = 0; // var timeout; 
        var opacity = 100; // 
        function fade_to_next() {
            opacity--;
            var k = i + 1;
            var image_now = 'image_' + i;
            if (i == total_pics_num) k = 1;
            var image_next = 'image_' + k;
            document.getElementById(image_now).style.opacity = opacity / 100;
            document.getElementById(image_now).style.filter = 'alpha(opacity=' + opacity + ')';
            document.getElementById(image_next).style.opacity = (100 - opacity) / 100;
            document.getElementById(image_next).style.filter = 'alpha(opacity=' + (100 - opacity) + ')';
            timeout = setTimeout("fade_to_next()", time_out);
            if (opacity == 1) {
                opacity = 100;
                clearTimeout(timeout);
            }
        }
        setInterval(
            function () {
                i++;
                if (i > total_pics_num) i = 1;
                fade_to_next();
            }, interval
        );

        //    Функция плавного перехода к якорю
        $(function () {
            $('a[href*=\\#]:not([href=\\#])').click(function () { //При нажатии ссылки 
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { //Запоминаем место ссылки
                    var target = $(this.hash); //Элемент до которого прокручиваем 
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 60
                        }, 1500);
                        return false;
                    }
                }
            });
        });
        $('.nav a').on('click', function () {
            $('.navbar-toggle').click() //bootstrap 3.x by Richard
        });
