import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import hyperdriveLogo from "src/assets/hyperdrive-logo.svg";
import { useIsScrolled } from "src/hooks/useIsScrolled";

export function Header() {
  const { pathname } = useLocation();
  const isScrolled = useIsScrolled();

  return (
    <div
      className={classNames(
        "flex justify-between items-center px-16 py-6 fixed top-0 left-0 right-0 z-10 bg-neutral-200/60 backdrop-blur transition-all",
        {
          "py-2": isScrolled,
        },
      )}
    >
      <Link to="/">
        <img
          src={hyperdriveLogo}
          className={classNames("h-9 transition-all", {
            "h-7": isScrolled,
          })}
          alt="Hyperdrive"
        />
      </Link>
      <div className="flex gap-8">
        <Link className="p-3" to="https://docs.hyperdrive.com">
          Docs
        </Link>
        <Link
          className={classNames("p-3", {
            "font-bold": pathname === "/build",
          })}
          to="/build"
        >
          Build
        </Link>
        <Link className="p-3" to="#">
          App
        </Link>
      </div>
    </div>
  );
}
