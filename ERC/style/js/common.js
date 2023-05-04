$(function(){
	var headerSectionHeight = $(".headerSection").height();
	var headerSectionArray = new Array();
	$(".headerSection").each(function(){
		headerSectionArray.push($(this).height());
		//	alert ($(this).height());
	});

	$(".menu, #viewMenu").click(function(){
		if ($(".headerBottom").is(":visible")){
			$(".menu").removeClass("close");
			$(".headerBottom").stop().slideUp();
		}else{
			$(".menu").addClass("close");
			$(".headerBottom").stop().slideDown();
		}
		//	$(".headerBottom").slideToggle();
	});

	if ($("#right_banner").length > 0){
		var rbPosition = parseInt($("#right_banner").css('top'));
		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop();
			if (scrollTop < 500){
				var newPosition = "500px";
			}else{
				scrollTop = scrollTop + 100;
				var newPosition = scrollTop + "px";
			}
			$("#right_banner").stop().animate({
				"top" : newPosition
			}, 500);
		}).scroll();

		$("#topSet").click(function(){
			$("html,body").stop().animate({
				scrollTop : 0
			}, 500);
		});
		
		/*
		$("#viewMenu").click(function(){
			$("html,body").stop().animate({
				scrollTop : 0
			}, 500, function(){
				$(".menu").click();
			});
		});
		*/
	}
});