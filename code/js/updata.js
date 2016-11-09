function Index(){
	this.init();
//	this.initdom();
}
//Index.prototype.initdom = function(){
//	this.oldpwd = $(".contact-3-1 input");
//}
Index.prototype.init = function(){
	var self = this;
	$(".contact-3-1 input").blur(function(){
		var b=$(".contact-3-1 input").val();
		
	});
	
}


$(function(){
	new Index();
});
