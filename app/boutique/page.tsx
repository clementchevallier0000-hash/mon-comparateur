import Link from 'next/link'
import MobileMenu from '@/app/components/MobileMenu'
import SearchModal from '@/app/components/SearchModal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boutique — Workflows N8N & Ressources premium | TonMeilleurSaaS',
  description: 'Téléchargez nos workflows N8N prêts à l\'emploi et nos ressources premium pour automatiser votre business. Livrés instantanément.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/boutique' },
}

const products = [
  {
    id: 'n8n-pack-tpe',
    badge: '🔥 Best-seller',
    badgeColor: '#ea580c',
    badgeBg: '#fff7ed',
    emoji: '⚡',
    accentColor: '#d97706',
    accentBg: '#fffbeb',
    accentLight: '#fde68a',
    title: 'Pack N8N — 5 Workflows clé en main pour TPE/PME',
    description: 'Téléchargez et importez en 2 clics. Chaque workflow est documenté, testé et prêt à configurer avec vos propres credentials.',
    price: 39,
    originalPrice: null,
    buyUrl: 'https://tonmeilleurSaaS.lemonsqueezy.com/buy/VOTRE_ID_PRODUIT',
    includes: [
      { icon: '🎯', text: 'Prospection LinkedIn → CRM HubSpot (automatique)' },
      { icon: '📬', text: 'Relance factures impayées J+7 / J+14 / J+30' },
      { icon: '🔍', text: 'Veille concurrentielle IA (RSS + GPT-4)' },
      { icon: '🤝', text: 'Onboarding client 3 emails séquentiels' },
      { icon: '📊', text: 'Rapport Google Analytics hebdo analysé par IA' },
    ],
    bonus: [
      'README d\'installation pas à pas',
      'Support par email 30 jours',
      'Mises à jour gratuites à vie',
    ],
    format: '5 fichiers JSON · Import N8N direct',
    tag: 'Automatisation',
    tagColor: '#d97706',
  },
]

const faq = [
  {
    q: 'Comment recevoir le pack après achat ?',
    a: 'Instantanément. Un lien de téléchargement vous est envoyé par email dès la confirmation du paiement.'
  },
  {
    q: 'Il me faut quoi pour utiliser ces workflows ?',
    a: 'Une instance N8N (cloud ou self-hosted), et les comptes sur les services utilisés (HubSpot, Gmail, Google Sheets, OpenAI…). Tout est détaillé dans le README.'
  },
  {
    q: 'Je débute sur N8N, ces workflows sont pour moi ?',
    a: 'Oui. Chaque fichier est commenté et le README explique chaque configuration étape par étape. Si vous bloquez, le support email est là.'
  },
  {
    q: 'Puis-je revendre ces workflows ?',
    a: 'Non, la licence est personnelle. Vous pouvez les utiliser pour vos propres projets et clients, mais pas les revendre tels quels.'
  },
]

