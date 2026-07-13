import { ImageResponse } from 'next/og'
import { supabase } from '@/lib/supabase'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const catMeta: Record<string, { accent: string; bg: string; label: string }> = {
  'crm':               { accent: '#2563eb', bg: '#1e3a8a', label: 'CRM' },
  'facturation':       { accent: '#ea580c', bg: '#7c2d12', label: 'Facturation' },
  'gestion-de-projet': { accent: '#16a34a', bg: '#14532d', label: 'Gestion de projet' },
  'seo':               { accent: '#9333ea', bg: '#4c1d95', label: 'SEO' },
  'automatisation':    { accent: '#d97706', bg: '#78350f', label: 'Automatisation' },
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data } = await supabase
    .from('outils')
    .select('nom, categorie_slug, note, prix_mensuel, version_gratuite')
    .eq('slug', slug)
    .single()

  const nom = data?.nom ?? slug
  const cat = catMeta[data?.categorie_slug ?? ''] ?? { accent: '#2563eb', bg: '#1e3a5f', label: 'Logiciel SaaS' }
  const note = data?.note ? `${data.note}/5` : null
  const prix = data?.prix_mensuel === 0 || data?.version_gratuite
    ? 'Gratuit'
    : data?.prix_mensuel
      ? `Dès ${data.prix_mensuel}€/mois`
      : null

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, #0f172a 0%, ${cat.bg} 60%, #0f172a 100%)`,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Category badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ background: cat.accent, color: '#fff', fontSize: '15px', fontWeight: 700, padding: '8px 20px', borderRadius: '999px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            {cat.label}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '15px' }}>
            Avis indépendant
          </div>
        </div>

        {/* Tool name */}
        <div style={{ color: '#ffffff', fontSize: '72px', fontWeight: 800, lineHeight: 1.05, marginBottom: '32px' }}>
          {nom}
        </div>

        {/* Note + prix */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
          {note && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', padding: '12px 24px' }}>
              <span style={{ color: '#fbbf24', fontSize: '22px' }}>★</span>
              <span style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700 }}>{note}</span>
            </div>
          )}
          {prix && (
            <div style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', padding: '12px 24px', color: '#ffffff', fontSize: '20px', fontWeight: 600 }}>
              {prix}
            </div>
          )}
        </div>

        {/* Branding */}
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>🚀 TonMeilleurSaaS</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
          <span>ton-meilleur-saas.fr</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
