$(function(){
	$("input[name='username']").blur(function(){
		var that = this;
		var name = $(this).val();
		var reg1 = /^[1][3578]\d{9}$/;
		var reg2 = /\w{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z]{1,}/; 
		if((!reg1.test(name))&&(!reg2.test(name))){
			$("#Act_error-1").html("请输入正确的手机号！");
			$("input[name='username']").focus();
			$(that).val("");
			return ;
		}else{
			
			$("#Act_error-1").html('');
			$.get("php/checkName.php",{
				name : name,
			},function(data){
				if(data&&data.code==1){				
					$(that).val('').focus();
					alert("用户名已存在！");
				}
			},'json')
		}
	});
	$("input[name='password']").blur(function(){
		var that = this;
		var psw = $(this).val();
		var reg3 = /.{6,20}/;
		if(!reg3.test(psw)){
			$("#Act_error-2").html("密码不能小于6位或者大于20！");
			$(that).focus();
			$(that).val("");
			return ;
		}else{
			$("#Act_error-2").html('');
		}
	});
	$("input[name='repassword']").blur(function(){
		var that = this;
		var psw = $("input[name='password']").val();
		var repsw = $(this).val();
		if(psw!=repsw){
			$("#Act_error-3").html("两次密码输入不一致！");
			$(that).focus();
			$(that).val("");
			return ;
		}else{
			$("#Act_error-3").html('');
		}
	});
	function yzms() {
		var b = '';
		var c;
		for (var i = 0; i < 4; i++) {
			var num = parseInt(Math.random() * 1000) % 3;
			if (num == 0) {
				c = parseInt(Math.random() * 1000) % 10 + 48;
			} else if (num == 1) {
				c = parseInt(Math.random() * 1000) % 26 + 65;
			} else {
				c = parseInt(Math.random() * 1000) % 26 + 97;
			}
			b = b + String.fromCharCode(c);
		}
		return b;	
	}
	
	$("input[name='yzm']").click(function(){
		var that = this;
		var yzm = yzms();
		$(that).val(yzm);
	});
	
	$("input[name='tyzm']").blur(function(){
		var that = this;
		var yzm = $("input[name='yzm']").val();
		var tyzm = $(that).val();
		if(tyzm!=yzm){
			$("#Act_error-5").html("验证码输入错误！");
			$(that).focus();
			$(that).val("");			
			return ;
		}else{
			$("#Act_error-5").html("");
		}
	});

	$('#submitBtn').click(function(){
		var name = $("input[name='username']").val();
		var psw = $("input[name='password']").val();
		var repsw = $("input[name='repassword']").val();
		var sjyzm = $("input[name='tyzm']").val();
		if(name==""||psw==''||repsw==''||sjyzm==""){
			alert("不能为空");
			return ;
		}
		
		$.post("php/register.php",{
			name : name,
			pwd : psw
		},function(data){
			if(data && data.code==0){
				alert('注册成功。');
				location.href = 'login.html';
			}else{
				alert('注册失败。');
			}
		},'json')
	});
	$(".hydl_regsiter a").click(function(){
		location.href = "login.html";
	});
	$("#head img").click(function(){
		location.href = "index.html";
	});
})