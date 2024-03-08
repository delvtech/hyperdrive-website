import classNames from "classnames";
import { useRef, useState } from "react";
import adjustmentsIcon from "src/assets/icons/adjustments-icon.svg";
import curveIcon from "src/assets/icons/curve-icon.svg";
import fixedRatesIcon from "src/assets/icons/fixed-rates-icon.svg";
import leftArrowIcon from "src/assets/icons/left-arrow-icon.svg";
import multipliedRatesIcon from "src/assets/icons/multiplied-rates-icon.svg";
import rightArrowIcon from "src/assets/icons/right-arrow-icon.svg";
import heroIllustration from "src/assets/illustrations/hero-illustration.svg";
import lpReturnsIcon1 from "src/assets/illustrations/lp-returns-1-illustration.svg";
import lpReturnsIcon2 from "src/assets/illustrations/lp-returns-2-illustration.svg";
import lpReturnsIcon3 from "src/assets/illustrations/lp-returns-3-illustration.svg";
import { Footer } from "src/components/Footer";
import { GradientBorderButton } from "src/components/GradientButton";
import { Header } from "src/components/Header";
import { ScrollCarousel } from "src/components/ScrollCarousel";
import { HeroPill } from "src/components/home/HeroPill";
import { useScrollPosition } from "src/hooks/useScrollPosition";

