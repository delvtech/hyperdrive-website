import BlockAnalyticaLogo from "src/assets/block-analytica-logo.svg";
import ActivityIcon from "src/assets/tabler-icon-activity-heartbeat.svg";
import ArrowRightIcon from "src/assets/tabler-icon-arrow-arrow-right.svg";
import FileCheckIcon from "src/assets/tabler-icon-file-check.svg";
import ListIcon from "src/assets/tabler-icon-staggered-list.svg";
import SawWaveIcon from "src/assets/tabler-icon-wave-saw-tool.svg";
import SquareWaveIcon from "src/assets/tabler-icon-wave-square.svg";
import { Footer } from "src/components/Footer";

export function Home() {
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
      <div className="px-24 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-chakra text-h5 leading-normal mb-6">Security</h2>
        </div>

        <div className="flex flex-wrap gap-14 justify-center">
          <div className="space-y-4 basis-1/4 p-5 pb-6 bg-neutral-200 rounded-sm">
            <img src={SawWaveIcon} />
            <h3 className="text-h7 leading-normal">Audits</h3>
            <p className="text-neutral-600">
              Four audits of the Hyperdrive protocol have been completed by
              industry leaders in blockchain security.
            </p>
          </div>
          <div className="space-y-4 basis-1/4 p-5 pb-6 bg-neutral-200 rounded-sm">
            <img src={ListIcon} />
            <h3 className="text-h7 leading-normal">Formal Verification</h3>
            <p className="text-neutral-600">
              Mathematical certainty of the code base was proven by Certora, an
              industry leader in formal verification.
            </p>
          </div>
          <div className="space-y-4 basis-1/4 p-5 pb-6 bg-neutral-200 rounded-sm">
            <img src={ActivityIcon} />
            <h3 className="text-h7 leading-normal">Fuzz Testing</h3>
            <p className="text-neutral-600">
              Hyperdrive is tested using a robust fuzzing system that combines
              traditional solidity input sweeps with Python-based smart agents.
            </p>
          </div>
          <div className="space-y-4 basis-1/4 p-5 pb-6 bg-neutral-200 rounded-sm">
            <img src={SquareWaveIcon} />
            <h3 className="text-h7 leading-normal">Active Threat Monitoring</h3>
            <p className="text-neutral-600">
              Hyperdrive's smart contracts are actively monitored to get ahead
              of potential threats and leverage collective security
              intelligence.
            </p>
          </div>
          <div className="flex flex-col justify-between basis-1/4 p-5 pb-6 bg-neutral-200 rounded-sm">
            <h3 className="text-h7 leading-normal">Hyperdrive Security</h3>
            <img className="w-8" src={ArrowRightIcon} />
          </div>
        </div>
      </div>

      {/* Core fundamentals */}
      <div className="px-24 py-16 bg-neutral-200">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-chakra text-h5 leading-normal mb-6">
            Core Protocol Fundamentals
          </h2>
        </div>
        <div className="flex gap-6">
          <div className="bg-neutral-100 p-9 rounded-sm space-y-9 flex-1 text-neutral-600">
            {/* Image placeholder */}
            <div className="bg-neutral-200 rounded-sm h-80"></div>
            <p className="mb-6">
              Long traders earn a fixed rate. They deposit assets today and get
              an agreed-upon future value, calculated by Hyperdrive's novel
              pricing model.
            </p>
            <p>
              Opening a Long position lowers the market's fixed rate. Longs
              always profit if held to maturity.
            </p>
          </div>
          <div className="bg-neutral-100 p-9 rounded-sm space-y-9 flex-1 text-neutral-600">
            {/* Image placeholder */}
            <div className="bg-neutral-200 rounded-sm h-80"></div>
            <p className="mb-6">
              Shorts earn multiplied variable rate. They pay a fixed rate, which
              is the market's sentiment about the pool capital's future growth,
              and earn variable yield on the full capital.
            </p>
            <p>
              Opening shorts increases the market's fixed rate. Furthermore,
              short positions take variable yield from LPs.
            </p>

            <p>
              Shorts can have a large upside, but they can also incur losses if
              the variable rate underperforms the fixed rate.
            </p>
          </div>
          <div className="bg-neutral-100 p-9 rounded-sm space-y-9 flex-1 text-neutral-600">
            {/* Image placeholder */}
            <div className="bg-neutral-200 rounded-sm h-80"></div>
            <p className="mb-6">
              LPs deposit single-sided liquidity. LP funds are utilized to take
              the other side of traders' Longs and Shorts.
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
