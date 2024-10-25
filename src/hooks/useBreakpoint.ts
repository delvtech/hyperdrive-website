import { useEffect, useState } from "react";
import tailwindConfig from "tailwind.config.ts";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);
export const breakpoints = fullConfig.theme.screens;
export type Breakpoint = keyof typeof breakpoints;

export function useBreakpoint() {
  const [active, setActive] = useState<[name: Breakpoint, value: string]>([
    "2xl",
    breakpoints["2xl"],
  ]);

  useEffect(() => {
    function handleResize() {
      for (const [name, width] of Object.entries(breakpoints)) {
        if (window.matchMedia(`(max-width: ${width})`).matches) {
          setActive([name as Breakpoint, width]);
          break;
        }
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    name: active[0],
    width: active[1],
    allBreakpoints: breakpoints,
    gte: (breakpoint: Breakpoint) => {
      const minWidth = breakpoints[breakpoint];
      return minWidth
        ? window.matchMedia(`(min-width: ${minWidth})`).matches
        : false;
    },
    lte: (breakpoint: Breakpoint) => {
      const maxWidth = breakpoints[breakpoint];
      return maxWidth
        ? window.matchMedia(`(max-width: ${maxWidth})`).matches
        : false;
    },
  };
}
