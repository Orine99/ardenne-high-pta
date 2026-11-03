/* =====================================================================
   NoticeBanner.jsx — yellow strip for urgent notices (Home page only)
   Edit the text in src/data/siteSettings.js → notice
   ===================================================================== */
import { Link } from "react-router-dom";
import { SITE_SETTINGS } from "../../data/siteSettings.js";

export default function NoticeBanner() {
  const notice = SITE_SETTINGS.notice;
  if (!notice || !notice.show) return null; // nothing to show

  return (
    <div className="notice-banner" role="status">
      <span>{notice.text}</span>
      {notice.linkUrl && <Link to={notice.linkUrl}>{notice.linkText || "Learn more"} &rarr;</Link>}
    </div>
  );
}
