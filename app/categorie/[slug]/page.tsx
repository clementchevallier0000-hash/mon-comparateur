import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default async function CategoriePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data: categorie } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single()

  const { data: outils } = await supabase
    .from('outils')
    .select('*')
    .eq('categorie_id', categorie?.id)

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link href="/" style={{ textDecoration: 'none', fontSize: '20px', fontWeight: 700, color: '#0f172a' }}>
            ⚡ SEOptimus
          </Link>
          <Link href="/" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>
            ← Retour
          </Link>
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

      <section style={{ padding: '40px 40px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {outils && outils.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {outils.map((outil, index) => (
                <div key={outil.id} style={{
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#94a3b8', width: '24px' }}>#{index + 1}</span>
                    <div style={{ width: '48px', height: '48px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
                      📦
                    </div>
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
                    <a href={outil.lien_affilie} target="_blank" style={{
                      background: '#2563eb',
                      color: '#fff',
                      borderRadius: '10px',
                      padding: '10px 20px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 600,
                      whiteSpace: 'nowrap'
                    }}>
                      Essayer →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ color: '#64748b', fontSize: '16px' }}>Aucun outil disponible pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      <footer style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '30px 40px', textAlign: 'center' }}>
        <p style={{ color: '#94a3b8', fontSize: '13px' }}>
          © 2025 SEOptimus · Comparateur indépendant de logiciels SaaS
        </p>
      </footer>
    </main>
  )
}