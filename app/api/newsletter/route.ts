import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

const PROMO_CODE = 'BIENVENUE10'

async function sendWelcomeEmail(email: string, downloadUrl: string | null, alreadySubscribed: boolean) {
  await resend.emails.send({
    from: 'TonMeilleurSaaS <onboarding@resend.dev>',
    to: email,
    subject: alreadySubscribed
      ? '📥 Votre guide Stack SaaS TPE — comme demandé'
      : '🎁 Votre guide offert — Stack SaaS idéale pour TPE',
    html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px;">

    <div style="background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

      <!-- Header -->
      <div style="background:linear-gradient(135deg,#0f172a,#1e3a5f);padding:32px;text-align:center;">
        <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:0 0 8px;letter-spacing:1px;text-transform:uppercase;">TonMeilleurSaaS</p>
        <h1 style="color:#fff;font-size:24px;font-weight:800;margin:0;line-height:1.3;">
          ${alreadySubscribed ? 'Revoilà votre guide 👋' : 'Bienvenue ! Voici votre cadeau 🎁'}
        </h1>
      </div>

      <!-- Body -->
      <div style="padding:32px;">
        <p style="color:#475569;font-size:15px;line-height:1.7;margin:0 0 24px;">
          ${alreadySubscribed
            ? 'Vous avez demandé à recevoir à nouveau votre guide. Le voici !'
            : 'Merci pour votre inscription ! Vous recevez en exclusivité notre guide <strong style="color:#0f172a;">La stack SaaS idéale pour votre TPE/PME</strong> — 12 pages de recommandations concrètes, sans jargon.'}
        </p>

        ${downloadUrl ? `
        <!-- Download Button -->
        <div style="text-align:center;margin:0 0 28px;">
          <a href="${downloadUrl}" style="display:inline-block;background:linear-gradient(135deg,#0f172a,#1e3a5f);color:#fff;text-decoration:none;padding:16px 32px;border-radius:12px;font-size:15px;font-weight:700;">
            📥 Télécharger le guide PDF
          </a>
          <p style="color:#94a3b8;font-size:12px;margin:10px 0 0;">Lien valable 1 heure · Répondez à cet email si besoin</p>
        </div>
        ` : ''}

        <!-- Guide Summary -->
        <div style="background:#f8fafc;border-radius:12px;padding:20px;margin-bottom:24px;">
          <p style="font-size:13px;font-weight:700;color:#0f172a;margin:0 0 12px;">📖 Ce que contient le guide :</p>
          <ul style="margin:0;padding:0;list-style:none;">
            ${[
              'Les meilleurs CRM gratuits et payants pour TPE',
              'Facturation & comptabilité : Indy, Tiime, Pennylane comparés',
              '3 stacks complètes : 0€ / 80€ / 200€ par mois',
              'Make vs n8n — lequel choisir pour automatiser',
              'Checklist de migration sans perdre de données',
            ].map(item => `
            <li style="display:flex;align-items:flex-start;gap:8px;padding:5px 0;font-size:13px;color:#475569;">
              <span style="color:#2563eb;font-weight:700;flex-shrink:0;">→</span>${item}
            </li>`).join('')}
          </ul>
        </div>

        <!-- Promo Code -->
        <div style="border:2px dashed #fbbf24;border-radius:12px;padding:16px;text-align:center;background:#fefce8;margin-bottom:24px;">
          <p style="font-size:12px;font-weight:600;color:#92400e;margin:0 0 6px;">🎁 Votre code promo (bientôt disponible)</p>
          <p style="font-family:monospace;font-size:24px;font-weight:800;color:#0f172a;letter-spacing:4px;margin:0;">${PROMO_CODE}</p>
        </div>

        <p style="color:#94a3b8;font-size:12px;line-height:1.6;margin:0;">
          Vous recevrez nos prochaines analyses et comparatifs d'outils SaaS directement dans votre boîte mail.<br>
          <a href="https://ton-meilleur-saas.fr" style="color:#2563eb;">ton-meilleur-saas.fr</a> · Désabonnement en 1 clic sur demande.
        </p>
      </div>
    </div>
  </div>
</body>
</html>`,
  })
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const normalizedEmail = email.toLowerCase().trim()

    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('id, confirmed')
      .eq('email', normalizedEmail)
      .single()

    const { data: signedUrl } = await supabase.storage
      .from('ressources')
      .createSignedUrl('guide-stack-saas-tpe.pdf', 3600)

    const downloadUrl = signedUrl?.signedUrl || null

    if (existing) {
      await sendWelcomeEmail(normalizedEmail, downloadUrl, true)
      return NextResponse.json({ alreadySubscribed: true, downloadUrl, promoCode: PROMO_CODE })
    }

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email: normalizedEmail,
        source: 'site',
        confirmed: false,
        created_at: new Date().toISOString(),
      })

    if (error) throw error

    await sendWelcomeEmail(normalizedEmail, downloadUrl, false)

    return NextResponse.json({ success: true, downloadUrl, promoCode: PROMO_CODE })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : (typeof e === 'object' && e !== null && 'message' in e) ? String((e as { message: unknown }).message) : String(e)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
