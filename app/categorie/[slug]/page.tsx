import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import type { Metadata } from "next";
import LogoImg from '@/app/components/LogoImg'

function getLogoUrl(lienAffilie: string): string | null {
  try {
    const hostname = new URL(lienAffilie).hostname.replace('www.', '')
    return `https://logo.clearbit.com/${hostname}`
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { data: categorie } = await supabase.from('categories').select('*').eq('slug', slug).single()
  return {
    title: `Meilleur ${categorie?.nom} pour TPE et PME françaises`,
    description: `Comparatif indépendant des meilleurs ${categorie?.nom}. Trouvez le logiciel adapté à votre entreprise parmi notre sélection testée et approuvée.`,
    alternates: { canonical: `https://mon-comparateur-git-main-clementchevallier0000-1477s-projects.vercel.app/categorie/${slug}` }
  }
}

export default async function CategoriePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data: categorie } = await supabase.from('categories').select('*').eq('slug', slug).single()
  const { data: outils } = await supabase.from('outils').select('*').eq('categorie_id', categorie?.id)
  const { data: cas_usage } = await supabase.from('cas_usage').select('*').eq('categorie_id', categorie?.id)
  const { data: types } = await supabase.from('types_entreprise').select('*')

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link href="/" style={{ textDecoration: 'none', fontSize: '20px', fontWeight: 700, color: '#0f172a' }}>⚡ SEOptimus</Link>
          <Link href="/" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>← Retour</Link>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '50px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#fff', letterSpacing: '-1px', marginBottom: '10px' }}>
            Meilleur {categorie?.nom}
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '16px' }}>{categorie?.description}</p>
        </div>
      </section>

      <section style={{ padding: '40px 40px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>Tous les outils</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {outils?.map((outil, index) => (
              <div key={outil.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'space-between' }}>
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
        </div>
      </section>

      {/* Carousel commenté temporairement pour debug */}

      {cas_usage && cas_usage.length > 0 && (
        <section style={{ padding: '40px 40px 20px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>Comparatifs par besoin</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '12px' }}>
              {cas_usage.map((cas) => (
                <Link key={cas.id} href={`/meilleur/${slug}/${cas.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#0f172a' }}>Meilleur {categorie?.nom} {cas.label}</span>
                    <span style={{ color: '#2563eb' }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {categorie?.contenu && (
        <section style={{ padding: '0 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '56px', border: '1px solid #e2e8f0', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
              <style>{`
                .contenu-cat h2 { font-size: 24px; font-weight: 700; color: #0f172a; margin-top: 48px; margin-bottom: 16px; letter-spacing: -0.5px; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9; }
                .contenu-cat h2:first-child { margin-top: 0; }
                .contenu-cat h3 { font-size: 17px; font-weight: 700; color: #0f172a; margin-top: 32px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
                .contenu-cat h3::before { content: ''; display: inline-block; width: 4px; height: 16px; background: #2563eb; border-radius: 2px; flex-shrink: 0; }
                .contenu-cat p { font-size: 15px; line-height: 1.9; color: #475569; margin-bottom: 16px; }
                .contenu-cat ul { margin-bottom: 20px; padding-left: 0; list-style: none; }
                .contenu-cat ul li { font-size: 15px; line-height: 1.8; color: #475569; margin-bottom: 8px; padding-left: 24px; position: relative; }
                .contenu-cat ul li::before { content: '→'; position: absolute; left: 0; color: #2563eb; font-weight: 600; }
                .contenu-cat strong { color: #0f172a; font-weight: 600; }
                .contenu-cat a { color: #2563eb; text-decoration: none; font-weight: 500; border-bottom: 1px solid #bfdbfe; }
              `}</style>
              <div className="contenu-cat" dangerouslySetInnerHTML={{ __html: categorie.contenu }} />
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: '40px 40px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>Comparatifs par type d&apos;entreprise</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '12px' }}>
            {types?.map((type) => (
              <Link key={type.id} href={`/meilleur/${slug}/${type.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#0f172a' }}>Meilleur {categorie?.nom} pour {type.label}</span>
                  <span style={{ color: '#2563eb' }}>→</span>
                </div>
              </Link>
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