function point (x,y){

	this.x=x;
	this.y=y;
}

point.prototype.traslate= function(dx,dy){
	var x
	var y
	x= this.x + dx
	y= this.y + dy
	return x+' '+' '+y
}