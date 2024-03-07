import { useEffect, useRef, useState } from "react";

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const isTickingRef = useRef(false);

  function onScroll() {
    if (!isTickingRef.current) {
      window.requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
        isTickingRef.current = false;
      });
      isTickingRef.current = true;
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollPosition;
}
