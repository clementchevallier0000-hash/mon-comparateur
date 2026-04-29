'use client'
import { useState } from 'react'

export default function NewsletterInline({ accentColor = '#2563eb' }: { accentColor?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.error) { setStatus('error'); return }
      setDownloadUrl(data.downloadUrl)
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '14px', padding: '20px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '20px', marginBottom: '6px' }}>🎉</p>
        <p style={{ fontSize: '15px', fontWeight: 700, color: '#15803d', marginBottom: '6px' }}>C&apos;est dans votre boîte !</p>
        <p style={{ fontSize: '13px', color: '#166534' }}>Vérifiez vos emails pour confirmer votre inscription.</p>
        {downloadUrl && (
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '12px', fontSize: '13px', fontWeight: 700, color: '#15803d', textDecoration: 'underline' }}>
            📥 Télécharger le guide stack SaaS
          </a>
        )}
      </div>
    )
  }

  return (
    <div style={{ background: `${accentColor}0d`, border: `1px solid ${accentColor}30`, borderRadius: '14px', padding: '22px 24px' }}>
      <p style={{ fontSize: '13px', fontWeight: 700, color: accentColor, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        📬 La newsletter TPE / PME
      </p>
      <p style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
        Recevez les meilleurs comparatifs SaaS chaque semaine
      </p>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '14px', lineHeight: 1.5 }}>
        + le guide <strong>Stack SaaS parfaite pour les TPE</strong> offert à l&apos;inscription (PDF, 12 pages).
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="votre@email.fr"
          required
          style={{ flex: '1 1 180px', padding: '10px 14px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{ padding: '10px 18px', borderRadius: '8px', background: accentColor, color: '#fff', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}
        >
          {status === 'loading' ? '…' : 'Recevoir le guide →'}
        </button>
      </form>
      {status === 'error' && <p style={{ fontSize: '12px', color: '#dc2626', marginTop: '8px' }}>Une erreur s&apos;est produite. Réessayez.</p>}
      <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '10px' }}>Sans spam. Désinscription en 1 clic.</p>
    </div>
  )
}
