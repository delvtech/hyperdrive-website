import classNames from "classnames";
import { Link } from "react-router-dom";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { GradientBorderButton } from "src/components/buttons/GradientButton";
import { HyperdriveLogoIcon } from "src/components/icons/HyperdriveLogoIcon";
import { CtaTile } from "src/pages/home/CtaTile";
import { SectionDivider } from "src/pages/home/SectionDivider";

// TODOS:
// [ ] Refactor to grid where it makes sense to make responsive easier
// [ ] Responsive
// [ ] Verify all links
// [ ] Verify all image alts
// [ ] Delete dead code and files

export function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div
        className={classNames(
          "relative min-h-screen overflow-hidden bg-aquamarine-950",
        )}
      >
        {/* Hero bg accents */}
        <img
          src="/accents/hero-glow-tl.svg"
          className="pointer-events-none absolute top-[-601px] left-[-589px]"
        />
        <img
          src="/accents/hero-glow-tr.svg"
          className="pointer-events-none absolute top-[-439px] right-[-523px]"
        />
        <img
          src="/accents/hero-glow-br.svg"
          className="pointer-events-none absolute right-[-262px] bottom-[-299px]"
        />
        <img
          src="/accents/hero-glow-bl.svg"
          className="pointer-events-none absolute bottom-[-490px] left-[-690px]"
        />
        <img
          src="/accents/delv-arc-hyperdrive.svg"
          className="pointer-events-none absolute top-[-296px] right-[-204px]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[length:100px_100px] bg-[url('/noise-texture.png')] bg-left-top bg-repeat opacity-20 mix-blend-overlay" />

        {/* Hero content */}
        <div
          className={classNames(
            "inner-container grid min-h-screen items-end justify-between gap-8 pb-10",
            "max-lg:px-[4vw] max-lg:pt-32",
          )}
        >
          {/* Title */}
          <div
            className={classNames(
              "relative z-10 col-start-1 row-start-1 h-auto grow items-center leading-none",
              "max-lg:text-center",
            )}
          >
            <h1
              className={classNames(
                "!leading-none relative mb-5 font-chakra text-[100px] text-neutral-100",
                "max-sm:text-h3",
              )}
            >
              Access DeFi,
              <br /> Your Way
            </h1>
            <p className="font-light text-content/60">
              Powered by{" "}
              <span className="font-chakra font-medium text-content uppercase">
                THE HYPERDRIVE PROTOCOL
              </span>
            </p>
          </div>

          {/* Chains */}
          <div
            className={classNames(
              "col-start-1 flex items-center gap-10 font-light text-content/60",
              "max-lg:flex-col",
            )}
          >
            Available on{" "}
            <div
              className={classNames(
                "flex items-center gap-9",
                "max-lg:grid max-lg:grid-cols-2 max-lg:items-stretch",
              )}
            >
              <img
                src="/logos/ethereum-logo.svg"
                alt="Ethereum"
                className="h-6"
              />
              <img
                src="/logos/linea-logo.svg"
                alt="Linea"
                className="h-[17px]"
              />
              <img src="/logos/base-logo.svg" alt="Base" className="h-5" />
              <img
                src="/logos/gnosis-chain-logo.svg"
                alt="Gnosis Chain"
                className="h-4"
              />
            </div>
          </div>

          {/* Hero CTA */}
          <div
            className={classNames(
              "clip-corners-rounded col-start-2 row-span-2 row-start-1 bg-gradient-to-br from-content-600/30 to-content-600/15 p-px backdrop-blur-sm",
              "max-lg:clip-none max-lg:col-start-1 max-lg:row-span-1 max-lg:row-start-2 max-lg:self-start max-lg:border-content/30 max-lg:border-t max-lg:bg-none",
            )}
          >
            <div
              className={classNames(
                "clip-corners-rounded flex flex-col gap-8 bg-aquamarine-950/60 px-14 pt-14 pb-12",
                "max-lg:clip-none max-lg:px-0 max-lg:py-8",
              )}
            >
              <ul
                className={classNames(
                  "spaced-mono space-y-4",
                  "max-sm:space-y-3",
                )}
              >
                <li className="flex gap-2 leading-6">
                  <img
                    src="/icons/circle-check-icon.svg"
                    alt=""
                    className="h-6 w-6"
                  />{" "}
                  AMM designed for market efficiency
                </li>
                <li className="flex gap-2 leading-6">
                  <img
                    src="/icons/circle-check-icon.svg"
                    alt=""
                    className="h-6 w-6"
                  />
                  Reputable yield sources
                </li>
                <li className="flex gap-2 leading-6">
                  <img
                    src="/icons/circle-check-icon.svg"
                    alt=""
                    className="h-6 w-6"
                  />
                  LP for volatility-driven returns
                </li>
              </ul>
              <div
                className={classNames(
                  "flex items-center gap-3",
                  "max-lg:flex-col max-lg:items-stretch",
                )}
              >
                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById("hyperdrive-one")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="button button-primary"
                >
                  <HyperdriveLogoIcon className="size-4" />
                  Get started
                </button>
                <GradientBorderButton to="/docs">
                  Learn more
                </GradientBorderButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hyperdrive One */}
      <div
        id="hyperdrive-one"
        className="overflow-hidden bg-[center_-77px] bg-[url('/accents/hyperdrive-one-lines.svg')] bg-no-repeat"
      >
        <div className="inner-container mb-20 pt-32">
          <p className="mb-14 flex items-center gap-3 font-chakra uppercase tracking-wide">
            <img src="/icons/apps-icon.svg" className="size-6" />
            Our Apps
          </p>

          <div className="mb-20 grid grid-cols-2 items-end gap-5">
            <h2 className="gradient-text to-teal-400 font-chakra text-h1">
              Yield Opportunities
            </h2>
            <div>
              <HyperdriveLogoIcon className="mb-5 size-10" />
              <h2 className="mb-3 font-chakra text-h5">Hyperdrive One</h2>
              <p className="font-light opacity-60">Powered by HYPERDRIVE</p>
            </div>
          </div>

          {/* Hyperdrive One CTA tiles */}
          <div className="grid grid-cols-2 items-stretch gap-5">
            {/* Hyperdrive One trade now tile */}
            <CtaTile className="bg-aquamarine/40">
              <Link to="/app" className="button button-primary">
                Trade now
              </Link>
              <CtaTile.IconList>
                <CtaTile.IconListItem src="/icons/money-shield-icon.svg">
                  Principal-protected fixed-rate returns
                </CtaTile.IconListItem>
                <CtaTile.IconListItem src="/icons/line-chart-icon.svg">
                  Boosted variable-rate returns
                </CtaTile.IconListItem>
                <CtaTile.IconListItem src="/icons/clock-icon.svg">
                  Terms On Demand
                </CtaTile.IconListItem>
              </CtaTile.IconList>
            </CtaTile>

            {/* Hyperdrive One supply liquidity tile */}
            <CtaTile className="bg-aquamarine/40">
              <Link to="/app" className="button button-primary">
                Supply liquidity
              </Link>
              <CtaTile.IconList>
                <CtaTile.IconListItem src="/icons/continuous-icon.svg">
                  No pool expiry, no rollovers, continuous yield
                </CtaTile.IconListItem>
                <CtaTile.IconListItem src="/icons/variable-circle-icon.svg">
                  Variable yield generated from trading fees and on idle capital
                </CtaTile.IconListItem>
                <CtaTile.IconListItem src="/icons/balance-icon.svg">
                  PnL from balancing market activity
                </CtaTile.IconListItem>
              </CtaTile.IconList>
            </CtaTile>
          </div>
        </div>

        {/* Hyperdrive One Pools carousel */}
        <ul className="grid grid-flow-col items-center overflow-x-auto border-content/30 border-y py-6">
          <li className="flex h-28 w-60 items-center justify-center border-content/30 border-r">
            <img
              className="h-10"
              alt="angle"
              src="/logos/assets/angle-asset-logo.svg"
            />
          </li>
          <li className="flex h-28 w-60 items-center justify-center border-content/30 border-r">
            <img
              className="h-10"
              alt="ether.fi"
              src="/logos/assets/ether.fi-asset-logo.svg"
            />
          </li>
          <li className="flex h-28 w-60 items-center justify-center border-content/30 border-r">
            <img
              className="h-10"
              alt="gnosis savings"
              src="/logos/assets/gnosis-savings-asset-logo.svg"
            />
          </li>
          <li className="flex h-28 w-60 items-center justify-center border-content/30 border-r">
            <img
              className="h-10"
              alt="lido"
              src="/logos/assets/lido-asset-logo.svg"
            />
          </li>
          <li className="flex h-28 w-60 items-center justify-center border-content/30 border-r">
            <img
              className="h-10"
              alt="morpho"
              src="/logos/assets/morpho-asset-logo.svg"
            />
          </li>
          <li className="flex h-28 w-60 items-center justify-center border-content/30 border-r">
            <img
              className="h-10"
              alt="rocketpool"
              src="/logos/assets/rocketpool-asset-logo.svg"
            />
          </li>
          <li className="flex h-28 w-60 items-center justify-center">
            <img
              className="h-10"
              alt="sdai"
              src="/logos/assets/sdai-asset-logo.svg"
            />
          </li>
        </ul>
      </div>

      {/* Fixed Borrow */}
      <div
        id="fixed-borrow"
        className="relative overflow-hidden bg-[calc(50%_+_100px)_-132px] bg-[url('/accents/fixed-borrow-lines-top.svg')] bg-no-repeat"
      >
        <img
          src="/accents/fixed-borrow-lines-left.svg"
          className="pointer-events-none absolute bottom-[-544px] left-[-136px]"
        />
        <div className="inner-container py-32">
          <p className="mb-14 flex items-center gap-3 font-chakra uppercase tracking-wide">
            <img src="/icons/apps-icon.svg" className="size-6" />
            Our Apps
          </p>

          <div className="mb-20 grid grid-cols-2 items-end gap-5">
            <h2 className="gradient-text from-[#0FC2C2] to-[#44E8E8] font-chakra text-h1">
              Rate
              <br />
              Protection
            </h2>
            <div className="flex items-end gap-12">
              <div>
                <HyperdriveLogoIcon className="mb-5 size-10" />
                <h2 className="mb-3 font-chakra text-h5">Fixed Borrow</h2>
                <p className="font-light opacity-60">Powered by HYPERDRIVE</p>
              </div>
              <p className="mb-9 font-chakra text-content/50 text-h6">X</p>
              <div>
                <img
                  src="/icons/morpho-icon.svg"
                  className="mb-5 size-[60px]"
                />
                <h2 className="mb-9 font-chakra text-h5">Morpho</h2>
              </div>
            </div>
          </div>

          {/* Fixed Borrow CTA tiles */}
          <div className="grid grid-cols-2 items-stretch gap-5">
            <CtaTile className="col-start-2 bg-teal-500">
              <Link to="/borrow" className="button button-primary-alt">
                Fix your borrow
              </Link>
              <CtaTile.IconList>
                <CtaTile.IconListItem src="/icons/bar-chart-icon.svg">
                  Fix existing borrow positions
                </CtaTile.IconListItem>
                <CtaTile.IconListItem src="/icons/heart-check-icon.svg">
                  Peace of mind and predictability
                </CtaTile.IconListItem>
                <CtaTile.IconListItem src="/icons/tag-icon.svg">
                  Exit protection at any time
                </CtaTile.IconListItem>
              </CtaTile.IconList>
            </CtaTile>
          </div>
        </div>
      </div>

      {/* Build */}
      <div id="build" className="inner-container pt-28">
        <p className="mb-8 flex items-center gap-3 font-chakra uppercase tracking-wide">
          <img src="/icons/tools-icon.svg" className="size-6" />
          Our Tools
        </p>

        <div
          className={classNames(
            "grid grid-cols-2 items-start gap-x-32 gap-y-14",
            "max-lg:grid-cols-1",
          )}
        >
          <h2 className="gradient-text font-chakra text-h1">
            Build on the Hyperdrive Protocol
          </h2>

          {/* Tools grid */}
          <div className="grid grid-cols-2 gap-x-5 font-light text-body-lg">
            <div className="grid grid-cols-[1fr_auto_1fr] border-content/30 border-y">
              <div className="col-start-2 flex h-36 items-center gap-4">
                <img src="/icons/solidity-icon.svg" className="size-10" />
                Smart Contracts
              </div>
              <hr className="col-span-3 border-content/30" />
              <div className="col-start-2 flex h-36 items-center gap-4">
                <img src="/icons/typescript-icon.svg" className="size-10" />
                Frontend SDK
              </div>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] border-content/30 border-y">
              <div className="col-start-2 flex h-36 items-center gap-4">
                <img src="/icons/rust-icon.svg" className="size-10" />
                Math SDK
              </div>
              <hr className="col-span-3 border-content/30" />
              <div className="col-start-2 flex h-36 items-center gap-4">
                <img src="/icons/python-icon.svg" className="size-10" />
                Bots
              </div>
            </div>
          </div>

          {/* Get started card */}
          <div className="card order-3 flex items-center gap-5 p-6">
            <div className="space-y-3">
              <h3 className="font-chakra text-h5">Get started</h3>
              <p className="font-light text-content/60">
                Bring new yield-based products to life with Hyperdrive(CORE)'s
                extensive open source developer tooling for the Hyperdrive
                Protocol.
              </p>
            </div>
            <Link to="/build" className="button button-primary px-9">
              Build now
            </Link>
          </div>

          <img src="/illustrations/hyperdrive-sheild-on-squares.svg" />
        </div>
      </div>

      <SectionDivider />

      {/* Security measures */}
      <div id="security" className="inner-container pt-28 pb-36">
        <div
          className={classNames(
            "mb-16 flex items-start justify-between gap-10",
            "max-lg:flex-col",
          )}
        >
          <p className="mb-8 flex items-center gap-3 font-chakra uppercase tracking-wide">
            <img src="/icons/tools-icon.svg" className="size-6" />
            Security measures
          </p>
          <h2 className="gradient-text font-chakra text-h1">Robust Security</h2>
        </div>

        {/* Security cards */}
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {/* Audited card */}
          <div
            className={classNames(
              "card col-span-3 flex gap-10",
              "max-lg:col-span-1 max-lg:flex-col max-lg:gap-8",
            )}
          >
            <div className="flex flex-col justify-between gap-12 py-8">
              <div className="space-y-3">
                <h3 className="font-chakra text-h4.5">Audited</h3>
                <p className="font-light text-content/60">
                  Six audits of the Hyperdrive Protocol have been completed by
                  blockchain security industry leaders
                </p>
              </div>
              <div className="flex items-center gap-6">
                <a href="https://spearbit.com/">
                  <img src="/logos/spearbit-logo.svg" alt="Spearbit" />
                </a>
                <a href="https://chainsafe.io/">
                  <img src="/logos/chainsafe-logo.svg" alt="Chainsafe" />
                </a>
                <a href="https://www.certora.com/">
                  <img src="/logos/certora-logo.svg" alt="Certora" />
                </a>
              </div>
            </div>
            <img src="/illustrations/audited-illustration.svg" />
          </div>

          {/* Formal verification card */}
          <div className="card flex flex-col items-start justify-between gap-8">
            <div className="space-y-3">
              <h3 className="font-chakra text-h4.5">Formal Verification</h3>
              <p className="font-light text-content/60">
                Certora, an industry leader in formal verification, implemented
                a mathematical model that verified many key invariants in
                Hyperdrive's AMM
              </p>
            </div>
            <img src="/illustrations/formal-verification-illustration.svg" />
          </div>

          {/* Fuzz testing card */}
          <div className="card flex flex-col items-start justify-between gap-8">
            <div className="space-y-3">
              <h3 className="font-chakra text-h4.5">Fuzz Testing</h3>
              <p className="font-light text-content/60">
                Hyperdrive is tested using a robust fuzzing system that combines
                traditional solidity input sweeps with Python-based smart agents
              </p>
            </div>
            <img src="/illustrations/fuzz-testing-illustration.svg" />
          </div>

          {/* Active threat monitoring card */}
          <div className="card flex flex-col items-start justify-between gap-8">
            <div className="space-y-3">
              <h3 className="font-chakra text-h4.5">
                Active Threat Monitoring
              </h3>
              <p className="font-light text-content/60">
                Hyperdrive's smart contracts are actively monitored to get ahead
                of potential threats and leverage collective security
                intelligence.
              </p>
            </div>
            <img src="/illustrations/active-threat-monitoring-illustration.svg" />
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Investors */}
      <div
        id="investers"
        className="relative grid justify-center gap-20 overflow-hidden py-28"
      >
        <h2 className="gradient-text relative text-center font-chakra text-h1">
          Backed by
        </h2>

        {/* Investor logo carousel */}
        <div
          className="relative overflow-x-auto"
          ref={preferScrollPosition({ x: 0.5 })}
        >
          <div className="flex w-max flex-col justify-center gap-5">
            <ul className="ml-[72px] flex justify-center gap-5">
              <li className="card flex h-48 w-72 items-center justify-center">
                <img src="/logos/placeholder-logo.svg" alt="Placeholder" />
              </li>
              <li className="card flex h-48 w-72 items-center justify-center">
                <img src="/logos/a_capital-logo.svg" alt="a_capital" />
              </li>
              <li className="card flex h-48 w-72 items-center justify-center">
                <img src="/logos/sva-logo.svg" alt="SVA" />
              </li>
              <li className="card flex h-48 w-72 items-center justify-center">
                <img
                  src="/logos/ethereal-ventures-logo.svg"
                  alt="Ethereal Ventures"
                />
              </li>
              <li className="card flex h-48 w-72 items-center justify-center">
                <img src="/logos/hack-vc-logo.svg" alt="Hack VC" />
              </li>
              <li className="card flex h-48 w-72 items-center justify-center">
                <img
                  src="/logos/robot-ventures-logo.svg"
                  alt="Robot Ventures"
                />
              </li>
            </ul>
            <ul className="mr-[72px] flex justify-center gap-5">
              <li className="card flex h-48 w-72 items-center justify-center">
                <img src="/logos/sc-logo.svg" alt="SC" />
              </li>
              <li className="card flex h-48 w-72 items-center justify-center">
                <img
                  src="/logos/stani-kulechov-logo.svg"
                  alt="Stani Kulechov"
                />
              </li>
              <li className="card flex h-48 w-72 items-center justify-center">
                <img
                  src="/logos/polychain-capital-logo.svg"
                  alt="Polychain Capital"
                />
              </li>
              <li className="card flex h-48 w-72 items-center justify-center">
                <img src="/logos/a16z-logo.svg" alt="a16z" />
              </li>
              <li className="card flex h-48 w-72 items-center justify-center">
                <img src="/logos/rune-logo.svg" alt="Rune" />
              </li>
              <li className="card flex h-48 w-72 items-center justify-center">
                <img src="/logos/kain-warwick-logo.svg" alt="Kain Warwick" />
              </li>
            </ul>
          </div>
        </div>

        <p className="spaced-mono relative text-center text-body-lg text-content/80 text-shadow-lg shadow-aquamarine-950">
          And many more
        </p>

        {/* Bottom glow */}
        <div className="-translate-x-1/2 -z-10 absolute bottom-[-172px] left-1/2 h-[200px] w-[1036px] rounded-[100%] bg-gradient-90 from-aquamarine to-sky blur-[200px]" />
      </div>

      <Footer />
    </>
  );
}

/**
 * Creates a ref callback that scrolls an element to a preferred position
 * immediately and on `mouseleave`.
 */
function preferScrollPosition({
  x,
  y,
  delay = 0,
}: {
  x?: number;
  y?: number;
  delay?: number;
}) {
  if (x === undefined && y === undefined) {
    throw new Error("At least one of x or y must be provided");
  }

  let timer: NodeJS.Timeout | undefined = undefined;

  return (el: HTMLElement | null) => {
    if (!el) return;

    const left = x && (el.scrollWidth - window.innerWidth) * x;
    const top = y && (el.scrollHeight - window.innerHeight) * y;

    el.scrollTo({ left, top, behavior: "smooth" });

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        el.scrollTo({ left, top, behavior: "smooth" });
      }, delay);
    };

    el.addEventListener("mouseleave", resetTimer);
    el.addEventListener("mouseenter", () => clearTimeout(timer));
  };
}
