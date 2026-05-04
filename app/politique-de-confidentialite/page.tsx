import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité & Cookies — TonMeilleurSaaS',
  description: 'Politique de confidentialité et gestion des cookies de TonMeilleurSaaS. Vos données personnelles, vos droits RGPD et les cookies utilisés sur le site.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/politique-de-confidentialite' },
  robots: { index: false },
}

const linkStyle = { color: '#6366f1', textDecoration: 'none' }
const sectionStyle = { background: '#fff', borderRadius: '16px', padding: '28px 32px', border: '1px solid #e2e8f0' }
const h2Style = { fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }
const h3Style = { fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '10px', marginTop: '20px' }
const textStyle = { fontSize: '15px', color: '#374151', lineHeight: 1.7 }

export default function PolitiqueConfidentialite() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh', padding: '60px 24px' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Fraunces:wght@700;800&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        <div style={{ marginBottom: '40px' }}>
          <Link href="/" style={{ fontSize: '14px', color: '#64748b', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
            ← Retour au site
          </Link>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '40px', fontWeight: 800, color: '#0f172a', letterSpacing: '-1.5px', marginBottom: '8px' }}>
            Politique de confidentialité
          </h1>
          <p style={{ fontSize: '14px', color: '#94a3b8' }}>Dernière mise à jour : avril 2026</p>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
          {[
            { href: '/mentions-legales', label: 'Mentions légales', active: false },
            { href: '/politique-de-confidentialite', label: 'Confidentialité & Cookies', active: true },
            { href: '/cgv', label: 'CGV', active: false },
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
            <h2 style={h2Style}>1. Responsable du traitement</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <p>Le responsable du traitement des données personnelles collectées sur TonMeilleurSaaS est :</p>
              <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '16px 20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', border: '1px solid #e2e8f0' }}>
                <p><strong>Nom :</strong> Clément Chevallier</p>
                <p><strong>Statut :</strong> Auto-entrepreneur</p>
                <p><strong>Email :</strong> <a href="mailto:contact@ton-meilleur-saas.fr" style={linkStyle}>contact@ton-meilleur-saas.fr</a></p>
              </div>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>2. Données collectées et finalités</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>TonMeilleurSaaS collecte uniquement les données strictement nécessaires à son fonctionnement. Voici le détail de chaque traitement :</p>

              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', marginTop: '8px' }}>
                {[
                  {
                    title: 'Paiement (achat boutique)',
                    data: 'Adresse email, informations de paiement (carte bancaire traitée par Stripe)',
                    purpose: 'Traitement de la commande, envoi du produit numérique ou planification de l\'audit',
                    basis: 'Exécution du contrat (art. 6.1.b RGPD)',
                    retention: '3 ans (obligations comptables légales)',
                  },
                  {
                    title: 'Contact par email',
                    data: 'Adresse email, contenu du message',
                    purpose: 'Répondre à vos demandes d\'information ou réclamations',
                    basis: 'Intérêt légitime (art. 6.1.f RGPD)',
                    retention: '3 ans après le dernier échange',
                  },
                  {
                    title: 'Navigation sur le site',
                    data: 'Adresse IP (anonymisée), pages consultées, durée de visite',
                    purpose: 'Amélioration du site, statistiques d\'audience anonymes',
                    basis: 'Intérêt légitime (art. 6.1.f RGPD)',
                    retention: '13 mois maximum',
                  },
                ].map((row, i) => (
                  <div key={i} style={{ padding: '20px', borderBottom: i < 2 ? '1px solid #e2e8f0' : 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{row.title}</p>
                    <p style={{ fontSize: '14px', color: '#374151' }}><strong>Données :</strong> {row.data}</p>
                    <p style={{ fontSize: '14px', color: '#374151' }}><strong>Finalité :</strong> {row.purpose}</p>
                    <p style={{ fontSize: '14px', color: '#374151' }}><strong>Base légale :</strong> {row.basis}</p>
                    <p style={{ fontSize: '14px', color: '#374151' }}><strong>Conservation :</strong> {row.retention}</p>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: '14px', color: '#64748b' }}>
                TonMeilleurSaaS ne collecte jamais de données sensibles (santé, opinions politiques, etc.) et ne revend aucune donnée personnelle à des tiers.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>3. Destinataires des données</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>Vos données peuvent être transmises aux sous-traitants suivants, dans le strict cadre de l'exécution de leurs services :</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                {[
                  {
                    name: 'Stripe Inc.',
                    role: 'Traitement des paiements',
                    location: 'États-Unis (Privacy Shield / Clauses contractuelles types)',
                    link: 'https://stripe.com/fr/privacy',
                  },
                  {
                    name: 'Vercel Inc.',
                    role: 'Hébergement du site',
                    location: 'États-Unis (Clauses contractuelles types)',
                    link: 'https://vercel.com/legal/privacy-policy',
                  },
                  {
                    name: 'Supabase Inc.',
                    role: 'Base de données et stockage des fichiers',
                    location: 'États-Unis / UE (Clauses contractuelles types)',
                    link: 'https://supabase.com/privacy',
                  },
                ].map((p) => (
                  <div key={p.name} style={{ background: '#f8fafc', borderRadius: '10px', padding: '14px 18px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{p.name}</p>
                    <p style={{ fontSize: '14px', color: '#374151' }}>Rôle : {p.role}</p>
                    <p style={{ fontSize: '14px', color: '#374151' }}>Localisation : {p.location}</p>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', ...linkStyle }}>Politique de confidentialité →</a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>4. Vos droits (RGPD)</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD — règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '8px' }}>
                {[
                  { right: 'Droit d\'accès', desc: 'Obtenir une copie de vos données personnelles détenues par TonMeilleurSaaS.' },
                  { right: 'Droit de rectification', desc: 'Faire corriger des données inexactes ou incomplètes.' },
                  { right: 'Droit à l\'effacement', desc: 'Demander la suppression de vos données ("droit à l\'oubli"), sous conditions légales.' },
                  { right: 'Droit à la portabilité', desc: 'Recevoir vos données dans un format structuré et lisible par machine.' },
                  { right: 'Droit d\'opposition', desc: 'Vous opposer à un traitement fondé sur l\'intérêt légitime.' },
                  { right: 'Droit à la limitation', desc: 'Demander la suspension temporaire d\'un traitement contesté.' },
                ].map(({ right, desc }) => (
                  <div key={right} style={{ background: '#f8fafc', borderRadius: '10px', padding: '14px 16px', border: '1px solid #e2e8f0' }}>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>{right}</p>
                    <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                ))}
              </div>

              <p>
                Pour exercer ces droits, adressez votre demande par email à <a href="mailto:contact@ton-meilleur-saas.fr" style={linkStyle}>contact@ton-meilleur-saas.fr</a> en précisant votre identité. Une réponse vous sera apportée dans un délai maximum de 30 jours.
              </p>
              <p>
                En cas de réponse insatisfaisante, vous pouvez déposer une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.cnil.fr</a>.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>5. Sécurité des données</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                TonMeilleurSaaS met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction :
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: '#374151' }}>
                <li>Chiffrement HTTPS/TLS de toutes les communications</li>
                <li>Données de paiement traitées exclusivement par Stripe (certifié PCI-DSS) — TonMeilleurSaaS ne stocke aucune donnée bancaire</li>
                <li>Accès aux données limité aux seules personnes autorisées</li>
                <li>Mots de passe hashés, clés d'API stockées en variables d'environnement sécurisées</li>
              </ul>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>6. Politique de cookies</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, mobile, tablette) lors de votre visite sur un site web. Il permet au site de mémoriser des informations relatives à votre navigation.
              </p>

              <h3 style={h3Style}>6.1 Cookies strictement nécessaires</h3>
              <p>
                Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés. Ils ne collectent aucune donnée personnelle identifiable.
              </p>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                {[
                  { name: '__stripe_sid', purpose: 'Sécurité des paiements Stripe', duration: 'Session' },
                  { name: '__stripe_mid', purpose: 'Prévention de la fraude Stripe', duration: '1 an' },
                  { name: 'next-auth.session-token', purpose: 'Gestion de la session utilisateur', duration: 'Session' },
                ].map((c, i) => (
                  <div key={c.name} style={{ padding: '12px 16px', borderBottom: i < 2 ? '1px solid #f1f5f9' : 'none', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <code style={{ fontSize: '12px', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', color: '#0f172a', fontFamily: 'monospace', flex: '0 0 auto' }}>{c.name}</code>
                    <span style={{ fontSize: '14px', color: '#374151', flex: 1 }}>{c.purpose}</span>
                    <span style={{ fontSize: '13px', color: '#64748b', flex: '0 0 auto' }}>{c.duration}</span>
                  </div>
                ))}
              </div>

              <h3 style={h3Style}>6.2 Cookies analytiques</h3>
              <p>
                TonMeilleurSaaS utilise <strong>Google Analytics 4</strong> (Google LLC) pour mesurer l'audience du site de manière agrégée. Google Analytics dépose des cookies de mesure d'audience. Les données collectées (pages vues, durée de session, source de trafic) sont anonymisées et ne permettent pas de vous identifier personnellement.
              </p>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', marginTop: '8px' }}>
                {[
                  { name: '_ga', purpose: 'Distinguer les utilisateurs (Google Analytics)', duration: '2 ans' },
                  { name: '_ga_*', purpose: 'Maintenir l\'état de session (Google Analytics)', duration: '2 ans' },
                ].map((c, i) => (
                  <div key={c.name} style={{ padding: '12px 16px', borderBottom: i < 1 ? '1px solid #f1f5f9' : 'none', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <code style={{ fontSize: '12px', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', color: '#0f172a', fontFamily: 'monospace', flex: '0 0 auto' }}>{c.name}</code>
                    <span style={{ fontSize: '14px', color: '#374151', flex: 1 }}>{c.purpose}</span>
                    <span style={{ fontSize: '13px', color: '#64748b', flex: '0 0 auto' }}>{c.duration}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '14px', color: '#64748b', marginTop: '8px' }}>
                Ces cookies nécessitent votre consentement. En continuant à naviguer sur le site, vous acceptez leur dépôt. Vous pouvez vous opposer à leur utilisation via les paramètres de votre navigateur ou en désactivant JavaScript pour Google Analytics.
              </p>

              <h3 style={h3Style}>6.3 Cookies tiers</h3>
              <p>
                Aucun cookie publicitaire, de remarketing ou de profilage n'est déposé par TonMeilleurSaaS. Les liens vers des sites tiers (éditeurs SaaS, Stripe) peuvent déposer leurs propres cookies lorsque vous les visitez — nous vous invitons à consulter leurs politiques de cookies respectives.
              </p>

              <h3 style={h3Style}>6.4 Gérer vos préférences cookies</h3>
              <p>
                Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies. Les paramètres varient selon le navigateur :
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '4px' }}>
                {[
                  { name: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { name: 'Firefox', url: 'https://support.mozilla.org/fr/kb/activer-desactiver-cookies' },
                  { name: 'Safari', url: 'https://support.apple.com/fr-fr/guide/safari/sfri11471/mac' },
                  { name: 'Edge', url: 'https://support.microsoft.com/fr-fr/windows/microsoft-edge-données-de-navigation-et-confidentialité' },
                ].map((b) => (
                  <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '13px', padding: '6px 14px', background: '#f1f5f9', borderRadius: '8px', color: '#374151', textDecoration: 'none', border: '1px solid #e2e8f0' }}>
                    {b.name}
                  </a>
                ))}
              </div>
              <p style={{ fontSize: '14px', color: '#64748b' }}>
                Attention : la désactivation des cookies nécessaires au paiement peut empêcher le traitement de votre commande.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>7. Transferts hors Union Européenne</h2>
            <p style={textStyle}>
              Certains sous-traitants (Stripe, Vercel, Supabase) sont établis aux États-Unis. Ces transferts sont encadrés par des garanties appropriées conformément au RGPD (clauses contractuelles types de la Commission Européenne, ou décision d'adéquation le cas échéant).
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>8. Modifications de la politique</h2>
            <p style={textStyle}>
              TonMeilleurSaaS se réserve le droit de modifier la présente politique de confidentialité à tout moment, notamment pour se conformer à toute nouvelle réglementation. La date de dernière mise à jour est indiquée en haut de cette page. En cas de modification substantielle, une information sera publiée sur le site.
            </p>
          </section>

        </div>

        <div style={{ marginTop: '48px', padding: '24px 28px', background: '#f1f5f9', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', marginBottom: '12px' }}>Documents légaux complémentaires</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/mentions-legales" style={{ fontSize: '14px', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>
              → Mentions légales
            </Link>
            <Link href="/cgv" style={{ fontSize: '14px', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>
              → Conditions Générales de Vente
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
