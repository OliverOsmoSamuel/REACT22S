const body = document.querySelector("body");

const toggle = (target, toggledClass) => {
  const toggleButton = document.querySelector(target);
  toggleButton.classList.toggle(toggledClass);
  body.classList.toggle("disable-scroll");
};

const navToggle = () => {
  toggle(".nav-mobile", "nav-mobile--open");
};

const modalToggle = () => {
  toggle(".modal", "modal--visible");
};

/* Navbar background color toggle */
window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  scrollPosition >= 1
    ? document.querySelector(".nav").classList.add("nav--scrolled")
    : document.querySelector(".nav").classList.remove("nav--scrolled");
});

/* 'Back to top' button display toggle */
window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  scrollPosition >= 201
    ? document.querySelector(".top").classList.add("top--visible")
    : document.querySelector(".top").classList.remove("top--visible");
});
