'use client'
import { useEffect, useState } from 'react'

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const header = document.querySelector('header')
    if (!header) return
    if (scrolled) {
      header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.08)'
      header.style.background = 'rgba(255,255,255,0.85)'
      header.style.backdropFilter = 'blur(20px)'
      header.style.borderBottom = '1px solid rgba(37,99,235,0.15)'
      header.style.height = '56px'
    } else {
      header.style.boxShadow = 'none'
      header.style.background = 'rgba(255,255,255,0.95)'
      header.style.backdropFilter = 'blur(12px)'
      header.style.borderBottom = '1px solid #f1f5f9'
      header.style.height = '68px'
    }
  }, [scrolled])

  return null
}