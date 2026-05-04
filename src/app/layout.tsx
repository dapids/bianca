import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piccerella mia - Una poesia per Bianca",
  description: "Una toccante poesia napoletana celebrando la nascita della piccola Bianca. Scopri questa composizione poetica piena d'amore e speranza.",
  keywords: "poesia, bianca, nascita, amore, napoletana, famiglia",
  authors: [{ name: "Papa" }],
  creator: "Papa",
  metadataBase: new URL("https://bianca.davidsorrentino.com"),
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://bianca.davidsorrentino.com",
    siteName: "Piccerella mia",
    title: "Piccerella mia - Una poesia per Bianca",
    description: "Una toccante poesia napoletana celebrando la nascita della piccola Bianca",
    images: [
      {
        url: "https://bianca.davidsorrentino.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Piccerella mia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piccerella mia - Una poesia per Bianca",
    description: "Una toccante poesia napoletana celebrando la nascita della piccola Bianca",
    images: ["https://bianca.davidsorrentino.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
}
