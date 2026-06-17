// Script : met à jour nb_clients dans Supabase avec les chiffres officiels des sites
// Sources : pages d'accueil, rapports financiers SEC, pages "À propos" (vérifiés juin 2026)
// Prérequis : ALTER TABLE outils ADD COLUMN nb_clients text;
// Usage : SUPABASE_URL=... SUPABASE_KEY=... node update-nb-clients.mjs

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const DATA = {
  // CRM
  'pipedrive':    '+100 000 entreprises',   // pipedrive.com/fr — "rejoignez plus de 100 000 entreprises"
  'hubspot':      '+278 000 clients',        // SEC 10-Q HubSpot Q3 2025
  'folk':         '+5 000 entreprises',      // folk.app — "trusted by 5000+ companies"
  'axonaut':      '+189 000 utilisateurs',   // axonaut.com — chiffre homepage
  'sellsy':       '+50 000 utilisateurs',    // go.sellsy.com — chiffre homepage
  'karlia':       '+1 500 clients',          // karlia.co — chiffre homepage
  'monday-crm':   '+250 000 clients',        // SEC monday.com FY2025

  // Gestion de projet
  'monday':       '+250 000 clients',        // SEC monday.com FY2025

  // Facturation / Banque
  'qonto':        '+600 000 clients',        // qonto.com/fr — "+600 000 clients utilisent Qonto"

  // Automatisation & Marketing
  'make':         '+350 000 utilisateurs',   // make.com — statistiques tierces vérifiées 2025
  'zapier':       '+3 millions d\'entreprises', // zapier.com — "trusted by 3 million+ businesses"
  'brevo':        '+500 000 entreprises',    // brevo.com — chiffre benchmark 2025
  'n8n':          '+200 000 membres',        // n8n.io — "200,000+ community members"

  // Notes / Productivité
  'notion':       '+100 millions d\'utilisateurs', // notion.com/fr-fr — chiffre homepage

  // SEO
  'semrush':      '+100 000 clients',        // rapports financiers Semrush 2025 (~117K)
  'ahrefs':       '+49 000 clients',         // statistiques vérifiées mars 2025
}

async function run() {
  let ok = 0
  let skip = 0

  for (const [slug, nb_clients] of Object.entries(DATA)) {
    const { error } = await supabase
      .from('outils')
      .update({ nb_clients })
      .eq('slug', slug)

    if (error) {
      console.error(`❌ ${slug}:`, error.message)
    } else {
      console.log(`✅ ${slug} → ${nb_clients}`)
      ok++
    }
  }

  console.log(`\n${ok} outils mis à jour, ${skip} ignorés`)
}

run()
