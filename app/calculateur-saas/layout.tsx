import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculateur SaaS — Combien dépensez-vous en abonnements ? | TonMeilleurSaaS',
  description: 'Calculez en 30 secondes votre dépense mensuelle en SaaS, détectez les doublons et découvrez vos économies potentielles. Outil gratuit pour TPE.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/calculateur-saas' },
  openGraph: {
    title: 'Calculateur rentabilité SaaS — Gratuit',
    description: 'Entrez vos abonnements SaaS et obtenez votre score de rentabilité, les doublons et vos économies potentielles.',
    url: 'https://ton-meilleur-saas.fr/calculateur-saas',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
