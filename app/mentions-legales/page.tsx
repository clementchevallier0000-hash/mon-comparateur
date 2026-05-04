import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — TonMeilleurSaaS',
  description: 'Mentions légales du site TonMeilleurSaaS : éditeur, hébergeur, propriété intellectuelle et liens d\'affiliation.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/mentions-legales' },
  robots: { index: false },
}

const linkStyle = { color: '#6366f1', textDecoration: 'none' }
const sectionStyle = { background: '#fff', borderRadius: '16px', padding: '28px 32px', border: '1px solid #e2e8f0' }
const h2Style = { fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }
const textStyle = { fontSize: '15px', color: '#374151', lineHeight: 1.7 }

export default function MentionsLegales() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh', padding: '60px 24px' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Fraunces:wght@700;800&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        <div style={{ marginBottom: '40px' }}>
          <Link href="/" style={{ fontSize: '14px', color: '#64748b', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
            ← Retour au site
          </Link>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '40px', fontWeight: 800, color: '#0f172a', letterSpacing: '-1.5px', marginBottom: '8px' }}>
            Mentions légales
          </h1>
          <p style={{ fontSize: '14px', color: '#94a3b8' }}>Dernière mise à jour : avril 2026</p>
        </div>

        {/* Nav vers les autres pages légales */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
          {[
            { href: '/mentions-legales', label: 'Mentions légales', active: true },
            { href: '/politique-de-confidentialite', label: 'Confidentialité & Cookies', active: false },
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
            <h2 style={h2Style}>1. Éditeur du site</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <p>Le site <strong>TonMeilleurSaaS</strong> (accessible à l'adresse <strong>https://ton-meilleur-saas.fr</strong>) est édité par :</p>
              <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '16px 20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', border: '1px solid #e2e8f0' }}>
                <p><strong>Nom :</strong> Clément Chevallier</p>
                <p><strong>Statut juridique :</strong> Auto-entrepreneur (micro-entreprise)</p>
                <p><strong>SIRET :</strong> 92410153800016</p>
                <p><strong>Adresse :</strong> 9 Rue Montesquieu, 17000 La Rochelle</p>
                <p><strong>Email :</strong> <a href="mailto:contact@ton-meilleur-saas.fr" style={linkStyle}>contact@ton-meilleur-saas.fr</a></p>
              </div>
              <p style={{ marginTop: '8px', fontSize: '14px', color: '#64748b' }}>
                Conformément à l'article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), les informations ci-dessus sont mises à disposition de tout visiteur du site.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>2. Directeur de la publication</h2>
            <p style={textStyle}>
              Le directeur de la publication est <strong>Clément Chevallier</strong>, en sa qualité d'éditeur du site, joignable à l'adresse <a href="mailto:contact@ton-meilleur-saas.fr" style={linkStyle}>contact@ton-meilleur-saas.fr</a>.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>3. Hébergement</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <p>Le site est hébergé par :</p>
              <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '16px 20px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', border: '1px solid #e2e8f0' }}>
                <p><strong>Société :</strong> Vercel Inc.</p>
                <p><strong>Siège social :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>https://vercel.com</a></p>
              </div>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>4. Propriété intellectuelle</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                L'ensemble des éléments constituant ce site (structure, textes, comparatifs, guides, méthodologies, visuels, logos, données) est la propriété exclusive de TonMeilleurSaaS, sauf mention contraire expresse.
              </p>
              <p>
                Ces éléments sont protégés par les dispositions du Code de la propriété intellectuelle et notamment par le droit d'auteur. Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, est interdite sans l'autorisation écrite préalable de TonMeilleurSaaS.
              </p>
              <p>
                Les marques, logos et noms commerciaux des logiciels SaaS présentés sur ce site appartiennent à leurs éditeurs respectifs. Leur mention sur TonMeilleurSaaS s'inscrit dans un cadre comparatif et informatif, sans lien commercial avec lesdits éditeurs, sauf indication contraire (voir section liens d'affiliation ci-dessous).
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>5. Liens d'affiliation</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                TonMeilleurSaaS est un site comparateur qui participe à des programmes d'affiliation. Certains liens présents sur ce site, notamment les boutons «&nbsp;Essayer gratuitement&nbsp;» ou «&nbsp;Voir l'offre&nbsp;», sont des liens affiliés.
              </p>
              <p>
                Si vous souscrivez à un abonnement ou achetez un produit via ces liens, TonMeilleurSaaS peut percevoir une commission de la part de l'éditeur du logiciel concerné. Cette commission est sans coût supplémentaire pour vous : vous payez le même prix que si vous aviez accédé directement au site de l'éditeur.
              </p>
              <p>
                <strong>Indépendance éditoriale :</strong> Cette rémunération potentielle n'influence en aucune façon mes classements, mes notes, ni mes avis. Les fiches publiées sur TonMeilleurSaaS sont basées sur mes recherches, les données officielles et les avis utilisateurs publics. Tout lien affilié est clairement identifié comme tel.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>6. Limitation de responsabilité</h2>
            <div style={{ ...textStyle, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                TonMeilleurSaaS s'efforce de maintenir les informations publiées sur le site aussi précises et à jour que possible. Toutefois, les caractéristiques, tarifs et disponibilités des logiciels SaaS présentés sont susceptibles d'évoluer sans préavis de la part de leurs éditeurs.
              </p>
              <p>
                TonMeilleurSaaS ne saurait être tenu responsable des erreurs ou omissions éventuelles dans le contenu du site, ni des dommages directs ou indirects résultant de l'utilisation des informations présentées ou des liens vers des sites tiers.
              </p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>7. Droit applicable</h2>
            <p style={textStyle}>
              Le présent site et ses mentions légales sont régis par le droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

        </div>

        {/* Liens vers autres pages légales */}
        <div style={{ marginTop: '48px', padding: '24px 28px', background: '#f1f5f9', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', marginBottom: '12px' }}>Documents légaux complémentaires</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/politique-de-confidentialite" style={{ fontSize: '14px', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>
              → Politique de confidentialité &amp; Cookies
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
