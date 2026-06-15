import type { FaqItem } from './faq'

export const FAQ_AUTOMATISATION: FaqItem[] = [
  {
    slug: 'automatisation-workflow-c-est-quoi',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Qu'est-ce que l'automatisation de workflow ?",
    reponse: `<h2>Automatisation de workflow : définition</h2>
<p>L'<strong>automatisation de workflow</strong> consiste à faire exécuter automatiquement par des logiciels des tâches répétitives qui nécessiteraient autrement une intervention humaine — sans erreur, sans délai, 24h/24.</p>

<h2>Exemples concrets d'automatisations</h2>
<ul>
<li>Quand un formulaire est rempli → créer automatiquement un contact dans le CRM + envoyer un email de bienvenue</li>
<li>Quand une facture est payée → notifier le commercial dans Slack + mettre à jour le deal dans Pipedrive</li>
<li>Chaque lundi à 8h → générer un rapport et l'envoyer par email à l'équipe</li>
<li>Quand un avis Google est posté → alerter le responsable marketing dans Teams</li>
</ul>

<h2>Les composants d'un workflow automatisé</h2>
<table>
<tr><th>Composant</th><th>Rôle</th><th>Exemple</th></tr>
<tr><td><strong>Déclencheur (Trigger)</strong></td><td>L'événement qui lance l'automatisation</td><td>Nouveau formulaire soumis, heure programmée, webhook reçu</td></tr>
<tr><td><strong>Action(s)</strong></td><td>Ce qui se passe en réponse</td><td>Créer un contact CRM, envoyer un email, créer une tâche</td></tr>
<tr><td><strong>Filtre/Condition</strong></td><td>Logique conditionnelle (si/alors)</td><td>Si montant > 1000€ → alerter le directeur commercial</td></tr>
<tr><td><strong>Transformateur</strong></td><td>Modifier les données en transit</td><td>Formater une date, extraire un prénom depuis un nom complet</td></tr>
</table>

<h2>Outils phares pour automatiser</h2>
<ul>
<li><strong>Make</strong> (ex-Integromat) : interface visuelle par glisser-déposer, 1 800+ intégrations, idéal sans code</li>
<li><strong>n8n</strong> : open-source, self-hébergeable, plus technique mais très puissant</li>
<li><strong>Zapier</strong> : pionnier du secteur, plus simple mais plus cher à volume équivalent</li>
</ul>

<h2>Par où commencer ?</h2>
<ol>
<li>Listez les tâches que vous répétez plus de 3 fois par semaine</li>
<li>Identifiez la tâche la plus simple avec le plus grand gain de temps</li>
<li>Vérifiez que les outils concernés ont des APIs ou des intégrations disponibles</li>
<li>Créez votre premier scénario Make en 30 minutes</li>
</ol>
<div class="encart">💡 <strong>ROI typique :</strong> 1 heure économisée par semaine × 50€/h = 2 600€/an de valeur créée pour 9€/mois d'abonnement Make. L'automatisation est presque toujours rentable dès le premier mois.</div>`,
  },
  {
    slug: 'make-vs-n8n-comparaison',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Quelle est la différence entre Make et n8n ?",
    reponse: `<h2>Make vs n8n : deux philosophies différentes</h2>
<p>Make et n8n sont les deux outils d'automatisation les plus puissants du marché en 2026. Ils permettent tous les deux de connecter des applications et d'automatiser des workflows, mais avec des approches très différentes.</p>

<h2>Comparaison détaillée</h2>
<table>
<tr><th>Critère</th><th>Make</th><th>n8n</th></tr>
<tr><td>Type</td><td>SaaS cloud</td><td>Open-source (self-hébergeable) + cloud payant</td></tr>
<tr><td>Interface</td><td>Visuelle, très intuitive</td><td>Visuelle mais plus technique</td></tr>
<tr><td>Intégrations</td><td>1 800+ nativement</td><td>400+ nativement + accès API universel</td></tr>
<tr><td>Prix cloud</td><td>Gratuit (1 000 ops) puis à partir de 9$/mois</td><td>Gratuit (5 000 exécutions) puis 20€/mois</td></tr>
<tr><td>Self-hébergement</td><td>Non disponible</td><td>Gratuit sur votre serveur (~5-15€/mois)</td></tr>
<tr><td>Code personnalisé</td><td>Limité (formules JavaScript)</td><td>Modules de code complets (JS/Python)</td></tr>
<tr><td>Courbe d'apprentissage</td><td>Faible (débutant-friendly)</td><td>Moyenne à élevée</td></tr>
<tr><td>Conformité RGPD</td><td>Données hébergées en Europe (option)</td><td>Total si self-hébergé</td></tr>
</table>

<h2>Quand choisir Make ?</h2>
<ul>
<li>Vous n'êtes pas développeur et voulez des résultats rapides</li>
<li>Vous avez besoin de nombreuses intégrations natives prêtes à l'emploi</li>
<li>Votre équipe doit pouvoir maintenir les automatisations sans formation technique</li>
<li>Votre volume est inférieur à 100 000 opérations/mois</li>
</ul>

<h2>Quand choisir n8n ?</h2>
<ul>
<li>Vous avez un développeur dans l'équipe ou êtes vous-même technique</li>
<li>Vous traitez de gros volumes et voulez maîtriser les coûts (self-hébergement)</li>
<li>Vous avez des contraintes fortes de souveraineté des données (RGPD, santé, finance)</li>
<li>Vous avez besoin de logique métier complexe avec du code personnalisé</li>
</ul>
<div class="encart">🎯 <strong>Recommandation :</strong> pour 90% des TPE/PME françaises, <strong>Make</strong> est le bon choix de départ. Migrez vers n8n uniquement quand votre volume ou votre besoin de personnalisation le justifie vraiment.</div>`,
  },
  {
    slug: 'zapier-alternative-make-n8n',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Make et n8n sont-ils de meilleures alternatives à Zapier ?",
    reponse: `<h2>Zapier, Make et n8n : le marché de l'automatisation no-code</h2>
<p>Zapier est le pionnier et le leader mondial de l'automatisation no-code. Mais depuis 2019, Make (ex-Integromat) et n8n ont émergé comme des alternatives souvent supérieures pour les entreprises françaises.</p>

<h2>Comparaison des trois plateformes</h2>
<table>
<tr><th>Critère</th><th>Zapier</th><th>Make</th><th>n8n</th></tr>
<tr><td>Prix pour 10 000 tâches/mois</td><td>~49$/mois</td><td>~16$/mois</td><td>Gratuit (self-hébergé)</td></tr>
<tr><td>Intégrations</td><td>6 000+ (le plus complet)</td><td>1 800+</td><td>400+ natives</td></tr>
<tr><td>Flux multi-étapes complexes</td><td>Possible mais basique</td><td>Très puissant (routeurs, itérateurs)</td><td>Le plus flexible</td></tr>
<tr><td>Facilité de prise en main</td><td>La plus simple</td><td>Simple</td><td>Plus technique</td></tr>
<tr><td>Support français</td><td>Anglais uniquement</td><td>Multilingue</td><td>Communauté internationale</td></tr>
</table>

<h2>Les avantages de Make sur Zapier</h2>
<ul>
<li><strong>Prix 3x à 5x inférieur</strong> à volume équivalent — avantage décisif pour les PME</li>
<li><strong>Flux de données complexes</strong> : routeurs (if/else), agrégateurs, itérateurs sur des listes — Zapier est basique en comparaison</li>
<li><strong>Visualisation claire</strong> : le canvas Make permet de voir tout le workflow d'un coup d'œil</li>
<li><strong>Meilleure gestion des erreurs</strong> : routes alternatives en cas d'échec, retry automatique</li>
</ul>

<h2>Quand Zapier reste pertinent</h2>
<ul>
<li>Vous utilisez des outils très spécifiques (<strong>6 000 intégrations Zapier vs 1 800 Make</strong> — avantage Zapier sur la longue traîne des apps)</li>
<li>Vous avez une équipe non technique qui refuse tout apprentissage de nouveaux outils</li>
<li>Vous êtes déjà engagé dans l'écosystème Zapier avec des centaines de Zaps existants</li>
</ul>
<div class="encart">💰 <strong>Calcul concret :</strong> si vous payez 49$/mois Zapier pour 10 000 tâches, vous pouvez avoir les mêmes volumes sur Make pour ~9-16$/mois. Sur un an, c'est 400 à 480$ économisés — pour des fonctionnalités en réalité supérieures.</div>`,
  },
  {
    slug: 'no-code-automatisation-sans-coder',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Peut-on automatiser sans savoir coder ?",
    reponse: `<h2>Le no-code : l'automatisation pour tous</h2>
<p>Absolument. Le mouvement <strong>no-code</strong> a démocratisé l'automatisation. Des outils comme Make permettent de créer des workflows complexes par glisser-déposer, sans écrire une seule ligne de code. Ce qui nécessitait un développeur en 2015 est maintenant faisable en quelques heures par un non-technicien.</p>

<h2>Ce que vous pouvez faire sans coder</h2>
<ul>
<li>Connecter deux applications qui ne se parlent pas nativement</li>
<li>Créer des workflows conditionnels (si X alors Y, sinon Z)</li>
<li>Transformer et reformater des données en transit</li>
<li>Planifier des tâches récurrentes (rapports hebdomadaires, rappels)</li>
<li>Traiter des listes entières de données (itérer sur chaque ligne d'un tableau)</li>
</ul>

<h2>Les outils no-code les plus accessibles</h2>
<table>
<tr><th>Outil</th><th>Difficulté</th><th>Cas d'usage idéal</th></tr>
<tr><td>Make</td><td>⭐⭐ (facile)</td><td>Automatisations entre SaaS, workflows complets</td></tr>
<tr><td>Zapier</td><td>⭐ (très facile)</td><td>Connexions simples 2 applications, débutants</td></tr>
<tr><td>n8n cloud</td><td>⭐⭐⭐ (moyen)</td><td>Besoin de plus de contrôle, équipe semi-technique</td></tr>
<tr><td>Airtable automations</td><td>⭐ (très facile)</td><td>Automatisations internes à Airtable</td></tr>
<tr><td>Notion formulas</td><td>⭐⭐ (facile)</td><td>Calculs et logique dans Notion</td></tr>
</table>

<h2>Plan d'apprentissage Make en 5 étapes</h2>
<ol>
<li><strong>Jour 1</strong> : créer un compte Make gratuit, explorer l'interface, créer un scénario "formulaire → email"</li>
<li><strong>Semaine 1</strong> : regarder 3 tutoriels YouTube Make en français</li>
<li><strong>Semaine 2</strong> : automatiser votre première tâche réelle (un vrai pain point quotidien)</li>
<li><strong>Mois 1</strong> : ajouter des conditions (routeurs), gérer les erreurs basiques</li>
<li><strong>Mois 2-3</strong> : scénarios multi-étapes complexes, webhooks, APIs personnalisées</li>
</ol>

<h2>Ce qui demande encore du code</h2>
<p>Le no-code a ses limites. Vous aurez besoin d'un développeur pour :</p>
<ul>
<li>Des intégrations avec des systèmes très anciens sans API</li>
<li>Des traitements de données massifs et complexes (machine learning, traitement d'images avancé)</li>
<li>Des automatisations qui nécessitent une logique métier très spécifique</li>
</ul>
<div class="encart">💡 <strong>Premier projet recommandé :</strong> "Quand un nouveau contact s'inscrit via mon formulaire Tally/Typeform → créer une fiche dans mon CRM → envoyer un email de bienvenue via Brevo." Faisable en 1 heure avec Make, zéro code.</div>`,
  },
  {
    slug: 'webhook-definition-automatisation',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Qu'est-ce qu'un webhook ?",
    reponse: `<h2>Webhook : la communication en temps réel entre applications</h2>
<p>Un <strong>webhook</strong> est un mécanisme qui permet à une application d'envoyer automatiquement des données à une autre application dès qu'un événement se produit, en temps réel — sans qu'on ait à demander.</p>

<h2>API pull vs Webhook push</h2>
<table>
<tr><th></th><th>API classique (pull)</th><th>Webhook (push)</th></tr>
<tr><td>Fonctionnement</td><td>Vous interrogez l'API régulièrement ("Y a-t-il du nouveau ?")</td><td>L'application vous envoie les données dès qu'elles arrivent</td></tr>
<tr><td>Temps réel</td><td>Dépend de la fréquence d'interrogation</td><td>Immédiat (quelques secondes)</td></tr>
<tr><td>Coût en ressources</td><td>Beaucoup de requêtes inutiles si rien de nouveau</td><td>Très efficace (rien envoyé si pas d'événement)</td></tr>
<tr><td>Complexité</td><td>Simple à implémenter</td><td>Nécessite une URL publique pour recevoir</td></tr>
</table>

<h2>Exemples concrets de webhooks</h2>
<ul>
<li><strong>Stripe → votre système</strong> : quand un paiement est validé, Stripe envoie un webhook avec les détails de la transaction → Make crée automatiquement la facture dans Sellsy</li>
<li><strong>GitHub → Slack</strong> : quand un code est poussé sur la branche principale, un webhook notifie l'équipe sur Slack</li>
<li><strong>Formulaire Tally → CRM</strong> : quand un formulaire est soumis, les données sont envoyées instantanément à Pipedrive via webhook</li>
<li><strong>Shopify → ERP</strong> : quand une commande est passée, le stock est mis à jour en temps réel dans votre système de gestion</li>
</ul>

<h2>Comment créer un webhook dans Make</h2>
<ol>
<li>Dans Make, ajoutez un module "Webhooks → Custom webhook"</li>
<li>Make génère une URL unique (ex: hook.make.com/xxxxx)</li>
<li>Configurez cette URL dans l'application qui doit envoyer les données</li>
<li>Faites un test : l'application envoie un événement, Make le reçoit et vous pouvez voir la structure des données</li>
<li>Construisez votre workflow à partir de ces données reçues</li>
</ol>

<h2>Sécuriser ses webhooks</h2>
<ul>
<li><strong>Secret/Token</strong> : ajoutez un paramètre secret dans l'URL pour vérifier que la requête vient bien de la bonne source</li>
<li><strong>Vérification de signature</strong> : certains services (Stripe, GitHub) signent cryptographiquement leurs webhooks — vérifiez la signature dans votre Make</li>
<li><strong>Liste blanche d'IPs</strong> : si possible, n'acceptez les webhooks que depuis les IPs déclarées par le service</li>
</ul>
<div class="encart">⚡ <strong>Avantage clé :</strong> les webhooks éliminent les délais de polling. Au lieu de vérifier toutes les 5 minutes s'il y a une nouvelle commande, vous êtes notifié en quelques secondes. Pour tout workflow qui nécessite de la réactivité, les webhooks sont indispensables.</div>`,
  },
  {
    slug: 'api-vs-integration-native',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Quelle est la différence entre une intégration native et une API ?",
    reponse: `<h2>Intégrations natives vs APIs : deux niveaux de connexion</h2>
<p>Il existe deux façons principales de connecter des applications entre elles. Comprendre la différence vous aide à choisir la bonne approche selon votre besoin et vos ressources techniques.</p>

<h2>L'intégration native</h2>
<p>Une <strong>intégration native</strong> est une connexion préconfigurée entre deux applications, activable en quelques clics dans les paramètres d'un outil.</p>
<ul>
<li><strong>Avantages</strong> : installation en 5 minutes, aucune compétence technique, maintenue par les éditeurs</li>
<li><strong>Inconvénients</strong> : limitée aux scénarios prévus par les développeurs, peu personnalisable</li>
<li><strong>Exemples</strong> : connecter Slack et Monday.com (notifications de tâches dans Slack), connecter Pipedrive et Gmail (sync emails ↔ deals)</li>
</ul>

<h2>L'API (Application Programming Interface)</h2>
<p>Une <strong>API</strong> est une interface technique qui expose les données et fonctions d'une application de manière programmable. Elle permet de construire n'importe quelle connexion sur mesure.</p>
<ul>
<li><strong>Avantages</strong> : flexibilité totale, accès à toutes les données et fonctions de l'application</li>
<li><strong>Inconvénients</strong> : demande des compétences techniques ou un outil intermédiaire</li>
<li><strong>Exemples</strong> : créer un contact CRM depuis votre site custom, récupérer des données SEO via l'API SimilarWeb</li>
</ul>

<h2>Make et n8n : le pont entre les deux</h2>
<p>Make et n8n vous permettent d'utiliser des APIs <strong>sans coder</strong>, via une interface visuelle. Ils proposent :</p>
<ul>
<li>Des modules préconfigurés pour les apps populaires (= intégrations natives dans Make)</li>
<li>Un module "HTTP Request" universel pour appeler n'importe quelle API REST</li>
</ul>

<h2>Arbre de décision</h2>
<table>
<tr><th>Situation</th><th>Solution recommandée</th></tr>
<tr><td>Connexion simple entre 2 apps populaires</td><td>Intégration native directe</td></tr>
<tr><td>Besoin non couvert par les intégrations natives</td><td>Make/n8n avec module HTTP</td></tr>
<tr><td>Logique complexe + API</td><td>Make/n8n avec code personnalisé</td></tr>
<tr><td>Application sans API ni webhook</td><td>RPA (UiPath) ou solution sur mesure</td></tr>
</table>
<div class="encart">💡 <strong>Règle pratique :</strong> commencez toujours par chercher une intégration native. Si elle n'existe pas ou est trop limitée, passez à Make. Si Make ne suffit pas, envisagez n8n avec du code. Chaque étape augmente la puissance mais aussi la complexité.</div>`,
  },
  {
    slug: 'automatisation-email-marketing',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser ses emails marketing ?",
    reponse: `<h2>Marketing automation : envoyer le bon email, au bon moment</h2>
<p>L'<strong>email marketing automatisé</strong> envoie des emails personnalisés à vos contacts en fonction de leurs actions, comportements ou caractéristiques — sans intervention manuelle. C'est l'un des meilleurs ROI du marketing digital : 1€ investi en email marketing génère en moyenne 40€ de retour.</p>

<h2>Les séquences email les plus efficaces</h2>
<table>
<tr><th>Séquence</th><th>Déclencheur</th><th>Objectif</th><th>Nombre d'emails</th></tr>
<tr><td>Welcome series</td><td>Inscription à la newsletter</td><td>Présenter votre valeur, créer la confiance</td><td>3 à 5 emails sur 10 jours</td></tr>
<tr><td>Onboarding</td><td>Inscription à votre SaaS</td><td>Activer l'utilisateur, l'amener au premier succès</td><td>5 à 8 emails sur 14 jours</td></tr>
<tr><td>Lead nurturing</td><td>Téléchargement d'un lead magnet</td><td>Éduquer le prospect, rapprocher de l'achat</td><td>4 à 7 emails sur 3 semaines</td></tr>
<tr><td>Panier abandonné</td><td>Ajout au panier sans achat</td><td>Récupérer la vente</td><td>2 à 3 emails sur 48h</td></tr>
<tr><td>Réengagement</td><td>Inactif depuis 90 jours</td><td>Réactiver ou nettoyer la liste</td><td>2 à 3 emails sur 1 semaine</td></tr>
</table>

<h2>Les meilleurs outils d'email automation</h2>
<ul>
<li><strong>Brevo</strong> (français) : marketing automation complet, plan gratuit jusqu'à 300 emails/jour, excellente délivrabilité en France. À partir de 0€.</li>
<li><strong>ActiveCampaign</strong> : le plus puissant pour la segmentation avancée et le scoring lead. À partir de 29$/mois.</li>
<li><strong>Mailchimp</strong> : plan gratuit limité, automation disponible dès le plan Essentials (13$/mois).</li>
<li><strong>Klaviyo</strong> : la référence e-commerce, très bon pour les séquences post-achat.</li>
</ul>

<h2>Bonnes pratiques RGPD pour l'email automation</h2>
<ul>
<li>Ne collectez que des adresses email avec consentement explicite</li>
<li>Incluez un lien de désinscription dans chaque email (obligatoire légalement)</li>
<li>Respectez les demandes de désinscription sous 10 jours ouvrés</li>
<li>Conservez une preuve du consentement (date, heure, source)</li>
<li>Choisissez un outil avec hébergement en Europe (Brevo ✅)</li>
</ul>

<h2>Connecter l'email automation à votre CRM</h2>
<p>Pour une vision 360° du parcours client, connectez votre outil d'email à votre CRM via <strong>Make</strong> :</p>
<ul>
<li>Quand un email est ouvert → mettre à jour le score lead dans Pipedrive</li>
<li>Quand un prospect clique sur un lien produit → créer une opportunité dans le CRM</li>
<li>Quand un deal est "gagné" dans le CRM → déclencher la séquence onboarding Brevo</li>
</ul>`,
  },
  {
    slug: 'automatisation-crm-lead-generation',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser la gestion des leads entrants dans son CRM ?",
    reponse: `<h2>Le problème des leads non traités</h2>
<p>Selon les études, 78% des prospects achètent auprès du premier vendeur qui les contacte. Pourtant, la majorité des entreprises mettent plus de 24h à répondre à un lead entrant. L'automatisation résout ce problème en prenant en charge les leads immédiatement, même hors heures de bureau.</p>

<h2>Workflow automatisé de gestion des leads</h2>
<ol>
<li>Un prospect remplit un formulaire sur votre site (Tally, Typeform, formulaire natif)</li>
<li>Make reçoit les données via webhook en temps réel</li>
<li>Make crée automatiquement un contact dans votre CRM (Pipedrive, Sellsy, Folk)</li>
<li>Un email de bienvenue personnalisé est envoyé via Brevo en moins de 2 minutes</li>
<li>Le commercial reçoit une notification Slack "🔥 Nouveau lead : [Prénom] de [Entreprise]"</li>
<li>Un rappel est créé dans le CRM pour une relance dans les 2 heures</li>
<li>Si le lead n'est pas contacté sous 4h → relance automatique au manager</li>
</ol>

<h2>Enrichissement automatique des leads</h2>
<p>Au-delà de la simple création de fiche, vous pouvez enrichir automatiquement les informations :</p>
<ul>
<li><strong>Clearbit / Hunter.io</strong> : trouvent le nom de l'entreprise, le poste, le LinkedIn à partir d'une adresse email</li>
<li><strong>Societe.com API</strong> : récupère les informations légales de l'entreprise (SIRET, CA, effectifs)</li>
<li><strong>LinkedIn Sales Navigator</strong> : enrichissement profil via Make</li>
</ul>

<h2>Scoring automatique des leads</h2>
<p>Tous les leads ne se valent pas. Implémentez un score automatique dans votre Make :</p>
<table>
<tr><th>Critère</th><th>Points</th></tr>
<tr><td>Taille d'entreprise > 50 salariés</td><td>+30</td></tr>
<tr><td>Secteur cible (SaaS, conseil, industrie)</td><td>+20</td></tr>
<tr><td>A mentionné un budget</td><td>+25</td></tr>
<tr><td>Vient d'une recommandation</td><td>+35</td></tr>
<tr><td>Email générique (gmail.com, yahoo.fr)</td><td>-20</td></tr>
</table>
<div class="encart">⚡ <strong>Impact mesurable :</strong> les équipes commerciales qui automatisent la gestion des leads réduisent leur temps de réponse de 95% et augmentent leur taux de conversion de 20 à 40%. Le premier contact reste le moment critique.</div>`,
  },
  {
    slug: 'automatisation-reporting-tableau-de-bord',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser ses reportings et tableaux de bord ?",
    reponse: `<h2>Le reporting manuel : une perte de temps considérable</h2>
<p>Un manager passe en moyenne 3 à 5 heures par semaine à compiler des rapports manuellement depuis différentes sources. L'automatisation du reporting libère ce temps pour l'analyse et la prise de décision.</p>

<h2>Les approches selon votre niveau</h2>

<h3>Niveau 1 : Dashboards natifs dans vos outils</h3>
<p>La plupart des outils proposent des tableaux de bord intégrés qui se mettent à jour en temps réel :</p>
<ul>
<li><strong>Pipedrive</strong> : dashboard commercial (deals, CA prévisionnel, activités par commercial)</li>
<li><strong>Monday.com</strong> : tableaux de bord projet cross-boards avec widgets personnalisables</li>
<li><strong>Sellsy</strong> : reporting financier (CA, factures, délais de paiement)</li>
</ul>

<h3>Niveau 2 : Agrégation automatique dans Google Sheets</h3>
<p>Pour combiner des données de plusieurs sources, Make peut alimenter automatiquement un Google Sheet partagé :</p>
<ul>
<li>Tous les lundis à 8h → Make récupère les données Pipedrive, les métriques Google Analytics, les factures Sellsy</li>
<li>Make les formate et les insère dans l'onglet correspondant</li>
<li>Un email avec le lien du rapport est envoyé à l'équipe</li>
</ul>

<h3>Niveau 3 : Outils BI dédiés</h3>
<table>
<tr><th>Outil</th><th>Prix</th><th>Idéal pour</th></tr>
<tr><td>Google Looker Studio</td><td>Gratuit</td><td>Petites équipes, connexion Google (GA, Search Console, Sheets)</td></tr>
<tr><td>Power BI (Microsoft)</td><td>10$/mois/utilisateur</td><td>Entreprises dans l'écosystème Microsoft</td></tr>
<tr><td>Metabase</td><td>Gratuit (self-hébergé)</td><td>Équipes techniques, requêtes SQL sur base de données</td></tr>
<tr><td>Databox</td><td>À partir de 47$/mois</td><td>Marketeurs, KPIs marketing agrégés</td></tr>
</table>

<h2>Reporting automatique avec Make</h2>
<p>Scénario Make typique pour un reporting hebdomadaire :</p>
<ol>
<li>Déclencheur : "Chaque lundi à 7h00"</li>
<li>Récupérer les données des 7 derniers jours depuis votre CRM</li>
<li>Récupérer les données depuis Google Analytics</li>
<li>Formater les données et remplir un template Google Slides ou Notion</li>
<li>Envoyer le rapport par email à l'équipe dirigeante</li>
</ol>
<div class="encart">⏱ <strong>Gain temps typique :</strong> une PME qui automatise son reporting hebdomadaire économise 2 à 4 heures par semaine de travail manuel. Sur un an, c'est l'équivalent de 2 à 4 semaines de temps cadre libéré pour des tâches à plus haute valeur.</div>`,
  },
  {
    slug: 'chatgpt-automatisation-ia',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment intégrer ChatGPT / l'IA dans ses automatisations ?",
    reponse: `<h2>IA générative + automatisation : une combinaison puissante</h2>
<p>L'intégration de l'IA générative (ChatGPT via OpenAI, Claude d'Anthropic, Gemini de Google) dans vos workflows automatisés permet d'ajouter une couche d'intelligence pour traiter le langage naturel — là où les automatisations classiques ne gèrent que des données structurées.</p>

<h2>Cas d'usage concrets IA + Make</h2>
<ul>
<li><strong>Résumé d'email</strong> : chaque email entrant dans votre boîte support → Claude résume en 3 lignes → fiche créée dans le CRM avec le résumé</li>
<li><strong>Rédaction de réponses</strong> : ticket client reçu → GPT-4 génère un brouillon de réponse basé sur votre base de connaissances → soumis à validation avant envoi</li>
<li><strong>Extraction de données</strong> : PDF de bon de commande reçu → IA extrait produits, quantités, prix → données insérées dans votre ERP</li>
<li><strong>Catégorisation automatique</strong> : avis clients collectés → IA les classe par thème (livraison, qualité, SAV) → tableau de bord mis à jour</li>
<li><strong>Génération de contenu</strong> : nouvelle fiche produit ajoutée → IA génère une description marketing → publiée automatiquement sur le site</li>
</ul>

<h2>Les modèles disponibles et leurs forces</h2>
<table>
<tr><th>Modèle</th><th>Fournisseur</th><th>Forces</th><th>Coût approx.</th></tr>
<tr><td>GPT-4o</td><td>OpenAI</td><td>Polyvalent, vision (analyse images), large contexte</td><td>~5$/million tokens</td></tr>
<tr><td>Claude Sonnet 4.6</td><td>Anthropic</td><td>Rédaction longue, nuance, respect des instructions</td><td>~3$/million tokens</td></tr>
<tr><td>Gemini Flash</td><td>Google</td><td>Très rapide, économique pour les volumes importants</td><td>~0,075$/million tokens</td></tr>
</table>

<h2>Implémenter l'IA dans Make</h2>
<ol>
<li>Dans Make, ajoutez le module <strong>OpenAI → Create a completion</strong></li>
<li>Configurez votre clé API OpenAI (stockée dans les connexions Make, jamais en clair)</li>
<li>Définissez votre prompt système et insérez les variables dynamiques de votre workflow</li>
<li>Récupérez la réponse de l'IA et utilisez-la dans les modules suivants</li>
</ol>
<div class="encart-warning">⚠️ <strong>Attention aux données personnelles :</strong> si vous envoyez des données clients à une API IA externe (OpenAI, Anthropic), vérifiez les conditions d'utilisation RGPD. Activez le data processing agreement et assurez-vous que les données ne servent pas à entraîner les modèles (option disponible chez OpenAI et Anthropic).</div>`,
  },
  {
    slug: 'erreurs-courantes-automatisation',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Quelles sont les erreurs courantes en automatisation ?",
    reponse: `<h2>Les 8 erreurs qui font échouer les projets d'automatisation</h2>
<p>L'automatisation est puissante, mais mal mise en œuvre, elle peut créer plus de problèmes qu'elle n'en résout. Voici les erreurs les plus fréquentes et comment les éviter.</p>

<h3>1. Automatiser trop tôt</h3>
<p>Automatiser un processus encore en cours de définition est une erreur coûteuse. Le processus va changer, et vous devrez refaire l'automatisation. Règle : automatisez uniquement ce qui est <strong>stable et répété à l'identique</strong> depuis au moins 2 mois.</p>

<h3>2. Pas de gestion des erreurs</h3>
<p>Que se passe-t-il si l'API cible est temporairement indisponible ? Si Make ne gère pas les erreurs, les données sont perdues silencieusement. Configurez toujours :</p>
<ul>
<li>Des alertes email/Slack en cas d'échec de scénario</li>
<li>Des routes alternatives pour les cas d'erreur</li>
<li>Un retry automatique sur les opérations critiques</li>
</ul>

<h3>3. Tester en production</h3>
<p>Testez toujours avec de fausses données d'abord. Un scénario Make qui envoie 500 emails de relance à vos clients parce qu'il a itéré sur toute votre base en test peut coûter cher en réputation.</p>

<h3>4. Pas de documentation</h3>
<p>Dans 6 mois, vous ne vous souviendrez plus pourquoi vous avez construit ce scénario ainsi. Documentez :</p>
<ul>
<li>L'objectif du scénario en une phrase</li>
<li>Le déclencheur et les conditions</li>
<li>Les applications connectées et pourquoi</li>
<li>Les cas limites gérés</li>
</ul>

<h3>5. Scénarios trop complexes d'un coup</h3>
<p>Démarrez avec un workflow simple (2-3 étapes), validez qu'il fonctionne, puis ajoutez de la complexité progressivement. Un scénario de 30 modules créé d'un coup est un cauchemar à debugger.</p>

<h3>6. Ne pas monitorer les exécutions</h3>
<p>Une automatisation peut silencieusement arrêter de fonctionner (changement d'API, expiration de token, modification de format de données). Consultez l'historique d'exécution au minimum une fois par semaine.</p>

<h3>7. Clés API stockées en clair</h3>
<p>Ne stockez jamais une clé API directement dans un scénario Make ou dans un fichier partagé. Utilisez le gestionnaire de connexions chiffré de Make.</p>

<h3>8. Ignorer les limites d'API</h3>
<p>Chaque API a des limites de requêtes (rate limits). Un scénario Make qui appelle une API 10 000 fois en quelques minutes peut être bloqué ou entraîner des frais supplémentaires. Implémentez des délais si nécessaire.</p>
<div class="encart">🛡 <strong>Checklist avant de mettre en production :</strong> ✅ testé avec données fictives · ✅ gestion d'erreur configurée · ✅ alertes activées · ✅ documentation rédigée · ✅ clés API sécurisées · ✅ limites API vérifiées.</div>`,
  },
  {
    slug: 'automatisation-ecommerce-boutique',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser les processus d'une boutique e-commerce ?",
    reponse: `<h2>E-commerce et automatisation : un duo gagnant</h2>
<p>L'e-commerce est l'un des secteurs qui bénéficie le plus de l'automatisation : volumes élevés, processus répétitifs, attentes clients fortes en matière de rapidité. Une boutique bien automatisée peut gérer 10x plus de commandes sans augmenter ses effectifs.</p>

<h2>Les automatisations e-commerce par priorité</h2>

<h3>Priorité 1 : La gestion des commandes</h3>
<ul>
<li>Commande reçue → email de confirmation immédiat avec récapitulatif</li>
<li>Commande expédiée → email de suivi avec numéro de tracking (Colissimo, Chronopost, DHL)</li>
<li>Commande livrée (J+1) → email de confirmation de réception + demande d'avis</li>
</ul>

<h3>Priorité 2 : Récupération de paniers abandonnés</h3>
<p>70% des paniers e-commerce sont abandonnés. Une séquence de 3 emails automatiques peut récupérer 5 à 15% de ces ventes perdues :</p>
<ul>
<li>J+1h : "Vous avez oublié quelque chose ?" (simple rappel)</li>
<li>J+1 : "Votre panier vous attend" (+ avis clients pour rassurer)</li>
<li>J+3 : "Dernière chance" (éventuellement avec une offre de -5% ou livraison offerte)</li>
</ul>

<h3>Priorité 3 : Gestion des stocks</h3>
<ul>
<li>Stock < seuil critique → alerte email au responsable achat</li>
<li>Produit de nouveau en stock → email automatique aux clients qui attendaient</li>
<li>Rupture de stock → mise à jour automatique de la boutique (hors stock visible)</li>
</ul>

<h3>Priorité 4 : Fidélisation post-achat</h3>
<ul>
<li>J+30 après achat → email de cross-sell (produits complémentaires)</li>
<li>Anniversaire client → email avec offre personnalisée</li>
<li>Client inactif depuis 6 mois → séquence de réengagement</li>
</ul>

<h2>Stack technique recommandée</h2>
<table>
<tr><th>Besoin</th><th>Outil recommandé</th></tr>
<tr><td>Boutique e-commerce</td><td>Shopify ou WooCommerce</td></tr>
<tr><td>Email automation</td><td>Klaviyo (e-commerce) ou Brevo</td></tr>
<tr><td>Orchestration avancée</td><td>Make (connecte tout le reste)</td></tr>
<tr><td>Avis clients</td><td>Avis Vérifiés ou Trustpilot</td></tr>
<tr><td>Facturation automatique</td><td>Sellsy ou Tiime (via Make → Stripe webhook)</td></tr>
</table>
<div class="encart">💰 <strong>Impact concret :</strong> une boutique qui automatise la récupération de paniers abandonnés récupère en moyenne 5 à 10% de son CA potentiel perdu. Sur 100 000€ de CA, c'est 5 000 à 10 000€ supplémentaires générés par une automatisation qui se configure en quelques heures.</div>`,
  },
  {
    slug: 'automatisation-facturation-comptabilite',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser sa facturation et sa comptabilité ?",
    reponse: `<h2>Automatiser la chaîne financière : du paiement à la comptabilité</h2>
<p>La facturation et la comptabilité sont parmi les tâches administratives les plus chronophages — et parmi les mieux adaptées à l'automatisation. Un workflow financier automatisé réduit les erreurs de saisie, accélère les paiements et simplifie la clôture comptable mensuelle.</p>

<h2>Le workflow financier automatisé idéal</h2>
<ol>
<li><strong>Paiement reçu via Stripe</strong> → Stripe envoie un webhook à Make</li>
<li><strong>Make crée automatiquement la facture</strong> dans Sellsy, Indy ou Tiime avec toutes les informations correctes</li>
<li><strong>La facture est envoyée automatiquement</strong> par email au client</li>
<li><strong>La facture est marquée comme payée</strong> dans le logiciel de facturation</li>
<li><strong>L'écriture comptable est générée</strong> automatiquement dans le module comptabilité</li>
<li><strong>Le commercial est notifié</strong> dans Slack "✅ Paiement reçu : 2 400€ — Client XYZ"</li>
</ol>

<h2>Automatisation des relances d'impayés</h2>
<table>
<tr><th>Délai</th><th>Action automatique</th><th>Ton</th></tr>
<tr><td>Echéance + 3 jours</td><td>Email de rappel courtois</td><td>"Peut-être un oubli ?"</td></tr>
<tr><td>Echéance + 15 jours</td><td>Email de relance formelle</td><td>"Facture impayée — merci de régulariser"</td></tr>
<tr><td>Echéance + 30 jours</td><td>Email + notification interne au responsable</td><td>"Mise en demeure requise ?"</td></tr>
<tr><td>Echéance + 45 jours</td><td>Alerte direction + blocage des nouvelles commandes</td><td>Action manuelle requise</td></tr>
</table>

<h2>Automatisation des notes de frais</h2>
<ul>
<li>Photo du reçu → <strong>Qonto</strong> ou <strong>Spendesk</strong> la catégorise automatiquement par IA</li>
<li>Dépense détectée sur carte entreprise → automatiquement réconciliée avec la facture fournisseur</li>
<li>En fin de mois → export automatique des écritures en FEC vers le comptable</li>
</ul>

<h2>Solutions selon votre profil</h2>
<ul>
<li><strong>Indépendant / micro-entrepreneur</strong> : Indy ou Tiime (facturation + comptabilité intégrée, synchronisation bancaire automatique)</li>
<li><strong>PME avec plusieurs outils</strong> : Make pour orchestrer Stripe → Sellsy → Slack + exports FEC automatiques</li>
<li><strong>E-commerce</strong> : Shopify + Stripe + Make + Indy pour une comptabilité e-commerce sans saisie manuelle</li>
</ul>
<div class="encart">⏱ <strong>Gain concret :</strong> une PME qui automatise sa chaîne facturation/relances/comptabilité économise en moyenne 4 à 8 heures par mois d'administratif — soit l'équivalent d'un jour de travail rendu à la production ou au commercial.</div>`,
  },
  {
    slug: 'budget-automatisation-estimation',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Quel budget prévoir pour mettre en place des automatisations ?",
    reponse: `<h2>Budget automatisation : ce que ça coûte vraiment</h2>
<p>L'un des freins à l'adoption de l'automatisation est souvent une mauvaise estimation du coût. La réalité : les plateformes d'automatisation sont parmi les investissements tech au meilleur ROI pour une PME.</p>

<h2>Coût des plateformes d'automatisation</h2>
<table>
<tr><th>Outil</th><th>Plan gratuit</th><th>Plan entrée de gamme</th><th>Plan croissance</th></tr>
<tr><td>Make</td><td>1 000 opérations/mois</td><td>9$/mois (10 000 ops)</td><td>16$/mois (40 000 ops)</td></tr>
<tr><td>n8n cloud</td><td>5 000 exécutions/mois</td><td>20€/mois (illimité)</td><td>50€/mois (multi-users)</td></tr>
<tr><td>n8n self-hébergé</td><td>Gratuit (illimité)</td><td>+5-15€/mois hébergement</td><td>+5-15€/mois hébergement</td></tr>
<tr><td>Zapier</td><td>100 tâches/mois</td><td>20$/mois (750 tâches)</td><td>49$/mois (2 000 tâches)</td></tr>
</table>

<h2>Qu'est-ce qu'une "opération" Make ?</h2>
<p>Dans Make, chaque module exécuté dans un scénario compte comme une opération. Un scénario de 5 modules qui s'exécute 100 fois = 500 opérations. Pour une PME standard, le plan à 9$/mois (10 000 opérations) couvre largement les besoins initiaux.</p>

<h2>Coût de mise en place</h2>
<p>Au-delà de l'abonnement, le coût principal est le <strong>temps de configuration</strong> :</p>
<ul>
<li>Automatisation simple (2-3 apps, 1 scénario) : 2 à 5 heures en interne</li>
<li>Workflow complexe (multi-apps, conditions, gestion d'erreurs) : 1 à 3 jours</li>
<li>Faire appel à un consultant Make : 500 à 2 000€ selon la complexité</li>
</ul>

<h2>Calcul du ROI</h2>
<p>Méthode simple pour calculer votre ROI automatisation :</p>
<ol>
<li>Estimez le temps économisé par semaine (en heures)</li>
<li>Multipliez par votre coût horaire (ou le coût chargé d'un employé)</li>
<li>Comparez au coût annuel de l'outil</li>
</ol>
<p><strong>Exemple :</strong> 3h/semaine économisées × 50€/h × 52 semaines = 7 800€/an de valeur créée. Coût Make : 9$/mois × 12 = 108€/an. ROI : 72x.</p>

<h2>Budget recommandé selon la taille</h2>
<ul>
<li><strong>Freelance / solo</strong> : Make gratuit ou 9$/mois → amplement suffisant</li>
<li><strong>TPE (2-10 personnes)</strong> : Make 9-16$/mois + 1-2 jours de configuration = ~200€ pour démarrer</li>
<li><strong>PME (10-50 personnes)</strong> : Make 29$/mois + consultant pour les workflows complexes = 500 à 2 000€ initial</li>
</ul>
<div class="encart">💡 <strong>Conseil :</strong> commencez avec le plan gratuit de Make et passez au plan payant uniquement quand vous atteignez les limites. Identifiez d'abord vos 2-3 gains les plus évidents, implémentez-les, mesurez le ROI, puis investissez davantage avec des données concrètes en main.</div>`,
  },
  {
    slug: 'rpa-vs-integration-plateforme',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Quelle est la différence entre RPA et une plateforme d'intégration comme Make ?",
    reponse: `<h2>RPA vs iPaaS : deux approches de l'automatisation</h2>
<p>Le marché de l'automatisation propose deux grandes familles d'outils : le <strong>RPA</strong> (Robotic Process Automation) et les <strong>plateformes d'intégration</strong> (iPaaS) comme Make ou n8n. Ces deux approches sont complémentaires mais répondent à des besoins différents.</p>

<h2>Comparaison RPA vs iPaaS</h2>
<table>
<tr><th>Critère</th><th>RPA (UiPath, Automation Anywhere)</th><th>iPaaS (Make, n8n, Zapier)</th></tr>
<tr><td>Principe</td><td>Un robot simule les clics et saisies d'un humain sur une interface graphique</td><td>Connecte des applications via leurs APIs</td></tr>
<tr><td>Nécessite une API ?</td><td>Non — fonctionne sur n'importe quelle interface visuelle</td><td>Oui — les applications doivent exposer une API</td></tr>
<tr><td>Fiabilité</td><td>Fragile si l'interface change (bouton déplacé = robot cassé)</td><td>Très stable (les APIs changent peu)</td></tr>
<tr><td>Vitesse d'exécution</td><td>Lente (simule les actions humaines)</td><td>Très rapide (appels API directs)</td></tr>
<tr><td>Coût</td><td>Élevé (10 000 à 100 000€+ pour des solutions enterprise)</td><td>Faible (9 à 200€/mois)</td></tr>
<tr><td>Cas d'usage typique</td><td>Systèmes legacy sans API, saisies dans des ERP anciens</td><td>Connexion entre SaaS modernes</td></tr>
</table>

<h2>Quand utiliser le RPA ?</h2>
<p>Le RPA est justifié dans des situations spécifiques :</p>
<ul>
<li>Vous devez automatiser des tâches sur un <strong>logiciel ancien sans API</strong> (ERP des années 2000, logiciel Windows propriétaire)</li>
<li>Vous avez des <strong>processus de saisie complexes</strong> sur des interfaces graphiques qui ne peuvent pas être connectées autrement</li>
<li>Votre entreprise a des <strong>budgets importants</strong> et des équipes IT dédiées</li>
</ul>

<h2>Pour 95% des besoins PME : Make suffit</h2>
<p>Si vous utilisez des SaaS modernes (CRM, facturation, email, gestion de projet), ils ont tous des APIs bien documentées. Make suffit largement pour :</p>
<ul>
<li>Synchroniser des données entre applications</li>
<li>Créer des workflows conditionnels complexes</li>
<li>Traiter des volumes importants de façon fiable</li>
<li>Intégrer des services IA et de traitement de données</li>
</ul>
<div class="encart">🔧 <strong>Recommandation :</strong> investissez dans le RPA uniquement si vous avez épuisé les options iPaaS (Make/n8n) et que le processus à automatiser implique vraiment des interfaces sans API. Pour 95% des PME françaises travaillant avec des SaaS, Make est suffisant et 100x moins cher.</div>`,
  },
  {
    slug: 'securite-automatisation-donnees',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment sécuriser ses automatisations et protéger ses données ?",
    reponse: `<h2>Sécurité des automatisations : un sujet souvent négligé</h2>
<p>Les automatisations connectent plusieurs systèmes et font transiter des données sensibles (informations clients, données financières, identifiants). Une automatisation mal sécurisée peut devenir un vecteur de fuite de données ou d'attaque.</p>

<h2>Les 6 règles d'or de la sécurité des automatisations</h2>

<h3>1. Gestion des clés API</h3>
<ul>
<li>Stockez toujours les clés API dans le <strong>gestionnaire de connexions Make</strong> (chiffré) — jamais en dur dans un module</li>
<li>Créez des clés API dédiées par service (pas la même clé pour tout)</li>
<li>Faites tourner (renouveler) les clés API tous les 6 à 12 mois</li>
<li>Révoquez immédiatement les clés d'un employé qui quitte l'entreprise</li>
</ul>

<h3>2. Principe de moindre privilège</h3>
<p>Chaque connexion Make doit avoir <strong>uniquement les permissions nécessaires</strong> pour fonctionner. Si votre scénario a seulement besoin de lire des contacts dans votre CRM, ne lui donnez pas les droits d'écriture et de suppression.</p>

<h3>3. Sécurisation des webhooks</h3>
<ul>
<li>Vérifiez la signature des webhooks (Stripe, GitHub et d'autres la fournissent)</li>
<li>Ajoutez un token secret dans l'URL du webhook Make et vérifiez-le</li>
<li>Loggez toutes les requêtes webhook reçues pour audit</li>
</ul>

<h3>4. Minimisation des données</h3>
<p>En vertu du RGPD et du principe de minimisation : ne faites transiter que les données <strong>strictement nécessaires</strong> au fonctionnement de l'automatisation. Évitez de copier des données personnelles dans des outils où elles ne servent à rien.</p>

<h3>5. Monitoring et alertes</h3>
<ul>
<li>Activez les alertes email Make pour les scénarios en erreur</li>
<li>Configurez une notification Slack pour les erreurs critiques</li>
<li>Consultez les historiques d'exécution régulièrement</li>
</ul>

<h3>6. Contrôle des accès</h3>
<ul>
<li>Limitez qui peut créer et modifier des scénarios Make dans votre organisation</li>
<li>Utilisez des équipes Make avec des rôles différenciés (admin vs éditeur vs lecteur)</li>
<li>Documentez qui a accès à quoi</li>
</ul>

<h2>Make vs n8n self-hébergé : quel impact sur la sécurité ?</h2>
<table>
<tr><th>Aspect</th><th>Make cloud</th><th>n8n self-hébergé</th></tr>
<tr><td>Contrôle des données</td><td>Données chez Make (Europe)</td><td>Données sur votre serveur</td></tr>
<tr><td>Responsabilité sécurité</td><td>Partagée avec Make</td><td>Totalement à votre charge</td></tr>
<tr><td>Mises à jour sécurité</td><td>Automatiques</td><td>Manuelles (votre responsabilité)</td></tr>
<tr><td>Conformité RGPD</td><td>Bonne (certifié SOC 2)</td><td>Totale si bien configuré</td></tr>
</table>
<div class="encart-warning">⚠️ <strong>Incident fréquent :</strong> la majorité des incidents de sécurité liés aux automatisations proviennent de clés API partagées par email ou stockées dans des fichiers non sécurisés. Utilisez systématiquement le gestionnaire de connexions de votre plateforme.</div>`,
  },
  {
    slug: 'automatisation-recrutement-rh',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser ses processus RH et de recrutement ?",
    reponse: `<h2>RH et recrutement : des processus faits pour l'automatisation</h2>
<p>Les processus RH sont parmi les plus répétitifs et les plus chronophages de l'entreprise. Chaque candidature, chaque onboarding, chaque demande de congés suit toujours le même schéma — autant les automatiser.</p>

<h2>Automatiser le recrutement</h2>

<h3>Gestion des candidatures entrantes</h3>
<ul>
<li>Candidature reçue par email ou LinkedIn → création automatique d'une fiche candidat dans votre ATS</li>
<li>Email de confirmation envoyé automatiquement au candidat (< 5 minutes)</li>
<li>Notification au recruteur responsable du poste dans Slack</li>
<li>Si le CV correspond aux critères → passage automatique en phase "À évaluer"</li>
</ul>

<h3>Gestion du processus d'entretien</h3>
<ul>
<li>Candidat retenu pour entretien → email automatique avec lien Calendly pour choisir un créneau</li>
<li>J-24h → rappel automatique de l'entretien (candidat + recruteur)</li>
<li>Post-entretien → formulaire d'évaluation envoyé automatiquement au recruteur</li>
<li>Si candidat retenu → email de proposition d'embauche personnalisé généré automatiquement</li>
</ul>

<h2>Automatiser l'onboarding</h2>
<p>L'onboarding est souvent chaotique faute de coordination. Un workflow automatisé change tout :</p>
<ol>
<li>Contrat signé → Make crée automatiquement une checklist onboarding dans Monday.com</li>
<li>J-7 : email automatique au nouvel arrivant avec les informations pratiques (adresse, accès, dress code)</li>
<li>Jour J : email de bienvenue avec les liens d'accès outils, l'agenda de la première semaine</li>
<li>Comptes outils créés automatiquement (Google Workspace, Slack, GitHub via Make)</li>
<li>Rappel au manager J+30 et J+90 pour faire le point d'intégration</li>
</ol>

<h2>Automatiser la gestion des congés</h2>
<ul>
<li>Demande de congés soumise dans votre outil RH → notification automatique au manager</li>
<li>Approbation du manager → mise à jour du calendrier partagé + notification au salarié</li>
<li>Congé confirmé → événement créé dans Google Calendar pour toute l'équipe</li>
</ul>

<h2>Outils recommandés</h2>
<table>
<tr><th>Fonction</th><th>Outil</th></tr>
<tr><td>ATS (suivi candidatures)</td><td>Teamtailor, Workable, Notion</td></tr>
<tr><td>Gestion des congés</td><td>Lucca, Factorial, Payfit</td></tr>
<tr><td>Orchestration des workflows</td><td>Make</td></tr>
<tr><td>Communication candidate</td><td>Brevo ou Gmail templates</td></tr>
<tr><td>Onboarding tasks</td><td>Monday.com ou Notion</td></tr>
</table>
<div class="encart">💼 <strong>Impact concret :</strong> une PME de 20 salariés qui embauche 5 personnes par an passe en moyenne 30 heures sur l'administratif de chaque recrutement (candidatures, emails, coordination, onboarding). Automatiser 50% de ces tâches = 75 heures économisées par an, soit presque 2 semaines de travail.</div>`,
  },
  {
    slug: 'automatisation-support-client',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser son support client ?",
    reponse: `<h2>Support client automatisé : répondre plus vite, mieux et sans surcharge</h2>
<p>Le support client est souvent sous-dimensionné. L'automatisation ne remplace pas les humains mais leur permet de se concentrer sur les cas complexes, pendant que les demandes répétitives sont gérées automatiquement.</p>

<h2>Les automatisations support par niveau de complexité</h2>

<h3>Niveau 1 : Accusé de réception et routing (immédiat)</h3>
<ul>
<li>Chaque ticket reçu → email de confirmation automatique avec un numéro de ticket (< 2 minutes)</li>
<li>Analyse du sujet du ticket → routage vers la bonne équipe (technique, commercial, facturation)</li>
<li>Détection de mots-clés urgents ("panne", "bloqué", "urgent") → escalade prioritaire</li>
</ul>

<h3>Niveau 2 : Réponses automatiques aux questions fréquentes</h3>
<ul>
<li>Question sur les horaires → réponse automatique avec les horaires</li>
<li>Demande de mot de passe → lien de réinitialisation envoyé automatiquement</li>
<li>Question de facturation simple → copie de la facture envoyée automatiquement</li>
</ul>

<h3>Niveau 3 : IA pour les demandes complexes</h3>
<p>Intégrer un LLM (ChatGPT, Claude) dans votre workflow support via Make :</p>
<ul>
<li>Email reçu → IA analyse le contenu → génère un brouillon de réponse basé sur votre base de connaissances</li>
<li>L'agent humain relit, ajuste si nécessaire et envoie en un clic</li>
<li>Gain de temps : 70% de la rédaction faite automatiquement</li>
</ul>

<h2>Escalade et SLA automatiques</h2>
<table>
<tr><th>Délai sans réponse</th><th>Action automatique</th></tr>
<tr><td>4h</td><td>Rappel à l'agent assigné dans Slack</td></tr>
<tr><td>8h</td><td>Notification au responsable support</td></tr>
<tr><td>24h</td><td>Escalade direction + email d'excuses au client</td></tr>
<tr><td>48h</td><td>Alerte CTO si problème technique critique</td></tr>
</table>

<h2>Satisfaction client automatisée</h2>
<ul>
<li>Ticket clôturé → email CSAT automatique (note sur 5 + commentaire libre)</li>
<li>Note < 3 → alerte immédiate au responsable pour appel de rattrapage</li>
<li>Note ≥ 4 → demande d'avis Google ou Trustpilot envoyée automatiquement</li>
</ul>

<h2>Outils recommandés</h2>
<ul>
<li><strong>Intercom</strong> : chat + tickets avec automation intégrée et IA, idéal pour les SaaS</li>
<li><strong>Zendesk</strong> : solution complète avec workflows et macros automatiques</li>
<li><strong>Freshdesk</strong> : alternative plus abordable, bonnes automatisations natives</li>
<li><strong>Make</strong> : pour connecter votre outil de support à votre CRM et vos autres systèmes</li>
</ul>
<div class="encart">📊 <strong>Métriques clés à suivre :</strong> temps de première réponse (cible < 2h), taux de résolution au premier contact (cible > 70%), score CSAT (cible > 4,2/5). L'automatisation améliore les deux premiers directement et contribue au troisième indirectement.</div>`,
  },
  {
    slug: 'automatiser-relances-clients',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Comment automatiser ses relances clients ?",
    reponse: `<h2>Les relances clients : un levier sous-exploité</h2>
<p>Les retards de paiement et les prospects non relancés coûtent cher aux entreprises. En France, 25% des défaillances d'entreprises sont liées à des impayés. Pourtant, automatiser les relances est l'une des automatisations les plus simples et les plus rentables à mettre en place.</p>

<h2>Types de relances à automatiser</h2>
<table>
<tr><th>Type</th><th>Contexte</th><th>Délai recommandé</th></tr>
<tr><td>Relance devis</td><td>Devis envoyé sans réponse</td><td>J+3, puis J+7, puis J+14</td></tr>
<tr><td>Relance prospect froid</td><td>Lead entrant non converti</td><td>J+2, J+7, J+21</td></tr>
<tr><td>Relance impayé</td><td>Facture en retard de paiement</td><td>J+3, J+15, J+30 après échéance</td></tr>
<tr><td>Relance client inactif</td><td>Client sans achat depuis 6 mois</td><td>M+6, M+9</td></tr>
</table>

<h2>Automatiser les relances devis dans votre CRM</h2>
<p>La plupart des CRM modernes proposent des automatisations de relances natives :</p>
<ul>
<li><strong>Pipedrive</strong> : créez des activités automatiques "Relancer si pas de réponse sous 3 jours"</li>
<li><strong>Sellsy</strong> : relances automatiques paramétrables depuis le module devis</li>
<li><strong>HubSpot</strong> : séquences d'emails de relance avec suivi d'ouverture et de clic</li>
</ul>

<h2>Automatiser les relances factures impayées</h2>
<ol>
<li>Configurez les relances automatiques dans votre logiciel de facturation (Sellsy, Indy, Tiime)</li>
<li>Paramétrez 3 niveaux de relance avec un ton progressivement plus ferme</li>
<li>Au 3e impayé : Make crée automatiquement une tâche "Appeler le client" pour votre commercial</li>
<li>Si toujours impayé à J+45 : alerte direction pour mise en demeure</li>
</ol>

<h2>Workflow Make de relance multi-canal</h2>
<p>Pour les prospects importants, Make permet une relance multi-canal orchestrée :</p>
<ul>
<li>J+3 sans réponse au devis → email de relance automatique depuis Brevo</li>
<li>J+7 sans réponse → tâche créée dans Pipedrive pour appel téléphonique + notification Slack au commercial</li>
<li>J+14 sans réponse → email de dernière relance + mise à jour du statut deal en "En veille"</li>
</ul>

<h2>Personnalisation des relances automatiques</h2>
<p>Une relance générique est souvent ignorée. Personnalisez avec :</p>
<ul>
<li>Le prénom du contact et le nom de son entreprise</li>
<li>La référence du devis ou de la facture concernée</li>
<li>Le montant en jeu</li>
<li>Un lien direct pour accéder au document et payer en ligne</li>
</ul>
<div class="encart">💰 <strong>Impact concret :</strong> les entreprises qui automatisent leurs relances réduisent leurs délais moyens de paiement de 30 à 40% et récupèrent 15 à 25% de prospects "perdus" qui n'avaient simplement jamais reçu de suivi. La relance automatique est l'une des automatisations au ROI le plus rapide.</div>`,
  },
  {
    slug: 'faire-une-premiere-automatisation',
    categorie: 'automatisation',
    categorieLabel: 'Automatisation',
    question: "Par où commencer pour créer sa première automatisation ?",
    reponse: `<h2>Votre première automatisation en 5 étapes</h2>
<p>Se lancer dans l'automatisation peut sembler intimidant. Pourtant, une première automatisation réussie se construit en quelques heures — même sans aucune expérience technique préalable. Voici la méthode.</p>

<h2>Étape 1 : Identifier le bon cas d'usage</h2>
<p>Le bon premier projet est une tâche qui cumule ces 4 caractéristiques :</p>
<ul>
<li><strong>Répétitive</strong> : vous la faites au moins 3 fois par semaine</li>
<li><strong>Simple</strong> : pas plus de 5 étapes</li>
<li><strong>Stable</strong> : le processus ne change pas souvent</li>
<li><strong>Douloureuse</strong> : vous l'avez en tête parce qu'elle prend du temps ou génère des oublis</li>
</ul>
<p>Exemples parfaits pour commencer : "Quand quelqu'un remplit mon formulaire de contact → créer une fiche dans mon CRM" ou "Quand je reçois un email avec 'Commande' dans le sujet → créer une tâche dans Monday.com".</p>

<h2>Étape 2 : Découper en schéma Trigger → Action(s)</h2>
<p>Dessinez votre workflow sur papier avant de toucher Make :</p>
<ul>
<li>⚡ <strong>Déclencheur</strong> : qu'est-ce qui lance l'automatisation ? (un formulaire, un email, une heure, un webhook)</li>
<li>🔄 <strong>Filtre(s)</strong> (optionnel) : dans quel cas déclenche-t-on ? (seulement si le montant > 100€, seulement si le pays = France)</li>
<li>✅ <strong>Action(s)</strong> : que doit-il se passer ? (créer contact, envoyer email, créer tâche)</li>
</ul>

<h2>Étape 3 : Créer son compte Make et construire le scénario</h2>
<ol>
<li>Créez un compte Make gratuit sur make.com</li>
<li>Cliquez sur "Create a new scenario"</li>
<li>Ajoutez le premier module (votre déclencheur)</li>
<li>Connectez votre application via OAuth ou clé API</li>
<li>Ajoutez les modules d'action en chaîne</li>
<li>Mappez les variables : dites à Make quelles données du déclencheur vont dans quels champs de l'action</li>
</ol>

<h2>Étape 4 : Tester avec de fausses données</h2>
<ul>
<li>Cliquez sur "Run once" pour un test manuel</li>
<li>Vérifiez que chaque module s'exécute correctement (icône verte)</li>
<li>Vérifiez que les données arrivent bien dans l'application de destination</li>
<li>Testez plusieurs cas : données complètes, données manquantes, cas limites</li>
</ul>

<h2>Étape 5 : Activer et surveiller</h2>
<ul>
<li>Activez le scénario (bouton en bas à gauche)</li>
<li>Regardez les premières exécutions réelles dans l'historique</li>
<li>Activez les alertes email pour les erreurs</li>
<li>Vérifiez le résultat dans l'application de destination</li>
</ul>

<h2>Idées de premières automatisations Make</h2>
<table>
<tr><th>Déclencheur</th><th>Action</th><th>Temps de config</th></tr>
<tr><td>Formulaire Tally soumis</td><td>Créer contact dans Pipedrive</td><td>30 min</td></tr>
<tr><td>Email reçu avec pièce jointe</td><td>Sauvegarder PDF dans Google Drive</td><td>20 min</td></tr>
<tr><td>Chaque lundi 8h</td><td>Envoyer un rapport Google Sheets par email</td><td>45 min</td></tr>
<tr><td>Nouveau deal Pipedrive "Gagné"</td><td>Notification Slack + créer facture Sellsy</td><td>1h</td></tr>
</table>
<div class="encart">🚀 <strong>Objectif de la première semaine :</strong> une automatisation opérationnelle — même simple — qui tourne en production. La confiance acquise sur ce premier projet sera votre meilleur levier pour aller plus loin. Commencez petit, réussissez vite.</div>`,
  },
]
