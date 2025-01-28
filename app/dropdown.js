if (window.innerWidth < 1100) {
  const dropdownMenu = document.querySelector(".dropdown");
  const dropdown = document.querySelector(".dropdownwindow");
  const cross = document.querySelector(".cross");
  console.log(dropdown);
  console.log(dropdownMenu);
  try {
    cross.addEventListener("click", hideDropdown);
    dropdownMenu.addEventListener("click", showDropdown);
  } catch {
  } finally {
    function showDropdown() {
      dropdown.style.display = "block";
      if (window.innerWidth < 600) {
        anime({
          targets: dropdown.children[0],
          width: "100%",
          duration: 200,
          easing: "linear",
        });
      } else {
        anime({
          targets: dropdown.children[0],
          width: "65%",
          duration: 200,
          easing: "linear",
        });
      }
      console.log("asfdasf");
    }
    function hideDropdown() {
      anime({
        targets: dropdown.children[0],
        width: "40%",
        duration: 200,
        easing: "linear",
      });
      dropdown.style.display = "none";
      console.log("asfdasf");
    }
  }
}
