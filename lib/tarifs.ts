export interface Plan {
  nom: string
  mensuel?: number | null
  annuel?: number | null       // équivalent mensuel si facturé annuellement
  annuel_total?: number        // total annuel (optionnel)
  mise_en_avant?: boolean
  gratuit?: boolean
  description?: string         // info complémentaire (ex: "2 500 exécutions/mois")
}

export interface Tarifs {
  plans: Plan[]
  note?: string
  devise?: string              // '€' par défaut, '$' pour SimilarWeb/Make
}

export const TARIFS: Record<string, Tarifs> = {

  axonaut: {
    plans: [
      { nom: '1 mois',          mensuel: 97,                          description: 'Sans engagement' },
      { nom: '1 an',            mensuel: 58,  annuel_total: 698,      description: 'Payé en 1 fois · -40%' },
      { nom: '2 ans',           mensuel: 49,  annuel_total: 1164,     description: 'Payé en 1 fois · -50%' },
      { nom: '3 ans',           mensuel: 39,  annuel_total: 1397,     description: 'Payé en 1 fois · -60%', mise_en_avant: true },
    ],
    note: 'Prix HT · 1 utilisateur inclus · tarifs dégressifs pour plusieurs utilisateurs',
  },

  pipedrive: {
    plans: [
      { nom: 'Lite',    mensuel: 24, annuel: 14 },
      { nom: 'Growth',  mensuel: 49, annuel: 39, mise_en_avant: true },
      { nom: 'Premium', mensuel: 79, annuel: 59 },
      { nom: 'Ultimate',mensuel: 99, annuel: 79 },
    ],
  },

  monday: {
    plans: [
      { nom: 'Basique',  mensuel: 12, annuel:  9 },
      { nom: 'Standard', mensuel: 14, annuel: 12, mise_en_avant: true },
      { nom: 'Pro',      mensuel: 24, annuel: 19 },
    ],
    note: 'Prix par utilisateur/mois · minimum 3 utilisateurs',
  },

  'monday-crm': {
    plans: [
      { nom: 'Basique',  mensuel: 12, annuel:  9 },
      { nom: 'Standard', mensuel: 14, annuel: 12, mise_en_avant: true },
      { nom: 'Pro',      mensuel: 24, annuel: 19 },
    ],
    note: 'Prix par utilisateur/mois · minimum 3 utilisateurs',
  },

  folk: {
    plans: [
      { nom: 'Standard',     mensuel: 27, annuel: 21 },
      { nom: 'Premium',      mensuel: 53, annuel: 43, mise_en_avant: true },
      { nom: 'Personnalisé', mensuel: 83, annuel: 67, description: 'À partir de' },
    ],
    note: 'Prix par membre/mois',
  },

  'zoho-crm': {
    plans: [
      { nom: 'Standard',     mensuel: 20, annuel: 14 },
      { nom: 'Professional', mensuel: 35, annuel: 23, mise_en_avant: true },
      { nom: 'Enterprise',   mensuel: 50, annuel: 40 },
      { nom: 'Ultimate',     mensuel: 65, annuel: 52 },
    ],
    note: 'Prix par utilisateur/mois',
  },

  capsule: {
    plans: [
      { nom: 'Starter',  mensuel: 18, annuel: 15 },
      { nom: 'Growth',   mensuel: 38, annuel: 28, mise_en_avant: true },
      { nom: 'Advanced', mensuel: 60, annuel: 49 },
    ],
    note: 'Prix par utilisateur/mois',
  },

  karlia: {
    plans: [
      { nom: 'Pro',        mensuel: 29 },
      { nom: 'Entreprise', mensuel: 49, mise_en_avant: true },
      { nom: 'Privilège',  mensuel: 69 },
    ],
    note: 'Prix HT par utilisateur/mois · sans engagement',
  },

  freebe: {
    plans: [
      { nom: 'Micro-Entreprise', mensuel: 15,  description: '12,50€ HT · trimestriel ~11€ · annuel ~10€' },
      { nom: 'EI',               mensuel: 30,  description: '25€ HT/mois' },
      { nom: 'SASU / SARL / SAS',mensuel: 20,  description: '16€ HT/mois' },
      { nom: 'Multi-Membres',    mensuel: 54,  description: '45€ HT/mois', mise_en_avant: true },
    ],
    note: 'Prix TTC · tarifs selon statut juridique',
  },

  indy: {
    plans: [
      { nom: 'Essentiel', gratuit: true,                              description: 'Compta automatisée, compte pro, e-facture' },
      { nom: 'Plus',      mensuel:  9,   annuel_total: 108,           description: 'Facturation avancée, accompagnement perso', mise_en_avant: true },
      { nom: 'Premium',   mensuel: 12,   annuel_total: 144,           description: 'Tout Plus + décla TVA, aide décla revenus' },
    ],
    note: 'Prix HT · tarifs auto-entrepreneur (micro) · autres statuts : tarifs différents',
  },

  tiime: {
    plans: [
      { nom: 'Free',     gratuit: true },
      { nom: 'Smart',    mensuel: 18,  annuel_total: 216,  mise_en_avant: true },
      { nom: 'Business', mensuel: 25,  annuel_total: 300 },
    ],
    note: 'Prix HT · 0–1 employé · tarifs plus élevés au-delà de 2 employés',
  },

  qonto: {
    plans: [
      { nom: 'Basic',    mensuel:  9, annuel_total: 108,  description: 'IBAN FR, virements SEPA, e-facture' },
      { nom: 'Smart',    mensuel: 19, annuel_total: 228,  description: 'Rémunération 4%, 100 virements/mois', mise_en_avant: true },
      { nom: 'Premium',  mensuel: 39, annuel_total: 468,  description: '200 virements/mois, support prioritaire' },
    ],
    note: 'Prix HT · plans Solo (indépendants & micro) · plans Team à partir de 49€/mois',
  },

  henrri: {
    plans: [
      { nom: 'Pro',    gratuit: true },
      { nom: 'Expert', mensuel: 19, annuel: 17 },
      { nom: 'Smart',  mensuel: 29, annuel: 25, mise_en_avant: true },
      { nom: 'VIP',    mensuel: 59, annuel: 49 },
    ],
  },

  similarweb: {
    plans: [
      { nom: 'Free Trial',               gratuit: true,               description: 'Aperçu de base du trafic' },
      { nom: 'AEO Intelligence',         mensuel:  99,                description: '150 invites IA, analyse sentiment' },
      { nom: 'Competitive Intelligence', mensuel: 125, mise_en_avant: true, description: 'Trafic, démographie, canaux marketing' },
      { nom: 'CI + SEO & AEO',          mensuel: 335,                description: 'Tout CI + SEO organique + audit' },
    ],
    note: 'Prix en USD · 3 mois de données historiques minimum',
    devise: '$',
  },

  make: {
    plans: [
      { nom: 'Free',       gratuit: true,        description: '1 000 opérations/mois' },
      { nom: 'Core',       mensuel:  9,           description: '10 000 opérations/mois' },
      { nom: 'Pro',        mensuel: 16, mise_en_avant: true, description: '10 000 ops · exécution prioritaire' },
      { nom: 'Teams',      mensuel: 29,           description: '10 000 ops · gestion équipes' },
    ],
    note: 'Prix en USD',
    devise: '$',
  },

  n8n: {
    plans: [
      { nom: 'Starter',    mensuel:  20, annuel_total: 240,   description: '2 500 exécutions/mois · cloud' },
      { nom: 'Pro',        mensuel:  50, annuel_total: 600,   description: '10 000 exécutions/mois · cloud', mise_en_avant: true },
      { nom: 'Business',   mensuel: 667, annuel_total: 8004,  description: '40 000 exécutions/mois · self-hosted' },
    ],
    note: 'Version self-hosted open source disponible gratuitement',
  },

  brevo: {
    plans: [
      { nom: 'Gratuit',    gratuit: true,          description: '300 emails/jour' },
      { nom: 'Starter',    mensuel:  7, annuel:  6, description: '5 000+ emails/mois' },
      { nom: 'Standard',   mensuel: 15, annuel: 14, description: '5 000+ emails/mois · automatisations', mise_en_avant: true },
      { nom: 'Pro',        mensuel: 499,            description: '150 000+ emails · fonctions avancées' },
    ],
    note: 'Tarifs selon volume d\'emails · sans logo Brevo : +9€/mois',
  },

  activecampaign: {
    plans: [
      { nom: 'Starter',    annuel: 15,  description: '1 utilisateur' },
      { nom: 'Plus',       annuel: 49,  description: '1 utilisateur · CRM intégré', mise_en_avant: true },
      { nom: 'Pro',        annuel: 79,  description: '3 utilisateurs · automatisation avancée' },
      { nom: 'Enterprise', annuel: 145, description: '5 utilisateurs · support dédié' },
    ],
    note: 'Prix HT en facturation annuelle · base 1 000 contacts',
  },
}
