const header = document.querySelectorAll(".header")[0];

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 50) {
    header.classList.add("shadow-below");
  } else {
    header.classList.remove("shadow-below");
  }
});
