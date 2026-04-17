import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import type { Metadata } from "next";
import LogoImg from '@/app/components/LogoImg'
import ScrollAnimations from '@/app/components/ScrollAnimations'

function getLogoUrl(lienAffilie: string): string | null {
  try {
    const hostname = new URL(lienAffilie).hostname.replace('www.', '')
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`
  } catch {
    return null
  }
}

const catColors: Record<string, { accent: string, bg: string, light: string, gradient: string }> = {
  'crm':              { accent: '#2563eb', bg: '#eff6ff', light: '#dbeafe', gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%)' },
  'facturation':      { accent: '#ea580c', bg: '#fff7ed', light: '#fed7aa', gradient: 'linear-gradient(135deg, #0f172a 0%, #431407 50%, #9a3412 100%)' },
  'gestion-de-projet':{ accent: '#16a34a', bg: '#f0fdf4', light: '#bbf7d0', gradient: 'linear-gradient(135deg, #0f172a 0%, #052e16 50%, #166534 100%)' },
  'seo':              { accent: '#9333ea', bg: '#fdf4ff', light: '#e9d5ff', gradient: 'linear-gradient(135deg, #0f172a 0%, #2e1065 50%, #6b21a8 100%)' },
  'automatisation':   { accent: '#d97706', bg: '#fffbeb', light: '#fde68a', gradient: 'linear-gradient(135deg, #0f172a 0%, #451a03 50%, #92400e 100%)' },
}

const catIcons: Record<string, string> = {
  'crm': '🤝', 'facturation': '💰', 'gestion-de-projet': '📋', 'seo': '🔍', 'automatisation': '⚡',
}

const rankBadges: Record<number, { label: string, color: string, bg: string, border: string }> = {
  0: { label: '🏆 Meilleur choix', color: '#854d0e', bg: '#fefce8', border: '#fde047' },
  1: { label: '🥈 2ème choix',     color: '#374151', bg: '#f9fafb', border: '#d1d5db' },
  2: { label: '🥉 3ème choix',     color: '#92400e', bg: '#fff7ed', border: '#fcd34d' },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { data: categorie } = await supabase.from('categories').select('*').eq('slug', slug).single()
  return {
    title: `${categorie?.h1 || `Meilleur ${categorie?.nom}`} pour TPE et PME françaises`,
    description: `Comparatif expert des meilleurs ${categorie?.nom}. Trouvez le logiciel adapté à votre entreprise parmi notre sélection testée et approuvée en 2026.`,
    alternates: { canonical: `https://ton-meilleur-saas.fr/categorie/${slug}` }
  }
}

