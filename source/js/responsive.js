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
  checkW();
  $(window).scroll(function() { checkPos(); });
  $(window).resize(function() { checkW(); });
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
    removalDelay: 250
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

function checkW() {
  if ($(window).width() > 700) {
    $(".arrow").addClass("hidden");
    $(".nav").addClass("flex").removeClass("hidden");
    $(".dropdown-content").removeClass("hidden");
    $(".body").addClass("wide").removeClass("mobile");
  } else {
    $(".arrow").removeClass("hidden");
    $(".nav").addClass("hidden").removeClass("flex");
    $(".dropdown-content").addClass("hidden");
    $(".body").addClass("mobile").removeClass("wide");
  }
 checkPos();
}
