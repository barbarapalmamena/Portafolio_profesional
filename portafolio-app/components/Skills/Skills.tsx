"use client";

import {
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiCssmodules,
  SiGit, SiGithub,
  SiPython, SiMysql, SiPandas, SiNumpy,
  SiScikitlearn, SiTensorflow, SiJupyter,
  SiBootstrap
} from "react-icons/si";
import { FaChartBar, FaRobot, FaBrain, FaMobileAlt, FaBroom, FaStar, FaFileExcel } from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./Skills.module.css";
import type { IconType } from "react-icons";

/* Tipos */
interface Skill {
  name:  string;
  Icon:  IconType;
  level: number;
  color: string;
}

interface Category {
  title:  string;
  skills: Skill[];
}

/* Niveles de habilidad evaluados por Bárbara */
const SKILL_CATEGORIES: Category[] = [
  {
    title: "Frontend Core",
    skills: [
      { name: "HTML5",      Icon: SiHtml5,       level: 75, color: "#E34F26" },
      { name: "CSS3",       Icon: SiCss,        level: 75, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript,  level: 50, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript,  level: 50, color: "#3178C6" },
      { name: "Responsive", Icon: FaMobileAlt,   level: 75, color: "#AFA9EC" },
    ],
  },
  {
    title: "Frameworks & Librerías",
    skills: [
      { name: "React",        Icon: SiReact,        level: 50, color: "#61DAFB" },
      { name: "Next.js",      Icon: SiNextdotjs,    level: 75, color: "#F0EFFF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss,  level: 75, color: "#06B6D4" },
      { name: "Bootstrap",    Icon: SiBootstrap,    level: 50, color: "#7952B3" },
    ],
  },
  {
    title: "Diseño UI/UX",
    skills: [
      { name: "CSS Modules",     Icon: SiCssmodules, level: 75, color: "#AFA9EC" },
      { name: "Animaciones CSS", Icon: FaStar,       level: 75, color: "#7F77DD" },
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      { name: "Git",    Icon: SiGit,    level: 50, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, level: 50, color: "#F0EFFF" },
    ],
  },
  {
    title: "Ciencia de Datos & ML",
    skills: [
      { name: "Python",          Icon: SiPython,      level: 75, color: "#3776AB" },
      { name: "SQL",             Icon: SiMysql,       level: 75, color: "#4479A1" },
      { name: "Pandas",          Icon: SiPandas,      level: 75, color: "#150458" },
      { name: "NumPy",           Icon: SiNumpy,       level: 75, color: "#4DABCF" },
      { name: "Matplotlib",      Icon: FaChartBar,    level: 75, color: "#11557C" },
      { name: "Scikit-learn",    Icon: SiScikitlearn, level: 75, color: "#F7931E" },
      { name: "TensorFlow",      Icon: SiTensorflow,  level: 75, color: "#FF6F00" },
      { name: "Jupyter",         Icon: SiJupyter,     level: 75, color: "#F37626" },
      { name: "Machine Learning",Icon: FaRobot,       level: 75, color: "#7F77DD" },
      { name: "Deep Learning",   Icon: FaBrain,       level: 75, color: "#AFA9EC" },
      { name: "Estadística",     Icon: FaChartBar,    level: 75, color: "#4ade80" },
      { name: "Excel avanzado",  Icon: FaFileExcel,       level: 50, color: "#217346" },
      { name: "Data Wrangling",  Icon: FaBroom,       level: 75, color: "#AFA9EC" },
    ],
  },
];

/**
 * Sección de habilidades con:
 * - Logos SVG reales de cada tecnología (react-icons)
 * - Categorías organizadas
 * - Barra de nivel
 * - Efecto hover con glow
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
                    id={`skill-${skill.name.toLowerCase().replace(/[\s/]+/g, "-")}`}
                    className={styles.card}
                    role="listitem"
                    aria-label={`${skill.name} — ${skill.level}%`}
                    /* Color del icono como variable CSS para el hover glow */
                    style={{ "--skill-color": skill.color } as React.CSSProperties}
                  >
                    <span className={styles.cardIcon} aria-hidden="true">
                      <skill.Icon style={{ color: skill.color }} />
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
