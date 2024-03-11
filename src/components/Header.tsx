import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import menuIcon from "src/assets/icons/menu-icon.svg";
import xIcon from "src/assets/icons/x-icon.svg";
import hyperdriveLogoWhite from "src/assets/logos/hyperdrive-logo-white.svg";
import hyperdriveLogo from "src/assets/logos/hyperdrive-logo.svg";
import { useScrollPosition } from "src/hooks/useScrollPosition";

interface HeaderProps {
  className?: string;
  /**
   * The theme to use for the header. Can be a theme name or an object with
   * the scroll positions as keys and the theme names as values to change the
   * theme based on the scroll position.
   *
   * Set to `"light"` to use colors suitable for a light background, or `"dark"`
   * for a dark background.
   *
   * @default "dark"
   */
  theme?: "dark" | "light" | Record<number, "light" | "dark">;
  /**
   * Set to `true` to make the menu collapsible with a menu button
   * @default false
   */
  collapsibleMenu?: boolean;
  /**
   * Set to `true` to collapse the menu by default
   * @default true
   */
  defaultMenuCollapsed?: boolean;

  /**
   * Section navigation
   */
  sections?: {
    id: string;
    title: string;
  }[];
  showSectionMenu?: boolean;
}

export function Header({
  className,
  theme = "dark",
  collapsibleMenu = false,
  defaultMenuCollapsed = true,
  sections = [],
  showSectionMenu = true,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(!defaultMenuCollapsed);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  const scrollPosition = useScrollPosition();
  const scrollPositionsRef = useRef<{ [key: string]: number }>({});
  const sectionIdsSortedByPositionRef = useRef<string[]>([]);

  useEffect(() => {
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        scrollPositionsRef.current[section.id] =
          element.getBoundingClientRect().top + window.scrollY;
      }
    });

    sectionIdsSortedByPositionRef.current = Object.keys(
      scrollPositionsRef.current,
    ).sort(
      (a, b) => scrollPositionsRef.current[a] - scrollPositionsRef.current[b],
    );
  }, []);

  function isInSection(sectionId: string) {
    const sectionIndex =
      sectionIdsSortedByPositionRef.current.indexOf(sectionId);
    const nextSectionId =
      sectionIdsSortedByPositionRef.current[sectionIndex + 1];
    const nextSectionPosition = scrollPositionsRef.current[nextSectionId];

    if (
      scrollPosition >= scrollPositionsRef.current[sectionId] &&
      scrollPosition < nextSectionPosition
    ) {
      return true;
    }
    return false;
  }

  let activeTheme = theme;
  if (typeof theme === "object") {
    for (const [position, themeAtPosition] of Object.entries(theme)) {
      if (scrollPosition > parseInt(position)) {
        activeTheme = themeAtPosition;
        break;
      }
    }
  }

  return (
    <div
      className={classNames(
        "grid grid-cols-3 items-center px-16 py-6 fixed top-0 left-0 right-0 z-10 transition-all duration-300 uppercase font-mono text-sm",
        {
          "text-neutral-100": activeTheme === "dark",
          "text-neutral-900": activeTheme === "light",
          "!py-2": scrollPosition > 0,
        },
        className,
      )}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={activeTheme === "light" ? hyperdriveLogo : hyperdriveLogoWhite}
          className="h-6 transition-all duration-300"
          alt="Hyperdrive"
        />
      </Link>

      {/* Section Menu */}
      <div>
        {showSectionMenu && sections.length > 0 && (
          <div className="sticky flex gap-8 bg-neutral-900/50 rounded-full h-10 px-6 backdrop-blur-lg">
            {sections.map((section) => (
              <button
                onClick={() => {
                  const element = document.getElementById(section.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                key={section.id}
                className={classNames(
                  "opacity-30 transition-opacity hover:opacity-100 font-medium flex-1",
                  {
                    "!opacity-100": isInSection(section.id),
                  },
                )}
              >
                {section.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Menu */}
      <div className="flex flex-row-reverse items-center gap-8 justify-self-end">
        <button
          className={classNames(
            "h-12 w-12 shrink-0 border border-transparent hover:border-midnight transition-all rounded-full justify-center items-center hidden",
            {
              "!flex": collapsibleMenu,
            },
          )}
          onClick={toggleMenu}
        >
          <img src={isMenuOpen ? xIcon : menuIcon} alt="Menu" />
        </button>
        <div
          className={classNames(
            "flex gap-8 font-medium duration-300 overflow-hidden",
            {
              "!text-aquamarine": collapsibleMenu,
              "w-0": collapsibleMenu && !isMenuOpen,
              "w-full": !collapsibleMenu || isMenuOpen,
            },
          )}
        >
          <a
            className="p-3 hover:font-bold transition-[font-weight] duration-300"
            href="https://hyperdrive.delv.tech/docs"
          >
            Docs
          </a>
          <NavLink
            className={(isActive) =>
              classNames(
                "p-3 hover:font-bold transition-[font-weight] duration-300",
                {
                  "font-bold": isActive,
                },
              )
            }
            to="/build"
          >
            Build
          </NavLink>
          <a
            className="p-3 hover:font-bold transition-[font-weight] duration-300"
            href="#"
          >
            Analytics
          </a>
          <a
            className="p-3 hover:font-bold transition-[font-weight] duration-300"
            href="https://hyperdrive.delv.tech/app"
          >
            App
          </a>
        </div>
      </div>
    </div>
  );
}
