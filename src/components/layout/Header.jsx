/* =====================================================================
   Header.jsx — logo + menu (with the mobile hamburger menu)
   Menu items live in src/data/navigation.js
   ===================================================================== */
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../data/navigation.js";
import Icon from "../ui/Icon.jsx";

export default function Header() {
  // "state" = values that change while the page is open.
  // When state changes, React redraws the header automatically.
  const [menuOpen, setMenuOpen] = useState(false);   // is the phone menu open?
  const [scrolled, setScrolled] = useState(false);   // has the page scrolled down?

  // Watch scrolling so we can add a shadow under the header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll); // clean up when leaving
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="Ardenne High School PTA — Home" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Ardenne High School crest" width="58" height="49" />
          <span className="brand-text">
            <span className="brand-name">Ardenne High School</span>
            <span className="brand-sub">Parent-Teacher Association</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span className="visually-hidden">Menu</span>
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} id="main-nav" aria-label="Main menu">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.to.includes("#") ? (
                  // links to a section of the Home page are never "current"
                  <Link to={link.to} onClick={closeMenu}>{link.label}</Link>
                ) : (
                  // NavLink marks the current page with aria-current="page" (gold underline in CSS)
                  <NavLink to={link.to} end onClick={closeMenu}>{link.label}</NavLink>
                )}
              </li>
            ))}
            <li>
              <NavLink className="btn btn-gold nav-donate" to="/donate" onClick={closeMenu}>
                <Icon name="heart" /> Donate
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
