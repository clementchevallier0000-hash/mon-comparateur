'use client'
import { useState } from 'react'
import Link from 'next/link'

type Besoin = 'crm' | 'facturation' | 'projet' | 'seo' | 'automatisation'
type Profil = 'freelance' | 'tpe' | 'pme' | 'startup'
type Budget = 'gratuit' | '<20' | '20-50' | '50-100' | '100+'
type Niveau = 'debutant' | 'intermediaire' | 'expert'

interface Recommandation {
  nom: string
  slug: string
  prix: string
  emoji: string
  raison: string
  lien: string
}

const DB: Record<Besoin, Record<Budget, Recommandation[]>> = {
  crm: {
    gratuit:  [
      { nom: 'HubSpot CRM', slug: 'hubspot', prix: 'Gratuit', emoji: '🤝', raison: 'Le CRM gratuit le plus complet du marché. Parfait pour démarrer sans budget.', lien: 'https://hubspot.com' },
      { nom: 'Folk', slug: 'folk', prix: 'Gratuit', emoji: '📋', raison: 'Ultra-simple, idéal si vous voulez un CRM sans complexité.', lien: 'https://folk.app' },
    ],
    '<20':    [
      { nom: 'Karlia', slug: 'karlia', prix: 'Dès 15€/mois', emoji: '🇫🇷', raison: 'CRM français tout-en-un, conçu pour les TPE. Facturation incluse.', lien: 'https://karlia.fr' },
      { nom: 'HubSpot CRM', slug: 'hubspot', prix: 'Gratuit', emoji: '🤝', raison: 'La version gratuite couvre largement les besoins d\'une petite structure.', lien: 'https://hubspot.com' },
    ],
    '20-50':  [
      { nom: 'Pipedrive', slug: 'pipedrive', prix: 'Dès 24€/mois', emoji: '🔥', raison: 'Le meilleur CRM orienté vente. Interface claire, pipeline visuel, idéal pour les équipes commerciales.', lien: 'https://pipedrive.com' },
      { nom: 'Karlia', slug: 'karlia', prix: 'Dès 15€/mois', emoji: '🇫🇷', raison: 'Alternative française avec devis et facturation intégrés.', lien: 'https://karlia.fr' },
    ],
    '50-100': [
      { nom: 'Pipedrive', slug: 'pipedrive', prix: 'Dès 24€/mois', emoji: '🔥', raison: 'Plans avancés avec automatisations et rapports poussés.', lien: 'https://pipedrive.com' },
      { nom: 'Zoho CRM', slug: 'zoho-crm', prix: 'Dès 20€/mois', emoji: '⚙️', raison: 'Très complet, excellent rapport fonctionnalités/prix.', lien: 'https://zoho.com/crm' },
    ],
    '100+':   [
      { nom: 'Salesforce', slug: 'salesforce', prix: 'Sur devis', emoji: '🏆', raison: 'Le standard des grandes équipes commerciales. Puissant mais complexe.', lien: 'https://salesforce.com' },
      { nom: 'Odoo', slug: 'odoo', prix: 'Dès 8€/user', emoji: '🔧', raison: 'ERP complet avec CRM intégré. Très flexible pour les structures qui grandissent.', lien: 'https://odoo.com' },
    ],
  },
  facturation: {
    gratuit:  [
      { nom: 'Freebe', slug: 'freebe', prix: 'Gratuit', emoji: '🆓', raison: 'Logiciel de facturation 100% gratuit pour les freelances. Simple et efficace.', lien: 'https://freebe.fr' },
      { nom: 'Indy', slug: 'indy', prix: 'Dès 0€', emoji: '🇫🇷', raison: 'Idéal pour les indépendants et micro-entrepreneurs. Version gratuite très complète.', lien: 'https://indy.fr' },
    ],
    '<20':    [
      { nom: 'Indy', slug: 'indy', prix: 'Dès 0€', emoji: '🇫🇷', raison: 'Parfait pour les auto-entrepreneurs, avec comptabilité simplifiée incluse.', lien: 'https://indy.fr' },
      { nom: 'Zervant', slug: 'zervant', prix: 'Dès 9€/mois', emoji: '📄', raison: 'Interface épurée, idéale pour débuter avec la facturation professionnelle.', lien: 'https://zervant.com' },
    ],
    '20-50':  [
      { nom: 'Pennylane', slug: 'pennylane', prix: 'Dès 26€/mois', emoji: '💶', raison: 'La référence française : facturation + comptabilité synchronisée avec votre expert-comptable.', lien: 'https://pennylane.tech' },
      { nom: 'Tiime', slug: 'tiime', prix: 'Dès 19€/mois', emoji: '⏱️', raison: 'Facturation, notes de frais et suivi de trésorerie dans une interface moderne.', lien: 'https://tiime.fr' },
    ],
    '50-100': [
      { nom: 'Pennylane', slug: 'pennylane', prix: 'Dès 26€/mois', emoji: '💶', raison: 'Plans avancés avec rapports financiers complets et multi-utilisateurs.', lien: 'https://pennylane.tech' },
      { nom: 'Sellsy', slug: 'sellsy', prix: 'Dès 29€/mois', emoji: '🏢', raison: 'CRM + facturation + comptabilité dans une seule plateforme française.', lien: 'https://sellsy.fr' },
    ],
    '100+':   [
      { nom: 'Sellsy', slug: 'sellsy', prix: 'Dès 29€/mois', emoji: '🏢', raison: 'Solution complète pour PME avec gestion commerciale et comptabilité avancée.', lien: 'https://sellsy.fr' },
      { nom: 'Odoo', slug: 'odoo', prix: 'Dès 8€/user', emoji: '🔧', raison: 'ERP complet avec module facturation très puissant pour les structures en croissance.', lien: 'https://odoo.com' },
    ],
  },
  projet: {
    gratuit:  [
      { nom: 'Trello', slug: 'trello', prix: 'Gratuit', emoji: '📋', raison: 'Le classique des outils de projet en mode kanban. Gratuit et très intuitif.', lien: 'https://trello.com' },
      { nom: 'Notion', slug: 'notion', prix: 'Gratuit', emoji: '📝', raison: 'Wiki + gestion de projet dans un seul outil. Très flexible pour les petites équipes.', lien: 'https://notion.so' },
    ],
    '<20':    [
      { nom: 'Notion', slug: 'notion', prix: 'Dès 8€/mois', emoji: '📝', raison: 'Outil tout-en-un : docs, projet, base de données. Idéal pour les freelances et TPE.', lien: 'https://notion.so' },
      { nom: 'Trello', slug: 'trello', prix: 'Gratuit', emoji: '📋', raison: 'Simple, visuel et efficace. La version gratuite suffit pour la plupart des usages.', lien: 'https://trello.com' },
    ],
    '20-50':  [
      { nom: 'Monday.com', slug: 'monday', prix: 'Dès 9€/user', emoji: '🗂️', raison: 'Interface très visuelle, idéale pour piloter des projets complexes en équipe.', lien: 'https://monday.com' },
      { nom: 'Notion', slug: 'notion', prix: 'Dès 8€/mois', emoji: '📝', raison: 'Solution flexible adaptable à tous les flux de travail.', lien: 'https://notion.so' },
    ],
    '50-100': [
      { nom: 'Monday.com', slug: 'monday', prix: 'Dès 9€/user', emoji: '🗂️', raison: 'Plans Pro avec automatisations, intégrations et tableaux de bord avancés.', lien: 'https://monday.com' },
      { nom: 'Monday CRM', slug: 'monday-crm', prix: 'Dès 9€/user', emoji: '🤝', raison: 'Si vous voulez fusionner gestion de projet et suivi client.', lien: 'https://monday.com/crm' },
    ],
    '100+':   [
      { nom: 'Monday.com', slug: 'monday', prix: 'Dès 9€/user', emoji: '🗂️', raison: 'Idéal pour les grandes équipes avec des projets complexes et multi-départements.', lien: 'https://monday.com' },
      { nom: 'Odoo', slug: 'odoo', prix: 'Dès 8€/user', emoji: '🔧', raison: 'Gestion de projet intégrée à un ERP complet pour les structures ambitieuses.', lien: 'https://odoo.com' },
    ],
  },
  seo: {
    gratuit:  [
      { nom: 'Ubersuggest', slug: 'ubersuggest', prix: 'Gratuit limité', emoji: '🔍', raison: 'Bon point de départ gratuit pour la recherche de mots-clés et l\'analyse de site.', lien: 'https://neilpatel.com/ubersuggest' },
      { nom: 'Cocolyze', slug: 'cocolyze', prix: 'Dès 0€', emoji: '🐙', raison: 'Outil SEO français avec version gratuite. Suivi de positions et audit technique.', lien: 'https://cocolyze.com' },
    ],
    '<20':    [
      { nom: 'Ubersuggest', slug: 'ubersuggest', prix: 'Dès 12€/mois', emoji: '🔍', raison: 'Plan payant abordable avec audit de site, mots-clés et suivi de positions.', lien: 'https://neilpatel.com/ubersuggest' },
      { nom: 'Cocolyze', slug: 'cocolyze', prix: 'Dès 9€/mois', emoji: '🐙', raison: 'Solution SEO française accessible pour les petites structures.', lien: 'https://cocolyze.com' },
    ],
    '20-50':  [
      { nom: 'Semrush', slug: 'semrush', prix: 'Dès 119€/mois', emoji: '📊', raison: 'La référence mondiale du SEO. Si le budget le permet, c\'est l\'outil le plus complet.', lien: 'https://semrush.com' },
      { nom: 'Moz', slug: 'moz', prix: 'Dès 49€/mois', emoji: '🔭', raison: 'Bon équilibre prix/fonctionnalités pour le suivi de positions et l\'audit de liens.', lien: 'https://moz.com' },
    ],
    '50-100': [
      { nom: 'Semrush', slug: 'semrush', prix: 'Dès 119€/mois', emoji: '📊', raison: 'Le plus puissant pour l\'analyse concurrentielle, la recherche de mots-clés et l\'audit.', lien: 'https://semrush.com' },
      { nom: 'Ahrefs', slug: 'ahrefs', prix: 'Dès 99€/mois', emoji: '🔗', raison: 'Excellent pour l\'analyse de backlinks et la recherche de mots-clés. Très fiable.', lien: 'https://ahrefs.com' },
    ],
    '100+':   [
      { nom: 'Semrush', slug: 'semrush', prix: 'Dès 119€/mois', emoji: '📊', raison: 'Plans agence avec multi-utilisateurs, rapports clients et projets illimités.', lien: 'https://semrush.com' },
      { nom: 'Semji', slug: 'semji', prix: 'Sur devis', emoji: '✍️', raison: 'Outil SEO + rédaction IA pour les équipes qui produisent beaucoup de contenu.', lien: 'https://semji.com' },
    ],
  },
  automatisation: {
    gratuit:  [
      { nom: 'Make', slug: 'make', prix: 'Gratuit (1000 ops/mois)', emoji: '⚡', raison: 'Le plus accessible pour débuter l\'automatisation. Interface visuelle, pas de code.', lien: 'https://make.com' },
      { nom: 'n8n', slug: 'n8n', prix: 'Gratuit (self-hosted)', emoji: '🔧', raison: 'Open source et puissant. Idéal si vous êtes à l\'aise avec le technique.', lien: 'https://n8n.io' },
    ],
    '<20':    [
      { nom: 'Make', slug: 'make', prix: 'Dès 9€/mois', emoji: '⚡', raison: 'Parfait pour automatiser sans coder. Large bibliothèque de connecteurs.', lien: 'https://make.com' },
    ],
    '20-50':  [
      { nom: 'Make', slug: 'make', prix: 'Dès 9€/mois', emoji: '⚡', raison: 'Plans intermédiaires avec plus d\'opérations et des scénarios complexes.', lien: 'https://make.com' },
      { nom: 'n8n', slug: 'n8n', prix: 'Dès 20€/mois (cloud)', emoji: '🔧', raison: 'Plus flexible que Make pour les automatisations avancées. Très apprécié des développeurs.', lien: 'https://n8n.io' },
    ],
    '50-100': [
      { nom: 'n8n', slug: 'n8n', prix: 'Dès 20€/mois', emoji: '🔧', raison: 'Idéal pour les automatisations complexes avec beaucoup d\'intégrations personnalisées.', lien: 'https://n8n.io' },
      { nom: 'Make', slug: 'make', prix: 'Dès 9€/mois', emoji: '⚡', raison: 'Plans avancés avec des milliers d\'opérations et multi-utilisateurs.', lien: 'https://make.com' },
    ],
    '100+':   [
      { nom: 'n8n', slug: 'n8n', prix: 'Self-hosted ou cloud', emoji: '🔧', raison: 'Solution enterprise avec déploiement on-premise, sécurité avancée et support dédié.', lien: 'https://n8n.io' },
      { nom: 'Make', slug: 'make', prix: 'Plans entreprise', emoji: '⚡', raison: 'Plans sur mesure pour les grandes équipes avec des volumes d\'automatisation importants.', lien: 'https://make.com' },
    ],
  },
}

