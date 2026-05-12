import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>FakeStore</Link>
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link to="/cart">🛒 Cart ({cart.length})</Link></li>
        </ul>

        {/* Hamburger button */}
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#products" onClick={closeMenu}>Products</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li><Link to="/cart" onClick={closeMenu}>🛒 Cart ({cart.length})</Link></li>
        </ul>
      </div>
    </>
  );
}