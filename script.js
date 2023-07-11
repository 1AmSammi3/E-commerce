let btn = document.querySelector(".menu-btn");
let hams = document.querySelectorAll(".hamburger");
btn.addEventListener("click", function() {
  hams.forEach(ham => {
    ham.classList.toggle("tog");
  });
});
