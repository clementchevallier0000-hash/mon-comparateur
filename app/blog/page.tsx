import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import SiteHeader from '@/app/components/SiteHeader'
import type { Metadata } from 'next'
import SiteFooter from '@/app/components/SiteFooter'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog SaaS — Guides et comparatifs',
  description: 'Comparatifs et guides pour choisir les meilleurs logiciels SaaS : CRM, facturation, SEO, automatisation. Conseils pratiques pour TPE et PME françaises.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/blog' },
}

const catColors: Record<string, { accent: string; bg: string; emoji: string; name: string }> = {
  'crm':               { accent: '#2563eb', bg: '#eff6ff', emoji: '🤝', name: 'CRM' },
  'facturation':       { accent: '#ea580c', bg: '#fff7ed', emoji: '💰', name: 'Facturation' },
  'gestion-de-projet': { accent: '#16a34a', bg: '#f0fdf4', emoji: '📋', name: 'Gestion de projet' },
  'seo':               { accent: '#9333ea', bg: '#fdf4ff', emoji: '🔍', name: 'SEO' },
  'automatisation':    { accent: '#d97706', bg: '#fffbeb', emoji: '⚡', name: 'Automatisation' },
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

interface Article {
  id: number
  slug: string
  titre: string
  description: string
  categorie_slug: string
  temps_lecture: number
  date_publication: string
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ cat?: string }> }) {
  const { cat } = await searchParams

  let query = supabase
    .from('articles')
    .select('id,slug,titre,description,categorie_slug,temps_lecture,date_publication')
    .order('date_publication', { ascending: false })

  if (cat && catColors[cat]) {
    query = query.eq('categorie_slug', cat)
  }

  const { data: articles } = await query

  const activeCat = cat && catColors[cat] ? cat : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog TonMeilleurSaaS — Comparatifs et guides logiciels SaaS',
    description: 'Comparatifs et guides pour choisir les meilleurs logiciels SaaS : CRM, facturation, SEO, automatisation.',
    url: 'https://ton-meilleur-saas.fr/blog',
    publisher: { '@type': 'Organization', name: 'TonMeilleurSaaS', url: 'https://ton-meilleur-saas.fr' },
  }

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#fff', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        .article-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .article-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.1); }
        .filter-pill { transition: all 0.15s ease; cursor: pointer; }
        .filter-pill:hover { transform: translateY(-1px); }
        @media (max-width:768px) {
          .blog-hero { padding:48px 20px !important; }
          .blog-grid { grid-template-columns:1fr !important; }
          .blog-section { padding:48px 20px !important; }
          .filter-bar { padding:0 20px !important; overflow-x: auto; flex-wrap: nowrap !important; }
        }
      `}</style>

      <SiteHeader />

      {/* Hero */}
      <section className="blog-hero" style={{ padding:'72px 48px 40px', background:'linear-gradient(180deg,#f8fafc 0%,#fff 100%)' }}>
        <div style={{ maxWidth:'800px', margin:'0 auto', textAlign:'center' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'#fff', border:'1px solid #e2e8f0', borderRadius:'999px', padding:'6px 16px', marginBottom:'24px', boxShadow:'0 1px 4px rgba(0,0,0,0.06)' }}>
            <span style={{ fontSize:'14px' }}>✍️</span>
            <span style={{ color:'#475569', fontSize:'13px', fontWeight:500 }}>Guides · Conseils · Comparatifs</span>
          </div>
          <h1 style={{ fontFamily:"'Fraunces', serif", fontSize:'52px', fontWeight:800, color:'#0f172a', lineHeight:1.1, letterSpacing:'-2px', marginBottom:'20px' }}>
            Comparatifs et guides<br /><em style={{ fontStyle:'italic', background:'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', paddingRight:'4px', marginRight:'-4px' }}>logiciels SaaS pour TPE/PME</em>
          </h1>
          <p style={{ fontSize:'18px', color:'#64748b', lineHeight:1.7, fontWeight:300, maxWidth:'560px', margin:'0 auto' }}>
            Guides pratiques et comparatifs experts pour aider les TPE et PME françaises à choisir les bons outils SaaS.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div className="filter-bar" style={{ padding:'0 48px', maxWidth:'1296px', margin:'0 auto', display:'flex', gap:'10px', flexWrap:'wrap', paddingTop:'32px', paddingBottom:'8px' }}>
        <Link
          href="/blog"
          className="filter-pill"
          style={{ display:'inline-flex', alignItems:'center', gap:'6px', padding:'8px 18px', borderRadius:'999px', fontSize:'13px', fontWeight:600, textDecoration:'none', background: !activeCat ? '#0f172a' : '#f1f5f9', color: !activeCat ? '#fff' : '#475569', border: !activeCat ? '1px solid #0f172a' : '1px solid #e2e8f0' }}
        >
          Tous les articles
        </Link>
        {Object.entries(catColors).map(([slug, c]) => (
          <Link
            key={slug}
            href={`/blog?cat=${slug}`}
            className="filter-pill"
            style={{ display:'inline-flex', alignItems:'center', gap:'6px', padding:'8px 18px', borderRadius:'999px', fontSize:'13px', fontWeight:600, textDecoration:'none', background: activeCat === slug ? c.accent : c.bg, color: activeCat === slug ? '#fff' : c.accent, border: `1px solid ${c.accent}22` }}
          >
            {c.emoji} {c.name}
          </Link>
        ))}
      </div>

      {/* Articles */}
      <section className="blog-section" style={{ padding:'32px 48px 80px' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
          {activeCat && (
            <p style={{ fontSize:'13px', color:'#94a3b8', marginBottom:'24px' }}>
              {articles?.length ?? 0} article{(articles?.length ?? 0) > 1 ? 's' : ''} dans la catégorie <strong style={{ color: catColors[activeCat].accent }}>{catColors[activeCat].emoji} {catColors[activeCat].name}</strong>
            </p>
          )}
          {!articles?.length ? (
            <p style={{ textAlign:'center', color:'#94a3b8', fontSize:'16px' }}>Aucun article pour le moment. Revenez bientôt !</p>
          ) : (
            <div className="blog-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:'28px' }}>
              {(articles as Article[]).map(article => {
                const c = catColors[article.categorie_slug] || { accent:'#64748b', bg:'#f8fafc', emoji:'📝', name:'Guide' }
                return (
                  <Link key={article.id} href={`/blog/${article.slug}`} style={{ textDecoration:'none' }}>
                    <article className="article-card" style={{ background:'#fff', border:'1px solid #e2e8f0', borderRadius:'20px', padding:'28px', height:'100%', display:'flex', flexDirection:'column', gap:'16px' }}>
                      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'8px' }}>
                        <span style={{ fontSize:'11px', fontWeight:700, padding:'3px 10px', borderRadius:'999px', background:c.bg, color:c.accent, border:`1px solid ${c.accent}22` }}>
                          {c.emoji} {c.name}
                        </span>
                        <span style={{ fontSize:'11px', color:'#94a3b8' }}>
                          {article.temps_lecture} min · {formatDate(article.date_publication)}
                        </span>
                      </div>
                      <h2 style={{ fontSize:'18px', fontWeight:700, color:'#0f172a', lineHeight:1.35, fontFamily:"'DM Sans',sans-serif" }}>
                        {article.titre}
                      </h2>
                      <p style={{ fontSize:'14px', color:'#64748b', lineHeight:1.6, flex:1, fontWeight:400 }}>
                        {article.description}
                      </p>
                      <div style={{ display:'flex', alignItems:'center', gap:'6px', color:c.accent, fontSize:'13px', fontWeight:700, marginTop:'auto' }}>
                        Lire l&apos;article
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
      <SiteFooter />

    </main>
  )
}
