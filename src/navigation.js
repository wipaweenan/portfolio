export function initNavigation() {
  const panels = [...document.querySelectorAll("section[id]")];
  const links = [...document.querySelectorAll('a[href^="#"]')];
  function showPanel({ focus = false } = {}) {
    const requested = location.hash.slice(1);
    const id = panels.some((panel) => panel.id === requested)
      ? requested
      : "about";
    panels.forEach((panel) => {
      panel.hidden = panel.id !== id;
    });
    links
      .filter((link) => link.closest("nav"))
      .forEach((link) => {
        const active = link.hash === `#${id}`;
        link.classList.toggle("bg-indigo", active);
        link.classList.toggle("text-white", active);
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    const panel = document.getElementById(id);
    if (focus) {
      panel.scrollIntoView({ block: "start" });
      const heading = panel.querySelector("h2");
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
    document.dispatchEvent(new CustomEvent("panelchange", { detail: panel }));
  }
  links.forEach((link) =>
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      if (!panels.some((panel) => `#${panel.id}` === link.hash)) return;
      event.preventDefault();
      if (location.hash !== link.hash) history.pushState(null, "", link.hash);
      showPanel({ focus: true });
    }),
  );
  window.addEventListener("popstate", () => showPanel({ focus: true }));
  window.addEventListener("hashchange", () => showPanel({ focus: true }));
  showPanel();
}
