const body = document.querySelector("body");

let navToggle = () => {
  const navToggleButton = document.querySelector(".nav-mobile");
  navToggleButton.classList.toggle("nav-mobile--open");
  body.classList.toggle("disable-scroll");
};

let modalToggle = () => {
  const modalToggleButton = document.querySelector(".modal");
  modalToggleButton.classList.toggle("modal--visible");
  /* Disable Scroll */
  body.classList.toggle("disable-scroll");
};

window.addEventListener("scroll", () => {
  let scrollPosition = window.pageYOffset;
  /* Scroll nav color toggle */
  scrollPosition >= 1
    ? document.querySelector(".nav").classList.add("nav--scrolled")
    : document.querySelector(".nav").classList.remove("nav--scrolled");
});

window.addEventListener("scroll", () => {
  let scrollPosition = window.pageYOffset;
  /* Scroll up button display toggle */
  if (scrollPosition >= 201) {
    document.querySelector(".top").classList.add("top--visible");
  } else {
    document.querySelector(".top").classList.remove("top--visible");
  }
});
