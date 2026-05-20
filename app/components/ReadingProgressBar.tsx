'use client'
import { useEffect, useState } from 'react'

export default function ReadingProgressBar({ color = '#2563eb' }: { color?: string }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '3px', zIndex: 9999, background: '#f1f5f9', pointerEvents: 'none' }}>
      <div style={{ height: '100%', background: `linear-gradient(90deg, ${color}, #7c3aed)`, width: `${progress}%`, transition: 'width 0.08s linear' }} />
    </div>
  )
}
