import HeroVisual from '@/app/components/HeroVisual'
import AnimatedCounter from '@/app/components/AnimatedCounter'
import MobileMenu from '@/app/components/MobileMenu'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TonMeilleurSaaS — Comparateur de logiciels SaaS pour TPE et PME françaises",
  description: "Comparez les meilleurs logiciels SaaS pour votre entreprise française. CRM, facturation, gestion de projet, SEO et automatisation. Comparatifs indépendants, honnêtes et mis à jour en 2025.",
  alternates: {
    canonical: "https://mon-comparateur-git-main-clementchevallier0000-1477s-projects.vercel.app"
  }
}

export default async function Home() {
  const { data: categories } = await supabase.from('categories').select('*')

  const icons: Record<string, string> = {
    'crm': '🤝', 'facturation': '💰', 'gestion-de-projet': '📋', 'seo': '🔍', 'automatisation': '⚡',
  }
  const colors: Record<string, { bg: string, accent: string, light: string }> = {
    'crm': { bg: '#eff6ff', accent: '#2563eb', light: '#dbeafe' },
    'facturation': { bg: '#fff7ed', accent: '#ea580c', light: '#fed7aa' },
    'gestion-de-projet': { bg: '#f0fdf4', accent: '#16a34a', light: '#bbf7d0' },
    'seo': { bg: '#fdf4ff', accent: '#9333ea', light: '#e9d5ff' },
    'automatisation': { bg: '#fffbeb', accent: '#d97706', light: '#fde68a' },
  }

  const comparatif = [
    { nom: 'HubSpot CRM', categorie: 'CRM', slug: 'crm', prix: 'Gratuit', note: 4.8, emoji: '🤝', points: ['Pipeline visuel', 'Version gratuite', 'Écosystème complet'] },
    { nom: 'Pennylane', categorie: 'Facturation', slug: 'facturation', prix: '26€/mois', note: 4.7, emoji: '💰', points: ['Synchro bancaire', 'Facturation auto', 'Comptabilité intégrée'] },
    { nom: 'Semrush', categorie: 'SEO', slug: 'seo', prix: '129€/mois', note: 4.9, emoji: '🔍', points: ['Base de données mondiale', 'Audit technique', 'Analyse concurrents'] },
    { nom: 'Make', categorie: 'Automatisation', slug: 'automatisation', prix: '9€/mois', note: 4.7, emoji: '⚡', points: ['1000+ intégrations', 'No-code', 'Scénarios visuels'] },
  ]

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#ffffff', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Fraunces:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .cat-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
        .cat-card { transition: all 0.25s ease; }
        .cta-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 20px rgba(37,99,235,0.3); }
        .cta-btn { transition: all 0.2s ease; }
        .comp-card:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.08); border-color: #2563eb !important; }
        .comp-card { transition: all 0.2s ease; cursor: pointer; }
        .method-item { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .method-item:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.08); }
        .content-link { color: #2563eb; text-decoration: none; font-weight: 600; border-bottom: 1px solid #bfdbfe; transition: border-color 0.15s; }
        .content-link:hover { border-color: #2563eb; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.6s ease 0.1s forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.6s ease 0.2s forwards; opacity: 0; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes bgMove { 0% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -20px) scale(1.05); } 66% { transform: translate(-20px, 10px) scale(0.95); } 100% { transform: translate(0, 0) scale(1); } }
        .bg-blob { animation: bgMove 15s ease-in-out infinite; }
        .bg-blob-2 { animation: bgMove 20s ease-in-out infinite reverse; }
        .mobile-menu-btn { display: none; }

        @media (max-width: 768px) {
          .hero-section { padding: 60px 20px 48px !important; }
          .hero-inner { flex-direction: column !important; }
          .hero-text { max-width: 100% !important; }
          .hero-title { font-size: 36px !important; letter-spacing: -1px !important; }
          .hero-visual-wrap { display: none !important; }
          .hero-stats { gap: 20px !important; margin-top: 40px !important; flex-wrap: wrap !important; }
          .hero-stat { min-width: 40% !important; }
          .header-inner { padding: 0 20px !important; }
          .header-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .section-pad { padding: 48px 20px !important; }
          .cat-grid { grid-template-columns: 1fr !important; }
          .comp-grid { grid-template-columns: 1fr 1fr !important; }
          .method-grid { grid-template-columns: 1fr 1fr !important; }
          .faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .footer-inner { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
          .footer-links { flex-wrap: wrap !important; gap: 12px !important; }
          .cta-section { padding: 60px 20px !important; }
          .cta-title { font-size: 32px !important; }
          .section-title { font-size: 28px !important; }
          .content-section { padding: 48px 20px !important; }
          .content-inner { padding: 32px 20px !important; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 28px !important; }
          .method-grid { grid-template-columns: 1fr !important; }
          .comp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Header */}
      <header style={{ background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #f1f5f9', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(12px)' }}>
        <div className="header-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '22px' }}>🚀</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>TonMeilleurSaaS</span>
          </div>
          <nav className="header-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Link href="#categories" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Catégories</Link>
            <Link href="#comparatif" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Comparatif</Link>
            <Link href="#methode" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Notre méthode</Link>
            <span style={{ background: '#f0fdf4', color: '#16a34a', fontSize: '12px', fontWeight: 600, padding: '5px 12px', borderRadius: '999px', border: '1px solid #bbf7d0' }}>
              ✓ 100% indépendant
            </span>
          </nav>
          <div className="mobile-menu-btn" style={{ display: 'none' }}>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-section" style={{ padding: '90px 48px 80px', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-blob" style={{ position: 'absolute', top: '-150px', right: '-150px', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="bg-blob-2" style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(147,51,234,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div className="hero-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px' }}>
            <div className="hero-text" style={{ maxWidth: '580px', flexShrink: 0 }}>
              <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '6px 16px', marginBottom: '28px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <span style={{ width: '7px', height: '7px', background: '#22c55e', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 0 2px rgba(34,197,94,0.2)', animation: 'pulse 2s infinite' }}></span>
                <span style={{ color: '#475569', fontSize: '13px', fontWeight: 500 }}>Mis à jour en 2025 · 50+ outils comparés</span>
              </div>
              <h1 className="fade-up-2 hero-title" style={{ fontFamily: "'Fraunces', serif", fontSize: '62px', fontWeight: 800, color: '#0f172a', lineHeight: 1.05, letterSpacing: '-2px', marginBottom: '24px' }}>
                Trouvez le logiciel<br />
                <em style={{ fontStyle: 'italic', color: '#2563eb' }}>parfait</em> pour votre<br />
                entreprise française.
              </h1>
              <p className="fade-up-3" style={{ fontSize: '19px', color: '#475569', lineHeight: 1.7, marginBottom: '40px', fontWeight: 300, maxWidth: '500px' }}>
                Des comparatifs <strong style={{ fontWeight: 600, color: '#0f172a' }}>indépendants et honnêtes</strong> pour aider les TPE et PME françaises à choisir les bons outils. Zéro publicité, zéro biais.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="#categories" className="cta-btn" style={{ background: '#2563eb', color: '#fff', padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Voir les comparatifs →
                </Link>
                <Link href="#methode" style={{ background: '#fff', color: '#0f172a', padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', fontWeight: 500, border: '1px solid #e2e8f0', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Notre méthode
                </Link>
              </div>
            </div>
            <div className="hero-visual-wrap">
              <HeroVisual />
            </div>
          </div>

          <div className="hero-stats" style={{ display: 'flex', gap: '40px', marginTop: '64px', paddingTop: '40px', borderTop: '1px solid #f1f5f9', flexWrap: 'wrap' }}>
            {[
              { target: 50, suffix: '+', label: 'Logiciels analysés', desc: 'Testés et comparés' },
              { target: 5, suffix: '', label: 'Catégories', desc: 'CRM, facturation, SEO...' },
              { target: 100, suffix: '%', label: 'Indépendant', desc: 'Aucun partenariat rémunéré' },
              { target: 2025, suffix: '', label: 'Mis à jour', desc: 'Données fraîches' },
            ].map((stat, i) => (
              <div key={i} className="hero-stat">
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 800, color: '#0f172a', letterSpacing: '-1px' }}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', marginTop: '2px' }}>{stat.label}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="section-pad" style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Catégories</p>
            <h2 className="section-title" style={{ fontFamily: "'Fraunces', serif", fontSize: '38px', fontWeight: 800, color: '#0f172a', letterSpacing: '-1px', marginBottom: '12px' }}>
              Quel logiciel cherchez-vous ?
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '500px', lineHeight: 1.6 }}>
              Chaque catégorie regroupe nos comparatifs détaillés avec avis, prix et recommandations personnalisées.
            </p>
          </div>
          <div className="cat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
            {categories?.map((cat) => {
              const c = colors[cat.slug] || { bg: '#f8fafc', accent: '#2563eb', light: '#e2e8f0' }
              return (
                <Link href={`/categorie/${cat.slug}`} key={cat.id} style={{ textDecoration: 'none' }}>
                  <div className="cat-card" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '28px', cursor: 'pointer', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0, border: `1px solid ${c.light}` }}>
                        {icons[cat.slug] || '📦'}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a' }}>{cat.nom}</h3>
                          <span style={{ color: c.accent, fontSize: '18px', fontWeight: 300 }}>→</span>
                        </div>
                        <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>{cat.description}</p>
                        <span style={{ display: 'inline-block', background: c.bg, color: c.accent, fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', border: `1px solid ${c.light}` }}>
                          Voir les comparatifs →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparatif rapide */}
      <section id="comparatif" className="section-pad" style={{ padding: '80px 48px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Comparatif rapide</p>
            <h2 className="section-title" style={{ fontFamily: "'Fraunces', serif", fontSize: '38px', fontWeight: 800, color: '#0f172a', letterSpacing: '-1px', marginBottom: '12px' }}>
              Les outils les mieux notés
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '500px', lineHeight: 1.6 }}>
              Notre sélection des solutions les plus plébiscitées par les TPE et PME françaises.
            </p>
          </div>
          <div className="comp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {comparatif.map((outil, i) => (
              <Link key={i} href={`/categorie/${outil.slug}`} style={{ textDecoration: 'none' }}>
                <div className="comp-card" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '24px' }}>{outil.emoji}</span>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{outil.nom}</div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>{outil.categorie}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#f59e0b' }}>{'★'.repeat(Math.floor(outil.note))}</span>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>{outil.note}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                    {outil.points.map((p, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '16px', height: '16px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: '12px', color: '#475569' }}>{p}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid #f1f5f9' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{outil.prix}</span>
                    <span style={{ fontSize: '12px', color: '#2563eb', fontWeight: 600 }}>Voir →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notre méthode */}
      <section id="methode" className="section-pad" style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Notre méthode</p>
            <h2 className="section-title" style={{ fontFamily: "'Fraunces', serif", fontSize: '38px', fontWeight: 800, color: '#0f172a', letterSpacing: '-1px', marginBottom: '12px' }}>
              Comment on compare ?
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '500px', lineHeight: 1.6 }}>
              Chaque outil est évalué selon les mêmes critères objectifs, sans influence commerciale.
            </p>
          </div>
          <div className="method-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🔍', title: 'Analyse approfondie', desc: "Chaque outil est testé pendant plusieurs semaines sur des cas d'usage réels." },
              { icon: '💶', title: 'Transparence des prix', desc: 'Tous les tarifs sont vérifiés et mis à jour régulièrement. Pas de surprise.' },
              { icon: '🎯', title: 'Adapté à votre profil', desc: "Nos recommandations s'adaptent à votre type d'entreprise et vos besoins." },
              { icon: '🤝', title: 'Indépendance totale', desc: 'Aucun éditeur ne nous rémunère pour apparaître en tête de classement.' },
            ].map((item, i) => (
              <div key={i} className="method-item" style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '28px', marginBottom: '14px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ padding: '80px 48px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>FAQ</p>
              <h2 className="section-title" style={{ fontFamily: "'Fraunces', serif", fontSize: '38px', fontWeight: 800, color: '#0f172a', letterSpacing: '-1px', lineHeight: 1.1 }}>
                Questions fréquentes
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { q: 'Comment choisir son logiciel SaaS ?', r: "Définissez d'abord vos besoins précis, votre budget mensuel et le nombre d'utilisateurs. Nos comparatifs vous guident étape par étape selon votre profil." },
                { q: 'Les comparatifs sont-ils vraiment indépendants ?', r: "Oui. TonMeilleurSaaS ne perçoit aucune rémunération des éditeurs pour leur classement. Nos avis sont basés uniquement sur les tests et les retours utilisateurs." },
                { q: 'Les prix affichés sont-ils à jour ?', r: 'Nous mettons à jour les tarifs régulièrement. Vérifiez toujours le site officiel avant de vous abonner car les prix peuvent évoluer.' },
                { q: 'Puis-je suggérer un outil à comparer ?', r: "Absolument. Contactez-nous et nous l'intégrerons dans notre prochaine mise à jour si il correspond à notre sélection." },
              ].map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid #e2e8f0', padding: '20px 0' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>{faq.q}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{faq.r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section contenu SEO avec maillage interne */}
      <section className="content-section" style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="content-inner" style={{ background: '#fff', borderRadius: '24px', padding: '56px', border: '1px solid #e2e8f0', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
              <style>{`
                .seo-content h2 { font-size: 24px; font-weight: 700; color: #0f172a; margin-top: 48px; margin-bottom: 16px; letter-spacing: -0.5px; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9; }
                .seo-content h2:first-child { margin-top: 0; }
                .seo-content h3 { font-size: 17px; font-weight: 700; color: #0f172a; margin-top: 28px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
                .seo-content h3::before { content: ''; display: inline-block; width: 4px; height: 16px; background: #2563eb; border-radius: 2px; flex-shrink: 0; }
                .seo-content p { font-size: 15px; line-height: 1.9; color: #475569; margin-bottom: 16px; }
                .seo-content ul { margin-bottom: 20px; padding-left: 0; list-style: none; }
                .seo-content ul li { font-size: 15px; line-height: 1.8; color: #475569; margin-bottom: 8px; padding-left: 24px; position: relative; }
                .seo-content ul li::before { content: '→'; position: absolute; left: 0; color: #2563eb; font-weight: 600; }
                .seo-content strong { color: #0f172a; font-weight: 600; }
              `}</style>
              <div className="seo-content">
                <h2>Logiciel entreprise : comparez les meilleurs logiciels pour votre société</h2>
                <p>Choisir un <strong>logiciel entreprise</strong> adapté est aujourd&apos;hui un levier stratégique pour la performance, la productivité et la croissance. Que vous soyez PME, startup ou indépendant, les outils numériques permettent d&apos;automatiser les tâches, d&apos;optimiser la gestion et d&apos;améliorer la collaboration interne.</p>
                <p>Mais face à l&apos;explosion des solutions SaaS, comment trouver le bon logiciel professionnel pour votre organisation ? Notre comparateur vous aide à identifier rapidement les meilleurs logiciels entreprise selon votre secteur, vos besoins et votre budget.</p>

                <h2>Pourquoi utiliser un logiciel entreprise aujourd&apos;hui ?</h2>
                <p>Les entreprises modernes ne peuvent plus fonctionner efficacement sans outils numériques adaptés. Un <strong>logiciel de gestion d&apos;entreprise</strong> centralise les informations, automatise les processus et réduit les erreurs humaines.</p>

                <h3>Automatiser les tâches et gagner du temps</h3>
                <p>Un <Link href="/categorie/automatisation" className="content-link">logiciel d&apos;automatisation</Link> permet d&apos;automatiser de nombreuses opérations : facturation, suivi clients, gestion des stocks, planification et reporting. Résultat : vos équipes se concentrent sur des missions à forte valeur ajoutée.</p>

                <h3>Améliorer la collaboration interne</h3>
                <p>Les <Link href="/categorie/gestion-de-projet" className="content-link">outils de gestion de projet</Link> facilitent le partage d&apos;informations entre services. Finis les fichiers dispersés et les emails interminables : tout est centralisé et accessible en temps réel.</p>

                <h3>Sécuriser et structurer les données</h3>
                <p>La donnée est au cœur de la performance. Un logiciel entreprise permet de garantir une meilleure sauvegarde, une traçabilité plus fine, une conformité réglementaire renforcée et des accès mieux contrôlés.</p>

                <h2>Quels sont les principaux types de logiciels entreprise ?</h2>
                <p>Toutes les entreprises n&apos;ont pas les mêmes besoins. Il existe plusieurs catégories de logiciels professionnels, chacune répondant à des objectifs spécifiques selon la taille de l&apos;entreprise et son secteur d&apos;activité.</p>

                <h3>CRM : gérer la relation client</h3>
                <p>Le <Link href="/categorie/crm" className="content-link">meilleur CRM</Link> permet de suivre les prospects, les clients et les opportunités commerciales. Il améliore les performances des équipes de vente, structure le suivi commercial et renforce la satisfaction client.</p>

                <h3>Logiciels de comptabilité et gestion financière</h3>
                <p>Indispensables pour toute entreprise, les <Link href="/categorie/facturation" className="content-link">logiciels de facturation</Link> facilitent la facturation, la gestion des dépenses, les déclarations fiscales et le suivi de trésorerie.</p>

                <h3>SEO : gagner en visibilité</h3>
                <p>Les <Link href="/categorie/seo" className="content-link">outils SEO professionnels</Link> permettent d&apos;analyser votre positionnement, d&apos;identifier des opportunités de mots-clés et de suivre vos performances sur Google.</p>

                <h2>Comment choisir le meilleur logiciel entreprise ?</h2>
                <p>Le choix d&apos;un <strong>logiciel professionnel</strong> doit être stratégique. Une mauvaise décision peut coûter du temps, de l&apos;argent et ralentir la croissance de l&apos;entreprise.</p>
                <ul>
                  <li>Identifier vos besoins réels avant de comparer</li>
                  <li>Vérifier la facilité d&apos;utilisation et l&apos;ergonomie</li>
                  <li>Évaluer l&apos;évolutivité de la solution</li>
                  <li>Considérer le budget global, pas seulement le prix affiché</li>
                </ul>

                <h2>Logiciel entreprise SaaS : les avantages</h2>
                <p>Les solutions SaaS dominent le marché car elles offrent un accès simple depuis n&apos;importe où, des mises à jour automatiques, un coût d&apos;entrée généralement plus faible et un déploiement très rapide. Pour les <Link href="/categorie/automatisation" className="content-link">solutions d&apos;automatisation</Link> notamment, le mode SaaS est devenu la norme.</p>

                <h2>Questions fréquentes sur les logiciels entreprise</h2>

                <h3>Quel est le meilleur logiciel pour une PME ?</h3>
                <p>Il n&apos;existe pas de solution universelle. Le meilleur logiciel dépend du secteur d&apos;activité, du nombre d&apos;employés, du budget et des processus à digitaliser. Un <Link href="/categorie/crm" className="content-link">outil CRM adapté aux PME</Link> sera différent d&apos;un <Link href="/categorie/facturation" className="content-link">logiciel de facturation pour artisans</Link>.</p>

                <h3>Combien coûte un logiciel entreprise ?</h3>
                <p>Les prix varient fortement. Une solution SaaS peut coûter de quelques euros à plusieurs centaines d&apos;euros par utilisateur et par mois. Les <Link href="/categorie/seo" className="content-link">meilleurs outils SEO</Link> coûtent généralement entre 50€ et 150€/mois, tandis que certains <Link href="/categorie/automatisation" className="content-link">logiciels d&apos;automatisation</Link> démarrent sous les 10€/mois.</p>

                <h3>Les logiciels entreprise sont-ils sécurisés ?</h3>
                <p>Les logiciels professionnels modernes intègrent généralement des standards élevés de sécurité : chiffrement, sauvegardes automatiques, authentification forte et conformité avec le RGPD.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ padding: '80px 48px', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <h2 className="cta-title" style={{ fontFamily: "'Fraunces', serif", fontSize: '44px', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', marginBottom: '16px' }}>
            Prêt à trouver votre outil idéal ?
          </h2>
          <p style={{ fontSize: '17px', color: '#94a3b8', marginBottom: '36px', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.6 }}>
            Explorez nos comparatifs et faites le bon choix dès aujourd&apos;hui.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#categories" className="cta-btn" style={{ background: '#fff', color: '#0f172a', padding: '16px 36px', borderRadius: '12px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, display: 'inline-block' }}>
              Voir tous les comparatifs →
            </Link>
            <Link href="#comparatif" className="cta-btn" style={{ background: 'transparent', color: '#fff', padding: '16px 36px', borderRadius: '12px', textDecoration: 'none', fontSize: '16px', fontWeight: 600, display: 'inline-block', border: '1px solid rgba(255,255,255,0.3)' }}>
              Comparatif rapide
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0a0f1a', padding: '40px 48px' }}>
        <div className="footer-inner" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '18px' }}>🚀</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '16px', fontWeight: 800, color: '#fff' }}>TonMeilleurSaaS</span>
          </div>
          <p style={{ color: '#475569', fontSize: '13px' }}>
            © 2025 TonMeilleurSaaS · Comparateur indépendant de logiciels SaaS
          </p>
          <div className="footer-links" style={{ display: 'flex', gap: '24px' }}>
            {categories?.map((cat) => (
              <Link key={cat.id} href={`/categorie/${cat.slug}`} style={{ color: '#475569', fontSize: '13px', textDecoration: 'none' }}>
                {cat.nom}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}