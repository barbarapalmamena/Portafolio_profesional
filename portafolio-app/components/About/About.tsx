"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FaDownload } from "react-icons/fa";
import styles from "./About.module.css";
import Counter from "./Counter";

/* Tags de valores personales/profesionales */
const TAGS = [
  "Código limpio",
  "Accesibilidad Web",
  "UX centrado en el usuario",
  "Aprendizaje continuo",
  "Trabajo en equipo",
  "Buenas prácticas",
];

/**
 * Sección "Sobre mí" con:
 * - Imagen de avatar
 * - Descripción profesional
 * - Stats de experiencia
 * - Tags de valores
 */
export default function About() {
  const { ref } = useScrollAnimation();

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        {/* Título de sección */}
        <div className="section-title-wrapper animate-on-scroll" ref={ref}>
          <h2 className="section-title">Sobre mí</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            Conoce un poco más sobre mi trayectoria y lo que me apasiona
          </p>
        </div>

        <div className={styles.grid}>
          {/* ─── Imagen ─── */}
          <div className={`${styles.imageCard} animate-on-scroll`}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/avatar.png"
                alt="Bárbara Javiera Palma Mena"
                fill
                className={styles.image}
                sizes="(max-width: 900px) 320px, 380px"
              />
            </div>
            {/* Badge de disponibilidad */}
            <div className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span className={styles.badgeText}>Disponible para proyectos</span>
            </div>
          </div>

          {/* ─── Texto ─── */}
          <div className={`${styles.textSide} animate-on-scroll`}>
            <div className="section-title-wrapper" style={{ textAlign: "left" }}>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Hola, soy <span style={{ color: "var(--color-accent)" }}>Bárbara</span> 👩‍💻
              </h2>
              <span className="section-divider" />
            </div>

            <p className={styles.intro}>
              Soy <strong>Bárbara Javiera Palma Mena</strong>, estudiante de{" "}
              <strong>Ingeniería en Informática con mención en Ciencia de Datos</strong>.
              Me apasiona el desarrollo web frontend y el análisis inteligente de datos,
              combinando ambos mundos para crear soluciones{" "}
              <strong>modernas, accesibles y basadas en datos</strong>.
            </p>

            <p className={styles.intro}>
              En frontend trabajo con <strong>React, Next.js y CSS moderno</strong>.
              En ciencia de datos uso <strong>Python, Scikit-learn, TensorFlow y Pandas</strong>,
              aplicando Machine Learning y Deep Learning a problemas reales.
              Siempre priorizo el código limpio y las buenas prácticas.
            </p>

            <p className={styles.intro}>
              Además, tengo un fuerte interés en <strong>ciberseguridad y redes</strong>,
              habiéndome capacitado en estas áreas y participado activamente en competencias de hacking ético como el <strong>CTF FIDAE 2026</strong>.
            </p>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  <Counter target={3} suffix="+" />
                </span>
                <span className={styles.statLabel}>Proyectos realizados</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  <Counter target={15} suffix="+" />
                </span>
                <span className={styles.statLabel}>Tecnologías dominadas</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  <Counter target={100} suffix="%" />
                </span>
                <span className={styles.statLabel}>Compromiso</span>
              </div>
            </div>

            {/* Tags */}
            <div className={styles.tags} role="list" aria-label="Valores profesionales">
              {TAGS.map((tag) => (
                <span key={tag} className={styles.tag} role="listitem">
                  {tag}
                </span>
              ))}
            </div>

            {/* Descargar CV */}
            <div style={{ marginTop: "2rem" }}>
              <a
                id="about-cv-button"
                className="btn btn-primary"
                href="/Bárbara_Palma_CV.pdf"
                download="Barbara_Palma_CV.pdf"
                style={{ display: "inline-flex", gap: "0.5rem" }}
              >
                <FaDownload aria-hidden="true" /> Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
