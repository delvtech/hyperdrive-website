import classNames from "classnames";
import { useState } from "react";
import longDiagram from "src/assets/diagrams/long-diagram.svg";
import lpDiagram from "src/assets/diagrams/lp-diagram.svg";
import shortDiagram from "src/assets/diagrams/short-diagram.svg";
import leftArrowIcon from "src/assets/icons/left-arrow-icon.svg";
import rightArrowIcon from "src/assets/icons/right-arrow-icon.svg";
import { GradientBorderButton } from "../GradientButton";

export function ProtocolFundamentals() {
  const [activeCoreFundamentalsSlide, setActiveCoreFundamentalsSlide] =
    useState(0);

  function handlePrevCoreFundamentalsSlide() {
    setActiveCoreFundamentalsSlide((prev) => prev - 1);
  }

  function handleNextCoreFundamentalsSlide() {
    setActiveCoreFundamentalsSlide((prev) => prev + 1);
  }

  return (
    <div id="protocol" className="px-24 pt-28 flex gap-20">
      <h2 className="font-chakra text-h5 gradient-text flex-1 basic-1/3">
        Core Protocol Fundamentals
      </h2>

      {/* Protocol right */}
      <div className="basis-2/3">
        {/* Carousel */}
        <div className="w-full white flex flex-nowrap mb-6 overflow-x-hidden">
          {/* Longs */}
          <div
            className={classNames(
              "transition-all duration-700 blur-sm opacity-50 w-full shrink-0",
              {
                "!opacity-100 !blur-none": activeCoreFundamentalsSlide === 0,
                "scale-50 -mr-[100%] !opacity-0":
                  activeCoreFundamentalsSlide > 0,
              },
            )}
          >
            <div className="flex gap-6 p-6 mr-6 bg-card-gradient">
              <img src={longDiagram} />
              <div className="space-y-6 text-neutral-400">
                <h3 className="font-semibold text-body-lg text-neutral-100">
                  Long Position
                </h3>
                <p>
                  Long traders earn a fixed rate. They deposit assets today and
                  get an agreed-upon future value, calculated by Hyperdrive's
                  novel pricing model.
                </p>
                <p>
                  Opening a Long position lowers the market's fixed rate. Longs
                  always profit if held to maturity.
                </p>
              </div>
            </div>
          </div>

          {/* Shorts */}
          <div
            className={classNames(
              "transition-all duration-700 blur-sm opacity-50 w-full shrink-0",
              {
                "!opacity-100 !blur-none": activeCoreFundamentalsSlide === 1,
                "scale-50 -mr-[100%] !opacity-0":
                  activeCoreFundamentalsSlide > 1,
              },
            )}
          >
            <div className="flex gap-6 p-6 mr-6 bg-card-gradient">
              <img src={shortDiagram} className="w" />
              <div className="space-y-6 text-neutral-400">
                <h3 className="font-semibold text-body-lg text-neutral-100">
                  Short Position
                </h3>
                <p>
                  Shorts earn a multiplied variable rate, which may result in a
                  higher implied yield calculated as{" "}
                  <code>[(1 / fixed rate) * variable rate]</code>. Shorts pay
                  the market fixed rate upfront as margin and earn variable
                  yield on the full capital the margin is backing.
                </p>
                <p>
                  When a user opens a Short, it impacts the market by increasing
                  the fixed rate. Shorts can earn outsized profits but can incur
                  losses (limited to the margin amount deposited) if the
                  variable rate underperforms the fixed rate.
                </p>
              </div>
            </div>
          </div>

          {/* LP */}
          <div
            className={classNames(
              "transition-all duration-700 blur-sm opacity-50 w-full shrink-0",
              {
                "!opacity-100 !blur-none": activeCoreFundamentalsSlide === 2,
                "scale-50 -mr-[100%] !opacity-0":
                  activeCoreFundamentalsSlide > 2,
              },
            )}
          >
            <div className="flex gap-6 p-6 mr-6 bg-card-gradient">
              <img src={lpDiagram} />
              <div className="space-y-6 text-neutral-400">
                <h3 className="font-semibold text-body-lg text-neutral-100">
                  LP
                </h3>
                <p>
                  LPs deposit single-sided liquidity into Hyperdrive. LP funds
                  are collectively utilized to take the other side of traders'
                  respective Longs and Shorts resulting in profit/loss.
                </p>
                <p>
                  Long positions generate more variable yield for LPs, and
                  conversely, Short positions take variable yield from LPs.
                </p>
                <p>
                  LPs earn fees from all trading activity in the pool.
                  Unutilized capital also earns the underlying yield source
                  variable rate.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-between mr-6">
          {/* Carousel nav */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevCoreFundamentalsSlide}
              disabled={activeCoreFundamentalsSlide === 0}
              className={classNames(
                "w-12 h-12 rounded-full backdrop-blur-md border border-neutral-600 hover:border-neutral-100 flex items-center justify-center transition-all",
                {
                  "opacity-50 !border-neutral-600":
                    activeCoreFundamentalsSlide === 0,
                },
              )}
            >
              <img src={leftArrowIcon} />
            </button>
            <button
              onClick={handleNextCoreFundamentalsSlide}
              disabled={activeCoreFundamentalsSlide === 2}
              className={classNames(
                "w-12 h-12 rounded-full border border-neutral-600 hover:border-neutral-100 flex items-center justify-center transition-all",
                {
                  "opacity-50 !border-neutral-600":
                    activeCoreFundamentalsSlide === 2,
                },
              )}
            >
              <img src={rightArrowIcon} />
            </button>
          </div>
          <p className="text-caption">
            Some concepts, including trading fees, have been abstracted away
            from the diagram for simplicity.
          </p>
          <GradientBorderButton href="#docs">Learn More</GradientBorderButton>
        </div>
      </div>
    </div>
  );
}
