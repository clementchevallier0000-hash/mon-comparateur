import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://mon-comparateur-git-main-clementchevallier0000-1477s-projects.vercel.app/sitemap.xml',
  }
}