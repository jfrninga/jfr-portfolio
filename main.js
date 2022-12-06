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

//smooth scroll
const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r)
});

