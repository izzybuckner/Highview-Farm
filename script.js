document.addEventListener("click", (event) => {
  const toggle = event.target.closest("#menu-toggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.getElementById("nav")?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("menu-toggle");
    nav?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener(
  "scroll",
  () => {
    document.getElementById("header")?.classList.toggle("is-scrolled", window.scrollY > 12);
  },
  { passive: true }
);

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
