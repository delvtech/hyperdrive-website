import { useEffect, useState } from "react";

/**
 * A hook to observe the intersection of elements and return the IDs of the
 * elements that are intersecting.
 * @param ids The IDs of the elements to observe
 * @param options The options to pass to the IntersectionObserver
 *
 * @see
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */
export function useIntersecting(
  ids: string[],
  {
    root = null,
    rootMargin = "0px",
    /**
     * The threshold (0-1) at which to trigger the intersection observer. A
     * value of 1 means the entire element must be visible, while 0 means any
     * part of the element being visible will trigger the observer.
     */
    threshold = 0.0,
  }: IntersectionObserverInit = {},
) {
  const [intersectingIds, setIntersectingIds] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersectingById = Object.fromEntries(
          entries.map((entry) => [entry.target.id, entry.isIntersecting]),
        );

        setIntersectingIds((previousIds) => {
          return ids.filter((id) => {
            if (id in isIntersectingById) {
              return isIntersectingById[id];
            }

            // No change in intersection status for this ID
            return previousIds?.includes(id);
          });
        });
      },
      { root, rootMargin, threshold },
    );

    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, [ids]);

  return intersectingIds;
}
