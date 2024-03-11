import { useEffect, useRef, useState } from "react";

/**
 * Uses `requestAnimationFrame` to throttle the scroll event and returns the
 * current scroll position.
 * @see
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event#scroll_event_throttling
 */
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
