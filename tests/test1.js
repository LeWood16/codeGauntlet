var testNums = [123, 2121, 5309];
var testAnswers = [321, 1212, 9035];
var userAnswers = [];

// create a function that will take in a number as an argument, then returns that number in reverse
// replace "testFunction" with the name of your function

/* e.g. 
function numReverse(num){
   // some code;
   return num;
}

*/

var youPassed = true;

for (var i = 0; i < testNums.length; i++){
    userAnswers.push("textFunction"(testNums[i]));
}

for (var j = 0; j < testNums.length; j++){
    if (testAnswers[j] !== userAnswers[j]){
    	youPassed = false;
    } else {
    	continue;
    }
}

if (youPassed){
	console.log("You passed!");
} else {
	console.log("Try again...");
}