$(document).ready(function(){
  	$('.caption').delay(600).fadeIn(900);
	$('.navbar').delay(600).fadeIn(900);
	$('.carousel-control').delay(2000).fadeIn(800);
});
//ATTENTION: resizing during runtime not working currently! Implement update of offset...
$(window).scroll(function(){
    /* affix the navbar after scroll window - navbar height */
    $(".navbar").affix({offset: {top: $(window).height() - $(".navbar").height() }});
	/*after affix, z-index in css got lost, set it here again*/
	$(".navbar").css('z-index',999);
});

/*portfolio filter function*/
$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
		
	});
});




