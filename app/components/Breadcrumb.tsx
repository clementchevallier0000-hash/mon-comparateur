import Link from 'next/link'

interface Crumb { label: string; href?: string }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94a3b8', flexWrap: 'wrap', marginBottom: '20px' }}>
      <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Accueil</Link>
      {crumbs.map((c, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>›</span>
          {c.href ? (
            <Link href={c.href} style={{ color: '#94a3b8', textDecoration: 'none' }}>{c.label}</Link>
          ) : (
            <span style={{ color: '#475569', fontWeight: 500 }}>{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
