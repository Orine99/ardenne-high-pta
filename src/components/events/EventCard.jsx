/* =====================================================================
   EventCard.jsx — one event (blue date block + details)
   Used in TWO places: the Upcoming Events list and under the Calendar.
   This is the main benefit of components: write it once, use it anywhere.
   ===================================================================== */
import { CATEGORY_LABELS } from "../../data/events.js";
import { formatDate, parseDate } from "../../utils/helpers.js";

export default function EventCard({ event }) {
  const start = parseDate(event.date);
  const end = event.endDate ? parseDate(event.endDate) : null;
  const category = CATEGORY_LABELS[event.category] ? event.category : "school";

  // "1 Nov – 30 Nov 2026" for multi-day events, full date otherwise
  const dateText = end
    ? `${formatDate(start, { day: "numeric", month: "short" })} – ${formatDate(end, { day: "numeric", month: "short", year: "numeric" })}`
    : formatDate(start);

  // Join the date, time and place with dots, skipping any that are empty
  const meta = [dateText, event.time, event.location].filter(Boolean).join(" · ");

  return (
    <li className="card event-item">
      <div className="event-date" aria-hidden="true">
        <span className="day">{start.getDate()}</span>
        <span className="month">{formatDate(start, { month: "short" })}</span>
      </div>
      <div className="event-body">
        <span className={`tag cat-${category}`}>{CATEGORY_LABELS[category]}</span>
        <h3>{event.title}</h3>
        <div className="event-meta">{meta}</div>
        {event.description && <p>{event.description}</p>}
        {event.link && (
          <p><a href={event.link} target="_blank" rel="noopener noreferrer">More info &rarr;</a></p>
        )}
      </div>
    </li>
  );
}
