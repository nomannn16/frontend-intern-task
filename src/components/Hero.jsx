import heroImage from "../assets/hero.png";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-left">
          <h1>
            Navigating the <br />
            digital landscape <br />
            for success
          </h1>

          <p>
            Our digital marketing agency helps businesses grow and succeed online
            through SEO, PPC, social media marketing, and content creation.
          </p>

          <button className="primary-btn">
            Book a consultation
          </button>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="Marketing Illustration" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
