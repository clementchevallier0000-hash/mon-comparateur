'use client'

interface Props {
  href: string
  isTop: boolean
  accent: string
}

export default function AffiliateButton({ href, isTop, accent }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={e => e.stopPropagation()}
      style={{
        background: isTop ? accent : '#0f172a',
        color: '#fff',
        borderRadius: '10px',
        padding: '9px 18px',
        textDecoration: 'none',
        fontSize: '13px',
        fontWeight: 700,
        whiteSpace: 'nowrap',
        display: 'block',
      }}
    >
      Essayer →
    </a>
  )
}
