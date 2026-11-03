/* =====================================================================
   main.jsx — the starting point of the app
   Loads the shared styles and puts <App /> on the page.
   ===================================================================== */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Styles used on every page (page-specific CSS is imported by each page)
import "./styles/base.css";
import "./styles/layout.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter lets us have real page addresses like /about and /donate */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
