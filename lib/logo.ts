const CUSTOM_LOGO_URLS: Record<string, string> = {
  'freebe.fr': 'https://jaeqvfkajubfijqayrrh.supabase.co/storage/v1/object/sign/ressources/logos/freebe.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yODFjNWQxZS1iYjc0LTRkM2MtOTdmZi0yY2U5MDk0MmU2NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNzb3VyY2VzL2xvZ29zL2ZyZWViZS5wbmciLCJpYXQiOjE3Nzg1NzkzODMsImV4cCI6MjA5MzkzOTM4M30.ErI3j1aodvf1_-0rmOt4lM9pVVTGMr0tyiCKRjvDaDU',
  'brevo.com': 'https://jaeqvfkajubfijqayrrh.supabase.co/storage/v1/object/sign/ressources/logos/brevo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yODFjNWQxZS1iYjc0LTRkM2MtOTdmZi0yY2U5MDk0MmU2NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNzb3VyY2VzL2xvZ29zL2JyZXZvLnBuZyIsImlhdCI6MTc3ODU3OTM4MywiZXhwIjoyMDkzOTM5MzgzfQ.tLRxdzEvFWoZ21BE0Ea7WmUQukAP7kGvDuKOwplisQw',
}

const AFFILIATE_DOMAIN_MAP: Record<string, string> = {
  'get.capsulenow.io':        'capsulecrm.com',
  'try.folk.app':             'folk.app',
  'link.freebe.me':           'freebe.fr',
  'n8n.partnerlinks.io':      'n8n.io',
  'try.monday.com':           'monday.com',
  'aff.trypipedrive.com':     'pipedrive.com',
  'lb.affilae.com':           'tiime.fr',
  'go.zoho.com':              'zoho.com',
  // liens affiliés mis à jour
  'get.brevo.com':            'brevo.com',
  'try.activecampaign.com':   'activecampaign.com',
  'www.yuccanlead.com':       'henrri.com',
  'similarweb.partnerlinks.io': 'similarweb.com',
  'app.semjuice.com':         'semjuice.com',
}

export function getRealDomain(lienAffilie: string): string | null {
  try {
    const hostname = new URL(lienAffilie).hostname.replace('www.', '')
    return AFFILIATE_DOMAIN_MAP[hostname] ?? hostname
  } catch {
    return null
  }
}

export function getLogoUrl(lienAffilie: string, size: number = 64): string | null {
  const domain = getRealDomain(lienAffilie)
  if (!domain) return null
  if (CUSTOM_LOGO_URLS[domain]) return CUSTOM_LOGO_URLS[domain]
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

export function getClearbitLogoUrl(lienAffilie: string): string | null {
  const domain = getRealDomain(lienAffilie)
  if (!domain) return null
  if (CUSTOM_LOGO_URLS[domain]) return CUSTOM_LOGO_URLS[domain]
  return `https://logo.clearbit.com/${domain}`
}
