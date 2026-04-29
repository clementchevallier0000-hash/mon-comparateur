'use client'
import { useState } from 'react'

const colors = [
  '#2563eb', '#16a34a', '#ea580c', '#9333ea', '#d97706',
  '#0891b2', '#dc2626', '#7c3aed', '#059669', '#db2777'
]

function getColor(name: string) {
  return colors[name.charCodeAt(0) % colors.length]
}

export default function LogoImg({ src, alt, size = 32 }: { src: string | null; alt: string; size?: number }) {
  const [failed, setFailed] = useState(false)
  const initial = alt?.charAt(0)?.toUpperCase() || '?'
  const color = getColor(alt || '')
  const radius = size <= 32 ? '8px' : '12px'

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        onError={() => setFailed(true)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: radius,
          objectFit: 'contain',
          background: '#fff',
          border: '1px solid #f1f5f9',
          flexShrink: 0,
          display: 'block',
        }}
      />
    )
  }

  return (
    <div style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: radius,
      background: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: `${Math.round(size * 0.44)}px`,
      fontWeight: 700,
      fontFamily: 'Inter, sans-serif',
      flexShrink: 0,
    }}>
      {initial}
    </div>
  )
}
