if ($(window).width() > 1080) {
  $(document).ready(function() { $(".arrow").hide();});
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var nav = $(".nav-container");
    var diff = scroll - nav.offset().top;
    if (diff >= 0) {
      $(".nav").addClass("sticky");
    } else {
      $(".sticky").removeClass("sticky");
    }
  });} else {
    $(document).ready(function() {
      $(".nav").hide();
      $(".dropdown-content").hide();
      $(".nav-head").click(function(){$(".nav").toggle();$(".nav-head .arrow").toggleClass("rotate90");});
      $(".dropdown>a").click(function(){
      $(".dropdown-content").toggle();
      $(".dropdown .arrow").toggleClass("rotate90");
    });
  });
}
