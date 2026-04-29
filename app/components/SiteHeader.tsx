import Link from 'next/link'
import SearchModal from './SearchModal'
import MobileMenu from './MobileMenu'

export default function SiteHeader() {
  return (
    <header style={{
      background: 'rgba(255,255,255,0.96)',
      borderBottom: '1px solid #e2e8f0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(16px)',
    }}>
      <style>{`
        .site-header-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; display: flex; align-items: center; justify-content: space-between; height: 68px; }
        .site-header-nav { display: flex; gap: 24px; align-items: center; }
        .site-header-nav a { color: #64748b; font-size: 14px; text-decoration: none; font-weight: 500; transition: color 0.15s; }
        .site-header-nav a:hover { color: #0f172a; }
        @media (max-width: 768px) {
          .site-header-inner { padding: 0 20px; }
          .site-header-nav { display: none; }
        }
      `}</style>
      <div className="site-header-inner">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
            TonMeilleurSaaS
          </span>
        </Link>

        <nav className="site-header-nav">
          <Link href="/categorie/crm">Catégories</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/quiz">🎯 Quiz</Link>
          <Link href="/a-propos">À propos</Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <SearchModal />
          <Link href="/boutique" style={{
            fontSize: '14px',
            fontWeight: 700,
            color: '#d97706',
            textDecoration: 'none',
            background: '#fffbeb',
            padding: '8px 16px',
            borderRadius: '10px',
            border: '1px solid #fde68a',
            whiteSpace: 'nowrap',
          }}>
            🛍️ Boutique
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
