const sideBar = document.querySelector(".side-bar");
const ghostSideBar = document.querySelector(".ghost");
const burguerButton = document.querySelector(".mobile-modal-button");
const logo = document.querySelector("header .logo");

burguerButton.addEventListener("click", () => {
  sideBar.classList.toggle("visivel");
  logo.classList.toggle("invisivel");
});

let widthSideBar = sideBar.clientWidth;

ghostSideBar.style.width = `${widthSideBar + 20}px`;
