let ageOfUser = prompt("What is your age?");

let militaryAge = (age) => {
  return age < 18
    ? "too young"
    : age < 27
    ? "Right age for military service"
    : age < 41
    ? "You are in reserve"
    : age < 55
    ? "You are in backup reserve"
    : "too aged";
};

let result = militaryAge(ageOfUser);
console.log(result);

document.getElementById("body__output").innerHTML = "3";
