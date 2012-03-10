function point (x,y){

	this.x=x;
	this.y=y;
}


var random = Math.random;

function puntirandom(n) {
	var n=n;
	var contenitore = [];
	var x;
	var y;

	 for(var i=0; i<n; i++){

	 	x=(random()*200)-100;
	 	y=(random()*200)-100;
	 	contenitore.push(new point(x,y))
	 }
return filtraggio(contenitore);
}

function filtraggio(array){
	return array
	.filter(function(item,index,array){
		return((item.x >= 0 && item.y >=0 &&(item.y/item.x >=1))
			||(item.x <= 0 && item.y >=0)
			||(item.x <= 0 && item.y <=0 &&(item.y/item.x <=1)));
	});
}
