'use client'
import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import MobileMenu from '@/app/components/MobileMenu'
import SearchModal from '@/app/components/SearchModal'

// ─── Types ────────────────────────────────────────────────────────────────────

type Category =
  | 'crm' | 'compta' | 'rh' | 'email' | 'seo' | 'social' | 'projet'
  | 'stockage' | 'communication' | 'ecommerce' | 'support' | 'analytics'
  | 'design' | 'video' | 'autre'

interface KnownTool {
  category: Category
  /** même role = doublon — permet de distinguer SemRush (seo-platform) de Semji (seo-content) */
  role: string
  priceTypical: number
  tip: string
  alternative?: string
  isFreeAvailable?: boolean
  categorySlug?: string // lien vers /categorie/...
}

interface Tool {
  id: string
  name: string
  category: Category
  priceMonthly: number
  users: number
}

// ─── Base d'outils ────────────────────────────────────────────────────────────

const TOOL_DB: Record<string, KnownTool> = {
  // SEO
  'semrush': { category: 'seo', role: 'seo-platform', priceTypical: 120, tip: 'Très complet mais cher. Vérifiez que vous utilisez vraiment toutes les fonctionnalités (backlinks, keywords, audits).', alternative: 'Ubersuggest à 29€/mois pour les besoins de base', categorySlug: 'seo' },
  'ahrefs': { category: 'seo', role: 'seo-platform', priceTypical: 99, tip: 'Excellent pour les backlinks. En doublon avec SemRush — les deux couvrent les mêmes usages.', alternative: 'Choisissez Ahrefs OU SemRush, pas les deux', categorySlug: 'seo' },
  'moz': { category: 'seo', role: 'seo-platform', priceTypical: 99, tip: 'Moins puissant que SemRush ou Ahrefs pour le même prix. Rarement le meilleur choix en 2024.', alternative: 'Ahrefs ou SemRush sont plus complets', categorySlug: 'seo' },
  'ubersuggest': { category: 'seo', role: 'seo-platform', priceTypical: 29, tip: 'Bon rapport qualité/prix pour débuter. Upgrade vers SemRush si vous avez besoin d\'analyses concurrentielles avancées.', categorySlug: 'seo' },
  'semji': { category: 'seo', role: 'seo-content', priceTypical: 89, tip: 'Outil d\'optimisation de contenu — complémentaire à SemRush/Ahrefs (recherche de mots-clés), pas concurrent.', alternative: 'Frase.io à 38€/mois comme alternative', categorySlug: 'seo' },
  'frase': { category: 'seo', role: 'seo-content', priceTypical: 38, tip: 'Bon outil de rédaction SEO. En doublon avec Semji si vous avez les deux — même rôle.', alternative: 'Choisissez Semji OU Frase, pas les deux' },
  'screaming frog': { category: 'seo', role: 'seo-crawl', priceTypical: 20, tip: 'Indispensable pour l\'audit technique. La licence annuelle vaut vraiment le coup.' },
  'clearscope': { category: 'seo', role: 'seo-content', priceTypical: 170, tip: 'Très cher pour un outil de contenu. Semji ou Frase offrent 80% des fonctions pour 2x moins cher.', alternative: 'Semji (89€) ou Frase (38€)' },
  'serpstat': { category: 'seo', role: 'seo-platform', priceTypical: 59, tip: 'Alternative moins chère à SemRush. En doublon si vous avez déjà SemRush ou Ahrefs.' },

  // CRM
  'hubspot': { category: 'crm', role: 'crm', priceTypical: 90, isFreeAvailable: true, tip: 'La version gratuite est très généreuse. Vérifiez si vous avez vraiment besoin du plan payant avant de signer.', alternative: 'HubSpot CRM Free couvre 80% des besoins d\'une TPE', categorySlug: 'crm' },
  'salesforce': { category: 'crm', role: 'crm', priceTypical: 150, tip: 'Puissant mais souvent surdimensionné pour une TPE. Complexité et coût élevés.', alternative: 'HubSpot ou Pipedrive sont plus adaptés aux petites structures', categorySlug: 'crm' },
  'pipedrive': { category: 'crm', role: 'crm', priceTypical: 24, tip: 'Excellent CRM orienté vente. Simple et efficace pour les équipes commerciales.', alternative: 'HubSpot Free si vous voulez aussi du marketing automation', categorySlug: 'crm' },
  'nocrm': { category: 'crm', role: 'crm', priceTypical: 22, tip: 'Simple et efficace pour les commerciaux terrain. Bon rapport qualité/prix.', alternative: 'Pipedrive si vous avez besoin de plus de fonctionnalités pipeline' },
  'axonaut': { category: 'crm', role: 'crm', priceTypical: 49, tip: 'Solution française tout-en-un (CRM + facturation + compta de base). Peut remplacer plusieurs outils.', alternative: 'Vérifiez si Axonaut peut consolider votre stack' },
  'sellsy': { category: 'crm', role: 'crm', priceTypical: 50, tip: 'CRM + facturation français. Vérifiez si vous n\'avez pas un doublon avec votre logiciel compta.', alternative: 'Axonaut comme alternative française' },

  // Comptabilité
  'pennylane': { category: 'compta', role: 'compta', priceTypical: 49, tip: 'Excellente solution française. Synchronisation bancaire et TVA automatiques — très adapté aux TPE.', alternative: 'Tiime si vous cherchez moins cher' },
  'quickbooks': { category: 'compta', role: 'compta', priceTypical: 30, tip: 'Solide mais pensé pour le marché anglo-saxon. La TVA et le droit social français peuvent être complexes.', alternative: 'Pennylane est mieux adapté au droit français' },
  'tiime': { category: 'compta', role: 'compta', priceTypical: 25, tip: 'Bon rapport qualité/prix pour les freelances et petites structures françaises.' },
  'evoliz': { category: 'compta', role: 'compta', priceTypical: 20, tip: 'Bien pour la facturation. Limité si vous avez besoin d\'une comptabilité complète.' },
  'indy': { category: 'compta', role: 'compta', priceTypical: 25, isFreeAvailable: true, tip: 'Pensé pour les indépendants et micro-entrepreneurs. Très simple.' },
  'sage': { category: 'compta', role: 'compta', priceTypical: 45, tip: 'Référence historique mais souvent cher et complexe. Des alternatives modernes font mieux.', alternative: 'Pennylane pour une expérience plus moderne' },

  // Email marketing
  'mailchimp': { category: 'email', role: 'email-marketing', priceTypical: 50, tip: 'Cher pour ce qu\'il propose. Brevo offre les mêmes fonctionnalités 2-3x moins cher.', alternative: 'Brevo (ex-Sendinblue) — français et bien moins cher' },
  'brevo': { category: 'email', role: 'email-marketing', priceTypical: 25, isFreeAvailable: true, tip: 'Meilleure alternative française à Mailchimp. Excellent rapport qualité/prix. Gratuit jusqu\'à 300 emails/jour.' },
  'sendinblue': { category: 'email', role: 'email-marketing', priceTypical: 25, isFreeAvailable: true, tip: 'Brevo a changé de nom — même produit. Bonne solution, vous êtes bien placé.' },
  'klaviyo': { category: 'email', role: 'email-marketing', priceTypical: 60, tip: 'Le meilleur pour l\'e-commerce (segmentation comportementale). Justifié si vous faites du e-comm.', alternative: 'Brevo si vous n\'avez pas besoin des automatisations e-commerce avancées' },
  'mailerlite': { category: 'email', role: 'email-marketing', priceTypical: 15, isFreeAvailable: true, tip: 'Très bon rapport qualité/prix. Idéal pour les créateurs de contenu et petites listes.' },
  'activecampaign': { category: 'email', role: 'email-marketing', priceTypical: 49, tip: 'Excellent pour l\'automatisation marketing avancée. Peut remplacer un CRM simple.', alternative: 'Brevo si vous n\'avez pas besoin d\'automatisations complexes' },
  'convertkit': { category: 'email', role: 'email-marketing', priceTypical: 29, tip: 'Idéal pour les créateurs de contenu et solopreneurs. En doublon avec Mailchimp/Brevo.', alternative: 'Brevo si vous avez besoin de plus de fonctionnalités à prix équivalent' },

  // RH / Paie
  'payfit': { category: 'rh', role: 'paie', priceTypical: 60, tip: 'La référence pour la paie française. Simple et conforme au droit du travail.', alternative: 'Silae si vous travaillez avec un expert-comptable' },
  'silae': { category: 'rh', role: 'paie', priceTypical: 50, tip: 'Très utilisé par les experts-comptables. Moins intuitif en autonomie.', alternative: 'Payfit si vous gérez la paie vous-même' },
  'lucca': { category: 'rh', role: 'rh-admin', priceTypical: 7, tip: 'Bonne solution pour les congés, notes de frais et temps. Tarif par employé.' },
  'factorial': { category: 'rh', role: 'rh-admin', priceTypical: 5, tip: 'Bon rapport qualité/prix pour les RH de base. En doublon avec Lucca si vous avez les deux.', alternative: 'Choisissez Factorial OU Lucca, pas les deux' },
  'bamboohr': { category: 'rh', role: 'rh-admin', priceTypical: 8, tip: 'Pensé pour le marché américain. Lucca ou Factorial sont plus adaptés au droit français.', alternative: 'Lucca pour une solution adaptée au droit français' },

  // Gestion de projet
  'notion': { category: 'projet', role: 'wiki-projet', priceTypical: 10, isFreeAvailable: true, tip: 'Peut remplacer plusieurs outils (wiki, base de données, projet). Vérifiez ce que vous pouvez consolider.' },
  'asana': { category: 'projet', role: 'gestion-projet', priceTypical: 13, isFreeAvailable: true, tip: 'Bon outil de projet. Vérifiez si vous n\'utilisez pas aussi Trello ou Monday — souvent redondant.', alternative: 'Notion peut couvrir vos besoins si vous l\'utilisez déjà' },
  'monday': { category: 'projet', role: 'gestion-projet', priceTypical: 14, tip: 'Interface agréable mais cher. Souvent en doublon avec Asana ou Trello.', alternative: 'Asana ou Linear sont souvent plus adaptés et moins chers' },
  'trello': { category: 'projet', role: 'kanban', priceTypical: 10, isFreeAvailable: true, tip: 'Simple et efficace pour le kanban. La version gratuite (10 tableaux) suffit souvent.' },
  'jira': { category: 'projet', role: 'gestion-projet-dev', priceTypical: 8, tip: 'Indispensable pour les équipes dev. Trop complexe pour des équipes non-tech.', alternative: 'Linear beaucoup plus simple et moderne pour les équipes tech' },
  'linear': { category: 'projet', role: 'gestion-projet-dev', priceTypical: 8, isFreeAvailable: true, tip: 'Excellent pour les équipes tech. Plus simple et rapide que Jira.' },
  'clickup': { category: 'projet', role: 'gestion-projet', priceTypical: 7, isFreeAvailable: true, tip: 'Très complet. Vérifiez si vous utilisez vraiment toutes les fonctions — risque de surcharge.', alternative: 'Notion pour une approche plus flexible' },
  'basecamp': { category: 'projet', role: 'gestion-projet', priceTypical: 15, tip: 'Simple et forfait fixe. En doublon si vous avez aussi Asana, Monday ou Trello.', alternative: 'Choisissez un seul outil de gestion de projet' },

  // Stockage / Suite bureautique
  'google workspace': { category: 'stockage', role: 'suite-bureautique', priceTypical: 12, tip: 'Inclut Gmail, Drive, Meet, Docs... Vérifiez que vous n\'avez pas aussi Microsoft 365 — c\'est un doublon majeur.', alternative: 'Choisissez Google Workspace OU Microsoft 365, pas les deux' },
  'microsoft 365': { category: 'stockage', role: 'suite-bureautique', priceTypical: 12, tip: 'Inclut Outlook, OneDrive, Teams, Office... Vérifiez si vous avez aussi Google Workspace.', alternative: 'Choisissez Microsoft 365 OU Google Workspace, pas les deux' },
  'dropbox': { category: 'stockage', role: 'stockage-fichiers', priceTypical: 15, tip: 'Souvent redondant avec Google Drive ou OneDrive. Votre suite bureautique inclut probablement déjà du stockage.', alternative: 'Google Drive (Workspace) ou OneDrive (M365) si vous avez déjà une suite' },
  'box': { category: 'stockage', role: 'stockage-fichiers', priceTypical: 15, tip: 'Même constat que Dropbox — vérifiez les doublons avec votre suite bureautique.', alternative: 'Google Drive ou OneDrive selon votre suite' },

  // Communication
  'slack': { category: 'communication', role: 'messagerie-interne', priceTypical: 8, isFreeAvailable: true, tip: 'La version gratuite (90 jours d\'historique) suffit pour beaucoup de TPE.', alternative: 'Discord gratuit si vous n\'avez pas besoin d\'intégrations pro' },
  'microsoft teams': { category: 'communication', role: 'messagerie-interne', priceTypical: 0, isFreeAvailable: true, tip: 'Inclus dans Microsoft 365. Si vous avez la suite M365, ne payez pas Slack en plus — c\'est un doublon.', alternative: 'Déjà inclus dans Microsoft 365' },
  'zoom': { category: 'communication', role: 'visio', priceTypical: 15, isFreeAvailable: true, tip: 'Vérifiez si Google Meet (inclus Workspace) ou Teams (inclus M365) ne couvre pas déjà vos besoins.', alternative: 'Google Meet (inclus Workspace) ou Teams (inclus M365)' },
  'discord': { category: 'communication', role: 'messagerie-communaute', priceTypical: 0, isFreeAvailable: true, tip: 'Gratuit pour la plupart des usages. Discord Nitro est rarement nécessaire en contexte pro.' },

  // E-commerce
  'shopify': { category: 'ecommerce', role: 'plateforme-ecommerce', priceTypical: 39, tip: 'La référence. Regardez si toutes vos apps Shopify sont vraiment utilisées — elles s\'accumulent vite.', alternative: 'WooCommerce si vous avez des compétences tech' },
  'woocommerce': { category: 'ecommerce', role: 'plateforme-ecommerce', priceTypical: 10, tip: 'Plugin gratuit, mais les coûts hosting + plugins additionnels peuvent s\'accumuler. Calculez le coût total.', alternative: 'Shopify si vous voulez éviter la maintenance technique' },
  'prestashop': { category: 'ecommerce', role: 'plateforme-ecommerce', priceTypical: 20, tip: 'Open source mais modules payants coûteux. Calculez le coût total.', alternative: 'Shopify pour une solution clé en main' },

  // Support
  'zendesk': { category: 'support', role: 'support-tickets', priceTypical: 55, tip: 'Puissant mais cher pour une TPE. Freshdesk offre les mêmes fonctions à bien meilleur prix.', alternative: 'Freshdesk (gratuit jusqu\'à 10 agents) ou Crisp.chat' },
  'freshdesk': { category: 'support', role: 'support-tickets', priceTypical: 18, isFreeAvailable: true, tip: 'Excellent rapport qualité/prix. La version gratuite couvre bien les petites équipes (jusqu\'à 10 agents).' },
  'intercom': { category: 'support', role: 'live-chat', priceTypical: 74, tip: 'Très puissant mais cher. Crisp est français et 3x moins cher pour des fonctions similaires.', alternative: 'Crisp.chat — français, puissant, bien moins cher' },
  'crisp': { category: 'support', role: 'live-chat', priceTypical: 25, isFreeAvailable: true, tip: 'Excellent live chat français. Bon rapport qualité/prix. En doublon avec Intercom si vous avez les deux.' },
  'hubspot service hub': { category: 'support', role: 'support-tickets', priceTypical: 45, tip: 'Cohérent si vous utilisez déjà HubSpot CRM. Sinon, Freshdesk ou Crisp sont moins chers.' },

  // Analytics
  'google analytics': { category: 'analytics', role: 'web-analytics', priceTypical: 0, isFreeAvailable: true, tip: 'Gratuit et très complet. Vérifiez si vous payez pour un outil analytics concurrent inutilement.' },
  'hotjar': { category: 'analytics', role: 'ux-analytics', priceTypical: 39, isFreeAvailable: true, tip: 'Heatmaps et enregistrements — complémentaire à GA4 (pas un doublon). Gratuit jusqu\'à 35 sessions/jour.' },
  'matomo': { category: 'analytics', role: 'web-analytics', priceTypical: 23, isFreeAvailable: true, tip: 'Alternative RGPD-friendly à GA4. En doublon si vous avez déjà GA4 bien configuré.', alternative: 'GA4 gratuit + Consent Mode pour la conformité RGPD' },
  'mixpanel': { category: 'analytics', role: 'product-analytics', priceTypical: 28, isFreeAvailable: true, tip: 'Analytics produit (events, funnels) — complémentaire à GA4 pour les SaaS, pas concurrent.' },
  'amplitude': { category: 'analytics', role: 'product-analytics', priceTypical: 0, isFreeAvailable: true, tip: 'En doublon avec Mixpanel si vous avez les deux. Choisissez l\'un ou l\'autre.', alternative: 'Choisissez Mixpanel OU Amplitude, pas les deux' },

  // Design
  'canva': { category: 'design', role: 'design-graphique', priceTypical: 13, isFreeAvailable: true, tip: 'Excellent pour les non-designers. La version gratuite est déjà très complète pour une TPE.' },
  'figma': { category: 'design', role: 'ui-ux-design', priceTypical: 15, isFreeAvailable: true, tip: 'La référence pour le design UI/UX. La version gratuite (3 projets) suffit souvent.' },
  'adobe creative cloud': { category: 'design', role: 'suite-creative', priceTypical: 65, tip: 'Très cher. Vérifiez si vous utilisez vraiment Photoshop, Illustrator ET Premiere simultanément.', alternative: 'Canva Pro + DaVinci Resolve (gratuit) pour 80% moins cher' },
  'photoshop': { category: 'design', role: 'retouche-photo', priceTypical: 26, tip: 'Souvent inclus dans Adobe Creative Cloud. Vérifiez si vous payez les deux.', alternative: 'Canva Pro ou Affinity Photo (achat unique 70€) comme alternative' },

  // Vidéo
  'loom': { category: 'video', role: 'video-async', priceTypical: 15, isFreeAvailable: true, tip: 'Très utile pour la comm interne et les tutoriels. La version gratuite (25 vidéos) peut suffire.' },
  'veed': { category: 'video', role: 'video-editing', priceTypical: 18, tip: 'Bon éditeur vidéo en ligne. Vérifiez si CapCut (gratuit) ne suffit pas pour vos besoins.', alternative: 'CapCut gratuit pour du montage basique' },
  'descript': { category: 'video', role: 'video-podcast', priceTypical: 24, isFreeAvailable: true, tip: 'Excellent pour les podcasts et vidéos avec transcription automatique. Niche mais très puissant.' },

  // Réseaux sociaux
  'hootsuite': { category: 'social', role: 'social-scheduling', priceTypical: 99, tip: 'Cher pour de la planification de posts. Buffer ou Metricool font la même chose 5x moins cher.', alternative: 'Buffer (15€/mois) ou Metricool (14€) selon vos réseaux' },
  'buffer': { category: 'social', role: 'social-scheduling', priceTypical: 15, isFreeAvailable: true, tip: 'Bon rapport qualité/prix. En doublon avec Hootsuite, Later ou Metricool si vous en avez plusieurs.', alternative: 'Metricool si vous voulez aussi des analytics détaillés' },
  'later': { category: 'social', role: 'social-scheduling', priceTypical: 18, isFreeAvailable: true, tip: 'Idéal pour Instagram et TikTok. En doublon avec Buffer ou Hootsuite si vous les cumulez.' },
  'metricool': { category: 'social', role: 'social-scheduling', priceTypical: 14, isFreeAvailable: true, tip: 'Excellent rapport qualité/prix. Analytics + planification pour tous les réseaux. Très complet.' },
  'swello': { category: 'social', role: 'social-scheduling', priceTypical: 19, tip: 'Solution française. En doublon si vous avez aussi Buffer, Later ou Metricool.' },
}

