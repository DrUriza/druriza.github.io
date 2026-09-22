(function () {
  "use strict";

  const stages = [
    { code: "VR1", title: "OBSERVE", status: "Operational", description: "Transforms heterogeneous financial data into structured, synchronized, and reproducible observations.", note: "Current operational foundation." },
    { code: "VR2", title: "STRUCTURE", status: "Research", description: "Investigates the geometry, topology, and mathematical structure of the observations produced by VR1.", note: "Research stage; not presented as implemented." },
    { code: "VR3", title: "PREDICT", status: "Planned", description: "Will develop and evaluate predictive models with temporal validation, uncertainty estimation, and leakage control.", note: "Planned predictive layer; not currently operational." },
    { code: "VR4", title: "DECIDE & EXECUTE", status: "Long-term planned", description: "Will convert validated predictions into decisions and autonomous execution under risk management, supervision, traceability, and a kill switch.", note: "Long-term autonomous trading and execution layer; not currently operational." }
  ];

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".site-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const panel = document.querySelector("#stage-panel");
  if (panel) {
    document.querySelectorAll(".stage-button").forEach(function (button) {
      button.addEventListener("click", function () {
        const stage = stages[Number(button.dataset.stage)];
        if (!stage) return;
        document.querySelectorAll(".stage-button").forEach(function (item) {
          const selected = item === button;
          item.classList.toggle("active", selected);
          item.setAttribute("aria-selected", String(selected));
        });
        panel.setAttribute("aria-labelledby", button.id);
        panel.querySelector(".stage-visual span").textContent = stage.code;
        panel.querySelector("[data-stage-status]").textContent = stage.status;
        panel.querySelector("h3").textContent = stage.title;
        panel.querySelector("[data-stage-description]").textContent = stage.description;
        panel.querySelector("[data-stage-note]").textContent = stage.note;
      });
    });
  }

  const preview = document.querySelector("#hmi-preview");
  if (preview) {
    const title = preview.querySelector("#hmi-preview-title");
    const status = preview.querySelector("#hmi-preview-status");
    const copy = preview.querySelector("#hmi-preview-copy");
    const close = preview.querySelector(".preview-close");
    document.querySelectorAll(".hmi-preview-trigger").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        title.textContent = trigger.dataset.previewTitle;
        status.textContent = trigger.dataset.previewStatus;
        status.className = "status " + (trigger.classList.contains("planned-card") ? "planned" : "operational");
        copy.textContent = trigger.dataset.previewCopy;
        preview.showModal();
      });
    });
    close.addEventListener("click", function () { preview.close(); });
    preview.addEventListener("click", function (event) {
      if (event.target === preview) preview.close();
    });
  }

  const lightbox = document.querySelector("#image-lightbox");
  if (lightbox) {
    const lightboxImage = lightbox.querySelector("img");
    const lightboxClose = lightbox.querySelector(".preview-close");
    document.querySelectorAll(".gallery-open").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        lightboxImage.src = trigger.dataset.full;
        lightboxImage.alt = trigger.dataset.alt;
        lightbox.showModal();
      });
    });
    lightboxClose.addEventListener("click", function () { lightbox.close(); });
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) lightbox.close();
    });
  }
}());
