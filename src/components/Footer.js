import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '2rem 1rem', textAlign: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <h3>ShopEasy</h3>
        <p>Your one-stop shop for everything you need!</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
        <div>
          <h4>Customer Service</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/help" style={{ color: '#fff', textDecoration: 'none' }}>Help Center</a></li>
            <li><a href="/returns" style={{ color: '#fff', textDecoration: 'none' }}>Returns</a></li>
            <li><a href="/shipping" style={{ color: '#fff', textDecoration: 'none' }}>Shipping Info</a></li>
            <li><a href="/faq" style={{ color: '#fff', textDecoration: 'none' }}>FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>About Us</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>Our Story</a></li>
            <li><a href="/careers" style={{ color: '#fff', textDecoration: 'none' }}>Careers</a></li>
            <li><a href="/press" style={{ color: '#fff', textDecoration: 'none' }}>Press</a></li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1rem' }}>
            <li><a href="https://facebook.com" style={{ color: '#fff', textDecoration: 'none' }}>Facebook</a></li>
            <li><a href="https://instagram.com" style={{ color: '#fff', textDecoration: 'none' }}>Instagram</a></li>
            <li><a href="https://twitter.com" style={{ color: '#fff', textDecoration: 'none' }}>Twitter</a></li>
          </ul>
        </div>
      </div>
      <div style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
        <p>© 2024 ShopEasy. All Rights Reserved.</p>
        <p><a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a> | <a href="/terms-of-service" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;