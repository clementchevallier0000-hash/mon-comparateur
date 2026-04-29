import SiteHeader from '@/app/components/SiteHeader'

export default function ArticleLoading() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#fff', minHeight: '100vh' }}>
      <SiteHeader />

      {/* Header skeleton */}
      <section style={{ padding: '56px 48px 0', background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div className="skeleton" style={{ width: '55px', height: '13px' }} />
            <div className="skeleton" style={{ width: '8px', height: '13px' }} />
            <div className="skeleton" style={{ width: '35px', height: '13px' }} />
          </div>
          {/* Badges */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <div className="skeleton" style={{ width: '70px', height: '24px', borderRadius: '999px' }} />
            <div className="skeleton" style={{ width: '90px', height: '24px' }} />
            <div className="skeleton" style={{ width: '90px', height: '24px' }} />
          </div>
          {/* Title */}
          <div className="skeleton" style={{ width: '85%', height: '44px' }} />
          <div className="skeleton" style={{ width: '60%', height: '44px' }} />
          {/* Description */}
          <div style={{ borderLeft: '3px solid #e2e8f0', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="skeleton" style={{ width: '100%', height: '18px' }} />
            <div className="skeleton" style={{ width: '80%', height: '18px' }} />
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9' }} />
        </div>
      </section>

      {/* Body skeleton */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', display: 'flex', gap: '56px' }}>
        <div style={{ flex: 1, padding: '40px 0 80px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[100, 90, 75, 100, 85, 60, 100, 80, 95, 70, 100, 55].map((w, i) => (
            <div key={i} className="skeleton" style={{ width: `${w}%`, height: i % 5 === 0 ? '24px' : '16px' }} />
          ))}
        </div>
        <aside style={{ width: '280px', flexShrink: 0, paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="skeleton" style={{ width: '80px', height: '11px' }} />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="skeleton" style={{ width: '100%', height: '36px', borderRadius: '10px' }} />
            ))}
          </div>
        </aside>
      </div>
    </main>
  )
}
