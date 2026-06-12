"use client";

import styles from "./Footer.module.css";

const YEAR = new Date().getFullYear();

const LINKS = [
  { label: "Inicio",     id: "hero" },
  { label: "Proyectos", id: "projects" },
  { label: "Contacto",  id: "contact" },
];

/** Footer simple con logo, copyright y links rápidos. */
export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <button
          className={styles.logo}
          onClick={() => scrollTo("hero")}
          aria-label="Volver al inicio"
        >
          <span className={styles.logoSymbol}>&lt;</span>
          <span className={styles.logoName}>BJPM</span>
          <span className={styles.logoSymbol}>/&gt;</span>
        </button>

        {/* Copyright */}
        <p className={styles.copy}>
          © {YEAR}{" "}
          <span>Bárbara Javiera Palma Mena</span>
          {" · "}Hecho con ❤️ y Next.js
        </p>

        {/* Links rápidos */}
        <nav aria-label="Links rápidos de footer">
          <ul className={styles.links} role="list">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  id={`footer-${link.id}`}
                  className={styles.link}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
