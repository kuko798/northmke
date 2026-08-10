import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { activePhase, brand, siteUrl } from "@/lib/config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-campaign",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const title = `${brand.nameWithTm} | ${brand.tagline}`;
const description = activePhase.siteDescription;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${brand.nameWithTm}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: brand.nameWithTm,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${sourceSerif.variable} h-full antialiased`}>
      <body className="relative z-0 min-h-full flex flex-col bg-background font-sans text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="relative z-0 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
