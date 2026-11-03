/* =====================================================================
   SITE SETTINGS  —  links, phone numbers and notices used on every page
   ---------------------------------------------------------------------
   HOW TO EDIT:
   • Only change the text between the quote marks "like this".
   • Keep the commas at the end of each line.
   • Save the file, then push to GitHub — Vercel rebuilds the site.
   ===================================================================== */

export const SITE_SETTINGS = {

  /* --- WhatsApp group invite link -------------------------------------
     In WhatsApp: open the group > Group info > Invite via link > Copy.
     Paste it below (it starts with https://chat.whatsapp.com/...)      */
  whatsappGroupLink: "https://chat.whatsapp.com/REPLACE-WITH-YOUR-INVITE-CODE",

  /* --- PayPal donation link -------------------------------------------
     After the PTA PayPal account is set up, create a "Donate button"
     (paypal.com > Tools > PayPal Buttons > Donate) or a PayPal.me link,
     and paste the link here.                                           */
  paypalDonateLink: "https://www.paypal.com/donate/?hosted_button_id=REPLACE-ME",

  /* --- Contact form ---------------------------------------------------
     We use Formspree (free) to email form messages to the PTA.
     1. Sign up at https://formspree.io with the PTA email address.
     2. Create a new form. It gives you an ID like "xyzabcde".
     3. Paste ONLY that ID below.                                       */
  formspreeFormId: "REPLACE-ME",

  /* --- Contact details (shown in the top bar and footer) -------------- */
  email: "",   // TODO: add the PTA email address (leave "" to hide it)
  phones: ["(876) 978-1112", "(876) 790-3074"],
  address: "Ardenne High School, 10 Ardenne Road, Kingston 10, Jamaica",  // TODO: confirm address

  /* --- Social media (leave "" empty to hide an icon) ------------------ */
  facebook: "",
  instagram: "",

  /* --- Notice banner (yellow strip at the top of the Home page) -------
     Use this for urgent news: meeting dates, closures, deadlines.
     Set  show: false  to hide the banner.                              */
  notice: {
    show: true,
    text: "November is Parents' Month! Thank you, Ardenne parents, for all you do.",
    linkText: "See events",
    linkUrl: "/#events"
  }
};
