'use client'
import { useState } from 'react'
import Link from 'next/link'

type Besoin = 'crm' | 'facturation' | 'projet' | 'seo' | 'automatisation'
type Profil = 'freelance' | 'tpe' | 'pme' | 'startup'
type Budget = 'gratuit' | '<20' | '20-50' | '50-100' | '100+'
type Niveau = 'debutant' | 'intermediaire' | 'expert'

interface OutilInfo {
  slug: string
  nom: string
  prix_mensuel: number | null
  note: number | null
  essai_gratuit: boolean
  lien_affilie: string | null
}

interface RecoEntry {
  slug: string
  emoji: string
  raison: string
  lien: string
  profils?: Profil[]
  niveaux?: Niveau[]
}

interface Props {
  outils: OutilInfo[]
}

const DB: Record<Besoin, Record<Budget, RecoEntry[]>> = {
  crm: {
    gratuit: [
      { slug: 'hubspot', emoji: '🤝', raison: 'Le CRM gratuit le plus complet du marché. Contacts illimités, pipeline visuel, parfait pour démarrer.', lien: 'https://hubspot.com' },
      { slug: 'folk', emoji: '📋', profils: ['freelance', 'tpe'], niveaux: ['debutant', 'intermediaire'], raison: 'Ultra-simple, idéal pour les indépendants et TPE qui veulent un CRM sans complexité.', lien: 'https://try.folk.app/76n5ildmdfyu-s83uu' },
      { slug: 'agile-crm', emoji: '⚙️', profils: ['tpe', 'pme'], niveaux: ['intermediaire', 'expert'], raison: 'CRM gratuit avec fonctionnalités marketing et automatisation incluses. Bon rapport pour une TPE.', lien: 'https://agilecrm.com' },
    ],
    '<20': [
      { slug: 'karlia', emoji: '🇫🇷', profils: ['freelance', 'tpe'], niveaux: ['debutant', 'intermediaire'], raison: 'CRM français tout-en-un : facturation, devis et prospection. Pensé pour les TPE françaises.', lien: 'https://karlia.fr/app/partners/share.php?link=1&p=14545xzz87k' },
      { slug: 'folk', emoji: '📋', profils: ['freelance'], niveaux: ['debutant', 'intermediaire'], raison: 'CRM minimaliste et efficace pour les indépendants. Sans surcharge fonctionnelle.', lien: 'https://try.folk.app/76n5ildmdfyu-s83uu' },
      { slug: 'hubspot', emoji: '🤝', niveaux: ['debutant'], raison: 'La version gratuite couvre largement les besoins d\'une petite structure. Mise à niveau facile.', lien: 'https://hubspot.com' },
    ],
    '20-50': [
      { slug: 'pipedrive', emoji: '🔥', niveaux: ['intermediaire', 'expert'], raison: 'Le meilleur CRM orienté vente. Pipeline visuel, automatisations, idéal pour les équipes commerciales.', lien: 'https://aff.trypipedrive.com/l92tgns1agfa' },
      { slug: 'karlia', emoji: '🇫🇷', profils: ['freelance', 'tpe'], niveaux: ['debutant', 'intermediaire'], raison: 'Alternative française avec devis et facturation intégrés. Tout-en-un pour les TPE.', lien: 'https://karlia.fr/app/partners/share.php?link=1&p=14545xzz87k' },
      { slug: 'zoho-crm', emoji: '⚙️', profils: ['pme', 'startup'], niveaux: ['intermediaire', 'expert'], raison: 'Très complet pour les équipes qui grandissent. Excellent rapport fonctionnalités/prix.', lien: 'https://go.zoho.com/62ec' },
    ],
    '50-100': [
      { slug: 'pipedrive', emoji: '🔥', profils: ['freelance', 'tpe'], niveaux: ['intermediaire', 'expert'], raison: 'Plans avancés avec automatisations et rapports poussés. Idéal pour les équipes commerciales.', lien: 'https://aff.trypipedrive.com/l92tgns1agfa' },
      { slug: 'zoho-crm', emoji: '⚙️', profils: ['pme', 'startup'], niveaux: ['intermediaire', 'expert'], raison: 'Suite très complète, excellent rapport fonctionnalités/prix pour les structures qui grandissent.', lien: 'https://go.zoho.com/62ec' },
      { slug: 'freshsales', emoji: '💡', profils: ['startup', 'pme'], niveaux: ['intermediaire', 'expert'], raison: 'CRM moderne avec IA intégrée. Idéal pour les startups qui veulent scaler leur force commerciale.', lien: 'https://freshworks.com/crm/sales' },
    ],
    '100+': [
      { slug: 'creatio', emoji: '🏆', profils: ['pme', 'startup'], niveaux: ['expert'], raison: 'CRM enterprise avec automatisation avancée des ventes et marketing. Pour les équipes ambitieuses.', lien: 'https://creatio.com' },
      { slug: 'zoho-crm', emoji: '⚙️', profils: ['pme'], niveaux: ['intermediaire', 'expert'], raison: 'Suite Zoho complète pour les PME qui veulent tout centraliser à prix raisonnable.', lien: 'https://go.zoho.com/62ec' },
      { slug: 'freshsales', emoji: '💡', profils: ['startup'], niveaux: ['intermediaire', 'expert'], raison: 'IA intégrée, scoring automatique, parfait pour les startups avec une équipe commerciale structurée.', lien: 'https://freshworks.com/crm/sales' },
    ],
  },
  facturation: {
    gratuit: [
      { slug: 'freebe', emoji: '🆓', profils: ['freelance'], raison: 'Logiciel de facturation 100% gratuit spécialement conçu pour les freelances. Simple et efficace.', lien: 'https://link.freebe.me/Ton-Meilleur-SaaS' },
      { slug: 'indy', emoji: '🇫🇷', profils: ['freelance', 'tpe'], raison: 'Idéal pour les auto-entrepreneurs. Version gratuite très complète avec comptabilité simplifiée.', lien: 'https://www.indy.fr/?ae=1556' },
      { slug: 'henrri', emoji: '📊', profils: ['tpe', 'pme'], niveaux: ['debutant'], raison: 'Logiciel de facturation français gratuit, simple pour les petites structures.', lien: 'https://henrri.com' },
    ],
    '<20': [
      { slug: 'indy', emoji: '🇫🇷', profils: ['freelance', 'tpe'], niveaux: ['debutant', 'intermediaire'], raison: 'Parfait pour les auto-entrepreneurs avec comptabilité simplifiée incluse.', lien: 'https://www.indy.fr/?ae=1556' },
      { slug: 'henrri', emoji: '📊', profils: ['tpe', 'pme'], niveaux: ['debutant'], raison: 'Facturation française gratuite et simple pour les petites structures.', lien: 'https://henrri.com' },
      { slug: 'tiime', emoji: '⏱️', niveaux: ['intermediaire', 'expert'], raison: 'Facturation, notes de frais et suivi de trésorerie dans une interface moderne.', lien: 'https://lb.affilae.com/r/?p=651c0d1e40e2d575f87b3b27&af=689&lp=https%3A%2F%2Fwww.tiime.fr' },
    ],
    '20-50': [
      { slug: 'pennylane', emoji: '💶', raison: 'La référence française : facturation + comptabilité synchronisée avec votre expert-comptable.', lien: 'https://pennylane.tech' },
      { slug: 'tiime', emoji: '⏱️', profils: ['freelance', 'tpe'], niveaux: ['debutant', 'intermediaire'], raison: 'Interface moderne, facturation et notes de frais simples et efficaces.', lien: 'https://lb.affilae.com/r/?p=651c0d1e40e2d575f87b3b27&af=689&lp=https%3A%2F%2Fwww.tiime.fr' },
      { slug: 'sellsy', emoji: '🏢', profils: ['pme', 'startup'], niveaux: ['intermediaire', 'expert'], raison: 'CRM + facturation + comptabilité dans une seule plateforme française pour PME.', lien: 'https://sellsy.fr' },
    ],
    '50-100': [
      { slug: 'pennylane', emoji: '💶', raison: 'Plans avancés avec rapports financiers complets et multi-utilisateurs.', lien: 'https://pennylane.tech' },
      { slug: 'sellsy', emoji: '🏢', profils: ['pme', 'startup'], niveaux: ['intermediaire', 'expert'], raison: 'CRM + facturation + comptabilité. Solution complète française pour PME.', lien: 'https://sellsy.fr' },
    ],
    '100+': [
      { slug: 'sellsy', emoji: '🏢', profils: ['pme', 'startup'], raison: 'Solution complète pour PME avec gestion commerciale et comptabilité avancée.', lien: 'https://sellsy.fr' },
      { slug: 'pennylane', emoji: '💶', raison: 'La référence pour PME avec comptabilité en temps réel et connexion expert-comptable.', lien: 'https://pennylane.tech' },
    ],
  },
  projet: {
    gratuit: [
      { slug: 'monday', emoji: '🗂️', niveaux: ['intermediaire', 'expert'], raison: 'Interface visuelle très intuitive. Version gratuite disponible pour démarrer à 2.', lien: 'https://try.monday.com/snl42apxurnu' },
      { slug: 'monday-crm', emoji: '🤝', profils: ['freelance', 'tpe'], niveaux: ['debutant', 'intermediaire'], raison: 'Pour combiner gestion de tâches et suivi client depuis le départ, sans budget.', lien: 'https://try.monday.com/snl42apxurnu' },
    ],
    '<20': [
      { slug: 'monday', emoji: '🗂️', profils: ['tpe', 'pme', 'startup'], niveaux: ['intermediaire', 'expert'], raison: 'Interface visuelle, tableaux kanban et automatisations pour piloter vos projets en équipe.', lien: 'https://try.monday.com/snl42apxurnu' },
      { slug: 'monday-crm', emoji: '🤝', profils: ['freelance', 'tpe'], niveaux: ['debutant', 'intermediaire'], raison: 'Pour les indépendants et TPE qui veulent gérer projets et clients dans un outil unique.', lien: 'https://try.monday.com/snl42apxurnu' },
    ],
    '20-50': [
      { slug: 'monday', emoji: '🗂️', niveaux: ['intermediaire', 'expert'], raison: 'Interface très visuelle, idéale pour piloter des projets complexes en équipe.', lien: 'https://try.monday.com/snl42apxurnu' },
      { slug: 'monday-crm', emoji: '🤝', niveaux: ['debutant', 'intermediaire'], raison: 'Pour fusionner gestion de projet et suivi client dans un seul outil.', lien: 'https://try.monday.com/snl42apxurnu' },
    ],
    '50-100': [
      { slug: 'monday', emoji: '🗂️', raison: 'Plans Pro avec automatisations, intégrations et tableaux de bord avancés.', lien: 'https://try.monday.com/snl42apxurnu' },
      { slug: 'monday-crm', emoji: '🤝', raison: 'Pour piloter projets et relation client depuis une même plateforme.', lien: 'https://try.monday.com/snl42apxurnu' },
    ],
    '100+': [
      { slug: 'monday', emoji: '🗂️', raison: 'Idéal pour les grandes équipes avec des projets complexes et multi-départements.', lien: 'https://try.monday.com/snl42apxurnu' },
      { slug: 'monday-crm', emoji: '🤝', raison: 'Pour les équipes qui veulent piloter projets et relation client depuis une même plateforme.', lien: 'https://try.monday.com/snl42apxurnu' },
    ],
  },
  seo: {
    gratuit: [
      { slug: 'ubersuggest', emoji: '🔍', niveaux: ['debutant', 'intermediaire'], raison: 'Bon point de départ gratuit pour la recherche de mots-clés et l\'audit de site.', lien: 'https://neilpatel.com/ubersuggest' },
      { slug: 'similarweb', emoji: '🌐', niveaux: ['intermediaire', 'expert'], raison: 'Analysez le trafic de vos concurrents et identifiez vos opportunités gratuitement.', lien: 'https://similarweb.com' },
    ],
    '<20': [
      { slug: 'ubersuggest', emoji: '🔍', niveaux: ['debutant', 'intermediaire'], raison: 'Plan abordable avec audit de site, recherche de mots-clés et suivi de positions.', lien: 'https://neilpatel.com/ubersuggest' },
      { slug: 'haloscan', emoji: '🔗', niveaux: ['intermediaire', 'expert'], raison: 'Outil SEO français pour le suivi de positions et l\'analyse de backlinks.', lien: 'https://haloscan.io' },
    ],
    '20-50': [
      { slug: 'semrush', emoji: '📊', niveaux: ['intermediaire', 'expert'], raison: 'La référence mondiale du SEO. L\'outil le plus complet si le budget le permet.', lien: 'https://semrush.com' },
      { slug: 'moz', emoji: '🔭', niveaux: ['debutant', 'intermediaire'], raison: 'Bon équilibre prix/fonctionnalités pour le suivi de positions et l\'audit de liens.', lien: 'https://moz.com' },
    ],
    '50-100': [
      { slug: 'semrush', emoji: '📊', raison: 'Le plus puissant pour l\'analyse concurrentielle, la recherche de mots-clés et l\'audit complet.', lien: 'https://semrush.com' },
      { slug: 'moz', emoji: '🔭', niveaux: ['debutant', 'intermediaire'], raison: 'Excellent pour l\'analyse de backlinks et le suivi de positions. Interface claire.', lien: 'https://moz.com' },
    ],
    '100+': [
      { slug: 'semrush', emoji: '📊', raison: 'Plans agence avec multi-utilisateurs, rapports clients et projets illimités.', lien: 'https://semrush.com' },
      { slug: 'semji', emoji: '✍️', profils: ['pme', 'startup'], niveaux: ['expert'], raison: 'SEO + rédaction IA pour les équipes qui produisent beaucoup de contenu.', lien: 'https://semji.com' },
    ],
  },
  automatisation: {
    gratuit: [
      { slug: 'make', emoji: '⚡', niveaux: ['debutant', 'intermediaire'], raison: 'Le plus accessible pour débuter l\'automatisation. Interface visuelle, pas de code requis.', lien: 'https://www.make.com/en/register?pc=tonmeilleursaasmake' },
      { slug: 'n8n', emoji: '🔧', niveaux: ['expert'], raison: 'Open source et puissant. Idéal si vous êtes à l\'aise avec le technique. Self-hosted gratuit.', lien: 'https://n8n.partnerlinks.io/yp8mmyri5nu9' },
    ],
    '<20': [
      { slug: 'make', emoji: '⚡', raison: 'Parfait pour automatiser sans coder. Large bibliothèque de connecteurs. Dès 9€/mois.', lien: 'https://www.make.com/en/register?pc=tonmeilleursaasmake' },
    ],
    '20-50': [
      { slug: 'make', emoji: '⚡', niveaux: ['debutant', 'intermediaire'], raison: 'Plans intermédiaires avec plus d\'opérations et des scénarios complexes. Interface visuelle.', lien: 'https://www.make.com/en/register?pc=tonmeilleursaasmake' },
      { slug: 'n8n', emoji: '🔧', niveaux: ['intermediaire', 'expert'], raison: 'Plus flexible que Make pour les automatisations avancées. Très apprécié des développeurs.', lien: 'https://n8n.partnerlinks.io/yp8mmyri5nu9' },
    ],
    '50-100': [
      { slug: 'n8n', emoji: '🔧', niveaux: ['intermediaire', 'expert'], raison: 'Idéal pour les automatisations complexes avec beaucoup d\'intégrations personnalisées.', lien: 'https://n8n.partnerlinks.io/yp8mmyri5nu9' },
      { slug: 'make', emoji: '⚡', niveaux: ['debutant', 'intermediaire'], raison: 'Plans avancés avec des milliers d\'opérations et multi-utilisateurs.', lien: 'https://www.make.com/en/register?pc=tonmeilleursaasmake' },
    ],
    '100+': [
      { slug: 'n8n', emoji: '🔧', niveaux: ['intermediaire', 'expert'], raison: 'Solution enterprise avec déploiement on-premise, sécurité avancée et support dédié.', lien: 'https://n8n.partnerlinks.io/yp8mmyri5nu9' },
      { slug: 'make', emoji: '⚡', niveaux: ['debutant', 'intermediaire'], raison: 'Plans sur mesure pour les grandes équipes avec des volumes d\'automatisation importants.', lien: 'https://www.make.com/en/register?pc=tonmeilleursaasmake' },
    ],
  },
}

