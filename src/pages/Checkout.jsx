import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Order placed! Thank you ${formData.name}!`);
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-wrapper">
        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="summary-item">
                  <h5>{item.title}</h5>
                  <p>${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))}
              <div className="total">
                <strong>Total: ${total}</strong>
              </div>
            </>
          )}
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Shipping Information</h3>
          
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            value={formData.zipcode}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-checkout">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
