'use client'
import { useState } from 'react'
import Link from 'next/link'

const mainLinks = [
  { label: '📂 Toutes les catégories', href: '/categorie', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  { label: '📝 Blog', href: '/blog', color: '#0f172a', bg: '#f8fafc', border: '#e2e8f0' },
  { label: '🎯 Quiz — quel outil pour vous ?', href: '/quiz', color: '#7c3aed', bg: '#fdf4ff', border: '#e9d5ff' },
  { label: '🧮 Calculateur SaaS', href: '/calculateur-saas', color: '#0f172a', bg: '#f8fafc', border: '#e2e8f0' },
  { label: '🛍️ Boutique premium', href: '/boutique', color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
  { label: '🙋 À propos', href: '/a-propos', color: '#0f172a', bg: '#f8fafc', border: '#e2e8f0' },
  { label: '📬 Contact', href: '/contact', color: '#0f172a', bg: '#f8fafc', border: '#e2e8f0' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px' }}
      >
        <span style={{ display: 'block', width: '18px', height: '2px', background: open ? 'transparent' : '#0f172a', transition: 'all 0.2s' }} />
        <span style={{ display: 'block', width: '18px', height: '2px', background: '#0f172a', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
        <span style={{ display: 'block', width: '18px', height: '2px', background: '#0f172a', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
      </button>

      {open && (
        <div style={{ position: 'fixed', top: '68px', left: 0, right: 0, background: '#fff', borderBottom: '1px solid #e2e8f0', zIndex: 99, padding: '16px 20px 24px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', maxHeight: 'calc(100vh - 68px)', overflowY: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ textDecoration: 'none', padding: '13px 16px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, color: l.color, background: l.bg, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${l.border}` }}
              >
                {l.label}
                <span style={{ color: l.color, opacity: 0.6 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
