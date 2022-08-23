for (let num = 1; num > 100; num++) {
  num % 2 != 0 ? console.log(num) : null;
}

let loop2 = () => {
  for (let num = 1; num > 100; num++) {
    num % 2 != 0 ? console.log(num) : console.log(100 - num);
  }
};

let loop3 = () => {
  let inputDistance = prompt("Input distance");

  if (inputDistance == 0) {
    null;
  } else {
    let inputTime = prompt("Input time");
    console.log(inputDistance / inputTime);
    loop3();
  }
};

let loop4 = () => {
  let evenNumCounter = 0;
  for (let i = 0; i < 20; i++) {
    if (Number(prompt(`Input number | number ${i} our of 20`)) % 2 == 0) {
      evenNumCounter++;
    }
  }
  return evenNumCounter;
};

let loop5 = () => {
  let inputNum = prompt("Input number"),
    numCounter = 0,
    sum = 0,
    average = sum / numCounter;

  if (inputNum == 0) {
    null;
  } else {
    numCounter++;
    sum += inputNum;
    loop5();
  }
  return average;
};

let loop6 = () => {
  let numCounter = 0,
    sum = 0,
    average = sum / numCounter;

  for (let i = 0; i < 25; i++) {
    let currNum = Number(prompt(`Input number | number ${i} our of 25`));
    numCounter++;
    sum += currNum;
  }
  return average;
};

let loop7 = () => {
  let numCounter = 1,
    sum = 0,
    average = sum / numCounter;

  sum += Number(prompt(`Input number`));

  let answer = prompt(`Do you want to continue giving numbers?(y/n)`);

  if (answer == "y") {
    sum++;
    average += answer;
    loop7();
  } else {
    null;
  }
};

//loop 8

let howManyNum = +prompt(`How many numbers do you want to input`),
    smallestNum = 99999;
for (let num = howManyNum; num > 0; num--) {
  let inputNum = +prompt(`Input Number | input ${num} out of ${howManyNum}`);
  smallestNum > inputNum  ? smallestNum = inputNum : null;
}

//loop 9 

let biggestNum = 0.00001,
  secondBiggestNum = 0.00002;

for (let num = 1; num <= 10; num++) {
  let inputNum = prompt(`Input a Number | input ${num} out of 10`);

  inputNum != +inputNum ? console.log(`'${String(inputNum)}' is an invalid input. Numbers only.`) :
  inputNum > secondBiggestNum && inputNum < biggestNum
    ? (secondBiggestNum = inputNum)
    : inputNum > biggestNum
    ? ((secondBiggestNum = biggestNum), (biggestNum = inputNum))
    : null;
}