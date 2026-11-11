"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setModelsOpen(false);
  };

  return (
    <header role="banner" className="position-absolute site-header">
      <nav className={`background-transparent background-transparent-hightlight full-width sticky site-nav ${scrolled ? "fixed" : ""}`}>
        <div className="s-12 l-2 site-logo-wrap">
          <Link href="/" className="logo" onClick={closeMenu} aria-label="Satyan Infotech home">
            <img className="logo-white" src="/frontend/img/logo Satyan Infotech.webp" alt="Satyan Infotech" width={160} height={45} />
            <img className="logo-dark" src="/frontend/img/logo Satyan Infotech.webp" alt="" width={160} height={45} />
          </Link>
          <button type="button" className={`nav-text site-menu-toggle ${menuOpen ? "show-menu" : ""}`} aria-expanded={menuOpen} aria-controls="site-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((open) => !open)}>
            <span />
          </button>
        </div>
        <div className="top-nav s-12 l-10" id="site-navigation">
          <ul className={menuOpen ? "show-menu" : ""}>
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li className="site-dropdown">
              <button type="button" className="site-nav-button" aria-expanded={modelsOpen} onClick={() => setModelsOpen((open) => !open)}>
                Development model <span aria-hidden="true">⌄</span>
              </button>
              <ul className={modelsOpen ? "site-dropdown-open" : ""}>
                <li><Link href="/dedicated-resource-model/" onClick={closeMenu}>Dedicated resource model</Link></li>
                <li><Link href="/project-model/" onClick={closeMenu}>Project model</Link></li>
              </ul>
            </li>
            <li><Link href="/contact-us/" onClick={closeMenu}>Contact us</Link></li>
            <li><Link href="/job-us/" onClick={closeMenu}>Career path</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
