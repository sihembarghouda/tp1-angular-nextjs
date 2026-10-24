
"use client";

import { useState } from "react";

const products = [
  { id: 1, name: "Casque Bluetooth", category: "Électronique", price: 89, icon: "🎧" },
  { id: 2, name: "Montre connectée", category: "Électronique", price: 149, icon: "⌚" },
  { id: 3, name: "Sac à dos", category: "Accessoires", price: 59, icon: "🎒" },
  { id: 4, name: "Lunettes de soleil", category: "Accessoires", price: 35, icon: "🕶️" },
  { id: 5, name: "Clavier mécanique", category: "Informatique", price: 110, icon: "⌨️" },
  { id: 6, name: "Souris sans fil", category: "Informatique", price: 45, icon: "🖱️" },
];

const categories = ["Toutes", "Électronique", "Accessoires", "Informatique"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Toutes");
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "Toutes" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <header className="navbar">
        <a className="logo" href="#">Shop<span>Now</span></a>
        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#catalogue">Catalogue</a>
        </nav>
        <div className="cart">🛒 Panier ({cart.length})</div>
      </header>

      <section className="hero" id="accueil">
        <p className="eyebrow">BIENVENUE CHEZ SHOPNOW</p>
        <h1>Découvrez vos produits préférés.</h1>
        <p>Une sélection de produits pour simplifier votre quotidien.</p>
        <a className="hero-button" href="#catalogue">
          Découvrir le catalogue ↓
        </a>
      </section>

      <section className="catalogue" id="catalogue">
        <div className="section-heading">
          <div>
            <p className="eyebrow">NOTRE SÉLECTION</p>
            <h2>Nos produits</h2>
          </div>
          <span>{filteredProducts.length} produit(s)</span>
        </div>

        <input
          className="search"
          type="search"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Rechercher un produit"
        />

        <div className="filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "filter active" : "filter"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">{product.icon}</div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="product-bottom">
                  <strong>{product.price.toFixed(2)} DT</strong>
                  <button
                    className="add-button"
                    onClick={() => setCart((previous) => [...previous, product.id])}
                  >
                    + Ajouter
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="empty">Aucun produit trouvé.</p>
        )}
      </section>

      <footer>
        <p>© 2026 ShopNow — Projet pédagogique Full Stack Web</p>
      </footer>
    </main>
  );
}
