import Link from 'next/link'
import type { Metadata } from 'next'
import SiteHeader from '@/app/components/SiteHeader'
import { supabase } from '@/lib/supabase'
import SiteFooter from '@/app/components/SiteFooter'
import BackToTop from '@/app/components/BackToTop'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Toutes les catégories de logiciels SaaS — Comparatifs TPE/PME 2026 | TonMeilleurSaaS',
  description: 'Comparez les meilleurs logiciels SaaS par catégorie : CRM, facturation, gestion de projet, SEO, automatisation. Comparatifs honnêtes et mis à jour en 2026 pour TPE et PME françaises.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/categorie' },
}

const catMeta: Record<string, { emoji: string; accent: string; bg: string; accentLight: string; tools: string[] }> = {
  crm:               { emoji: '🤝', accent: '#2563eb', bg: '#eff6ff', accentLight: '#bfdbfe', tools: ['HubSpot', 'Pipedrive', 'Karlia', 'Salesforce'] },
  facturation:       { emoji: '💶', accent: '#ea580c', bg: '#fff7ed', accentLight: '#fed7aa', tools: ['Pennylane', 'Indy', 'Sellsy', 'Tiime'] },
  'gestion-de-projet': { emoji: '📋', accent: '#16a34a', bg: '#f0fdf4', accentLight: '#bbf7d0', tools: ['Notion', 'Monday', 'Trello', 'Asana'] },
  seo:               { emoji: '🔍', accent: '#9333ea', bg: '#fdf4ff', accentLight: '#e9d5ff', tools: ['Semrush', 'Ahrefs', 'Ubersuggest', 'Moz'] },
  automatisation:    { emoji: '⚡', accent: '#d97706', bg: '#fffbeb', accentLight: '#fde68a', tools: ['Make', 'n8n', 'Zapier'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Quelle est la différence entre un logiciel SaaS et un logiciel classique ?', acceptedAnswer: { '@type': 'Answer', text: 'Un logiciel SaaS est hébergé dans le cloud et accessible via navigateur, sans installation. On paie un abonnement mensuel plutôt qu\'une licence unique. Mises à jour automatiques, accessible partout, pas de serveur à gérer.' } },
    { '@type': 'Question', name: 'Quel est le meilleur logiciel SaaS pour une TPE qui débute ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour une TPE qui débute : Indy ou Pennylane pour la facturation, HubSpot CRM (gratuit) pour la relation client, et Trello ou Notion pour la gestion des tâches. Ces trois outils couvrent l\'essentiel avec des versions gratuites ou très accessibles.' } },
    { '@type': 'Question', name: 'Comment éviter de payer trop cher pour ses logiciels SaaS ?', acceptedAnswer: { '@type': 'Answer', text: 'Commencez par les plans gratuits, montez en gamme seulement quand vous atteignez les limites, et vérifiez les doublons dans votre stack (deux outils qui font la même chose). Notre calculateur de budget SaaS peut vous aider à détecter ces doublons.' } },
    { '@type': 'Question', name: 'Les comparatifs de ce site sont-ils objectifs ?', acceptedAnswer: { '@type': 'Answer', text: 'Les classements sont basés sur les fonctionnalités réelles, les tarifs officiels et les avis utilisateurs G2/Capterra. Certains liens sont affiliés — cela ne change jamais les classements.' } },
  ],
}

