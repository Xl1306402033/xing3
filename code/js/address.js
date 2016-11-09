$(function(){
	var cookname = "all"+$.cookie("name");
	if($.cookie(cookname)&&$.cookie(cookname)!=null){
		var s = ($.cookie(cookname));
		$(".contact-2 span").html(s);
	}
	
//	$(".buzuo li").click(function(){
//		var index = $(this).index();
//		$(this).find("div").addClass("changered").parent().siblings().find("div").removeClass("changered");
//	});
	
	$("#log img").click(function(){
		location.href = "index.html";
	});
	$(".backs").click(function(){
		location.href = "index.html";
	});
	$(".buyc").click(function(){
		location.href = "index.html";
	});
	
	$(".backbuy").click(function(){
		location.href = "buycar.html";
	});
	
})
