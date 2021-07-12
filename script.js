const burger = document.getElementById("navBurger");
const navbar = document.getElementById("navBar");

function openMobileNavbar() {
  navbar.classList.add("opened");
  burger.setAttribute("title", "Close navigation menu");
  icon = burger.querySelector("i");
  toggleBurgerIcon();
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  burger.setAttribute("title", "Open navigation menu");
  icon = burger.querySelector("i");
  toggleBurgerIcon();
}

function toggleBurgerIcon() {
  if (icon.classList.contains("fa-times")) {
    burger.querySelector("i").classList.remove("fa-times");
    burger.querySelector("i").classList.add("fa-bars");
  } else if (icon.classList.contains("fa-bars")) {
    burger.querySelector("i").classList.remove("fa-bars");
    burger.querySelector("i").classList.add("fa-times");
  }
}

burger.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});
