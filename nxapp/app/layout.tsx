
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
      <head>
        <title>{typeof metadata.title === "string" ? metadata.title : "ShopNow | Catalogue de produits"}</title>
        <meta
          name="description"
          content={typeof metadata.description === "string" ? metadata.description : undefined}
        />
      </head>
      <body>
      
        {children}
      </body>
    </html>
  );
}
