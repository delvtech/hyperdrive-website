import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import ArrowLeft from "src/assets/arrow-left.svg";
import ArrowRight from "src/assets/arrow-right.svg";
import BlockAnalyticaLogo from "src/assets/block-analytica-logo.svg";
import ActivityIcon from "src/assets/tabler-icon-activity-heartbeat.svg";
import ArrowRightIcon from "src/assets/tabler-icon-arrow-arrow-right.svg";
import FileCheckIcon from "src/assets/tabler-icon-file-check.svg";
import ListIcon from "src/assets/tabler-icon-staggered-list.svg";
import SawWaveIcon from "src/assets/tabler-icon-wave-saw-tool.svg";
import SquareWaveIcon from "src/assets/tabler-icon-wave-square.svg";
import { Footer } from "src/components/Footer";

export function Home() {
  // Scroll jack for security carousel
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollPositionRef = useRef(scrollPosition);
  const scrollJackStartRef = useRef(Infinity);
  const scrollJackLengthRef = useRef(0);
  const scrollJackSectionSizeRef = useRef(0);
  const isTickingRef = useRef(false);
  function onScroll(e: WheelEvent) {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    let isScrollJacked = false;

    if (
      direction === 1 &&
      window.scrollY >= scrollJackStartRef.current &&
      scrollPositionRef.current < scrollJackLengthRef.current
    ) {
      isScrollJacked = true;
    }

    if (
      direction === -1 &&
      window.scrollY <= scrollJackStartRef.current &&
      scrollPositionRef.current > 0
    ) {
      isScrollJacked = true;
    }

    if (!isScrollJacked) {
      window.scrollBy(0, e.deltaY);
    }

    if (!isTickingRef.current && isScrollJacked) {
      window.requestAnimationFrame(() => {
        scrollPositionRef.current += e.deltaY;
        setScrollPosition(scrollPositionRef.current);
        isTickingRef.current = false;
      });
      isTickingRef.current = true;
    }
  }
  useEffect(() => {
    window.addEventListener("wheel", onScroll, { passive: false });
    return () => window.removeEventListener("wheel", onScroll);
  }, []);

  // Core Fundamental Carousel
  const [activeCoreFundamentalsSlide, setActiveCoreFundamentalsSlide] =
    useState(0);
  function handlePrevCoreFundamentalsSlide() {
    setActiveCoreFundamentalsSlide((prev) => prev - 1);
  }
  function handleNextCoreFundamentalsSlide() {
    setActiveCoreFundamentalsSlide((prev) => prev + 1);
  }

  function getSecuritySlideStyle(index: number) {
    // The scroll length of each section
    const sectionSize = scrollJackSectionSizeRef.current;
    // The start of the given section
    const sectionStart = sectionSize * index;
    // The relative scroll position within the section
    const relativeScrollPosition = Math.max(0, scrollPosition - sectionStart);
    // The ratio of the section that has been scrolled (0-1)
    const scrollRatio = Math.min(1, relativeScrollPosition / sectionSize);
    const inverseRatio = 1 - scrollRatio;

    if (index === 0) {
      console.log({
        inverseRatio,
        margin: 440 * scrollRatio,
        extraSpace: 56 * inverseRatio,
        result: 440 * scrollRatio + 56 * inverseRatio,
      });
    }

    let baseStyles = {
      marginBottom: `${index === 4 ? 0 : -440 * scrollRatio + 56 * inverseRatio}px`,
    };

    return scrollRatio > 0
      ? {
          ...baseStyles,
          transform: `scale(${inverseRatio})`,
          filter: `blur(${4 * scrollRatio}px)`,
          opacity: inverseRatio,
        }
      : baseStyles;
  }

  return (
    <>
      {/* Hero */}
      <div className="h-screen flex items-center justify-center relative bg-neutral-200">
        <div className="max-w-2xl mb-10">
          <h1 className="text-h3 font-chakra text-center leading-normal">
            Fixed and variable yields at your control
          </h1>
        </div>
        <a
          href="#"
          className="absolute uppercase px-6 py-4 rounded-full bg-neutral-100 text-neutral-900 font-mono font-medium bottom-28 text-caption-lg"
        >
          Learn more
        </a>
      </div>

      {/* What is Hyperdrive */}
      <div className="px-24 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-chakra text-h5 leading-normal mb-6">
            What is Hyperdrive?
          </h2>
          <p>
            Hyperdrive is a novel AMM for traders to obtain fixed rates or
            boosted variable yields underpinned by high quality yield sources
            like stETH and sDAI.
          </p>
        </div>

        <div className="flex gap-14">
          <div className="space-y-4 flex-1">
            <img src={SawWaveIcon} />
            <h3 className="text-h7 leading-normal">Fixed rate exposure</h3>
            <p className="text-neutral-600">
              Get simple, predictable fixed rates on ETH, stETH, DAI, or sDAI
              with principal-protected returns.
            </p>
          </div>
          <div className="space-y-4 flex-1">
            <img src={ListIcon} />
            <h3 className="text-h7 leading-normal">
              Multiplied variable rate exposure
            </h3>
            <p className="text-neutral-600">
              Get multiplied variable rate exposure and speculate on rate
              movements by opening a Short, or LP to earn passive variable yield
              without being exposed to impermanent loss.
            </p>
          </div>
          <div className="space-y-4 flex-1">
            <img src={ActivityIcon} />
            <h3 className="text-h7 leading-normal">Fixed rate borrow</h3>
            <p className="text-neutral-600">
              Turn a variable rate borrow position on Morpho or Spark into a
              fixed rate borrow position on Hyperdrive.
            </p>
            <p>coming soon</p>
          </div>
          <div className="space-y-4 flex-1">
            <img src={SquareWaveIcon} />
            <h3 className="text-h7 leading-normal">Fixed rate as collateral</h3>
            <p className="text-neutral-600">
              Turn a variable rate borrow position on Morpho or Spark into a
              fixed rate borrow position on Hyperdrive.
            </p>
            <p>coming soon</p>
          </div>
        </div>
      </div>

      {/* Hypercharge your LP returns by earning in 3 ways */}
      <div className="px-24 py-16 bg-neutral-200">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-chakra text-h5 leading-normal mb-6">
            Hypercharge your LP returns by earning in 3 ways:
          </h2>
        </div>
        <div className="flex gap-10">
          <div className="bg-neutral-100 flex-1 p-6 flex flex-col justify-between rounded-sm gap-10">
            <img src={FileCheckIcon} className="w-16" />
            <p className="text-h6">Fees from trading activity</p>
          </div>
          <div className="bg-neutral-100 flex-1 p-6 flex flex-col justify-between rounded-sm gap-10">
            <img src={FileCheckIcon} className="w-16" />
            <p className="text-h6">Variable yield on idle capital</p>
          </div>
          <div className="bg-neutral-100 flex-1 p-6 flex flex-col justify-between rounded-sm gap-10">
            <img src={FileCheckIcon} className="w-16" />
            <p className="text-h6">PnL from balancing market activity</p>
          </div>
        </div>
      </div>

      {/* Security */}
      <div
        className="px-24 py-16"
        ref={(node) => {
          if (node) {
            scrollJackStartRef.current =
              window.scrollY + node.getBoundingClientRect().top - 64; // 64 is the header height
          }
        }}
      >
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-chakra text-h5 leading-normal mb-6">Security</h2>
        </div>
        {/* Security carousel overflow container */}
        <div className="relative h-[480px] overflow-y-hidden">
          {/* Security carousel */}
          <div
            className="[&>*]:h-[440px] [&>*]:bg-neutral-200 [&>*]:p-6 [&>*]:rounded-sm [&>*]:relative [&>*]:mb-14"
            ref={(node) => {
              if (node && !scrollJackLengthRef.current) {
                const { height } = node.getBoundingClientRect();
                scrollJackSectionSizeRef.current = height / 5; // 5 is the number of slides
                scrollJackLengthRef.current =
                  height - scrollJackSectionSizeRef.current;
              }
            }}
          >
            {/* Slide */}
            <div
              className={classNames("space-y-4 p-5 pb-6")}
              style={getSecuritySlideStyle(0)}
            >
              <img src={SawWaveIcon} />
              <h3 className="text-h7 leading-normal">Audits</h3>
              <p className="text-neutral-600">
                Four audits of the Hyperdrive protocol have been completed by
                industry leaders in blockchain security.
              </p>
            </div>
            {/* Slide */}
            <div
              className="space-y-4 p-5 pb-6"
              style={getSecuritySlideStyle(1)}
            >
              <img src={ListIcon} />
              <h3 className="text-h7 leading-normal">Formal Verification</h3>
              <p className="text-neutral-600">
                Mathematical certainty of the code base was proven by Certora,
                an industry leader in formal verification.
              </p>
            </div>
            {/* Slide */}
            <div
              className="space-y-4 p-5 pb-6"
              style={getSecuritySlideStyle(2)}
            >
              <img src={ActivityIcon} />
              <h3 className="text-h7 leading-normal">Fuzz Testing</h3>
              <p className="text-neutral-600">
                Hyperdrive is tested using a robust fuzzing system that combines
                traditional solidity input sweeps with Python-based smart
                agents.
              </p>
            </div>
            {/* Slide */}
            <div
              className="space-y-4 p-5 pb-6"
              style={getSecuritySlideStyle(3)}
            >
              <img src={SquareWaveIcon} />
              <h3 className="text-h7 leading-normal">
                Active Threat Monitoring
              </h3>
              <p className="text-neutral-600">
                Hyperdrive's smart contracts are actively monitored to get ahead
                of potential threats and leverage collective security
                intelligence.
              </p>
            </div>
            {/* Slide */}
            <div className="flex flex-col justify-between p-5 pb-6">
              <h3 className="text-h7 leading-normal">Hyperdrive Security</h3>
              <img className="w-8" src={ArrowRightIcon} />
            </div>
          </div>
        </div>
      </div>

      {/* Core fundamentals */}
      <div className="px-24 py-16 bg-neutral-200 grid grid-cols-2 gap-40 overflow-x-hidden">
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
              <img src={ArrowLeft} />
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
              <img src={ArrowRight} />
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
      <div className="px-28 py-20 flex justify-between">
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
      <div className="px-24 py-16 bg-neutral-200">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-h7 font-chakra mb-14">
            Integrators &amp; Partners
          </h2>
          <div className="flex gap-14 justify-center">
            <img src={BlockAnalyticaLogo} />
            <img src={BlockAnalyticaLogo} />
            <img src={BlockAnalyticaLogo} />
            <img src={BlockAnalyticaLogo} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
