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
          "h-screen relative bg-aquamarine-950 overflow-hidden pb-10",
          "max-xl:px-[3vw]",
          "max-lg:flex-col max-lg:gap-8 max-lg:text-center",
        )}
      >
        {/* Hero bg accents */}
        <img
          src="/accents/hero-glow-tl.svg"
          className="absolute top-[-601px] left-[-589px] pointer-events-none"
        />
        <img
          src="/accents/hero-glow-tr.svg"
          className="absolute right-[-523px] top-[-439px] pointer-events-none"
        />
        <img
          src="/accents/hero-glow-br.svg"
          className="absolute right-[-262px] bottom-[-299px] pointer-events-none"
        />
        <img
          src="/accents/hero-glow-bl.svg"
          className="absolute left-[-690px] bottom-[-490px] pointer-events-none"
        />
        <img
          src="/accents/delv-arc-hyperdrive.svg"
          className="absolute top-[-296px] right-[-204px] pointer-events-none"
        />
        <div className="absolute bg-[url('/noise-texture.png')] bg-[length:100px_100px] bg-repeat bg-left-top inset-0 pointer-events-none opacity-20 mix-blend-overlay" />

        {/* Hero content */}
        <div className="inner-container flex justify-between items-end h-full pb-10">
          {/* Hero left */}
          <div
            className={classNames(
              "relative z-10 w-[600px] shrink-0 leading-none flex flex-col h-full",
              "max-xl:w-[340px]",
              "max-lg:w-auto",
            )}
          >
            {/* Title */}
            <div className="grow flex items-center">
              <div>
                <h1
                  className={classNames(
                    "text-[100px] font-chakra relative text-neutral-100 mb-5",
                    "max-xl:text-h2",
                    "max-sm:text-h4",
                  )}
                >
                  Access DeFi, Your Way
                </h1>
                <p className="font-light text-content/60">
                  Powered by{" "}
                  <span className="font-chakra uppercase font-medium">
                    THE HYPERDRIVE PROTOCOL
                  </span>
                </p>
              </div>
            </div>

            {/* Chains */}
            <div className="flex items-center gap-10 font-light text-content/60">
              Available on{" "}
              <div className="flex items-center gap-9">
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
          </div>

          {/* Hero right */}
          <div className="p-px clip-corners-rounded bg-gradient-to-br from-content-600/30 to-content-600/15 backdrop-blur">
            <div className="clip-corners-rounded bg-aquamarine-950/60 px-14 pt-14 pb-12 flex flex-col gap-8">
              <ul className="space-y-4 spaced-mono">
                <li className="flex gap-2 items-center">
                  <img
                    src="/icons/circle-check-icon.svg"
                    alt=""
                    className="w-6 h-6"
                  />{" "}
                  AMM designed for market efficiency
                </li>
                <li className="flex gap-2 items-center">
                  <img
                    src="/icons/circle-check-icon.svg"
                    alt=""
                    className="w-6 h-6"
                  />
                  Reputable yield sources
                </li>
                <li className="flex gap-2 items-center">
                  <img
                    src="/icons/circle-check-icon.svg"
                    alt=""
                    className="w-6 h-6"
                  />
                  LP for volatility-driven returns
                </li>
              </ul>
              <div className="flex items-center gap-3">
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
        className="bg-[url('/accents/hyperdrive-one-lines.svg')] bg-[center_-77px] bg-no-repeat overflow-hidden"
      >
        <div className="inner-container pt-32 mb-20">
          <p className="flex items-center gap-3 font-chakra tracking-wide uppercase mb-14">
            <img src="/icons/apps-icon.svg" className="size-6" />
            Our Apps
          </p>

          <div className="grid items-end gap-5 grid-cols-2 mb-20">
            <h2 className="gradient-text to-teal-400 text-h1 font-chakra">
              Yield Opportunities
            </h2>
            <div>
              <HyperdriveLogoIcon className="size-10 mb-5" />
              <h2 className="font-chakra text-h5 mb-3">Hyperdrive One</h2>
              <p className="font-light opacity-60">Powered by HYPERDRIVE</p>
            </div>
          </div>

          {/* Hyperdrive One CTA tiles */}
          <div className="grid items-stretch gap-5 grid-cols-2">
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
        <ul className="grid items-center grid-flow-col py-6 border-y border-content/30 overflow-x-auto">
          <li className="flex items-center w-60 h-28 justify-center border-r border-content/30">
            <img
              className="h-10"
              alt="angle"
              src="/logos/assets/angle-asset-logo.svg"
            />
          </li>
          <li className="flex items-center w-60 h-28 justify-center border-r border-content/30">
            <img
              className="h-10"
              alt="ether.fi"
              src="/logos/assets/ether.fi-asset-logo.svg"
            />
          </li>
          <li className="flex items-center w-60 h-28 justify-center border-r border-content/30">
            <img
              className="h-10"
              alt="gnosis savings"
              src="/logos/assets/gnosis-savings-asset-logo.svg"
            />
          </li>
          <li className="flex items-center w-60 h-28 justify-center border-r border-content/30">
            <img
              className="h-10"
              alt="lido"
              src="/logos/assets/lido-asset-logo.svg"
            />
          </li>
          <li className="flex items-center w-60 h-28 justify-center border-r border-content/30">
            <img
              className="h-10"
              alt="morpho"
              src="/logos/assets/morpho-asset-logo.svg"
            />
          </li>
          <li className="flex items-center w-60 h-28 justify-center border-r border-content/30">
            <img
              className="h-10"
              alt="rocketpool"
              src="/logos/assets/rocketpool-asset-logo.svg"
            />
          </li>
          <li className="flex items-center w-60 h-28 justify-center">
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
        className="bg-[url('/accents/fixed-borrow-lines-top.svg')] bg-[calc(50%_+_100px)_-132px] bg-no-repeat relative overflow-hidden"
      >
        <img
          src="/accents/fixed-borrow-lines-left.svg"
          className="absolute bottom-[-544px] left-[-136px] pointer-events-none"
        />
        <div className="inner-container py-32">
          <p className="flex items-center gap-3 font-chakra tracking-wide uppercase mb-14">
            <img src="/icons/apps-icon.svg" className="size-6" />
            Our Apps
          </p>

          <div className="grid items-end gap-5 grid-cols-2 mb-20">
            <h2 className="gradient-text from-[#0FC2C2] to-[#44E8E8] text-h1 font-chakra">
              Rate
              <br />
              Protection
            </h2>
            <div className="flex items-end gap-12">
              <div>
                <HyperdriveLogoIcon className="size-10 mb-5" />
                <h2 className="font-chakra text-h5 mb-3">Fixed Borrow</h2>
                <p className="font-light opacity-60">Powered by HYPERDRIVE</p>
              </div>
              <p className="text-h6 text-content/50 mb-9 font-chakra">X</p>
              <div>
                <img
                  src="/icons/morpho-icon.svg"
                  className="size-[60px] mb-5"
                />
                <h2 className="font-chakra text-h5 mb-9">Morpho</h2>
              </div>
            </div>
          </div>

          {/* Fixed Borrow CTA tiles */}
          <div className="grid items-stretch gap-5 grid-cols-2">
            <CtaTile className="bg-teal-500 col-start-2">
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
        <p className="flex items-center gap-3 font-chakra tracking-wide uppercase mb-8">
          <img src="/icons/tools-icon.svg" className="size-6" />
          Our Tools
        </p>

        <div className="grid items-start gap-x-32 gap-y-14 grid-cols-2">
          <h2 className="gradient-text text-h1 font-chakra">
            Build on the Hyperdrive Protocol
          </h2>

          {/* Tools grid */}
          <div className="grid grid-cols-2 gap-x-5 text-body-lg font-light">
            <div className="grid grid-cols-[1fr_auto_1fr] border-y border-content/30">
              <div className="h-36 flex gap-4 items-center col-start-2">
                <img src="/icons/solidity-icon.svg" className="size-10" />
                Smart Contracts
              </div>
              <hr className="border-content/30 col-span-3" />
              <div className="h-36 flex gap-4 items-center col-start-2">
                <img src="/icons/typescript-icon.svg" className="size-10" />
                Frontend SDK
              </div>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] border-y border-content/30">
              <div className="h-36 flex gap-4 items-center col-start-2">
                <img src="/icons/rust-icon.svg" className="size-10" />
                Math SDK
              </div>
              <hr className="border-content/30 col-span-3" />
              <div className="h-36 flex gap-4 items-center col-start-2">
                <img src="/icons/python-icon.svg" className="size-10" />
                Bots
              </div>
            </div>
          </div>

          {/* Get started card */}
          <div className="card flex gap-5 p-6 items-center order-3">
            <div className="space-y-3">
              <h3 className="font-chakra text-h5">Get started</h3>
              <p className="text-content/60 font-light">
                Bring new yield-based products to life with Hyperdrive(CORE)'s
                extensive open source developer tooling for the Hyperdrive
                Protocol.
              </p>
            </div>
            <a
              href="https://github.com/delvtech"
              className="button button-primary px-9"
            >
              Build now
            </a>
          </div>

          <img src="/illustrations/hyperdrive-sheild-on-squares.svg" />
        </div>
      </div>

      <SectionDivider />

      {/* Security measures */}
      <div id="security" className="inner-container pt-28 pb-36">
        <div className="flex items-start justify-between gap-10 mb-16">
          <p className="flex items-center gap-3 font-chakra tracking-wide uppercase mb-8">
            <img src="/icons/tools-icon.svg" className="size-6" />
            Security measures
          </p>
          <h2 className="gradient-text font-chakra text-h1">Robust Security</h2>
        </div>

        {/* Security cards */}
        <div className="grid grid-cols-3 gap-5">
          {/* Audited card */}
          <div className="card col-span-3 flex gap-10 justify-between">
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
          <div className="card flex flex-col gap-8 justify-between items-start">
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
          <div className="card flex flex-col gap-8 justify-between items-start">
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
          <div className="card flex flex-col gap-8 justify-between items-start">
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
        className="py-28 grid gap-20 justify-center relative overflow-hidden"
      >
        <h2 className="font-chakra text-h1 gradient-text text-center relative">
          Backed by
        </h2>

        {/* Investor logo carousel */}
        <div
          className="overflow-x-auto relative"
          ref={registerTimedScrollReset({ x: 0.5 })}
        >
          <div className="flex flex-col justify-center w-max gap-5">
            <ul className="flex justify-center gap-5 ml-[72px]">
              <li className="card w-72 h-48 flex items-center justify-center">
                <img src="/logos/placeholder-logo.svg" alt="Placeholder" />
              </li>
              <li className="card w-72 h-48 flex items-center justify-center">
                <img src="/logos/a_capital-logo.svg" alt="a_capital" />
              </li>
              <li className="card w-72 h-48 flex items-center justify-center">
                <img src="/logos/sva-logo.svg" alt="SVA" />
              </li>
              <li className="card w-72 h-48 flex items-center justify-center">
                <img
                  src="/logos/ethereal-ventures-logo.svg"
                  alt="Ethereal Ventures"
                />
              </li>
              <li className="card w-72 h-48 flex items-center justify-center">
                <img src="/logos/hack-vc-logo.svg" alt="Hack VC" />
              </li>
              <li className="card w-72 h-48 flex items-center justify-center">
                <img
                  src="/logos/robot-ventures-logo.svg"
                  alt="Robot Ventures"
                />
              </li>
            </ul>
            <ul className="flex justify-center gap-5 mr-[72px]">
              <li className="card w-72 h-48 flex items-center justify-center">
                <img src="/logos/sc-logo.svg" alt="SC" />
              </li>
              <li className="card w-72 h-48 flex items-center justify-center">
                <img
                  src="/logos/stani-kulechov-logo.svg"
                  alt="Stani Kulechov"
                />
              </li>
              <li className="card w-72 h-48 flex items-center justify-center">
                <img
                  src="/logos/polychain-capital-logo.svg"
                  alt="Polychain Capital"
                />
              </li>
              <li className="card w-72 h-48 flex items-center justify-center">
                <img src="/logos/a16z-logo.svg" alt="a16z" />
              </li>
              <li className="card w-72 h-48 flex items-center justify-center">
                <img src="/logos/rune-logo.svg" alt="Rune" />
              </li>
              <li className="card w-72 h-48 flex items-center justify-center">
                <img src="/logos/kain-warwick-logo.svg" alt="Kain Warwick" />
              </li>
            </ul>
          </div>
        </div>

        <p className="spaced-mono text-body-lg text-center text-content/80 relative text-shadow-lg shadow-aquamarine-950">
          And many more
        </p>

        {/* Bottom glow */}
        <div className="absolute w-[1036px] h-[200px] bg-gradient-90 from-aquamarine to-sky rounded-[100%] blur-[200px] bottom-[-172px] left-1/2 -translate-x-1/2 -z-10" />
      </div>

      <Footer />
    </>
  );
}

/**
 * A ref callback that scrolls an element to a specific position and resets it
 * when the mouse leaves the element.
 */
function registerTimedScrollReset({
  x,
  y,
  delay = 0,
}: {
  x?: number;
  y?: number;
  delay?: number;
}) {
  let timer: NodeJS.Timeout | undefined = undefined;

  if (x === undefined && y === undefined) {
    throw new Error("At least one of x or y must be provided");
  }

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
