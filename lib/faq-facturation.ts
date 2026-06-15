import type { FaqItem } from './faq'

export const FAQ_FACTURATION: FaqItem[] = [
  {
    slug: 'logiciel-facturation-c-est-quoi',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Qu'est-ce qu'un logiciel de facturation ?",
    reponse: `
<p>Un <strong>logiciel de facturation</strong> est un outil qui automatise la création, l'envoi et le suivi de vos documents commerciaux : devis, bons de commande, factures, avoirs et relances. Il remplace avantageusement les factures Word ou Excel par des documents numérotés automatiquement, conformes légalement et envoyés en quelques secondes.</p>

<h2>Fonctions principales d'un logiciel de facturation</h2>
<table>
<thead><tr><th>Fonction</th><th>Ce que ça fait concrètement</th></tr></thead>
<tbody>
<tr><td>Création de devis</td><td>Modèles professionnels, catalogue produits/services, remises automatiques</td></tr>
<tr><td>Conversion devis → facture</td><td>En un clic, sans ressaisie</td></tr>
<tr><td>Numérotation automatique</td><td>Séquence légale incrémentée automatiquement</td></tr>
<tr><td>Suivi des paiements</td><td>Alertes visuelles des factures en attente, en retard, payées</td></tr>
<tr><td>Relances automatiques</td><td>Emails de relance programmés J+7, J+15, J+30</td></tr>
<tr><td>Export comptable</td><td>FEC, CSV, synchronisation avec votre comptable</td></tr>
</tbody>
</table>

<h2>Facturation électronique : une révolution en cours</h2>
<p>Depuis 2026, la <strong>réforme de la facturation électronique</strong> impose progressivement aux entreprises françaises assujetties à la TVA de passer à l'e-invoicing. Concrètement :</p>
<ul>
<li>Les factures doivent transiter par une <strong>Plateforme de Dématérialisation Partenaire (PDP)</strong> agréée par l'État</li>
<li>Les données fiscales sont transmises automatiquement à la DGFiP</li>
<li>Le format PDF seul ne suffit plus — des formats structurés (Factur-X, UBL) sont requis</li>
</ul>
<p>Les logiciels comme <strong>Sellsy</strong>, <strong>Tiime</strong> et <strong>Indy</strong> sont déjà conformes à cette réforme.</p>

<h2>Logiciel de facturation vs Excel : pourquoi basculer ?</h2>
<ul>
<li><strong>Conformité légale</strong> : numérotation correcte, mentions obligatoires, e-facture — automatique</li>
<li><strong>Professionnalisme</strong> : modèles à votre charte graphique, envoi par email en un clic</li>
<li><strong>Gain de temps</strong> : 10 à 30 min par facture économisées</li>
<li><strong>Suivi en temps réel</strong> : vous savez instantanément ce qui est payé et ce qui est en retard</li>
<li><strong>Relances automatiques</strong> : plus d'impayés oubliés</li>
</ul>

<h2>À partir de quel CA investir dans un logiciel ?</h2>
<p>Dès votre première facture, un logiciel vous fait gagner du temps et évite les erreurs légales. Le coût est très faible (certains sont gratuits) comparé au risque d'une facture non conforme ou d'un impayé non relancé.</p>
<div class="encart">💡 <strong>Bon à savoir :</strong> En cas de contrôle fiscal, vos factures doivent être conformes aux exigences légales. Une facture Word sans les mentions obligatoires peut entraîner des redressements. Un logiciel dédié élimine ce risque.</div>
`,
  },
  {
    slug: 'facturation-electronique-obligatoire',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "La facturation électronique est-elle obligatoire en France ?",
    reponse: `
<p>Oui. La réforme de la facturation électronique est en cours de déploiement en France pour toutes les entreprises assujetties à la TVA effectuant des transactions B2B. C'est une transformation majeure de la façon dont les entreprises françaises gèrent leurs factures.</p>

<h2>Calendrier de déploiement</h2>
<table>
<thead><tr><th>Date</th><th>Obligation</th><th>Entreprises concernées</th></tr></thead>
<tbody>
<tr><td><strong>Sept. 2026</strong></td><td>Réception des e-factures</td><td>Toutes les entreprises</td></tr>
<tr><td><strong>Sept. 2026</strong></td><td>Émission des e-factures</td><td>Grandes entreprises (+5 000 salariés)</td></tr>
<tr><td><strong>Sept. 2027</strong></td><td>Émission des e-factures</td><td>ETI (250 à 4 999 salariés)</td></tr>
<tr><td><strong>Sept. 2027</strong></td><td>Émission des e-factures</td><td>PME et TPE</td></tr>
</tbody>
</table>

<h2>Qu'est-ce qu'une e-facture conforme ?</h2>
<p>Une e-facture conforme ne peut plus être un simple PDF. Elle doit :</p>
<ul>
<li>Transiter par une <strong>Plateforme de Dématérialisation Partenaire (PDP)</strong> agréée ou par le <strong>Portail Public de Facturation (PPF)</strong> de l'État</li>
<li>Être dans un format structuré reconnu : Factur-X (hybride PDF + XML), UBL ou CII</li>
<li>Inclure des données fiscales transmises automatiquement à la DGFiP</li>
</ul>

<h2>Les exceptions</h2>
<ul>
<li><strong>Non concernées</strong> : les entreprises non assujetties à la TVA (sous les seuils de franchise)</li>
<li><strong>Non concernées</strong> : les transactions B2C (factures aux particuliers)</li>
<li><strong>Non concernées</strong> : les opérations exonérées de TVA (certaines professions de santé, enseignement)</li>
</ul>

<h2>Quels logiciels sont conformes ?</h2>
<ul>
<li><strong>Sellsy</strong> : PDP agréée, conforme pour l'émission et la réception</li>
<li><strong>Tiime</strong> : connecté au PPF, conforme</li>
<li><strong>Indy</strong> : conformité en cours de déploiement</li>
<li><strong>Axonaut</strong> : conforme via partenariats PDP</li>
</ul>

<h2>Comment se préparer ?</h2>
<ol>
<li>Vérifiez si votre logiciel actuel sera conforme à la date de votre obligation</li>
<li>Si non, planifiez la migration vers un outil conforme</li>
<li>Formez votre équipe comptable au nouveau flux</li>
<li>Informez vos clients et fournisseurs de votre plateforme</li>
</ol>
<div class="encart-warning">⚠️ <strong>Attention :</strong> Ne pas être conforme à la date d'obligation peut entraîner des pénalités fiscales. Anticipez la migration au moins 3 mois avant votre date butoir.</div>
`,
  },
  {
    slug: 'difference-facture-devis',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Quelle est la différence entre une facture et un devis ?",
    reponse: `
<p>Devis et facture sont deux documents commerciaux distincts qui interviennent à des moments différents de la relation client. Confondre les deux est une erreur fréquente qui peut avoir des conséquences légales.</p>

<h2>Tableau comparatif devis vs facture</h2>
<table>
<thead><tr><th>Critère</th><th>Devis</th><th>Facture</th></tr></thead>
<tbody>
<tr><td>Moment d'émission</td><td>Avant la vente / prestation</td><td>Après la vente / livraison</td></tr>
<tr><td>Valeur légale</td><td>Propositionnel (pas dû tant que non accepté)</td><td>Créance légale exigible</td></tr>
<tr><td>Obligation de paiement</td><td>Aucune</td><td>Oui, à la date d'échéance</td></tr>
<tr><td>Numérotation</td><td>Optionnelle (recommandée)</td><td>Obligatoire, séquentielle</td></tr>
<tr><td>Modification possible</td><td>Oui, avant acceptation</td><td>Non (uniquement via avoir)</td></tr>
<tr><td>Durée de validité</td><td>Fixée par l'émetteur (souvent 30 jours)</td><td>Sans limite (archive légale)</td></tr>
</tbody>
</table>

<h2>Le cycle complet d'un document commercial</h2>
<ol>
<li><strong>Devis</strong> : vous proposez une prestation ou un produit avec un prix</li>
<li><strong>Acceptation du devis</strong> : le client signe ou donne son accord (écrit recommandé)</li>
<li><strong>Bon de commande</strong> (optionnel) : pour les ventes de produits, formalise la commande</li>
<li><strong>Livraison / Prestation</strong> : vous réalisez ce qui était prévu</li>
<li><strong>Facture</strong> : vous demandez le paiement pour ce qui a été livré</li>
<li><strong>Paiement</strong> : le client règle avant l'échéance</li>
<li><strong>Avoir</strong> (si nécessaire) : pour corriger ou annuler partiellement la facture</li>
</ol>

<h2>Devis accepté = contrat</h2>
<p>Un devis signé par le client est un document contractuel. Il engage les deux parties : vous devez livrer ce qui est décrit, le client doit payer le prix convenu. En cas de litige, le devis accepté fait foi.</p>

<h2>Conversion devis → facture : comment ça marche ?</h2>
<p>Dans les logiciels de facturation comme <strong>Sellsy</strong>, <strong>Freebe</strong> ou <strong>Indy</strong>, la conversion se fait en un clic : le logiciel reprend toutes les lignes du devis, les copie dans la facture et lui attribue le prochain numéro de la séquence. Vous n'avez rien à ressaisir.</p>
<div class="encart">💡 <strong>Bon à savoir :</strong> En B2B, il est vivement recommandé de toujours commencer par un devis signé avant de réaliser une prestation. Sans devis accepté, il sera très difficile de prouver l'accord du client en cas de litige sur le paiement.</div>
`,
  },
  {
    slug: 'mentions-obligatoires-facture',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Quelles sont les mentions obligatoires sur une facture ?",
    reponse: `
<p>En France, une facture professionnelle doit obligatoirement comporter un ensemble de mentions définies par le Code général des impôts et le Code de commerce. L'absence de certaines mentions peut entraîner un redressement fiscal ou rendre la facture non exigible.</p>

<h2>Mentions obligatoires : la liste complète</h2>
<table>
<thead><tr><th>Mention</th><th>Détail</th></tr></thead>
<tbody>
<tr><td>Numéro de facture</td><td>Séquence chronologique unique et continue</td></tr>
<tr><td>Date d'émission</td><td>Date à laquelle la facture est émise</td></tr>
<tr><td>Coordonnées du vendeur</td><td>Nom/dénomination sociale, adresse, SIRET, forme juridique, capital</td></tr>
<tr><td>Coordonnées de l'acheteur</td><td>Nom/dénomination, adresse de facturation</td></tr>
<tr><td>Description des prestations</td><td>Nature, quantité, prix unitaire HT de chaque ligne</td></tr>
<tr><td>Prix total HT</td><td>Total avant TVA</td></tr>
<tr><td>Taux et montant TVA</td><td>Pour chaque taux applicable, ou mention de franchise</td></tr>
<tr><td>Prix total TTC</td><td>Montant à payer</td></tr>
<tr><td>Date d'échéance</td><td>Date limite de paiement</td></tr>
<tr><td>Conditions de paiement</td><td>Mode de paiement acceptés, éventuelles modalités</td></tr>
<tr><td>Pénalités de retard</td><td>Taux applicable en cas de retard (minimum BCE + 10 points)</td></tr>
<tr><td>Indemnité forfaitaire</td><td>40€ obligatoires pour frais de recouvrement (B2B)</td></tr>
</tbody>
</table>

<h2>Mentions spécifiques selon la situation</h2>
<ul>
<li><strong>Auto-entrepreneur en franchise de TVA</strong> : "TVA non applicable, article 293B du CGI"</li>
<li><strong>Livraison intracommunautaire</strong> : numéro de TVA du client + mention d'exonération</li>
<li><strong>Sous-traitance en BTP</strong> : mention "autoliquidation de la TVA"</li>
<li><strong>Profession réglementée</strong> (avocat, médecin) : numéro d'inscription à l'ordre</li>
</ul>

<h2>Mentions recommandées (non obligatoires mais utiles)</h2>
<ul>
<li>RIB / coordonnées bancaires</li>
<li>Numéro de bon de commande du client</li>
<li>Conditions générales de vente en bas de facture</li>
<li>Mentions relatives aux garanties légales</li>
</ul>

<h2>Risques en cas de non-conformité</h2>
<ul>
<li>Amende de <strong>15€ par mention manquante</strong>, plafonnée à 25% du montant de la facture</li>
<li>En cas de contrôle TVA : rejet de la déductibilité de la TVA pour votre client</li>
<li>Difficulté à recouvrer des impayés sans facture conforme</li>
</ul>
<div class="encart">💡 <strong>Solution :</strong> Un logiciel de facturation comme Sellsy, Indy ou Tiime intègre toutes les mentions obligatoires dans ses modèles. Vous ne risquez plus d'en oublier une.</div>
`,
  },
  {
    slug: 'facturation-auto-entrepreneur',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Quel logiciel de facturation pour auto-entrepreneur ?",
    reponse: `
<p>En tant qu'auto-entrepreneur (ou micro-entrepreneur), vos besoins de facturation sont spécifiques : des factures conformes simples à créer, un suivi de votre chiffre d'affaires pour ne pas dépasser les seuils, et si possible la gestion des cotisations sociales. Voici les meilleures options.</p>

<h2>Comparatif logiciels de facturation pour auto-entrepreneurs</h2>
<table>
<thead><tr><th>Logiciel</th><th>Prix/mois</th><th>Points forts</th><th>Idéal si</th></tr></thead>
<tbody>
<tr><td><strong>Freebe</strong></td><td>10–15€</td><td>Conçu pour les indépendants FR, cotisations sociales</td><td>Micro-entrepreneur, EI, SASU</td></tr>
<tr><td><strong>Indy</strong></td><td>Gratuit / 9€</td><td>Plan gratuit complet, e-facture</td><td>Démarrage ou petit budget</td></tr>
<tr><td><strong>Tiime</strong></td><td>Gratuit / 18€</td><td>Expert-comptable intégré disponible</td><td>Besoin d'accompagnement compta</td></tr>
<tr><td><strong>Henrri</strong></td><td>Gratuit / 17€</td><td>CRM + facturation dans l'outil gratuit</td><td>Facturation + suivi clients léger</td></tr>
<tr><td><strong>Sellsy</strong></td><td>35€</td><td>Facturation pro + CRM + signature électronique</td><td>Auto-entrepreneur avec gros volume</td></tr>
</tbody>
</table>

<h2>Freebe : la référence pour les indépendants français</h2>
<p>Freebe est l'outil le plus complet spécifiquement conçu pour les indépendants français. Au-delà de la facturation, il gère :</p>
<ul>
<li>Le suivi du CA mensuel et annuel par rapport aux seuils de franchise TVA</li>
<li>Le calcul automatique des cotisations sociales URSSAF</li>
<li>Les frais kilométriques et notes de frais</li>
<li>Les différents statuts : micro-entrepreneur, EI, SASU, SARL</li>
</ul>

<h2>Indy : le meilleur rapport qualité/prix (plan gratuit solide)</h2>
<p>Indy propose un plan Essentiel entièrement gratuit qui inclut :</p>
<ul>
<li>Création de factures et devis illimités</li>
<li>Envoi par email</li>
<li>Compte professionnel intégré</li>
<li>E-facture (conforme à la réforme 2026)</li>
</ul>
<p>Le plan Plus à 9€/mois ajoute la facturation avancée et un accompagnement personnalisé.</p>

<h2>Ce qu'un auto-entrepreneur doit vérifier</h2>
<ul>
<li><strong>Mention franchise TVA</strong> : si vous êtes en franchise, votre logiciel doit l'inclure automatiquement ("TVA non applicable, article 293B du CGI")</li>
<li><strong>Suivi du seuil de CA</strong> : alerte quand vous approchez des seuils (77 700€ pour les services en 2026)</li>
<li><strong>Numérotation conforme</strong> : séquentielle et continue</li>
</ul>
<div class="encart">💡 <strong>Recommandation :</strong> Commencez avec Indy gratuit si vous démarrez. Passez à Freebe quand vous avez besoin du suivi des cotisations sociales et de fonctions plus complètes pour les indépendants.</div>
`,
  },
  {
    slug: 'logiciel-facturation-gratuit',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Existe-t-il un logiciel de facturation gratuit ?",
    reponse: `
<p>Oui, plusieurs logiciels sérieux proposent des plans gratuits utilisables professionnellement — pas seulement en version d'essai. Voici les meilleurs et leurs limites réelles.</p>

<h2>Meilleurs logiciels de facturation gratuits en 2026</h2>
<table>
<thead><tr><th>Logiciel</th><th>Plan gratuit</th><th>Limites</th><th>Fonctions incluses</th></tr></thead>
<tbody>
<tr><td><strong>Indy Essentiel</strong></td><td>Gratuit à vie</td><td>Fonctions avancées payantes</td><td>Factures illimitées, devis, e-facture, compte pro</td></tr>
<tr><td><strong>Tiime Free</strong></td><td>Gratuit à vie</td><td>1 employé max</td><td>Factures, devis, catalogue produits</td></tr>
<tr><td><strong>Henrri Pro</strong></td><td>Gratuit à vie</td><td>Fonctions CRM basiques</td><td>Factures, devis, CRM simple</td></tr>
<tr><td><strong>Zoho Invoice</strong></td><td>Gratuit à vie</td><td>1 utilisateur max</td><td>Factures illimitées, 5 clients actifs</td></tr>
</tbody>
</table>

<h2>Indy Essentiel : le plus complet des plans gratuits</h2>
<p>Le plan Essentiel d'Indy est exceptionnel par sa générosité :</p>
<ul>
<li>Factures et devis en nombre illimité</li>
<li>Conformité e-facture (réforme 2026)</li>
<li>Compte professionnel intégré avec IBAN français</li>
<li>Rapprochement bancaire basique</li>
<li>Catalogue de produits et services</li>
</ul>
<p>Les fonctions payantes (à partir de 9€/mois) ajoutent la TVA, les déclarations et l'accompagnement personnalisé.</p>

<h2>Quand le gratuit ne suffit plus</h2>
<ul>
<li>Vous avez plusieurs utilisateurs (comptable, assistante)</li>
<li>Vous avez besoin de relances automatiques d'impayés</li>
<li>Vous voulez la signature électronique des devis</li>
<li>Vous déclarez la TVA et voulez les états de TVA automatiques</li>
<li>Vous avez besoin d'un export comptable FEC</li>
</ul>

<h2>Outils payants à petit prix pour aller plus loin</h2>
<table>
<thead><tr><th>Logiciel</th><th>Prix d'entrée</th><th>Ce que ça apporte vs gratuit</th></tr></thead>
<tbody>
<tr><td>Indy Plus</td><td>9€/mois</td><td>Facturation avancée, accompagnement</td></tr>
<tr><td>Tiime Smart</td><td>18€/mois</td><td>Rapprochement bancaire, TVA</td></tr>
<tr><td>Freebe Micro</td><td>13€/mois</td><td>Spécifique indépendants, cotisations sociales</td></tr>
</tbody>
</table>
<div class="encart">💡 <strong>Conseil :</strong> Le plan gratuit Indy couvre 80% des besoins d'un micro-entrepreneur. Restez en gratuit le temps de valider votre activité, puis investissez dans un plan payant quand votre CA le justifie.</div>
`,
  },
  {
    slug: 'relances-automatiques-factures',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment automatiser les relances de factures impayées ?",
    reponse: `
<p>Les impayés représentent un problème majeur pour les PME françaises : selon la Banque de France, les délais de paiement dépassent régulièrement les 30 jours légaux. Automatiser les relances est le moyen le plus efficace de réduire vos encours clients sans y passer des heures.</p>

<h2>Séquence de relance automatique recommandée</h2>
<table>
<thead><tr><th>Délai</th><th>Action</th><th>Ton</th></tr></thead>
<tbody>
<tr><td>J-3 avant échéance</td><td>Email de rappel amical</td><td>Préventif, courtois</td></tr>
<tr><td>J+3 après échéance</td><td>Email de relance douce</td><td>Neutre, factuel</td></tr>
<tr><td>J+10</td><td>Relance ferme + mention des pénalités</td><td>Professionnel, sérieux</td></tr>
<tr><td>J+20</td><td>Appel téléphonique + email de mise en demeure</td><td>Ferme, légal</td></tr>
<tr><td>J+30</td><td>Mise en demeure formelle (recommandé avec AR)</td><td>Juridique</td></tr>
</tbody>
</table>

<h2>Relances automatiques dans Sellsy</h2>
<p>Sellsy propose un module de relances automatiques parmi les plus complets du marché français :</p>
<ul>
<li>Configuration en quelques clics (délais, modèles d'emails, destinataires)</li>
<li>Possibilité de personnaliser chaque email (nom client, montant, lien de paiement)</li>
<li>Historique complet des relances envoyées par client</li>
<li>Exclusion possible de certains clients de la relance automatique (grands comptes)</li>
</ul>

<h2>Relances dans Tiime et Indy</h2>
<ul>
<li><strong>Tiime</strong> : rappels de paiement avec lien de paiement en ligne intégré</li>
<li><strong>Indy</strong> : suivi des impayés avec relance manuelle simplifiée (un clic depuis le tableau de bord)</li>
</ul>

<h2>Automatisation avancée avec Make</h2>
<p>Pour les PME avec des besoins plus complexes, Make permet de :</p>
<ul>
<li>Envoyer une relance SMS en plus de l'email</li>
<li>Créer un ticket dans votre outil de gestion si une facture dépasse 45 jours</li>
<li>Notifier le commercial responsable du compte dans Slack</li>
<li>Générer une mise en demeure PDF automatiquement</li>
</ul>

<h2>Mentions légales à inclure dans vos relances</h2>
<ul>
<li>Référence de la facture et montant dû</li>
<li>Taux des pénalités de retard (minimum BCE + 10 points)</li>
<li>Indemnité forfaitaire de 40€ pour frais de recouvrement</li>
<li>Date limite de paiement</li>
</ul>
<div class="encart">💡 <strong>Statistique :</strong> 70% des factures impayées sont réglées après une simple relance courtoise. La relance automatique à J+3 est la plus rentable — elle intervient avant que le client n'ait "oublié" et ne coûte rien une fois paramétrée.</div>
`,
  },
  {
    slug: 'facturation-avec-tva',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment gérer la TVA dans ses factures ?",
    reponse: `
<p>La gestion de la TVA sur les factures est l'un des sujets qui génère le plus de questions chez les entrepreneurs. Voici un guide clair selon votre situation.</p>

<h2>Les 3 situations TVA possibles</h2>
<table>
<thead><tr><th>Situation</th><th>Ce que vous faites</th><th>Mention sur facture</th></tr></thead>
<tbody>
<tr><td><strong>Franchise en base</strong> (sous les seuils)</td><td>Ne collectez pas la TVA</td><td>"TVA non applicable, art. 293B du CGI"</td></tr>
<tr><td><strong>Assujetti à la TVA</strong></td><td>Collectez la TVA, la reversez à l'État</td><td>Taux + montant TVA par ligne</td></tr>
<tr><td><strong>Exonéré de TVA</strong></td><td>Ne collectez pas la TVA (santé, enseignement...)</td><td>Mention d'exonération applicable</td></tr>
</tbody>
</table>

<h2>Seuils de franchise en base TVA 2026</h2>
<ul>
<li><strong>Prestations de services</strong> : 37 500€ de CA annuel (seuil majoré 41 250€)</li>
<li><strong>Ventes de marchandises</strong> : 85 000€ de CA annuel (seuil majoré 93 500€)</li>
<li><strong>Avocats, auteurs, artistes</strong> : seuils spécifiques différents</li>
</ul>

<h2>Les taux de TVA en France</h2>
<table>
<thead><tr><th>Taux</th><th>Applicable à</th></tr></thead>
<tbody>
<tr><td><strong>20%</strong></td><td>Taux normal : la plupart des services et produits</td></tr>
<tr><td><strong>10%</strong></td><td>Restauration, travaux de rénovation (hors énergie), transport</td></tr>
<tr><td><strong>5,5%</strong></td><td>Produits alimentaires, livres, spectacles, travaux énergétiques</td></tr>
<tr><td><strong>2,1%</strong></td><td>Médicaments remboursables, presse</td></tr>
</tbody>
</table>

<h2>Récupération de la TVA sur vos achats</h2>
<p>Si vous êtes assujetti à la TVA, vous pouvez <strong>déduire la TVA de vos achats professionnels</strong> de la TVA que vous collectez. Exemples de TVA déductible :</p>
<ul>
<li>Abonnements logiciels (SaaS)</li>
<li>Matériel informatique</li>
<li>Frais de déplacement (hors taxi/restaurant selon cas)</li>
<li>Honoraires comptables</li>
</ul>

<h2>Déclaration de TVA</h2>
<p>Selon votre régime, vous déclarez la TVA :</p>
<ul>
<li><strong>Mensuel</strong> (régime réel normal) : si CA > 818 000€ services ou > 247 000€ TVA/an</li>
<li><strong>Trimestriel</strong> : si TVA annuelle < 4 000€</li>
<li><strong>Annuel</strong> (régime simplifié) : deux acomptes + régularisation annuelle</li>
</ul>
<p>Les logiciels comme <strong>Tiime</strong> et <strong>Sellsy</strong> génèrent automatiquement les états de TVA et les déclarations CA3/CA12.</p>
`,
  },
  {
    slug: 'signature-electronique-devis',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Peut-on faire signer ses devis électroniquement ?",
    reponse: `
<p>Oui, la signature électronique est légalement valide en France depuis le règlement eIDAS de l'Union européenne (2016). Elle a la même valeur juridique qu'une signature manuscrite si elle respecte certains critères.</p>

<h2>Les 3 niveaux de signature électronique</h2>
<table>
<thead><tr><th>Niveau</th><th>Valeur juridique</th><th>Usage</th><th>Exemples d'outils</th></tr></thead>
<tbody>
<tr><td><strong>Simple</strong></td><td>Acceptable pour la plupart des contrats commerciaux</td><td>Devis, commandes, CGV</td><td>Sellsy, YouSign, DocuSign</td></tr>
<tr><td><strong>Avancée</strong></td><td>Identité du signataire vérifiée</td><td>Contrats RH, immobilier</td><td>YouSign avancé, DocuSign</td></tr>
<tr><td><strong>Qualifiée</strong></td><td>Valeur maximale (équivalent notaire)</td><td>Actes notariés, marchés publics</td><td>CertEurope, IDnow</td></tr>
</tbody>
</table>

<h2>Pour les devis commerciaux : la signature simple suffit</h2>
<p>Pour 99% des situations commerciales courantes (devis d'une agence, contrat de prestation de service, commande client), la <strong>signature électronique simple</strong> est suffisante légalement.</p>

<h2>Sellsy : signature électronique native</h2>
<p>Sellsy est l'un des rares logiciels de gestion françaises à inclure la signature électronique dans tous ses plans :</p>
<ul>
<li>Votre client reçoit un email avec un lien sécurisé</li>
<li>Il consulte le devis directement dans son navigateur, sans télécharger quoi que ce soit</li>
<li>Il clique "Signer et accepter" et trace une signature sur son écran ou mobile</li>
<li>Vous recevez une notification instantanée + le devis signé est archivé</li>
</ul>

<h2>Autres options de signature électronique</h2>
<ul>
<li><strong>Freebe</strong> : signature électronique incluse sur les plans payants</li>
<li><strong>YouSign</strong> : outil dédié à la signature, intégrable à n'importe quel logiciel via API</li>
<li><strong>DocuSign</strong> : référence internationale, plus cher mais très robuste légalement</li>
</ul>

<h2>Avantages concrets de la signature électronique</h2>
<ul>
<li><strong>Vitesse</strong> : un client peut signer depuis son téléphone en 2 minutes, vs 2 jours pour imprimer/scanner/renvoyer</li>
<li><strong>Traçabilité</strong> : horodatage, adresse IP, piste d'audit complète</li>
<li><strong>Archivage</strong> : le document signé est conservé automatiquement</li>
<li><strong>Écologie</strong> : zéro papier, zéro impression</li>
</ul>
<div class="encart">💡 <strong>Impact commercial :</strong> Les devis avec signature électronique sont signés en moyenne 80% plus vite que les devis papier. Sur un cycle de vente court, c'est souvent la différence entre signer aujourd'hui ou perdre le deal au profit d'un concurrent.</div>
`,
  },
  {
    slug: 'export-comptable-logiciel-facturation',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment exporter ses factures vers son comptable ?",
    reponse: `
<p>La relation avec votre comptable est grandement simplifiée quand votre logiciel de facturation génère des exports dans les formats standard. Voici les différentes façons de transmettre vos données comptables.</p>

<h2>Formats d'export comptable</h2>
<table>
<thead><tr><th>Format</th><th>Description</th><th>Compatible avec</th></tr></thead>
<tbody>
<tr><td><strong>FEC</strong> (Fichier des Écritures Comptables)</td><td>Format légal français des écritures comptables</td><td>Tous les logiciels comptables FR</td></tr>
<tr><td><strong>CSV / Excel</strong></td><td>Liste des factures avec montants</td><td>Tous logiciels + traitement manuel</td></tr>
<tr><td><strong>PDF</strong></td><td>Copies des factures</td><td>Archivage, vérification manuelle</td></tr>
<tr><td><strong>Synchronisation directe</strong></td><td>API entre votre outil et celui du comptable</td><td>Écosystèmes dédiés</td></tr>
</tbody>
</table>

<h2>Export FEC : le format prioritaire</h2>
<p>Le FEC est le format imposé par l'administration fiscale française pour les écritures comptables numériques. En cas de contrôle fiscal, vous devez pouvoir fournir un FEC. Assurez-vous que votre logiciel de facturation génère un FEC valide.</p>
<p>Logiciels qui génèrent un FEC : <strong>Sellsy</strong>, <strong>Axonaut</strong>, <strong>Tiime</strong>, <strong>Indy</strong>.</p>

<h2>Tiime et Indy : connexion directe avec l'expert-comptable</h2>
<p>Ces deux outils ont été conçus dans l'optique d'une collaboration directe avec les cabinets comptables :</p>
<ul>
<li><strong>Tiime</strong> : partage d'accès avec votre expert-comptable, qui voit vos données en temps réel dans son propre espace</li>
<li><strong>Indy</strong> : export simplifié vers les logiciels comptables (Quadratus, Cegid, ACD, Sage)</li>
</ul>

<h2>Fréquence d'export recommandée</h2>
<ul>
<li><strong>Mensuel</strong> : si vous déclarez la TVA mensuellement</li>
<li><strong>Trimestriel</strong> : si vous déclarez la TVA trimestriellement</li>
<li><strong>Annuel</strong> : pour la clôture (bilan, compte de résultat)</li>
</ul>

<h2>Ce que votre comptable attend de vous</h2>
<ul>
<li>Toutes les factures émises (ventes) : idéalement en CSV ou FEC</li>
<li>Toutes les factures reçues (achats) : photos ou PDF des justificatifs</li>
<li>Les relevés bancaires du mois</li>
<li>Les notes de frais</li>
</ul>
<div class="encart">💡 <strong>Conseil :</strong> Faites votre export mensuel le premier jour du mois suivant. C'est une habitude simple qui évite le stress de la clôture annuelle et maintient votre comptable informé en temps quasi-réel.</div>
`,
  },
  {
    slug: 'facture-avoir-c-est-quoi',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Qu'est-ce qu'une facture d'avoir ?",
    reponse: `
<p>Une <strong>facture d'avoir</strong> (ou note de crédit) est le seul document légal qui permet de corriger ou d'annuler une facture déjà émise. En comptabilité française, on ne modifie <strong>jamais</strong> une facture envoyée — on crée un avoir qui vient la compenser.</p>

<h2>Quand émet-on une facture d'avoir ?</h2>
<table>
<thead><tr><th>Situation</th><th>Type d'avoir</th></tr></thead>
<tbody>
<tr><td>Retour d'un produit</td><td>Avoir total ou partiel</td></tr>
<tr><td>Annulation d'une prestation</td><td>Avoir total</td></tr>
<tr><td>Remise commerciale accordée après facturation</td><td>Avoir partiel</td></tr>
<tr><td>Erreur sur le prix ou la quantité</td><td>Avoir correctif + nouvelle facture</td></tr>
<tr><td>Geste commercial (litige, retard de livraison)</td><td>Avoir partiel</td></tr>
</tbody>
</table>

<h2>Comment fonctionne un avoir ?</h2>
<p>L'avoir est un document comptable au montant <strong>négatif</strong> : il crédite le compte du client du montant de l'avoir. Concrètement :</p>
<ul>
<li>Facture initiale : 1 000€ HT + TVA = 1 200€ TTC</li>
<li>Avoir créé : -500€ HT + TVA = -600€ TTC</li>
<li>Solde dû par le client : 600€ TTC</li>
</ul>

<h2>Ce que doit contenir une facture d'avoir</h2>
<ul>
<li>Numéro d'avoir (séquence propre, distincte des factures)</li>
<li>Date d'émission</li>
<li>Référence de la facture initiale qui est corrigée</li>
<li>Description et montant de la correction</li>
<li>Montant HT, TVA, TTC avec valeurs négatives</li>
</ul>

<h2>Avoir avec remboursement ou avoir en crédit ?</h2>
<ul>
<li><strong>Avoir avec remboursement</strong> : vous remboursez effectivement le client (virement, chèque)</li>
<li><strong>Avoir en crédit</strong> : le montant est déduit d'une prochaine facture — pratique pour les relations clients régulières</li>
</ul>

<h2>Dans les logiciels de facturation</h2>
<p>Dans <strong>Sellsy</strong>, <strong>Indy</strong> et <strong>Freebe</strong>, la création d'un avoir se fait en quelques clics depuis la facture initiale : "Créer un avoir" → sélectionner les lignes → valider. Le logiciel génère automatiquement le bon numéro et associe l'avoir à la facture d'origine.</p>
<div class="encart-warning">⚠️ <strong>Erreur fréquente :</strong> Ne jamais supprimer une facture déjà envoyée, même si elle est erronée. Créez toujours un avoir, puis une nouvelle facture rectificative si nécessaire. La suppression d'une facture numérotée est illégale en France.</div>
`,
  },
  {
    slug: 'acompte-facture-fonctionnement',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment facturer un acompte ?",
    reponse: `
<p>L'acompte est un paiement partiel reçu avant la réalisation complète de la prestation ou la livraison totale du produit. Bien le facturer est essentiel pour votre trésorerie et votre conformité légale.</p>

<h2>Pourquoi demander un acompte ?</h2>
<ul>
<li><strong>Sécuriser le cash-flow</strong> : percevoir une partie du paiement avant de commencer</li>
<li><strong>Confirmer l'engagement</strong> : un client qui verse un acompte est sérieux</li>
<li><strong>Couvrir les frais avancés</strong> : matières premières, sous-traitants, déplacements</li>
<li><strong>Limiter le risque</strong> : réduire l'exposition en cas de défaut de paiement</li>
</ul>

<h2>Le circuit comptable d'un acompte</h2>
<table>
<thead><tr><th>Étape</th><th>Document émis</th><th>Montant</th></tr></thead>
<tbody>
<tr><td>1. Début de mission</td><td>Facture d'acompte n°1</td><td>Ex. 30% du total</td></tr>
<tr><td>2. Mi-parcours (optionnel)</td><td>Facture d'acompte n°2</td><td>Ex. 40% du total</td></tr>
<tr><td>3. Livraison finale</td><td>Facture de solde</td><td>Solde restant (30%)</td></tr>
</tbody>
</table>

<h2>La facture d'acompte : ce qu'elle doit contenir</h2>
<ul>
<li>Numéro de facture (dans la séquence normale)</li>
<li>Mention "Facture d'acompte" ou "Acompte n°1"</li>
<li>Référence au devis ou contrat de base</li>
<li>Montant de l'acompte HT + TVA + TTC</li>
<li>Pourcentage représenté (ex : "30% du devis n°DEV-2025-042")</li>
</ul>

<h2>La facture de solde</h2>
<p>La facture de solde est émise à la livraison finale. Elle doit :</p>
<ul>
<li>Indiquer le montant total de la prestation</li>
<li>Déduire les acomptes déjà versés</li>
<li>Faire apparaître le solde restant à payer</li>
<li>Référencer les factures d'acompte précédentes</li>
</ul>

<h2>Gestion des acomptes dans Sellsy et Freebe</h2>
<p><strong>Sellsy</strong> gère nativement les factures d'acompte et de solde : vous créez l'acompte depuis le devis, et le logiciel calcule automatiquement le solde restant lors de la facture finale, en déduisant tous les acomptes versés.</p>
<p><strong>Freebe</strong> propose le même fonctionnement adapté aux indépendants.</p>
<div class="encart">💡 <strong>Pratique recommandée :</strong> Pour les projets de plus de 2 000€, systématisez l'acompte à 30-50% au démarrage. C'est une pratique standard et professionnelle que vos clients acceptent sans difficulté dans 95% des cas.</div>
`,
  },
  {
    slug: 'numero-facture-comment-numerotation',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment numéroter ses factures correctement ?",
    reponse: `
<p>La numérotation des factures est strictement encadrée par la loi française. Une numérotation incorrecte peut entraîner des amendes et compliquer votre comptabilité. Voici les règles et les bonnes pratiques.</p>

<h2>Les règles légales de numérotation</h2>
<ul>
<li><strong>Chronologique</strong> : les numéros doivent suivre l'ordre chronologique d'émission</li>
<li><strong>Continue</strong> : aucun trou dans la séquence (si vous passez de FA-2025-012 à FA-2025-014, l'administration va se demander où est FA-2025-013)</li>
<li><strong>Unique</strong> : un numéro ne peut être utilisé qu'une seule fois</li>
<li><strong>Non modifiable</strong> : un numéro attribué ne peut être réattribué ou supprimé</li>
</ul>

<h2>Formats de numérotation acceptés</h2>
<table>
<thead><tr><th>Format</th><th>Exemple</th><th>Avantage</th></tr></thead>
<tbody>
<tr><td>Séquentiel simple</td><td>001, 002, 003</td><td>Simple, mais réinitialisation annuelle recommandée</td></tr>
<tr><td>Préfixe annuel</td><td>2025-001, 2025-002</td><td>Clair, facile à classer par année</td></tr>
<tr><td>Préfixe + lettres</td><td>FA-2025-001, FA-2025-002</td><td>Distingue factures et avoirs (AV-2025-001)</td></tr>
<tr><td>Mensuel</td><td>202501-001, 202501-002</td><td>Granularité mensuelle</td></tr>
</tbody>
</table>

<h2>Réinitialisation annuelle : autorisée ?</h2>
<p>Oui. Vous pouvez recommencer à 001 au début de chaque année, à condition d'inclure l'année dans le numéro (pour éviter les doublons entre FA-2024-001 et FA-2025-001). C'est la pratique la plus courante.</p>

<h2>Séquences séparées autorisées</h2>
<p>Vous pouvez avoir plusieurs séquences de numérotation distinctes si elles sont clairement identifiables :</p>
<ul>
<li>Factures : FA-2025-001, FA-2025-002…</li>
<li>Avoirs : AV-2025-001, AV-2025-002…</li>
<li>Acomptes : AC-2025-001, AC-2025-002…</li>
</ul>

<h2>En pratique : laissez le logiciel gérer</h2>
<p>Un logiciel de facturation comme <strong>Indy</strong>, <strong>Tiime</strong> ou <strong>Sellsy</strong> gère automatiquement la numérotation : vous ne pouvez pas créer de trou, modifier un numéro existant ou émettre deux factures avec le même numéro. Le risque d'erreur est nul.</p>
<div class="encart-warning">⚠️ <strong>Risque :</strong> Les factures avec des numéros manquants ou en doublon peuvent déclencher des contrôles fiscaux et des amendes. En cas d'erreur de numérotation découverte après émission, consultez votre expert-comptable avant de corriger.</div>
`,
  },
  {
    slug: 'delai-paiement-legal-france',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Quels sont les délais de paiement légaux en France ?",
    reponse: `
<p>En France, les délais de paiement entre professionnels (B2B) sont encadrés par la <strong>loi de Modernisation de l'Économie (LME)</strong> de 2008, modifiée depuis. Ces délais sont impératifs — vous ne pouvez pas y déroger au détriment du créancier.</p>

<h2>Délais légaux en vigueur</h2>
<table>
<thead><tr><th>Règle</th><th>Délai</th><th>Conditions</th></tr></thead>
<tbody>
<tr><td>Délai légal par défaut</td><td>30 jours</td><td>À compter de la date de réception de la facture</td></tr>
<tr><td>Délai contractuel maximum</td><td>60 jours</td><td>Date de facture (doit être stipulé dans les CGV)</td></tr>
<tr><td>Délai contractuel alternatif</td><td>45 jours fin de mois</td><td>Stipulé dans les CGV</td></tr>
</tbody>
</table>

<h2>Pénalités de retard légales</h2>
<p>En cas de retard de paiement, les pénalités s'appliquent de plein droit dès le lendemain de la date d'échéance :</p>
<ul>
<li><strong>Taux minimum</strong> : taux directeur de la BCE en vigueur + 10 points de pourcentage</li>
<li><strong>Indemnité forfaitaire</strong> : 40€ pour frais de recouvrement (obligatoire en B2B)</li>
<li>Ces pénalités doivent être mentionnées sur vos factures</li>
</ul>

<h2>Secteurs avec des règles spécifiques</h2>
<table>
<thead><tr><th>Secteur</th><th>Délai spécifique</th></tr></thead>
<tbody>
<tr><td>Transport routier</td><td>30 jours maximum (pas d'accord contractuel possible)</td></tr>
<tr><td>Produits alimentaires frais</td><td>30 jours après fin de décade de livraison</td></tr>
<tr><td>Grande distribution</td><td>Règles spécifiques selon les relations fournisseurs</td></tr>
<tr><td>Marchés publics</td><td>30 jours (administration centrale) ou 30-50 jours (autres)</td></tr>
</tbody>
</table>

<h2>Comment faire valoir vos droits ?</h2>
<ol>
<li>Mentionnez les pénalités de retard sur toutes vos factures</li>
<li>Envoyez une relance écrite dès J+1 après l'échéance</li>
<li>Envoyez une mise en demeure formelle après 15 jours de retard</li>
<li>En cas de non-paiement persistant : injonction de payer (procédure simplifiée, sans avocat jusqu'à 5 000€)</li>
</ol>
<div class="encart">💡 <strong>Bon réflexe :</strong> Paramétrez votre logiciel de facturation pour qu'il calcule et affiche automatiquement les pénalités dans les relances. La simple mention des pénalités dans l'email de relance suffit souvent à débloquer le paiement.</div>
`,
  },
  {
    slug: 'facture-multi-devises',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Peut-on facturer en devise étrangère (USD, GBP) ?",
    reponse: `
<p>Oui, une entreprise française peut parfaitement émettre des factures en devise étrangère. C'est courant pour les prestataires de services qui travaillent avec des clients internationaux. Voici les règles à respecter.</p>

<h2>Règles légales pour les factures en devises étrangères</h2>
<ul>
<li>La facture peut être libellée dans n'importe quelle devise</li>
<li>Si vous êtes assujetti à la TVA française, <strong>la TVA doit être exprimée en euros</strong></li>
<li>Vous devez indiquer le <strong>taux de conversion</strong> utilisé et sa date</li>
<li>Votre comptabilité reste en euros — conversion obligatoire</li>
</ul>

<h2>Taux de change à utiliser</h2>
<table>
<thead><tr><th>Situation</th><th>Taux à utiliser</th></tr></thead>
<tbody>
<tr><td>TVA applicable</td><td>Taux BCE du jour de l'opération</td></tr>
<tr><td>Comptabilisation</td><td>Taux du jour de l'émission de la facture (ou taux moyen mensuel)</td></tr>
<tr><td>Déclaration TVA</td><td>Taux BCE du fait générateur</td></tr>
</tbody>
</table>

<h2>Gestion des écarts de change</h2>
<p>Quand le client paie en dollars et que vous convertissez en euros, il peut y avoir un écart entre le taux au moment de la facture et le taux au moment du paiement. Cet écart (gain ou perte de change) est comptabilisé séparément.</p>
<ul>
<li><strong>Gain de change</strong> : produit financier, imposable</li>
<li><strong>Perte de change</strong> : charge financière, déductible</li>
</ul>

<h2>Logiciels qui gèrent le multi-devises</h2>
<ul>
<li><strong>Sellsy</strong> : facturation multi-devises avec conversion automatique</li>
<li><strong>Axonaut</strong> : support des devises étrangères</li>
<li><strong>Zoho Invoice</strong> : très complet pour le multi-devises</li>
<li><strong>Indy / Tiime</strong> : principalement conçus pour l'euro, moins adaptés au multi-devises intensif</li>
</ul>

<h2>Cas particulier : facturation en USD à un client américain</h2>
<p>Si votre client est aux USA, votre facture en USD est exempte de TVA française (exportation hors UE). Mentionnez "Exonéré de TVA - exportation" sur votre facture. Cela simplifie la comptabilité TVA tout en vous permettant de facturer dans la devise de votre client.</p>
<div class="encart">💡 <strong>Pratique :</strong> Pour limiter le risque de change, vous pouvez inclure une clause dans vos contrats internationaux stipulant que le paiement se fera au taux du jour de la facture, et que les écarts de change sont à la charge du client.</div>
`,
  },
  {
    slug: 'facturation-abonnement-recurrent',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment gérer la facturation récurrente (abonnements) ?",
    reponse: `
<p>Si vous vendez des abonnements ou des prestations récurrentes mensuelles ou annuelles, la facturation récurrente automatise complètement la génération et l'envoi de vos factures. Finis les oublis et la double saisie.</p>

<h2>Fonctionnement de la facturation récurrente</h2>
<ol>
<li>Vous créez un "abonnement" avec : client, montant, fréquence (mensuel/annuel), date de début</li>
<li>À chaque échéance, le logiciel génère automatiquement la facture</li>
<li>La facture est envoyée automatiquement au client</li>
<li>Si le paiement est automatique (prélèvement Stripe), il est déclenché en même temps</li>
<li>Le paiement est enregistré automatiquement quand il arrive</li>
</ol>

<h2>Comparatif des outils selon votre besoin</h2>
<table>
<thead><tr><th>Besoin</th><th>Outil recommandé</th></tr></thead>
<tbody>
<tr><td>Facturation récurrente simple (envoi facture auto)</td><td>Sellsy, Tiime, Axonaut</td></tr>
<tr><td>Prélèvement automatique (paiement auto)</td><td>Sellsy + Stripe, GoCardless</td></tr>
<tr><td>Abonnements complexes (upgrades, downgrades, prorata)</td><td>Stripe Billing, Chargebee</td></tr>
<tr><td>Petit volume, SaaS simple</td><td>Stripe directement</td></tr>
</tbody>
</table>

<h2>Sellsy : la meilleure option française</h2>
<p>Sellsy gère nativement la facturation récurrente avec :</p>
<ul>
<li>Création d'abonnements avec durée, fréquence et prix</li>
<li>Génération et envoi automatiques des factures</li>
<li>Connexion à Stripe pour le prélèvement automatique</li>
<li>Suivi des abonnements actifs, expirés, résiliés</li>
</ul>

<h2>Automatisation avec Make : pour les besoins avancés</h2>
<p>Make permet de connecter votre système d'abonnement à votre logiciel de facturation :</p>
<ul>
<li>Quand un abonnement est créé dans Stripe → créer le client dans Sellsy</li>
<li>Quand un paiement Stripe est reçu → créer la facture dans Tiime</li>
<li>Quand un abonnement expire → notifier le commercial dans Slack</li>
</ul>
<div class="encart">💡 <strong>Astuce :</strong> Pour les abonnements annuels, envoyez une facture d'acompte mensuelle même si vous percevez le paiement en une fois. Cela facilite la comptabilité et clarifie la période couverte pour votre client.</div>
`,
  },
  {
    slug: 'comptabilite-vs-facturation-difference',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Quelle est la différence entre facturation et comptabilité ?",
    reponse: `
<p>Facturation et comptabilité sont deux niveaux différents de gestion financière, souvent confondus. Comprendre la distinction vous aide à choisir les bons outils et à mieux organiser votre gestion administrative.</p>

<h2>Tableau comparatif</h2>
<table>
<thead><tr><th>Critère</th><th>Facturation</th><th>Comptabilité</th></tr></thead>
<tbody>
<tr><td>Définition</td><td>Émettre et suivre les factures clients et fournisseurs</td><td>Enregistrer toutes les opérations financières dans des comptes</td></tr>
<tr><td>Qui le fait</td><td>Le dirigeant, l'assistante administrative</td><td>Expert-comptable ou comptable salarié</td></tr>
<tr><td>Fréquence</td><td>Quotidienne à hebdomadaire</td><td>Mensuelle à annuelle</td></tr>
<tr><td>Obligation légale</td><td>Oui (factures conformes)</td><td>Oui (livres comptables, bilan, déclarations)</td></tr>
<tr><td>Horizon</td><td>Opérationnel (ventes en cours)</td><td>Stratégique (santé financière globale)</td></tr>
<tr><td>Résultat</td><td>Factures, devis, relances</td><td>Bilan, compte de résultat, liasse fiscale</td></tr>
</tbody>
</table>

<h2>La chaîne facturation → comptabilité</h2>
<p>La facturation alimente la comptabilité : chaque facture émise ou reçue doit être enregistrée dans les livres comptables. Le flux est :</p>
<ol>
<li>Vous créez une facture dans votre logiciel de facturation</li>
<li>Le logiciel exporte les écritures comptables (FEC, CSV)</li>
<li>Votre comptable les importe dans son logiciel comptable (Cegid, ACD, Sage)</li>
<li>Il produit le bilan, le compte de résultat et les déclarations fiscales</li>
</ol>

<h2>Outils qui couvrent les deux</h2>
<ul>
<li><strong>Tiime</strong> : facturation + tenue comptable + connexion directe avec l'expert-comptable. Développé par des experts-comptables.</li>
<li><strong>Indy</strong> : facturation + compta simplifiée + déclarations automatiques. Très adapté aux micro-entrepreneurs.</li>
<li><strong>Axonaut</strong> : facturation + CRM + gestion + précomptabilité pour PME.</li>
</ul>

<h2>Les obligations comptables selon votre statut</h2>
<table>
<thead><tr><th>Statut</th><th>Obligation comptable</th></tr></thead>
<tbody>
<tr><td>Micro-entrepreneur</td><td>Livre des recettes uniquement</td></tr>
<tr><td>EI / EIRL</td><td>Comptabilité simplifiée (selon régime)</td></tr>
<tr><td>SASU / SARL / SAS</td><td>Comptabilité complète obligatoire + dépôt des comptes</td></tr>
</tbody>
</table>
<div class="encart">💡 <strong>Conseil :</strong> Pour une TPE, investissez dans un bon logiciel de facturation (10–30€/mois) et externalisez la comptabilité à un expert-comptable (150–400€/mois). C'est la répartition la plus efficace entre ce que vous pouvez faire vous-même et ce qui requiert une expertise spécifique.</div>
`,
  },
  {
    slug: 'facture-en-ligne-securite',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "La facturation en ligne est-elle sécurisée ?",
    reponse: `
<p>Les logiciels de facturation en ligne (SaaS) sont généralement bien plus sécurisés que des fichiers Word ou Excel stockés en local. Voici pourquoi, et comment évaluer la sécurité d'un outil.</p>

<h2>Sécurité technique des logiciels SaaS de facturation</h2>
<table>
<thead><tr><th>Mesure de sécurité</th><th>Ce que ça protège</th></tr></thead>
<tbody>
<tr><td>Chiffrement HTTPS/TLS</td><td>Données en transit (entre vous et le serveur)</td></tr>
<tr><td>Chiffrement au repos</td><td>Données stockées sur les serveurs</td></tr>
<tr><td>Sauvegardes automatiques</td><td>Perte accidentelle de données</td></tr>
<tr><td>Authentification 2FA</td><td>Accès non autorisé à votre compte</td></tr>
<tr><td>Contrôle d'accès par rôle</td><td>Accès aux données par des membres de l'équipe</td></tr>
<tr><td>Journaux d'audit</td><td>Traçabilité des actions effectuées</td></tr>
</tbody>
</table>

<h2>Hébergement et localisation des données</h2>
<p>Pour les entreprises françaises, la localisation des données est un critère clé (RGPD) :</p>
<ul>
<li><strong>Sellsy</strong> : hébergement OVH France ✅</li>
<li><strong>Tiime</strong> : hébergement Europe ✅</li>
<li><strong>Indy</strong> : hébergement Europe ✅</li>
<li><strong>Axonaut</strong> : hébergement France ✅</li>
</ul>

<h2>Risques comparés : en ligne vs fichiers locaux</h2>
<ul>
<li><strong>Risque de perte</strong> : fichier local (crash disque, virus, incendie) >> SaaS (sauvegarde automatique)</li>
<li><strong>Risque de vol</strong> : fichier local non protégé >> SaaS (chiffrement + 2FA)</li>
<li><strong>Risque de hacking</strong> : similaire, mais les éditeurs SaaS ont des équipes sécurité dédiées</li>
<li><strong>Risque de faillite éditeur</strong> : SaaS uniquement — exportez régulièrement vos données</li>
</ul>

<h2>Bonnes pratiques pour sécuriser votre compte</h2>
<ol>
<li>Activez l'authentification à deux facteurs (2FA) — c'est la mesure la plus efficace</li>
<li>Utilisez un mot de passe unique et fort (gestionnaire de mots de passe recommandé)</li>
<li>Limitez les accès : ne donnez accès qu'aux personnes qui en ont besoin</li>
<li>Exportez vos données régulièrement (mensuel ou trimestriel) pour avoir une copie locale</li>
<li>Vérifiez que votre éditeur dispose d'une politique de confidentialité et d'un DPA RGPD</li>
</ol>
<div class="encart">💡 <strong>En cas de doute sur un éditeur :</strong> cherchez s'il dispose d'une certification ISO 27001 (sécurité de l'information) ou SOC 2. Ces audits indépendants garantissent que les pratiques de sécurité sont bien en place.</div>
`,
  },
  {
    slug: 'frais-kilomedriques-note-de-frais',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Comment gérer les notes de frais et frais kilométriques ?",
    reponse: `
<p>Les notes de frais et frais kilométriques sont des dépenses professionnelles remboursables qui peuvent être déduites de votre résultat imposable. Bien les gérer est source d'économies fiscales significatives.</p>

<h2>Types de frais professionnels déductibles</h2>
<table>
<thead><tr><th>Catégorie</th><th>Exemples</th><th>Justificatif requis</th></tr></thead>
<tbody>
<tr><td>Déplacements</td><td>Train, avion, taxi, péages</td><td>Billet, facture, ticket</td></tr>
<tr><td>Hébergement</td><td>Hôtel en déplacement professionnel</td><td>Facture hôtel</td></tr>
<tr><td>Repas</td><td>Repas client, repas en déplacement</td><td>Ticket de caisse ou facture</td></tr>
<tr><td>Frais kilométriques</td><td>Utilisation voiture personnelle pour pro</td><td>Relevé kilométrique</td></tr>
<tr><td>Matériel</td><td>Fournitures, équipement bureau</td><td>Facture</td></tr>
</tbody>
</table>

<h2>Barème kilométrique 2026</h2>
<p>Si vous utilisez votre véhicule personnel pour des déplacements professionnels, vous pouvez vous rembourser ou déduire selon le barème fiscal :</p>
<table>
<thead><tr><th>Puissance fiscale</th><th>Jusqu'à 5 000 km</th><th>5 001 à 20 000 km</th><th>Au-delà de 20 000 km</th></tr></thead>
<tbody>
<tr><td>3 CV et moins</td><td>0,529€/km</td><td>0,316€/km + 1065€</td><td>0,370€/km</td></tr>
<tr><td>4 CV</td><td>0,606€/km</td><td>0,340€/km + 1330€</td><td>0,407€/km</td></tr>
<tr><td>5 CV</td><td>0,636€/km</td><td>0,357€/km + 1395€</td><td>0,427€/km</td></tr>
<tr><td>6 CV</td><td>0,665€/km</td><td>0,374€/km + 1457€</td><td>0,447€/km</td></tr>
<tr><td>7 CV et plus</td><td>0,697€/km</td><td>0,394€/km + 1515€</td><td>0,470€/km</td></tr>
</tbody>
</table>

<h2>Outils pour gérer les frais kilométriques</h2>
<ul>
<li><strong>Freebe</strong> : calculateur de frais kilométriques intégré avec saisie des trajets et calcul automatique</li>
<li><strong>Qonto</strong> : scan des reçus depuis le mobile, catégorisation automatique des dépenses</li>
<li><strong>Spendesk</strong> (+ grande structure) : gestion complète des notes de frais avec validation manager</li>
</ul>

<h2>Archivage des justificatifs</h2>
<p>En France, les justificatifs de frais professionnels doivent être conservés <strong>6 ans</strong> (délai de prescription fiscale). Les photos numériques de reçus sont acceptées si elles sont lisibles. Les logiciels comme Qonto permettent de scanner et archiver automatiquement.</p>
<div class="encart">💡 <strong>Économie fiscale :</strong> Un indépendant qui fait 10 000 km professionnels avec une voiture de 5 CV peut déduire 4 270€ de son revenu imposable. À 30% d'imposition, c'est 1 281€ d'impôts économisés — ne négligez pas ces frais.</div>
`,
  },
  {
    slug: 'logiciel-facturation-batiment-artisan',
    categorie: 'facturation',
    categorieLabel: 'Facturation',
    question: "Quel logiciel de facturation pour un artisan ou une entreprise du bâtiment ?",
    reponse: `
<p>Les artisans et entreprises du bâtiment ont des besoins de facturation spécifiques : devis techniques avec métrés, situations de travaux progressives, retenue de garantie, sous-traitance et TVA à taux réduits sur la rénovation. Voici comment s'équiper.</p>

<h2>Besoins spécifiques du secteur BTP</h2>
<ul>
<li><strong>Devis techniques</strong> : lignes détaillées avec main-d'œuvre et matériaux séparés</li>
<li><strong>Situations de travaux</strong> : facturation progressive selon l'avancement du chantier (%)  </li>
<li><strong>Retenue de garantie</strong> : 5% retenu par le maître d'ouvrage, libéré après 1 an</li>
<li><strong>TVA à taux réduit</strong> : 10% pour travaux de rénovation, 5,5% pour rénovation énergétique</li>
<li><strong>Sous-traitance</strong> : autoliquidation de la TVA (art. 283-2 nonies du CGI)</li>
</ul>

<h2>Comparatif des solutions pour artisans BTP</h2>
<table>
<thead><tr><th>Logiciel</th><th>Prix</th><th>Avantage BTP</th><th>Limite</th></tr></thead>
<tbody>
<tr><td><strong>Sellsy</strong></td><td>35€/mois</td><td>Devis complexes, situations, signature électronique</td><td>Pas de module métrés avancés</td></tr>
<tr><td><strong>Axonaut</strong></td><td>58€/mois</td><td>Gestion de projet + facturation intégrés</td><td>Généraliste, pas spécialisé BTP</td></tr>
<tr><td><strong>Batigest</strong></td><td>Sur devis</td><td>Spécialisé BTP (métrés, DPGF, sous-traitance)</td><td>Cher, complexe</td></tr>
<tr><td><strong>Obat</strong></td><td>32€/mois</td><td>Devis BTP détaillés, situations de travaux</td><td>Moins de fonctions CRM</td></tr>
</tbody>
</table>

<h2>Notre recommandation selon la taille</h2>
<ul>
<li><strong>Artisan seul ou 2-3 salariés</strong> : Sellsy ou Axonaut — suffisant pour 95% des besoins, et bien moins cher que les solutions spécialisées BTP</li>
<li><strong>PME BTP 5-20 salariés</strong> : Obat ou Batigest — les fonctions spécialisées (métrés, DPGF) deviennent nécessaires</li>
<li><strong>Grande entreprise BTP</strong> : ERP spécialisé (Onaya, Attic+)</li>
</ul>

<h2>Configuration de Sellsy pour le BTP</h2>
<ol>
<li>Créez un catalogue de prestations types (main-d'œuvre, matériaux) avec taux de TVA corrects (10% ou 5,5%)</li>
<li>Activez la retenue de garantie dans les paramètres de facturation</li>
<li>Configurez les modèles de situations de travaux (% avancement)</li>
<li>Paramétrez l'autoliquidation TVA pour les devis sous-traitants</li>
</ol>
<div class="encart">💡 <strong>E-facture BTP :</strong> La réforme de la facturation électronique 2026 s'applique aussi aux artisans du bâtiment. Assurez-vous que votre logiciel est conforme ou planifiez la migration maintenant.</div>
`,
  },
]
