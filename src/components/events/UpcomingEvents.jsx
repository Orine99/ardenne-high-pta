/* =====================================================================
   UpcomingEvents.jsx — the next few events (past ones are skipped)
   Use it like:  <UpcomingEvents limit={3} />
   ===================================================================== */
import { PTA_EVENTS } from "../../data/events.js";
import { parseDate, today } from "../../utils/helpers.js";
import EventCard from "./EventCard.jsx";

export default function UpcomingEvents({ limit = 3 }) {
  const now = today();

  const upcoming = PTA_EVENTS
    .filter((e) => parseDate(e.endDate || e.date) >= now)       // not finished yet
    .sort((a, b) => parseDate(a.date) - parseDate(b.date))      // soonest first
    .slice(0, limit);

  if (upcoming.length === 0) {
    return (
      <ul className="event-list">
        <li className="card empty-message">
          No upcoming events right now — check back soon or join our WhatsApp group for updates.
        </li>
      </ul>
    );
  }

  return (
    <ul className="event-list">
      {upcoming.map((event) => (
        <EventCard key={event.title + event.date} event={event} />
      ))}
    </ul>
  );
}
