/* =====================================================================
   AboutPage.jsx — the About page ("/about")
   The purpose and support cards are written as lists (arrays) and drawn
   with .map(), so adding a card is just adding one line to a list.
   ===================================================================== */
import "../styles/about.css";
import usePageTitle from "../utils/usePageTitle.js";
import PageBanner from "../components/layout/PageBanner.jsx";
import SectionHead from "../components/ui/SectionHead.jsx";
import Icon from "../components/ui/Icon.jsx";
import TeamGrid from "../components/about/TeamGrid.jsx";
import DocumentList from "../components/about/DocumentList.jsx";

// From the PTA Constitution, Article 2.1 – 2.5
const PURPOSES = [
  { title: "Build a bond", text: "Bring parents, guardians and teaching staff into a closer relationship, encouraging cooperative effort for the benefit of students." },
  { title: "Support our school", text: "Support and encourage the welfare of Ardenne High School." },
  { title: "Keep families informed", text: "Provide a channel of communication between parents/guardians and the school to inform and discuss matters affecting students and the school." },
  { title: "Help solve problems", text: "Assist and cooperate with the school in resolving problems where our help is invited." },
  { title: "Work with other PTAs", text: "Liaise with other Parent-Teacher Associations for the improvement of education and the welfare of teachers and the school community." }
];

const SUPPORT = [
  { icon: "brush", title: "Campus improvement", text: "Our annual Paint Day brings volunteers together to refresh walls, fences and classrooms across the school." },
  { icon: "flask", title: "Science & technology", text: "We celebrate and connect donors, like the alumni who gave $500,000 in science and robotics equipment in 2026." },
  { icon: "hands", title: "Family engagement", text: "Parents' Month, general meetings and our WhatsApp group keep parents and guardians connected to school life." },
  { icon: "heart", title: "Student welfare", text: "Working with the school to support students and families who need a helping hand." }
];

export default function AboutPage() {
  usePageTitle("About the PTA");

  return (
    <>
      <PageBanner variant="about" crumb="About" eyebrow="About the PTA" title="Parents and teachers in partnership">
        For the benefit of every student at Ardenne High School.
      </PageBanner>

      {/* ===== WHO WE ARE ===== */}
      <section className="section">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>A bond between home and school</h2>
            <p>
              The Ardenne High School Parent-Teacher Association (PTA) brings together the parents and guardians
              of our students and the school's teaching staff. Every parent and guardian is part of the PTA family.
            </p>
            <p>
              We work alongside the school's administration to support the welfare of Ardenne High School, keep
              families informed about matters affecting students, and rally our community, from parents and
              teachers to alumni and friends, behind projects that make a real difference.
            </p>
            <p>
              From repainting our campus in royal blue and gold on Paint Day, to celebrating families during
              Parents' Month, to welcoming donations that equip our science labs, the PTA is where home and
              school work as one.
            </p>
          </div>
          <div className="intro-photo">
            <img src="/images/gallery/paint-day-wall-roller.jpg" alt="A parent volunteer repainting a school wall in royal blue" loading="lazy" width="1000" height="739" />
          </div>
        </div>
      </section>

      {/* ===== MISSION (Constitution, Article 2.6) ===== */}
      <section className="section mission">
        <div className="container">
          <span className="eyebrow">Our Mission</span>
          <blockquote>
            Ardenne High School PTA, embodying parents and teachers in partnership, is committed to helping
            Ardenne High School to provide quality education in a Christian environment, by maintaining a vibrant
            forum for cordial, effective communication and collaboration between home and school, thereby helping
            to promote an environment conducive to the development of excellence.
          </blockquote>
          <cite>PTA Constitution, Article 2.6</cite>
        </div>
      </section>

      {/* ===== OUR PURPOSE ===== */}
      <section className="section section-soft">
        <div className="container">
          <SectionHead eyebrow="Our Purpose" title="What the PTA is here to do">
            As set out in Article 2 of our Constitution.
          </SectionHead>
          <div className="purpose-grid">
            {PURPOSES.map((p) => (
              <article className="card purpose-card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE SUPPORT STUDENTS ===== */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our Work" title="How the PTA supports Ardenne students" />
          <div className="support-grid">
            {SUPPORT.map((s) => (
              <article className="card support-card" key={s.title}>
                <div className="support-icon"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXECUTIVE TEAM ===== */}
      <section className="section section-soft" id="executive">
        <div className="container">
          <SectionHead eyebrow="Leadership" title="Meet the PTA Executive">
            The volunteers who lead the work of the PTA on behalf of all parents and guardians.
          </SectionHead>
          <TeamGrid />
        </div>
      </section>

      {/* ===== DOCUMENTS ===== */}
      <section className="section" id="documents">
        <div className="container">
          <SectionHead eyebrow="Transparency" title="PTA Documents">
            Our constitution, meeting minutes, reports and school lists.
          </SectionHead>
          <DocumentList />
        </div>
      </section>
    </>
  );
}
