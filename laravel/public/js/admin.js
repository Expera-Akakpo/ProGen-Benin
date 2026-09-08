(function () {
  "use strict";

  const STORAGE_KEY = "pjb-admin-data";
  const SESSION_KEY = "pjb-admin-session";
  const credentials = { email: "admin@projeunebenin.org", password: "admin123" };
  const seed = {
    projects: [
      { title: "Aide scolaire 2026", status: "En cours", detail: "Fournitures et parrainage pour 1 500 enfants.", media: "" },
      { title: "Eau potable pour tous", status: "En cours", detail: "Construction de forages dans le Zou.", media: "" }
    ],
    news: [
      { title: "Lancement du projet a Abomey-Calavi", date: "12 janvier 2026", detail: "Un nouveau programme educatif pour 500 enfants.", media: "" },
      { title: "Journee de sensibilisation a la sante", date: "28 fevrier 2026", detail: "Depistages et ateliers d'hygiene a Cotonou.", media: "" }
    ],
    donations: [
      { name: "Awa D.", type: "Financier", amount: "25 000 FCFA", date: "15 mars 2026", status: "A traiter" },
      { name: "Anonyme", type: "En nature", amount: "Fournitures scolaires", date: "14 mars 2026", status: "Nouveau" }
    ],
    partners: [
      { name: "Fondation Horizon", url: "https://example.com", initials: "FH" },
      { name: "Eco Benin", url: "https://example.com", initials: "EB" }
    ],
    volunteers: [
      { name: "Koffi A.", role: "Communication", email: "koffi@example.com", status: "A contacter" },
      { name: "Rachidatou G.", role: "Terrain", email: "rachidatou@example.com", status: "Nouveau" }
    ]
  };

  let data = loadData();
  const login = document.getElementById("adminLogin");
  const app = document.getElementById("adminApp");
  const view = document.getElementById("adminView");

  function loadData() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || seed; } catch (error) { return seed; }
  }

  function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function isAdminRoute() {
    return new URLSearchParams(window.location.search).get("admin") === "true";
  }

  function showRestrictedAccess() {
    login.innerHTML = "<div class=\"admin-login-card text-center\"><div class=\"admin-mark mx-auto\"><i class=\"bi bi-shield-lock-fill\"></i></div><p class=\"section-eyebrow mb-2\">Acces reserve</p><h1>Administration</h1><p class=\"text-muted\">Cette page est reservee a l'administrateur.</p><a class=\"btn btn-navy w-100 mt-3\" href=\"admin.html?admin=true\">Ouvrir la connexion</a><a class=\"btn btn-outline-navy w-100 mt-2\" href=\"index.html\">Retour au site</a></div>";
  }

  function showApp() {
    login.classList.add("d-none");
    app.classList.remove("d-none");
    renderView("overview");
  }

  function renderView(name) {
    document.querySelectorAll("[data-admin-view]").forEach(function (button) {
      button.classList.toggle("active", button.getAttribute("data-admin-view") === name);
    });
    const renderers = { overview: renderOverview, projects: renderProjects, news: renderNews, donations: renderDonations, partners: renderPartners, volunteers: renderVolunteers };
    view.innerHTML = renderers[name]();
    bindViewActions(name);
  }

  function pageHeader(eyebrow, title, action) {
    return "<div class=\"admin-page-header\"><div><p class=\"section-eyebrow mb-1\">" + eyebrow + "</p><h1>" + title + "</h1></div>" + (action || "") + "</div>";
  }

  function renderOverview() {
    return pageHeader("Tableau de bord", "Bonjour, administrateur", "<span class=\"admin-date\"><i class=\"bi bi-calendar3 me-1\"></i>" + new Date().toLocaleDateString("fr-FR") + "</span>") +
      "<div class=\"row g-3 mb-4\"><div class=\"col-6 col-xl-3\"><div class=\"admin-stat\"><i class=\"bi bi-kanban\"></i><strong>" + data.projects.length + "</strong><span>Projets actifs</span></div></div><div class=\"col-6 col-xl-3\"><div class=\"admin-stat\"><i class=\"bi bi-newspaper\"></i><strong>" + data.news.length + "</strong><span>Actualites</span></div></div><div class=\"col-6 col-xl-3\"><div class=\"admin-stat\"><i class=\"bi bi-heart\"></i><strong>" + data.donations.length + "</strong><span>Dons recus</span></div></div><div class=\"col-6 col-xl-3\"><div class=\"admin-stat\"><i class=\"bi bi-people\"></i><strong>" + data.volunteers.length + "</strong><span>Benevoles</span></div></div></div>" +
      "<div class=\"row g-4\"><div class=\"col-lg-7\"><div class=\"admin-panel\"><div class=\"admin-panel-heading\"><h2>Dons recents</h2><button class=\"btn btn-sm btn-outline-navy\" data-jump=\"donations\">Tout voir</button></div>" + donationRows(3) + "</div></div><div class=\"col-lg-5\"><div class=\"admin-panel\"><div class=\"admin-panel-heading\"><h2>Actions rapides</h2></div><div class=\"quick-actions\"><button data-jump=\"projects\"><i class=\"bi bi-plus-circle\"></i>Ajouter un projet</button><button data-jump=\"news\"><i class=\"bi bi-pencil-square\"></i>Publier une actualite</button><button data-jump=\"partners\"><i class=\"bi bi-building-add\"></i>Ajouter un partenaire</button><button data-jump=\"volunteers\"><i class=\"bi bi-person-plus\"></i>Voir les candidatures</button></div></div></div></div>";
  }

  function renderProjects() {
    return pageHeader("Contenu", "Projets", "<button class=\"btn btn-navy\" data-open-form=\"projects\"><i class=\"bi bi-plus-lg me-1\"></i>Nouveau projet</button>") + collectionPanel(data.projects, ["title", "status", "detail", "media"], "projects");
  }

  function renderNews() {
    return pageHeader("Contenu", "Actualites", "<button class=\"btn btn-navy\" data-open-form=\"news\"><i class=\"bi bi-plus-lg me-1\"></i>Nouvelle actualite</button>") + collectionPanel(data.news, ["title", "date", "detail", "media"], "news");
  }

  function renderDonations() {
    return pageHeader("Suivi", "Dons recus", "<button class=\"btn btn-outline-navy\" data-export=\"donations\"><i class=\"bi bi-download me-1\"></i>Exporter</button>") + "<div class=\"admin-panel\"><div class=\"table-responsive\"><table class=\"table align-middle admin-table\"><thead><tr><th>Donateur</th><th>Type</th><th>Don</th><th>Date</th><th>Statut</th></tr></thead><tbody>" + data.donations.map(function (item) { return "<tr><td>" + item.name + "</td><td>" + item.type + "</td><td>" + item.amount + "</td><td>" + item.date + "</td><td><span class=\"admin-status\">" + item.status + "</span></td></tr>"; }).join("") + "</tbody></table></div></div>";
  }

  function renderPartners() {
    return pageHeader("Reseau", "Partenaires", "<button class=\"btn btn-navy\" data-open-form=\"partners\"><i class=\"bi bi-plus-lg me-1\"></i>Nouveau partenaire</button>") + collectionPanel(data.partners, ["name", "url", "initials"], "partners");
  }

  function renderVolunteers() {
    return pageHeader("Equipe", "Benevoles", "<span class=\"admin-date\">" + data.volunteers.length + " candidatures</span>") + collectionPanel(data.volunteers, ["name", "role", "email", "status"], "volunteers");
  }

  function collectionPanel(items, fields, type) {
    return "<div class=\"admin-panel\"><div class=\"table-responsive\"><table class=\"table align-middle admin-table\"><thead><tr>" + fields.map(function (field) { return "<th>" + field + "</th>"; }).join("") + "<th></th></tr></thead><tbody>" + items.map(function (item, index) { return "<tr>" + fields.map(function (field) { var value = field === "media" ? (item[field] ? "Oui" : "Aucun") : item[field]; return "<td>" + (field === "url" ? "<a href=\"" + item[field] + "\" target=\"_blank\" rel=\"noopener\">Visiter</a>" : value) + "</td>"; }).join("") + "<td class=\"text-end text-nowrap\"><button class=\"btn btn-sm btn-outline-navy me-1\" data-edit=\"" + type + "\" data-index=\"" + index + "\" title=\"Modifier\"><i class=\"bi bi-pencil\"></i></button><button class=\"btn btn-sm btn-outline-danger\" data-delete=\"" + type + "\" data-index=\"" + index + "\" title=\"Supprimer\"><i class=\"bi bi-trash\"></i></button></td></tr>"; }).join("") + "</tbody></table></div></div>";
  }

  function donationRows(limit) {
    return data.donations.slice(0, limit).map(function (item) { return "<div class=\"admin-list-row\"><span class=\"admin-avatar\"><i class=\"bi bi-heart-fill\"></i></span><span><strong>" + item.name + "</strong><small>" + item.type + " · " + item.date + "</small></span><b>" + item.amount + "</b></div>"; }).join("");
  }

  function bindViewActions(name) {
    document.querySelectorAll("[data-admin-view]").forEach(function (button) { button.onclick = function () { renderView(button.getAttribute("data-admin-view")); }; });
    document.querySelectorAll("[data-jump]").forEach(function (button) { button.onclick = function () { renderView(button.getAttribute("data-jump")); }; });
    document.querySelectorAll("[data-delete]").forEach(function (button) { button.onclick = function () { data[button.getAttribute("data-delete")].splice(Number(button.getAttribute("data-index")), 1); saveData(); renderView(name); }; });
    document.querySelectorAll("[data-edit]").forEach(function (button) { button.onclick = function () { openForm(button.getAttribute("data-edit"), Number(button.getAttribute("data-index"))); }; });
    document.querySelectorAll("[data-open-form]").forEach(function (button) { button.onclick = function () { openForm(button.getAttribute("data-open-form"), -1); }; });
    document.querySelectorAll("[data-export]").forEach(function (button) { button.onclick = function () { downloadJson(data.donations, "dons-progen.json"); }; });
  }

  function openForm(type, index) {
    const config = { projects: ["title", "status", "media", "detail"], news: ["title", "date", "media", "detail"], partners: ["name", "url", "initials"] }[type];
    const labels = { title: "Titre", status: "Statut", detail: "Description enrichie", date: "Date", name: "Nom", url: "Site officiel", initials: "Initiales", media: "Fichier multimédia" };
    const existing = index >= 0 ? data[type][index] : {};
    const form = document.createElement("div");
    form.className = "admin-modal-backdrop";
    form.innerHTML = "<div class=\"admin-modal admin-editor-modal\"><button class=\"admin-modal-close\" aria-label=\"Fermer\">&times;</button><h2>" + (index >= 0 ? "Modifier" : "Ajouter") + "</h2><form id=\"contentCreateForm\">" + config.map(function (field) { if (field === "detail") return richEditor(labels[field], existing[field] || ""); if (field === "media") return "<label class=\"form-label mt-2\" for=\"field-media\">" + labels[field] + "</label><input class=\"form-control\" id=\"field-media\" name=\"media\" type=\"file\" accept=\"image/*,video/*,audio/*\"><small class=\"text-muted\">" + (existing.media ? "Un fichier est deja enregistre." : "Image, video ou audio.") + "</small>"; return "<label class=\"form-label mt-2\" for=\"field-" + field + "\">" + labels[field] + "</label><input class=\"form-control\" id=\"field-" + field + "\" name=\"" + field + "\" value=\"" + (existing[field] || "") + "\" required />"; }).join("") + "<button class=\"btn btn-navy w-100 mt-4\" type=\"submit\">Enregistrer</button></form></div>";
    document.body.appendChild(form);
    form.querySelector(".admin-modal-close").onclick = function () { form.remove(); };
    form.querySelectorAll("[data-command]").forEach(function (control) { control.addEventListener("change", runEditorCommand); control.addEventListener("click", runEditorCommand); });
    form.querySelector("[data-insert-link]").addEventListener("click", function () { const url = window.prompt("Adresse du lien"); if (url) document.execCommand("createLink", false, url); });
    form.querySelector("[data-insert-image]").addEventListener("click", function () { const url = window.prompt("Adresse de l'image"); if (url) document.execCommand("insertImage", false, url); });
    form.querySelector("form").onsubmit = function (event) { event.preventDefault(); const item = index >= 0 ? data[type][index] : {}; config.forEach(function (field) { if (field === "detail") item[field] = form.querySelector("[data-editor]").innerHTML; else if (field !== "media") item[field] = form.querySelector("[name=" + field + "]").value; }); const mediaInput = form.querySelector("[name=media]"); const file = mediaInput ? mediaInput.files[0] : null; if (file) { const reader = new FileReader(); reader.onload = function () { item.media = reader.result; finishSave(); }; reader.readAsDataURL(file); } else { finishSave(); } function finishSave() { if (index < 0) data[type].push(item); saveData(); form.remove(); renderView(type); } };
  }

  function runEditorCommand(event) {
    const command = event.currentTarget.getAttribute("data-command");
    const value = event.currentTarget.value || null;
    document.execCommand(command, false, value);
    const editor = document.querySelector("[data-editor]");
    if (editor) editor.focus();
  }

  function richEditor(label, value) {
    return "<label class=\"form-label mt-2\">" + label + "</label><div class=\"editor-toolbar\"><select data-command=\"formatBlock\"><option value=\"p\">Paragraphe</option><option value=\"h2\">Titre 2</option><option value=\"h3\">Titre 3</option><option value=\"blockquote\">Citation</option></select><select data-command=\"fontName\"><option value=\"Poppins\">Poppins</option><option value=\"Georgia\">Georgia</option><option value=\"Arial\">Arial</option></select><button type=\"button\" data-command=\"bold\"><b>G</b></button><button type=\"button\" data-command=\"italic\"><i>I</i></button><button type=\"button\" data-command=\"underline\"><u>S</u></button><button type=\"button\" data-command=\"justifyLeft\"><i class=\"bi bi-text-left\"></i></button><button type=\"button\" data-command=\"justifyCenter\"><i class=\"bi bi-text-center\"></i></button><button type=\"button\" data-command=\"justifyRight\"><i class=\"bi bi-text-right\"></i></button><button type=\"button\" data-command=\"insertUnorderedList\"><i class=\"bi bi-list-ul\"></i></button><button type=\"button\" data-insert-link=\"true\"><i class=\"bi bi-link-45deg\"></i></button><button type=\"button\" data-insert-image=\"true\"><i class=\"bi bi-image\"></i></button></div><div class=\"rich-editor\" data-editor contenteditable=\"true\" role=\"textbox\" aria-label=\"" + label + "\">" + value + "</div><small class=\"text-muted\">Utilisez la barre d’outils pour mettre en forme le texte, inserer des liens et ajouter une image par URL.</small>";
  }

  function downloadJson(items, filename) {
    const blob = new Blob([JSON.stringify(items, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a"); link.href = url; link.download = filename; link.click(); URL.revokeObjectURL(url);
  }

  document.getElementById("adminLoginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("adminEmail").value.trim();
    const password = document.getElementById("adminPassword").value;
    if (email === credentials.email && password === credentials.password) { localStorage.setItem(SESSION_KEY, "connected"); showApp(); } else { document.getElementById("loginError").classList.remove("d-none"); }
  });
  document.getElementById("adminLogout").addEventListener("click", function () { localStorage.removeItem(SESSION_KEY); window.location.reload(); });

  if (!isAdminRoute()) showRestrictedAccess();
  if (isAdminRoute() && localStorage.getItem(SESSION_KEY) === "connected") showApp();
})();
