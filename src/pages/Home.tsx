import classNames from "classnames";
import overviewLine from "src/assets/accents/overview-line.svg";
import strategiesLine from "src/assets/accents/strategies-line.svg";
import adjustmentsIcon from "src/assets/icons/adjustments-icon.svg";
import curveIcon from "src/assets/icons/curve-icon.svg";
import fixedRatesIcon from "src/assets/icons/fixed-rates-icon.svg";
import multipliedRatesIcon from "src/assets/icons/multiplied-rates-icon.svg";
import auditsIllustration from "src/assets/illustrations/audits-illustration.svg";
import formalVerificationIllustration from "src/assets/illustrations/formal-verification-illustration.svg";
import fuzzTestingIllustration from "src/assets/illustrations/fuzz-testing-illustration.svg";
import heroIllustration from "src/assets/illustrations/hero-illustration.svg";
import lpReturnsIcon1 from "src/assets/illustrations/lp-returns-1-illustration.svg";
import lpReturnsIcon2 from "src/assets/illustrations/lp-returns-2-illustration.svg";
import lpReturnsIcon3 from "src/assets/illustrations/lp-returns-3-illustration.svg";
import threatMonitoringIllustration from "src/assets/illustrations/threat-monitoring-illustration.svg";
import certoraLogo from "src/assets/logos/certora-logo.svg";
import chainsafeLogo from "src/assets/logos/chainsafe-logo.svg";
import spearbitLogo from "src/assets/logos/spearbit-logo.svg";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { GradientBorderButton } from "src/components/buttons/GradientButton";
import { HeroPill } from "src/components/home/HeroPill";
import { PositionTypesCarousel } from "src/components/home/PositionTypesCarousel";

