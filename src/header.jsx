import { useEffect, useState } from "react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = previousOverflow || ""
    }

    return () => {
      document.body.style.overflow = previousOverflow || ""
    }
  }, [menuOpen])

  return (
    <>
      <header className="site-header">
        <div className="wrap header__content">
          <div className="brand">
            <span className="brand__mark">RN</span>
            <div>
              <div className="brand__name">Recuperadores Natura</div>
              <div className="brand__tagline">Gestion integral de residuos</div>
            </div>
          </div>
          <div className="header__actions">
            <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
              <a href="#servicios" onClick={handleNavClick}>
                Servicios
              </a>
              <a href="#por-que" onClick={handleNavClick}>
                Por que nosotros
              </a>
              <a href="#proceso" onClick={handleNavClick}>
                Proceso
              </a>
              <a href="#impacto" onClick={handleNavClick}>
                Impacto
              </a>
              <a href="#contacto" onClick={handleNavClick}>
                Contacto
              </a>
            </nav>
            <div className="cta-desktop">
              <a className="btn btn--primary" href="#contacto">
                Cotizar
              </a>
            </div>
            <div className="mobile-actions">
              <button
                className="icon-btn"
                type="button"
                aria-label="Abrir menú"
                onClick={() => setMenuOpen(prev => !prev)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-overlay ${menuOpen ? "mobile-overlay--open" : ""}`} onClick={handleNavClick}>
        <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="drawer__top">
            <div className="brand">
              <span className="brand__mark">RN</span>
              <div>
                <div className="brand__name">Recuperadores Natura</div>
                <div className="brand__tagline">Gestion integral de residuos</div>
              </div>
            </div>
            <button
              className={`icon-btn icon-btn--menu ${menuOpen ? "is-open" : ""}`}
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                // ✅ X (cerrar)
                <svg
                  className="icon-svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              ) : (
                // ✅ 3 líneas (menú)
                <svg
                  className="icon-svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
          <nav className="drawer__nav">
            <a href="#servicios" onClick={handleNavClick}>
              Servicios
            </a>
            <a href="#por-que" onClick={handleNavClick}>
              Por que nosotros
            </a>
            <a href="#proceso" onClick={handleNavClick}>
              Proceso
            </a>
            <a href="#impacto" onClick={handleNavClick}>
              Impacto
            </a>
            <a href="#contacto" onClick={handleNavClick}>
              Contacto
            </a>
          </nav>
          <div className="drawer__footer">
            <a className="btn btn--primary" href="#contacto" onClick={handleNavClick}>
              Cotizar
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
