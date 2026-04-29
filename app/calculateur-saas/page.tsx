import type { Metadata } from 'next'
import CalculateurClient from './CalculateurClient'

export const metadata: Metadata = {
  title: 'Calculateur budget SaaS — Détectez vos doublons et optimisez vos abonnements',
  description: 'Calculez en 30 secondes votre dépense SaaS mensuelle, détectez les doublons et optimisez votre stack. Outil gratuit, 65+ logiciels reconnus automatiquement.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/calculateur-saas' },
  openGraph: {
    title: 'Calculateur budget SaaS gratuit — Combien dépensez-vous en logiciels ?',
    description: 'Entrez vos abonnements SaaS et obtenez votre score de rentabilité, les doublons détectés et des recommandations personnalisées.',
    url: 'https://ton-meilleur-saas.fr/calculateur-saas',
    type: 'website',
  },
}

export default function CalculateurPage() {
  return <CalculateurClient />
}
