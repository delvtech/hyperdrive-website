import { ChevronDownIcon } from "@heroicons/react/16/solid";
import classNames from "classnames";
import {
  type ComponentPropsWithoutRef,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { Clickable, type ClickableProps } from "src/components/Clickable";
import { useScrollEffect } from "src/hooks/useScrollEffect";

export type DropdownAlignment = "start" | "center" | "end";

export interface DropdownProps
  extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  align?: DropdownAlignment;
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
 * example, `headlessui` and `shadcn/ui` don't support hover states and
 * `daisyui` doesn't support portal rendering.
 *
 * With this flexible API, we can create things like a floating dropdown menu
 * that appears on hover for large screens and have it change to a static menu
 * that expands on click for smaller screens.
 */
export function Dropdown({
  align = "start",
  className,
  children,
  ...rest
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleMouseUp(e: MouseEvent) {
      if (containerRef.current?.contains(e.target as Element)) {
        e.preventDefault();
      } else {
        setIsOpen(false);
      }
    }

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

    buttonRef.current =
      containerRef.current?.querySelector("[data-dropdown-button]") || null;
    menuRef.current =
      containerRef.current?.querySelector("[data-dropdown-menu]") || null;

    buttonRef.current?.addEventListener("click", handleButtonClick);
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
      alignment: align,
      containerRef,
      buttonRef,
      menuRef,
    };
  }, [isOpen, isHovered, align]);

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
  const { isOpen, alignment, isHovered } = useContext(DropdownContext);
  return (
    <button
      type="button"
      data-dropdown-button
      data-open={isOpen || undefined}
      data-closed={!isOpen || undefined}
      data-align={alignment}
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
        className={classNames(
          "lg:group-hover:-scale-y-100 size-4 transition-all duration-100",
          {
            "-scale-y-100": isOpen,
            "lg:-scale-y-100": isHovered,
          },
        )}
      />
    </button>
  );
};

// Menu //

export interface DropdownMenuProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Whether the menu should open on hover.
   */
  hover?: boolean;
  /**
   * Whether the menu should be rendered in a portal.
   */
  portal?: boolean;
}

Dropdown.Menu = function DropdownMenu({
  hover = false,
  portal = false,
  className,
  children,
  ...rest
}: DropdownMenuProps) {
  const { isOpen, isHovered, alignment, buttonRef } =
    useContext(DropdownContext);

  function getPosition() {
    if (!portal || !buttonRef.current) {
      console.log("No portal or button ref");
      return {
        left: undefined,
        top: undefined,
      };
    }
    const rect = buttonRef.current.getBoundingClientRect();
    console.log("Setting position", rect);
    return {
      left: rect.left,
      top: rect.top + rect.height,
    };
  }

  const [position, setPosition] = useState(getPosition);

  useScrollEffect(() => {
    if (portal) setPosition(getPosition());
  }, [portal]);

  useEffect(() => {
    function resetPosition() {
      setPosition(getPosition());
    }
    window.addEventListener("resize", resetPosition);
    return () => window.removeEventListener("resize", resetPosition);
  });

  const Menu = (
    <div
      data-dropdown-menu
      data-open={isOpen || undefined}
      data-closed={!isOpen || undefined}
      data-align={alignment}
      tabIndex={-1}
      role="menu"
      aria-hidden={!isOpen}
      style={{ left: position.left, top: position.top }}
      className={classNames(
        "pointer-events-none top-full z-50 flex w-max scale-y-95 flex-col gap-1.5 overflow-hidden rounded bg-[#00110C] py-3 font-mono text-[#17BB83] opacity-0 shadow-lg transition-[opacity,transform] duration-100 ease-in",
        {
          fixed: portal,
          "origin-top-right": alignment === "end",
          "origin-top": alignment === "center",
          "origin-top-left": alignment === "start",

          "!scale-100 pointer-events-auto opacity-100 duration-200 ease-out":
            isOpen,

          // Non-portal alignment
          absolute: !portal,
          "right-0": alignment === "end" && !portal,
          "-translate-x-1/2 left-1/2": alignment === "center" && !portal,
          "left-0": alignment === "start" && !portal,
        },
        {
          "lg:!scale-100 lg:pointer-events-auto lg:opacity-100 lg:duration-200 lg:ease-out":
            hover && isHovered,
        },
        // "lg:hover:pointer-events-auto lg:hover:scale-100 lg:hover:opacity-100 lg:hover:duration-200 lg:hover:ease-out",
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

  if (portal) {
    return createPortal(Menu, document.body);
  }

  return Menu;
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
   *
   * __Note:__ This is not the same as the menu being visible. Hover states are
   * not considered.
   */
  isOpen: boolean;
  /**
   * Whether any part of the dropdown is hovered.
   */
  isHovered: boolean;
  /**
   * The alignment of the dropdown.
   */
  alignment: DropdownAlignment;
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
   */
  open: () => void;
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
  alignment: "start",
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
