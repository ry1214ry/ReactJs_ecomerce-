import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <section 
      className="hero"
      style={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%)",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        padding: "60px 20px"
      }}
    >
      <div className="hero-content" style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "3em", marginBottom: "20px", fontWeight: "bold" }}>
          Welcome to FakeStore
        </h1>
        <p style={{ fontSize: "1.3em", marginBottom: "30px", lineHeight: "1.6" }}>
          Best place to buy amazing products at affordable prices.
        </p>
        <button
          onClick={handleShopNow}
          style={{
            padding: "14px 40px",
            fontSize: "1.1em",
            backgroundColor: "white",
            color: "#1e3c72",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}