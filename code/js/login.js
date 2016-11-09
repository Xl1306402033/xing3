$(function(){
	function yzms(){
		var b = "";
		var c = null;
		for(var i = 0; i < 4; i++){
			var num = parseInt(Math.random() * 1000) % 3;
			if(num == 0){
				c = parseInt(Math.random() * 1000) % 10 + 48;
				
			}else if(num == 1){
				c = parseInt(Math.random() * 1000) % 26 + 65; 
			}else{
				c = parseInt(Math.random() * 1000) % 26 + 97;
			}
			b = b + String.fromCharCode(c);
		}
		return b;
	}
	$("input[name = 'yzm']").click(function(){
		var that = this;
		var yzm = yzms();
		$(that).val(yzm);
	});
	$("input[name = 'tyzm']").blur(function(){
		var that = this;
		var yzm = $("input[name = 'yzm']").val();
		var tyzm = $(that).val();
		if(tyzm != yzm){
			$("#Act_error-4").html("验证码输入错误！");
			$(that).focus();
			$(that).val("");
			return;
		}else{
			$("#Act_error-4").html("");
		}
	});
	
	$("input[name = 'username']").blur(function(){
		
	});
	
	
	$("#submitBtn").click(function(){
		var name = $("input[name = 'username']").val();
		var psw = $("input[name = 'password']").val();
		$.post("php/login.php" , {
			"name" : name,
			"pwd" : psw
		},function(data){
			if(data && data['code'] == 0){
				$.cookie('name', name, {expires: 7, path: '/'});
				$.cookie('pwd', psw, {expires: 7, path: '/'});
				location.href = "index.html";
			}else{
				alert(data['msg']);
			}
		}, 'json');
	});
	
	$(".hydl_regsiter a").click(function(){
		location.href = "reg";
	});
	$("#head img").click(function(){
		location.href = "index.html";
	})
})