export default async function CategoriesPage() {
  const { data: categories } = await supabase
    .from('categories')
    .select('slug,nom,description,h1')

  const { data: toolCounts } = await supabase
    .from('outils')
    .select('categorie_slug')

  const counts: Record<string, number> = {}
  toolCounts?.forEach(t => {
    counts[t.categorie_slug] = (counts[t.categorie_slug] || 0) + 1
  })

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'DM Sans', Arial, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Fraunces:wght@700;800;900&display=swap" rel="stylesheet" />
      <style>{`.cat-card { transition: transform 0.2s ease, box-shadow 0.2s ease; } .cat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }`}</style>

      <SiteHeader />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '56px 24px 64px', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>Mis à jour en 2026 · Comparatifs experts</span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, color: '#fff', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: '20px' }}>
            Comparatifs logiciels SaaS<br />pour TPE et PME françaises
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
            Choisissez une catégorie pour accéder au comparatif complet, aux avis utilisateurs et aux recommandations adaptées à votre profil.
          </p>
        </div>
      </section>

      {/* Grille catégories */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {categories?.map(cat => {
            const meta = catMeta[cat.slug] || { emoji: '📦', accent: '#64748b', bg: '#f8fafc', accentLight: '#e2e8f0', tools: [] }
            const count = counts[cat.slug] || 0
            return (
              <Link key={cat.slug} href={`/categorie/${cat.slug}`} style={{ textDecoration: 'none' }}>
                <div className="cat-card" style={{
                  background: '#fff',
                  borderRadius: '20px',
                  border: `1.5px solid ${meta.accentLight}`,
                  padding: '28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}>
                  {/* Top */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                    <div style={{ width: '52px', height: '52px', background: meta.bg, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0 }}>
                      {meta.emoji}
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: meta.accent, background: meta.bg, padding: '4px 10px', borderRadius: '999px', border: `1px solid ${meta.accentLight}`, whiteSpace: 'nowrap' }}>
                      {count} outil{count > 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Nom + description */}
                  <div>
                    <p style={{ fontSize: '20px', fontFamily: "'Fraunces', serif", fontWeight: 800, color: '#0f172a', marginBottom: '6px', lineHeight: 1.2 }}>
                      {cat.nom}
                    </p>
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>
                      {cat.description}
                    </p>
                  </div>

                  {/* Outils phares */}
                  {meta.tools.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                      {meta.tools.map(t => (
                        <span key={t} style={{ fontSize: '11px', fontWeight: 600, color: '#475569', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '3px 8px', borderRadius: '6px' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: meta.accent }}>Voir le comparatif</span>
                    <span style={{ fontSize: '16px', color: meta.accent }}>→</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Quiz CTA */}
        <div style={{ marginTop: '56px', background: 'linear-gradient(135deg, #0f172a, #1e3a5f)', borderRadius: '24px', padding: '40px 32px', textAlign: 'center', color: '#fff' }}>
          <p style={{ fontSize: '32px', marginBottom: '12px' }}>🎯</p>
          <p style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, marginBottom: '10px' }}>
            Pas sûr de quelle catégorie vous avez besoin ?
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', marginBottom: '24px' }}>
            Répondez à 4 questions et obtenez une recommandation personnalisée en 2 minutes.
          </p>
          <Link href="/quiz" style={{ display: 'inline-block', background: '#fff', color: '#0f172a', textDecoration: 'none', padding: '14px 28px', borderRadius: '12px', fontSize: '15px', fontWeight: 700 }}>
            Faire le quiz →
          </Link>
        </div>
      </section>

      {/* ── Texte SEO ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 24px 80px' }}>

          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '16px' }}>
            Comment choisir le bon logiciel SaaS pour son entreprise en 2026 ?
          </h2>
          <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.85, marginBottom: '16px' }}>
            Le marché des logiciels SaaS pour TPE et PME a explosé ces dernières années. On recense aujourd'hui plusieurs centaines d'outils disponibles, dans des dizaines de catégories — et les offres évoluent vite. Résultat : choisir le bon logiciel est devenu un vrai travail en soi, souvent chronophage et frustrant.
          </p>
          <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.85, marginBottom: '16px' }}>
            L'objectif de ce site est simple : vous faire gagner du temps. Chaque comparatif est construit à partir des fonctionnalités officielles, des tarifs réels et des retours d'utilisateurs publiés sur G2, Capterra et Trustpilot — sans jargon inutile, sans classement artificiel.
          </p>
          <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.85, marginBottom: '40px' }}>
            Cinq grandes catégories sont couvertes, qui correspondent aux besoins les plus fréquents des indépendants et petites structures françaises.
          </p>

          {/* Blocs par catégorie */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '56px' }}>
            {[
              {
                emoji: '🤝', titre: 'CRM — Gérer sa relation client',
                texte: 'Un CRM (Customer Relationship Management) permet de centraliser les informations sur ses prospects et clients, de suivre les échanges, de gérer son pipeline commercial et d\'automatiser certaines relances. Pour une TPE ou un freelance, un bon CRM peut faire la différence entre une opportunité suivie et une vente ratée. Les outils les plus adaptés aux petites structures : HubSpot CRM (plan gratuit très complet), Pipedrive (idéal pour les équipes commerciales) et Karlia (solution française avec facturation intégrée).',
                href: '/categorie/crm', accent: '#2563eb', bg: '#eff6ff',
              },
              {
                emoji: '💶', titre: 'Facturation — Facturer et suivre sa trésorerie',
                texte: 'Les logiciels de facturation permettent de créer et envoyer des devis et factures conformes, de suivre les paiements et de piloter sa trésorerie. En France, la facture électronique sera obligatoire pour toutes les entreprises dès 2026 — un argument de plus pour s\'équiper d\'un outil dédié. Pennylane s\'est imposé comme la référence pour les PME qui veulent synchroniser facturation et comptabilité. Pour les indépendants et micro-entrepreneurs, Indy propose une version gratuite très complète.',
                href: '/categorie/facturation', accent: '#ea580c', bg: '#fff7ed',
              },
              {
                emoji: '📋', titre: 'Gestion de projet — Organiser son équipe',
                texte: 'Les outils de gestion de projet permettent de planifier les tâches, de collaborer en équipe et de suivre l\'avancement des projets. Le choix dépend beaucoup du style de travail : Trello et Notion conviennent aux petites équipes qui veulent quelque chose de simple et flexible, tandis que Monday.com et Asana sont plus adaptés aux projets complexes avec plusieurs intervenants. Notion se distingue également par sa polyvalence : c\'est à la fois un wiki, un outil de projet et une base de données.',
                href: '/categorie/gestion-de-projet', accent: '#16a34a', bg: '#f0fdf4',
              },
              {
                emoji: '🔍', titre: 'SEO — Améliorer son référencement Google',
                texte: 'Les outils SEO permettent d\'analyser sa visibilité sur Google, de trouver des mots-clés pertinents, d\'auditer son site techniquement et de surveiller ses concurrents. Semrush et Ahrefs sont les références mondiales pour les équipes qui font du SEO leur priorité. Pour les budgets plus limités, Ubersuggest propose un bon point d\'entrée. Les agences et créateurs de contenu apprécieront Semji, qui combine analyse SEO et assistance à la rédaction par IA.',
                href: '/categorie/seo', accent: '#9333ea', bg: '#fdf4ff',
              },
              {
                emoji: '⚡', titre: 'Automatisation — Gagner du temps sur les tâches répétitives',
                texte: 'Les plateformes d\'automatisation permettent de connecter ses outils entre eux et de déclencher des actions automatiques sans coder : envoyer un email quand un formulaire est rempli, ajouter une ligne dans un tableur quand une facture est payée, notifier son équipe quand un deal change de statut... Make (ex-Integromat) est la solution la plus populaire pour les TPE/PME grâce à son interface visuelle et son excellent rapport qualité/prix. n8n est préféré par les profils techniques qui veulent plus de flexibilité.',
                href: '/categorie/automatisation', accent: '#d97706', bg: '#fffbeb',
              },
            ].map((cat, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${cat.accent}`, paddingLeft: '20px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  {cat.emoji} {cat.titre}
                </h3>
                <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.8, marginBottom: '10px' }}>
                  {cat.texte}
                </p>
                <Link href={cat.href} style={{ fontSize: '13px', fontWeight: 700, color: cat.accent, textDecoration: 'none' }}>
                  Voir le comparatif complet →
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '28px' }}>
            Questions fréquentes sur les logiciels SaaS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                q: 'Quelle est la différence entre un logiciel SaaS et un logiciel classique ?',
                a: 'Un logiciel SaaS (Software as a Service) est hébergé dans le cloud et accessible via un navigateur, sans installation. On paie un abonnement mensuel ou annuel plutôt qu\'une licence unique. Avantage : mises à jour automatiques, accessible depuis n\'importe quel appareil, et pas de serveur à gérer. Inconvénient : coût récurrent et dépendance à une connexion internet.',
              },
              {
                q: 'Quel est le meilleur logiciel SaaS pour une TPE qui débute ?',
                a: 'Pour une TPE qui commence à s\'équiper, la priorité est généralement de couvrir trois besoins : la facturation (Indy ou Pennylane), la relation client (HubSpot CRM gratuit) et la gestion des tâches (Trello ou Notion). Ces trois outils ont tous une version gratuite ou très accessible, et permettent de structurer son activité sans budget important.',
              },
              {
                q: 'Comment éviter de payer trop cher pour ses logiciels SaaS ?',
                a: 'La première règle est de ne jamais payer pour des fonctionnalités dont vous n\'avez pas besoin. Commencez par les plans gratuits ou d\'entrée de gamme, et montez en gamme seulement quand vous atteignez les limites. Vérifiez également les doublons dans votre stack : beaucoup de PME paient deux outils qui font la même chose (ex : Notion et Monday, ou Brevo et Mailchimp). Notre calculateur de budget SaaS peut vous aider à détecter ces doublons.',
              },
              {
                q: 'Les comparatifs de ce site sont-ils objectifs ?',
                a: 'Les classements et recommandations sont basés sur les fonctionnalités réelles, les tarifs officiels et les avis d\'utilisateurs publiés sur G2 et Capterra — pas sur des partenariats commerciaux. Certains liens sont affiliés : si vous souscrivez via un lien de ce site, une commission est perçue auprès de l\'éditeur, sans aucun surcoût pour vous. Cela ne change jamais les classements.',
              },
            ].map((item, i, arr) => (
              <div key={i} style={{ padding: '20px 0', borderBottom: i < arr.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '8px', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.75 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
      <BackToTop />
    </div>
  )
}
