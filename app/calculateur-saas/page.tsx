'use client'
import { useState, useCallback } from 'react'
import Link from 'next/link'
import MobileMenu from '@/app/components/MobileMenu'
import SearchModal from '@/app/components/SearchModal'

// ─── Types ───────────────────────────────────────────────────────────────────

type Category =
  | 'crm'
  | 'compta'
  | 'rh'
  | 'marketing'
  | 'projet'
  | 'stockage'
  | 'communication'
  | 'ecommerce'
  | 'support'
  | 'analytics'
  | 'autre'

interface Tool {
  id: string
  name: string
  category: Category
  priceMonthly: number
  users: number
}

// ─── Benchmarks ───────────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<Category, string> = {
  crm: 'CRM / Vente',
  compta: 'Comptabilité',
  rh: 'RH / Paie',
  marketing: 'Marketing / Email',
  projet: 'Gestion de projet',
  stockage: 'Stockage / Docs',
  communication: 'Communication',
  ecommerce: 'E-commerce',
  support: 'Support client',
  analytics: 'Analytics',
  autre: 'Autre',
}

const CATEGORY_BENCHMARKS: Record<Category, { avg: number; description: string; tips: string }> = {
  crm: { avg: 45, description: 'CRM moyen pour une TPE', tips: 'HubSpot Free est puissant pour démarrer' },
  compta: { avg: 30, description: 'Logiciel compta moyen', tips: 'Pennylane et Axonaut sont très compétitifs' },
  rh: { avg: 50, description: 'Solution RH moyenne', tips: 'Payfit propose un bon rapport qualité/prix' },
  marketing: { avg: 35, description: 'Outil marketing moyen', tips: 'Brevo est excellent et moins cher que Mailchimp' },
  projet: { avg: 20, description: 'Gestion projet moyenne', tips: 'Notion ou Linear peuvent remplacer plusieurs outils' },
  stockage: { avg: 12, description: 'Stockage moyen par mois', tips: 'Google Workspace couvre souvent email + Drive' },
  communication: { avg: 10, description: 'Comm. interne moyenne', tips: 'Slack Free suffit pour les petites équipes' },
  ecommerce: { avg: 30, description: 'Plateforme e-commerce moy.', tips: 'WooCommerce peut réduire les frais mensuels' },
  support: { avg: 25, description: 'Support client moyen', tips: 'Freshdesk Free couvre les bases' },
  analytics: { avg: 15, description: 'Analytics moyen', tips: 'Google Analytics 4 est gratuit et très complet' },
  autre: { avg: 20, description: 'Abonnement divers', tips: 'Vérifiez si cet outil est vraiment utilisé' },
}

// TPE moyenne française dépense 180€/mois selon BPI France (2023)
const AVERAGE_TPE_MONTHLY = 180

// ─── Helpers ─────────────────────────────────────────────────────────────────

let idCounter = 0
const uid = () => `tool-${++idCounter}`

function getScore(total: number, hasRedundancies: boolean): { grade: string; color: string; label: string } {
  if (hasRedundancies) return { grade: 'D', color: '#ef4444', label: 'Redondances détectées' }
  if (total <= 100) return { grade: 'A', color: '#22c55e', label: 'Stack optimisée' }
  if (total <= 180) return { grade: 'B', color: '#84cc16', label: 'Dans la moyenne' }
  if (total <= 300) return { grade: 'C', color: '#f59e0b', label: 'À optimiser' }
  return { grade: 'D', color: '#ef4444', label: 'Surbudgétisé' }
}

function findRedundancies(tools: Tool[]): Category[] {
  const countByCategory: Partial<Record<Category, number>> = {}
  for (const t of tools) {
    countByCategory[t.category] = (countByCategory[t.category] ?? 0) + 1
  }
  return Object.entries(countByCategory)
    .filter(([, count]) => (count as number) >= 2)
    .map(([cat]) => cat as Category)
}