const BESOINS = [
  { val: 'crm' as Besoin, label: 'CRM & relation client', emoji: '🤝', desc: 'Gérer mes prospects et clients' },
  { val: 'facturation' as Besoin, label: 'Facturation & compta', emoji: '💶', desc: 'Facturer et suivre ma trésorerie' },
  { val: 'projet' as Besoin, label: 'Gestion de projet', emoji: '📋', desc: 'Organiser mon équipe et mes tâches' },
  { val: 'seo' as Besoin, label: 'SEO & visibilité', emoji: '🔍', desc: 'Améliorer mon référencement Google' },
  { val: 'automatisation' as Besoin, label: 'Automatisation', emoji: '⚡', desc: 'Automatiser mes tâches répétitives' },
]

const PROFILS = [
  { val: 'freelance' as Profil, label: 'Freelance / Solo', emoji: '🧑‍💻' },
  { val: 'tpe' as Profil, label: 'TPE (< 10 salariés)', emoji: '🏪' },
  { val: 'pme' as Profil, label: 'PME (10–50 salariés)', emoji: '🏢' },
  { val: 'startup' as Profil, label: 'Startup', emoji: '🚀' },
]

const BUDGETS = [
  { val: 'gratuit' as Budget, label: 'Gratuit uniquement', emoji: '🆓' },
  { val: '<20' as Budget, label: 'Moins de 20€/mois', emoji: '💸' },
  { val: '20-50' as Budget, label: '20 à 50€/mois', emoji: '💶' },
  { val: '50-100' as Budget, label: '50 à 100€/mois', emoji: '💳' },
  { val: '100+' as Budget, label: 'Plus de 100€/mois', emoji: '🏦' },
]

