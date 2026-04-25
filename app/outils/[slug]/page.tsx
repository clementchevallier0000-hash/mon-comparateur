import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import LogoImg from '@/app/components/LogoImg'
import ScrollAnimations from '@/app/components/ScrollAnimations'
import SearchModal from '@/app/components/SearchModal'

function getLogoUrl(lienAffilie: string): string | null {
  try {
    const hostname = new URL(lienAffilie).hostname.replace('www.', '')
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`
  } catch {
    return null
  }
}

const catColors: Record<string, { accent: string; bg: string; light: string; gradient: string; emoji: string }> = {
  'crm':               { accent: '#2563eb', bg: '#eff6ff', light: '#dbeafe', gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%)', emoji: '🤝' },
  'facturation':       { accent: '#ea580c', bg: '#fff7ed', light: '#fed7aa', gradient: 'linear-gradient(135deg, #0f172a 0%, #431407 50%, #9a3412 100%)', emoji: '💰' },
  'gestion-de-projet': { accent: '#16a34a', bg: '#f0fdf4', light: '#bbf7d0', gradient: 'linear-gradient(135deg, #0f172a 0%, #052e16 50%, #166534 100%)', emoji: '📋' },
  'seo':               { accent: '#9333ea', bg: '#fdf4ff', light: '#e9d5ff', gradient: 'linear-gradient(135deg, #0f172a 0%, #2e1065 50%, #6b21a8 100%)', emoji: '🔍' },
  'automatisation':    { accent: '#d97706', bg: '#fffbeb', light: '#fde68a', gradient: 'linear-gradient(135deg, #0f172a 0%, #451a03 50%, #92400e 100%)', emoji: '⚡' },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { data: outil } = await supabase.from('outils').select('nom, tagline, description, categorie_slug').eq('slug', slug).single()
  if (!outil) return { title: 'Outil introuvable' }
  return {
    title: `${outil.nom} : avis, prix et alternatives en 2026`,
    description: outil.tagline || outil.description || `Découvrez notre avis complet sur ${outil.nom} : fonctionnalités, tarifs, avantages et inconvénients. Comparatif expert pour TPE et PME.`,
    alternates: { canonical: `https://ton-meilleur-saas.fr/outils/${slug}` },
  }
}

