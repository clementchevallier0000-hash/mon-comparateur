const AFFILIATE_DOMAIN_MAP: Record<string, string> = {
  'get.capsulenow.io': 'capsulecrm.com',
  'try.folk.app': 'folk.app',
  'link.freebe.me': 'freebe.fr',
  'n8n.partnerlinks.io': 'n8n.io',
  'try.monday.com': 'monday.com',
  'aff.trypipedrive.com': 'pipedrive.com',
  'lb.affilae.com': 'tiime.fr',
  'go.zoho.com': 'zoho.com',
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
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

export function getClearbitLogoUrl(lienAffilie: string): string | null {
  const domain = getRealDomain(lienAffilie)
  if (!domain) return null
  return `https://logo.clearbit.com/${domain}`
}
