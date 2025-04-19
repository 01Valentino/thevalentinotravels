const loader = document.querySelector(".loader");
const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("load", () => {
  loader.classList.add("hide-loader");
});
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
