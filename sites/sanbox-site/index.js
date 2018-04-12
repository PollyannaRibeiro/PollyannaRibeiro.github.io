// JavaScript Document


$(document).ready(function(){
	$('.parallax').parallax();
	
	$('.carousel.carousel-slider').carousel({fullWidth: true});	
	$('.scrollspy').scrollSpy();
	$('.carousel').carousel('next');
	
	autoplay()   
	function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 10000);
}

    });
        