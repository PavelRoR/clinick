$(document).ready(function () {
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


    $(function () {
        var location = window.location.href;
        var cur_url = '/' + location.split('/').pop();
    
        $('#aside li').each(function () {
            var link = $(this).find('a').attr('href');
    
            if (cur_url == link) {
                $(this).addClass('active');
            }
        });
    });

    $(function () {
        
            $('#aside li').click(function () {
        
        
                $('#aside li').removeClass('active');
                $(this).addClass('active');
            })
        
        });
    /* Раскрывашка для категории */ 
   $('#category_article').moreContent({
    duration: 1000,
    btn: 'Описание полностью',
    btnActive: 'Свернуть',
    btnClass: 'full'
   });
  /* Меню */
   $('#menu_icon').on('click', function () {
    if (!$(this).hasClass('clicked')) {
        $(this).addClass('clicked');
        $('.upper_span').addClass('upper_span_opened');
        $('.middle_span').addClass('middle_span_opened');
        $('.lower_span').addClass('lower_span_opened');
        $('.menu_container').addClass('menu_container_opened');
        $('body').css("overflow", "hidden");
        $('#aside').delay(300).show(300);
    } else {
        $(this).delay(300).removeClass('clicked');
        $('.upper_span').removeClass('upper_span_opened');
        $('.middle_span').removeClass('middle_span_opened');
        $('.lower_span').removeClass('lower_span_opened');
        $('.menu_container').removeClass('menu_container_opened');
        $('#aside').hide(300);
        $('body').css("overflow", "initial");        
    }
});

    /* Конец документа */
});