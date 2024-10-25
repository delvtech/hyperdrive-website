import { ChevronDownIcon } from "@heroicons/react/16/solid";
import classNames from "classnames";
import {
  type ComponentPropsWithoutRef,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { Clickable, type ClickableProps } from "src/components/Clickable";
import { useScrollEffect } from "src/hooks/useScrollEffect";

export interface DropdownProps
  extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  children:
    | React.ReactNode
    | ((context: DropdownContextType) => React.ReactNode);
}

/**
 * An accessible dropdown menu that can support:
 * - Keyboard navigation
 * - Hover states
 * - Portal rendering
 * - Custom alignment
 * - Render prop API
 *
 * @privateRemarks
 * This combination of features was hard to find in existing libraries. For
 * example: `headlessui` and `shadcn/ui` don't support hover states; `daisyui`
 * doesn't support portal rendering and breaks accessibility.
 *
 * With this flexible API, we can create things like a floating dropdown menu
 * that appears on hover for large screens and have it change to a static menu
 * that expands on click for smaller screens.
 */
export function Dropdown({ className, children, ...rest }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Find the button and menu elements by their data attributes.
    buttonRef.current =
      containerRef.current?.querySelector("[data-dropdown-button]") || null;
    menuRef.current =
      containerRef.current?.querySelector("[data-dropdown-menu]") || null;

    // Open the dropdown when clicking the button.
    function handleButtonClick(e: MouseEvent) {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen((prev) => {
        if (!prev) {
          setIsOpen(true);
          if (menuRef.current) {
            findFirstDropdownItem(menuRef.current)?.focus();
          }
        }
        return !prev;
      });
    }
    buttonRef.current?.addEventListener("click", handleButtonClick);

    // Close the dropdown when clicking outside of it. The handler is added to
    // the "mouseup" event to ensure it's triggered even if stopPropagation is
    // called on the "click" event.
    function handleMouseUp(e: MouseEvent) {
      if (containerRef.current?.contains(e.target as Element)) {
        e.preventDefault();
      } else {
        setIsOpen(false);
      }
    }
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      buttonRef.current?.removeEventListener("click", handleButtonClick);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const context = useMemo(() => {
    return {
      isOpen,
      isHovered,
      open: () => setIsOpen(true),
      close: (focusTarget: HTMLElement | null = buttonRef.current) => {
        setIsOpen(false);
        focusTarget?.focus();
      },
      containerRef,
      buttonRef,
      menuRef,
    };
  }, [isOpen, isHovered]);

  return (
    <>
      <DropdownContext.Provider value={context}>
        <div
          ref={containerRef}
          data-hover={isHovered || undefined}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onKeyDown={(e) => {
            switch (e.key) {
              case "ArrowDown":
                e.preventDefault();
                if (e.target === buttonRef.current) {
                  setIsOpen(true);
                  if (menuRef.current) {
                    findFirstDropdownItem(menuRef.current)?.focus();
                  }
                  break;
                }
                if (isDropdownItem(e.target)) {
                  findNextDropdownItem(e.target)?.focus();
                }
                break;
              case "ArrowUp":
                if (isDropdownItem(e.target)) {
                  e.preventDefault();
                  findPreviousDropdownItem(e.target)?.focus();
                }
                break;
              case "Tab":
                if (isDropdownItem(e.target)) {
                  e.preventDefault();
                }
                break;
              case "Escape":
                setIsOpen(false);
                buttonRef.current?.focus();
                break;
            }
          }}
          className={classNames(
            "group relative z-50",
            {
              "from-content-600/5 to-content-600/[0.01] max-lg:bg-gradient-120":
                isOpen,
            },
            className,
          )}
          {...rest}
        >
          {
            // Render prop
            typeof children === "function" ? children(context) : children
          }
        </div>
      </DropdownContext.Provider>
    </>
  );
}

// Button //

export interface DropDownButtonProps
  extends ComponentPropsWithoutRef<"button"> {}

