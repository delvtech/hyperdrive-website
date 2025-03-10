import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "src/components/Dropdown";
import { BlogIcon } from "src/components/icons/BlogIcon";
import { BookIcon } from "src/components/icons/BookIcon";
import { CodeDocIcon } from "src/components/icons/CodeDocIcon";
import { CoreIcon } from "src/components/icons/CoreIcon";
import { DiscordLogoIcon } from "src/components/icons/DiscordLogoIcon";
import { DocIcon } from "src/components/icons/DocIcon";
import { GitHubLogoIcon } from "src/components/icons/GitHubLogoIcon";
import { HyperdriveLogoIcon } from "src/components/icons/HyperdriveLogoIcon";
import { LinkedInLogoIcon } from "src/components/icons/LinkedInLogoIcon";
import { NoteIcon } from "src/components/icons/NoteIcon";
import { PythonLogoIcon } from "src/components/icons/PythonLogoIcon";
import { RustLogoIcon } from "src/components/icons/RustLogoIcon";
import { SolidityLogoIcon } from "src/components/icons/SolidityLogoIcon";
import { StrategyIcon } from "src/components/icons/StrategyIcon";
import { TypeScriptLogoIcon } from "src/components/icons/TypeScriptLogoIcon";
import { WarpcastLogoIcon } from "src/components/icons/WarpcastLogoIcon";
import { XLogoIcon } from "src/components/icons/XLogoIcon";
import { useBreakpoint } from "src/hooks/useBreakpoint";
import { useScrollPosition } from "src/hooks/useScrollPosition";