// ─── Component ───────────────────────────────────────────────────────────────

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

  const updateTool = useCallback((id: string, field: keyof Tool, value: string | number) => {
    setTools(prev => prev.map(t => t.id === id ? { ...t, [field]: value } : t))
  }, [])

  const filledTools = tools.filter(t => t.priceMonthly > 0)
  const totalMonthly = filledTools.reduce((sum, t) => sum + t.priceMonthly * t.users, 0)
  const totalAnnual = totalMonthly * 12
  const redundancies = findRedundancies(filledTools)
  const score = getScore(totalMonthly, redundancies.length > 0)
  const vsAverage = totalMonthly - AVERAGE_TPE_MONTHLY
  const potentialSaving = filledTools
    .filter(t => redundancies.includes(t.category))
    .reduce((sum, t) => sum + t.priceMonthly * t.users, 0)

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
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a' }}>
              TonMeilleurSaaS
            </span>
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
            Entrez vos abonnements et obtenez en 30 secondes votre score de rentabilité, les doublons détectés et vos économies potentielles.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['⚡ Résultat instantané', '🔒 Aucune donnée stockée', '🎯 100% gratuit'].map((b, i) => (
              <span key={i} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main ── */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 20px 80px' }}>
        {step === 'form' ? (
          <>
            {/* ── Tool list ── */}
            <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', overflow: 'hidden', marginBottom: '24px', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
              <div style={{ padding: '24px 28px', borderBottom: '1px solid #f1f5f9', background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)' }}>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                  Vos abonnements SaaS
                </h2>
                <p style={{ fontSize: '14px', color: '#64748b' }}>Ajoutez tous vos outils — CRM, compta, stockage, marketing…</p>
              </div>

              <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Column headers — desktop only */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 160px 100px 80px 40px', gap: '10px', padding: '0 0 4px', borderBottom: '1px solid #f1f5f9' }}>
                  {['Outil', 'Catégorie', '€/mois', 'Users', ''].map((h, i) => (
                    <span key={i} style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</span>
                  ))}
                </div>

                {tools.map(tool => (
                  <ToolRow
                    key={tool.id}
                    tool={tool}
                    onUpdate={updateTool}
                    onRemove={removeTool}
                    canRemove={tools.length > 1}
                  />
                ))}

                <button
                  onClick={addTool}
                  style={{
                    marginTop: '8px', width: '100%', padding: '12px', border: '2px dashed #cbd5e1',
                    borderRadius: '12px', background: 'transparent', color: '#64748b', fontSize: '14px',
                    fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  }}
                >
                  + Ajouter un outil
                </button>
              </div>
            </div>

            {/* ── Live preview ── */}
            {filledTools.length > 0 && (
              <div style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)', border: '1px solid #bfdbfe', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: 600, marginBottom: '4px' }}>Total estimé</p>
                  <p style={{ fontSize: '32px', fontWeight: 900, color: '#0f172a', fontFamily: "'Fraunces', serif", letterSpacing: '-1px' }}>
                    {totalMonthly.toFixed(0)} €<span style={{ fontSize: '16px', color: '#64748b', fontFamily: 'Arial', fontWeight: 400 }}>/mois</span>
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>{totalAnnual.toFixed(0)} €/an</p>
                  <p style={{ fontSize: '13px', color: '#64748b' }}>{filledTools.length} outil{filledTools.length > 1 ? 's' : ''} renseigné{filledTools.length > 1 ? 's' : ''}</p>
                </div>
              </div>
            )}

            {/* ── CTA ── */}
            <button
              onClick={() => canAnalyze && setStep('result')}
              disabled={!canAnalyze}
              style={{
                width: '100%', padding: '18px', borderRadius: '14px', border: 'none',
                background: canAnalyze ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : '#cbd5e1',
                color: '#fff', fontSize: '17px', fontWeight: 800, cursor: canAnalyze ? 'pointer' : 'not-allowed',
                boxShadow: canAnalyze ? '0 6px 24px rgba(37,99,235,0.35)' : 'none',
                fontFamily: "'DM Sans', Arial, sans-serif",
              }}
            >
              {canAnalyze ? '📊 Analyser ma stack →' : 'Renseignez au moins un outil avec un prix'}
            </button>
          </>
        ) : (
          <Results
            tools={filledTools}
            totalMonthly={totalMonthly}
            totalAnnual={totalAnnual}
            redundancies={redundancies}
            score={score}
            vsAverage={vsAverage}
            potentialSaving={potentialSaving}
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

// ─── Tool Row ─────────────────────────────────────────────────────────────────

function ToolRow({
  tool,
  onUpdate,
  onRemove,
  canRemove,
}: {
  tool: Tool
  onUpdate: (id: string, field: keyof Tool, value: string | number) => void
  onRemove: (id: string) => void
  canRemove: boolean
}) {
  const inputStyle: React.CSSProperties = {
    padding: '10px 12px', borderRadius: '10px', border: '1.5px solid #e2e8f0',
    fontSize: '14px', color: '#0f172a', background: '#fff', width: '100%',
    fontFamily: "'DM Sans', Arial, sans-serif", boxSizing: 'border-box',
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 160px 100px 80px 40px', gap: '10px', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Ex: HubSpot"
        value={tool.name}
        onChange={e => onUpdate(tool.id, 'name', e.target.value)}
        style={inputStyle}
      />
      <select
        value={tool.category}
        onChange={e => onUpdate(tool.id, 'category', e.target.value as Category)}
        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
      >
        {Object.entries(CATEGORY_LABELS).map(([val, label]) => (
          <option key={val} value={val}>{label}</option>
        ))}
      </select>
      <div style={{ position: 'relative' }}>
        <input
          type="number"
          min={0}
          step={1}
          placeholder="0"
          value={tool.priceMonthly || ''}
          onChange={e => onUpdate(tool.id, 'priceMonthly', parseFloat(e.target.value) || 0)}
          style={{ ...inputStyle, paddingRight: '28px' }}
        />
        <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', color: '#94a3b8', pointerEvents: 'none' }}>€</span>
      </div>
      <input
        type="number"
        min={1}
        step={1}
        placeholder="1"
        value={tool.users || ''}
        onChange={e => onUpdate(tool.id, 'users', parseInt(e.target.value) || 1)}
        style={inputStyle}
      />
      <button
        onClick={() => canRemove && onRemove(tool.id)}
        disabled={!canRemove}
        style={{
          width: '36px', height: '36px', borderRadius: '8px', border: 'none',
          background: canRemove ? '#fee2e2' : 'transparent',
          color: canRemove ? '#ef4444' : '#cbd5e1',
          cursor: canRemove ? 'pointer' : 'default',
          fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        ×
      </button>
    </div>
  )
}

// ─── Results ──────────────────────────────────────────────────────────────────

function Results({
  tools,
  totalMonthly,
  totalAnnual,
  redundancies,
  score,
  vsAverage,
  potentialSaving,
  email,
  setEmail,
  emailSent,
  emailLoading,
  onEmailSubmit,
  onReset,
}: {
  tools: Tool[]
  totalMonthly: number
  totalAnnual: number
  redundancies: Category[]
  score: ReturnType<typeof getScore>
  vsAverage: number
  potentialSaving: number
  email: string
  setEmail: (v: string) => void
  emailSent: boolean
  emailLoading: boolean
  onEmailSubmit: (e: React.FormEvent) => void
  onReset: () => void
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* ── Score card ── */}
      <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
        <div style={{ padding: '32px 28px', background: `linear-gradient(135deg, ${score.color}18 0%, ${score.color}08 100%)`, display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9' }}>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#64748b', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Votre score de stack SaaS</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '16px', background: score.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', fontWeight: 900, color: '#fff', fontFamily: "'Fraunces', serif" }}>
                {score.grade}
              </div>
              <div>
                <p style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{score.label}</p>
                <p style={{ fontSize: '14px', color: '#64748b' }}>{tools.length} outil{tools.length > 1 ? 's' : ''} analysé{tools.length > 1 ? 's' : ''}</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Dépense mensuelle</p>
            <p style={{ fontSize: '40px', fontWeight: 900, color: '#0f172a', fontFamily: "'Fraunces', serif", letterSpacing: '-1.5px', lineHeight: 1 }}>
              {totalMonthly.toFixed(0)} €
            </p>
            <p style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>{totalAnnual.toFixed(0)} €/an</p>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Stat
            label="vs TPE française moyenne"
            value={`${vsAverage >= 0 ? '+' : ''}${vsAverage.toFixed(0)} €`}
            color={vsAverage > 0 ? '#ef4444' : '#22c55e'}
            sub={vsAverage > 0 ? 'Au-dessus de la moyenne' : 'En dessous de la moyenne'}
          />
          <Stat
            label="Doublons détectés"
            value={redundancies.length > 0 ? `${redundancies.length}` : '0'}
            color={redundancies.length > 0 ? '#f59e0b' : '#22c55e'}
            sub={redundancies.length > 0 ? redundancies.map(c => CATEGORY_LABELS[c]).join(', ') : 'Aucun doublon'}
          />
          <Stat
            label="Économies potentielles"
            value={potentialSaving > 0 ? `${potentialSaving.toFixed(0)} €/mois` : '—'}
            color={potentialSaving > 0 ? '#f59e0b' : '#22c55e'}
            sub={potentialSaving > 0 ? 'En éliminant les doublons' : 'Stack sans redondance'}
          />
        </div>
      </div>

      {/* ── Redundancy alerts ── */}
      {redundancies.length > 0 && (
        <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '16px', padding: '20px 24px' }}>
          <h3 style={{ fontWeight: 800, color: '#92400e', fontSize: '16px', marginBottom: '12px' }}>
            ⚠️ Doublons détectés
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {redundancies.map(cat => {
              const catTools = tools.filter(t => t.category === cat)
              return (
                <div key={cat} style={{ background: '#fff', borderRadius: '10px', padding: '12px 16px', border: '1px solid #fde68a' }}>
                  <p style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px', marginBottom: '4px' }}>
                    {CATEGORY_LABELS[cat]} — {catTools.length} outils
                  </p>
                  <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>
                    {catTools.map(t => t.name || 'Outil sans nom').join(' + ')} · coût combiné : {catTools.reduce((s, t) => s + t.priceMonthly * t.users, 0).toFixed(0)} €/mois
                  </p>
                  <p style={{ fontSize: '12px', color: '#d97706', fontWeight: 600 }}>
                    💡 {CATEGORY_BENCHMARKS[cat].tips}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ── Per-category analysis ── */}
      <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
        <div style={{ padding: '20px 28px', borderBottom: '1px solid #f1f5f9' }}>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a' }}>Analyse par catégorie</h3>
        </div>
        <div style={{ padding: '16px 28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {tools.map(tool => {
            const bench = CATEGORY_BENCHMARKS[tool.category]
            const toolTotal = tool.priceMonthly * tool.users
            const overBench = toolTotal > bench.avg
            return (
              <div key={tool.id} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid #f8fafc' }}>
                <div style={{ flex: '1 1 180px' }}>
                  <p style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px', marginBottom: '2px' }}>{tool.name || CATEGORY_LABELS[tool.category]}</p>
                  <p style={{ fontSize: '12px', color: '#94a3b8' }}>{CATEGORY_LABELS[tool.category]}</p>
                </div>
                <div style={{ flex: '0 0 auto', textAlign: 'right', minWidth: '80px' }}>
                  <p style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>{toolTotal.toFixed(0)} €</p>
                  {tool.users > 1 && <p style={{ fontSize: '11px', color: '#94a3b8' }}>{tool.users} users</p>}
                </div>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min((toolTotal / (bench.avg * 2)) * 100, 100)}%`, background: overBench ? '#ef4444' : '#22c55e', borderRadius: '999px' }} />
                  </div>
                  <span style={{ fontSize: '11px', color: overBench ? '#ef4444' : '#22c55e', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {overBench ? `+${(toolTotal - bench.avg).toFixed(0)} € vs moy.` : '✓ Dans la norme'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Recommendations ── */}
      <div style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #fdf4ff 100%)', border: '1px solid #c7d2fe', borderRadius: '20px', padding: '24px 28px' }}>
        <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
          🎯 Nos recommandations
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {tools.map(tool => {
            const bench = CATEGORY_BENCHMARKS[tool.category]
            return (
              <div key={tool.id} style={{ background: '#fff', borderRadius: '12px', padding: '12px 16px', border: '1px solid #e0e7ff' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#4338ca', marginBottom: '4px' }}>
                  {tool.name || CATEGORY_LABELS[tool.category]}
                </p>
                <p style={{ fontSize: '13px', color: '#374151' }}>💡 {bench.tips}</p>
              </div>
            )
          })}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '12px 16px', border: '1px solid #e0e7ff' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#4338ca', marginBottom: '4px' }}>
              Besoin d'un audit personnalisé ?
            </p>
            <p style={{ fontSize: '13px', color: '#374151' }}>
              Notre <Link href="/boutique" style={{ color: '#2563eb', fontWeight: 600 }}>Audit SaaS complet</Link> vous donne une recommandation sur mesure de votre stack idéale sous 48h.
            </p>
          </div>
        </div>
      </div>

      {/* ── Newsletter capture ── */}
      {!emailSent ? (
        <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', borderRadius: '20px', padding: '28px', color: '#fff', textAlign: 'center' }}>
          <p style={{ fontSize: '22px', marginBottom: '8px' }}>📬</p>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
            Recevez le guide gratuit : "Stack SaaS idéale pour TPE"
          </h3>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>
            + un code promo -10% sur la boutique. Désabonnement en 1 clic.
          </p>
          <form onSubmit={onEmailSubmit} style={{ display: 'flex', gap: '10px', maxWidth: '440px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="votre@email.fr"
              style={{ flex: '1 1 220px', padding: '14px 18px', borderRadius: '12px', border: 'none', fontSize: '15px', minWidth: 0 }}
            />
            <button
              type="submit"
              disabled={emailLoading}
              style={{ flex: '0 0 auto', padding: '14px 20px', borderRadius: '12px', border: 'none', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#fff', fontSize: '15px', fontWeight: 700, cursor: emailLoading ? 'not-allowed' : 'pointer' }}
            >
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
        <button
          onClick={onReset}
          style={{ flex: '1 1 180px', padding: '14px', borderRadius: '12px', border: '2px solid #e2e8f0', background: '#fff', color: '#0f172a', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}
        >
          ← Modifier mes outils
        </button>
        <Link
          href="/boutique"
          style={{ flex: '1 1 180px', padding: '14px', borderRadius: '12px', background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: '#fff', fontSize: '15px', fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}
        >
          Voir la boutique →
        </Link>
      </div>
    </div>
  )
}

// ─── Stat ─────────────────────────────────────────────────────────────────────

function Stat({ label, value, color, sub }: { label: string; value: string; color: string; sub: string }) {
  return (
    <div style={{ flex: '1 1 160px', padding: '20px 24px', borderRight: '1px solid #f1f5f9' }}>
      <p style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>{label}</p>
      <p style={{ fontSize: '24px', fontWeight: 900, color, fontFamily: "'Fraunces', serif", marginBottom: '4px' }}>{value}</p>
      <p style={{ fontSize: '12px', color: '#64748b' }}>{sub}</p>
    </div>
  )
}
