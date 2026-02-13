import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>★ Positivus</h2>

        <div className="footer-links">
          <a>About us</a>
          <a>Services</a>
          <a>Use Cases</a>
          <a>Pricing</a>
          <a>Blog</a>
        </div>
      </div>

      <div className="footer-contact">
        <p>Email: info@positivus.com</p>
        <p>Phone: 555-567-8901</p>
      </div>

      <p className="copyright">
        © 2023 Positivus. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
