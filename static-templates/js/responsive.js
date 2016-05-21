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
  checkPos();
  $(window).scroll(function() { checkPos(); });
});

function checkPos() {
  if ($(window).width() > 700) {
    var scroll = $(window).scrollTop();
    var nav = $(".nav-container");
    var diff = scroll - nav.offset().top;

    if (diff >= 0) {
      $(".nav").addClass("sticky");
    } else {
      $(".sticky").removeClass("sticky");
    } 

    $(".card").each(function() {
      var diff = $(this).offset().top - scroll;
      if (diff <= $(window).height()) {
        $(this).addClass("visible");
      }
    });
  }
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
