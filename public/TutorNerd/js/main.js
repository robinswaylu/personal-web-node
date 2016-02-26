$(document).ready(function() {
    // notification dropdown toggle
    $(function() {
          $('.dropdown-toggle').click(function() {
            $(this).next('.dropdown').toggle( 400 );
          });
          $(document).click(function(e) {
            var target = e.target;
            if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
              $('.dropdown').hide() ;
            }
          });
    });
    
    // search bar toggle
    $(function() {
        var onlineSearch = $('#online-search');
        var inPersonSearch = $('#in-person-search');
        var label = $('.labelWrapper label')
          label.click(function(e) {   
              if($(e.target).is(inPersonSearch)){
                  $('#zip').css('visibility', 'visible');
                  $('.arrow_box2').show();
                  $('.arrow_box1').hide();
                  inPersonSearch.addClass('active');
                  onlineSearch.removeClass('active');
              }else{
                  $('#zip').css('visibility', 'hidden');
                  $('.arrow_box1').show();
                  $('.arrow_box2').hide();
                   
                  onlineSearch.addClass('active');
                  inPersonSearch.removeClass('active');
              }
          });
 
    });
});