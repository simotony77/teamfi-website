/* ============ Teamfi Conseil — interactions ============ */

document.addEventListener("DOMContentLoaded", () => {
  // Current year in footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("is-open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("is-open"))
    );
  }

  // Helper: read a translated string for the current language
  const t = (key, fallback) => {
    try {
      const lang = document.documentElement.lang === "en" ? "en" : "fr";
      return (I18N[lang] && I18N[lang][key]) || fallback;
    } catch (e) {
      return fallback;
    }
  };

  // "Postuler" buttons → prefill the contact form with the job title
  const form = document.getElementById("contactForm");
  document.querySelectorAll(".js-apply").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const card = btn.closest(".job");
      const job = card ? card.querySelector("h3").textContent.trim() : "";
      const subject = document.getElementById("formSubject");
      const message = document.getElementById("formMessage");
      if (subject) subject.value = t("apply.subject", "Candidature") + " — " + job;
      if (message && !message.value.trim()) {
        message.value = t("apply.prefill", "Bonjour,\n\nJe souhaite postuler au poste suivant : ") + job + ".\n\n";
      }
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      if (message) setTimeout(() => message.focus(), 400);
    });
  });

  // Contact form → submit via Formsubmit AJAX (no page reload)
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const status = document.getElementById("formStatus");
      status.className = "form-status";
      status.textContent = "";
      btn.disabled = true;
      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        const data = await res.json().catch(() => ({}));
        const delivered = res.ok && String(data.success) === "true";
        if (delivered) {
          form.reset();
          status.textContent = t("contact.form.ok", "Merci, votre message a bien été envoyé.");
          status.classList.add("is-ok");
        } else {
          throw new Error("Not delivered: " + (data.message || res.status));
        }
      } catch (err) {
        status.textContent = t("contact.form.err", "Une erreur est survenue. Écrivez-nous directement par email.");
        status.classList.add("is-err");
      } finally {
        btn.disabled = false;
      }
    });
  }

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
