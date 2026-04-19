'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const catInfo: Record<number, { name: string; slug: string; emoji: string; color: string; bg: string }> = {
  1: { name: 'CRM',               slug: 'crm',               emoji: '🤝', color: '#2563eb', bg: '#eff6ff' },
  2: { name: 'Facturation',       slug: 'facturation',       emoji: '💰', color: '#ea580c', bg: '#fff7ed' },
  3: { name: 'Gestion de projet', slug: 'gestion-de-projet', emoji: '📋', color: '#16a34a', bg: '#f0fdf4' },
  4: { name: 'SEO',               slug: 'seo',               emoji: '🔍', color: '#9333ea', bg: '#fdf4ff' },
  5: { name: 'Automatisation',    slug: 'automatisation',    emoji: '⚡', color: '#d97706', bg: '#fffbeb' },
}

const catSlugInfo: Record<string, { name: string; id: number; emoji: string; color: string; bg: string }> = {
  'crm':               { name: 'CRM',               id: 1, emoji: '🤝', color: '#2563eb', bg: '#eff6ff' },
  'facturation':       { name: 'Facturation',       id: 2, emoji: '💰', color: '#ea580c', bg: '#fff7ed' },
  'gestion-de-projet': { name: 'Gestion de projet', id: 3, emoji: '📋', color: '#16a34a', bg: '#f0fdf4' },
  'seo':               { name: 'SEO',               id: 4, emoji: '🔍', color: '#9333ea', bg: '#fdf4ff' },
  'automatisation':    { name: 'Automatisation',    id: 5, emoji: '⚡', color: '#d97706', bg: '#fffbeb' },
}

// Which categories each company type applies to (ordered by relevance)
const typeCategories: Record<string, string[]> = {
  'freelance':             ['crm', 'facturation', 'seo'],
  'tpe':                   ['crm', 'facturation', 'seo'],
  'pme':                   ['crm', 'facturation', 'gestion-de-projet'],
  'startup':               ['crm', 'gestion-de-projet', 'automatisation'],
  'artisan':               ['facturation', 'crm'],
  'professions-liberales': ['facturation', 'crm'],
  'auto-entrepreneur':     ['crm', 'facturation'],
}

const suggestions = [
  { emoji: '🤝', label: 'CRM',            hint: 'HubSpot, Pipedrive...',   query: 'CRM' },
  { emoji: '💰', label: 'Facturation',    hint: 'Pennylane, Tiime...',     query: 'Facturation' },
  { emoji: '🔍', label: 'SEO',            hint: 'Semrush, Ahrefs...',      query: 'SEO' },
  { emoji: '⚡', label: 'Automatisation', hint: 'Make, n8n...',            query: 'Automatisation' },
]

type ResultType = 'categorie' | 'guide' | 'outil'

interface SearchResult {
  type: ResultType
  uid: string
  label: string
  description?: string
  prix?: number
  catId?: number
  href: string
  isExternal?: boolean
}

