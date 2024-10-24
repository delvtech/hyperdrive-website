import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Clickable, ClickableProps } from "src/components/Clickable";
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

  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;

  const showBanner =
    SHOW_ANNOUNCEMENT_BANNER && new Date() < ANNOUNCEMENT_BANNER_EXPIRY;

  return (
    <>
      {/* Header fixed container */}
      <div
        className={classNames(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "max-lg:transition-none max-lg:pt-4",
          {
            "max-lg:bg-[#00110C] max-lg:bottom-5": isMenuOpen,
          },
          className,
        )}
      >
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
        <div className="inner-container">
          <header
            className={classNames(
              "grid items-center gap-x-2 px-10 py-3 font-mono text-sm bg-white/15 backdrop-blur-3xl rounded-xl",
              "max-lg:pl-8 max-lg:pr-4 max-lg:py-2",
              {
                "max-lg:bg-transparent max-lg:backdrop-blur-none": isMenuOpen,
              },
              "max-md:pl-5",
            )}
          >
            {/* Logo */}
            <Link to="/" className="row-start-1">
              <img
                src="/logos/delv-hyperdrive-box-white.svg"
                className={classNames(
                  "h-11",
                  "max-xl:h-9",
                  "max-md:h-7",
                  "max-xs:h-6",
                )}
                alt="Hyperdrive.box by DELV"
              />
            </Link>

            {/* Mobile menu button */}
            <button
              className={classNames(
                "size-11 shrink-0 border border-transparent hover:border-content/15 transition-all rounded-lg justify-center justify-self-end items-center hidden row-start-1",
                "max-lg:!flex",
              )}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <img
                src={isMenuOpen ? "/icons/x-icon.svg" : "/icons/menu-icon.svg"}
                alt="Menu"
              />
            </button>

            {/* Menu */}
            <div
              className={classNames(
                "flex items-center gap-4 justify-self-end row-start-1",
                "max-lg:col-span-2 max-lg:justify-self-stretch max-lg:row-start-2 max-lg:border-t max-lg:border-content/15 max-lg:mt-4",
                {
                  "max-lg:hidden": !isMenuOpen,
                },
              )}
            >
              {/* Menu list */}
              <nav
                className={classNames(
                  "flex items-center gap-2",
                  {
                    "max-lg:h-0 max-lg:opacity-0 max-lg:!p-0": !isMenuOpen,
                  },
                  "max-lg:flex-col max-lg:py-4 max-lg:w-full",
                )}
              >
                {/* Learn */}
                <Popover>
                  {() => (
                    <>
                      <PopoverButton className="uppercase flex items-center gap-1 h-10 px-1 data-[open]:text-aquamarine hover:text-aquamarine group">
                        Learn{" "}
                        <ChevronDownIcon className="size-4 group-data-[open]:-scale-y-100 transition-all duration-150" />
                      </PopoverButton>
                      <PopoverPanel
                        className={classNames(
                          "z-50 bg-[#00110C] rounded shadow-lg text-[#17BB83] flex flex-col gap-1.5 py-3 font-mono",
                          "max-lg:h-0 max-lg:data-[open]:h-auto max-lg:!bg-transparent max-lg:shadow-none",
                        )}
                        anchor={"bottom start"}
                        // anchor={pageWidth > 1080 ? "bottom start" : undefined}
                        modal={false}
                        // static={pageWidth < 1080}
                      >
                        <MenuLink to="/docs">
                          <DocIcon className="size-4" />
                          Docs
                        </MenuLink>
                        <MenuLink href="https://blog.delv.tech">
                          <BlogIcon className="size-4" />
                          Blog
                        </MenuLink>
                        <MenuLink to="/docs/trading/trading-strategies">
                          <StrategyIcon className="size-4" />
                          Trading Strategies
                        </MenuLink>
                        <MenuLink to="/whitepaper">
                          <NoteIcon className="size-4" />
                          Whitepaper
                        </MenuLink>
                        <MenuLink to="/docs/hyperdrive-overview/glossary">
                          <BookIcon className="size-4" />
                          Glossary
                        </MenuLink>
                      </PopoverPanel>
                    </>
                  )}
                </Popover>

                {/* Developers */}
                <Popover>
                  <PopoverButton className="uppercase flex items-center gap-1 h-10 px-1 data-[open]:text-aquamarine hover:text-aquamarine group">
                    Developers{" "}
                    <ChevronDownIcon className="size-4 group-data-[open]:-scale-y-100 transition-all duration-150" />
                  </PopoverButton>
                  <PopoverPanel
                    className="z-50 bg-[#00110C] rounded shadow-lg text-[#17BB83] flex flex-col gap-1.5 py-3 font-mono"
                    anchor="bottom start"
                    modal={false}
                  >
                    <MenuLink to="/docs/hyperdrive-for-developers">
                      <CodeDocIcon className="size-4" />
                      Docs
                    </MenuLink>
                    <MenuLink to="/build">
                      <CoreIcon className="size-4" />
                      Hyperdrive [Core]
                    </MenuLink>
                  </PopoverPanel>
                </Popover>

                {/* Community */}
                <Popover>
                  <PopoverButton className="uppercase flex items-center gap-1 h-10 px-1 data-[open]:text-aquamarine hover:text-aquamarine group">
                    Community{" "}
                    <ChevronDownIcon className="size-4 group-data-[open]:-scale-y-100 transition-all duration-150" />
                  </PopoverButton>
                  <PopoverPanel
                    className="z-50 bg-[#00110C] rounded shadow-lg text-[#17BB83] flex flex-col gap-1.5 py-3 font-mono"
                    anchor="bottom start"
                    modal={false}
                  >
                    <MenuLink href="https://www.delv.tech/discord">
                      <DiscordLogoIcon className="size-4" />
                      Discord
                    </MenuLink>
                    <MenuLink href="https://twitter.com/delv_tech/">
                      <XLogoIcon className="size-4" />X
                    </MenuLink>
                    <MenuLink href="https://warpcast.com/~/channel/delv">
                      <FarcasterLogoIcon className="size-4" />
                      Farcaster
                    </MenuLink>
                    <MenuLink href="https://www.linkedin.com/company/delv-tech/">
                      <LinkedInLogoIcon className="size-4" />
                      LinkedIn
                    </MenuLink>
                  </PopoverPanel>
                </Popover>

                {/* Analytics */}
                <Link
                  className="uppercase flex items-center h-8 px-1 duration-150 hover:text-aquamarine transition-all"
                  to="/analytics"
                >
                  Analytics
                </Link>

                {/* Launch Apps */}
                <Popover>
                  <PopoverButton className="uppercase flex items-center gap-1 h-10 px-1 data-[open]:text-aquamarine hover:text-aquamarine group whitespace-nowrap">
                    Launch Apps{" "}
                    <ChevronDownIcon className="size-4 group-data-[open]:-scale-y-100 transition-all duration-150" />
                  </PopoverButton>
                  <PopoverPanel
                    className="z-50 bg-[#00110C] rounded shadow-lg text-[#17BB83] flex flex-col gap-1.5 py-3 font-mono"
                    anchor="bottom end"
                    modal={false}
                  >
                    <MenuLink to="/one">
                      <HyperdriveLogoIcon className="size-4" />
                      Hyperdrive One
                    </MenuLink>
                    <MenuLink to="/borrow">
                      <HyperdriveLogoIcon className="size-4" />
                      Fixed Borrow
                    </MenuLink>
                  </PopoverPanel>
                </Popover>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

function MenuLink({ children, className, ...rest }: ClickableProps) {
  return (
    <Clickable
      {...rest}
      className={classNames(
        "h-9 pl-4 pr-6 hover:bg-gradient-to-r from-aquamarine to-teal-400 hover:text-aquamarine-950 flex gap-3 items-center",
        className,
      )}
    >
      {children}
    </Clickable>
  );
}