export function Home() {
  return (
    <>
      <Header theme="dark" />

      {/* Hero */}
      <div
        className={classNames(
          "h-screen flex gap-32 items-center justify-center relative px-[5vw]",
          "max-xl:px-[3vw]",
          "max-lg:flex-col max-lg:gap-8 max-lg:text-center",
        )}
      >
        {/* Hero left */}
        <div
          className={classNames(
            "relative z-10 w-[415px] shrink-0",
            "max-xl:w-[340px]",
            "max-lg:w-auto",
          )}
        >
          <h1
            className={classNames(
              "text-h1 font-medium font-chakra relative gradient-text mb-16",
              "max-xl:text-h2",
              "max-sm:text-h4",
            )}
          >
            Yield, Your Way.
          </h1>
          <div
            className={classNames(
              "flex gap-6",
              "max-lg:justify-center",
              "max-sm:block max-sm:space-y-4",
            )}
          >
            <GradientBorderButton
              hoverBorderFrom="#565E6F"
              hoverBorderTo="#1f2937"
            >
              Coming soon
            </GradientBorderButton>
            {/* <GradientBorderButton
              href="https://hyperdrive.delv.tech/app"
              className={classNames(
                "button-primary px-10",
                "max-lg:flex-1",
                "max-sm:w-full",
              )}
            >
              Launch App
            </GradientBorderButton>
            <GradientBorderButton
              href="https://hyperdrive.delv.tech/docs"
              className={classNames("px-10", "max-lg:flex-1", "max-sm:w-full")}
            >
              Learn more
            </GradientBorderButton> */}
          </div>
        </div>

        {/* Hero right */}
        <div
          className={classNames(
            "relative basis-[775px] h-[23vw] max-h-[325px]",
            "max-lg:absolute max-lg:top-1/2 max-lg:w-full max-lg:left-0",
          )}
        >
          <img
            className={classNames(
              "h-full absolute right-0 top-0 max-w-none",
              "max-lg:w-[200vw] max-lg:opacity-50 max-lg:h-auto max-lg:-translate-y-1/2",
            )}
            src={heroIllustration}
          />
          <HeroPill
            className={classNames(
              "absolute -translate-x-1/2 -translate-y-1/2 top-[10%] right-[390px] whitespace-nowrap",
              "max-[1440px]:right-[28vw]",
              "max-xl:right-[24vw]",
              // "max-lg:static max-lg:transform-none",
              "max-lg:hidden",
            )}
          >
            Earn Fixed Rates
          </HeroPill>
          <HeroPill
            className={classNames(
              "absolute -translate-x-1/2 -translate-y-1/2 top-[91%] right-[-48px] whitespace-nowrap",
              "max-[1440px]:right-[-6vw]",
              "max-xl:right-[-10vw]",
              // "max-lg:static max-lg:transform-none",
              "max-lg:hidden",
            )}
          >
            Multiply exposure to variable rates
          </HeroPill>
          <HeroPill
            className={classNames(
              "absolute -translate-x-1/2 -translate-y-1/2 top-[34%] right-[-72px] whitespace-nowrap",
              "max-[1440px]:right-[-7vw]",
              "max-xl:right-[-10vw]",
              // "max-lg:static max-lg:transform-none",
              "max-lg:hidden",
            )}
          >
            Set it and forget it LP
          </HeroPill>
        </div>
      </div>

      {/* Overview */}
      <div
        id="overview"
        className={classNames(
          "px-[5vw] pt-0 pb-20 flex relative gap-14 items-center",
          "max-lg:flex-col max-lg:gap-0",
        )}
      >
        <img
          src={overviewLine}
          className="absolute right-0 top-1/2 -translate-y-1/3"
        />

        {/* Overview left */}
        <div
          className={classNames(
            "max-w-md mx-auto flex flex-col justify-center flex-1 mb-40",
            "max-lg:mb-20",
            "max-sm:mb-14",
          )}
        >
          <h2 className="font-chakra text-h5 bg-gradient-to-tr from-aquamarine to-aquamarine-fade bg-clip-text text-transparent leading-normal mb-6">
            What is Hyperdrive?
          </h2>
          <p>
            Hyperdrive is a novel AMM for traders to obtain fixed rates or
            boosted variable yields underpinned by reputable yield sources like
            stETH and sDAI.
          </p>
        </div>

        {/* Overview right */}
        <div
          className={classNames(
            "flex gap-3 basis-1/2",
            "max-[1440px]:basis-[60%]",
            "max-sm:flex-col max-sm:gap-4",
          )}
        >
          <div className={classNames("space-y-3 flex-1", "max-sm:space-y-4")}>
            {/* Fixed rates */}
            <div
              className={classNames(
                "space-y-4 bg-card-gradient p-6 pb-10 min-h-80",
                "max-sm:min-h-0 max-sm:pb-14",
              )}
            >
              <img src={fixedRatesIcon} />
              <h3 className="text-h7 leading-normal text-neutral-100 font-chakra">
                Fixed rates
              </h3>
              <p>
                Get simple, predictable fixed rates on ETH, stETH, DAI, or sDAI
                with principal-protected returns.
              </p>
            </div>

            {/* Fixed rate borrow */}
            <div
              className={classNames(
                "space-y-4 bg-card-gradient p-6 pb-10 min-h-80",
                "max-sm:min-h-0 max-sm:pb-14",
              )}
            >
              <img src={adjustmentsIcon} />
              <h3 className="text-h7 leading-normal text-neutral-100 font-chakra">
                Fixed Rate Borrow
              </h3>
              <p>
                Turn a variable rate borrow position into a fixed rate borrow
                position on Hyperdrive.
              </p>
              <p className="inline-flex px-3 h-8 rounded bg-[#8A92A3]/20 font-mono text-body-sm text-neutral-100/70 uppercase items-center justify-center">
                coming soon
              </p>
            </div>
          </div>

          <div
            className={classNames(
              "space-y-3 flex-1 mt-16",
              "max-sm:mt-0 max-sm:space-y-4",
            )}
          >
            {/* Multiplied variable rates */}
            <div
              className={classNames(
                "space-y-4 bg-card-gradient p-6 pb-10 min-h-80",
                "max-sm:min-h-0 max-sm:pb-14",
              )}
            >
              <img src={multipliedRatesIcon} />
              <h3 className="text-h7 leading-normal text-neutral-100 font-chakra">
                Multiplied variable rates
              </h3>
              <p>
                Get multiplied variable rate exposure and speculate on rate
                movements by opening a Short, or LP to earn passive variable
                yield on single asset deposits without being exposed to
                impermanent loss.s.
              </p>
            </div>

            {/* Longs as collateral */}
            <div
              className={classNames(
                "space-y-4 bg-card-gradient p-6 pb-10 min-h-80",
                "max-sm:min-h-0 max-sm:pb-14",
              )}
            >
              <img src={curveIcon} />
              <h3 className="text-h7 leading-normal text-neutral-100 font-chakra">
                Longs as Collateral
              </h3>
              <p>
                Using Hyperdrive Longs (fixed rates) as collateral in other
                borrowing protocols offers users a capital efficient way to
                obtain exposure like they would from borrowing against the base
                asset (sDAI or stETH).
              </p>
              <p className="inline-flex px-3 h-8 rounded bg-[#8A92A3]/20 font-mono text-body-sm text-neutral-100/70 uppercase items-center justify-center">
                coming soon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LP Returns */}
      <div className="px-[5vw] py-14">
        <div className="max-w-2xl mx-auto text-center mb-16 max-lg:max-w-[420px] max-lg:text-left">
          <h2 className="font-chakra text-h5 gradient-text font-medium mb-6">
            Hypercharge your LP returns by earning in 3 ways:
          </h2>
        </div>

        {/* LP tiles */}
        <div
          className={classNames(
            "flex gap-10 text-white text-center mb-16 justify-center",
            "max-lg:flex-col max-lg:gap-4 max-lg:items-center",
          )}
        >
          <div
            className={classNames(
              "bg-card-gradient flex-1 p-8 pb-14 flex flex-col rounded-sm gap-8 max-w-[420px]",
              "max-xl:pb-10",
            )}
          >
            <img src={lpReturnsIcon1} className="block max-w-" />
            <p
              className={classNames(
                "text-h6 font-chakra font-medium",
                "max-xl:text-h7",
              )}
            >
              Fees from trading activity
            </p>
          </div>
          <div
            className={classNames(
              "bg-card-gradient flex-1 p-8 pb-14 flex flex-col rounded-sm gap-8 max-w-[420px]",
              "max-xl:pb-10",
            )}
          >
            <img src={lpReturnsIcon2} className="block max-w-" />
            <p
              className={classNames(
                "text-h6 font-chakra font-medium",
                "max-xl:text-h7",
              )}
            >
              Variable yield on idle capital
            </p>
          </div>
          <div
            className={classNames(
              "bg-card-gradient flex-1 p-8 pb-14 flex flex-col rounded-sm gap-8 max-w-[420px]",
              "max-xl:pb-10",
            )}
          >
            <img src={lpReturnsIcon3} className="block max-w-" />
            <p
              className={classNames(
                "text-h6 font-chakra font-medium",
                "max-xl:text-h7",
              )}
            >
              PnL from balancing market activity
            </p>
          </div>
        </div>

        {/* <div className="flex items-center justify-center">
          <GradientBorderButton href="#lp-docs-url" className="button-primary">
            Learn more
          </GradientBorderButton>
        </div> */}
      </div>

      {/* Security */}
      <div className="px-[5vw] py-14 flex flex-col items-center">
        <h2 className="font-chakra text-h5 font-medium gradient-text text-center grow-[.3] mb-8">
          Security
        </h2>

        {/* Audits */}
        <div className="px-14 pr-20 py-9 bg-card-gradient rounded-sm relative max-w-5xl mx-auto flex flex-col mb-6 max-lg:hidden">
          <p className="font-mono text-caption-lg mb-3">01</p>
          <div className="flex gap-24 items-center flex-1">
            <div>
              <h3 className="text-h5 font-chakra text-white mb-4 max-lg:text-h6">
                Audits
              </h3>
              <p className="mb-8">
                Four audits of the Hyperdrive protocol have been completed by
                industry leaders in blockchain security, with a fifth audit
                scheduled during testnet.
              </p>
              <div className="flex items-center gap-6">
                <a href="https://spearbit.com/">
                  <img src={spearbitLogo} alt="Spearbit" />
                </a>
                <a href="https://chainsafe.io/">
                  <img src={chainsafeLogo} alt="Chainsafe" />
                </a>
                <a href="https://www.certora.com/">
                  <img src={certoraLogo} alt="Certora" />
                </a>
              </div>
            </div>
            <img className="-mt-6 max-lg:w-1/3" src={auditsIllustration} />
          </div>
        </div>

        {/* Formal verification (< large screen) */}
        <div
          className={classNames(
            "px-14 pr-20 py-9 bg-card-gradient rounded-sm relative max-w-5xl mx-auto flex-col mb-6 hidden",
            "max-lg:flex",
            "max-md:hidden",
          )}
        >
          <p className="font-mono text-caption-lg mb-3">02</p>
          <div className="flex gap-24 items-center flex-1">
            <div>
              <h3 className="text-h6 font-chakra text-white mb-4">
                Formal Verification
              </h3>
              <p className="mb-8">
                Certora, an industry leader in formal verification, implemented
                a mathematical model that verified many key invariants in
                Hyperdrive's AMM.
              </p>
              <div className="flex items-center gap-6">
                <a href="https://www.certora.com/">
                  <img src={certoraLogo} alt="Certora" />
                </a>
              </div>
            </div>
            <img className="-mt-6 w-1/3" src={formalVerificationIllustration} />
          </div>
        </div>

        {/* Fuzz testing (< large screen) */}
        <div
          className={classNames(
            "px-14 pr-20 py-9 bg-card-gradient rounded-sm relative max-w-5xl mx-auto flex-col mb-6 hidden",
            "max-lg:flex",
            "max-md:hidden",
          )}
        >
          <p className="font-mono text-caption-lg mb-3">03</p>
          <div className="flex gap-24 items-center flex-1">
            <div>
              <h3 className="text-h6 font-chakra text-white mb-4">
                Fuzz Testing
              </h3>
              <p className="mb-8">
                Hyperdrive is tested using a robust fuzzing system that combines
                traditional Solidity input sweeps with Python-based smart
                agents.
              </p>
            </div>
            <img className="-mt-6 w-1/3" src={fuzzTestingIllustration} />
          </div>
        </div>

        {/* Threat monitoring (< large screen) */}
        <div
          className={classNames(
            "px-14 pr-20 py-9 bg-card-gradient rounded-sm relative max-w-5xl mx-auto flex-col mb-6 hidden",
            "max-lg:flex",
            "max-md:hidden",
          )}
        >
          <p className="font-mono text-caption-lg mb-3">04</p>
          <div className="flex gap-24 items-center flex-1">
            <div>
              <h3 className="text-h6 font-chakra text-white mb-4">
                Active Threat Monitoring
              </h3>
              <p className="mb-8">
                Hyperdrive's smart contracts are actively monitored to get ahead
                of potential threats and leverage collective security
                intelligence.
              </p>
            </div>
            <img className="-mt-6 w-1/3" src={threatMonitoringIllustration} />
          </div>
        </div>

        <div
          className={classNames(
            "flex gap-6 max-w-5xl",
            "max-lg:hidden",
            "max-md:flex max-md:flex-col",
          )}
        >
          {/* Audits < large screen */}
          <div className="pt-6 pb-9 bg-card-gradient relative hidden max-lg:block">
            <div className="flex justify-between pl-12 mb-4">
              <p className="font-mono text-caption-lg mt-3">01</p>
              <img className="box w-[232px]" src={auditsIllustration} />
            </div>
            <div className="px-12">
              <h3 className="text-h7 font-chakra text-white mb-4">Audits</h3>
              <p className="mb-8">
                Four audits of the Hyperdrive protocol have been completed by
                industry leaders in blockchain security, with a fifth audit
                scheduled during testnet.
              </p>
              <div className="grid grid-cols-2 gap-6 items-center">
                <a href="https://spearbit.com/">
                  <img src={spearbitLogo} alt="Spearbit" />
                </a>
                <a href="https://chainsafe.io/">
                  <img src={chainsafeLogo} alt="Chainsafe" />
                </a>
                <a
                  className="col-span-2 flex justify-center"
                  href="https://www.certora.com/"
                >
                  <img src={certoraLogo} alt="Certora" />
                </a>
              </div>
            </div>
          </div>

          {/* Formal verification */}
          <div className="pt-6 pb-9 bg-card-gradient relative">
            <div className="flex justify-between pl-12 mb-4">
              <p className="font-mono text-caption-lg mt-3">02</p>
              <img
                className="box w-[232px]"
                src={formalVerificationIllustration}
              />
            </div>
            <div className="px-12">
              <h3 className="text-h7 font-chakra text-white mb-4">
                Formal Verification
              </h3>
              <p className="mb-8">
                Certora, an industry leader in formal verification, implemented
                a mathematical model that verified many key invariants in
                Hyperdrive's AMM.
              </p>
              <div className="flex items-center gap-6">
                <a href="https://www.certora.com/">
                  <img src={certoraLogo} alt="Certora" />
                </a>
              </div>
            </div>
          </div>

          {/* Fuzz testing */}
          <div className="pt-6 pb-9 bg-card-gradient relative">
            <div className="flex justify-between pl-12 mb-4">
              <p className="font-mono text-caption-lg mt-3">03</p>
              <img className="box w-[232px]" src={fuzzTestingIllustration} />
            </div>
            <div className="px-12">
              <h3 className="text-h7 font-chakra text-white mb-4">
                Fuzz Testing
              </h3>
              <p className="mb-4">
                Hyperdrive is tested using a robust fuzzing system that combines
                traditional Solidity input sweeps with Python-based smart
                agents.
              </p>
            </div>
          </div>

          {/* Threat monitoring */}
          <div className="pt-6 pb-9 bg-card-gradient relative">
            <div className="flex justify-between pl-12 mb-4">
              <p className="font-mono text-caption-lg mt-3">04</p>
              <img
                className="box w-[232px]"
                src={threatMonitoringIllustration}
              />
            </div>
            <div className="px-12">
              <h3 className="text-h7 font-chakra text-white mb-4">
                Active Threat Monitoring
              </h3>
              <p className="mb-4">
                Hyperdrive's smart contracts are actively monitored to get ahead
                of potential threats and leverage collective security
                intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Protocol */}
      <div
        id="protocol"
        className={classNames(
          "px-[4vw] pt-28 flex gap-10 overflow-x-hidden",
          "max-lg:flex-col max-lg:gap-6 max-lg:pt-16",
        )}
      >
        <h2
          className={classNames(
            "font-chakra text-h5 gradient-text flex-1",
            "max-xl:text-h6",
          )}
        >
          Core Protocol Fundamentals
        </h2>
        <PositionTypesCarousel className="basis-3/4 max-xl:basis-auto" />
      </div>

      {/* Strategies */}
      <div
        id="strategies"
        className="px-[6vw] pt-48 pb-20 relative max-md:pt-32"
      >
        <img src={strategiesLine} className="absolute right-0 top-36" />

        <div className="flex justify-between gap-[4vw] max-md:flex-col">
          <div className="max-md:flex max-md:justify-between max-md:gap-4 max-md:items-center max-sm:block">
            <div>
              <h2
                className={classNames(
                  "font-chakra gradient-text text-h5 mb-14 whitespace-nowrap",
                  "max-xl:text-h6 max-xl:mb-8",
                  "max-sm:mb-4",
                )}
              >
                Trading Strategies*
              </h2>
              <p className="mb-6 max-sm:mb-8 max-w-96 max-md:max-w-max">
                Learn more about various trading strategies that can be
                employed, and dive into various scenarios with examples in the
                Docs.
              </p>
            </div>
            {/* <GradientBorderButton
              className="button-primary max-sm:mb-4"
              href="#"
            >
              Learn more
            </GradientBorderButton> */}
          </div>
          <div
            className={classNames(
              "grid grid-cols-2 gap-9 basis-2/3",
              "max-xl:gap-6",
              "max-lg:gap-4",
              "max-sm:grid-cols-1",
            )}
          >
            <div className="p-6 bg-card-gradient min-h-60">
              <h3 className="mb-4 text-h7 text-neutral-100">
                Hold to Maturity
              </h3>
              <p>
                Obtain a predictable fixed rate of return, or maximize your
                exposure to the variable rate if you believe it will outperform
                over the term.
              </p>
            </div>
            <div className="p-6 bg-card-gradient min-h-60">
              <h3 className="mb-4 text-h7 text-neutral-100">
                Rates Speculation
              </h3>
              <p>
                Speculate on the anticipated directionality of the rates and
                seek to close your position early at a profit.
              </p>
            </div>
            <div className="p-6 bg-card-gradient min-h-60">
              <h3 className="mb-4 text-h7 text-neutral-100">
                Rates Arbitraging
              </h3>
              <p>
                Maintain optimal yield performance by opening Shorts or Longs
                &ndash; whichever earns you a higher rate &ndash; to bring the
                fixed and variable rates closer together.
              </p>
            </div>
            <div className="p-6 bg-card-gradient min-h-60">
              <h3 className="mb-4 text-h7 text-neutral-100">
                Volatility Harvesting
              </h3>
              <p>
                Provide liquidity to a market and seek a profit from
                volatility-driven trading fees, while still earning the yield
                source rate on idle capital.
              </p>
            </div>
          </div>
        </div>

        <p className="text-neutral-400 text-body-sm mt-20 max-md:mt-10">
          * This above content is general in nature and for informational
          purposes only. It is not legal, tax, investment, financial or other
          advice, nor is it a comprehensive or complete statement of the matters
          discussed. It is not a recommendation of an investment strategy and
          should not be used as the basis of any investment decision. All
          transactions and investments involve risk, and past performance does
          not guarantee future results. Certain complex strategies carry
          additional risk and are not appropriate for all users. As with any
          DeFi or crypto position, you may incur losses. You alone are
          responsible for evaluating the benefits and risks associated with any
          decision to use Hyperdrive.
        </p>
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
