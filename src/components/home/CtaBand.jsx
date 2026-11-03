/* =====================================================================
   CtaBand.jsx — gold "Never miss a PTA update" band
   ===================================================================== */
import { Link } from "react-router-dom";
import Icon from "../ui/Icon.jsx";
import SettingsLink from "../ui/SettingsLink.jsx";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>Never miss a PTA update</h2>
          <p>Join the Ardenne High School PTA WhatsApp group for meeting reminders, event news and urgent notices.</p>
        </div>
        <div className="cta-actions">
          <SettingsLink kind="whatsapp" className="btn btn-whatsapp"><Icon name="whatsapp" /> Join on WhatsApp</SettingsLink>
          <Link className="btn btn-blue" to="/donate">Support the PTA</Link>
        </div>
      </div>
    </section>
  );
}
