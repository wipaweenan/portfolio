import { renderContent } from "./content.js";
import { initLanguage } from "./language.js";
import { initNavigation } from "./navigation.js";
import { initMotion } from "./motion.js";

renderContent();
initLanguage();
initNavigation();
initMotion();

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((filter) => {
      const active = filter === button;
      filter.setAttribute("aria-pressed", String(active));
      ["text-indigo", "underline", "underline-offset-8"].forEach((name) =>
        filter.classList.toggle(name, active),
      );
    });
    document.querySelectorAll("[data-project]").forEach((project) => {
      project.hidden =
        button.dataset.filter !== "all" &&
        project.dataset.project !== button.dataset.filter;
    });
  });
});
