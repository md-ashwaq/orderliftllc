const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const tabs = [...document.querySelectorAll(".tabs [role='tab']")];
const panels = [...document.querySelectorAll(".menu-panel")];

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) =>
      item.setAttribute("aria-selected", String(item === tab)),
    );
    panels.forEach((panel) => {
      panel.hidden = panel.id !== tab.getAttribute("aria-controls");
    });
  });
});

const form = document.querySelector("#contact-form");
const status = form.querySelector(".form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  status.textContent =
    "Thanks. A menu lead will reply to the email you entered.";
  form.reset();
});

document.querySelector("#year").textContent = String(new Date().getFullYear());
