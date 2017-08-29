import $ from 'jquery';
import RevealOnScroll from './modules/RevealOnScroll';
new RevealOnScroll($(".page-section__title"), "70%");
require('fancybox')($);

// SCROLL TO THE TOP BUTTON

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll').fadeIn();
        } else {
            $('.scroll').fadeOut();
        }
    });
    $('.scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// SMOOTH SCROLL NAVIGATION
$(document).ready(function(){
  $(".scroll-nav").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        window.location.hash = hash;
      });
    }
  });
});

//MUSIC - HOME PAGE BUTTONS HOVER
$(document).ready(function() {
  $('.music__item').mouseenter(function() {
    $(this).find('.music__text').css({'color':'#77B9A8'});
  });
  $('.music__item').mouseleave(function() {
    $(this).find('.music__text').css({'color':'#fff'});
  });
});

//FILM-HOME PAGE BUTTONS HOVER
$(document).ready(function() {
  $('.film__item').mouseenter(function() {
    $(this).find('.film__text').css({'color':'#77B9A8'});
  });
  $('.film__item').mouseleave(function() {
    $(this).find('.film__text').css({'color':'#fff'});
  });
});

$(document).ready(function() {
     $('.fancybox').fancybox();
 });
