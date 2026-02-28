import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default async function Home() {
  const { data: categories } = await supabase
    .from('categories')
    .select('*')

  const icons: Record<string, string> = {
    'crm': '🤝',
    'facturation': '💰',
    'gestion-de-projet': '📋',
    'seo': '🔍',
    'automatisation': '⚡',
  }

  const colors: Record<string, string> = {
    'crm': '#f0f7ff',
    'facturation': '#fff7ed',
    'gestion-de-projet': '#f0fdf4',
    'seo': '#fdf4ff',
    'automatisation': '#fffbeb',
  }

  const accents: Record<string, string> = {
    'crm': '#2563eb',
    'facturation': '#ea580c',
    'gestion-de-projet': '#16a34a',
    'seo': '#9333ea',
    'automatisation': '#d97706',
  }

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Cal+Sans&display=swap" rel="stylesheet" />

      {/* Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '0 40px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <span style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a' }}>
            ⚡ SEOptimus
          </span>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ background: '#f1f5f9', color: '#64748b', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '999px' }}>
              100% indépendant
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', display: 'inline-block' }}></span>
            <span style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 500 }}>+50 logiciels comparés</span>
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '20px' }}>
            Le meilleur logiciel<br />pour votre entreprise
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '18px', lineHeight: 1.6, marginBottom: '36px' }}>
            Comparatifs honnêtes et indépendants pour TPE et PME françaises.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>50+</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>Outils testés</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>5</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>Catégories</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>100%</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>Gratuit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '60px 40px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.5px' }}>Catégories</h2>
              <p style={{ color: '#64748b', fontSize: '15px', marginTop: '4px' }}>Choisissez votre domaine</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
            {categories?.map((cat) => (
              <Link href={`/categorie/${cat.slug}`} key={cat.id} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    background: colors[cat.slug] || '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    flexShrink: 0
                  }}>
                    {icons[cat.slug] || '📦'}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#0f172a' }}>{cat.nom}</h3>
                      <span style={{ color: accents[cat.slug] || '#2563eb', fontSize: '18px' }}>→</span>
                    </div>
                    <p style={{ color: '#64748b', fontSize: '13px', marginTop: '4px', lineHeight: 1.5 }}>
                      {cat.description}
                    </p>
                    <div style={{ marginTop: '12px', display: 'flex', gap: '6px' }}>
                      <span style={{ background: colors[cat.slug] || '#f1f5f9', color: accents[cat.slug] || '#2563eb', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '999px' }}>
                        Voir les comparatifs
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '30px 40px', textAlign: 'center' }}>
        <p style={{ color: '#94a3b8', fontSize: '13px' }}>
          © 2025 SEOptimus · Comparateur indépendant de logiciels SaaS pour entreprises françaises
        </p>
      </footer>
    </main>
  )
}