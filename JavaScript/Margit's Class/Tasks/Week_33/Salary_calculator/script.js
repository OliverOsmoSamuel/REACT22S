const salaryPerH = Number(prompt("Salary per hour")),
  hoursPerD = Number(prompt("Hours per day"));

const salaryCalculator = () => {
  let hours = Number(hoursPerD),
    salary = 0;

  while (hours > 0) {
    hours <= 7
      ? (salary += salaryPerH)
      : hours <= 9
      ? (salary += salaryPerH * 1.5)
      : hours > 9
      ? (salary += salaryPerH * 2)
      : null;
    hours--;
  }
  return salary;
};

document.getElementById(
  "body__output"
).innerHTML = `Salary per hour: ${salaryPerH} | Hours worked: ${hoursPerD} | Salary: ${salaryCalculator()}`;
