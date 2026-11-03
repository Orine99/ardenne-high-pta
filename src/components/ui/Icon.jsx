/* =====================================================================
   Icon.jsx — every small icon on the site
   Use it like:  <Icon name="heart" />
   To add an icon: add a new entry to the ICONS list below.
   ===================================================================== */

// "outline" icons are drawn with lines; "filled" icons are solid shapes
const ICONS = {
  phone: { body: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /> },
  mail: { body: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></> },
  pin: { body: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></> },
  heart: { body: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" /> },
  calendar: { body: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></> },
  hands: { body: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></> },
  arrowLeft: { body: <path d="M15 18l-6-6 6-6" />, strokeWidth: 2.5 },
  arrowRight: { body: <path d="M9 18l6-6-6-6" />, strokeWidth: 2.5 },
  document: { body: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></> },
  bank: { body: <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" /> },
  office: { body: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></> },
  card: { body: <><rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" /></> },
  brush: { body: <><path d="M18.4 2.6a2 2 0 0 1 2.9 2.9L12 14.8 9.2 12z" /><path d="M7 14a3 3 0 0 0-3 3c0 1.3-1 2-2 2 1 1.5 2.7 2 4 2a4 4 0 0 0 4-4 3 3 0 0 0-3-3z" /></> },
  flask: { body: <path d="M9 3h6M10 3v6L4.5 19A2 2 0 0 0 6.3 22h11.4a2 2 0 0 0 1.8-3L14 9V3M7 15h10" /> },
  instagram: { body: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4.5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></> },

  // filled icons
  whatsapp: { filled: true, body: <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 12 2.2a9.8 9.8 0 0 1 9.8 9.8c0 5.4-4.4 9.8-9.8 9.8zM20.5 3.5A11.9 11.9 0 0 0 1.7 17.9L0 24l6.3-1.7A11.9 11.9 0 0 0 24 12c0-3.2-1.2-6.2-3.5-8.5z" /> },
  facebook: { filled: true, body: <path d="M14 8V6c0-.9.6-1 1-1h3V1h-4c-4 0-5 3-5 5v2H6v4h3v11h5V12h3.5l.5-4z" /> }
};

export default function Icon({ name }) {
  const icon = ICONS[name];
  if (!icon) return null; // unknown name: show nothing instead of crashing

  return icon.filled ? (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{icon.body}</svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={icon.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon.body}
    </svg>
  );
}
