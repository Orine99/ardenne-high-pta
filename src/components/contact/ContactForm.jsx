/* =====================================================================
   ContactForm.jsx — "Send a message to the PTA" form
   ---------------------------------------------------------------------
   Messages are delivered by Formspree (https://formspree.io) to the
   PTA's email. Put your Formspree form ID in src/data/siteSettings.js.
   The "Who would you like to reach?" choice goes in the email subject,
   e.g. "[Treasurer] Question about dues".
   ===================================================================== */
import { useState } from "react";
import { SITE_SETTINGS } from "../../data/siteSettings.js";
import { isPlaceholder } from "../../utils/helpers.js";

// Edit these to match the PTA executive roles
const RECIPIENTS = [
  { value: "General", label: "General enquiry" },
  { value: "President", label: "PTA President" },
  { value: "Secretary", label: "Secretary" },
  { value: "Treasurer", label: "Treasurer (dues & donations)" },
  { value: "Volunteering", label: "Volunteering" },
  { value: "Student Welfare", label: "Student welfare / assistance" }
];

export default function ContactForm() {
  // status: null (nothing yet) | { type: "success" | "error", message: "..." }
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const officePhone = SITE_SETTINGS.phones[0];

  async function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    const form = e.target;
    if (!form.reportValidity()) return; // browser checks required fields

    const formId = SITE_SETTINGS.formspreeFormId;
    if (isPlaceholder(formId)) {
      setStatus({ type: "error", message: `The message form isn't connected yet. Please call the PTA Office at ${officePhone}.` });
      return;
    }

    const data = new FormData(form);
    data.set("_subject", `[${data.get("recipient")}] ${data.get("subject") || "Message from the PTA website"}`);

    setSending(true);
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error("Send failed");
      form.reset();
      setStatus({ type: "success", message: "Thank you! Your message has been sent. A member of the PTA will get back to you soon." });
    } catch {
      setStatus({ type: "error", message: `Sorry, something went wrong. Please try again, or call the PTA Office at ${officePhone}.` });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="card contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-name">Your name</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">Email address</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-phone">Phone <span className="optional">(optional)</span></label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-recipient">Who would you like to reach?</label>
          <select id="cf-recipient" name="recipient" required>
            {RECIPIENTS.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="cf-subject">Subject</label>
        <input id="cf-subject" name="subject" type="text" required />
      </div>
      <div className="form-field">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" required />
      </div>

      {/* Hidden spam trap: real people never see or fill this */}
      <input className="form-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <label className="form-check">
        <input type="checkbox" name="consent" value="yes" required />
        <span>I agree that the PTA may use my details to reply to this message.</span>
      </label>

      <button className="btn btn-blue" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send Message"}
      </button>

      {status && (
        <p className={`form-status ${status.type === "success" ? "is-success" : "is-error"}`} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
