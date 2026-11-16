import en from "./locales/en.js";
import th from "./locales/th.js";

const translations = { en, th };

export function initLanguage() {
  const buttons = document.querySelectorAll("[data-language]");
  function setLanguage(language) {
    const copy = translations[language] ?? en;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = copy[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    ["aria-label", "alt"].forEach((attribute) => {
      document
        .querySelectorAll(`[data-i18n-${attribute}]`)
        .forEach((element) => {
          const value = copy[element.getAttribute(`data-i18n-${attribute}`)];
          if (value !== undefined) element.setAttribute(attribute, value);
        });
    });
    buttons.forEach((button) => {
      const active = button.dataset.language === language;
      button.setAttribute("aria-pressed", String(active));
      button.classList.toggle("bg-indigo", active);
      button.classList.toggle("text-white", active);
    });
    document
      .querySelector("#back-top")
      .setAttribute(
        "aria-label",
        language === "th" ? "กลับด้านบน" : "Back to top",
      );
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {}
  }
  let initial = "en";
  try {
    initial = localStorage.getItem("portfolio-language") === "th" ? "th" : "en";
  } catch {}
  buttons.forEach((button) =>
    button.addEventListener("click", () =>
      setLanguage(button.dataset.language),
    ),
  );
  setLanguage(initial);
}
