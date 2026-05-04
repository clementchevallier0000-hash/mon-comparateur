import Link from 'next/link'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const PRODUCT_FILES: Record<string, { bucket?: string; path?: string; label: string; tallyUrl?: string }> = {
  'n8n-pack': {
    bucket: 'ressources',
    path: 'n8n-pack.zip',
    label: 'Pack N8N — 5 Workflows clé en main',
  },
  'audit-saas': {
    label: 'Audit SaaS personnalisé',
    tallyUrl: 'https://tally.so/r/xXNWG9',
  },
  'rgpd-pack': {
    bucket: 'ressources',
    path: 'rgpd-pack.zip',
    label: 'Pack RGPD complet pour TPE',
  },
  'fidelisation-pack': {
    bucket: 'ressources',
    path: 'fidelisation-pack.zip',
    label: 'Système de fidélisation client N8N',
  },
  'ai-agents-pack': {
    bucket: 'ressources',
    path: 'ai-agents-pack.zip',
    label: 'Pack AI Agents N8N — 4 agents IA',
  },
  'notion-templates': {
    bucket: 'ressources',
    path: 'notion-templates.zip',
    label: 'Templates Notion — Agence & Freelance',
  },
  'prompts-pack': {
    bucket: 'ressources',
    path: 'prompts-pack.zip',
    label: 'Kit 100 Prompts métiers GPT',
  },
  'mini-audit': {
    label: 'Mini-audit IA personnalisé',
    tallyUrl: 'https://tally.so/r/xXNWG9',
  },
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams

  if (!session_id) redirect('/boutique')

  let downloadUrl: string | null = null
  let tallyUrl: string | null = null
  let customerEmail = ''
  let productLabel = ''
  let error = false

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id)

    if (session.payment_status !== 'paid') redirect('/boutique')

    customerEmail = session.customer_email || session.customer_details?.email || ''
    const productKey = (session.metadata?.product as string) || 'n8n-pack'
    const file = PRODUCT_FILES[productKey]
    productLabel = file?.label || productKey

    if (file?.tallyUrl) {
      tallyUrl = file.tallyUrl
    } else if (file?.bucket && file?.path) {
      const { data, error: signError } = await supabaseAdmin.storage
        .from(file.bucket)
        .createSignedUrl(file.path, 3600)
      if (!signError && data) downloadUrl = data.signedUrl
    }
  } catch {
    error = true
  }

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Fraunces:wght@700;800&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: '520px', width: '100%', background: '#fff', borderRadius: '24px', padding: '48px 40px', boxShadow: '0 8px 48px rgba(0,0,0,0.08)', textAlign: 'center' }}>
        {error ? (
          <>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Une erreur est survenue
            </h1>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '32px', lineHeight: 1.6 }}>
              Contacte-nous à <strong>contact@ton-meilleur-saas.fr</strong> avec ton email Stripe et on te livre manuellement.
            </p>
          </>
        ) : (
          <>
            <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '12px', letterSpacing: '-1px' }}>
              Merci pour ton achat !
            </h1>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '8px', lineHeight: 1.6 }}>
              <strong>{productLabel}</strong>
            </p>
            {customerEmail && (
              <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '32px' }}>
                Commande confirmée pour {customerEmail}
              </p>
            )}

            {tallyUrl ? (
              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.6, marginBottom: '20px' }}>
                  Remplis le formulaire ci-dessous — je t&apos;envoie ton audit personnalisé par email sous <strong>48h</strong>.
                </p>
                <a
                  href={tallyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '16px 32px', borderRadius: '12px', fontSize: '16px', fontWeight: 700, boxShadow: '0 4px 20px rgba(37,99,235,0.35)', marginBottom: '12px' }}
                >
                  📋 Remplir le formulaire d&apos;audit →
                </a>
                <p style={{ fontSize: '12px', color: '#94a3b8' }}>
                  Répond en 5 min · Audit reçu sous 48h par email
                </p>
              </div>
            ) : downloadUrl ? (
              <div style={{ marginBottom: '32px' }}>
                <a
                  href={downloadUrl}
                  download
                  style={{ display: 'inline-block', background: 'linear-gradient(135deg, #d97706, #ea580c)', color: '#fff', textDecoration: 'none', padding: '16px 32px', borderRadius: '12px', fontSize: '16px', fontWeight: 700, boxShadow: '0 4px 20px rgba(217,119,6,0.35)', marginBottom: '12px' }}
                >
                  ⬇️ Télécharger mon pack
                </a>
                <p style={{ fontSize: '12px', color: '#94a3b8' }}>
                  Lien valable 1 heure · Pas de panique, contacte-nous si besoin
                </p>
              </div>
            ) : (
              <div style={{ background: '#fff7ed', border: '1px solid #fde68a', borderRadius: '12px', padding: '20px', marginBottom: '32px' }}>
                <p style={{ fontSize: '14px', color: '#92400e' }}>
                  Ton fichier arrive. Si le lien ne s&apos;affiche pas, envoie un email à <strong>contact@ton-meilleur-saas.fr</strong> avec la référence : <code>{session_id}</code>
                </p>
              </div>
            )}

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p style={{ fontSize: '13px', color: '#64748b' }}>📚 Consulte le README dans le ZIP pour démarrer</p>
              <p style={{ fontSize: '13px', color: '#64748b' }}>✉️ Support : contact@ton-meilleur-saas.fr</p>
            </div>
          </>
        )}

        <Link href="/" style={{ display: 'inline-block', marginTop: '24px', fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}>
          ← Retour au site
        </Link>
      </div>
    </main>
  )
}
