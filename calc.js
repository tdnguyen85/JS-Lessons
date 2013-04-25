var numberOne = prompt("Enter the first number");
var numberTwo = prompt("Enter the second number");
var mathOperation = prompt("Choose from the following math operations:\n add | subtract | multiply | divide");
var answer;

function mathAdd(numberOne, numberTwo) {
	return +numberOne + +numberTwo;
}
function mathSubtract(one, two) {
	return +numberTwo - +numberOne;
}
function mathMultiply(one, two) {
	return +numberOne * +numberTwo;
}
function mathDivide(one, two) {
	return +numberTwo / +numberOne;
}

switch(mathOperation) {
	case "add":
		answer = mathAdd(numberOne, numberTwo);
		break;
	case "subtract":
		answer = mathSubtract(numberOne, numberTwo);
		break;
	case "multiply":
		answer = mathMultiply(numberOne, numberTwo);
		break;
	case "divide":
		answer = mathDivide(numberOne, numberTwo);
		break;
	default:
		answer = "Wrong Math Operation";
}

alert("The answer is " + answer);