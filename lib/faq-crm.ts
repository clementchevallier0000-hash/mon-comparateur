import type { FaqItem } from './faq'

export const FAQ_CRM: FaqItem[] = [
  {
    slug: 'quest-ce-qu-un-crm',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: "Qu'est-ce qu'un CRM ?",
    reponse: `
<p>Un <strong>CRM (Customer Relationship Management)</strong>, ou logiciel de gestion de la relation client, est un outil qui centralise toutes les informations sur vos clients, prospects et partenaires commerciaux. Il remplace les tableurs Excel, les post-its et les boîtes email en désordre par une base de données structurée et collaborative.</p>

<h2>À quoi sert concrètement un CRM ?</h2>
<p>Le CRM remplit trois grandes fonctions dans une entreprise :</p>
<ul>
<li><strong>Centraliser les données clients</strong> : coordonnées, historique des échanges, contrats signés, préférences, notes de l'équipe commerciale.</li>
<li><strong>Piloter l'activité commerciale</strong> : visualiser le pipeline des ventes, suivre chaque opportunité par étape, prévoir le chiffre d'affaires à venir.</li>
<li><strong>Automatiser les tâches répétitives</strong> : rappels de relance, envoi d'emails de suivi, assignation automatique des leads aux commerciaux.</li>
</ul>

<h2>Les différents types de CRM</h2>
<table>
<thead><tr><th>Type</th><th>Objectif principal</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>CRM commercial</td><td>Pipeline, suivi des ventes</td><td>Pipedrive, Folk, Capsule</td></tr>
<tr><td>CRM marketing</td><td>Segmentation, automation email</td><td>Brevo, ActiveCampaign</td></tr>
<tr><td>CRM tout-en-un</td><td>Ventes + marketing + service</td><td>HubSpot, Zoho CRM</td></tr>
<tr><td>CRM ERP intégré</td><td>Ventes + facturation + gestion</td><td>Sellsy, Axonaut</td></tr>
</tbody>
</table>

<h2>Pourquoi un CRM est indispensable dès 2 commerciaux</h2>
<p>Sans CRM, chaque commercial gère ses contacts dans sa propre boîte email. Quand il part, l'entreprise perd toute la connaissance client. Avec un CRM, l'historique complet reste dans l'outil, accessible par toute l'équipe.</p>
<p>Les entreprises qui utilisent un CRM augmentent en moyenne leur taux de conversion de <strong>29%</strong> et leur productivité commerciale de <strong>34%</strong> (source : Salesforce State of Sales).</p>

<h2>CRM vs tableur Excel : la différence clé</h2>
<ul>
<li>Excel ne rappelle pas de relancer un prospect — le CRM envoie une alerte automatique</li>
<li>Excel ne se met pas à jour en temps réel pour toute l'équipe — le CRM si</li>
<li>Excel ne génère pas de reporting commercial automatique — le CRM le fait en un clic</li>
<li>Excel ne s'intègre pas à votre messagerie — le CRM enregistre les emails automatiquement</li>
</ul>

<h2>Par où commencer ?</h2>
<p>Pour une première expérience CRM, commencez par un outil simple comme <strong>Pipedrive</strong> ou <strong>Capsule</strong>. Importez vos contacts depuis Excel, créez votre pipeline en 5 étapes (Prospect → Contacté → Démo → Devis → Gagné) et utilisez l'outil 3 semaines avant d'ajouter des automatisations.</p>
<div class="encart">💡 <strong>Bon à savoir :</strong> La plupart des CRM proposent une période d'essai gratuite de 14 à 30 jours, sans carte bancaire. Profitez-en pour tester avant de vous engager.</div>
`,
  },
  {
    slug: 'crm-pour-petite-entreprise',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Quel CRM choisir pour une petite entreprise ?',
    reponse: `
<p>Pour une petite entreprise (moins de 10 personnes), le bon CRM doit être <strong>simple à prendre en main, abordable et efficace dès le premier jour</strong>. Pas besoin d'un mastodonte comme Salesforce — les outils taillés pour les TPE/PME sont largement suffisants et bien plus adaptés.</p>

<h2>Critères prioritaires pour une petite structure</h2>
<ul>
<li><strong>Prise en main rapide</strong> : vous n'avez pas le temps de former une équipe pendant des semaines</li>
<li><strong>Prix raisonnable</strong> : idéalement sous 30€/utilisateur/mois</li>
<li><strong>Pipeline visuel</strong> : pour voir d'un coup d'œil où en sont vos ventes</li>
<li><strong>Intégration email</strong> : Gmail ou Outlook connecté nativement</li>
<li><strong>Support en français</strong> : précieux quand vous avez une question urgente</li>
</ul>

<h2>Comparatif des meilleurs CRM pour petite entreprise</h2>
<table>
<thead><tr><th>Outil</th><th>Prix mensuel</th><th>Point fort</th><th>Idéal pour</th></tr></thead>
<tbody>
<tr><td><strong>Pipedrive</strong></td><td>14€/user (annuel)</td><td>Pipeline commercial</td><td>Équipes commerciales</td></tr>
<tr><td><strong>Folk</strong></td><td>27€/user (annuel)</td><td>Interface moderne</td><td>Réseaux et relations</td></tr>
<tr><td><strong>Capsule</strong></td><td>15€/user (annuel)</td><td>Simplicité</td><td>Débutants CRM</td></tr>
<tr><td><strong>Zoho CRM</strong></td><td>14€/user (annuel)</td><td>Rapport qualité/prix</td><td>TPE avec budget serré</td></tr>
<tr><td><strong>Sellsy</strong></td><td>35€/user (annuel)</td><td>CRM + facturation</td><td>Tout-en-un français</td></tr>
</tbody>
</table>

<h2>Notre recommandation selon votre profil</h2>
<ul>
<li><strong>Vous vendez à des entreprises (B2B)</strong> → Pipedrive : pipeline clair, relances automatiques, idéal pour les cycles de vente structurés</li>
<li><strong>Vous gérez un réseau (freelance, conseil, agence)</strong> → Folk : très souple, connecté LinkedIn, parfait pour les relations moins formelles</li>
<li><strong>Vous voulez aussi facturer depuis le CRM</strong> → Sellsy ou Axonaut : tout-en-un français, RGPD nativement</li>
<li><strong>Vous démarrez et voulez tester gratuitement</strong> → Capsule (plan gratuit 2 utilisateurs) ou Zoho CRM (plan gratuit 3 utilisateurs)</li>
</ul>

<h2>Les erreurs à éviter</h2>
<ul>
<li>Choisir un CRM trop complexe (HubSpot complet, Salesforce) sans ressources pour le paramétrer</li>
<li>Ne pas migrer ses contacts depuis Excel le premier jour — l'outil reste vide et inutilisé</li>
<li>Vouloir tout automatiser dès le départ plutôt que de maîtriser les bases</li>
</ul>
<div class="encart">💡 <strong>Conseil :</strong> Choisissez l'outil que vous utiliserez vraiment, pas le plus complet sur le papier. Un CRM simple utilisé chaque jour vaut mieux qu'un CRM puissant ouvert une fois par semaine.</div>
`,
  },
  {
    slug: 'crm-gratuit-existe-t-il',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Existe-t-il un CRM gratuit ?',
    reponse: `
<p>Oui, plusieurs CRM sérieux proposent des plans gratuits utilisables en production, pas seulement pour tester. Mais il faut comprendre leurs limites pour choisir le bon.</p>

<h2>Les meilleurs CRM gratuits en 2026</h2>
<table>
<thead><tr><th>CRM</th><th>Utilisateurs</th><th>Contacts</th><th>Limites principales</th></tr></thead>
<tbody>
<tr><td><strong>HubSpot CRM</strong></td><td>Illimité</td><td>Illimité</td><td>Fonctions avancées payantes, logo HubSpot sur les emails</td></tr>
<tr><td><strong>Zoho CRM</strong></td><td>3 max</td><td>Illimité</td><td>Pas d'automatisation, pas de rapports avancés</td></tr>
<tr><td><strong>Capsule</strong></td><td>2 max</td><td>250 max</td><td>Très limité en contacts</td></tr>
<tr><td><strong>Henrri</strong></td><td>1</td><td>Illimité</td><td>CRM basique + facturation, solo uniquement</td></tr>
<tr><td><strong>Pipedrive</strong></td><td>—</td><td>—</td><td>Pas de plan gratuit (essai 14 jours)</td></tr>
</tbody>
</table>

<h2>HubSpot CRM gratuit : le plus généreux</h2>
<p>HubSpot est le CRM gratuit le plus complet du marché. Vous bénéficiez gratuitement de :</p>
<ul>
<li>Contacts et entreprises illimités</li>
<li>Pipeline de deals</li>
<li>Suivi des emails (ouvertures, clics)</li>
<li>Formulaires et landing pages basiques</li>
<li>Planification de réunions (Calendly-like intégré)</li>
</ul>
<p>La limite ? Dès que vous voulez des séquences d'emails automatisées, des workflows avancés ou enlever le logo HubSpot, il faut passer aux plans payants qui coûtent cher (à partir de 45€/mois).</p>

<h2>Quand le gratuit suffit, quand il ne suffit pas</h2>
<ul>
<li><strong>Gratuit suffisant si</strong> : vous êtes solo ou en binôme, vous démarrez, vous avez peu de contacts, vous n'avez pas besoin d'automatisation</li>
<li><strong>Gratuit insuffisant si</strong> : votre équipe dépasse 3 personnes, vous voulez des relances automatiques, vous avez besoin de rapports détaillés, vous gérez des milliers de contacts</li>
</ul>

<h2>L'alternative : les essais gratuits</h2>
<p>Si le plan gratuit est trop limité, plusieurs CRM proposent des <strong>essais de 14 à 30 jours</strong> sans carte bancaire :</p>
<ul>
<li>Pipedrive : 14 jours</li>
<li>Folk : 14 jours</li>
<li>Sellsy : 15 jours</li>
<li>Capsule : 14 jours (plan Growth)</li>
</ul>
<div class="encart">💡 <strong>Stratégie recommandée :</strong> Commencez avec HubSpot gratuit pour apprendre les bases du CRM. Quand vous atteignez ses limites (en général après 6 à 12 mois), migrez vers un outil payant mieux adapté à vos besoins.</div>
`,
  },
  {
    slug: 'crm-vs-erp-difference',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Quelle est la différence entre un CRM et un ERP ?',
    reponse: `
<p>CRM et ERP sont deux acronymes souvent confondus alors qu'ils couvrent des périmètres très différents. La confusion vient du fait que certains outils modernes combinent les deux — mais à la base, ce sont des logiciels distincts.</p>

<h2>Définitions</h2>
<ul>
<li><strong>CRM</strong> (Customer Relationship Management) : gère la relation avec les clients et prospects. Il regarde vers l'<em>extérieur</em> de l'entreprise — vos ventes, votre pipeline commercial, vos contacts.</li>
<li><strong>ERP</strong> (Enterprise Resource Planning) : gère les ressources internes de l'entreprise. Il regarde vers l'<em>intérieur</em> — votre comptabilité, vos stocks, vos ressources humaines, votre production.</li>
</ul>

<h2>Tableau comparatif CRM vs ERP</h2>
<table>
<thead><tr><th>Critère</th><th>CRM</th><th>ERP</th></tr></thead>
<tbody>
<tr><td>Objectif</td><td>Gérer les clients et ventes</td><td>Gérer les opérations internes</td></tr>
<tr><td>Utilisateurs principaux</td><td>Commerciaux, marketing</td><td>Comptabilité, RH, logistique</td></tr>
<tr><td>Données gérées</td><td>Contacts, opportunités, emails</td><td>Factures, stock, salaires, production</td></tr>
<tr><td>Horizon temporel</td><td>Court terme (pipeline)</td><td>Moyen/long terme (bilan)</td></tr>
<tr><td>Exemples</td><td>Pipedrive, Folk, Capsule</td><td>SAP, Oracle, Sage</td></tr>
<tr><td>Prix TPE/PME</td><td>10–50€/user/mois</td><td>100–500€+/user/mois</td></tr>
</tbody>
</table>

<h2>Les solutions hybrides CRM + ERP pour PME</h2>
<p>La bonne nouvelle : pour les TPE/PME françaises, des solutions hybrides combinent CRM et fonctions ERP sans la complexité ni le prix des vrais ERP :</p>
<ul>
<li><strong>Sellsy</strong> : CRM + facturation + trésorerie + gestion commerciale. Idéal pour les PME de 5 à 50 personnes.</li>
<li><strong>Axonaut</strong> : CRM + facturation + comptabilité + projet. Solution française tout-en-un très appréciée des PME.</li>
<li><strong>Karlia</strong> : CRM + gestion de projet + facturation. Plus orienté agences et prestataires de services.</li>
</ul>

<h2>Quelle solution choisir ?</h2>
<ul>
<li><strong>Moins de 10 salariés, activité de service</strong> : un CRM seul (Pipedrive, Folk) + logiciel de facturation séparé</li>
<li><strong>10 à 50 salariés, activité mixte</strong> : solution hybride type Sellsy ou Axonaut</li>
<li><strong>Plus de 50 salariés, activité industrielle</strong> : ERP complet (Sage, SAP) + CRM intégré</li>
</ul>
<div class="encart">💡 <strong>Conseil :</strong> Ne payez pas pour un ERP si vous n'avez pas besoin de gérer des stocks ou des lignes de production. Pour 95% des prestataires de services, un CRM + logiciel de facturation couvre tous les besoins.</div>
`,
  },
  {
    slug: 'crm-pipeline-commercial-c-est-quoi',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: "C'est quoi un pipeline commercial dans un CRM ?",
    reponse: `
<p>Le <strong>pipeline commercial</strong> est la colonne vertébrale d'un CRM. C'est une représentation visuelle de toutes vos opportunités de vente, organisées par étapes successives — de la première prise de contact jusqu'à la signature du contrat.</p>

<h2>Comment fonctionne un pipeline ?</h2>
<p>Chaque ligne (ou carte) représente une opportunité commerciale : un prospect avec qui vous êtes en discussion. Ces opportunités sont réparties dans des colonnes correspondant aux étapes de votre processus de vente.</p>
<p>Un pipeline classique pour une PME B2B :</p>
<ol>
<li><strong>Lead entrant</strong> — prospect qui a manifesté un intérêt</li>
<li><strong>Qualification</strong> — vous avez vérifié qu'il a le besoin, le budget, l'autorité</li>
<li><strong>Rendez-vous / Démo</strong> — présentation de votre solution</li>
<li><strong>Devis envoyé</strong> — proposition commerciale transmise</li>
<li><strong>Négociation</strong> — ajustements en cours</li>
<li><strong>Gagné / Perdu</strong> — deal conclu ou perdu</li>
</ol>

<h2>Ce que le pipeline vous permet de faire</h2>
<table>
<thead><tr><th>Action</th><th>Sans pipeline</th><th>Avec pipeline CRM</th></tr></thead>
<tbody>
<tr><td>Voir toutes vos ventes en cours</td><td>Consulter plusieurs fichiers Excel</td><td>Vue Kanban en un coup d'œil</td></tr>
<tr><td>Savoir quoi faire ensuite</td><td>Chercher dans les emails</td><td>Tâche suivante affichée sur chaque deal</td></tr>
<tr><td>Prévoir son CA</td><td>Calcul manuel</td><td>Prévisionnel automatique (montant × probabilité)</td></tr>
<tr><td>Identifier les opportunités bloquées</td><td>Impossible</td><td>Alerte si deal inactif depuis X jours</td></tr>
</tbody>
</table>

<h2>Pipedrive : le spécialiste du pipeline</h2>
<p>Pipedrive a été conçu autour du concept de pipeline — c'est son ADN. Son interface Kanban permet de déplacer les deals d'une étape à l'autre par glisser-déposer, d'ajouter des notes, des fichiers, des activités planifiées et des rappels automatiques.</p>
<p>Vous pouvez créer <strong>plusieurs pipelines distincts</strong> si vous gérez des processus de vente différents (ex : clients directs vs partenaires revendeurs).</p>

<h2>Indicateurs clés à suivre dans votre pipeline</h2>
<ul>
<li><strong>Taux de conversion par étape</strong> : combien de deals passent de la qualification à la démo ?</li>
<li><strong>Durée moyenne par étape</strong> : où se bloquent les deals ?</li>
<li><strong>Valeur du pipeline</strong> : CA potentiel total si tous les deals se concluent</li>
<li><strong>Vélocité</strong> : combien de temps en moyenne pour signer un deal ?</li>
</ul>
<div class="encart">💡 <strong>Bon à savoir :</strong> Un deal qui reste plus de 3× la durée moyenne dans une étape sans activité est un signal d'alarme. La plupart des CRM peuvent vous alerter automatiquement.</div>
`,
  },
  {
    slug: 'integrer-crm-avec-email',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Comment intégrer un CRM avec sa messagerie email ?',
    reponse: `
<p>L'intégration CRM + email est l'une des premières choses à configurer — c'est elle qui élimine la double saisie et permet d'avoir tout l'historique d'échange dans le CRM automatiquement.</p>

<h2>Les 3 modes d'intégration email</h2>
<table>
<thead><tr><th>Mode</th><th>Fonctionnement</th><th>Avantages</th></tr></thead>
<tbody>
<tr><td><strong>BCC automatique</strong></td><td>Adresse BCC unique à ajouter en copie de vos emails</td><td>Simple, fonctionne avec tout client email</td></tr>
<tr><td><strong>Extension navigateur</strong></td><td>Plugin Gmail/Outlook qui enregistre les emails dans le CRM</td><td>Zéro friction, très pratique</td></tr>
<tr><td><strong>Intégration native bidirectionnelle</strong></td><td>Synchronisation complète emails envoyés ET reçus</td><td>Historique complet sans action manuelle</td></tr>
</tbody>
</table>

<h2>Intégration Gmail</h2>
<p><strong>Pipedrive</strong>, <strong>Capsule</strong> et <strong>Folk</strong> proposent une extension Chrome pour Gmail. En un clic depuis votre email, vous pouvez :</p>
<ul>
<li>Associer l'email au bon contact dans le CRM</li>
<li>Créer une activité de suivi (rappel, appel)</li>
<li>Voir l'historique complet du contact sans quitter Gmail</li>
<li>Voir si vos emails ont été ouverts</li>
</ul>

<h2>Intégration Outlook</h2>
<p>La plupart des CRM proposent aussi un add-in Outlook. <strong>Zoho CRM</strong> et <strong>Sellsy</strong> ont des intégrations natives solides avec l'écosystème Microsoft 365.</p>

<h2>Configuration étape par étape (Pipedrive + Gmail)</h2>
<ol>
<li>Dans Pipedrive → Paramètres → Intégrations → Gmail</li>
<li>Autoriser l'accès à votre compte Google</li>
<li>Installer l'extension Chrome Pipedrive</li>
<li>Dans Gmail, l'encart Pipedrive apparaît en sidebar</li>
<li>Premier email : cliquer "Associer à un contact"</li>
</ol>

<h2>Aller plus loin : synchronisation avec Make</h2>
<p>Pour des scénarios plus complexes (ex : créer automatiquement un deal CRM quand un email contient un mot-clé précis, ou notifier Slack quand un prospect répond), connectez votre CRM à votre messagerie via <strong>Make</strong>. La flexibilité est totale.</p>
<div class="encart-warning">⚠️ <strong>RGPD :</strong> En enregistrant les emails de vos contacts dans le CRM, vous stockez des données personnelles. Vérifiez que votre CRM héberge les données en Europe et que vos conditions de traitement sont à jour.</div>
`,
  },
  {
    slug: 'crm-nombre-utilisateurs',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Les CRM facturent-ils par utilisateur ?',
    reponse: `
<p>Oui, la quasi-totalité des CRM facturent <strong>par utilisateur et par mois</strong>. Le prix affiché est donc un prix par siège — vous devez le multiplier par le nombre de membres de votre équipe commerciale qui auront accès à l'outil.</p>

<h2>Modèles de tarification des CRM</h2>
<table>
<thead><tr><th>Modèle</th><th>Fonctionnement</th><th>Exemples</th><th>Avantage</th></tr></thead>
<tbody>
<tr><td><strong>Par utilisateur/mois</strong></td><td>Prix × nombre de sièges</td><td>Pipedrive, Folk, Zoho CRM</td><td>Scalable, payez ce que vous utilisez</td></tr>
<tr><td><strong>Prix global</strong></td><td>Tarif unique indépendant du nombre d'utilisateurs</td><td>Axonaut</td><td>Très avantageux pour les équipes moyennes</td></tr>
<tr><td><strong>Par contact</strong></td><td>Prix selon volume de contacts gérés</td><td>ActiveCampaign (marketing)</td><td>Adapté aux bases de contacts importantes</td></tr>
<tr><td><strong>Freemium</strong></td><td>Gratuit jusqu'à X utilisateurs</td><td>HubSpot, Zoho, Capsule</td><td>Bon pour tester</td></tr>
</tbody>
</table>

<h2>Simulation de coût pour une équipe de 5 commerciaux</h2>
<table>
<thead><tr><th>CRM</th><th>Prix/user/mois</th><th>Total 5 users/mois</th><th>Total annuel</th></tr></thead>
<tbody>
<tr><td>Capsule Starter</td><td>15€</td><td>75€</td><td>900€</td></tr>
<tr><td>Pipedrive Growth</td><td>39€</td><td>195€</td><td>2 340€</td></tr>
<tr><td>Folk Premium</td><td>43€</td><td>215€</td><td>2 580€</td></tr>
<tr><td>Sellsy Evolution</td><td>49€</td><td>245€</td><td>2 940€</td></tr>
<tr><td>Axonaut (global)</td><td>~58€ tout compris</td><td>~58€</td><td>~700€</td></tr>
</tbody>
</table>

<h2>Axonaut : l'exception qui confirme la règle</h2>
<p>Axonaut est un cas particulier : il facture un prix global basé sur la durée d'engagement, pas par utilisateur. Pour une équipe de 5+ personnes, cela devient rapidement bien plus économique que les CRM traditionnels par siège.</p>

<h2>Utilisateurs "viewer" : attention aux coûts cachés</h2>
<p>Certains CRM distinguent les utilisateurs "actifs" (qui saisissent des données) et les "viewers" (qui lisent seulement). Vérifiez si votre manager ou dirigeant qui veut juste consulter les tableaux de bord paie le même tarif qu'un commercial actif. Chez Pipedrive, tous les accès sont payants.</p>
<div class="encart">💡 <strong>Conseil :</strong> Négociez votre contrat si vous prévoyez d'avoir 5 utilisateurs ou plus. La plupart des éditeurs proposent des remises sur volume, surtout en engagement annuel.</div>
`,
  },
  {
    slug: 'crm-mobile-application',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: "Y a-t-il des CRM avec une bonne application mobile ?",
    reponse: `
<p>L'application mobile d'un CRM est souvent négligée lors du choix, mais elle est déterminante pour les commerciaux qui passent leur temps en déplacement chez les clients. Un CRM inutilisable sur smartphone = données jamais saisies en temps réel.</p>

<h2>Comparatif des apps mobiles CRM</h2>
<table>
<thead><tr><th>CRM</th><th>Note App Store</th><th>Note Play Store</th><th>Points forts mobile</th></tr></thead>
<tbody>
<tr><td><strong>Pipedrive</strong></td><td>4,6/5</td><td>4,4/5</td><td>Pipeline complet, cartes de visite, appels intégrés</td></tr>
<tr><td><strong>Zoho CRM</strong></td><td>4,3/5</td><td>4,3/5</td><td>Accès offline, géolocalisation clients</td></tr>
<tr><td><strong>HubSpot</strong></td><td>4,5/5</td><td>4,3/5</td><td>Dashboard, notifications, emails</td></tr>
<tr><td><strong>Capsule</strong></td><td>4,2/5</td><td>4,1/5</td><td>Simple et rapide, contacts et tâches</td></tr>
<tr><td><strong>Folk</strong></td><td>3,8/5</td><td>3,7/5</td><td>App basique, web prioritaire</td></tr>
</tbody>
</table>

<h2>Fonctionnalités mobiles indispensables</h2>
<ul>
<li><strong>Scan de cartes de visite</strong> : créez un contact instantanément après un salon professionnel</li>
<li><strong>Enregistrement d'appels</strong> : notez le résumé d'un appel juste après avoir raccroché</li>
<li><strong>Accès offline</strong> : consultez vos contacts même sans réseau (en zone blanche, en avion)</li>
<li><strong>Notifications push</strong> : alertes pour les relances et rappels en temps réel</li>
<li><strong>Géolocalisation</strong> : voir les clients à proximité lors d'un déplacement</li>
</ul>

<h2>Pipedrive : la meilleure app mobile pour les commerciaux terrain</h2>
<p>L'application Pipedrive est reconnue comme l'une des meilleures du marché. Elle propose notamment :</p>
<ul>
<li>Un pipeline tactile facile à manipuler</li>
<li>La dictée vocale pour saisir des notes rapidement après un RDV</li>
<li>L'appel depuis l'app avec enregistrement automatique dans le deal</li>
<li>Le scan de cartes de visite pour créer un contact en 5 secondes</li>
</ul>

<h2>Zoho CRM : le champion du mode offline</h2>
<p>Si vos commerciaux interviennent sur des sites sans réseau (industrie, chantiers, zones rurales), Zoho CRM propose un <strong>mode offline</strong> complet : les données se synchronisent automatiquement quand la connexion revient.</p>
<div class="encart">💡 <strong>À faire avant de choisir :</strong> Téléchargez l'app mobile du CRM que vous testez et utilisez-la pendant 3 jours. L'expérience mobile est souvent très différente de la version desktop.</div>
`,
  },
  {
    slug: 'crm-francais-existe-t-il',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Existe-t-il des CRM français ?',
    reponse: `
<p>Oui, la France dispose d'un écosystème solide de CRM et logiciels de gestion développés localement. Ces solutions ont plusieurs avantages concrets : support en français, conformité RGPD native, données hébergées en Europe et une fiscalité française bien maîtrisée.</p>

<h2>Les principaux CRM français</h2>
<table>
<thead><tr><th>Outil</th><th>Localisation</th><th>Positionnement</th><th>Prix de départ</th></tr></thead>
<tbody>
<tr><td><strong>Sellsy</strong></td><td>La Rochelle</td><td>CRM + facturation + trésorerie</td><td>35€/user/mois (annuel)</td></tr>
<tr><td><strong>Axonaut</strong></td><td>Toulouse</td><td>CRM + ERP léger tout-en-un</td><td>58€/mois (global)</td></tr>
<tr><td><strong>Karlia</strong></td><td>France</td><td>CRM + gestion de projet</td><td>29€/user/mois</td></tr>
<tr><td><strong>Henrri</strong></td><td>France</td><td>CRM + facturation (indépendants)</td><td>Gratuit / 17€/mois</td></tr>
</tbody>
</table>

<h2>Avantages concrets des CRM français</h2>
<ul>
<li><strong>Support en français</strong> : équipe disponible aux horaires français, sans barrière linguistique</li>
<li><strong>RGPD by design</strong> : conçus avec la réglementation européenne, pas adaptés a posteriori</li>
<li><strong>Hébergement OVH/Scaleway</strong> : données en France ou en Europe, pas aux USA</li>
<li><strong>Facturation française maîtrisée</strong> : TVA, e-facture, numérotation légale — tout est intégré</li>
<li><strong>Proximité culturelle</strong> : les workflows sont pensés pour les entreprises françaises</li>
</ul>

<h2>Sellsy : le plus complet pour les PME françaises</h2>
<p>Sellsy est l'un des leaders français sur le segment CRM + facturation + gestion commerciale. Fondé en 2009, il est utilisé par plus de 8 000 PME françaises. Son atout principal : tout est dans un seul outil — CRM, devis, facturation, trésorerie, relances, signature électronique.</p>
<p>Depuis la réforme de la facturation électronique (2026), Sellsy est l'un des premiers éditeurs français à être conformes en tant que plateforme de dématérialisation partenaire (PDP).</p>

<h2>Axonaut : le tout-en-un pour artisans et PME</h2>
<p>Axonaut est particulièrement apprécié des PME de 2 à 30 personnes qui veulent un seul outil pour tout gérer. Son modèle tarifaire global (pas par utilisateur) le rend très compétitif pour les équipes de 5 personnes ou plus.</p>
<div class="encart">💡 <strong>Bon à savoir :</strong> Choisir un CRM français vous permet souvent de bénéficier du <strong>Crédit d'Impôt pour la Compétitivité et l'Emploi (CICE)</strong> indirect via des éditeurs qui participent à l'économie locale. Certains sont éligibles aux aides à la numérisation des PME (France Num).</div>
`,
  },
  {
    slug: 'crm-automatisation-relances',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Peut-on automatiser les relances avec un CRM ?',
    reponse: `
<p>Oui, et c'est l'une des fonctionnalités les plus précieuses d'un CRM moderne. Les relances manuelles sont chronophages et systématiquement oubliées — l'automatisation garantit qu'aucun prospect ne tombe dans les oubliettes.</p>

<h2>Les 3 niveaux d'automatisation des relances</h2>
<table>
<thead><tr><th>Niveau</th><th>Fonctionnement</th><th>Outils</th></tr></thead>
<tbody>
<tr><td><strong>Rappels manuels</strong></td><td>Le CRM vous alerte, vous relancez manuellement</td><td>Tous les CRM</td></tr>
<tr><td><strong>Séquences d'emails</strong></td><td>Emails de relance envoyés automatiquement selon un planning</td><td>Pipedrive, Sellsy, ActiveCampaign</td></tr>
<tr><td><strong>Automation conditionnelle</strong></td><td>Relances déclenchées par le comportement (email ouvert, page visitée)</td><td>ActiveCampaign, HubSpot</td></tr>
</tbody>
</table>

<h2>Automatisation des relances dans Pipedrive</h2>
<p>Pipedrive propose des <strong>workflows automatisés</strong> (disponibles à partir du plan Advanced à 39€/mois) :</p>
<ul>
<li>Si un deal reste dans "Devis envoyé" depuis 5 jours sans activité → envoyer un email de relance automatique</li>
<li>Si un deal n'a aucune activité depuis 10 jours → créer un rappel "Appeler le prospect"</li>
<li>Si une note est ajoutée → notifier le manager par email</li>
</ul>

<h2>Sellsy : relances intégrées côté facturation ET commercial</h2>
<p>Sellsy automatise les relances sur deux fronts :</p>
<ul>
<li><strong>Côté commercial</strong> : séquences de relance prospects dans le CRM</li>
<li><strong>Côté facturation</strong> : relances automatiques des factures impayées (J+3, J+10, J+30)</li>
</ul>

<h2>Aller plus loin avec Make ou n8n</h2>
<p>Pour des automatisations plus complexes, connectez votre CRM à Make :</p>
<ul>
<li>Si un prospect visite votre page tarifs → créer une activité "Appeler sous 24h"</li>
<li>Si un deal est perdu → envoyer une enquête de satisfaction</li>
<li>Si un deal est gagné → créer automatiquement la facture dans Sellsy</li>
</ul>
<div class="encart">💡 <strong>Règle des 3 relances :</strong> La plupart des ventes se concluent après 5 à 8 points de contact. Pourtant, 44% des commerciaux abandonnent après un seul suivi. Automatisez pour ne jamais être dans ce cas.</div>
`,
  },
  {
    slug: 'crm-donnees-rgpd',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Comment gérer les données clients dans un CRM en respectant le RGPD ?',
    reponse: `
<p>Le RGPD (Règlement Général sur la Protection des Données) s'applique directement à votre CRM puisque vous y stockez des données personnelles de prospects et clients. Voici comment être conforme sans que ça devienne un casse-tête.</p>

<h2>Les 5 obligations RGPD pour votre CRM</h2>
<ol>
<li><strong>Base légale</strong> : pour chaque contact, notez pourquoi vous traitez ses données (consentement, intérêt légitime, exécution d'un contrat)</li>
<li><strong>Information</strong> : vos prospects doivent savoir que leurs données sont dans votre CRM (politique de confidentialité)</li>
<li><strong>Durée de conservation</strong> : définissez une règle (ex : suppression après 3 ans d'inactivité)</li>
<li><strong>Droit à l'effacement</strong> : capacité à supprimer toutes les données d'un contact sur demande</li>
<li><strong>Sécurité</strong> : hébergement sécurisé, accès restreints, mots de passe robustes</li>
</ol>

<h2>Champ "base légale" : quoi mettre ?</h2>
<table>
<thead><tr><th>Situation</th><th>Base légale</th></tr></thead>
<tbody>
<tr><td>Le contact a rempli un formulaire en cochant une case consentement</td><td>Consentement</td></tr>
<tr><td>Le contact est un client avec qui vous avez un contrat</td><td>Exécution du contrat</td></tr>
<tr><td>Prospection B2B (pro à pro) raisonnablement ciblée</td><td>Intérêt légitime</td></tr>
<tr><td>Déclaration à l'administration fiscale</td><td>Obligation légale</td></tr>
</tbody>
</table>

<h2>CRM et conformité RGPD : bonnes pratiques</h2>
<ul>
<li>Créez un champ personnalisé "Date de consentement" dans votre CRM</li>
<li>Paramétrez une alerte de suppression automatique après 36 mois d'inactivité</li>
<li>Limitez l'accès aux données sensibles par rôle (pas toute l'équipe ne doit voir tout)</li>
<li>Documentez vos traitements dans un registre (obligatoire pour les structures de +250 salariés, recommandé pour toutes)</li>
</ul>

<h2>Quels CRM pour une conformité RGPD facilitée ?</h2>
<ul>
<li><strong>Sellsy</strong> et <strong>Axonaut</strong> : hébergement en France, exports de données faciles, conformes aux exigences françaises</li>
<li><strong>Zoho CRM</strong> : fonctions RGPD dédiées (consentement, portabilité, suppression)</li>
<li><strong>HubSpot</strong> : module RGPD intégré (gestion des consentements email)</li>
</ul>
<div class="encart-warning">⚠️ <strong>Attention :</strong> Les CRM américains (Salesforce, HubSpot) hébergent par défaut aux USA. Vérifiez qu'ils proposent un hébergement EU et signez un DPA (Data Processing Agreement) avec eux.</div>
`,
  },
  {
    slug: 'crm-b2b-vs-b2c',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'CRM B2B ou B2C : quelle différence ?',
    reponse: `
<p>Le CRM que vous choisissez doit être adapté à votre modèle commercial. Les besoins d'une entreprise qui vend à d'autres entreprises (B2B) sont fondamentalement différents de ceux d'une entreprise qui vend directement aux consommateurs (B2C).</p>

<h2>Différences structurelles B2B vs B2C</h2>
<table>
<thead><tr><th>Critère</th><th>B2B</th><th>B2C</th></tr></thead>
<tbody>
<tr><td>Volume de contacts</td><td>Faible à moyen (dizaines à milliers)</td><td>Élevé à très élevé (milliers à millions)</td></tr>
<tr><td>Cycle de vente</td><td>Long (semaines à mois)</td><td>Court (minutes à jours)</td></tr>
<tr><td>Interlocuteurs</td><td>Plusieurs par compte (DG, acheteur, utilisateur)</td><td>Un seul (le consommateur)</td></tr>
<tr><td>Valeur unitaire</td><td>Élevée</td><td>Faible à moyenne</td></tr>
<tr><td>Relation</td><td>Personnalisée, suivie par un commercial</td><td>Automatisée, marketing-first</td></tr>
</tbody>
</table>

<h2>CRM B2B : les priorités</h2>
<p>En B2B, vous gérez des <em>comptes</em> (entreprises) avec plusieurs <em>contacts</em> rattachés à chaque compte. Votre CRM doit gérer cette hiérarchie Compte → Contact → Opportunité.</p>
<ul>
<li><strong>Pipeline visuel</strong> avec étapes personnalisables</li>
<li><strong>Gestion des comptes</strong> (plusieurs contacts par entreprise)</li>
<li><strong>Suivi des activités</strong> (appels, emails, RDV, devis)</li>
<li><strong>Prévision de CA</strong></li>
</ul>
<p><strong>Meilleurs CRM B2B :</strong> Pipedrive, Sellsy, Folk, Zoho CRM, Capsule</p>

<h2>CRM B2C : les priorités</h2>
<p>En B2C, vous gérez de nombreux contacts avec moins d'interactions individuelles. Le CRM doit gérer des segments, des campagnes et des automatisations à grande échelle.</p>
<ul>
<li><strong>Segmentation avancée</strong> par comportement, achat, géographie</li>
<li><strong>Marketing automation</strong> (emails déclenchés, paniers abandonnés)</li>
<li><strong>Intégration e-commerce</strong> (Shopify, WooCommerce)</li>
<li><strong>SMS et notifications push</strong></li>
</ul>
<p><strong>Meilleurs CRM B2C :</strong> Brevo, ActiveCampaign, Klaviyo, Sendinblue</p>

<h2>Et si vous êtes les deux ?</h2>
<p>Certaines entreprises ont un canal B2B (grands comptes gérés par des commerciaux) et un canal B2C (vente directe en ligne). Dans ce cas, deux outils sont souvent préférables : un CRM B2B (Pipedrive) + une plateforme marketing B2C (Brevo), reliés par Make.</p>
`,
  },
  {
    slug: 'crm-migration-donnees',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Comment migrer ses données vers un nouveau CRM ?',
    reponse: `
<p>Changer de CRM est souvent repoussé par peur de perdre des données. Pourtant, une migration bien préparée se fait en quelques jours sans perte. Voici la méthode étape par étape.</p>

<h2>Les 5 étapes d'une migration CRM réussie</h2>
<ol>
<li><strong>Audit et export</strong> : exportez tout depuis l'ancien outil (contacts, comptes, deals, notes, activités) en CSV ou via l'API</li>
<li><strong>Nettoyage</strong> : supprimez les doublons, corrigez les formats, remplissez les champs manquants (beaucoup d'entreprises profitent de la migration pour nettoyer leur base)</li>
<li><strong>Mapping des champs</strong> : faites correspondre les colonnes de votre CSV aux champs du nouveau CRM</li>
<li><strong>Import test</strong> : importez d'abord 50 contacts pour vérifier que tout s'affiche correctement</li>
<li><strong>Import complet + validation</strong> : importez toutes les données et vérifiez un échantillon</li>
</ol>

<h2>Ce qui se migre facilement vs difficilement</h2>
<table>
<thead><tr><th>Données</th><th>Migration</th><th>Méthode</th></tr></thead>
<tbody>
<tr><td>Contacts et entreprises</td><td>✅ Facile</td><td>Import CSV standard</td></tr>
<tr><td>Champs personnalisés</td><td>✅ Facile</td><td>Créer les champs dans le nouveau CRM avant l'import</td></tr>
<tr><td>Deals et opportunités</td><td>⚠️ Moyen</td><td>Export séparé, association manuelle aux contacts</td></tr>
<tr><td>Historique des emails</td><td>❌ Difficile</td><td>Rarement migrable, gardez l'accès à l'ancien outil 3 mois</td></tr>
<tr><td>Documents et pièces jointes</td><td>❌ Difficile</td><td>Migration manuelle ou API selon les outils</td></tr>
</tbody>
</table>

<h2>Outils qui facilitent la migration</h2>
<ul>
<li><strong>Pipedrive</strong> et <strong>Folk</strong> : imports CSV avec assistant de mapping guidé</li>
<li><strong>HubSpot</strong> : import wizard très complet avec détection automatique des doublons</li>
<li><strong>Make</strong> : pour les migrations complexes via API, connecte deux CRM et transfère les données en masse</li>
</ul>

<h2>Durée et planning recommandés</h2>
<ul>
<li>Semaine 1 : export, nettoyage et paramétrage du nouveau CRM</li>
<li>Semaine 2 : import test et ajustements</li>
<li>Semaine 3 : import complet, formation équipe, période de double saisie</li>
<li>Semaine 4 : décommissionnement progressif de l'ancien outil</li>
</ul>
<div class="encart">💡 <strong>Conseil :</strong> Ne coupez pas l'accès à l'ancien CRM immédiatement. Gardez-le en lecture seule pendant 3 mois — votre équipe aura inévitablement besoin de retrouver une information de l'historique.</div>
`,
  },
  {
    slug: 'crm-vs-excel-tableur',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: "Pourquoi passer d'Excel à un CRM ?",
    reponse: `
<p>Excel reste l'outil de suivi commercial numéro un des PME françaises — et c'est précisément le problème. Si Excel est excellent comme tableur de calcul, il est fondamentalement inadapté à la gestion de la relation client. Voici pourquoi le passage à un CRM est inévitable dès que l'activité commerciale se structure.</p>

<h2>Excel vs CRM : comparaison directe</h2>
<table>
<thead><tr><th>Besoin</th><th>Excel</th><th>CRM</th></tr></thead>
<tbody>
<tr><td>Stockage des contacts</td><td>✅ Oui (basique)</td><td>✅ Oui (enrichi)</td></tr>
<tr><td>Rappels et alertes de relance</td><td>❌ Non</td><td>✅ Automatiques</td></tr>
<tr><td>Travail collaboratif simultané</td><td>❌ Conflits de version</td><td>✅ Temps réel</td></tr>
<tr><td>Historique des échanges email</td><td>❌ Non</td><td>✅ Synchronisé</td></tr>
<tr><td>Pipeline visuel</td><td>❌ Compliqué à maintenir</td><td>✅ Natif</td></tr>
<tr><td>Rapports commerciaux automatiques</td><td>❌ Formules manuelles</td><td>✅ Tableaux de bord live</td></tr>
<tr><td>Application mobile</td><td>❌ Peu pratique</td><td>✅ App dédiée</td></tr>
<tr><td>Intégration email/agenda</td><td>❌ Non</td><td>✅ Oui</td></tr>
</tbody>
</table>

<h2>Le vrai coût caché d'Excel</h2>
<p>Excel semble gratuit, mais il a un coût invisible :</p>
<ul>
<li><strong>Temps perdu</strong> : 30 à 60 min/semaine par commercial à mettre à jour le fichier manuellement</li>
<li><strong>Perte de deals</strong> : relances oubliées = prospects qui se tournent vers un concurrent</li>
<li><strong>Départs et perte de savoir</strong> : quand un commercial part, ses contacts dans "son" fichier partent avec lui</li>
<li><strong>Pas de prévision</strong> : impossible de savoir ce que vous allez facturer le mois prochain</li>
</ul>

<h2>À quel moment basculer vers un CRM ?</h2>
<ul>
<li>Vous avez 2 commerciaux ou plus qui partagent un fichier</li>
<li>Vous gérez plus de 100 prospects actifs en simultané</li>
<li>Vous oubliez régulièrement de relancer des prospects</li>
<li>Vous ne savez pas combien vous allez facturer le mois prochain</li>
</ul>

<h2>Comment faire la transition sans rupture ?</h2>
<ol>
<li>Exportez votre fichier Excel en CSV</li>
<li>Importez-le dans le CRM (Pipedrive, Capsule, Folk)</li>
<li>Formez votre équipe en 1h max sur les 3 actions clés (créer un contact, faire avancer un deal, ajouter une activité)</li>
<li>Laissez 2 semaines de parallèle puis coupez Excel</li>
</ol>
<div class="encart">💡 <strong>Coût réel :</strong> Un CRM comme Pipedrive coûte 14€/mois/utilisateur. Si un commercial signe un deal supplémentaire par trimestre grâce aux relances automatisées, le ROI est immédiat.</div>
`,
  },
  {
    slug: 'crm-reporting-ventes',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Quels rapports peut-on générer avec un CRM ?',
    reponse: `
<p>Les rapports sont l'un des avantages les plus sous-estimés d'un CRM. Là où Excel demande des heures de formules et de mises à jour manuelles, un CRM génère des rapports en temps réel en quelques clics — et permet de piloter votre activité commerciale avec précision.</p>

<h2>Les 6 rapports essentiels d'un CRM</h2>
<table>
<thead><tr><th>Rapport</th><th>Ce qu'il vous dit</th><th>Utilité</th></tr></thead>
<tbody>
<tr><td>Pipeline par étape</td><td>Nombre et valeur des deals à chaque stade</td><td>Identifier les goulots d'étranglement</td></tr>
<tr><td>Prévision de CA</td><td>CA attendu basé sur les deals en cours × probabilité</td><td>Anticiper la trésorerie</td></tr>
<tr><td>Performance par commercial</td><td>Deals signés, CA, taux de conversion, activités</td><td>Manager l'équipe commerciale</td></tr>
<tr><td>Sources d'acquisition</td><td>D'où viennent vos meilleurs clients ?</td><td>Optimiser les investissements marketing</td></tr>
<tr><td>Taux de conversion par étape</td><td>Combien de leads deviennent clients ?</td><td>Identifier où améliorer le processus</td></tr>
<tr><td>Deals perdus et raisons</td><td>Pourquoi vous n'avez pas signé</td><td>Adapter l'offre et le discours</td></tr>
</tbody>
</table>

<h2>Rapport prévisionnel : le plus important</h2>
<p>Le rapport de prévision commerciale (forecast) est souvent ce qui convainc les dirigeants de passer à un CRM. Il calcule automatiquement :</p>
<ul>
<li>Le CA "pondéré" : montant de chaque deal × probabilité de closing</li>
<li>Le CA "engagé" : deals en phase avancée (devis signé, commande reçue)</li>
<li>Le CA "potentiel" : tout le pipeline si tous les deals se concluent</li>
</ul>

<h2>Rapports avancés avec Pipedrive et Sellsy</h2>
<p><strong>Pipedrive</strong> propose dans ses plans Advanced et plus :</p>
<ul>
<li>Tableaux de bord personnalisables avec 20+ types de widgets</li>
<li>Rapports de performance des emails envoyés</li>
<li>Rapports d'activités (appels, emails, réunions par commercial)</li>
</ul>
<p><strong>Sellsy</strong> ajoute des rapports côté facturation : trésorerie prévisionnelle, encours clients, factures impayées par commercial.</p>

<h2>Pour des rapports ultra-personnalisés : connectez un outil BI</h2>
<p>Si vous avez besoin de croiser les données CRM avec d'autres sources (données compta, marketing, production), connectez votre CRM à un outil BI comme Google Looker Studio (gratuit) ou PowerBI via <strong>Make</strong> ou une API directe.</p>
<div class="encart">💡 <strong>Réunion de pipeline hebdomadaire :</strong> La pratique qui génère le plus de résultats : une réunion de 30 min chaque lundi où l'équipe commerciale ouvre le rapport pipeline et traite les deals bloqués un par un.</div>
`,
  },
  {
    slug: 'crm-prix-moyen',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: "Quel est le prix moyen d'un CRM ?",
    reponse: `
<p>Le prix d'un CRM varie de 0€ à plusieurs centaines d'euros par utilisateur et par mois selon les fonctionnalités et la taille de l'éditeur. Voici une grille complète pour vous repérer.</p>

<h2>Fourchettes de prix par segment</h2>
<table>
<thead><tr><th>Segment</th><th>Prix/user/mois</th><th>Pour qui</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td>Gratuit</td><td>0€</td><td>Solo, 1-3 users, besoins basiques</td><td>HubSpot Free, Zoho Free, Henrri</td></tr>
<tr><td>Entrée de gamme</td><td>10–20€</td><td>TPE, petites équipes</td><td>Capsule Starter, Zoho Standard</td></tr>
<tr><td>Milieu de gamme</td><td>20–50€</td><td>PME, équipes structurées</td><td>Pipedrive Growth, Folk, Sellsy</td></tr>
<tr><td>Haut de gamme</td><td>50–150€</td><td>ETI, besoins avancés</td><td>HubSpot Sales Pro, Salesforce Essentials</td></tr>
<tr><td>Enterprise</td><td>150€+</td><td>Grands comptes</td><td>Salesforce Enterprise, HubSpot Enterprise</td></tr>
</tbody>
</table>

<h2>Simulation de budget annuel pour une PME de 5 commerciaux</h2>
<table>
<thead><tr><th>CRM</th><th>Plan</th><th>Budget mensuel</th><th>Budget annuel</th></tr></thead>
<tbody>
<tr><td>Capsule</td><td>Growth</td><td>140€</td><td>1 680€</td></tr>
<tr><td>Pipedrive</td><td>Essential</td><td>70€</td><td>840€</td></tr>
<tr><td>Pipedrive</td><td>Growth</td><td>195€</td><td>2 340€</td></tr>
<tr><td>Folk</td><td>Premium</td><td>215€</td><td>2 580€</td></tr>
<tr><td>Sellsy</td><td>Evolution</td><td>245€</td><td>2 940€</td></tr>
<tr><td>Axonaut</td><td>1 an</td><td>58€</td><td>698€</td></tr>
</tbody>
</table>

<h2>Facturation mensuelle vs annuelle : l'impact</h2>
<p>La plupart des CRM proposent une remise de <strong>20 à 40%</strong> en passant à la facturation annuelle. Exemple avec Pipedrive :</p>
<ul>
<li>Plan Growth mensuel : 49€/user/mois</li>
<li>Plan Growth annuel : 39€/user/mois (soit -20%)</li>
<li>Économie pour 5 utilisateurs : 600€/an</li>
</ul>

<h2>Ce qui fait monter la facture</h2>
<ul>
<li>Fonctions d'automatisation avancées (workflows)</li>
<li>Rapports et tableaux de bord personnalisés</li>
<li>Intégrations premium (téléphonie, BI)</li>
<li>Support prioritaire</li>
<li>Stockage et nombre de contacts illimités</li>
</ul>
<div class="encart">💡 <strong>ROI typique :</strong> Un commercial qui utilise correctement un CRM signe en moyenne 29% de deals en plus (Salesforce). À 40 000€ de CA annuel par commercial, +29% = +11 600€. L'investissement CRM à 2 000€/an se rembourse en quelques semaines.</div>
`,
  },
  {
    slug: 'crm-secteur-immobilier',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Quel CRM pour le secteur immobilier ?',
    reponse: `
<p>L'immobilier a des besoins spécifiques qu'un CRM généraliste peut couvrir s'il est bien paramétré : gestion des mandats et biens, suivi des visites, relances acheteurs et vendeurs, documents légaux. Voici comment choisir.</p>

<h2>Besoins spécifiques du CRM immobilier</h2>
<ul>
<li><strong>Fiche bien</strong> : surface, adresse, prix, photos, type, statut (disponible, compromis, vendu)</li>
<li><strong>Matching acheteurs/biens</strong> : associer les critères des acheteurs aux biens disponibles</li>
<li><strong>Suivi des visites</strong> : planification, compte-rendu, retours des acheteurs</li>
<li><strong>Gestion des mandats</strong> : date de signature, durée, conditions</li>
<li><strong>Documents légaux</strong> : génération des compromis, promesses de vente</li>
</ul>

<h2>Options CRM pour l'immobilier</h2>
<table>
<thead><tr><th>Solution</th><th>Type</th><th>Prix</th><th>Avantage</th></tr></thead>
<tbody>
<tr><td><strong>Pipedrive</strong></td><td>Généraliste adapté</td><td>14€/mois</td><td>Pipeline visuel, champs personnalisés pour les biens</td></tr>
<tr><td><strong>Folk</strong></td><td>Généraliste adapté</td><td>27€/mois</td><td>Flexible, tags et filtres puissants</td></tr>
<tr><td><strong>Yanport</strong></td><td>Spécialisé immo</td><td>Sur devis</td><td>Modules immo natifs, portails connectés</td></tr>
<tr><td><strong>Hektor</strong></td><td>Spécialisé immo</td><td>Sur devis</td><td>Gestion de mandats, diffusion portails</td></tr>
</tbody>
</table>

<h2>Comment configurer Pipedrive pour l'immobilier</h2>
<ol>
<li>Créer deux pipelines : "Mandats vendeurs" et "Recherches acheteurs"</li>
<li>Ajouter des champs personnalisés sur les contacts : budget, surface recherchée, secteur géographique, délai d'achat</li>
<li>Créer une "organisation" par bien (avec surface, prix, adresse en champs personnalisés)</li>
<li>Utiliser les tags pour classer les biens (type, statut, secteur)</li>
<li>Paramétrer des rappels automatiques pour les relances acheteurs et vendeurs</li>
</ol>

<h2>Notre recommandation</h2>
<p>Pour un agent indépendant ou une petite agence (1-5 agents) : <strong>Pipedrive ou Folk</strong> bien configurés sont largement suffisants et bien moins chers que les solutions spécialisées.</p>
<p>Pour une agence de 10 agents ou plus avec des besoins de diffusion multi-portails (SeLoger, Leboncoin, PAP) : investissez dans une solution spécialisée comme Hektor ou Yanport.</p>
`,
  },
  {
    slug: 'crm-freelance-independant',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Un CRM est-il utile pour un freelance ?',
    reponse: `
<p>Absolument, même en solo. Un freelance a souvent plus besoin d'un CRM qu'il ne le pense — non pas pour gérer une équipe commerciale, mais pour ne jamais oublier de relancer un prospect, pour connaître à l'avance son carnet de commandes, et pour professionnaliser sa relation client.</p>

<h2>Ce qu'un CRM apporte concrètement à un freelance</h2>
<ul>
<li><strong>Zéro prospect oublié</strong> : rappels automatiques pour relancer sous 48h ou en fin de mois</li>
<li><strong>Pipeline de missions</strong> : voir en un coup d'œil les missions en cours, à venir et les prospects en discussion</li>
<li><strong>Prévision de CA</strong> : savoir à l'avance si le mois prochain sera creux ou chargé</li>
<li><strong>Historique client</strong> : retrouver en 5 secondes la dernière conversation avec un client qui rappelle</li>
<li><strong>Professionnalisme</strong> : relances personnalisées plutôt que des emails génériques</li>
</ul>

<h2>Meilleurs CRM pour freelances en 2026</h2>
<table>
<thead><tr><th>Outil</th><th>Prix solo</th><th>Avantage clé</th><th>Inclut facturation ?</th></tr></thead>
<tbody>
<tr><td><strong>Folk</strong></td><td>27€/mois</td><td>Interface moderne, LinkedIn</td><td>Non</td></tr>
<tr><td><strong>Capsule</strong></td><td>Gratuit (250 contacts)</td><td>Très simple</td><td>Non</td></tr>
<tr><td><strong>Freebe</strong></td><td>10–15€/mois</td><td>CRM + facturation intégré</td><td>✅ Oui</td></tr>
<tr><td><strong>Axonaut</strong></td><td>58€/mois</td><td>CRM + facturation + compta</td><td>✅ Oui</td></tr>
<tr><td><strong>Sellsy</strong></td><td>35€/mois</td><td>CRM + facturation pro</td><td>✅ Oui</td></tr>
</tbody>
</table>

<h2>Freebe : conçu pour les indépendants</h2>
<p>Freebe est l'une des rares solutions pensées spécifiquement pour les indépendants français (micro-entrepreneurs, EI, SASU). Elle combine :</p>
<ul>
<li>Un CRM basique pour suivre prospects et clients</li>
<li>La facturation avec devis et factures conformes</li>
<li>Le suivi du CA et des cotisations sociales</li>
<li>Les frais kilométriques</li>
</ul>

<h2>Quand un CRM devient indispensable pour un freelance</h2>
<ul>
<li>Vous gérez plus de 10 prospects en simultané</li>
<li>Vous avez perdu un deal parce que vous avez oublié de relancer</li>
<li>Vous ne savez pas combien vous allez facturer dans 2 mois</li>
<li>Vous avez du mal à retrouver l'historique d'échanges avec un client</li>
</ul>
<div class="encart">💡 <strong>Conseil pour démarrer :</strong> Si vous ne gérez pas encore beaucoup de prospects, commencez avec Capsule (gratuit, 250 contacts) ou HubSpot gratuit. Passez à un outil payant quand vos limites sont atteintes.</div>
`,
  },
  {
    slug: 'crm-integration-comptabilite',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Comment connecter un CRM à sa comptabilité ?',
    reponse: `
<p>La connexion CRM ↔ comptabilité est l'intégration qui génère le plus de gain de temps pour les PME. Elle élimine la double saisie : quand un deal est signé dans le CRM, la facture se crée automatiquement dans le logiciel comptable.</p>

<h2>Les 3 approches de connexion CRM + comptabilité</h2>
<table>
<thead><tr><th>Approche</th><th>Fonctionnement</th><th>Pour qui</th></tr></thead>
<tbody>
<tr><td><strong>Outil tout-en-un</strong></td><td>CRM et compta dans le même logiciel</td><td>PME qui veulent simplifier</td></tr>
<tr><td><strong>Intégration native</strong></td><td>Connecteur officiel entre deux outils</td><td>Utilisateurs de solutions établies</td></tr>
<tr><td><strong>Automatisation via Make</strong></td><td>Flux personnalisé entre n'importe quels outils</td><td>Besoins sur mesure</td></tr>
</tbody>
</table>

<h2>Option 1 : L'outil tout-en-un (recommandé pour PME)</h2>
<p>Les solutions françaises comme <strong>Sellsy</strong> et <strong>Axonaut</strong> intègrent nativement CRM + facturation + comptabilité. Avantages :</p>
<ul>
<li>Zéro synchronisation à configurer — tout est dans une seule base de données</li>
<li>Un deal gagné → devis → facture en 3 clics</li>
<li>Rapports commerciaux et financiers dans la même interface</li>
</ul>

<h2>Option 2 : Connexions natives populaires</h2>
<ul>
<li>Pipedrive + QuickBooks : connecteur natif officiel</li>
<li>HubSpot + Stripe : synchronisation des paiements vers les deals</li>
<li>Zoho CRM + Zoho Books : intégration native de l'écosystème Zoho</li>
<li>Folk + Indy : via Make (pas de connecteur natif)</li>
</ul>

<h2>Option 3 : Automatisation avec Make</h2>
<p>Make permet de connecter n'importe quel CRM à n'importe quel logiciel de facturation/comptabilité. Exemple de scénario :</p>
<ol>
<li>Deal "Gagné" dans Pipedrive</li>
<li>Make récupère les informations (client, montant, description)</li>
<li>Make crée la facture dans Tiime ou Indy</li>
<li>Notification envoyée dans Slack à la comptable</li>
</ol>
<p>Ce scénario se met en place en 2h environ, sans coder.</p>

<h2>Données à synchroniser en priorité</h2>
<ul>
<li>Client (nom, SIRET, adresse) : créé dans le CRM, répliqué dans la compta</li>
<li>Deal gagné → facture créée automatiquement</li>
<li>Paiement reçu → deal mis à jour dans le CRM</li>
<li>Facture en retard → alerte dans le CRM pour le commercial</li>
</ul>
<div class="encart">💡 <strong>Gain de temps moyen :</strong> Une PME qui automatise CRM ↔ facturation économise en moyenne 3 à 5h de double saisie par semaine, soit 150 à 250h par an.</div>
`,
  },
  {
    slug: 'crm-delai-prise-en-main',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Combien de temps faut-il pour prendre en main un CRM ?',
    reponse: `
<p>La prise en main d'un CRM dépend fortement de l'outil choisi et de l'expérience de l'équipe. Voici des estimations réalistes et des conseils pour accélérer l'adoption.</p>

<h2>Délais de prise en main par outil</h2>
<table>
<thead><tr><th>CRM</th><th>Prise en main basique</th><th>Maîtrise complète</th><th>Niveau de complexité</th></tr></thead>
<tbody>
<tr><td><strong>Capsule</strong></td><td>1 jour</td><td>1 semaine</td><td>⭐ Très simple</td></tr>
<tr><td><strong>Folk</strong></td><td>1–2 jours</td><td>1–2 semaines</td><td>⭐⭐ Simple</td></tr>
<tr><td><strong>Pipedrive</strong></td><td>2–3 jours</td><td>2–3 semaines</td><td>⭐⭐ Simple</td></tr>
<tr><td><strong>Zoho CRM</strong></td><td>1 semaine</td><td>1 mois</td><td>⭐⭐⭐ Modéré</td></tr>
<tr><td><strong>Sellsy</strong></td><td>1–2 semaines</td><td>1–2 mois</td><td>⭐⭐⭐ Modéré</td></tr>
<tr><td><strong>HubSpot (complet)</strong></td><td>2–4 semaines</td><td>3–6 mois</td><td>⭐⭐⭐⭐ Complexe</td></tr>
<tr><td><strong>Salesforce</strong></td><td>1–3 mois</td><td>6–12 mois</td><td>⭐⭐⭐⭐⭐ Expert</td></tr>
</tbody>
</table>

<h2>La méthode des 3 étapes pour une adoption rapide</h2>
<ol>
<li><strong>Semaine 1 — Les bases</strong> : importer les contacts, créer un deal, ajouter une activité. Se limiter à ces 3 actions.</li>
<li><strong>Semaine 2-3 — L'habitude</strong> : ouvrir le CRM chaque matin, mettre à jour le pipeline, cocher les activités terminées.</li>
<li><strong>Semaine 4+ — L'optimisation</strong> : configurer les automatisations, personnaliser les rapports, connecter les intégrations.</li>
</ol>

<h2>Les pièges qui ralentissent l'adoption</h2>
<ul>
<li><strong>Vouloir tout configurer avant de commencer</strong> : commencez avec la config par défaut</li>
<li><strong>Former toute l'équipe en une seule fois</strong> : une personne référente qui forme les autres progressivement</li>
<li><strong>Choisir un outil trop complexe</strong> : mieux vaut un CRM simple utilisé qu'un CRM complet non adopté</li>
<li><strong>Ne pas nettoyer les données avant d'importer</strong> : partez d'une base propre</li>
</ul>

<h2>Ressources pour accélérer la prise en main</h2>
<ul>
<li>Pipedrive Academy : cours vidéo gratuits en anglais (avec sous-titres FR)</li>
<li>Sellsy Academy : tutoriels vidéo en français</li>
<li>YouTube : cherchez "[nom du CRM] tutoriel débutant" — de nombreux créateurs FR</li>
<li>Support chat : tous les CRM cités ont un support live disponible</li>
</ul>
<div class="encart">💡 <strong>Indicateur de réussite :</strong> Si après 30 jours votre équipe ouvre le CRM spontanément chaque matin sans qu'on le leur rappelle, l'adoption est réussie.</div>
`,
  },
]
