
"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!email.trim() || !password) {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    setMessage(
      `Le formulaire est valide pour l'adresse ${email}.`
    );
  }

  return (
    <main className="catalogue">
      <p className="eyebrow">ESPACE CLIENT</p>
      <h1>Connexion</h1>
      <p>Remplis le formulaire pour tester la validation.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "450px",
          margin: "32px auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <label htmlFor="email">Adresse e-mail</label>
        <input
          id="email"
          type="email"
          placeholder="exemple@email.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setMessage("");
          }}
          required
          style={{ padding: "12px", borderRadius: "8px" }}
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          placeholder="Au moins 6 caractères"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setMessage("");
          }}
          minLength={6}
          required
          style={{ padding: "12px", borderRadius: "8px" }}
        />

        <button className="add-button" type="submit">
          Se connecter
        </button>

        {message && (
          <p role="status" aria-live="polite">
            {message}
          </p>
        )}
      </form>

      <p>
        <Link href="/">← Retour à l&apos;accueil</Link>
      </p>
    </main>
  );
}
