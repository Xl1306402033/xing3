
function startMove(obj, oAttr, fn) {
	
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function() {

		// true 代表所有属性都已经到达目的地
		var flag = true;

		// 快速遍历对象中的所有属性
		for (var attr in oAttr) {
		
			// 1、 获取当前值
			var start = parseFloat(getStyle(obj, attr));
			
			if (attr == "opacity") {
				// 对于透明度特殊处理，都转换成 100 制
				start = Math.round(start * 100);
			} else {
				start = Math.round(start);
			}
	
			var speed = (oAttr[attr] - start) / 7;
			speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
					
			// 3、判断没有到达目的地
			if (start == oAttr[attr]) {
				
				continue;
				
			} else {
				// 说明，至少有个属性没有完成动作
				flag = false;
			}
			
			// 4、更新位置
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
	}, 50);
	
}


function getStyle(obj, attr) {
	var objStyle = null;
	if (window.getComputedStyle) {
		objStyle = getComputedStyle(obj);
	} else {
		objStyle = obj.currentStyle;
	}
	
	return objStyle[attr];
}

window.onload = move;
function move() {
	var oDiv = document.getElementById("buy");
	var height = document.documentElement.clientHeight;
	var oDovHeight = oDiv.clientHeight;
	var iTop =parseInt((height-oDovHeight)/2 );
	var scrollTop = parseInt(document.documentElement.scrollTop||document.body.scrollTop);
	iTop=iTop+scrollTop;
	startMove(oDiv,{"top":iTop});
}
	
window.onscroll = move;