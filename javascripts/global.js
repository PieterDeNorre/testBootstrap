$(document).ready(function() {

	$(".column > p").hide();

	$('.column').bind('click', function(event) {
		event.preventDefault();
		$(".glyphicon").removeClass('glyphicon-minus').addClass('glyphicon-plus');
		$(".column > p").hide();
		$("#append").remove();
		/* Act on the event */
		$(this).children('p').show();
		$(this).append('<p id="append"><a class="btn btn-primary btn-sm">Learn more</a></p>');
		$(this).find('h5').find('span').removeClass('glyphicon-plus').addClass('glyphicon-minus');
	});

});

