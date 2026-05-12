import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
          <Link to="/">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ${total}</h3>
            <button
              className="btn-checkout"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
            <Link to="/">Continue Shopping</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
