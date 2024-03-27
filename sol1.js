function findMax(num1, num2) {
    let maxNum = num1 > num2 ? num1 : num2;
    return maxNum;
}

const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));

const maximum = findMax(num1, num2);
console.log("Maximum number is:", maximum);
