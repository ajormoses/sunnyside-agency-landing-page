const toggle = document.querySelector("#toggle");
const nav = document.querySelector("nav");
const subcontent = document.querySelector(".header-subcontent");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
  subcontent.classList.toggle("show");
});
