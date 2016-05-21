$(document).ready(function() {
  $(".nav-head").click(function(){$(".nav").toggle();$(".nav-head .arrow").toggleClass("rotate90");});
  $(".dropdown>a").click(function(){
    if ($(window).width() <= 700) {
      $(".dropdown-content").toggle();
      $(".dropdown .arrow").toggleClass("rotate90");
    }
  });
  if ($(window).width() > 700) {
    $(".arrow").hide();
    $(".nav").css("display", "flex");
    $(".dropdown-content").css("display", "block");  
  } else {
    $(".nav").hide();
    $(".dropdown-content").hide(); 
    $(".card").addClass("visible");
  }
  $(window).scroll(function() { checkPos(); });
  $('.scrollTop').click(function(){
    $('html, body').animate({scrollTop : 0},500);
    return false;
  });
});

$(window).load(function() {
  checkPos();
});

function checkPos() {
  var scroll = $(window).scrollTop();
  var nav = $(".nav-container");
  var diff = scroll - nav.offset().top;
  if (diff > 0) {
    if ($(window).width() > 700) {
      $(".nav").addClass("sticky");
    }
    $('.scrollTop').fadeIn(200);
  } else {
    if ($(window).width() > 700) {
      $(".sticky").removeClass("sticky");
    }
    $('.scrollTop').fadeOut(200);
  } 

  $(".card").each(function() {
    var diff = $(this).offset().top - scroll;
    if (diff <= $(window).height()) {
      $(this).addClass("visible");
    }
  });
}

$(window).resize(function() {
   if ($(window).width() > 700) {
    $(".arrow").hide();
    $(".nav").show();
    $(".dropdown-content").css("display", "block");  
  } else {
    $(".nav").hide();
    $(".arrow").show();
    $(".dropdown-content").hide();
  }
  checkPos();
});
