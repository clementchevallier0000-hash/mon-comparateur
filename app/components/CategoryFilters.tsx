'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'

interface Outil {
  id: number
  nom: string
  slug: string
  description: string
  prix_mensuel: number
  lien_affilie: string
  note: number | null
  essai_gratuit: boolean
  version_gratuite: boolean
}

interface Props {
  outils: Outil[]
  c: { accent: string; bg: string; light: string }
  icon: string
  catSlug: string
}

function getLogoUrl(url: string): string | null {
  try { return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname.replace('www.', '')}&sz=64` }
  catch { return null }
}

const rankConfig: Record<number, { emoji: string; label: string; labelColor: string; labelBg: string; labelBorder: string; borderColor: string }> = {
  0: { emoji: '🥇', label: '🏆 Meilleur choix', labelColor: '#854d0e', labelBg: '#fefce8', labelBorder: '#fde047', borderColor: '#fbbf24' },
  1: { emoji: '🥈', label: '🥈 2ème choix', labelColor: '#374151', labelBg: '#f9fafb', labelBorder: '#d1d5db', borderColor: '#9ca3af' },
  2: { emoji: '🥉', label: '🥉 3ème choix', labelColor: '#92400e', labelBg: '#fff7ed', labelBorder: '#fcd34d', borderColor: '#f59e0b' },
}

type PrixFilter = 'tous' | 'gratuit' | '<20' | '20-50' | '50-100' | '100+'
type BonusFilter = 'essai' | 'note4'

export default function CategoryFilters({ outils, c, icon }: Props) {
  const [prix, setPrix] = useState<PrixFilter>('tous')
  const [bonus, setBonus] = useState<Set<BonusFilter>>(new Set())

  function toggleBonus(f: BonusFilter) {
    setBonus(prev => {
      const next = new Set(prev)
      next.has(f) ? next.delete(f) : next.add(f)
      return next
    })
  }

  const filtered = useMemo(() => {
    return outils.filter(o => {
      if (prix === 'gratuit' && o.prix_mensuel !== 0) return false
      if (prix === '<20' && (o.prix_mensuel === 0 || o.prix_mensuel >= 20)) return false
      if (prix === '20-50' && (o.prix_mensuel < 20 || o.prix_mensuel > 50)) return false
      if (prix === '50-100' && (o.prix_mensuel < 50 || o.prix_mensuel > 100)) return false
      if (prix === '100+' && o.prix_mensuel < 100) return false
      if (bonus.has('essai') && !o.essai_gratuit && !o.version_gratuite) return false
      if (bonus.has('note4') && (!o.note || o.note < 4)) return false
      return true
    })
  }, [outils, prix, bonus])

  const prixOptions: { val: PrixFilter; label: string }[] = [
    { val: 'tous', label: 'Tous les prix' },
    { val: 'gratuit', label: '🆓 Gratuit' },
    { val: '<20', label: '< 20€/mois' },
    { val: '20-50', label: '20–50€/mois' },
    { val: '50-100', label: '50–100€/mois' },
    { val: '100+', label: '100€+/mois' },
  ]

  const top3 = filtered.slice(0, 3)
  const rest = filtered.slice(3)
  const activeCount = (prix !== 'tous' ? 1 : 0) + bonus.size

  return (
    <>
      <style>{`
        .filter-pill { transition: all 0.15s ease; cursor: pointer; border: none; font-family: inherit; }
        .filter-pill:hover { opacity: 0.85; }
        .top-card { transition: all 0.2s ease; }
        .top-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.1); transform: translateY(-3px); }
        .compact-card { transition: all 0.25s ease; }
        .compact-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.07); transform: translateY(-1px); }
        .logo-img { width: 100%; height: 100%; object-fit: contain; border-radius: 4px; }
        @media (max-width: 768px) {
          .filter-bar { gap: 6px !important; }
          .top3-grid { grid-template-columns: 1fr !important; }
          .rest-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Barre de filtres */}
      <div style={{ marginBottom: '24px' }}>
        <div className="filter-bar" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
          {prixOptions.map(opt => (
            <button
              key={opt.val}
              className="filter-pill"
              onClick={() => setPrix(opt.val)}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '13px',
                fontWeight: 600,
                background: prix === opt.val ? c.accent : '#fff',
                color: prix === opt.val ? '#fff' : '#475569',
                border: `1.5px solid ${prix === opt.val ? c.accent : '#e2e8f0'}`,
              }}
            >
              {opt.label}
            </button>
          ))}
          <button
            className="filter-pill"
            onClick={() => toggleBonus('essai')}
            style={{
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 600,
              background: bonus.has('essai') ? '#f0fdf4' : '#fff',
              color: bonus.has('essai') ? '#16a34a' : '#475569',
              border: `1.5px solid ${bonus.has('essai') ? '#16a34a' : '#e2e8f0'}`,
            }}
          >
            🎯 Essai gratuit
          </button>
          <button
            className="filter-pill"
            onClick={() => toggleBonus('note4')}
            style={{
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 600,
              background: bonus.has('note4') ? '#fffbeb' : '#fff',
              color: bonus.has('note4') ? '#d97706' : '#475569',
              border: `1.5px solid ${bonus.has('note4') ? '#d97706' : '#e2e8f0'}`,
            }}
          >
            ⭐ Note 4+
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>
            {filtered.length} outil{filtered.length > 1 ? 's' : ''} affiché{filtered.length > 1 ? 's' : ''}
          </span>
          {activeCount > 0 && (
            <button
              className="filter-pill"
              onClick={() => { setPrix('tous'); setBonus(new Set()) }}
              style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, background: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca' }}
            >
              Réinitialiser ✕
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px 24px', background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <p style={{ fontSize: '32px', marginBottom: '12px' }}>🔍</p>
          <p style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Aucun outil ne correspond</p>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>Essayez d'élargir vos filtres.</p>
          <button className="filter-pill" onClick={() => { setPrix('tous'); setBonus(new Set()) }} style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, background: c.accent, color: '#fff', border: 'none' }}>
            Voir tous les outils
          </button>
        </div>
      )}

      {/* Top 3 */}
      {top3.length > 0 && (
        <div className="top3-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
          {top3.map((outil, index) => {
            const rank = rankConfig[index]
            const isFree = outil.prix_mensuel === 0
            const logo = getLogoUrl(outil.lien_affilie)
            return (
              <Link key={outil.id} href={`/outils/${outil.slug}`} style={{ textDecoration: 'none' }}>
                <div className="top-card" style={{
                  background: '#fff',
                  border: index === 0 ? `2px solid ${c.accent}44` : '1px solid #e2e8f0',
                  borderTop: `4px solid ${rank?.borderColor || c.accent}`,
                  borderRadius: '16px',
                  padding: '22px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    {rank && (
                      <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', background: rank.labelBg, color: rank.labelColor, border: `1px solid ${rank.labelBorder}` }}>
                        {rank.label}
                      </span>
                    )}
                    {isFree && (
                      <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0' }}>Gratuit</span>
                    )}
                    <span style={{ fontSize: '22px', marginLeft: 'auto' }}>{rank?.emoji || `#${index + 1}`}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '48px', height: '48px', background: c.bg, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                      {logo ? <img className="logo-img" src={logo} alt={outil.nom} /> : <span style={{ fontSize: '20px' }}>{icon}</span>}
                    </div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '2px' }}>{outil.nom}</div>
                      <span style={{ fontSize: '18px', fontWeight: 800, color: c.accent, fontFamily: 'serif' }}>
                        {isFree ? 'Gratuit' : `${outil.prix_mensuel}€`}
                        {!isFree && <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>/mois</span>}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {outil.description}
                  </p>
                  {outil.note && (
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1,2,3,4,5].map(s => (
                        <span key={s} style={{ color: s <= Math.round(outil.note!) ? '#f59e0b' : '#e2e8f0', fontSize: '13px' }}>★</span>
                      ))}
                      <span style={{ fontSize: '12px', color: '#64748b', marginLeft: '4px' }}>{outil.note}/5</span>
                    </div>
                  )}
                  <div style={{ background: c.bg, color: c.accent, border: `1px solid ${c.light}`, borderRadius: '8px', padding: '8px 12px', fontSize: '12px', fontWeight: 700, textAlign: 'center' }}>
                    Voir l&apos;avis →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}

      {/* Reste */}
      {rest.length > 0 && (
        <>
          <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px', marginTop: '8px' }}>
            Autres alternatives
          </p>
          <div className="rest-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {rest.map((outil, index) => {
              const isFree = outil.prix_mensuel === 0
              const logo = getLogoUrl(outil.lien_affilie)
              return (
                <Link key={outil.id} href={`/outils/${outil.slug}`} style={{ textDecoration: 'none', minWidth: 0 }}>
                  <div className="compact-card" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '10px', overflow: 'hidden' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#cbd5e1', width: '18px', flexShrink: 0, textAlign: 'center' }}>#{index + 4}</span>
                    <div style={{ width: '34px', height: '34px', background: c.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                      {logo ? <img className="logo-img" src={logo} alt={outil.nom} /> : <span style={{ fontSize: '14px' }}>{icon}</span>}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{outil.nom}</span>
                        {isFree && <span style={{ fontSize: '10px', fontWeight: 700, padding: '1px 6px', borderRadius: '999px', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', flexShrink: 0 }}>Gratuit</span>}
                      </div>
                      <p style={{ fontSize: '12px', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', margin: 0 }}>{outil.description}</p>
                    </div>
                    <div style={{ flexShrink: 0, textAlign: 'right' }}>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', fontFamily: 'serif', whiteSpace: 'nowrap' }}>
                        {isFree ? 'Gratuit' : `${outil.prix_mensuel}€`}
                      </div>
                      {!isFree && <div style={{ fontSize: '10px', color: '#94a3b8' }}>/mois</div>}
                    </div>
                    <span style={{ color: c.accent, fontSize: '14px', flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}
