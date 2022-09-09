document.addEventListener(
  "DOMContentLoaded",
  () => {
    fetchData();
  },
  false
);

async function fetchData() {
  const response = await fetch("http://localhost:5500/data.json");
  const data = await response.json();
  console.log(data);

  data.forEach((car) => {
    car.forEach((data) => {});
  });
}
