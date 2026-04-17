'use client'

const messages = [
  '🏆 Les meilleurs logiciels pour TPE & PME en 2026',
  '✅ 50+ outils comparés et testés indépendamment',
  '🔍 CRM, Facturation, SEO, Gestion de projet, Automatisation',
  '💯 Comparatif transparent · Liens affiliés déclarés · Avis 100% objectifs',
  '🚀 Mis à jour en 2026 · Données fraîches et vérifiées',
  '🇫🇷 Le comparatif de référence pour les entreprises françaises',
]

export default function TopBanner() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #0f172a 0%, #1e3a5f 50%, #312e81 100%)',
      overflow: 'hidden',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
    }}>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          animation: ticker 30s linear infinite;
          width: max-content;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Fondu gauche */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px',
        background: 'linear-gradient(to right, #0f172a, transparent)',
        zIndex: 2, pointerEvents: 'none'
      }} />

      {/* Fondu droite */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px',
        background: 'linear-gradient(to left, #312e81, transparent)',
        zIndex: 2, pointerEvents: 'none'
      }} />

      <div className="ticker-track">
        {/* On duplique pour le loop infini */}
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} style={{
            color: '#e2e8f0',
            fontSize: '12px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            padding: '0 48px',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.3px',
          }}>
            {msg}
            <span style={{ color: '#2563eb', marginLeft: '48px', opacity: 0.6 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}