import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name?.trim() || !email?.includes('@') || !message?.trim()) {
      return NextResponse.json({ error: 'Champs invalides' }, { status: 400 })
    }

    const { error } = await supabase.from('contact_messages').insert({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject?.trim() || '(Sans objet)',
      message: message.trim(),
      created_at: new Date().toISOString(),
      read: false,
    })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
