var hoverOutTimer = null;
 
$(document).ready(function($) { 
	'use strict';
	resize_intro(); 
	$(".left section").stop(true, true).fadeIn('fast');
	$(".right section").stop(true, true).fadeIn('fast');
	$(".read-more").hide();
	$(".read-more-trigger").click(function(){
		if ($(this).closest("div").next(".read-more").is(":visible"))
			$(this).closest("div").next(".read-more").slideUp();
		else
		{
			$(".read-more").slideUp();
			$(this).closest("div").next(".read-more").slideDown();
		}
		return false;
	});
});

jQuery(window).resize(function () { 
	'use strict';
	resize_intro();
});

function resize_intro(){
	page_height =  jQuery(window).height();  
		right_height = jQuery('.right section').height() + 40;
		left_height = jQuery('.left section').height() + 40;
		
 		if(left_height < page_height) {		
 				
			jQuery(".left").css('height',page_height+'px'); 
			left_content_margin = ((page_height - left_height) / 2) - 30;
			jQuery(".left section").css('margin-top',left_content_margin+'px');       
							
 		} 
		
 		if(right_height < page_height) {		       
			
			if(jQuery(window).width() > 800) {  
				right_content_margin = (page_height - right_height) / 2;
				jQuery(".right section").css('margin-top',right_content_margin+'px');  			 
			}
							
 		}
}
