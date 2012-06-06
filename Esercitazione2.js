function point (){

	this.x=Math.random();
	this.y=Math.random();
}

var p1 = new point()



point.prototype.traslate= function(dx,dy){
	var x
	var y
	x= this.x + dx
	y= this.y + dy

	return this
}


