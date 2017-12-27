$(document).ready(function () {
    /* Табы */
    $(function () {
        $("#tabs").tabs({
            hide: {
                effect: "fade",
                duration: 300
            }
        });
    });

    /* Галерея о клинике*/
    $('.small a').click(function (e) {
        if ($('.big img').attr('src') != $(this).attr('href')) {
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(200);

        }
        e.preventDefault();

    });
    $('.small a img').click(function () {
        $('.small a img').fadeTo(100, 1);
        $(this).fadeTo(100, .5)
    });

    /* Галерея сертификатов */
    $(function () {
        $("[data-fancybox]").fancybox({
            speed: 330,
            opacity: 'auto',
            closeBtn: true
        });
    });


    /* Видео */
    $(".video_wrapper").click(function () {
        var a = $(this).attr("data-youtube");
        $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>')
    });

    /* Слайдер Причин */
    $('.risons-crsl-items').carousel({
        itemMinWidth: 300,
        autoRotate: false,
        speed: 600,
        visible: 3
    });

    /* Якорь вверх */
    $(function (f) {
        var element = f('.up');
        f(window).scroll(function () {
            element['fade' + (f(this).scrollTop() > 200 ? 'In' : 'Out')](1);
        });
        $('.up').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });
    /* Конец функции документа */
});