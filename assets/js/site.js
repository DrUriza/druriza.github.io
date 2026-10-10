(function () {
  "use strict";

  const stages = [
    { code: "VR1", title: "OBSERVE", status: "C1–C8 Implemented", description: "Transforms heterogeneous financial data into structured, synchronized and reproducible observations.", note: "Live acquisition requires provider access; C9 remains in development." },
    { code: "VR2", title: "STRUCTURE", status: "Conventional implemented", description: "Produces structural states and representations from versioned VR1 observations.", note: "Geometric and Topological remain research / expansion branches." },
    { code: "VR3", title: "PREDICT", status: "Predictive component architecture", description: "Organizes deterministic modeling, temporal validation, calibration, uncertainty and versioned predictive outputs.", note: "Prediction ≠ Execution Authorization; component evidence is distinct from deployment." },
    { code: "VR4", title: "DECIDE & EXECUTE", status: "Component architecture / gated modes", description: "Owns decision policy, risk controls, order lifecycle, reconciliation and execution authorization.", note: "SIMULATION, PAPER and gated LIVE are modes; no real-capital deployment is claimed." },
    { code: "VR5", title: "INTELLIGENCE & ORCHESTRATION", status: "In development", description: "Interacts, explains and coordinates across VR1–VR4 under human supervision.", note: "LLM ≠ Trading Authority. VR4 retains execution authority." }
  ];

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".site-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.classList.contains("open")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 1051px)").addEventListener("change", function (event) {
      if (event.matches) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
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
