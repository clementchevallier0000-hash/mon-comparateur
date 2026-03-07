'use client'
import { useState } from 'react'

type Outil = {
  id: number
  nom: string
  description: string
  prix_mensuel: number
  lien_affilie: string
}

const avantages: Record<string, string[]> = {
  'HubSpot CRM': ['Version gratuite très complète', 'Interface ultra intuitive', 'Idéal pour débuter', 'Écosystème marketing puissant'],
  'Axonaut': ['Tout-en-un français', 'CRM + Facturation + Compta', 'Support en français', 'Parfait pour TPE/PME'],
  'Pipedrive': ['Meilleur pipeline visuel', 'Très orienté vente', 'Automatisations avancées', 'Interface claire et rapide'],
  'Pennylane': ['CRM + Comptabilité', 'Synchronisation bancaire', 'Idéal pour freelances', 'Pilotage financier complet'],
  'Freebe': ['Conçu pour freelances', 'Devis et factures intégrés', 'Très simple à prendre en main', 'Tarif accessible'],
  'Indy': ['Comptabilité automatisée', 'Idéal auto-entrepreneurs', 'Déclarations simplifiées', 'Gain de temps important'],
  'Notion': ['Ultra flexible', 'Bases de données puissantes', 'Templates prêts à l\'emploi', 'Tout centraliser en un lieu'],
  'Monday': ['Gestion d\'équipe visuelle', 'Tableaux de bord clairs', 'Intégrations nombreuses', 'Idéal pour PME'],
  'Semrush': ['Référence du SEO mondial', 'Analyse concurrentielle', 'Audit technique complet', 'Suivi de positions'],
  'Ahrefs': ['Meilleure base de backlinks', 'Analyse de mots-clés précise', 'Exploration de contenu', 'Outil favori des experts'],
  'Make': ['Automatisation visuelle', 'Plus de 1000 intégrations', 'Scénarios complexes possibles', 'Très bon rapport qualité/prix'],
  'n8n': ['Open source', 'Auto-hébergeable', 'Gratuit en self-hosted', 'Flexibilité maximale'],
}

const emojis: Record<string, string> = {
  'HubSpot CRM': '🤝', 'Axonaut': '🇫🇷', 'Pipedrive': '📊', 'Pennylane': '💰',
  'Freebe': '🧾', 'Indy': '📒', 'Notion': '📝', 'Monday': '📋',
  'Semrush': '🔍', 'Ahrefs': '🔗', 'Make': '⚡', 'n8n': '🔧',
}

export default function OutilsCarousel({ outils }: { outils: Outil[] }) {
  const [current, setCurrent] = useState(0)
  const total = outils.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const getIndex = (offset: number) => (current + offset + total) % total

  return (
    <div style={{ position: 'relative', padding: '20px 0 40px' }}>
      <style>{`
        .outil-card-main {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .carousel-btn:hover {
          background: #2563eb !important;
          color: #fff !important;
          border-color: #2563eb !important;
        }
        .carousel-btn { transition: all 0.2s ease; }
        .dot-btn { transition: all 0.2s ease; cursor: pointer; border: none; }
      `}</style>

      {/* Cards container */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center' }}>

        {/* Prev card (peek) */}
        {total > 1 && (
          <div onClick={prev} style={{ cursor: 'pointer', flexShrink: 0 }}>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px', width: '200px', opacity: 0.4, transform: 'scale(0.92)', filter: 'blur(1px)', transition: 'all 0.35s ease' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>{emojis[outils[getIndex(-1)]?.nom] || '📦'}</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{outils[getIndex(-1)]?.nom}</div>
            </div>
          </div>
        )}

        {/* Main card */}
        <div className="outil-card-main" style={{ background: '#fff', border: '2px solid #2563eb', borderRadius: '24px', padding: '36px', width: '420px', flexShrink: 0, boxShadow: '0 8px 40px rgba(37,99,235,0.12)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-12px', left: '28px', background: '#2563eb', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 14px', borderRadius: '999px' }}>
            ⭐ Recommandé
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '64px', height: '64px', background: '#eff6ff', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', border: '1px solid #dbeafe' }}>
              {emojis[outils[current]?.nom] || '📦'}
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{outils[current]?.nom}</h3>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#2563eb' }}>{outils[current]?.prix_mensuel}€ <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 400 }}>/ mois</span></div>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7, marginBottom: '20px' }}>{outils[current]?.description}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            {(avantages[outils[current]?.nom] || ['Fonctionnalités complètes', 'Interface intuitive', 'Support réactif', 'Bon rapport qualité/prix']).map((av, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '20px', height: '20px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>{av}</span>
              </div>
            ))}
          </div>

          <a href={outils[current]?.lien_affilie} target="_blank" style={{ display: 'block', background: '#2563eb', color: '#fff', borderRadius: '12px', padding: '13px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, textAlign: 'center' }}>
            Essayer gratuitement →
          </a>
        </div>

        {/* Next card (peek) */}
        {total > 1 && (
          <div onClick={next} style={{ cursor: 'pointer', flexShrink: 0 }}>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px', width: '200px', opacity: 0.4, transform: 'scale(0.92)', filter: 'blur(1px)', transition: 'all 0.35s ease' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>{emojis[outils[getIndex(1)]?.nom] || '📦'}</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{outils[getIndex(1)]?.nom}</div>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '28px' }}>
        <button className="carousel-btn" onClick={prev} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #e2e8f0', background: '#fff', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>←</button>
        <div style={{ display: 'flex', gap: '6px' }}>
          {outils.map((_, i) => (
            <button key={i} className="dot-btn" onClick={() => setCurrent(i)} style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '999px', background: i === current ? '#2563eb' : '#e2e8f0' }} />
          ))}
        </div>
        <button className="carousel-btn" onClick={next} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #e2e8f0', background: '#fff', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>→</button>
      </div>

      {/* Counter */}
      <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '13px', color: '#94a3b8' }}>
        {current + 1} / {total}
      </div>
    </div>
  )
}