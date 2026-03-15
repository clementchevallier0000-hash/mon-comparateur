'use client'

export default function LogoImg({ src, alt }: { src: string | null, alt: string }) {
  if (!src) return <span>📦</span>
  return (
    <img
      src={src}
      alt={alt}
      width={32}
      height={32}
      style={{ objectFit: 'contain' }}
      onError={(e) => { (e.target as HTMLImageElement).parentElement!.innerHTML = '📦' }}
    />
  )
}