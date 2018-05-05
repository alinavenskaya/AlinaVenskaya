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
        if (!(document.getElementById('image_now') === null)) {
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

    }
    setInterval(
        function () {
            i++;
            if (i > total_pics_num) i = 1;
            fade_to_next();
        }, interval
    );

    function smoothTransition() {
        $('.b').click(function () {
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
    }

    function ajLoad(id, click) {
        if (click) {
            $('a[href="#' + id + '"]').click(function () {
                $.ajax({
                    url: 'ajax/car_' + id + '.html',
                    success: function (result) {
                        $('#car').html(result);
                        $('.owl-carousel').owlCarousel({
                            loop: true,
                            dots: true,
                            nav: true,
                            navText: ["", ""],
                            responsive: {
                                600: {
                                    items: 1
                                },
                                200: {
                                    items: 1
                                }
                            }
                        });
                    }
                })
                $.ajax({
                    url: 'ajax/miu_' + id + '.html',
                    success: function (result) {
                        $('#miu').html(result);

                        var mixer = mixitup('.mixitup');
                        $('#dn').click();
                        	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});
                    }
                })
                $.ajax({
                    url: 'ajax/about_' + id + '.html',
                    success: function (result) {
                        $('#about').html(result);
                        smoothTransition();
                    }
                })
                $.ajax({
                    url: 'ajax/welcome_' + id + '.html',
                    success: function (result) {
                        $('#welcome').html(result);
                        smoothTransition();
                    }
                })

                $('.owl-gallery').owlCarousel('destroy');
                $('.owl-carousel').owlCarousel({
                    loop: true,
                    dots: true,
                    nav: true,
                    navText: ["", ""],
                    responsive: {
                        600: {
                            items: 1
                        },
                        200: {
                            items: 1
                        }
                    }
                });
                //            changePictures();

            });
        } else {
            $.ajax({
                url: 'ajax/car_' + id + '.html',
                success: function (result) {
                    $('#car').html(result);
                    $('.owl-carousel').owlCarousel({
                        loop: true,
                        dots: true,
                        nav: true,
                        navText: ["", ""],
                        responsive: {
                            600: {
                                items: 1
                            },
                            200: {
                                items: 1
                            }
                        }
                    });
                }
            })
            $.ajax({
                url: 'ajax/miu_' + id + '.html',
                success: function (result) {
                    $('#miu').html(result);

                    var mixer = mixitup('.mixitup');
                    $('#dn').click();
                    	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});
                }
            })
            $.ajax({
                url: 'ajax/about_' + id + '.html',
                success: function (result) {
                    $('#about').html(result);
                    smoothTransition();
                }
            })
            $.ajax({
                url: 'ajax/welcome_' + id + '.html',
                success: function (result) {
                    $('#welcome').html(result);
                    smoothTransition();
                }
            })
            $('.owl-gallery').owlCarousel('destroy');
            $('.owl-carousel').owlCarousel({
                loop: true,
                dots: true,
                nav: true,
                navText: ["", ""],
                responsive: {
                    600: {
                        items: 1
                    },
                    200: {
                        items: 1
                    }
                }
            });
            $('.b').click(function () {
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
        }

    }
    $(document).ready(function () {
                smoothTransition();
                var mixer = mixitup('.mixitup');
                $("#dn").click();
                $(".owl-carousel").owlCarousel({
                    loop: true,
                    dots: true,
                    nav: true,
                    navText: ["", ""],
                    responsive: {
                        600: {
                            items: 1
                        },
                        200: {
                            items: 1
                        }
                    }
                });
                $('.nav-link').on('click', function () {
                    //            $('.navbar-toggler').click() //bootstrap 3.x by Richard
                    $('.navbar-collapse').collapse('hide');
                    /*  alert('test');*/
                });
                var roomName = ['Livingroom', 'Kitchen', 'Bathroom', 'Sleepingroom', 'Childrenroom', 'Cabinet'];
                for (name in roomName) {
                    ajLoad(roomName[name], true);
                    if (document.location.href.slice(-(roomName[name].length)) == roomName[name]) {
                        ajLoad(roomName[name], false);
                    }
                }
                $('.image-popup-vertical-fit').magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    mainClass: 'mfp-img-mobile',
                    image: {
                        verticalFit: true
                    }
                });
                });
