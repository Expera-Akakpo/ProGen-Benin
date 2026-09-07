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
    initFinancialDonation();
    initInKindDonation();
    initDetailPage();
    initFloatingDonation();
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

  function initFinancialDonation() {
    const anonymousCheckbox = document.getElementById("anonymousDonation");
    const donorName = document.getElementById("donorName");
    if (!anonymousCheckbox || !donorName) return;

    function updateDonorIdentity() {
      donorName.required = !anonymousCheckbox.checked;
      donorName.disabled = anonymousCheckbox.checked;
      if (anonymousCheckbox.checked) donorName.value = "";
    }

    anonymousCheckbox.addEventListener("change", updateDonorIdentity);
    updateDonorIdentity();
  }

  function initInKindDonation() {
    const form = document.getElementById("inKindDonationForm");
    if (!form) return;

    const type = document.getElementById("inKindType");
    const otherGroup = document.getElementById("otherDonationGroup");
    const otherInput = document.getElementById("otherDonation");
    const contactChoices = document.getElementById("contactChoices");
    const contactLinks = document.getElementById("contactLinks");
    const name = document.getElementById("inKindName");
    const phone = document.getElementById("inKindPhone");

    function refreshContactOptions() {
      const donation = type.value === "Autre" ? otherInput.value.trim() : type.value;
      otherGroup.classList.toggle("d-none", type.value !== "Autre");
      contactChoices.classList.remove("d-none");
    }

    [type, otherInput, name, phone].forEach(function (field) {
      field.addEventListener("input", refreshContactOptions);
      field.addEventListener("change", refreshContactOptions);
    });

    form.querySelectorAll(".contact-choice").forEach(function (button) {
      button.addEventListener("click", function () {
        const donation = (type.value === "Autre" ? otherInput.value.trim() : type.value) || "un don en nature";
        const donorName = name.value.trim() || "non renseigné";
        const donorPhone = phone.value.trim() || "non renseigné";
        const message = "Bonjour, je souhaite proposer " + donation + ". Nom : " + donorName + ". Téléphone : " + donorPhone + ".";
        const encoded = encodeURIComponent(message);
        const contact = button.getAttribute("data-contact");
        let href = "";
        let label = "";
        if (contact === "email") { href = "mailto:dons@projeunebenin.org?subject=Don%20en%20nature&body=" + encoded; label = "Envoyer par e-mail"; }
        if (contact === "whatsapp") { href = "https://wa.me/22901000000000?text=" + encoded; label = "Ouvrir WhatsApp"; }
        if (contact === "phone") { href = "tel:+22901000000000"; label = "Appeler"; }
        contactLinks.innerHTML = "<a class=\"btn btn-accent\" target=\"_blank\" rel=\"noopener\" href=\"" + href + "\"><i class=\"bi bi-send me-1\"></i>" + label + "</a>";
      });
    });
  }

  function initFloatingDonation() {
    if (document.querySelector(".floating-donation")) return;
    const link = document.createElement("a");
    link.className = "floating-donation";
    link.href = "support.html#don";
    link.setAttribute("aria-label", "Faire un don");
    link.title = "Faire un don";
    link.innerHTML = "<i class=\"bi bi-heart-fill\" aria-hidden=\"true\"></i>";
    document.body.appendChild(link);
  }

  function initDetailPage() {
    const title = document.querySelector("[data-detail-title]");
    if (!title) return;

    const params = new URLSearchParams(window.location.search);
    const type = params.get("type") === "news" ? "news" : "project";
    const id = params.get("id") || "school";
    const items = {
      project: {
        school: { label: "Projet", date: "En cours", title: "Aide scolaire 2026", intro: "Distribution de fournitures et parrainage scolaire pour 1 500 enfants.", content: "Ce programme accompagne les enfants des communautés vulnérables avec des fournitures, un suivi scolaire et un accompagnement des familles. Les équipes locales travaillent avec les écoles pour favoriser une scolarité régulière et durable.", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80" },
        water: { label: "Projet", date: "En cours", title: "Eau potable pour tous", intro: "Construction de forages dans les villages du département du Zou.", content: "Le projet améliore l'accès à une eau potable proche des lieux de vie. Il associe la construction de forages, la sensibilisation à l'hygiène et l'organisation locale pour assurer la pérennité des installations.", image: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?auto=format&fit=crop&w=1000&q=80" },
        women: { label: "Projet", date: "En cours", title: "Autonomisation des femmes", intro: "Formation professionnelle et microcrédit pour 200 femmes.", content: "Les participantes bénéficient de formations pratiques, d'un accompagnement entrepreneurial et d'un accès progressif au financement afin de développer une activité génératrice de revenus.", image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1000&q=80" },
        library: { label: "Projet réalisé", date: "Terminé", title: "Bibliothèque communautaire", intro: "Ouverture d'un espace de lecture à Abomey-Calavi.", content: "Cet espace met à disposition des livres et un lieu calme pour apprendre, lire et organiser des activités éducatives avec les enfants et les jeunes du quartier.", image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1000&q=80" },
        health: { label: "Projet réalisé", date: "Terminé", title: "Campagne de santé communautaire", intro: "Dépistages et vaccinations pour 3 000 personnes.", content: "Avec les acteurs de santé locaux, cette campagne a rapproché les dépistages, la prévention et la vaccination des familles qui en avaient le plus besoin.", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80" },
        gardens: { label: "Projet réalisé", date: "Terminé", title: "Jardins maraîchers solidaires", intro: "Création de jardins pour renforcer la sécurité alimentaire.", content: "Les jardins solidaires renforcent la production locale, les revenus des familles et l'accès à une alimentation diversifiée grâce à un accompagnement de proximité.", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80" }
      },
      news: {
        launch: { label: "Actualité", date: "12 janvier 2026", title: "Lancement du projet à Abomey-Calavi", intro: "Un nouveau programme éducatif pour 500 enfants a été inauguré ce mois-ci.", content: "La cérémonie de lancement a réuni les familles, les équipes éducatives et les partenaires locaux. Le programme prévoit la distribution de fournitures et un accompagnement scolaire régulier pour 500 enfants.", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80" },
        "health-day": { label: "Actualité", date: "28 février 2026", title: "Journée de sensibilisation à la santé", intro: "Dépistages gratuits et ateliers d'hygiène organisés dans trois quartiers de Cotonou.", content: "Les équipes et les professionnels partenaires ont accueilli les habitants pour des dépistages, des conseils de prévention et des ateliers pratiques autour de l'hygiène au quotidien.", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80" },
        kits: { label: "Actualité", date: "15 mars 2026", title: "Distribution de kits scolaires", intro: "Plus de 1 200 kits distribués aux élèves des zones rurales du département du Zou.", content: "Cette distribution a permis aux élèves de commencer leur année avec les fournitures essentielles. Elle a été menée avec les établissements et les relais communautaires des zones rurales.", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80" }
      }
    };
    const current = items[type][id] || items.project.school;
    document.title = current.title + " – Pro Jeune Bénin";
    document.querySelector("[data-detail-label]").textContent = current.label;
    document.querySelector("[data-detail-date]").textContent = current.date;
    title.textContent = current.title;
    document.querySelector("[data-detail-intro]").textContent = current.intro;
    document.querySelector("[data-detail-content]").innerHTML = "<p>" + current.content + "</p>";
    const image = document.querySelector("[data-detail-image]");
    image.src = current.image;
    image.alt = current.title;
    const back = document.querySelector("[data-detail-back]");
    back.href = type === "news" ? "news.html" : "projects.html";
    back.textContent = type === "news" ? "← Retour aux actualités" : "← Retour aux projets";
    document.querySelector("[data-detail-list-link]").href = type === "news" ? "news.html" : "projects.html";

    const related = Object.keys(items.project).concat(Object.keys(items.news)).filter(function (key) { return key !== id; }).slice(0, 3);
    const relatedItems = document.querySelector("[data-related-items]");
    relatedItems.innerHTML = related.map(function (key) {
      const relatedType = items.project[key] ? "project" : "news";
      const item = items[relatedType][key];
      return "<div class=\"col-md-6 col-lg-4\"><article class=\"card h-100\"><img src=\"" + item.image + "\" class=\"card-img-cover\" alt=\"" + item.title + "\"><div class=\"card-body p-4\"><small class=\"text-accent fw-semibold\">" + item.date + "</small><h5 class=\"mt-1\">" + item.title + "</h5><p class=\"text-muted small\">" + item.intro + "</p><a href=\"detail.html?type=" + relatedType + "&id=" + key + "\" class=\"btn btn-outline-navy btn-sm\">Lire le détail</a></div></article></div>";
    }).join("");
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
