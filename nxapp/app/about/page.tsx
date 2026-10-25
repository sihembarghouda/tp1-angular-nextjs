
import Link from "next/link";

export default function About() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <h1>À propos de ShopNow</h1>

      <p>
        ShopNow est une boutique en ligne créée dans le cadre
        d&apos;un projet pédagogique Full Stack Web.
      </p>

      <p>
        Notre objectif est de proposer une expérience simple
        pour découvrir et rechercher des produits.
      </p>

      <Link href="/">← Retour à l&apos;accueil</Link>
    </main>
  );
}
