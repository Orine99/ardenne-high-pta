/* =====================================================================
   App.jsx — the list of pages (routes)
   To add a new page:
     1. Create it in src/pages/  (e.g. EventsPage.jsx)
     2. Import it below and add a <Route path="/events" element={<EventsPage />} />
     3. Add it to the menu in src/data/navigation.js
   ===================================================================== */
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import DonatePage from "./pages/DonatePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      {/* Every page is wrapped in the Layout (top bar, header, footer) */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
