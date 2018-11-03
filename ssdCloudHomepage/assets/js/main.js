jQuery(document).ready(function($){

	/*---------------------
	Homepage slider active 
	------------------------*/

	$(".homepage-slides").slick({
		prevArrow: '<i class="fa fa-angle-left slick-prev-btn"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-next-btn"></i>',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: true,
		slidesToShow: 1,

	});

	/*---------------------
	Client Testimonial active 
	------------------------*/

	$(".client-testimonial").slick({
		
		prevArrow: '<i class="fa fa-arrow-right slick-next-btn seperator"></i>',
		nextArrow: '<i class="fa fa-arrow-left slick-prev-btn"></i>',
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
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
	Counter Activation 
	------------------------*/

	$('.count').counterUp({
	    delay: 10,
	    time: 1000
	});

	/*---------------------
	Mobile menu
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

});