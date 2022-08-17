let inputNum = prompt("Input a number");

oddOrEven = (num) => {
  return num != Number(num)
    ? `'${num}' is not a valid input`
    : num % 2 == 0
    ? `The number '${num}' is even`
    : `The number '${num}' is odd`;
};

document.getElementById("body__output").innerHTML = oddOrEven(inputNum);
