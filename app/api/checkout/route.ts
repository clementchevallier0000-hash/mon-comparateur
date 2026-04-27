import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export const runtime = 'nodejs'

const PRODUCTS: Record<string, { priceId: string; description: string }> = {
  'n8n-pack': {
    priceId: process.env.STRIPE_PRICE_N8N!,
    description: 'Pack N8N — 5 Workflows clé en main',
  },
  'n8n-pack-tpe': {
    priceId: process.env.STRIPE_PRICE_N8N!,
    description: 'Pack N8N — 5 Workflows clé en main',
  },
  'audit-saas': {
    priceId: process.env.STRIPE_PRICE_AUDIT!,
    description: 'Audit SaaS personnalisé',
  },
  'rgpd-pack': {
    priceId: process.env.STRIPE_PRICE_RGPD!,
    description: 'Pack RGPD complet pour TPE',
  },
  'fidelisation-pack': {
    priceId: process.env.STRIPE_PRICE_FIDELISATION!,
    description: 'Système de fidélisation client N8N',
  },
  'ai-agents-pack': {
    priceId: process.env.STRIPE_PRICE_AI_AGENTS!,
    description: 'Pack AI Agents N8N',
  },
}

export async function POST(req: NextRequest) {
  try {
    const { product } = await req.json()
    const p = PRODUCTS[product]
    if (!p) return NextResponse.json({ error: 'Produit inconnu' }, { status: 400 })

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: p.priceId, quantity: 1 }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/boutique`,
      metadata: { product },
      payment_intent_data: { description: p.description },
    })
    return NextResponse.json({ url: session.url })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
