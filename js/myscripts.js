// ОБРАБОТЧИК ПЛАВНОГО ПЕРЕХОДА ВНИЗ ПО МЕНЮ
$(document).ready(function() {
    $("#menu").on("click","a",function (event) {
        event.preventDefault();
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - $('header').height();
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
});

// ОБРАБОТЧИК КНОПКИ НАВЕРХ
$(function() {
    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop:0
        },1000);
    })
})

$(window).scroll(function() {
    if ($(this).scrollTop()>1000) {
        $('.scrollup').fadeIn();
    }
    else {
        $('.scrollup').fadeOut();
    }
});



