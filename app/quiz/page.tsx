import type { Metadata } from 'next'
import QuizClient from './QuizClient'

export const metadata: Metadata = {
  title: 'Quiz — Quel logiciel SaaS est fait pour vous ? | TonMeilleurSaaS',
  description: 'Répondez à 4 questions et obtenez une recommandation personnalisée du meilleur logiciel SaaS pour votre situation — CRM, facturation, SEO, automatisation.',
  alternates: { canonical: 'https://ton-meilleur-saas.fr/quiz' },
}

export default function QuizPage() {
  return <QuizClient />
}