Dropdown.Button = function DropdownButton({
  className,
  children,
  ...rest
}: DropDownButtonProps) {
  const { isOpen, isHovered } = useContext(DropdownContext);
  return (
    <button
      type="button"
      data-dropdown-button
      data-open={isOpen || undefined}
      data-closed={!isOpen || undefined}
      aria-haspopup="true"
      aria-expanded={isOpen}
      className={classNames(
        "group-ha flex h-10 items-center gap-1 whitespace-nowrap px-1 uppercase",
        {
          "text-aquamarine": isOpen || isHovered,
        },
        "max-lg:h-16 max-lg:w-full max-lg:justify-between max-lg:border-content/15 max-lg:px-4 max-lg:data-[closed]:border-b",
        className,
      )}
      {...rest}
    >
      {children}{" "}
      <ChevronDownIcon
        className={classNames("size-4 transition-all duration-100", {
          "-scale-y-100": isOpen,
        })}
      />
    </button>
  );
};

// Menu //

export type DropdownSide = "top" | "right" | "bottom" | "left";
export type DropdownAlignment = "start" | "center" | "end";
export type DropdownAnchor =
  | DropdownSide
  | `${DropdownSide} ${DropdownAlignment}`;

export interface DropdownMenuProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * The alignment of the menu relative to the button.
   */
  anchor?: DropdownAnchor;
  /**
   * Whether the menu should open on hover.
   */
  hover?: boolean;
  /**
   * Whether the menu should be rendered in a portal.
   */
  portal?: boolean;
}