function getLogoUrl(url: string): string | null {
  try {
    const hostname = new URL(url).hostname.replace('www.', '')
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`
  } catch { return null }
}

export default function SearchModal() {
  const router = useRouter()
  const [open, setOpen]               = useState(false)
  const [query, setQuery]             = useState('')
  const [results, setResults]         = useState<SearchResult[]>([])
  const [loading, setLoading]         = useState(false)
  const [selectedIdx, setSelectedIdx] = useState(-1)
  const inputRef    = useRef<HTMLInputElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setOpen(o => !o) }
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 60)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setQuery(''); setResults([]); setSelectedIdx(-1)
    }
  }, [open])

  const search = useCallback(async (q: string) => {
    if (!q.trim()) { setResults([]); setLoading(false); return }
    setLoading(true)

    const [outilsRes, catsRes, casRes, typesRes] = await Promise.all([
      supabase.from('outils').select('id,nom,description,prix_mensuel,categorie_id,lien_affilie').ilike('nom', `%${q}%`).limit(4),
      supabase.from('categories').select('id,nom,slug').ilike('nom', `%${q}%`).limit(5),
      supabase.from('cas_usage').select('id,label,slug,categorie_id').ilike('label', `%${q}%`).limit(5),
      supabase.from('types_entreprise').select('id,label,slug').ilike('label', `%${q}%`).limit(3),
    ])

    const merged: SearchResult[] = []

    // 1. Categories
    for (const cat of (catsRes.data || [])) {
      const info = catSlugInfo[cat.slug]
      merged.push({
        type: 'categorie',
        uid: `cat-${cat.id}`,
        label: cat.nom,
        catId: info?.id,
        href: `/categorie/${cat.slug}`,
      })
    }

    // 2. Need-based sub-categories (cas_usage)
    for (const cas of (casRes.data || [])) {
      const info = catInfo[cas.categorie_id]
      if (!info) continue
      merged.push({
        type: 'guide',
        uid: `cas-${cas.id}`,
        label: `Meilleur ${info.name} ${cas.label}`,
        catId: cas.categorie_id,
        href: `/meilleur/${info.slug}/${cas.slug}`,
      })
    }

    // 3. Company-type sub-categories (types_entreprise) → one result per relevant category
    for (const type of (typesRes.data || [])) {
      const cats = typeCategories[type.slug] || ['crm']
      for (const catSlug of cats.slice(0, 2)) {
        const info = catSlugInfo[catSlug]
        if (!info) continue
        merged.push({
          type: 'guide',
          uid: `type-${type.id}-${catSlug}`,
          label: `${info.name} pour ${type.label}`,
          catId: info.id,
          href: `/meilleur/${catSlug}/${type.slug}`,
        })
      }
    }

    // 4. Tools
    for (const outil of (outilsRes.data || [])) {
      merged.push({
        type: 'outil',
        uid: `outil-${outil.id}`,
        label: outil.nom,
        description: outil.description,
        prix: outil.prix_mensuel,
        catId: outil.categorie_id,
        href: outil.lien_affilie,
        isExternal: true,
      })
    }

    setResults(merged.slice(0, 10))
    setLoading(false)
  }, [])

  useEffect(() => {
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => search(query), 220)
    return () => clearTimeout(debounceRef.current)
  }, [query, search])

  const navigate = (r: SearchResult) => {
    if (r.isExternal) {
      window.open(r.href, '_blank')
    } else {
      router.push(r.href)
      setOpen(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIdx(i => Math.min(i + 1, results.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSelectedIdx(i => Math.max(i - 1, -1)) }
    if (e.key === 'Enter' && selectedIdx >= 0 && results[selectedIdx]) navigate(results[selectedIdx])
  }

  const hasResults = results.length > 0
  const isEmpty    = query && !loading && !hasResults

  return (
    <>
      <style>{`
        @keyframes searchSpin { to { transform: rotate(360deg) } }
        @keyframes searchFadeIn { from { opacity:0; transform: scale(0.97) translateY(-8px) } to { opacity:1; transform: scale(1) translateY(0) } }
        .search-trigger { display:flex; align-items:center; gap:8px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:7px 14px; cursor:pointer; color:#64748b; font-size:13px; font-weight:500; font-family:'DM Sans',sans-serif; transition:all 0.2s ease; }
        .search-trigger:hover { border-color:#2563eb; color:#2563eb; background:#eff6ff; }
        .search-trigger .search-hint { display:flex; align-items:center; gap:3px; margin-left:4px; }
        .search-result-row { display:flex; align-items:center; gap:14px; padding:11px 20px; cursor:pointer; border-bottom:1px solid #f8fafc; transition:background 0.1s ease; }
        .search-result-row:last-child { border-bottom:none; }
        .search-result-row:hover, .search-result-row.active { background:#f8fafc; }
        .search-cta { display:inline-block; border-radius:8px; padding:5px 11px; text-decoration:none; font-size:12px; font-weight:700; white-space:nowrap; transition:all 0.15s ease; }
        .search-cta:hover { opacity:0.85; transform:translateY(-1px); }
        .search-modal-inner { animation: searchFadeIn 0.18s ease; }
        @media (max-width: 640px) {
          .search-label, .search-hint { display:none !important; }
          .search-trigger { padding:8px 10px; }
        }
      `}</style>

      {/* Trigger */}
      <button className="search-trigger" onClick={() => setOpen(true)} aria-label="Rechercher">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <span className="search-label">Rechercher...</span>
        <span className="search-hint">
          <kbd style={{ background:'#e2e8f0', borderRadius:'4px', padding:'1px 5px', fontSize:'10px', fontWeight:700, color:'#94a3b8', fontFamily:'monospace', lineHeight:1.6 }}>⌘K</kbd>
        </span>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position:'fixed', inset:0, background:'rgba(15,23,42,0.55)', backdropFilter:'blur(6px)', zIndex:9999, display:'flex', alignItems:'flex-start', justifyContent:'center', paddingTop:'72px', paddingLeft:'16px', paddingRight:'16px' }}
        >
          <div
            className="search-modal-inner"
            onClick={e => e.stopPropagation()}
            style={{ width:'100%', maxWidth:'620px', background:'#fff', borderRadius:'20px', boxShadow:'0 32px 100px rgba(0,0,0,0.22)', overflow:'hidden', border:'1px solid #e2e8f0' }}
          >
            {/* Input */}
            <div style={{ display:'flex', alignItems:'center', gap:'12px', padding:'16px 20px', borderBottom: hasResults || isEmpty ? '1px solid #f1f5f9' : 'none' }}>
              {loading
                ? <div style={{ width:'18px', height:'18px', border:'2px solid #e2e8f0', borderTopColor:'#2563eb', borderRadius:'50%', animation:'searchSpin 0.6s linear infinite', flexShrink:0 }} />
                : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}>
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
              }
              <input
                ref={inputRef}
                value={query}
                onChange={e => { setQuery(e.target.value); setSelectedIdx(-1) }}
                onKeyDown={handleKeyDown}
                placeholder="CRM, meilleur SEO gratuit, HubSpot…"
                style={{ flex:1, border:'none', outline:'none', fontSize:'16px', color:'#0f172a', fontFamily:"'DM Sans',sans-serif", background:'transparent', minWidth:0 }}
              />
              <button
                onClick={() => setOpen(false)}
                style={{ background:'#f1f5f9', border:'none', borderRadius:'6px', padding:'4px 8px', cursor:'pointer', color:'#94a3b8', fontSize:'11px', fontWeight:700, letterSpacing:'0.5px', flexShrink:0 }}
              >
                ESC
              </button>
            </div>

            {/* Results */}
            {hasResults && (
              <div style={{ maxHeight:'440px', overflowY:'auto' }}>
                {results.map((r, i) => {
                  const cat = r.catId ? catInfo[r.catId] : null
                  const isActive = selectedIdx === i

                  if (r.type === 'categorie') {
                    return (
                      <div key={r.uid} className={`search-result-row${isActive ? ' active' : ''}`} onMouseEnter={() => setSelectedIdx(i)} onClick={() => navigate(r)}>
                        <div style={{ width:'40px', height:'40px', background: cat?.bg || '#f8fafc', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:'20px', border:`1px solid ${cat?.color || '#e2e8f0'}22` }}>
                          {cat?.emoji || '📦'}
                        </div>
                        <div style={{ flex:1, minWidth:0 }}>
                          <div style={{ display:'flex', alignItems:'center', gap:'7px' }}>
                            <span style={{ fontSize:'14px', fontWeight:700, color:'#0f172a' }}>{r.label}</span>
                            <span style={{ fontSize:'10px', fontWeight:700, padding:'2px 7px', borderRadius:'999px', background:'#f1f5f9', color:'#475569', border:'1px solid #e2e8f0', whiteSpace:'nowrap' }}>
                              Catégorie
                            </span>
                          </div>
                          <p style={{ fontSize:'12px', color:'#94a3b8', margin:'2px 0 0', whiteSpace:'nowrap' }}>Voir tous les comparatifs</p>
                        </div>
                        <span className="search-cta" style={{ background: cat?.color || '#0f172a', color:'#fff' }}>Voir →</span>
                      </div>
                    )
                  }

                  if (r.type === 'guide') {
                    return (
                      <div key={r.uid} className={`search-result-row${isActive ? ' active' : ''}`} onMouseEnter={() => setSelectedIdx(i)} onClick={() => navigate(r)}>
                        <div style={{ width:'40px', height:'40px', background: cat?.bg || '#f5f3ff', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:'18px', border:`1px solid ${cat?.color || '#7c3aed'}22` }}>
                          📄
                        </div>
                        <div style={{ flex:1, minWidth:0 }}>
                          <div style={{ display:'flex', alignItems:'center', gap:'7px', flexWrap:'wrap' }}>
                            <span style={{ fontSize:'14px', fontWeight:700, color:'#0f172a' }}>{r.label}</span>
                            {cat && (
                              <span style={{ fontSize:'10px', fontWeight:700, padding:'2px 7px', borderRadius:'999px', background:cat.bg, color:cat.color, border:`1px solid ${cat.color}33`, whiteSpace:'nowrap' }}>
                                {cat.emoji} {cat.name}
                              </span>
                            )}
                            <span style={{ fontSize:'10px', fontWeight:700, padding:'2px 7px', borderRadius:'999px', background:'#f5f3ff', color:'#7c3aed', border:'1px solid #ddd6fe', whiteSpace:'nowrap' }}>
                              Guide
                            </span>
                          </div>
                          <p style={{ fontSize:'12px', color:'#94a3b8', margin:'2px 0 0', whiteSpace:'nowrap' }}>Comparatif détaillé</p>
                        </div>
                        <span className="search-cta" style={{ background:'#7c3aed', color:'#fff' }}>Lire →</span>
                      </div>
                    )
                  }

                  // outil
                  const logo = getLogoUrl(r.href)
                  const free = r.prix === 0
                  return (
                    <div key={r.uid} className={`search-result-row${isActive ? ' active' : ''}`} onMouseEnter={() => setSelectedIdx(i)} onClick={() => navigate(r)}>
                      <div style={{ width:'40px', height:'40px', background: cat?.bg || '#f8fafc', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, border:`1px solid ${cat?.color || '#e2e8f0'}22` }}>
                        {logo
                          ? <img src={logo} alt={r.label} width={24} height={24} style={{ objectFit:'contain' }} onError={e => { (e.target as HTMLImageElement).style.display='none' }} />
                          : <span style={{ fontSize:'18px' }}>{cat?.emoji || '📦'}</span>
                        }
                      </div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ display:'flex', alignItems:'center', gap:'7px', marginBottom:'3px', flexWrap:'wrap' }}>
                          <span style={{ fontSize:'14px', fontWeight:700, color:'#0f172a' }}>{r.label}</span>
                          {cat && (
                            <span style={{ fontSize:'10px', fontWeight:700, padding:'2px 7px', borderRadius:'999px', background:cat.bg, color:cat.color, border:`1px solid ${cat.color}33`, whiteSpace:'nowrap' }}>
                              {cat.emoji} {cat.name}
                            </span>
                          )}
                          {free && (
                            <span style={{ fontSize:'10px', fontWeight:700, padding:'2px 7px', borderRadius:'999px', background:'#f0fdf4', color:'#16a34a', border:'1px solid #bbf7d0', whiteSpace:'nowrap' }}>
                              Gratuit
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize:'12px', color:'#94a3b8', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', margin:0 }}>
                          {r.description}
                        </p>
                      </div>
                      <div style={{ display:'flex', alignItems:'center', gap:'10px', flexShrink:0 }}>
                        {!free && r.prix !== undefined && <span style={{ fontSize:'13px', fontWeight:700, color:'#0f172a', whiteSpace:'nowrap' }}>{r.prix}€<span style={{ fontSize:'10px', color:'#94a3b8', fontWeight:400 }}>/mois</span></span>}
                        <span className="search-cta" style={{ background: cat?.color || '#0f172a', color:'#fff' }}>Essayer →</span>
                      </div>
                    </div>
                  )
                })}
                <div style={{ padding:'10px 20px', background:'#fafafa', borderTop:'1px solid #f1f5f9', display:'flex', alignItems:'center', gap:'8px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                  <span style={{ fontSize:'11px', color:'#94a3b8' }}>{results.length} résultat{results.length > 1 ? 's' : ''} · <kbd style={{ fontFamily:'monospace', background:'#e2e8f0', padding:'1px 4px', borderRadius:'3px', fontSize:'10px' }}>↑↓</kbd> naviguer · <kbd style={{ fontFamily:'monospace', background:'#e2e8f0', padding:'1px 4px', borderRadius:'3px', fontSize:'10px' }}>↵</kbd> ouvrir</span>
                </div>
              </div>
            )}

            {/* Empty state */}
            {isEmpty && (
              <div style={{ padding:'48px 20px', textAlign:'center' }}>
                <div style={{ fontSize:'36px', marginBottom:'14px' }}>🔍</div>
                <p style={{ fontSize:'15px', fontWeight:700, color:'#0f172a', marginBottom:'6px' }}>Aucun résultat pour « {query} »</p>
                <p style={{ fontSize:'13px', color:'#94a3b8' }}>Essayez : CRM, SEO gratuit, HubSpot, freelance…</p>
              </div>
            )}

            {/* Default: suggestions */}
            {!query && (
              <div style={{ padding:'16px 20px 20px' }}>
                <p style={{ fontSize:'11px', fontWeight:700, color:'#94a3b8', letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'12px' }}>Suggestions</p>
                <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
                  {suggestions.map(s => (
                    <button
                      key={s.label}
                      onClick={() => setQuery(s.query)}
                      style={{ display:'flex', alignItems:'center', gap:'6px', background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:'10px', padding:'8px 14px', cursor:'pointer', fontSize:'12px', color:'#475569', fontFamily:"'DM Sans',sans-serif", transition:'all 0.15s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563eb33'; e.currentTarget.style.background = '#eff6ff' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0';   e.currentTarget.style.background = '#f8fafc' }}
                    >
                      <span>{s.emoji}</span>
                      <span style={{ fontWeight:600 }}>{s.label}</span>
                      <span style={{ color:'#cbd5e1' }}>{s.hint}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
