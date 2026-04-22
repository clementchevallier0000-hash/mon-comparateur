import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — TonMeilleurSaaS',
  description: 'Mentions légales, politique de confidentialité et conditions générales de vente de TonMeilleurSaaS.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/mentions-legales' },
  robots: { index: false },
}

export default function MentionsLegales() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh', padding: '60px 24px' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Fraunces:wght@700;800&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <Link href="/" style={{ fontSize: '14px', color: '#64748b', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
            ← Retour au site
          </Link>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '40px', fontWeight: 800, color: '#0f172a', letterSpacing: '-1.5px', marginBottom: '8px' }}>
            Mentions légales
          </h1>
          <p style={{ fontSize: '14px', color: '#94a3b8' }}>Dernière mise à jour : avril 2026</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

          {/* Éditeur */}
          <section style={{ background: '#fff', borderRadius: '16px', padding: '28px 32px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>1. Éditeur du site</h2>
            <div style={{ fontSize: '15px', color: '#374151', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p><strong>Site :</strong> TonMeilleurSaaS</p>
              <p><strong>URL :</strong> https://ton-meilleur-saas.fr</p>
              <p><strong>Éditeur :</strong> Clément Chevallier</p>
              <p><strong>Statut :</strong> Auto-entrepreneur</p>
              <p><strong>SIRET :</strong> À COMPLÉTER</p>
              <p><strong>Adresse :</strong> À COMPLÉTER</p>
              <p><strong>Email :</strong> contact@ton-meilleur-saas.fr</p>
            </div>
          </section>

          {/* Hébergeur */}
          <section style={{ background: '#fff', borderRadius: '16px', padding: '28px 32px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>2. Hébergement</h2>
            <div style={{ fontSize: '15px', color: '#374151', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p><strong>Site :</strong> https://vercel.com</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section style={{ background: '#fff', borderRadius: '16px', padding: '28px 32px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>3. Propriété intellectuelle</h2>
            <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.7 }}>
              L&apos;ensemble du contenu de ce site (textes, comparatifs, guides, visuels) est la propriété exclusive de TonMeilleurSaaS. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
            </p>
          </section>

          {/* Liens affiliés */}
          <section style={{ background: '#fff', borderRadius: '16px', padding: '28px 32px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>4. Liens d&apos;affiliation</h2>
            <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.7 }}>
              Certains liens présents sur ce site sont des liens affiliés. Si vous souscrivez à un service via ces liens, TonMeilleurSaaS peut percevoir une commission, sans coût supplémentaire pour vous. Cette rémunération n&apos;influence pas nos classements ni nos avis, qui restent indépendants et honnêtes.
            </p>
          </section>

          {/* Données personnelles */}
          <section style={{ background: '#fff', borderRadius: '16px', padding: '28px 32px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>5. Données personnelles (RGPD)</h2>
            <div style={{ fontSize: '15px', color: '#374151', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                TonMeilleurSaaS collecte uniquement les données nécessaires au traitement de vos commandes (email, informations de paiement via Stripe). Ces données ne sont jamais revendues à des tiers.
              </p>
              <p>
                <strong>Responsable du traitement :</strong> Clément Chevallier — contact@ton-meilleur-saas.fr
              </p>
              <p>
                <strong>Durée de conservation :</strong> Les données de commande sont conservées 3 ans conformément aux obligations légales.
              </p>
              <p>
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à contact@ton-meilleur-saas.fr.
              </p>
              <p>
                <strong>Paiements :</strong> Les transactions sont gérées par Stripe Inc. TonMeilleurSaaS ne stocke aucune donnée bancaire.
              </p>
            </div>
          </section>

          {/* CGV */}
          <section style={{ background: '#fff', borderRadius: '16px', padding: '28px 32px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>6. Conditions générales de vente</h2>
            <div style={{ fontSize: '15px', color: '#374151', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p><strong>Produits vendus :</strong> Ressources numériques (workflows, guides) et prestations de conseil (audit SaaS).</p>
              <p><strong>Prix :</strong> Indiqués en euros TTC sur la boutique. Paiement unique, accès à vie pour les ressources numériques.</p>
              <p><strong>Livraison :</strong> Les ressources numériques sont livrées instantanément par email après confirmation du paiement. L&apos;audit SaaS est livré sous 48h ouvrées.</p>
              <p><strong>Droit de rétractation :</strong> Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation ne s&apos;applique pas aux contenus numériques fournis immédiatement après achat. Cependant, si vous n&apos;êtes pas satisfait, contactez-nous sous 14 jours et nous trouverons une solution.</p>
              <p><strong>Réclamations :</strong> contact@ton-meilleur-saas.fr</p>
            </div>
          </section>

          {/* Cookies */}
          <section style={{ background: '#fff', borderRadius: '16px', padding: '28px 32px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>7. Cookies</h2>
            <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.7 }}>
              Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement (session, préférences). Aucun cookie publicitaire ou de tracking tiers n&apos;est utilisé.
            </p>
          </section>

        </div>

        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '40px' }}>
          Pour toute question : contact@ton-meilleur-saas.fr
        </p>
      </div>
    </main>
  )
}