interface Coordinates {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

Dropdown.Menu = function DropdownMenu({
  anchor = "bottom start",
  hover = false,
  portal = false,
  className,
  children,
  ...rest
}: DropdownMenuProps) {
  const { isOpen, isHovered, buttonRef, open, close } =
    useContext(DropdownContext);

  // The viewport coordinates of the menu relative to it's top-left corner.
  const [coordnates, setCoordinates] = useState<Coordinates>();

  // The side and alignment of the menu relative to the button.
  const [side, align] = anchor.split(" ") as [DropdownSide, DropdownAlignment];
  const isVertical = ["top", "bottom"].includes(side);
  const isHorizontal = ["left", "right"].includes(side);

  // Position the menu relative to the button.
  const positionMenu = useCallback(() => {
    // Ignore if not a portal or the button ref is not set.
    if (!portal || !buttonRef.current) {
      return;
    }

    const position: Coordinates = {};
    const rect = buttonRef.current.getBoundingClientRect();

    switch (side) {
      case "top":
        position.top = rect.top;
        // position.left = rect.left;
        break;
      case "right":
        position.top = rect.top;
        position.left = rect.right;
        break;
      case "bottom":
        position.top = rect.bottom;
        // position.left = rect.left;
        break;
      case "left":
        position.top = rect.top;
        position.right = window.innerWidth - rect.left;
        break;
    }

    switch (anchor) {
      case "top center":
      case "bottom center":
        position.left = rect.left + rect.width / 2;
        break;
      case "top end":
      case "bottom end":
        position.right = window.innerWidth - rect.right;
        break;
      case "right start":
      case "left start":
        position.top = rect.top;
        break;
      case "right center":
      case "left center":
        position.top = rect.top + rect.height / 2;
        break;
      case "right end":
      case "left end":
        position.bottom = window.innerHeight - rect.bottom;
        break;
    }

    console.log("position", position);
    console.log("rect", rect);
    console.log("window.innerHeight", window.innerHeight);
    setCoordinates(position);
  }, [anchor, side, portal, buttonRef.current]);

  // Reposition the menu on open.
  useEffect(() => {
    if (isOpen) positionMenu();
  }, [isOpen, positionMenu]);

  // Reposition the menu on scroll.
  useScrollEffect(() => {
    if (portal && isOpen) {
      console.log("scroll");
      positionMenu();
    }
  }, [portal]);

  useEffect(() => {
    // Open/close on hover if enabled.
    if (hover && isHovered && !isOpen) {
      open(false);
    } else if (hover && !isHovered && isOpen) {
      close(null);
    }

    // Reposition the menu on resize.
    window.addEventListener("resize", positionMenu);
    return () => window.removeEventListener("resize", positionMenu);
  });

  const Menu = (
    <div
      data-dropdown-menu
      data-open={isOpen || undefined}
      data-closed={!isOpen || undefined}
      data-side={side}
      data-align={align}
      tabIndex={-1}
      role="menu"
      aria-hidden={!isOpen}
      style={coordnates}
      className={classNames(
        "pointer-events-none absolute top-full z-50 flex w-max flex-col gap-1.5 overflow-hidden rounded bg-[#00110C] py-3 font-mono text-[#17BB83] opacity-0 shadow-lg transition-[opacity,transform] duration-100 ease-in",
        {
          "scale-y-95": isVertical,
          "scale-95": isHorizontal,

          "!scale-100 pointer-events-auto opacity-100 duration-200 ease-out":
            isOpen,

          // Transform origin
          "origin-top-left": [
            "right start",
            "right",
            "bottom",
            "bottom start",
          ].includes(anchor),
          "origin-top": anchor === "bottom center",
          "origin-top-right": ["bottom end", "left", "left start"].includes(
            anchor,
          ),
          "origin-right": anchor === "left center",
          "origin-bottom-right": ["top end", "left end"].includes(anchor),
          "origin-bottom": anchor === "top center",
          "origin-bottom-left": ["top", "top start", "right end"].includes(
            anchor,
          ),
          "origin-left": anchor === "right center",

          // Non-portal alignment
          "left-0": !portal && align === "start",
          "-translate-x-1/2 left-1/2": !portal && align === "center" && side,
          "right-0": !portal && align === "end",

          // Portal alignment
          "!fixed": portal,
          "-translate-x-1/2": portal && align === "center" && isVertical,
          // "-translate-x-full": portal && align === "end" && isVertical,
          "-translate-y-1/2": portal && align === "center" && isHorizontal,
          "-translate-y-full": portal && align === "end" && isHorizontal,
        },
        {
          "max-lg:static max-lg:w-full max-lg:bg-transparent max-lg:pt-0 max-lg:data-[closed]:h-0 max-lg:data-[closed]:p-0":
            !portal,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );

  return portal ? createPortal(Menu, document.body) : Menu;
};

// Item //

Dropdown.Item = function DropdownItem({
  className,
  children,
  ...rest
}: ClickableProps) {
  return (
    <Clickable
      data-dropdown-item
      tabIndex={-1}
      role="menuitem"
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      onKeyDown={(
        e: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
      ) => {
        if (e.key === " ") {
          e.preventDefault();
          e.currentTarget.click();
        }
      }}
      className={classNames(
        "flex h-9 items-center gap-3 from-aquamarine to-teal-400 pr-6 pl-4 [&:not(:disabled)]:hocus-visible:bg-gradient-to-r [&:not(:disabled)]:hocus-visible:text-aquamarine-950",
        "max-lg:h-12",
        className,
      )}
      {...rest}
    >
      {children}
    </Clickable>
  );
};

// Context //

export interface DropdownContextType {
  /**
   * Whether the dropdown is open.
   */
  isOpen: boolean;
  /**
   * Whether any part of the dropdown is hovered.
   */
  isHovered: boolean;
  /**
   * The ref of the dropdown container.
   */
  containerRef: React.RefObject<HTMLDivElement | null>;
  /**
   * The ref of the dropdown button that toggles the menu.
   */
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  /**
   * The ref of the dropdown menu that is toggled.
   */
  menuRef: React.RefObject<HTMLDivElement | null>;
  /**
   * Opens the dropdown menu.
   * @param focusFirstItem - Whether to focus the first item in the menu.
   * Defaults to `true`.
   */
  open: (focusFirstItem?: boolean) => void;
  /**
   * Closes the dropdown menu.
   * @param focusTarget - The element to focus after closing.
   * Defaults to the button that toggles the menu.
   */
  close: (focusTarget?: HTMLElement | null) => void;
}

const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  isHovered: false,
  containerRef: { current: null },
  buttonRef: { current: null },
  menuRef: { current: null },
  open: () => {},
  close: () => {},
});

// Helpers //

function isDropdownItem(
  element: Element | EventTarget,
): element is HTMLElement {
  return (
    element instanceof HTMLElement &&
    element.hasAttribute("data-dropdown-item") &&
    !element.matches(":disabled")
  );
}

function findPreviousDropdownItem(element: Element): HTMLElement | null {
  let prev = element.previousElementSibling;
  while (prev && !isDropdownItem(prev)) {
    prev = prev.previousElementSibling;
  }
  return prev;
}

function findNextDropdownItem(element: Element): HTMLElement | null {
  let next = element.nextElementSibling;
  while (next && !isDropdownItem(next)) {
    next = next.nextElementSibling;
  }
  return next;
}

function findFirstDropdownItem(element: Element): HTMLElement | null {
  let first = element.firstElementChild;
  while (first && !isDropdownItem(first)) {
    first = first.nextElementSibling;
  }
  return first;
}
