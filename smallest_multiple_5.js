/*
Author: Connor Reardon
Date:4/28/2016
Description: Project Eueler Problem 5, solving for the smallest multiple of all numbers 1 through 20.
Input:none
Output:none
*/

function isDivisible(num){
	for (var i = 1; i <= 20;i++) {
		if (num % i !== 0) {
			return false;
		}
	} 
	return true;
}

function smallestMultiple(){
	var i = 2520;
	while (isDivisible(i) === false) {
		i++;
	}
	return i;
}
console.log(smallestMultiple());

