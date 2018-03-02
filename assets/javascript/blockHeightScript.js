$(window).ready( function() {

	var bioContainer = $('.bioContainer');
	var bioContainerHeight = bioContainer.height();
	var aboutContainerHeight = bioContainerHeight + 200;
	$(".aboutContainer").height(aboutContainerHeight);

	var doodleHeight2 = $("#doodle2").height();
	var doodleHeight2Set = aboutContainerHeight - 100 - doodleHeight2
	$("#doodle2").css("top", doodleHeight2Set);

	var portfolioPhotoContainer = $('.portfolioPhotoContainer');
	var portfolioPhotoContainerHeight = portfolioPhotoContainer.height();
	var portfolioContainerHeight = portfolioPhotoContainerHeight +200;
	$('.portfolioContainer').height(portfolioContainerHeight);

	var hoverPortfolio = $('.portfolioLink');
	var hoverPortfolioWidth = hoverPortfolio.width() - 6;
	$('.githubButton').width(hoverPortfolioWidth);
	$('.websiteButton').width(hoverPortfolioWidth);

	var buttonHeight = $('.githubButton').height();
	var newbuttonHeight = Math.abs(buttonHeight) * 3;
	$('.websiteButton').css("top", newbuttonHeight);

	var contactFormContainer = $('.contactForm');
	var contactFormContainerHeight = contactFormContainer.height();
	var contactContainerHeight = contactFormContainerHeight + 200;
	$('.contactContainer').height(contactContainerHeight);

	var doodleWidth6 = $("#doodle6").width();
	var doodleRight6 = ((doodleWidth6/6)* -1);
	$('#doodle6').css("right", doodleRight6);

	var doodleWidth7 = $("#doodle7").width();
	var doodleLeft7 = ((doodleWidth7/4) * -1);
	$('#doodle7').css("left", doodleLeft7);

});

$(window).resize( function() {

	var bioContainer = $('.bioContainer');
	var bioContainerHeight = bioContainer.height();
	var aboutContainerHeight = bioContainerHeight + 200;
	$(".aboutContainer").height(aboutContainerHeight);

	var doodleHeight2 = $("#doodle2").height();
	var doodleHeight2Set = aboutContainerHeight - 100 - doodleHeight2
	$("#doodle2").css("top", doodleHeight2Set);

	var portfolioPhotoContainer = $('.portfolioPhotoContainer');
	var portfolioPhotoContainerHeight = portfolioPhotoContainer.height();
	var portfolioContainerHeight = portfolioPhotoContainerHeight + 200;
	$('.portfolioContainer').height(portfolioContainerHeight);

	var hoverPortfolio = $('.portfolioLink');
	var hoverPortfolioWidth = hoverPortfolio.width() - 6;
	$('.githubButton').width(hoverPortfolioWidth);
	$('.websiteButton').width(hoverPortfolioWidth);
	
	var buttonHeight = $('.githubButton').height();
	var newbuttonHeight = Math.abs(buttonHeight) * 3;
	$('.websiteButton').css("top", newbuttonHeight);

	var contactFormContainer = $('.contactForm');
	var contactFormContainerHeight = contactFormContainer.height();
	var contactContainerHeight = contactFormContainerHeight + 200;
	$('.contactContainer').height(contactContainerHeight);

	var doodleWidth6 = $("#doodle6").width();
	var doodleRight6 = ((doodleWidth6/6)* -1);
	$('#doodle6').css("right", doodleRight6);

	var doodleWidth7 = $("#doodle7").width();
	var doodleLeft7 = ((doodleWidth7/4) * -1);
	$('#doodle7').css("left", doodleLeft7);
})
