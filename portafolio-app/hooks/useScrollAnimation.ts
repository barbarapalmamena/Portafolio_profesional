import { useEffect, useRef } from "react";

/**
 * Hook personalizado para animar elementos al entrar al viewport.
 * Utiliza IntersectionObserver para detectar cuando el elemento
 * es visible y agrega la clase "visible" para disparar la animación CSS.
 *
 * Uso: const { ref } = useScrollAnimation();
 *      <div className="animate-on-scroll" ref={ref}>...</div>
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* Selecciona todos los elementos con la clase animate-on-scroll
       dentro del contenedor referenciado o en el documento */
    const targets = document.querySelectorAll<HTMLElement>(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Deja de observar una vez que el elemento es visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return { ref };
}
