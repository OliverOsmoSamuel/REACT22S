let navToggle = () => {
  let toggleButton = document.getElementById("navbar__links-mobile");
  toggleButton.classList.toggle("navbar__links-mobile--open");
};

window.addEventListener("scroll", function () {
  let scrollPosition = window.pageYOffset;
  if (scrollPosition >= 1) {
    document.getElementById("navbar").classList.add("navbar--scrolled");
  } else {
    document.getElementById("navbar").classList.remove("navbar--scrolled");
  }
});