const COMPLEMENT: Record<Besoin, { besoin: Besoin; label: string; emoji: string; catSlug: string }> = {
  crm:           { besoin: 'facturation',    label: 'facturation',    emoji: '💰', catSlug: 'facturation' },
  facturation:   { besoin: 'crm',            label: 'CRM',            emoji: '🤝', catSlug: 'crm' },
  projet:        { besoin: 'automatisation', label: 'automatisation', emoji: '⚡', catSlug: 'automatisation' },
  seo:           { besoin: 'automatisation', label: 'automatisation', emoji: '⚡', catSlug: 'automatisation' },
  automatisation:{ besoin: 'crm',            label: 'CRM',            emoji: '🤝', catSlug: 'crm' },
}

const BESOINS = [
  { val: 'crm' as Besoin,            label: 'CRM & relation client',  emoji: '🤝', desc: 'Gérer mes prospects et clients' },
  { val: 'facturation' as Besoin,    label: 'Facturation & compta',   emoji: '💶', desc: 'Facturer et suivre ma trésorerie' },
  { val: 'projet' as Besoin,         label: 'Gestion de projet',      emoji: '📋', desc: 'Organiser mon équipe et mes tâches' },
  { val: 'seo' as Besoin,            label: 'SEO & visibilité',       emoji: '🔍', desc: 'Améliorer mon référencement Google' },
  { val: 'automatisation' as Besoin, label: 'Automatisation',         emoji: '⚡', desc: 'Automatiser mes tâches répétitives' },
]

