import seoImage from "../assets/service-seo.png";
import ppcImage from "../assets/serviceppc.png";  // check exact name

import "../styles/services.css";

function Services() {
  return (
    <section className="services">
      <h2 className="section-title">Services</h2>

      <div className="services-grid">

        <div className="service-card">
          <div className="service-content">
            <div>
              <h3>Search engine optimization</h3>
              <span>Learn more →</span>
            </div>
            <img src={seoImage} alt="SEO" />
          </div>
        </div>

        <div className="service-card green">
          <div className="service-content">
            <div>
              <h3>Pay-per-click advertising</h3>
              <span>Learn more →</span>
            </div>
            <img src={ppcImage} alt="PPC" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
