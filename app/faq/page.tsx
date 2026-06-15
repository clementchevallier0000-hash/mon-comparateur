import Link from 'next/link'
import { FAQ_ITEMS, FAQ_CATEGORIES } from '@/lib/faq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Questions fréquentes sur les logiciels SaaS | TonMeilleurSaaS',
  description: 'Retrouvez toutes les réponses à vos questions sur les CRM, logiciels de facturation, gestion de projet, SEO et automatisation. 100 questions expertisées.',
}

const catColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  'crm':               { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8', dot: '#3b82f6' },
  'facturation':       { bg: '#f0fdf4', border: '#bbf7d0', text: '#15803d', dot: '#22c55e' },
  'gestion-de-projet': { bg: '#fdf4ff', border: '#e9d5ff', text: '#7e22ce', dot: '#a855f7' },
  'seo':               { bg: '#fff7ed', border: '#fed7aa', text: '#c2410c', dot: '#f97316' },
  'automatisation':    { bg: '#fefce8', border: '#fde68a', text: '#92400e', dot: '#f59e0b' },
}

const catEmojis: Record<string, string> = {
  'crm': '🤝',
  'facturation': '📄',
  'gestion-de-projet': '📋',
  'seo': '🔍',
  'automatisation': '⚡',
}

export default function FaqPage() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px 80px' }}>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', color: '#15803d', fontWeight: 600, marginBottom: '20px' }}>
          <span>✓</span> 100 questions · 5 catégories
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
          Questions fréquentes sur les logiciels SaaS
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#475569', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
          Tout ce que vous devez savoir sur les CRM, la facturation, la gestion de projet, le SEO et l'automatisation — répondu clairement et sans jargon.
        </p>
      </div>

      {/* Navigation rapide */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '56px' }}>
        {Object.entries(FAQ_CATEGORIES).map(([slug, label]) => {
          const c = catColors[slug]
          return (
            <a key={slug} href={`#${slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: c.bg, border: `1px solid ${c.border}`, color: c.text, borderRadius: '999px', padding: '8px 18px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
              {catEmojis[slug]} {label}
            </a>
          )
        })}
      </div>

      {/* Sections par catégorie */}
      {Object.entries(FAQ_CATEGORIES).map(([catSlug, catLabel]) => {
        const items = FAQ_ITEMS.filter(q => q.categorie === catSlug)
        const c = catColors[catSlug]
        return (
          <section key={catSlug} id={catSlug} style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px', paddingBottom: '16px', borderBottom: `2px solid ${c.border}` }}>
              <span style={{ fontSize: '28px' }}>{catEmojis[catSlug]}</span>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{catLabel}</h2>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>{items.length} questions</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {items.map((item, i) => (
                <Link
                  key={item.slug}
                  href={`/faq/${catSlug}/${item.slug}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px 20px',
                    background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px',
                    textDecoration: 'none', color: 'inherit',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                  className="faq-link"
                >
                  <span style={{ fontSize: '12px', fontWeight: 700, color: c.text, background: c.bg, border: `1px solid ${c.border}`, borderRadius: '6px', padding: '2px 8px', minWidth: '32px', textAlign: 'center', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: '15px', color: '#0f172a', fontWeight: 500, lineHeight: 1.4 }}>
                    {item.question}
                  </span>
                  <span style={{ marginLeft: 'auto', color: '#94a3b8', fontSize: '18px', flexShrink: 0 }}>›</span>
                </Link>
              ))}
            </div>
          </section>
        )
      })}

      <style>{`
        .faq-link:hover { border-color: #94a3b8; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
      `}</style>
    </main>
  )
}
