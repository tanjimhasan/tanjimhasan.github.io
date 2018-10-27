jQuery(document).ready(function($){
	
	 //portfolio filter
	 $('.portfolio-filter li').on('click', function () {
            $('.portfolio-filter li').removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr("data-filter");
            $('.portfolio-list').isotope({
                filter: selector
            });
        });
    
	 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		   $('.portfolio-list').isotope();
		});
	 
	 $('.main-menu li').click(function(){
	    $('li').removeClass("active");
	    $(this).addClass("active");

	});
	
	//skill bar
	 var skillsDiv = jQuery('#skills-load');

	 jQuery('.skillbar').each(function(){
			jQuery(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},5000);
		});

	 // Mobile menu
        $('.mobile-menu-bar').click(function() { 
            $('.left-menubar').toggleClass('mobile-menu-hide');
            $('.offcanvas-shade').toggleClass('active');
            return false;
        });
        //offcanvas shade
        $('.offcanvas-shade').click(function() { 
            $('.left-menubar').addClass('mobile-menu-hide');
            $('.offcanvas-shade').removeClass('active');
            return false;
        });

        

	  function mobileMenuHide() {
	        var windowWidth = $(window).width();
	        if (windowWidth < 1024) {
	            $('.left-menubar').addClass('mobile-menu-hide');

	        }
	    }

	    // Mobile menu hide on main menu item click
	    $('.main-menu').on("click", "a", function (e) {
	        mobileMenuHide();
	        $('.offcanvas-shade').removeClass('active');
	    });
});