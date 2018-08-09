// --------------------------------------

// Team Carousel in Testimonial Section One

// ======================================

jQuery(document).ready(function($){
	$(".team-carousel").owlCarousel({
		items : 3,
		margin: 30,
		loop:true,
		nav:true,
		navText: ["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
	});
});






jQuery(document).ready(function($){
	$(".single-bordered-testimonial").owlCarousel({
		items : 1,
		margin: 30,
		loop:true,
		autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		dots:true,
		nav:false,
		responsiveClass:true,

	});
});