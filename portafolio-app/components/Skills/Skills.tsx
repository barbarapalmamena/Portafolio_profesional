"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./Skills.module.css";

/* Niveles de habilidad evaluados por Bárbara */
const SKILL_CATEGORIES = [
  {
    title: "Frontend Core",
    skills: [
      { name: "HTML5",      icon: "🌐", level: 75 },
      { name: "CSS3",       icon: "🎨", level: 75 },
      { name: "JavaScript", icon: "⚡", level: 50 },
      { name: "TypeScript", icon: "🔷", level: 50 },
      { name: "Responsive", icon: "📱", level: 75 },
    ],
  },
  {
    title: "Frameworks & Librerías",
    skills: [
      { name: "React",        icon: "⚛️", level: 50 },
      { name: "Next.js",      icon: "▲",  level: 75 },
      { name: "Tailwind CSS", icon: "💨", level: 75 },
    ],
  },
  {
    title: "Diseño UI/UX",
    skills: [
      { name: "CSS Modules",    icon: "🧩", level: 75 },
      { name: "Animaciones CSS",icon: "✨", level: 75 },
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      { name: "Git",    icon: "🌿", level: 50 },
      { name: "GitHub", icon: "🐙", level: 50 },
    ],
  },
];

/**
 * Sección de habilidades con:
 * - Categorías organizadas
 * - Tarjetas con icono, nombre y barra de nivel
 * - Efectos hover con glow
 */
export default function Skills() {
  const { ref } = useScrollAnimation();

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        {/* Título */}
        <div className="section-title-wrapper animate-on-scroll" ref={ref}>
          <h2 className="section-title">Habilidades</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            Tecnologías y herramientas con las que trabajo y sigo aprendiendo
          </p>
        </div>

        {/* Categorías de skills */}
        <div className={styles.categories}>
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className={`${styles.category} animate-on-scroll`}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>

              <div className={styles.grid} role="list" aria-label={category.title}>
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    id={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={styles.card}
                    role="listitem"
                    aria-label={`${skill.name} — ${skill.level}%`}
                  >
                    <span className={styles.cardIcon} aria-hidden="true">
                      {skill.icon}
                    </span>
                    <span className={styles.cardName}>{skill.name}</span>
                    <div
                      className={styles.levelBar}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`Nivel ${skill.level}%`}
                    >
                      <div
                        className={styles.levelFill}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
