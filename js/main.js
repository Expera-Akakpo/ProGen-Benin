/* ============================================================
   Pro Jeune Bénin – JavaScript natif (vanilla)
   - Changement de langue FR / EN (attributs data-fr / data-en)
   - Compteurs animés (statistiques d'impact)
   - Onglets de montant de don
   Aucune dépendance autre que Bootstrap (menu mobile géré par BS).
   ============================================================ */

(function () {
  "use strict";

  /* -------- 1. Changement de langue -------- */
  const STORAGE_KEY = "pjb-lang";

  function applyLanguage(lang) {
    // Texte : éléments avec data-fr / data-en
    document.querySelectorAll("[data-fr]").forEach(function (el) {
      const value = el.getAttribute("data-" + lang);
      if (value !== null) el.innerHTML = value;
    });
    // Placeholders : data-fr-ph / data-en-ph
    document.querySelectorAll("[data-fr-ph]").forEach(function (el) {
      const value = el.getAttribute("data-" + lang + "-ph");
      if (value !== null) el.setAttribute("placeholder", value);
    });
    // Attribut lang du document
    document.documentElement.setAttribute("lang", lang);
    // Libellé du bouton (affiche la langue vers laquelle on bascule)
    document.querySelectorAll(".lang-switch").forEach(function (btn) {
      btn.textContent = lang === "fr" ? "EN" : "FR";
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function getSavedLanguage() {
    try { return localStorage.getItem(STORAGE_KEY) || "fr"; } catch (e) { return "fr"; }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(getSavedLanguage());

    document.querySelectorAll(".lang-switch").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const current = getSavedLanguage();
        applyLanguage(current === "fr" ? "en" : "fr");
      });
    });

    initCounters();
    initDonationTabs();
    highlightActiveNav();
  });

  /* -------- 2. Compteurs animés -------- */
  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    const animate = function (el) {
      const target = parseInt(el.getAttribute("data-count"), 10);
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1600;
      const start = performance.now();
      const step = function (now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString("fr-FR") + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animate(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (c) { obs.observe(c); });
    } else {
      counters.forEach(animate);
    }
  }

  /* -------- 3. Onglets / boutons de montant de don -------- */
  function initDonationTabs() {
    const amountBtns = document.querySelectorAll(".donation-amount-btn");
    const customInput = document.getElementById("customAmount");
    if (!amountBtns.length) return;

    amountBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        amountBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        if (customInput) customInput.value = btn.getAttribute("data-amount") || "";
      });
    });

    if (customInput) {
      customInput.addEventListener("input", function () {
        amountBtns.forEach(function (b) { b.classList.remove("active"); });
      });
    }
  }

  /* -------- 4. Lien de navigation actif -------- */
  function highlightActiveNav() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar .nav-link").forEach(function (link) {
      const href = link.getAttribute("href");
      if (href === path) link.classList.add("active");
    });
  }
})();
