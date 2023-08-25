const burger = document.querySelector("#burger-menu");
const sideBar = document.querySelector(".side-bar");

burger.addEventListener("click", faireQC )


function faireQC(e) {
  console.log(e);
  sideBar.classList.toggle("open");
}