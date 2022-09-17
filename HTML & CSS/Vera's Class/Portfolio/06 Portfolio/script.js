const toggleButton = document.querySelector("#navbar__links-mobile");
const navbar = document.querySelector("#navbar");
const toTopButton = document.querySelector("#to-top");
const body = document.querySelector("body");

let navToggle = () => {
  toggleButton.classList.toggle("navbar__links-mobile--open");
  body.classList.toggle("scroll--disable");
};

window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;
  scrollPosition >= 201
    ? toTopButton.classList.add("to-top--visible")
    : toTopButton.classList.remove("to-top--visible");
});

window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;
  scrollPosition >= 1
    ? navbar.classList.add("navbar--scrolled")
    : navbar.classList.remove("navbar--scrolled");
});
