import { useState, lazy, Suspense } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const QRCode = lazy(() => import("qrcode.react"));

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
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [qrValue, setQrValue] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Create QR code data from order information
    const orderData = {
      name: formData.name,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      zipcode: formData.zipcode,
      total: total,
      items: cart.length,
      timestamp: new Date().toISOString(),
    };

    // Convert order data to JSON string for QR code
    const qrData = JSON.stringify(orderData);
    setQrValue(qrData);
    setOrderPlaced(true);
    alert(`Order placed! Thank you ${formData.name}!`);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownloadQR = () => {
    const element = document.getElementById("qr-code");
    const link = document.createElement("a");
    link.href = element.toDataURL("image/png");
    link.download = `order-${formData.name}-${Date.now()}.png`;
    link.click();
  };

  if (orderPlaced) {
    return (
      <div className="checkout-container">
        <h2>Order Confirmation</h2>
        <div className="order-confirmation">
          <h3>✓ Order Placed Successfully!</h3>
          <p>Thank you for your order, <strong>{formData.name}</strong>!</p>
          
          <div className="qr-code-section">
            <h4>Scan QR Code to View Order Details</h4>
            <Suspense fallback={<p>Loading QR Code...</p>}>
              <QRCode 
                id="qr-code"
                value={qrValue} 
                size={256} 
                level="H" 
                includeMargin={true}
              />
            </Suspense>
            <button onClick={handleDownloadQR} className="btn-download">
              Download QR Code
            </button>
          </div>

          <div className="order-details">
            <h4>Shipping Information</h4>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>City:</strong> {formData.city}</p>
            <p><strong>Zip Code:</strong> {formData.zipcode}</p>
            <p><strong>Total:</strong> ${total}</p>
            <p><strong>Items:</strong> {cart.length}</p>
          </div>

          <button onClick={() => navigate("/")} className="btn-home">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

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
