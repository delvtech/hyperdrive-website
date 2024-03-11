import { useRef } from "react";
import overviewLine from "src/assets/accents/overview-line.svg";
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
import { GradientBorderButton } from "src/components/GradientButton";
import { Header } from "src/components/Header";
import { ScrollCaptorCarousel } from "src/components/ScrollCaptorCarousel";
import { HeroPill } from "src/components/home/HeroPill";
import { PositionTypesCarousel } from "src/components/home/PositionTypesCarousel";
import { useScrollPosition } from "src/hooks/useScrollPosition";

export function Home() {
  const scrollPosition = useScrollPosition();
  const heroHeightRef = useRef(Infinity);

  const showSectionMenu = scrollPosition > heroHeightRef.current - 100;

  return (
    <>
      <Header
        theme="dark"
        collapsibleMenu={showSectionMenu}
        showSectionMenu={showSectionMenu}
        sections={[
          { id: "overview", title: "Overview" },
          { id: "security", title: "Security" },
          { id: "protocol", title: "Protocol" },
          { id: "strategies", title: "Strategies" },
          // { id: "partners", title: "Partners" },
        ]}
      />

      {/* Hero */}
      <div
        className="h-[calc(100vh_-_80px)] flex gap-32 items-center justify-center relative px-[5vw]"
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
              href="https://hyperdrive.delv.tech/app"
              className="button-primary px-10"
            >
              Launch App
            </GradientBorderButton>
            <GradientBorderButton
              href="https://hyperdrive.delv.tech/docs"
              className="px-10"
            >
              Learn more
            </GradientBorderButton>
          </div>
        </div>

        {/* Hero right */}
        <div className="relative min-w-[775px] h-[325px]">
          <img
            className="h-full absolute right-0 top-0 max-w-none"
            src={heroIllustration}
          />
          <HeroPill className="absolute left-0 top-0">
            Earn Fixed Rates
          </HeroPill>
          <HeroPill className="absolute left-[144px] bottom-0">
            Multiply exposure to variable rates
          </HeroPill>
          <HeroPill className="absolute left-[360px] top-[37%] -translate-y-1/2">
            Set it and forget it LP
          </HeroPill>
        </div>
      </div>

      {/* Overview */}
      <div
        id="overview"
        className="px-24 pt-20 pb-32 grid grid-cols-2 relative"
      >
        <img
          src={overviewLine}
          className="absolute right-0 top-1/2 -translate-y-1/3"
        />

        {/* Overview left */}
        <div className="max-w-md mx-auto h-2/3 flex flex-col justify-center">
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
        <div className="flex gap-3">
          <div className="space-y-3 flex-1">
            <div className="space-y-4 bg-card-gradient p-6 min-h-96">
              <img src={fixedRatesIcon} />
              <h3 className="text-h7 leading-normal text-neutral-100 font-chakra">
                Fixed rates
              </h3>
              <p className="text-neutral-400">
                Get simple, predictable fixed rates on ETH, stETH, DAI, or sDAI
                with principal-protected returns.
              </p>
            </div>
            <div className="space-y-4 bg-card-gradient p-6 min-h-96">
              <img src={adjustmentsIcon} />
              <h3 className="text-h7 leading-normal text-neutral-100 font-chakra">
                Fixed Rate Borrow
              </h3>
              <p className="text-neutral-400">
                Turn a variable rate borrow position into a fixed rate borrow
                position on Hyperdrive.
              </p>
              <p className="inline-flex px-3 h-8 rounded bg-[#8A92A3]/20 font-mono text-body-sm text-neutral-100/70 uppercase items-center justify-center">
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
              <p className="text-neutral-400">
                Get multiplied variable rate exposure and speculate on rate
                movements by opening a Short, or LP to earn passive variable
                yield on single asset deposits without being exposed to
                impermanent loss.s.
              </p>
            </div>
            <div className="space-y-4 bg-card-gradient p-6 min-h-96">
              <img src={curveIcon} />
              <h3 className="text-h7 leading-normal text-neutral-100 font-chakra">
                Longs as Collateral
              </h3>
              <p className="text-neutral-400">
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
          <GradientBorderButton href="#lp-docs-url" className="button-primary">
            Learn more
          </GradientBorderButton>
        </div>
      </div>

      {/* Security */}
      <ScrollCaptorCarousel
        id="security"
        className="px-24 py-16 min-h-screen bg-gradient-to-b from-neutral-900 to-black items-center flex flex-col"
        slideHeight={440}
        slideGap={56}
        heading={
          <h2 className="font-chakra text-h5 font-medium gradient-text text-center grow-[.3] flex items-center mb-8">
            Security
          </h2>
        }
        slides={[
          <div className="px-14 pr-24 py-9 bg-card-gradient rounded-sm relative h-[440px] max-w-5xl mx-auto flex flex-col">
            <p className="font-mono text-caption-lg">01</p>
            <div className="flex gap-24 items-center flex-1">
              <div>
                <h3 className="text-h4 font-chakra text-white mb-4">Audits</h3>
                <p className="text-neutral-400 mb-14">
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
              <img src={auditsIllustration} />
            </div>
          </div>,

          <div className="px-14 pr-24 py-9 bg-card-gradient rounded-sm relative h-[440px] max-w-5xl mx-auto flex flex-col">
            <p className="font-mono text-caption-lg">02</p>
            <div className="flex gap-24 items-center flex-1">
              <div>
                <h3 className="text-h4 font-chakra text-white mb-4">
                  Formal Verification
                </h3>
                <p className="text-neutral-400 mb-14">
                  Certora, an industry leader in formal verification,
                  implemented a mathematical model that verified many key
                  invariants in Hyperdrive's AMM.
                </p>
                <div className="flex items-center gap-6">
                  <a href="https://www.certora.com/">
                    <img src={certoraLogo} alt="Certora" />
                  </a>
                </div>
              </div>
              <img src={formalVerificationIllustration} />
            </div>
          </div>,

          <div className="px-14 pr-24 py-9 bg-card-gradient rounded-sm relative h-[440px] max-w-5xl mx-auto flex flex-col">
            <p className="font-mono text-caption-lg">03</p>
            <div className="flex gap-24 items-center flex-1">
              <div>
                <h3 className="text-h4 font-chakra text-white mb-4">
                  Fuzz Testing
                </h3>
                <p className="text-neutral-400 mb-14">
                  Hyperdrive is tested using a robust fuzzing system that
                  combines traditional Solidity input sweeps with Python-based
                  smart agents.
                </p>
              </div>
              <img src={fuzzTestingIllustration} />
            </div>
          </div>,

          <div className="px-14 pr-24 py-9 bg-card-gradient rounded-sm relative h-[440px] max-w-5xl mx-auto flex flex-col">
            <p className="font-mono text-caption-lg">04</p>
            <div className="flex gap-24 items-center flex-1">
              <div>
                <h3 className="text-h4 font-chakra text-white mb-4">
                  Active Threat Monitoring
                </h3>
                <p className="text-neutral-400 mb-14">
                  Hyperdrive's smart contracts are actively monitored to get
                  ahead of potential threats and leverage collective security
                  intelligence.
                </p>
              </div>
              <img src={threatMonitoringIllustration} />
            </div>
          </div>,
        ]}
      />

      {/* Protocol */}
      <div id="protocol" className="px-24 pt-28 flex gap-20 overflow-x-hidden">
        <h2 className="font-chakra text-h5 gradient-text flex-1 basic-1/3">
          Core Protocol Fundamentals
        </h2>
        <PositionTypesCarousel className="basis-2/3" />
      </div>

      {/* Strategies */}
      <div id="strategies" className="px-28 pt-48 pb-20 relative">
        {/* <img src={strategiesLine} className="absolute right-0 top-36" /> */}

        <div className="flex justify-between gap-40">
          <div>
            <h2 className="font-chakra gradient-text text-h5 mb-14">
              Trading Strategies*
            </h2>
            <p className="mb-6">Learn more about the trading strategies.</p>
            <GradientBorderButton className="button-primary" href="#">
              Learn more in GitBook
            </GradientBorderButton>
          </div>
          <div className="grid grid-cols-2 gap-9 basis-2/3 text-neutral-400">
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
                Maintain optimal yield performance by opening shorts or longs
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

        <p className="text-caption text-neutral-400 mt-20">
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
