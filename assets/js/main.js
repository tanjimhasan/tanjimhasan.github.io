jQuery(document).ready(function($){

	var skillsDiv = jQuery('#skills-load');

	jQuery(window).on('scroll', function() {
		  var winT = jQuery(window).scrollTop(),
		    winH = jQuery(window).height(),
		    skillsT = skillsDiv.offset().top;
		  if (winT + winH > skillsT) {
		    jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar-bar').animate({
					width:jQuery(this).attr('data-percent')
				},5000);
			});
		  }
		});
	var mixer = mixitup('.portfolio-list');

	//sticky menu active
    $('.header-area').sticky({topSpacing: 0});

    //smooth scroll
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
			meanScreenWidth: '767',
			meanMenuContainer: '.mobile-menu',
			meanMenuClose: '<span class="menu-close"></span>',
			meanMenuOpen: '<span class="menu-bar"></span>',
			meanRevealPosition: 'right',
			meanMenuCloseSize: '0',
		});
});