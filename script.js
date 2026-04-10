const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
const revealElements = document.querySelectorAll(".reveal");
const contactForm = document.querySelector(".contact-form");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    navMenu.classList.toggle("is-open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu && navMenu.classList.contains("is-open")) {
      navMenu.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });
});

// Simple scroll-based fade-in animation for sections and cards.
const observer = new IntersectionObserver(
  (entries, animationObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      animationObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => observer.observe(element));

// Demo-only form behavior so the placeholder form feels interactive.
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thanks for reaching out! Replace this demo handler with your real form integration.");
    contactForm.reset();
  });
}
