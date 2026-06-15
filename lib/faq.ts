export interface FaqItem {
  slug: string
  question: string
  reponse: string  // HTML
  categorie: string
  categorieLabel: string
}

export const FAQ_CATEGORIES: Record<string, string> = {
  'crm':                 'CRM',
  'facturation':         'Facturation',
  'gestion-de-projet':   'Gestion de projet',
  'seo':                 'SEO',
  'automatisation':      'Automatisation',
}

export const FAQ_ITEMS: FaqItem[] = [

  // ─── CRM ────────────────────────────────────────────────────────────────────

  {
    slug: 'quest-ce-qu-un-crm',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: "Qu'est-ce qu'un CRM ?",
    reponse: `<p>Un <strong>CRM (Customer Relationship Management)</strong> est un logiciel qui centralise toutes les informations sur vos clients et prospects : coordonnées, historique des échanges, opportunités commerciales, devis envoyés.</p>
<p>L'objectif est simple : ne plus perdre d'information et suivre chaque relation client de bout en bout. Plutôt que de jongler entre emails, tableurs et post-its, tout est dans un seul outil.</p>
<p>Un CRM typique propose : la gestion des contacts, un pipeline commercial visuel, des rappels automatiques et des rapports de performance commerciale.</p>`,
  },
  {
    slug: 'crm-pour-petite-entreprise',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Quel CRM choisir pour une petite entreprise ?',
    reponse: `<p>Pour une petite entreprise (moins de 10 personnes), la priorité est la <strong>simplicité et le prix</strong>. Les outils les plus adaptés :</p>
<ul>
<li><strong>Pipedrive</strong> : interface pipeline très intuitive, idéal pour les équipes commerciales. À partir de 14€/mois.</li>
<li><strong>Folk</strong> : CRM léger et moderne, parfait pour les indépendants et petites équipes.</li>
<li><strong>Capsule</strong> : très simple à prendre en main, bon rapport qualité/prix.</li>
</ul>
<p>Évitez les mastodontes comme Salesforce en dessous de 20 personnes : trop complexes et trop chers.</p>`,
  },
  {
    slug: 'crm-gratuit-existe-t-il',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Existe-t-il un CRM gratuit ?',
    reponse: `<p>Oui, plusieurs CRM proposent une version gratuite utilisable sérieusement :</p>
<ul>
<li><strong>HubSpot CRM</strong> : version gratuite très complète, mais les fonctions avancées sont vite payantes.</li>
<li><strong>Zoho CRM</strong> : plan gratuit jusqu'à 3 utilisateurs avec les fonctions de base.</li>
<li><strong>Henrri</strong> : plan gratuit avec CRM + facturation pour les indépendants.</li>
</ul>
<p>Attention : les versions gratuites ont des limites (contacts, utilisateurs, automatisations). Pour une utilisation professionnelle sérieuse, un plan payant est souvent nécessaire après quelques mois.</p>`,
  },
  {
    slug: 'crm-vs-erp-difference',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Quelle est la différence entre un CRM et un ERP ?',
    reponse: `<p>La différence est fondamentale :</p>
<ul>
<li>Un <strong>CRM</strong> gère la relation client : contacts, pipeline commercial, emails, suivi des ventes. Il regarde vers l'extérieur (vos clients).</li>
<li>Un <strong>ERP</strong> gère les ressources internes de l'entreprise : comptabilité, stock, RH, production. Il regarde vers l'intérieur (votre organisation).</li>
</ul>
<p>Certains outils comme <strong>Sellsy</strong> ou <strong>Axonaut</strong> combinent CRM + facturation + gestion, ce qui les rapproche d'un ERP léger — très pratique pour les PME qui ne veulent pas multiplier les outils.</p>`,
  },
  {
    slug: 'crm-pipeline-commercial-c-est-quoi',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: "C'est quoi un pipeline commercial dans un CRM ?",
    reponse: `<p>Un <strong>pipeline commercial</strong> est une représentation visuelle de vos opportunités de vente, organisées par étapes : prospect contacté → démo réalisée → devis envoyé → négociation → gagné / perdu.</p>
<p>Chaque carte représente une affaire en cours. En un coup d'œil, vous savez où en est chaque opportunité et ce qui doit être fait ensuite.</p>
<p><strong>Pipedrive</strong> est conçu autour de ce concept : son interface pipeline est l'une des plus claires du marché. C'est son point fort numéro un.</p>`,
  },
  {
    slug: 'integrer-crm-avec-email',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Comment intégrer un CRM avec sa messagerie email ?',
    reponse: `<p>La plupart des CRM modernes s'intègrent nativement avec Gmail et Outlook. Voici comment ça fonctionne :</p>
<ol>
<li>Vous installez une extension ou connectez votre compte email dans les paramètres du CRM.</li>
<li>Vos emails envoyés et reçus sont automatiquement associés au bon contact dans le CRM.</li>
<li>Vous pouvez souvent envoyer des emails directement depuis l'interface du CRM.</li>
</ol>
<p>Pour aller plus loin, des outils comme <strong>Brevo</strong> permettent d'envoyer des séquences d'emails automatisées déclenchées par des événements dans votre CRM.</p>`,
  },
  {
    slug: 'crm-nombre-utilisateurs',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Les CRM facturent-ils par utilisateur ?',
    reponse: `<p>Oui, la grande majorité des CRM facturent <strong>par utilisateur et par mois</strong>. Le prix indiqué est donc à multiplier par le nombre de membres de votre équipe.</p>
<p>Exemples :</p>
<ul>
<li><strong>Pipedrive</strong> : 14€/mois/utilisateur (annuel)</li>
<li><strong>Folk</strong> : 21€/mois/membre (annuel)</li>
<li><strong>Zoho CRM</strong> : 14€/mois/utilisateur (annuel)</li>
</ul>
<p>Exception : <strong>Axonaut</strong> facture un prix global (non par utilisateur), ce qui peut être très avantageux pour les équipes moyennes.</p>`,
  },
  {
    slug: 'crm-mobile-application',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Y a-t-il des CRM avec une bonne application mobile ?',
    reponse: `<p>Oui, plusieurs CRM disposent d'applications mobiles solides :</p>
<ul>
<li><strong>Pipedrive</strong> : app iOS/Android bien notée, permet de gérer son pipeline en déplacement.</li>
<li><strong>Zoho CRM</strong> : application mobile complète avec accès offline.</li>
<li><strong>Capsule</strong> : app simple et rapide, idéale pour les commerciaux terrain.</li>
</ul>
<p>Si votre équipe commerciale est souvent en déplacement client, la qualité de l'app mobile est un critère de choix important à vérifier avant de s'engager.</p>`,
  },
  {
    slug: 'crm-francais-existe-t-il',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Existe-t-il des CRM français ?',
    reponse: `<p>Oui, plusieurs CRM sont développés en France et proposent un support en français :</p>
<ul>
<li><strong>Sellsy</strong> : CRM + facturation + gestion commerciale 100% français. Très complet pour les PME.</li>
<li><strong>Axonaut</strong> : ERP/CRM français tout-en-un, très apprécié des PME et TPE.</li>
<li><strong>Karlia</strong> : CRM français centré sur la gestion de projet et la relation client.</li>
</ul>
<p>Avantage des solutions françaises : support client en français, conformité RGPD native, données hébergées en Europe.</p>`,
  },
  {
    slug: 'crm-automatisation-relances',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Peut-on automatiser les relances avec un CRM ?',
    reponse: `<p>Oui, c'est l'une des fonctions les plus puissantes des CRM modernes. Vous pouvez :</p>
<ul>
<li>Créer des rappels automatiques ("si pas de réponse après 3 jours, m'alerter")</li>
<li>Envoyer des emails de relance automatiques selon le stade du pipeline</li>
<li>Déclencher des séquences d'emails sur plusieurs semaines</li>
</ul>
<p>Pour des automatisations avancées, combinez votre CRM avec un outil dédié comme <strong>Make</strong> ou <strong>n8n</strong> qui permettent de connecter votre CRM à n'importe quel autre service.</p>`,
  },
  {
    slug: 'crm-donnees-rgpd',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Comment gérer les données clients dans un CRM en respectant le RGPD ?',
    reponse: `<p>Le RGPD impose des règles précises sur la collecte et la conservation des données personnelles. Dans votre CRM :</p>
<ul>
<li>Notez la <strong>base légale</strong> du traitement (consentement, intérêt légitime, contrat)</li>
<li>Prévoyez une <strong>durée de conservation</strong> et supprimez les contacts inactifs</li>
<li>Respectez le <strong>droit à l'effacement</strong> : supprimez les données sur demande</li>
<li>Choisissez un CRM avec <strong>hébergement en Europe</strong></li>
</ul>
<p>Les CRM français comme <strong>Sellsy</strong> et <strong>Axonaut</strong> sont conçus avec le RGPD en tête et proposent des fonctions d'export et suppression de données conformes.</p>`,
  },
  {
    slug: 'crm-b2b-vs-b2c',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'CRM B2B ou B2C : quelle différence ?',
    reponse: `<p>Les besoins diffèrent selon votre modèle :</p>
<ul>
<li><strong>CRM B2B</strong> : gestion des comptes (entreprises) avec plusieurs contacts par compte, cycles de vente longs, pipeline commercial, devis. <strong>Pipedrive</strong>, <strong>Sellsy</strong> et <strong>Folk</strong> excellent ici.</li>
<li><strong>CRM B2C</strong> : volumes de contacts élevés, segmentation, marketing automation, emails en masse. <strong>Brevo</strong> ou <strong>ActiveCampaign</strong> sont plus adaptés.</li>
</ul>
<p>Certains outils comme <strong>Zoho CRM</strong> couvrent les deux cas d'usage grâce à leur modularité.</p>`,
  },
  {
    slug: 'crm-migration-donnees',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Comment migrer ses données vers un nouveau CRM ?',
    reponse: `<p>La migration de CRM se fait généralement en 4 étapes :</p>
<ol>
<li><strong>Exporter</strong> vos données de l'ancien outil (CSV ou via API)</li>
<li><strong>Nettoyer</strong> les données : doublons, champs vides, formats incompatibles</li>
<li><strong>Importer</strong> dans le nouveau CRM via leur outil d'import CSV ou leur API</li>
<li><strong>Vérifier</strong> que toutes les relations (contacts → comptes → opportunités) sont bien reconstruites</li>
</ol>
<p>La plupart des CRM proposent un support à la migration. <strong>Folk</strong> et <strong>Pipedrive</strong> ont des guides détaillés et des imports CSV très simples.</p>`,
  },
  {
    slug: 'crm-vs-excel-tableur',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: "Pourquoi passer d'Excel à un CRM ?",
    reponse: `<p>Excel est pratique au démarrage mais devient vite un frein :</p>
<ul>
<li><strong>Pas de suivi automatique</strong> : vous devez tout saisir manuellement</li>
<li><strong>Pas de rappels</strong> : aucune alerte pour relancer un prospect</li>
<li><strong>Pas collaboratif</strong> : les conflits de version sont constants à plusieurs</li>
<li><strong>Pas de vue pipeline</strong> : difficile de visualiser où en sont vos ventes</li>
</ul>
<p>Un CRM comme <strong>Pipedrive</strong> ou <strong>Capsule</strong> coûte moins de 20€/mois et fait économiser des heures de saisie manuelle chaque semaine.</p>`,
  },
  {
    slug: 'crm-reporting-ventes',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Quels rapports peut-on générer avec un CRM ?',
    reponse: `<p>Les CRM modernes génèrent de nombreux rapports utiles pour piloter votre activité :</p>
<ul>
<li>Chiffre d'affaires prévisionnel (deals en cours × probabilité de closing)</li>
<li>Taux de conversion par étape du pipeline</li>
<li>Performance par commercial (nombre d'appels, deals signés, CA)</li>
<li>Sources d'acquisition (d'où viennent vos leads ?)</li>
<li>Durée moyenne du cycle de vente</li>
</ul>
<p><strong>Pipedrive</strong> et <strong>Sellsy</strong> proposent des tableaux de bord complets. Pour des rapports sur mesure, connectez votre CRM à un outil BI via <strong>Make</strong> ou <strong>n8n</strong>.</p>`,
  },
  {
    slug: 'crm-prix-moyen',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: "Quel est le prix moyen d'un CRM ?",
    reponse: `<p>Les prix varient énormément selon l'outil et le niveau de fonctionnalités :</p>
<ul>
<li><strong>Entrée de gamme</strong> : 10–20€/utilisateur/mois (Capsule, Zoho CRM Standard)</li>
<li><strong>Milieu de gamme</strong> : 20–50€/utilisateur/mois (Pipedrive Growth, Folk Premium, Sellsy Evolution)</li>
<li><strong>Haut de gamme</strong> : 80–150€+/utilisateur/mois (Salesforce, HubSpot Sales Hub)</li>
</ul>
<p>Pour une TPE/PME, un budget de 20–40€/mois par commercial est réaliste et suffisant pour un CRM très performant.</p>`,
  },
  {
    slug: 'crm-secteur-immobilier',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Quel CRM pour le secteur immobilier ?',
    reponse: `<p>Le secteur immobilier a des besoins spécifiques : gestion des biens, suivi des visites, mandats, relances acheteurs/vendeurs.</p>
<p>Options génériques adaptables :</p>
<ul>
<li><strong>Pipedrive</strong> : pipeline personnalisable pour suivre chaque bien et prospect</li>
<li><strong>Folk</strong> : très flexible pour les agents indépendants</li>
<li><strong>Zoho CRM</strong> : modules personnalisables pour ajouter des champs "bien immobilier"</li>
</ul>
<p>Des CRM immobiliers spécialisés existent (Yanport, Hektor) mais pour une petite structure, un CRM généraliste bien configuré suffit souvent.</p>`,
  },
  {
    slug: 'crm-freelance-independant',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Un CRM est-il utile pour un freelance ?',
    reponse: `<p>Absolument, même pour un solo. Un CRM permet à un freelance de :</p>
<ul>
<li>Suivre les prospects et ne jamais oublier de relancer</li>
<li>Gérer son pipeline de missions en cours et à venir</li>
<li>Conserver l'historique de chaque client pour personnaliser ses échanges</li>
<li>Prévoir son CA des prochains mois</li>
</ul>
<p>Pour un freelance, <strong>Folk</strong> (plan Standard à 21€/mois) ou <strong>Capsule</strong> (plan Starter à 15€) sont idéaux. Si vous voulez aussi la facturation, <strong>Sellsy</strong> ou <strong>Axonaut</strong> regroupent tout en un.</p>`,
  },
  {
    slug: 'crm-integration-comptabilite',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Comment connecter un CRM à sa comptabilité ?',
    reponse: `<p>Deux approches possibles :</p>
<ul>
<li><strong>Outil tout-en-un</strong> : choisir un outil qui fait CRM + facturation + compta, comme <strong>Sellsy</strong> ou <strong>Axonaut</strong>. Tout est synchronisé nativement.</li>
<li><strong>Intégration</strong> : connecter votre CRM (Pipedrive, Folk) à votre logiciel comptable (Tiime, Indy) via <strong>Make</strong> ou <strong>n8n</strong>. Par exemple, quand un deal est "gagné" dans Pipedrive, Make crée automatiquement la facture dans Tiime.</li>
</ul>`,
  },
  {
    slug: 'crm-delai-prise-en-main',
    categorie: 'crm',
    categorieLabel: 'CRM',
    question: 'Combien de temps faut-il pour prendre en main un CRM ?',
    reponse: `<p>Le délai dépend de l'outil et de votre organisation :</p>
<ul>
<li><strong>1 à 3 jours</strong> pour les CRM simples : Folk, Capsule, Pipedrive. L'interface est pensée pour être intuitive.</li>
<li><strong>1 à 3 semaines</strong> pour les outils plus complets : Zoho CRM, Sellsy, Axonaut. Plus de paramétrage initial nécessaire.</li>
<li><strong>Plusieurs mois</strong> pour Salesforce ou HubSpot Enterprise : accompagnement professionnel souvent nécessaire.</li>
</ul>
<p>Conseil : commencez par utiliser seulement 3 fonctions (contacts, pipeline, rappels) avant d'explorer les automatisations.</p>`,
  },

  // ─── FACTURATION ────────────────────────────────────────────────────────────

  {
    slug: 'logiciel-facturation-c-est-quoi',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Qu'est-ce qu'un logiciel de facturation ?",
    reponse: `<p>Un <strong>logiciel de facturation</strong> permet de créer, envoyer et suivre vos factures professionnelles. Il remplace les factures Word ou Excel par des documents conformes légalement, numérotés automatiquement et envoyés par email en quelques clics.</p>
<p>Les fonctions principales : création de factures et devis, suivi des paiements, relances automatiques, export comptable.</p>
<p>Depuis 2026, la <strong>facturation électronique</strong> (e-facture) devient obligatoire pour les entreprises françaises. Des outils comme <strong>Sellsy</strong>, <strong>Indy</strong> ou <strong>Tiime</strong> sont déjà conformes à cette réforme.</p>`,
  },
  {
    slug: 'facturation-electronique-obligatoire',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "La facturation électronique est-elle obligatoire en France ?",
    reponse: `<p>Oui. La réforme de la facturation électronique (e-invoicing) entre en vigueur progressivement à partir de 2026 pour toutes les entreprises françaises assujetties à la TVA :</p>
<ul>
<li>Réception des e-factures : obligatoire pour toutes les entreprises dès septembre 2026</li>
<li>Émission : progressive selon la taille de l'entreprise (grandes entreprises en premier)</li>
</ul>
<p>Les logiciels conformes comme <strong>Sellsy</strong>, <strong>Tiime</strong> et <strong>Indy</strong> gèrent déjà l'émission et la réception via les plateformes de dématérialisation partenaires (PDP) agréées par l'État.</p>`,
  },
  {
    slug: 'difference-facture-devis',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Quelle est la différence entre une facture et un devis ?",
    reponse: `<p>La distinction est importante :</p>
<ul>
<li>Un <strong>devis</strong> est une proposition commerciale avant la vente. Il n'est pas encore dû. Le client doit l'accepter (signature ou bon pour accord) pour qu'il devienne contractuel.</li>
<li>Une <strong>facture</strong> est le document de paiement après la vente ou la livraison. Elle crée une obligation de paiement.</li>
</ul>
<p>La plupart des logiciels de facturation comme <strong>Freebe</strong>, <strong>Indy</strong> et <strong>Sellsy</strong> permettent de convertir un devis accepté en facture en un clic.</p>`,
  },
  {
    slug: 'mentions-obligatoires-facture',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Quelles sont les mentions obligatoires sur une facture ?",
    reponse: `<p>Une facture française doit obligatoirement mentionner :</p>
<ul>
<li>Numéro de facture (séquence chronologique)</li>
<li>Date d'émission</li>
<li>Vos coordonnées complètes + SIRET</li>
<li>Coordonnées du client</li>
<li>Description des prestations ou produits</li>
<li>Prix HT, taux de TVA, montant TVA, prix TTC</li>
<li>Date d'échéance et conditions de paiement</li>
<li>Pénalités de retard</li>
</ul>
<p>Un logiciel de facturation génère ces mentions automatiquement. Vous ne risquez plus d'oublier un élément obligatoire.</p>`,
  },
  {
    slug: 'facturation-auto-entrepreneur',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Quel logiciel de facturation pour auto-entrepreneur ?",
    reponse: `<p>En tant qu'auto-entrepreneur (micro-entrepreneur), vos besoins sont simples : créer des factures conformes rapidement. Les meilleures options :</p>
<ul>
<li><strong>Freebe</strong> : conçu spécialement pour les indépendants (micro-entreprise, EI, SASU). Gestion des cotisations sociales, suivi CA. À partir de 10€/mois.</li>
<li><strong>Indy</strong> : plan essenciel gratuit avec facturation + compte pro. Idéal pour démarrer.</li>
<li><strong>Tiime</strong> : plan gratuit (Free) avec facturation de base. Très utilisé par les micro-entrepreneurs.</li>
</ul>`,
  },
  {
    slug: 'logiciel-facturation-gratuit',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Existe-t-il un logiciel de facturation gratuit ?",
    reponse: `<p>Oui, plusieurs logiciels sérieux proposent un plan gratuit :</p>
<ul>
<li><strong>Indy</strong> (plan Essentiel) : facturation de base, compte pro, e-facture. Gratuit sans limite de temps.</li>
<li><strong>Tiime</strong> (plan Free) : facturation illimitée, devis, catalogue produits. Gratuit.</li>
<li><strong>Henrri</strong> (plan Pro) : facturation + CRM simple. Gratuit.</li>
</ul>
<p>Pour des fonctions avancées (relances automatiques, rapprochement bancaire, déclaration TVA), il faudra passer à un plan payant. Les plans payants commencent généralement autour de 9–15€/mois.</p>`,
  },
  {
    slug: 'relances-automatiques-factures',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment automatiser les relances de factures impayées ?",
    reponse: `<p>Les retards de paiement sont un problème courant. Voici comment automatiser les relances :</p>
<ul>
<li><strong>Logiciel avec relances intégrées</strong> : Sellsy envoie automatiquement des emails de relance J+7, J+15, J+30 après l'échéance. Tiime et Indy proposent aussi des rappels automatiques.</li>
<li><strong>Relances manuelles simplifiées</strong> : Freebe et Indy affichent clairement les factures en retard et permettent d'envoyer une relance en un clic.</li>
</ul>
<p>Conseil : paramétrez au moins un email automatique à J+3 après l'échéance. La majorité des impayés sont réglés après une simple relance courtoise.</p>`,
  },
  {
    slug: 'facturation-avec-tva',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment gérer la TVA dans ses factures ?",
    reponse: `<p>La gestion de la TVA dépend de votre régime :</p>
<ul>
<li><strong>Micro-entrepreneur</strong> : si vous êtes en franchise de TVA (sous les seuils), vous mentionnez "TVA non applicable - art. 293B du CGI" et ne collectez pas de TVA.</li>
<li><strong>Assujetti à la TVA</strong> : vous mentionnez le taux (20%, 10%, 5,5%) et le montant sur chaque ligne. Vous récupérez la TVA sur vos achats.</li>
</ul>
<p>Les logiciels comme <strong>Sellsy</strong>, <strong>Indy</strong> et <strong>Tiime</strong> calculent et appliquent la TVA automatiquement selon le paramétrage de votre profil.</p>`,
  },
  {
    slug: 'signature-electronique-devis',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Peut-on faire signer ses devis électroniquement ?",
    reponse: `<p>Oui, la signature électronique est légalement valide en France (règlement eIDAS européen). Pour vos devis :</p>
<ul>
<li><strong>Sellsy</strong> : inclut la signature électronique dans tous ses plans. Votre client signe directement depuis son email.</li>
<li><strong>Freebe</strong> : signature électronique disponible sur les plans payants.</li>
<li><strong>Indy</strong> : acceptation de devis en ligne (sans signature qualifiée).</li>
</ul>
<p>La signature électronique accélère considérablement les cycles commerciaux : vos clients signent en quelques minutes depuis leur téléphone, sans impression ni scan.</p>`,
  },
  {
    slug: 'export-comptable-logiciel-facturation',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment exporter ses factures vers son comptable ?",
    reponse: `<p>Les logiciels de facturation permettent d'exporter vos données comptables de plusieurs façons :</p>
<ul>
<li><strong>Export FEC</strong> (Fichier des Écritures Comptables) : format standard français, importable dans tous les logiciels comptables.</li>
<li><strong>Export Excel/CSV</strong> : liste de toutes les factures avec montants HT/TVA/TTC.</li>
<li><strong>Synchronisation directe</strong> : Tiime et Indy sont développés par des experts-comptables et synchronisent directement avec leur espace comptable.</li>
</ul>
<p>Pour simplifier la relation avec votre comptable, un outil qui exporte en FEC ou se connecte directement à votre cabinet est un gain de temps considérable.</p>`,
  },
  {
    slug: 'facture-avoir-c-est-quoi',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Qu'est-ce qu'une facture d'avoir ?",
    reponse: `<p>Une <strong>facture d'avoir</strong> (ou note de crédit) est un document qui annule partiellement ou totalement une facture déjà émise. On en crée une quand :</p>
<ul>
<li>Un client retourne un produit ou annule une commande</li>
<li>Vous accordez une remise après facturation</li>
<li>Une facture a été émise avec une erreur</li>
</ul>
<p>Attention : on ne modifie <strong>jamais</strong> une facture déjà émise et envoyée. On crée une facture d'avoir qui vient en déduction. Tous les bons logiciels de facturation (Sellsy, Indy, Freebe) génèrent les avoirs automatiquement.</p>`,
  },
  {
    slug: 'acompte-facture-fonctionnement',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment facturer un acompte ?",
    reponse: `<p>Un acompte est un paiement partiel demandé avant la réalisation de la prestation. La procédure :</p>
<ol>
<li>Émettez une <strong>facture d'acompte</strong> pour le montant partiel (ex : 30% du total)</li>
<li>Le client paie cet acompte</li>
<li>À la fin de la prestation, émettez la <strong>facture de solde</strong> pour le montant restant</li>
</ol>
<p>Les logiciels comme <strong>Sellsy</strong> et <strong>Freebe</strong> gèrent nativement les factures d'acompte et de solde, en liant automatiquement les documents entre eux.</p>`,
  },
  {
    slug: 'numero-facture-comment-numerotation',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment numéroter ses factures correctement ?",
    reponse: `<p>La numérotation des factures est encadrée par la loi française :</p>
<ul>
<li>La numérotation doit être <strong>chronologique et continue</strong> (pas de trou)</li>
<li>Vous pouvez utiliser différents formats : FA-2025-001, 2025-01, etc.</li>
<li>Vous pouvez utiliser un préfixe annuel (repart à 001 chaque année)</li>
<li>Vous ne pouvez <strong>pas supprimer ou modifier</strong> un numéro de facture émis</li>
</ul>
<p>Un logiciel de facturation gère cela automatiquement : la séquence est incrémentée à chaque nouvelle facture, sans risque d'erreur ou de doublon.</p>`,
  },
  {
    slug: 'delai-paiement-legal-france',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Quels sont les délais de paiement légaux en France ?",
    reponse: `<p>En France, les délais de paiement entre professionnels (B2B) sont encadrés par la loi LME :</p>
<ul>
<li>Délai maximum : <strong>30 jours</strong> après réception de la facture (règle générale)</li>
<li>Par accord contractuel : jusqu'à <strong>60 jours</strong> date de facture ou <strong>45 jours fin de mois</strong></li>
<li>Certains secteurs ont des règles spécifiques (transport, alimentaire)</li>
</ul>
<p>En cas de retard, des <strong>pénalités légales</strong> s'appliquent (taux BCE + 10 points minimum + indemnité forfaitaire de 40€). Pensez à les mentionner sur vos factures.</p>`,
  },
  {
    slug: 'facture-multi-devises',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Peut-on facturer en devise étrangère (USD, GBP) ?",
    reponse: `<p>Oui, c'est possible et courant pour les entreprises qui travaillent avec des clients internationaux. Points importants :</p>
<ul>
<li>La facture peut être libellée en USD, GBP, EUR, etc.</li>
<li>Vous devez indiquer le taux de conversion utilisé</li>
<li>Pour la comptabilité française, les montants doivent être reconvertis en euros</li>
</ul>
<p><strong>Sellsy</strong> et <strong>Axonaut</strong> supportent la facturation multi-devises. Si vous facturez régulièrement en devises étrangères, vérifiez cette fonctionnalité avant de choisir votre logiciel.</p>`,
  },
  {
    slug: 'facturation-abonnement-recurrent',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment gérer la facturation récurrente (abonnements) ?",
    reponse: `<p>Si vous avez des clients en abonnement mensuel ou annuel, la facturation récurrente automatise complètement le processus :</p>
<ul>
<li>Vous définissez le montant, la fréquence et la date de début</li>
<li>Le logiciel génère et envoie automatiquement la facture à chaque échéance</li>
<li>Certains outils se connectent à Stripe pour le prélèvement automatique</li>
</ul>
<p><strong>Sellsy</strong> propose une gestion des abonnements complète. Pour des abonnements avec paiement automatique, <strong>Make</strong> ou <strong>n8n</strong> permettent de connecter votre logiciel de facturation à Stripe.</p>`,
  },
  {
    slug: 'comptabilite-vs-facturation-difference',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Quelle est la différence entre facturation et comptabilité ?",
    reponse: `<p>Ce sont deux niveaux différents de gestion financière :</p>
<ul>
<li><strong>La facturation</strong> : émettre des factures, suivre les paiements, relancer les impayés. C'est la gestion opérationnelle quotidienne.</li>
<li><strong>La comptabilité</strong> : enregistrer toutes les opérations financières (charges, produits, immobilisations), produire le bilan et le compte de résultat, déclarer la TVA et l'IS. C'est la vision globale et légale.</li>
</ul>
<p>Des outils comme <strong>Indy</strong> et <strong>Tiime</strong> couvrent les deux. Les experts-comptables utilisent généralement des logiciels comme ACD ou Cegid qui s'appuient sur vos exports de facturation.</p>`,
  },
  {
    slug: 'facture-en-ligne-securite',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "La facturation en ligne est-elle sécurisée ?",
    reponse: `<p>Les logiciels de facturation SaaS sérieux offrent une sécurité supérieure aux fichiers Word ou Excel locaux :</p>
<ul>
<li><strong>Chiffrement</strong> des données en transit (HTTPS) et au repos</li>
<li><strong>Sauvegardes automatiques</strong> : vos factures ne peuvent pas être perdues</li>
<li><strong>Hébergement en Europe</strong> pour les acteurs français (conformité RGPD)</li>
<li><strong>Accès multi-appareils</strong> sécurisé par authentification</li>
</ul>
<p>Des acteurs comme <strong>Sellsy</strong>, <strong>Indy</strong> et <strong>Tiime</strong> sont certifiés et audités régulièrement. Le risque de perte de données est bien inférieur à une gestion locale.</p>`,
  },
  {
    slug: 'frais-kilomedriques-note-de-frais',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment gérer les notes de frais et frais kilométriques ?",
    reponse: `<p>La gestion des notes de frais est souvent négligée mais représente un vrai gain fiscal :</p>
<ul>
<li><strong>Frais kilométriques</strong> : calculés selon le barème fiscal officiel (CV fiscaux × km parcourus)</li>
<li><strong>Autres frais</strong> : repas, transport, hébergement — conservez les justificatifs</li>
</ul>
<p><strong>Freebe</strong> intègre la gestion des frais kilométriques avec calcul automatique selon le barème. <strong>Qonto</strong> propose une gestion des notes de frais avec scan des reçus directement depuis l'app mobile.</p>`,
  },
  {
    slug: 'logiciel-facturation-batiment-artisan',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Quel logiciel de facturation pour un artisan ou une entreprise du bâtiment ?",
    reponse: `<p>Les artisans et entreprises du bâtiment ont des besoins spécifiques : devis techniques détaillés, situations de travaux, retenue de garantie, sous-traitance.</p>
<p>Options recommandées :</p>
<ul>
<li><strong>Sellsy</strong> : gère les devis complexes et les situations d'avancement, signature électronique incluse.</li>
<li><strong>Axonaut</strong> : adapté aux PME du bâtiment avec gestion de projet intégrée.</li>
</ul>
<p>Des logiciels spécialisés bâtiment existent aussi (Batigest, Onaya) mais pour une TPE, un outil généraliste bien configuré suffit dans la plupart des cas.</p>`,
  },

  // ─── GESTION DE PROJET ──────────────────────────────────────────────────────

  {
    slug: 'logiciel-gestion-projet-c-est-quoi',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Qu'est-ce qu'un logiciel de gestion de projet ?",
    reponse: `<p>Un <strong>logiciel de gestion de projet</strong> permet de planifier, organiser et suivre les tâches d'une équipe pour atteindre un objectif dans les délais et le budget impartis.</p>
<p>Les fonctions clés : création de tâches avec responsable et date, vue Kanban ou Gantt, suivi d'avancement, collaboration en temps réel, gestion des priorités.</p>
<p><strong>Monday.com</strong> est l'un des plus populaires grâce à sa flexibilité et ses nombreuses vues (tableau, calendrier, Gantt, formulaire). Il convient aussi bien aux équipes techniques que marketing ou commerciales.</p>`,
  },
  {
    slug: 'kanban-gantt-difference',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quelle est la différence entre un tableau Kanban et un diagramme de Gantt ?",
    reponse: `<p>Ce sont deux façons très différentes de visualiser un projet :</p>
<ul>
<li><strong>Kanban</strong> : colonnes (À faire / En cours / Terminé) avec des cartes. Idéal pour les flux de travail continus, les équipes agiles, et quand les délais ne sont pas la priorité principale.</li>
<li><strong>Gantt</strong> : vue chronologique avec des barres représentant la durée de chaque tâche. Idéal pour les projets avec des dépendances, des jalons et des deadlines précises.</li>
</ul>
<p><strong>Monday.com</strong> propose les deux vues sur le même projet — vous basculez d'une vue à l'autre en un clic selon le besoin.</p>`,
  },
  {
    slug: 'methode-agile-scrum-logiciel',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quel logiciel pour gérer un projet en méthode Agile / Scrum ?",
    reponse: `<p>La méthode Agile (Scrum, Kanban) requiert : gestion des sprints, backlog de produit, velocity, rétrospectives.</p>
<p>Options recommandées :</p>
<ul>
<li><strong>Monday.com</strong> : très adapté aux équipes agiles avec ses tableaux Kanban et tableaux de bord personnalisables.</li>
<li><strong>Jira</strong> (Atlassian) : la référence pour les équipes de développement logiciel (gratuit jusqu'à 10 utilisateurs).</li>
<li><strong>Notion</strong> : très flexible pour les petites équipes qui veulent un espace de travail tout-en-un.</li>
</ul>
<p>Pour une équipe non technique, Monday.com offre l'approche la plus accessible à l'Agile.</p>`,
  },
  {
    slug: 'gestion-projet-freelance',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quel outil de gestion de projet pour un freelance ?",
    reponse: `<p>En tant que freelance, vos besoins sont différents d'une équipe : vous gérez vos propres tâches, les livrables pour chaque client et votre temps.</p>
<p>Options adaptées :</p>
<ul>
<li><strong>Monday.com</strong> : plan gratuit jusqu'à 2 postes. Interface visuelle très agréable même seul.</li>
<li><strong>Notion</strong> : très flexible pour créer son propre système de suivi. Gratuit pour les particuliers.</li>
<li><strong>Trello</strong> : Kanban simple et gratuit, parfait pour démarrer.</li>
</ul>
<p>Si vous voulez aussi gérer vos factures et clients au même endroit, <strong>Freebe</strong> ou <strong>Axonaut</strong> combinent gestion de projet + facturation.</p>`,
  },
  {
    slug: 'gestion-projet-equipe-distanciel',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment gérer un projet avec une équipe en télétravail ?",
    reponse: `<p>Le télétravail rend la visibilité sur l'avancement encore plus cruciale. Bonnes pratiques :</p>
<ul>
<li><strong>Un outil central</strong> où tout le monde voit l'état des tâches en temps réel (<strong>Monday.com</strong>)</li>
<li><strong>Mises à jour asynchrones</strong> : chaque membre met à jour ses tâches quotidiennement</li>
<li><strong>Réunions courtes et fréquentes</strong> : standup de 15 min pour débloquer les obstacles</li>
<li><strong>Documentation</strong> : tout ce qui se décide en réunion doit être écrit dans l'outil</li>
</ul>
<p>Monday.com propose des intégrations avec Slack, Zoom et Teams pour centraliser toutes les communications.</p>`,
  },
  {
    slug: 'templates-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Existe-t-il des templates de gestion de projet prêts à l'emploi ?",
    reponse: `<p>Oui, la plupart des outils proposent des bibliothèques de templates :</p>
<ul>
<li><strong>Monday.com</strong> : plus de 200 templates (lancement produit, campagne marketing, onboarding, construction, etc.)</li>
<li><strong>Notion</strong> : galerie de templates créés par la communauté, très nombreux et gratuits</li>
<li><strong>Trello</strong> : templates par industrie et type de projet</li>
</ul>
<p>Un template bien choisi fait gagner plusieurs heures de configuration. Cherchez un template proche de votre use case, dupliquez-le et adaptez.</p>`,
  },
  {
    slug: 'suivi-temps-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment suivre le temps passé sur les tâches ?",
    reponse: `<p>Le time tracking est essentiel pour la facturation aux heures et pour analyser la rentabilité des projets :</p>
<ul>
<li><strong>Fonctionnalité native</strong> : Monday.com propose une colonne "Time Tracking" pour chronomètrer les tâches. Karlia intègre aussi le suivi du temps.</li>
<li><strong>Outils dédiés</strong> : Toggl, Harvest — ils s'intègrent à Monday.com ou Notion via <strong>Make</strong>.</li>
<li><strong>Tout-en-un</strong> : Freebe inclut le suivi du temps directement lié à la facturation client.</li>
</ul>
<p>Pour les freelances qui facturent à l'heure, un outil qui connecte le time tracking à la facturation est particulièrement précieux.</p>`,
  },
  {
    slug: 'gestion-projet-vs-crm-difference',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quelle est la différence entre un outil de gestion de projet et un CRM ?",
    reponse: `<p>La distinction est importante :</p>
<ul>
<li>Un <strong>outil de gestion de projet</strong> organise le travail interne : tâches, équipe, délais, livrables. Il répond à "Qui fait quoi, quand ?"</li>
<li>Un <strong>CRM</strong> gère la relation avec les clients et prospects externes : contacts, pipeline commercial, opportunités. Il répond à "Où en est ma vente avec ce client ?"</li>
</ul>
<p>Certains outils comme <strong>Monday.com</strong> proposent un module CRM en plus de la gestion de projet. Et des CRM comme <strong>Sellsy</strong> ou <strong>Axonaut</strong> intègrent de la gestion de projet. Mais dans les deux cas, ce sont des fonctions distinctes.</p>`,
  },
  {
    slug: 'jalons-milestones-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Qu'est-ce qu'un jalon (milestone) dans un projet ?",
    reponse: `<p>Un <strong>jalon</strong> (ou milestone) est un événement clé dans la vie d'un projet qui marque une étape importante : livraison d'un lot, validation client, mise en production, signature d'un contrat.</p>
<p>Contrairement à une tâche, un jalon n'a pas de durée — c'est un point dans le temps.</p>
<p>Les jalons sont particulièrement visibles dans une vue Gantt. <strong>Monday.com</strong> permet d'ajouter des jalons sur le diagramme de Gantt et d'envoyer des notifications automatiques quand un jalon est atteint ou en retard.</p>`,
  },
  {
    slug: 'budget-projet-suivi-logiciel',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment suivre le budget d'un projet avec un logiciel ?",
    reponse: `<p>Le suivi budgétaire d'un projet se fait généralement à deux niveaux :</p>
<ul>
<li><strong>Budget alloué vs dépensé</strong> : combien a été prévu, combien a été engagé</li>
<li><strong>Temps passé vs estimé</strong> : le budget en heures est-il respecté ?</li>
</ul>
<p><strong>Monday.com</strong> permet d'ajouter des colonnes budget personnalisées et de créer des tableaux de bord de suivi financier. Pour une vision complète budget + facturation + comptabilité, <strong>Axonaut</strong> ou <strong>Sellsy</strong> intègrent tout dans un seul outil.</p>`,
  },
  {
    slug: 'gestion-projet-construction-btm',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quel outil de gestion de projet pour le secteur du bâtiment ?",
    reponse: `<p>La gestion de projet dans le BTP a des spécificités : planning des corps de métier, suivi des sous-traitants, situations de travaux, réunions de chantier.</p>
<p>Options recommandées :</p>
<ul>
<li><strong>Monday.com</strong> : très flexible, utilisé par de nombreuses PME du BTP pour planifier les chantiers.</li>
<li><strong>Axonaut</strong> : solution française qui combine gestion de projet, CRM et facturation — bien adaptée aux entreprises artisanales et PME.</li>
</ul>
<p>Des logiciels spécialisés BTP existent (Obat, Buildigo) mais pour une TPE, un outil généraliste bien paramétré suffit dans la plupart des cas.</p>`,
  },
  {
    slug: 'dependances-taches-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment gérer les dépendances entre tâches dans un projet ?",
    reponse: `<p>Les dépendances indiquent qu'une tâche ne peut pas démarrer avant qu'une autre soit terminée. C'est fondamental pour les projets complexes.</p>
<p>Dans <strong>Monday.com</strong>, vous pouvez lier des tâches avec des dépendances "fin-début" et le Gantt se met à jour automatiquement si une tâche prend du retard — en décalant toutes les tâches dépendantes.</p>
<p>Pour des projets simples, les dépendances visuelles (une colonne "Bloqué par") suffisent. Pour des projets complexes avec chemin critique, une vue Gantt avec dépendances est indispensable.</p>`,
  },
  {
    slug: 'notifications-rappels-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment configurer les notifications et rappels dans un outil de gestion de projet ?",
    reponse: `<p>Les notifications mal configurées sont une source majeure de distraction. Les bonnes pratiques :</p>
<ul>
<li><strong>Notifications pertinentes uniquement</strong> : être notifié uniquement quand une tâche vous est assignée ou commentée, pas pour chaque changement</li>
<li><strong>Résumés quotidiens</strong> plutôt que temps réel pour les projets moins urgents</li>
<li><strong>Rappels d'échéance</strong> : J-2 et J-1 pour les deadlines importantes</li>
</ul>
<p><strong>Monday.com</strong> permet de personnaliser finement ses préférences de notification et d'envoyer des alertes vers Slack, email ou l'app mobile.</p>`,
  },
  {
    slug: 'retrospective-projet-comment-faire',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment faire une rétrospective de projet ?",
    reponse: `<p>Une rétrospective est une réunion en fin de sprint ou de projet pour analyser ce qui s'est bien passé, ce qui n'a pas fonctionné, et ce qu'on améliore.</p>
<p>Format simple en 3 questions :</p>
<ul>
<li>Qu'est-ce qu'on a bien fait ? (à continuer)</li>
<li>Qu'est-ce qui n'a pas fonctionné ? (à éviter)</li>
<li>Qu'est-ce qu'on améliore au prochain sprint ?</li>
</ul>
<p>Documentez les actions dans votre outil de gestion de projet (<strong>Monday.com</strong>, Notion) avec un responsable et une date pour chaque action d'amélioration.</p>`,
  },
  {
    slug: 'partage-projet-client-externe',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Peut-on partager un projet avec un client externe ?",
    reponse: `<p>Oui, la plupart des outils proposent des accès invités (guest) avec droits limités :</p>
<ul>
<li><strong>Monday.com</strong> : invitez des clients en mode "viewer" (lecture seule) ou "commentateur" gratuitement.</li>
<li><strong>Notion</strong> : partagez des pages spécifiques en lecture seule ou avec commentaires.</li>
</ul>
<p>Attention : ne partagez avec les clients que les informations qu'ils ont besoin de voir. Créez un espace dédié "vue client" plutôt que de leur donner accès à tout votre espace de travail interne.</p>`,
  },
  {
    slug: 'risques-projet-gestion',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment gérer les risques dans un projet ?",
    reponse: `<p>La gestion des risques permet d'anticiper les problèmes avant qu'ils ne surviennent. Méthode simple :</p>
<ol>
<li><strong>Identifier</strong> les risques potentiels (retard fournisseur, absence d'un membre clé, changement de scope)</li>
<li><strong>Évaluer</strong> leur probabilité et leur impact (matrice risques)</li>
<li><strong>Planifier</strong> une réponse pour chaque risque critique</li>
<li><strong>Suivre</strong> les risques tout au long du projet</li>
</ol>
<p>Dans <strong>Monday.com</strong>, créez un tableau "Registre des risques" avec colonnes Probabilité, Impact, Statut et Plan d'action. Révisez-le à chaque réunion de pilotage.</p>`,
  },
  {
    slug: 'cout-logiciel-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quel est le coût d'un logiciel de gestion de projet ?",
    reponse: `<p>Les prix varient selon la taille de l'équipe et les fonctionnalités :</p>
<ul>
<li><strong>Gratuit</strong> : Trello (équipes jusqu'à 10), Monday.com (2 utilisateurs), Notion (personnel)</li>
<li><strong>10–15€/utilisateur/mois</strong> : Monday.com Basic/Standard, Asana Premium</li>
<li><strong>15–25€/utilisateur/mois</strong> : Monday.com Pro, fonctions avancées</li>
</ul>
<p>Pour une équipe de 5 personnes, comptez 50–100€/mois pour un bon outil avec Gantt, automatisations et tableaux de bord. C'est souvent récupéré en quelques heures de productivité gagnées.</p>`,
  },
  {
    slug: 'integration-slack-gestion-projet',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment intégrer Slack avec son outil de gestion de projet ?",
    reponse: `<p>L'intégration Slack ↔ gestion de projet permet de recevoir les notifications importantes directement dans Slack, et de créer des tâches depuis un message.</p>
<p>Avec <strong>Monday.com</strong> + Slack :</p>
<ul>
<li>Recevez une notification Slack quand une tâche vous est assignée</li>
<li>Soyez alerté quand une deadline approche</li>
<li>Créez une tâche Monday directement depuis un message Slack en 2 clics</li>
</ul>
<p>Cette intégration est native dans Monday.com (pas besoin de Make). Pour des flux plus complexes, <strong>Make</strong> ou <strong>n8n</strong> permettent des automatisations personnalisées.</p>`,
  },
  {
    slug: 'gestion-projet-marketing-equipe',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Quel outil de gestion de projet pour une équipe marketing ?",
    reponse: `<p>Les équipes marketing ont des besoins spécifiques : calendrier éditorial, campagnes, briefs créatifs, révisions de contenu.</p>
<p><strong>Monday.com</strong> est particulièrement populaire dans les équipes marketing pour :</p>
<ul>
<li>La vue calendrier pour le planning éditorial</li>
<li>Les formulaires pour recevoir les briefs créatifs</li>
<li>Les automatisations (notifier le designer quand le copywriter a terminé)</li>
<li>Les dashboards pour suivre les KPIs de campagne</li>
</ul>
<p>Notion est également très utilisé pour la documentation marketing et les processus.</p>`,
  },
  {
    slug: 'onboarding-nouveau-collaborateur-outil',
    categorie: 'gestion-de-projet',
    categorieLabel: 'Gestion de projet',
    question: "Comment utiliser un outil de gestion de projet pour l'onboarding ?",
    reponse: `<p>L'onboarding d'un nouveau collaborateur est un projet comme un autre. Créez un template dédié avec :</p>
<ul>
<li>Semaine 1 : accès aux outils, présentation de l'équipe, lecture de la documentation</li>
<li>Semaine 2-3 : premières tâches accompagnées</li>
<li>Semaine 4+ : montée en autonomie</li>
</ul>
<p>Dans <strong>Monday.com</strong>, dupliquez ce template pour chaque nouvelle recrue et assignez les tâches aux bons responsables (IT, RH, manager). Le nouveau peut lui-même cocher ses tâches terminées et voir sa progression.</p>`,
  },

  // ─── SEO ────────────────────────────────────────────────────────────────────

  {
    slug: 'seo-c-est-quoi',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Qu'est-ce que le SEO ?",
    reponse: `<p>Le <strong>SEO (Search Engine Optimization)</strong>, ou référencement naturel, regroupe l'ensemble des techniques pour améliorer la position de votre site dans les résultats de Google et des autres moteurs de recherche — sans payer pour des annonces.</p>
<p>Le SEO se divise en trois piliers :</p>
<ul>
<li><strong>Technique</strong> : vitesse du site, mobile-friendly, structure des URLs, indexation</li>
<li><strong>Contenu</strong> : articles, pages optimisées avec les bons mots-clés</li>
<li><strong>Autorité</strong> : liens entrants (backlinks) depuis d'autres sites</li>
</ul>
<p>Des outils comme <strong>SimilarWeb</strong> permettent d'analyser le trafic de vos concurrents pour identifier les opportunités SEO à saisir.</p>`,
  },
  {
    slug: 'mot-cle-longue-traine-definition',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Qu'est-ce qu'un mot-clé longue traîne ?",
    reponse: `<p>Un mot-clé <strong>longue traîne</strong> est une requête de recherche composée de 3 mots ou plus, plus précise et avec moins de volume de recherche qu'un mot-clé générique.</p>
<p>Exemples :</p>
<ul>
<li>Mot-clé générique (courte traîne) : "CRM" → très concurrentiel, millions de recherches</li>
<li>Longue traîne : "meilleur CRM pour PME française" → moins concurrentiel, intention plus précise</li>
</ul>
<p>Les mots-clés longue traîne convertissent mieux (l'intention est plus claire) et sont plus faciles à positionner. Pour les identifier, <strong>SemJuice</strong> ou <strong>SimilarWeb</strong> proposent des outils de recherche de mots-clés dédiés.</p>`,
  },
  {
    slug: 'backlinks-definition-importance',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Qu'est-ce qu'un backlink et pourquoi est-ce important ?",
    reponse: `<p>Un <strong>backlink</strong> est un lien qui pointe vers votre site depuis un autre site. Google l'interprète comme un vote de confiance : plus vous recevez de liens depuis des sites autoritaires, plus Google considère votre site comme fiable et pertinent.</p>
<p>Tous les backlinks ne se valent pas :</p>
<ul>
<li>Un lien depuis un grand journal national vaut bien plus que 100 liens depuis des sites sans trafic</li>
<li>Les liens dans des contextes pertinents (même thématique) sont plus valorisés</li>
<li>Les liens "nofollow" transmettent moins de valeur SEO</li>
</ul>
<p>Pour analyser vos backlinks et ceux de vos concurrents, <strong>SemJuice</strong> propose des outils d'analyse de profil de liens.</p>`,
  },
  {
    slug: 'audit-seo-comment-faire',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Comment réaliser un audit SEO de son site ?",
    reponse: `<p>Un audit SEO identifie les problèmes qui freinent votre référencement. Les étapes clés :</p>
<ol>
<li><strong>Indexation</strong> : vérifiez que Google indexe bien vos pages (Google Search Console)</li>
<li><strong>Technique</strong> : vitesse de chargement, erreurs 404, redirections, balises méta</li>
<li><strong>Contenu</strong> : pages sans mots-clés cibles, contenus dupliqués, maillage interne</li>
<li><strong>Autorité</strong> : analyse du profil de backlinks, domaines référents</li>
<li><strong>Concurrence</strong> : sur quels mots-clés vos concurrents sont-ils positionnés ?</li>
</ol>
<p><strong>SimilarWeb</strong> et <strong>SemJuice</strong> proposent des audits automatisés qui identifient les problèmes prioritaires.</p>`,
  },
  {
    slug: 'balises-meta-title-description',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Qu'est-ce que les balises meta title et meta description ?",
    reponse: `<p>Ces balises HTML définissent ce qui s'affiche dans les résultats de recherche Google :</p>
<ul>
<li><strong>Meta title</strong> (balise title) : le titre bleu cliquable dans les résultats. Longueur recommandée : 50–60 caractères. Doit contenir le mot-clé principal.</li>
<li><strong>Meta description</strong> : le texte gris sous le titre. Longueur recommandée : 150–160 caractères. Ne joue pas directement sur le ranking mais influence le taux de clic.</li>
</ul>
<p>Un title mal optimisé (trop long, sans mot-clé) est l'une des erreurs SEO les plus courantes et les plus faciles à corriger. Un audit <strong>SemJuice</strong> les détecte automatiquement.</p>`,
  },
  {
    slug: 'core-web-vitals-seo',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Que sont les Core Web Vitals et pourquoi impactent-ils le SEO ?",
    reponse: `<p>Les <strong>Core Web Vitals</strong> sont trois métriques de performance définies par Google qui mesurent l'expérience utilisateur :</p>
<ul>
<li><strong>LCP</strong> (Largest Contentful Paint) : temps de chargement du plus grand élément visible (< 2,5 s idéalement)</li>
<li><strong>CLS</strong> (Cumulative Layout Shift) : stabilité visuelle de la page (pas de sauts de mise en page)</li>
<li><strong>INP</strong> (Interaction to Next Paint) : réactivité aux interactions utilisateur</li>
</ul>
<p>Depuis 2021, ces métriques sont un facteur de ranking Google. Mesurez-les avec PageSpeed Insights (gratuit) ou Google Search Console.</p>`,
  },
  {
    slug: 'maillage-interne-seo',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Qu'est-ce que le maillage interne et comment l'optimiser ?",
    reponse: `<p>Le <strong>maillage interne</strong> désigne les liens entre les pages de votre propre site. C'est un levier SEO souvent sous-estimé :</p>
<ul>
<li>Il aide Google à <strong>découvrir et indexer</strong> toutes vos pages</li>
<li>Il <strong>transmet l'autorité</strong> de vos pages les plus fortes vers les plus faibles</li>
<li>Il améliore l'<strong>expérience utilisateur</strong> en guidant vers du contenu pertinent</li>
</ul>
<p>Bonnes pratiques : liez vos articles de blog vers vos pages produit/service, utilisez des ancres descriptives (pas "cliquez ici"), créez des pages piliers liées à des pages satellites. La structure de cocon sémantique est une approche particulièrement efficace.</p>`,
  },
  {
    slug: 'seo-local-comment-optimiser',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Comment optimiser son SEO local ?",
    reponse: `<p>Le SEO local permet d'apparaître dans les recherches géolocalisées ("restaurant Paris 11", "plombier Lyon").</p>
<p>Les actions prioritaires :</p>
<ul>
<li><strong>Google Business Profile</strong> : créez et optimisez votre fiche Google (horaires, photos, catégories)</li>
<li><strong>NAP cohérent</strong> : Nom, Adresse, Téléphone identiques partout sur le web</li>
<li><strong>Avis clients</strong> : encouragez les avis Google et répondez-y systématiquement</li>
<li><strong>Pages locales</strong> : créez une page dédiée à chaque zone géographique si vous intervenez dans plusieurs villes</li>
</ul>`,
  },
  {
    slug: 'contenu-seo-comment-rediger',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Comment rédiger du contenu optimisé pour le SEO ?",
    reponse: `<p>Rédiger pour le SEO ne signifie pas "bourrer" ses textes de mots-clés. Les bonnes pratiques :</p>
<ul>
<li><strong>Ciblez une intention de recherche</strong> : informationnelle (que faire ?), navigationnelle (aller sur un site), transactionnelle (acheter)</li>
<li><strong>Structure</strong> : H1 unique avec mot-clé, H2 pour les sous-parties, paragraphes courts</li>
<li><strong>Profondeur</strong> : couvrez le sujet complètement (répondez aux questions liées)</li>
<li><strong>Unicité</strong> : n'écrivez pas ce qui existe déjà, apportez une valeur ajoutée</li>
</ul>
<p>L'outil <strong>SemJuice</strong> propose des briefs SEO qui guident la rédaction avec le champ sémantique à couvrir.</p>`,
  },
  {
    slug: 'google-search-console-utilisation',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Comment utiliser Google Search Console pour améliorer son SEO ?",
    reponse: `<p>Google Search Console (GSC) est l'outil gratuit indispensable de tout référenceur. Ses fonctions clés :</p>
<ul>
<li><strong>Performances</strong> : quelles requêtes génèrent des clics et des impressions, quelles pages en bénéficient</li>
<li><strong>Couverture</strong> : quelles pages sont indexées, lesquelles ont des erreurs</li>
<li><strong>Core Web Vitals</strong> : rapport de performance par groupe de pages</li>
<li><strong>Liens</strong> : quels sites pointent vers vous, quelles sont vos pages les plus liées</li>
</ul>
<p>Action prioritaire : identifiez vos pages avec beaucoup d'impressions mais peu de clics (CTR faible) — optimisez leurs titres et descriptions pour gagner du trafic rapidement.</p>`,
  },
  {
    slug: 'duplication-contenu-seo-risque',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Le contenu dupliqué pénalise-t-il le SEO ?",
    reponse: `<p>Le contenu dupliqué est un problème SEO fréquent, mais souvent mal compris. La réalité :</p>
<ul>
<li>Google ne pénalise pas automatiquement le contenu dupliqué, mais il <strong>choisit quelle version indexer</strong></li>
<li>Si vous avez deux pages très similaires, Google peut n'en indexer qu'une (pas forcément celle que vous voulez)</li>
<li>La duplication interne (plusieurs URLs pour le même contenu) est plus problématique que la duplication externe</li>
</ul>
<p>Solutions : balises canonical, redirections 301, consolider le contenu similaire. Vérifiez avec un audit <strong>SemJuice</strong> ou Screaming Frog.</p>`,
  },
  {
    slug: 'rank-tracking-suivi-positions',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Comment suivre ses positions Google ?",
    reponse: `<p>Le suivi des positions (rank tracking) permet de mesurer l'évolution de votre référencement dans le temps.</p>
<p>Options disponibles :</p>
<ul>
<li><strong>Google Search Console</strong> (gratuit) : positions moyennes par requête, mais pas de suivi historique précis par mot-clé</li>
<li><strong>SemJuice</strong> : suivi de positions quotidien avec historique, idéal pour le marché français</li>
<li><strong>SimilarWeb</strong> : analyse de trafic organique global et comparaison avec les concurrents</li>
</ul>
<p>Suivez vos 20–30 mots-clés stratégiques en priorité plutôt que de tout tracker — c'est plus actionnable.</p>`,
  },
  {
    slug: 'seo-vs-sea-difference',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Quelle est la différence entre SEO et SEA ?",
    reponse: `<p>Les deux visent à apparaître dans Google, mais de façon très différente :</p>
<ul>
<li><strong>SEO</strong> (Search Engine Optimization) : référencement naturel, gratuit en soi mais demande du temps et des efforts. Les résultats mettent 3 à 12 mois à se concrétiser mais sont durables.</li>
<li><strong>SEA</strong> (Search Engine Advertising) : publicité payante (Google Ads). Résultats immédiats mais cela s'arrête quand vous cessez de payer.</li>
</ul>
<p>La stratégie idéale combine les deux : SEA pour les conversions à court terme et les tests, SEO pour la croissance durable. <strong>SimilarWeb</strong> permet d'analyser quelle part de trafic vos concurrents obtiennent via chaque canal.</p>`,
  },
  {
    slug: 'schema-markup-rich-snippets',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Qu'est-ce que le balisage Schema.org et les rich snippets ?",
    reponse: `<p>Le <strong>balisage Schema.org</strong> (ou données structurées) est un code HTML supplémentaire que vous ajoutez à vos pages pour aider Google à comprendre leur contenu.</p>
<p>En échange, Google peut afficher des <strong>rich snippets</strong> (résultats enrichis) : étoiles d'avis, FAQ directement dans les résultats, prix, recettes, événements.</p>
<p>Les types les plus utiles pour les entreprises :</p>
<ul>
<li>FAQPage : questions-réponses affichées sous votre résultat</li>
<li>Product : prix et disponibilité</li>
<li>LocalBusiness : informations d'entreprise locale</li>
</ul>
<p>Les rich snippets augmentent généralement le taux de clic de 20 à 40%.</p>`,
  },
  {
    slug: 'netlinking-strategie-backlinks',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Comment obtenir des backlinks de qualité ?",
    reponse: `<p>Les backlinks de qualité s'obtiennent par des méthodes "white hat" (durables) :</p>
<ul>
<li><strong>Création de contenu remarquable</strong> : guides complets, études originales, infographies — les gens partagent naturellement ce qui est utile</li>
<li><strong>Guest posting</strong> : rédiger des articles invités sur des blogs de votre secteur</li>
<li><strong>Relations presse digitale</strong> : être cité par des médias en ligne (HARO en version FR)</li>
<li><strong>Partenariats</strong> : échanges de liens avec des sites complémentaires non concurrents</li>
</ul>
<p>Évitez l'achat de liens en masse — les fermes de liens sont pénalisées par Google. <strong>SemJuice</strong> propose des services de netlinking qualitatifs sur le marché français.</p>`,
  },
  {
    slug: 'cocon-semantique-definition',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Qu'est-ce qu'un cocon sémantique ?",
    reponse: `<p>Un <strong>cocon sémantique</strong> est une structure de contenu où les pages sont organisées et reliées entre elles selon leur proximité thématique, formant un réseau de liens interne cohérent.</p>
<p>La structure classique :</p>
<ul>
<li><strong>Page pilier</strong> (page mère) : traite un sujet large en surface, lie vers toutes les pages satellites</li>
<li><strong>Pages satellites</strong> (pages filles) : traitent chaque sous-thème en profondeur, renvoient vers la page pilier et les autres pages satellites de la même thématique</li>
</ul>
<p>Cette structure envoie des signaux thématiques forts à Google et améliore l'autorité de l'ensemble des pages. C'est l'une des stratégies SEO de contenu les plus efficaces sur le long terme.</p>`,
  },
  {
    slug: 'vitesse-chargement-seo-optimisation',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Comment améliorer la vitesse de chargement de son site pour le SEO ?",
    reponse: `<p>La vitesse est un facteur de ranking direct depuis 2021 (Core Web Vitals). Les optimisations les plus impactantes :</p>
<ul>
<li><strong>Images</strong> : convertissez en WebP, redimensionnez à la bonne taille, chargement lazy</li>
<li><strong>Cache</strong> : mettez en cache les ressources statiques</li>
<li><strong>CDN</strong> : distribuez vos ressources via un réseau mondial (Cloudflare)</li>
<li><strong>JavaScript</strong> : réduisez le JS bloquant le rendu</li>
<li><strong>Hébergement</strong> : un hébergeur lent plafonne toutes vos optimisations</li>
</ul>
<p>Mesurez avec PageSpeed Insights avant et après chaque modification pour valider l'impact réel.</p>`,
  },
  {
    slug: 'seo-international-multilingue',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Comment optimiser son SEO pour plusieurs pays et langues ?",
    reponse: `<p>Le SEO international requiert des considérations techniques spécifiques :</p>
<ul>
<li><strong>Balises hreflang</strong> : indiquent à Google quelle version de page afficher selon la langue/pays de l'utilisateur</li>
<li><strong>Structure d'URL</strong> : sous-répertoires (/fr/, /en/) ou sous-domaines (fr.site.com)</li>
<li><strong>Contenu localisé</strong> : traduction + adaptation culturelle (pas juste Google Traduction)</li>
<li><strong>Backlinks locaux</strong> : obtenez des liens depuis des sites du pays ciblé</li>
</ul>
<p><strong>SimilarWeb</strong> est particulièrement utile pour analyser la répartition géographique du trafic de vos concurrents.</p>`,
  },
  {
    slug: 'frequence-publication-blog-seo',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "À quelle fréquence publier des articles de blog pour le SEO ?",
    reponse: `<p>La fréquence optimale dépend de vos ressources et de la concurrence sur votre niche. Quelques repères :</p>
<ul>
<li><strong>1 article/semaine</strong> : bon rythme pour une niche peu concurrentielle</li>
<li><strong>2–4 articles/semaine</strong> : nécessaire sur des marchés très concurrentiels</li>
<li><strong>1 article/mois</strong> : insuffisant pour progresser rapidement, mais mieux que rien</li>
</ul>
<p>La qualité prime sur la quantité : un article complet et bien structuré sur un mot-clé précis vaut mieux que 5 articles bâclés. Priorisez les mots-clés avec un bon ratio volume/concurrence avec <strong>SemJuice</strong>.</p>`,
  },
  {
    slug: 'seo-images-optimisation',
    categorie: 'seo',
    categorieLabel: 'SEO',
    question: "Comment optimiser ses images pour le SEO ?",
    reponse: `<p>Les images sont souvent négligées en SEO mais représentent un vrai levier :</p>
<ul>
<li><strong>Nom de fichier</strong> : "crm-pipedrive-pipeline.webp" plutôt que "IMG_4521.jpg"</li>
<li><strong>Balise alt</strong> : décrivez le contenu de l'image avec votre mot-clé si pertinent</li>
<li><strong>Format</strong> : WebP ou AVIF pour un meilleur ratio qualité/poids</li>
<li><strong>Dimensions</strong> : servez des images aux bonnes dimensions (pas de 2000px pour une vignette de 200px)</li>
<li><strong>Lazy loading</strong> : chargez les images uniquement quand elles entrent dans le viewport</li>
</ul>
<p>Un audit technique <strong>SemJuice</strong> identifie les images non optimisées automatiquement.</p>`,
  },

  // ─── AUTOMATISATION ──────────────────────────────────────────────────────────

  {
    slug: 'automatisation-workflow-c-est-quoi',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Qu'est-ce que l'automatisation de workflow ?",
    reponse: `<p>L'<strong>automatisation de workflow</strong> consiste à faire exécuter automatiquement par des logiciels des tâches répétitives qui nécessiteraient autrement une intervention humaine.</p>
<p>Exemples concrets :</p>
<ul>
<li>Quand un formulaire est rempli → créer automatiquement un contact dans le CRM + envoyer un email de bienvenue</li>
<li>Quand une facture est payée → notifier le commercial dans Slack + mettre à jour le deal dans Pipedrive</li>
<li>Chaque lundi → générer un rapport et l'envoyer par email à l'équipe</li>
</ul>
<p><strong>Make</strong> et <strong>n8n</strong> sont les deux outils leaders pour créer ces automatisations sans coder.</p>`,
  },
  {
    slug: 'make-vs-n8n-comparaison',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Quelle est la différence entre Make et n8n ?",
    reponse: `<p>Les deux permettent de créer des automatisations, mais avec des approches différentes :</p>
<ul>
<li><strong>Make</strong> : SaaS pur, interface visuelle très intuitive, 1 800+ intégrations. Idéal pour les non-développeurs. À partir de 9$/mois.</li>
<li><strong>n8n</strong> : open source, peut être self-hébergé (gratuit), interface technique plus complexe. Plus de flexibilité pour les développeurs. Cloud à partir de 20€/mois.</li>
</ul>
<p>Pour une TPE/PME sans développeur : Make est le choix naturel. Pour une équipe technique qui veut le contrôle total et des coûts réduits à grande échelle : n8n self-hébergé est plus intéressant.</p>`,
  },
  {
    slug: 'zapier-alternative-make-n8n',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Make et n8n sont-ils de meilleures alternatives à Zapier ?",
    reponse: `<p>Pour la plupart des cas d'usage, oui :</p>
<ul>
<li><strong>Prix</strong> : Zapier est significativement plus cher à volume équivalent. Make et n8n offrent beaucoup plus d'opérations pour le même budget.</li>
<li><strong>Flexibilité</strong> : Make permet des flux de données plus complexes (routeurs, agrégateurs, itérateurs). n8n encore plus.</li>
<li><strong>Intégrations</strong> : Zapier a l'avantage sur le nombre d'intégrations natives, mais Make couvre largement les outils populaires.</li>
</ul>
<p>Zapier reste pertinent si vous utilisez des intégrations très spécifiques absentes de Make, ou si vous êtes déjà familier avec son interface.</p>`,
  },
  {
    slug: 'no-code-automatisation-sans-coder',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Peut-on automatiser sans savoir coder ?",
    reponse: `<p>Absolument. C'est précisément la promesse du no-code. <strong>Make</strong> est le meilleur exemple : son interface visuelle permet de créer des automatisations complexes par glisser-déposer, sans écrire une ligne de code.</p>
<p>Pour démarrer sans coder :</p>
<ul>
<li>Commencez par des automatisations simples : déclencheur (trigger) → une action</li>
<li>Utilisez les templates Make (bibliothèque de scénarios préconfigurés)</li>
<li>Consultez les tutoriels YouTube Make — la communauté est très active</li>
</ul>
<p>En quelques heures d'apprentissage, vous pouvez créer des automatisations qui économisent plusieurs heures par semaine.</p>`,
  },
  {
    slug: 'webhook-definition-automatisation',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Qu'est-ce qu'un webhook ?",
    reponse: `<p>Un <strong>webhook</strong> est un mécanisme qui permet à une application d'envoyer automatiquement des données à une autre application dès qu'un événement se produit, en temps réel.</p>
<p>Contrairement à une API où vous devez régulièrement "demander" des nouvelles données, le webhook "pousse" les données dès qu'elles sont disponibles.</p>
<p>Exemple : quand un paiement Stripe est validé, Stripe envoie un webhook à votre outil de facturation, qui crée la facture instantanément — sans que vous ayez à vérifier manuellement.</p>
<p><strong>Make</strong> et <strong>n8n</strong> permettent de recevoir et envoyer des webhooks facilement, même sans connaissances techniques.</p>`,
  },
  {
    slug: 'api-vs-integration-native',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Quelle est la différence entre une intégration native et une API ?",
    reponse: `<p>Deux façons de connecter des outils entre eux :</p>
<ul>
<li><strong>Intégration native</strong> : connexion préconfigurée directement dans l'outil, activée en quelques clics (ex: connecter Pipedrive et Slack directement depuis Pipedrive). Simple mais limitée aux scénarios prévus.</li>
<li><strong>API</strong> : interface technique qui permet de construire n'importe quelle connexion sur mesure. Plus flexible, requiert des connaissances techniques ou un outil comme Make/n8n qui "traduit" l'API en interface visuelle.</li>
</ul>
<p>Commencez par les intégrations natives si elles couvrent votre besoin. Passez à l'API (via Make) pour des cas non couverts.</p>`,
  },
  {
    slug: 'automatisation-email-marketing',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser ses emails marketing ?",
    reponse: `<p>L'email marketing automatisé (marketing automation) envoie le bon email à la bonne personne au bon moment, sans intervention manuelle.</p>
<p>Séquences classiques :</p>
<ul>
<li><strong>Welcome sequence</strong> : série d'emails après inscription sur votre liste</li>
<li><strong>Nurturing</strong> : emails éducatifs pour guider un prospect vers l'achat</li>
<li><strong>Relance panier abandonné</strong> : pour les e-commerce</li>
<li><strong>Réengagement</strong> : réactiver les abonnés inactifs</li>
</ul>
<p><strong>Brevo</strong> et <strong>ActiveCampaign</strong> proposent des outils de marketing automation complets avec des éditeurs de séquences visuels. Pour les connexions avec votre CRM, <strong>Make</strong> peut orchestrer le tout.</p>`,
  },
  {
    slug: 'automatisation-crm-lead-generation',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser la gestion des leads entrants dans son CRM ?",
    reponse: `<p>Un flux automatisé de gestion des leads peut ressembler à ceci :</p>
<ol>
<li>Un prospect remplit un formulaire sur votre site</li>
<li><strong>Make</strong> reçoit les données et crée automatiquement un contact dans Pipedrive ou Sellsy</li>
<li>Le commercial reçoit une notification Slack "Nouveau lead : [nom]"</li>
<li>Un email de bienvenue est envoyé automatiquement via Brevo</li>
<li>Un rappel est créé dans le CRM pour relancer sous 24h</li>
</ol>
<p>Ce flux entier peut être mis en place en quelques heures avec Make, sans coder. Résultat : aucun lead ne tombe dans les oubliettes.</p>`,
  },
  {
    slug: 'automatisation-reporting-tableau-de-bord',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser ses reportings et tableaux de bord ?",
    reponse: `<p>Générer des rapports manuellement chaque semaine est chronophage. Solutions :</p>
<ul>
<li><strong>Dashboards natifs</strong> : la plupart des outils (Pipedrive, Monday.com, Sellsy) proposent des tableaux de bord qui se mettent à jour en temps réel.</li>
<li><strong>Make + Google Sheets</strong> : collectez des données de plusieurs sources et peuplez automatiquement un tableur partagé chaque lundi.</li>
<li><strong>n8n + Notion</strong> : créez une page Notion de rapport qui se remplit automatiquement.</li>
</ul>
<p>L'objectif : que vos KPIs clés soient toujours à jour sans intervention manuelle — vous passez votre temps à analyser, pas à compiler.</p>`,
  },
  {
    slug: 'chatgpt-automatisation-ia',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment intégrer ChatGPT / l'IA dans ses automatisations ?",
    reponse: `<p>L'IA générative (ChatGPT, Claude) peut être intégrée dans vos automatisations pour des tâches de traitement de texte :</p>
<ul>
<li>Résumer un email entrant avant de l'enregistrer dans le CRM</li>
<li>Rédiger une réponse email personnalisée basée sur l'historique client</li>
<li>Extraire des informations structurées d'un PDF ou d'un email</li>
<li>Classifier automatiquement des tickets de support</li>
</ul>
<p><strong>Make</strong> et <strong>n8n</strong> proposent des modules natifs pour appeler l'API OpenAI ou Anthropic. Vous pouvez ainsi intégrer de l'IA dans n'importe quel workflow, sans coder.</p>`,
  },
  {
    slug: 'erreurs-courantes-automatisation',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Quelles sont les erreurs courantes en automatisation ?",
    reponse: `<p>Les erreurs les plus fréquentes quand on commence à automatiser :</p>
<ul>
<li><strong>Automatiser trop tôt</strong> : automatisez un processus que vous maîtrisez, pas un processus en cours de définition</li>
<li><strong>Pas de gestion des erreurs</strong> : que se passe-t-il si l'API est indisponible ? Prévoyez des alertes.</li>
<li><strong>Pas de tests</strong> : testez avec de fausses données avant de brancher sur la production</li>
<li><strong>Automatisations trop complexes</strong> : commencez simple, ajoutez de la complexité progressivement</li>
<li><strong>Pas de documentation</strong> : dans 6 mois, vous ne vous souviendrez plus de ce que fait ce scénario</li>
</ul>
<p>Make facilite la gestion des erreurs avec ses modules de gestion d'exception et ses historiques d'exécution.</p>`,
  },
  {
    slug: 'automatisation-ecommerce-boutique',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser les processus d'une boutique e-commerce ?",
    reponse: `<p>Pour une boutique en ligne, les automatisations les plus impactantes :</p>
<ul>
<li><strong>Commande reçue</strong> → email de confirmation + mise à jour stock</li>
<li><strong>Commande expédiée</strong> → email de suivi avec numéro de tracking</li>
<li><strong>Panier abandonné</strong> → relance email J+1, J+3</li>
<li><strong>Avis post-achat</strong> → demande d'avis automatique J+7 après livraison</li>
<li><strong>Stock critique</strong> → alerte email quand un produit passe sous 5 unités</li>
</ul>
<p>Ces flux peuvent être mis en place avec <strong>Make</strong> connecté à Shopify/WooCommerce + Brevo pour les emails.</p>`,
  },
  {
    slug: 'automatisation-facturation-comptabilite',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser sa facturation et sa comptabilité ?",
    reponse: `<p>Les automatisations comptables les plus utiles :</p>
<ul>
<li><strong>Paiement Stripe reçu</strong> → Make crée automatiquement la facture dans Sellsy ou Indy</li>
<li><strong>Facture impayée à J+30</strong> → email de relance automatique</li>
<li><strong>Dépense par carte</strong> → Qonto catégorise automatiquement et exporte vers le comptable</li>
<li><strong>Fin de mois</strong> → export automatique des écritures comptables en FEC</li>
</ul>
<p>Les outils comme <strong>Qonto</strong> + <strong>Tiime</strong> sont déjà conçus pour s'intégrer nativement. <strong>Make</strong> permet de connecter n'importe quelle combinaison d'outils.</p>`,
  },
  {
    slug: 'budget-automatisation-estimation',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Quel budget prévoir pour mettre en place des automatisations ?",
    reponse: `<p>Le coût de l'automatisation dépend du volume et de la complexité :</p>
<ul>
<li><strong>Démarrage</strong> : Make à 9$/mois (10 000 opérations) suffit pour la plupart des TPE</li>
<li><strong>Croissance</strong> : 16–29$/mois (Make Pro/Teams) pour des volumes plus importants</li>
<li><strong>n8n self-hébergé</strong> : gratuit sur votre propre serveur (coût d'hébergement ~5–15€/mois)</li>
</ul>
<p>ROI typique : 1h économisée par semaine × 50€/h × 52 semaines = 2 600€/an économisés pour 9€/mois investi. L'automatisation est presque toujours rentable rapidement.</p>`,
  },
  {
    slug: 'rpa-vs-integration-plateforme',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Quelle est la différence entre RPA et une plateforme d'intégration comme Make ?",
    reponse: `<p>Deux approches différentes de l'automatisation :</p>
<ul>
<li><strong>RPA (Robotic Process Automation)</strong> : un robot simule les actions d'un humain sur une interface graphique (clics, saisies). Utile quand aucune API n'existe. Outils : UiPath, Automation Anywhere.</li>
<li><strong>Plateforme d'intégration</strong> (Make, n8n) : connecte les applications via leurs APIs. Plus fiable et rapide que le RPA, mais requiert que les outils exposent des APIs.</li>
</ul>
<p>Pour 95% des besoins d'une PME, Make suffit largement et est bien plus simple à maintenir qu'une solution RPA.</p>`,
  },
  {
    slug: 'securite-automatisation-donnees',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment sécuriser ses automatisations et protéger ses données ?",
    reponse: `<p>La sécurité est souvent négligée dans les automatisations. Points de vigilance :</p>
<ul>
<li><strong>Clés API</strong> : stockez-les dans les variables d'environnement de Make/n8n, jamais en dur dans les scénarios</li>
<li><strong>Principe de moindre privilège</strong> : donnez aux connexions seulement les permissions nécessaires</li>
<li><strong>Logs et historique</strong> : conservez les logs d'exécution pour auditer en cas de problème</li>
<li><strong>RGPD</strong> : faites attention aux données personnelles qui transitent — minimisez ce qui est transmis</li>
<li><strong>Accès</strong> : limitez qui peut modifier les automatisations en production</li>
</ul>
<p>Make héberge les données en Europe avec chiffrement. n8n self-hébergé donne le contrôle total mais impose de gérer soi-même la sécurité serveur.</p>`,
  },
  {
    slug: 'automatisation-recrutement-rh',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser ses processus RH et de recrutement ?",
    reponse: `<p>Les RH offrent de nombreuses opportunités d'automatisation :</p>
<ul>
<li><strong>Candidature reçue</strong> → email de confirmation automatique au candidat + notification au recruteur</li>
<li><strong>Candidat retenu</strong> → envoi du planning d'entretien + liens visio</li>
<li><strong>Embauche</strong> → checklist onboarding créée automatiquement dans Monday.com + comptes outils à créer</li>
<li><strong>Congés</strong> → soumission → validation manager → mise à jour du calendrier</li>
</ul>
<p>Ces flux combinent Make pour l'orchestration, un ATS (outil de recrutement) et Monday.com pour la gestion des tâches d'onboarding.</p>`,
  },
  {
    slug: 'automatisation-support-client',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser son support client ?",
    reponse: `<p>L'automatisation du support client améliore les délais de réponse sans augmenter les effectifs :</p>
<ul>
<li><strong>Accusé de réception automatique</strong> : confirmez chaque ticket en moins de 5 minutes</li>
<li><strong>Routing intelligent</strong> : dirigez le ticket vers le bon agent selon le sujet détecté</li>
<li><strong>Base de connaissances</strong> : proposez automatiquement des articles de FAQ pertinents</li>
<li><strong>Escalade</strong> : si pas de réponse sous 24h, alertez le manager</li>
<li><strong>Enquête de satisfaction</strong> : envoyée automatiquement à la fermeture du ticket</li>
</ul>
<p>Make peut orchestrer ces flux entre votre outil de ticketing, votre CRM et vos canaux de communication.</p>`,
  },
  {
    slug: 'faire-une-premiere-automatisation',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Par où commencer pour créer sa première automatisation ?",
    reponse: `<p>Voici une méthode simple pour réussir sa première automatisation :</p>
<ol>
<li><strong>Identifiez une tâche répétitive</strong> que vous faites au moins 3 fois par semaine</li>
<li><strong>Découpez-la</strong> en étapes élémentaires (déclencheur → action 1 → action 2)</li>
<li><strong>Vérifiez que les outils ont des APIs</strong> (presque tous les SaaS modernes en ont)</li>
<li><strong>Créez un compte Make gratuit</strong> et testez le scénario avec de fausses données</li>
<li><strong>Activez et surveillez</strong> les premières exécutions</li>
</ol>
<p>Un bon premier cas : "Quand un formulaire Tally/Typeform est rempli → créer un contact dans mon CRM." C'est faisable en 30 minutes avec Make.</p>`,
  },
]

export function getFaqByCategorie(categorie: string): FaqItem[] {
  return FAQ_ITEMS.filter(item => item.categorie === categorie)
}

export function getFaqBySlug(categorie: string, slug: string): FaqItem | undefined {
  return FAQ_ITEMS.find(item => item.categorie === categorie && item.slug === slug)
}
