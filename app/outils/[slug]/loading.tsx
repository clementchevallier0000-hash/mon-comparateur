import SiteHeader from '@/app/components/SiteHeader'

export default function OutilLoading() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <SiteHeader />

      {/* Hero skeleton */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '40px 48px 48px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
            <div className="skeleton" style={{ width: '55px', height: '13px', background: 'rgba(255,255,255,0.15)' }} />
            <div className="skeleton" style={{ width: '8px', height: '13px', background: 'rgba(255,255,255,0.15)' }} />
            <div className="skeleton" style={{ width: '80px', height: '13px', background: 'rgba(255,255,255,0.15)' }} />
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div className="skeleton" style={{ width: '72px', height: '72px', borderRadius: '16px', flexShrink: 0, background: 'rgba(255,255,255,0.15)' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="skeleton" style={{ width: '60px', height: '22px', borderRadius: '999px', background: 'rgba(255,255,255,0.15)' }} />
              <div className="skeleton" style={{ width: '260px', height: '36px', background: 'rgba(255,255,255,0.15)' }} />
              <div className="skeleton" style={{ width: '380px', height: '18px', background: 'rgba(255,255,255,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 48px 80px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Score card */}
        <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ flex: '1 1 120px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="skeleton" style={{ width: '80px', height: '12px' }} />
              <div className="skeleton" style={{ width: '60px', height: '28px' }} />
            </div>
          ))}
        </div>
        {/* Features */}
        <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="skeleton" style={{ width: '160px', height: '22px', marginBottom: '4px' }} />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div className="skeleton" style={{ width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0 }} />
              <div className="skeleton" style={{ width: `${70 + (i * 7) % 25}%`, height: '16px' }} />
            </div>
          ))}
        </div>
        {/* Pricing */}
        <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="skeleton" style={{ width: '120px', height: '22px', marginBottom: '4px' }} />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="skeleton" style={{ width: '100%', height: '52px', borderRadius: '10px' }} />
          ))}
        </div>
      </div>
    </main>
  )
}
