const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.addEventListener("pointermove", (event) => {
    cursorGlow.style.transform = "translate(" + event.clientX + "px, " + event.clientY + "px) translate(-50%, -50%)";
    document.body.classList.add("cursor-active");
  });
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".main-nav a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    nav.classList.remove("open");
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.dataset.filter;
    document.querySelectorAll(".service-tile").forEach((tile) => {
      tile.hidden = filter !== "all" && tile.dataset.category !== filter;
    });
  });
});

document.querySelectorAll(".service-tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    document.querySelectorAll(".service-tile").forEach((item) => item.classList.remove("selected"));
    tile.classList.add("selected");
  });
});
