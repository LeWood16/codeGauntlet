/* Create a function that will take in 
   a number as an argument, then returns 
   that number in reverse. Replace the 
   code in "challengeFunction" with your code.
   Press "Run" when finished.
*/

function challengeFunction(n){
  // your code goes


  
  // between these lines
}

// don't change code below this line

var testNums = [123, 2121, 5309, 98765];
var testAnswers = [321, 1212, 9035, 56789];
var userAnswers = [];
var num, ans;
var pass = true;


for (var i = 0; i < 3; i++){
  num = testNums[i];
  ans = challengeFunction(num);
  userAnswers.push(ans);
}

for (var j = 0; j < 3; j++){
  if (testAnswers[j] !== userAnswers[j]){
    pass = false;
  } else {
    pass = true;
  }
}

if (pass){
  console.log("You passed!");
} else {
  console.log("Challenge currently incomplete");
}
