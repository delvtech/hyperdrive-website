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
 * example: `headlessui` and `radix-ui` don't support hover states; `daisyui`
 * breaks accessibility and doesn't support portal rendering to avoid
 * z-index/overflow issues.
 *
 * With this flexible API, we can create things like a floating dropdown menu
 * that appears on hover for large screens and have it change to a static menu
 * that expands on click for smaller screens.
 */
export function Dropdown({ className, children, ...rest }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [button, setButton] = useState<HTMLButtonElement | null>(null);
  const [menu, setMenu] = useState<HTMLDivElement | null>(null);

  // Ref callbacks to set the button and menu elements.
  const buttonRef = useCallback((el: HTMLButtonElement | null) => {
    setButton(el);
  }, []);
  const menuRef = useCallback((el: HTMLDivElement | null) => {
    setMenu(el);
  }, []);

  useEffect(() => {
    // Find the button and menu elements by their data attributes if not set.
    if (!button) {
      const foundButton = containerRef.current?.querySelector(
        "[data-dropdown-button]",
      );
      if (foundButton) {
        setButton(foundButton as HTMLButtonElement);
      }
    }
    if (!menu) {
      const foundMenu = containerRef.current?.querySelector(
        "[data-dropdown-menu]",
      );
      if (foundMenu) {
        setMenu(foundMenu as HTMLDivElement);
      }
    }

    // Open the dropdown when clicking the button.
    function handleButtonClick(e: MouseEvent) {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen((prev) => {
        if (!prev && menu) {
          findFirstDropdownItem(menu)?.focus();
        }
        return !prev;
      });
    }
    button?.addEventListener("click", handleButtonClick);

    // Close the dropdown when clicking outside of it. The handler is added to
    // the "mouseup" event which is triggered even if propagation is stopped on
    // the "click" event.
    function handleMouseUp(e: MouseEvent) {
      if (containerRef.current?.contains(e.target as Element)) {
        e.preventDefault();
      } else {
        setIsOpen(false);
      }
    }
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      button?.removeEventListener("click", handleButtonClick);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [button, menu]);

  const context = useMemo(() => {
    return {
      isOpen,
      isHovered,
      open: () => setIsOpen(true),
      close: (focusTarget: HTMLElement | null = button) => {
        setIsOpen(false);
        focusTarget?.focus();
      },
      containerRef,
      button,
      menu,
      buttonRef,
      menuRef,
    };
  }, [isOpen, isHovered, button, menu, buttonRef, menuRef]);

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
                if (e.target === button) {
                  setIsOpen(true);
                  if (menu) {
                    findFirstDropdownItem(menu)?.focus();
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
                button?.focus();
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
          {typeof children === "function" ? children(context) : children}
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
        "flex h-10 items-center gap-1 whitespace-nowrap px-1 uppercase",
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
  const { isHovered, isOpen, button, menu, menuRef, open, close } =
    useContext(DropdownContext);

  // The viewport coordinates of the menu relative to it's top-left corner.
  const [coordinates, setCoordinates] = useState<Coordinates>();

  // The side and alignment of the menu relative to the button.
  const [side, align = "start"] = anchor.split(" ") as [
    DropdownSide,
    DropdownAlignment,
  ];
  const isVertical = ["top", "bottom"].includes(side);
  const isHorizontal = ["left", "right"].includes(side);

  // Position the menu relative to the button.
  const positionMenu = useCallback(() => {
    // Ignore if not a portal or the button ref is not set.
    if (!portal || !button) {
      return;
    }

    const position: Coordinates = {};
    const rect = button.getBoundingClientRect();

    switch (side) {
      case "top":
        position.top = rect.top;
        break;
      case "right":
        position.left = rect.right;
        break;
      case "bottom":
        position.top = rect.bottom;
        break;
      case "left":
        position.right = window.innerWidth - rect.left;
        break;
    }

    switch (anchor) {
      case "top":
      case "top start":
      case "bottom":
      case "bottom start":
        position.left = rect.left;
        break;
      case "top center":
      case "bottom center":
        position.left = rect.left + rect.width / 2;
        break;
      case "top end":
      case "bottom end":
        position.right = window.innerWidth - rect.right;
        break;
      case "right":
      case "right start":
      case "left":
      case "left start":
        position.top = rect.top;
        break;
      case "right center":
      case "left center":
        position.top = rect.top + rect.height / 2;
        break;
      case "right end":
      case "left end":
        position.top = rect.bottom;
        break;
    }

    setCoordinates(position);
  }, [portal, button, anchor, side]);

  // Reposition the menu on open in case the button moved.
  useEffect(() => {
    if (isOpen) positionMenu();
  }, [isOpen, positionMenu]);

  // Reposition the menu on scroll.
  useScrollEffect(() => {
    if (isOpen) positionMenu();
  }, [isOpen, positionMenu]);

  useEffect(() => {
    // Open/close on hover if enabled.
    if (hover && isHovered && !isOpen) {
      open(false);
    } else if (
      hover &&
      !isHovered &&
      isOpen &&
      !menu?.contains(document.activeElement)
    ) {
      close(null);
    }

    // Reposition the menu on resize.
    window.addEventListener("resize", positionMenu);
    return () => window.removeEventListener("resize", positionMenu);
  });

  const Menu = (
    <div
      ref={menuRef}
      data-dropdown-menu
      data-open={isOpen || undefined}
      data-closed={!isOpen || undefined}
      data-side={side}
      data-align={align}
      tabIndex={-1}
      role="menu"
      aria-hidden={!isOpen}
      style={coordinates}
      className={classNames(
        "pointer-events-none absolute z-50 flex w-max flex-col gap-1.5 overflow-hidden rounded bg-[#00110C] py-3 font-mono text-[#17BB83] opacity-0 shadow-lg transition-[opacity,transform] duration-100 ease-in",
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
          "top-full": !portal && side === "bottom",
          "right-full": !portal && side === "left",
          "bottom-full": !portal && side === "top",
          "left-full": !portal && side === "right",
          "top-0": !portal && isHorizontal && align === "start",
          "right-0": !portal && isVertical && align === "end",
          "-translate-y-1/2 top-1/2":
            !portal && isHorizontal && align === "center",
          "bottom-0": !portal && isHorizontal && align === "end",
          "left-0": !portal && isVertical && align === "start",
          "-translate-x-1/2 left-1/2":
            !portal && isVertical && align === "center",

          // Portal alignment
          "!fixed": portal,
          "-translate-x-1/2": portal && isVertical && align === "center",
          "-translate-y-1/2": portal && isHorizontal && align === "center",
          "-translate-y-full":
            portal && ((isHorizontal && align === "end") || side === "top"),
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
   * The button that toggles the dropdown.
   */
  button: HTMLButtonElement | null;
  /**
   * The dropdown menu.
   */
  menu: HTMLDivElement | null;
  /**
   * The ref callback to set the button element.
   */
  buttonRef: React.RefCallback<HTMLButtonElement | null>;
  /**
   * The ref callback to set the menu element.
   */
  menuRef: React.RefCallback<HTMLDivElement | null>;
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
  button: null,
  menu: null,
  buttonRef: () => {},
  menuRef: () => {},
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
