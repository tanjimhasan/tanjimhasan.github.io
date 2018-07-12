(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        

        $('.head-area').sticky({topSpacing: 0});
        
        //smooth scroll
        $('li.smooth-menu a').bind('click',function(event){
            var $anchor = $(this);
            var headerH = '62';
            $('html,body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH+"px"
            },1280,'easeInOutExpo');
            event.preventDefault();
        });
        
        //scroll spy
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 95
        });
        
        //paralax
        $('.paralax-bg,.top-area-bg').scrolly({bgParallax: true});
        
        $(".navbar-toggle").click(function(){
            $("body").addClass("mobile-menu-activated");
        });
        
        $("ul.nav.navbar-nav li a").click(function(){
            $(".navbar-collapse").removeClass("in");
        });
        

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	