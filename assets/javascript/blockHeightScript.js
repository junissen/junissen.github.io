$(document).ready( function() {
	var bioContainer = $('.bioContainer');
	var bioContainerHeight = bioContainer.height();
	var aboutContainerHeight = bioContainerHeight + 200;
	$(".aboutContainer").height(aboutContainerHeight);
	var doodleHeight = $("#doodle2").height();
	var doodleHeightSet = aboutContainerHeight - 100 - doodleHeight
	$("#doodle2").css( {"top": doodleHeightSet + "px"});

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
	$('.contactContainer').height(contactContainerHeight)
})

$(window).resize( function() {

	var bioContainer = $('.bioContainer');
	var bioContainerHeight = bioContainer.height();
	var aboutContainerHeight = bioContainerHeight + 200;
	$(".aboutContainer").height(aboutContainerHeight);
	var doodleHeight = $("#doodle2").height();
	var doodleHeightSet = aboutContainerHeight - 100 - doodleHeight;
	$("#doodle2").css( {"top": doodleHeightSet + "px"});

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
	$('.contactContainer').height(contactContainerHeight)

})
