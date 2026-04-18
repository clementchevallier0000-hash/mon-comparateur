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
  'crm':               { accent: '#2563eb', bg: '#eff6ff', light: '#dbeafe', gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%)' },
  'facturation':       { accent: '#ea580c', bg: '#fff7ed', light: '#fed7aa', gradient: 'linear-gradient(135deg, #0f172a 0%, #431407 50%, #9a3412 100%)' },
  'gestion-de-projet': { accent: '#16a34a', bg: '#f0fdf4', light: '#bbf7d0', gradient: 'linear-gradient(135deg, #0f172a 0%, #052e16 50%, #166534 100%)' },
  'seo':               { accent: '#9333ea', bg: '#fdf4ff', light: '#e9d5ff', gradient: 'linear-gradient(135deg, #0f172a 0%, #2e1065 50%, #6b21a8 100%)' },
  'automatisation':    { accent: '#d97706', bg: '#fffbeb', light: '#fde68a', gradient: 'linear-gradient(135deg, #0f172a 0%, #451a03 50%, #92400e 100%)' },
}

const catIcons: Record<string, string> = {
  'crm': '🤝', 'facturation': '💰', 'gestion-de-projet': '📋', 'seo': '🔍', 'automatisation': '⚡',
}

const rankConfig: Record<number, { emoji: string, label: string, labelColor: string, labelBg: string, labelBorder: string, borderColor: string }> = {
  0: { emoji: '🥇', label: '🏆 Meilleur choix', labelColor: '#854d0e', labelBg: '#fefce8', labelBorder: '#fde047', borderColor: '#fbbf24' },
  1: { emoji: '🥈', label: '🥈 2ème choix',     labelColor: '#374151', labelBg: '#f9fafb', labelBorder: '#d1d5db', borderColor: '#9ca3af' },
  2: { emoji: '🥉', label: '🥉 3ème choix',     labelColor: '#92400e', labelBg: '#fff7ed', labelBorder: '#fcd34d', borderColor: '#f59e0b' },
}

