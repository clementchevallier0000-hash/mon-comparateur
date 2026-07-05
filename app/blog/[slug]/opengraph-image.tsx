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
    .from('articles')
    .select('titre, categorie_slug, temps_lecture')
    .eq('slug', slug)
    .single()

  const titre = data?.titre ?? 'Guide TonMeilleurSaaS'
  const cat = catMeta[data?.categorie_slug ?? ''] ?? { accent: '#2563eb', bg: '#1e3a5f', label: 'Guide' }
  const displayTitre = titre.length > 65 ? titre.substring(0, 65) + '…' : titre

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px' }}>
          <div style={{ background: cat.accent, color: '#fff', fontSize: '15px', fontWeight: 700, padding: '8px 20px', borderRadius: '999px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            {cat.label}
          </div>
          {data?.temps_lecture && (
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px' }}>
              {data.temps_lecture} min de lecture
            </div>
          )}
        </div>
        <div style={{ color: '#ffffff', fontSize: '56px', fontWeight: 800, lineHeight: 1.1, marginBottom: '40px', maxWidth: '980px' }}>
          {displayTitre}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '20px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>🚀 TonMeilleurSaaS</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
          <span>ton-meilleur-saas.fr</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
