import SiteHeader from '@/app/components/SiteHeader'

function ToolCardSkeleton() {
  return (
    <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
      <div className="skeleton" style={{ width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div className="skeleton" style={{ width: '140px', height: '18px' }} />
        <div className="skeleton" style={{ width: '100%', height: '14px' }} />
        <div className="skeleton" style={{ width: '75%', height: '14px' }} />
        <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
          <div className="skeleton" style={{ width: '60px', height: '22px', borderRadius: '6px' }} />
          <div className="skeleton" style={{ width: '60px', height: '22px', borderRadius: '6px' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end', flexShrink: 0 }}>
        <div className="skeleton" style={{ width: '70px', height: '20px' }} />
        <div className="skeleton" style={{ width: '90px', height: '36px', borderRadius: '8px' }} />
      </div>
    </div>
  )
}

export default function CategorieSlugLoading() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <SiteHeader />

      {/* Hero skeleton */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '48px 48px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <div className="skeleton" style={{ width: '55px', height: '13px', background: 'rgba(255,255,255,0.15)' }} />
            <div className="skeleton" style={{ width: '8px', height: '13px', background: 'rgba(255,255,255,0.15)' }} />
            <div className="skeleton" style={{ width: '80px', height: '13px', background: 'rgba(255,255,255,0.15)' }} />
          </div>
          <div className="skeleton" style={{ width: '380px', height: '44px', background: 'rgba(255,255,255,0.15)', marginBottom: '16px' }} />
          <div className="skeleton" style={{ width: '300px', height: '20px', background: 'rgba(255,255,255,0.1)', marginBottom: '24px' }} />
          <div style={{ display: 'flex', gap: '12px' }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="skeleton" style={{ width: '80px', height: '32px', borderRadius: '8px', background: 'rgba(255,255,255,0.12)' }} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools grid skeleton */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 48px 80px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div className="skeleton" style={{ width: '180px', height: '20px', marginBottom: '8px' }} />
        {Array.from({ length: 6 }).map((_, i) => <ToolCardSkeleton key={i} />)}
      </div>
    </main>
  )
}
