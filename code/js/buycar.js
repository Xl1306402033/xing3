$(function(){
	var username = $.cookie("name");
	var car = JSON.parse($.cookie(username));

	var sum = 0;
	var count = 0;
	if(car){
		for (var i = 0; i < car.length; i++){
			
			var leftaright = $('<div class="shopnums"><div class="contact-3-left"><div class="contact-3-img"><img src="'+car[i].pic+'" /></div><div class="contact-3-word"><p>BLOCCO 5</p><span>女鞋</span><div>尺寸：<span>36</span></div></div></div><div class="contact-3-right"><div class="danjia">￥<span>'+car[i].zhekou+'</span></div><div class="shul"><span id="countReduce" class="number_reduce_none">-</span><span class="quantity_number"><input type="text" disabled="disabled"  value="'+car[i].nubrr+'" id="quantity" ></span><span id="countAdd" class="number_increase">+</span></div><div class="youhui"></div><div class="xiaoji">￥<span>'+((parseInt(car[i].zhekou))*(parseInt(car[i].nubrr))).toFixed(2)+'</span></div><div class="delete">×</div></div></div>');

			$('.contact-3').append(leftaright);	
			sum = sum+parseInt(car[i].zhekou)*parseInt(car[i].nubrr);
			
		}
		count=count+sum;
		$(".all-right span").html(count.toFixed(2));
		
		$(".contact-3").on("click","#countAdd",function(){

			var s = $(this).siblings('.quantity_number').find("#quantity").val();
			s++;
			$(this).siblings('.quantity_number').find("#quantity").val(s);
			var index = $(this).parent().parent().parent().index();
			var username = $.cookie("name");
			var arr = JSON.parse($.cookie(username));
			arr[index].nubrr=s;
			$.cookie(username, JSON.stringify(arr), {
                exprice: 1,
                path: '/'
            });
            var cary = JSON.parse($.cookie(username));
            var a = parseInt(cary[index].zhekou)*parseInt(cary[index].nubrr);
            $(this).parent().siblings('.xiaoji').find("span").html(a);
			var add = $(".all-right span").html();
			var addnum = $(this).parent().siblings(".danjia").find("span").html();
			var sumss = parseInt(add)+parseInt(addnum);
			$(".all-right span").html(sumss.toFixed(2));
		});
		
		$(".contact-3").on("click","#countReduce",function(){
			var zhong = $(this).parent().find("#quantity").val();
			if(zhong<=1){
				return;
			}
			var s = $(this).siblings('.quantity_number').find("#quantity").val();
			s--;
			$(this).siblings('.quantity_number').find("#quantity").val(s);
			var index = $(this).parent().parent().parent().index();
			var username = $.cookie("name");
			var arr = JSON.parse($.cookie(username));
			arr[index].nubrr=s;
			$.cookie(username, JSON.stringify(arr), {
                exprice: 7,
                path: '/'
            });
            var cary = JSON.parse($.cookie(username));
            var a = parseInt(cary[index].zhekou)*parseInt(cary[index].nubrr);
            $(this).parent().siblings('.xiaoji').find("span").html(a);
			var add = $(".all-right span").html();
			var addnum = $(this).parent().siblings(".danjia").find("span").html();
			var sumss = parseInt(add)-parseInt(addnum);
			$(".all-right span").html(sumss.toFixed(2));
		});
		
		$(".contact-3").on("click",".delete",function(){
			
			var s = $(".all-right span").html();			
			var b = $(this).parent().find(".xiaoji span").html();
			var a = parseInt(s)-parseInt(b);			
			$(".all-right span").html(a.toFixed(2));
			var username = $.cookie("name");
			var arr = JSON.parse($.cookie(username));
			var index = $(this).parent().parent().index();
			arr.splice(index, 1);
			$.cookie(username, JSON.stringify(arr), {
                    exprice: 7,
                    path: '/'
                });
			$(this).parent().parent().remove();
			
		});
		
	}
	
	$(".pay-1").click(function(){
		location.href = 'index.html';
	});
	$(".pay-2").click(function(){
		var all = $(".all-right span").html();
		var cookname = "all"+$.cookie("name");
		$.cookie(cookname,all,{expires:7,path: '/'});
		location.href = 'surebuy.html';
	});
	
	$(".headss li").eq(3).click(function(){
		location.href = "index.html";
	});
	$(".headss li").eq(1).click(function(){
		var username = $.cookie("name");
		$.cookie("name",null,{path:"/"});
		$.cookie(username,null,{path:"/"});
		$.cookie("pwd",null,{path:"/"});
		$.cookie("zk",null,{path:"/"});
		$.cookie("num",null,{path:"/"});
		$.cookie("photo",null,{path:"/"});
		$.cookie(("username"+username),null,{path:"/"});
		location.href = "index.html";
	});
//	var username = $.cookie("name");
//	var car = JSON.parse($.cookie(username));
//	for(var j=0;j<car.length;j++){		
//		var a = parseInt(car[j].zhekou)*parseInt(car[j].nubrr);
//		count=count+a;
//	}
//	
//	$(".all-right span").html("￥"+count.toFixed(2));
//
//	var shopnum = $.cookie("shopnum");
//	console.log($(".shopnum").last().find("#quantity"))
//	$(".shopnum").last().find("#quantity").val(shopnum);
})
