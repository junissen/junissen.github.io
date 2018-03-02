var message = "";

$("#sendMessage").on("click", function() {

    message = $("#contactForm").serialize();

    $.ajax({
        url: "//formspree.io/nisse053@umn.edu", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });

    alert('Thanks for the email, we\'ll be in touch promptly.');

    return false;

});