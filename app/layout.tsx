import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TonMeilleurSaas — Comparateur de logiciels SaaS pour TPE et PME françaises",
    template: "%s | TonMeilleurSaas"
  },
  description: "Comparez les meilleurs logiciels SaaS pour votre entreprise. CRM, facturation, gestion de projet, SEO et automatisation. Comparatifs indépendants et honnêtes.",
  keywords: ["comparateur logiciel", "meilleur CRM", "logiciel facturation", "SaaS france", "TPE PME"],
  authors: [{ name: "TonMeilleurSaas" }],
  creator: "TonMeilleurSaas",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ton-meilleur-saas.fr",
    siteName: "TonMeilleurSaas",
    title: "TonMeilleurSaas — Comparateur de logiciels SaaS pour TPE et PME françaises",
    description: "Comparez les meilleurs logiciels SaaS pour votre entreprise. Comparatifs indépendants et honnêtes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TonMeilleurSaas — Comparateur de logiciels SaaS",
    description: "Comparez les meilleurs logiciels SaaS pour votre entreprise.",
  },
  robots: {
    index: true,
    follow: true,
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
      <body>
        {children}
      </body>
    </html>
  );
}