export default async function OutilPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data: outil } = await supabase
    .from('outils')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!outil) notFound()

  const { data: categorie } = await supabase
    .from('categories')
    .select('nom, slug, h1')
    .eq('id', outil.categorie_id)
    .single()

  const { data: outilsSimilaires } = await supabase
    .from('outils')
    .select('id, nom, slug, description, prix_mensuel, lien_affilie')
    .eq('categorie_id', outil.categorie_id)
    .neq('id', outil.id)
    .limit(3)

  const catSlug = outil.categorie_slug || categorie?.slug || ''
  const c = catColors[catSlug] || { accent: '#2563eb', bg: '#eff6ff', light: '#dbeafe', gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', emoji: '📦' }
  const isFree = outil.prix_mensuel === 0
  const note = outil.note ?? null
  const avantages: string[] = outil.avantages ?? []
  const inconvenients: string[] = outil.inconvenients ?? []

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Fraunces:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />
      <ScrollAnimations />

      <style>{`
        .essayer-main { transition: all 0.2s ease; }
        .essayer-main:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.25); opacity: 0.95; }
        .alt-card { transition: all 0.2s ease; }
        .alt-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); border-color: ${c.accent}44 !important; }
        .back-link { transition: color 0.15s; }
        .back-link:hover { color: ${c.accent} !important; }

        @media (max-width: 768px) {
          .outil-header { padding: 0 16px !important; }
          .outil-hero { padding: 28px 16px 32px !important; flex-direction: column !important; gap: 20px !important; }
          .outil-hero-right { width: 100% !important; }
          .outil-h1 { font-size: 28px !important; }
          .outil-body { padding: 24px 16px !important; }
          .outil-grid { grid-template-columns: 1fr !important; }
          .pros-cons-grid { grid-template-columns: 1fr !important; }
          .alt-grid { grid-template-columns: 1fr !important; }
          .outil-footer { padding: 20px 16px !important; flex-direction: column !important; gap: 12px !important; }
          .breadcrumb-mob { display: none !important; }
          .outil-header > div { gap: 8px !important; }
        }
      `}</style>

      {/* Header */}
      <header style={{ background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #f1f5f9', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(12px)' }}>
        <div className="outil-header" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '20px' }}>🚀</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>TonMeilleurSaaS</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="breadcrumb-mob" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#64748b' }}>
              <Link href="/" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 500 }}>Accueil</Link>
              <span>›</span>
              {categorie && (
                <>
                  <Link href={`/categorie/${catSlug}`} style={{ color: '#64748b', textDecoration: 'none', fontWeight: 500 }}>{categorie.nom}</Link>
                  <span>›</span>
                </>
              )}
              <span style={{ color: '#0f172a', fontWeight: 600 }}>{outil.nom}</span>
            </div>
            <Link href="/boutique" style={{ fontSize: '13px', fontWeight: 700, color: '#d97706', textDecoration: 'none', background: '#fffbeb', padding: '5px 12px', borderRadius: '8px', border: '1px solid #fde68a', whiteSpace: 'nowrap' }}>
              🛍️ Boutique
            </Link>
            <SearchModal />
          </div>
        </div>
      </header>

      {/* Hero */}
      <div style={{ background: c.gradient, overflow: 'hidden', position: 'relative' }}>
      <section className="outil-hero" style={{ padding: '48px 40px', display: 'flex', alignItems: 'flex-start', gap: '48px', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div style={{ flex: 1 }}>
          {/* Breadcrumb */}
          {categorie && (
            <Link href={`/categorie/${catSlug}`} className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: '20px', fontWeight: 500 }}>
              ← Retour : {categorie.h1 || `Meilleur ${categorie.nom}`}
            </Link>
          )}

          {/* Logo + nom */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', flexShrink: 0 }}>
              <LogoImg src={getLogoUrl(outil.lien_affilie)} alt={outil.nom} />
            </div>
            <div>
              <h1 className="outil-h1" style={{ fontFamily: "'Fraunces', serif", fontSize: '36px', fontWeight: 800, color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: '4px' }}>
                {outil.nom}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {note && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {[1,2,3,4,5].map(s => (
                      <span key={s} style={{ color: s <= Math.round(note) ? '#fbbf24' : 'rgba(255,255,255,0.2)', fontSize: '14px' }}>★</span>
                    ))}
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginLeft: '2px' }}>{note}/5</span>
                  </div>
                )}
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>·</span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{c.emoji} {categorie?.nom}</span>
              </div>
            </div>
          </div>

          {/* Tagline / description */}
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, maxWidth: '520px', marginBottom: '28px' }}>
            {outil.tagline || outil.description}
          </p>

          {/* Prix + badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px', padding: '8px 16px', backdropFilter: 'blur(8px)' }}>
              <span style={{ fontSize: '22px', fontWeight: 800, color: '#fff', fontFamily: "'Fraunces', serif" }}>
                {isFree ? 'Gratuit' : `${outil.prix_mensuel}€`}
              </span>
              {!isFree && <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginLeft: '4px' }}>/mois</span>}
            </div>
            {isFree && (
              <span style={{ background: '#f0fdf4', color: '#16a34a', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', border: '1px solid #bbf7d0' }}>
                ✓ Plan gratuit disponible
              </span>
            )}
            {outil.essai_gratuit && (
              <span style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)' }}>
                🎯 Essai gratuit
              </span>
            )}
            {outil.version_gratuite && (
              <span style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)' }}>
                🆓 Version gratuite
              </span>
            )}
          </div>
        </div>

        {/* CTA Card */}
        <div className="outil-hero-right" style={{ width: '280px', flexShrink: 0, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '24px', backdropFilter: 'blur(12px)' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px', textAlign: 'center' }}>
            Testé et approuvé par notre équipe
          </p>
          <a
            href={outil.lien_affilie}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="essayer-main"
            style={{ display: 'block', background: `linear-gradient(135deg, ${c.accent}, ${c.accent}cc)`, color: '#fff', textDecoration: 'none', textAlign: 'center', padding: '14px 20px', borderRadius: '12px', fontSize: '15px', fontWeight: 700, marginBottom: '12px' }}
          >
            Essayer {outil.nom} →
          </a>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', textAlign: 'center', lineHeight: 1.5 }}>
            Lien affilié — nos avis restent indépendants
          </p>
          {note && (
            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>Notre note</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontSize: '18px', fontWeight: 800, color: '#fff', fontFamily: "'Fraunces', serif" }}>{note}</span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>/5</span>
              </div>
            </div>
          )}
        </div>
      </section>
      </div>

      {/* Contenu principal */}
      <div className="outil-body" style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 40px' }}>
        <div className="outil-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '28px', alignItems: 'start' }}>

          {/* Colonne principale */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Description complète */}
            {outil.description && (
              <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '28px' }}>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '12px' }}>
                  Qu&apos;est-ce que {outil.nom} ?
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.8 }}>{outil.description}</p>
                {outil.pour_qui && (
                  <div style={{ marginTop: '16px', background: c.bg, border: `1px solid ${c.light}`, borderRadius: '10px', padding: '14px 16px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '16px', flexShrink: 0 }}>🎯</span>
                    <div>
                      <p style={{ fontSize: '12px', fontWeight: 700, color: c.accent, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pour qui ?</p>
                      <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.6 }}>{outil.pour_qui}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Avantages & Inconvénients */}
            {(avantages.length > 0 || inconvenients.length > 0) && (
              <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '28px' }}>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '20px' }}>
                  Points forts & points faibles
                </h2>
                <div className="pros-cons-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {avantages.length > 0 && (
                    <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '18px' }}>
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#15803d', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>✅</span> Points forts
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {avantages.map((a, i) => (
                          <li key={i} style={{ fontSize: '13px', color: '#166534', lineHeight: 1.5, paddingLeft: '16px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: '#16a34a', fontWeight: 700 }}>+</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {inconvenients.length > 0 && (
                    <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '18px' }}>
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#b91c1c', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>⚠️</span> Points faibles
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {inconvenients.map((inc, i) => (
                          <li key={i} style={{ fontSize: '13px', color: '#991b1b', lineHeight: 1.5, paddingLeft: '16px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: '#dc2626', fontWeight: 700 }}>−</span>
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Contenu SEO long-form */}
            {outil.contenu && (
              <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '28px' }}>
                <style>{`
                  .outil-content h2 { font-family: 'Fraunces', serif; font-size: 21px; font-weight: 800; color: #0f172a; margin-top: 40px; margin-bottom: 14px; letter-spacing: -0.5px; padding-bottom: 10px; border-bottom: 2px solid #f1f5f9; }
                  .outil-content h2:first-child { margin-top: 0; }
                  .outil-content h3 { font-size: 16px; font-weight: 700; color: #0f172a; margin-top: 24px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
                  .outil-content h3::before { content: ''; display: inline-block; width: 4px; height: 15px; background: linear-gradient(180deg, ${c.accent}, #7c3aed); border-radius: 2px; flex-shrink: 0; }
                  .outil-content p { font-size: 15px; line-height: 1.85; color: #475569; margin-bottom: 14px; }
                  .outil-content ul { margin-bottom: 18px; padding-left: 0; list-style: none; }
                  .outil-content ul li { font-size: 14px; line-height: 1.8; color: #475569; margin-bottom: 7px; padding-left: 22px; position: relative; }
                  .outil-content ul li::before { content: '→'; position: absolute; left: 0; color: ${c.accent}; font-weight: 600; }
                  .outil-content strong { color: #0f172a; font-weight: 600; }
                  .outil-content a { color: ${c.accent}; text-decoration: none; font-weight: 500; border-bottom: 1px solid ${c.light}; }
                  .outil-content table { width: 100%; border-collapse: collapse; margin-bottom: 24px; display: block; overflow-x: auto; }
                  .outil-content table th { background: #f8fafc; padding: 10px 14px; text-align: left; font-size: 13px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #e2e8f0; white-space: nowrap; }
                  .outil-content table td { padding: 10px 14px; font-size: 13px; color: #475569; border-bottom: 1px solid #f1f5f9; }
                `}</style>
                <div className="outil-content" dangerouslySetInnerHTML={{ __html: outil.contenu }} />
              </div>
            )}

            {/* Alternatives */}
            {outilsSimilaires && outilsSimilaires.length > 0 && (
              <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '28px' }}>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '16px' }}>
                  Alternatives à {outil.nom}
                </h2>
                <div className="alt-grid" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {outilsSimilaires.map((alt) => (
                    <Link key={alt.id} href={alt.slug ? `/outils/${alt.slug}` : '#'} style={{ textDecoration: 'none' }}>
                      <div className="alt-card" style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '14px', background: '#fafafa' }}>
                        <div style={{ width: '36px', height: '36px', background: c.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                          <LogoImg src={getLogoUrl(alt.lien_affilie)} alt={alt.nom} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>{alt.nom}</p>
                          <p style={{ fontSize: '12px', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{alt.description}</p>
                        </div>
                        <div style={{ flexShrink: 0, textAlign: 'right' }}>
                          <p style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', fontFamily: "'Fraunces', serif" }}>
                            {alt.prix_mensuel === 0 ? 'Gratuit' : `${alt.prix_mensuel}€`}
                          </p>
                          <p style={{ fontSize: '11px', color: c.accent, fontWeight: 600 }}>Voir →</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div style={{ marginTop: '14px', textAlign: 'center' }}>
                  <Link href={`/categorie/${catSlug}`} style={{ fontSize: '13px', color: c.accent, fontWeight: 600, textDecoration: 'none' }}>
                    Voir tous les {categorie?.nom} comparés →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Colonne latérale */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'sticky', top: '84px' }}>

            {/* CTA principal */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '40px', background: c.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                  <LogoImg src={getLogoUrl(outil.lien_affilie)} alt={outil.nom} />
                </div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>{outil.nom}</p>
                  <p style={{ fontSize: '12px', color: '#64748b' }}>{isFree ? 'Gratuit' : `À partir de ${outil.prix_mensuel}€/mois`}</p>
                </div>
              </div>

              {note && (
                <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px 14px', marginBottom: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600, marginBottom: '4px' }}>NOTRE NOTE</p>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1,2,3,4,5].map(s => (
                        <span key={s} style={{ color: s <= Math.round(note) ? '#f59e0b' : '#e2e8f0', fontSize: '15px' }}>★</span>
                      ))}
                    </div>
                  </div>
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>{note}</span>
                </div>
              )}

              <a
                href={outil.lien_affilie}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="essayer-main"
                style={{ display: 'block', background: `linear-gradient(135deg, ${c.accent}, ${c.accent}cc)`, color: '#fff', textDecoration: 'none', textAlign: 'center', padding: '14px 20px', borderRadius: '12px', fontSize: '15px', fontWeight: 700, marginBottom: '10px' }}
              >
                Essayer {outil.nom} →
              </a>

              <p style={{ fontSize: '11px', color: '#94a3b8', textAlign: 'center', lineHeight: 1.5 }}>
                🔗 Lien affilié · nos avis restent indépendants
              </p>
            </div>

            {/* Infos rapides */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>Infos clés</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Catégorie', value: categorie?.nom || '—', icon: c.emoji },
                  { label: 'Prix de départ', value: isFree ? 'Gratuit' : `${outil.prix_mensuel}€/mois`, icon: '💰' },
                  ...(outil.essai_gratuit ? [{ label: 'Essai gratuit', value: 'Oui', icon: '🎯' }] : []),
                  ...(outil.version_gratuite ? [{ label: 'Version gratuite', value: 'Disponible', icon: '🆓' }] : []),
                  ...(note ? [{ label: 'Note', value: `${note}/5`, icon: '⭐' }] : []),
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
                    <span style={{ fontSize: '13px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>{item.icon}</span>{item.label}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lien catégorie */}
            {categorie && (
              <Link href={`/categorie/${catSlug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: c.bg, border: `1px solid ${c.light}`, borderRadius: '16px', padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: c.accent, fontWeight: 700, marginBottom: '2px' }}>Comparer tous les</p>
                    <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{categorie.nom} →</p>
                  </div>
                  <span style={{ fontSize: '22px' }}>{c.emoji}</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="outil-footer" style={{ background: '#0a0f1a', padding: '28px 40px', marginTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '16px' }}>🚀</span>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: '15px', fontWeight: 800, color: '#fff' }}>TonMeilleurSaaS</span>
        </Link>
        <p style={{ color: '#475569', fontSize: '13px' }}>© 2026 TonMeilleurSaaS · Comparateur expert de logiciels SaaS</p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link href="/mentions-legales" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>Mentions légales</Link>
          <Link href="/politique-de-confidentialite" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>Confidentialité</Link>
          <Link href="/cgv" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>CGV</Link>
          {categorie && (
            <Link href={`/categorie/${catSlug}`} style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none', fontWeight: 500 }}>← {categorie.nom}</Link>
          )}
        </div>
      </footer>
    </main>
  )
}
