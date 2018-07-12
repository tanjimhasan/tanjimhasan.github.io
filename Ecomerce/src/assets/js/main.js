$(document).ready(function($){
    $("#add-list").masonry({
        itemSelector: '#add-list',
        horizontalOrder: true
    });


    $(".featured-brand-list").owlCarousel({
    	items: 5,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            margin: 100,
            loop: true,
            nav: false,
            dots: false,
            responsiveClass: true
    });
    $(".exclusive-product-list").owlCarousel({
    		items: 3,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            margin: 40,
            loop: true,
            nav: false,
            dots: false,
            responsiveClass: true
    });
    

    //sticky menu
    var navOffset = jQuery(".site-header").offset().top;

    jQuery(window).scroll(function(){

        var scrollpos = jQuery(window).scrollTop();

        if (scrollpos >= navOffset) {
            jQuery(".sticky").addClass("is-sticky");
        }else{
            jQuery(".sticky").removeClass("is-sticky");
        }

    });

});