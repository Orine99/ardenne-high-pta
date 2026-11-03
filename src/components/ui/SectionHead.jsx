/* =====================================================================
   SectionHead.jsx — the centred label + title + intro at the top of a section
   Use it like:
     <SectionHead eyebrow="Gallery" title="Moments from our PTA family">
       Optional intro sentence.
     </SectionHead>
   ===================================================================== */

export default function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="section-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
