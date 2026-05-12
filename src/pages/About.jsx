import storeImage from "../assets/images.jpg";

export default function About() {
  return (
    <div className="container">
      <h2>About Us</h2>

      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
          marginTop: "30px",
        }}
      >
        {/* Left Column - Image */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <img
            src={storeImage}
            alt="Our Store"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Right Column - Text Content */}
        <div style={{ flex: "1" }}>
          <section style={{ marginBottom: "30px" }}>
            <h3>Our Mission</h3>
            <p>
              We are committed to providing high-quality products and
              exceptional customer service to make shopping convenient and
              enjoyable for everyone. Our mission is to be your trusted online
              destination for all your shopping needs.
            </p>
          </section>
         
        </div>
      </div>
    </div>
  );
}
