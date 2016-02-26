 $(document).ready(function () {

     //start carousel
     carousel.init();

     //show bootstrap tab on hover
     $('.nav>li').hover(function (e) {
         e.preventDefault()
         $(this).find('a').tab('show');
     });

 });

//slider carousel function 
var carousel = function () {
     var startInterval,
         slide_container = $(".slider"),
         ul = $(".slider ul:first-child"),
         slide_count = ul.children().length,
         slide_width_pc = 100.0 / slide_count,
         slide_index = 0,

         first_slide = ul.find("li:first-child"),
         last_slide = ul.find("li:last-child"),

         slide_indicators = $(".slider ul.nav-dots"),
         slide_indicator = $(".slider ul.nav-dots li");
     // Clone the last slide and add as first li element
     last_slide.clone().prependTo(ul);

     // Clone the first slide and add as last li element
     first_slide.clone().appendTo(ul);



     ul.find("li").each(function (indx) {
         var left_percent = (slide_width_pc * indx) + "%";
         $(this).css({
             "left": left_percent
         });
         $(this).css({
             width: (100 / slide_count) + "%"
         });
     });

     ul.css("margin-left", "-100%");

     // Listen for click of prev button
     $(".slider .prev").click(function () {
         console.log("prev button clicked");
         slide(slide_index - 1);
     });

     // Listen for click of next button
     $(".slider .next").click(function () {
         console.log("next button clicked");
         slide(slide_index + 1);
     });

     //Listen for slide-indicator click event
     slide_indicator.click(function () {
         console.log("click slide indicator");
         slide($(this).data("index"));
     });

     function slide(new_slide_index) {


         var margin_left_pc = (new_slide_index * (-100) - 100) + "%";

         ul.animate({
             "margin-left": margin_left_pc
         }, 400, function () {

             // If new slide is before first slide...
             if (new_slide_index < 0) {
                 ul.css("margin-left", ((slide_count) * (-100)) + "%");
                 new_slide_index = slide_count - 1;
             }
             // If new slide is after last slide...
             else if (new_slide_index >= slide_count) {
                 ul.css("margin-left", "-100%");
                 new_slide_index = 0;
             }
             // move indicator with the new_slide_index
             slide_indicators.find(".active").removeClass("active");
             slide_indicator.eq(new_slide_index).addClass("active");
             slide_index = new_slide_index

         });

     };

     function init() {
         startInterval = window.setInterval(function () {
             slide(slide_index + 1);
         }, 5000);
     };

     function pauseSlider() {
         clearInterval(startInterval);
     };

     slide_container
         .on('mouseenter', pauseSlider)
         .on('mouseleave', init);



     return {
         init: init
     };
 }();

 