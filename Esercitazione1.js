var numeri = [1,2,3,4,5,-1,-2,-3,-4];

var filtro = numeri.filter(function(item,index,array){
	return (item > 0)
})

var somma = filtro.reduce(function(prev,curr,index,array){
	return prev + curr;
})