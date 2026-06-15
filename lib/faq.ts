export interface FaqItem {
  slug: string
  question: string
  reponse: string  // HTML
  categorie: string
  categorieLabel: string
}

export const FAQ_CATEGORIES: Record<string, string> = {
  'crm':                 'CRM',
  'facturation':         'Facturation',
  'gestion-de-projet':   'Gestion de projet',
  'seo':                 'SEO',
  'automatisation':      'Automatisation',
}

import { FAQ_CRM } from './faq-crm'
import { FAQ_FACTURATION } from './faq-facturation'
import { FAQ_GESTION_PROJET } from './faq-gestion-projet'
import { FAQ_SEO } from './faq-seo'
import { FAQ_AUTOMATISATION } from './faq-automatisation'

export const FAQ_ITEMS: FaqItem[] = [
  ...FAQ_CRM,
  ...FAQ_FACTURATION,
  ...FAQ_GESTION_PROJET,
  ...FAQ_SEO,
  ...FAQ_AUTOMATISATION,
]

export function getFaqByCategorie(categorie: string): FaqItem[] {
  return FAQ_ITEMS.filter(item => item.categorie === categorie)
}

export function getFaqBySlug(categorie: string, slug: string): FaqItem | undefined {
  return FAQ_ITEMS.find(item => item.categorie === categorie && item.slug === slug)
}
