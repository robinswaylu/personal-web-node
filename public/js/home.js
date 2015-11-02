// portfolio lightbox 
			$(document).ready(function ($) {

				// delegate calls to data-toggle="lightbox"
				$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
					event.preventDefault();
					return $(this).ekkoLightbox({
						always_show_close: true
					});
				});

			});
		










 
//scroll to anchor
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
 
 
 

/*
//add overlay on hover over every project
$(".portfolio-item").on({
    "mouseover": function () {
        $(this).children().first().addClass("overlayItem");
    },
    "mouseleave": function () {
        $(this).children().first().removeClass("overlayItem");
    }
});
*/




//parallax
$.stellar();

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

/*
 
//start animation when selected object enter viewport
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.aboutPage h1, .aboutPage p');

    // If the animation has already been started
    if ($elem.hasClass('start')){
   
        return;
    };

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
}); */