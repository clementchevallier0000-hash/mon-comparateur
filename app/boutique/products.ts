export interface Product {
  id: string
  badge: string
  badgeColor: string
  badgeBg: string
  emoji: string
  accentColor: string
  accentBg: string
  accentLight: string
  title: string
  seoTitle: string
  description: string
  seoDescription: string
  longDescription: string
  price: number
  originalPrice: number | null
  includes: { icon: string; text: string }[]
  bonus: string[]
  format: string
  tag: string
  tagColor: string
  faq: { q: string; a: string }[]
}

export const products: Product[] = [
  {
    id: 'n8n-pack',
    badge: '🔥 Best-seller',
    badgeColor: '#ea580c',
    badgeBg: '#fff7ed',
    emoji: '⚡',
    accentColor: '#d97706',
    accentBg: '#fffbeb',
    accentLight: '#fde68a',
    title: 'Pack N8N — 5 Workflows clé en main pour TPE/PME',
    seoTitle: 'Pack N8N — 5 Workflows d\'automatisation clé en main pour TPE/PME',
    description: 'Téléchargez et importez en 2 clics. Chaque workflow est documenté, testé et prêt à configurer avec vos propres credentials.',
    seoDescription: 'Téléchargez 5 workflows N8N prêts à l\'emploi : prospection LinkedIn, relance factures, veille IA, onboarding client. Import en 2 clics, README inclus. Dès 39€.',
    longDescription: `Construire des workflows N8N from scratch prend du temps — souvent plusieurs heures par automatisation, entre la logique, les tests et la documentation. Ce pack vous donne 5 workflows opérationnels que vous importez en 2 clics et configurez en moins d'une heure.

Chaque workflow a été testé sur des configurations réelles de TPE françaises. Le README inclus détaille chaque nœud, chaque credential à renseigner, et les points de personnalisation courants. Pas de code à écrire, pas d'architecture à concevoir — vous configurez vos identifiants et vous lancez.

Les 5 automatisations couvrent les tâches les plus chronophages d'une TPE : la prospection commerciale, le suivi des factures impayées, la veille concurrentielle, l'onboarding client et le reporting analytique. Mises bout à bout, elles représentent entre 5 et 10 heures de travail manuel économisées chaque semaine.`,
    price: 39,
    originalPrice: null,
    includes: [
      { icon: '🎯', text: 'Prospection LinkedIn → CRM HubSpot (automatique)' },
      { icon: '📬', text: 'Relance factures impayées J+7 / J+14 / J+30' },
      { icon: '🔍', text: 'Veille concurrentielle IA (RSS + GPT-4)' },
      { icon: '🤝', text: 'Onboarding client — 3 emails séquentiels automatiques' },
      { icon: '📊', text: 'Rapport Google Analytics hebdo analysé par IA' },
    ],
    bonus: [
      'README d\'installation pas à pas pour chaque workflow',
      'Support par email 30 jours (réponse sous 24h)',
      'Mises à jour gratuites à vie',
    ],
    format: '5 fichiers JSON · Import N8N direct',
    tag: 'Automatisation',
    tagColor: '#d97706',
    faq: [
      { q: 'Faut-il des compétences techniques pour utiliser ces workflows ?', a: 'Non. Chaque workflow est livré avec un README pas à pas qui explique chaque étape de configuration. Si vous savez vous connecter à N8N et copier-coller un JSON, vous pouvez les utiliser.' },
      { q: 'Quelle version de N8N est requise ?', a: 'Les workflows sont compatibles N8N 1.0 et supérieur, en version cloud (n8n.cloud) et self-hosted. Ils ont été testés sur la dernière version stable.' },
      { q: 'Puis-je modifier les workflows selon mes besoins ?', a: 'Oui, entièrement. Ce sont des fichiers JSON N8N standards que vous pouvez modifier librement. Le README indique les points de personnalisation les plus courants.' },
      { q: 'De quels comptes ai-je besoin ?', a: 'Ça dépend des workflows. En général : un compte HubSpot (gratuit), Gmail ou Outlook, Google Sheets, et une clé OpenAI pour les fonctions IA. Tout est détaillé dans le README.' },
    ],
  },
  {
    id: 'audit-saas',
    badge: '🎯 Recommandé',
    badgeColor: '#2563eb',
    badgeBg: '#eff6ff',
    emoji: '🔍',
    accentColor: '#2563eb',
    accentBg: '#eff6ff',
    accentLight: '#dbeafe',
    title: 'Audit SaaS personnalisé — La stack idéale pour votre business',
    seoTitle: 'Audit SaaS personnalisé — Trouvez la stack idéale pour votre TPE/PME',
    description: 'Remplissez un formulaire de 5 minutes. Je vous envoie une recommandation complète et personnalisée de votre stack SaaS idéale sous 48h.',
    seoDescription: 'Audit SaaS personnalisé par un expert : analysez votre stack actuelle, réduisez vos coûts et trouvez les meilleurs outils pour votre activité. Réponse sous 48h. 79€.',
    longDescription: `Votre stack SaaS s'est construite au fil des années, sans vision d'ensemble. Résultat : des doublons fonctionnels, des outils sous-utilisés, et une facture mensuelle qui dépasse ce qu'elle devrait être. La TPE française dépense en moyenne 180€/mois en SaaS — mais les besoins réels d'une structure de 1 à 10 personnes sont souvent couverts pour 80 à 120€ avec les bons outils.

Cet audit vous donne une recommandation personnalisée, construite sur votre situation réelle : votre activité, votre équipe, votre budget, vos outils actuels et vos projets. Pas un rapport générique — une analyse faite à la main, outil par outil.

Vous remplissez un formulaire de 5 minutes. Dans les 48 heures, vous recevez un document PDF structuré avec votre stack recommandée par poste (vente, compta, marketing, projet, communication…), les économies potentielles identifiées, et un plan de migration si vous devez changer d'outils.`,
    price: 79,
    originalPrice: null,
    includes: [
      { icon: '📋', text: 'Analyse de votre situation actuelle (outils, budget, équipe)' },
      { icon: '🎯', text: 'Recommandation de votre stack SaaS idéale par poste' },
      { icon: '💰', text: 'Estimation du coût total et des économies potentielles' },
      { icon: '⚡', text: 'Identification des automatisations prioritaires pour vous' },
      { icon: '🗺️', text: 'Plan de migration pas à pas si vous changez d\'outils' },
    ],
    bonus: [
      'Réponse sous 48h par email',
      'Échange de suivi inclus (15 min visio ou email)',
      'Comparatif personnalisé en PDF',
    ],
    format: 'Formulaire 5 min · Audit livré sous 48h',
    tag: 'Conseil',
    tagColor: '#2563eb',
    faq: [
      { q: 'Comment se passe l\'audit concrètement ?', a: 'Après paiement, vous recevez un lien vers un formulaire de 5 minutes. Vous décrivez votre activité, vos outils actuels et votre budget. Je vous envoie votre audit complet par email dans les 48h.' },
      { q: 'Pour quel type de structure cet audit est-il fait ?', a: 'TPE, PME, freelances, agences — toute structure de 1 à 50 personnes qui veut optimiser sa stack SaaS. J\'ai analysé plus de 50 outils, tous secteurs confondus.' },
      { q: 'Que faire si les recommandations ne me conviennent pas ?', a: 'L\'échange de suivi inclus (15 min) est là pour ça. Vous me posez vos questions, j\'ajuste les recommandations selon vos contraintes spécifiques.' },
      { q: 'Est-ce que vous recommandez des outils avec lesquels vous avez des partenariats ?', a: 'Certains outils recommandés ont des liens d\'affiliation déclarés sur ce site. La recommandation reste basée sur votre besoin réel — jamais sur la commission.' },
    ],
  },
  {
    id: 'fidelisation-pack',
    badge: '🌱 Nouveau',
    badgeColor: '#16a34a',
    badgeBg: '#f0fdf4',
    emoji: '🔄',
    accentColor: '#16a34a',
    accentBg: '#f0fdf4',
    accentLight: '#bbf7d0',
    title: 'Système de fidélisation client N8N — 5 workflows pour ne jamais perdre un client',
    seoTitle: 'Système de fidélisation client automatique N8N — 5 workflows prêts à l\'emploi',
    description: 'Des workflows N8N qui tournent tout seuls : onboarding automatique, détection des clients inactifs, anniversaires, feedback post-mission et relances intelligentes.',
    seoDescription: 'Automatisez la fidélisation client avec 5 workflows N8N : onboarding, détection clients inactifs, anniversaires, feedback, up-sell. Import en 2 clics. 99€.',
    longDescription: `Acquérir un nouveau client coûte 5 à 7 fois plus cher que de fidéliser un client existant. Pourtant, la plupart des TPE n'ont aucun système de fidélisation automatique — juste des relances manuelles quand on y pense, et souvent trop tard.

Ces 5 workflows N8N créent une expérience client continue et personnalisée, sans intervention humaine au quotidien. Le workflow d'onboarding accueille chaque nouveau client avec une séquence d'emails espacés sur 60 jours. Le workflow de détection vous alerte dès qu'un client est inactif depuis 60 jours — avant qu'il parte chez un concurrent. Le workflow anniversaire envoie un email personnalisé chaque année à la date du premier contrat.

Résultat : vos clients se sentent suivis et accompagnés, même quand vous êtes occupé sur d'autres projets. La fidélisation devient un processus, pas une intention.`,
    price: 99,
    originalPrice: null,
    includes: [
      { icon: '🚀', text: 'Onboarding automatique : séquence J0 → J7 → J30 → J60' },
      { icon: '⚠️', text: 'Détection client "à risque" : alerte si inactif depuis 60 jours' },
      { icon: '🎂', text: 'Email d\'anniversaire client — fidélisation passive sans effort' },
      { icon: '⭐', text: 'Feedback automatique post-prestation + collecte avis Google' },
      { icon: '💌', text: 'Relance intelligente : up-sell / cross-sell au bon moment' },
    ],
    bonus: [
      'README détaillé + vidéo de configuration (15 min)',
      'Compatibles Gmail, Outlook, HubSpot, Airtable, Notion',
      'Support email 30 jours inclus',
    ],
    format: '5 fichiers JSON N8N · Import en 2 clics',
    tag: 'Automatisation',
    tagColor: '#16a34a',
    faq: [
      { q: 'Comment le workflow sait-il quels clients sont "à risque" ?', a: 'Le workflow interroge votre CRM ou votre base clients (HubSpot, Airtable, Notion, Google Sheets) et calcule la date de dernière interaction. Si elle dépasse 60 jours, il vous envoie une alerte. Le seuil est configurable.' },
      { q: 'Avec quels CRM ces workflows sont-ils compatibles ?', a: 'HubSpot (version gratuite incluse), Airtable, Notion, Google Sheets. Pour d\'autres CRM, N8N propose des connecteurs natifs pour Pipedrive, Salesforce, etc.' },
      { q: 'Faut-il N8N Cloud ou peut-on utiliser N8N self-hosted ?', a: 'Les deux. Les fichiers JSON sont compatibles avec toutes les instances N8N 1.0+. N8N Cloud est recommandé pour les non-techniques (aucun serveur à gérer).' },
      { q: 'Les emails envoyés sont-ils personnalisés ou génériques ?', a: 'Personnalisés. Chaque email injecte le prénom du client, le nom de la prestation et la date. Les templates sont modifiables dans le workflow.' },
    ],
  },
  {
    id: 'notion-templates',
    badge: '📐 Best value',
    badgeColor: '#6366f1',
    badgeBg: '#eef2ff',
    emoji: '🗂️',
    accentColor: '#6366f1',
    accentBg: '#eef2ff',
    accentLight: '#c7d2fe',
    title: 'Templates Notion — Gérez votre agence ou activité freelance',
    seoTitle: 'Templates Notion pour agence et freelance — 8 espaces de travail prêts à l\'emploi',
    description: '8 templates Notion clé en main pour piloter votre business au quotidien : CRM clients, suivi missions, facturation, roadmap, base de connaissances et plus.',
    seoDescription: '8 templates Notion pour agences et freelances : CRM clients, suivi missions, facturation, roadmap, base de connaissances. Duplication en 1 clic. 29€.',
    longDescription: `Notion est l'outil le plus flexible du marché — mais une page blanche, c'est intimidant. La plupart des freelances et agences finissent par sous-utiliser Notion parce que construire un système de A à Z prend trop de temps.

Ces 8 templates vous donnent une base opérationnelle immédiatement, construite autour des besoins réels d'une agence ou d'un freelance. Chaque template est autonome — vous pouvez tout utiliser d'un coup ou intégrer seulement ceux dont vous avez besoin.

Le CRM clients léger remplace un outil à 20-50€/mois pour les structures de moins de 10 personnes. Le suivi de missions centralise brief, livrables, deadlines et statut d'avancement pour chaque projet. Le tableau de bord facturation vous donne une visibilité immédiate sur vos devis, factures en attente et encaissements du mois. Chaque template est livré avec une courte vidéo de personnalisation (5-10 min) pour aller à l'essentiel.`,
    price: 29,
    originalPrice: null,
    includes: [
      { icon: '🤝', text: 'CRM clients léger : prospects, relances, historique en un coup d\'œil' },
      { icon: '📋', text: 'Suivi de missions : brief, livrables, deadlines, avancement' },
      { icon: '💶', text: 'Tableau de bord facturation : devis, factures, encaissements du mois' },
      { icon: '🗺️', text: 'Roadmap produit / service : backlog, priorités, planning trimestriel' },
      { icon: '🧠', text: 'Base de connaissances : SOPs, processus internes, onboarding' },
      { icon: '📅', text: 'Planning hebdomadaire : agenda, tâches prioritaires, revue de semaine' },
    ],
    bonus: [
      'Vidéo de prise en main (20 min) — personnalisez en 1 heure',
      'Variantes agence ET freelance solo incluses',
      'Mises à jour gratuites à vie',
    ],
    format: '8 templates Notion · Duplication en 1 clic',
    tag: 'Organisation',
    tagColor: '#6366f1',
    faq: [
      { q: 'Faut-il un compte Notion payant ?', a: 'Non. Tous les templates fonctionnent avec Notion Free. La version payante de Notion (8€/mois) permet des fonctions avancées (historique illimité, blocs avancés) mais n\'est pas requise.' },
      { q: 'Comment dupliquer un template ?', a: 'Vous recevez un lien de partage Notion. Vous cliquez "Dupliquer" en haut à droite, et le template s\'ajoute à votre espace de travail. 30 secondes max.' },
      { q: 'Les templates fonctionnent-ils pour une équipe ?', a: 'Oui. Notion permet de partager les pages avec votre équipe. Les templates CRM et suivi missions sont particulièrement adaptés à un usage collaboratif.' },
      { q: 'Puis-je modifier les templates librement ?', a: 'Oui, ils sont entièrement personnalisables. Une fois dupliqués, ils vous appartiennent — modifiez structure, couleurs, propriétés selon vos besoins.' },
    ],
  },
  {
    id: 'prompts-pack',
    badge: '⚡ Accès immédiat',
    badgeColor: '#ec4899',
    badgeBg: '#fdf2f8',
    emoji: '💬',
    accentColor: '#ec4899',
    accentBg: '#fdf2f8',
    accentLight: '#fbcfe8',
    title: 'Kit 100 Prompts métiers — GPT prêts à l\'emploi pour votre équipe',
    seoTitle: 'Kit 100 Prompts GPT métiers — Commercial, RH, Juridique, Marketing',
    description: '100 prompts GPT-4 organisés par métier, testés et optimisés. Votre équipe gagne du temps dès la première utilisation — aucune expertise IA requise.',
    seoDescription: '100 prompts GPT prêts à l\'emploi par métier : 25 commercial, 20 RH, 20 juridique, 20 marketing, 15 gestion. Compatible ChatGPT, Claude, Gemini. 19€.',
    longDescription: `ChatGPT et Claude sont puissants — mais 90% des utilisateurs les utilisent avec des prompts génériques qui donnent des résultats génériques. "Rédige un email de prospection" donne un résultat médiocre. "Rédige un email de prospection pour un commercial BtoB qui contacte un DAF dans une PME industrielle, en insistant sur la réduction des délais de paiement" donne un résultat utilisable.

Ce kit de 100 prompts vous donne des instructions précises, testées sur des cas réels, organisées par fonction métier. Chaque prompt est prêt à copier-coller avec une note d'utilisation qui explique comment l'adapter rapidement à votre contexte.

100 prompts couvrant 5 métiers : commercial (prospection, objections, relances, comptes rendus), RH (offres d'emploi, onboarding, évaluations, réponses candidats), juridique (résumés de contrats, clauses types, analyse de risques simples), marketing (posts réseaux sociaux, articles, newsletters, fiches produits), et gestion (comptes rendus, reporting, synthèses de réunion).`,
    price: 19,
    originalPrice: null,
    includes: [
      { icon: '💼', text: '25 prompts Commercial : prospection, objections, relances, comptes rendus' },
      { icon: '👥', text: '20 prompts RH : offres d\'emploi, onboarding, évaluations, candidats' },
      { icon: '⚖️', text: '20 prompts Juridique : résumés de contrats, clauses types, analyse risques' },
      { icon: '📣', text: '20 prompts Marketing : posts réseaux, articles, newsletters, fiches produits' },
      { icon: '🔧', text: '15 prompts Gestion : comptes rendus, reporting, synthèses de réunion' },
    ],
    bonus: [
      'Fiche mémo "comment bien prompter" (1 page)',
      'Compatible ChatGPT, Claude, Gemini — tous les modèles',
      'Mises à jour trimestrielles incluses',
    ],
    format: 'PDF illustré + Notion partageable · 100 prompts copiables',
    tag: 'Productivité IA',
    tagColor: '#ec4899',
    faq: [
      { q: 'Ces prompts fonctionnent-ils avec ChatGPT gratuit ?', a: 'Oui. Tous les prompts sont compatibles avec ChatGPT 3.5, ChatGPT 4, Claude, Gemini et tous les modèles de langage courants. Aucune version payante requise pour débuter.' },
      { q: 'Les prompts sont-ils vraiment spécifiques aux métiers français ?', a: 'Oui. Les prompts juridiques référencent le droit français (RGPD, droit du travail). Les prompts RH intègrent les conventions collectives françaises. Les prompts marketing sont adaptés au marché francophone.' },
      { q: 'Comment reçois-je les prompts ?', a: 'Instantanément par email : un PDF illustré à imprimer ou consulter sur écran, et un lien Notion avec les 100 prompts organisés par catégorie, copiables en un clic.' },
      { q: 'Est-ce que les prompts s\'améliorent avec le temps ?', a: 'Oui. Des mises à jour trimestrielles sont envoyées par email avec les nouveaux prompts testés et les ajustements pour les dernières versions de modèles IA.' },
    ],
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id)
}
