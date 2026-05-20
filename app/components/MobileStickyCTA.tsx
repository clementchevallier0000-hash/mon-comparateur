'use client'
import { useState, useEffect } from 'react'

interface Props {
  nom: string
  lienAffilie: string
  accent: string
  prix: string
}

export default function MobileStickyCTA({ nom, lienAffilie, accent, prix }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      // Apparaît après 300px, disparaît dans les 300 derniers px (footer)
      setVisible(scrollY > 300 && scrollY < docHeight - winHeight - 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .mobile-sticky-cta {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-sticky-cta {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 200;
            padding: 12px 16px;
            padding-bottom: calc(12px + env(safe-area-inset-bottom));
            background: rgba(255,255,255,0.97);
            border-top: 1px solid #e2e8f0;
            backdrop-filter: blur(12px);
            align-items: center;
            gap: 12px;
            transform: translateY(100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 -4px 24px rgba(0,0,0,0.08);
          }
          .mobile-sticky-cta.is-visible {
            transform: translateY(0);
          }
        }
      `}</style>
      <div className={`mobile-sticky-cta${visible ? ' is-visible' : ''}`}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{nom}</div>
          <div style={{ fontSize: '11px', color: '#64748b' }}>{prix}</div>
        </div>
        <a
          href={lienAffilie}
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{
            background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
            color: '#fff',
            textDecoration: 'none',
            padding: '12px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            flexShrink: 0,
            boxShadow: `0 4px 16px ${accent}44`,
          }}
        >
          Essayer gratuitement →
        </a>
      </div>
    </>
  )
}
