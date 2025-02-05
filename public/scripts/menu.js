if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle_btn");
    const mask = document.getElementById("mask");
    const header = document.querySelector("header");

    if (toggleBtn && mask && header) {
      toggleBtn.addEventListener("click", function () {
        header.classList.toggle("open");
      });

      mask.addEventListener("click", function () {
        header.classList.remove("open");
      });
    }
  });
}
  