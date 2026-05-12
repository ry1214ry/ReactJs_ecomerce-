import contactImage from "../assets/images.jpg";

export default function Contact() {
  return (
    <div className="container">
      <h2 className="title">Contact Us</h2>
      <p style={{ textAlign: "center", fontSize: "1.05em", color: "#666", marginBottom: "10px", marginTop: "-10px" }}>
        We'd love to hear from you!
      </p>

      {/* Two-column layout */}
      <div className="contact-layout">

        {/* Left Column */}
        <div className="contact-left">
          <img
            src={contactImage}
            alt="Contact Us"
            style={{ width: "100%", borderRadius: "12px", boxShadow: "0 8px 16px rgba(0,0,0,0.15)", marginBottom: "24px" }}
          />

          <div style={{ backgroundColor: "#f8f9fa", padding: "clamp(16px, 3vw, 25px)", borderRadius: "10px", borderLeft: "5px solid #007bff" }}>
            <h3 style={{ color: "#007bff", marginTop: 0, marginBottom: "12px" }}>Quick Contact</h3>
            <div style={{ lineHeight: "1.8", color: "#333", fontSize: "clamp(13px, 1.5vw, 15px)" }}>
              <p style={{ marginBottom: "12px" }}><strong style={{ color: "#007bff" }}>📧 Email:</strong><br />support@fakestore.com</p>
              <p style={{ marginBottom: "12px" }}><strong style={{ color: "#007bff" }}>📞 Phone:</strong><br />+1 (800) 123-4567</p>
              <p><strong style={{ color: "#007bff" }}>⏰ Response Time:</strong><br />Within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-right">

          <section style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "#333", borderBottom: "3px solid #007bff", paddingBottom: "10px" }}>📍 Our Location</h3>
            <p style={{ color: "#666", lineHeight: "1.8", marginTop: "15px" }}>
              <strong>FakeStore Headquarters</strong><br />
              123 Shopping Street<br />
              Commerce City, CC 12345<br />
              United States
            </p>
          </section>

          <section style={{ marginBottom: "30px", backgroundColor: "#e7f3ff", padding: "20px", borderRadius: "8px" }}>
            <h3 style={{ color: "#007bff", marginTop: 0 }}>🕐 Business Hours</h3>
            <div style={{ color: "#333", lineHeight: "1.9", fontSize: "14px" }}>
              <p><strong>Monday – Friday:</strong> 9:00 AM – 6:00 PM (EST)</p>
              <p><strong>Saturday – Sunday:</strong> 10:00 AM – 4:00 PM (EST)</p>
              <p style={{ color: "#d9534f", marginTop: "8px" }}><strong>Holidays:</strong> Closed</p>
            </div>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "#333", borderBottom: "3px solid #28a745", paddingBottom: "10px" }}>💬 Support Channels</h3>
            <div style={{ marginTop: "15px", color: "#666", lineHeight: "1.9", fontSize: "14px" }}>
              <p><strong>✉️ General:</strong> info@fakestore.com</p>
              <p><strong>📦 Orders:</strong> orders@fakestore.com</p>
              <p><strong>🔧 Technical:</strong> tech@fakestore.com</p>
              <p><strong>↩️ Returns:</strong> returns@fakestore.com</p>
            </div>
          </section>

          <section>
            <h3 style={{ color: "#333", borderBottom: "3px solid #ffc107", paddingBottom: "10px" }}>Follow Us</h3>
            <div style={{ marginTop: "15px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[
                { label: "📱 Facebook", bg: "#3b5998" },
                { label: "🐦 Twitter", bg: "#1da1f2" },
                { label: "📷 Instagram", bg: "#e1306c" },
                { label: "💼 LinkedIn", bg: "#0077b5" },
              ].map(({ label, bg }) => (
                <a
                  key={label}
                  href="#"
                  style={{
                    textDecoration: "none",
                    padding: "9px 14px",
                    backgroundColor: bg,
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "0.88em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <h3 style={{ color: "#333", marginTop: 0, fontSize: "1.6em", textAlign: "center" }}>Send us a Message</h3>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "28px" }}>
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form style={{ maxWidth: "600px", margin: "0 auto" }}>
          {[
            { label: "Full Name *", type: "text", placeholder: "John Doe" },
            { label: "Email Address *", type: "email", placeholder: "john@example.com" },
            { label: "Phone Number", type: "tel", placeholder: "+1 (555) 123-4567" },
          ].map(({ label, type, placeholder }) => (
            <div key={label} style={{ marginBottom: "18px" }}>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold", color: "#333", fontSize: "14px" }}>
                {label}
              </label>
              <input type={type} placeholder={placeholder} required={label.includes("*")} />
            </div>
          ))}

          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold", color: "#333", fontSize: "14px" }}>Subject *</label>
            <select required style={{ backgroundColor: "white" }}>
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="order">Order Support</option>
              <option value="technical">Technical Issue</option>
              <option value="return">Return/Refund</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold", color: "#333", fontSize: "14px" }}>Message *</label>
            <textarea placeholder="Tell us your message..." rows="5" required style={{ resize: "vertical" }} />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1em",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0,123,255,0.3)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
          >
            Send Message
          </button>
          <p style={{ textAlign: "center", color: "#999", fontSize: "0.85em", marginTop: "12px" }}>* Required fields</p>
        </form>
      </div>
    </div>
  );
}