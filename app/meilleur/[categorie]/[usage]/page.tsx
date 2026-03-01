import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ categorie: string, usage: string }> }): Promise<Metadata> {
  const { categorie, usage } = await params
  const { data: cat } = await supabase.from('categories').select('*').eq('slug', categorie).single()
  const { data: cas } = await supabase.from('cas_usage').select('*').eq('slug', usage).single()
  const usageLabel = cas?.label || usage.replace(/-/g, ' ')
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
  const usageLabel = cas?.label || usage.replace(/-/g, ' ')

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
      <section style={{ padding: '40px 40px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {outils?.map((outil, index) => (
              <div key={outil.id} style={{ background: '#fff', border: index === 0 ? '2px solid #2563eb' : '1px solid #e2e8f0', borderRadius: '16px', padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'space-between', position: 'relative' }}>
                {index === 0 && (
                  <div style={{ position: 'absolute', top: '-12px', left: '24px', background: '#2563eb', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px' }}>⭐ Meilleur choix</div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#94a3b8', width: '24px' }}>#{index + 1}</span>
                  <div style={{ width: '48px', height: '48px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>📦</div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>{outil.nom}</h3>
                    <p style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.5, maxWidth: '500px' }}>{outil.description}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>{outil.prix_mensuel}€</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>/ mois</div>
                  </div>
                  <a href={outil.lien_affilie} target="_blank" style={{ background: '#2563eb', color: '#fff', borderRadius: '10px', padding: '10px 20px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    Essayer →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '30px 40px', textAlign: 'center' }}>
        <p style={{ color: '#94a3b8', fontSize: '13px' }}>© 2025 SEOptimus · Comparateur indépendant de logiciels SaaS</p>
      </footer>
    </main>
  )
}