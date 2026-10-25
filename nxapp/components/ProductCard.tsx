
type ProductCardProps = {
  name: string;
  category: string;
  price: number;
  icon: string;
  onAdd: () => void;
};

export default function ProductCard({
  name,
  category,
  price,
  icon,
  onAdd,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image">{icon}</div>

      <div className="product-info">
        <span className="product-category">{category}</span>

        <h3>{name}</h3>

        <div className="product-bottom">
          <strong>{price.toFixed(2)} DT</strong>

          <button
            className="add-button"
            type="button"
            onClick={onAdd}
          >
            + Ajouter
          </button>
        </div>
      </div>
    </article>
  );
}
