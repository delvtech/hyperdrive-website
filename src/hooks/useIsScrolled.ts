import { useEffect, useState } from "react";

export function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  function onScroll() {
    if (window.scrollY > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (window.scrollY === 0 && isScrolled) {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return isScrolled;
}
