"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import styles from "./Hero.module.css";

/* Textos del efecto typewriter */
const TYPEWRITER_TEXTS = [
  "Ingeniera en Informática",
  "Frontend Developer",
  "React & Next.js",
  "Diseño UI/UX",
  "Apasionada por el código",
];

/**
 * Sección Hero — Primera impresión del portafolio.
 * Incluye: nombre, efecto typewriter, CTA buttons y avatar animado.
 */
export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [textIndex,   setTextIndex]   = useState(0);
  const [charIndex,   setCharIndex]   = useState(0);
  const [isDeleting,  setIsDeleting]  = useState(false);

  /* Lógica del efecto typewriter */
  useEffect(() => {
    const target    = TYPEWRITER_TEXTS[textIndex];
    const delay     = isDeleting ? 60 : 100;
    const pauseTime = isDeleting ? 400 : 1800;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < target.length) {
        // Escribiendo
        setCurrentText(target.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === target.length) {
        // Pausa antes de borrar
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex > 0) {
        // Borrando
        setCurrentText(target.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        // Pasa al siguiente texto
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  /* Scroll suave a la sección de proyectos */
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Fondos decorativos */}
      <div className={styles.bg}   aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        {/* ─── Lado izquierdo: texto ─── */}
        <div className={styles.textSide}>
          <span className={styles.greeting}>
            👋 ¡Hola! Bienvenida/o a mi portafolio
          </span>

          <h1 className={styles.name}>
            Bárbara{" "}
            <span className={styles.nameHighlight}>Palma</span>
          </h1>

          <div className={styles.typewriterWrapper}>
            <span className={styles.typewriterText}>{currentText}</span>
            <span className={styles.cursor} aria-hidden="true" />
          </div>

          <div className={styles.cta}>
            <button
              id="hero-cta-projects"
              className="btn btn-primary"
              onClick={() => scrollTo("projects")}
            >
              Ver Proyectos
            </button>
            <button
              id="hero-cta-contact"
              className="btn btn-outline"
              onClick={() => scrollTo("contact")}
            >
              Contacto
            </button>
            <a
              id="hero-cta-cv"
              className="btn btn-outline"
              href="/Bárbara_Palma_CV.pdf"
              download="Barbara_Palma_CV.pdf"
              style={{ display: "inline-flex", gap: "0.5rem" }}
            >
              <FaDownload aria-hidden="true" /> Descargar CV
            </a>
          </div>
        </div>

        {/* ─── Lado derecho: avatar ─── */}
        <div className={styles.imageSide}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarRing} aria-hidden="true" />
            <Image
              src="/images/avatar.png"
              alt="Bárbara Javiera Palma Mena — Ingeniera en Informática"
              width={340}
              height={340}
              className={styles.avatarImg}
              priority
            />
            <span className={styles.dot} style={{}} aria-hidden="true" />
            <span className={`${styles.dot} ${styles.dot1}`} aria-hidden="true" />
            <span className={`${styles.dot} ${styles.dot2}`} aria-hidden="true" />
            <span className={`${styles.dot} ${styles.dot3}`} aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
