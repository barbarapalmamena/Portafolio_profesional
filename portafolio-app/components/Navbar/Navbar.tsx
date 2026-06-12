"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

/* Secciones de navegación */
const NAV_ITEMS = [
  { label: "Inicio",    id: "hero" },
  { label: "Sobre mí", id: "about" },
  { label: "Skills",   id: "skills" },
  { label: "Proyectos",id: "projects" },
  { label: "Contacto", id: "contact" },
];

/**
 * Navbar fija con:
 * - Efecto de fondo blur al hacer scroll
 * - Scroll-spy: resalta la sección activa
 * - Burger menu animado en móvil
 */
export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [activeId,  setActiveId]  = useState("hero");
  const [menuOpen,  setMenuOpen]  = useState(false);

  /* Detecta scroll para el fondo y la sección activa */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll-spy: encuentra la sección visible
      const sectionIds = NAV_ITEMS.map((item) => item.id);
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveId(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Cierra el menú móvil al cambiar el tamaño de la ventana */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Scroll suave a la sección objetivo */
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <button
            className={styles.logo}
            onClick={() => scrollTo("hero")}
            aria-label="Ir al inicio"
          >
            <span className={styles.logoSymbol}>&lt;</span>
            <span className={styles.logoName}>BJPM</span>
            <span className={styles.logoSymbol}>/&gt;</span>
          </button>

          {/* Links de escritorio */}
          <ul className={styles.navLinks} role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-${item.id}`}
                  className={`${styles.navLink} ${activeId === item.id ? styles.active : ""}`}
                  onClick={() => scrollTo(item.id)}
                  aria-current={activeId === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Burger menu móvil */}
          <button
            id="nav-burger"
            className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Abrir menú"
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
        role="navigation"
        aria-label="Menú móvil"
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            id={`nav-mobile-${item.id}`}
            className={`${styles.mobileLink} ${activeId === item.id ? styles.active : ""}`}
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
