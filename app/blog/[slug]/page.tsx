import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import SiteHeader from '@/app/components/SiteHeader'
import NewsletterInline from '@/app/components/NewsletterInline'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteFooter from '@/app/components/SiteFooter'
import BackToTop from '@/app/components/BackToTop'

export const dynamic = 'force-dynamic'

const catColors: Record<string, { accent: string; bg: string; emoji: string; name: string; slug: string }> = {
  'crm':               { accent: '#2563eb', bg: '#eff6ff', emoji: '🤝', name: 'CRM',               slug: 'crm' },
  'facturation':       { accent: '#ea580c', bg: '#fff7ed', emoji: '💰', name: 'Facturation',       slug: 'facturation' },
  'gestion-de-projet': { accent: '#16a34a', bg: '#f0fdf4', emoji: '📋', name: 'Gestion de projet', slug: 'gestion-de-projet' },
  'seo':               { accent: '#9333ea', bg: '#fdf4ff', emoji: '🔍', name: 'SEO',               slug: 'seo' },
  'automatisation':    { accent: '#d97706', bg: '#fffbeb', emoji: '⚡', name: 'Automatisation',    slug: 'automatisation' },
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { data } = await supabase
    .from('articles')
    .select('titre,description,slug')
    .eq('slug', slug)
    .single()
  if (!data) return { title: 'Article non trouvé' }
  return {
    title: `${data.titre} | TonMeilleurSaaS`,
    description: data.description,
    alternates: { canonical: `https://ton-meilleur-saas.fr/blog/${data.slug}` },
    openGraph: { title: data.titre, description: data.description, type: 'article' },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!article) notFound()

  const cat = catColors[article.categorie_slug] || null

  const { data: related } = await supabase
    .from('articles')
    .select('id,slug,titre,categorie_slug,temps_lecture,date_publication')
    .eq('categorie_slug', article.categorie_slug)
    .neq('slug', slug)
    .order('date_publication', { ascending: false })
    .limit(3)

  return (
    <main style={{ fontFamily:"'DM Sans',sans-serif", background:'#fff', minHeight:'100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,300&family=Fraunces:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />

      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        .header-nav { display:flex; gap:32px; align-items:center; }
        .mobile-menu-btn { display:none; }
        .article-body h2 { font-size:22px; font-weight:700; color:#0f172a; margin:36px 0 14px; line-height:1.3; }
        .article-body h3 { font-size:17px; font-weight:700; color:#1e293b; margin:24px 0 10px; }
        .article-body p { font-size:16px; color:#374151; line-height:1.8; margin-bottom:18px; }
        .article-body ul, .article-body ol { padding-left:24px; margin-bottom:18px; }
        .article-body li { font-size:16px; color:#374151; line-height:1.7; margin-bottom:6px; }
        .article-body a { color:#2563eb; text-decoration:none; font-weight:600; border-bottom:1px solid #bfdbfe; transition:border-color 0.15s; }
        .article-body a:hover { border-color:#2563eb; }
        .article-body strong { color:#0f172a; font-weight:700; }
        .related-card { transition:transform 0.2s ease, box-shadow 0.2s ease; }
        .related-card:hover { transform:translateY(-3px); box-shadow:0 8px 30px rgba(0,0,0,0.08); }
        @media (max-width:768px) {
          .header-inner { padding:0 20px !important; }
          .header-nav { display:none !important; }
          .mobile-menu-btn { display:flex !important; }
          .article-layout { flex-direction:column !important; }
          .article-sidebar { display:none !important; }
          .article-header { padding:40px 20px !important; }
          .article-content { padding:32px 20px !important; }
          .related-grid { grid-template-columns:1fr !important; }
          .related-section { padding:48px 20px !important; }
        }
      `}</style>

      <SiteHeader />

      {/* Article header */}
      <section className="article-header" style={{ padding:'56px 48px 0', background:'linear-gradient(180deg,#f8fafc 0%,#fff 100%)' }}>
        <div style={{ maxWidth:'780px', margin:'0 auto' }}>
          {/* Breadcrumb */}
          <nav style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'24px', fontSize:'13px', color:'#94a3b8', flexWrap:'wrap' }}>
            <Link href="/" style={{ color:'#94a3b8', textDecoration:'none' }}>Accueil</Link>
            <span>›</span>
            <Link href="/blog" style={{ color:'#94a3b8', textDecoration:'none' }}>Blog</Link>
            {cat && (
              <>
                <span>›</span>
                <Link href={`/categorie/${cat.slug}`} style={{ color:cat.accent, textDecoration:'none', fontWeight:600 }}>{cat.emoji} {cat.name}</Link>
              </>
            )}
          </nav>
          {/* Category + meta */}
          <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'20px', flexWrap:'wrap' }}>
            {cat && (
              <span style={{ fontSize:'12px', fontWeight:700, padding:'4px 12px', borderRadius:'999px', background:cat.bg, color:cat.accent, border:`1px solid ${cat.accent}22` }}>
                {cat.emoji} {cat.name}
              </span>
            )}
            <span style={{ fontSize:'12px', color:'#94a3b8' }}>⏱ {article.temps_lecture} min de lecture</span>
            <span style={{ fontSize:'12px', color:'#94a3b8' }}>📅 {formatDate(article.date_publication)}</span>
          </div>
          {/* Title */}
          <h1 style={{ fontFamily:"'Fraunces', serif", fontSize:'40px', fontWeight:800, color:'#0f172a', lineHeight:1.15, letterSpacing:'-1.5px', marginBottom:'20px' }}>
            {article.titre}
          </h1>
          {/* Description */}
          <p style={{ fontSize:'18px', color:'#64748b', lineHeight:1.7, fontWeight:300, marginBottom:'40px', borderLeft:`3px solid ${cat?.accent || '#e2e8f0'}`, paddingLeft:'16px' }}>
            {article.description}
          </p>
          <hr style={{ border:'none', borderTop:'1px solid #f1f5f9' }} />
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="article-layout" style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 48px', display:'flex', gap:'56px', alignItems:'flex-start' }}>
        {/* Main content */}
        <article className="article-content" style={{ flex:1, minWidth:0, padding:'40px 0 80px' }}>
          <div className="article-body" dangerouslySetInnerHTML={{ __html: article.contenu || '' }} />

          {/* Newsletter */}
          <div style={{ marginTop:'40px' }}>
            <NewsletterInline accentColor={cat?.accent || '#2563eb'} />
          </div>

          {/* CTA */}
          {cat && (
            <div style={{ marginTop:'24px', padding:'28px', background:cat.bg, borderRadius:'16px', border:`1px solid ${cat.accent}22` }}>
              <p style={{ fontSize:'14px', fontWeight:700, color:cat.accent, marginBottom:'8px' }}>{cat.emoji} Aller plus loin</p>
              <p style={{ fontSize:'16px', fontWeight:700, color:'#0f172a', marginBottom:'16px' }}>
                Vous cherchez le meilleur outil {cat.name} ?
              </p>
              <Link
                href={`/categorie/${cat.slug}`}
                style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:cat.accent, color:'#fff', padding:'12px 24px', borderRadius:'10px', textDecoration:'none', fontSize:'14px', fontWeight:700 }}
              >
                Voir le comparatif {cat.name} complet →
              </Link>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside className="article-sidebar" style={{ width:'280px', flexShrink:0, paddingTop:'40px', position:'sticky', top:'88px' }}>
          {/* Categories */}
          <div style={{ background:'#f8fafc', borderRadius:'16px', padding:'20px', marginBottom:'20px', border:'1px solid #e2e8f0' }}>
            <p style={{ fontSize:'11px', fontWeight:700, color:'#94a3b8', letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'14px' }}>Comparatifs</p>
            <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
              {Object.entries(catColors).map(([s, c]) => (
                <Link key={s} href={`/categorie/${s}`} style={{ display:'flex', alignItems:'center', gap:'10px', padding:'8px 12px', borderRadius:'10px', textDecoration:'none', background: s === article.categorie_slug ? c.bg : 'transparent', color: s === article.categorie_slug ? c.accent : '#475569', fontWeight: s === article.categorie_slug ? 700 : 500, fontSize:'13px', transition:'all 0.15s ease', border: s === article.categorie_slug ? `1px solid ${c.accent}22` : '1px solid transparent' }}>
                  <span>{c.emoji}</span>{c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Related articles */}
          {related && related.length > 0 && (
            <div style={{ background:'#f8fafc', borderRadius:'16px', padding:'20px', border:'1px solid #e2e8f0' }}>
              <p style={{ fontSize:'11px', fontWeight:700, color:'#94a3b8', letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'14px' }}>Articles similaires</p>
              <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                {related.map(r => {
                  const rc = catColors[r.categorie_slug]
                  return (
                    <Link key={r.id} href={`/blog/${r.slug}`} style={{ textDecoration:'none' }}>
                      <div className="related-card" style={{ padding:'12px', borderRadius:'10px', background:'#fff', border:'1px solid #e2e8f0', cursor:'pointer' }}>
                        <p style={{ fontSize:'12px', color:'#0f172a', fontWeight:600, lineHeight:1.4, marginBottom:'4px' }}>{r.titre}</p>
                        <span style={{ fontSize:'11px', color:'#94a3b8' }}>{r.temps_lecture} min</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Related articles (mobile / bottom) */}
      {related && related.length > 0 && (
        <section className="related-section" style={{ padding:'56px 48px 80px', background:'#f8fafc', borderTop:'1px solid #f1f5f9' }}>
          <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
            <h2 style={{ fontFamily:"'Fraunces', serif", fontSize:'28px', fontWeight:800, color:'#0f172a', marginBottom:'28px' }}>Articles similaires</h2>
            <div className="related-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'20px' }}>
              {related.map(r => {
                const rc = catColors[r.categorie_slug] || { accent:'#64748b', bg:'#f8fafc', emoji:'📝', name:'Guide' }
                return (
                  <Link key={r.id} href={`/blog/${r.slug}`} style={{ textDecoration:'none' }}>
                    <article className="related-card" style={{ background:'#fff', border:'1px solid #e2e8f0', borderRadius:'16px', padding:'20px', height:'100%' }}>
                      <span style={{ fontSize:'11px', fontWeight:700, padding:'3px 10px', borderRadius:'999px', background:rc.bg, color:rc.accent, border:`1px solid ${rc.accent}22` }}>
                        {rc.emoji} {rc.name}
                      </span>
                      <h3 style={{ fontSize:'15px', fontWeight:700, color:'#0f172a', marginTop:'12px', lineHeight:1.4 }}>{r.titre}</h3>
                      <p style={{ fontSize:'12px', color:'#94a3b8', marginTop:'8px' }}>{r.temps_lecture} min · {formatDate(r.date_publication)}</p>
                    </article>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
      <SiteFooter />
      <BackToTop />
    </main>
  )
}
