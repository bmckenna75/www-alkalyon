
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$(document).ready(function(){
  $("#contact-message-dismiss").on("click", function() {
      $(".contact-message-container").fadeOut(800);
      $(".failed")[0].focus();
  });

  $("#form-text").focus(function() {
      $('html, body').animate({scrollTop : $("#form-text").offset().top}, 600);
  });

  $('input, textarea').keypress(function() {
      $(this).removeClass("failed");
  });

  $("#sendMessage").on("click", function() {

      var pass = true;
      var message = "";
      var f_email = $("#form-email").val();
      var f_name = $("#form-name").val();
      var f_text = $("#form-text").val();

      if (!validateEmail(f_email)) {
        message += "Please supply a valid email.\n";
        $("#form-email").addClass("failed");
        pass = false;
      }
      if (f_name.length == 0) {
        message += "You must supply a name.\n";
        $("#form-name").addClass("failed");
        pass = false;
      }
      if (f_text.length == 0) {
        message += "Your message cannot be empty.\n";
        $("#form-text").addClass("failed");
        pass = false;
      }

      if (!pass) {
        $(".contact-message").text(message);
        $(".contact-message-container").fadeIn(800);
        return false;
      }
      var f_gotcha = $("#form-gotcha").val();
      $.ajax({
          url: "//formspree.io/contact@alkalyon.com",
          method: "POST",
          data: {
            email: f_email,
            name: f_name,
            message: f_text,
            //_replyto: f_email,
            _subject: "Contact Form Submission",
            _format: "plain",
            _gotcha: f_gotcha
          },
          dataType: "json"
      });
      $(".contact-message").text("Your email has been sent successfully.\nThanks!");
      $(".contact-message-container").fadeIn(800);
  });
});