const SHOW_ANNOUNCEMENT_BANNER = true;
const ANNOUNCEMENT_BANNER_EXPIRY = new Date("2/04/2025");

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;
  const breakpoint = useBreakpoint();

  // Prevent the page from scrolling behind the menu when it's open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const showBanner =
    SHOW_ANNOUNCEMENT_BANNER && new Date() < ANNOUNCEMENT_BANNER_EXPIRY;

  return (
    <>
      {/* Header fixed container */}
      <div
        className={classNames(
          "fixed top-0 right-0 left-0 z-50",
          "max-lg:overflow-auto",
          {
            "max-lg:bottom-2 max-lg:bg-[#00110C]": isMenuOpen,
          },
          className,
        )}
      >
        {/* Announcement banner */}
        {showBanner && (
          <div className="flex h-10 items-center justify-center border-white/10 border-b bg-aquamarine-950 px-3 py-2 text-sm">
            <InformationCircleIcon className="mr-1 h-5 w-5" />
            <p className="text-content/80 leading-none">
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
                className="font-medium text-white transition-all duration-300 hover:text-aquamarine"
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
        <div className="inner-container box-content max-h-screen">
          <header
            className={classNames(
              "mt-8 grid items-center gap-x-2 rounded-xl bg-white/15 px-10 py-3 font-mono text-sm backdrop-blur-3xl transition-[margin] duration-300",
              {
                "!mt-4": isScrolled,
              },
              "max-lg:mt-4 max-lg:py-2 max-lg:pr-4 max-lg:pl-8 max-lg:text-body",
              {
                "max-lg:bg-transparent max-lg:backdrop-blur-none": isMenuOpen,
              },
              "max-md:!mt-2 max-md:pl-5",
            )}
          >
            {/* Logo */}
            <Link to="/" className="row-start-1">
              <img
                src="/logos/delv-hyperdrive-box-white.svg"
                className={classNames("h-11", "max-xl:h-9", "max-md:h-7")}
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
                "max-lg:-mx-4 max-lg:col-span-2 max-lg:row-start-2 max-lg:mt-4 max-lg:flex-col max-lg:items-stretch max-lg:justify-self-stretch max-lg:border-content/15 max-lg:border-t",
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
                  "max-lg:w-full max-lg:flex-col max-lg:items-stretch max-lg:gap-0",
                )}
              >
                {/* Learn */}
                <Dropdown>
                  <Dropdown.Button className="max-lg:pr-7">
                    Learn
                  </Dropdown.Button>
                  <Dropdown.Menu hover={breakpoint.gte("lg")}>
                    <Dropdown.Item to="/docs">
                      <DocIcon className="size-4" />
                      Docs
                    </Dropdown.Item>
                    <Dropdown.Item href="https://blog.delv.tech">
                      <BlogIcon className="size-4" />
                      Blog
                    </Dropdown.Item>
                    <Dropdown.Item to="/docs/trading/trading-strategies">
                      <StrategyIcon className="size-4" />
                      Trading Strategies
                    </Dropdown.Item>
                    <Dropdown.Item to="/whitepaper">
                      <NoteIcon className="size-4" />
                      Whitepaper
                    </Dropdown.Item>
                    <Dropdown.Item to="/docs/hyperdrive-overview/glossary">
                      <BookIcon className="size-4" />
                      Glossary
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Developers */}
                <Dropdown>
                  <Dropdown.Button className="max-lg:pr-7">
                    Developers
                  </Dropdown.Button>
                  <Dropdown.Menu hover={breakpoint.gte("lg")}>
                    <Dropdown.Item to="/docs/hyperdrive-for-developers">
                      <CodeDocIcon className="size-4" />
                      Docs
                    </Dropdown.Item>
                    <Dropdown.Item to="/build">
                      <CoreIcon className="size-4" />
                      Hyperdrive [Core]
                    </Dropdown.Item>
                    <Dropdown.Item href="https://github.com/delvtech/hyperdrive">
                      <GitHubLogoIcon className="size-4" />
                      GitHub
                    </Dropdown.Item>
                    <Dropdown.Item to="/docs/hyperdrive-for-developers/mainnet-smart-contracts">
                      <SolidityLogoIcon className="size-4" />
                      Smart Contracts
                    </Dropdown.Item>
                    <Dropdown.Item to="/docs/hyperdrive-trading-bots/agent0-overview">
                      <PythonLogoIcon className="size-4" />
                      Bots
                    </Dropdown.Item>
                    <Dropdown.Item href="https://js.hyperdrive.box/">
                      <TypeScriptLogoIcon className="size-4" />
                      Frontend SDK
                    </Dropdown.Item>
                    <Dropdown.Item href="https://docs.rs/crate/hyperdrive-math/latest">
                      <RustLogoIcon className="size-4" />
                      Math SDK
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Community */}
                <Dropdown>
                  <Dropdown.Button className="max-lg:pr-7">
                    Community
                  </Dropdown.Button>
                  <Dropdown.Menu hover={breakpoint.gte("lg")}>
                    <Dropdown.Item href="https://www.delv.tech/discord">
                      <DiscordLogoIcon className="size-4" />
                      Discord
                    </Dropdown.Item>
                    <Dropdown.Item href="https://twitter.com/delv_tech/">
                      <XLogoIcon className="size-4" />X
                    </Dropdown.Item>
                    <Dropdown.Item href="https://warpcast.com/~/channel/delv">
                      <WarpcastLogoIcon className="size-4" />
                      Farcaster
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.linkedin.com/company/delv-tech/">
                      <LinkedInLogoIcon className="size-4" />
                      LinkedIn
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Analytics */}
                <Link
                  className={classNames(
                    "flex h-10 items-center gap-1 whitespace-nowrap px-1 uppercase group-hocus:text-aquamarine",
                    "max-lg:h-16 max-lg:w-full max-lg:justify-between max-lg:border-content/15 max-lg:border-b max-lg:px-4",
                  )}
                  to="/analytics"
                >
                  Analytics
                </Link>

                {/* Launch Apps */}
                <Dropdown>
                  <Dropdown.Button className="max-lg:pr-7">
                    Launch Apps
                  </Dropdown.Button>
                  <Dropdown.Menu
                    hover={breakpoint.gte("lg")}
                    anchor="bottom end"
                  >
                    <Dropdown.Item to="/one">
                      <HyperdriveLogoIcon className="size-4" />
                      Hyperdrive One
                    </Dropdown.Item>
                    <Dropdown.Item to="/borrow">
                      <HyperdriveLogoIcon className="size-4" />
                      Fixed Borrow
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <p className="row-start-4 mt-auto self-end justify-self-end text-body-sm">
                  Copyright &copy; DELV 2024
                </p> */}
              </nav>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
