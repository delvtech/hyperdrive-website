import classNames from "classnames";
import { useState } from "react";
import { default as fileIcon } from "src/assets/icons/file-icon.svg";
import { default as discordLogoIcon } from "src/assets/logos/discord-logo-icon-light.svg";
import { default as githubLogoIcon } from "src/assets/logos/github-logo-icon-light.svg";
import { NextButton } from "src/components/buttons/NextButton";
import { PrevButton } from "src/components/buttons/PrevButton";

export function ProjectIdeas() {
  const [activeSlide, setActiveSlide] = useState(0);

  function handlePrevSlide() {
    setActiveSlide((prev) => prev - 1);
  }

  function handleNextSlide() {
    setActiveSlide((prev) => prev + 1);
  }

  return (
    <div className="pt-20 pb-56 max-w-[1440px] mx-auto max-lg:pt-10 max-lg:pb-32 max-sm:pt-0 max-sm:pb-16">
      <div className="flex items-center gap-20 px-[4vw] justify-center mb-6 max-lg:flex-col max-lg:gap-10 max-lg:px-0">
        <div className="basis-1/3 max-lg:mx-[5vw] max-lg:w-2/3 max-sm:w-auto">
          <h2 className="gradient-text font-chakra text-h6 font-medium mb-8">
            Build the Future of on-chain Finance with us
          </h2>
          <div className="flex gap-6 text-neutral-100 font-mono text-body-sm uppercase font-medium max-sm:gap-2">
            <a
              className="flex items-center gap-3 px-2 underline hover:text-aquamarine transition-all"
              href="https://delv.tech/discord"
            >
              <img src={discordLogoIcon} />
              Discord
            </a>
            <a
              className="flex items-center gap-3 px-2 underline hover:text-aquamarine transition-all"
              href="https://github.com/delvtech/hyperdrive"
            >
              <img src={githubLogoIcon} />
              Github
            </a>
            <a
              className="flex items-center gap-3 px-2 underline hover:text-aquamarine transition-all"
              href="#"
            >
              <img src={fileIcon} />
              Whitepaper
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-x-hidden basis-2/3 max-lg:basis-auto max-w-[100%]">
          <div className="w-full flex gap-6 flex-nowrap relative max-lg:ml-[16.66%]">
            {/* Fixed rate exposure */}
            <div
              className={classNames(
                "p-6 pb-8 transition-all duration-700 w-2/3 shrink-0 bg-card-gradient",
              )}
              style={{
                marginLeft: `calc(${activeSlide * -66.66}% - ${activeSlide * 24}px)`,
              }}
            >
              <h3 className="text-neutral-100 text-h7 mb-2">Fixed rate exposure</h3>
              <p>Create fixed rate markets for your favorite yield sources.</p>
            </div>

            {/* Trading bots */}
            <div className="p-6 pb-8 transition-all duration-700 w-2/3 shrink-0 bg-card-gradient">
              <h3 className="text-neutral-100 text-h7 mb-2">Trading bots</h3>
              <p>
                Implement bots to automate your own trading strategies on
                Hyperdrive's yield markets.
              </p>
            </div>

            {/* Novel DeFi products */}
            <div className="p-6 pb-8 transition-all duration-700 w-2/3 shrink-0 bg-card-gradient">
              <h3 className="text-neutral-100 text-h7 mb-2">Novel DeFi products</h3>
              <p>
                Build innovative products to fill gaps in the current DeFi
                ecosystem: fixed rate borrow positions, multiplied fixed rate
                exposure, fixed-rate assets as collateral, or any novel
                primitive that expands the possibilities of on-chain finance.
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-neutral-900"></div>
          </div>
        </div>
      </div>

      {/* Carousel Nav */}
      <div className="flex gap-2 justify-center">
        <PrevButton onClick={handlePrevSlide} disabled={activeSlide === 0} />
        <NextButton onClick={handleNextSlide} disabled={activeSlide === 2} />
      </div>
    </div>
  );
}
