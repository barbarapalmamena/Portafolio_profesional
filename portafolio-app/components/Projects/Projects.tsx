"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./Projects.module.css";

/* Datos de proyectos reales */
const PROJECTS = [
  {
    id: "automotora",
    title: "Simulación de Automotora",
    description:
      "Sistema web de simulación de una concesionaria de automóviles. Permite gestionar un catálogo de vehículos, realizar búsquedas y filtros, y simular el proceso de compra de manera interactiva.",
    image: "/images/project-automotora.png",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    status: "completed" as const,
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "iglesia",
    title: "Iglesia Tupahue",
    description:
      "Sitio web institucional para la Iglesia Tupahue. Diseño moderno y accesible con información de la comunidad, eventos, noticias y medios de contacto. Construido con Next.js para máximo rendimiento y SEO.",
    image: "/images/project-iglesia.png",
    tech: ["Next.js", "React", "TypeScript", "CSS Modules", "SEO"],
    status: "completed" as const,
    demoUrl: "#",
    repoUrl: "#",
  },
];

/**
 * Sección de proyectos con:
 * - Tarjetas con imagen preview y overlay de links
 * - Stack de tecnologías
 * - Badge de estado
 * - Card "próximamente" para proyectos futuros
 */
export default function Projects() {
  const { ref } = useScrollAnimation();

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        {/* Título */}
        <div className="section-title-wrapper animate-on-scroll" ref={ref}>
          <h2 className="section-title">Proyectos</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className={styles.grid}>
          {/* Tarjetas de proyectos reales */}
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className={`${styles.card} animate-on-scroll`}
            >
              {/* Imagen preview */}
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={`Preview del proyecto ${project.title}`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay con botones */}
                <div className={styles.overlay}>
                  <a
                    href={project.demoUrl}
                    className={styles.overlayBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    🚀 Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className={`${styles.overlayBtn} ${styles.overlayBtnGhost}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código de ${project.title}`}
                  >
                    💻 Código
                  </a>
                </div>
              </div>

              {/* Cuerpo de la tarjeta */}
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span
                    className={`${styles.cardStatus} ${
                      project.status === "completed"
                        ? styles.statusCompleted
                        : styles.statusInProgress
                    }`}
                  >
                    {project.status === "completed" ? "✓ Completado" : "⚙ En progreso"}
                  </span>
                </div>

                <p className={styles.cardDescription}>{project.description}</p>

                {/* Stack de tecnologías */}
                <div className={styles.techStack} aria-label="Tecnologías usadas">
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className={styles.cardFooter}>
                  <a
                    href={project.demoUrl}
                    className={styles.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Ver demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className={styles.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📂 Repositorio
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* Tarjeta "próximamente" */}
          <div id="project-coming-soon" className={`${styles.comingSoon} animate-on-scroll`}>
            <span className={styles.comingSoonIcon}>🚀</span>
            <p className={styles.comingSoonText}>Más proyectos próximamente</p>
            <p className={styles.comingSoonSub}>
              Siempre trabajando en algo nuevo y emocionante
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
