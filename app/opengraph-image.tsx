import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'TonMeilleurSaaS — Comparateur de logiciels SaaS pour TPE et PME'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #312e81 100%)',
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
        <div style={{ color: '#93c5fd', fontSize: '18px', fontWeight: 700, marginBottom: '28px', letterSpacing: '3px', textTransform: 'uppercase' }}>
          🚀 TonMeilleurSaaS
        </div>
        <div style={{ color: '#ffffff', fontSize: '64px', fontWeight: 800, lineHeight: 1.05, marginBottom: '28px', maxWidth: '950px' }}>
          Comparez les meilleurs logiciels pour TPE et PME françaises
        </div>
        <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '26px', fontWeight: 400, marginBottom: '40px' }}>
          CRM · Facturation · SEO · Automatisation
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          {['50+ outils comparés', 'Avis indépendants', 'Mis à jour 2026'].map((tag) => (
            <div key={tag} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '8px 20px', color: 'rgba(255,255,255,0.8)', fontSize: '16px', fontWeight: 500 }}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
