/* =====================================================================
   helpers.js — small functions shared across components
   ===================================================================== */

/* Turns "2026-11-19" into a real date (local Jamaica time, not UTC) */
export function parseDate(text) {
  const [year, month, day] = String(text).split("-").map(Number);
  return new Date(year, month - 1, day);
}

/* Formats a date nicely, e.g. "Thursday, 19 November 2026" */
export function formatDate(date, options = { weekday: "long", day: "numeric", month: "long", year: "numeric" }) {
  return date.toLocaleDateString("en-JM", options);
}

/* Today's date with the time removed (so we compare by day only) */
export function today() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

/* Are two dates the same calendar day? */
export function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

/* True if a settings value still has the REPLACE placeholder (not set up yet) */
export function isPlaceholder(value) {
  return !value || String(value).includes("REPLACE");
}

/* Builds a phone link from "(876) 978-1112" → "tel:+18769781112" */
export function telLink(phone) {
  return "tel:+1" + phone.replace(/\D/g, "");
}