export function Home() {
  const scrollPosition = useScrollPosition();
  const heroHeightRef = useRef(Infinity);

  const [activeCoreFundamentalsSlide, setActiveCoreFundamentalsSlide] =
    useState(0);

  function handlePrevCoreFundamentalsSlide() {
    setActiveCoreFundamentalsSlide((prev) => prev - 1);
  }

  function handleNextCoreFundamentalsSlide() {
    setActiveCoreFundamentalsSlide((prev) => prev + 1);
  }

  const isScrolledPastHero = scrollPosition > heroHeightRef.current - 30;

  return (
    <>
      <Header
        theme="dark"
        collapsibleMenu={isScrolledPastHero}
        showSectionMenu={isScrolledPastHero}
        sections={[
          { id: "overview", title: "Overview" },
          { id: "security", title: "Security" },
          { id: "protocol", title: "Protocol" },
          { id: "strategies", title: "Strategies" },
          { id: "partners", title: "Partners" },
        ]}
      />

      {/* Hero */}
      <div
        className="h-screen flex gap-32 items-center justify-center relative px-[5vw]"
        ref={(node) => {
          if (node) {
            heroHeightRef.current = node.getBoundingClientRect().height;
          }
        }}
      >
        {/* Hero left */}
        <div className="relative z-10">
          <h1 className="text-h1 font-medium font-chakra relative gradient-text mb-16">
            Yield,
            <br />
            Your Way.
          </h1>
          <div className="flex gap-6">
            <GradientBorderButton
              href="https://hyperdrive-app.delv.tech"
              className="button-primary px-10"
            >
              Launch App
            </GradientBorderButton>
            <GradientBorderButton
              href="https://docs.hyperdrive.com"
              className="px-10"
            >
              Learn more
            </GradientBorderButton>
          </div>
        </div>

        {/* Hero right */}
        <div className="relative min-w-[775px] h-[328px]">
          <img
            className="w-[932px] h-[269px] absolute right-0 top-[43px] max-w-none"
            src={heroIllustration}
          />
          <HeroPill className="absolute left-0 top-0">
            Earn Fixed Rates
          </HeroPill>
          <HeroPill className="absolute left-[144px] bottom-0">
            Multiply exposure to variable rates
          </HeroPill>
          <HeroPill className="absolute left-[360px] top-[49px]">
            Set it and forget it LP
          </HeroPill>
        </div>
      </div>

      {/* Overview */}
      <div id="overview" className="px-24 py-40 grid grid-cols-2">
        {/* Overview left */}
        <div className="max-w-md mx-auto mt-32">
          <h2 className="font-chakra text-h5 bg-gradient-to-tr from-aquamarine to-aquamarine-fade bg-clip-text text-transparent leading-normal mb-6">
            What is Hyperdrive?
          </h2>
          <p>
            Hyperdrive is a novel AMM for traders to obtain fixed rates or
            boosted variable yields underpinned by high quality yield sources
            like stETH and sDAI.
          </p>
        </div>

        {/* Overview right */}
        <div className="flex gap-3">
          <div className="space-y-3 flex-1">
            <div className="space-y-4 bg-card-gradient p-6 min-h-96">
              <img src={fixedRatesIcon} />
              <h3 className="text-h7 leading-normal text-neutral-100 font-chakra">
                Fixed rates
              </h3>
              <p className="text-neutral-600">
                Get simple, predictable fixed rates on ETH, stETH, DAI, or sDAI
                with principal-protected returns.
              </p>
            </div>
            <div className="space-y-4 bg-card-gradient p-6 min-h-96">
              <img src={adjustmentsIcon} />
              <h3 className="text-h7 leading-normal text-neutral-100 font-chakra">
                Fixed Rate Borrow
              </h3>
              <p className="text-neutral-600">
                Turn a variable rate borrow position on Morpho or Spark into a
                fixed rate borrow position on Hyperdrive.
              </p>
              <p className="inline-flex px-3 h-8 rounded bg-[#8A92A3]/20 font-mono text-neutral-100/70 uppercase items-center justify-center">
                coming soon
              </p>
            </div>
          </div>
          <div className="space-y-3 flex-1 mt-16">
            <div className="space-y-4 bg-card-gradient p-6 min-h-96">
              <img src={multipliedRatesIcon} />
              <h3 className="text-h7 leading-normal text-neutral-100 font-chakra">
                Multiplied variable rates
              </h3>
              <p className="text-neutral-600">
                Get multiplied variable rate exposure and speculate on rate
                movements by opening a Short, or LP to earn passive variable
                yield without being exposed to impermanent loss.
              </p>
            </div>
            <div className="space-y-4 bg-card-gradient p-6 min-h-96">
              <img src={curveIcon} />
              <h3 className="text-h7 leading-normal text-neutral-100 font-chakra">
                Longs as Collateral
              </h3>
              <p className="text-neutral-600">
                Using Hyperdrive Longs (fixed rates) as collateral in borrowing
                protocols like Spark and Morpho will benefit users seeking a
                capital efficient way to obtain the same exposure they would get
                from borrowing against the base asset (sDAI or stETH).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LP Returns */}
      <div className="px-24 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-chakra text-h5 gradient-text font-medium mb-6">
            Hypercharge your LP returns by earning in 3 ways:
          </h2>
        </div>

        {/* LP tiles */}
        <div className="flex gap-10 text-white text-center mb-16">
          <div className="bg-card-gradient flex-1 p-8 flex flex-col justify-between rounded-sm gap-10">
            <img src={lpReturnsIcon1} className="block max-w-" />
            <p className="text-h6 font-chakra font-medium">
              Fees from trading activity
            </p>
          </div>
          <div className="bg-card-gradient flex-1 p-8 flex flex-col justify-between rounded-sm gap-10">
            <img src={lpReturnsIcon2} className="block max-w-" />
            <p className="text-h6 font-chakra font-medium">
              Variable yield on idle capital
            </p>
          </div>
          <div className="bg-card-gradient flex-1 p-8 flex flex-col justify-between rounded-sm gap-10">
            <img src={lpReturnsIcon3} className="block max-w-" />
            <p className="text-h6 font-chakra font-medium">
              PnL from balancing market activity
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <GradientBorderButton href="#lp-docs-url" className="button-primary">Learn more</GradientBorderButton>
        </div>
      </div>

      {/* Security */}
      <ScrollCarousel
        id="security"
        className="px-24 py-16 min-h-screen bg-gradient-to-b from-midnight to-black"
        slideHeight={440}
        slideGap={56}
        heading={
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-chakra text-h5 leading-normal mb-6">
              Security
            </h2>
          </div>
        }
        slides={[
          <div className="space-y-4 p-5 pb-6 bg-card-gradient rounded-sm relative h-[440px]">
            <p className="font-mono text-caption-lg">01</p>
            <h3 className="text-h7 leading-normal">Audits</h3>
            <p className="text-neutral-600">
              Four audits of the Hyperdrive protocol have been completed by
              industry leaders in blockchain security.
            </p>
          </div>,

          <div className="space-y-4 p-5 pb-6 bg-card-gradient rounded-sm relative h-[440px]">
            <img src={multipliedRatesIcon} />
            <h3 className="text-h7 leading-normal">Formal Verification</h3>
            <p className="text-neutral-600">
              Mathematical certainty of the code base was proven by Certora, an
              industry leader in formal verification.
            </p>
          </div>,

          <div className="space-y-4 p-5 pb-6 bg-card-gradient rounded-sm relative h-[440px]">
            <img src={adjustmentsIcon} />
            <h3 className="text-h7 leading-normal">Fuzz Testing</h3>
            <p className="text-neutral-600">
              Hyperdrive is tested using a robust fuzzing system that combines
              traditional solidity input sweeps with Python-based smart agents.
            </p>
          </div>,

          <div className="space-y-4 p-5 pb-6 bg-card-gradient rounded-sm relative h-[440px]">
            <img src={curveIcon} />
            <h3 className="text-h7 leading-normal">Active Threat Monitoring</h3>
            <p className="text-neutral-600">
              Hyperdrive's smart contracts are actively monitored to get ahead
              of potential threats and leverage collective security
              intelligence.
            </p>
          </div>,

          <div className="flex flex-col justify-between p-5 pb-6 bg-card-gradient rounded-sm relative h-[440px]">
            <h3 className="text-h7 leading-normal">Hyperdrive Security</h3>
            <img className="w-8" src={rightArrowIcon} />
          </div>,
        ]}
      />

      {/* Protocol */}
      <div
        id="protocol"
        className="px-24 py-16 grid grid-cols-2 gap-40 overflow-x-hidden"
      >
        <div className="flex flex-col justify-between">
          <h2 className="font-chakra text-h3">Core Protocol Fundamentals</h2>

          {/* Core Fundamental Carousel Nav */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevCoreFundamentalsSlide}
              disabled={activeCoreFundamentalsSlide === 0}
              className={classNames(
                "w-12 h-12 rounded-full border border-neutral-900 flex items-center justify-center",
                {
                  "opacity-50": activeCoreFundamentalsSlide === 0,
                },
              )}
            >
              <img src={leftArrowIcon} />
            </button>
            <button
              onClick={handleNextCoreFundamentalsSlide}
              disabled={activeCoreFundamentalsSlide === 2}
              className={classNames(
                "w-12 h-12 rounded-full border border-neutral-900 flex items-center justify-center",
                {
                  "opacity-50": activeCoreFundamentalsSlide === 2,
                },
              )}
            >
              <img src={rightArrowIcon} />
            </button>
          </div>
        </div>
        {/* Carousel overflow container */}
        <div className="relative">
          {/* Carousel */}
          {/* TODO: Maybe there's a better way to avoid setting a fixed */}
          <div className="w-[9999px] flex flex-nowrap [&>*]:mr-6 [&>*]:w-[480px] [&>*]:bg-neutral-100 [&>*]:p-6 [&>*]:rounded-sm [&>*]:transition-all [&>*]:duration-700 [&>*]:opacity-50 [&>*]:blur-sm">
            {/* Slide */}
            <div
              className={classNames({
                "!opacity-100 !blur-none": activeCoreFundamentalsSlide === 0,
                "scale-50 !-mr-[480px]": activeCoreFundamentalsSlide > 0,
              })}
            >
              <p className="mb-6">
                Long traders earn a fixed rate. They deposit assets today and
                get an agreed-upon future value, calculated by Hyperdrive's
                novel pricing model.
              </p>
              <p>
                Opening a Long position lowers the market's fixed rate. Longs
                always profit if held to maturity.
              </p>
            </div>
            {/* Slide */}
            <div
              className={classNames({
                "!opacity-100 !blur-none": activeCoreFundamentalsSlide === 1,
                "scale-50 !-mr-[480px]": activeCoreFundamentalsSlide > 1,
              })}
            >
              <p className="mb-6">
                Shorts earn multiplied variable rate. They pay a fixed rate,
                which is the market's sentiment about the pool capital's future
                growth, and earn variable yield on the full capital.
              </p>
              <p>
                Opening shorts increases the market's fixed rate. Furthermore,
                short positions take variable yield from LPs.
              </p>

              <p>
                Shorts can have a large upside, but they can also incur losses
                if the variable rate underperforms the fixed rate.
              </p>
            </div>
            {/* Slide */}
            <div
              className={classNames({
                "!opacity-100 !blur-none": activeCoreFundamentalsSlide === 2,
                "scale-50 !-mr-[480px]": activeCoreFundamentalsSlide > 2,
              })}
            >
              <p className="mb-6">
                LPs deposit single-sided liquidity. LP funds are utilized to
                take the other side of traders' Longs and Shorts.
              </p>
              <p>
                Long positions generate more variable yield for LPs, and
                conversely, Short positions take variable yield from LPs.
              </p>
              <p>
                Unutilized capital earns the underlying yield source variable
                rate. LPs also earn fees from all trading activity in the pool.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategies */}
      <div id="strategies" className="px-28 py-20 flex justify-between">
        <h2 className="font-chakra text-h5 leading-normal mb-6 w-64">
          Trading Strategies
        </h2>
        <div className="grid grid-cols-2 gap-9 basis-2/3">
          <div className="p-6 bg-neutral-200">
            <h3 className="font-chakra mb-4 text-h7 leading-normal">
              Hold to Maturity
            </h3>
            <p className="text-neutral-700">
              Obtain a predictable fixed rate of return, or maximize your
              exposure to the variable rate if you believe it will outperform
              over the term.
            </p>
          </div>
          <div className="p-6 bg-neutral-200">
            <h3 className="font-chakra mb-4 text-h7 leading-normal">
              Rates Speculation
            </h3>
            <p className="text-neutral-700">
              Speculate on the anticipated directionality of the rates and seek
              to close your position early at a profit.
            </p>
          </div>
          <div className="p-6 bg-neutral-200">
            <h3 className="font-chakra mb-4 text-h7 leading-normal">
              Rates Arbitraging
            </h3>
            <p className="text-neutral-700">
              Maintain optimal yield performance by opening shorts or longs
              &mdash; whichever earns you a higher rate &mdash; to bring the
              fixed and variable rates closer together.
            </p>
          </div>
          <div className="p-6 bg-neutral-200">
            <h3 className="font-chakra mb-4 text-h7 leading-normal">
              Volatility Harvesting
            </h3>
            <p className="text-neutral-700">
              Provide liquidity to a market and seek a profit from
              volatility-driven trading fees, while still earning the yield
              source rate on idle capital.
            </p>
          </div>
        </div>
      </div>

      {/* Partners */}
      {/* <div id="partners" className="px-24 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-h7 font-chakra mb-14">
            Integrators &amp; Partners
          </h2>
          <div className="flex gap-14 justify-center">
            <img src={blockAnalyticaLogo} />
            <img src={blockAnalyticaLogo} />
            <img src={blockAnalyticaLogo} />
            <img src={blockAnalyticaLogo} />
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
}
