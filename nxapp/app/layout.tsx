
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopNow | Catalogue de produits",
  description: "Découvrez notre sélection de produits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
