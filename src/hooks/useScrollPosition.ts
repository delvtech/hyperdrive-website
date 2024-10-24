import { useState } from "react";
import { useScrollEffect } from "src/hooks/useScrollEffect";

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  useScrollEffect(() => {
    setScrollPosition(window.scrollY);
  }, []);

  return scrollPosition;
}
