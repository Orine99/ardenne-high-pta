/* =====================================================================
   DonatePage.jsx — the Donate page ("/donate")
   ⚠ Fill in the real bank details in BANK_DETAILS below.
   ===================================================================== */
import { Link } from "react-router-dom";
import "../styles/donate.css";
import usePageTitle from "../utils/usePageTitle.js";
import { SITE_SETTINGS } from "../data/siteSettings.js";
import { telLink } from "../utils/helpers.js";
import PageBanner from "../components/layout/PageBanner.jsx";
import SectionHead from "../components/ui/SectionHead.jsx";
import SettingsLink from "../components/ui/SettingsLink.jsx";
import Icon from "../components/ui/Icon.jsx";

const IMPACT = [
  { image: "/images/gallery/paint-day-blue-wall.jpg", alt: "Volunteer painting a school wall", title: "A brighter campus", text: "Paint, materials and repairs for Paint Day and other improvement projects." },
  { image: "/images/science-donation.jpg", alt: "Science and robotics equipment being presented to the school", title: "Labs & learning", text: "Equipment and resources that help students explore science and technology." },
  { image: "/images/gallery/awards-assembly.jpg", alt: "Student receiving an award at assembly", title: "Student welfare", text: "Support for students and families who need a helping hand, plus awards that celebrate achievement." },
  { image: "/images/gallery/parents-month-breakfast.jpg", alt: "Parents' Month breakfast at the school gate", title: "Family events", text: "Parents' Month, meetings and events that keep home and school connected." }
];

// ⚠ Replace "To be confirmed" with the PTA's real bank details
const BANK_DETAILS = [
  ["Bank", "To be confirmed"],
  ["Branch", "To be confirmed"],
  ["Account name", "Ardenne High School PTA"],
  ["Account number", "To be confirmed"],
  ["Reference", 'Your name + "Donation"']
];

const FAQS = [
  { q: "Will I get a receipt?", a: "Yes. PayPal emails you a receipt as soon as your donation goes through. For bank transfers, send us a message and we'll confirm receipt. At the PTA Office you'll receive a receipt in person." },
  { q: "Do I need a PayPal account?", a: "No. On the PayPal page you can choose to pay with a debit or credit card as a guest." },
  { q: "Can I give for a specific project?", a: 'Yes. Add a note with your PayPal donation or bank transfer reference (for example "Paint Day" or "Science Lab"), or tell us in a message.' },
  { q: "Can alumni and friends of Ardenne donate?", a: "Absolutely. Alumni, families overseas, businesses and friends of the school are all welcome to give. PayPal works from anywhere in the world." },
  { q: "How do I know how donations are used?", a: "The PTA reports on funds at general meetings, and financial reports are shared in the Documents section of our About page." }
];

export default function DonatePage() {
  usePageTitle("Donate");

  return (
    <>
      <PageBanner
        variant="donate"
        crumb="Donate"
        eyebrow="Give to the PTA"
        title="Help us give every Ardenne student our best"
        actions={<a className="btn btn-gold" href="#ways-to-give">Ways to give</a>}
      >
        Your donation, big or small, goes directly to projects that improve our campus and support our students.
      </PageBanner>

      {/* ===== WHERE YOUR GIFT GOES ===== */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Your impact" title="Where your gift goes">
            Donations to the PTA fund practical projects chosen together with the school.
          </SectionHead>
          <div className="impact-grid">
            {IMPACT.map((item) => (
              <article className="card impact-card" key={item.title}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WAYS TO GIVE ===== */}
      <section className="section section-soft" id="ways-to-give">
        <div className="container">
          <SectionHead eyebrow="Ways to give" title="Choose the way that works for you" />
          <div className="give-grid">

            {/* PayPal — link set in src/data/siteSettings.js */}
            <article className="card give-card is-featured">
              <span className="give-badge">Fastest</span>
              <div className="give-icon"><Icon name="card" /></div>
              <h3>Donate online with PayPal</h3>
              <p>Give securely with a debit or credit card, or your PayPal account. You don't need a PayPal account to donate.</p>
              <ol className="give-steps">
                <li>Tap <strong>Donate with PayPal</strong> below.</li>
                <li>Enter the amount you'd like to give.</li>
                <li>Pay by card or PayPal. Your receipt is emailed to you automatically.</li>
              </ol>
              <SettingsLink kind="paypal" className="btn btn-blue">Donate with PayPal</SettingsLink>
            </article>

            {/* Bank transfer */}
            <article className="card give-card">
              <div className="give-icon"><Icon name="bank" /></div>
              <h3>Bank transfer</h3>
              <p>Transfer directly to the PTA account from your online banking.</p>
              <table className="bank-table">
                <tbody>
                  {BANK_DETAILS.map(([label, value]) => (
                    <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>
                  ))}
                </tbody>
              </table>
              <Link className="btn btn-outline" to="/#contact">Tell us you've sent it</Link>
            </article>

            {/* In person */}
            <article className="card give-card">
              <div className="give-icon"><Icon name="office" /></div>
              <h3>In person at the PTA Office</h3>
              <p>Drop off your donation at the PTA Office at school and collect a receipt on the spot.</p>
              <table className="bank-table">
                <tbody>
                  {SITE_SETTINGS.phones.map((phone) => (
                    <tr key={phone}><th scope="row">Phone</th><td><a href={telLink(phone)}>{phone}</a></td></tr>
                  ))}
                </tbody>
              </table>
              <Link className="btn btn-outline" to="/#contact">Contact the PTA</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ===== QUESTIONS ===== */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Questions" title="Giving questions, answered" />
          <div className="faq">
            {FAQS.map((item) => (
              <details className="card" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THANK YOU ===== */}
      <section className="section section-soft">
        <div className="container thanks-note">
          <img src="/images/logo.png" alt="" width="90" height="77" loading="lazy" />
          <h2>Thank you for supporting Ardenne</h2>
          <p>Every gift helps us live out our motto: <em>With God as Guide, Seek the Best.</em></p>
          <SettingsLink kind="whatsapp" className="btn btn-whatsapp"><Icon name="whatsapp" /> Join the PTA WhatsApp group</SettingsLink>
        </div>
      </section>
    </>
  );
}
