import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import type { Metadata } from "next";
import LogoImg from '@/app/components/LogoImg'

function getLogoUrl(lienAffilie: string): string | null {
  try {
    const hostname = new URL(lienAffilie).hostname.replace('www.', '')
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ categorie: string, usage: string }> }): Promise<Metadata> {
  const { categorie, usage } = await params
  const { data: cat } = await supabase.from('categories').select('*').eq('slug', categorie).single()
  const { data: cas } = await supabase.from('cas_usage').select('*').eq('slug', usage).single()
  const { data: typeEntreprise } = await supabase.from('types_entreprise').select('*').eq('slug', usage).single()
  const usageLabel = cas?.label || typeEntreprise?.label || usage.replace(/-/g, ' ')
  return {
    title: `Meilleur ${cat?.nom} pour ${usageLabel} en 2025`,
    description: `Comparatif des meilleurs ${cat?.nom} pour ${usageLabel}. Trouvez l'outil adapté à vos besoins parmi notre sélection indépendante et honnête.`,
    alternates: { canonical: `https://mon-comparateur-git-main-clementchevallier0000-1477s-projects.vercel.app/meilleur/${categorie}/${usage}` }
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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Meilleur ${cat?.nom} pour ${usageLabel}`,
    "description": `Comparatif des meilleurs ${cat?.nom} pour ${usageLabel}`,
    "numberOfItems": outils?.length || 0,
    "itemListElement": outils?.map((outil, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": outil.nom,
      "description": outil.description,
      "url": outil.lien_affilie
    }))
  }

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link href="/" style={{ textDecoration: 'none', fontSize: '20px', fontWeight: 700, color: '#0f172a' }}>⚡ SEOptimus</Link>
          <Link href={`/categorie/${categorie}`} style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>← Retour</Link>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '50px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#fff', letterSpacing: '-1px', marginBottom: '10px' }}>
            Meilleur {cat?.nom} pour {usageLabel}
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '16px' }}>Comparatif indépendant — mis à jour en 2025</p>
        </div>
      </section>

      <section style={{ padding: '40px 40px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {outils?.map((outil, index) => (
              <div key={outil.id} style={{ background: '#fff', border: index === 0 ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '16px', padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'space-between', position: 'relative' }}>
                {index === 0 && (
                  <div style={{ position: 'absolute', top: '-12px', left: '24px', background: '#2563eb', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px' }}>⭐ Meilleur choix</div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#94a3b8', width: '24px' }}>#{index + 1}</span>
                  <div style={{ width: '48px', height: '48px', background: '#fff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid #e2e8f0', flexShrink: 0 }}>
                    <LogoImg src={getLogoUrl(outil.lien_affilie)} alt={outil.nom} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>{outil.nom}</h3>
                    <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.5, maxWidth: '500px' }}>{outil.description}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>{outil.prix_mensuel === 0 ? 'Gratuit' : `${outil.prix_mensuel}€`}</div>
                    {outil.prix_mensuel > 0 && <div style={{ fontSize: '11px', color: '#94a3b8' }}>/ mois</div>}
                  </div>
                  <a href={outil.lien_affilie} target="_blank" style={{ background: '#2563eb', color: '#fff', borderRadius: '10px', padding: '10px 20px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    Essayer →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {contenu && (
            <div style={{ marginTop: '40px', background: '#fff', borderRadius: '20px', padding: '56px', border: '1px solid #e2e8f0', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
              <style>{`
                .contenu h2 { font-size: 24px; font-weight: 700; color: #0f172a; margin-top: 48px; margin-bottom: 16px; letter-spacing: -0.5px; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9; }
                .contenu h2:first-child { margin-top: 0; }
                .contenu h3 { font-size: 17px; font-weight: 700; color: #0f172a; margin-top: 32px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
                .contenu h3::before { content: ''; display: inline-block; width: 4px; height: 16px; background: #2563eb; border-radius: 2px; flex-shrink: 0; }
                .contenu p { font-size: 15px; line-height: 1.9; color: #475569; margin-bottom: 16px; }
                .contenu ul { margin-bottom: 20px; padding-left: 0; list-style: none; }
                .contenu ul li { font-size: 15px; line-height: 1.8; color: #475569; margin-bottom: 8px; padding-left: 24px; position: relative; }
                .contenu ul li::before { content: '→'; position: absolute; left: 0; color: #2563eb; font-weight: 600; }
                .contenu strong { color: #0f172a; font-weight: 600; }
                .contenu a { color: #2563eb; text-decoration: none; font-weight: 500; border-bottom: 1px solid #bfdbfe; }
                .contenu table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
                .contenu table th { background: #f8fafc; padding: 12px 16px; text-align: left; font-size: 13px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #e2e8f0; }
                .contenu table td { padding: 12px 16px; font-size: 14px; color: #475569; border-bottom: 1px solid #f1f5f9; }
                .contenu table tr:hover td { background: #f8fafc; }
              `}</style>
              <div className="contenu" dangerouslySetInnerHTML={{ __html: contenu }} />
            </div>
          )}
        </div>
      </section>

      <footer style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '30px 40px', marginTop: '80px', textAlign: 'center' }}>
        <p style={{ color: '#94a3b8', fontSize: '13px' }}>© 2025 SEOptimus · Comparateur indépendant de logiciels SaaS</p>
      </footer>
    </main>
  )
}