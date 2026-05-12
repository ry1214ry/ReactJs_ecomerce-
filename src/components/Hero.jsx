import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" style={{
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%)",
    }}>
      <div className="hero-content">
        <h1>Welcome to FakeStore</h1>
        <p>Best place to buy amazing products at affordable prices.</p>
        <button
          onClick={() => navigate("/products")}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}