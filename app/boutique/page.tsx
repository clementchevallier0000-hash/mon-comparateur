import Link from 'next/link'
import SiteHeader from '@/app/components/SiteHeader'
import BuyButton from '@/app/components/BuyButton'
import type { Metadata } from 'next'
import { products } from './products'

export const metadata: Metadata = {
  title: 'Boutique — Workflows N8N, RGPD & Ressources premium | TonMeilleurSaaS',
  description: 'Workflows N8N, pack RGPD, système de fidélisation client et AI Agents — des ressources prêtes à l\'emploi pour automatiser et sécuriser votre TPE.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/boutique' },
}


const faq = [
  {
    q: 'Comment recevoir mes fichiers après achat ?',
    a: 'Instantanément. Un lien de téléchargement vous est envoyé par email dès la confirmation du paiement Stripe. Aucune attente.'
  },
  {
    q: 'Il me faut quoi pour utiliser les workflows N8N ?',
    a: 'Une instance N8N (cloud n8n.cloud ou self-hosted sur votre serveur), et les comptes sur les services utilisés (HubSpot, Gmail, OpenAI…). Tout est détaillé dans les README inclus.'
  },
  {
    q: 'Les AI Agents nécessitent-ils une clé OpenAI payante ?',
    a: 'Oui. Vous aurez besoin d\'une clé API OpenAI (GPT-4o). Le coût de fonctionnement est très faible — comptez 1 à 5€/mois pour un usage TPE typique. Le guide inclus explique comment créer votre clé et maîtriser les coûts.'
  },
  {
    q: 'Le Pack RGPD est-il valable pour tous les secteurs ?',
    a: 'Les templates couvrent les obligations RGPD universelles (toute entreprise traitant des données personnelles). Pour des secteurs très spécifiques (santé, finance), un avis juridique complémentaire peut être recommandé.'
  },
  {
    q: 'Je débute sur N8N, est-ce accessible ?',
    a: 'Oui. Chaque workflow est commenté et le README explique la configuration pas à pas. Le support email 30 jours est inclus pour vous débloquer si besoin.'
  },
  {
    q: 'Puis-je revendre ces ressources ?',
    a: 'Non, la licence est personnelle. Vous pouvez les utiliser pour vos propres projets et ceux de vos clients, mais pas les revendre tels quels.'
  },
]