const NIVEAUX = [
  { val: 'debutant' as Niveau, label: 'Débutant', emoji: '🌱', desc: 'Je veux quelque chose de simple' },
  { val: 'intermediaire' as Niveau, label: 'Intermédiaire', emoji: '💪', desc: 'À l\'aise avec les outils numériques' },
  { val: 'expert' as Niveau, label: 'Expert', emoji: '🔥', desc: 'Je cherche de la puissance et des options' },
]

const STEPS = ['Besoin', 'Profil', 'Budget', 'Niveau']

export default function QuizClient() {
  const [step, setStep] = useState(0)
  const [besoin, setBesoin] = useState<Besoin | null>(null)
  const [profil, setProfil] = useState<Profil | null>(null)
  const [budget, setBudget] = useState<Budget | null>(null)
  const [niveau, setNiveau] = useState<Niveau | null>(null)
  const [done, setDone] = useState(false)

  function next() {
    if (step < 3) setStep(s => s + 1)
    else setDone(true)
  }

  const canNext = [!!besoin, !!profil, !!budget, !!niveau][step]

  const recommendations: Recommandation[] = done && besoin && budget
    ? (DB[besoin][budget] ?? DB[besoin]['<20'] ?? [])
    : []

  const progress = done ? 100 : (step / 4) * 100

  if (done) {
    return (
      <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'DM Sans', sans-serif" }}>
        <header style={{ background: 'rgba(255,255,255,0.96)', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(16px)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ textDecoration: 'none', fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>TonMeilleurSaaS</Link>
            <Link href="/quiz" onClick={() => { setStep(0); setBesoin(null); setProfil(null); setBudget(null); setNiveau(null); setDone(false) }} style={{ fontSize: '13px', color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>
              ↩ Recommencer
            </Link>
          </div>
        </header>

        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '48px 24px 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '40px', marginBottom: '12px' }}>🎯</p>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(24px,4vw,36px)', fontWeight: 900, color: '#0f172a', letterSpacing: '-1px', marginBottom: '10px' }}>
              Ma recommandation pour vous
            </h1>
            <p style={{ fontSize: '15px', color: '#64748b' }}>
              Basé sur votre profil : <strong>{BESOINS.find(b => b.val === besoin)?.label}</strong> · <strong>{PROFILS.find(p => p.val === profil)?.label}</strong> · <strong>{BUDGETS.find(b => b.val === budget)?.label}</strong>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            {recommendations.map((r, i) => (
              <div key={r.slug} style={{ background: '#fff', borderRadius: '20px', border: i === 0 ? '2px solid #2563eb' : '1px solid #e2e8f0', padding: '28px', position: 'relative', overflow: 'hidden' }}>
                {i === 0 && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #2563eb, #7c3aed)' }} />
                )}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '28px' }}>{r.emoji}</span>
                      <div>
                        {i === 0 && <span style={{ fontSize: '10px', fontWeight: 700, color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '999px', padding: '2px 8px', display: 'block', marginBottom: '4px' }}>⭐ Meilleur choix</span>}
                        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>{r.nom}</h2>
                      </div>
                    </div>
                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.65, marginBottom: '12px' }}>{r.raison}</p>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{r.prix}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
                    <Link href={`/outils/${r.slug}`} style={{ display: 'block', textAlign: 'center', padding: '10px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', background: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0' }}>
                      Voir la fiche →
                    </Link>
                    <a href={r.lien} target="_blank" rel="noopener noreferrer nofollow" style={{ display: 'block', textAlign: 'center', padding: '10px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', background: i === 0 ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : '#f8fafc', color: i === 0 ? '#fff' : '#475569', border: i === 0 ? 'none' : '1px solid #e2e8f0' }}>
                      Essayer →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a5f)', borderRadius: '20px', padding: '32px', textAlign: 'center', color: '#fff' }}>
            <p style={{ fontSize: '20px', marginBottom: '8px' }}>📊</p>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>
              Voir tous les {BESOINS.find(b => b.val === besoin)?.label}
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>
              Comparez toutes les options disponibles dans cette catégorie
            </p>
            <Link href={`/categorie/${besoin === 'projet' ? 'gestion-de-projet' : besoin}`} style={{ display: 'inline-block', background: '#fff', color: '#0f172a', textDecoration: 'none', padding: '12px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: 700 }}>
              Voir le comparatif complet →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        .quiz-option { transition: all 0.15s ease; cursor: pointer; border: none; background: #fff; font-family: inherit; width: 100%; text-align: left; }
        .quiz-option:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
        .quiz-next { transition: all 0.2s ease; }
        .quiz-next:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(37,99,235,0.35); }
      `}</style>

      <header style={{ background: 'rgba(255,255,255,0.96)', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(16px)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none', fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>TonMeilleurSaaS</Link>
          <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 500 }}>Étape {step + 1} / 4</span>
        </div>
      </header>

      {/* Barre de progression */}
      <div style={{ height: '4px', background: '#e2e8f0' }}>
        <div style={{ height: '100%', background: 'linear-gradient(90deg, #2563eb, #7c3aed)', width: `${progress}%`, transition: 'width 0.4s ease' }} />
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Étapes nav */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {STEPS.map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, background: i < step ? '#2563eb' : i === step ? '#eff6ff' : '#f1f5f9', color: i < step ? '#fff' : i === step ? '#2563eb' : '#94a3b8', border: i === step ? '2px solid #2563eb' : '2px solid transparent' }}>
                {i < step ? '✓' : i + 1}
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: i === step ? '#0f172a' : '#94a3b8' }}>{s}</span>
              {i < STEPS.length - 1 && <span style={{ color: '#e2e8f0', fontSize: '12px' }}>›</span>}
            </div>
          ))}
        </div>

        {/* Étape 1 — Besoin */}
        {step === 0 && (
          <div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px,4vw,32px)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Quel est votre besoin principal ?
            </h1>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '28px' }}>Choisissez la catégorie qui vous correspond le mieux.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {BESOINS.map(b => (
                <button key={b.val} className="quiz-option" onClick={() => setBesoin(b.val)} style={{ padding: '18px 20px', borderRadius: '14px', border: besoin === b.val ? '2px solid #2563eb' : '1.5px solid #e2e8f0', background: besoin === b.val ? '#eff6ff' : '#fff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ fontSize: '28px', flexShrink: 0 }}>{b.emoji}</span>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <p style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: 0 }}>{b.label}</p>
                      <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>{b.desc}</p>
                    </div>
                    {besoin === b.val && <span style={{ color: '#2563eb', fontWeight: 700 }}>✓</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Étape 2 — Profil */}
        {step === 1 && (
          <div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px,4vw,32px)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Quelle est votre structure ?
            </h1>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '28px' }}>Pour adapter la recommandation à votre contexte.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {PROFILS.map(p => (
                <button key={p.val} className="quiz-option" onClick={() => setProfil(p.val)} style={{ padding: '20px', borderRadius: '14px', border: profil === p.val ? '2px solid #2563eb' : '1.5px solid #e2e8f0', background: profil === p.val ? '#eff6ff' : '#fff', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', marginBottom: '8px' }}>{p.emoji}</div>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', margin: 0 }}>{p.label}</p>
                  {profil === p.val && <p style={{ fontSize: '12px', color: '#2563eb', fontWeight: 700, marginTop: '4px' }}>✓ Sélectionné</p>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Étape 3 — Budget */}
        {step === 2 && (
          <div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px,4vw,32px)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Quel est votre budget mensuel ?
            </h1>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '28px' }}>Par mois, pour ce type d'outil.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {BUDGETS.map(b => (
                <button key={b.val} className="quiz-option" onClick={() => setBudget(b.val)} style={{ padding: '16px 20px', borderRadius: '14px', border: budget === b.val ? '2px solid #2563eb' : '1.5px solid #e2e8f0', background: budget === b.val ? '#eff6ff' : '#fff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '22px' }}>{b.emoji}</span>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>{b.label}</span>
                    {budget === b.val && <span style={{ marginLeft: 'auto', color: '#2563eb', fontWeight: 700 }}>✓</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Étape 4 — Niveau */}
        {step === 3 && (
          <div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px,4vw,32px)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Votre niveau avec les outils numériques ?
            </h1>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '28px' }}>Pour vous recommander quelque chose d'adapté à votre aisance.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NIVEAUX.map(n => (
                <button key={n.val} className="quiz-option" onClick={() => setNiveau(n.val)} style={{ padding: '20px', borderRadius: '14px', border: niveau === n.val ? '2px solid #2563eb' : '1.5px solid #e2e8f0', background: niveau === n.val ? '#eff6ff' : '#fff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ fontSize: '28px' }}>{n.emoji}</span>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <p style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: 0 }}>{n.label}</p>
                      <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>{n.desc}</p>
                    </div>
                    {niveau === n.val && <span style={{ color: '#2563eb', fontWeight: 700 }}>✓</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bouton suivant */}
        <div style={{ marginTop: '32px', display: 'flex', gap: '12px', alignItems: 'center' }}>
          {step > 0 && (
            <button onClick={() => setStep(s => s - 1)} style={{ padding: '14px 20px', borderRadius: '12px', fontSize: '14px', fontWeight: 600, background: '#fff', color: '#475569', border: '1.5px solid #e2e8f0', cursor: 'pointer', fontFamily: 'inherit' }}>
              ← Retour
            </button>
          )}
          <button
            className="quiz-next"
            onClick={next}
            disabled={!canNext}
            style={{ flex: 1, padding: '16px', borderRadius: '12px', fontSize: '16px', fontWeight: 700, background: canNext ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : '#e2e8f0', color: canNext ? '#fff' : '#94a3b8', border: 'none', cursor: canNext ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}
          >
            {step === 3 ? '🎯 Voir ma recommandation' : 'Continuer →'}
          </button>
        </div>
      </div>
    </div>
  )
}
