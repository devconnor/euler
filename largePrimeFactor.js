function isPrime(num) {

	for (var i=2; i<num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	
	return num > 1
}

function maxFactor(num2){
	var primeFacts = [];
	for (var i = 0; i < num2; i++) {
		if (num2 % i === 0 && isPrime(i)){
			primeFacts.push(i);
		}
	}
	return primeFacts;
}

console.log(maxFactor(600851475143));

