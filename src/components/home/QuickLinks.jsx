/* =====================================================================
   QuickLinks.jsx — the 4 cards overlapping the bottom of the hero
   Edit the LINKS list to change the cards.
   ===================================================================== */
import { Link } from "react-router-dom";
import Icon from "../ui/Icon.jsx";
import SettingsLink from "../ui/SettingsLink.jsx";

// variant adds an extra class for a different icon colour
const LINKS = [
  { title: "Join the Group", text: "Get PTA news and reminders on WhatsApp.", icon: "whatsapp", whatsapp: true, variant: "whatsapp" },
  { title: "Volunteer", text: "Lend a hand at Paint Day, fairs and more.", icon: "hands", to: "/#contact" },
  { title: "Calendar", text: "Meetings, school events, exams and fundraisers.", icon: "calendar", to: "/#calendar" },
  { title: "Donate", text: "Support projects that help our students.", icon: "heart", to: "/donate", variant: "donate" }
];

export default function QuickLinks() {
  return (
    <section className="quick-links" aria-label="Quick links">
      <div className="container">
        <div className="card quick-links-grid">
          {LINKS.map((item) => {
            const className = `quick-link ${item.variant ? "quick-link-" + item.variant : ""}`;
            const content = (
              <>
                <span className="quick-link-icon"><Icon name={item.icon} /></span>
                <span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </span>
              </>
            );
            // WhatsApp uses the settings link; the rest are normal page links
            return item.whatsapp ? (
              <SettingsLink key={item.title} kind="whatsapp" className={className}>{content}</SettingsLink>
            ) : (
              <Link key={item.title} to={item.to} className={className}>{content}</Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
