$().extend("animate", function(json, fn){
	for(var i = 0; i < this.elements.length; i++){
		startMove(this.elements[i], json, fn);
	}
})