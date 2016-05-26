$(document).ready(function() {
  $(".nav-head").click(function() {
    $(".nav").toggleClass("hidden");
    $(".nav-head .arrow").toggleClass("rotate90");
  });
  $(".dropdown-head").click(function(){
    if ($(window).width() <= 700) {
      $(".dropdown-content").toggleClass("hidden");
      $(".dropdown .arrow").toggleClass("rotate90");
    }
  });
  if ($(window).width() > 700) {
    $(".arrow").addClass("hidden");
    $(".nav").addClass("flex");
    $(".dropdown-content").removeClass("hidden");
  } else {
    $(".nav").addClass("hidden").removeClass("flex");
    $(".dropdown-content").addClass("hidden");
  }
  $(window).scroll(function() { checkPos(); });
  $('.scrollTop').click(function(){
    $('html, body').animate({scrollTop : 0},500);
    return false;
  });
  $('.magnific-popup').magnificPopup({
    mainClass: 'mfp-fade',
    type: 'image',
    titleSrc: 'title',
    //verticalFit: true,
    gallery: {
      enabled: true,
      preload: [1,1]
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
  }
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
  if (diff - nav.height() / 2.5 > 0) {
    $(".nav").addClass("roll-up");
  } else {
    $(".nav").removeClass("roll-up");
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
    $(".arrow").addClass("hidden");
    $(".nav").removeClass("hidden");
    $(".dropdown-content").removeClass("hidden");
  } else {
    $(".nav").addClass("hidden").removeClass("flex");
    $(".arrow").removeClass("hidden");
    $(".dropdown-content").addClass("hidden");
  }
  checkPos();
});
