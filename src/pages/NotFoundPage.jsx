/* =====================================================================
   NotFoundPage.jsx — shown when an address doesn't exist (e.g. /oops)
   ===================================================================== */
import { Link } from "react-router-dom";
import usePageTitle from "../utils/usePageTitle.js";
import SectionHead from "../components/ui/SectionHead.jsx";

export default function NotFoundPage() {
  usePageTitle("Page not found");

  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="404" title="We couldn't find that page">
          The link may be old or mistyped.
        </SectionHead>
        <p className="not-found-actions">
          <Link className="btn btn-blue" to="/">Back to Home</Link>
        </p>
      </div>
    </section>
  );
}
