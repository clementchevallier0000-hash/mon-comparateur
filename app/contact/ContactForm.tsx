'use client'
import { useState } from 'react'

const subjects = [
  'Suggestion d\'outil à ajouter',
  'Erreur dans une fiche',
  'Question sur un comparatif',
  'Partenariat / affiliation',
  'Autre',
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: subjects[0], message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.error) { setStatus('error'); return }
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = (field: string) => ({
    width: '100%',
    padding: '12px 14px',
    borderRadius: '10px',
    border: `1.5px solid ${focusedField === field ? '#2563eb' : '#e2e8f0'}`,
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    background: '#fff',
    color: '#0f172a',
    transition: 'border-color 0.15s',
    boxSizing: 'border-box' as const,
  })

  if (status === 'done') {
    return (
      <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '16px', padding: '40px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
        <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 800, color: '#15803d', marginBottom: '10px' }}>
          Message envoyé !
        </h3>
        <p style={{ fontSize: '15px', color: '#166534', lineHeight: 1.6 }}>
          Merci {form.name.split(' ')[0]}. Je vous réponds en général sous 48h.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
            Votre nom <span style={{ color: '#dc2626' }}>*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Clément Martin"
            value={form.name}
            onChange={e => set('name', e.target.value)}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            style={inputStyle('name')}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
            Votre email <span style={{ color: '#dc2626' }}>*</span>
          </label>
          <input
            type="email"
            required
            placeholder="vous@exemple.fr"
            value={form.email}
            onChange={e => set('email', e.target.value)}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            style={inputStyle('email')}
          />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
          Sujet
        </label>
        <select
          value={form.subject}
          onChange={e => set('subject', e.target.value)}
          onFocus={() => setFocusedField('subject')}
          onBlur={() => setFocusedField(null)}
          style={{ ...inputStyle('subject'), cursor: 'pointer' }}
        >
          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
          Message <span style={{ color: '#dc2626' }}>*</span>
        </label>
        <textarea
          required
          rows={6}
          placeholder="Décrivez votre demande..."
          value={form.message}
          onChange={e => set('message', e.target.value)}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '130px' }}
        />
      </div>

      {status === 'error' && (
        <p style={{ fontSize: '13px', color: '#dc2626', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '10px 14px' }}>
          Une erreur s&apos;est produite. Réessayez ou écrivez directement à contact@ton-meilleur-saas.fr
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          background: status === 'loading' ? '#94a3b8' : 'linear-gradient(135deg, #2563eb, #7c3aed)',
          color: '#fff',
          border: 'none',
          borderRadius: '12px',
          padding: '14px 28px',
          fontSize: '15px',
          fontWeight: 700,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          fontFamily: 'inherit',
          transition: 'opacity 0.15s',
        }}
      >
        {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message →'}
      </button>

      <p style={{ fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
        Réponse sous 48h en général · Aucune donnée partagée à des tiers
      </p>
    </form>
  )
}