const CATEGORY_LABELS: Record<Category, { label: string; icon: string }> = {
  crm:           { label: 'CRM / Vente',              icon: '🤝' },
  compta:        { label: 'Comptabilité',              icon: '📊' },
  rh:            { label: 'RH / Paie',                icon: '👥' },
  email:         { label: 'Email marketing',           icon: '📧' },
  seo:           { label: 'SEO / Référencement',       icon: '🔍' },
  social:        { label: 'Réseaux sociaux',           icon: '📱' },
  projet:        { label: 'Gestion de projet',         icon: '📋' },
  stockage:      { label: 'Suite bureautique / Stockage', icon: '🗂️' },
  communication: { label: 'Communication interne',     icon: '💬' },
  ecommerce:     { label: 'E-commerce',                icon: '🛒' },
  support:       { label: 'Support client',            icon: '🎧' },
  analytics:     { label: 'Analytics',                 icon: '📈' },
  design:        { label: 'Design / Créatif',          icon: '🎨' },
  video:         { label: 'Vidéo / Contenu',           icon: '🎬' },
  autre:         { label: 'Autre',                     icon: '⚙️' },
}

// TPE moyenne française ~180€/mois (BPI France 2023)
const AVERAGE_TPE_MONTHLY = 180

// ─── Helpers ──────────────────────────────────────────────────────────────────

