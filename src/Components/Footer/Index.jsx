import React from 'react';

export const Footer = () => {
  const footerStyle = {
    backgroundColor: '#d32f2f', // red
    color: '#fff',
    padding: '40px 30px',
    marginTop: '30px',
    width: '100%'
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '100%', // Full width
    margin: '0 auto'
  };

  const columnStyle = {
    flex: '1 1 300px', // Wider columns
    marginBottom: '20px',
    padding: '0 15px'
  };

  const headingStyle = {
    fontSize: '20px',
    marginBottom: '12px',
    borderBottom: '1px solid #fff',
    paddingBottom: '8px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px'
  };

  const bottomStyle = {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #fff',
    marginTop: '20px',
    fontSize: '14px'
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <div style={columnStyle}>
          <h4 style={headingStyle}>About Us</h4>
          <p>We serve fresh, organic, and delicious food straight from our kitchen to your table. Taste the difference with every bite!</p>
        </div>

        <div style={columnStyle}>
          <h4 style={headingStyle}>Quick Links</h4>
          <a href="#" style={linkStyle}>Home</a>
          <a href="#" style={linkStyle}>Menu</a>
          <a href="#" style={linkStyle}>Contact</a>
          <a href="#" style={linkStyle}>Order Now</a>
        </div>

        <div style={columnStyle}>
          <h4 style={headingStyle}>Opening Hours</h4>
          <p>Mon - Fri: 10:00 AM - 10:00 PM</p>
          <p>Sat - Sun: 11:00 AM - 11:30 PM</p>
        </div>

        <div style={columnStyle}>
          <h4 style={headingStyle}>Contact Us</h4>
          <p>📍 123 Foodie St, Flavor Town</p>
          <p>📞 +92 300 1234567</p>
          <p>📧 support@foodie.com</p>
        </div>
      </div>

      <div style={bottomStyle}>
        © 2025 Foodie Delight. All rights reserved.
      </div>
    </footer>
  );
};
