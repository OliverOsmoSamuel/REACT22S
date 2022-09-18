const form = document.querySelector("#form");
const firstColor = document.querySelector("#first-color");
const secondColor = document.querySelector("#second-color");
const direction = document.querySelectorAll("input[name='direction']");
const gradient = document.querySelector("#gradient");
const code = document.querySelector("#output");

const changeColor = (event) => {
  event.preventDefault();

  let currDirection;
  direction.forEach((direction) =>
    direction.checked ? (currDirection = direction.value) : null
  );

  let currGradient = `linear-gradient(${currDirection}, ${firstColor.value}, ${secondColor.value})`;

  gradient.style.background = currGradient;
  code.textContent = "background-image: " + currGradient + ";";
};

window.onload = changeColor;
form.addEventListener("change", changeColor);
