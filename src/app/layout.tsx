import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piccerella mia",
  description: "Una poesia che ho scritto per celebrare la nascita della mia piccola Bianca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
