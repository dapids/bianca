import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piccerella mia",
  description: "A poem I wrote for the birth of my daughter Bianca.",
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
