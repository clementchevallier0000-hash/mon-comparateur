import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import SearchModal from '@/app/components/SearchModal'
import MobileMenu from '@/app/components/MobileMenu'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog — Guides et conseils logiciels SaaS pour TPE/PME',
  description: 'Guides pratiques, comparatifs et conseils pour choisir les meilleurs logiciels SaaS. CRM, facturation, SEO, automatisation : on décrypte tout pour les TPE et PME françaises.',
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

export default async function BlogPage() {
  const { data: articles } = await supabase
    .from('articles')
    .select('id,slug,titre,description,categorie_slug,temps_lecture,date_publication')
    .order('date_publication', { ascending: false })

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#fff', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,300&family=Fraunces:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />

      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        .article-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .article-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.1); }
        .header-nav { display:flex; gap:32px; align-items:center; }
        .mobile-menu-btn { display:none; }
        @media (max-width:768px) {
          .header-inner { padding:0 20px !important; }
          .header-nav { display:none !important; }
          .mobile-menu-btn { display:flex !important; }
          .blog-hero { padding:48px 20px !important; }
          .blog-grid { grid-template-columns:1fr !important; }
          .blog-section { padding:48px 20px !important; }
        }
      `}</style>

      {/* Header */}
      <header style={{ background:'rgba(255,255,255,0.95)', borderBottom:'1px solid #f1f5f9', position:'sticky', top:0, zIndex:100, backdropFilter:'blur(12px)' }}>
        <div className="header-inner" style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 48px', display:'flex', alignItems:'center', justifyContent:'space-between', height:'68px' }}>
          <Link href="/" style={{ display:'flex', alignItems:'center', gap:'8px', textDecoration:'none' }}>
            <span style={{ fontSize:'22px' }}>🚀</span>
            <span style={{ fontFamily:"'Fraunces', serif", fontSize:'20px', fontWeight:800, color:'#0f172a', letterSpacing:'-0.5px' }}>TonMeilleurSaaS</span>
          </Link>
          <nav className="header-nav">
            <Link href="/" style={{ color:'#64748b', fontSize:'14px', textDecoration:'none', fontWeight:500 }}>Accueil</Link>
            <Link href="/blog" style={{ color:'#0f172a', fontSize:'14px', textDecoration:'none', fontWeight:700 }}>Blog</Link>
            <Link href="/boutique" style={{ color:'#d97706', fontSize:'14px', textDecoration:'none', fontWeight:700 }}>🛍️ Boutique</Link>
            {Object.entries(catColors).map(([slug, c]) => (
              <Link key={slug} href={`/categorie/${slug}`} style={{ color:'#64748b', fontSize:'14px', textDecoration:'none', fontWeight:500 }}>{c.name}</Link>
            ))}
          </nav>
          <SearchModal />
          <div className="mobile-menu-btn" style={{ display:'none' }}>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="blog-hero" style={{ padding:'72px 48px 56px', background:'linear-gradient(180deg,#f8fafc 0%,#fff 100%)' }}>
        <div style={{ maxWidth:'800px', margin:'0 auto', textAlign:'center' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'#fff', border:'1px solid #e2e8f0', borderRadius:'999px', padding:'6px 16px', marginBottom:'24px', boxShadow:'0 1px 4px rgba(0,0,0,0.06)' }}>
            <span style={{ fontSize:'14px' }}>✍️</span>
            <span style={{ color:'#475569', fontSize:'13px', fontWeight:500 }}>Guides · Conseils · Comparatifs</span>
          </div>
          <h1 style={{ fontFamily:"'Fraunces', serif", fontSize:'52px', fontWeight:800, color:'#0f172a', lineHeight:1.1, letterSpacing:'-2px', marginBottom:'20px' }}>
            Le blog des logiciels<br /><em style={{ fontStyle:'italic', background:'linear-gradient(135deg,#2563eb,#7c3aed)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>qui font gagner du temps</em>
          </h1>
          <p style={{ fontSize:'18px', color:'#64748b', lineHeight:1.7, fontWeight:300, maxWidth:'560px', margin:'0 auto' }}>
            Guides pratiques et comparatifs experts pour aider les TPE et PME françaises à choisir les bons outils SaaS.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="blog-section" style={{ padding:'56px 48px 80px' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
          {!articles?.length ? (
            <p style={{ textAlign:'center', color:'#94a3b8', fontSize:'16px' }}>Aucun article pour le moment. Revenez bientôt !</p>
          ) : (
            <div className="blog-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:'28px' }}>
              {(articles as Article[]).map(article => {
                const cat = catColors[article.categorie_slug] || { accent:'#64748b', bg:'#f8fafc', emoji:'📝', name:'Guide' }
                return (
                  <Link key={article.id} href={`/blog/${article.slug}`} style={{ textDecoration:'none' }}>
                    <article className="article-card" style={{ background:'#fff', border:'1px solid #e2e8f0', borderRadius:'20px', padding:'28px', height:'100%', display:'flex', flexDirection:'column', gap:'16px' }}>
                      {/* Top meta */}
                      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'8px' }}>
                        <span style={{ fontSize:'11px', fontWeight:700, padding:'3px 10px', borderRadius:'999px', background:cat.bg, color:cat.accent, border:`1px solid ${cat.accent}22` }}>
                          {cat.emoji} {cat.name}
                        </span>
                        <span style={{ fontSize:'11px', color:'#94a3b8' }}>
                          {article.temps_lecture} min · {formatDate(article.date_publication)}
                        </span>
                      </div>
                      {/* Title */}
                      <h2 style={{ fontSize:'18px', fontWeight:700, color:'#0f172a', lineHeight:1.35, fontFamily:"'DM Sans',sans-serif" }}>
                        {article.titre}
                      </h2>
                      {/* Description */}
                      <p style={{ fontSize:'14px', color:'#64748b', lineHeight:1.6, flex:1, fontWeight:400 }}>
                        {article.description}
                      </p>
                      {/* CTA */}
                      <div style={{ display:'flex', alignItems:'center', gap:'6px', color:cat.accent, fontSize:'13px', fontWeight:700, marginTop:'auto' }}>
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

      {/* Footer */}
      <footer style={{ background:'#0f172a', color:'#94a3b8', padding:'40px 48px' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'16px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <span style={{ fontSize:'20px' }}>🚀</span>
            <span style={{ fontFamily:"'Fraunces', serif", color:'#fff', fontWeight:800, fontSize:'18px' }}>TonMeilleurSaaS</span>
          </div>
          <div style={{ display:'flex', gap:'24px', flexWrap:'wrap' }}>
            <Link href="/" style={{ color:'#94a3b8', textDecoration:'none', fontSize:'13px' }}>Accueil</Link>
            <Link href="/blog" style={{ color:'#94a3b8', textDecoration:'none', fontSize:'13px' }}>Blog</Link>
            {Object.entries(catColors).map(([slug, c]) => (
              <Link key={slug} href={`/categorie/${slug}`} style={{ color:'#94a3b8', textDecoration:'none', fontSize:'13px' }}>{c.name}</Link>
            ))}
          </div>
          <p style={{ fontSize:'12px' }}>© 2026 TonMeilleurSaaS · Comparatifs indépendants</p>
        </div>
      </footer>
    </main>
  )
}
