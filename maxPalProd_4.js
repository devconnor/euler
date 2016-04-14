function isPal(num){
	str = num.toString();
	
	revStr= str.split("").reverse().join("");
	
	final = Number(revStr);
	
	if (num === final)
		return true;
	return false;	
}
function maxPal(){
	for (var i = 99; i > 0; i--){
		var product = i*99;
		
		if (isPal(product))
			return product;
	}
}
console.log(maxPal());