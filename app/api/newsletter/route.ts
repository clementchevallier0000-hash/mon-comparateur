import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const PROMO_CODE = 'BIENVENUE10'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const normalizedEmail = email.toLowerCase().trim()

    // Vérifier si déjà inscrit
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('id, confirmed')
      .eq('email', normalizedEmail)
      .single()

    if (existing) {
      // Déjà inscrit — on renvoie quand même le cadeau
      const { data: signedUrl } = await supabase.storage
        .from('ressources')
        .createSignedUrl('guide-stack-saas-tpe.pdf', 3600)

      return NextResponse.json({
        alreadySubscribed: true,
        downloadUrl: signedUrl?.signedUrl || null,
        promoCode: PROMO_CODE,
      })
    }

    // Nouvel inscrit
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email: normalizedEmail,
        source: 'site',
        confirmed: false,
        created_at: new Date().toISOString(),
      })

    if (error) throw error

    // Générer le lien de téléchargement du guide (valable 1h)
    const { data: signedUrl } = await supabase.storage
      .from('ressources')
      .createSignedUrl('guide-stack-saas-tpe.pdf', 3600)

    return NextResponse.json({
      success: true,
      downloadUrl: signedUrl?.signedUrl || null,
      promoCode: PROMO_CODE,
    })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
