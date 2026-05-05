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
    seoDescription: 'Téléchargez 5 workflows N8N prêts à l\'emploi : capture de leads, rapport ventes, onboarding client, relance inactifs, veille secteur. README inclus. 39€.',
    longDescription: `Construire des workflows N8N from scratch prend du temps — souvent plusieurs heures par automatisation, entre la logique, les tests et la documentation. Ce pack vous donne 5 workflows opérationnels que vous importez en 2 clics et configurez en moins d'une heure.

Chaque workflow a été conçu pour les besoins concrets d'une TPE française. Le README inclus détaille chaque nœud, chaque credential à renseigner, et les points de personnalisation courants. Pas de code à écrire, pas d'architecture à concevoir — vous configurez vos identifiants et vous lancez.

Les 5 automatisations couvrent les tâches les plus chronophages d'une TPE : la capture et qualification de leads, le suivi des ventes, l'onboarding client, la relance des clients inactifs et la veille sectorielle. Mises bout à bout, elles représentent entre 5 et 10 heures de travail manuel économisées chaque semaine.`,
    price: 39,
    originalPrice: null,
    includes: [
      { icon: '🎯', text: 'Capture de leads : formulaire → Notion CRM + email bienvenue automatique' },
      { icon: '📊', text: 'Rapport ventes hebdo : Airtable → calcul métriques (CA, panier moyen, top produit) → Gmail' },
      { icon: '🤝', text: 'Onboarding client : séquence 3 emails automatiques (J0 / J2 / J7)' },
      { icon: '⚠️', text: 'Relance clients inactifs : détection 30 jours + email personnalisé + marquage Airtable' },
      { icon: '🔍', text: 'Veille secteur : agrégation RSS multi-sources + filtre mots-clés → digest Gmail quotidien' },
    ],
    bonus: [
      'README d\'installation pas à pas pour chaque workflow',
    ],
    format: '5 fichiers JSON · Import N8N direct',
    tag: 'Automatisation',
    tagColor: '#d97706',
    faq: [
      { q: 'Faut-il des compétences techniques pour utiliser ces workflows ?', a: 'Non. Chaque workflow est livré avec un README pas à pas qui explique chaque étape de configuration. Si vous savez vous connecter à N8N et copier-coller un JSON, vous pouvez les utiliser.' },
      { q: 'Quelle version de N8N est requise ?', a: 'Les workflows sont compatibles N8N 1.0 et supérieur, en version cloud (n8n.cloud) et self-hosted. Ils ont été testés sur la dernière version stable.' },
      { q: 'Puis-je modifier les workflows selon mes besoins ?', a: 'Oui, entièrement. Ce sont des fichiers JSON N8N standards que vous pouvez modifier librement. Le README indique les points de personnalisation les plus courants.' },
      { q: 'De quels comptes ai-je besoin ?', a: 'Selon les workflows utilisés : Notion ou Airtable pour stocker les données, Gmail pour les emails, et un compte RSS pour la veille. Tout est détaillé dans le README de chaque workflow.' },
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
    title: 'Système de fidélisation client N8N — 6 workflows pour ne jamais perdre un client',
    seoTitle: 'Système de fidélisation client automatique N8N — 6 workflows prêts à l\'emploi',
    description: 'Des workflows N8N qui tournent tout seuls : points de fidélité, anniversaires clients, détection VIP, demande d\'avis, alerte expiration et rapport mensuel.',
    seoDescription: 'Automatisez la fidélisation client avec 6 workflows N8N : points fidélité, anniversaires, détection VIP, collecte avis, alerte expiration, rapport mensuel. 99€.',
    longDescription: `Acquérir un nouveau client coûte 5 à 7 fois plus cher que de fidéliser un client existant. Pourtant, la plupart des TPE n'ont aucun système de fidélisation automatique — juste des relances manuelles quand on y pense, et souvent trop tard.

Ces 6 workflows N8N créent une expérience client continue et personnalisée, sans intervention humaine au quotidien. Le workflow de points de fidélité calcule et attribue automatiquement des points à chaque achat, avec des paliers de récompense. Le workflow de détection VIP surveille qui dépasse vos seuils (CA ou nombre d'achats) et leur envoie un email personnalisé. Le workflow anniversaire envoie une offre 48h à chaque client à la date de son premier achat.

Résultat : vos clients se sentent suivis et accompagnés, même quand vous êtes occupé sur d'autres projets. La fidélisation devient un processus, pas une intention.`,
    price: 99,
    originalPrice: null,
    includes: [
      { icon: '🏆', text: 'Points de fidélité automatiques : calcul, paliers et emails de récompense à chaque achat' },
      { icon: '🎂', text: 'Email anniversaire client : offre 48h envoyée automatiquement à la bonne date' },
      { icon: '⭐', text: 'Détection et passage VIP : surveillance CA + nb achats → email bienvenue VIP' },
      { icon: '💬', text: 'Demande d\'avis automatique : email J+3 après achat avec lien Google Reviews' },
      { icon: '⚠️', text: 'Alerte expiration points : email urgence si points expirent dans 30 jours' },
      { icon: '📊', text: 'Rapport mensuel fidélisation : taux rétention, VIP, points distribués, CA récurrent' },
    ],
    bonus: [
      'README détaillé pour chaque workflow',
      'Compatibles Gmail, Airtable et Notion',
    ],
    format: '6 fichiers JSON N8N · Import en 2 clics',
    tag: 'Automatisation',
    tagColor: '#16a34a',
    faq: [
      { q: 'Comment les points de fidélité sont-ils calculés ?', a: 'Le workflow reçoit les données d\'achat via webhook et applique une règle configurable (ex. 1 point par euro dépensé). Il met à jour le solde dans Airtable et envoie un email de confirmation. Paliers et récompenses sont paramétrables dans le workflow.' },
      { q: 'Avec quels outils ces workflows sont-ils compatibles ?', a: 'Airtable pour stocker les données clients et les points, Gmail pour les emails. Les workflows utilisent des webhooks standards, compatibles avec la majorité des outils e-commerce.' },
      { q: 'Faut-il N8N Cloud ou peut-on utiliser N8N self-hosted ?', a: 'Les deux. Les fichiers JSON sont compatibles avec toutes les instances N8N 1.0+. N8N Cloud est recommandé pour les non-techniques (aucun serveur à gérer).' },
      { q: 'Les emails envoyés sont-ils personnalisés ou génériques ?', a: 'Personnalisés. Chaque email injecte le prénom du client, son solde de points et les informations pertinentes. Les templates sont modifiables directement dans le workflow.' },
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
    seoTitle: 'Templates Notion pour agence et freelance — 5 espaces de travail prêts à l\'emploi',
    description: '5 templates Notion clé en main pour piloter votre business au quotidien : CRM clients, gestion de projets, facturation, calendrier éditorial et dashboard business.',
    seoDescription: '5 templates Notion pour agences et freelances : CRM clients, gestion projets, facturation, calendrier éditorial, dashboard business. Import en 1 clic. 29€.',
    longDescription: `Notion est l'outil le plus flexible du marché — mais une page blanche, c'est intimidant. La plupart des freelances et agences finissent par sous-utiliser Notion parce que construire un système de A à Z prend trop de temps.

Ces 5 templates vous donnent une base opérationnelle immédiatement, construite autour des besoins réels d'une agence ou d'un freelance. Chaque template est autonome — vous pouvez tout utiliser d'un coup ou intégrer seulement ceux dont vous avez besoin.

Le CRM clients léger remplace un outil à 20-50€/mois pour les structures de moins de 10 personnes. Le suivi de projets centralise brief, livrables, deadlines et rentabilité pour chaque mission. Le tableau de facturation vous donne une visibilité immédiate sur vos devis, factures en attente et encaissements du mois. Vous les recevez au format Markdown — importables dans Notion en quelques secondes.`,
    price: 29,
    originalPrice: null,
    includes: [
      { icon: '🤝', text: 'CRM clients : prospects, pipeline, relances et historique en un coup d\'œil' },
      { icon: '📋', text: 'Gestion de projets : brief, livrables, deadlines, avancement et rentabilité' },
      { icon: '💶', text: 'Suivi facturation : devis, factures, encaissements et relances clients' },
      { icon: '📅', text: 'Calendrier éditorial : planning contenu, statut publication, recyclage multi-canal' },
      { icon: '🧠', text: 'Dashboard business : KPIs, OKR trimestriels, prospection et ressources clés' },
    ],
    bonus: [
      'README avec instructions d\'import étape par étape',
    ],
    format: '5 fichiers Markdown · Import Notion en quelques secondes',
    tag: 'Organisation',
    tagColor: '#6366f1',
    faq: [
      { q: 'Faut-il un compte Notion payant ?', a: 'Non. Tous les templates fonctionnent avec Notion Free. La version payante de Notion (8€/mois) permet des fonctions avancées (historique illimité, blocs avancés) mais n\'est pas requise.' },
      { q: 'Comment importer un template dans Notion ?', a: 'Vous recevez 5 fichiers Markdown dans un ZIP. Dans Notion, créez une nouvelle page, cliquez sur ⚙️ en haut à droite → "Importer" → "Markdown & CSV", puis sélectionnez le fichier. La structure est importée automatiquement en quelques secondes.' },
      { q: 'Les templates fonctionnent-ils pour une équipe ?', a: 'Oui. Notion permet de partager les pages avec votre équipe. Les templates CRM et gestion de projets sont particulièrement adaptés à un usage collaboratif.' },
      { q: 'Puis-je modifier les templates librement ?', a: 'Oui, ils sont entièrement personnalisables. Une fois importés, ils vous appartiennent — modifiez la structure, les propriétés et les vues selon vos besoins.' },
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
    title: 'Kit 115 Prompts métiers — GPT prêts à l\'emploi pour votre équipe',
    seoTitle: 'Kit 115 Prompts GPT métiers — Marketing, Ventes, SEO, Finance, Service Client',
    description: '115 prompts GPT-4 organisés par thème métier, testés et optimisés. Votre équipe gagne du temps dès la première utilisation — aucune expertise IA requise.',
    seoDescription: '115 prompts GPT prêts à l\'emploi : marketing, ventes, service client, productivité, SEO, finance et meta-prompts. Compatible ChatGPT, Claude, Gemini. 19€.',
    longDescription: `ChatGPT et Claude sont puissants — mais 90% des utilisateurs les utilisent avec des prompts génériques qui donnent des résultats génériques. "Rédige un email de prospection" donne un résultat médiocre. "Rédige un email de prospection pour un commercial BtoB qui contacte un DAF dans une PME industrielle, en insistant sur la réduction des délais de paiement" donne un résultat utilisable.

Ce kit de 115 prompts vous donne des instructions précises, testées sur des cas réels, organisées par thème métier. Chaque prompt est prêt à copier-coller avec le rôle, le contexte et le format de sortie attendu déjà rédigés — vous remplissez juste vos informations spécifiques.

115 prompts répartis sur 7 thèmes : marketing & copywriting (pages de vente, LinkedIn, Meta Ads…), ventes & prospection (cold email, objections, proposition commerciale…), service client, productivité & organisation, SEO & contenu web, finance & gestion, et un bonus de meta-prompts pour améliorer vos propres prompts.`,
    price: 19,
    originalPrice: null,
    includes: [
      { icon: '📣', text: '20 prompts Marketing & Copywriting : page de vente, LinkedIn, Meta Ads, séquence lancement' },
      { icon: '💼', text: '15 prompts Ventes & Prospection : cold email, script découverte, objections, proposition commerciale' },
      { icon: '🎧', text: '15 prompts Service Client : réclamation, crise, FAQ, onboarding, anti-résiliation' },
      { icon: '⚙️', text: '15 prompts Productivité & Organisation : Deep Work, SOP, délégation, OKR, réunion' },
      { icon: '🔍', text: '20 prompts SEO & Contenu Web : article 2000 mots, audit, stratégie mots-clés, netlinking' },
      { icon: '💰', text: '15 prompts Finance & Gestion : business plan, trésorerie, rentabilité, pitch investisseur' },
      { icon: '🧠', text: '15 prompts Bonus — Meta-prompts : persona IA, améliorer vos prompts, brainstorming simulé' },
    ],
    bonus: [
      'Guide "comment bien prompter" inclus dans le ZIP',
      'Compatible ChatGPT, Claude, Gemini — tous les modèles',
    ],
    format: '7 fichiers Markdown · 115 prompts organisés par thème',
    tag: 'Productivité IA',
    tagColor: '#ec4899',
    faq: [
      { q: 'Ces prompts fonctionnent-ils avec ChatGPT gratuit ?', a: 'Oui. Tous les prompts sont compatibles avec ChatGPT 3.5, ChatGPT 4, Claude, Gemini et tous les modèles de langage courants. Aucune version payante requise pour débuter.' },
      { q: 'Les prompts sont-ils vraiment spécifiques aux métiers français ?', a: 'Oui. Les prompts marketing et ventes sont calibrés pour le marché francophone. Les prompts SEO tiennent compte des spécificités du référencement en français. Chaque prompt est rédigé directement en français.' },
      { q: 'Comment reçois-je les prompts ?', a: 'Immédiatement après paiement : vous téléchargez un ZIP contenant 7 fichiers Markdown, un par thème. Ouvrez-les avec n\'importe quel éditeur de texte, Notion, ou Obsidian — copiez le prompt qui vous intéresse et collez-le dans votre outil IA.' },
      { q: 'Puis-je les modifier et les adapter à mon business ?', a: 'Oui, et c\'est même recommandé. Chaque prompt est conçu pour être personnalisé : remplacez les crochets [comme ceci] par vos informations spécifiques pour obtenir des résultats encore meilleurs.' },
    ],
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id)
}
