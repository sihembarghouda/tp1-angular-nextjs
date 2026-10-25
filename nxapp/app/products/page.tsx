
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Product, ProductsResponse } from "../../types/product";

const LIMIT = 12;

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const skip = (page - 1) * LIMIT;
  const totalPages = Math.ceil(total / LIMIT);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/products?limit=${LIMIT}&skip=${skip}`
)

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data: ProductsResponse = await response.json();

        setProducts(data.products);
        setTotal(data.total);
      } catch {
        setError("Impossible de charger les produits. Vérifie ta connexion.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [skip]);

  return (
    <main className="catalogue">
      <p className="eyebrow">BOUTIQUE SHOPNOW</p>
      <h1>Catalogue des produits</h1>
      <p>Produits chargés depuis une API externe.</p>

      {loading && <p>Chargement des produits...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && (
        <>
          <p>
            Page {page} sur {totalPages} — {total} produits au total
          </p>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "180px",
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

                  <div className="product-bottom">
                    <strong>{product.price.toFixed(2)} $</strong>
                    <a href={`/products/${product.id}`}>
                      Voir détails
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              marginTop: "32px",
            }}
          >
            <button
              className="add-button"
              type="button"
              onClick={() => setPage((current) => current - 1)}
              disabled={page === 1}
            >
              ← Précédent
            </button>

            <span>
              {page} / {totalPages}
            </span>

            <button
              className="add-button"
              type="button"
              onClick={() => setPage((current) => current + 1)}
              disabled={page >= totalPages}
            >
              Suivant →
            </button>
          </div>
        </>
      )}

      <p style={{ marginTop: "24px" }}>
        <Link href="/">← Retour à ShopNow</Link>
      </p>
    </main>
  );
}
