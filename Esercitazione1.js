var numeri = [1,2,3,4,5,-1,-2,-3,-4];

var filtro = function(array){
	return array
	.filter(function(item){
		return item > 0;
	}
})
	.reduce(function(prev,curr,index,array){
		return prev + curr;
})
}
