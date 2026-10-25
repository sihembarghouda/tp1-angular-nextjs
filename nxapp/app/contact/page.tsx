
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setConfirmation(
      `Merci ${name} ! Ton message a été validé côté client.`
    );

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="catalogue">
      <p className="eyebrow">SHOPNOW</p>
      <h1>Contactez-nous</h1>
      <p>Une question ? Remplis le formulaire ci-dessous.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "32px auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <label htmlFor="name">Nom complet</label>
        <input
          id="name"
          type="text"
          placeholder="Ton nom"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setConfirmation("");
          }}
          required
          minLength={2}
          style={{ padding: "12px", borderRadius: "8px" }}
        />

        <label htmlFor="contact-email">Adresse e-mail</label>
        <input
          id="contact-email"
          type="email"
          placeholder="exemple@email.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setConfirmation("");
          }}
          required
          style={{ padding: "12px", borderRadius: "8px" }}
        />

        <label htmlFor="message">Ton message</label>
        <textarea
          id="message"
          placeholder="Écris ton message ici..."
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            setConfirmation("");
          }}
          required
          minLength={10}
          rows={5}
          style={{
            padding: "12px",
            borderRadius: "8px",
            resize: "vertical",
          }}
        />

        <button className="add-button" type="submit">
          Envoyer le message
        </button>

        {confirmation && (
          <p role="status" aria-live="polite">
            {confirmation}
          </p>
        )}
      </form>

      <p>
        <Link href="/">← Retour à l&apos;accueil</Link>
      </p>
    </main>
  );
}