const catToSubAnchors: Record<string, Record<string, string>> = {
  crm: {
    'gratuit':              'Comparer les CRM sans abonnement',
    'moins-de-20-euros':    'Trouver un CRM à moins de 20€ par mois',
    'simple':               'Découvrir les CRM les plus intuitifs',
    'freelance':            'Quel CRM choisir quand on est freelance ?',
    'auto-entrepreneur':    'Gérer sa clientèle en auto-entrepreneur',
    'tpe':                  'CRM adapté aux très petites entreprises',
    'pme':                  'Logiciel CRM pour PME en croissance',
    'startup':              'CRM pensé pour les startups ambitieuses',
    'artisan':              'Suivre sa clientèle quand on est artisan',
    'professions-liberales':'Relation client pour professions libérales',
  },
  facturation: {
    'facturation-gratuit':          'Facturer ses clients sans abonnement',
    'facturation-moins-20-euros':   'Logiciels de facturation à petit prix',
    'debutant':                     'Commencer à facturer en toute simplicité',
    'freelance':                    'Gérer ses factures quand on est freelance',
    'auto-entrepreneur':            'Facturation conforme pour auto-entrepreneur',
    'tpe':                          'Solution de facturation pour TPE',
    'pme':                          'Logiciel de facturation pour PME',
    'startup':                      'Facturation flexible pour startup',
    'artisan':                      'Devis et factures spécialisés artisans',
    'professions-liberales':        'Facturer ses honoraires en toute conformité',
  },
  'gestion-de-projet': {
    'freelance':            'Organiser ses projets clients en freelance',
    'auto-entrepreneur':    'Piloter ses missions en auto-entrepreneur',
    'tpe':                  'Gestion de projet pour très petite équipe',
    'pme':                  'Outil de projet pour PME française',
    'startup':              'Piloter une startup avec un logiciel de projet',
    'artisan':              'Planifier et suivre ses chantiers',
    'professions-liberales':'Gérer ses dossiers clients en libéral',
  },
  seo: {
    'freelance':            'Outils SEO pour consultant freelance',
    'auto-entrepreneur':    'Référencer son site en auto-entrepreneur',
    'tpe':                  'SEO accessible pour petite entreprise',
    'pme':                  'Stratégie SEO pour PME ambitieuse',
    'startup':              "Accélérer la croissance organique de sa startup",
    'artisan':              "Améliorer sa visibilité locale en artisan",
    'professions-liberales':"Être trouvé sur Google en profession libérale",
  },
  automatisation: {
    'freelance':            'Automatiser ses tâches répétitives en freelance',
    'auto-entrepreneur':    "Gagner du temps grâce à l'automatisation",
    'tpe':                  "Automatiser les processus d'une TPE",
    'pme':                  "Logiciel d'automatisation pour PME",
    'startup':              'Automatiser sa startup pour scaler plus vite',
    'artisan':              "Gagner du temps sur l'administratif artisanal",
    'professions-liberales':"Automatiser les tâches d'un cabinet libéral",
  },
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
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh', overflowX: 'hidden' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Fraunces:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />
      <ScrollAnimations />

      <style>{`
        .link-card { transition: all 0.2s ease; }
        .link-card:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-color: ${c.accent} !important; }
        .outil-row { transition: all 0.25s ease; }
        .outil-row:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .essayer-btn { transition: all 0.2s ease; }
        .essayer-btn:hover { opacity: 0.85; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.2); }

        @media (max-width: 768px) {
          .cat-header { padding: 0 16px !important; }
          .cat-hero { padding: 28px 16px 32px !important; }
          .cat-hero h1 { font-size: 26px !important; letter-spacing: -0.5px !important; }
          .cat-hero p { font-size: 14px !important; margin-bottom: 20px !important; }
          .cat-hero-stats { gap: 16px !important; flex-wrap: wrap !important; margin-top: 0 !important; }
          .cat-hero-stat { min-width: 120px !important; }
          .cat-section { padding: 24px 16px 12px !important; }
          .cat-section-bottom { padding: 24px 16px 48px !important; }
          .cat-contenu { padding: 0 16px !important; }
          .cat-contenu-inner { padding: 24px 16px !important; }
          .outil-card { flex-direction: column !important; align-items: flex-start !important; gap: 14px !important; padding: 18px 16px !important; }
          .outil-card-left { width: 100% !important; padding-left: 0 !important; }
          .outil-card-right { width: 100% !important; flex-direction: row !important; justify-content: space-between !important; align-items: center !important; }
          .outil-desc { max-width: 100% !important; font-size: 12px !important; }
          .outil-badges { flex-wrap: wrap !important; }
          .links-grid { grid-template-columns: 1fr !important; }
          .footer-cat { padding: 20px 16px !important; flex-direction: column !important; gap: 12px !important; align-items: flex-start !important; }
          .breadcrumb { display: none !important; }
          .section-header { margin-bottom: 16px !important; }
        }
      `}</style>

      {/* Header */}
      <header style={{ background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #f1f5f9', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(12px)' }}>
        <div className="cat-header" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '20px' }}>🚀</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>TonMeilleurSaaS</span>
          </Link>
          <div className="breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '5px 14px', marginBottom: '18px', backdropFilter: 'blur(8px)' }}>
            <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 500 }}>Mis à jour en 2026 · Comparatif expert</span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '46px', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '14px', lineHeight: 1.1, color: '#fff' }}>
            {categorie?.h1 || `Meilleur ${categorie?.nom}`}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', maxWidth: '540px', lineHeight: 1.6, marginBottom: '32px' }}>
            {categorie?.description}
          </p>
          <div className="cat-hero-stats" style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
            {[
              { val: `${outilCount}`, label: 'outils comparés', icon: '📊' },
              ...(gratuitCount > 0 ? [{ val: `${gratuitCount}`, label: 'version gratuite', icon: '🆓' }] : []),
              { val: '2026', label: 'données à jour', icon: '✅' },
              { val: '100%', label: 'avis objectifs', icon: '🎯' },
            ].map((stat, i) => (
              <div key={i} className="cat-hero-stat" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', border: '1px solid rgba(255,255,255,0.15)', flexShrink: 0 }}>
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
          <div className="section-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
              {icon} Tous les outils {categorie?.nom}
            </h2>
            <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600, flexShrink: 0 }}>{outilCount} résultat{outilCount > 1 ? 's' : ''}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {outils?.map((outil, index) => {
              const rank = rankConfig[index]
              const isFree = outil.prix_mensuel === 0
              const isTop = index === 0
              const borderLeft = rank ? `4px solid ${rank.borderColor}` : '1px solid #e2e8f0'

              return (
                <div
                  key={outil.id}
                  className="outil-card outil-row scroll-reveal"
                  style={{
                    background: '#fff',
                    border: isTop ? `2px solid ${c.accent}33` : '1px solid #e2e8f0',
                    borderLeft,
                    borderRadius: '16px',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    justifyContent: 'space-between',
                  }}
                >
                  <div className="outil-card-left" style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: 0 }}>
                    {/* Rang */}
                    <div style={{ width: '28px', textAlign: 'center', flexShrink: 0 }}>
                      {rank
                        ? <span style={{ fontSize: '18px' }}>{rank.emoji}</span>
                        : <span style={{ fontSize: '11px', fontWeight: 700, color: '#cbd5e1' }}>#{index + 1}</span>
                      }
                    </div>

                    {/* Logo */}
                    <div style={{ width: '44px', height: '44px', background: c.bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                      <LogoImg src={getLogoUrl(outil.lien_affilie)} alt={outil.nom} />
                    </div>

                    {/* Texte */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="outil-badges" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap' }}>{outil.nom}</h3>
                        {rank && (
                          <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 7px', borderRadius: '999px', background: rank.labelBg, color: rank.labelColor, border: `1px solid ${rank.labelBorder}`, whiteSpace: 'nowrap' }}>
                            {rank.label}
                          </span>
                        )}
                        {isFree && (
                          <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 7px', borderRadius: '999px', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', whiteSpace: 'nowrap' }}>
                            Gratuit
                          </span>
                        )}
                      </div>
                      <p className="outil-desc" style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.5, wordBreak: 'break-word' }}>{outil.description}</p>
                    </div>
                  </div>

                  <div className="outil-card-right" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', fontFamily: "'Fraunces', serif", whiteSpace: 'nowrap' }}>
                        {isFree ? 'Gratuit' : `${outil.prix_mensuel}€`}
                      </div>
                      {!isFree && <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 500 }}>/ mois</div>}
                    </div>
                    <a
                      href={outil.lien_affilie}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="essayer-btn"
                      style={{ background: isTop ? c.accent : '#0f172a', color: '#fff', borderRadius: '10px', padding: '9px 18px', textDecoration: 'none', fontSize: '13px', fontWeight: 700, whiteSpace: 'nowrap', display: 'block' }}
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
        <section className="cat-section" style={{ padding: '32px 40px 16px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="section-header" style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, color: c.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>Comparatifs ciblés</p>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
                Par besoin spécifique
              </h2>
            </div>
            <div className="links-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
              {cas_usage.map((cas, i) => (
                <Link key={cas.id} href={`/meilleur/${slug}/${cas.slug}`} style={{ textDecoration: 'none' }}>
                  <div className={`link-card scroll-reveal stagger-${(i % 4) + 1}`} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                      <div style={{ width: '28px', height: '28px', background: c.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0, border: `1px solid ${c.light}` }}>
                        {icon}
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', lineHeight: 1.3, wordBreak: 'break-word' }}>
                        {catToSubAnchors[slug]?.[cas.slug] || `Meilleur ${categorie?.nom} ${cas.label}`}
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
        <section className="cat-contenu" style={{ padding: '32px 40px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="cat-contenu-inner" style={{ background: '#fff', borderRadius: '20px', padding: '48px', border: '1px solid #e2e8f0', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
              <style>{`
                .contenu-cat h2 { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 800; color: #0f172a; margin-top: 44px; margin-bottom: 14px; letter-spacing: -0.5px; padding-bottom: 10px; border-bottom: 2px solid #f1f5f9; }
                .contenu-cat h2:first-child { margin-top: 0; }
                .contenu-cat h3 { font-size: 16px; font-weight: 700; color: #0f172a; margin-top: 28px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
                .contenu-cat h3::before { content: ''; display: inline-block; width: 4px; height: 15px; background: linear-gradient(180deg, ${c.accent}, #7c3aed); border-radius: 2px; flex-shrink: 0; }
                .contenu-cat p { font-size: 15px; line-height: 1.85; color: #475569; margin-bottom: 14px; }
                .contenu-cat ul { margin-bottom: 18px; padding-left: 0; list-style: none; }
                .contenu-cat ul li { font-size: 14px; line-height: 1.8; color: #475569; margin-bottom: 7px; padding-left: 22px; position: relative; word-break: break-word; }
                .contenu-cat ul li::before { content: '→'; position: absolute; left: 0; color: ${c.accent}; font-weight: 600; }
                .contenu-cat strong { color: #0f172a; font-weight: 600; }
                .contenu-cat a { color: ${c.accent}; text-decoration: none; font-weight: 500; border-bottom: 1px solid ${c.light}; }
                .contenu-cat table { width: 100%; border-collapse: collapse; margin-bottom: 24px; display: block; overflow-x: auto; }
                .contenu-cat table th { background: #f8fafc; padding: 10px 14px; text-align: left; font-size: 13px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #e2e8f0; white-space: nowrap; }
                .contenu-cat table td { padding: 10px 14px; font-size: 13px; color: #475569; border-bottom: 1px solid #f1f5f9; }
              `}</style>
              <div className="contenu-cat" dangerouslySetInnerHTML={{ __html: categorie.contenu }} />
            </div>
          </div>
        </section>
      )}

      {/* Comparatifs par type d'entreprise */}
      <section className="cat-section-bottom" style={{ padding: '32px 40px 72px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-header" style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: c.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>Comparatifs ciblés</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
              Par type d&apos;entreprise
            </h2>
          </div>
          <div className="links-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
            {types?.map((type, i) => (
              <Link key={type.id} href={`/meilleur/${slug}/${type.slug}`} style={{ textDecoration: 'none' }}>
                <div className={`link-card scroll-reveal stagger-${(i % 4) + 1}`} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                    <div style={{ width: '28px', height: '28px', background: c.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0, border: `1px solid ${c.light}` }}>
                      🏢
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', lineHeight: 1.3, wordBreak: 'break-word' }}>
                      {catToSubAnchors[slug]?.[type.slug] || `Meilleur ${categorie?.nom} pour ${type.label}`}
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
      <footer className="footer-cat" style={{ background: '#0a0f1a', padding: '28px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '16px' }}>🚀</span>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: '15px', fontWeight: 800, color: '#fff' }}>TonMeilleurSaaS</span>
        </Link>
        <p style={{ color: '#475569', fontSize: '13px' }}>© 2026 TonMeilleurSaaS · Comparateur expert de logiciels SaaS</p>
        <Link href="/" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none', fontWeight: 500 }}>← Accueil</Link>
      </footer>
    </main>
  )
}