let idSeq = 0
const uid = () => `t-${++idSeq}`

function matchTool(name: string): KnownTool | undefined {
  if (!name.trim()) return undefined
  const key = name.toLowerCase().trim()
  if (TOOL_DB[key]) return TOOL_DB[key]
  // partial match
  return Object.entries(TOOL_DB).find(([k]) => key.includes(k) || k.includes(key))?.[1]
}

function getSuggestions(input: string): string[] {
  if (input.length < 2) return []
  const q = input.toLowerCase()
  return Object.keys(TOOL_DB)
    .filter(k => k.startsWith(q) || k.includes(q))
    .slice(0, 6)
    .map(k => k.charAt(0).toUpperCase() + k.slice(1))
}

type Redundancy = { role: string; tools: Tool[] }

function findRedundancies(tools: Tool[]): Redundancy[] {
  const byRole: Record<string, Tool[]> = {}
  for (const t of tools) {
    const known = matchTool(t.name)
    // unknown tools: group by category+name to avoid false positives
    const role = known ? known.role : `${t.category}__${t.name.toLowerCase()}`
    if (!byRole[role]) byRole[role] = []
    byRole[role].push(t)
  }
  return Object.entries(byRole)
    .filter(([, g]) => g.length >= 2)
    .map(([role, tools]) => ({ role, tools }))
}

