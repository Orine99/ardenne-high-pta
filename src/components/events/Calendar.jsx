/* =====================================================================
   Calendar.jsx — interactive month calendar
   Events come from src/data/events.js. Click a day to see its events.
   ===================================================================== */
import { useState } from "react";
import { PTA_EVENTS, CATEGORY_LABELS } from "../../data/events.js";
import { formatDate, parseDate, sameDay, today } from "../../utils/helpers.js";
import EventCard from "./EventCard.jsx";
import Icon from "../ui/Icon.jsx";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* All events happening on one day (handles events lasting several days) */
function eventsOn(day) {
  return PTA_EVENTS.filter((e) => {
    const start = parseDate(e.date);
    const end = e.endDate ? parseDate(e.endDate) : start;
    return day >= start && day <= end;
  }).sort((a, b) => parseDate(a.date) - parseDate(b.date));
}

/* The 42 days (6 weeks) shown for a month, starting on a Sunday */
function daysForMonth(year, month) {
  const first = new Date(year, month, 1);
  const start = new Date(year, month, 1 - first.getDay());
  return Array.from({ length: 42 }, (_, i) =>
    new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
  );
}

export default function Calendar() {
  // Two pieces of state: which month is on screen, and which day is selected.
  // Changing either one makes React redraw the calendar for us.
  const [viewDate, setViewDate] = useState(() => {
    const t = today();
    return new Date(t.getFullYear(), t.getMonth(), 1);
  });
  const [selected, setSelected] = useState(today);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const selectedEvents = eventsOn(selected);

  const changeMonth = (step) => setViewDate(new Date(year, month + step, 1));

  const selectDay = (day) => {
    setSelected(day);
    // clicking a grey day from another month jumps to that month
    setViewDate(new Date(day.getFullYear(), day.getMonth(), 1));
  };

  const goToToday = () => selectDay(today());

  return (
    <div className="card calendar">
      {/* Month name + buttons */}
      <div className="calendar-toolbar">
        <h3 className="calendar-title" aria-live="polite">
          {formatDate(viewDate, { month: "long", year: "numeric" })}
        </h3>
        <div className="calendar-buttons">
          <button type="button" onClick={() => changeMonth(-1)} aria-label="Previous month"><Icon name="arrowLeft" /></button>
          <button type="button" onClick={goToToday}>Today</button>
          <button type="button" onClick={() => changeMonth(1)} aria-label="Next month"><Icon name="arrowRight" /></button>
        </div>
      </div>

      {/* Colour key */}
      <div className="calendar-legend" aria-label="Colour key">
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <span key={key} className={`tag cat-${key}`}>{label}</span>
        ))}
      </div>

      {/* The grid of days */}
      <div className="calendar-grid">
        {WEEKDAYS.map((d) => (
          <div key={d} className="calendar-weekday" aria-hidden="true">{d}</div>
        ))}

        {daysForMonth(year, month).map((day) => {
          const events = eventsOn(day);
          const classes = ["calendar-day"];
          if (day.getMonth() !== month) classes.push("is-other-month");
          if (sameDay(day, today())) classes.push("is-today");
          if (sameDay(day, selected)) classes.push("is-selected");

          const label = formatDate(day) + (events.length ? `, ${events.length} event${events.length > 1 ? "s" : ""}` : "");

          return (
            <button
              type="button"
              key={day.toISOString()}
              className={classes.join(" ")}
              onClick={() => selectDay(day)}
              aria-label={label}
            >
              <span className="calendar-day-number">{day.getDate()}</span>
              <span className="calendar-day-chips">
                {events.map((e) => (
                  <span key={e.title} className={`calendar-chip cat-${e.category}`}>{e.title}</span>
                ))}
              </span>
            </button>
          );
        })}
      </div>

      {/* Events on the selected day — reuses the same EventCard as the Upcoming list */}
      <div className="calendar-details" aria-live="polite">
        <h3>{formatDate(selected)}</h3>
        {selectedEvents.length ? (
          <ul className="event-list">
            {selectedEvents.map((e) => <EventCard key={e.title + e.date} event={e} />)}
          </ul>
        ) : (
          <p className="event-meta">No events on this day. Tap another date, or use the arrows to change month.</p>
        )}
      </div>
    </div>
  );
}
