import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FAQ_ITEMS, FAQ_CATEGORIES, getFaqBySlug, getFaqByCategorie } from '@/lib/faq'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ categorie: string; slug: string }>
}

export async function generateStaticParams() {
  return FAQ_ITEMS.map(item => ({
    categorie: item.categorie,
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorie, slug } = await params
  const item = getFaqBySlug(categorie, slug)
  if (!item) return {}
  return {
    title: `${item.question} | FAQ TonMeilleurSaaS`,
    description: `Réponse complète : ${item.question}. Tout savoir sur les logiciels ${item.categorieLabel} pour les entreprises françaises.`,
  }
}

const catColors: Record<string, { bg: string; border: string; text: string }> = {
  'crm':               { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8' },
  'facturation':       { bg: '#f0fdf4', border: '#bbf7d0', text: '#15803d' },
  'gestion-de-projet': { bg: '#fdf4ff', border: '#e9d5ff', text: '#7e22ce' },
  'seo':               { bg: '#fff7ed', border: '#fed7aa', text: '#c2410c' },
  'automatisation':    { bg: '#fefce8', border: '#fde68a', text: '#92400e' },
}

const catEmojis: Record<string, string> = {
  'crm': '🤝',
  'facturation': '📄',
  'gestion-de-projet': '📋',
  'seo': '🔍',
  'automatisation': '⚡',
}

export default async function FaqItemPage({ params }: Props) {
  const { categorie, slug } = await params
  const item = getFaqBySlug(categorie, slug)
  if (!item) notFound()

  const siblings = getFaqByCategorie(categorie).filter(q => q.slug !== slug)
  const c = catColors[categorie] ?? { bg: '#f8fafc', border: '#e2e8f0', text: '#475569' }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.reponse.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
      },
    }],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#64748b', marginBottom: '32px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Accueil</Link>
          <span>›</span>
          <Link href="/faq" style={{ color: '#64748b', textDecoration: 'none' }}>FAQ</Link>
          <span>›</span>
          <Link href={`/faq#${categorie}`} style={{ color: c.text, textDecoration: 'none', fontWeight: 600 }}>
            {catEmojis[categorie]} {item.categorieLabel}
          </Link>
        </nav>

        {/* Catégorie badge */}
        <div style={{ marginBottom: '20px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: c.bg, border: `1px solid ${c.border}`, color: c.text, borderRadius: '999px', padding: '5px 14px', fontSize: '13px', fontWeight: 600 }}>
            {catEmojis[categorie]} {item.categorieLabel}
          </span>
        </div>

        {/* Question */}
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '32px', lineHeight: 1.3 }}>
          {item.question}
        </h1>

        {/* Réponse */}
        <div
          style={{ fontSize: '16px', lineHeight: 1.8, color: '#334155' }}
          dangerouslySetInnerHTML={{ __html: item.reponse }}
        />

        {/* Retour FAQ */}
        <div style={{ marginTop: '48px', padding: '20px 24px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <Link href="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#475569', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
            ← Retour à toutes les questions FAQ
          </Link>
        </div>

        {/* Questions liées (même catégorie) */}
        {siblings.length > 0 && (
          <section style={{ marginTop: '56px' }}>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {catEmojis[categorie]} Autres questions sur {FAQ_CATEGORIES[categorie]}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {siblings.map(q => (
                <Link
                  key={q.slug}
                  href={`/faq/${categorie}/${q.slug}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '14px 18px',
                    background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px',
                    textDecoration: 'none', color: '#0f172a',
                    fontSize: '14px', fontWeight: 500, lineHeight: 1.4,
                  }}
                  className="faq-sibling"
                >
                  <span style={{ color: c.text, fontSize: '16px', flexShrink: 0 }}>›</span>
                  {q.question}
                </Link>
              ))}
            </div>
          </section>
        )}

        <style>{`
          .faq-sibling:hover { border-color: #94a3b8; }
          main ul { padding-left: 1.5rem; margin: 16px 0; }
          main ol { padding-left: 1.5rem; margin: 16px 0; }
          main li { margin-bottom: 8px; }
          main p { margin-bottom: 16px; }
          main strong { color: #0f172a; }
        `}</style>
      </main>
    </>
  )
}
