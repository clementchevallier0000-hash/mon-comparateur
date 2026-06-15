import type { FaqItem } from './faq'

export const FAQ_GESTION_PROJET: FaqItem[] = [
  {
    slug: 'logiciel-gestion-projet-c-est-quoi',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Qu'est-ce qu'un logiciel de gestion de projet ?",
    reponse: `
<p>Un <strong>logiciel de gestion de projet</strong> est un outil qui permet à une équipe de planifier, organiser, suivre et livrer son travail de façon structurée. Il centralise les tâches, les responsabilités, les délais et les communications autour d'un ou plusieurs projets.</p>

<h2>Ce qu'un logiciel de gestion de projet permet de faire</h2>
<table>
<thead><tr><th>Fonctionnalité</th><th>Sans outil</th><th>Avec outil</th></tr></thead>
<tbody>
<tr><td>Savoir qui fait quoi</td><td>Emails, réunions</td><td>Tâche assignée à un responsable visible par tous</td></tr>
<tr><td>Respecter les délais</td><td>Calendrier mental ou papier</td><td>Date d'échéance + alerte automatique</td></tr>
<tr><td>Voir l'avancement global</td><td>Réunion de statut hebdomadaire</td><td>Tableau de bord en temps réel</td></tr>
<tr><td>Partager les documents</td><td>Emails avec pièces jointes</td><td>Fichiers attachés aux tâches</td></tr>
<tr><td>Communiquer sur une tâche</td><td>Chaîne d'emails désorganisée</td><td>Commentaires directement sur la tâche</td></tr>
</tbody>
</table>

<h2>Les vues principales dans un outil de gestion de projet</h2>
<ul>
<li><strong>Kanban</strong> : colonnes (À faire / En cours / Terminé), idéal pour les équipes agiles</li>
<li><strong>Gantt</strong> : chronologie avec barres de durée, idéal pour les projets avec jalons</li>
<li><strong>Calendrier</strong> : vue mensuelle des échéances</li>
<li><strong>Liste</strong> : vue tabulaire avec filtres et tris</li>
<li><strong>Tableau de bord</strong> : KPIs et indicateurs personnalisables</li>
</ul>

<h2>Monday.com : la référence polyvalente</h2>
<p>Monday.com est devenu l'outil de référence pour de nombreuses PME et équipes marketing, commerciales et opérationnelles. Sa force : il propose toutes les vues (Kanban, Gantt, calendrier, formulaire) sur le même tableau, et bascule de l'une à l'autre en un clic. Plus de 152 000 entreprises dans le monde l'utilisent.</p>

<h2>Quand un logiciel de gestion de projet devient indispensable</h2>
<ul>
<li>Votre équipe dépasse 3 personnes sur un même projet</li>
<li>Vous gérez plusieurs projets en parallèle</li>
<li>Des tâches tombent dans les oubliettes régulièrement</li>
<li>Vous ne savez pas en temps réel où en est le projet</li>
<li>Votre équipe travaille à distance (même partiellement)</li>
</ul>
<div class="encart">💡 <strong>Bon à savoir :</strong> La plupart des outils proposent une période d'essai gratuite. Monday.com propose un plan gratuit pour 2 utilisateurs, parfait pour évaluer l'outil avant de l'étendre à toute l'équipe.</div>
`,
  },
  {
    slug: 'kanban-gantt-difference',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quelle est la différence entre un tableau Kanban et un diagramme de Gantt ?",
    reponse: `
<p>Kanban et Gantt sont deux façons de visualiser et de gérer un projet. Le choix entre les deux dépend de la nature de votre travail, de vos contraintes de temps et de la complexité du projet.</p>

<h2>Tableau Kanban vs Diagramme de Gantt</h2>
<table>
<thead><tr><th>Critère</th><th>Kanban</th><th>Gantt</th></tr></thead>
<tbody>
<tr><td>Représentation</td><td>Colonnes de cartes (statuts)</td><td>Barres horizontales sur une chronologie</td></tr>
<tr><td>Focus</td><td>État du travail (flux)</td><td>Durée et séquence (temps)</td></tr>
<tr><td>Délais</td><td>Pas prioritaires</td><td>Essentiels</td></tr>
<tr><td>Dépendances entre tâches</td><td>Non géré nativement</td><td>Géré explicitement</td></tr>
<tr><td>Idéal pour</td><td>Support, maintenance, contenu récurrent</td><td>Projets avec jalons et deadlines</td></tr>
<tr><td>Complexité</td><td>Simple à appréhender</td><td>Plus complexe mais plus précis</td></tr>
</tbody>
</table>

<h2>Quand utiliser le Kanban ?</h2>
<ul>
<li>Équipe de développement avec des sprints (Agile/Scrum)</li>
<li>Support client : tickets entrants à traiter en flux continu</li>
<li>Création de contenu : articles en cours de rédaction / révision / publication</li>
<li>Tâches récurrentes sans deadline fixe</li>
</ul>

<h2>Quand utiliser le Gantt ?</h2>
<ul>
<li>Lancement d'un produit avec une date cible immuable</li>
<li>Construction ou renovation avec des corps de métier séquentiels</li>
<li>Événementiel : chaque préparation dépend de la précédente</li>
<li>Projets avec plusieurs équipes qui se coordonnent</li>
<li>Client qui veut voir un planning précis</li>
</ul>

<h2>Monday.com : les deux sur le même projet</h2>
<p>L'un des grands avantages de Monday.com est de proposer les deux vues sur le même ensemble de données. Vos commerciaux peuvent utiliser la vue Kanban pour leur pipeline, tandis que le management utilise le Gantt pour suivre les jalons stratégiques — tout ça sur le même tableau.</p>

<h2>Exemple concret : lancement d'un produit</h2>
<ul>
<li><strong>Gantt</strong> : pour planifier les phases (développement → test → marketing → lancement) avec leurs dépendances et dates</li>
<li><strong>Kanban</strong> : pour les tâches de contenu marketing (articles en cours d'écriture, landing page en révision, emails en attente)</li>
</ul>
<div class="encart">💡 <strong>Conseil :</strong> Ne choisissez pas entre les deux — utilisez-les ensemble. Le Gantt pour la planification stratégique, le Kanban pour l'exécution quotidienne.</div>
`,
  },
  {
    slug: 'methode-agile-scrum-logiciel',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quel logiciel pour gérer un projet en méthode Agile / Scrum ?",
    reponse: `
<p>La méthode Agile (dont Scrum est la déclinaison la plus connue) repose sur des cycles courts (sprints de 1-4 semaines), une livraison itérative et une adaptation continue. Les outils de gestion de projet doivent supporter ces pratiques spécifiques.</p>

<h2>Vocabulaire Scrum à connaître</h2>
<table>
<thead><tr><th>Terme</th><th>Définition</th></tr></thead>
<tbody>
<tr><td>Sprint</td><td>Période de travail courte (1-4 semaines) avec un objectif défini</td></tr>
<tr><td>Product Backlog</td><td>Liste priorisée de toutes les fonctionnalités à développer</td></tr>
<tr><td>Sprint Backlog</td><td>Sous-ensemble du backlog sélectionné pour le sprint en cours</td></tr>
<tr><td>User Story</td><td>Description d'une fonctionnalité du point de vue utilisateur</td></tr>
<tr><td>Velocity</td><td>Nombre de points réalisés par sprint (mesure de productivité)</td></tr>
<tr><td>Rétrospective</td><td>Réunion en fin de sprint pour améliorer le processus</td></tr>
</tbody>
</table>

<h2>Comparatif des outils Agile</h2>
<table>
<thead><tr><th>Outil</th><th>Profil</th><th>Gestion des sprints</th><th>Prix</th></tr></thead>
<tbody>
<tr><td><strong>Jira</strong></td><td>Équipes dev, très complet</td><td>✅ Natif, très avancé</td><td>Gratuit -10 users, puis 8,15$/user</td></tr>
<tr><td><strong>Monday.com</strong></td><td>Équipes mixtes, accessible</td><td>✅ Via sprint board</td><td>À partir de 9€/user/mois</td></tr>
<tr><td><strong>Notion</strong></td><td>Équipes flexibles, tout-en-un</td><td>⚠️ À construire manuellement</td><td>Gratuit / 10$/user</td></tr>
<tr><td><strong>Linear</strong></td><td>Équipes dev modernes</td><td>✅ Cycles et sprints intégrés</td><td>Gratuit / 8$/user</td></tr>
<tr><td><strong>Trello</strong></td><td>Petites équipes, simple</td><td>⚠️ Basique via plugins</td><td>Gratuit / 5$/user</td></tr>
</tbody>
</table>

<h2>Jira vs Monday.com pour l'Agile</h2>
<ul>
<li><strong>Jira</strong> : la référence pour les équipes de développement logiciel. Sprints, backlogs, velocity charts, burndown charts — tout est natif. Steep learning curve mais très puissant.</li>
<li><strong>Monday.com</strong> : moins spécialisé Scrum mais bien plus accessible. Parfait pour les équipes mixtes (dev + marketing + design) qui veulent travailler en Agile sans la complexité de Jira.</li>
</ul>

<h2>Mettre en place un sprint dans Monday.com</h2>
<ol>
<li>Créez un tableau "Backlog produit" avec toutes les user stories</li>
<li>Créez un tableau "Sprint en cours" (dupliqué pour chaque sprint)</li>
<li>Chaque lundi de sprint planning : déplacez les items du backlog vers le sprint</li>
<li>Utilisez un tableau de bord pour suivre la velocity</li>
<li>Rétrospective : notez les actions dans un tableau dédié</li>
</ol>
<div class="encart">💡 <strong>Pour les équipes non-tech :</strong> Si votre équipe n'est pas une équipe de développement, adoptez l'"Agile light" avec Monday.com plutôt que Jira. Vous aurez 80% des bénéfices pour 20% de la complexité.</div>
`,
  },
  {
    slug: 'gestion-projet-freelance',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quel outil de gestion de projet pour un freelance ?",
    reponse: `
<p>En tant que freelance, vous gérez simultanément plusieurs missions pour différents clients, votre propre prospection commerciale et votre administration. Un outil de gestion de projet adapté vous aide à tout organiser sans surcharger votre workflow.</p>

<h2>Besoins spécifiques d'un freelance</h2>
<ul>
<li>Suivre les livrables et deadlines pour chaque client</li>
<li>Gérer son propre backlog de tâches (pas une équipe)</li>
<li>Partager l'avancement avec ses clients facilement</li>
<li>Suivre le temps passé sur chaque mission (pour facturer à l'heure)</li>
<li>Budget limité : pas envie de payer 50€/mois pour un outil seul</li>
</ul>

<h2>Meilleurs outils de gestion de projet pour freelances</h2>
<table>
<thead><tr><th>Outil</th><th>Prix solo</th><th>Point fort</th><th>Limite</th></tr></thead>
<tbody>
<tr><td><strong>Notion</strong></td><td>Gratuit</td><td>Flexibilité totale, base de connaissances</td><td>À construire soi-même</td></tr>
<tr><td><strong>Trello</strong></td><td>Gratuit</td><td>Simple, Kanban visuel</td><td>Pas de Gantt, limité sans plugins</td></tr>
<tr><td><strong>Monday.com</strong></td><td>Gratuit (2 seats)</td><td>Interface moderne, templates</td><td>Gratuit limité, cher à 3+</td></tr>
<tr><td><strong>ClickUp</strong></td><td>Gratuit</td><td>Très complet, time tracking</td><td>Peut être trop complexe</td></tr>
<tr><td><strong>Freebe</strong></td><td>10–15€</td><td>Gestion projet + facturation intégrés</td><td>Fonctions projet basiques</td></tr>
</tbody>
</table>

<h2>Notre recommandation selon votre profil</h2>
<ul>
<li><strong>Vous démarrez</strong> : Notion gratuit. Créez un tableau Kanban simple avec vos missions en cours.</li>
<li><strong>Vous voulez du visuel sans configuration</strong> : Trello gratuit. Créez un board par client, colonnes À faire / En cours / Livré.</li>
<li><strong>Vous voulez un outil pro avec du style</strong> : Monday.com (plan gratuit 2 seats).</li>
<li><strong>Vous facturez à l'heure</strong> : ClickUp avec son time tracking intégré + rapport des heures par client.</li>
</ul>

<h2>Partager l'avancement avec vos clients</h2>
<p>Un avantage méconnu des outils de gestion de projet : vous pouvez inviter votre client en "viewer" pour qu'il suive l'avancement en temps réel, sans vous envoyer des emails "où en est-on ?"</p>
<ul>
<li>Monday.com : accès guest gratuit en lecture seule</li>
<li>Notion : partage de page en lecture seule ou avec commentaires</li>
<li>Trello : invitation gratuite en observateur</li>
</ul>
<div class="encart">💡 <strong>Système simple qui marche :</strong> Un board Trello par client, avec 4 colonnes : Backlog / En cours / En révision / Livré. Invitez votre client. Mettez à jour chaque vendredi. Vous évitez 80% des emails de suivi.</div>
`,
  },
  {
    slug: 'gestion-projet-equipe-distanciel',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment gérer un projet avec une équipe en télétravail ?",
    reponse: `
<p>Le télétravail impose une discipline de documentation et de communication asynchrone que les outils de gestion de projet rendent naturelle. Bien configuré, un outil comme Monday.com peut rendre une équipe distribuée plus productive qu'une équipe au bureau.</p>

<h2>Les défis du management de projet à distance</h2>
<table>
<thead><tr><th>Défi</th><th>Solution outil</th></tr></thead>
<tbody>
<tr><td>Manque de visibilité sur l'avancement</td><td>Tableau de bord en temps réel</td></tr>
<tr><td>Communication éparpillée (email, WhatsApp, Slack)</td><td>Commentaires directement sur les tâches</td></tr>
<tr><td>Sentiment d'isolement des collaborateurs</td><td>Check-ins asynchrones structurés</td></tr>
<tr><td>Réunions trop nombreuses et inefficaces</td><td>Mises à jour écrites asynchrones quotidiennes</td></tr>
<tr><td>Décisions perdues, non documentées</td><td>Notes de réunion dans l'outil</td></tr>
</tbody>
</table>

<h2>Le rituel asynchrone recommandé</h2>
<p>Pour une équipe en télétravail, remplacez le standup matinal en visio par une mise à jour asynchrone dans votre outil :</p>
<ol>
<li>Chaque matin, chaque membre met à jour ses tâches (statut, commentaire si blocage)</li>
<li>Une règle Monday.com/n8n envoie un résumé quotidien dans Slack à 9h</li>
<li>Seuls les blocages déclenchent une réunion courte (15 min max)</li>
</ol>

<h2>Configuration Monday.com pour équipe distante</h2>
<ul>
<li>Activez les notifications "quand une tâche est assignée" et "quand quelqu'un me mentionne"</li>
<li>Créez un tableau "En cours cette semaine" par équipe</li>
<li>Utilisez la colonne "Dernière mise à jour" pour voir qui n'a pas bougé depuis 2 jours</li>
<li>Connectez Monday.com à Slack pour les alertes urgentes</li>
<li>Partagez le tableau de bord en lecture seule avec votre client ou direction</li>
</ul>

<h2>Outils complémentaires pour le télétravail</h2>
<ul>
<li><strong>Slack</strong> : communication asynchrone quotidienne</li>
<li><strong>Loom</strong> : vidéos asynchrones pour expliquer un livrable ou une décision</li>
<li><strong>Notion</strong> : wiki d'équipe et documentation des processus</li>
<li><strong>Miro</strong> : brainstorming et ateliers collaboratifs en ligne</li>
</ul>
<div class="encart">💡 <strong>Règle d'or du télétravail :</strong> "Si ce n'est pas dans l'outil, ça n'existe pas." Toute décision, tout engagement, toute information clé doit être documenté dans votre outil de gestion de projet — pas dans un email ou un message Slack qui se perd.</div>
`,
  },
  {
    slug: 'templates-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Existe-t-il des templates de gestion de projet prêts à l'emploi ?",
    reponse: `
<p>Oui, les templates (modèles) de gestion de projet font gagner des heures de configuration. Plutôt que de construire un tableau de zéro, vous partez d'une structure éprouvée et l'adaptez en quelques minutes.</p>

<h2>Bibliothèques de templates par outil</h2>
<table>
<thead><tr><th>Outil</th><th>Nombre de templates</th><th>Catégories couvertes</th></tr></thead>
<tbody>
<tr><td><strong>Monday.com</strong></td><td>200+</td><td>Marketing, IT, RH, construction, immobilier, vente, finance</td></tr>
<tr><td><strong>Notion</strong></td><td>1000+ (communauté)</td><td>Tout — très vaste galerie communautaire</td></tr>
<tr><td><strong>Trello</strong></td><td>100+</td><td>Startups, marketing, éducation, personnel</td></tr>
<tr><td><strong>ClickUp</strong></td><td>1000+</td><td>Très complet, tous secteurs</td></tr>
<tr><td><strong>Asana</strong></td><td>100+</td><td>Lancement produit, campagnes, événements</td></tr>
</tbody>
</table>

<h2>Templates les plus utilisés dans Monday.com</h2>
<ul>
<li><strong>Lancement de produit</strong> : phases de développement, marketing, go-to-market</li>
<li><strong>Campagne marketing</strong> : calendrier éditorial, brief créatif, validation</li>
<li><strong>Onboarding collaborateur</strong> : checklist des premières semaines</li>
<li><strong>Gestion immobilière</strong> : suivi des biens, locataires, travaux</li>
<li><strong>CRM simple</strong> : pour des équipes qui ne veulent pas un CRM dédié</li>
<li><strong>Tableau de bord exécutif</strong> : KPIs consolidés de plusieurs projets</li>
</ul>

<h2>Comment choisir le bon template</h2>
<ol>
<li>Identifiez votre use case principal (marketing, dev, ops, RH…)</li>
<li>Filtrez par secteur ou taille d'équipe dans la bibliothèque</li>
<li>Visualisez la démo du template avant d'importer</li>
<li>Dupliquez le template et supprimez les colonnes que vous n'utilisez pas</li>
<li>Renommez les statuts selon votre vocabulaire interne</li>
</ol>

<h2>Templates Notion de la communauté française</h2>
<p>La communauté française Notion est très active. Des créateurs comme Thomas Frank, Marie Poulin ou les équipes françaises de Notion publient régulièrement des templates gratuits et premium. Cherchez sur <strong>Notion.so/fr/templates</strong> ou Reddit r/Notion.</p>
<div class="encart">💡 <strong>Astuce :</strong> Ne cherchez pas le template parfait — trouvez-en un à 70% de ce que vous voulez et personnalisez. Vous perdrez plus de temps à chercher le parfait qu'à adapter l'imparfait.</div>
`,
  },
  {
    slug: 'suivi-temps-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment suivre le temps passé sur les tâches ?",
    reponse: `
<p>Le time tracking est essentiel pour deux raisons : facturer précisément à l'heure et analyser la rentabilité de vos projets. Voici les options disponibles, du plus simple au plus avancé.</p>

<h2>Options de time tracking selon votre besoin</h2>
<table>
<thead><tr><th>Option</th><th>Outil</th><th>Pour qui</th><th>Prix</th></tr></thead>
<tbody>
<tr><td>Time tracking natif</td><td>ClickUp, Monday.com (colonne)</td><td>Équipes déjà sur ces outils</td><td>Inclus</td></tr>
<tr><td>Outil dédié</td><td>Toggl Track</td><td>Freelances et équipes</td><td>Gratuit / 9$/user</td></tr>
<tr><td>Outil dédié avancé</td><td>Harvest</td><td>Agences, facturation intégrée</td><td>12$/user/mois</td></tr>
<tr><td>Time tracking + facturation</td><td>Freebe, Karlia</td><td>Indépendants FR</td><td>10–29€/mois</td></tr>
</tbody>
</table>

<h2>Time tracking dans Monday.com</h2>
<p>Monday.com propose une colonne "Time Tracking" ajoutée à n'importe quel tableau :</p>
<ul>
<li>Démarrez/arrêtez le chrono depuis la tâche</li>
<li>Saisissez manuellement un temps si vous avez oublié de chronomètrer</li>
<li>Visualisez le temps total par tâche, par personne, par projet</li>
<li>Exportez en CSV pour la facturation</li>
</ul>

<h2>Toggl Track : le meilleur outil dédié</h2>
<p>Toggl Track est la référence du time tracking indépendant :</p>
<ul>
<li>Extension Chrome pour chronomètrer depuis n'importe quelle page ou application</li>
<li>Timer sur mobile pour les déplacements</li>
<li>Rapports par projet, client, tag</li>
<li>Intégration avec Monday.com, Asana, Jira via Make</li>
<li>Plan gratuit très généreux (illimité en temps tracké)</li>
</ul>

<h2>Analyser la rentabilité de vos projets</h2>
<p>Le time tracking sert aussi à mesurer si vos projets sont rentables :</p>
<ul>
<li><strong>Temps estimé vs réel</strong> : avez-vous bien chiffré votre devis ?</li>
<li><strong>Taux horaire effectif</strong> : divisez le montant facturé par le temps réel passé</li>
<li><strong>Rentabilité par type de mission</strong> : quelles missions sont les plus rentables ?</li>
</ul>
<div class="encart">💡 <strong>Règle des freelances rentables :</strong> Suivez le temps passé sur chaque mission pendant 3 mois, même si vous facturez au forfait. Vous découvrirez généralement que certaines missions vous coûtent de l'argent — et pourrez revoir votre tarification en conséquence.</div>
`,
  },
  {
    slug: 'gestion-projet-vs-crm-difference',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quelle est la différence entre un outil de gestion de projet et un CRM ?",
    reponse: `
<p>C'est l'une des confusions les plus fréquentes, d'autant que des outils comme Monday.com proposent les deux. Comprendre la différence vous aidera à choisir les bons outils et à ne pas payer pour des fonctions que vous n'utilisez pas.</p>

<h2>Tableau comparatif CRM vs Gestion de projet</h2>
<table>
<thead><tr><th>Critère</th><th>CRM</th><th>Gestion de projet</th></tr></thead>
<tbody>
<tr><td>Objectif</td><td>Gérer les relations clients et ventes</td><td>Organiser et livrer le travail interne</td></tr>
<tr><td>Direction</td><td>Externe (clients, prospects)</td><td>Interne (tâches, équipe)</td></tr>
<tr><td>Question centrale</td><td>"Où en est ma relation avec ce client ?"</td><td>"Qui fait quoi et pour quand ?"</td></tr>
<tr><td>Données principales</td><td>Contacts, deals, emails, revenus</td><td>Tâches, statuts, délais, fichiers</td></tr>
<tr><td>Utilisateurs</td><td>Commerciaux, marketing</td><td>Toutes les équipes</td></tr>
<tr><td>Exemples</td><td>Pipedrive, Sellsy, Folk</td><td>Monday.com, Notion, Trello</td></tr>
</tbody>
</table>

<h2>Le chevauchement qui crée la confusion</h2>
<p>La confusion vient du fait que :</p>
<ul>
<li>Monday.com propose un module CRM — mais c'est un outil de gestion de projet au départ</li>
<li>Sellsy et Axonaut proposent de la gestion de projet — mais ce sont des CRM/ERP au départ</li>
<li>Notion est utilisé comme CRM par certains freelances — mais c'est une base de connaissances</li>
</ul>

<h2>Comment savoir ce dont vous avez besoin ?</h2>
<ul>
<li><strong>Vous avez surtout besoin de suivre vos clients et prospects</strong> → CRM (Pipedrive, Folk)</li>
<li><strong>Vous avez surtout besoin d'organiser le travail de votre équipe</strong> → Gestion de projet (Monday.com, Notion)</li>
<li><strong>Vous avez besoin des deux</strong> → Deux outils distincts reliés par Make, OU un outil hybride (Sellsy, Axonaut pour les TPE/PME)</li>
</ul>

<h2>Cas pratique : une agence web</h2>
<ul>
<li><strong>Pour les ventes</strong> : Pipedrive (pipeline prospects, relances, devis)</li>
<li><strong>Pour les projets</strong> : Monday.com (tâches, délais, communication client)</li>
<li><strong>Connexion</strong> : quand un deal est gagné dans Pipedrive → Make crée automatiquement le projet dans Monday.com</li>
</ul>
<div class="encart">💡 <strong>Conseil :</strong> Résistez à la tentation de tout mettre dans un seul outil. Un CRM optimisé pour les ventes + un outil de projet optimisé pour l'exécution, bien connectés, sont plus efficaces qu'un outil hybride qui fait tout à moitié.</div>
`,
  },
  {
    slug: 'jalons-milestones-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Qu'est-ce qu'un jalon (milestone) dans un projet ?",
    reponse: `
<p>Un <strong>jalon</strong> (milestone en anglais) est un point clé dans la vie d'un projet qui marque l'accomplissement d'une phase importante ou une décision critique. Contrairement à une tâche, un jalon n'a pas de durée — c'est un événement ponctuel dans le temps.</p>

<h2>Exemples de jalons courants</h2>
<table>
<thead><tr><th>Type de projet</th><th>Jalons typiques</th></tr></thead>
<tbody>
<tr><td>Développement logiciel</td><td>Validation des spécifications, beta privée, release v1.0</td></tr>
<tr><td>Construction</td><td>Obtention du permis, fondations terminées, livraison des clés</td></tr>
<tr><td>Marketing</td><td>Approbation du brief créatif, validation des visuels, lancement campagne</td></tr>
<tr><td>Événement</td><td>Clôture des inscriptions, confirmation des intervenants, jour J</td></tr>
<tr><td>Contrat</td><td>Signature du bon de commande, livraison partielle, réception définitive</td></tr>
</tbody>
</table>

<h2>Pourquoi les jalons sont importants</h2>
<ul>
<li><strong>Visibilité</strong> : les parties prenantes (clients, direction) voient l'avancement sans entrer dans le détail des tâches</li>
<li><strong>Accountability</strong> : un jalon manqué est un signal d'alarme immédiat</li>
<li><strong>Décision</strong> : certains jalons déclenchent une décision (go/no-go avant de passer à la phase suivante)</li>
<li><strong>Motivation</strong> : atteindre un jalon donne le sentiment de progression à l'équipe</li>
</ul>

<h2>Jalons dans Monday.com</h2>
<p>Monday.com propose un type d'élément "Milestone" dans la vue Gantt :</p>
<ul>
<li>Représenté par un diamant ♦ sur la chronologie</li>
<li>Peut être lié à des tâches dépendantes</li>
<li>Notification automatique quand un jalon approche ou est en retard</li>
<li>Visible dans le tableau de bord de pilotage</li>
</ul>

<h2>Jalons et facturation</h2>
<p>Dans les projets facturés par phases (très courant dans le conseil, le développement ou la construction), les jalons sont souvent liés aux paiements :</p>
<ul>
<li>Signature du contrat → acompte de 30%</li>
<li>Livraison intermédiaire validée → paiement de 40%</li>
<li>Réception définitive → solde de 30%</li>
</ul>
<p>Liez vos jalons Monday.com à votre logiciel de facturation via <strong>Make</strong> : quand un jalon est marqué "atteint", Make déclenche la création de la facture dans Sellsy.</p>
<div class="encart">💡 <strong>Nombre optimal de jalons :</strong> Pour un projet de 3 mois, 4 à 8 jalons sont idéaux. Trop peu = manque de visibilité. Trop = les jalons perdent de leur signification.</div>
`,
  },
  {
    slug: 'budget-projet-suivi-logiciel',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment suivre le budget d'un projet avec un logiciel ?",
    reponse: `
<p>Le suivi budgétaire est l'une des dimensions les plus négligées de la gestion de projet. Pourtant, la plupart des dépassements de budget sont détectables à mi-projet si vous avez les bons indicateurs en place.</p>

<h2>Les indicateurs budget à suivre</h2>
<table>
<thead><tr><th>Indicateur</th><th>Définition</th><th>Signal d'alarme</th></tr></thead>
<tbody>
<tr><td>Budget alloué</td><td>Montant total approuvé</td><td>—</td></tr>
<tr><td>Budget engagé</td><td>Montant commandé ou contractualisé</td><td>> 80% du budget alloué</td></tr>
<tr><td>Budget consommé</td><td>Montant réellement dépensé</td><td>> budget alloué</td></tr>
<tr><td>Budget restant</td><td>Alloué - Consommé</td><td>Négatif = dépassement</td></tr>
<tr><td>Avancement physique</td><td>% du projet livré</td><td>< budget consommé en %</td></tr>
</tbody>
</table>

<h2>Suivi du budget dans Monday.com</h2>
<p>Monday.com n'est pas un outil financier mais peut être configuré pour un suivi budgétaire simple :</p>
<ul>
<li>Colonne "Budget estimé" (nombre) sur chaque tâche ou phase</li>
<li>Colonne "Coût réel" mis à jour au fur et à mesure</li>
<li>Colonne "Écart" calculée automatiquement</li>
<li>Widget tableau de bord : somme des coûts réels vs estimés par projet</li>
</ul>

<h2>Intégration avec des outils financiers</h2>
<p>Pour un suivi budgétaire plus poussé (avec frais externes, sous-traitants, achat de matériaux) :</p>
<ul>
<li><strong>Axonaut</strong> : suivi budget + bons de commande + facturation dans le même outil</li>
<li><strong>Sellsy</strong> : gestion des achats et des coûts de projet</li>
<li><strong>Make</strong> : collectez les données de coût depuis Monday.com et alimentez un Google Sheet de suivi financier</li>
</ul>

<h2>La méthode de la valeur acquise (simplifiée)</h2>
<p>Pour les projets importants, utilisez ce ratio simple :</p>
<ul>
<li>Si vous avez dépensé 50% du budget et réalisé 60% du travail → vous êtes dans les clous</li>
<li>Si vous avez dépensé 50% du budget et réalisé 35% du travail → vous allez dépasser</li>
</ul>
<p>Mettez à jour l'avancement physique (%) chaque semaine dans Monday.com et visualisez ce ratio dans un tableau de bord.</p>
<div class="encart">💡 <strong>Réunion de pilotage budgétaire :</strong> Une fois par mois, comparez budget consommé et avancement physique. Si l'écart dépasse 10%, déclenchez une revue du projet pour identifier les causes et les actions correctives.</div>
`,
  },
  {
    slug: 'gestion-projet-construction-btm',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quel outil de gestion de projet pour le secteur du bâtiment ?",
    reponse: `
<p>La gestion de projet dans le BTP a ses propres contraintes : coordination de corps de métier, suivi de chantier terrain, plans et documents techniques volumineux, situations de travaux progressives. Voici les meilleures options.</p>

<h2>Besoins spécifiques du BTP</h2>
<ul>
<li>Planning des corps de métier avec dépendances (le plombier avant le carreleur)</li>
<li>Suivi terrain depuis le chantier (mobile offline)</li>
<li>Gestion des sous-traitants et bons de commande</li>
<li>Documents techniques : plans, CCTP, DPGF, PV de réception</li>
<li>Situations de travaux et factures d'avancement</li>
<li>Réserves et levée de réserves</li>
</ul>

<h2>Comparatif des outils BTP</h2>
<table>
<thead><tr><th>Outil</th><th>Type</th><th>Prix</th><th>Idéal pour</th></tr></thead>
<tbody>
<tr><td><strong>Monday.com</strong></td><td>Généraliste adapté</td><td>9€/user/mois</td><td>PME BTP, planning simple</td></tr>
<tr><td><strong>Axonaut</strong></td><td>ERP léger</td><td>58€/mois global</td><td>Artisans et PME : projet + facturation</td></tr>
<tr><td><strong>Obat</strong></td><td>Spécialisé BTP</td><td>59€/mois</td><td>Devis BTP + situations de travaux</td></tr>
<tr><td><strong>Batigest</strong></td><td>ERP BTP</td><td>Sur devis</td><td>PME BTP avec besoins complexes</td></tr>
<tr><td><strong>PlanRadar</strong></td><td>Gestion chantier</td><td>Sur devis</td><td>Grands chantiers, défauts et réserves</td></tr>
</tbody>
</table>

<h2>Monday.com dans le BTP : comment le configurer</h2>
<ol>
<li>Créez un projet par chantier avec un tableau dédié</li>
<li>Colonnes : Corps de métier / Statut / Date début / Date fin / % avancement / Montant</li>
<li>Utilisez la vue Gantt pour visualiser les dépendances entre corps de métier</li>
<li>Attachez les plans et documents directement aux tâches</li>
<li>Partagez le tableau en lecture seule avec le maître d'ouvrage</li>
</ol>

<h2>Axonaut : la meilleure solution pour artisans</h2>
<p>Axonaut est particulièrement adapté pour les artisans et PME du bâtiment car il combine :</p>
<ul>
<li>Gestion de projet avec planning</li>
<li>Devis et facturation avec taux de TVA réduits (10%, 5,5%)</li>
<li>Situations de travaux</li>
<li>Suivi des sous-traitants</li>
</ul>
<p>Et tout ça pour un prix global non par utilisateur — très compétitif pour les équipes de 3 à 10 personnes.</p>
<div class="encart">💡 <strong>Application mobile terrain :</strong> Si vos équipes travaillent sur chantier sans réseau stable, vérifiez que l'outil fonctionne en mode offline. Monday.com a une app mobile mais elle requiert une connexion. Pour le travail hors-ligne, des apps comme Fieldwire ou PlanRadar sont plus adaptées.</div>
`,
  },
  {
    slug: 'dependances-taches-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment gérer les dépendances entre tâches dans un projet ?",
    reponse: `
<p>Les dépendances entre tâches expriment des contraintes d'ordonnancement : telle tâche ne peut pas démarrer avant que telle autre soit terminée. Bien les gérer est essentiel pour éviter de découvrir à mi-projet qu'une équipe est bloquée en attendant une autre.</p>

<h2>Les 4 types de dépendances</h2>
<table>
<thead><tr><th>Type</th><th>Description</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><strong>Fin-Début (FD)</strong></td><td>B commence quand A est terminé</td><td>Le dev commence quand les specs sont validées</td></tr>
<tr><td><strong>Début-Début (DD)</strong></td><td>B commence quand A commence</td><td>Les tests démarrent en même temps que le dev</td></tr>
<tr><td><strong>Fin-Fin (FF)</strong></td><td>B finit quand A finit</td><td>La doc finit en même temps que le dev</td></tr>
<tr><td><strong>Début-Fin (DF)</strong></td><td>B finit quand A commence</td><td>Rare, cas particuliers</td></tr>
</tbody>
</table>

<h2>Dépendances dans Monday.com</h2>
<p>Monday.com propose une colonne "Dépendances" native :</p>
<ul>
<li>Sélectionnez les tâches dont dépend la tâche courante</li>
<li>Dans la vue Gantt, les dépendances sont visualisées par des flèches</li>
<li>Si une tâche prend du retard, Monday.com vous alerte sur les tâches dépendantes</li>
<li>En cliquant sur une flèche, vous pouvez voir et modifier la relation</li>
</ul>

<h2>Chemin critique : la notion clé</h2>
<p>Le <strong>chemin critique</strong> est la séquence de tâches dépendantes dont la durée totale détermine la durée minimale du projet. Un retard sur une tâche du chemin critique = retard sur la livraison finale.</p>
<p>Dans Monday.com Pro et Enterprise, le chemin critique est mis en évidence dans la vue Gantt (lignes rouges).</p>

<h2>Bonnes pratiques pour les dépendances</h2>
<ul>
<li>Ne créez des dépendances que là où elles sont réelles — trop de dépendances rend le planning rigide</li>
<li>Identifiez le chemin critique dès le début du projet</li>
<li>Surveillez en priorité les tâches sur le chemin critique</li>
<li>Prévoyez des "buffers" de temps entre des tâches sur le chemin critique</li>
<li>Réévaluez les dépendances si le périmètre du projet change</li>
</ul>
<div class="encart">💡 <strong>Erreur fréquente :</strong> Mettre des dépendances sur toutes les tâches "parce que l'une est liée à l'autre". Une dépendance doit représenter un blocage réel. Si la tâche B peut avancer même si A n'est pas complètement terminée, ne créez pas de dépendance.</div>
`,
  },
  {
    slug: 'notifications-rappels-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment configurer les notifications et rappels dans un outil de gestion de projet ?",
    reponse: `
<p>Les notifications mal configurées sont l'ennemi numéro un de la productivité. Une boîte de notifications surchargée qu'on finit par ignorer est pire que pas de notification du tout. Voici comment bien les paramétrer.</p>

<h2>Matrice des notifications essentielles vs parasites</h2>
<table>
<thead><tr><th>Notification</th><th>Pertinente ?</th><th>Recommandation</th></tr></thead>
<tbody>
<tr><td>Nouvelle tâche assignée à moi</td><td>✅ Oui</td><td>Notification immédiate + email</td></tr>
<tr><td>Quelqu'un me mentionne dans un commentaire</td><td>✅ Oui</td><td>Notification immédiate</td></tr>
<tr><td>Date d'échéance J-1</td><td>✅ Oui</td><td>Notification + email</td></tr>
<tr><td>Statut changé sur une tâche que je suis</td><td>⚠️ Parfois</td><td>Résumé quotidien, pas temps réel</td></tr>
<tr><td>Chaque changement sur tous les boards</td><td>❌ Non</td><td>Désactiver</td></tr>
<tr><td>Commentaire sur une tâche que je suis</td><td>⚠️ Parfois</td><td>Résumé quotidien</td></tr>
</tbody>
</table>

<h2>Configuration dans Monday.com</h2>
<p>Monday.com propose une granularité fine :</p>
<ul>
<li>Allez dans "Mon profil" → "Notifications"</li>
<li>Choisissez entre notification in-app, email ou push mobile pour chaque événement</li>
<li>Activez le "Résumé quotidien" à 8h pour les activités non urgentes</li>
<li>Désactivez les notifications des boards où vous n'intervenez qu'en observateur</li>
</ul>

<h2>Rappels automatiques personnalisés</h2>
<p>Monday.com permet de créer des automations de rappel :</p>
<ul>
<li>"Quand une date d'échéance arrive dans 2 jours → notifier l'assigné"</li>
<li>"Quand une tâche reste 'En cours' depuis 5 jours → notifier le manager"</li>
<li>"Chaque lundi à 9h → envoyer un résumé des tâches de la semaine dans Slack"</li>
</ul>

<h2>Intégration avec Slack : la meilleure configuration</h2>
<ul>
<li>Créez un canal Slack dédié aux alertes projet (#alerts-projet)</li>
<li>Configurez Monday.com pour n'envoyer dans ce canal que les alertes critiques (jalons, blocages)</li>
<li>Gardez Slack pour la communication, l'outil de projet pour les tâches — ne mélangez pas les deux</li>
</ul>
<div class="encart">💡 <strong>Règle des 3 mois :</strong> Après 3 mois d'utilisation, faites un audit de vos notifications. Identifiez lesquelles vous passez en "lu sans lire" et désactivez-les. Revenez à un état où chaque notification reçue mérite votre attention.</div>
`,
  },
  {
    slug: 'retrospective-projet-comment-faire',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment faire une rétrospective de projet ?",
    reponse: `
<p>La rétrospective est l'une des pratiques les plus impactantes pour améliorer continuellement la performance d'une équipe. Pourtant, elle est souvent bâclée ou abandonnée. Voici comment la faire efficacement.</p>

<h2>Pourquoi la rétrospective est-elle importante ?</h2>
<ul>
<li>Elle permet d'apprendre de ses erreurs sans rechercher des coupables</li>
<li>Elle identifie ce qui fonctionne bien et qu'on doit préserver</li>
<li>Elle produit des actions concrètes d'amélioration</li>
<li>Elle renforce la cohésion d'équipe (on résout les problèmes ensemble)</li>
</ul>

<h2>Le format classique : Start / Stop / Continue</h2>
<table>
<thead><tr><th>Question</th><th>Objectif</th><th>Exemples de réponses</th></tr></thead>
<tbody>
<tr><td><strong>Start</strong> : Que devrions-nous commencer à faire ?</td><td>Nouvelles pratiques à adopter</td><td>"Faire un standup asynchrone chaque matin"</td></tr>
<tr><td><strong>Stop</strong> : Que devrions-nous arrêter de faire ?</td><td>Pratiques contre-productives</td><td>"Envoyer des emails pour des questions réglables en 2 min"</td></tr>
<tr><td><strong>Continue</strong> : Que devrions-nous continuer à faire ?</td><td>Ce qui fonctionne bien</td><td>"Les réunions hebdo de 30 min avec ordre du jour"</td></tr>
</tbody>
</table>

<h2>Autres formats populaires</h2>
<ul>
<li><strong>Mad / Sad / Glad</strong> : ce qui m'a énervé / attristé / réjoui. Plus émotionnel, bon pour les équipes en confiance.</li>
<li><strong>4L</strong> : Liked / Learned / Lacked / Longed for. Plus complet, pour des rétrospectives de projet longue durée.</li>
<li><strong>Futurespective</strong> : imaginez le projet parfait — qu'est-ce qui serait différent ? Bon pour les nouvelles équipes.</li>
</ul>

<h2>Comment l'animer efficacement</h2>
<ol>
<li><strong>Durée</strong> : 60 min pour un sprint de 2 semaines, 90 min pour un projet de 3 mois</li>
<li><strong>Anonymat</strong> : collectez d'abord les retours anonymement (post-its ou outil en ligne) puis discutez collectivement</li>
<li><strong>Règle du "pas de coupable"</strong> : on parle de processus et systèmes, pas de personnes</li>
<li><strong>Actions SMART</strong> : chaque item "Start" devient une action avec responsable et date</li>
</ol>

<h2>Outils pour animer une rétrospective</h2>
<ul>
<li><strong>Miro</strong> : post-its virtuels, idéal pour les équipes à distance</li>
<li><strong>Monday.com</strong> : créez un tableau "Rétrospective" avec les 3 colonnes et les actions</li>
<li><strong>FunRetro.io</strong> : outil dédié aux rétrospectives, gratuit</li>
</ul>
<div class="encart">💡 <strong>La règle des 2 semaines :</strong> Revenez sur les actions de la rétrospective précédente en début de la suivante. Si aucune action n'a été faite, la rétrospective ne sert à rien. C'est la discipline du suivi qui fait toute la différence.</div>
`,
  },
  {
    slug: 'partage-projet-client-externe',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Peut-on partager un projet avec un client externe ?",
    reponse: `
<p>Oui, et c'est l'une des fonctionnalités les plus valorisées par les agences, consultants et prestataires de service. Donner à votre client une visibilité sur l'avancement réduit les emails de suivi et renforce la confiance.</p>

<h2>Modes de partage selon les outils</h2>
<table>
<thead><tr><th>Outil</th><th>Mode de partage</th><th>Ce que voit le client</th><th>Coût</th></tr></thead>
<tbody>
<tr><td><strong>Monday.com</strong></td><td>Lien public ou accès guest</td><td>Tableau en lecture seule ou avec commentaires</td><td>Gratuit (guests)</td></tr>
<tr><td><strong>Notion</strong></td><td>Lien public ou page partagée</td><td>Page(s) spécifiques avec ou sans commentaires</td><td>Gratuit</td></tr>
<tr><td><strong>Trello</strong></td><td>Board en mode public ou invitation</td><td>Tout le board</td><td>Gratuit</td></tr>
<tr><td><strong>Asana</strong></td><td>Portail client dédié</td><td>Vue filtrée spécifique client</td><td>Plan Business</td></tr>
</tbody>
</table>

<h2>Ce qu'il faut montrer (et ne pas montrer) au client</h2>
<ul>
<li><strong>À montrer</strong> : livrables, jalons, dates de livraison, statuts des tâches qui le concernent</li>
<li><strong>À cacher</strong> : vos estimations de temps, vos coûts internes, les discussions d'équipe, les tâches administratives</li>
</ul>

<h2>Créer une "vue client" dans Monday.com</h2>
<ol>
<li>Créez un tableau dédié "Vue client - [Nom client]"</li>
<li>N'y mettez que les livrables et jalons visibles</li>
<li>Utilisez une automatisation pour copier l'avancement depuis vos tableaux internes</li>
<li>Invitez le client en "guest viewer" — il peut voir mais pas modifier</li>
<li>Ou envoyez un lien public sans login pour les clients moins tech</li>
</ol>

<h2>Portail client avec Notion</h2>
<p>Notion est particulièrement puissant pour créer des espaces clients soignés :</p>
<ul>
<li>Page d'accueil personnalisée avec le logo client</li>
<li>Tableau de bord des livrables avec statuts</li>
<li>Espace documents (briefs, validations, fichiers partagés)</li>
<li>Zone de commentaires et questions</li>
</ul>
<p>De nombreuses agences ont abandonné les emails de suivi client grâce à un portail Notion bien structuré.</p>
<div class="encart">💡 <strong>Avantage concurrentiel :</strong> Un portail client professionnel est un argument de vente en soi. Montrez-le lors de vos pitchs — les clients apprécient la transparence et la structure que ça démontre.</div>
`,
  },
  {
    slug: 'risques-projet-gestion',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment gérer les risques dans un projet ?",
    reponse: `
<p>La gestion des risques consiste à identifier, évaluer et traiter les événements indésirables <em>avant</em> qu'ils ne surviennent. C'est la différence entre un chef de projet qui subit les problèmes et celui qui les anticipe.</p>

<h2>Le processus de gestion des risques</h2>
<ol>
<li><strong>Identification</strong> : brainstorming en équipe — "Qu'est-ce qui pourrait mal tourner ?"</li>
<li><strong>Évaluation</strong> : probabilité (1-5) × impact (1-5) = score de criticité</li>
<li><strong>Priorisation</strong> : traiter en priorité les risques à fort score</li>
<li><strong>Réponse</strong> : choisir une stratégie pour chaque risque</li>
<li><strong>Suivi</strong> : réviser le registre des risques à chaque réunion de pilotage</li>
</ol>

<h2>Les 4 stratégies de réponse aux risques</h2>
<table>
<thead><tr><th>Stratégie</th><th>Description</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><strong>Éviter</strong></td><td>Modifier le projet pour éliminer le risque</td><td>Ne pas dépendre d'un fournisseur unique</td></tr>
<tr><td><strong>Réduire</strong></td><td>Diminuer la probabilité ou l'impact</td><td>Former l'équipe sur une technologie peu connue</td></tr>
<tr><td><strong>Transférer</strong></td><td>Passer le risque à un tiers</td><td>Souscrire une assurance, inclure une clause contractuelle</td></tr>
<tr><td><strong>Accepter</strong></td><td>Vivre avec le risque (trop coûteux à traiter)</td><td>Prévoir un budget de contingence</td></tr>
</tbody>
</table>

<h2>Registre des risques : ce qu'il doit contenir</h2>
<ul>
<li>ID et description du risque</li>
<li>Probabilité (1-5) et impact (1-5)</li>
<li>Score de criticité (P × I)</li>
<li>Stratégie de réponse choisie</li>
<li>Actions prises</li>
<li>Responsable du suivi</li>
<li>Statut (actif, résolu, clôturé)</li>
</ul>

<h2>Registre des risques dans Monday.com</h2>
<p>Créez un tableau "Registre des risques" avec ces colonnes. Utilisez :</p>
<ul>
<li>Colonne "Nombre" pour la probabilité et l'impact</li>
<li>Colonne formule pour le score (P × I)</li>
<li>Colonne couleur pour le statut (vert/orange/rouge selon le score)</li>
</ul>
<p>Revoyez ce tableau à chaque réunion de projet. Quand un risque se concrétise, il devient une issue (problème à résoudre).</p>
<div class="encart">💡 <strong>Astuce :</strong> Les meilleurs projets ne sont pas ceux où tout se passe bien — ce sont ceux où les problèmes sont détectés et gérés rapidement. Un chef de projet qui dit "aucun risque sur ce projet" ment ou n'a pas cherché.</div>
`,
  },
  {
    slug: 'cout-logiciel-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quel est le coût d'un logiciel de gestion de projet ?",
    reponse: `
<p>Le marché des outils de gestion de projet est très compétitif, ce qui tire les prix vers le bas. Il existe des options sérieuses pour tous les budgets, y compris gratuitement.</p>

<h2>Fourchettes de prix par segment</h2>
<table>
<thead><tr><th>Segment</th><th>Prix/user/mois</th><th>Pour qui</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>Gratuit</td><td>0€</td><td>Solo, 2-5 users avec limites</td><td>Trello, Monday (2 seats), Notion, ClickUp</td></tr>
<tr><td>Entrée de gamme</td><td>5–10€</td><td>Petites équipes</td><td>Trello Business, Asana Starter</td></tr>
<tr><td>Milieu de gamme</td><td>10–20€</td><td>Équipes structurées, PME</td><td>Monday.com Standard/Pro, Asana Advanced</td></tr>
<tr><td>Haut de gamme</td><td>20–35€</td><td>Entreprises avec besoins avancés</td><td>Monday.com Enterprise, Jira Premium</td></tr>
</tbody>
</table>

<h2>Simulation de coût pour une équipe de 8 personnes</h2>
<table>
<thead><tr><th>Outil</th><th>Plan</th><th>Prix/mois (8 users)</th><th>Prix/an</th></tr></thead>
<tbody>
<tr><td>Trello</td><td>Gratuit</td><td>0€</td><td>0€</td></tr>
<tr><td>Notion</td><td>Team</td><td>72€</td><td>864€</td></tr>
<tr><td>Monday.com</td><td>Basic</td><td>96€</td><td>1 152€</td></tr>
<tr><td>Monday.com</td><td>Standard</td><td>112€</td><td>1 344€</td></tr>
<tr><td>Monday.com</td><td>Pro</td><td>192€</td><td>2 304€</td></tr>
<tr><td>Asana</td><td>Advanced</td><td>160€</td><td>1 920€</td></tr>
</tbody>
</table>

<h2>Ce qui justifie les plans payants avancés</h2>
<ul>
<li><strong>Basic vs Standard (Monday.com)</strong> : la vue Gantt et les automations (indispensables pour les projets complexes)</li>
<li><strong>Standard vs Pro</strong> : time tracking, vue Workload, formules avancées</li>
<li><strong>Enterprise</strong> : SSO, conformité avancée, support dédié, contrat personnalisé</li>
</ul>

<h2>ROI d'un outil de gestion de projet</h2>
<p>Pour une équipe de 8 personnes :</p>
<ul>
<li>Gain moyen estimé : 2h/semaine/personne grâce à une meilleure organisation</li>
<li>Valeur : 2h × 8 × 50€/h × 52 semaines = 41 600€/an de productivité récupérée</li>
<li>Coût de l'outil : 1 344€/an (Monday.com Standard)</li>
<li>ROI : × 31</li>
</ul>
<div class="encart">💡 <strong>Conseil :</strong> Commencez avec le plan le moins cher qui couvre vos besoins actuels. Montez en gamme seulement quand vous atteignez les limites concrètes du plan inférieur — pas par anticipation.</div>
`,
  },
  {
    slug: 'integration-slack-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment intégrer Slack avec son outil de gestion de projet ?",
    reponse: `
<p>L'intégration Slack ↔ outil de gestion de projet est l'une des plus populaires car elle centralise les alertes importantes sans quitter l'outil de communication. Voici comment la mettre en place efficacement.</p>

<h2>Ce que permet l'intégration Slack + Monday.com</h2>
<table>
<thead><tr><th>Déclencheur dans Monday.com</th><th>Action dans Slack</th></tr></thead>
<tbody>
<tr><td>Nouvelle tâche assignée à vous</td><td>Message privé dans Slack</td></tr>
<tr><td>Tâche en retard</td><td>Alerte dans #canal-projet</td></tr>
<tr><td>Jalon atteint</td><td>Message dans #général avec 🎉</td></tr>
<tr><td>Statut passé à "Bloqué"</td><td>Alerte au manager dans Slack</td></tr>
<tr><td>Commentaire vous mentionnant</td><td>Notification privée Slack</td></tr>
</tbody>
</table>

<h2>Configuration en 5 minutes</h2>
<ol>
<li>Dans Monday.com → cliquez sur "Automations" dans votre tableau</li>
<li>Cherchez "Slack" dans la bibliothèque d'intégrations</li>
<li>Sélectionnez le déclencheur (ex: "Quand un statut change en Bloqué")</li>
<li>Sélectionnez l'action (ex: "Envoyer un message dans #alertes-projet")</li>
<li>Authentifiez votre workspace Slack</li>
</ol>

<h2>Bonne organisation des canaux Slack</h2>
<ul>
<li><strong>#proj-[nom-projet]</strong> : discussions du projet, décisions informelles</li>
<li><strong>#alertes-projet</strong> : notifications automatiques uniquement (pas de discussions)</li>
<li><strong>#general</strong> : célébrations de jalons atteints</li>
<li>Messages privés : notifications assignées à une personne</li>
</ul>

<h2>Intégrations alternatives pour n8n et Make</h2>
<p>Pour des workflows plus complexes non couverts par les intégrations natives :</p>
<ul>
<li>Récapitulatif hebdomadaire des tâches ouvertes → message Slack le vendredi 17h</li>
<li>Rapport de velocity sprint → tableau partagé dans Slack en fin de sprint</li>
<li>Alerte Slack si le budget consommé dépasse 80% → action manuelle du PM</li>
</ul>
<div class="encart">💡 <strong>Règle anti-notification-fatigue :</strong> Définissez une liste de 5 événements maximum qui méritent une notification Slack. Pour tout le reste, le membre de l'équipe consulte l'outil de projet proactivement — ne le spammez pas.</div>
`,
  },
  {
    slug: 'gestion-projet-marketing-equipe',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quel outil de gestion de projet pour une équipe marketing ?",
    reponse: `
<p>Les équipes marketing ont des besoins de gestion de projet très spécifiques : campagnes avec des délais serrés, production de contenu en volume, coordination entre créatifs et intégrateurs, suivi des KPIs. Voici les meilleures solutions.</p>

<h2>Besoins spécifiques des équipes marketing</h2>
<ul>
<li><strong>Calendrier éditorial</strong> : planifier les publications sur plusieurs semaines/mois</li>
<li><strong>Workflow de production</strong> : brief → rédaction → révision → validation → publication</li>
<li><strong>Gestion des ressources créatives</strong> : qui est disponible pour créer ce visuel ?</li>
<li><strong>Suivi des campagnes</strong> : budgets, performances, livrables par canal</li>
<li><strong>Collaboration avec les parties prenantes</strong> : retours et validations rapides</li>
</ul>

<h2>Monday.com pour le marketing</h2>
<p>Monday.com est l'outil de gestion de projet le plus utilisé dans les équipes marketing, pour plusieurs raisons :</p>
<ul>
<li><strong>Vue calendrier</strong> : parfaite pour le planning éditorial</li>
<li><strong>Formulaires intégrés</strong> : vos clients internes remplissent un brief directement dans Monday.com — ça crée automatiquement une tâche</li>
<li><strong>Automatisations marketing</strong> : "quand le visuel est validé → notifier le community manager"</li>
<li><strong>Workload view</strong> (plan Pro) : voir la charge de travail de chaque créatif</li>
<li><strong>Intégrations</strong> : Hootsuite, Buffer, Mailchimp, Google Analytics</li>
</ul>

<h2>Setup d'un calendrier éditorial dans Monday.com</h2>
<ol>
<li>Créez un tableau "Calendrier éditorial" avec colonnes : Titre / Canal / Date de publication / Statut / Assigné / Lien</li>
<li>Ajoutez des statuts : Idée / En rédaction / En révision / Validé / Programmé / Publié</li>
<li>Utilisez la vue calendrier pour visualiser la distribution des publications</li>
<li>Créez un formulaire "Demande de contenu" pour que vos collègues puissent soumettre des idées</li>
</ol>

<h2>Outils complémentaires pour les équipes marketing</h2>
<ul>
<li><strong>Canva</strong> : création de visuels, intégrable à Monday.com</li>
<li><strong>Buffer / Hootsuite</strong> : programmation des publications</li>
<li><strong>Notion</strong> : base de connaissances marketing (guides de marque, personas, messaging)</li>
</ul>
<div class="encart">💡 <strong>Processus clé :</strong> Le flux Brief → Validation → Production → Publication est la séquence qui génère le plus de friction dans les équipes marketing. Automatisez les notifications à chaque changement de statut — vous réduirez les rappels manuels de 80%.</div>
`,
  },
  {
    slug: 'onboarding-nouveau-collaborateur-outil',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment utiliser un outil de gestion de projet pour l'onboarding ?",
    reponse: `
<p>L'onboarding d'un nouveau collaborateur est souvent chaotique faute de structure. Un outil de gestion de projet transforme cet événement stressant en un processus reproductible et mesurable.</p>

<h2>Pourquoi l'onboarding doit être géré comme un projet</h2>
<ul>
<li>Il implique plusieurs équipes (IT, RH, manager, équipe)</li>
<li>Il a une date de début et des jalons (fin de période d'essai)</li>
<li>Son succès est mesurable (productivité atteinte, taux de rétention)</li>
<li>Il doit être reproductible — vous l'améliorerez à chaque nouveau recrutement</li>
</ul>

<h2>Structure d'un template d'onboarding</h2>
<table>
<thead><tr><th>Phase</th><th>Durée</th><th>Tâches types</th><th>Responsable</th></tr></thead>
<tbody>
<tr><td>Avant J1</td><td>1 semaine</td><td>Commande matériel, création comptes, accès locaux</td><td>IT + RH</td></tr>
<tr><td>Jour 1</td><td>1 jour</td><td>Accueil, visite, présentation équipe, outils</td><td>Manager + RH</td></tr>
<tr><td>Semaine 1</td><td>5 jours</td><td>Lecture doc, formations, observation</td><td>Manager</td></tr>
<tr><td>Semaines 2-4</td><td>3 semaines</td><td>Premières missions accompagnées</td><td>Manager + tuteur</td></tr>
<tr><td>Mois 2-3</td><td>2 mois</td><td>Montée en autonomie, objectifs</td><td>Manager</td></tr>
</tbody>
</table>

<h2>Template d'onboarding dans Monday.com</h2>
<ol>
<li>Créez un tableau template "Onboarding - TEMPLATE" avec toutes les tâches type</li>
<li>Pour chaque nouvel employé : dupliquez ce tableau, renommez-le "Onboarding - [Prénom]"</li>
<li>Ajustez les dates selon la date d'arrivée</li>
<li>Assignez chaque tâche au responsable concerné</li>
<li>Invitez le nouvel employé — il voit lui-même sa feuille de route</li>
</ol>

<h2>L'onboarding vu du côté du nouveau</h2>
<p>Un des avantages méconnus : inviter le nouveau à accéder à son plan d'onboarding dès le premier jour lui donne un sentiment de structure et de clarté. Il sait exactement ce qui l'attend, ce qu'on attend de lui, et peut cocher ses propres tâches.</p>

<h2>Mesurer la qualité de l'onboarding</h2>
<ul>
<li>Taux de complétion du plan à J+30 et J+60</li>
<li>Enquête de satisfaction à J+30 (NPS onboarding)</li>
<li>Temps pour la première contribution autonome</li>
</ul>
<div class="encart">💡 <strong>Économie réelle :</strong> Un mauvais onboarding coûte en moyenne 3 à 6 mois de salaire (temps perdu + risque de départ précoce). Un template d'onboarding bien construit coûte 2h à créer et se réutilise indéfiniment.</div>
`,
  },
]
