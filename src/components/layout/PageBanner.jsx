/* =====================================================================
   PageBanner.jsx — the blue title strip at the top of inner pages
   Use it like:
     <PageBanner variant="about" crumb="About" eyebrow="About the PTA" title="...">
       Intro text
     </PageBanner>
   "variant" picks the background photo (.banner-about in layout.css).
   ===================================================================== */
import { Link } from "react-router-dom";

export default function PageBanner({ variant, crumb, eyebrow, title, children, actions }) {
  return (
    <section className={`page-banner banner-${variant}`}>
      <div className="container">
        <p className="breadcrumb"><Link to="/">Home</Link> / {crumb}</p>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
        {actions && <p className="banner-actions">{actions}</p>}
      </div>
    </section>
  );
}
