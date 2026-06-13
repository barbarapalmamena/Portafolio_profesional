"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  duration?: number; // Duración total de la animación en ms
  suffix?: string;   // Sufijo opcional como "+" o "%"
}

/**
 * Componente que anima un número del 0 al valor objetivo
 * cuando el elemento es visible en la pantalla.
 */
export default function Counter({ target, duration = 1500, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationStartedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationStartedRef.current) {
          animationStartedRef.current = true;
          startCounting();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  const startCounting = () => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Interpolación lineal del conteo
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target); // Garantizar valor final exacto
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}
