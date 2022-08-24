let calculateGasoline = () => {
  // set price and money values
  let price = document.getElementById("form__input-price").value,
    money = document.getElementById("form__input-money").value;
  const reg = new RegExp("^[0-9]+$");

  // check price for missing or invalid inputs
  price.length == 0
    ? ((document.getElementById("form__feedback-price--error").textContent =
        "Missing input"),
      document
        .getElementById("form__input-price")
        .classList.add("form__input--error"))
    : !reg.test(price)
    ? ((document.getElementById("form__feedback-price--error").textContent =
        "Invalid input, numbers only."),
      document
        .getElementById("form__input-price")
        .classList.add("form__input--error"))
    : ((document.getElementById("form__feedback-price--error").textContent =
        ""),
      document
        .getElementById("form__input-price")
        .classList.remove("form__input--error"));

  // check money for missing or invalid inputs
  money.length == 0
    ? ((document.getElementById("form__feedback-money--error").textContent =
        "Missing input"),
      document
        .getElementById("form__input-money")
        .classList.add("form__input--error"))
    : !reg.test(money)
    ? ((document.getElementById("form__feedback-money--error").textContent =
        "Invalid input, numbers only."),
      document
        .getElementById("form__input-money")
        .classList.add("form__input--error"))
    : ((document.getElementById("form__feedback-money--error").textContent =
        ""),
      document
        .getElementById("form__input-money")
        .classList.remove("form__input--error"));

  // output
  money / price >= 10
    ? (document.getElementById("form__output").textContent =
        "Good, you can escape now")
    : money / price < 10
    ? (document.getElementById("form__output").textContent =
        "Ups, you have to stay here.")
    : (document.getElementById("form__output").textContent = "");
};
