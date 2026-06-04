'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { getLogoUrl } from '@/lib/logo'
import { NOTE_SOURCES } from '@/lib/noteSources'

interface Outil {
  id: number
  nom: string
  slug: string
  description: string
  prix_mensuel: number
  prix_annuel: number | null
  lien_affilie: string
  note: number | null
  essai_gratuit: boolean
  version_gratuite: boolean
  screenshot_url?: string | null
}

interface Props {
  outils: Outil[]
  c: { accent: string; bg: string; light: string }
  icon: string
  catSlug: string
}

function isTracked(url: string): boolean {
  if (!url) return false
  try {
    const u = new URL(url)
    const affiliateParams = ['a', 'ae', 'pc', 'p', 'af', 'id_affiliate', 'link']
    if (u.search.length > 1 && affiliateParams.some(p => u.searchParams.has(p))) return true
    if (['affilae.com', 'partnerlinks.io', 'yuccanlead.com'].some(d => u.hostname.includes(d))) return true
    if (['aff.', 'try.', 'get.', 'go.', 'link.'].some(p => u.hostname.startsWith(p))) return true
    return false
  } catch { return false }
}

const rankConfig: Record<number, { emoji: string; label: string; labelColor: string; labelBg: string; labelBorder: string; borderColor: string }> = {
  0: { emoji: '🥇', label: '🏆 Meilleur choix', labelColor: '#854d0e', labelBg: '#fefce8', labelBorder: '#fde047', borderColor: '#fbbf24' },
  1: { emoji: '🥈', label: '🥈 2ème choix', labelColor: '#374151', labelBg: '#f9fafb', labelBorder: '#d1d5db', borderColor: '#9ca3af' },
  2: { emoji: '🥉', label: '🥉 3ème choix', labelColor: '#92400e', labelBg: '#fff7ed', labelBorder: '#fcd34d', borderColor: '#f59e0b' },
}

type PrixFilter = 'tous' | 'gratuit' | '<20' | '20-50' | '50-100' | '100+'
type BonusFilter = 'essai' | 'note4'
type ViewMode = 'cards' | 'table'

function computeBadge(outil: Outil, allOutils: Outil[], index: number): { label: string; color: string; bg: string; border: string } | null {
  // Meilleur rapport Q/P : note élevée + prix bas (parmi les payants)
  const payants = allOutils.filter(o => o.prix_mensuel > 0 && o.note)
  if (payants.length >= 2) {
    const scores = payants.map(o => ({ slug: o.slug, score: (o.note! / 5) - (o.prix_mensuel / 200) }))
    scores.sort((a, b) => b.score - a.score)
    if (scores[0]?.slug === outil.slug && index > 0) {
      return { label: '💰 Meilleur rapport qualité/prix', color: '#166534', bg: '#f0fdf4', border: '#bbf7d0' }
    }
  }
  // Mieux noté
  const avecNote = allOutils.filter(o => o.note)
  if (avecNote.length >= 2) {
    const best = [...avecNote].sort((a, b) => b.note! - a.note!)[0]
    if (best.slug === outil.slug && index > 0 && outil.note && outil.note >= 4) {
      return { label: '⭐ Mieux noté', color: '#92400e', bg: '#fffbeb', border: '#fde68a' }
    }
  }
  // Outil récent (id parmi les plus élevés de la catégorie)
  const maxId = Math.max(...allOutils.map(o => o.id))
  const recentThreshold = maxId - 5
  if (outil.id >= recentThreshold && allOutils.length > 3) {
    return { label: '🆕 Nouveau', color: '#1d4ed8', bg: '#eff6ff', border: '#bfdbfe' }
  }
  return null
}

