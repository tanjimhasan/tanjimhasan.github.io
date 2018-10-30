jQuery(document).ready(function($){

	/*---------------------
		sticky header
	------------------------*/

	var element = $('.header-top')
	var navOffset = jQuery(".header-top").offset().top + element.outerHeight(true) ;

    jQuery(window).scroll(function(){

        var scrollpos = jQuery(window).scrollTop();

        if (scrollpos >= navOffset) {
            jQuery(".main-header").addClass("is-sticky");
        }else{
            jQuery(".main-header").removeClass("is-sticky");
        }

	});

	$(".client-carousel").slick({
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 5,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	/*---------------------
		home slider 
	------------------------*/

	$(".home-slides").slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: true,
		infinite: true,
		slidesToShow: 1,
	});

	/*---------------------
		Smooth Scroll
	------------------------*/
        $('li.smooth-menu a').bind('click',function(event){
            var $anchor = $(this);
            var headerH = '82';
            $('html,body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH+"px"
            },1280,'easeInOutExpo');
            event.preventDefault();
        });

        $('a.smooth-menu').bind('click',function(event){
            var $anchor = $(this);
            var headerH = '82';
            $('html,body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH+"px"
            },1280,'easeInOutExpo');
            event.preventDefault();
        });

        /*---------------------
		scroll to top
		check windows position
		------------------------*/
	    $(window).scroll(function(){
	        if ($(this).scrollTop() > 100) {
	            $('.scrollToTop').fadeIn();
	        } else {
	            $('.scrollToTop').fadeOut();
	        }
	    });

	    /*---------------------
		Click event to scroll to top
		------------------------*/

	    $('.scrollToTop').click(function(){
	        $('html, body').animate({scrollTop : 0},900);
	        return false;
	    });


	    /*---------------------
		Mobile Menu
	------------------------*/

	var mainMenuNav = $('.main-menu nav');
	mainMenuNav.meanmenu({
		meanScreenWidth: '991',
		meanMenuContainer: '.mobile-menu',
		onePage: true,
		meanMenuClose: '<span class="menu-close"></span>',
		meanMenuOpen: '<span class="menu-bar"></span>',
		meanRevealPosition: 'right',
		meanMenuCloseSize: '0',
	});

	$('.main-menu li a').click(function(){
		$('.main-menu li a').removeClass('active');
		$(this).addClass('active');
	});

	
});
