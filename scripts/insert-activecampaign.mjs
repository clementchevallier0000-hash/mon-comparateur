import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://jaeqvfkajubfijqayrrh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphZXF2ZmthanViZmlqcWF5cnJoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjIyNTExNiwiZXhwIjoyMDg3ODAxMTE2fQ.j0zuacYkO75elIzd0zcrqpOJi4avgii5xpdqAXFxWog'
)

const contenu = `
<h2>Qu'est-ce qu'ActiveCampaign ?</h2>
<p>ActiveCampaign est une plateforme de <strong>marketing automation avancée</strong> fondée en 2003 à Chicago. Elle combine email marketing, CRM, SMS et automatisation dans un seul outil — idéal pour les entreprises qui veulent aller bien au-delà des simples newsletters et construire de véritables parcours clients personnalisés.</p>
<p>La différence avec des outils comme Mailchimp ? ActiveCampaign excelle dans les <strong>automatisations complexes</strong> : conditions if/then, logique de branchement, déclencheurs comportementaux. Un contact ouvre un email mais ne clique pas ? L'outil peut automatiquement envoyer une relance différente de celle envoyée à celui qui a cliqué. Les automations peuvent même déclencher d'autres automations pour maintenir une communication cohérente tout au long du parcours.</p>

<h2>Les tarifs ActiveCampaign (2025)</h2>
<p>ActiveCampaign propose 4 plans, tous avec un essai gratuit de 14 jours :</p>
<ul>
  <li><strong>Starter (à partir de 15 $/mois facturé annuellement)</strong> — 10 000 envois/mois, automatisation multi-étapes complète, 250+ templates, A/B testing, SMS automation. Le meilleur point d'entrée pour une petite équipe.</li>
  <li><strong>Plus</strong> — Tout Starter + landing pages, CRM avancé, scoring des leads, contenu conditionnel, onboarding gratuit inclus.</li>
  <li><strong>Pro</strong> — Tout Plus + envoi prédictif IA, attribution des revenus, reporting BI grade, 3 sessions d'onboarding dédiées.</li>
  <li><strong>Enterprise</strong> — Accompagnement personnalisé, SLA garanti, 4 sessions d'onboarding sur mesure.</li>
</ul>
<p>À titre de comparaison, HubSpot facture l'onboarding entre <strong>3 000 $ et 7 000 $</strong> selon le plan — chez ActiveCampaign, il est inclus gratuitement à partir du plan Plus.</p>

<h2>Fonctionnalités principales</h2>

<h3>Email marketing et automatisation avancée</h3>
<p>C'est le cœur d'ActiveCampaign. Le plan Starter donne accès à des automatisations multi-étapes dès le premier jour, avec :</p>
<ul>
  <li>75+ déclencheurs et actions natifs (basés sur les contacts, comptes et deals)</li>
  <li>Actions illimitées par automation</li>
  <li>Jusqu'à 5 déclencheurs par automation</li>
  <li>Branchement avancé (if/else, pourcentage fixe, date, événement, objectif...)</li>
  <li>Génération d'automations par IA, contenu prédictif, envoi prédictif</li>
  <li>Carte visuelle des automations pour visualiser et optimiser les parcours</li>
  <li>Split testing sur les automations entières, pas seulement sur les emails</li>
</ul>
<p>Les <strong>250+ templates pré-construits</strong> sont disponibles sur tous les plans (contre 99 chez HubSpot). Ils couvrent les séquences de bienvenue, l'abandon de panier, le lead nurturing et bien plus.</p>

<h3>Délivrabilité : n°1 du marché</h3>
<p>C'est l'un des points forts les plus différenciants d'ActiveCampaign. Selon les derniers tests d'EmailTooltester, ActiveCampaign a obtenu un <strong>taux de délivrabilité de 94,2%</strong>, le classant officiellement <strong>#1 toutes plateformes confondues</strong> (prix "Best Email Deliverability 2025"). En moyenne, 1 email marketing sur 6 n'atteint jamais sa destination — ActiveCampaign minimise drastiquement ce risque.</p>
<table style="width:100%;border-collapse:collapse;margin-bottom:18px;">
  <thead>
    <tr style="background:#f8fafc;">
      <th style="padding:10px 14px;text-align:left;font-size:13px;color:#64748b;border-bottom:2px solid #e2e8f0;">Plateforme</th>
      <th style="padding:10px 14px;text-align:left;font-size:13px;color:#64748b;border-bottom:2px solid #e2e8f0;">Taux de délivrabilité</th>
      <th style="padding:10px 14px;text-align:left;font-size:13px;color:#64748b;border-bottom:2px solid #e2e8f0;">Classement</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:10px 14px;font-size:14px;color:#374151;font-weight:600;">ActiveCampaign</td>
      <td style="padding:10px 14px;font-size:14px;font-weight:700;color:#16a34a;">94,2%</td>
      <td style="padding:10px 14px;font-size:14px;color:#374151;">#1</td>
    </tr>
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:10px 14px;font-size:14px;color:#374151;">HubSpot</td>
      <td style="padding:10px 14px;font-size:14px;font-weight:700;color:#d97706;">79,8%</td>
      <td style="padding:10px 14px;font-size:14px;color:#374151;">#12</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;font-size:14px;color:#374151;">Klaviyo</td>
      <td style="padding:10px 14px;font-size:14px;font-weight:700;color:#dc2626;">Non classé</td>
      <td style="padding:10px 14px;font-size:14px;color:#374151;">Top 15 non atteint</td>
    </tr>
  </tbody>
</table>
<p>ActiveCampaign accélère la livraison en transitant par son <strong>réseau privé sécurisé</strong> (jusqu'à 10x plus rapide que le réseau public internet). Le test anti-spam intégré permet de vérifier la probabilité d'atterrir en spam avant chaque envoi. La plateforme nettoie aussi automatiquement les adresses invalides et les hard bounces.</p>
<p><strong>Cas client MentorShow</strong> : après avoir adopté ActiveCampaign, MentorShow a atteint un taux de délivrabilité de 99,88%, un taux d'ouverture de 43,7% (doublé depuis 2021) et un taux de clic de 5,56% (contre 1,18% en 2021). Le taux de désinscription est tombé à 0,49% (contre 0,94% avant).</p>

<h3>CRM intégré</h3>
<p>ActiveCampaign propose un CRM intégrable au cœur de la plateforme, conçu pour connecter marketing et ventes :</p>
<ul>
  <li>Suivi des deals, gestion de pipeline, étapes et automatisation des ventes</li>
  <li>Organisation des contacts, historique des interactions, création d'enregistrements de deals</li>
  <li>Attribution des propriétaires de deals et automatisation des communications commerciales</li>
  <li>Pipelines illimités sur tous les plans (HubSpot les limite selon le tier)</li>
  <li>Lead scoring comportemental : des points ajoutés automatiquement selon les actions (visite page pricing, clic dans un email...)</li>
</ul>

<h3>Fonctionnalités IA</h3>
<p>ActiveCampaign intègre des outils IA avancés accessibles dès les premiers plans :</p>
<ul>
  <li>Génération de templates email, contenus et images adaptés à votre marque</li>
  <li>Suggestion des 3 meilleurs segments à activer selon vos données</li>
  <li>Recommandations d'automations avec analytics prédictifs</li>
  <li>AI Brand Kit : importer couleurs, polices, logos pour un branding cohérent sur tous vos contenus</li>
  <li>AI Email Calendar : recommandations d'horaires d'envoi basées sur les données du compte et les tendances sectorielles</li>
  <li>Envoi prédictif : chaque contact reçoit l'email au moment optimal pour lui</li>
</ul>

<h3>SMS marketing</h3>
<p>Le SMS est intégré directement dans la plateforme ActiveCampaign (pas un add-on séparé à activer). Vous pouvez créer des campagnes combinant email, SMS et automation dans un seul workflow : confirmation d'achat par SMS, relance panier abandonné, message de bienvenue personnalisé...</p>

<h3>Segmentation et personnalisation</h3>
<p>ActiveCampaign permet une segmentation fine basée sur le comportement :</p>
<ul>
  <li>Segmentation selon les actions : consultation d'un produit, abandon de panier, niveau d'engagement</li>
  <li>Merge tags pour personnaliser les emails (prénom, derniers achats, recommandations...)</li>
  <li>Champs personnalisés mis à jour automatiquement selon le lead score</li>
  <li>Contenu dynamique : deux contacts peuvent recevoir le même email avec un contenu visuellement différent selon leur profil</li>
  <li>Suivi du site intégré : les actions sur votre site web (pages vues, clics, formulaires) alimentent directement le CRM et déclenchent les automations</li>
</ul>

<h3>Intégrations</h3>
<p>ActiveCampaign s'intègre avec <strong>950+ outils</strong> : Shopify, WooCommerce, Salesforce, Stripe, Eventbrite, Zoom, Square et des centaines d'autres. C'est presque 3 fois plus que Klaviyo (350+), et la marketplace couvre tous les secteurs : e-commerce, CRM, facturation, réseaux sociaux, CMS.</p>

<h2>ActiveCampaign vs HubSpot</h2>
<table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
  <thead>
    <tr style="background:#f8fafc;">
      <th style="padding:12px 16px;text-align:left;font-size:13px;color:#64748b;border-bottom:2px solid #e2e8f0;"></th>
      <th style="padding:12px 16px;text-align:center;font-size:13px;color:#2563eb;border-bottom:2px solid #e2e8f0;font-weight:700;">ActiveCampaign</th>
      <th style="padding:12px 16px;text-align:center;font-size:13px;color:#ea580c;border-bottom:2px solid #e2e8f0;font-weight:700;">HubSpot</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:11px 16px;font-size:14px;color:#374151;font-weight:600;">Prix d'entrée</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">15 $/mois</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">15 $/mois/siège</td>
    </tr>
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:11px 16px;font-size:14px;color:#374151;font-weight:600;">Délivrabilité</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;font-weight:700;color:#16a34a;">94,2% — #1</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;color:#d97706;">79,8% — #12</td>
    </tr>
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:11px 16px;font-size:14px;color:#374151;font-weight:600;">Automation avancée</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">✅ Dès le plan Starter</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">❌ Plans supérieurs</td>
    </tr>
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:11px 16px;font-size:14px;color:#374151;font-weight:600;">A/B testing</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">✅ Tous les plans</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">❌ Plans supérieurs</td>
    </tr>
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:11px 16px;font-size:14px;color:#374151;font-weight:600;">Templates email</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">250+</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">99</td>
    </tr>
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:11px 16px;font-size:14px;color:#374151;font-weight:600;">Intégrations</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">950+</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">1 600+</td>
    </tr>
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:11px 16px;font-size:14px;color:#374151;font-weight:600;">Onboarding</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">Gratuit (Plus et Pro)</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">3 000 $ à 7 000 $</td>
    </tr>
    <tr>
      <td style="padding:11px 16px;font-size:14px;color:#374151;font-weight:600;">CMS intégré</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">Formulaires et pages</td>
      <td style="padding:11px 16px;font-size:14px;text-align:center;">CMS complet</td>
    </tr>
  </tbody>
</table>
<p>ActiveCampaign domine nettement sur la <strong>délivrabilité</strong> (+14 points vs HubSpot), l'<strong>automation dès l'entrée de gamme</strong> et le <strong>rapport qualité/prix</strong>. HubSpot est plus complet sur le CMS, les intégrations et les rapports avancés — mais son coût grimpe rapidement pour les équipes.</p>
<p><strong>Artivive</strong> a réalisé une croissance de 1 000x (de 100 à 100 000 utilisateurs) après être passé de HubSpot à ActiveCampaign, avec +47% d'interactions email. <strong>Future London Academy</strong> a vu ses contacts augmenter de 80% et atteint un taux d'ouverture/clic moyen de 39%.</p>

<h2>ActiveCampaign vs Klaviyo</h2>
<p>Klaviyo est centré sur l'e-commerce Shopify. ActiveCampaign est polyvalent : B2B, SaaS, éducation, santé, services — et e-commerce aussi. Les différences clés :</p>
<ul>
  <li><strong>Délivrabilité</strong> : ActiveCampaign 94,2% — Klaviyo ne figure pas dans le top 15</li>
  <li><strong>Automation</strong> : ActiveCampaign propose 75+ déclencheurs et jusqu'à 5 par workflow — Klaviyo se limite à moins de 25 déclencheurs, un seul par automation</li>
  <li><strong>Intégrations</strong> : 950+ contre 350+ pour Klaviyo</li>
  <li><strong>CRM</strong> : ActiveCampaign dispose d'un CRM complet avec pipeline — Klaviyo n'en propose pas</li>
  <li><strong>Landing pages</strong> : Disponibles chez ActiveCampaign (plan Plus+) — absentes chez Klaviyo</li>
  <li><strong>Migration</strong> : ActiveCampaign offre une migration 1:1 complète et gratuite (listes, templates, automations, formulaires)</li>
  <li><strong>SMS</strong> : Intégré nativement chez ActiveCampaign — disponible uniquement sur le plan le plus cher chez Klaviyo (à partir de 60 $/mois)</li>
</ul>

<h2>Avis utilisateurs sur ActiveCampaign</h2>
<table style="width:100%;border-collapse:collapse;margin-bottom:18px;">
  <thead>
    <tr style="background:#f8fafc;">
      <th style="padding:10px 14px;text-align:left;font-size:13px;color:#64748b;border-bottom:2px solid #e2e8f0;">Source</th>
      <th style="padding:10px 14px;text-align:left;font-size:13px;color:#64748b;border-bottom:2px solid #e2e8f0;">Note</th>
      <th style="padding:10px 14px;text-align:left;font-size:13px;color:#64748b;border-bottom:2px solid #e2e8f0;">Points saillants</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:10px 14px;font-size:14px;color:#374151;">G2</td>
      <td style="padding:10px 14px;font-size:14px;font-weight:700;color:#16a34a;">4,5 / 5</td>
      <td style="padding:10px 14px;font-size:14px;color:#64748b;">Puissance de l'automation, délivrabilité, support</td>
    </tr>
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:10px 14px;font-size:14px;color:#374151;">Capterra</td>
      <td style="padding:10px 14px;font-size:14px;font-weight:700;color:#16a34a;">4,6 / 5</td>
      <td style="padding:10px 14px;font-size:14px;color:#64748b;">Facilité d'utilisation, rapport qualité/prix</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;font-size:14px;color:#374151;">EmailTooltester 2025</td>
      <td style="padding:10px 14px;font-size:14px;font-weight:700;color:#16a34a;">#1 délivrabilité</td>
      <td style="padding:10px 14px;font-size:14px;color:#64748b;">94,2% — meilleure délivrabilité du marché</td>
    </tr>
  </tbody>
</table>

<h2>Verdict sur ActiveCampaign</h2>
<p>ActiveCampaign est la solution idéale pour les équipes marketing qui veulent une <strong>automatisation sérieuse sans payer le prix fort d'un HubSpot</strong>. Son taux de délivrabilité de 94,2% — le meilleur du marché selon EmailTooltester — en fait le choix n°1 pour les business dont les revenus dépendent de l'email.</p>
<p>Là où Mailchimp s'arrête à l'envoi de newsletters, ActiveCampaign permet de construire de véritables parcours clients : segmentation comportementale, scoring des leads, envoi prédictif, SMS intégré, CRM complet. Et tout cela dès 15 $/mois, avec un essai gratuit de 14 jours et une migration offerte.</p>

<div style="background:#f0fdf4;border-radius:14px;padding:22px 26px;margin:28px 0;border:1px solid #bbf7d0;">
  <p style="font-size:15px;font-weight:700;color:#16a34a;margin-bottom:12px;">✅ Points forts</p>
  <ul style="margin:0;padding-left:20px;">
    <li>Taux de délivrabilité n°1 du marché : 94,2% (EmailTooltester 2025)</li>
    <li>Automatisation avancée (75+ déclencheurs) disponible dès le plan Starter</li>
    <li>250+ templates inclus sur tous les plans</li>
    <li>A/B testing sur tous les plans, y compris sur les automations entières</li>
    <li>SMS marketing intégré nativement dans la plateforme</li>
    <li>950+ intégrations natives (Shopify, Salesforce, WooCommerce...)</li>
    <li>Migration 1:1 gratuite depuis n'importe quelle plateforme</li>
    <li>Fonctionnalités IA : envoi prédictif, Brand Kit, Email Calendar</li>
    <li>CRM complet avec pipeline illimité sur tous les plans</li>
  </ul>
</div>

<div style="background:#fff1f2;border-radius:14px;padding:22px 26px;margin:28px 0;border:1px solid #fecdd3;">
  <p style="font-size:15px;font-weight:700;color:#e11d48;margin-bottom:12px;">❌ Points faibles</p>
  <ul style="margin:0;padding-left:20px;">
    <li>Pas de plan gratuit (essai 14 jours uniquement)</li>
    <li>Landing pages réservées au plan Plus et supérieur</li>
    <li>Moins d'intégrations que HubSpot (950 vs 1 600+)</li>
    <li>Reporting moins avancé que HubSpot sur les plans inférieurs</li>
    <li>Prix augmente selon le volume de contacts</li>
  </ul>
</div>

<h2>Pour qui est ActiveCampaign ?</h2>
<ul>
  <li><strong>PME et e-commerce</strong> qui veulent dépasser le simple envoi de newsletters</li>
  <li><strong>Équipes SaaS</strong> cherchant à automatiser l'onboarding et la rétention clients</li>
  <li><strong>Businesses B2B</strong> qui ont besoin d'un CRM couplé à l'automatisation email</li>
  <li><strong>Marketeurs</strong> qui migrent depuis HubSpot pour réduire les coûts sans sacrifier les fonctionnalités</li>
  <li><strong>Tout business</strong> pour qui la délivrabilité email est un enjeu critique</li>
</ul>

<h2>Alternatives à ActiveCampaign</h2>
<ul>
  <li><strong>Brevo</strong> — solution française avec plan gratuit généreux, moins puissante en automation avancée</li>
  <li><strong>HubSpot</strong> — plus complet sur le CMS et le reporting, mais beaucoup plus cher</li>
  <li><strong>Klaviyo</strong> — idéal pour l'e-commerce Shopify uniquement, sans CRM ni landing pages</li>
  <li><strong>Mailchimp</strong> — pour les besoins simples d'emailing, sans automation complexe</li>
</ul>
`

