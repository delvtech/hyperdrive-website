import classNames from "classnames";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { GradientBorderButton } from "src/components/buttons/GradientButton";
import { DiscordLogoIcon } from "src/components/icons/DiscordLogoIcon";
import { GitHubLogoIcon } from "src/components/icons/GitHubLogoIcon";
import { CodeTabs } from "src/pages/build/CodeTabs";
import { ProjectIdeas } from "src/pages/build/ProjectIdeas";

export function Build() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="px-[4vw] min-h-screen flex items-center justify-center relative">
        <img
          src="/accents/build-hero-line.svg"
          className="absolute top-1/2 right-0"
        />

        <div className="max-w-4xl relative">
          <div className="text-center px-40 pb-14 text-white max-lg:px-10 max-md:px-0">
            <h1 className="text-h3 gradient-text font-chakra font-medium mb-6 max-sm:text-h5">
              Build on Hyperdrive
            </h1>
            <p className="max-w-xl mx-auto">
              Bring new yield-based products to life with Hyperdrive's extensive
              developer tooling.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            <GradientBorderButton href="https://delv.tech/discord">
              <DiscordLogoIcon className="w-6 h-6" />
              Discord
            </GradientBorderButton>
            <GradientBorderButton href="https://github.com/delvtech/hyperdrive">
              <GitHubLogoIcon className="w-6 h-6" />
              GitHub
            </GradientBorderButton>
            <GradientBorderButton href="https://github.com/delvtech/hyperdrive/blob/main/docs/Hyperdrive_Whitepaper.pdf">
              <img src="/icons/file-icon.svg" className="w-6 h-6" />
              Whitepaper
            </GradientBorderButton>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="pt-10 pb-20 px-[4vw] max-sm:pb-10">
        <div className="max-w-xl mx-auto text-center mb-20 max-lg:text-left">
          <h2 className="text-h5 gradient-text font-chakra font-medium mb-6">
            Reimagine DeFi Yield
          </h2>
          <p>
            Create exciting new products based on any existing yield source and
            build using the tools you know.
          </p>
        </div>
        <div
          className={classNames(
            "grid grid-cols-4 items-stretch gap-4",
            "max-lg:grid-cols-2",
            "max-sm:grid-cols-1",
          )}
        >
          {/* Smart contracts tile */}
          <div className="card p-6 pb-12 translate-y-12 max-lg:transform-none">
            <img src="/logos/solidity-logo-tile.png" className="mb-8" />
            <h3 className="text-h7 text-neutral-100 mb-4">
              Hyperdrive Smart Contracts
            </h3>
            <p>Solidity implementation of Hyperdrive.</p>
          </div>

          {/* Typescript SDK tile */}
          <div className="p-6 pb-12 card max-lg:translate-y-12 max-sm:transform-none">
            <img src="/logos/typescript-logo-tile.png" className="mb-8" />
            <h3 className="text-h7 text-neutral-100 mb-4">TypeScript SDK</h3>
            <p>
              TypeScript library for interacting with the Hyperdrive AMM
              Protocol.
            </p>
          </div>

          {/* Agent0 tile */}
          <div className="p-6 pb-12 card translate-y-12 max-lg:transform-none">
            <img src="/logos/python-logo-tile.png" className="mb-8" />
            <h3 className="text-h7 text-neutral-100 mb-4">
              Agent0 Bots Framework (Python)
            </h3>
            <p>
              Python-based library for testing, analyzing, and interacting with
              Hyperdrive's smart contracts, and to create smart trading bots.
            </p>
          </div>

          {/* Rust SDK tile */}
          <div className="p-6 pb-12 card max-lg:translate-y-12 max-sm:transform-none">
            <img src="/logos/rust-logo-tile.svg" className="mb-8" />
            <h3 className="text-h7 text-neutral-100 mb-4">Rust SDK</h3>
            <p>
              Rust implementation of Hyperdrive math, which mirrors the Solidity
              smart contracts.
            </p>
          </div>
        </div>
      </div>

      {/* Diagram */}
      <div
        className={classNames(
          "flex gap-16 items-center justify-center px-[4vw] pt-40",
          "max-xl:gap-12",
          "max-lg:flex-col max-lg:pt-20",
        )}
      >
        <div className="max-w-lg max-xl:max-w-md">
          <h2
            className={classNames(
              "text-h5 gradient-text font-medium font-chakra mb-8",
              "max-xl:text-h6",
              "max-lg:mb-0",
            )}
          >
            Bring yield-based products to life with Hyperdrive’s extensive
            developer tooling:
          </h2>
          <ul className="list-disc pl-4 text-neutral-100 space-y-4 marker:text-neutral-500 max-lg:hidden">
            <li>
              <a
                className="hover:text-aquamarine transition-all"
                href="https://github.com/delvtech/hyperdrive"
              >
                Hyperdrive Core
              </a>
            </li>
            <li>
              <a
                className="hover:text-aquamarine transition-all"
                href="https://github.com/delvtech/hyperdrive-rs"
              >
                Rust SDK
              </a>
            </li>
            <li>
              <a
                className="hover:text-aquamarine transition-all"
                href="https://js.hyperdrive.box"
              >
                TypeScript SDK
              </a>
            </li>
            <li>
              <a
                className="hover:text-aquamarine transition-all"
                href="https://github.com/delvtech/hyperdrive-monorepo/tree/main/apps/hyperdrive-trading"
              >
                Web UI (frontend)
              </a>
            </li>
            <li>
              <a
                className="hover:text-aquamarine transition-all"
                href="https://github.com/delvtech/agent0"
              >
                agent0 (bots)
              </a>
            </li>
          </ul>
        </div>
        <img
          className="max-w-[50%] max-lg:max-w-full"
          src="/stack-diagram.svg"
        />
      </div>

      {/* Code Tabs */}
      <div className="px-[4vw] py-36 max-lg:py-28 max-sm:py-20">
        <h2 className="gradient-text text-h6 text-center mb-14">
          Start Building
        </h2>
        <CodeTabs />
      </div>

      {/* Build the future */}
      <ProjectIdeas />

      <Footer />
    </>
  );
}
