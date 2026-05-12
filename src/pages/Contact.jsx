import contactImage from '../assets/images.jpg';

export default function Contact() {
  return (
    <div className="container">
      <h2 style={{ fontSize: '2.5em', marginBottom: '10px', color: '#333' }}>Contact Us</h2>
      <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '40px' }}>We'd love to hear from you! Get in touch with us for any questions, feedback, or support.</p>

      {/* Main Content with Two Columns */}
      <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start', marginTop: '40px', flexWrap: 'wrap' }}>
        
        {/* Left Column - Image and Quick Info */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src={contactImage} 
            alt="Contact Us" 
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.15)', marginBottom: '30px' }}
          />
          
          <div style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '10px', borderLeft: '5px solid #007bff' }}>
            <h3 style={{ color: '#007bff', marginTop: '0' }}>Quick Contact</h3>
            <div style={{ lineHeight: '1.8', color: '#333' }}>
              <p style={{ marginBottom: '12px' }}><strong style={{ color: '#007bff' }}>📧 Email:</strong><br />support@fakestore.com</p>
              <p style={{ marginBottom: '12px' }}><strong style={{ color: '#007bff' }}>📞 Phone:</strong><br />+1 (800) 123-4567</p>
              <p><strong style={{ color: '#007bff' }}>⏰ Response Time:</strong><br />Within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Right Column - Detailed Information and Form */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          
          {/* Contact Information Section */}
          <section style={{ marginBottom: '35px' }}>
            <h3 style={{ color: '#333', borderBottom: '3px solid #007bff', paddingBottom: '10px' }}>📍 Our Location</h3>
            <p style={{ color: '#666', lineHeight: '1.8', marginTop: '15px' }}>
              <strong>FakeStore Headquarters</strong><br />
              123 Shopping Street<br />
              Commerce City, CC 12345<br />
              United States
            </p>
          </section>

          {/* Business Hours */}
          <section style={{ marginBottom: '35px', backgroundColor: '#e7f3ff', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ color: '#007bff', marginTop: '0' }}>🕐 Business Hours</h3>
            <div style={{ color: '#333', lineHeight: '1.9' }}>
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (EST)</p>
              <p><strong>Saturday - Sunday:</strong> 10:00 AM - 4:00 PM (EST)</p>
              <p style={{ color: '#d9534f', marginTop: '10px' }}><strong>Holidays:</strong> Closed</p>
            </div>
          </section>

          {/* Support Channels */}
          <section style={{ marginBottom: '35px' }}>
            <h3 style={{ color: '#333', borderBottom: '3px solid #28a745', paddingBottom: '10px' }}>💬 Support Channels</h3>
            <div style={{ marginTop: '15px', color: '#666' }}>
              <p style={{ marginBottom: '10px' }}><strong>✉️ General Inquiries:</strong> info@fakestore.com</p>
              <p style={{ marginBottom: '10px' }}><strong>📦 Order Support:</strong> orders@fakestore.com</p>
              <p style={{ marginBottom: '10px' }}><strong>🔧 Technical Issues:</strong> tech@fakestore.com</p>
              <p><strong>↩️ Returns & Refunds:</strong> returns@fakestore.com</p>
            </div>
          </section>

          {/* Social Media */}
          <section style={{ marginBottom: '35px' }}>
            <h3 style={{ color: '#333', borderBottom: '3px solid #ffc107', paddingBottom: '10px' }}>Follow Us</h3>
            <div style={{ marginTop: '15px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="#" style={{ textDecoration: 'none', padding: '10px 15px', backgroundColor: '#3b5998', color: 'white', borderRadius: '5px', fontSize: '0.9em' }}>📱 Facebook</a>
              <a href="#" style={{ textDecoration: 'none', padding: '10px 15px', backgroundColor: '#1da1f2', color: 'white', borderRadius: '5px', fontSize: '0.9em' }}>🐦 Twitter</a>
              <a href="#" style={{ textDecoration: 'none', padding: '10px 15px', backgroundColor: '#e1306c', color: 'white', borderRadius: '5px', fontSize: '0.9em' }}>📷 Instagram</a>
              <a href="#" style={{ textDecoration: 'none', padding: '10px 15px', backgroundColor: '#0077b5', color: 'white', borderRadius: '5px', fontSize: '0.9em' }}>💼 LinkedIn</a>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Form Section */}
      <section style={{ marginTop: '60px', backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '12px' }}>
        <h3 style={{ color: '#333', marginTop: '0', fontSize: '1.8em', textAlign: 'center' }}>Send us a Message</h3>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Have a question? Fill out the form below and we'll get back to you as soon as possible.</p>
        
        <form style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Full Name *</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              required
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '2px solid #ddd', 
                borderRadius: '6px',
                fontSize: '1em',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Email Address *</label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              required
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '2px solid #ddd', 
                borderRadius: '6px',
                fontSize: '1em',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Phone Number</label>
            <input 
              type="tel" 
              placeholder="+1 (555) 123-4567" 
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '2px solid #ddd', 
                borderRadius: '6px',
                fontSize: '1em',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Subject *</label>
            <select 
              required
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '2px solid #ddd', 
                borderRadius: '6px',
                fontSize: '1em',
                boxSizing: 'border-box',
                backgroundColor: 'white'
              }}
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="order">Order Support</option>
              <option value="technical">Technical Issue</option>
              <option value="return">Return/Refund</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Message *</label>
            <textarea 
              placeholder="Tell us your message..." 
              rows="6" 
              required
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '2px solid #ddd', 
                borderRadius: '6px',
                fontSize: '1em',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            ></textarea>
          </div>

          <button 
            type="submit" 
            style={{ 
              width: '100%',
              padding: '14px 30px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px', 
              cursor: 'pointer',
              fontSize: '1.05em',
              fontWeight: 'bold',
              transition: 'background-color 0.3s',
              boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            Send Message
          </button>
          
          <p style={{ textAlign: 'center', color: '#999', fontSize: '0.9em', marginTop: '15px' }}>* Required fields</p>
        </form>
      </section>
    </div>
  );
}