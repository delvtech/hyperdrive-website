import {
  type DependencyList,
  type EffectCallback,
  useEffect,
  useRef,
} from "react";

/**
 * Uses `requestAnimationFrame` to throttle the scroll event.
 * @see
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event#scroll_event_throttling
 */
export function useScrollEffect(
  effect: (e: Event) => ReturnType<EffectCallback>,
  deps?: DependencyList,
) {
  const isTickingRef = useRef(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    function onScroll(e: Event) {
      if (!isTickingRef.current) {
        window.requestAnimationFrame(() => {
          effect(e);
          isTickingRef.current = false;
        });
        isTickingRef.current = true;
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [deps]);
}
