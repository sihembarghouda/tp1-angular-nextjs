
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page introuvable</h1>
      <p>Désolé, cette page nexiste pas.</p>
      <Link href="/">Retour à laccueil</Link>
    </div>
  );
}
