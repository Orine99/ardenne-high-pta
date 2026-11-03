/* =====================================================================
   TopBar.jsx — thin navy strip at the very top (phones + WhatsApp)
   ===================================================================== */
import { SITE_SETTINGS } from "../../data/siteSettings.js";
import { telLink } from "../../utils/helpers.js";
import Icon from "../ui/Icon.jsx";
import SettingsLink from "../ui/SettingsLink.jsx";

export default function TopBar() {
  const [phone1, phone2] = SITE_SETTINGS.phones;

  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-group">
          <a className="topbar-item" href={telLink(phone1)}>
            <Icon name="phone" /> PTA Office: {phone1}
          </a>
          {phone2 && (
            <a className="topbar-item topbar-phone-2" href={telLink(phone2)}>{phone2}</a>
          )}
        </div>
        <div className="topbar-group">
          <SettingsLink kind="whatsapp" className="topbar-item">
            <Icon name="whatsapp" /> Join our WhatsApp group
          </SettingsLink>
        </div>
      </div>
    </div>
  );
}
