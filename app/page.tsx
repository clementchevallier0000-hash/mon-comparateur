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

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#ffffff', minHeight: '100vh' }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Fraunces:ital,wght@0,700;0,800;1,700&display=swap" rel="stylesheet" />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .cat-card:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.08); }
        .cat-card { transition: all 0.2s ease; }
        .cta-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 20px rgba(37,99,235,0.3); }
        .cta-btn { transition: all 0.2s ease; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.6s ease 0.1s forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.6s ease 0.2s forwards; opacity: 0; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .hero-visual { animation: float 6s ease-in-out infinite; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero-section { padding: 60px 20px 48px !important; }
          .hero-inner { flex-direction: column !important; }
          .hero-text { max-width: 100% !important; }
          .hero-title { font-size: 38px !important; letter-spacing: -1px !important; }
          .hero-visual-wrap { display: none !important; }
          .hero-stats { gap: 24px !important; margin-top: 40px !important; }
          .header-inner { padding: 0 20px !important; }
          .header-nav { display: none !important; }
          .section-pad { padding: 48px 20px !important; }
          .cat-grid { grid-template-columns: 1fr !important; }
          .method-grid { grid-template-columns: 1fr 1fr !important; }
          .faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .footer-inner { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
          .footer-links { flex-wrap: wrap !important; gap: 12px !important; }
          .cta-section { padding: 60px 20px !important; }
          .cta-title { font-size: 32px !important; }
          .section-title { font-size: 28px !important; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 30px !important; }
          .method-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #f1f5f9', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)' }}>
        <div className="header-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '22px' }}>🚀</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>TonMeilleurSaaS</span>
          </div>
          <nav className="header-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Link href="#categories" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Catégories</Link>
            <Link href="#methode" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>Notre méthode</Link>
            <span style={{ background: '#f0fdf4', color: '#16a34a', fontSize: '12px', fontWeight: 600, padding: '5px 12px', borderRadius: '999px', border: '1px solid #bbf7d0' }}>
              ✓ 100% indépendant
            </span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-section" style={{ padding: '90px 48px 80px', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="hero-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px' }}>

            {/* Texte gauche */}
            <div className="hero-text" style={{ maxWidth: '580px', flexShrink: 0 }}>
              <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '6px 16px', marginBottom: '28px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <span style={{ width: '7px', height: '7px', background: '#22c55e', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 0 2px rgba(34,197,94,0.2)' }}></span>
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

            {/* Image fondue droite */}
            <div className="hero-visual-wrap" style={{ flexShrink: 0, position: 'relative', width: '460px', height: '380px' }}>
              <div className="hero-visual" style={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* Carte principale */}
                <div style={{ position: 'absolute', top: '20px', left: '20px', right: '0', background: '#fff', borderRadius: '20px', padding: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ width: '40px', height: '40px', background: '#eff6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🤝</div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>HubSpot CRM</div>
                      <div style={{ fontSize: '12px', color: '#22c55e', fontWeight: 600 }}>✓ Gratuit</div>
                    </div>
                    <div style={{ marginLeft: 'auto', background: '#2563eb', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px' }}>⭐ #1</div>
                  </div>
                  {[
                    { label: 'Facilité d\'utilisation', val: 95 },
                    { label: 'Rapport qualité/prix', val: 98 },
                    { label: 'Support client', val: 88 },
                  ].map((item, i) => (
                    <div key={i} style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '12px', color: '#64748b' }}>{item.label}</span>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>{item.val}%</span>
                      </div>
                      <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '999px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${item.val}%`, background: 'linear-gradient(90deg, #2563eb, #60a5fa)', borderRadius: '999px' }} />
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                    {['Pipeline', 'Email', 'Analytics', 'Mobile'].map((tag, i) => (
                      <span key={i} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '3px 8px', fontSize: '11px', color: '#64748b', fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Petite carte flottante */}
                <div style={{ position: 'absolute', bottom: '10px', right: '-10px', background: '#fff', borderRadius: '14px', padding: '14px 18px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '20px' }}>💰</span>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>Pennylane</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Facturation · 26€/mois</div>
                  </div>
                </div>

                {/* Badge flottant */}
                <div style={{ position: 'absolute', top: '0', right: '10px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '14px' }}>✓</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#16a34a' }}>50+ outils comparés</span>
                </div>
              </div>

              {/* Fondu sur les bords */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(248,250,252,0) 60%, rgba(248,250,252,0.3) 100%)', pointerEvents: 'none', borderRadius: '20px' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(248,250,252,0) 70%, rgba(255,255,255,0.8) 100%)', pointerEvents: 'none', borderRadius: '20px' }} />
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{ display: 'flex', gap: '40px', marginTop: '64px', paddingTop: '40px', borderTop: '1px solid #f1f5f9', flexWrap: 'wrap' }}>
            {[
              { number: '50+', label: 'Logiciels analysés', desc: 'Testés et comparés' },
              { number: '5', label: 'Catégories', desc: 'CRM, facturation, SEO...' },
              { number: '100%', label: 'Indépendant', desc: 'Aucun partenariat rémunéré' },
              { number: '2025', label: 'Mis à jour', desc: 'Données fraîches' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 800, color: '#0f172a', letterSpacing: '-1px' }}>{stat.number}</div>
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
                  <div className="cat-card" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '28px', cursor: 'pointer' }}>
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

      {/* Notre méthode */}
      <section id="methode" className="section-pad" style={{ padding: '80px 48px', background: '#f8fafc' }}>
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
              <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '28px', marginBottom: '14px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ padding: '80px 48px' }}>
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
                <div key={i} style={{ borderBottom: '1px solid #f1f5f9', padding: '20px 0' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>{faq.q}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{faq.r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ padding: '80px 48px', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="cta-title" style={{ fontFamily: "'Fraunces', serif", fontSize: '44px', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', marginBottom: '16px' }}>
            Prêt à trouver votre outil idéal ?
          </h2>
          <p style={{ fontSize: '17px', color: '#94a3b8', marginBottom: '36px', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.6 }}>
            Explorez nos comparatifs et faites le bon choix dès aujourd&apos;hui.
          </p>
          <Link href="#categories" className="cta-btn" style={{ background: '#fff', color: '#0f172a', padding: '16px 36px', borderRadius: '12px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, display: 'inline-block' }}>
            Voir tous les comparatifs →
          </Link>
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