export default function BoutiquePage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#fff', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800&family=Fraunces:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />

      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        .header-nav { display:flex; gap:32px; align-items:center; }
        .mobile-menu-btn { display:none; }
        .product-card { transition: transform 0.2s, box-shadow 0.2s; }
        .product-card:hover { transform: translateY(-4px); box-shadow: 0 24px 64px rgba(0,0,0,0.1); }
        .buy-btn { transition: opacity 0.15s, transform 0.15s; }
        .buy-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .faq-item { border-bottom: 1px solid #f1f5f9; padding: 20px 0; }
        @media (max-width: 768px) {
          .header-inner { padding: 0 20px !important; }
          .header-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .boutique-hero { padding: 48px 20px !important; }
          .boutique-grid { grid-template-columns: 1fr !important; }
          .boutique-section { padding: 48px 20px !important; }
          .product-inner { flex-direction: column !important; }
          .product-price-col { width: 100% !important; }
        }
      `}</style>

      {/* Header */}
      <header style={{ background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #f1f5f9', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(12px)' }}>
        <div className="header-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span style={{ fontSize: '22px' }}>🚀</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>TonMeilleurSaaS</span>
          </Link>
          <nav className="header-nav">
            <Link href="/" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Accueil</Link>
            <Link href="/blog" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Blog</Link>
            <Link href="/boutique" style={{ color: '#d97706', fontSize: '14px', textDecoration: 'none', fontWeight: 700 }}>🛍️ Boutique</Link>
          </nav>
          <SearchModal />
          <div className="mobile-menu-btn" style={{ display: 'none' }}>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="boutique-hero" style={{ padding: '72px 48px 56px', background: 'linear-gradient(135deg, #fffbeb 0%, #fff7ed 100%)', borderBottom: '1px solid #fde68a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: '#d97706', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Ressources premium</p>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '48px', fontWeight: 800, color: '#0f172a', letterSpacing: '-2px', marginBottom: '16px', lineHeight: 1.1 }}>
            La boutique
          </h1>
          <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
            Des workflows, templates et guides prêts à l&apos;emploi pour automatiser votre business et gagner du temps dès aujourd&apos;hui.
          </p>
        </div>
      </section>

      {/* Produits */}
      <section className="boutique-section" style={{ padding: '64px 48px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {products.map((product) => (
            <div key={product.id} className="product-card" style={{ border: '2px solid #fde68a', borderRadius: '20px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              {/* Badge top */}
              <div style={{ background: product.accentBg, padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #fde68a' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: product.badgeColor, background: product.badgeBg, padding: '3px 10px', borderRadius: '999px', border: `1px solid ${product.accentLight}` }}>{product.badge}</span>
                <span style={{ fontSize: '12px', color: product.tagColor, fontWeight: 600 }}>{product.tag}</span>
                <span style={{ marginLeft: 'auto', fontSize: '13px', color: '#64748b' }}>{product.format}</span>
              </div>

              {/* Corps */}
              <div className="product-inner" style={{ display: 'flex', gap: '0', alignItems: 'stretch' }}>
                {/* Détails */}
                <div style={{ flex: 1, padding: '32px 36px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '32px' }}>{product.emoji}</span>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>{product.title}</h2>
                  </div>
                  <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>{product.description}</p>

                  <p style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Ce qui est inclus</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {product.includes.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ fontSize: '16px', flexShrink: 0 }}>{item.icon}</span>
                        <span style={{ fontSize: '14px', color: '#374151', lineHeight: 1.5 }}>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '14px 18px' }}>
                    <p style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Bonus inclus</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {product.bonus.map((b, i) => (
                        <span key={i} style={{ fontSize: '13px', color: '#374151' }}>✓ {b}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Prix & CTA */}
                <div className="product-price-col" style={{ width: '280px', flexShrink: 0, borderLeft: '1px solid #f1f5f9', padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', background: '#fafafa' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '48px', fontWeight: 800, color: '#0f172a', fontFamily: "'Fraunces', serif", lineHeight: 1 }}>{product.price}€</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '6px' }}>paiement unique · accès à vie</div>
                  </div>
                  <Link
                    href={product.buyUrl}
                    className="buy-btn"
                    style={{ display: 'block', width: '100%', background: `linear-gradient(135deg, ${product.accentColor}, #ea580c)`, color: '#fff', textDecoration: 'none', padding: '16px', borderRadius: '12px', textAlign: 'center', fontSize: '16px', fontWeight: 700, boxShadow: '0 4px 20px rgba(217,119,6,0.35)' }}
                  >
                    Acheter maintenant →
                  </Link>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                      <span>🔒</span><span>Paiement sécurisé (Stripe)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                      <span>⚡</span><span>Livraison instantanée par email</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                      <span>↩️</span><span>Remboursé si non satisfait 14j</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Produit à venir */}
          <div style={{ border: '2px dashed #e2e8f0', borderRadius: '20px', padding: '40px', textAlign: 'center', background: '#fafafa' }}>
            <p style={{ fontSize: '28px', marginBottom: '12px' }}>🔜</p>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 700, color: '#94a3b8', marginBottom: '8px' }}>D&apos;autres ressources arrivent bientôt</h3>
            <p style={{ fontSize: '14px', color: '#cbd5e1' }}>Templates Notion, guides PDF, packs CRM… Suivez le blog pour être notifié en premier.</p>
            <Link href="/blog" style={{ display: 'inline-block', marginTop: '16px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, color: '#2563eb', background: '#eff6ff', padding: '10px 20px', borderRadius: '8px', border: '1px solid #dbeafe' }}>
              Suivre le blog →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="boutique-section" style={{ padding: '64px 48px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 800, color: '#0f172a', letterSpacing: '-1px', marginBottom: '40px', textAlign: 'center' }}>Questions fréquentes</h2>
          {faq.map((item, i) => (
            <div key={i} className="faq-item">
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{item.q}</p>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0a0f1a', padding: '32px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span style={{ fontSize: '18px' }}>🚀</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '16px', fontWeight: 800, color: '#fff' }}>TonMeilleurSaaS</span>
          </Link>
          <p style={{ color: '#475569', fontSize: '13px' }}>© 2026 TonMeilleurSaaS · Comparateur expert de logiciels SaaS</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/blog" style={{ color: '#475569', fontSize: '13px', textDecoration: 'none' }}>Blog</Link>
            <Link href="/boutique" style={{ color: '#d97706', fontSize: '13px', textDecoration: 'none', fontWeight: 600 }}>Boutique</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
