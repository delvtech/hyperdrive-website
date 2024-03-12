import classNames from "classnames";
import { useState } from "react";
import longDiagram from "src/assets/diagrams/long-diagram.svg";
import lpDiagram from "src/assets/diagrams/lp-diagram.svg";
import shortDiagram from "src/assets/diagrams/short-diagram.svg";
import { NextButton } from "src/components/buttons/NextButton";
import { PrevButton } from "src/components/buttons/PrevButton";

export function PositionTypesCarousel({ className }: { className?: string }) {
  const [activeSlide, setActiveSlide] = useState(0);

  function handlePrevSlide() {
    setActiveSlide((prev) => prev - 1);
  }

  function handleNextSlide() {
    setActiveSlide((prev) => prev + 1);
  }

  return (
    <div className={className}>
      {/* Carousel */}
      <div
        className={classNames(
          "w-full flex flex-nowrap mb-6",
          "max-md:flex-wrap max-md:gap-6",
        )}
      >
        {/* Longs */}
        <div
          className={classNames(
            "transition-all duration-700 blur-sm opacity-50 w-full shrink-0 mr-6",
            {
              "!opacity-100 !blur-none": activeSlide === 0,
              "scale-50 !-mr-[100%] !opacity-0": activeSlide > 0,
            },
            "max-md:blur-none max-md:!opacity-100 max-md:!scale-100 max-md:!mr-0",
          )}
        >
          <div className="flex gap-6 p-6 bg-card-gradient h-full items-start max-sm:flex-col-reverse">
            <img
              className="max-[1440px]:w-[32vw] max-lg:w-[38vw] max-sm:w-auto"
              src={longDiagram}
            />
            <div className="space-y-6">
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
                are structured to profit if held to maturity, although closing
                the position early could also result in a profit (or loss)
                depending on the market rate.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden max-md:flex gap-6 text-caption-lg">
          <p>
            Some concepts, including trading fees, have been abstracted away
            from the diagram for simplicity.
          </p>

          {/* <GradientBorderButton href="#docs">Learn More</GradientBorderButton> */}
        </div>

        {/* Shorts */}
        <div
          className={classNames(
            "transition-all duration-700 blur-sm opacity-50 w-full shrink-0 mr-6",
            {
              "!opacity-100 !blur-none": activeSlide === 1,
              "scale-50 !-mr-[100%] !opacity-0": activeSlide > 1,
            },
            "max-md:blur-none max-md:!opacity-100 max-md:!scale-100 max-md:!mr-0",
          )}
        >
          <div className="flex gap-6 p-6 bg-card-gradient h-full items-start max-sm:flex-col-reverse">
            <img
              className="max-[1440px]:w-[32vw] max-lg:w-[38vw] max-sm:w-auto"
              src={shortDiagram}
            />
            <div className="space-y-6">
              <h3 className="font-semibold text-body-lg text-neutral-100">
                Short Position
              </h3>
              <p>
                Shorts earn a multiplied variable rate, which may result in a
                higher implied yield calculated as{" "}
                <code>[(1 / fixed rate) * variable rate]</code>. Shorts pay the
                market fixed rate upfront as margin and earn variable yield on
                the full capital the margin is backing.
              </p>
              <p>
                When a user opens a Short, it impacts the market by increasing
                the fixed rate. Shorts can earn outsized profits but can incur
                losses (limited to the margin amount deposited) if the variable
                rate underperforms the fixed rate.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden max-md:flex gap-6 text-caption-lg">
          <p>
            Some concepts, including trading fees, have been abstracted away
            from the diagram for simplicity.
          </p>

          {/* <GradientBorderButton href="#docs">Learn More</GradientBorderButton> */}
        </div>

        {/* LP */}
        <div
          className={classNames(
            "transition-all duration-700 blur-sm opacity-50 w-full shrink-0",
            {
              "!opacity-100 !blur-none": activeSlide === 2,
              "scale-50 -mr-[100%] !opacity-0": activeSlide > 2,
            },
            "max-md:blur-none max-md:!opacity-100 max-md:!scale-100 max-md:!mr-0",
          )}
        >
          <div className="flex gap-6 p-6 bg-card-gradient h-full items-start max-sm:flex-col-reverse">
            <img
              className="max-[1440px]:w-[32vw] max-lg:w-[38vw] max-sm:w-auto"
              src={lpDiagram}
            />
            <div className="space-y-6">
              <h3 className="font-semibold text-body-lg text-neutral-100">
                Liquidity Provider (LP)
              </h3>
              <p>
                LPs deposit single-sided liquidity into Hyperdrive. LP funds are
                collectively utilized to take the other side of traders’
                respective Longs and Shorts resulting in profit/loss.
              </p>
              <p>
                Long positions generate more variable yield for LPs, and
                conversely, Short positions take variable yield from LPs.
              </p>
              <p>
                LPs earn fees from all trading activity in the pool. Unutilized
                capital also earns the underlying yield source variable rate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden max-md:flex gap-6 text-caption-lg">
        <p>
          Some concepts have been abstracted away from the diagram for
          simplicity; automated LP countertrades are not shown.
        </p>

        {/* <GradientBorderButton href="#docs">Learn More</GradientBorderButton> */}
      </div>

      <div className="flex items-center gap-4 justify-between max-md:hidden">
        {/* Carousel nav */}
        <div className="flex gap-2">
          <PrevButton onClick={handlePrevSlide} disabled={activeSlide === 0} />
          <NextButton onClick={handleNextSlide} disabled={activeSlide === 2} />
        </div>
        <p
          className={classNames("text-caption-lg", {
            hidden: activeSlide === 2,
          })}
        >
          Some concepts, including trading fees, have been abstracted away from
          the diagram for simplicity.
        </p>
        <p
          className={classNames("text-caption-lg", {
            hidden: activeSlide !== 2,
          })}
        >
          Some concepts have been abstracted away from the diagram for
          simplicity; automated LP countertrades are not shown.
        </p>
        {/* <GradientBorderButton href="#docs">Learn More</GradientBorderButton> */}
      </div>
    </div>
  );
}
