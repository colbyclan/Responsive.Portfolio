$(document).ready(function(){
		
	$(this).find('div.options').css("width", "0px");
	
	$("div.portfolio_piece div.image_holder").hover(
		function() {
			//jQuery("a.image_link > img", this).stop().fadeTo("slow", 0.5);
			$(this).find('div.options').stop().animate({width:'250px'},'easeIn');
		},
		function() {
			//$(this).find("a.image_link > img").stop().fadeTo("slow", 1);
			$(this).find('div.options').stop().animate({width:'0px'},'easeIn');
		}
	);
});