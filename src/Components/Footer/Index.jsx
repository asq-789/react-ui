import React from 'react';

export const Footer = () => {
  const footerStyle = {
    backgroundColor: '#d32f2f',
    color: '#fff',
    padding: '40px 20px',
    marginTop: '30px',
    width: '105%',
    boxSizing: 'border-box',
    overflowX: 'hidden',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px', // Optional max width for centering
    margin: '0 auto',
    boxSizing: 'border-box',
    width: '100%',
  };

  const columnStyle = {
    flex: '1 1 250px',
    minWidth: '200px',
    marginBottom: '20px',
    padding: '0 10px',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '20px',
    marginBottom: '12px',
    borderBottom: '1px solid #fff',
    paddingBottom: '8px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
  };

  const bottomStyle = {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #fff',
    marginTop: '20px',
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <div style={columnStyle}>
          <h4 style={headingStyle}>About Us</h4>
          <p>
            We serve fresh, organic, and delicious food straight from our kitchen to your table.
            Taste the difference with every bite!
          </p>
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

      <style>
        {`
          body {
            margin: 0;
            overflow-x: hidden;
          }

          html, body {
            max-width: 100vw;
            overflow-x: hidden;
          }
        `}
      </style>
    </footer>
  );
};
