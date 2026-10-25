
"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { Product } from "../../../types/product";

function ProductDetailsContent() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setError("");
      setProduct(null);

      try {
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Produit introuvable");
        }

        const data: Product = await response.json();
        setProduct(data);
      } catch {
        setError("Impossible de charger ce produit.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  return (
    <main className="catalogue">
      <p className="eyebrow">SHOPNOW</p>
      <h1>Détails du produit</h1>

      {loading && <p>Chargement du produit...</p>}

      {error && <p role="alert">{error}</p>}

      {product && !loading && !error && (
        <article className="product-card">
          <div className="product-image">
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "contain",
              }}
            />
          </div>

          <div className="product-info">
            <span className="product-category">
              {product.category}
            </span>

            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <strong>{product.price.toFixed(2)} $</strong>
            <p>Identifiant : {product.id}</p>
          </div>
        </article>
      )}

      <p style={{ marginTop: "24px" }}>
        <a href="/products">← Retour au catalogue</a>
      </p>
    </main>
  );
}

export default function ProductDetailsPage() {
  return (
    <Suspense fallback={<main className="catalogue"><p>Chargement de la page...</p></main>}>
      <ProductDetailsContent />
    </Suspense>
  );
}
