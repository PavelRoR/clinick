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



    /* Конец документа */
});