$(function(){
	
	var cookname = "all"+$.cookie("name");
	if($.cookie(cookname)&&$.cookie(cookname)!=null){
		var s = ($.cookie(cookname));
		$(".money").html(s);
		$("#should_pay_amount").html(s);
	}
	var username = "username"+$.cookie("name");


	if($.cookie(username)&&$.cookie(username)!=null){
		$(".addss").hide().siblings(".new-addss").show();
		var addarr = JSON.parse($.cookie(username));
		if(addarr){
			
			$(".nicknames span").html(""+addarr[addarr.length-1].people+"");
			$(".nicknames a").html(""+addarr[addarr.length-1].phone+"");
			$(".dizhiss span").html(""+addarr[addarr.length-1].address+"");
			$(".youbianss span").html(""+addarr[addarr.length-1].youbian+"");
		}
	}else{
		console.log(456)
		var usernames = "newadds"+$.cookie("name");
		if($.cookie(usernames)&&$.cookie(usernames)!=null){
			$(".addss").hide().siblings(".new-addss").show();
			var addarr = JSON.parse($.cookie(usernames));
			if(addarr){				
				$(".nicknames span").html(""+addarr[addarr.length-1].people+"");
				$(".nicknames a").html(""+addarr[addarr.length-1].phone+"");
				$(".dizhiss span").html(""+addarr[addarr.length-1].address+"");
				$(".youbianss span").html(""+addarr[addarr.length-1].youbian+"");
			}
		}
		
		$(".sure").click(function(){
			var getman = $(".getman input").val();
			var phone = $(".numphone input").val();
			var s_province = $("#s_province").val();
			var s_city = $("#s_city").val();
			var s_county = $("#s_county").val();
			var xiangadd = $(".xiangadd input").val();
			var youbian = $(".bianma input").val();
			if(getman==''||phone==''||s_province==''||s_city==''||s_county==''||xiangadd==''||youbian==''){
				alert("不能为空！")
				return;
			}
			var usernames = "newadds"+$.cookie("name");
			var arr = JSON.parse($.cookie(usernames));
			if (!arr) {
		        arr = [];
		    }
		
			var obj = {
		        "phone": phone,
				"people": getman,
				"address": (s_province+s_city+s_county+xiangadd),
				"youbian":youbian
		    }
			arr.push(obj);
			$.cookie(usernames, JSON.stringify(arr), {
		        exprice: 7,
		        path: '/'
		    });
	
        	location.href = "surebuy.html";
		});
	}
	
	
	$(".usenew").click(function(){
		var username = "username"+$.cookie("name");
		var usernames = "newadds"+$.cookie("name");
		$.cookie(username,null,{ exprice: 7,path: '/'});
		$.cookie(usernames,null,{ exprice: 7,path: '/'});
		
		location.href = "surebuy.html";
	});
	
	$(".button3").click(function(){
		var username = "username"+$.cookie("name");
		var usernames = "newadds"+$.cookie("name");
		if(!$.cookie(username)){
			if(!$.cookie(usernames)){
				return;
			}else{
				$(".zhemo").show();
				$(".besure").show();
				$(".queding").click(function(){
					location.href = "address.html";
				});
				$(".quxiao").click(function(){
					$(".zhemo").hide();
					$(".besure").hide();
				});
				$(".besure-top span").click(function(){
					$(".zhemo").hide();
					$(".besure").hide();
				});
			}
		}else{
			$(".zhemo").show();
			$(".besure").show();
			$(".queding").click(function(){
				location.href = "address.html";
			});
			$(".quxiao").click(function(){
				$(".zhemo").hide();
				$(".besure").hide();
			});
			$(".besure-top span").click(function(){
				$(".zhemo").hide();
				$(".besure").hide();
			});
		}
		
	});
	$(".buyc").click(function(){
		location.href = "index.html";
	});
	$(".backs").click(function(){
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
	
});
