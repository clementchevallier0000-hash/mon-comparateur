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

// Ancres maillage interne : sous-catégorie → catégorie parente (unique par page)
const subToCatAnchors: Record<string, Record<string, string>> = {
  crm: {
    'gratuit':              'Voir le comparatif CRM complet',
    'moins-de-20-euros':    'Accéder à tout le classement CRM',
    'simple':               'Explorer toutes les solutions CRM',
    'freelance':            'Retour au comparatif CRM général',
    'auto-entrepreneur':    'Voir tous les CRM comparés',
    'tpe':                  "Découvrir l'ensemble des CRM testés",
    'pme':                  'Comparatif CRM sans restriction',
    'startup':              'Tous les CRM de notre sélection',
    'artisan':              'Consulter le classement CRM complet',
    'professions-liberales':'Notre sélection CRM intégrale',
  },
  facturation: {
    'facturation-gratuit':        'Voir tout le comparatif facturation',
    'facturation-moins-20-euros': 'Accéder au classement facturation complet',
    'debutant':                   'Explorer toutes les solutions de facturation',
    'freelance':                  'Retour au comparatif facturation',
    'auto-entrepreneur':          'Voir tous les logiciels de facturation',
    'tpe':                        'Découvrir notre sélection facturation',
    'pme':                        'Comparatif facturation sans filtre',
    'startup':                    'Tous les logiciels de facturation testés',
    'artisan':                    'Classement facturation complet',
    'professions-liberales':      'Notre sélection facturation intégrale',
  },
  'gestion-de-projet': {
    'freelance':            'Voir tout le comparatif gestion de projet',
    'auto-entrepreneur':    'Accéder au classement complet',
    'tpe':                  'Explorer tous les outils de projet',
    'pme':                  'Retour au comparatif gestion de projet',
    'startup':              'Voir notre sélection complète',
    'artisan':              'Tous les logiciels de gestion testés',
    'professions-liberales':'Comparatif gestion de projet sans filtre',
  },
  seo: {
    'freelance':            'Voir tout le comparatif SEO',
    'auto-entrepreneur':    'Accéder au classement SEO complet',
    'tpe':                  'Explorer tous les outils SEO',
    'pme':                  'Retour au comparatif SEO',
    'startup':              'Voir notre sélection SEO complète',
    'artisan':              'Tous les outils SEO comparés',
    'professions-liberales':'Comparatif SEO sans filtre',
  },
  automatisation: {
    'freelance':            "Voir tout le comparatif automatisation",
    'auto-entrepreneur':    'Accéder au classement automatisation',
    'tpe':                  "Explorer tous les outils d'automatisation",
    'pme':                  'Retour au comparatif automatisation',
    'startup':              'Notre sélection automatisation complète',
    'artisan':              "Tous les logiciels d'automatisation testés",
    'professions-liberales':"Comparatif automatisation sans filtre",
  },
}

