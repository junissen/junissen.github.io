$(window).ready( function() {

	var thanksbuttonWidth = $('.homeButton').width();
	var thanksContainerWidth = $('.thanksContainer').width();
	var newLeft = (Math.abs(thanksContainerWidth - thanksbuttonWidth))/2;
	$('.homeButton').css("left", newLeft);

	var doodleHeight = $('#doodle8').height();
	var newBottom = (((doodleHeight/3) + 2) * -1);
	$('#doodle8').css("bottom", newBottom);

});

$(window).resize( function() {

	var thanksbuttonWidth = $('.homeButton').width();
	var thanksContainerWidth = $('.thanksContainer').width();
	var newLeft = (Math.abs(thanksContainerWidth - thanksbuttonWidth))/2;
	$('.homeButton').css("left", newLeft);

	var doodleHeight = $('#doodle8').height();
	var newBottom = (((doodleHeight/3) + 2) * -1);
	$('#doodle8').css("bottom", newBottom);

})
