import Link from 'next/link'
import type { Metadata } from 'next'
import SiteHeader from '@/app/components/SiteHeader'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Toutes les catégories de logiciels SaaS — Comparatifs TPE/PME 2026 | TonMeilleurSaaS',
  description: 'Comparez les meilleurs logiciels SaaS par catégorie : CRM, facturation, gestion de projet, SEO, automatisation. Comparatifs honnêtes et mis à jour en 2026 pour TPE et PME françaises.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/categorie' },
}

const catMeta: Record<string, { emoji: string; accent: string; bg: string; accentLight: string; tools: string[] }> = {
  crm:               { emoji: '🤝', accent: '#2563eb', bg: '#eff6ff', accentLight: '#bfdbfe', tools: ['HubSpot', 'Pipedrive', 'Karlia', 'Salesforce'] },
  facturation:       { emoji: '💶', accent: '#ea580c', bg: '#fff7ed', accentLight: '#fed7aa', tools: ['Pennylane', 'Indy', 'Sellsy', 'Tiime'] },
  'gestion-de-projet': { emoji: '📋', accent: '#16a34a', bg: '#f0fdf4', accentLight: '#bbf7d0', tools: ['Notion', 'Monday', 'Trello', 'Asana'] },
  seo:               { emoji: '🔍', accent: '#9333ea', bg: '#fdf4ff', accentLight: '#e9d5ff', tools: ['Semrush', 'Ahrefs', 'Ubersuggest', 'Moz'] },
  automatisation:    { emoji: '⚡', accent: '#d97706', bg: '#fffbeb', accentLight: '#fde68a', tools: ['Make', 'n8n', 'Zapier'] },
}

export default async function CategoriesPage() {
  const { data: categories } = await supabase
    .from('categories')
    .select('slug,nom,description,h1')

  const { data: toolCounts } = await supabase
    .from('outils')
    .select('categorie_slug')

  const counts: Record<string, number> = {}
  toolCounts?.forEach(t => {
    counts[t.categorie_slug] = (counts[t.categorie_slug] || 0) + 1
  })

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'DM Sans', Arial, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Fraunces:wght@700;800;900&display=swap" rel="stylesheet" />
      <style>{`.cat-card { transition: transform 0.2s ease, box-shadow 0.2s ease; } .cat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }`}</style>

      <SiteHeader />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '56px 24px 64px', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>Mis à jour en 2026 · Comparatifs experts</span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, color: '#fff', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: '20px' }}>
            Comparatifs logiciels SaaS<br />pour TPE et PME françaises
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
            Choisissez une catégorie pour accéder au comparatif complet, aux avis utilisateurs et aux recommandations adaptées à votre profil.
          </p>
        </div>
      </section>

      {/* Grille catégories */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {categories?.map(cat => {
            const meta = catMeta[cat.slug] || { emoji: '📦', accent: '#64748b', bg: '#f8fafc', accentLight: '#e2e8f0', tools: [] }
            const count = counts[cat.slug] || 0
            return (
              <Link key={cat.slug} href={`/categorie/${cat.slug}`} style={{ textDecoration: 'none' }}>
                <div className="cat-card" style={{
                  background: '#fff',
                  borderRadius: '20px',
                  border: `1.5px solid ${meta.accentLight}`,
                  padding: '28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}>
                  {/* Top */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                    <div style={{ width: '52px', height: '52px', background: meta.bg, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0 }}>
                      {meta.emoji}
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: meta.accent, background: meta.bg, padding: '4px 10px', borderRadius: '999px', border: `1px solid ${meta.accentLight}`, whiteSpace: 'nowrap' }}>
                      {count} outil{count > 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Nom + description */}
                  <div>
                    <p style={{ fontSize: '20px', fontFamily: "'Fraunces', serif", fontWeight: 800, color: '#0f172a', marginBottom: '6px', lineHeight: 1.2 }}>
                      {cat.nom}
                    </p>
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>
                      {cat.description}
                    </p>
                  </div>

                  {/* Outils phares */}
                  {meta.tools.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                      {meta.tools.map(t => (
                        <span key={t} style={{ fontSize: '11px', fontWeight: 600, color: '#475569', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '3px 8px', borderRadius: '6px' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: meta.accent }}>Voir le comparatif</span>
                    <span style={{ fontSize: '16px', color: meta.accent }}>→</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Quiz CTA */}
        <div style={{ marginTop: '56px', background: 'linear-gradient(135deg, #0f172a, #1e3a5f)', borderRadius: '24px', padding: '40px 32px', textAlign: 'center', color: '#fff' }}>
          <p style={{ fontSize: '32px', marginBottom: '12px' }}>🎯</p>
          <p style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, marginBottom: '10px' }}>
            Pas sûr de quelle catégorie vous avez besoin ?
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '24px' }}>
            Répondez à 4 questions et obtenez une recommandation personnalisée en 2 minutes.
          </p>
          <Link href="/quiz" style={{ display: 'inline-block', background: '#fff', color: '#0f172a', textDecoration: 'none', padding: '14px 28px', borderRadius: '12px', fontSize: '15px', fontWeight: 700 }}>
            Faire le quiz →
          </Link>
        </div>
      </section>
    </div>
  )
}
