// portfolio lightbox 
$(document).ready(function ($) {
    //parallax effect plugin
    $.stellar();
    //scroll to anchor
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    // delegate calls to data-toggle="lightbox"
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            always_show_close: true
        });
    });
    
    //responsive text plugin
    $("h1, h2").fitText();
    $("h1").fitText(1.2, {
        minFontSize: '50px',
        maxFontSize: '100px'
    });
    $("h2").fitText(1.5, {
        minFontSize: '30px',
        maxFontSize: '60px'
    });

    //reveal animation when scroll
    new WOW().init();
    
    //bootstrap carousel
    $('#artCarousel').carousel({
        interval: 5000,
        cycle: true
    });
});