const outil = {
  slug: 'activecampaign',
  nom: 'ActiveCampaign',
  tagline: 'Marketing automation n°1 en délivrabilité — automatisations avancées dès 15 $/mois',
  description: 'Plateforme de marketing automation avancée combinant email marketing, CRM, SMS et IA. Taux de délivrabilité de 94,2% (#1 EmailTooltester 2025), 950+ intégrations, 250+ templates sur tous les plans.',
  pour_qui: 'PME, équipes SaaS, e-commerce et marketeurs B2B qui veulent une automatisation sérieuse — segmentation comportementale, scoring des leads, envoi prédictif — sans payer le prix fort d\'un HubSpot.',
  prix_mensuel: 15,
  note: 4.6,
  avantages: [
    'Taux de délivrabilité n°1 du marché : 94,2% (EmailTooltester 2025)',
    'Automatisation avancée dès le plan Starter (75+ déclencheurs, logique if/then)',
    '250+ templates email inclus sur tous les plans',
    'A/B testing disponible sur tous les plans, emails ET automations',
    'SMS marketing intégré nativement',
    '950+ intégrations natives (Shopify, Salesforce, WooCommerce...)',
    'Migration 1:1 complète et gratuite',
    'CRM intégré avec pipelines illimités',
  ],
  inconvenients: [
    'Pas de plan gratuit (essai 14 jours uniquement)',
    'Landing pages uniquement à partir du plan Plus',
    'Moins d\'intégrations que HubSpot (950 vs 1 600+)',
    'Reporting moins avancé que HubSpot sur les plans inférieurs',
    'Tarification augmente avec le volume de contacts',
  ],
  essai_gratuit: true,
  version_gratuite: false,
  categorie_id: 5,
  categorie_slug: 'automatisation',
  contenu,
}

const { error } = await supabase.from('outils').upsert(outil, { onConflict: 'slug' })
if (error) {
  console.error('Erreur :', error.message)
} else {
  console.log('✅ ActiveCampaign mis à jour avec succès !')
}
