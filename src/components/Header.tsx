import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BlogIcon } from "src/components/icons/BlogIcon";
import { BookIcon } from "src/components/icons/BookIcon";
import { CodeDocIcon } from "src/components/icons/CodeDocIcon";
import { CoreIcon } from "src/components/icons/CoreIcon";
import { DiscordLogoIcon } from "src/components/icons/DiscordLogoIcon";
import { DocIcon } from "src/components/icons/DocIcon";
import { FarcasterLogoIcon } from "src/components/icons/FarcasterLogoIcon";
import { HyperdriveLogoIcon } from "src/components/icons/HyperdriveLogoIcon";
import { LinkedInLogoIcon } from "src/components/icons/LinkedInLogoIcon";
import { NoteIcon } from "src/components/icons/NoteIcon";
import { StrategyIcon } from "src/components/icons/StrategyIcon";
import { XLogoIcon } from "src/components/icons/XLogoIcon";
import { useScrollPosition } from "src/hooks/useScrollPosition";

const SHOW_ANNOUNCEMENT_BANNER = false;
const ANNOUNCEMENT_BANNER_EXPIRY = new Date("11/01/2024");

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;

  const showBanner =
    SHOW_ANNOUNCEMENT_BANNER && new Date() < ANNOUNCEMENT_BANNER_EXPIRY;

  return (
    <>
      {/* Announcement banner */}
      {showBanner && (
        <div className="h-10 bg-aquamarine-950 border-b border-white/10 flex items-center justify-center px-3 py-2 text-sm">
          <InformationCircleIcon className="h-5 w-5 mr-1" />
          <p className="leading-none">
            We've updated our{" "}
            {/* <a
              href="https://delv-public.s3.us-east-2.amazonaws.com/delv-privacy-policy.pdf"
              className="text-[#71F8F8]"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>{" "}
            and{" "} */}
            <a
              href="https://delv-public.s3.us-east-2.amazonaws.com/delv-terms-of-service.pdf"
              className="text-white hover:text-aquamarine transition-all duration-300"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Service
            </a>
            .
          </p>
        </div>
      )}

      {/* Header */}
      <div
        className={classNames(
          "inner-container fixed top-8 left-0 right-0 z-50 transition-all duration-300",
          {
            "!top-4": isScrolled,
            "mt-8": showBanner && !isScrolled,
          },
          className,
        )}
      >
        <div className="flex items-center justify-between px-10 py-3 font-mono text-sm bg-white/15 backdrop-blur-3xl rounded-xl">
          {/* Logo */}
          <Link to="/">
            <img
              src="/logos/delv-hyperdrive-box-white.svg"
              className="h-11"
              alt="Hyperdrive.box by DELV"
            />
          </Link>

          {/* Menu */}
          <div
            className={classNames(
              "flex items-center gap-4 justify-self-end",
              {},
            )}
          >
            {/* Mobile menu button */}
            <button
              className={classNames(
                "h-12 w-12 shrink-0 border border-transparent hover:border-neutral-500 transition-all rounded-full justify-center items-center hidden backdrop-blur",
                "max-lg:!flex max-lg:bg-neutral-950/90",
              )}
              onClick={toggleMenu}
            >
              <img
                src={isMenuOpen ? "/icons/x-icon.svg" : "/icons/menu-icon.svg"}
                alt="Menu"
              />
            </button>

            {/* Menu list */}
            <div
              className={classNames(
                "flex items-center gap-2",
                {
                  "max-lg:w-0": !isMenuOpen,
                  "max-lg:w-full max-lg:px-4": isMenuOpen,
                },
                "max-md:flex-col max-md:py-4 max-md:bg-neutral-950/80",
              )}
            >
              {/* Learn */}
              <Menu>
                <MenuButton className="uppercase flex items-center gap-1 h-10 px-1 data-[open]:text-aquamarine hover:text-aquamarine group">
                  Learn{" "}
                  <ChevronDownIcon className="size-4 group-data-[open]:-scale-y-100 transition-all duration-150" />
                </MenuButton>
                <MenuItems
                  className="z-50 bg-[#00110C] rounded shadow-lg text-[#17BB83] flex flex-col gap-1.5 py-3 font-mono"
                  anchor="bottom start"
                  modal={false}
                >
                  <MenuItem>
                    <Link
                      to="/docs"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <DocIcon className="size-4" />
                      Docs
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="https://blog.delv.tech"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <BlogIcon className="size-4" />
                      Blog
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="https://docs.hyperdrive.box/trading/trading-strategies"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <StrategyIcon className="size-4" />
                      Trading Strategies
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/whitepaper"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <NoteIcon className="size-4" />
                      Whitepaper
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/docs/hyperdrive-overview/glossary"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <BookIcon className="size-4" />
                      Glossary
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>

              {/* Developers */}
              <Menu>
                <MenuButton className="uppercase flex items-center gap-1 h-10 px-1 data-[open]:text-aquamarine hover:text-aquamarine group">
                  Developers{" "}
                  <ChevronDownIcon className="size-4 group-data-[open]:-scale-y-100 transition-all duration-150" />
                </MenuButton>
                <MenuItems
                  className="z-50 bg-[#00110C] rounded shadow-lg text-[#17BB83] flex flex-col gap-1.5 py-3 font-mono"
                  anchor="bottom start"
                  modal={false}
                >
                  <MenuItem>
                    <Link
                      to="/docs"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <CodeDocIcon className="size-4" />
                      Docs
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/build"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <CoreIcon className="size-4" />
                      Hyperdrive [Core]
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>

              {/* Community */}
              <Menu>
                <MenuButton className="uppercase flex items-center gap-1 h-10 px-1 data-[open]:text-aquamarine hover:text-aquamarine group">
                  Community{" "}
                  <ChevronDownIcon className="size-4 group-data-[open]:-scale-y-100 transition-all duration-150" />
                </MenuButton>
                <MenuItems
                  className="z-50 bg-[#00110C] rounded shadow-lg text-[#17BB83] flex flex-col gap-1.5 py-3 font-mono"
                  anchor="bottom start"
                  modal={false}
                >
                  <MenuItem>
                    <a
                      href="https://www.delv.tech/discord"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <DiscordLogoIcon className="size-4" />
                      Discord
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="https://twitter.com/delv_tech/"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <XLogoIcon className="size-4" />X
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="https://warpcast.com/~/channel/delv"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <FarcasterLogoIcon className="size-4" />
                      Farcaster
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="https://www.linkedin.com/company/delv-tech/"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <LinkedInLogoIcon className="size-4" />
                      LinkedIn
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>

              {/* Analytics */}
              <Link
                className="uppercase flex items-center h-8 px-1 duration-150 hover:text-aquamarine transition-all"
                to="/analytics"
              >
                Analytics
              </Link>

              {/* Launch Apps */}
              <Menu>
                <MenuButton className="uppercase flex items-center gap-1 h-10 px-1 data-[open]:text-aquamarine hover:text-aquamarine group">
                  Launch Apps{" "}
                  <ChevronDownIcon className="size-4 group-data-[open]:-scale-y-100 transition-all duration-150" />
                </MenuButton>
                <MenuItems
                  className="z-50 bg-[#00110C] rounded shadow-lg text-[#17BB83] flex flex-col gap-1.5 py-3 font-mono"
                  anchor="bottom start"
                  modal={false}
                >
                  <MenuItem>
                    <Link
                      to="/one"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <HyperdriveLogoIcon className="size-4" />
                      Hyperdrive One
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/borrow"
                      className="h-9 pl-4 pr-6 data-[focus]:bg-gradient-to-r from-aquamarine to-teal-400 data-[focus]:text-aquamarine-950 flex gap-3 items-center"
                    >
                      <HyperdriveLogoIcon className="size-4" />
                      Fixed Borrow
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
