import $ from 'jquery';
import RevealOnScroll from './modules/RevealOnScroll';
new RevealOnScroll($(".page-section__title"), "70%");
new RevealOnScroll($(".testimonial"), "80%");
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

//HOME PAGE - CARD HOVER
$(document).ready(function() {
  $('.card__item').mouseenter(function() {
    $(this).find('.card__text').css({'color':'#77B9A8'});
  });
  $('.card__item').mouseleave(function() {
    $(this).find('.card__text').css({'color':'#fff'});
  });
});


// FANCYBOX
$(document).ready(function() {
     $('.fancybox').fancybox();
 });
