import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { type ComponentPropsWithoutRef, type ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Clickable, type ClickableProps } from "src/components/Clickable";
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
          "fixed top-0 right-0 left-0 z-50",
          {
            "max-lg:bottom-5 max-lg:bg-[#00110C]": isMenuOpen,
          },
          className,
        )}
      >
        {/* Announcement banner */}
        {showBanner && (
          <div className="flex h-10 items-center justify-center border-white/10 border-b bg-aquamarine-950 px-3 py-2 text-sm">
            <InformationCircleIcon className="mr-1 h-5 w-5" />
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
                className="text-white transition-all duration-300 hover:text-aquamarine"
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
              "mt-8 grid items-center gap-x-2 rounded-xl bg-white/15 px-10 py-3 font-mono text-sm backdrop-blur-3xl transition-[margin] duration-300",
              {
                "mt-4": isScrolled,
              },
              "max-lg:mt-4 max-lg:py-2 max-lg:pr-4 max-lg:pl-8",
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
              type="button"
              className={classNames(
                "row-start-1 hidden size-11 shrink-0 items-center justify-center justify-self-end rounded-lg border border-transparent transition-all hover:border-content/15",
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
                "row-start-1 flex items-center gap-4 justify-self-end",
                "max-lg:col-span-2 max-lg:row-start-2 max-lg:mt-4 max-lg:justify-self-stretch max-lg:border-content/15 max-lg:border-t",
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
                    "max-lg:hidden": !isMenuOpen,
                  },
                  "max-lg:w-full max-lg:flex-col max-lg:items-stretch max-lg:py-4",
                )}
              >
                {/* Learn */}
                <Dropdown label="Learn">
                  <DropdownLink to="/docs">
                    <DocIcon className="size-4" />
                    Docs
                  </DropdownLink>
                  <DropdownLink href="https://blog.delv.tech">
                    <BlogIcon className="size-4" />
                    Blog
                  </DropdownLink>
                  <DropdownLink to="/docs/trading/trading-strategies">
                    <StrategyIcon className="size-4" />
                    Trading Strategies
                  </DropdownLink>
                  <DropdownLink to="/whitepaper">
                    <NoteIcon className="size-4" />
                    Whitepaper
                  </DropdownLink>
                  <DropdownLink to="/docs/hyperdrive-overview/glossary">
                    <BookIcon className="size-4" />
                    Glossary
                  </DropdownLink>
                </Dropdown>

                {/* Developers */}
                <Dropdown label="Developers">
                  <DropdownLink to="/docs/hyperdrive-for-developers">
                    <CodeDocIcon className="size-4" />
                    Docs
                  </DropdownLink>
                  <DropdownLink to="/build">
                    <CoreIcon className="size-4" />
                    Hyperdrive [Core]
                  </DropdownLink>
                </Dropdown>

                {/* Community */}
                <Dropdown label="Community">
                  <DropdownLink href="https://www.delv.tech/discord">
                    <DiscordLogoIcon className="size-4" />
                    Discord
                  </DropdownLink>
                  <DropdownLink href="https://twitter.com/delv_tech/">
                    <XLogoIcon className="size-4" />X
                  </DropdownLink>
                  <DropdownLink href="https://warpcast.com/~/channel/delv">
                    <FarcasterLogoIcon className="size-4" />
                    Farcaster
                  </DropdownLink>
                  <DropdownLink href="https://www.linkedin.com/company/delv-tech/">
                    <LinkedInLogoIcon className="size-4" />
                    LinkedIn
                  </DropdownLink>
                </Dropdown>

                {/* Analytics */}
                <Link
                  className="flex h-8 items-center px-1 uppercase transition-all duration-150 hover:text-aquamarine"
                  to="/analytics"
                >
                  Analytics
                </Link>

                {/* Launch Apps */}
                <Dropdown label="Launch Apps" align="end">
                  <DropdownLink to="/one">
                    <HyperdriveLogoIcon className="size-4" />
                    Hyperdrive One
                  </DropdownLink>
                  <DropdownLink to="/borrow">
                    <HyperdriveLogoIcon className="size-4" />
                    Fixed Borrow
                  </DropdownLink>
                </Dropdown>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

interface DropdownProps extends ComponentPropsWithoutRef<"div"> {
  label: ReactNode;
  labelClassName?: string;
  align?: "start" | "center" | "end";
}

function Dropdown({
  label,
  align = "start",
  labelClassName,
  className,
  children,
  ...rest
}: DropdownProps) {
  return (
    <>
      <div
        className={classNames(
          "group relative flex h-10 items-center gap-1 whitespace-nowrap px-1 hocus:text-aquamarine uppercase",
          labelClassName,
        )}
        {...rest}
      >
        {label}{" "}
        <ChevronDownIcon className="group-data-[open]:-scale-y-100 size-4 transition-all duration-150" />
        <div
          className={classNames(
            "pointer-events-none absolute top-full z-50 flex scale-y-95 flex-col gap-1.5 rounded bg-[#00110C] py-3 font-mono text-[#17BB83] opacity-0 shadow-lg transition-all duration-100 ease-in",
            "group-hocus:pointer-events-auto group-hocus:scale-100 group-hocus:opacity-100 group-hocus:duration-200 group-hocus:ease-out",
            {
              "right-0 origin-top-right": align === "end",
              "-translate-x-1/2 left-1/2 origin-top": align === "center",
              "left-0 origin-top-left": align === "start",
            },
            "max-lg:!bg-transparent max-lg:h-0 max-lg:shadow-none max-lg:data-[open]:h-auto",
            className,
          )}
          {...rest}
        >
          {children}
        </div>
      </div>
    </>
  );
}

function DropdownLink({ className, children, ...rest }: ClickableProps) {
  return (
    <Clickable
      {...rest}
      className={classNames(
        "flex h-9 items-center gap-3 from-aquamarine to-teal-400 pr-6 pl-4 hover:bg-gradient-to-r hover:text-aquamarine-950",
        className,
      )}
    >
      {children}
    </Clickable>
  );
}
