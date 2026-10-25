
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "../components/ProductCard";
const products = [
  {
    id: 1,
    name: "Casque Bluetooth",
    category: "Électronique",
    price: 89,
    icon: "🎧",
  },
  {
    id: 2,
    name: "Montre connectée",
    category: "Électronique",
    price: 149,
    icon: "⌚",
  },
  {
    id: 3,
    name: "Sac à dos",
    category: "Accessoires",
    price: 59,
    icon: "🎒",
  },
  {
    id: 4,
    name: "Lunettes de soleil",
    category: "Accessoires",
    price: 35,
    icon: "🕶️",
  },
  {
    id: 5,
    name: "Clavier mécanique",
    category: "Informatique",
    price: 110,
    icon: "⌨️",
  },
  {
    id: 6,
    name: "Souris sans fil",
    category: "Informatique",
    price: 45,
    icon: "🖱️",
  },
];

const categories = [
  "Toutes",
  "Électronique",
  "Accessoires",
  "Informatique",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Toutes");
  const [cart, setCart] = useState<number[]>([]);

  const router = useRouter();

function gotoLogin() {
  router.push("/login");
}

function gotoContact() {
  router.push("/contact");
}
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
      {/* Barre de navigation */}
      <header className="navbar">
        <a className="logo" href="#accueil">
          Shop<span>Now</span>
        </a>

        <nav
          className="main-nav"
          aria-label="Navigation principale"
        >
          <a className="nav-button" href="#accueil">
            Accueil
          </a>

          <a className="nav-button" href="#catalogue">
            Catalogue
          </a>

          <a className="nav-button" href="/products">
  Produit API
</a>

          <a className="nav-button" href="#contact">
            Contact
          </a>

          <a className="nav-button" href="/login">
            Connexion
          </a>
          <a className="nav-button" href="/about">
            À propos
          </a>
          <button className="cart" type="button">
            🛒 Panier ({cart.length})
          </button>
        </nav>
      </header>

      {/* Section d'accueil */}
      <section className="hero" id="accueil">
        <p className="eyebrow">BIENVENUE CHEZ SHOPNOW</p>

        <h1>Découvrez vos produits préférés.</h1>

        <p>
          Une sélection de produits pour simplifier votre quotidien.
        </p>

        <a className="hero-button" href="#catalogue">
          Découvrir le catalogue ↓
        </a>
        <div className="navigation-actions">
  <button
    className="hero-button"
    type="button"
    onClick={gotoLogin}
  >
    Login Page
  </button>

  <button
    className="hero-button"
    type="button"
    onClick={gotoContact}
  >
    Contact Page
  </button>
</div>
      </section>

      {/* Catalogue des produits */}
      <section className="catalogue" id="catalogue">
        <div className="section-heading">
          <div>
            <p className="eyebrow">NOTRE SÉLECTION</p>
            <h2>Nos produits</h2>
          </div>

          <span>{filteredProducts.length} produit(s)</span>
        </div>

        {/* Barre de recherche */}
        <input
          className="search"
          type="search"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Rechercher un produit"
        />

        {/* Filtres par catégorie */}
        <div className="filters">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item ? "filter active" : "filter"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Liste des produits */}
        
<div className="products-grid">
  {filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      name={product.name}
      category={product.category}
      price={product.price}
      icon={product.icon}
      onAdd={() =>
        setCart((previous) => [...previous, product.id])
      }
    />
  ))}
</div>


        {/* Message si aucun produit ne correspond */}
        {filteredProducts.length === 0 && (
          <p className="empty">Aucun produit trouvé.</p>
        )}
      </section>

      {/* Pied de page */}
      <footer id="contact">
        <p>Besoin d&apos;aide ? Contactez notre équipe.</p>

        <p>
          © 2026 ShopNow — Projet pédagogique Full Stack Web
        </p>
      </footer>
    </main>
  );
}
