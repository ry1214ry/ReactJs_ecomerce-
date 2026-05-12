import storeImage from "../assets/images.jpg";

export default function About() {
  return (
    <div className="container">
      <h2 className="title">About Us</h2>

      <div className="about-layout">
        {/* Left Column - Image */}
        <div className="about-image-col">
          <img src={storeImage} alt="Our Store" />
        </div>

        {/* Right Column - Text Content */}
        <div className="about-text-col">
          <section style={{ marginBottom: "30px" }}>
            <h3>Our Mission</h3>
            <p>
              We are committed to providing high-quality products and exceptional
              customer service to make shopping convenient and enjoyable for everyone.
              Our mission is to be your trusted online destination for all your
              shopping needs.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h3>Why Choose Us?</h3>
            <p>
              With thousands of curated products, fast delivery, and a 30-day
              return policy, FakeStore is where quality meets convenience.
            </p>
          </section>

          <section>
            <h3>Our Values</h3>
            <p>
              Transparency, quality, and customer satisfaction drive everything
              we do. We believe great shopping experiences start with trust.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}