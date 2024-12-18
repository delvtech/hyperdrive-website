import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollReset() {
  const { pathname, hash } = useLocation();
  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
