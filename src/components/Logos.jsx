import dribble from "../assets/dribble.png";
import notion from "../assets/notion.png";
import zoom from "../assets/zoom.png";
import hubspot from "../assets/hubspot.png";
import amazon from "../assets/amazon.png";
import netflix from "../assets/netflix.png";

import "../styles/logos.css";

function Logos() {
  return (
    <section className="logos">
      <img src={amazon} alt="Amazon" />
      <img src={dribble} alt="dribble" />
      <img src={hubspot} alt="Hubspot" />
      <img src={notion} alt="Notion" />
      <img src={netflix} alt="Netflix" />
      <img src={zoom} alt="Zoom" />
    </section>
  );
}

export default Logos;
