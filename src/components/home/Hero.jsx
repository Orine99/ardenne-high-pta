/* =====================================================================
   Hero.jsx — the big welcome photo at the top of the Home page
   The background photo is set in src/styles/home.css (.hero)
   ===================================================================== */
import { Link } from "react-router-dom";
import Icon from "../ui/Icon.jsx";
import SettingsLink from "../ui/SettingsLink.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="eyebrow">Ardenne High School PTA</span>
          <h1>Home and school, <em>seeking the best</em> together.</h1>
          <p className="hero-lead">
            We are the parents, guardians and teachers of Ardenne High, working side by side so every
            student can learn, grow and thrive in a caring, Christian environment.
          </p>
          <div className="hero-actions">
            <SettingsLink kind="whatsapp" className="btn btn-whatsapp">
              <Icon name="whatsapp" /> Join the WhatsApp Group
            </SettingsLink>
            <Link className="btn btn-gold" to="/donate"><Icon name="heart" /> Donate</Link>
            <Link className="btn btn-outline-light" to="/#events">See Upcoming Events</Link>
          </div>
          <div className="hero-motto">
            <img src="/images/logo.png" alt="" width="40" height="34" />
            <span><strong>Deo Duce Quaere Optima</strong>With God as Guide, Seek the Best.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
