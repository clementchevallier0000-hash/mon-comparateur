'use client'
import { useState } from 'react'

interface BuyButtonProps {
  accentColor: string
  product: string
  style?: React.CSSProperties
  className?: string
}

export default function BuyButton({ accentColor, product, style, className }: BuyButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleBuy = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ product }) })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error || 'Erreur inconnue')
        setLoading(false)
      }
    } catch (e) {
      setError('Erreur réseau : ' + String(e))
      setLoading(false)
    }
  }

  return (<>
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
    {error && <p style={{ color: 'red', fontSize: '13px', marginTop: '8px', textAlign: 'center' }}>{error}</p>}
  </>)
}
