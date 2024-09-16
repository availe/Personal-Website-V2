import { useEffect } from "react";

function useHighlightOnScroll(
  id: string,
  highlightClass: string,
  duration: number = 2000
) {
  useEffect(() => {
    const element = document.getElementById(id);

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(highlightClass);

          const timeoutId = setTimeout(() => {
            entry.target.classList.remove(highlightClass);
          }, duration);

          return () => clearTimeout(timeoutId);
        }
      });
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [id, highlightClass, duration]);
}

export default useHighlightOnScroll;
