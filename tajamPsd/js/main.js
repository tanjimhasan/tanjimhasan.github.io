(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        /*
        $('.our-story').YTPlayer({
       fitToBackground: true,
        videoId: 'LSmgKRx5pBo'
        });

*/
        //sticky menu active
        $('.header-area').sticky({topSpacing: 0});
        
        //smooth scroll
        $('li.smooth-menu a').bind('click',function(event){
            var $anchor = $(this);
            var headerH = '62';
            $('html,body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH+"px"
            },1280,'easeInOutExpo');
            event.preventDefault();
        });

        //about section video play
        $('.video-play-icon').magnificPopup({type:'video'});

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 95
        });
        // testimonial Carousel Active
        $('#testimoni-section').carousel({
          interval: 3000,
          cycle: true
        });


        //Mobile menu
        $(".navbar-toggle").click(function(){
            $("body").addClass("mobile-menu-activated");
        });
        
        $("ul.nav.navbar-nav li a").click(function(){
            $(".navbar-collapse").removeClass("in");
        });
    });


}(jQuery));	