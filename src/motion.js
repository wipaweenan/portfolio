export function initMotion() {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const seen = new WeakSet();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (
          !isIntersecting ||
          target.closest("section").hidden ||
          seen.has(target)
        )
          return;
        if (!reduced.matches)
          target.animate(
            [
              { opacity: 0.35, transform: "translateY(24px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 650, easing: "cubic-bezier(.16,1,.3,1)" },
          );
        seen.add(target);
        observer.unobserve(target);
      });
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll("[data-story]")
    .forEach((item) => observer.observe(item));
  document.addEventListener("panelchange", ({ detail: panel }) => {
    if (!reduced.matches)
      panel.animate([{ opacity: 0.4 }, { opacity: 1 }], { duration: 250 });
  });
  const button = document.querySelector("#back-top");
  const update = () => {
    button.hidden = scrollY < 350;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reduced.matches ? "instant" : "smooth",
    });
    document
      .querySelector('nav a[aria-current="page"]')
      ?.focus({ preventScroll: true });
  });
}
