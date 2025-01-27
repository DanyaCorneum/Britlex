const moveto = new MoveTo();
const links = document.querySelectorAll(".nav-link");
links.forEach((lin) => lin.addEventListener("click", moveToSection));

function moveToSection(event) {
  event.preventDefault();
  const target = document.querySelector(this.getAttribute("href"));
  moveto.move(target);
}
