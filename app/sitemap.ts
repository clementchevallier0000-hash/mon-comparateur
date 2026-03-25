import { supabase } from '@/lib/supabase'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ton-meilleur-saas.fr'

  const { data: categories } = await supabase.from('categories').select('slug')
  const { data: cas_usage } = await supabase.from('cas_usage').select('slug, categorie_id, categories(slug)')
  const { data: types } = await supabase.from('types_entreprise').select('slug')

  const categoriesUrls = categories?.map((cat) => ({
    url: `${baseUrl}/categorie/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  })) || []

  const programmatiquesUrls: MetadataRoute.Sitemap = []
  
  if (categories && types) {
    for (const cat of categories) {
      for (const type of types) {
        programmatiquesUrls.push({
          url: `${baseUrl}/meilleur/${cat.slug}/${type.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.9,
        })
      }
    }
  }

  if (cas_usage) {
    for (const cas of cas_usage) {
      const catSlug = (cas.categories as any)?.slug
      if (catSlug) {
        programmatiquesUrls.push({
          url: `${baseUrl}/meilleur/${catSlug}/${cas.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.9,
        })
      }
    }
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...categoriesUrls,
    ...programmatiquesUrls,
  ]
}