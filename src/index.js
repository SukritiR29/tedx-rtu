const menuBtn = document.querySelectorAll(".menuBtn");
const menu = document.querySelector(".menu");

menuBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("hide");
    console.log("clicked");
  });
});
