'use client'
import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ downloadUrl: string | null; promoCode: string; alreadySubscribed?: boolean } | null>(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.error) { setError(data.error); setLoading(false); return }
      setResult(data)
    } catch {
      setError('Une erreur est survenue, réessayez.')
    }
    setLoading(false)
  }

  if (result) {
    return (
      <div style={{ textAlign: 'center', padding: '8px 0' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
        <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.5px' }}>
          {result.alreadySubscribed ? 'Vous êtes déjà abonné !' : 'Bienvenue dans la newsletter !'}
        </h3>
        <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '24px', lineHeight: 1.6 }}>
          {result.alreadySubscribed
            ? 'Voici à nouveau vos cadeaux de bienvenue.'
            : 'Vos cadeaux sont prêts — bonne lecture et bonne automatisation !'}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px', margin: '0 auto' }}>
          {result.downloadUrl && (
            <a
              href={result.downloadUrl}
              download
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                background: 'linear-gradient(135deg, #0f172a, #1e3a5f)',
                color: '#fff', textDecoration: 'none', padding: '16px 24px',
                borderRadius: '12px', fontSize: '15px', fontWeight: 700,
              }}
            >
              📥 Télécharger le guide PDF gratuit
            </a>
          )}

          <div style={{
            background: '#fefce8', border: '2px dashed #fbbf24',
            borderRadius: '12px', padding: '16px 20px',
          }}>
            <p style={{ fontSize: '13px', color: '#92400e', fontWeight: 600, marginBottom: '6px' }}>
              🎁 Votre code promo (bientôt disponible)
            </p>
            <p style={{
              fontFamily: 'monospace', fontSize: '24px', fontWeight: 800,
              color: '#0f172a', letterSpacing: '3px',
            }}>
              {result.promoCode}
            </p>
            <p style={{ fontSize: '12px', color: '#92400e', marginTop: '6px' }}>
              À utiliser lors de votre prochain achat
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '480px', margin: '0 auto' }}>
      <style>{`
        .nl-row { display: flex; gap: 8px; }
        .nl-btn { padding: 14px 20px; border-radius: 12px; border: none; color: #fff; font-size: 15px; font-weight: 700; white-space: nowrap; font-family: 'DM Sans', sans-serif; }
        @media (max-width: 520px) {
          .nl-row { flex-direction: column; }
          .nl-btn { width: 100%; }
        }
      `}</style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div className="nl-row">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="votre@email.fr"
            required
            style={{
              flex: 1, padding: '14px 18px', borderRadius: '12px',
              border: '2px solid #e2e8f0', fontSize: '15px',
              outline: 'none', color: '#0f172a', background: '#fff',
              fontFamily: "'DM Sans', sans-serif", minWidth: 0,
            }}
          />
          <button
            type="submit"
            disabled={loading}
            className="nl-btn"
            style={{
              background: loading ? '#94a3b8' : 'linear-gradient(135deg, #d97706, #b45309)',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: loading ? 'none' : '0 4px 16px rgba(217,119,6,0.4)',
            }}
          >
            {loading ? '...' : 'Je veux mon guide →'}
          </button>
        </div>

        {error && <p style={{ fontSize: '13px', color: '#dc2626', textAlign: 'center' }}>{error}</p>}

        <p style={{ fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
          🔒 Pas de spam. Désabonnement en 1 clic. Vos données restent privées.
        </p>
      </div>
    </form>
  )
}
