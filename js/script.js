// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

navToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ---------- Skill bar reveal on scroll ----------
const skillFills = document.querySelectorAll(".skill-bar-fill");

if ("IntersectionObserver" in window && skillFills.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("filled");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  skillFills.forEach((el) => observer.observe(el));
} else {
  skillFills.forEach((el) => el.classList.add("filled"));
}

// ---------- Contact form ----------
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (form.action.includes("YOUR_FORM_ID")) {
    status.textContent =
      "Form endpoint not set up yet — add your Formspree ID in index.html (see README).";
    status.className = "form-status error";
    return;
  }

  status.textContent = "Sending…";
  status.className = "form-status";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      status.textContent = "Thanks — your message has been sent.";
      status.className = "form-status success";
      form.reset();
    } else {
      status.textContent = "Something went wrong. Please try again or email directly.";
      status.className = "form-status error";
    }
  } catch (err) {
    status.textContent = "Network error — please try again or email directly.";
    status.className = "form-status error";
  }
});
