# Ardenne High School PTA — Website (React version)

Built with **React** + **Vite** (build tool) + **React Router** (page addresses).
Same design and content as the plain HTML version, organised as components.

---

## Getting started

You need **Node.js** (version 20 or newer) from https://nodejs.org.

```bash
npm install      # first time only: downloads React, Vite and React Router
npm run dev      # starts a live preview at http://localhost:5173 (updates as you save)
npm run build    # makes the final website in the "dist" folder
```

---

## Project structure

```
ardenne-pta-react/
├── index.html                 ← the single HTML file; React draws everything inside <div id="root">
├── package.json               ← list of libraries + the npm commands
├── vite.config.js             ← Vite settings
├── vercel.json                ← tells Vercel to send every address (/about, /donate) to React
│
├── public/                    ← files copied to the site as-is
│   ├── images/                   logo, photos, gallery/
│   └── documents/                PDFs (constitution, minutes…)
│
└── src/
    ├── main.jsx               ← starting point: loads shared CSS, starts React + the router
    ├── App.jsx                ← the list of pages and their addresses
    │
    ├── pages/                 ← one file per page
    │   ├── HomePage.jsx          /
    │   ├── AboutPage.jsx         /about
    │   ├── DonatePage.jsx        /donate
    │   └── NotFoundPage.jsx      any wrong address
    │
    ├── components/            ← reusable building blocks
    │   ├── layout/               Layout, TopBar, Header, Footer, NoticeBanner, PageBanner
    │   ├── home/                 Hero, QuickLinks, Welcome, Stats, NewsList, CtaBand
    │   ├── events/               EventCard, UpcomingEvents, Calendar
    │   ├── gallery/              Gallery (with the pop-up viewer)
    │   ├── contact/              ContactForm
    │   ├── about/                TeamGrid, DocumentList
    │   └── ui/                   Icon, SectionHead, SettingsLink (small shared pieces)
    │
    ├── data/                  ← ✏️ EDIT THESE to update content (no React knowledge needed)
    │   ├── siteSettings.js       WhatsApp, PayPal, Formspree, phones, notice banner
    │   ├── events.js             events + calendar (+ category names)
    │   ├── news.js               news stories
    │   ├── gallery.js            gallery photos
    │   ├── executive.js          executive team
    │   ├── documents.js          PDF documents list
    │   └── navigation.js         header menu links
    │
    ├── styles/                ← CSS (same files as before, every line commented)
    │   ├── base.css              colours, fonts, buttons
    │   ├── layout.css            header, footer, banners
    │   ├── home.css / about.css / donate.css
    │
    └── utils/
        ├── helpers.js            date formatting, phone links
        └── usePageTitle.js       sets the browser-tab title per page
```

### How a page is put together

```
main.jsx
  └─ App.jsx  (which page for which address?)
       └─ Layout  (TopBar + Header + … + Footer on every page)
            └─ HomePage
                 ├─ <Hero />
                 ├─ <QuickLinks />
                 ├─ <UpcomingEvents />  ─┐
                 ├─ <Calendar />         ├─ both use <EventCard />
                 ├─ <Gallery />          ┘
                 └─ <ContactForm />
```

---

## What React changes compared with the plain HTML version

| | Plain HTML version | React version |
|---|---|---|
| Header & footer | Built from text strings in `main.js` | Real components: `Header.jsx`, `Footer.jsx` |
| An event card | HTML written as a string in JavaScript, shared between files by global functions | One `EventCard.jsx`, used by both the Upcoming list and the Calendar |
| Calendar updates | Code manually rebuilds the grid after each click | Calendar keeps `viewDate` and `selected` in **state**, and React redraws it automatically |
| Script order | Data files must load before code in the right order | Each file `import`s exactly what it needs |
| Mistakes | A typo shows up only when you open the page | `npm run dev` points to the file and line straight away |
| Adding a page | Copy a whole HTML file (head, fonts, scripts…) | Create one page file and add one line in `App.jsx` |
| Page addresses | `about.html` | `/about` |
| Preview | Double-click `index.html` | Run `npm run dev` (needs Node.js) |

**Still the same:** updating content is done in `src/data/`, and the look is changed in `src/styles/`.

---

## Everyday updates

- **Add an event**: copy a block in `src/data/events.js` (date format `"YYYY-MM-DD"`).
- **Notice banner**: `src/data/siteSettings.js` → `notice`.
- **News story**: add a block at the **top** of `src/data/news.js`.
- **Gallery photo**: put the photo in `public/images/gallery/`, then add a line to `src/data/gallery.js` with `src: "/images/gallery/your-photo.jpg"`.
- **PDF document**: put the PDF in `public/documents/`, then set `file: "/documents/name.pdf"` in `src/data/documents.js`.
- **Menu**: `src/data/navigation.js`.
- **Colours**: the variables at the top of `src/styles/base.css`.

## Before launch
- In `src/data/siteSettings.js`, replace every `REPLACE-ME` (WhatsApp link, PayPal link, Formspree ID) and add the PTA email.
- Replace the events marked `// SAMPLE` in `src/data/events.js`.
- Fill in the bank details in `BANK_DETAILS` in `src/pages/DonatePage.jsx`.
- Add the executive names in `src/data/executive.js`.
- Confirm there is parental consent for every photo that shows students.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com → *Add New → Project* → import the repository.
3. Vercel detects **Vite** automatically (build command `npm run build`, output folder `dist`). Click **Deploy**.
4. Every push to GitHub redeploys the site.
