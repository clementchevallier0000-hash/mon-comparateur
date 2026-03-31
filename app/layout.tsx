import TopBanner from '@/app/components/TopBanner'
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "TonMeilleurSaaS — Comparateur de logiciels SaaS pour TPE et PME françaises",
    template: "%s | TonMeilleurSaaS"
  },
  description: "Comparez les meilleurs logiciels SaaS pour votre entreprise. CRM, facturation, gestion de projet, SEO et automatisation. Comparatifs indépendants et honnêtes.",
  keywords: ["comparateur logiciel", "meilleur CRM", "logiciel facturation", "SaaS france", "TPE PME"],
  authors: [{ name: "TonMeilleurSaaS" }],
  creator: "TonMeilleurSaaS",
  verification: {
    google: "1p1mubu9UVdh9XEATR4UtjuKIz47s6QRzXbxgbW9IyQ"
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ton-meilleur-saas.fr",
    siteName: "TonMeilleurSaaS",
    title: "TonMeilleurSaaS — Comparateur de logiciels SaaS pour TPE et PME françaises",
    description: "Comparez les meilleurs logiciels SaaS pour votre entreprise. Comparatifs indépendants et honnêtes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TonMeilleurSaaS — Comparateur de logiciels SaaS",
    description: "Comparez les meilleurs logiciels SaaS pour votre entreprise.",
  },
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://ton-meilleur-saas.fr"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HFC34SP8SC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HFC34SP8SC');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}