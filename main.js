//menu
$(document).ready(function () {
    $("nav").click(function () {
        $(this).toggleClass("_expand");
    });


    const bouton = $('#button-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            bouton.addClass('button-top');
        }
        else {
            bouton.removeClass('button-top');
        }
    });
    bouton.on('click', function () {
        $('html').animate({ scrollTop: 0 })
    });


});


