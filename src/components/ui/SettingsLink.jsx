/* =====================================================================
   SettingsLink.jsx — a link whose address comes from siteSettings.js
   Use it like:
     <SettingsLink kind="whatsapp" className="btn btn-whatsapp">Join</SettingsLink>
     <SettingsLink kind="paypal">Donate with PayPal</SettingsLink>

   If the link hasn't been set up yet (still "REPLACE-ME"), it points to
   the contact form instead, so visitors never land on a broken page.
   ===================================================================== */
import { Link } from "react-router-dom";
import { SITE_SETTINGS } from "../../data/siteSettings.js";
import { isPlaceholder } from "../../utils/helpers.js";

const LINKS = {
  whatsapp: SITE_SETTINGS.whatsappGroupLink,
  paypal: SITE_SETTINGS.paypalDonateLink
};

export default function SettingsLink({ kind, children, ...rest }) {
  const url = LINKS[kind];

  if (isPlaceholder(url)) {
    return (
      <Link to="/#contact" title="Link coming soon" {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
