function checkPos(){var o=$(window).scrollTop(),e=$(".nav-container"),d=o-e.offset().top;d>0?($(window).width()>700&&$(".nav").addClass("sticky"),$(".scrollTop").fadeIn(200)):($(window).width()>700&&$(".sticky").removeClass("sticky"),$(".scrollTop").fadeOut(200)),d-e.height()/2.5>0?$(".nav").addClass("roll-up"):$(".nav").removeClass("roll-up"),$(".card").each(function(){var e=$(this).offset().top-o;e<=$(window).height()&&$(this).addClass("visible")})}function checkW(){$(window).width()>700?($(".arrow").addClass("hidden"),$(".nav").addClass("flex").removeClass("hidden"),$(".dropdown-content").removeClass("hidden"),$(".body").addClass("wide").removeClass("mobile")):($(".arrow").removeClass("hidden"),$(".nav").addClass("hidden").removeClass("flex"),$(".dropdown-content").addClass("hidden"),$(".body").addClass("mobile").removeClass("wide")),checkPos()}$(document).ready(function(){$(".nav-head").click(function(){$(".nav").toggleClass("hidden"),$(".nav-head .arrow").toggleClass("rotate90")}),$(".dropdown-head").click(function(){$(window).width()<=700&&($(".dropdown-content").toggleClass("hidden"),$(".dropdown .arrow").toggleClass("rotate90"))}),checkW(),$(window).scroll(function(){checkPos()}),$(window).resize(function(){checkW()}),$(".scrollTop").click(function(){return $("html, body").animate({scrollTop:0},500),!1}),$(".magnific-popup").magnificPopup({mainClass:"mfp-fade",type:"image",titleSrc:"title",gallery:{enabled:!0,preload:[1,1]},removalDelay:250})}),$(window).load(function(){checkPos()});