export default function BoutiquePage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <style>{`
        .product-card { transition: transform 0.18s ease, box-shadow 0.18s ease; background: #fff; }
        .product-card:hover { transform: translateY(-4px); box-shadow: 0 20px 56px rgba(0,0,0,0.1) !important; }
        .boutique-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .faq-item { border-bottom: 1px solid #e2e8f0; padding: 22px 0; }
        @media (max-width: 860px) {
          .boutique-grid { grid-template-columns: 1fr; }
          .boutique-wrap { padding: 32px 20px 64px !important; }
          .boutique-hero { padding: 48px 20px 40px !important; }
          .boutique-faq { padding: 48px 20px !important; }
          .boutique-footer { padding: 28px 20px !important; }
          .header-inner { padding: 0 20px !important; }
        }
      `}</style>

      <SiteHeader />

      {/* ── Hero ── */}
      <section className="boutique-hero" style={{ padding: '64px 40px 48px', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1e40af 100%)', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Ressources premium</p>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(36px,5vw,52px)', fontWeight: 900, letterSpacing: '-2px', marginBottom: '14px', lineHeight: 1.1 }}>
            Ressources SaaS premium
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '28px' }}>
            Workflows N8N, templates, prompts et guides — prêts à l&apos;emploi, livrés instantanément.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🔒 Paiement Stripe sécurisé', '⚡ Livraison instantanée', '↩️ Remboursé sous 14 jours'].map((t, i) => (
              <span key={i} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grille produits ── */}
      <div className="boutique-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 40px 80px' }}>
        <div className="boutique-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card" style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>

              {/* Barre couleur accent */}
              <div style={{ height: '5px', background: product.accentColor }} />

              {/* Corps */}
              <div style={{ padding: '24px 26px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {/* Badge + tag */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: product.badgeColor, background: product.badgeBg, padding: '3px 10px', borderRadius: '999px' }}>
                    {product.badge}
                  </span>
                  <span style={{ fontSize: '11px', color: product.tagColor, fontWeight: 600, marginLeft: 'auto' }}>
                    {product.tag}
                  </span>
                </div>

                {/* Emoji + titre */}
                <div>
                  <div style={{ fontSize: '32px', marginBottom: '8px', lineHeight: 1 }}>{product.emoji}</div>
                  <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '19px', fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>
                    {product.title}
                  </h2>
                </div>

                {/* Description */}
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
                  {product.description}
                </p>

                {/* Bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {product.includes.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ fontSize: '13px', flexShrink: 0, marginTop: '1px', color: product.accentColor }}>✓</span>
                      <span style={{ fontSize: '13px', color: '#374151', lineHeight: 1.45 }}>{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus */}
                <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px 14px', marginTop: 'auto' }}>
                  {product.bonus.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: i < product.bonus.length - 1 ? '4px' : 0 }}>
                      <span style={{ fontSize: '11px', color: '#94a3b8', flexShrink: 0, marginTop: '2px' }}>★</span>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Format + lien détail */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <p style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>{product.format}</p>
                  <Link href={`/boutique/${product.id}`} style={{ fontSize: '12px', color: product.accentColor, fontWeight: 600, textDecoration: 'none' }}>
                    Voir le détail →
                  </Link>
                </div>
              </div>

              {/* Footer prix + CTA */}
              <div style={{ padding: '18px 26px 22px', borderTop: '1px solid #f1f5f9', background: '#fafafa', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>
                      {product.price}€
                    </span>
                    {product.originalPrice && (
                      <span style={{ fontSize: '15px', color: '#94a3b8', textDecoration: 'line-through' }}>
                        {product.originalPrice}€
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>paiement unique · accès à vie</p>
                </div>
                <BuyButton accentColor={product.accentColor} product={product.id} className="buy-btn" />
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA calculateur ── */}
        <div style={{ marginTop: '48px', background: 'linear-gradient(135deg, #0f172a, #1e3a5f)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: '#fff' }}>
          <p style={{ fontSize: '28px', marginBottom: '10px' }}>🧮</p>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
            Outil gratuit — calculez vos dépenses SaaS
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', maxWidth: '440px', margin: '0 auto 20px', lineHeight: 1.6 }}>
            Entrez vos abonnements, détectez les doublons et voyez vos économies potentielles en 30 secondes.
          </p>
          <Link href="/calculateur-saas" style={{ display: 'inline-block', textDecoration: 'none', fontSize: '14px', fontWeight: 700, color: '#0f172a', background: '#fff', padding: '12px 24px', borderRadius: '10px' }}>
            Accéder gratuitement →
          </Link>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section className="boutique-faq" style={{ padding: '64px 40px', background: '#fff', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '32px', textAlign: 'center' }}>
            Questions fréquentes
          </h2>
          {faq.map((item, i) => (
            <div key={i} className="faq-item">
              <p style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>{item.q}</p>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="boutique-footer" style={{ background: '#0a0f1a', padding: '28px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: '16px', fontWeight: 800, color: '#fff' }}>TonMeilleurSaaS</span>
          <p style={{ color: '#475569', fontSize: '13px' }}>© 2026 · Comparateur expert de logiciels SaaS</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/blog" style={{ color: '#475569', fontSize: '13px', textDecoration: 'none' }}>Blog</Link>
            <Link href="/boutique" style={{ color: '#d97706', fontSize: '13px', textDecoration: 'none', fontWeight: 600 }}>Boutique</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
