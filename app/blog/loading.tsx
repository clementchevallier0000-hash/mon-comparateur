import SiteHeader from '@/app/components/SiteHeader'

function CardSkeleton() {
  return (
    <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div className="skeleton" style={{ width: '70px', height: '22px', borderRadius: '999px' }} />
        <div className="skeleton" style={{ width: '40px', height: '18px', marginLeft: 'auto' }} />
      </div>
      <div className="skeleton" style={{ width: '90%', height: '22px' }} />
      <div className="skeleton" style={{ width: '60%', height: '22px' }} />
      <div className="skeleton" style={{ width: '100%', height: '16px' }} />
      <div className="skeleton" style={{ width: '80%', height: '16px' }} />
      <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
        <div className="skeleton" style={{ width: '80px', height: '14px' }} />
        <div className="skeleton" style={{ width: '60px', height: '14px' }} />
      </div>
    </div>
  )
}

export default function BlogLoading() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <SiteHeader />

      {/* Hero skeleton */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '56px 48px 48px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="skeleton" style={{ width: '200px', height: '14px', background: 'rgba(255,255,255,0.15)', borderRadius: '4px' }} />
          <div className="skeleton" style={{ width: '420px', height: '44px', background: 'rgba(255,255,255,0.15)' }} />
          <div className="skeleton" style={{ width: '320px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />
        </div>
      </section>

      {/* Content skeleton */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 48px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}
        </div>
      </div>
    </main>
  )
}
