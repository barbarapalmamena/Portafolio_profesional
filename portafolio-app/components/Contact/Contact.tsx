"use client";

import { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail, MdLocationPin, MdSchool } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styles from "./Contact.module.css";

/* Estructura del formulario */
interface FormData {
  name:    string;
  email:   string;
  message: string;
}

interface FormErrors {
  name?:    string;
  email?:   string;
  message?: string;
}

/**
 * Sección de contacto con:
 * - Formulario con validación JS
 * - Items de contacto (correo, redes sociales)
 * - Botones de redes sociales
 */
export default function Contact() {
  const { ref } = useScrollAnimation();

  const [formData, setFormData] = useState<FormData>({
    name:    "",
    email:   "",
    message: "",
  });

  const [errors,   setErrors]   = useState<FormErrors>({});
  const [sending,  setSending]  = useState(false);
  const [success,  setSuccess]  = useState(false);

  /* Actualiza el campo del formulario */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpia el error del campo al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /* Valida el formulario y retorna si es válido */
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El correo no tiene un formato válido.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* Maneja el envío del formulario */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    // Simulación de envío (reemplazar con integración real)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSending(false);
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        {/* Título */}
        <div className="section-title-wrapper animate-on-scroll" ref={ref}>
          <h2 className="section-title">Contacto</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <div className={styles.grid}>
          {/* ─── Info de contacto ─── */}
          <div className={`${styles.infoSide} animate-on-scroll`}>
            <p className={styles.infoText}>
              Estoy abierta a nuevas oportunidades, colaboraciones y proyectos
              interesantes. Si quieres ponerte en contacto, puedes escribirme
              directamente o usar el formulario.
            </p>

            {/* Items de contacto */}
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><MdEmail /></span>
                <a href="mailto:tu.correo@ejemplo.com">
                  tu.correo@ejemplo.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><MdLocationPin /></span>
                <span>Chile</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><MdSchool /></span>
                <span>Ingeniería en Informática — Mención Ciencia de Datos</span>
              </div>
            </div>

            {/* Redes sociales */}
            <div className={styles.socialLinks}>
              <a
                id="contact-github"
                href="https://github.com/barbarapalmamena"
                className={styles.socialBtn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <SiGithub /> GitHub
              </a>
              <a
                id="contact-linkedin"
                href="https://linkedin.com/in/tu-usuario"
                className={styles.socialBtn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <SiLinkedin style={{ color: "#0A66C2" }} /> LinkedIn
              </a>
            </div>
          </div>

          {/* ─── Formulario ─── */}
          <div className="animate-on-scroll">
            {success ? (
              <div className={styles.successMsg} role="alert">
                ✅ ¡Mensaje enviado con éxito! Te responderé pronto.
              </div>
            ) : (
              <form
                id="contact-form"
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Nombre */}
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.error : ""}`}
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className={styles.errorMsg} role="alert">
                      ⚠️ {errors.name}
                    </span>
                  )}
                </div>

                {/* Correo */}
                <div className={styles.formGroup}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Correo electrónico
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.error : ""}`}
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className={styles.errorMsg} role="alert">
                      ⚠️ {errors.email}
                    </span>
                  )}
                </div>

                {/* Mensaje */}
                <div className={styles.formGroup}>
                  <label htmlFor="contact-message" className={styles.label}>
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={`${styles.textarea} ${errors.message ? styles.error : ""}`}
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className={styles.errorMsg} role="alert">
                      ⚠️ {errors.message}
                    </span>
                  )}
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  className={styles.submitBtn}
                  disabled={sending}
                  aria-label="Enviar mensaje"
                >
                  {sending ? "Enviando..." : <><MdSend /> Enviar mensaje</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
