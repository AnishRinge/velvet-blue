import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteUrl } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070707",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Velvet Blue — Cinematic songs for quiet feelings",
    template: "%s — Velvet Blue",
  },
  description: "Songs about the things we all feel but rarely say.",
  applicationName: "Velvet Blue",
  keywords: ["Velvet Blue", "music", "cinematic pop", "independent artist"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Velvet Blue",
    title: "Velvet Blue",
    description: "Songs about the things we all feel but rarely say.",
    images: [{ url: "/covers/nobody-knows.jpg", width: 1024, height: 1024, alt: "Velvet Blue — Nobody Knows" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velvet Blue",
    description: "Songs about the things we all feel but rarely say.",
    images: ["/covers/nobody-knows.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Velvet Blue",
    url: siteUrl,
    genre: ["Alternative", "Cinematic Pop"],
    description: "Cinematic songs about nostalgia, loneliness, hope, memories, growing up, and the quiet emotions people carry every day.",
  };

  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
