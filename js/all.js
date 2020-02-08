jQuery(document).ready(function($) {
	$('.card').mouseenter(function(event) {
    /* Act on the event */
    $(this).find('.card-body').find('h5').addClass('hover')
  });

  $('.card').mouseleave(function(event) {
    /* Act on the event */
     $(this).find('.card-body').find('h5').removeClass('hover')
  });
});

