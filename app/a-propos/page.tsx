import Link from 'next/link'
import type { Metadata } from 'next'
import MobileMenu from '@/app/components/MobileMenu'
import SearchModal from '@/app/components/SearchModal'

export const metadata: Metadata = {
  title: 'À propos — TonMeilleurSaaS',
  description: 'Je suis Clément, seul derrière TonMeilleurSaaS. Je vous explique pourquoi j\'ai créé ce comparatif, comment je travaille et ce que vous pouvez en attendre.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/a-propos' },
}

export default function AProposPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>

      {/* Header */}
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

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1e40af 100%)', padding: '64px 24px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>À propos</p>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px,5vw,48px)', fontWeight: 900, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '20px' }}>
            Salut, moi c&apos;est Clément
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
            Je suis seul derrière TonMeilleurSaaS. Voici pourquoi j&apos;ai créé ce site, comment je travaille — et ce que vous pouvez en attendre.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '56px 24px 80px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

        {/* Qui je suis */}
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '36px' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
            🙋 Qui je suis
          </h2>
          <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.8, marginBottom: '14px' }}>
            Je m&apos;appelle Clément. Je travaille dans le digital depuis plusieurs années — entre SEO, automatisation et growth. Dans mes projets, j&apos;ai eu à choisir, tester et parfois abandonner des dizaines d&apos;outils SaaS : Ahrefs, Semrush, N8N, Make, Brevo, Trello, Semji, SimilarWeb... autant d&apos;expériences qui m&apos;ont donné une vraie opinion sur ce qui fonctionne vraiment pour les petites structures françaises.
          </p>
          <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.8, marginBottom: '14px' }}>
            À force de chercher des comparatifs honnêtes en français — et de ne trouver que des articles génériques ou visiblement sponsorisés — j&apos;ai décidé de créer TonMeilleurSaaS : un comparatif transparent, tenu par une seule personne, sans prétendre avoir tout testé.
          </p>
          <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.8 }}>
            Je suis basé en France. Ce site est un projet solo que je développe en parallèle de mes autres activités. <em style={{ color: '#94a3b8' }}>(La suite, c&apos;est à moi de la rédiger — je complèterai bientôt !)</em>
          </p>
        </div>

        {/* Pourquoi ce site */}
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '36px' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
            💡 Pourquoi ce site
          </h2>
          <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.8, marginBottom: '14px' }}>
            Le marché SaaS explose, les offres se ressemblent, et les décisions coûtent cher. Un mauvais outil CRM, c&apos;est des mois perdus. Un logiciel de facturation mal adapté, c&apos;est du temps gaspillé chaque semaine.
          </p>
          <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.8 }}>
            Mon objectif : vous donner les informations nécessaires pour choisir vite et bien — sans jargon, sans liste exhaustive inutile, et sans cacher que certains liens me rapportent une commission.
          </p>
        </div>

        {/* Comment je travaille */}
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '36px' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>
            🔍 Comment je travaille
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '✅', title: 'Les outils que j\'utilise moi-même', desc: 'Certains outils, je les utilise personnellement sur mes propres projets. Pour ceux-là, mon avis est basé sur mon expérience directe — les pages concernées sont clairement marquées.' },
              { icon: '🔎', title: 'Les autres : recherche sérieuse', desc: 'Pour les outils que je n\'utilise pas directement, je me base sur les données officielles, les retours d\'utilisateurs réels (forums, Capterra, G2, Reddit) et les tests publiés ailleurs.' },
              { icon: '💶', title: 'Transparence sur les prix', desc: 'Je vérifie les tarifs régulièrement et les corrige dès que possible. Mais les prix SaaS bougent vite — vérifiez toujours le site officiel avant de vous abonner.' },
              { icon: '🤝', title: 'Affiliation déclarée', desc: 'Certains liens sont affiliés : si vous souscrivez via mon lien, je touche une commission de l\'éditeur, sans aucun surcoût pour vous. Ça ne change pas les classements.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', padding: '18px', background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '20px', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>{item.title}</p>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ce que ce site n'est pas */}
        <div style={{ background: 'linear-gradient(135deg, #fff7ed, #fffbeb)', borderRadius: '20px', border: '1px solid #fed7aa', padding: '32px' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
            ⚠️ Ce que ce site n&apos;est pas
          </h2>
          <p style={{ fontSize: '15px', color: '#78350f', lineHeight: 1.75 }}>
            TonMeilleurSaaS n&apos;est <strong>pas</strong> une équipe de testeurs professionnels. Je ne teste pas chaque outil en profondeur avant de publier sa fiche. Ce n&apos;est pas un média, ce n&apos;est pas un cabinet de conseil. C&apos;est un comparatif honnête, tenu par une seule personne, qui s&apos;améliore au fil du temps.
          </p>
        </div>

        {/* Contact */}
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '36px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            📬 Me contacter
          </h2>
          <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7, marginBottom: '20px' }}>
            Une suggestion d&apos;outil à ajouter ? Une erreur dans une fiche ? Une question sur un comparatif ? Écrivez-moi.
          </p>
          <a
            href="mailto:contact@ton-meilleur-saas.fr"
            style={{ display: 'inline-block', background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '14px 28px', borderRadius: '12px', fontSize: '15px', fontWeight: 700 }}
          >
            contact@ton-meilleur-saas.fr
          </a>
        </div>

      </div>

      {/* Footer */}
      <footer style={{ background: '#0a0f1a', padding: '28px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: '16px', fontWeight: 800, color: '#fff' }}>TonMeilleurSaaS</span>
          <p style={{ color: '#475569', fontSize: '13px' }}>© 2026 · Comparateur honnête de logiciels SaaS</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/blog" style={{ color: '#475569', fontSize: '13px', textDecoration: 'none' }}>Blog</Link>
            <Link href="/boutique" style={{ color: '#d97706', fontSize: '13px', textDecoration: 'none', fontWeight: 600 }}>Boutique</Link>
            <Link href="/mentions-legales" style={{ color: '#475569', fontSize: '13px', textDecoration: 'none' }}>Mentions légales</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
