import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">★ Positivus</h2>

      <ul className="nav-links">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <button className="quote-btn">Request a quote</button>
    </nav>
  );
}

export default Navbar;
