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

      .cat-card { position: relative; overflow: hidden; }
      .cat-card::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(37,99,235,0.03) 0%, transparent 100%);
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
        background: linear-gradient(90deg, #2563eb, #60a5fa);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
        border-radius: 20px 20px 0 0;
      }
      .comp-card:hover::before { transform: scaleX(1); }

      .faq-item {
        transition: all 0.2s ease;
        border-radius: 12px;
        padding: 20px 16px !important;
        margin: 0 -16px;
      }
      .faq-item:hover {
        background: #f8fafc;
      }

      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      .badge-shine {
        background: linear-gradient(90deg, #f0fdf4 0%, #dcfce7 50%, #f0fdf4 100%);
        background-size: 200% auto;
        animation: shimmer 3s linear infinite;
      }

      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .hero-title em {
        background: linear-gradient(90deg, #2563eb, #7c3aed, #2563eb);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientShift 4s ease infinite;
      }

      .cta-btn {
        position: relative;
        overflow: hidden;
      }
      .cta-btn::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255,255,255,0.15);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.5s ease, height 0.5s ease;
      }
      .cta-btn:hover::after {
        width: 300px;
        height: 300px;
      }

      .method-item {
        position: relative;
        overflow: hidden;
      }
      .method-item::before {
        content: '';
        position: absolute;
        bottom: 0; left: 0; right: 0;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #60a5fa);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
      }
      .method-item:hover::before { transform: scaleX(1); }

      .content-link {
        position: relative;
      }
      .content-link::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 2px;
        background: #2563eb;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.2s ease;
      }
      .content-link:hover::after { transform: scaleX(1); }
    `
    document.head.appendChild(style)

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

    return () => {
      observer.disconnect()
      document.head.removeChild(style)
    }
  }, [])

  return null
}