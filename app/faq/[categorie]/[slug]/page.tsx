import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FAQ_ITEMS, FAQ_CATEGORIES, getFaqBySlug, getFaqByCategorie } from '@/lib/faq'
import SiteHeader from '@/app/components/SiteHeader'
import SiteFooter from '@/app/components/SiteFooter'
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

const catDescriptions: Record<string, string> = {
  'crm': 'Comparez les meilleurs CRM pour gérer vos clients et booster vos ventes.',
  'facturation': 'Trouvez le logiciel de facturation adapté à votre statut et votre activité.',
  'gestion-de-projet': 'Comparez les outils de gestion de projet pour organiser votre équipe.',
  'seo': 'Découvrez les meilleurs outils SEO pour améliorer votre référencement.',
  'automatisation': 'Comparez les plateformes d\'automatisation pour gagner du temps.',
}

// Liens vers articles de blog pertinents selon la FAQ concernée
const relatedArticles: Record<string, { titre: string; slug: string }> = {
  'facturation-auto-entrepreneur':     { titre: 'Meilleur logiciel de facturation pour auto-entrepreneur en 2026', slug: 'meilleur-logiciel-facturation-auto-entrepreneur-2026' },
  'logiciel-facturation-gratuit':      { titre: 'Comment choisir son logiciel de facturation en 2026', slug: 'comment-choisir-logiciel-facturation-2026' },
  'make-vs-n8n-comparaison':           { titre: 'Make vs n8n en 2026 : quel outil choisir ?', slug: 'make-vs-n8n-2026' },
  'automatisation-email-marketing':    { titre: 'Marketing automation pour débutants : par où commencer ?', slug: 'marketing-automation-debutants-2026' },
  'automatiser-relances-clients':      { titre: 'Comment automatiser ses relances clients en 2026', slug: 'automatiser-relances-clients-2026' },
  'crm-automatisation-relances':       { titre: 'Comment automatiser ses relances clients en 2026', slug: 'automatiser-relances-clients-2026' },
  'crm-freelance-independant':         { titre: 'Meilleur CRM pour freelance en 2026', slug: 'meilleur-crm-freelance-2026' },
  'gestion-projet-freelance':          { titre: 'Meilleur logiciel de gestion de projet pour freelance en 2026', slug: 'meilleur-gestion-projet-freelance-2026' },
  'crm-b2b-vs-b2c':                    { titre: 'HubSpot vs Zoho CRM en 2026 : lequel choisir ?', slug: 'hubspot-vs-zoho-crm-2026' },
  'crm-reporting-ventes':              { titre: 'Les 10 fonctionnalités indispensables dans un CRM pour PME', slug: '10-fonctionnalites-indispensables-crm-pme' },
  'automatisation-email-rgpd':         { titre: 'RGPD et email marketing en 2026 : les règles à respecter', slug: 'rgpd-email-marketing-2026' },
  'seo-vs-sea-difference':             { titre: 'Marketing automation pour débutants : par où commencer ?', slug: 'marketing-automation-debutants-2026' },
}

export default async function FaqItemPage({ params }: Props) {
  const { categorie, slug } = await params
  const item = getFaqBySlug(categorie, slug)
  if (!item) notFound()

  const siblings = getFaqByCategorie(categorie).filter(q => q.slug !== slug)
  const c = catColors[categorie] ?? { bg: '#f8fafc', border: '#e2e8f0', text: '#475569' }
  const relatedArticle = relatedArticles[slug]

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
      <SiteHeader />

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
          className="faq-content"
          dangerouslySetInnerHTML={{ __html: item.reponse }}
        />

        {/* Encart catégorie */}
        <div style={{ marginTop: '48px', padding: '24px', background: c.bg, borderRadius: '16px', border: `1px solid ${c.border}` }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <span style={{ fontSize: '32px', flexShrink: 0 }}>{catEmojis[categorie]}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                Comparez les meilleurs logiciels {item.categorieLabel}
              </div>
              <p style={{ fontSize: '14px', color: '#475569', margin: '0 0 16px', lineHeight: 1.6 }}>
                {catDescriptions[categorie]}
              </p>
              <Link
                href={`/categorie/${categorie}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: c.text, color: '#fff', borderRadius: '8px', padding: '10px 20px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}
              >
                Voir le comparatif {item.categorieLabel} →
              </Link>
            </div>
          </div>
        </div>

        {/* Article de blog lié */}
        {relatedArticle && (
          <div style={{ marginTop: '20px', padding: '20px 24px', background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '24px', flexShrink: 0 }}>📝</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Article complet</div>
              <Link href={`/blog/${relatedArticle.slug}`} style={{ fontSize: '15px', fontWeight: 600, color: '#2563eb', textDecoration: 'none' }}>
                {relatedArticle.titre} →
              </Link>
            </div>
          </div>
        )}

        {/* Retour FAQ */}
        <div style={{ marginTop: '20px', padding: '16px 20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <Link href="/faq" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#475569', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
            ← Retour à toutes les questions FAQ
          </Link>
        </div>

        {/* Questions liées */}
        {siblings.length > 0 && (
          <section style={{ marginTop: '56px' }}>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {catEmojis[categorie]} Autres questions {item.categorieLabel}
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
          .faq-content h2 { font-size: 1.25rem; font-weight: 700; color: #0f172a; margin: 32px 0 12px; }
          .faq-content h3 { font-size: 1.05rem; font-weight: 700; color: #1e293b; margin: 24px 0 10px; }
          .faq-content ul { padding-left: 1.5rem; margin: 12px 0 20px; }
          .faq-content ol { padding-left: 1.5rem; margin: 12px 0 20px; }
          .faq-content li { margin-bottom: 8px; line-height: 1.7; }
          .faq-content p { margin-bottom: 16px; line-height: 1.8; font-size: 16px; color: #334155; }
          .faq-content strong { color: #0f172a; }
          .faq-content table { width: 100%; border-collapse: collapse; margin: 20px 0 28px; font-size: 14px; }
          .faq-content th { background: #f1f5f9; padding: 10px 14px; text-align: left; font-weight: 700; color: #0f172a; border: 1px solid #e2e8f0; }
          .faq-content td { padding: 10px 14px; border: 1px solid #e2e8f0; color: #334155; vertical-align: top; }
          .faq-content tr:nth-child(even) td { background: #f8fafc; }
          .faq-content .encart { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 16px 20px; margin: 20px 0; }
          .faq-content .encart-warning { background: #fff7ed; border: 1px solid #fed7aa; border-radius: 10px; padding: 16px 20px; margin: 20px 0; }
        `}</style>
      </main>

      <SiteFooter />
    </>
  )
}