// Ancres maillage interne : sous-catégorie → sous-catégories pairs (unique par cible)
const peerAnchors: Record<string, Record<string, string>> = {
  crm: {
    'gratuit':              'Les alternatives CRM entièrement gratuites',
    'moins-de-20-euros':    'Les CRM à moins de 20€ par mois',
    'simple':               'Les CRM les plus rapides à prendre en main',
    'freelance':            'Comparatif CRM pour indépendants',
    'auto-entrepreneur':    'Gérer ses prospects en micro-entreprise',
    'tpe':                  'Les CRM pour très petites structures',
    'pme':                  'Solutions CRM pour PME françaises',
    'startup':              'Outils CRM pour jeunes entreprises',
    'artisan':              'Suivi client dans le secteur artisanal',
    'professions-liberales':'Gestion clientèle pour professions libérales',
  },
  facturation: {
    'facturation-gratuit':        'Logiciels de facturation sans frais',
    'facturation-moins-20-euros': 'Facturation à coût maîtrisé (− 20€)',
    'debutant':                   'Première solution de facturation intuitive',
    'freelance':                  'Facturer ses clients en indépendant',
    'auto-entrepreneur':          'Factures conformes pour micro-entrepreneurs',
    'tpe':                        'Facturation pour petites structures',
    'pme':                        'Logiciel de facturation pour PME',
    'startup':                    'Facturation scalable pour startup',
    'artisan':                    'Devis et facturation dans le bâtiment',
    'professions-liberales':      'Honoraires et notes de frais en libéral',
  },
  'gestion-de-projet': {
    'freelance':            'Gestion de projets pour indépendants',
    'auto-entrepreneur':    'Organisation en auto-entrepreneur',
    'tpe':                  'Outil de projet pour équipe réduite',
    'pme':                  "Piloter les projets d'une PME",
    'startup':              'Gestion de projet agile pour startup',
    'artisan':              'Organisation des chantiers artisanaux',
    'professions-liberales':'Suivi des dossiers en profession libérale',
  },
  seo: {
    'freelance':            'SEO pour les consultants indépendants',
    'auto-entrepreneur':    'Référencement pour auto-entrepreneurs',
    'tpe':                  'Améliorer son SEO en petite entreprise',
    'pme':                  'Outils SEO pour PME françaises',
    'startup':              'Croissance organique pour startup',
    'artisan':              'Référencement local pour artisans',
    'professions-liberales':'Visibilité Google pour professions libérales',
  },
  automatisation: {
    'freelance':            'Automatisation pour freelances',
    'auto-entrepreneur':    'Automatiser en auto-entrepreneur',
    'tpe':                  "Automatisation des tâches en TPE",
    'pme':                  "Automatiser les workflows d'une PME",
    'startup':              'Automatiser sa startup dès le lancement',
    'artisan':              'Automatisation admin pour artisans',
    'professions-liberales':'Automatiser son activité libérale',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ categorie: string, usage: string }> }): Promise<Metadata> {
  const { categorie, usage } = await params
  const { data: cat } = await supabase.from('categories').select('*').eq('slug', categorie).single()
  const { data: cas } = await supabase.from('cas_usage').select('*').eq('slug', usage).single()
  const { data: typeEntreprise } = await supabase.from('types_entreprise').select('*').eq('slug', usage).single()
  const usageLabel = cas?.label || typeEntreprise?.label || usage.replace(/-/g, ' ')
  return {
    title: `Meilleur ${cat?.nom} pour ${usageLabel} en 2026`,
    description: `Comparatif expert des meilleurs ${cat?.nom} pour ${usageLabel}. Trouvez l'outil idéal parmi notre sélection testée et approuvée en 2026.`,
    alternates: { canonical: `https://ton-meilleur-saas.fr/meilleur/${categorie}/${usage}` }
  }
}

