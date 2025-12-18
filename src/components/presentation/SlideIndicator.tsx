import { useEffect, useState } from "react";

interface SlideIndicatorProps {
  totalSlides: number;
}

export function SlideIndicator({ totalSlides }: SlideIndicatorProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(slides).indexOf(entry.target as Element);
            if (index !== -1) {
              setActiveSlide(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    const slides = document.querySelectorAll(".slide");
    slides[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="slide-indicator" aria-label="Navegação de slides">
      {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          className={`slide-dot ${activeSlide === i ? "active" : ""}`}
          onClick={() => scrollToSlide(i)}
          aria-label={`Ir para slide ${i + 1}`}
        >
          <span className="slide-number">
            {String(i + 1).padStart(2, "0")}/{String(totalSlides).padStart(2, "0")}
          </span>
        </button>
      ))}
    </nav>
  );
}
