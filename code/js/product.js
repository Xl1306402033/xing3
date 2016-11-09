function Fangda(){
	this.smallpic = $("#contact-middle-left");
	this.bigpic = $("#bigsmall")
	this.bigimg = $("#bigsmall img");
	this.find = $(".find");
	this.xy();
	if($.cookie("shopnum")&&$.cookie("shopnum")!=null){
		$("#quantity").val($.cookie("shopnum"));
	}
//	this.bindEvent();
}
Fangda.prototype.xy = function(){
	var dom = this;
	dom.smallpic.hover(function(){
		dom.find.show();
		dom.bigpic.show();
	},function(){
		dom.find.hide();
		dom.bigpic.hide();
	})
}
Fangda.prototype.init = function(){
	var dom = this;
	
	dom.smallpic.mousemove(function(e){
		var clientX = e.pageX;
		var clientY = e.pageY;
		var offsetX = dom.smallpic.offset().left;
		var offsetY = dom.smallpic.offset().top;
		
		var x = clientX - offsetX-dom.find.width()/2;
		var y = clientY -offsetY-dom.find.height()/2;
	
		if(x<=0){
			x=0;
		}else if(x>=dom.smallpic.width()- dom.find.width()){
			x=dom.smallpic.width()- dom.find.width();
		}
		if(y<=0){
			y=0;
		}else if(y>=dom.smallpic.height()- dom.find.height()-145){
			y=dom.smallpic.height()- dom.find.height()-145;
		}
		
		dom.find.css({"left":x,"top":y});
		var bx = x*2;var by =y*2;
		dom.bigimg.css({"left":-bx,"top":-by});
		dom.bigpic.css({"left":(clientX+300),"top":(clientY-100)})
	});
	/*alert(1);*/
		/*alert(1);*/
}


function Index(){
	this.bs = $("#product_choose_size_ul a");
	this.Reduce = $("#countReduce");
	this.countAdd= $("#countAdd");
	this.addtime();
	this._bs();
	this.buyss();
	this.succes()
	this.reduce();
	this.countadd();
	this.headwrap();
}
Index.prototype._bs = function(){
	var dom = this;
	dom.bs.click(function(){
		$(this).addClass("class-bs").parent().siblings().find("a").removeClass("class-bs");
	});
}
Index.prototype.countadd = function(){
	var dom = this;
	var num = $("#quantity").val();
//	if($.cookie("shopnum")&&$.cookie("shopnum")!=null){
//			$("#quantity").val($.cookie("shopnum"));
//		}
	dom.countAdd.click(function(){
		console.log('123')
		num++;
		$("#quantity").val(num);
		
		$.cookie("shopnum",num,{
			exprice: 1,
            path: '/'
        });

	});
}
Index.prototype.reduce = function(){
	var dom = this;
	
	var num = $("#quantity").val();
	dom.Reduce.click(function(){
		console.log('123')
		if(num&&(num<=1)){
			$("#quantity").val(1);
		}else{
			num--;
			$("#quantity").val(num);
			
			$.cookie("shopnum",num,{
				exprice: 1,
	            path: '/'
        	});
		}
	});
}
Index.prototype.addtime = function(){
	var countdownDD = $('#countdownDD').html();
	var endtime = $("#endtime").html();
	setInterval(function() {
		var mydate = new Date();
		var ms = mydate.getTime();
		var endms = Date.parse(endtime);
		endms=endms-ms;
		var day = parseInt(endms/(24*60*60*1000));
		var hou = parseInt((endms%(24*60*60*1000))/(60*60*1000));
		var min = parseInt( ((endms%(24*60*60*1000))%(60*60*1000))/(60*1000) );
		var sec = parseInt( (((endms%(24*60*60*1000))%(60*60*1000))%(60*1000))/1000 );
	    $("#countdownDD").html(day);
	    $("#countdownHH").html(hou);
	    $("#countdownMM").html(min);
	    $("#countdownSS").html(sec);
	}, 1000);
}
Index.prototype.headwrap = function(){
	var head = $("#head-wrap");
	$(window).scroll(function(){
		var s=$(this).scrollTop();
		if(s>=108){
			head.css({"position":"fixed","left":0,"top":0});
		}else{
			head.css("position","relative");
		}
	});
	
}
Index.prototype.buyss = function(){
	$("#buy").click(function(){		
		location.href = "buycar.html"
	});
	$(".join_shopping_bag").click(function(){
		var s=parseInt($("#numbers").html());
		s+=1;
		$("#numbers").html(s);
		$.cookie("num",s,{ expires:7,path: '/'});
	});
}
Index.prototype.succes = function(){
	$(".join_shopping_bag").click(function(){
		var s = $("#reg-1").html()
		if(s=="注册有礼"){
			location.href = "login.html";
			return ;
		}
		$("#succese").css("display","block");
		$("#fugai").css("display","block");
		$(".success-top span").click(function(){
			$("#succese").css("display","none");
			$("#fugai").css("display","none");
		});
		$(".pay-1").click(function(){
			location.href = 'index.html';
		});
		$(".pay-2").click(function(){
			location.href = 'buycar.html';
		});
	});
}



$(function(){
	
	if($.cookie("name")&&$.cookie("name")!=null){
		$("#reg-1").html($.cookie("name"));
		$('#login-1').html("退出");
		$("#reg-1").click(function(){
			location.href = "Myuser.html";
		});
		$('#login-1').click(function(){
			$.cookie("name",null,{path:"/"});
			$.cookie(username,null,{path:"/"});
			$.cookie("pwd",null,{path:"/"});
			$.cookie("zk",null,{path:"/"});
			$.cookie("num",null,{path:"/"});
			$.cookie("photo",null,{path:"/"});
			$.cookie(("username"+username),null,{path:"/"});
			location.href = "index.html";
		});
	}else{
		$("#reg-1").html("注册有礼");
		$('#login-1').html("登录");
		$("#reg-1").click(function(){
			location.href = "reg.html";
		});
		$('#login-1').click(function(){
			location.href = "login.html";
		});
	}
	
	if($.cookie("photo")&&$.cookie("photo")!=null){
		$("#list img").attr("src",$.cookie("photo"));
		$("#list2 img").attr("src",$.cookie("photo"));
		$("#bigsmall-1 img").attr("src",$.cookie("photo"));
		$(".colorselected img").attr("src",$.cookie("photo"));
	}
	if($.cookie("zk")&&$.cookie("zk")!=null){
		$(".product_price-2").html($.cookie("zk"));
		$(".product_oldprice-2").html($.cookie("zk")*2)
	}

	$(".first").click(function(){
		console.log(123)
		location.href = "index.html";
	});
	$(".right-nav a").click(function(){
		if($.cookie("name")&&$.cookie("name")!=null){
			location.href = "buycar.html";
		}
	});
	
	
	var b = new Fangda();
	new Index();
	b.init();
});