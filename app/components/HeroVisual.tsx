'use client'
import { useState, useEffect } from 'react'

const outils = [
  {
    nom: 'HubSpot CRM', emoji: '🤝', categorie: 'CRM', prix: 'Gratuit',
    color: '#2563eb', bg: '#eff6ff',
    stats: [
      { label: "Facilité d'utilisation", val: 95 },
      { label: 'Rapport qualité/prix', val: 98 },
      { label: 'Support client', val: 88 },
    ],
    tags: ['Pipeline', 'Email', 'Analytics', 'Mobile'],
    badge: '⭐ #1 CRM'
  },
  {
    nom: 'Pennylane', emoji: '💰', categorie: 'Facturation', prix: '26€/mois',
    color: '#ea580c', bg: '#fff7ed',
    stats: [
      { label: 'Automatisation', val: 92 },
      { label: 'Intégration bancaire', val: 97 },
      { label: 'Interface', val: 90 },
    ],
    tags: ['Devis', 'Factures', 'Compta', 'Banque'],
    badge: '🏆 Top Facturation'
  },
  {
    nom: 'Semrush', emoji: '🔍', categorie: 'SEO', prix: '129€/mois',
    color: '#9333ea', bg: '#fdf4ff',
    stats: [
      { label: 'Base de mots-clés', val: 99 },
      { label: 'Analyse concurrents', val: 96 },
      { label: 'Audit technique', val: 93 },
    ],
    tags: ['Mots-clés', 'Backlinks', 'Audit', 'Positions'],
    badge: '🔥 Référence SEO'
  },
  {
    nom: 'Make', emoji: '⚡', categorie: 'Automatisation', prix: '9€/mois',
    color: '#d97706', bg: '#fffbeb',
    stats: [
      { label: 'Intégrations', val: 98 },
      { label: 'Facilité', val: 85 },
      { label: 'Rapport qualité/prix', val: 97 },
    ],
    tags: ['Workflows', 'API', 'No-code', 'Zapier-like'],
    badge: '⚡ Meilleure valeur'
  },
  {
    nom: 'Notion', emoji: '📋', categorie: 'Gestion de projet', prix: 'Gratuit',
    color: '#16a34a', bg: '#f0fdf4',
    stats: [
      { label: 'Flexibilité', val: 99 },
      { label: 'Collaboration', val: 94 },
      { label: 'Templates', val: 91 },
    ],
    tags: ['Wiki', 'Projets', 'Bases de données', 'IA'],
    badge: '🌟 Ultra flexible'
  },
]

export default function HeroVisual() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (hovered) return
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % outils.length)
        setAnimating(false)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [hovered])

  const outil = outils[current]

  return (
    <div
      style={{ position: 'relative', width: '460px', height: '400px', flexShrink: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes barFill { from { width: 0%; } to { width: var(--target-width); } }
        .hero-card { animation: float 6s ease-in-out infinite; }
        .card-content { transition: opacity 0.3s ease, transform 0.3s ease; }
        .card-content.out { opacity: 0; transform: translateY(8px); }
        .stat-bar { animation: barFill 0.8s ease forwards; }
        .dot { transition: all 0.2s ease; cursor: pointer; border: none; }
        .dot:hover { transform: scale(1.3); }
      `}</style>

      <div className="hero-card" style={{ position: 'relative', width: '100%', height: '100%' }}>

        {/* Carte principale */}
        <div style={{
          position: 'absolute', top: '20px', left: '10px', right: '10px',
          background: '#fff', borderRadius: '20px', padding: '24px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0',
          transition: 'all 0.3s ease'
        }}>
          <div className={`card-content ${animating ? 'out' : ''}`}>

            {/* Header outil */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '44px', height: '44px', background: outil.bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', border: `1px solid ${outil.color}22`, flexShrink: 0 }}>
                {outil.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>{outil.nom}</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>{outil.categorie} · {outil.prix}</div>
              </div>
              <div style={{ background: outil.color, color: '#fff', fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                {outil.badge}
              </div>
            </div>

            {/* Barres de stats */}
            {outil.stats.map((stat, i) => (
              <div key={`${current}-${i}`} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>{stat.label}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>{stat.val}%</span>
                </div>
                <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '999px', overflow: 'hidden' }}>
                  <div
                    className="stat-bar"
                    style={{
                      height: '100%',
                      width: `${stat.val}%`,
                      background: `linear-gradient(90deg, ${outil.color}, ${outil.color}99)`,
                      borderRadius: '999px',
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Tags */}
            <div style={{ marginTop: '16px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {outil.tags.map((tag, i) => (
                <span key={i} style={{ background: outil.bg, border: `1px solid ${outil.color}33`, borderRadius: '6px', padding: '3px 8px', fontSize: '11px', color: outil.color, fontWeight: 600 }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Badge flottant haut droite */}
        <div style={{
          position: 'absolute', top: '0', right: '-5px',
          background: '#f0fdf4', border: '1px solid #bbf7d0',
          borderRadius: '12px', padding: '8px 12px',
          display: 'flex', alignItems: 'center', gap: '6px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
        }}>
          <span style={{ fontSize: '12px' }}>✓</span>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#16a34a' }}>50+ outils comparés</span>
        </div>

        {/* Dots navigation */}
        <div style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px', alignItems: 'center' }}>
          {outils.map((o, i) => (
            <button
              key={i}
              className="dot"
              onClick={() => { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false) }, 300) }}
              style={{
                width: i === current ? '20px' : '7px',
                height: '7px',
                borderRadius: '999px',
                background: i === current ? outil.color : '#e2e8f0',
                padding: 0
              }}
            />
          ))}
        </div>

        {/* Fondu bas */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, rgba(248,250,252,0.8))', pointerEvents: 'none', borderRadius: '0 0 20px 20px' }} />
      </div>
    </div>
  )
}