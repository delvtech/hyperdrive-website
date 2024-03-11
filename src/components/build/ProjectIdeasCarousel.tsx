import classNames from "classnames";
import { useState } from "react";
import { NextButton } from "src/components/buttons/NextButton";
import { PrevButton } from "src/components/buttons/PrevButton";

export function ProjectIdeasCarousel({ className }: { className?: string }) {
  const [activeSlide, setActiveSlide] = useState(0);

  function handlePrevSlide() {
    setActiveSlide((prev) => prev - 1);
  }

  function handleNextSlide() {
    setActiveSlide((prev) => prev + 1);
  }

  return (
    <div className={classNames("overflow-x-hidden", className)}>
      {/* Carousel */}
      <div className="w-full flex flex-nowrap mb-6">
        {/* Fixed rate exposure */}
        <div
          className={classNames(
            "p-6 transition-all duration-700 w-1/2 shrink-0",
          )}
          style={{
            marginLeft: `${activeSlide * -50 + 25}%`,
          }}
        >
          <h3 className="text-neutral-100 text-h7">Fixed rate exposure</h3>
          <p>Create fixed rate markets for your favorite yield sources.</p>
        </div>

        {/* Trading bots */}
        <div className="p-6 transition-all duration-700 w-1/2 shrink-0">
          <h3 className="text-neutral-100 text-h7">Trading bots</h3>
          <p>
            Implement bots to automate your own trading strategies on
            Hyperdrive's yield markets.
          </p>
        </div>

        {/* Novel DeFi products */}
        <div className="p-6 transition-all duration-700 w-1/2 shrink-0">
          <h3 className="text-neutral-100 text-h7">Novel DeFi products</h3>
          <p>
            Build innovative products to fill gaps in the current DeFi
            ecosystem: fixed rate borrow positions, multiplied fixed rate
            exposure, fixed-rate assets as collateral, or any novel primitive
            that expands the possibilities of on-chain finance.
          </p>
        </div>
      </div>

      {/* Carousel Nav */}
      <div className="flex gap-2">
        <PrevButton onClick={handlePrevSlide} disabled={activeSlide === 0} />
        <NextButton onClick={handleNextSlide} disabled={activeSlide === 2} />
      </div>
    </div>
  );
}
