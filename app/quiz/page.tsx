import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/app/components/SiteHeader'
import QuizClient from './QuizClient'

export const metadata: Metadata = {
  title: 'Quiz : quel logiciel SaaS choisir ? Trouvez l\'outil fait pour vous',
  description: 'Répondez à 4 questions et obtenez une recommandation personnalisée du meilleur logiciel SaaS selon votre besoin, votre budget et votre profil — CRM, facturation, SEO, automatisation.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/quiz' },
  openGraph: {
    title: 'Quiz : quel logiciel SaaS choisir pour votre entreprise ?',
    description: '4 questions pour trouver le meilleur CRM, logiciel de facturation, outil SEO ou d\'automatisation adapté à votre profil et votre budget.',
    url: 'https://ton-meilleur-saas.fr/quiz',
    type: 'website',
  },
}

const faqItems = [
  {
    q: 'À qui s\'adresse ce quiz ?',
    a: 'Ce quiz est conçu pour les freelances, solopreneurs, TPE et PME françaises qui cherchent à choisir un logiciel SaaS sans perdre de temps à comparer des dizaines d\'outils. En 4 questions, vous obtenez une recommandation adaptée à votre besoin réel, votre budget et votre niveau.',
  },
  {
    q: 'Quels types d\'outils sont recommandés ?',
    a: 'Le quiz couvre 5 catégories : CRM et gestion de la relation client, logiciels de facturation et comptabilité, outils de gestion de projet, outils SEO, et plateformes d\'automatisation. Chaque recommandation est sélectionnée parmi les solutions les plus adaptées à chaque profil.',
  },
  {
    q: 'Les recommandations sont-elles objectives ?',
    a: 'Les recommandations sont basées sur les fonctionnalités, les tarifs réels et les retours d\'utilisateurs publiés sur G2, Capterra et Trustpilot. Certains liens sont des liens affiliés — cela ne change jamais la recommandation faite : on ne recommande que ce qui correspond réellement à votre profil.',
  },
  {
    q: 'Quel est le meilleur CRM gratuit pour une TPE ?',
    a: 'Pour une TPE avec un budget limité, HubSpot CRM reste la référence avec son plan 100% gratuit et ses contacts illimités. Folk est une alternative ultra-simple si vous cherchez avant tout la facilité d\'adoption. Pour un budget de moins de 20€/mois, Karlia est une solution française très complète.',
  },
  {
    q: 'Quel logiciel de facturation choisir quand on est auto-entrepreneur ?',
    a: 'En tant qu\'auto-entrepreneur, Indy est souvent le meilleur point de départ : version gratuite très complète, pensée pour les indépendants, avec un suivi de comptabilité simplifié. Freebe est une autre option 100% gratuite et très bien notée par les freelances.',
  },
  {
    q: 'Make ou Zapier pour automatiser ses tâches ?',
    a: 'Make (ex-Integromat) est généralement recommandé pour les TPE/PME grâce à son interface visuelle et son excellent rapport qualité/prix. Zapier est plus simple à prendre en main mais plus cher. Pour les profils techniques qui veulent aller plus loin, n8n (open source) est une alternative puissante.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function QuizPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'DM Sans', Arial, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Fraunces:wght@700;800;900&display=swap" rel="stylesheet" />

      <SiteHeader />

      {/* ── Hero SEO ── */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '56px 24px 64px', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '14px' }}>🎯</span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>Quiz gratuit · 2 minutes</span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, color: '#fff', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: '20px' }}>
            Quel logiciel SaaS est<br />fait pour vous ?
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>
            4 questions pour identifier le meilleur CRM, logiciel de facturation, outil SEO ou d'automatisation adapté à votre profil, votre budget et votre niveau.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            {[['🤝', 'CRM'], ['💶', 'Facturation'], ['🔍', 'SEO'], ['⚡', 'Automatisation'], ['📋', 'Gestion de projet']].map(([emoji, label]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                <span>{emoji}</span><span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quiz interactif ── */}
      <section style={{ padding: '0 0 16px' }}>
        <QuizClient />
      </section>

      {/* ── Intro texte SEO ── */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px 0' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>
          Comment choisir son logiciel SaaS en 2026 ?
        </h2>
        <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.8, marginBottom: '16px' }}>
          Le marché des logiciels SaaS pour TPE et PME ne cesse de croître : CRM, facturation, gestion de projet, SEO, automatisation — il existe aujourd'hui des centaines d'outils pour chaque besoin. Trouver celui qui correspond vraiment à sa situation (taille d'équipe, budget, niveau de maturité digitale) est devenu un vrai défi.
        </p>
        <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.8, marginBottom: '16px' }}>
          Ce quiz a été conçu pour simplifier ce choix. En 4 questions — besoin, profil, budget, niveau — il identifie les outils les plus adaptés à votre situation parmi les solutions les mieux notées du marché. Les recommandations s'appuient sur les retours d'utilisateurs réels publiés sur G2, Capterra et Trustpilot, ainsi que sur une analyse des fonctionnalités et des tarifs en vigueur en 2026.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', margin: '32px 0' }}>
          {[
            { cat: 'CRM', href: '/categorie/crm', emoji: '🤝', desc: 'HubSpot, Pipedrive, Karlia, Salesforce...' },
            { cat: 'Facturation', href: '/categorie/facturation', emoji: '💶', desc: 'Pennylane, Indy, Sellsy, Tiime...' },
            { cat: 'Gestion de projet', href: '/categorie/gestion-de-projet', emoji: '📋', desc: 'Notion, Monday, Trello, Asana...' },
            { cat: 'SEO', href: '/categorie/seo', emoji: '🔍', desc: 'Semrush, Ahrefs, Ubersuggest, Moz...' },
            { cat: 'Automatisation', href: '/categorie/automatisation', emoji: '⚡', desc: 'Make, n8n, Zapier...' },
          ].map(c => (
            <Link key={c.cat} href={c.href} style={{ textDecoration: 'none', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '18px', display: 'block', transition: 'box-shadow 0.2s' }}>
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>{c.emoji}</span>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{c.cat}</p>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '32px 24px 80px' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: '#0f172a', marginBottom: '28px', letterSpacing: '-0.5px' }}>
          Questions fréquentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqItems.map((item, i) => (
            <div key={i} style={{ padding: '22px 0', borderBottom: i < faqItems.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px', lineHeight: 1.4 }}>{item.q}</h3>
              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.75 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
