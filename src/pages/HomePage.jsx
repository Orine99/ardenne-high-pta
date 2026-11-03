/* =====================================================================
   HomePage.jsx — the Home page ("/")
   Read top to bottom, this file IS the page outline. Each <Thing /> is
   a component in src/components/. To move a section, move its line.
   ===================================================================== */
import { Link } from "react-router-dom";
import "../styles/home.css";
import usePageTitle from "../utils/usePageTitle.js";
import { SITE_SETTINGS } from "../data/siteSettings.js";
import { telLink } from "../utils/helpers.js";

import Hero from "../components/home/Hero.jsx";
import QuickLinks from "../components/home/QuickLinks.jsx";
import Welcome from "../components/home/Welcome.jsx";
import Stats from "../components/home/Stats.jsx";
import NewsList from "../components/home/NewsList.jsx";
import CtaBand from "../components/home/CtaBand.jsx";
import UpcomingEvents from "../components/events/UpcomingEvents.jsx";
import Calendar from "../components/events/Calendar.jsx";
import Gallery from "../components/gallery/Gallery.jsx";
import ContactForm from "../components/contact/ContactForm.jsx";
import SectionHead from "../components/ui/SectionHead.jsx";
import SettingsLink from "../components/ui/SettingsLink.jsx";
import Icon from "../components/ui/Icon.jsx";

export default function HomePage() {
  usePageTitle("Home and School, Seeking the Best Together");

  return (
    <>
      <Hero />
      <QuickLinks />
      <Welcome />
      <Stats />

      {/* ===== UPCOMING EVENTS + NEWS ===== */}
      <section className="section section-soft" id="events">
        <div className="container events-news-grid">
          <div>
            <div className="column-head">
              <div>
                <span className="eyebrow">What's on</span>
                <h2>Upcoming Events</h2>
              </div>
              <Link to="/#calendar">Full calendar &rarr;</Link>
            </div>
            <UpcomingEvents limit={3} />
          </div>
          <div id="news">
            <div className="column-head">
              <div>
                <span className="eyebrow">PTA News</span>
                <h2>News &amp; Announcements</h2>
              </div>
            </div>
            <NewsList limit={3} />
          </div>
        </div>
      </section>

      {/* ===== CALENDAR ===== */}
      <section className="section" id="calendar">
        <div className="container">
          <SectionHead eyebrow="PTA Calendar" title="Plan ahead with the Ardenne calendar">
            PTA meetings, school events, exams, fundraisers and volunteer days, all in one place. Tap a date to see what's happening.
          </SectionHead>
          <Calendar />
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="section section-soft" id="gallery">
        <div className="container">
          <SectionHead eyebrow="Gallery" title="Moments from our PTA family">
            Scroll sideways to see more. Tap any photo to enlarge it.
          </SectionHead>
          <Gallery />
        </div>
      </section>

      <CtaBand />

      {/* ===== CONTACT ===== */}
      <section className="section" id="contact">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Get in touch</span>
            <h2>Send a message to the PTA</h2>
            <p>Have a question, a suggestion, or want to volunteer? Choose who you'd like to reach and we'll get back to you.</p>
            <ul>
              <li>
                <span className="contact-icon"><Icon name="phone" /></span>
                <span>
                  <strong>PTA Office</strong>
                  {SITE_SETTINGS.phones.map((p) => (
                    <a key={p} href={telLink(p)} className="contact-phone">{p}</a>
                  ))}
                </span>
              </li>
              <li>
                <span className="contact-icon"><Icon name="whatsapp" /></span>
                <span><strong>WhatsApp Group</strong><SettingsLink kind="whatsapp">Join the parents' group</SettingsLink></span>
              </li>
              <li>
                <span className="contact-icon"><Icon name="pin" /></span>
                <span><strong>Visit us</strong>PTA Office, Ardenne High School</span>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
