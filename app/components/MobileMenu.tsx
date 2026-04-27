'use client'
import { useState } from 'react'
import Link from 'next/link'

const categories = [
  { label: 'CRM', slug: 'crm' },
  { label: 'Facturation', slug: 'facturation' },
  { label: 'Gestion de projet', slug: 'gestion-de-projet' },
  { label: 'SEO', slug: 'seo' },
  { label: 'Automatisation', slug: 'automatisation' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px' }}
      >
        <span style={{ display: 'block', width: '18px', height: '2px', background: open ? 'transparent' : '#0f172a', transition: 'all 0.2s' }} />
        <span style={{ display: 'block', width: '18px', height: '2px', background: '#0f172a', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
        <span style={{ display: 'block', width: '18px', height: '2px', background: '#0f172a', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
      </button>

      {open && (
        <div style={{ position: 'fixed', top: '68px', left: 0, right: 0, background: '#fff', borderBottom: '1px solid #e2e8f0', zIndex: 99, padding: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/categorie/${cat.slug}`} onClick={() => setOpen(false)} style={{ textDecoration: 'none', padding: '12px 16px', borderRadius: '10px', fontSize: '15px', fontWeight: 500, color: '#0f172a', background: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {cat.label}
                <span style={{ color: '#2563eb' }}>→</span>
              </Link>
            ))}
            <div style={{ borderTop: '1px solid #f1f5f9', marginTop: '8px', paddingTop: '12px', display: 'flex', gap: '8px' }}>
              <Link href="/blog" onClick={() => setOpen(false)} style={{ flex: 1, textDecoration: 'none', padding: '10px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, color: '#0f172a', textAlign: 'center', border: '1px solid #e2e8f0', background: '#f8fafc' }}>
                📝 Blog
              </Link>
              <Link href="/boutique" onClick={() => setOpen(false)} style={{ flex: 1, textDecoration: 'none', padding: '10px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, color: '#d97706', textAlign: 'center', border: '1px solid #fde68a', background: '#fffbeb' }}>
                🛍️ Boutique
              </Link>
              <Link href="/calculateur-saas" onClick={() => setOpen(false)} style={{ flex: 1, textDecoration: 'none', padding: '10px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, color: '#2563eb', textAlign: 'center', border: '1px solid #bfdbfe', background: '#eff6ff' }}>
                🧮 Calcul
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}