const PROFILS = [
  { val: 'freelance' as Profil, label: 'Freelance / Solo', emoji: '🧑‍💻' },
  { val: 'tpe' as Profil,       label: 'TPE (< 10 salariés)',  emoji: '🏪' },
  { val: 'pme' as Profil,       label: 'PME (10–50 salariés)', emoji: '🏢' },
  { val: 'startup' as Profil,   label: 'Startup',              emoji: '🚀' },
]

const BUDGETS = [
  { val: 'gratuit' as Budget, label: 'Gratuit uniquement',  emoji: '🆓' },
  { val: '<20' as Budget,     label: 'Moins de 20€/mois',   emoji: '💸' },
  { val: '20-50' as Budget,   label: '20 à 50€/mois',       emoji: '💶' },
  { val: '50-100' as Budget,  label: '50 à 100€/mois',      emoji: '💳' },
  { val: '100+' as Budget,    label: 'Plus de 100€/mois',   emoji: '🏦' },
]

const NIVEAUX = [
  { val: 'debutant' as Niveau,      label: 'Débutant',       emoji: '🌱', desc: 'Je veux quelque chose de simple' },
  { val: 'intermediaire' as Niveau, label: 'Intermédiaire',  emoji: '💪', desc: 'À l\'aise avec les outils numériques' },
  { val: 'expert' as Niveau,        label: 'Expert',         emoji: '🔥', desc: 'Je cherche de la puissance et des options' },
]

