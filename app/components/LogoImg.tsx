'use client'

const colors = [
  '#2563eb', '#16a34a', '#ea580c', '#9333ea', '#d97706',
  '#0891b2', '#dc2626', '#7c3aed', '#059669', '#db2777'
]

function getColor(name: string) {
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

export default function LogoImg({ src, alt }: { src: string | null, alt: string }) {
  const initial = alt?.charAt(0)?.toUpperCase() || '?'
  const color = getColor(alt || '')

  return (
    <div style={{
      width: '32px',
      height: '32px',
      borderRadius: '8px',
      background: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '14px',
      fontWeight: 700,
      fontFamily: 'Inter, sans-serif',
      flexShrink: 0
    }}>
      {initial}
    </div>
  )
}