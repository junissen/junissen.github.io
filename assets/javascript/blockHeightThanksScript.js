$(window).ready( function() {

	var thanksbuttonWidth = $('.homeButton').width();
	var thanksContainerWidth = $('.thanksContainer').width();
	var newLeft = (Math.abs(thanksContainerWidth - thanksbuttonWidth))/2;
	$('.homeButton').css("left", newLeft);

});

$(window).resize( function() {

	var thanksbuttonWidth = $('.homeButton').width();
	var thanksContainerWidth = $('.thanksContainer').width();
	var newLeft = (Math.abs(thanksContainerWidth - thanksbuttonWidth))/2;
	$('.homeButton').css("left", newLeft);

})
