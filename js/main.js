(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const saved = localStorage.getItem("ritika-portfolio-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  function setTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === "dark";
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        dark ? "Switch to light mode" : "Switch to dark mode",
      );
      toggle.setAttribute(
        "title",
        dark ? "Switch to light mode" : "Switch to dark mode",
      );
      const icon = toggle.querySelector("span");
      if (icon) icon.textContent = dark ? "☀︎" : "☾";
    }
  }

  setTheme(saved || (systemDark ? "dark" : "light"));

  toggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("ritika-portfolio-theme", next);
    setTheme(next);
  });

  const photo = document.querySelector(".profile-photo");
  if (photo) {
    photo.addEventListener("error", () => photo.classList.add("is-missing"));
    if (photo.complete && photo.naturalWidth === 0)
      photo.classList.add("is-missing");
  }

  document.querySelectorAll(".mobile-nav-links a").forEach((link) => {
    link.addEventListener("click", () =>
      link.closest("details")?.removeAttribute("open"),
    );
  });
})();
