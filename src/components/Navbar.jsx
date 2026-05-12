import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">FakeStore</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <Link to="/cart">🛒 Cart ({cart.length})</Link>
        </li>
      </ul>
    </nav>
  );
}
