/* ============ Teamfi Conseil — interactions ============ */

document.addEventListener("DOMContentLoaded", () => {
  // Current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile menu
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");
  burger.addEventListener("click", () => links.classList.toggle("is-open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("is-open"))
  );

  // Scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
