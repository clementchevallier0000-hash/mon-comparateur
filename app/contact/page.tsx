import type { Metadata } from 'next'
import SiteHeader from '@/app/components/SiteHeader'
import SiteFooter from '@/app/components/SiteFooter'
import BackToTop from '@/app/components/BackToTop'
import Breadcrumb from '@/app/components/Breadcrumb'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact — TonMeilleurSaaS',
  description: 'Une question, une suggestion d\'outil, une erreur à signaler ? Écrivez à Clément, le fondateur de TonMeilleurSaaS. Réponse sous 48h.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/contact' },
}

const reasons = [
  { emoji: '🔧', title: 'Suggérer un outil', desc: 'Un logiciel SaaS manque dans nos comparatifs ? Signalez-le.' },
  { emoji: '✏️', title: 'Signaler une erreur', desc: 'Prix incorrect, fiche obsolète, information trompeuse.' },
  { emoji: '💬', title: 'Poser une question', desc: 'Un doute sur un comparatif ou une recommandation.' },
  { emoji: '🤝', title: 'Partenariat', desc: 'Proposition d\'affiliation ou de collaboration éditoriale.' },
]

export default function ContactPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <SiteHeader />

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '12px 24px 0' }}>
        <Breadcrumb crumbs={[{ label: 'Contact' }]} />
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1e40af 100%)', padding: '52px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
            Contact
          </p>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px,5vw,44px)', fontWeight: 900, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '16px' }}>
            Une question ? Écrivez-moi.
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
            Je suis seul derrière TonMeilleurSaaS. Je lis tous les messages et réponds en général sous 48h.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '48px 24px 80px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '32px', alignItems: 'start' }}>

        {/* Formulaire */}
        <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '36px' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '24px' }}>
            Envoyer un message
          </h2>
          <ContactForm />
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Email direct */}
          <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Email direct
            </p>
            <a
              href="mailto:contact@ton-meilleur-saas.fr"
              style={{ fontSize: '14px', fontWeight: 700, color: '#2563eb', textDecoration: 'none', wordBreak: 'break-all' }}
            >
              contact@ton-meilleur-saas.fr
            </a>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '8px' }}>
              Réponse sous 48h en semaine
            </p>
          </div>

          {/* Pourquoi écrire */}
          <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Pour quoi écrire ?
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {reasons.map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>{r.emoji}</span>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>{r.title}</p>
                    <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div style={{ background: 'linear-gradient(135deg, #fff7ed, #fffbeb)', border: '1px solid #fed7aa', borderRadius: '14px', padding: '18px 20px' }}>
            <p style={{ fontSize: '13px', color: '#92400e', lineHeight: 1.65 }}>
              <strong>Note :</strong> Je ne propose pas de conseil personnalisé payant ni d&apos;audit SaaS. Pour des questions très spécifiques, la page{' '}
              <a href="/a-propos" style={{ color: '#d97706', fontWeight: 600, textDecoration: 'none' }}>À propos</a>{' '}
              explique comment je travaille.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <SiteFooter />
      <BackToTop />
    </main>
  )
}
