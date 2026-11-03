/* =====================================================================
   Layout.jsx — the frame around every page
   Top bar + header at the top, footer at the bottom, and the current
   page drawn in the middle (<Outlet /> = "put the page here").
   ===================================================================== */
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import NoticeBanner from "./NoticeBanner.jsx";

export default function Layout() {
  const { pathname, hash } = useLocation();

  // When the address changes: scroll to the #section if there is one,
  // otherwise jump to the top of the new page.
  useEffect(() => {
    if (hash) {
      // wait one moment so the page has finished drawing
      const timer = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      {/* The yellow notice strip only shows on the Home page */}
      {pathname === "/" && <NoticeBanner />}
      <TopBar />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
