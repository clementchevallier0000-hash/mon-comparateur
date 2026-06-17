'use client'
import { useState, useEffect } from 'react'

interface Props {
  nom: string
  logoSrc: string | null
  prixMensuel: number
  essaiGratuit: boolean
  lienAffilie: string
  accent: string
}

export default function StickyCTA({ nom, logoSrc, prixMensuel, essaiGratuit, lienAffilie, accent }: Props) {
  const [visible, setVisible] = useState(false)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 380)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible || closed || !lienAffilie) return null

  const isFree = prixMensuel === 0

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: '#fff',
      borderTop: `3px solid ${accent}`,
      boxShadow: '0 -4px 24px rgba(0,0,0,0.14)',
      padding: '12px 20px',
      animation: 'slideUp 0.25s ease',
    }}>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'space-between' }}>

        {/* Gauche : logo + nom + prix */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
          {logoSrc && (
            <img src={logoSrc} alt={nom} width={32} height={32} style={{ borderRadius: '8px', objectFit: 'contain', flexShrink: 0 }} />
          )}
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px', whiteSpace: 'nowrap' }}>{nom}</div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>{isFree ? 'Gratuit' : `Dès ${prixMensuel}€/mois`}</div>
          </div>
        </div>

        {/* Droite : CTA + fermer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <div style={{ textAlign: 'right' }}>
            <a
              href={lienAffilie}
              target="_blank"
              rel="noopener noreferrer nofollow"
              style={{
                display: 'block',
                background: accent,
                color: '#fff',
                borderRadius: '10px',
                padding: '10px 22px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
              }}
            >
              {essaiGratuit ? 'Essai gratuit →' : `Essayer ${nom} →`}
            </a>
            {essaiGratuit && (
              <span style={{ fontSize: '10px', color: '#16a34a', fontWeight: 600 }}>
                ✓ Gratuit · Sans CB · Sans engagement
              </span>
            )}
          </div>
          <button
            onClick={() => setClosed(true)}
            aria-label="Fermer"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: '20px', padding: '4px', lineHeight: 1, flexShrink: 0 }}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
