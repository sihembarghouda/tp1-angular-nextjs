
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function ContactDetails() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#635bdb", fontWeight: "bold" }}>
        PARAMÈTRE D&apos;URL
      </p>

      <h1>Détails du contact</h1>

      <p>
        L&apos;identifiant du contact est : <strong>{id}</strong>
      </p>

      <Link href="/contact">Retour aux contacts</Link>
      {" | "}
      <Link href="/">Retour à l&apos;accueil</Link>
    </main>
  );
}
