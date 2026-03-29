window.addEventListener("scroll", function () {
  const menu = document.getElementById("menu-principal");
  const headerMenu = document.getElementById("menu-fijo");
  const main = document.querySelector("main");
  const headerHeight = document.querySelector("header").offsetHeight;

  if (window.scrollY > headerHeight) {
    if (!menu.classList.contains("fixed")) {
      menu.classList.add("fixed");
      headerMenu.appendChild(menu);
      menu.style.display = "flex"; // asegura que se muestre
    }
  } else {
    if (menu.classList.contains("fixed")) {
      menu.classList.remove("fixed");
      main.prepend(menu);
      menu.style.display = "flex"; // asegura que se muestre
    }
  }
});
