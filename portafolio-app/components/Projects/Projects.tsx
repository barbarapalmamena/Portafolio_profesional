"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    id: "analisis-pontones",
    title: "Análisis de Pontones",
    description:
      "Plataforma y estudio analítico bajo la metodología CRISP-DM para el monitoreo operativo de pontones salmoneros. Incluye extracción e ingesta de datos con Python (Pandas, Open-Meteo API), análisis exploratorio en Jupyter, estimación de estrés estructural y riesgo logístico, y un dashboard interactivo en tiempo real.",
    image: "/images/project-pontones.png",
    tech: ["Python", "Pandas", "Jupyter", "Next.js", "Recharts", "Open-Meteo API"],
    status: "completed" as const,
    demoUrl: "https://analisis-pontones.vercel.app/",
    repoUrl: "https://github.com/barbarapalmamena/Analisis-Pontones",
  },
  {
    id: "automotora",
    title: "Simulación de Automotora",
    description:
      "Sitio web profesional de venta de vehículos en Puerto Montt y la Décima Región. Incluye un catálogo dinámico con filtros de búsqueda por marca, categoría y presupuesto, secciones informativas de garantía ética de 7 días, inspección rigurosa y un panel de administración.",
    image: "/images/project-automotora-v2.png",
    tech: ["Next.js", "React", "TypeScript", "CSS Modules"],
    status: "completed" as const,
    demoUrl: "https://automotora-eight.vercel.app/",
    repoUrl: "https://github.com/barbarapalmamena/Automotora",
  },
  {
    id: "iglesia",
    title: "Iglesia Tupahue",
    description:
      "Sitio web institucional para la Iglesia Reformada Tupahue en Puerto Montt. Cuenta con secciones de actividades, nosotros, ministerios, una biblioteca teológica, integración con YouTube para servicios y estudios bíblicos, feed de Instagram y sistema de inicio de sesión.",
    image: "/images/project-iglesia-v2.png",
    tech: ["Next.js", "React", "JavaScript", "Supabase", "Resend", "jsPDF", "CSS Modules"],
    status: "completed" as const,
    demoUrl: "https://tupahue-delta.vercel.app/",
    repoUrl: "https://github.com/barbarapalmamena/Tupahue",
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
