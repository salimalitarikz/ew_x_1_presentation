// Lenis örneği oluştur
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", () => {
  // Toggle Menu
  const menuButton = document.querySelector("#menu_button");
  const menu = document.querySelector("#menu");
  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      menu.classList.toggle("active");
      menuButton.classList.toggle("active");
    });
  }

  // Icon System
  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    const iconName = icon.getAttribute("data-icon");
    if (iconName) {
      let svgPath = `../../icons/${iconName}.svg`;
      //console.log(`Trying to load SVG: ${svgPath}`);
      fetch(svgPath)
        .then((response) => {
          if (!response.ok)
            throw new Error(`SVG coulnot be loaded: ${iconName}`);
          return response.text();
        })
        .then((svgContent) => {
          icon.innerHTML = svgContent;
        })
        .catch((err) => console.error(err));
    }
  });
});
