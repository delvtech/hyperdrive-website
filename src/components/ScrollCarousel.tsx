import { useEffect, useRef, useState } from "react";
import { clamp } from "src/utils/clamp";

interface ScrollCarouselProps {
  slides: React.ReactNode[];
  slideHeight: number;
  slideGap?: number;
  id?: string;
  className?: string;
  /**
   * The heading to display above the carousel. This will remain in view as the
   * carousel scrolls.
   */
  heading?: React.ReactNode;
  /**
   * The Y offset from the top of the carousel to the top of the window. Useful
   * when there are fixed elements like a header that should be accounted for
   * before the carousel scrolling begins.
   */
  scrollYOffset?: number;
}

export function ScrollCaptorCarousel({
  heading,
  slides,
  slideHeight,
  slideGap = 20,
  id,
  className,
  scrollYOffset = 0,
}: ScrollCarouselProps) {
  // Tracks the scroll position relative to the carousel, 0 meaning the carousel
  // hasn't been reached or has been scrolled to the top.
  const [scrollPosition, setScrollPosition] = useState(0);
  // The scroll position is also tracked in a ref which is updated on every tick
  // of the scroll event to prevent the state from being updated too frequently.
  const scrollPositionRef = useRef(scrollPosition);
  // Whether the carousel is in view
  const isIntersectingRef = useRef(false);

  // The Y position of the carousel on the page where default scrolling behavior
  // is prevented and and carousel scrolling begins.
  const carouselYRef = useRef(Infinity);

  // The length of the carousel in pixels. Once `scrollPositionRef.current`
  // reaches this value, default scrolling behavior is restored.
  const carouselScrollHeightRef = useRef(0);

  // Tracks the last Y position of the touch event during a swipe so we can
  // calculate the delta for scrolling.
  const lastTouchYRef = useRef<number | undefined>();

  // Will be true if the scroll event has fired, but the animation frame hasn't
  // been executed yet.
  const isTickingRef = useRef(false);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  function handleWheel(e: WheelEvent) {
    e.preventDefault();
    handleScroll(e.deltaY);
  }

  function handleTouchMove(e: TouchEvent) {
    e.preventDefault();
    // TODO: This assumes the touch device's settings are set to natural
    // scrolling (i.e. swiping up scrolls the page down).
    const deltaY = lastTouchYRef.current
      ? lastTouchYRef.current - e.touches[0].clientY
      : 0;
    lastTouchYRef.current = e.touches[0].clientY;

    handleScroll(deltaY);
  }

  function handleTouchEnd() {
    lastTouchYRef.current = undefined;
  }

  function handleScroll(deltaY: number) {
    let isCarouselScroll = false;

    if (isIntersectingRef.current) {
      if (
        deltaY > 0 &&
        window.scrollY >= carouselYRef.current &&
        scrollPositionRef.current < carouselScrollHeightRef.current
      ) {
        isCarouselScroll = true;
      }

      if (
        deltaY < 0 &&
        window.scrollY <= carouselYRef.current &&
        scrollPositionRef.current > 0
      ) {
        isCarouselScroll = true;
      }
    }

    if (isCarouselScroll) {
      if (isTickingRef.current) return;

      // Use requestAnimationFrame to throttle the scroll event
      window.requestAnimationFrame(() => {
        if (
          window.scrollY > carouselYRef.current + 20 ||
          window.scrollY < carouselYRef.current - 20
        ) {
          window.scrollTo({
            top: carouselYRef.current,
            behavior: "instant",
          });
        }

        // We have to clamp the scroll position to the carousel's scroll
        // height since the delta could end up being larger than the remaining
        // scroll distance.
        scrollPositionRef.current = clamp({
          value: scrollPositionRef.current + deltaY,
          min: 0,
          max: carouselScrollHeightRef.current,
        });
        setScrollPosition(scrollPositionRef.current);

        // Reset the tick flag to indicate that the animation frame has been
        // executed.
        isTickingRef.current = false;
      });

      // Prevent additional scroll events from being processed until the next
      // animation frame has been executed.
      isTickingRef.current = true;
    } else {
      window.scrollBy(0, deltaY);
    }
  }

  function getSecuritySlideStyle(index: number) {
    const isLast = index === slides.length - 1;
    if (isLast) {
      return {
        height: `${slideHeight}px`,
      };
    }
    const slideStart = (slideHeight + slideGap) * index;
    // The relative scroll position within the slide
    const slideScrollPosition = Math.max(0, scrollPosition - slideStart);
    // The ratio of the section that has been scrolled (0-1)
    const scrollRatio = Math.min(1, slideScrollPosition / slideHeight);
    const inverseScrollRatio = 1 - scrollRatio;

    let baseStyles = {
      height: `${slideHeight}px`,
      marginBottom: `${-slideHeight * scrollRatio + slideGap * inverseScrollRatio}px`,
    };

    return scrollRatio > 0
      ? {
          ...baseStyles,
          transform: `scale(${inverseScrollRatio})`,
          filter: `blur(${4 * scrollRatio}px)`,
          opacity: inverseScrollRatio,
        }
      : baseStyles;
  }

  return (
    <div
      id={id}
      className={className}
      ref={(node) => {
        if (node) {
          carouselYRef.current =
            window.scrollY + node.getBoundingClientRect().top + scrollYOffset;

          // Intersection observer to track if the carousel is in view
          const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              isIntersectingRef.current = true;
            } else {
              isIntersectingRef.current = false;
            }
          });
          observer.observe(node);
        }
      }}
    >
      {heading}
      {/* overflow container */}
      <div
        className={`relative overflow-y-hidden`}
        style={{
          height: `${slideHeight + slideGap}px`,
        }}
      >
        {/* slide container */}
        <div
          ref={(node) => {
            if (node && !carouselScrollHeightRef.current) {
              const { height } = node.getBoundingClientRect();
              carouselScrollHeightRef.current = height - slideHeight;
            }
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} style={getSecuritySlideStyle(index)}>
              {/* <div key={index} className="mb-14"> */}
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
