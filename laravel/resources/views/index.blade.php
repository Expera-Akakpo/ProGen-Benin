<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title data-fr="Pro Gen Bénin – Accueil" data-en="Pro Gen Bénin – Home">Pro Gen Bénin – Accueil</title>
  <meta name="description"
    data-fr="Pro Gen Bénin œuvre pour l'éducation, la santé et l'autonomisation des communautés au Bénin."
    data-en="Pro Gen Bénin works for education, health and community empowerment in Benin."
    content="Pro Gen Bénin œuvre pour l'éducation, la santé et l'autonomisation des communautés au Bénin." />

  <!-- Bootstrap 5 (CDN) -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <!-- Bootstrap Icons (CDN) -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet" />
  <!-- Google Fonts : Poppins -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <!-- Styles personnalisés -->
  <link href="css/style.css" rel="stylesheet" />
</head>
<body>

  <!-- ============================================================
       ============================================================ -->
@include('nav');

  <!-- ============================================================
       1. SECTION HÉROS
       ============================================================ -->
  <header class="hero">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-9">
          <h1 class="display-4 fw-bold text-balance mb-3"
            data-fr="Agir pour un Bénin plus solidaire et durable"
            data-en="Acting for a more united and sustainable Benin">
            Agir pour un Bénin plus solidaire et durable
          </h1>
          <p class="lead mb-4 text-pretty"
            data-fr="Pro Gen Bénin œuvre pour l'éducation, la santé et l'autonomisation des communautés."
            data-en="Pro Gen Bénin works for education, health and the empowerment of communities.">
            Pro Gen Bénin œuvre pour l'éducation, la santé et l'autonomisation des communautés.
          </p>
          <div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a href="projects.html" class="btn btn-accent btn-lg px-4"
              data-fr="Découvrir nos actions" data-en="Discover our work">Découvrir nos actions</a>
            <a href="support.html" class="btn btn-outline-light btn-lg px-4"
              data-fr="Nous soutenir" data-en="Support us">Nous soutenir</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Bannière d'alerte d'urgence -->
  <div class="emergency-banner py-2">
    <div class="container d-flex flex-wrap align-items-center justify-content-center gap-2 text-center">
      <i class="bi bi-megaphone-fill"></i>
      <span data-fr="Campagne actuelle : Aide scolaire 2026" data-en="Current campaign: School support 2026">
        Campagne actuelle : Aide scolaire 2026
      </span>
      <a href="support.html#don" class="btn btn-light btn-sm fw-semibold ms-2"
        data-fr="Contribuer" data-en="Contribute">Contribuer</a>
    </div>
  </div>

  <!-- ============================================================
       Aperçu de l'ONG
       ============================================================ -->
  <section class="py-5">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
            class="img-fluid rounded shadow-sm"
            alt="Enfants béninois en classe soutenus par Pro Gen Bénin" />
        </div>
        <div class="col-lg-6">
          <span class="section-eyebrow" data-fr="Qui sommes-nous" data-en="Who we are">Qui sommes-nous</span>
          <h2 class="mt-2 mb-3" data-fr="Une Gensse actrice de son avenir"
            data-en="Youth as agents of their own future">Une Gensse actrice de son avenir</h2>
          <p class="text-muted"
            data-fr="Depuis notre création, Pro Gen Bénin accompagne les enfants, les Gens et les femmes des communautés vulnérables à travers des programmes concrets d'éducation, de santé et de développement local."
            data-en="Since our founding, Pro Gen Bénin has supported children, youth and women from vulnerable communities through concrete programs in education, health and local development.">
            Depuis notre création, Pro Gen Bénin accompagne les enfants, les Gens et les femmes des communautés vulnérables à travers des programmes concrets d'éducation, de santé et de développement local.
          </p>
          <a href="about.html" class="btn btn-outline-navy mt-2"
            data-fr="En savoir plus" data-en="Learn more">En savoir plus</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       2. NOS 3 AXES D'INTERVENTION
       ============================================================ -->
  <section class="py-5 bg-light-soft">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-eyebrow" data-fr="Nos actions" data-en="Our work">Nos actions</span>
        <h2 class="mt-2" data-fr="Nos 3 axes d'intervention" data-en="Our 3 areas of intervention">Nos 3 axes d'intervention</h2>
      </div>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80"
              class="card-img-cover" alt="Salle de classe et livres" />
            <div class="card-body p-4">
              <div class="icon-badge mb-3"><i class="bi bi-book"></i></div>
              <h5 data-fr="Éducation" data-en="Education">Éducation</h5>
              <p class="text-muted mb-0"
                data-fr="Scolarisation, alphabétisation et soutien aux enfants pour un accès équitable au savoir."
                data-en="Schooling, literacy and support for children for fair access to knowledge.">
                Scolarisation, alphabétisation et soutien aux enfants pour un accès équitable au savoir.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=700&q=80"
              class="card-img-cover" alt="Accès à l'eau potable et à la santé" />
            <div class="card-body p-4">
              <div class="icon-badge mb-3"><i class="bi bi-droplet-half"></i></div>
              <h5 data-fr="Santé &amp; Eau" data-en="Health &amp; Water">Santé &amp; Eau</h5>
              <p class="text-muted mb-0"
                data-fr="Forages, sensibilisation et campagnes de santé pour des communautés en meilleure santé."
                data-en="Boreholes, awareness and health campaigns for healthier communities.">
                Forages, sensibilisation et campagnes de santé pour des communautés en meilleure santé.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <img src="https://images.unsplash.com/photo-1595974482597-4c9c6e0d4c9e?auto=format&fit=crop&w=700&q=80"
              class="card-img-cover" alt="Agriculture et autonomisation des femmes" />
            <div class="card-body p-4">
              <div class="icon-badge mb-3"><i class="bi bi-tree"></i></div>
              <h5 data-fr="Développement &amp; Agriculture" data-en="Development &amp; Agriculture">Développement &amp; Agriculture</h5>
              <p class="text-muted mb-0"
                data-fr="Autonomisation des femmes et des Gens par des activités génératrices de revenus."
                data-en="Empowering women and youth through income-generating activities.">
                Autonomisation des femmes et des Gens par des activités génératrices de revenus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-5">
        <a href="projects.html" class="btn btn-navy px-4"
          data-fr="Voir tous nos projets" data-en="See all our projects">Voir tous nos projets</a>
      </div>
    </div>
  </section>

  <!-- ============================================================
       3. NOS RÉSULTATS CHIFFRÉS
       ============================================================ -->
  <section class="stats-section py-5">
    <div class="container">
      <div class="row text-center g-4">
        <div class="col-6 col-lg-3">
          <div class="stat-number" data-count="25000" data-suffix="+">0</div>
          <div class="stat-label mt-2" data-fr="Bénéficiaires" data-en="Beneficiaries">Bénéficiaires</div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="stat-number" data-count="12" data-suffix="+">0</div>
          <div class="stat-label mt-2" data-fr="Projets réalisés" data-en="Completed projects">Projets réalisés</div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="stat-number" data-count="8" data-suffix="">0</div>
          <div class="stat-label mt-2" data-fr="Départements touchés" data-en="Departments reached">Départements touchés</div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="stat-number" data-count="50" data-suffix="+">0</div>
          <div class="stat-label mt-2" data-fr="Bénévoles actifs" data-en="Active volunteers">Bénévoles actifs</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       4. TÉMOIGNAGES / HISTOIRES
       ============================================================ -->
  <section class="py-5">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-eyebrow" data-fr="Ils témoignent" data-en="Their stories">Ils témoignent</span>
        <h2 class="mt-2" data-fr="Des vies transformées" data-en="Lives transformed">Des vies transformées</h2>
      </div>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 p-4">
            <p class="testimonial-quote"
              data-fr="&laquo; Grâce à Progen, j'ai pu retourner à l'école et je rêve aujourd'hui de devenir infirmière. &raquo;"
              data-en="&ldquo;Thanks to Progen, I was able to go back to school and today I dream of becoming a nurse.&rdquo;">
              &laquo; Grâce à Progen, j'ai pu retourner à l'école et je rêve aujourd'hui de devenir infirmière. &raquo;
            </p>
            <div class="d-flex align-items-center gap-3 mt-3">
              <img class="testimonial-avatar"
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80"
                alt="Portrait d'une bénéficiaire" />
              <div>
                <div class="fw-semibold">Awa D.</div>
                <small class="text-muted" data-fr="Élève, Abomey-Calavi" data-en="Student, Abomey-Calavi">Élève, Abomey-Calavi</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 p-4">
            <p class="testimonial-quote"
              data-fr="&laquo; Le forage du village a changé notre quotidien : de l'eau potable pour tous les enfants. &raquo;"
              data-en="&ldquo;The village borehole changed our daily life: clean water for all the children.&rdquo;">
              &laquo; Le forage du village a changé notre quotidien : de l'eau potable pour tous les enfants. &raquo;
            </p>
            <div class="d-flex align-items-center gap-3 mt-3">
              <img class="testimonial-avatar"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="Portrait d'une mère de famille" />
              <div>
                <div class="fw-semibold">Rachidatou G.</div>
                <small class="text-muted" data-fr="Mère de famille, Zou" data-en="Mother, Zou region">Mère de famille, Zou</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 p-4">
            <p class="testimonial-quote"
              data-fr="&laquo; La formation en couture m'a permis d'ouvrir mon atelier et d'employer trois Gens. &raquo;"
              data-en="&ldquo;The sewing training allowed me to open my workshop and employ three young people.&rdquo;">
              &laquo; La formation en couture m'a permis d'ouvrir mon atelier et d'employer trois Gens. &raquo;
            </p>
            <div class="d-flex align-items-center gap-3 mt-3">
              <img class="testimonial-avatar"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                alt="Portrait d'un Gen entrepreneur" />
              <div>
                <div class="fw-semibold">Koffi A.</div>
                <small class="text-muted" data-fr="Artisan, Cotonou" data-en="Craftsman, Cotonou">Artisan, Cotonou</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       5. ACTUALITÉS RÉCENTES
       ============================================================ -->
  <section id="actualites" class="py-5 bg-light-soft">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-eyebrow" data-fr="Actualités" data-en="News">Actualités</span>
        <h2 class="mt-2" data-fr="Nos activités récentes" data-en="Our recent activities">Nos activités récentes</h2>
      </div>
      <div class="row g-4">
        <div class="col-md-4">
          <article class="card h-100 news-card">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80"
              class="card-img-cover" alt="Lancement de projet à Abomey-Calavi" />
            <div class="card-body p-4">
              <small class="text-accent fw-semibold" data-fr="12 janvier 2026" data-en="January 12, 2026">12 janvier 2026</small>
              <h5 class="mt-1" data-fr="Lancement du projet à Abomey-Calavi" data-en="Project launch in Abomey-Calavi">Lancement du projet à Abomey-Calavi</h5>
              <p class="text-muted mb-3"
                data-fr="Un nouveau programme éducatif pour 500 enfants a été inauguré ce mois-ci."
                data-en="A new educational program for 500 children was inaugurated this month.">
                Un nouveau programme éducatif pour 500 enfants a été inauguré ce mois-ci.
              </p>
              <a href="detail.html?type=news&amp;id=launch" class="fw-semibold text-navy" data-fr="Lire la suite →" data-en="Read more →">Lire la suite →</a>
            </div>
          </article>
        </div>
        <div class="col-md-4">
          <article class="card h-100 news-card">
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=700&q=80"
              class="card-img-cover" alt="Journée de sensibilisation à la santé" />
            <div class="card-body p-4">
              <small class="text-accent fw-semibold" data-fr="28 février 2026" data-en="February 28, 2026">28 février 2026</small>
              <h5 class="mt-1" data-fr="Journée de sensibilisation à la santé" data-en="Health awareness day">Journée de sensibilisation à la santé</h5>
              <p class="text-muted mb-3"
                data-fr="Dépistages gratuits et ateliers d'hygiène organisés dans trois quartiers de Cotonou."
                data-en="Free screenings and hygiene workshops held in three districts of Cotonou.">
                Dépistages gratuits et ateliers d'hygiène organisés dans trois quartiers de Cotonou.
              </p>
              <a href="detail.html?type=news&amp;id=health-day" class="fw-semibold text-navy" data-fr="Lire la suite →" data-en="Read more →">Lire la suite →</a>
            </div>
          </article>
        </div>
        <div class="col-md-4">
          <article class="card h-100 news-card">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80"
              class="card-img-cover" alt="Distribution de kits scolaires" />
            <div class="card-body p-4">
              <small class="text-accent fw-semibold" data-fr="15 mars 2026" data-en="March 15, 2026">15 mars 2026</small>
              <h5 class="mt-1" data-fr="Distribution de kits scolaires" data-en="School kit distribution">Distribution de kits scolaires</h5>
              <p class="text-muted mb-3"
                data-fr="Plus de 1 200 kits distribués aux élèves des zones rurales du département du Zou."
                data-en="Over 1,200 kits distributed to students in rural areas of the Zou department.">
                Plus de 1 200 kits distribués aux élèves des zones rurales du département du Zou.
              </p>
              <a href="detail.html?type=news&amp;id=kits" class="fw-semibold text-navy" data-fr="Lire la suite →" data-en="Read more →">Lire la suite →</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       6. APPEL AU DON + DEVENIR BÉNÉVOLE
       ============================================================ -->
  <section class="cta-band py-5">
    <div class="container">
      <div class="row align-items-center g-4">
        <div class="col-lg-8">
          <h2 class="text-white mb-2" data-fr="Ensemble, changeons des vies" data-en="Together, let's change lives">Ensemble, changeons des vies</h2>
          <p class="mb-0 text-white-50"
            data-fr="Votre don finance directement l'éducation, la santé et l'autonomisation des communautés béninoises. Rejoignez aussi nos bénévoles sur le terrain."
            data-en="Your donation directly funds education, health and empowerment of Beninese communities. You can also join our volunteers in the field.">
            Votre don finance directement l'éducation, la santé et l'autonomisation des communautés béninoises. Rejoignez aussi nos bénévoles sur le terrain.
          </p>
        </div>
        <div class="col-lg-4 text-lg-end">
          <a href="support.html#don" class="btn btn-accent btn-lg px-4 mb-2 w-100 w-lg-auto"
            data-fr="Faire un don" data-en="Donate now">Faire un don</a>
          <a href="support.html#benevolat" class="btn btn-outline-light btn-lg px-4 w-100 w-lg-auto"
            data-fr="Devenir bénévole" data-en="Become a volunteer">Devenir bénévole</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       ============================================================ -->
  <footer class="site-footer pt-5 pb-4">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="d-flex align-items-center mb-3">
            <span class="brand-mark"><img src="img/ProGen.png" alt="Logo Pro Gen Bénin" style="width: 240px; max-width: none; height: auto; object-fit: contain;padding-top: 13%"></span>
            <span class="fw-bold text-white fs-5">Pro Gen </span>
          </div>
          <p class="small"
            data-fr="ONG béninoise engagée pour l'éducation, la santé et le développement durable des communautés."
            data-en="Beninese NGO committed to education, health and sustainable community development.">
            ONG béninoise engagée pour l'éducation, la santé et le développement durable des communautés.
          </p>
          <div class="d-flex gap-2 mt-3">
            <a href="#" class="social-icon" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="social-icon" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="social-icon" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="social-icon" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
        <div class="col-6 col-lg-2">
          <h5 class="mb-3" data-fr="Navigation" data-en="Navigation">Navigation</h5>
          <ul class="list-unstyled small">
            <li class="mb-2"><a href="about.html" data-fr="À propos" data-en="About">À propos</a></li>
            <li class="mb-2"><a href="team.html" data-fr="Équipe" data-en="Team">Équipe</a></li>
            <li class="mb-2"><a href="projects.html" data-fr="Projets" data-en="Projects">Projets</a></li>
            <li class="mb-2"><a href="support.html" data-fr="Nous soutenir" data-en="Support us">Nous soutenir</a></li>
            <li class="mb-2"><a href="contact.html" data-fr="Contact" data-en="Contact">Contact</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <h5 class="mb-3" data-fr="Contact" data-en="Contact">Contact</h5>
          <ul class="list-unstyled small">
            <li class="mb-2"><i class="bi bi-geo-alt me-2"></i>Cotonou / Abomey-Calavi, Bénin</li>
            <li class="mb-2"><i class="bi bi-telephone me-2"></i>+229 01 00 00 00 00</li>
            <li class="mb-2"><i class="bi bi-whatsapp me-2"></i>+229 01 00 00 00 00</li>
            <li class="mb-2"><i class="bi bi-envelope me-2"></i>contact@proGenbenin.org</li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5 class="mb-3" data-fr="Transparence" data-en="Transparency">Transparence</h5>
          <ul class="list-unstyled small">
            <li class="mb-2"><a href="#" data-fr="Rapports financiers" data-en="Financial reports">Rapports financiers</a></li>
            <li class="mb-2"><a href="#" data-fr="Mentions légales" data-en="Legal notice">Mentions légales</a></li>
            <li class="mb-2" data-fr="RCCM : RB/COT/00/A00000" data-en="Reg. No.: RB/COT/00/A00000">RCCM : RB/COT/00/A00000</li>
          </ul>
        </div>
      </div>
      <hr class="border-secondary mt-4" />
      <div class="text-center small">
        <span data-fr="© 2026 Pro Gen Bénin. Tous droits réservés."
          data-en="© 2026 Pro Gen Bénin. All rights reserved.">© 2026 Pro Gen Bénin. Tous droits réservés.</span>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