function getScore(total: number, redundancies: Redundancy[]): { grade: string; color: string; label: string; sub: string } {
  if (redundancies.length > 0) return { grade: 'D', color: '#ef4444', label: 'Doublons détectés', sub: 'Vous payez plusieurs fois pour les mêmes usages' }
  if (total <= 80)  return { grade: 'A+', color: '#10b981', label: 'Stack optimisée', sub: 'En dessous de la moyenne — excellent' }
  if (total <= 180) return { grade: 'B', color: '#22c55e', label: 'Dans la moyenne', sub: `TPE française moyenne : ${AVERAGE_TPE_MONTHLY}€/mois` }
  if (total <= 300) return { grade: 'C', color: '#f59e0b', label: 'À optimiser', sub: 'Des économies sont possibles — voir recommandations' }
  return { grade: 'D', color: '#ef4444', label: 'Surbudgétisé', sub: 'Vous dépensez 2x la moyenne — audit recommandé' }
}

// ─── Page principale ──────────────────────────────────────────────────────────

export default function CalculateurSaas() {
  const [tools, setTools] = useState<Tool[]>([
    { id: uid(), name: '', category: 'crm', priceMonthly: 0, users: 1 },
  ])
  const [step, setStep] = useState<'form' | 'result'>('form')
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [emailLoading, setEmailLoading] = useState(false)

  const addTool = useCallback(() => {
    setTools(prev => [...prev, { id: uid(), name: '', category: 'autre', priceMonthly: 0, users: 1 }])
  }, [])

  const removeTool = useCallback((id: string) => {
    setTools(prev => prev.filter(t => t.id !== id))
  }, [])

  const updateTool = useCallback((id: string, patch: Partial<Tool>) => {
    setTools(prev => prev.map(t => {
      if (t.id !== id) return t
      const next = { ...t, ...patch }
      // auto-fill category from DB when tool name is recognized
      if (patch.name !== undefined) {
        const known = matchTool(patch.name)
        if (known) next.category = known.category
      }
      return next
    }))
  }, [])

  const filledTools = tools.filter(t => t.priceMonthly > 0)
  const totalMonthly = filledTools.reduce((s, t) => s + t.priceMonthly * t.users, 0)
  const totalAnnual = totalMonthly * 12
  const redundancies = findRedundancies(filledTools)
  const score = getScore(totalMonthly, redundancies)
  const vsAverage = totalMonthly - AVERAGE_TPE_MONTHLY

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailLoading(true)
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    } catch { /* silent */ }
    setEmailSent(true)
    setEmailLoading(false)
  }

  const canAnalyze = filledTools.length >= 1

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'DM Sans', Arial, sans-serif" }}>

      {/* ── Header ── */}
      <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a' }}>TonMeilleurSaaS</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <SearchModal />
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%)', color: '#fff', padding: '60px 20px 48px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: 600, marginBottom: '20px', letterSpacing: '0.5px' }}>
            🧮 OUTIL GRATUIT
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 900, lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-1px' }}>
            Combien dépensez-vous en SaaS chaque mois ?
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2.5vw, 18px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto 24px' }}>
            Entrez vos abonnements. Obtenez en 30 secondes votre score de rentabilité, les doublons détectés, et des conseils spécifiques à chaque outil.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['⚡ Résultat instantané', '🔍 65+ outils reconnus', '🔒 Aucune donnée stockée'].map((b, i) => (
              <span key={i} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main ── */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px 80px' }}>
        {step === 'form' ? (
          <>
            {/* ── Tool cards ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {tools.map((tool, i) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  index={i}
                  onUpdate={(patch) => updateTool(tool.id, patch)}
                  onRemove={() => removeTool(tool.id)}
                  canRemove={tools.length > 1}
                />
              ))}
            </div>

            <button
              onClick={addTool}
              style={{ width: '100%', padding: '14px', border: '2px dashed #cbd5e1', borderRadius: '14px', background: 'transparent', color: '#64748b', fontSize: '15px', fontWeight: 600, cursor: 'pointer', marginBottom: '20px' }}
            >
              + Ajouter un outil
            </button>

            {/* ── Live preview ── */}
            {filledTools.length > 0 && (
              <div style={{ background: 'linear-gradient(135deg, #eff6ff, #f0fdf4)', border: '1px solid #bfdbfe', borderRadius: '16px', padding: '20px 24px', marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: 600, marginBottom: '4px' }}>Total estimé</p>
                  <p style={{ fontSize: '32px', fontWeight: 900, color: '#0f172a', fontFamily: "'Fraunces', serif", letterSpacing: '-1px', lineHeight: 1 }}>
                    {totalMonthly.toFixed(0)} €<span style={{ fontSize: '16px', color: '#64748b', fontFamily: 'Arial', fontWeight: 400 }}>/mois</span>
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '14px', color: '#64748b' }}>{totalAnnual.toFixed(0)} €/an</p>
                  <p style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>{filledTools.length} outil{filledTools.length > 1 ? 's' : ''}</p>
                </div>
              </div>
            )}

            <button
              onClick={() => canAnalyze && setStep('result')}
              disabled={!canAnalyze}
              style={{
                width: '100%', padding: '18px', borderRadius: '14px', border: 'none',
                background: canAnalyze ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : '#cbd5e1',
                color: '#fff', fontSize: '17px', fontWeight: 800, cursor: canAnalyze ? 'pointer' : 'not-allowed',
                boxShadow: canAnalyze ? '0 6px 24px rgba(37,99,235,0.35)' : 'none',
              }}
            >
              {canAnalyze ? '📊 Analyser ma stack →' : 'Renseignez au moins un outil avec un prix'}
            </button>

            <p style={{ textAlign: 'center', fontSize: '12px', color: '#94a3b8', marginTop: '12px' }}>
              65+ outils reconnus automatiquement — tapez le nom et la catégorie se remplit seule.
            </p>
          </>
        ) : (
          <Results
            tools={filledTools}
            totalMonthly={totalMonthly}
            totalAnnual={totalAnnual}
            redundancies={redundancies}
            score={score}
            vsAverage={vsAverage}
            email={email}
            setEmail={setEmail}
            emailSent={emailSent}
            emailLoading={emailLoading}
            onEmailSubmit={handleEmailSubmit}
            onReset={() => setStep('form')}
          />
        )}
      </div>
    </div>
  )
}

