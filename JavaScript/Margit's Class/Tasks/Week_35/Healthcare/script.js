const form = document.querySelector("form");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const conditions = document.querySelectorAll("condition");
const habits = document.querySelectorAll("habit");
const output = document.querySelector("#output");

const calculateInsurance = (event) => {
  event.preventDefault();
  console.log(name, age, conditions, habits, output);
  let price = 500,
    customerAge = age.value;

  customerAge < 26
    ? (price += price * 0.1)
    : customerAge < 36
    ? (price += price * 0.3)
    : customerAge < 46
    ? (price += price * 0.6)
    : customerAge < 56
    ? (price += price * 1)
    : customerAge < 66
    ? (price += price * 1.5)
    : customerAge >= 66
    ? (price += price * 2.1)
    : null;

  conditions.forEach((condition) => {
    if (condition.checked) {
      price += price * 0.01;
    }
  });

  habits.forEach((habit) => {
    habit.value == "bad"
      ? (price += price * 0.05)
      : habit.value == "good"
      ? (price -= price * 0.05)
      : null;
  });

  console.log(price);
  output.textContent = price;
};
