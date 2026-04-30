/**
 * Populate screenshot_url for all tools using Microlink API (free tier).
 *
 * BEFORE running:
 * 1. Go to Supabase SQL Editor and run:
 *    ALTER TABLE outils ADD COLUMN IF NOT EXISTS screenshot_url text;
 * 2. Then: node scripts/populate-screenshots.mjs
 */

import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

function getRootUrl(url) {
  try {
    const u = new URL(url)
    return `${u.protocol}//${u.hostname}`
  } catch {
    return url
  }
}

async function getScreenshot(url) {
  const root = getRootUrl(url)
  try {
    const res = await fetch(
      `https://api.microlink.io?url=${encodeURIComponent(root)}&screenshot=true&meta=false`
    )
    const data = await res.json()
    return data?.data?.screenshot?.url ?? null
  } catch {
    return null
  }
}

const { data: outils, error } = await supabase
  .from('outils')
  .select('id, nom, slug, lien_affilie, screenshot_url')

if (error) { console.error('❌ Erreur lecture DB:', error.message); process.exit(1) }

console.log(`📸 ${outils.length} outils à traiter…\n`)

for (const outil of outils) {
  if (outil.screenshot_url) {
    console.log(`⏭  ${outil.nom} — déjà renseigné`)
    continue
  }
  if (!outil.lien_affilie) {
    console.log(`⚠️  ${outil.nom} — pas de lien affilié`)
    continue
  }

  const screenshotUrl = await getScreenshot(outil.lien_affilie)
  if (screenshotUrl) {
    const { error: upErr } = await supabase
      .from('outils')
      .update({ screenshot_url: screenshotUrl })
      .eq('id', outil.id)
    if (upErr) console.error(`❌ ${outil.nom}:`, upErr.message)
    else console.log(`✅ ${outil.nom}`)
  } else {
    console.log(`⚠️  ${outil.nom} — screenshot non trouvé`)
  }

  // ~1 req/s pour rester dans le free tier Microlink
  await new Promise(r => setTimeout(r, 1100))
}

console.log('\n🎉 Terminé !')
