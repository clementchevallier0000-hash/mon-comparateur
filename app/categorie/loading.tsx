import SiteHeader from '@/app/components/SiteHeader'

export default function CategorieLoading() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <SiteHeader />

      {/* Hero skeleton */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '56px 40px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div className="skeleton" style={{ width: '140px', height: '12px', background: 'rgba(255,255,255,0.15)' }} />
          <div className="skeleton" style={{ width: '320px', height: '48px', background: 'rgba(255,255,255,0.15)' }} />
          <div className="skeleton" style={{ width: '260px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />
        </div>
      </section>

      {/* Cards skeleton */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 40px 80px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '28px 32px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
            <div className="skeleton" style={{ width: '52px', height: '52px', borderRadius: '14px', flexShrink: 0 }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className="skeleton" style={{ width: '200px', height: '24px' }} />
              <div className="skeleton" style={{ width: '90%', height: '16px' }} />
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="skeleton" style={{ width: '80px', height: '28px', borderRadius: '8px' }} />
                ))}
              </div>
            </div>
            <div className="skeleton" style={{ width: '120px', height: '40px', borderRadius: '10px', flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </main>
  )
}
