import classNames from "classnames";
import { Link } from "react-router-dom";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { SectionDivider } from "src/components/SectionDivider";
import { GradientBorderButton } from "src/components/buttons/GradientButton";
import { HyperdriveLogoIcon } from "src/components/icons/HyperdriveLogoIcon";
import { PythonLogoIcon } from "src/components/icons/PythonLogoIcon";
import { RustLogoIcon } from "src/components/icons/RustLogoIcon";
import { SolidityLogoIcon } from "src/components/icons/SolidityLogoIcon";
import { TypeScriptLogoIcon } from "src/components/icons/TypeScriptLogoIcon";
import { CtaTile } from "src/pages/home/CtaTile";

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
          className={classNames(
            "-translate-x-[39.32%] pointer-events-none absolute top-[-601px] left-0 h-[1335px] max-w-[180%]",
          )}
        />
        <img
          src="/accents/hero-glow-tr.svg"
          className="pointer-events-none absolute top-[-439px] right-0 max-w-[180%] translate-x-[43.51%]"
        />
        <img
          src="/accents/hero-glow-br.svg"
          className="pointer-events-none absolute right-0 bottom-0 max-w-[180%] translate-x-[24.17%] translate-y-[37.23%] "
        />
        <img
          src="/accents/hero-glow-bl.svg"
          className="-translate-x-[46.78%] pointer-events-none absolute bottom-0 left-0 max-w-[180%] translate-y-[53.37%]"
        />
        <img
          src="/accents/delv-arc-hyperdrive.svg"
          className="pointer-events-none absolute top-[-296px] right-[-204px] h-[687px]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[length:100px_100px] bg-[url('/noise-texture.png')] bg-left-top bg-repeat opacity-20 mix-blend-overlay" />

        {/* Hero content */}
        <div
          className={classNames(
            "inner-container grid min-h-screen items-end justify-between gap-8 pb-10",
            "max-lg:justify-stretch max-lg:pt-40",
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
                "max-xl:text-h1",
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
                "flex flex-wrap items-center gap-9",
                "max-xl:grid max-xl:grid-cols-2",
                "max-lg:justify-items-center",
              )}
            >
              <img
                src="/logos/ethereum-logo.svg"
                alt="Ethereum"
                className={classNames("h-7", "max-lg:!h-9 max-lg: row-start-2")}
              />
              <img
                src="/logos/linea-logo.svg"
                alt="Linea"
                className="max-lg:!h-[26px] h-[18px]"
              />
              <img
                src="/logos/base-logo.svg"
                alt="Base"
                className={classNames(
                  "h-[17px]",
                  "max-lg:!h-[26px] max-lg:col-start-1 max-lg:row-start-1",
                )}
              />
              <img
                src="/logos/gnosis-chain-logo.svg"
                alt="Gnosis Chain"
                className="max-lg:!h-5 h-[14px]"
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
                "max-lg:clip-none max-lg:bg-transparent max-lg:px-0 max-lg:py-8",
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
        className={classNames(
          "overflow-hidden bg-[center_-77px] bg-[url('/accents/hyperdrive-one-lines.svg')] bg-no-repeat",
          "max-lg:bg-[center_-100px]",
        )}
      >
        <div
          className={classNames(
            "inner-container mb-20 pt-32",
            "max-lg:mb-9 max-lg:pt-28",
          )}
        >
          <p
            className={classNames(
              "mb-14 flex items-center gap-3 font-chakra uppercase tracking-wide",
              "max-lg:mb-8 max-lg:justify-center",
            )}
          >
            <img src="/icons/apps-icon.svg" className="size-6" />
            Our Apps
          </p>

          <div
            className={classNames(
              "mb-20 grid grid-cols-2 items-end gap-5",
              "max-lg:mb-9 max-lg:grid-cols-1 max-lg:justify-items-center max-lg:gap-16",
            )}
          >
            <h2
              className={classNames(
                "gradient-text to-teal-400 font-chakra text-h1",
                "max-lg:text-center max-lg:text-h4",
              )}
            >
              Yield Opportunities
            </h2>
            <div className="max-lg:grid max-lg:justify-items-center">
              <HyperdriveLogoIcon className="mb-5 size-10" />
              <h2 className="mb-3 font-chakra text-h5">Hyperdrive One</h2>
              <p className="font-light opacity-60">Powered by HYPERDRIVE</p>
            </div>
          </div>

          {/* Hyperdrive One CTA tiles */}
          <div
            className={classNames(
              "grid grid-cols-2 items-stretch gap-5",
              "max-lg:grid-cols-1",
            )}
          >
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

        {/* Yield sources */}
        <ul
          ref={preferScrollPosition({ x: 0.5 })}
          className="grid grid-flow-col items-center overflow-x-auto border-content/30 border-y py-6"
        >
          <YieldSource>
            <img className="h-10" src="/logos/rocketpool-logo-circle.png" />
            Rocketpool
          </YieldSource>
          <YieldSource>
            <img className="h-10" src="/logos/kelp-logo-circle.png" />
            Kelp
          </YieldSource>
          <YieldSource>
            <img className="h-10" src="/logos/gnosis-logo-circle.png" />
            Gnosis
          </YieldSource>
          <YieldSource>
            <img className="h-10" src="/logos/moonwell-logo-circle.png" />
            Moonwell
          </YieldSource>
          <YieldSource>
            <img className="h-10" src="/logos/sky-logo-circle.png" />
            Sky
          </YieldSource>
          <YieldSource>
            <img className="h-10" src="/logos/base-logo-circle.png" />
            Base
          </YieldSource>
          <YieldSource>
            <img className="h-10" src="/logos/angle-logo-circle.png" />
            Angle
          </YieldSource>
          <YieldSource>
            <img className="h-10" src="/logos/morpho-logo-circle.png" />
            Morpho
          </YieldSource>
          <YieldSource>
            <img className="h-10" src="/logos/ether.fi-logo-circle.png" />
            Ether.fi
          </YieldSource>
          <YieldSource>
            <img className="h-10" src="/logos/sdai-logo-circle.png" />
            sDAI
          </YieldSource>
          <YieldSource>
            <img className="h-10" src="/logos/renzo-logo-circle.png" />
            Renzo
          </YieldSource>
        </ul>
      </div>

      {/* Fixed Borrow */}
      <div
        id="fixed-borrow"
        className={classNames(
          "relative overflow-hidden bg-[calc(50%_+_100px)_-132px] bg-[url('/accents/fixed-borrow-lines-top.svg')] bg-no-repeat transition-all",
          "max-lg:bg-[calc(50%_-_200px)_-158px]",
        )}
      >
        <img
          src="/accents/fixed-borrow-lines-left.svg"
          className="pointer-events-none absolute bottom-[-544px] left-[-136px]"
        />

        <div className={classNames("inner-container py-32", "max-lg:pb-24")}>
          <p
            className={classNames(
              "mb-14 flex items-center gap-3 font-chakra uppercase tracking-wide",
              "max-lg:mb-8 max-lg:justify-center",
            )}
          >
            <img src="/icons/apps-icon.svg" className="size-6" />
            Our Apps
          </p>

          <div
            className={classNames(
              "mb-20 grid grid-cols-2 items-end gap-5",
              "max-lg:mb-0 max-lg:grid-cols-1 max-lg:justify-items-center max-lg:gap-16",
            )}
          >
            <h2
              className={classNames(
                "gradient-text from-[#0FC2C2] to-[#44E8E8] font-chakra text-h1",
                "max-lg:text-center max-lg:text-h4",
              )}
            >
              Rate
              <br className="max-lg:hidden" /> Protection
            </h2>
            <div
              className={classNames(
                "flex items-end gap-12",
                "max-lg:flex-col max-lg:items-center max-lg:gap-8",
              )}
            >
              <div className="max-lg:grid max-lg:justify-items-center">
                <HyperdriveLogoIcon className="mb-5 size-10" />
                <h2
                  className={classNames(
                    "mb-3 font-chakra text-h5",
                    "max-lg:text-[32px]",
                  )}
                >
                  Fixed Borrow
                </h2>
                <p className="font-light opacity-60">Powered by HYPERDRIVE</p>
              </div>
              <p
                className={classNames(
                  "mb-9 font-chakra text-content/50 text-h6",
                  "max-lg:mb-0",
                )}
              >
                X
              </p>
              <div className="max-lg:grid max-lg:justify-items-center">
                <img
                  src="/icons/morpho-logo-icon.svg"
                  className="mb-5 size-[60px]"
                />
                <h2
                  className={classNames(
                    "mb-9 font-chakra text-h5",
                    "max-lg:text-[32px]",
                  )}
                >
                  Morpho
                </h2>
              </div>
            </div>
          </div>

          {/* Fixed Borrow CTA tiles */}
          <div
            className={classNames(
              "grid grid-cols-2 items-stretch gap-5",
              "max-lg:grid-cols-1",
            )}
          >
            <CtaTile
              className={classNames(
                "col-start-2 bg-teal-500",
                "max-lg:col-start-1",
              )}
            >
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

      <SectionDivider className="lg:hidden" />

      {/* Build */}
      <div
        id="build"
        className={classNames("inner-container pt-28", "max-lg:pt-24")}
      >
        <p
          className={classNames(
            "mb-8 flex items-center gap-3 font-chakra uppercase tracking-wide",
            "max-lg:justify-center",
          )}
        >
          <img src="/icons/tools-icon.svg" className="size-6" />
          Our Tools
        </p>

        <div
          className={classNames(
            "grid grid-cols-2 items-start gap-x-32 gap-y-14",
            "max-lg:grid-cols-1 max-lg:justify-items-center max-lg:gap-0",
          )}
        >
          <h2
            className={classNames(
              "gradient-text font-chakra text-h1",
              "max-lg:mb-14 max-lg:max-w-md max-lg:text-center max-lg:text-h4",
            )}
          >
            Build on the Hyperdrive Protocol
          </h2>

          {/* Tools grid */}
          <div
            className={classNames(
              "grid grid-cols-2 gap-x-5 font-light text-body-lg",
              "max-lg:w-full max-lg:grid-cols-1",
            )}
          >
            <div className="grid grid-cols-[1fr_auto_1fr] border-content/30 border-y">
              <div className="col-start-2 flex h-36 items-center">
                <Link
                  to="/docs/hyperdrive-for-developers/mainnet-smart-contracts"
                  className={classNames(
                    "flex items-center gap-4 p-2 transition-all duration-100 hover:text-aquamarine",
                    "max-lg:w-full max-lg:py-6",
                  )}
                >
                  <SolidityLogoIcon className="size-8" />
                  Smart Contracts
                </Link>
              </div>
              <hr className="col-span-3 border-content/30" />
              <div className="col-start-2 flex h-36 items-center">
                <a
                  href="https://js.hyperdrive.box"
                  className={classNames(
                    "flex items-center gap-4 p-2 transition-all duration-100 hover:text-aquamarine",
                    "max-lg:w-full max-lg:py-6",
                  )}
                >
                  <TypeScriptLogoIcon className="size-8" />
                  Frontend SDK
                </a>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] border-content/30 border-y">
              <div className="col-start-2 flex h-36 items-center">
                <a
                  href="https://docs.rs/crate/hyperdrive-math/latest"
                  className={classNames(
                    "flex items-center gap-4 p-2 transition-all duration-100 hover:text-aquamarine",
                    "max-lg:w-full max-lg:py-6",
                  )}
                >
                  <RustLogoIcon className="size-8" />
                  Math SDK
                </a>
              </div>
              <hr className="col-span-3 border-content/30" />
              <div className="col-start-2 flex h-36 items-center">
                <Link
                  to="/docs/hyperdrive-trading-bots/agent0-overview"
                  className={classNames(
                    "flex items-center gap-4 p-2 transition-all duration-100 hover:text-aquamarine",
                    "max-lg:w-full max-lg:py-6",
                  )}
                >
                  <PythonLogoIcon className="size-8" />
                  Bots
                </Link>
              </div>
            </div>
          </div>

          {/* Get started card */}
          <div
            className={classNames(
              "lg:card order-3 flex items-center gap-5 p-6",
              "max-lg:flex-col max-lg:items-stretch max-lg:gap-9 max-lg:px-[2vw] max-lg:pt-9 max-lg:pb-20",
            )}
          >
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

          <img
            className="max-lg:hidden"
            src="/illustrations/hyperdrive-sheild-on-squares.svg"
          />
        </div>
      </div>

      <SectionDivider />

      {/* Security measures */}
      <div
        id="security"
        className={classNames("inner-container pt-28 pb-36", "max-lg:py-24")}
      >
        <div
          className={classNames(
            "mb-16 flex items-start justify-between gap-10",
            "max-lg:flex-col max-lg:items-stretch",
          )}
        >
          <p
            className={classNames(
              "mb-8 flex items-center gap-3 font-chakra uppercase tracking-wide",
              "max-lg:mb-0 max-lg:justify-center",
            )}
          >
            <img src="/icons/tools-icon.svg" className="size-6" />
            Security measures
          </p>
          <h2
            className={classNames(
              "gradient-text font-chakra text-h1",
              "max-lg: text-center max-lg:text-h4",
            )}
          >
            Robust Security
          </h2>
        </div>

        {/* Security cards */}
        <div
          className={classNames(
            "grid grid-cols-3 gap-5",
            "max-lg:grid-cols-1 max-lg:justify-items-center",
          )}
        >
          {/* Audited card */}
          <div
            className={classNames(
              "card col-span-3 flex gap-10",
              "max-lg:col-span-1 max-lg:max-w-xl max-lg:flex-col max-lg:gap-8",
            )}
          >
            <div
              className={classNames(
                "flex flex-col justify-between gap-12 py-8",
                "max-lg:gap-6 max-lg:p-0",
              )}
            >
              <div className="space-y-3">
                <a
                  href="https://docs.hyperdrive.box/the-hyperdrive-protocol/security"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-all hover:text-aquamarine-500"
                >
                  <h3 className="font-chakra text-h4.5">Audited</h3>
                </a>
                <p className="font-light text-content/60">
                  Six audits of the Hyperdrive Protocol have been completed by
                  blockchain security industry leaders.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="https://spearbit.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="/logos/spearbit-logo.svg" alt="Spearbit" />
                </a>
                <a
                  href="https://chainsafe.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="/logos/chainsafe-logo.svg" alt="Chainsafe" />
                </a>
                <a
                  href="https://www.certora.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="/logos/certora-logo.svg" alt="Certora" />
                </a>
              </div>
            </div>
            <img src="/illustrations/audited-illustration.svg" />
          </div>

          {/* Formal verification card */}
          <div
            className={classNames(
              "card flex flex-col items-start justify-between gap-8",
              "max-lg:max-w-xl max-lg:items-stretch",
            )}
          >
            <div className="space-y-3">
              <h3 className="font-chakra text-h4.5">Formal Verification</h3>
              <p className="font-light text-content/60">
                Certora, an industry leader in formal verification, implemented
                a mathematical model that verified many key invariants in
                Hyperdrive's AMM.
              </p>
            </div>
            <img src="/illustrations/formal-verification-illustration.svg" />
          </div>

          {/* Fuzz testing card */}
          <div
            className={classNames(
              "card flex flex-col items-start justify-between gap-8",
              "max-lg:max-w-xl max-lg:items-stretch",
            )}
          >
            <div className="space-y-3">
              <h3 className="font-chakra text-h4.5">Fuzz Testing</h3>
              <p className="font-light text-content/60">
                Hyperdrive is tested using a robust fuzzing system that combines
                traditional solidity input sweeps with Python-based smart
                agents.
              </p>
            </div>
            <img src="/illustrations/fuzz-testing-illustration.svg" />
          </div>

          {/* Active threat monitoring card */}
          <div
            className={classNames(
              "card flex flex-col items-start justify-between gap-8",
              "max-lg:max-w-xl max-lg:items-stretch",
            )}
          >
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
        className={classNames(
          "relative grid justify-center gap-20 overflow-hidden py-28",
          "max-lg:pt-20 max-lg:pb-16",
        )}
      >
        <h2
          className={classNames(
            "gradient-text relative text-center font-chakra text-h1",
            "max-lg:text-h4",
          )}
        >
          Backed by
        </h2>

        {/* Investor logo carousel */}
        <div
          className="relative overflow-x-auto"
          ref={preferScrollPosition({ x: 0.5 })}
        >
          <div
            className={classNames(
              "flex w-max flex-col justify-center gap-5",
              "max-lg:gap-4",
            )}
          >
            <ul
              className={classNames(
                "flex justify-center gap-5",
                "max-lg:gap-4",
              )}
            >
              <InvestorCard>
                <img src="/logos/a_capital-logo.png" alt="a_capital" />
              </InvestorCard>
              <InvestorCard>
                <img src="/logos/sva-logo.png" alt="SVA" />
              </InvestorCard>
              <InvestorCard>
                <img
                  src="/logos/ethereal-ventures-logo.png"
                  alt="Ethereal Ventures"
                />
              </InvestorCard>
              <InvestorCard>
                <img src="/logos/hack-vc-logo.png" alt="Hack VC" />
              </InvestorCard>
              <InvestorCard>
                <img
                  src="/logos/robot-ventures-logo.png"
                  alt="Robot Ventures"
                  className="h-8"
                />
              </InvestorCard>
            </ul>
            <ul
              className={classNames(
                "flex justify-center gap-5",
                "max-lg:gap-4",
              )}
            >
              <InvestorCard>
                <img src="/logos/placeholder-logo.png" alt="Placeholder" />
              </InvestorCard>
              <InvestorCard>
                <img src="/logos/sc-logo.png" alt="SC" />
              </InvestorCard>
              <InvestorCard>
                <img
                  src="/logos/polychain-capital-logo.png"
                  alt="Polychain Capital"
                />
              </InvestorCard>
              <InvestorCard>
                <img src="/logos/a16z-logo.png" alt="a16z" />
              </InvestorCard>
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

function YieldSource({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex h-28 w-60 items-center justify-center gap-3 border-content/30 border-r font-light text-[21px] last:border-none">
      {children}
    </li>
  );
}

function InvestorCard({ children }: { children: React.ReactNode }) {
  return (
    <li
      className={classNames(
        "card flex h-48 w-72 items-center justify-center",
        "max-lg:h-32 max-lg:w-48 max-lg:[&>img]:scale-75",
      )}
    >
      {children}
    </li>
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
