
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Police principale du site
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Police secondaire pour certains éléments techniques
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Métadonnées générales du site
export const metadata: Metadata = {
  title: {
    default: "Centre WARADY | Formation professionnelle",
    template: "%s | Centre WARADY",
  },
  description:
    "Centre de formation professionnelle spécialisé en cuisine, pâtisserie, réception, hébergement, restaurant et bar.",
};

// Layout racine de toute l'application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

