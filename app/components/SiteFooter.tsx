import Link from 'next/link'

const categories = [
  { label: '🤝 CRM', slug: 'crm' },
  { label: '💶 Facturation', slug: 'facturation' },
  { label: '📋 Gestion de projet', slug: 'gestion-de-projet' },
  { label: '🔍 SEO', slug: 'seo' },
  { label: '⚡ Automatisation', slug: 'automatisation' },
]

const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Toutes les catégories', href: '/categorie' },
  { label: '🎯 Quiz', href: '/quiz' },
  { label: '🧮 Calculateur SaaS', href: '/calculateur-saas' },
  { label: '🛍️ Boutique', href: '/boutique' },
  { label: 'À propos', href: '/a-propos' },
  { label: '📬 Contact', href: '/contact' },
]

const legal = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  { label: 'CGV', href: '/cgv' },
]

export default function SiteFooter() {
  return (
    <footer style={{ background: '#0a0f1a', color: '#94a3b8', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }
        .footer-link { color: #64748b; font-size: 13px; text-decoration: none; transition: color 0.15s; line-height: 2; display: block; }
        .footer-link:hover { color: #e2e8f0; }
        .footer-bottom { border-top: 1px solid #1e293b; margin-top: 40px; padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr; gap: 28px; } .footer-bottom { flex-direction: column; align-items: flex-start; gap: 8px; } }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 48px 40px' }}>
        <div className="footer-grid">

          {/* Colonne 1 — Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 800, color: '#fff' }}>
                🚀 TonMeilleurSaaS
              </span>
            </Link>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.75, maxWidth: '240px', marginBottom: '20px' }}>
              Comparatifs honnêtes de logiciels SaaS pour TPE et PME françaises. Basé sur les avis utilisateurs réels et les fonctionnalités officielles.
            </p>
            <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.6, maxWidth: '240px', fontStyle: 'italic' }}>
              Certains liens sont affiliés — cela ne change jamais les classements.
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#475569', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '14px' }}>Navigation</p>
            {nav.map(l => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Colonne 3 — Catégories */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#475569', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '14px' }}>Catégories</p>
            {categories.map(c => (
              <Link key={c.slug} href={`/categorie/${c.slug}`} className="footer-link">{c.label}</Link>
            ))}
          </div>

          {/* Colonne 4 — Légal */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#475569', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '14px' }}>Légal</p>
            {legal.map(l => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ fontSize: '12px', color: '#334155' }}>© 2026 TonMeilleurSaaS · Tous droits réservés</p>
          <p style={{ fontSize: '12px', color: '#1e293b' }}>Fait avec ☕ en France</p>
        </div>
      </div>
    </footer>
  )
}
