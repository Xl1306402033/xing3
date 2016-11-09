window.onload= function(){
	var oUl = document.getElementById("list");
	var allLi = oUl.getElementsByTagName('li');
	var oUl2 = document.getElementById("list2");
	var allBtn = oUl2.getElementsByTagName('li');

	var i = 0;
	
	
	var height = allLi[0].offsetHeight;

	alert(1);

//	var flag = true;
	function move(){


//		flag = false;
		i++;		
		var iheight = -1 * height*i;
		startMove(oUl, {"top": iheight});
	}

	for(var j=0;j<allBtn.length;j++){
		allBtn[j].index = j;
		allBtn[j].onclick = function(){
			
			i=this.index-1;
			move();
					
		}
	}
	
	
}
function getStyle(obj, attr){
	var objstyle = null;
	if(window.getComputedStyle){
		objstyle = getComputedStyle(obj);
	}else{
		objstyle=obj.currentStyle;
	}
	return objstyle[attr];
}
function startMove(obj,oAttr,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in oAttr){
			var start =parseFloat(getStyle(obj, attr));
			if(attr == 'opacity'){
				start = Math.round(start*100);
			}else{
				start = Math.round(start);
			}
			
			var speed = (oAttr[attr]-start)/7;
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
			
			if(start==oAttr[attr]){
				continue;
			}else{
				flag = false;
			}
			if (attr == "opacity") {
				obj.style.opacity = (start + speed)/100;
				obj.style.filter = "alpha(opacity="+(start+speed)+")";
			} else {
				obj.style[attr] = (start + speed) + "px"; 
			}
		}
		if (flag == true) {
			
			// 说明所有属性都完成了
			clearInterval(obj.timer);
			
			fn && fn();
		}
	},50)
}
