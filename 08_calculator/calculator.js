const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num1) {
	return num1.reduce((prevNum, currentNum) => {return prevNum + currentNum}, 0);
};

const multiply = function(num1) {
  return num1.reduce((prevNum, currentNum) => {return prevNum * currentNum}, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num1) {
  let totalFact = num1;
  if(num1 === 0 || num1 === 1){
    return 1;
  }else{
    num1 = num1-1; //since we are starting from num1 itself we will be subtracting 1 to it.
    while(num1 > 1){
      totalFact *= num1;
      num1--;
    }
  }
  return totalFact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
