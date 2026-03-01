import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SEOptimus — Comparateur de logiciels SaaS pour TPE et PME françaises",
    template: "%s | SEOptimus"
  },
  description: "Comparez les meilleurs logiciels SaaS pour votre entreprise. CRM, facturation, gestion de projet, SEO et automatisation. Comparatifs indépendants et honnêtes.",
  keywords: ["comparateur logiciel", "meilleur CRM", "logiciel facturation", "SaaS france", "TPE PME"],
  authors: [{ name: "SEOptimus" }],
  creator: "SEOptimus",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mon-comparateur-git-main-clementchevallier0000-1477s-projects.vercel.app",
    siteName: "SEOptimus",
    title: "SEOptimus — Comparateur de logiciels SaaS pour TPE et PME françaises",
    description: "Comparez les meilleurs logiciels SaaS pour votre entreprise. Comparatifs indépendants et honnêtes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEOptimus — Comparateur de logiciels SaaS",
    description: "Comparez les meilleurs logiciels SaaS pour votre entreprise.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mon-comparateur-git-main-clementchevallier0000-1477s-projects.vercel.app"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}