'use client'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const target = document.getElementById('main-cta-btn')
    if (target) {
      const observer = new IntersectionObserver(
        ([entry]) => setVisible(!entry.isIntersecting),
        { threshold: 0 }
      )
      observer.observe(target)
      return () => observer.disconnect()
    } else {
      const check = () => setVisible(window.scrollY > 380)
      check()
      window.addEventListener('scroll', check, { passive: true })
      return () => window.removeEventListener('scroll', check)
    }
  }, [])

  if (!mounted || !visible || closed || !lienAffilie) return null

  const isFree = prixMensuel === 0

  return createPortal(
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: '#fff',
      borderTop: `3px solid ${accent}`,
      boxShadow: '0 -4px 24px rgba(0,0,0,0.14)',
      padding: '12px 20px',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @keyframes stickyCTAUp {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
        .sticky-cta-inner { animation: stickyCTAUp 0.25s ease; }
      `}</style>
      <div className="sticky-cta-inner" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'space-between' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
          {logoSrc && (
            <img src={logoSrc} alt={nom} width={32} height={32} style={{ borderRadius: '8px', objectFit: 'contain', flexShrink: 0 }} />
          )}
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px', whiteSpace: 'nowrap' }}>{nom}</div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>{isFree ? 'Gratuit' : `Dès ${prixMensuel}€/mois`}</div>
          </div>
        </div>

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
    </div>,
    document.body
  )
}