// ─── ToolCard ─────────────────────────────────────────────────────────────────

function ToolCard({
  tool, index, onUpdate, onRemove, canRemove
}: {
  tool: Tool
  index: number
  onUpdate: (patch: Partial<Tool>) => void
  onRemove: () => void
  canRemove: boolean
}) {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const wrapRef = useRef<HTMLDivElement>(null)
  const known = matchTool(tool.name)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setShowSuggestions(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleNameChange = (v: string) => {
    onUpdate({ name: v })
    const s = getSuggestions(v)
    setSuggestions(s)
    setShowSuggestions(s.length > 0)
  }

  const selectSuggestion = (s: string) => {
    onUpdate({ name: s })
    setShowSuggestions(false)
  }

  const inp: React.CSSProperties = {
    padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0',
    fontSize: '14px', color: '#0f172a', background: '#fff', width: '100%',
    fontFamily: "'DM Sans', Arial, sans-serif", boxSizing: 'border-box',
    outline: 'none',
  }

  return (
    <div style={{ background: '#fff', border: `1.5px solid ${known ? '#bfdbfe' : '#e2e8f0'}`, borderRadius: '14px', padding: '16px 18px', boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
      {/* Row 1: name + delete */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
        <div style={{ flex: 1, position: 'relative' }} ref={wrapRef}>
          <input
            type="text"
            placeholder={`Outil ${index + 1} (ex: HubSpot, SemRush, Notion…)`}
            value={tool.name}
            onChange={e => handleNameChange(e.target.value)}
            onFocus={() => { const s = getSuggestions(tool.name); setSuggestions(s); setShowSuggestions(s.length > 0) }}
            style={{ ...inp, fontWeight: 600 }}
          />
          {showSuggestions && suggestions.length > 0 && (
            <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff', border: '1.5px solid #bfdbfe', borderRadius: '10px', zIndex: 50, marginTop: '4px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
              {suggestions.map(s => (
                <button key={s} onMouseDown={() => selectSuggestion(s)} style={{ display: 'block', width: '100%', padding: '10px 14px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '14px', color: '#0f172a', fontFamily: "'DM Sans', Arial, sans-serif" }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#eff6ff')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'none')}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={onRemove}
          disabled={!canRemove}
          style={{ width: '38px', height: '38px', flexShrink: 0, borderRadius: '8px', border: 'none', background: canRemove ? '#fee2e2' : 'transparent', color: canRemove ? '#ef4444' : '#cbd5e1', cursor: canRemove ? 'pointer' : 'default', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >×</button>
      </div>

      {/* Row 2: category + price + users */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <select
          value={tool.category}
          onChange={e => onUpdate({ category: e.target.value as Category })}
          style={{ ...inp, flex: '2 1 180px', appearance: 'none', cursor: 'pointer', color: known ? '#1d4ed8' : '#0f172a', fontWeight: known ? 600 : 400 }}
        >
          {(Object.entries(CATEGORY_LABELS) as [Category, { label: string; icon: string }][]).map(([val, { label, icon }]) => (
            <option key={val} value={val}>{icon} {label}</option>
          ))}
        </select>

        <div style={{ position: 'relative', flex: '1 1 90px' }}>
          <input
            type="number"
            min={0}
            step={1}
            placeholder="0"
            value={tool.priceMonthly || ''}
            onChange={e => onUpdate({ priceMonthly: parseFloat(e.target.value) || 0 })}
            style={{ ...inp, paddingRight: '28px' }}
          />
          <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', color: '#94a3b8', pointerEvents: 'none' }}>€</span>
        </div>

        <div style={{ position: 'relative', flex: '1 1 70px' }}>
          <input
            type="number"
            min={1}
            step={1}
            placeholder="1"
            value={tool.users || ''}
            onChange={e => onUpdate({ users: parseInt(e.target.value) || 1 })}
            style={{ ...inp, paddingRight: '32px' }}
          />
          <span style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', fontSize: '11px', color: '#94a3b8', pointerEvents: 'none' }}>user{tool.users > 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Known tool badge */}
      {known && (
        <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#3b82f6' }}>
          <span>✓</span>
          <span style={{ fontWeight: 600 }}>Outil reconnu</span>
          {known.isFreeAvailable && <span style={{ background: '#dcfce7', color: '#15803d', borderRadius: '999px', padding: '1px 8px', fontWeight: 600 }}>Version gratuite dispo</span>}
        </div>
      )}
    </div>
  )
}

// ─── Results ──────────────────────────────────────────────────────────────────

function Results({
  tools, totalMonthly, totalAnnual, redundancies, score, vsAverage,
  email, setEmail, emailSent, emailLoading, onEmailSubmit, onReset,
}: {
  tools: Tool[]
  totalMonthly: number
  totalAnnual: number
  redundancies: Redundancy[]
  score: ReturnType<typeof getScore>
  vsAverage: number
  email: string
  setEmail: (v: string) => void
  emailSent: boolean
  emailLoading: boolean
  onEmailSubmit: (e: React.FormEvent) => void
  onReset: () => void
}) {
  const potentialSaving = redundancies.flatMap(r => r.tools.slice(1)).reduce((s, t) => s + t.priceMonthly * t.users, 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

      {/* ── Score ── */}
      <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
        <div style={{ padding: '28px', background: `linear-gradient(135deg, ${score.color}15, ${score.color}06)`, borderBottom: '1px solid #f1f5f9', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '68px', height: '68px', borderRadius: '16px', background: score.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', fontWeight: 900, color: '#fff', fontFamily: "'Fraunces', serif", letterSpacing: '-1px', flexShrink: 0 }}>
              {score.grade}
            </div>
            <div>
              <p style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{score.label}</p>
              <p style={{ fontSize: '14px', color: '#64748b' }}>{score.sub}</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '36px', fontWeight: 900, color: '#0f172a', fontFamily: "'Fraunces', serif", letterSpacing: '-1.5px', lineHeight: 1 }}>{totalMonthly.toFixed(0)} €</p>
            <p style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>par mois · {totalAnnual.toFixed(0)} €/an</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Stat label="vs TPE moyenne" value={`${vsAverage >= 0 ? '+' : ''}${vsAverage.toFixed(0)} €`} color={vsAverage > 30 ? '#ef4444' : '#22c55e'} sub={vsAverage > 0 ? 'Au-dessus de la moyenne' : 'En dessous — bravo !'} />
          <Stat label="Doublons détectés" value={String(redundancies.length)} color={redundancies.length > 0 ? '#f59e0b' : '#22c55e'} sub={redundancies.length > 0 ? `${redundancies.length} usage${redundancies.length > 1 ? 's' : ''} dupliqué${redundancies.length > 1 ? 's' : ''}` : 'Aucun doublon'} />
          <Stat label="Économies potentielles" value={potentialSaving > 0 ? `${potentialSaving.toFixed(0)} €/mois` : '—'} color={potentialSaving > 0 ? '#f59e0b' : '#22c55e'} sub={potentialSaving > 0 ? 'En supprimant les doublons' : 'Stack sans redondance'} />
        </div>
      </div>

      {/* ── Doublons ── */}
      {redundancies.length > 0 && (
        <div style={{ background: '#fffbeb', border: '1.5px solid #fcd34d', borderRadius: '16px', padding: '20px 24px' }}>
          <h3 style={{ fontWeight: 800, color: '#92400e', fontSize: '16px', marginBottom: '14px' }}>⚠️ Doublons détectés — vous payez deux fois pour le même usage</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {redundancies.map((r, i) => {
              const toolCost = r.tools.reduce((s, t) => s + t.priceMonthly * t.users, 0)
              const known = matchTool(r.tools[0].name)
              return (
                <div key={i} style={{ background: '#fff', borderRadius: '10px', padding: '14px 16px', border: '1px solid #fde68a' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                    <p style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px' }}>
                      {r.tools.map(t => t.name || 'Outil sans nom').join(' + ')}
                    </p>
                    <span style={{ fontWeight: 800, color: '#ef4444', fontSize: '15px' }}>{toolCost.toFixed(0)} €/mois</span>
                  </div>
                  {known?.alternative && (
                    <p style={{ fontSize: '13px', color: '#d97706', fontWeight: 600 }}>
                      💡 {known.alternative}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ── Analyse outil par outil ── */}
      <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #f1f5f9' }}>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a' }}>Analyse outil par outil</h3>
        </div>
        <div style={{ padding: '8px 0' }}>
          {tools.map(tool => {
            const known = matchTool(tool.name)
            const toolTotal = tool.priceMonthly * tool.users
            const isRedundant = redundancies.some(r => r.tools.some(t => t.id === tool.id))

            return (
              <div key={tool.id} style={{ padding: '16px 24px', borderBottom: '1px solid #f8fafc' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div>
                    <p style={{ fontWeight: 700, color: '#0f172a', fontSize: '15px', marginBottom: '2px' }}>
                      {tool.name || `Outil (${CATEGORY_LABELS[tool.category].label})`}
                      {isRedundant && <span style={{ marginLeft: '8px', fontSize: '11px', background: '#fef3c7', color: '#92400e', borderRadius: '999px', padding: '2px 8px', fontWeight: 700 }}>DOUBLON</span>}
                    </p>
                    <p style={{ fontSize: '12px', color: '#94a3b8' }}>{CATEGORY_LABELS[tool.category].icon} {CATEGORY_LABELS[tool.category].label}{tool.users > 1 ? ` · ${tool.users} users` : ''}</p>
                  </div>
                  <span style={{ fontWeight: 800, fontSize: '18px', color: isRedundant ? '#ef4444' : '#0f172a' }}>{toolTotal.toFixed(0)} €<span style={{ fontWeight: 400, fontSize: '13px', color: '#94a3b8' }}>/mois</span></span>
                </div>

                {known ? (
                  <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px 14px', fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>
                    <p style={{ marginBottom: known.alternative ? '6px' : 0 }}>💡 {known.tip}</p>
                    {known.alternative && (
                      <p style={{ color: '#2563eb', fontWeight: 600 }}>→ {known.alternative}</p>
                    )}
                    {known.isFreeAvailable && !known.alternative && (
                      <p style={{ color: '#15803d', fontWeight: 600 }}>→ Une version gratuite est disponible — vérifiez si elle suffit à vos besoins</p>
                    )}
                    {known.categorySlug && (
                      <p style={{ marginTop: '6px' }}>
                        <Link href={`/categorie/${known.categorySlug}`} style={{ color: '#7c3aed', fontWeight: 600, fontSize: '12px' }}>
                          Comparer les alternatives →
                        </Link>
                      </p>
                    )}
                  </div>
                ) : (
                  <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '10px 14px', fontSize: '13px', color: '#94a3b8' }}>
                    Outil non reconnu — vérifiez si une alternative moins chère existe dans la même catégorie.
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Newsletter ── */}
      {!emailSent ? (
        <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', borderRadius: '20px', padding: '28px', color: '#fff', textAlign: 'center' }}>
          <p style={{ fontSize: '28px', marginBottom: '8px' }}>📬</p>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
            Guide gratuit : "La stack SaaS idéale pour TPE"
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>
            + code promo -10% sur la boutique. Désabonnement en 1 clic.
          </p>
          <form onSubmit={onEmailSubmit} style={{ display: 'flex', gap: '10px', maxWidth: '440px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="votre@email.fr"
              style={{ flex: '1 1 200px', padding: '14px 18px', borderRadius: '12px', border: 'none', fontSize: '15px', minWidth: 0 }} />
            <button type="submit" disabled={emailLoading}
              style={{ flex: '0 0 auto', padding: '14px 20px', borderRadius: '12px', border: 'none', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#fff', fontSize: '15px', fontWeight: 700, cursor: emailLoading ? 'not-allowed' : 'pointer' }}>
              {emailLoading ? '...' : 'Je veux le guide →'}
            </button>
          </form>
        </div>
      ) : (
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
          <p style={{ fontSize: '24px', marginBottom: '8px' }}>🎉</p>
          <p style={{ fontWeight: 700, color: '#15803d', fontSize: '16px' }}>Guide envoyé ! Vérifiez votre boîte mail.</p>
        </div>
      )}

      {/* ── Actions ── */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <button onClick={onReset} style={{ flex: '1 1 180px', padding: '14px', borderRadius: '12px', border: '2px solid #e2e8f0', background: '#fff', color: '#0f172a', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>
          ← Modifier mes outils
        </button>
        <Link href="/boutique" style={{ flex: '1 1 180px', padding: '14px', borderRadius: '12px', background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: '#fff', fontSize: '15px', fontWeight: 700, textDecoration: 'none', textAlign: 'center', display: 'block' }}>
          Voir la boutique →
        </Link>
      </div>
    </div>
  )
}

function Stat({ label, value, color, sub }: { label: string; value: string; color: string; sub: string }) {
  return (
    <div style={{ flex: '1 1 140px', padding: '18px 20px', borderRight: '1px solid #f1f5f9' }}>
      <p style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>{label}</p>
      <p style={{ fontSize: '22px', fontWeight: 900, color, fontFamily: "'Fraunces', serif", marginBottom: '4px' }}>{value}</p>
      <p style={{ fontSize: '12px', color: '#64748b' }}>{sub}</p>
    </div>
  )
}