export default async function MeilleurPage({ params }: { params: Promise<{ categorie: string, usage: string }> }) {
  const { categorie, usage } = await params
  const { data: cat } = await supabase.from('categories').select('*').eq('slug', categorie).single()
  const { data: outils } = await supabase.from('outils').select('*').eq('categorie_id', cat?.id)
  const { data: cas } = await supabase.from('cas_usage').select('*').eq('slug', usage).single()
  const { data: typeEntreprise } = await supabase.from('types_entreprise').select('*').eq('slug', usage).single()
  const usageLabel = cas?.label || typeEntreprise?.label || usage.replace(/-/g, ' ')
  const contenu = cas?.contenu || typeEntreprise?.contenu

  // Pairs pour le maillage interne
  const { data: peerCas } = cas
    ? await supabase.from('cas_usage').select('id,label,slug').eq('categorie_id', cat?.id).neq('id', cas.id)
    : { data: null }
  const { data: peerTypes } = typeEntreprise
    ? await supabase.from('types_entreprise').select('id,label,slug').neq('id', typeEntreprise.id)
    : { data: null }

  const c = catColors[categorie] || { accent: '#2563eb', bg: '#eff6ff', light: '#dbeafe', gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)' }
  const icon = catIcons[categorie] || '📦'
  const outilCount = outils?.length || 0
  const gratuitCount = outils?.filter(o => o.prix_mensuel === 0).length || 0

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Meilleur ${cat?.nom} pour ${usageLabel}`,
    "description": `Comparatif des meilleurs ${cat?.nom} pour ${usageLabel}`,
    "numberOfItems": outilCount,
    "itemListElement": outils?.map((outil, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": outil.nom,
      "description": outil.description,
      "url": outil.lien_affilie
    }))
  }

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh', overflowX: 'hidden' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Fraunces:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />
      <ScrollAnimations />

      <style>{`
        .outil-row-m { transition: all 0.25s ease; }
        .outil-row-m:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .essayer-btn-m { transition: all 0.2s ease; }
        .essayer-btn-m:hover { opacity: 0.85; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.2); }
        .link-card-m { transition: all 0.2s ease; }
        .link-card-m:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-color: ${c.accent} !important; }

        @media (max-width: 768px) {
          .m-header { padding: 0 16px !important; }
          .m-hero { padding: 28px 16px 32px !important; }
          .m-hero h1 { font-size: 24px !important; letter-spacing: -0.5px !important; }
          .m-hero p { font-size: 14px !important; margin-bottom: 20px !important; }
          .m-hero-stats { gap: 14px !important; flex-wrap: wrap !important; }
          .m-section { padding: 24px 16px 16px !important; }
          .m-contenu-wrap { padding: 0 16px !important; }
          .m-contenu { padding: 24px 16px !important; }
          .m-footer { padding: 20px 16px !important; flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
          .m-breadcrumb { display: none !important; }
          .outil-card-m { flex-direction: column !important; align-items: flex-start !important; padding: 16px !important; gap: 12px !important; }
          .outil-left-m { width: 100% !important; padding-left: 0 !important; }
          .outil-right-m { width: 100% !important; flex-direction: row !important; justify-content: space-between !important; align-items: center !important; }
          .outil-desc-m { max-width: 100% !important; font-size: 12px !important; }
          .outil-badges-m { flex-wrap: wrap !important; }
          .m-cta { padding: 40px 16px !important; }
          .m-cta h2 { font-size: 24px !important; }
        }
      `}</style>

      {/* Header */}
      <header style={{ background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #f1f5f9', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(12px)' }}>
        <div className="m-header" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '20px' }}>🚀</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>TonMeilleurSaaS</span>
          </Link>
          <div className="m-breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 500 }}>Accueil</Link>
            <span>›</span>
            <Link href={`/categorie/${categorie}`} style={{ color: '#64748b', textDecoration: 'none', fontWeight: 500 }}>{cat?.nom}</Link>
            <span>›</span>
            <span style={{ color: '#0f172a', fontWeight: 600 }}>{usageLabel}</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="m-hero" style={{ background: c.gradient, padding: '52px 40px 44px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: `radial-gradient(circle, ${c.accent}30 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>

          {/* Badge live */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '5px 14px', marginBottom: '18px', backdropFilter: 'blur(8px)' }}>
            <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 500 }}>Comparatif expert · Mis à jour en 2026</span>
          </div>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '42px', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', marginBottom: '12px', lineHeight: 1.1 }}>
            Meilleur {cat?.nom}<br />
            <span style={{ opacity: 0.75 }}>pour {usageLabel}</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', maxWidth: '500px', lineHeight: 1.6, marginBottom: '28px' }}>
            Sélection des {outilCount} meilleurs outils {cat?.nom} adaptés aux besoins des {usageLabel}s. Avis basés sur des tests réels.
          </p>

          {/* Stats */}
          <div className="m-hero-stats" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { val: `${outilCount}`, label: 'outils testés', icon: '📊' },
              ...(gratuitCount > 0 ? [{ val: `${gratuitCount}`, label: 'version gratuite', icon: '🆓' }] : []),
              { val: '2026', label: 'données à jour', icon: '✅' },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', border: '1px solid rgba(255,255,255,0.15)', flexShrink: 0 }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{stat.val}</div>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des outils */}
      <section className="m-section" style={{ padding: '44px 40px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
              {icon} Notre sélection pour {usageLabel}
            </h2>
            <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600, flexShrink: 0 }}>{outilCount} outil{outilCount > 1 ? 's' : ''}</span>
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
                  className="outil-card-m outil-row-m scroll-reveal"
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
                  <div className="outil-left-m" style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
                    {/* Rang */}
                    <div style={{ width: '26px', textAlign: 'center', flexShrink: 0 }}>
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
                      <div className="outil-badges-m" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', flexWrap: 'wrap' }}>
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
                      <p className="outil-desc-m" style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.5, wordBreak: 'break-word' }}>
                        {outil.description}
                      </p>
                    </div>
                  </div>

                  <div className="outil-right-m" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
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
                      className="essayer-btn-m"
                      style={{ background: isTop ? c.accent : '#0f172a', color: '#fff', borderRadius: '10px', padding: '9px 18px', textDecoration: 'none', fontSize: '13px', fontWeight: 700, whiteSpace: 'nowrap', display: 'block' }}
                    >
                      Essayer →
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contenu SEO */}
          {contenu && (
            <div className="m-contenu-wrap" style={{ marginTop: '36px' }}>
              <div className="m-contenu scroll-reveal" style={{ background: '#fff', borderRadius: '20px', padding: '48px', border: '1px solid #e2e8f0', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
                <style>{`
                  .contenu-m h2 { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 800; color: #0f172a; margin-top: 44px; margin-bottom: 14px; letter-spacing: -0.5px; padding-bottom: 10px; border-bottom: 2px solid #f1f5f9; }
                  .contenu-m h2:first-child { margin-top: 0; }
                  .contenu-m h3 { font-size: 16px; font-weight: 700; color: #0f172a; margin-top: 28px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
                  .contenu-m h3::before { content: ''; display: inline-block; width: 4px; height: 15px; background: linear-gradient(180deg, ${c.accent}, #7c3aed); border-radius: 2px; flex-shrink: 0; }
                  .contenu-m p { font-size: 15px; line-height: 1.85; color: #475569; margin-bottom: 14px; }
                  .contenu-m ul { margin-bottom: 18px; padding-left: 0; list-style: none; }
                  .contenu-m ul li { font-size: 14px; line-height: 1.8; color: #475569; margin-bottom: 7px; padding-left: 22px; position: relative; word-break: break-word; }
                  .contenu-m ul li::before { content: '→'; position: absolute; left: 0; color: ${c.accent}; font-weight: 600; }
                  .contenu-m strong { color: #0f172a; font-weight: 600; }
                  .contenu-m a { color: ${c.accent}; text-decoration: none; font-weight: 500; border-bottom: 1px solid ${c.light}; }
                  .contenu-m table { width: 100%; border-collapse: collapse; margin-bottom: 24px; display: block; overflow-x: auto; }
                  .contenu-m table th { background: #f8fafc; padding: 10px 14px; text-align: left; font-size: 13px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #e2e8f0; white-space: nowrap; }
                  .contenu-m table td { padding: 10px 14px; font-size: 13px; color: #475569; border-bottom: 1px solid #f1f5f9; }
                `}</style>
                <div className="contenu-m" dangerouslySetInnerHTML={{ __html: contenu }} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Maillage interne : guides similaires */}
      {(peerCas?.length || peerTypes?.length) ? (
        <section className="m-section" style={{ padding: '32px 40px 8px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, color: c.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>
                {peerCas ? 'Comparatifs par besoin' : 'Comparatifs par profil'}
              </p>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
                {peerCas ? `Autres guides ${cat?.nom}` : `${cat?.nom} pour d'autres profils`}
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
              {(peerCas || peerTypes || []).map((peer) => (
                <Link key={peer.id} href={`/meilleur/${categorie}/${peer.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="link-card-m" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', transition: 'all 0.2s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                      <div style={{ width: '28px', height: '28px', background: c.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0, border: `1px solid ${c.light}` }}>
                        {peerCas ? '🎯' : '🏢'}
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', lineHeight: 1.3, wordBreak: 'break-word' }}>
                        {peerAnchors[categorie]?.[peer.slug] || peer.label}
                      </span>
                    </div>
                    <span style={{ color: c.accent, fontSize: '16px', flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              ))}
              {/* Lien retour catégorie dans la grille */}
              <Link href={`/categorie/${categorie}`} style={{ textDecoration: 'none' }}>
                <div className="link-card-m" style={{ background: c.bg, border: `1px solid ${c.light}`, borderRadius: '12px', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', transition: 'all 0.2s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                    <div style={{ width: '28px', height: '28px', background: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0, border: `1px solid ${c.light}` }}>
                      📊
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: c.accent, lineHeight: 1.3 }}>
                      {subToCatAnchors[categorie]?.[usage] || `Voir tous les ${cat?.nom}`}
                    </span>
                  </div>
                  <span style={{ color: c.accent, fontSize: '16px', flexShrink: 0 }}>→</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA retour catégorie */}
      <section className="m-cta" style={{ padding: '56px 40px', background: c.gradient, position: 'relative', overflow: 'hidden', marginTop: '56px' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', background: `radial-gradient(circle, ${c.accent}25 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '30px', fontWeight: 800, color: '#fff', letterSpacing: '-1px', marginBottom: '12px' }}>
            Voir tous les {cat?.nom}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', marginBottom: '28px' }}>
            Comparez l&apos;ensemble de notre sélection {cat?.nom} sans filtre.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href={`/categorie/${categorie}`}
              style={{ background: '#fff', color: '#0f172a', padding: '12px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '14px', fontWeight: 700, display: 'inline-block' }}
            >
              {subToCatAnchors[categorie]?.[usage] || `Voir tous les ${cat?.nom}`} →
            </Link>
            <Link
              href="/"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '12px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              Toutes les catégories
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="m-footer" style={{ background: '#0a0f1a', padding: '28px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '16px' }}>🚀</span>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: '15px', fontWeight: 800, color: '#fff' }}>TonMeilleurSaaS</span>
        </Link>
        <p style={{ color: '#475569', fontSize: '13px' }}>© 2026 TonMeilleurSaaS · Comparateur expert de logiciels SaaS</p>
        <Link href={`/categorie/${categorie}`} style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none', fontWeight: 500 }}>
          ← {cat?.nom}
        </Link>
      </footer>
    </main>
  )
}