export default async function CategoriePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data: categorie } = await supabase.from('categories').select('*').eq('slug', slug).single()
  const { data: outils } = await supabase.from('outils').select('*').eq('categorie_id', categorie?.id)
  const { data: cas_usage } = await supabase.from('cas_usage').select('*').eq('categorie_id', categorie?.id)
  const { data: types } = await supabase.from('types_entreprise').select('*')

  const c = catColors[slug] || { accent: '#2563eb', bg: '#eff6ff', light: '#dbeafe', gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)' }
  const icon = catIcons[slug] || '📦'
  const outilCount = outils?.length || 0
  const gratuitCount = outils?.filter(o => o.prix_mensuel === 0).length || 0

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Fraunces:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />
      <ScrollAnimations />

      <style>{`
        .link-card { transition: all 0.2s ease; }
        .link-card:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-color: ${c.accent} !important; }
        .outil-row { transition: all 0.25s ease; }
        .outil-row:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .essayer-btn { transition: all 0.2s ease; }
        .essayer-btn:hover { opacity: 0.88; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.2); }
        .gradient-text { background: linear-gradient(135deg, #fff 0%, ${c.light} 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        @media (max-width: 768px) {
          .cat-header { padding: 0 20px !important; }
          .cat-hero { padding: 36px 20px 40px !important; }
          .cat-hero h1 { font-size: 28px !important; }
          .cat-hero-stats { gap: 20px !important; flex-wrap: wrap !important; }
          .cat-section { padding: 28px 20px 16px !important; }
          .cat-section-bottom { padding: 28px 20px 48px !important; }
          .cat-contenu { padding: 0 20px !important; }
          .cat-contenu-inner { padding: 28px 20px !important; }
          .outil-card { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; padding: 20px !important; }
          .outil-card-left { width: 100% !important; }
          .outil-card-right { width: 100% !important; flex-direction: row !important; justify-content: space-between !important; align-items: center !important; }
          .outil-desc { max-width: 100% !important; }
          .links-grid { grid-template-columns: 1fr !important; }
          .footer-cat { padding: 24px 20px !important; }
        }
      `}</style>

      {/* Header */}
      <header style={{ background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #f1f5f9', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(12px)' }}>
        <div className="cat-header" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '20px' }}>🚀</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>TonMeilleurSaaS</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 500 }}>Accueil</Link>
            <span>›</span>
            <span style={{ color: '#0f172a', fontWeight: 600 }}>{categorie?.nom}</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="cat-hero" style={{ background: c.gradient, padding: '56px 40px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: `radial-gradient(circle, ${c.accent}30 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>

          {/* Badge update */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '5px 14px', marginBottom: '20px', backdropFilter: 'blur(8px)' }}>
            <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 0 2px rgba(74,222,128,0.3)' }} />
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 500 }}>Mis à jour en 2026 · Comparatif expert</span>
          </div>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '46px', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '14px', lineHeight: 1.1 }}>
            <span className="gradient-text">{categorie?.h1 || `Meilleur ${categorie?.nom}`}</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', maxWidth: '540px', lineHeight: 1.6, marginBottom: '36px' }}>
            {categorie?.description}
          </p>

          {/* Stats hero */}
          <div className="cat-hero-stats" style={{ display: 'flex', gap: '32px' }}>
            {[
              { val: `${outilCount}`, label: 'outils comparés', icon: '📊' },
              ...(gratuitCount > 0 ? [{ val: `${gratuitCount}`, label: 'version gratuite', icon: '🆓' }] : []),
              { val: '2026', label: 'données à jour', icon: '✅' },
              { val: '100%', label: 'avis objectifs', icon: '🎯' },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', border: '1px solid rgba(255,255,255,0.15)' }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{stat.val}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des outils */}
      <section className="cat-section" style={{ padding: '48px 40px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h2 className="section-title scroll-reveal" style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
              {icon} Tous les outils {categorie?.nom}
            </h2>
            <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>{outilCount} résultat{outilCount > 1 ? 's' : ''}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {outils?.map((outil, index) => {
              const badge = rankBadges[index]
              const isFree = outil.prix_mensuel === 0
              const isTop = index === 0

              return (
                <div
                  key={outil.id}
                  className="outil-card outil-row scroll-reveal"
                  style={{
                    background: '#fff',
                    border: isTop ? `2px solid ${c.accent}` : '1px solid #e2e8f0',
                    borderRadius: '18px',
                    padding: '22px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Accent left bar for top 3 */}
                  {index < 3 && (
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: index === 0 ? c.accent : index === 1 ? '#94a3b8' : '#fcd34d', borderRadius: '18px 0 0 18px' }} />
                  )}

                  <div className="outil-card-left" style={{ display: 'flex', alignItems: 'center', gap: '18px', paddingLeft: index < 3 ? '8px' : '0' }}>
                    {/* Rank */}
                    <div style={{ width: '28px', textAlign: 'center', flexShrink: 0 }}>
                      {index < 3
                        ? <span style={{ fontSize: '18px' }}>{['🥇','🥈','🥉'][index]}</span>
                        : <span style={{ fontSize: '12px', fontWeight: 700, color: '#cbd5e1' }}>#{index + 1}</span>
                      }
                    </div>

                    {/* Logo */}
                    <div style={{ width: '48px', height: '48px', background: c.bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                      <LogoImg src={getLogoUrl(outil.lien_affilie)} alt={outil.nom} />
                    </div>

                    {/* Infos */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>{outil.nom}</h3>
                        {badge && (
                          <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px', background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`, whiteSpace: 'nowrap' }}>
                            {badge.label}
                          </span>
                        )}
                        {isFree && (
                          <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0' }}>
                            Gratuit
                          </span>
                        )}
                      </div>
                      <p className="outil-desc" style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.5, maxWidth: '480px' }}>{outil.description}</p>
                    </div>
                  </div>

                  <div className="outil-card-right" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', fontFamily: "'Fraunces', serif" }}>
                        {isFree ? 'Gratuit' : `${outil.prix_mensuel}€`}
                      </div>
                      {!isFree && <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 500 }}>/ mois</div>}
                    </div>
                    <a
                      href={outil.lien_affilie}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="essayer-btn"
                      style={{ background: isTop ? c.accent : '#0f172a', color: '#fff', borderRadius: '10px', padding: '10px 20px', textDecoration: 'none', fontSize: '13px', fontWeight: 700, whiteSpace: 'nowrap' }}
                    >
                      Essayer →
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparatifs par besoin */}
      {cas_usage && cas_usage.length > 0 && (
        <section className="cat-section" style={{ padding: '40px 40px 24px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, color: c.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Comparatifs ciblés</p>
              <h2 className="section-title scroll-reveal" style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
                Par besoin spécifique
              </h2>
            </div>
            <div className="links-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '10px' }}>
              {cas_usage.map((cas, i) => (
                <Link key={cas.id} href={`/meilleur/${slug}/${cas.slug}`} style={{ textDecoration: 'none' }}>
                  <div className={`link-card scroll-reveal stagger-${(i % 4) + 1}`} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '30px', height: '30px', background: c.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0, border: `1px solid ${c.light}` }}>
                        {icon}
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', lineHeight: 1.3 }}>
                        Meilleur {categorie?.nom} {cas.label}
                      </span>
                    </div>
                    <span style={{ color: c.accent, fontSize: '16px', flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contenu SEO */}
      {categorie?.contenu && (
        <section className="cat-contenu" style={{ padding: '40px 40px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="cat-contenu-inner scroll-reveal" style={{ background: '#fff', borderRadius: '20px', padding: '56px', border: '1px solid #e2e8f0', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
              <style>{`
                .contenu-cat h2 { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 800; color: #0f172a; margin-top: 48px; margin-bottom: 16px; letter-spacing: -0.5px; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9; }
                .contenu-cat h2:first-child { margin-top: 0; }
                .contenu-cat h3 { font-size: 17px; font-weight: 700; color: #0f172a; margin-top: 32px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
                .contenu-cat h3::before { content: ''; display: inline-block; width: 4px; height: 16px; background: linear-gradient(180deg, ${c.accent}, #7c3aed); border-radius: 2px; flex-shrink: 0; }
                .contenu-cat p { font-size: 15px; line-height: 1.9; color: #475569; margin-bottom: 16px; }
                .contenu-cat ul { margin-bottom: 20px; padding-left: 0; list-style: none; }
                .contenu-cat ul li { font-size: 15px; line-height: 1.8; color: #475569; margin-bottom: 8px; padding-left: 24px; position: relative; }
                .contenu-cat ul li::before { content: '→'; position: absolute; left: 0; color: ${c.accent}; font-weight: 600; }
                .contenu-cat strong { color: #0f172a; font-weight: 600; }
                .contenu-cat a { color: ${c.accent}; text-decoration: none; font-weight: 500; border-bottom: 1px solid ${c.light}; }
                .contenu-cat table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
                .contenu-cat table th { background: #f8fafc; padding: 12px 16px; text-align: left; font-size: 13px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #e2e8f0; }
                .contenu-cat table td { padding: 12px 16px; font-size: 14px; color: #475569; border-bottom: 1px solid #f1f5f9; }
                .contenu-cat table tr:hover td { background: #f8fafc; }
              `}</style>
              <div className="contenu-cat" dangerouslySetInnerHTML={{ __html: categorie.contenu }} />
            </div>
          </div>
        </section>
      )}

      {/* Comparatifs par type d'entreprise */}
      <section className="cat-section-bottom" style={{ padding: '40px 40px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: c.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Comparatifs ciblés</p>
            <h2 className="section-title scroll-reveal" style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
              Par type d&apos;entreprise
            </h2>
          </div>
          <div className="links-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '10px' }}>
            {types?.map((type, i) => (
              <Link key={type.id} href={`/meilleur/${slug}/${type.slug}`} style={{ textDecoration: 'none' }}>
                <div className={`link-card scroll-reveal stagger-${(i % 4) + 1}`} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '30px', height: '30px', background: c.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0, border: `1px solid ${c.light}` }}>
                      🏢
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', lineHeight: 1.3 }}>
                      Meilleur {categorie?.nom} pour {type.label}
                    </span>
                  </div>
                  <span style={{ color: c.accent, fontSize: '16px', flexShrink: 0 }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-cat" style={{ background: '#0a0f1a', padding: '36px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '16px' }}>🚀</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '15px', fontWeight: 800, color: '#fff' }}>TonMeilleurSaaS</span>
          </Link>
          <p style={{ color: '#475569', fontSize: '13px' }}>© 2026 TonMeilleurSaaS · Comparateur expert de logiciels SaaS</p>
          <Link href="/" style={{ color: '#475569', fontSize: '13px', textDecoration: 'none', fontWeight: 500 }}>← Retour à l&apos;accueil</Link>
        </div>
      </footer>
    </main>
  )
}
