'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/categorie', label: 'Catégories' },
  { href: '/blog', label: 'Blog' },
  { href: '/quiz', label: '🎯 Quiz' },
  { href: '/a-propos', label: 'À propos' },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="site-header-nav">
      {links.map(({ href, label }) => {
        const active = pathname === href || pathname.startsWith(href + '/')
        return (
          <Link
            key={href}
            href={href}
            style={{
              color: active ? '#0f172a' : '#64748b',
              fontWeight: active ? 700 : 500,
              borderBottom: active ? '2px solid #2563eb' : '2px solid transparent',
              paddingBottom: '2px',
            }}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
