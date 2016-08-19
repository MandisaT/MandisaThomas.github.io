$(document).ready(function(){
	

	$(".box").hover(function(){
	$(this).find(".projectoverlay").fadeIn(100);
	},

	function(){
		$(this).find(".projectoverlay").fadeOut(100);
	});

});
