function first(array){
	// i do something
	for(var i of array[1..5,1..4]){
		console.log(i);
	}
	return 5;
}

function sencond(){
	var array = [];
	for(var i = 0; i < 50; i++){
		array.push(i);
	}
	first(array);
}
