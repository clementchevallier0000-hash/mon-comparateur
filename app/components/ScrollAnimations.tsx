'use client'
import { useEffect } from 'react'

export default function ScrollAnimations() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .scroll-reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      .scroll-reveal.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .scroll-reveal-left {
        opacity: 0;
        transform: translateX(-30px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      .scroll-reveal-left.visible {
        opacity: 1;
        transform: translateX(0);
      }
      .scroll-reveal-right {
        opacity: 0;
        transform: translateX(30px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      .scroll-reveal-right.visible {
        opacity: 1;
        transform: translateX(0);
      }
      .stagger-1 { transition-delay: 0.1s !important; }
      .stagger-2 { transition-delay: 0.2s !important; }
      .stagger-3 { transition-delay: 0.3s !important; }
      .stagger-4 { transition-delay: 0.4s !important; }

      header {
        transition: box-shadow 0.4s ease, background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease !important;
      }
      header.scrolled {
        box-shadow: 0 4px 24px rgba(0,0,0,0.06) !important;
        background: rgba(255,255,255,0.88) !important;
        backdrop-filter: blur(24px) !important;
        border-bottom: 1px solid rgba(37,99,235,0.12) !important;
      }

      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .hero-title em {
        background: linear-gradient(90deg, #2563eb, #7c3aed, #ec4899, #2563eb);
        background-size: 300% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientShift 5s ease infinite;
        font-style: italic;
      }

      .section-title {
        background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #2563eb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }

      .hero-section {
        background: linear-gradient(160deg, #eef2ff 0%, #f8fafc 40%, #fdf4ff 100%) !important;
      }

      .bg-blob {
        background: radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.06) 40%, transparent 70%) !important;
      }
      .bg-blob-2 {
        background: radial-gradient(circle, rgba(236,72,153,0.08) 0%, rgba(147,51,234,0.06) 40%, transparent 70%) !important;
      }

      .cat-card { position: relative; overflow: hidden; }
      .cat-card::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 20px;
        padding: 2px;
        background: linear-gradient(135deg, #2563eb, #7c3aed, #ec4899);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
      }
      .cat-card:hover::before { opacity: 1; }
      .cat-card::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(37,99,235,0.03) 0%, rgba(124,58,237,0.03) 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 20px;
        pointer-events: none;
      }
      .cat-card:hover::after { opacity: 1; }

      .comp-card { position: relative; overflow: hidden; }
      .comp-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #7c3aed, #ec4899);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s ease;
        border-radius: 20px 20px 0 0;
      }
      .comp-card:hover::before { transform: scaleX(1); }

      .method-item { position: relative; overflow: hidden; }
      .method-item::after {
        content: '';
        position: absolute;
        bottom: 0; left: 0; right: 0;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #7c3aed);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
      }
      .method-item:hover::after { transform: scaleX(1); }

      .faq-item {
        transition: all 0.2s ease;
        border-radius: 12px;
        padding: 20px 16px !important;
        margin: 0 -16px;
      }
      .faq-item:hover {
        background: linear-gradient(135deg, #eff6ff 0%, #fdf4ff 100%);
      }

      .cta-btn { position: relative; overflow: hidden; }
      .cta-btn::after {
        content: '';
        position: absolute;
        top: 50%; left: 50%;
        width: 0; height: 0;
        background: rgba(255,255,255,0.15);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.5s ease, height 0.5s ease;
      }
      .cta-btn:hover::after { width: 300px; height: 300px; }

      #comparatif {
        background: linear-gradient(160deg, #f8fafc 0%, #eef2ff 50%, #fdf4ff 100%) !important;
      }

      #methode {
        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%) !important;
      }

      .cta-section {
        background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #312e81 100%) !important;
      }

      .content-link { position: relative; }
      .content-link::after {
        content: '';
        position: absolute;
        bottom: -1px; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, #2563eb, #7c3aed);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.2s ease;
      }
      .content-link:hover::after { transform: scaleX(1); }

      section p[style*="uppercase"] {
        background: linear-gradient(90deg, #2563eb, #7c3aed);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    `
    document.head.appendChild(style)

    // Barre de progression de lecture
    const progressBar = document.createElement('div')
    progressBar.id = 'scroll-progress'
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      width: 0%;
      background: linear-gradient(90deg, #2563eb, #7c3aed, #ec4899);
      z-index: 9999;
      transition: width 0.1s ease;
      pointer-events: none;
    `
    document.body.appendChild(progressBar)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right').forEach(el => {
      observer.observe(el)
    })

    const handleScroll = () => {
      // Effet glassmorphism header
      const header = document.querySelector('header')
      if (header) {
        if (window.scrollY > 20) header.classList.add('scrolled')
        else header.classList.remove('scrolled')
      }

      // Barre de progression
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      progressBar.style.width = `${progress}%`
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      document.head.removeChild(style)
      window.removeEventListener('scroll', handleScroll)
      if (document.body.contains(progressBar)) document.body.removeChild(progressBar)
    }
  }, [])

  return null
}