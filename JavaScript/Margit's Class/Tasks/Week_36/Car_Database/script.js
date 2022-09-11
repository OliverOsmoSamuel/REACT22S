const form = document.querySelector("form");
const database = document.querySelector("#database");
const licenceNumber = document.querySelector("#licence-number");
const carMaker = document.querySelector("#car-maker");
const carModel = document.querySelector("#car-model");
const carOwner = document.querySelector("#car-owner");
const carPrice = document.querySelector("#car-price");
const carColor = document.querySelector("#car-color");

const addData = (event) => {
  event.preventDefault();
  let car = [];

  car.push(licenceNumber.value);
  car.push(carMaker.value);
  car.push(carModel.value);
  car.push(carOwner.value);
  car.push(carPrice.value);
  car.push(carColor.value);

  car.forEach((data) => {
    let newP = document.createElement("p");
    let newContent = document.createTextNode(`${data}`);
    newP.appendChild(newContent);
    newP.classList.add("database__p");
    database.appendChild(newP);
  });

  form.reset();
};

const resetData = () => {
  let databaseP = document.querySelectorAll(".database__p");
  databaseP.forEach((data) => {
    data.remove();
  });
};

form.addEventListener("submit", addData);
