import Link from 'next/link'
import SiteHeader from '@/app/components/SiteHeader'
import SiteFooter from '@/app/components/SiteFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page introuvable — TonMeilleurSaaS',
}

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'DM Sans', Arial, sans-serif", display: 'flex', flexDirection: 'column' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Fraunces:wght@700;800;900&display=swap" rel="stylesheet" />
      <SiteHeader />

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '520px' }}>
          <p style={{ fontSize: '80px', marginBottom: '8px', lineHeight: 1 }}>🔍</p>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#0f172a', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '16px' }}>
            Page introuvable
          </h1>
          <p style={{ fontSize: '17px', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
            Cette page n'existe pas ou a été déplacée. Pas de panique — voici de quoi rebondir.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px', textAlign: 'left' }}>
            {[
              { href: '/categorie/crm', emoji: '🤝', label: 'Meilleur CRM' },
              { href: '/categorie/facturation', emoji: '💶', label: 'Facturation' },
              { href: '/categorie/seo', emoji: '🔍', label: 'Outils SEO' },
              { href: '/categorie/automatisation', emoji: '⚡', label: 'Automatisation' },
            ].map(c => (
              <Link key={c.href} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>
                <span>{c.emoji}</span>{c.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ display: 'inline-block', background: '#0f172a', color: '#fff', textDecoration: 'none', padding: '13px 24px', borderRadius: '12px', fontSize: '14px', fontWeight: 700 }}>
              ← Retour à l'accueil
            </Link>
            <Link href="/quiz" style={{ display: 'inline-block', background: '#eff6ff', color: '#2563eb', textDecoration: 'none', padding: '13px 24px', borderRadius: '12px', fontSize: '14px', fontWeight: 700, border: '1px solid #bfdbfe' }}>
              🎯 Faire le quiz
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
