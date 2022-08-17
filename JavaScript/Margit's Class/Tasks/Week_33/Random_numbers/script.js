let firstNum = prompt("First Number"),
  secondNum = prompt("Second Number"),
  thirdNum = prompt("Third Number"),
  addAllNum = Number(firstNum) + Number(secondNum) + Number(thirdNum),
  multiplyAllNum = Number(firstNum) * Number(secondNum) * Number(thirdNum),
  amountPositiveNum =
    Math.sign(firstNum) + Math.sign(secondNum) + Math.sign(thirdNum);

let checkNegativeNum = () =>
  amountPositiveNum === 3
    ? multiplyAllNum
    : amountPositiveNum === -3
    ? "only negatives"
    : amountPositiveNum < 3 && amountPositiveNum > -3
    ? addAllNum
    : "invalid input, numbers only";
console.log(checkNegativeNum());

document.getElementById("body__output").innerHTML = checkNegativeNum();
