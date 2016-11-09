$(function(){
	var username = "username"+$.cookie("name"); 
	if($.cookie(username)&&$.cookie(username)!=null){
		
		var addarr = JSON.parse($.cookie(username));
		if(addarr){
			$(".phone input").val(""+addarr[addarr.length-1].phone+"");
			$(".people input").val(""+addarr[addarr.length-1].people+"");
			$(".dizhi input").val(""+addarr[addarr.length-1].address+"");
			$(".youbian input").val(""+addarr[addarr.length-1].youbian+"");
		}
		
	}
	var head = $("#head-wrap");
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if(scrollTop>=108){
		head.css({"position":"fixed","left":0,"top":0});
		}else{
			head.css("position","relative");
		}
	});
		
	var flag = false;
	$(".contact-2-ul li").click(function(){
		if(flag){
			return;
		}
		flag = true;
		$(this).find("span").addClass("colors").parent().siblings().find("span").removeClass("colors");
		var index = $(this).index();
		var offsetTop = $("#all-li>li").eq(index).height();
		offsetTop = (offsetTop)*index;
		$("#all-li").animate({"scrollTop":offsetTop},function(){
			flag = false;
		});
	});
	
	
	$(".right-nav a").click(function(){
		location.href = "buycar.html";
	});
	
	$(".newspwd").blur(function(){
		var psw = $(".newspwd").val();
		var reg = /.{6,20}/;
		if(reg.test(psw)!=true){
			$(".spanchange").html("密码要大于6位或小于20位");
			$(".spanchange").css("color","red");
			$(".newspwd").val('');
		}else{
			$(".spanchange").html('');
		}
		if(psw.length>=6&&psw.length<=10){
			$(".contact-3-3 span").eq(0).addClass("reds").siblings().removeClass("reds");
		}
		if(psw.length>10&&psw.length<=15){
			$(".contact-3-3 span").eq(1).addClass("reds").siblings().removeClass("reds");
		}
		if(psw.length>15&&psw.length<=20){
			$(".contact-3-3 span").eq(2).addClass("reds").siblings().removeClass("reds");
		}
	});
	
	
	
	$(".renewspwd").blur(function(){
		var newspwd = $(".newspwd").val();
		var renewspwd = $(".renewspwd").val();
		if(renewspwd!=newspwd){
			$(".newspwd").val('');
			$(".renewspwd").val('');
			$(".newspwd").focus();
		}
	});
	
	$(".contact-3-5 input").click(function(){
		var oldspwd = $(".oldspwd").val();
		var newspwd = $(".newspwd").val();
		var username = $.cookie("name");
		if(oldspwd==''||newspwd==''||username==''){
			$(".spanchange").html("不能为空！");
			$(".spanchange").css("color","red");
			$(".oldspwd").focus();
			return;
		}
		$.post("php/update.php",{
			"name":username,
			"oldpwd":oldspwd,
			"newpwd":newspwd
		},function(data){
			if(data&&data['code']==0){
				$.cookie('name',username,{ expires:7,path: '/'});
				$.cookie('pwd',newspwd,{ expires:7,path: '/'});
				$(".spanchange").html(data['msg']);
				$(".spanchange").css("color","green");
				setTimeout(function(){
					location.href = "login.html";
				},3000);
				
			}else{
				$(".spanchange").html(data['msg']);
				$(".spanchange").css("color","red");
			}
		},"json")
	});
	
	
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
		var username = "username"+$.cookie("name");
		var arr = JSON.parse($.cookie(username));
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
		$.cookie(username, JSON.stringify(arr), {
            exprice: 7,
            path: '/'
        });

        alert("添加成功！");
	});
	
	$(".huan").click(function(){
		$(".contact-2-ul li").eq(7).find("span").addClass("colors");
		$(".contact-2-ul li").eq(5).find("span").removeClass("colors");
		$("#all-li").animate({"scrollTop":3850});
	});
	
	$(".sex input").click(function(){
		$(this).attr("checked","checked");
		$(this).parent().siblings().find("input").removeAttr("checked","checked");
	});
	$(".first").click(function(){
		console.log(123)
		location.href = "index.html";
	});
	
	
});
