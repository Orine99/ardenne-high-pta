/* =====================================================================
   EVENTS & CALENDAR
   ---------------------------------------------------------------------
   Every event below appears in BOTH the calendar and the
   "Upcoming Events" list on the Home page. Past events hide from the
   Upcoming list automatically but stay on the calendar.

   TO ADD AN EVENT: copy one whole block from {  to  }, (including the
   comma after the closing brace), paste it at the end of the list,
   and change the details.

   FIELDS:
     title       – name of the event (required)
     date        – start date as "YYYY-MM-DD"  e.g. "2026-11-19" (required)
     endDate     – (optional) last day for events lasting several days
     time        – (optional) e.g. "6:00 PM – 8:00 PM"
     location    – (optional) e.g. "School Auditorium"
     category    – one of: "meeting", "school", "exam", "fundraiser", "volunteer"
                   (this sets the colour on the calendar)
     description – short sentence about the event
     link        – (optional) a web link for more info or sign-up

   ⚠ Items marked SAMPLE are placeholders — replace them with the PTA's
     real dates before launch.
   ===================================================================== */

export const PTA_EVENTS = [
  {
    title: "Science Fair",
    date: "2026-10-29",
    time: "9:00 AM – 2:00 PM",
    location: "Football Field",
    category: "school",
    description: "Students showcase their science projects. Volunteers needed for traffic, food and setup."
  },
  {
    title: "Parents' Month",
    date: "2026-11-01",
    endDate: "2026-11-30",
    category: "school",
    description: "A month of celebrating Ardenne parents and guardians — look out for the student-served breakfast at the gate!"
  },
  {
    title: "PTA General Meeting",                 // SAMPLE
    date: "2026-11-19",
    time: "6:00 PM – 8:00 PM",
    location: "School Auditorium",
    category: "meeting",
    description: "All parents and guardians are welcome. Agenda shared in the WhatsApp group one week before."
  },
  {
    title: "Parents' Appreciation Breakfast",     // SAMPLE
    date: "2026-11-27",
    time: "7:00 AM – 8:00 AM",
    location: "Front Gate",
    category: "school",
    description: "Students serve breakfast to parents during drop-off to close out Parents' Month."
  },
  {
    title: "Christmas Fair & Bake Sale",          // SAMPLE
    date: "2026-12-05",
    time: "10:00 AM – 3:00 PM",
    location: "Quadrangle",
    category: "fundraiser",
    description: "Food, games and gifts. All proceeds go to student welfare projects."
  },
  {
    title: "End of Term Examinations",            // SAMPLE
    date: "2026-12-07",
    endDate: "2026-12-11",
    category: "exam",
    description: "Christmas term exams. Please make sure students are rested and on time."
  },
  {
    title: "Paint Day 2027",                      // SAMPLE
    date: "2027-01-16",
    time: "8:30 AM – 3:00 PM",
    location: "Whole Campus",
    category: "volunteer",
    description: "Bring a brush (or just yourself!) and help us freshen up our school in royal blue and gold."
  },
  {
    title: "Paint Day 2025",
    date: "2025-10-11",
    time: "8:30 AM – 3:00 PM",
    location: "Whole Campus",
    category: "volunteer",
    description: "Parents, teachers and students repainted walls, fences and classrooms."
  }
];

/* Names and colours of the categories (used by the calendar colour key).
   To add a category: add a line here AND a matching .cat-yourname colour
   in src/styles/base.css                                                */
export const CATEGORY_LABELS = {
  meeting: "PTA Meeting",
  school: "School Event",
  exam: "Exams",
  fundraiser: "Fundraiser",
  volunteer: "Volunteer Day"
};
