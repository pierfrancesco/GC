function point (x,y){

	this.x=x;
	this.y=y;
};

var triangle = function (p1, p2, p3) {
  this.p1 = p1;
  this.p2 = p2;
  this.p3 = p3;

  this.l1 = p2.getDistanceFromPoint(p3);
  this.l2 = p3.getDistanceFromPoint(p1);
  this.l3 = p1.getDistanceFromPoint(p2);
}

triangle.prototype.getPerimeter = function() {
  return this.l1 + this.l2 + this.l3;
};

triangle.prototype.getArea = function() {
  var p = this.getPerimeter() / 2;

  return Math.sqrt(p*(p - this.l1)*(p - this.l2)*(p - this.l3));
};

var Line = function(a,b,c){

	if(!(this instanceof Line)){// l'utente se invoca la funzione senza il new ottiene lo stesso risultato in caso l'avesse invocato con il new
		return new Line(a,b,c);
	}

	 this.a = a;
	 this.b = b;
	 this.c = c;
};

var linea = new Line(1,2,3)
var punto = new point (2,3)

point.prototype.getDistanceFromLine= function(linea){

	var x = linea.a;
	var y = linea.b;
	var z = linea.c;
	var px = this.x;
	var py = this.y;

	return Math.abs(x*px+y*py+z)/(Math.sqrt(Math.pow(x,2)+Math.pow(y,2)))

}

point.prototype.getDistance = function(x) {
	if(x instanceof point){
		return this.getDistanceFromPoint(x);
	}

	if(x instanceof Line){
		return this.getDistanceFromLine(x);
	}

	throw new Error('x non è niente')
};

point.prototype.getDistanceFromPoint = function (a) {
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

	} else if(this.x > a.x && this.y < a.y){
		disx=this.x-a.x;
		disy=a.y-this.y;
		 return Math.sqrt((disx*disx)+(disy*disy));

	} else if(this.x < a.x && this.y > a.y){
		disx=a.x-this.x;
		disy=this.y-a.y;
		 return Math.sqrt((disx*disx)+(disy*disy));
 }
}

triangle.prototype.above = function (line){//istanziarlo con un array di punti per poi riciclare il metodo con il quadrato
	return 	((this.p1.getDistanceFromLine(line)>0) 
			&& (this.p2.getDistanceFromLine(line)>0) 
			&& (this.p3.getDistanceFromLine(line)>0))

};

triangle.prototype.below = function (line){
	return 	((this.p1.getDistanceFromLine(line)<0) 
			&& (this.p2.getDistanceFromLine(line)<0) 
			&& (this.p3.getDistanceFromLine(line)<0))
};

triangle.prototype.intersect = function (line){

	return (!this.above(line) && !this.below(line))
};

var Quad = function (p1,p2,p3,p4){

	this.points = [p1,p2,p3,p4];
};

Quad.prototype.above = triangle.prototype.above;