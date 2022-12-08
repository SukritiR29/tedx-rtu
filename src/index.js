const menuBtn = document.querySelectorAll(".menuBtn");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");

window.addEventListener("scroll", (e) => {
  if (e.deltaY >= 0 && window.scrollY > 0) {
    header.classList.add("backdrop-blur");
    header.classList.add("py-8");
  }
  if (e.deltaY <= 0) {
    header.classList.remove("py-8");
  }
  if (e.deltaY <= 0 && window.scrollY <= 0) {
    header.classList.remove("backdrop-blur");
    header.classList.remove("py-8");
  }
});

menuBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      menu.classList.add("hide");
    } else {
      menu.classList.remove("hide");
      menu.classList.add("show");
    }

    console.log("clicked");
  });
});
