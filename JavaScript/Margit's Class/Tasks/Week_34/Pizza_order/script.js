let name = document.querySelector("#name"),
  size = document.getElementsByName("pizza-size"),
  toppings = document.getElementsByName("toppings"),
  delivery = document.querySelector("#delivery"),
  outputName = document.querySelector("#output-name"),
  outputSize = document.querySelector("#output-pizza-size"),
  outputToppings = document.querySelector("#output-toppings"),
  outputDelivery = document.querySelector("#output-delivery"),
  outputTotal = document.querySelector("#output-total");

//reuturning total price
let priceCalculator = () => {
  let totalPrice = 0,
    numChecked = 0;

  for (let i = 0; i < size.length; i++) {
    size[i].checked && size[i].value == 2
      ? (totalPrice += 7.5)
      : size[i].checked && size[i].value == 4
      ? (totalPrice += 10.5)
      : size[i].checked && size[i].value == 6
      ? (totalPrice += 12.5)
      : size[i].checked && size[i].value == 8
      ? (totalPrice += 15.5)
      : null;
  }

  for (let j = 0; j < toppings.length; j++) {
    toppings[j].checked ? numChecked++ : null;
  }
  if (numChecked > 4) {
    totalPrice += (numChecked - 4) * 0.5;
  }
  if (delivery.value == "home-delivery") {
    totalPrice += 5;
  }
  outputTotal.textContent = totalPrice + "€";
};

//returning order summary
let orderSummary = () => {
  let allToppings = [];
  outputName.textContent = name.value;
  for (let i = 0; i < size.length; i++) {
    size[i].checked ? (outputSize.textContent = size[i].value) : null;
  }
  for (let j = 0; j < toppings.length; j++) {
    toppings[j].checked ? allToppings.push(toppings[j].value) : null;
  }
  outputToppings.textContent = allToppings.join(", ").toString();
  outputDelivery.textContent = delivery.value;
};
