(() => {
  const toggle = document.getElementById("nav-toggle");
  const backdrop = document.getElementById("nav-backdrop");
  const menu = document.getElementById("site-menu");
  if (!toggle || !menu) {
    return;
  }

  const mq = window.matchMedia("(max-width: 760px)");

  const labelMap = {
    ja: { open: "メニューを開く", close: "メニューを閉じる" },
    en: { open: "Open menu", close: "Close menu" },
    zh: { open: "打开菜单", close: "关闭菜单" }
  };

  const langKey = () => {
    const lang = document.documentElement.lang || "ja";
    if (lang.startsWith("zh")) {
      return "zh";
    }
    if (lang.startsWith("en")) {
      return "en";
    }
    return "ja";
  };

  const setExpanded = (open) => {
    const labels = labelMap[langKey()];
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? labels.close : labels.open);
    document.body.classList.toggle("nav-open", open);
    if (backdrop) {
      backdrop.setAttribute("aria-hidden", String(!open));
      backdrop.classList.toggle("nav-backdrop--open", open);
    }
  };

  const close = () => setExpanded(false);

  toggle.addEventListener("click", () => {
    if (!mq.matches) {
      return;
    }
    setExpanded(!document.body.classList.contains("nav-open"));
  });

  backdrop?.addEventListener("click", close);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      close();
    }
  });

  mq.addEventListener("change", (event) => {
    if (!event.matches) {
      close();
    }
  });

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      requestAnimationFrame(() => {
        const open = document.body.classList.contains("nav-open");
        const labels = labelMap[langKey()];
        toggle.setAttribute("aria-label", open ? labels.close : labels.open);
      });
    });
  });

  menu.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", () => {
      if (mq.matches) {
        close();
      }
    });
  });

  const labels = labelMap[langKey()];
  toggle.setAttribute("aria-label", labels.open);
})();