export default function CategoryFilters({ outils, c, icon, catSlug }: Props) {
  const [prix, setPrix] = useState<PrixFilter>('tous')
  const [bonus, setBonus] = useState<Set<BonusFilter>>(new Set())
  const [annuel, setAnnuel] = useState(false)
  const [view, setView] = useState<ViewMode>('cards')

  function toggleBonus(f: BonusFilter) {
    setBonus(prev => {
      const next = new Set(prev)
      next.has(f) ? next.delete(f) : next.add(f)
      return next
    })
  }

  const filtered = useMemo(() => {
    const arr = outils.filter(o => {
      if (prix === 'gratuit' && o.prix_mensuel !== 0) return false
      if (prix === '<20' && (o.prix_mensuel === 0 || o.prix_mensuel >= 20)) return false
      if (prix === '20-50' && (o.prix_mensuel < 20 || o.prix_mensuel > 50)) return false
      if (prix === '50-100' && (o.prix_mensuel < 50 || o.prix_mensuel > 100)) return false
      if (prix === '100+' && o.prix_mensuel < 100) return false
      if (bonus.has('essai') && !o.essai_gratuit && !o.version_gratuite) return false
      if (bonus.has('note4') && (!o.note || o.note < 4)) return false
      return true
    })
    // Outils avec lien tracké en premier (tri stable — ordre initial préservé dans chaque groupe)
    return [...arr].sort((a, b) => (isTracked(a.lien_affilie) ? 0 : 1) - (isTracked(b.lien_affilie) ? 0 : 1))
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

  const hasAnnuel = outils.some(o => o.prix_annuel)

  function displayPrice(o: Outil) {
    if (o.prix_mensuel === 0) return { label: 'Gratuit', sub: null }
    if (annuel && o.prix_annuel) {
      const mensuel = Math.round(o.prix_annuel / 12)
      const economy = Math.round((1 - mensuel / o.prix_mensuel) * 100)
      return { label: `${mensuel}€`, sub: `/mois · −${economy}% vs mensuel` }
    }
    return { label: `${o.prix_mensuel}€`, sub: '/mois' }
  }

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
        .table-row:hover { background: #f8fafc !important; }
        @media (max-width: 768px) {
          .filter-bar { gap: 6px !important; }
          .top3-grid { grid-template-columns: 1fr !important; }
          .rest-grid { grid-template-columns: 1fr !important; }
          .view-table { display: block !important; overflow-x: auto !important; }
        }
      `}</style>

      {/* Barre de filtres */}
      <div style={{ marginBottom: '16px' }}>
        <div className="filter-bar" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
          {prixOptions.map(opt => (
            <button key={opt.val} className="filter-pill" onClick={() => setPrix(opt.val)} style={{ padding: '6px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, background: prix === opt.val ? c.accent : '#fff', color: prix === opt.val ? '#fff' : '#475569', border: `1.5px solid ${prix === opt.val ? c.accent : '#e2e8f0'}` }}>
              {opt.label}
            </button>
          ))}
          <button className="filter-pill" onClick={() => toggleBonus('essai')} style={{ padding: '6px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, background: bonus.has('essai') ? '#f0fdf4' : '#fff', color: bonus.has('essai') ? '#16a34a' : '#475569', border: `1.5px solid ${bonus.has('essai') ? '#16a34a' : '#e2e8f0'}` }}>
            🎯 Essai gratuit
          </button>
          <button className="filter-pill" onClick={() => toggleBonus('note4')} style={{ padding: '6px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, background: bonus.has('note4') ? '#fffbeb' : '#fff', color: bonus.has('note4') ? '#d97706' : '#475569', border: `1.5px solid ${bonus.has('note4') ? '#d97706' : '#e2e8f0'}` }}>
            ⭐ Note 4+
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>
            {filtered.length} outil{filtered.length > 1 ? 's' : ''} affiché{filtered.length > 1 ? 's' : ''}
          </span>
          {activeCount > 0 && (
            <button className="filter-pill" onClick={() => { setPrix('tous'); setBonus(new Set()) }} style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, background: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca' }}>
              Réinitialiser ✕
            </button>
          )}

          {/* Toggle vue */}
          <div style={{ marginLeft: 'auto', display: 'flex', background: '#f1f5f9', borderRadius: '10px', padding: '3px', gap: '2px' }}>
            <button className="filter-pill" onClick={() => setView('cards')} style={{ padding: '5px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, background: view === 'cards' ? '#fff' : 'transparent', color: view === 'cards' ? '#0f172a' : '#94a3b8', border: 'none', boxShadow: view === 'cards' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none' }}>
              ▦ Cartes
            </button>
            <button className="filter-pill" onClick={() => setView('table')} style={{ padding: '5px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, background: view === 'table' ? '#fff' : 'transparent', color: view === 'table' ? '#0f172a' : '#94a3b8', border: 'none', boxShadow: view === 'table' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none' }}>
              ☰ Tableau
            </button>
          </div>

          {/* Toggle mensuel/annuel */}
          {hasAnnuel && (
            <button
              className="filter-pill"
              onClick={() => setAnnuel(v => !v)}
              style={{ padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, background: annuel ? '#fefce8' : '#fff', color: annuel ? '#854d0e' : '#475569', border: `1.5px solid ${annuel ? '#fde047' : '#e2e8f0'}` }}
            >
              {annuel ? '📅 Annuel (actif)' : '📅 Voir prix annuel'}
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

      {/* Vue tableau */}
      {view === 'table' && filtered.length > 0 && (
        <div className="view-table" style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '580px' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Outil</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Prix</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Note</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Essai</th>
                <th style={{ padding: '12px 16px', textAlign: 'center', fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Version gratuite</th>
                <th style={{ padding: '12px 8px' }}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((outil, i) => {
                const logo = getLogoUrl(outil.lien_affilie)
                const price = displayPrice(outil)
                const badge = computeBadge(outil, outils, i)
                const tracked = isTracked(outil.lien_affilie)
                return (
                  <tr key={outil.id} className="table-row" style={{ borderBottom: '1px solid #f1f5f9', background: '#fff' }}>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#cbd5e1', width: '16px', flexShrink: 0 }}>#{i + 1}</span>
                        <div style={{ width: '32px', height: '32px', background: c.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                          {logo ? <img className="logo-img" src={logo} alt={outil.nom} /> : <span style={{ fontSize: '14px' }}>{icon}</span>}
                        </div>
                        <div>
                          <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', margin: 0 }}>{outil.nom}</p>
                          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                            {tracked && <span style={{ fontSize: '10px', fontWeight: 700, color: '#065f46', background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: '999px', padding: '1px 7px' }}>🤝 Partenaire</span>}
                            {badge && <span style={{ fontSize: '10px', fontWeight: 700, color: badge.color, background: badge.bg, border: `1px solid ${badge.border}`, borderRadius: '999px', padding: '1px 7px' }}>{badge.label}</span>}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ fontSize: '15px', fontWeight: 800, color: outil.prix_mensuel === 0 ? '#16a34a' : '#0f172a' }}>{price.label}</span>
                      {price.sub && <span style={{ fontSize: '11px', color: annuel ? '#16a34a' : '#94a3b8', display: 'block', fontWeight: annuel ? 600 : 400 }}>{price.sub}</span>}
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      {outil.note
                        ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                            <span style={{ fontSize: '13px', fontWeight: 700, color: '#f59e0b' }}>★ {outil.note}/5</span>
                            {NOTE_SOURCES[outil.id] && <span style={{ fontSize: '10px', fontWeight: 600, color: '#94a3b8', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '0px 5px' }}>{NOTE_SOURCES[outil.id]}</span>}
                          </div>
                        : <span style={{ fontSize: '12px', color: '#cbd5e1' }}>—</span>
                      }
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '16px' }}>
                      {outil.essai_gratuit ? '✅' : '—'}
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '16px' }}>
                      {outil.version_gratuite ? '✅' : '—'}
                    </td>
                    <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                      <Link href={`/outils/${outil.slug}`} style={{ textDecoration: 'none', fontSize: '12px', fontWeight: 700, color: c.accent, background: `${c.accent}12`, border: `1px solid ${c.accent}30`, borderRadius: '8px', padding: '5px 12px', whiteSpace: 'nowrap' }}>
                        Voir →
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Vue cartes */}
      {view === 'cards' && (
        <>
          {/* Top 3 */}
          {top3.length > 0 && (
            <div className="top3-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
              {top3.map((outil, index) => {
                const rank = rankConfig[index]
                const isFree = outil.prix_mensuel === 0
                const logo = getLogoUrl(outil.lien_affilie)
                const badge = computeBadge(outil, outils, index)
                const price = displayPrice(outil)
                const tracked = isTracked(outil.lien_affilie)
                return (
                  <Link key={outil.id} href={`/outils/${outil.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="top-card" style={{ background: '#fff', border: index === 0 ? `2px solid ${c.accent}44` : '1px solid #e2e8f0', borderTop: `4px solid ${rank?.borderColor || c.accent}`, borderRadius: '16px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      {outil.screenshot_url && (
                        <div style={{ height: '130px', overflow: 'hidden', background: '#f1f5f9', position: 'relative', flexShrink: 0 }}>
                          <img src={outil.screenshot_url} alt={`Interface ${outil.nom}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(255,255,255,0.4) 100%)' }} />
                        </div>
                      )}
                      <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px' }}>
                          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                            {rank && <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', background: rank.labelBg, color: rank.labelColor, border: `1px solid ${rank.labelBorder}` }}>{rank.label}</span>}
                            {badge && <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', background: badge.bg, color: badge.color, border: `1px solid ${badge.border}` }}>{badge.label}</span>}
                            {isFree && <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0' }}>Gratuit</span>}
                            {tracked && <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', background: '#f0fdf4', color: '#065f46', border: '1px solid #a7f3d0' }}>🤝 Partenaire</span>}
                          </div>
                          <span style={{ fontSize: '22px' }}>{rank?.emoji || `#${index + 1}`}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '48px', height: '48px', background: c.bg, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                            {logo ? <img className="logo-img" src={logo} alt={outil.nom} /> : <span style={{ fontSize: '20px' }}>{icon}</span>}
                          </div>
                          <div>
                            <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '2px' }}>{outil.nom}</div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                              <span style={{ fontSize: '18px', fontWeight: 800, color: isFree ? '#16a34a' : c.accent, fontFamily: 'serif' }}>{price.label}</span>
                              {price.sub && <span style={{ fontSize: '11px', color: annuel ? '#16a34a' : '#94a3b8', fontWeight: annuel ? 600 : 400 }}>{price.sub}</span>}
                            </div>
                          </div>
                        </div>
                        <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {outil.description}
                        </p>
                        {outil.note && (
                          <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                            {[1,2,3,4,5].map(s => (
                              <span key={s} style={{ color: s <= Math.round(outil.note!) ? '#f59e0b' : '#e2e8f0', fontSize: '13px' }}>★</span>
                            ))}
                            <span style={{ fontSize: '12px', color: '#64748b', marginLeft: '4px' }}>{outil.note}/5</span>
                            {NOTE_SOURCES[outil.id] && <span style={{ fontSize: '10px', fontWeight: 600, color: '#94a3b8', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '0px 5px', marginLeft: '2px' }}>{NOTE_SOURCES[outil.id]}</span>}
                          </div>
                        )}
                        <div style={{ background: c.bg, color: c.accent, border: `1px solid ${c.light}`, borderRadius: '8px', padding: '8px 12px', fontSize: '12px', fontWeight: 700, textAlign: 'center' }}>
                          Voir l&apos;avis →
                        </div>
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
                  const badge = computeBadge(outil, outils, index + 3)
                  const price = displayPrice(outil)
                  const tracked = isTracked(outil.lien_affilie)
                  return (
                    <Link key={outil.id} href={`/outils/${outil.slug}`} style={{ textDecoration: 'none', minWidth: 0 }}>
                      <div className="compact-card" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '10px', overflow: 'hidden' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#cbd5e1', width: '18px', flexShrink: 0, textAlign: 'center' }}>#{index + 4}</span>
                        <div style={{ width: '34px', height: '34px', background: c.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: `1px solid ${c.light}`, flexShrink: 0 }}>
                          {logo ? <img className="logo-img" src={logo} alt={outil.nom} /> : <span style={{ fontSize: '14px' }}>{icon}</span>}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '2px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{outil.nom}</span>
                            {isFree && <span style={{ fontSize: '10px', fontWeight: 700, padding: '1px 6px', borderRadius: '999px', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', flexShrink: 0 }}>Gratuit</span>}
                            {tracked && <span style={{ fontSize: '10px', fontWeight: 700, padding: '1px 6px', borderRadius: '999px', background: '#f0fdf4', color: '#065f46', border: '1px solid #a7f3d0', flexShrink: 0 }}>🤝 Partenaire</span>}
                            {badge && <span style={{ fontSize: '10px', fontWeight: 700, padding: '1px 6px', borderRadius: '999px', background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`, flexShrink: 0 }}>{badge.label}</span>}
                          </div>
                          <p style={{ fontSize: '12px', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', margin: 0 }}>{outil.description}</p>
                        </div>
                        <div style={{ flexShrink: 0, textAlign: 'right' }}>
                          <div style={{ fontSize: '13px', fontWeight: 800, color: isFree ? '#16a34a' : '#0f172a', fontFamily: 'serif', whiteSpace: 'nowrap' }}>{price.label}</div>
                          {price.sub && <div style={{ fontSize: '10px', color: annuel ? '#16a34a' : '#94a3b8', fontWeight: annuel ? 600 : 400 }}>{price.sub}</div>}
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
      )}
    </>
  )
}
