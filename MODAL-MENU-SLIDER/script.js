const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

//Toggle Nav
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

//Show Modal
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

//Hide ModaL
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

//Hide modal on outside click
window.addEventListener("click", e => {
  console.log(e);
  e.target == modal ? modal.classList.remove("show-modal") : false;
  e.target == open ? console.log("kuku") : false;
});