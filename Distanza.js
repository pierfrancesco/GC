function point (x,y){

	this.x=x;
	this.y=y;
}

var p1 = new point(1,1);
var p2 = new point(2,2);

point.prototype.getDistance = function (a) {
	var disx
	var disy
	if(this.x < a.x && this.y < a.y){
		disx=a.x-this.x;
		disy=a.y-this.y;
		return Math.sqrt((disx*disx)+(disy*disy));
	} else if (this.x > a.x && this.y > a.y){
		disx=this.x-a.x;
		disy=this.y-a.y;
		return Math.sqrt((disx*disx)+(disy*disy));
	}else if(this.x > a.x && this.y < a.y){
		disx=this.x-a.x;
		disy=a.y-this.y;
		return Math.sqrt((disx*disx)+(disy*disy));
	}else if(this.x < a.x && this.y > a.y){
		disx=a.x-this.x;
		disy=this.y-a.y;
		return Math.sqrt((disx*disx)+(disy*disy));
}
}