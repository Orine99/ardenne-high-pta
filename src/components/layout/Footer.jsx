/* =====================================================================
   Footer.jsx — navy footer on every page
   Contact details come from src/data/siteSettings.js
   ===================================================================== */
import { Link } from "react-router-dom";
import { SITE_SETTINGS } from "../../data/siteSettings.js";
import { telLink } from "../../utils/helpers.js";
import Icon from "../ui/Icon.jsx";
import SettingsLink from "../ui/SettingsLink.jsx";

export default function Footer() {
  const s = SITE_SETTINGS;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Ardenne High School crest" width="84" height="71" loading="lazy" />
          <p className="footer-motto">With God as Guide, Seek the Best.</p>
          <p>Parents and teachers in partnership, for the good of every Ardenne student.</p>
          <div className="footer-social">
            {/* Only show icons for accounts that are filled in */}
            {s.facebook && <a href={s.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Icon name="facebook" /></a>}
            {s.instagram && <a href={s.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Icon name="instagram" /></a>}
            <SettingsLink kind="whatsapp" aria-label="WhatsApp group"><Icon name="whatsapp" /></SettingsLink>
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About the PTA</Link></li>
            <li><Link to="/#events">Upcoming Events</Link></li>
            <li><Link to="/#calendar">Calendar</Link></li>
            <li><Link to="/#gallery">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3>Get Involved</h3>
          <ul>
            <li><Link to="/donate">Donate</Link></li>
            <li><SettingsLink kind="whatsapp">WhatsApp Group</SettingsLink></li>
            <li><Link to="/#contact">Volunteer</Link></li>
            <li><Link to="/#contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3>PTA Office</h3>
          <ul className="footer-contact">
            {s.phones.map((phone) => (
              <li key={phone}><Icon name="phone" /><a href={telLink(phone)}>{phone}</a></li>
            ))}
            {s.email && <li><Icon name="mail" /><a href={`mailto:${s.email}`}>{s.email}</a></li>}
            <li><Icon name="pin" /><span>{s.address}</span></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {year} Ardenne High School PTA. All rights reserved.</span>
        <span>Deo Duce Quaere Optima</span>
      </div>
    </footer>
  );
}
