import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import type { Metadata } from 'next'
import LogoImg from '@/app/components/LogoImg'
import SiteHeader from '@/app/components/SiteHeader'
import SiteFooter from '@/app/components/SiteFooter'
import { getLogoUrl } from '@/lib/logo'

export const metadata: Metadata = {
  title: 'Comparer les alternatives SaaS en 2026 — TonMeilleurSaaS',
  description: 'Vous cherchez à remplacer votre logiciel ? Comparez les meilleures alternatives pour chaque outil SaaS — CRM, facturation, SEO, automatisation et gestion de projet.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/alternative' },
}

const catColors: Record<string, { accent: string; bg: string; light: string }> = {
  'crm':               { accent: '#2563eb', bg: '#eff6ff', light: '#dbeafe' },
  'facturation':       { accent: '#ea580c', bg: '#fff7ed', light: '#fed7aa' },
  'gestion-de-projet': { accent: '#16a34a', bg: '#f0fdf4', light: '#bbf7d0' },
  'seo':               { accent: '#9333ea', bg: '#fdf4ff', light: '#e9d5ff' },
  'automatisation':    { accent: '#d97706', bg: '#fffbeb', light: '#fde68a' },
}

const catIcons: Record<string, string> = {
  'crm': '🤝', 'facturation': '💰', 'gestion-de-projet': '📋', 'seo': '🔍', 'automatisation': '⚡',
}

const catLabels: Record<string, string> = {
  'crm': 'CRM', 'facturation': 'Facturation', 'gestion-de-projet': 'Gestion de projet', 'seo': 'SEO', 'automatisation': 'Automatisation',
}

const catOrder = ['crm', 'facturation', 'automatisation', 'seo', 'gestion-de-projet']

export default async function AlternativesPage() {
  const { data: outils } = await supabase
    .from('outils')
    .select('id, nom, slug, categorie_slug, prix_mensuel, note, lien_affilie')
    .order('note', { ascending: false })

  const byCategorie: Record<string, typeof outils> = {}
  for (const o of outils ?? []) {
    if (!byCategorie[o.categorie_slug]) byCategorie[o.categorie_slug] = []
    byCategorie[o.categorie_slug]!.push(o)
  }

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Fraunces:wght@700;800&display=swap" rel="stylesheet" />
      <SiteHeader />

      <style>{`
        .tool-chip { transition: all 0.2s ease; }
        .tool-chip:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
        @media (max-width: 768px) {
          .hero-inner { padding: 40px 20px 36px !important; }
          .hero-h1 { font-size: 28px !important; }
          .section-wrap { padding: 0 16px !important; }
          .tools-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%)', padding: '56px 40px 48px' }}>
        <div className="hero-inner" style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '5px 14px', marginBottom: '20px' }}>
            <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 500 }}>Comparatif 2026 · Mis à jour</span>
          </div>
          <h1 className="hero-h1" style={{ fontFamily: "'Fraunces', serif", fontSize: '38px', fontWeight: 800, color: '#fff', letterSpacing: '-1px', marginBottom: '14px', lineHeight: 1.15 }}>
            Trouvez la meilleure alternative<br />à votre logiciel actuel
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
            Vous souhaitez changer d'outil ? Sélectionnez votre logiciel actuel et découvrez les meilleures alternatives — prix, notes et fonctionnalités comparés.
          </p>
        </div>
      </section>

      {/* Catégories */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 40px 64px' }} className="section-wrap">
        {catOrder.map(cat => {
          const tools = byCategorie[cat] ?? []
          if (tools.length === 0) return null
          const c = catColors[cat] ?? { accent: '#2563eb', bg: '#eff6ff', light: '#dbeafe' }
          return (
            <section key={cat} style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{ fontSize: '22px' }}>{catIcons[cat]}</span>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
                  Alternatives {catLabels[cat]}
                </h2>
                <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600, background: '#f1f5f9', padding: '3px 10px', borderRadius: '999px' }}>
                  {tools.length} outils
                </span>
              </div>

              <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {tools.map(outil => (
                  <Link key={outil.id} href={`/alternative/${outil.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="tool-chip" style={{
                      background: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}>
                      <div style={{ width: '36px', height: '36px', background: c.bg, borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                        <LogoImg src={getLogoUrl(outil.lien_affilie)} alt={outil.nom} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px' }}>Alternatives à {outil.nom}</div>
                        <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                          {outil.note ? `⭐ ${outil.note}/5` : ''}{outil.note && outil.prix_mensuel !== null ? ' · ' : ''}
                          {outil.prix_mensuel !== null ? (outil.prix_mensuel === 0 ? 'Gratuit' : `dès ${outil.prix_mensuel}€/mois`) : ''}
                        </div>
                      </div>
                      <span style={{ color: c.accent, fontSize: '16px', flexShrink: 0 }}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <SiteFooter />
    </main>
  )
}
