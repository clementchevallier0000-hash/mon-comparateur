import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import LogoImg from '@/app/components/LogoImg'
import ScrollAnimations from '@/app/components/ScrollAnimations'
import SiteHeader from '@/app/components/SiteHeader'
import SiteFooter from '@/app/components/SiteFooter'
import { getLogoUrl } from '@/lib/logo'

const catColors: Record<string, { accent: string; bg: string; light: string; gradient: string }> = {
  'crm':               { accent: '#2563eb', bg: '#eff6ff', light: '#dbeafe', gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #3b82f6 100%)' },
  'facturation':       { accent: '#ea580c', bg: '#fff7ed', light: '#fed7aa', gradient: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)' },
  'gestion-de-projet': { accent: '#16a34a', bg: '#f0fdf4', light: '#bbf7d0', gradient: 'linear-gradient(135deg, #14532d 0%, #15803d 50%, #16a34a 100%)' },
  'seo':               { accent: '#9333ea', bg: '#fdf4ff', light: '#e9d5ff', gradient: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #9333ea 100%)' },
  'automatisation':    { accent: '#d97706', bg: '#fffbeb', light: '#fde68a', gradient: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%)' },
}

const catIcons: Record<string, string> = {
  'crm': '🤝', 'facturation': '💰', 'gestion-de-projet': '📋', 'seo': '🔍', 'automatisation': '⚡',
}

const catLabels: Record<string, string> = {
  'crm': 'CRM', 'facturation': 'Facturation', 'gestion-de-projet': 'Gestion de projet', 'seo': 'SEO', 'automatisation': 'Automatisation',
}

const rankConfig: Record<number, { emoji: string; label: string; labelColor: string; labelBg: string; labelBorder: string; borderColor: string }> = {
  0: { emoji: '🥇', label: '🏆 Meilleure alternative', labelColor: '#854d0e', labelBg: '#fefce8', labelBorder: '#fde047', borderColor: '#fbbf24' },
  1: { emoji: '🥈', label: '🥈 2ème choix',            labelColor: '#374151', labelBg: '#f9fafb', labelBorder: '#d1d5db', borderColor: '#9ca3af' },
  2: { emoji: '🥉', label: '🥉 3ème choix',            labelColor: '#92400e', labelBg: '#fff7ed', labelBorder: '#fcd34d', borderColor: '#f59e0b' },
}

export async function generateStaticParams() {
  const { data } = await supabase.from('outils').select('slug')
  return (data ?? []).map(o => ({ slug: o.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { data: outil } = await supabase.from('outils').select('nom, categorie_slug').eq('slug', slug).single()
  if (!outil) return { title: 'Alternatives introuvables' }
  const catLabel = catLabels[outil.categorie_slug] ?? outil.categorie_slug
  return {
    title: `Meilleures alternatives à ${outil.nom} en 2026 — Comparatif ${catLabel}`,
    description: `Vous cherchez une alternative à ${outil.nom} ? Découvrez les meilleures solutions ${catLabel} pour le remplacer en 2026 — comparatif complet prix, avis et fonctionnalités.`,
    alternates: { canonical: `https://ton-meilleur-saas.fr/alternative/${slug}` },
  }
}

export default async function AlternativePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data: ref } = await supabase
    .from('outils')
    .select('id, nom, slug, categorie_slug, prix_mensuel, note, tagline, lien_affilie')
    .eq('slug', slug)
    .single()

  if (!ref) notFound()

  const { data: alternatives } = await supabase
    .from('outils')
    .select('id, nom, slug, categorie_slug, prix_mensuel, note, tagline, lien_affilie, description, essai_gratuit')
    .eq('categorie_slug', ref.categorie_slug)
    .neq('id', ref.id)
    .order('note', { ascending: false })

  const alts = alternatives ?? []
  const c = catColors[ref.categorie_slug] ?? { accent: '#2563eb', bg: '#eff6ff', light: '#dbeafe', gradient: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)' }
  const icon = catIcons[ref.categorie_slug] ?? '📦'
  const catLabel = catLabels[ref.categorie_slug] ?? ref.categorie_slug
  const gratuitCount = alts.filter(o => o.prix_mensuel === 0).length
  const top3 = alts.slice(0, 3)
  const rest = alts.slice(3)

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Meilleures alternatives à ${ref.nom}`,
    description: `Comparatif des meilleures alternatives à ${ref.nom} en 2026`,
    numberOfItems: alts.length,
    itemListElement: alts.map((outil, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: outil.nom,
      description: outil.tagline ?? outil.description,
      url: `https://ton-meilleur-saas.fr/outils/${outil.slug}`,
    })),
  }

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh', overflowX: 'hidden' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Fraunces:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />
      <ScrollAnimations />

      <style>{`
        .outil-card { transition: all 0.25s ease; }
        .outil-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.10); transform: translateY(-2px); }
        .compact-card { transition: all 0.2s ease; }
        .compact-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.07); transform: translateY(-1px); border-color: ${c.accent}44 !important; }
        .essayer-btn { transition: all 0.2s ease; display: inline-flex; align-items: center; gap: 6px; }
        .essayer-btn:hover { opacity: 0.85; }
        .stretched-link { position: absolute; inset: 0; z-index: 0; }
        @media (max-width: 768px) {
          .hero-section { padding: 28px 16px 32px !important; }
          .hero-h1 { font-size: 26px !important; letter-spacing: -0.5px !important; }
          .hero-stats { gap: 14px !important; flex-wrap: wrap !important; }
          .section-inner { padding: 24px 16px !important; }
          .top3-grid { grid-template-columns: 1fr !important; }
          .ref-card { flex-direction: column !important; gap: 12px !important; }
          .compact-right { gap: 10px !important; }
        }
      `}</style>

      <SiteHeader />

      {/* Hero */}
      <section className="hero-section" style={{ background: c.bg, borderBottom: `1px solid ${c.light}`, padding: '52px 40px 44px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', background: `radial-gradient(circle, ${c.accent}18 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>

          {/* Breadcrumb */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94a3b8', marginBottom: '20px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Accueil</Link>
            <span>›</span>
            <Link href="/alternative" style={{ color: '#94a3b8', textDecoration: 'none' }}>Comparer</Link>
            <span>›</span>
            <span style={{ color: '#475569', fontWeight: 600 }}>Alternatives à {ref.nom}</span>
          </nav>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#fff', border: `1px solid ${c.light}`, borderRadius: '999px', padding: '5px 14px', marginBottom: '18px' }}>
            <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ color: c.accent, fontSize: '12px', fontWeight: 600 }}>Comparatif {catLabel} · Mis à jour en 2026</span>
          </div>

          <h1 className="hero-h1" style={{ fontFamily: "'Fraunces', serif", fontSize: '40px', fontWeight: 800, color: '#0f172a', letterSpacing: '-1.5px', marginBottom: '12px', lineHeight: 1.15 }}>
            Meilleures alternatives<br />
            <span style={{ color: c.accent }}>à {ref.nom}</span> en 2026
          </h1>
          <p style={{ color: '#475569', fontSize: '16px', maxWidth: '520px', lineHeight: 1.6, marginBottom: '28px' }}>
            {alts.length} solution{alts.length > 1 ? 's' : ''} {catLabel} testée{alts.length > 1 ? 's' : ''} pour remplacer {ref.nom} — prix réels, avis indépendants, classées par note.
          </p>

          {/* Stats */}
          <div className="hero-stats" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { val: String(alts.length), label: 'alternatives testées', icon: '📊' },
              ...(gratuitCount > 0 ? [{ val: String(gratuitCount), label: 'avec plan gratuit', icon: '🆓' }] : []),
              { val: '2026', label: 'données à jour', icon: '✅' },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <div style={{ width: '32px', height: '32px', background: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>{stat.val}</div>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 500 }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Recommandation #1 */}
          {top3[0] && (
            <div style={{ marginTop: '28px', background: '#fff', border: `1px solid ${c.light}`, borderLeft: `4px solid ${c.accent}`, borderRadius: '14px', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: c.accent, textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0 }}>🏆 Notre recommandation</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '160px' }}>
                <div style={{ width: '34px', height: '34px', background: c.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                  <LogoImg src={getLogoUrl(top3[0].lien_affilie)} alt={top3[0].nom} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px' }}>{top3[0].nom}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {top3[0].tagline ?? top3[0].description}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
                {top3[0].note && <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>⭐ {top3[0].note}/5</span>}
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>
                  {top3[0].prix_mensuel === 0 ? 'Gratuit' : `${top3[0].prix_mensuel}€/mois`}
                </span>
                {top3[0].lien_affilie && (
                  <a
                    href={top3[0].lien_affilie}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{ background: c.accent, color: '#fff', borderRadius: '10px', padding: '10px 18px', textDecoration: 'none', fontSize: '13px', fontWeight: 700, whiteSpace: 'nowrap' }}
                  >
                    {top3[0].essai_gratuit ? 'Essai gratuit →' : 'Essayer →'}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Encart : l'outil de référence */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px 40px' }}>
          <div className="ref-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
              <div style={{ width: '40px', height: '40px', background: '#f1f5f9', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid #e2e8f0', flexShrink: 0 }}>
                <LogoImg src={getLogoUrl(ref.lien_affilie)} alt={ref.nom} />
              </div>
              <div>
                <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vous utilisez actuellement</span>
                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '15px' }}>{ref.nom}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', flexShrink: 0 }}>
              {ref.prix_mensuel !== null && (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>{ref.prix_mensuel === 0 ? 'Gratuit' : `${ref.prix_mensuel}€`}</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>par mois</div>
                </div>
              )}
              {ref.note && (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>{ref.note}/5</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>notre note</div>
                </div>
              )}
              <Link href={`/outils/${ref.slug}`} style={{ alignSelf: 'center', fontSize: '13px', color: '#64748b', textDecoration: 'none', fontWeight: 600 }}>
                Voir la fiche →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 alternatives */}
      {top3.length > 0 && (
        <section style={{ padding: '44px 40px 0' }} className="section-inner">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
                {icon} Top {top3.length} alternatives à {ref.nom}
              </h2>
              <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>{alts.length} outil{alts.length > 1 ? 's' : ''}</span>
            </div>

            <div className="top3-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {top3.map((outil, index) => {
                const rank = rankConfig[index]
                const isFree = outil.prix_mensuel === 0
                return (
                  <div key={outil.id} className="outil-card" style={{
                    background: '#fff',
                    border: index === 0 ? `2px solid ${c.accent}44` : '1px solid #e2e8f0',
                    borderTop: `4px solid ${rank.borderColor}`,
                    borderRadius: '16px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    position: 'relative',
                  }}>
                    {/* Stretched link vers la fiche outil */}
                    <Link href={`/outils/${outil.slug}`} className="stretched-link" aria-label={`Voir la fiche ${outil.nom}`} style={{ textDecoration: 'none' }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                      <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', background: rank.labelBg, color: rank.labelColor, border: `1px solid ${rank.labelBorder}` }}>
                        {rank.label}
                      </span>
                      <span style={{ fontSize: '20px' }}>{rank.emoji}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative', zIndex: 1 }}>
                      <div style={{ width: '44px', height: '44px', background: c.bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                        <LogoImg src={getLogoUrl(outil.lien_affilie)} alt={outil.nom} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '15px' }}>{outil.nom}</div>
                        {outil.note && <div style={{ fontSize: '12px', color: '#64748b' }}>⭐ {outil.note}/5</div>}
                      </div>
                    </div>

                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, flex: 1, margin: 0, position: 'relative', zIndex: 1 }}>
                      {outil.tagline ?? outil.description}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', position: 'relative', zIndex: 1 }}>
                      <div>
                        <span style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a' }}>
                          {isFree ? 'Gratuit' : `${outil.prix_mensuel}€`}
                        </span>
                        {!isFree && <span style={{ fontSize: '11px', color: '#94a3b8', marginLeft: '3px' }}>/mois</span>}
                      </div>
                      {outil.lien_affilie && (
                        <div style={{ position: 'relative', zIndex: 2, textAlign: 'right' }}>
                          <a
                            href={outil.lien_affilie}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="essayer-btn"
                            style={{
                              background: index === 0 ? c.accent : '#0f172a',
                              color: '#fff',
                              borderRadius: '10px',
                              padding: '9px 16px',
                              textDecoration: 'none',
                              fontSize: '13px',
                              fontWeight: 700,
                            }}
                          >
                            {outil.essai_gratuit ? 'Essai gratuit →' : 'Essayer →'}
                          </a>
                          {outil.essai_gratuit && (
                            <p style={{ fontSize: '10px', color: '#16a34a', margin: '4px 0 0', fontWeight: 600 }}>
                              ✓ Gratuit · Sans CB
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Autres alternatives */}
      {rest.length > 0 && (
        <section style={{ padding: '32px 40px 0' }} className="section-inner">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '16px' }}>
              Autres alternatives à {ref.nom}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {rest.map((outil) => {
                const isFree = outil.prix_mensuel === 0
                return (
                  <div key={outil.id} className="compact-card" style={{
                    background: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    position: 'relative',
                  }}>
                    {/* Stretched link */}
                    <Link href={`/outils/${outil.slug}`} className="stretched-link" aria-label={`Voir la fiche ${outil.nom}`} style={{ textDecoration: 'none' }} />

                    <div style={{ width: '40px', height: '40px', background: c.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0, position: 'relative', zIndex: 1 }}>
                      <LogoImg src={getLogoUrl(outil.lien_affilie)} alt={outil.nom} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0, position: 'relative', zIndex: 1 }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px' }}>{outil.nom}</div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {outil.tagline ?? outil.description}
                      </div>
                    </div>
                    <div className="compact-right" style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                      {outil.note && <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>⭐ {outil.note}</span>}
                      <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', minWidth: '60px', textAlign: 'right' }}>
                        {isFree ? 'Gratuit' : `${outil.prix_mensuel}€`}
                        {!isFree && <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 400, marginLeft: '2px' }}>/mois</span>}
                      </span>
                      {outil.lien_affilie && (
                        <a
                          href={outil.lien_affilie}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="essayer-btn"
                          style={{
                            background: '#0f172a',
                            color: '#fff',
                            borderRadius: '8px',
                            padding: '7px 14px',
                            textDecoration: 'none',
                            fontSize: '12px',
                            fontWeight: 700,
                            position: 'relative',
                            zIndex: 2,
                          }}
                        >
                          {outil.essai_gratuit ? 'Essai gratuit →' : 'Essayer →'}
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA comparatif complet */}
      <section style={{ padding: '44px 40px' }} className="section-inner">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: c.gradient, borderRadius: '20px', padding: '40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', background: `radial-gradient(circle, ${c.accent}30 0%, transparent 70%)`, pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{icon}</div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '10px', letterSpacing: '-0.5px' }}>
                Comparer tous les outils {catLabel}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', marginBottom: '24px', maxWidth: '400px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                Notre comparatif complet inclut {alts.length + 1} solutions avec prix, notes et fonctionnalités détaillées.
              </p>
              <Link
                href={`/categorie/${ref.categorie_slug}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#0f172a', borderRadius: '12px', padding: '12px 28px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}
              >
                Voir le comparatif {catLabel} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
