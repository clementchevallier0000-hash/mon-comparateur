'use client'
import { useState } from 'react'

interface BuyButtonProps {
  accentColor: string
  style?: React.CSSProperties
  className?: string
}

export default function BuyButton({ accentColor, style, className }: BuyButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleBuy = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const { url } = await res.json()
      window.location.href = url
    } catch {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className={className}
      style={{
        display: 'block',
        width: '100%',
        background: loading ? '#94a3b8' : `linear-gradient(135deg, ${accentColor}, #ea580c)`,
        color: '#fff',
        border: 'none',
        padding: '16px',
        borderRadius: '12px',
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: 700,
        cursor: loading ? 'not-allowed' : 'pointer',
        boxShadow: loading ? 'none' : '0 4px 20px rgba(217,119,6,0.35)',
        transition: 'all 0.15s',
        ...style,
      }}
    >
      {loading ? 'Redirection...' : 'Acheter maintenant →'}
    </button>
  )
}
