import Link from 'next/link'
import MobileMenu from '@/app/components/MobileMenu'
import SearchModal from '@/app/components/SearchModal'
import BuyButton from '@/app/components/BuyButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boutique — Workflows N8N, RGPD & Ressources premium | TonMeilleurSaaS',
  description: 'Workflows N8N, pack RGPD, système de fidélisation client et AI Agents — des ressources prêtes à l\'emploi pour automatiser et sécuriser votre TPE.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/boutique' },
}

const products = [
  {
    id: 'n8n-pack',
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
  {
    id: 'audit-saas',
    badge: '🎯 Recommandé',
    badgeColor: '#2563eb',
    badgeBg: '#eff6ff',
    emoji: '🔍',
    accentColor: '#2563eb',
    accentBg: '#eff6ff',
    accentLight: '#dbeafe',
    title: 'Audit SaaS personnalisé — La stack idéale pour votre business',
    description: 'Remplissez un formulaire de 5 minutes. Je vous envoie une recommandation complète et personnalisée de votre stack SaaS idéale sous 48h.',
    price: 79,
    originalPrice: null,
    includes: [
      { icon: '📋', text: 'Analyse de votre situation actuelle (outils, budget, équipe)' },
      { icon: '🎯', text: 'Recommandation de votre stack SaaS idéale par poste' },
      { icon: '💰', text: 'Estimation du coût total et des économies potentielles' },
      { icon: '⚡', text: 'Identification des automatisations prioritaires pour vous' },
      { icon: '🗺️', text: 'Plan de migration pas à pas si vous changez d\'outils' },
    ],
    bonus: [
      'Réponse sous 48h par email',
      'Échange de suivi inclus (15 min)',
      'Comparatif personnalisé en PDF',
    ],
    format: 'Formulaire 5 min · Audit livré sous 48h',
    tag: 'Conseil',
    tagColor: '#2563eb',
  },
  {
    id: 'rgpd-pack',
    badge: '🛡️ Indispensable',
    badgeColor: '#7c3aed',
    badgeBg: '#faf5ff',
    emoji: '🔐',
    accentColor: '#7c3aed',
    accentBg: '#faf5ff',
    accentLight: '#e9d5ff',
    title: 'Pack RGPD complet pour TPE — Mise en conformité clé en main',
    description: '6 templates juridiques rédigés par des experts, prêts à personnaliser. Soyez en conformité RGPD en moins d\'une journée — sans avocat, sans jargon.',
    price: 59,
    originalPrice: 149,
    includes: [
      { icon: '📄', text: 'Politique de confidentialité (site web + mentions légales)' },
      { icon: '📝', text: 'CGV / CGU personnalisables (prestations de services)' },
      { icon: '📋', text: 'Registre des traitements de données (format Excel + Notion)' },
      { icon: '✉️', text: 'Template email de notification violation de données (CNIL)' },
      { icon: '🤝', text: 'Contrat sous-traitant RGPD (DPA) pour vos prestataires SaaS' },
      { icon: '✅', text: 'Checklist mise en conformité en 10 étapes commentées' },
    ],
    bonus: [
      'Formats Word (.docx) modifiables + PDF final',
      'Guide CNIL simplifié — ce qui est obligatoire pour une TPE',
      'Mise à jour incluse si la réglementation évolue',
    ],
    format: '6 templates · Word + PDF · Livraison instantanée',
    tag: 'Juridique',
    tagColor: '#7c3aed',
  },
  {
    id: 'fidelisation-pack',
    badge: '🌱 Nouveau',
    badgeColor: '#16a34a',
    badgeBg: '#f0fdf4',
    emoji: '🔄',
    accentColor: '#16a34a',
    accentBg: '#f0fdf4',
    accentLight: '#bbf7d0',
    title: 'Système de fidélisation client N8N — 5 workflows pour ne jamais perdre un client',
    description: 'Des workflows N8N qui tournent tout seuls : onboarding automatique, détection des clients inactifs, anniversaires, feedback post-mission et relances intelligentes.',
    price: 99,
    originalPrice: null,
    includes: [
      { icon: '🚀', text: 'Onboarding automatique : séquence J0 → J7 → J30 → J60' },
      { icon: '⚠️', text: 'Détection client "à risque" : alerte si inactif depuis 60 jours' },
      { icon: '🎂', text: 'Email d\'anniversaire client : fidélisation passive sans effort' },
      { icon: '⭐', text: 'Feedback automatique post-prestation + collecte avis Google' },
      { icon: '💌', text: 'Relance intelligente : up-sell / cross-sell au bon moment' },
    ],
    bonus: [
      'README détaillé + vidéo de configuration (15 min)',
      'Compatibles Gmail, Outlook, HubSpot, Airtable, Notion',
      'Support email 30 jours inclus',
    ],
    format: '5 fichiers JSON N8N · Import en 2 clics',
    tag: 'Automatisation',
    tagColor: '#16a34a',
  },
  {
    id: 'ai-agents-pack',
    badge: '🤖 Exclusif',
    badgeColor: '#0ea5e9',
    badgeBg: '#f0f9ff',
    emoji: '🧠',
    accentColor: '#0ea5e9',
    accentBg: '#f0f9ff',
    accentLight: '#bae6fd',
    title: 'Pack AI Agents N8N — 4 agents IA qui travaillent à votre place',
    description: '4 agents autonomes basés sur N8N + GPT-4 : prospection, création de contenu, veille concurrentielle et qualification de leads — tout en pilotage automatique.',
    price: 129,
    originalPrice: null,
    includes: [
      { icon: '🎯', text: 'Agent Prospection : trouve des leads → qualification GPT-4 → email personnalisé auto' },
      { icon: '✍️', text: 'Agent Contenu : topic → brief SEO → article complet → reformatage réseaux' },
      { icon: '🔭', text: 'Agent Veille : RSS + news → résumé IA → digest hebdo dans votre boîte mail' },
      { icon: '💬', text: 'Agent Support : email entrant → classification → réponse auto ou escalade humaine' },
    ],
    bonus: [
      'Guide configuration OpenAI API (clé + modèles + coûts)',
      'README par agent + exemple de résultats réels',
      'Compatibles N8N Cloud et N8N self-hosted',
    ],
    format: '4 fichiers JSON N8N · Nécessite une clé OpenAI',
    tag: 'Intelligence Artificielle',
    tagColor: '#0ea5e9',
  },
]

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
                  <BuyButton accentColor={product.accentColor} product={product.id} className="buy-btn" />
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

          {/* Calculateur gratuit */}
          <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a5f)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: '#fff' }}>
            <p style={{ fontSize: '28px', marginBottom: '12px' }}>🧮</p>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>Outil gratuit : calculez vos dépenses SaaS</h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>
              Entrez vos abonnements, détectez les doublons et voyez vos économies potentielles — en 30 secondes, sans inscription.
            </p>
            <Link href="/calculateur-saas" style={{ display: 'inline-block', textDecoration: 'none', fontSize: '15px', fontWeight: 700, color: '#0f172a', background: '#fff', padding: '14px 28px', borderRadius: '12px' }}>
              Accéder au calculateur gratuit →
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
