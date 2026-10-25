import Link from "next/link";

export default function Header() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "16px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Link href="/">Accueil</Link>
      <Link href="/login">Connexion</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}