const STEPS = ['Besoin', 'Profil', 'Budget', 'Niveau']

function scoreReco(r: RecoEntry, profil: Profil, niveau: Niveau): number {
  const profilScore = r.profils ? (r.profils.includes(profil) ? 2 : 0) : 1
  const niveauScore = r.niveaux ? (r.niveaux.includes(niveau) ? 1 : 0) : 1
  return profilScore + niveauScore
}

function getRecos(besoin: Besoin, budget: Budget, profil: Profil, niveau: Niveau): RecoEntry[] {
  const pool = DB[besoin]?.[budget] ?? DB[besoin]?.['<20'] ?? []
  return [...pool]
    .sort((a, b) => scoreReco(b, profil, niveau) - scoreReco(a, profil, niveau))
    .slice(0, 2)
}

function formatPrix(prix: number | null): string {
  if (prix === null) return 'Sur devis'
  if (prix === 0) return 'Gratuit'
  return `${prix}€/mois`
}

export default function QuizClient({ outils }: Props) {
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

  function reset() {
    setStep(0); setBesoin(null); setProfil(null); setBudget(null); setNiveau(null); setDone(false)
  }

  const canNext = [!!besoin, !!profil, !!budget, !!niveau][step]
  const progress = done ? 100 : (step / 4) * 100

  const recommendations = done && besoin && budget && profil && niveau
    ? getRecos(besoin, budget, profil, niveau)
    : []

  if (done && besoin && profil && budget && niveau) {
    const complement = COMPLEMENT[besoin]
    const complementRecos = getRecos(complement.besoin, budget, profil, niveau)
    const complementReco = complementRecos[0]
    const complementInfo = complementReco ? outils.find(o => o.slug === complementReco.slug) : null

    const profilLabel = PROFILS.find(p => p.val === profil)?.label ?? profil
    const budgetLabel = BUDGETS.find(b => b.val === budget)?.label ?? budget
    const besoinLabel = BESOINS.find(b => b.val === besoin)?.label ?? besoin

    return (
      <div style={{ background: '#f8fafc', fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '16px 24px 80px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
            <button onClick={reset} style={{ fontSize: '13px', color: '#2563eb', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              ↩ Recommencer
            </button>
          </div>

          {/* Header personnalisé */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ fontSize: '40px', marginBottom: '12px' }}>🎯</p>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px,4vw,34px)', fontWeight: 900, color: '#0f172a', letterSpacing: '-1px', marginBottom: '10px', lineHeight: 1.2 }}>
              Notre sélection pour vous
            </h1>
            <p style={{ fontSize: '14px', color: '#64748b', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', display: 'inline-block', padding: '6px 16px' }}>
              {PROFILS.find(p => p.val === profil)?.emoji} {profilLabel} · {budgetLabel} · {besoinLabel}
            </p>
          </div>

          {/* Recommandation #1 — hero */}
          {recommendations[0] && (() => {
            const r = recommendations[0]
            const info = outils.find(o => o.slug === r.slug)
            const lien = info?.lien_affilie || r.lien
            return (
              <div style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a5f 60%,#1e40af 100%)', borderRadius: '24px', padding: '28px', marginBottom: '16px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '1.5px' }}>⭐ Notre recommandation</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '28px' }}>{r.emoji}</span>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '26px', fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.5px' }}>
                      {info?.nom ?? r.slug}
                    </h2>
                  </div>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: '16px' }}>{r.raison}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '20px', fontWeight: 800, color: '#fff' }}>{formatPrix(info?.prix_mensuel ?? null)}</span>
                    {info?.note && <span style={{ fontSize: '13px', color: '#fbbf24', fontWeight: 700 }}>★ {info.note}/5</span>}
                    {info?.essai_gratuit && <span style={{ fontSize: '11px', fontWeight: 700, color: '#4ade80', background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '999px', padding: '3px 10px' }}>Essai gratuit disponible</span>}
                  </div>
                  <a
                    href={lien}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{ display: 'block', textAlign: 'center', background: 'linear-gradient(135deg,#2563eb,#7c3aed)', color: '#fff', borderRadius: '14px', padding: '16px 24px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}
                  >
                    {info?.essai_gratuit ? `Commencer l'essai gratuit →` : `Essayer ${info?.nom ?? r.slug} →`}
                  </a>
                  {info?.essai_gratuit && (
                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', textAlign: 'center', margin: 0 }}>✓ Gratuit · Sans CB · Sans engagement</p>
                  )}
                  <Link href={`/outils/${r.slug}`} style={{ display: 'block', textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginTop: '10px', fontWeight: 500 }}>
                    Lire l&apos;avis complet →
                  </Link>
                </div>
              </div>
            )
          })()}

          {/* Recommandation #2 — secondaire */}
          {recommendations[1] && (() => {
            const r = recommendations[1]
            const info = outils.find(o => o.slug === r.slug)
            const lien = info?.lien_affilie || r.lien
            return (
              <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '20px', marginBottom: '32px' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>🥈 Alternative conseillée</p>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '20px' }}>{r.emoji}</span>
                      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '17px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        {info?.nom ?? r.slug}
                      </h3>
                      {info?.note && <span style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 700 }}>★ {info.note}</span>}
                    </div>
                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, marginBottom: '8px' }}>{r.raison}</p>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{formatPrix(info?.prix_mensuel ?? null)}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0 }}>
                    <a href={lien} target="_blank" rel="noopener noreferrer nofollow" style={{ display: 'block', textAlign: 'center', padding: '10px 18px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', background: '#0f172a', color: '#fff' }}>
                      {info?.essai_gratuit ? 'Essai gratuit →' : 'Essayer →'}
                    </a>
                    <Link href={`/outils/${r.slug}`} style={{ display: 'block', textAlign: 'center', padding: '8px 14px', borderRadius: '10px', fontSize: '12px', fontWeight: 600, textDecoration: 'none', background: '#f8fafc', color: '#64748b', border: '1px solid #e2e8f0' }}>
                      Voir la fiche
                    </Link>
                  </div>
                </div>
              </div>
            )
          })()}

          {/* Stack complémentaire */}
          {complementReco && (
            <div style={{ background: 'linear-gradient(135deg,#fffbeb,#fff7ed)', border: '1px solid #fde68a', borderRadius: '20px', padding: '24px', marginBottom: '24px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#92400e', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
                💡 Et pour votre {complement.label} ?
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '22px' }}>{complementReco.emoji}</span>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: 0, fontFamily: "'Fraunces', serif" }}>
                      {complementInfo?.nom ?? complementReco.slug}
                    </h3>
                    {complementInfo?.note && <span style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 700 }}>★ {complementInfo.note}</span>}
                  </div>
                  <p style={{ fontSize: '13px', color: '#78350f', lineHeight: 1.6 }}>{complementReco.raison}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0 }}>
                  {(complementInfo?.lien_affilie || complementReco.lien) && (
                    <a href={complementInfo?.lien_affilie || complementReco.lien} target="_blank" rel="noopener noreferrer nofollow" style={{ display: 'block', textAlign: 'center', padding: '9px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', background: '#d97706', color: '#fff' }}>
                      {complementInfo?.essai_gratuit ? 'Essai gratuit →' : 'Essayer →'}
                    </a>
                  )}
                  <Link href={`/outils/${complementReco.slug}`} style={{ display: 'block', textAlign: 'center', padding: '8px 16px', borderRadius: '10px', fontSize: '12px', fontWeight: 600, textDecoration: 'none', background: '#fff', color: '#92400e', border: '1px solid #fde68a' }}>
                    Voir la fiche →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* CTA comparatif */}
          <div style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f)', borderRadius: '20px', padding: '28px', textAlign: 'center', color: '#fff' }}>
            <p style={{ fontSize: '18px', marginBottom: '8px' }}>📊</p>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: '17px', fontWeight: 800, marginBottom: '8px' }}>
              Voir tous les {besoinLabel}
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
    <div style={{ background: '#f8fafc', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        .quiz-option { transition: all 0.15s ease; cursor: pointer; border: none; background: #fff; font-family: inherit; width: 100%; text-align: left; }
        .quiz-option:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
        .quiz-next { transition: all 0.2s ease; }
        .quiz-next:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(37,99,235,0.35); }
      `}</style>

      <div style={{ height: '4px', background: '#e2e8f0' }}>
        <div style={{ height: '100%', background: 'linear-gradient(90deg,#2563eb,#7c3aed)', width: `${progress}%`, transition: 'width 0.4s ease' }} />
      </div>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '8px 24px 4px', display: 'flex', justifyContent: 'flex-end' }}>
        <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 500 }}>Étape {step + 1} / 4</span>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '32px 24px 80px' }}>

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

        {step === 1 && (
          <div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px,4vw,32px)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Quelle est votre structure ?
            </h1>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '28px' }}>Votre profil adapte les recommandations à votre contexte.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '10px' }}>
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

        {step === 2 && (
          <div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px,4vw,32px)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Quel est votre budget mensuel ?
            </h1>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '28px' }}>Par mois, pour ce type d&apos;outil.</p>
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

        {step === 3 && (
          <div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px,4vw,32px)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Votre niveau avec les outils numériques ?
            </h1>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '28px' }}>Pour vous recommander quelque chose d&apos;adapté à votre aisance.</p>
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
            style={{ flex: 1, padding: '16px', borderRadius: '12px', fontSize: '16px', fontWeight: 700, background: canNext ? 'linear-gradient(135deg,#2563eb,#7c3aed)' : '#e2e8f0', color: canNext ? '#fff' : '#94a3b8', border: 'none', cursor: canNext ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}
          >
            {step === 3 ? '🎯 Voir ma recommandation' : 'Continuer →'}
          </button>
        </div>
      </div>
    </div>
  )
}
