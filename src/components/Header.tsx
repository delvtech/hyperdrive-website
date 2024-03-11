import classNames from "classnames";
import { useState } from "react";
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
}

export function Header({ className, theme = "dark" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  const scrollPosition = useScrollPosition();

  let activeTheme = theme;
  if (typeof theme === "object") {
    for (const [position, themeAtPosition] of Object.entries(theme)) {
      if (scrollPosition > parseInt(position)) {
        activeTheme = themeAtPosition;
        break;
      }
    }
  }

  const isScrolled = scrollPosition > 0;
  // TODO:
  const isCollapsible = false;

  return (
    <div
      className={classNames(
        "flex items-center justify-between px-16 py-6 fixed top-0 left-0 right-0 z-10 transition-all duration-300 uppercase font-mono text-sm",
        {
          "text-neutral-100": activeTheme === "dark",
          "text-neutral-900": activeTheme === "light",
          "!pt-2 bg-gradient-to-b from-neutral-950 to-neutral-950/0":
            isScrolled,
        },
        className,
      )}
    >
      {/* Logo */}
      <Link
        to="/"
        className="px-8 h-12 backdrop-blur rounded-full flex items-center"
      >
        <img
          src={activeTheme === "light" ? hyperdriveLogo : hyperdriveLogoWhite}
          className="h-6 transition-all duration-300"
          alt="Hyperdrive"
        />
      </Link>

      {/* Menu */}
      <div className="flex flex-row-reverse items-center gap-8 justify-self-end">
        <button
          className={classNames(
            "h-12 w-12 shrink-0 border border-transparent hover:border-neutral-500 transition-all rounded-full justify-center items-center hidden backdrop-blur",
            {
              "!flex bg-neutral-950/80": isCollapsible,
            },
          )}
          onClick={toggleMenu}
        >
          <img src={isMenuOpen ? xIcon : menuIcon} alt="Menu" />
        </button>
        <div
          className={classNames(
            "flex gap-8 font-medium duration-300 overflow-hidden backdrop-blur rounded-full",
            {
              "w-0": isScrolled && !isMenuOpen,
              "w-full px-4": !isScrolled || isMenuOpen,
            },
          )}
        >
          <a
            className="p-3 hover:font-bold transition-[font-weight] duration-300 hover:text-aquamarine transition-all"
            href="https://hyperdrive.delv.tech/docs"
          >
            Docs
          </a>
          <NavLink
            className={({ isActive }) =>
              classNames(
                "p-3 hover:font-bold transition-[font-weight] duration-300 hover:text-aquamarine transition-all",
                {
                  "text-aquamarine": isActive,
                },
              )
            }
            to="/build"
          >
            Build
          </NavLink>
          <a
            className="p-3 hover:font-bold transition-[font-weight] duration-300 hover:text-aquamarine transition-all"
            href="#"
          >
            Analytics
          </a>
          <a
            className="p-3 hover:font-bold transition-[font-weight] duration-300 hover:text-aquamarine transition-all"
            href="https://hyperdrive.delv.tech/app"
          >
            App
          </a>
        </div>
      </div>
    </div>
  );
}
