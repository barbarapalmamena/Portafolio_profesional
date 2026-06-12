"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SiCisco } from "react-icons/si";
import { FaAward, FaShieldAlt, FaTerminal, FaCalendarAlt, FaNetworkWired, FaServer, FaMicrosoft } from "react-icons/fa";
import styles from "./Certifications.module.css";
import type { IconType } from "react-icons";

interface Certification {
  title: string;
  issuer: string;
  year: string;
  Icon: IconType;
  color: string;
  category: "cybersecurity" | "networking" | "cloud";
}

const CERTIFICATIONS: Certification[] = [
  {
    title: "Cisco CCST Cybersecurity",
    issuer: "Cisco",
    year: "2026",
    Icon: FaShieldAlt,
    color: "#00b4d8",
    category: "cybersecurity",
  },
  {
    title: "Cisco CCST Networking",
    issuer: "Cisco",
    year: "2026",
    Icon: FaNetworkWired,
    color: "#0077b6",
    category: "networking",
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2026",
    Icon: FaMicrosoft,
    color: "#00a4ef",
    category: "cloud",
  },
  {
    title: "Microsoft Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    year: "2026",
    Icon: FaServer,
    color: "#0078d4",
    category: "cloud",
  },
  {
    title: "Cybersecurity Awareness Professional (CAPC™)",
    issuer: "Certiprof",
    year: "2026",
    Icon: FaAward,
    color: "#4ade80",
    category: "cybersecurity",
  },
  {
    title: "Introducción a la Ciberseguridad",
    issuer: "Cisco Networking Academy",
    year: "2026",
    Icon: SiCisco,
    color: "#1f5773",
    category: "cybersecurity",
  },
];

/**
 * Sección de Certificaciones y Ciberseguridad
 * Muestra las certificaciones obtenidas y los logros/participaciones en CTFs (FIDAE2026)
 */
export default function Certifications() {
  const { ref } = useScrollAnimation();

  return (
    <section id="certifications" className={`section ${styles.certifications}`}>
      <div className="container">
        {/* Título de la sección */}
        <div className="section-title-wrapper animate-on-scroll" ref={ref}>
          <h2 className="section-title">Certificaciones y Logros</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            A principios de 2026 me propuse certificarme de forma intensiva en áreas clave de redes, nube y ciberseguridad.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Tarjetas de Certificaciones */}
          <div className={styles.grid}>
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={`${cert.title}-${index}`}
                className={`${styles.card} animate-on-scroll`}
                style={{ "--accent-hover": cert.color } as React.CSSProperties}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.iconWrapper} style={{ backgroundColor: `${cert.color}15`, color: cert.color }}>
                    <cert.Icon />
                  </span>
                  <span className={styles.badge} data-category={cert.category}>
                    {cert.category === "cybersecurity" && "Ciberseguridad"}
                    {cert.category === "networking" && "Redes"}
                    {cert.category === "cloud" && "Nube"}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <div className={styles.meta}>
                    <span className={styles.issuer}>{cert.issuer}</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.year}>{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
