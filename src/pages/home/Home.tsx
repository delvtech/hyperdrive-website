import classNames from "classnames";
import { Link } from "react-router-dom";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { GradientBorderButton } from "src/components/buttons/GradientButton";
import { HyperdriveLogoIcon } from "src/components/icons/HyperdriveLogoIcon";
import { CtaTile } from "src/pages/home/CtaTile";

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
            <p className="flex items-center gap-10 font-light text-content/60">
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
            </p>
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
                <Link to="/app" className="button button-primary">
                  <HyperdriveLogoIcon className="size-4" />
                  Get started
                </Link>
                <GradientBorderButton to="/docs">
                  Learn more
                </GradientBorderButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hyperdrive One */}
      <div className="bg-[url('/accents/hyperdrive-one-lines.svg')] bg-[center_-77px] bg-no-repeat overflow-hidden">
        <div id="hyperdrive-one" className="inner-container pt-32 mb-20">
          <p className="flex items-center gap-3 font-chakra tracking-wide uppercase mb-14">
            <img src="/icons/apps-icon.svg" className="size-6" />
            Our Apps
          </p>

          <div className="grid items-end gap-5 grid-cols-2 mb-20">
            <h1 className="gradient-text to-teal-400 text-h1 font-chakra">
              Yield Opportunities
            </h1>
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
      <div className="bg-[url('/accents/fixed-borrow-lines-top.svg')] bg-[calc(50%_+_100px)_-132px] bg-no-repeat relative overflow-hidden">
        <img
          src="/accents/fixed-borrow-lines-left.svg"
          className="absolute bottom-[-544px] left-[-136px] pointer-events-none"
        />
        <div id="fixed-borrow" className="inner-container py-32">
          <p className="flex items-center gap-3 font-chakra tracking-wide uppercase mb-14">
            <img src="/icons/apps-icon.svg" className="size-6" />
            Our Apps
          </p>

          <div className="grid items-end gap-5 grid-cols-2 mb-20">
            <h1 className="gradient-text from-[#0FC2C2] to-[#44E8E8] text-h1 font-chakra">
              Rate
              <br />
              Protection
            </h1>
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
              <Link to="/app" className="button button-primary-alt">
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
          <h1 className="gradient-text text-h1 font-chakra">
            Build on the Hyperdrive Protocol
          </h1>

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
          <div className="card flex gap-4 items-center pb-8 order-3">
            <div className="space-y-3">
              <h2 className="font-chakra text-h5">Get started</h2>
              <p className="text-content/60 font-light">
                Bring new yield-based products to life with Hyperdrive(CORE)'s
                extensive open source developer tooling for the Hyperdrive
                Protocol.
              </p>
            </div>
            <a
              href="https://github.com/delvtech"
              className="button button-primary px-10"
            >
              Build now
            </a>
          </div>

          <img src="/illustrations/hyperdrive-sheild-on-squares.svg" />
        </div>
      </div>

      <div className="inner-container">
        <div className="h-px bg-gradient-to-r from-content/0 via-aquamarine/75 to-content/0" />
      </div>

      {/* Security measures */}
      <div id="build" className="inner-container pt-28 pb-52">
        <p className="flex items-center gap-3 font-chakra tracking-wide uppercase mb-8">
          <img src="/icons/tools-icon.svg" className="size-6" />
          Security measures
        </p>
      </div>

      <Footer />
    </>
  );
}
