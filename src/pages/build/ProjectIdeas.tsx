import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NextButton } from "src/components/buttons/NextButton";
import { PrevButton } from "src/components/buttons/PrevButton";
import { DiscordLogoIcon } from "src/components/icons/DiscordLogoIcon";
import { GitHubLogoIcon } from "src/components/icons/GitHubLogoIcon";

export function ProjectIdeas() {
  const [activeSlide, setActiveSlide] = useState(0);

  function handlePrevSlide() {
    setActiveSlide((prev) => prev - 1);
  }

  function handleNextSlide() {
    setActiveSlide((prev) => prev + 1);
  }

  return (
    <div className="mx-auto max-w-[1440px] pt-20 pb-56 max-sm:pt-0 max-sm:pb-16 max-lg:pt-10 max-lg:pb-32">
      <div className="mb-6 flex items-center justify-center gap-20 px-[4vw] max-lg:flex-col max-lg:gap-10 max-lg:px-0">
        <div className="basis-1/3 max-sm:w-auto max-lg:mx-[5vw] max-lg:w-2/3">
          <h2 className="gradient-text mb-8 font-chakra font-medium text-h6">
            Build the Future of on-chain Finance with us
          </h2>
          <div className="flex gap-6 font-medium font-mono text-body-sm text-neutral-100 uppercase max-sm:gap-2">
            <a
              className="flex items-center gap-3 px-2 underline transition-all hover:text-aquamarine"
              href="https://delv.tech/discord"
            >
              <DiscordLogoIcon className="size-6" />
              Discord
            </a>
            <a
              className="flex items-center gap-3 px-2 underline transition-all hover:text-aquamarine"
              href="https://github.com/delvtech/hyperdrive"
            >
              <GitHubLogoIcon className="size-6" />
              Github
            </a>
            <Link
              className="flex items-center gap-3 px-2 underline transition-all hover:text-aquamarine"
              to="/whitepaper"
            >
              <img src="/icons/file-icon.svg" />
              Whitepaper
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-[100%] basis-2/3 overflow-x-hidden max-lg:basis-auto">
          <div className="relative flex w-full flex-nowrap gap-6 max-lg:ml-[16.66%]">
            {/* Fixed rate exposure */}
            <div
              className={classNames(
                "card w-2/3 shrink-0 p-6 pb-8 transition-all duration-700",
              )}
              style={{
                marginLeft: `calc(${activeSlide * -66.66}% - ${activeSlide * 24}px)`,
              }}
            >
              <h3 className="mb-2 text-h7 text-neutral-100">
                Fixed rate exposure
              </h3>
              <p>Create fixed rate markets for your favorite yield sources.</p>
            </div>

            {/* Trading bots */}
            <div className="card w-2/3 shrink-0 p-6 pb-8 transition-all duration-700">
              <h3 className="mb-2 text-h7 text-neutral-100">Trading bots</h3>
              <p>
                Implement bots to automate your own trading strategies on
                Hyperdrive's yield markets.
              </p>
            </div>

            {/* Novel DeFi products */}
            <div className="card w-2/3 shrink-0 p-6 pb-8 transition-all duration-700">
              <h3 className="mb-2 text-h7 text-neutral-100">
                Novel DeFi products
              </h3>
              <p>
                Build innovative products to fill gaps in the current DeFi
                ecosystem: fixed rate borrow positions, multiplied fixed rate
                exposure, fixed-rate assets as collateral, or any novel
                primitive that expands the possibilities of on-chain finance.
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />
          </div>
        </div>
      </div>

      {/* Carousel Nav */}
      <div className="flex justify-center gap-2">
        <PrevButton onClick={handlePrevSlide} disabled={activeSlide === 0} />
        <NextButton onClick={handleNextSlide} disabled={activeSlide === 2} />
      </div>
    </div>
  );
}
