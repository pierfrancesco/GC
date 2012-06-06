/**
*apply
*apply the given function to the given valuementos
*
*@param {Function} [f= arguments[0]] function
*
*/




apply([Math.cos, Math.PI/3])

function apply(params){
	return params[0](params[1])
}


function aa(funz){
	return function(array){
		var ret;
		ret = array.map(fun);
	}
}

function comp2(params){
		var f = params[0];
		var g = params[1];

	return  function(x){
		return (f(g(x)));
	}
}

function comp3(params){
	return function(x){
		return params.reduce(function(f,g){
			return function(x){
				return f(g(x));
		 }
})
}
}

comp3([
	function(x) {return x -1},
	function(y) {return y*2},
	function(z) {return z-1}
	])(5);


function aa (params){
	return function(x){
		return params.map(function(item){
			return item(x);
		})
	}

}

function distl(pair){
	var value = pair[0];
	var array = pair[1];


	 return array.map(function(item,index,array){
	 		return [value,item];
	 })
}



function trans(matrix){
	var result = [];

	matrix.forEach(function(row,i){
		row.forEach(function(value,j){
			(result[j] = result[i] || [])[i] = value;
		})
	})
	return result;
}