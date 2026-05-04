import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente — TonMeilleurSaaS',
  description: 'Conditions générales de vente de TonMeilleurSaaS : ressources numériques (pack N8N) et audit SaaS personnalisé. Tarifs, livraison, droit de rétractation.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/cgv' },
  robots: { index: false },
}

const linkStyle = { color: '#6366f1', textDecoration: 'none' }
const sectionStyle = { background: '#fff', borderRadius: '16px', padding: '28px 32px', border: '1px solid #e2e8f0' }
const h2Style = { fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }
const h3Style = { fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '10px', marginTop: '20px' }
const textStyle = { fontSize: '15px', color: '#374151', lineHeight: 1.7 }

export default function CGV() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh', padding: '60px 24px' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Fraunces:wght@700;800&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        <div style={{ marginBottom: '40px' }}>
          <Link href="/" style={{ fontSize: '14px', color: '#64748b', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
            ← Retour au site
          </Link>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '40px', fontWeight: 800, color: '#0f172a', letterSpacing: '-1.5px', marginBottom: '8px' }}>
            Conditions Générales de Vente
          </h1>
          <p style={{ fontSize: '14px', color: '#94a3b8' }}>Dernière mise à jour : avril 2026</p>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
          {[
            { href: '/mentions-legales', label: 'Mentions légales', active: false },
            { href: '/politique-de-confidentialite', label: 'Confidentialité & Cookies', active: false },
            { href: '/cgv', label: 'CGV', active: true },
          ].map(({ href, label, active }) => (
            <Link key={href} href={href} style={{
              fontSize: '13px', fontWeight: 600, padding: '8px 16px', borderRadius: '999px', textDecoration: 'none',
              background: active ? '#0f172a' : '#fff',
              color: active ? '#fff' : '#64748b',
              border: active ? '1px solid #0f172a' : '1px solid #e2e8f0',
            }}>{label}</Link>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <section style={sectionStyle}>
            <h2 style={h2Style}>1. Parties contractantes</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les ventes conclues entre :
              </p>
              <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '16px 20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p><strong>Vendeur :</strong> Clément Chevallier, auto-entrepreneur, exploitant le site TonMeilleurSaaS</p>
                <p><strong>SIRET :</strong> 92410153800016</p>
                <p><strong>Adresse :</strong> 9 Rue Montesquieu, 17000 La Rochelle</p>
                <p><strong>Email :</strong> <a href="mailto:contact@ton-meilleur-saas.fr" style={linkStyle}>contact@ton-meilleur-saas.fr</a></p>
              </div>
              <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '16px 20px', border: '1px solid #e2e8f0' }}>
                <p><strong>Acheteur :</strong> toute personne physique majeure ou personne morale procédant à un achat sur la boutique de TonMeilleurSaaS (ci-après «&nbsp;le Client&nbsp;»).</p>
              </div>
              <p style={{ fontSize: '14px', color: '#64748b' }}>
                Toute commande implique l'acceptation pleine et entière des présentes CGV. Elles prévalent sur tout autre document, sauf accord écrit contraire.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>2. Produits et services proposés</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p>TonMeilleurSaaS commercialise des ressources numériques et des prestations de conseil :</p>

              <div style={{ border: '2px solid #e2e8f0', borderRadius: '14px', overflow: 'hidden' }}>
                {[
                  { name: 'Pack N8N — 5 Workflows clé en main', price: '39 €', desc: 'Ressource numérique : workflows N8N au format JSON. Livraison instantanée par lien sécurisé.' },
                  { name: 'Pack RGPD complet pour TPE', price: '59 €', desc: 'Ressource numérique : 6 templates juridiques Word/PDF pour la mise en conformité RGPD. Livraison instantanée.' },
                  { name: 'Système de fidélisation client N8N', price: '99 €', desc: 'Ressource numérique : 5 workflows N8N de fidélisation. Livraison instantanée par lien sécurisé.' },
                  { name: 'Pack AI Agents N8N', price: '129 €', desc: 'Ressource numérique : 4 agents IA N8N + GPT-4. Livraison instantanée par lien sécurisé.' },
                  { name: 'Templates Notion — Agence & Freelance', price: '29 €', desc: 'Ressource numérique : 8 templates Notion avec liens de duplication. Livraison instantanée.' },
                  { name: 'Kit 100 Prompts métiers GPT', price: '19 €', desc: 'Ressource numérique : 100 prompts GPT organisés par métier en PDF. Livraison instantanée.' },
                  { name: 'Mini-audit IA personnalisé', price: '29 €', desc: 'Prestation automatisée : rapport PDF généré par IA à partir d\'un formulaire de 12 questions. Livraison sous 2 minutes.' },
                  { name: 'Audit SaaS personnalisé', price: '79 €', desc: 'Prestation de conseil : audit complet de votre stack SaaS avec recommandations personnalisées. Livraison sous 48h ouvrées.' },
                ].map((p, i, arr) => (
                  <div key={p.name} style={{ padding: '16px 24px', borderBottom: i < arr.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{p.name}</p>
                      <span style={{ fontSize: '15px', fontWeight: 800, color: '#6366f1', flexShrink: 0, marginLeft: '12px' }}>{p.price}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                ))}
              </div>

              <p>
                Les prix indiqués sont en euros TTC. TonMeilleurSaaS, en tant que micro-entreprise non assujettie à la TVA (article 293 B du CGI), ne facture pas de TVA : «&nbsp;TVA non applicable, art. 293 B du CGI&nbsp;».
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>3. Processus de commande</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>La commande se déroule en 4 étapes :</p>
              <ol style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: '#374151' }}>
                <li><strong>Sélection</strong> — Le Client choisit un produit sur la page <Link href="/boutique" style={linkStyle}>Boutique</Link>.</li>
                <li><strong>Paiement</strong> — Le Client est redirigé vers le formulaire de paiement sécurisé Stripe. Il renseigne son adresse email et ses coordonnées bancaires.</li>
                <li><strong>Confirmation</strong> — Après validation du paiement par Stripe, le Client est automatiquement redirigé vers une page de confirmation.</li>
                <li><strong>Livraison</strong> — Voir section 5 ci-dessous.</li>
              </ol>
              <p>
                La vente est définitivement conclue à la réception de la confirmation de paiement de Stripe. Un email récapitulatif est envoyé à l'adresse indiquée lors du paiement.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>4. Paiement</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                Les paiements sont traités exclusivement par <strong>Stripe Inc.</strong>, prestataire de paiement certifié PCI-DSS niveau 1. TonMeilleurSaaS n'accède jamais à vos données bancaires complètes.
              </p>
              <p><strong>Moyens de paiement acceptés :</strong></p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '15px', color: '#374151' }}>
                <li>Carte bancaire (Visa, Mastercard, American Express)</li>
                <li>Apple Pay / Google Pay (selon votre navigateur)</li>
              </ul>
              <p>
                Le paiement est unique et immédiat. Aucun abonnement ni prélèvement récurrent n'est mis en place.
              </p>
              <p>
                En cas d'échec du paiement, la commande n'est pas enregistrée et aucun accès au produit n'est accordé. Le Client peut relancer une nouvelle commande.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>5. Livraison</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '16px' }}>

              <div>
                <h3 style={{ ...h3Style, marginTop: 0 }}>5.1 Pack N8N (ressource numérique)</h3>
                <p>
                  Immédiatement après confirmation du paiement, le Client est redirigé vers une page de téléchargement contenant un lien sécurisé valide <strong>1 heure</strong>. Ce lien permet de télécharger le fichier ZIP contenant les workflows.
                </p>
                <p style={{ marginTop: '10px' }}>
                  Si le lien a expiré ou si le Client n'a pas pu télécharger le fichier, il peut contacter <a href="mailto:contact@ton-meilleur-saas.fr" style={linkStyle}>contact@ton-meilleur-saas.fr</a> en indiquant son email de paiement. Un nouveau lien lui sera envoyé sous 24h ouvrées.
                </p>
              </div>

              <div>
                <h3 style={h3Style}>5.2 Audit SaaS personnalisé</h3>
                <p>
                  Après confirmation du paiement, le Client est invité à remplir un formulaire détaillant sa stack SaaS actuelle et ses besoins. L'audit est livré par email <strong>sous 48h ouvrées</strong> à compter de la réception du formulaire complété.
                </p>
                <p style={{ marginTop: '10px' }}>
                  En cas de surcharge exceptionnelle, TonMeilleurSaaS s'engage à informer le Client par email si le délai ne peut être respecté, et à proposer une date de livraison alternative.
                </p>
              </div>

              <p style={{ fontSize: '14px', background: '#fef9c3', padding: '12px 16px', borderRadius: '10px', color: '#713f12', border: '1px solid #fde68a' }}>
                Les livraisons sont effectuées exclusivement par voie électronique. Aucun support physique n'est expédié.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>6. Droit de rétractation</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>

              <div>
                <h3 style={{ ...h3Style, marginTop: 0 }}>6.1 Ressources numériques (Pack N8N)</h3>
                <p>
                  Conformément à l'article <strong>L221-28 12° du Code de la consommation</strong>, le droit de rétractation de 14 jours <strong>ne s'applique pas</strong> aux contenus numériques fournis sur un support immatériel dont l'exécution a commencé avant l'expiration du délai de rétractation avec l'accord préalable exprès du consommateur.
                </p>
                <p style={{ marginTop: '10px' }}>
                  En procédant au paiement, le Client accepte expressément que la livraison commence immédiatement et renonce de ce fait à son droit de rétractation.
                </p>
              </div>

              <div>
                <h3 style={h3Style}>6.2 Audit SaaS personnalisé (prestation de service)</h3>
                <p>
                  Pour les prestations de service, le Client dispose d'un délai de rétractation de <strong>14 jours calendaires</strong> à compter de la commande, à condition que l'audit n'ait pas encore été livré.
                </p>
                <p style={{ marginTop: '10px' }}>
                  Si l'audit a été livré dans ce délai (avec l'accord du Client exprimé lors de la commande), le droit de rétractation ne s'applique plus conformément à l'article L221-28 1° du Code de la consommation.
                </p>
                <p style={{ marginTop: '10px' }}>
                  Pour exercer votre droit de rétractation, contactez <a href="mailto:contact@ton-meilleur-saas.fr" style={linkStyle}>contact@ton-meilleur-saas.fr</a> avant la livraison en indiquant votre email de commande.
                </p>
              </div>

              <div style={{ background: '#f0fdf4', padding: '16px 20px', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                <p style={{ fontSize: '14px', color: '#166534', fontWeight: 600, marginBottom: '6px' }}>Notre engagement satisfaction</p>
                <p style={{ fontSize: '14px', color: '#166534', lineHeight: 1.6 }}>
                  Même hors application du droit légal de rétractation, si vous n'êtes pas satisfait de votre achat, contactez-nous dans les <strong>14 jours</strong> suivant votre commande. Nous examinons chaque situation individuellement et nous nous engageons à trouver une solution satisfaisante (remplacement, crédit, remboursement selon les circonstances).
                </p>
              </div>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>7. Propriété intellectuelle des produits</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                L'achat d'un produit sur TonMeilleurSaaS confère au Client une <strong>licence d'utilisation personnelle et non exclusive</strong>. Le Client peut utiliser les workflows ou les recommandations de l'audit pour son usage propre et celui de son entreprise.
              </p>
              <p>
                Il est strictement interdit de :
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: '#374151' }}>
                <li>Revendre, redistribuer ou partager le contenu (fichiers, document d'audit) à des tiers</li>
                <li>Publier le contenu sur des plateformes de partage ou des dépôts publics</li>
                <li>Présenter le contenu comme sa propre création</li>
              </ul>
              <p>
                TonMeilleurSaaS conserve l'intégralité des droits de propriété intellectuelle sur ses produits.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>8. Responsabilité</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                TonMeilleurSaaS s'engage à livrer les produits décrits et à répondre aux demandes d'assistance post-achat.
              </p>
              <p>
                TonMeilleurSaaS ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation des produits achetés, notamment en cas d'incompatibilité avec l'infrastructure technique du Client, de résultats d'automatisation non conformes aux attentes, ou de perte de données.
              </p>
              <p>
                Les recommandations de l'audit SaaS sont données à titre consultatif. TonMeilleurSaaS ne saurait être tenu responsable des décisions prises par le Client sur la base de ces recommandations.
              </p>
              <p>
                En tout état de cause, la responsabilité de TonMeilleurSaaS est limitée au montant de la commande concernée.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>9. Service après-vente et réclamations</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                Pour toute question, demande de support ou réclamation concernant une commande, contactez :
              </p>
              <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '16px 20px', border: '1px solid #e2e8f0' }}>
                <p><strong>Email :</strong> <a href="mailto:contact@ton-meilleur-saas.fr" style={linkStyle}>contact@ton-meilleur-saas.fr</a></p>
                <p style={{ fontSize: '14px', color: '#64748b', marginTop: '6px' }}>Délai de réponse : sous 48h ouvrées</p>
              </div>
              <p>
                En cas de litige non résolu à l'amiable, le Client résidant en France peut recourir gratuitement à un médiateur de la consommation. Conformément aux articles L612-1 et suivants du Code de la consommation, TonMeilleurSaaS adhère au dispositif de médiation de la consommation. Les coordonnées du médiateur compétent sont disponibles sur demande à l'adresse ci-dessus.
              </p>
              <p>
                La Commission Européenne met également à disposition une plateforme de règlement en ligne des litiges : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={linkStyle}>https://ec.europa.eu/consumers/odr</a>.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>10. Droit applicable et juridiction</h2>
            <p style={textStyle}>
              Les présentes CGV sont soumises au droit français. En cas de litige persistant après tentative de résolution amiable et de médiation, les tribunaux compétents seront ceux du ressort du domicile du vendeur, sauf disposition légale contraire applicable au consommateur.
            </p>
          </section>

        </div>

        <div style={{ marginTop: '48px', padding: '24px 28px', background: '#f1f5f9', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', marginBottom: '12px' }}>Documents légaux complémentaires</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/mentions-legales" style={{ fontSize: '14px', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>
              → Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" style={{ fontSize: '14px', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>
              → Politique de confidentialité &amp; Cookies
            </Link>
          </div>
        </div>

        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '32px' }}>
          Pour toute question : <a href="mailto:contact@ton-meilleur-saas.fr" style={{ color: '#94a3b8' }}>contact@ton-meilleur-saas.fr</a>
        </p>
      </div>
    </main>
  )
}
