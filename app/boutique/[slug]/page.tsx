import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import MobileMenu from '@/app/components/MobileMenu'
import SearchModal from '@/app/components/SearchModal'
import BuyButton from '@/app/components/BuyButton'
import { products, getProduct } from '../products'

export function generateStaticParams() {
  return products.map(p => ({ slug: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return {
    title: `${product.seoTitle} | TonMeilleurSaaS`,
    description: product.seoDescription,
    alternates: { canonical: `https://ton-meilleur-saas.fr/boutique/${product.id}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `https://ton-meilleur-saas.fr/boutique/${product.id}`,
      type: 'website',
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.seoDescription,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'TonMeilleurSaaS' },
    },
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'DM Sans', Arial, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Header ── */}
      <header style={{ background: 'rgba(255,255,255,0.96)', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(16px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a' }}>TonMeilleurSaaS</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <SearchModal />
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* ── Breadcrumb ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '16px 24px 0' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94a3b8' }}>
          <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Accueil</Link>
          <span>›</span>
          <Link href="/boutique" style={{ color: '#94a3b8', textDecoration: 'none' }}>Boutique</Link>
          <span>›</span>
          <span style={{ color: '#0f172a', fontWeight: 600 }}>{product.tag}</span>
        </nav>
      </div>

      {/* ── Contenu principal ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px 80px', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>

        {/* ── Colonne gauche ── */}
        <div style={{ flex: '1 1 500px', minWidth: 0 }}>

          {/* Badge + titre */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: product.badgeColor, background: product.badgeBg, padding: '4px 12px', borderRadius: '999px' }}>
                {product.badge}
              </span>
              <span style={{ fontSize: '12px', color: product.tagColor, fontWeight: 600, background: product.accentBg, padding: '4px 12px', borderRadius: '999px' }}>
                {product.tag}
              </span>
            </div>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>{product.emoji}</div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: '#0f172a', lineHeight: 1.2, letterSpacing: '-0.5px', marginBottom: '16px' }}>
              {product.title}
            </h1>
            <p style={{ fontSize: '17px', color: '#64748b', lineHeight: 1.7 }}>
              {product.description}
            </p>
          </div>

          {/* Description longue */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              Pourquoi ce produit ?
            </h2>
            {product.longDescription.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontSize: '15px', color: '#374151', lineHeight: 1.75, marginBottom: i < product.longDescription.split('\n\n').length - 1 ? '14px' : 0 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Ce qui est inclus */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>
              Ce qui est inclus
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {product.includes.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '14px', background: product.accentBg, borderRadius: '12px', border: `1px solid ${product.accentLight}` }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: '14px', color: '#0f172a', lineHeight: 1.55, fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus */}
          <div style={{ background: 'linear-gradient(135deg, #f8fafc, #eff6ff)', borderRadius: '16px', padding: '24px 28px', border: '1px solid #dbeafe', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
              ★ Bonus inclus
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {product.bonus.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: product.accentColor, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: '14px', color: '#374151' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>
              Questions fréquentes
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {product.faq.map((item, i) => (
                <div key={i} style={{ padding: '18px 0', borderBottom: i < product.faq.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>{item.q}</p>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Colonne droite — Carte prix ── */}
        <div style={{ width: 'min(340px, 100%)', position: 'sticky', top: '84px' }}>
          <div style={{ background: '#fff', borderRadius: '20px', border: `2px solid ${product.accentLight}`, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
            <div style={{ height: '5px', background: product.accentColor }} />
            <div style={{ padding: '28px 24px' }}>

              {/* Prix */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: '44px', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>
                    {product.price}€
                  </span>
                  {product.originalPrice && (
                    <span style={{ fontSize: '20px', color: '#94a3b8', textDecoration: 'line-through' }}>
                      {product.originalPrice}€
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '13px', color: '#94a3b8' }}>paiement unique · accès à vie</p>
                <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px', fontStyle: 'italic' }}>{product.format}</p>
              </div>

              <BuyButton accentColor={product.accentColor} product={product.id} className="buy-btn" />

              {/* Trust */}
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  ['🔒', 'Paiement sécurisé via Stripe'],
                  ['⚡', 'Livraison instantanée par email'],
                  ['↩️', 'Remboursé si non satisfait sous 14 jours'],
                ].map(([icon, text], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#64748b' }}>
                    <span>{icon}</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Retour boutique */}
          <Link href="/boutique" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '16px', padding: '12px', borderRadius: '12px', border: '1.5px solid #e2e8f0', background: '#fff', color: '#64748b', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
            ← Voir tous les produits
          </Link>

          {/* Autres produits */}
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
              Vous aimerez aussi
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {products
                .filter(p => p.id !== product.id)
                .slice(0, 3)
                .map(p => (
                  <Link key={p.id} href={`/boutique/${p.id}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', background: '#fff', borderRadius: '10px', border: '1px solid #e2e8f0', textDecoration: 'none' }}>
                    <span style={{ fontSize: '20px' }}>{p.emoji}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</p>
                      <p style={{ fontSize: '12px', color: '#64748b' }}>{p.price}€</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
