import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.image} />

      <div className="card-body">
        <h3>{product.title}</h3>
        <p>${product.price}</p>

        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
