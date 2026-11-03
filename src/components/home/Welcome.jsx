/* =====================================================================
   Welcome.jsx — welcome message from the PTA
   Draft text — the PTA President may want to replace it with her own.
   ===================================================================== */
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section className="section" id="welcome">
      <div className="container welcome-grid">
        <div className="welcome-photo">
          <img
            src="/images/gallery/parents-month-breakfast.jpg"
            alt="Students serving breakfast to parents at the school gate during Parents' Month"
            loading="lazy" width="1200" height="617"
          />
        </div>
        <div className="welcome-text">
          <span className="eyebrow">Welcome</span>
          <h2>A warm welcome to the Ardenne family</h2>
          <p>
            Whether your child is just starting first form or getting ready for sixth-form exams, you are part
            of the Ardenne High School PTA. Our association brings parents, guardians and teachers together
            so that home and school can speak with one voice for our children.
          </p>
          <p>
            Through Paint Day, Parents' Month, fundraisers and quiet support behind the scenes, the PTA helps
            keep our campus bright, our programmes strong and our students cared for. Every hour you give, every
            meeting you attend and every dollar you donate makes a difference.
          </p>
          <p className="welcome-signoff">— The Ardenne High School PTA Executive</p>
          <Link className="btn btn-blue" to="/about">Learn about the PTA</Link>
        </div>
      </div>
    </section>
  );
}
