'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Props {
  nom: string
  lienAffilie: string
  accent: string
  catSlug: string
}

export default function MobileToolHeaderCTA({ nom, lienAffilie, accent, catSlug }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .mobile-tool-header { display: none; }
        @media (max-width: 768px) {
          .mobile-tool-header {
            display: flex;
            position: fixed;
            top: 0; left: 0; right: 0;
            height: 68px;
            z-index: 101;
            background: rgba(255,255,255,0.97);
            border-bottom: 1px solid #e2e8f0;
            backdrop-filter: blur(16px);
            align-items: center;
            padding: 0 16px;
            gap: 10px;
            transform: translateY(-100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          }
          .mobile-tool-header.is-visible { transform: translateY(0); }
        }
      `}</style>
      <div className={`mobile-tool-header${visible ? ' is-visible' : ''}`}>
        <Link href={`/categorie/${catSlug}`} style={{ color: '#94a3b8', fontSize: '20px', textDecoration: 'none', flexShrink: 0, lineHeight: 1 }}>
          ←
        </Link>
        <span style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
          {nom}
        </span>
        <a
          href={lienAffilie}
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{
            background: `linear-gradient(135deg, ${accent}, ${accent}bb)`,
            color: '#fff',
            textDecoration: 'none',
            padding: '9px 16px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            flexShrink: 0,
            boxShadow: `0 3px 12px ${accent}44`,
          }}
        >
          Essayer →
        </a>
      </div>
    </>
  )
}
