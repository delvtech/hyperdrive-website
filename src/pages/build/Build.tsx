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
      <div
        className={classNames(
          "relative flex min-h-[min(100vh,900px)] items-center justify-center px-[4vw] py-32",
          "max-lg:py-20",
        )}
      >
        <img
          src="/accents/build-hero-line.svg"
          className="absolute top-1/2 right-0"
        />

        <div className="relative max-w-4xl">
          <div className="px-40 pb-14 text-center text-white max-md:px-0 max-lg:px-10">
            <h1 className="gradient-text mb-6 font-chakra font-medium text-h3 max-sm:text-h5">
              Build on Hyperdrive
            </h1>
            <p className="mx-auto max-w-xl">
              Bring new yield-based products to life with Hyperdrive's extensive
              developer tooling.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            <GradientBorderButton href="/docs/hyperdrive-for-developers">
              <img src="/icons/file-icon.svg" className="size-6" />
              Docs
            </GradientBorderButton>
            <GradientBorderButton href="https://github.com/delvtech/hyperdrive">
              <GitHubLogoIcon className="h-6 w-6" />
              GitHub
            </GradientBorderButton>
            <GradientBorderButton href="https://delv.tech/discord">
              <DiscordLogoIcon className="h-6 w-6" />
              Discord
            </GradientBorderButton>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="px-[4vw] pt-10 pb-20 max-sm:pb-10">
        <div className="mx-auto mb-20 max-w-xl text-center max-lg:text-left">
          <h2 className="gradient-text mb-6 font-chakra font-medium text-h5">
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
          <div className="card translate-y-12 p-6 pb-12 max-lg:transform-none">
            <img src="/logos/solidity-logo-tile.png" className="mb-8" />
            <h3 className="mb-4 text-h7 text-neutral-100">
              Hyperdrive Smart Contracts
            </h3>
            <p>Solidity implementation of Hyperdrive.</p>
          </div>

          {/* Typescript SDK tile */}
          <div className="card p-6 pb-12 max-sm:transform-none max-lg:translate-y-12">
            <img src="/logos/typescript-logo-tile.png" className="mb-8" />
            <h3 className="mb-4 text-h7 text-neutral-100">TypeScript SDK</h3>
            <p>
              TypeScript library for interacting with the Hyperdrive AMM
              Protocol.
            </p>
          </div>

          {/* Agent0 tile */}
          <div className="card translate-y-12 p-6 pb-12 max-lg:transform-none">
            <img src="/logos/python-logo-tile.png" className="mb-8" />
            <h3 className="mb-4 text-h7 text-neutral-100">
              Agent0 Bots Framework (Python)
            </h3>
            <p>
              Python-based library for testing, analyzing, and interacting with
              Hyperdrive's smart contracts, and to create smart trading bots.
            </p>
          </div>

          {/* Rust SDK tile */}
          <div className="card p-6 pb-12 max-sm:transform-none max-lg:translate-y-12">
            <img src="/logos/rust-logo-tile.svg" className="mb-8" />
            <h3 className="mb-4 text-h7 text-neutral-100">Rust SDK</h3>
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
          "flex items-center justify-center gap-16 px-[4vw] pt-40",
          "max-xl:gap-12",
          "max-lg:flex-col max-lg:pt-20",
        )}
      >
        <div className="max-w-lg max-xl:max-w-md">
          <h2
            className={classNames(
              "gradient-text mb-8 font-chakra font-medium text-h5",
              "max-xl:text-h6",
              "max-lg:mb-0",
            )}
          >
            Bring yield-based products to life with Hyperdrive’s extensive
            developer tooling:
          </h2>
          <ul className="list-disc space-y-4 pl-4 text-neutral-100 marker:text-neutral-500 max-lg:hidden">
            <li>
              <a
                className="transition-all hover:text-aquamarine"
                href="https://github.com/delvtech/hyperdrive"
              >
                Hyperdrive Core
              </a>
            </li>
            <li>
              <a
                className="transition-all hover:text-aquamarine"
                href="https://github.com/delvtech/hyperdrive-rs"
              >
                Rust SDK
              </a>
            </li>
            <li>
              <a
                className="transition-all hover:text-aquamarine"
                href="https://js.hyperdrive.box"
              >
                TypeScript SDK
              </a>
            </li>
            <li>
              <a
                className="transition-all hover:text-aquamarine"
                href="https://github.com/delvtech/hyperdrive-monorepo/tree/main/apps/hyperdrive-trading"
              >
                Web UI (frontend)
              </a>
            </li>
            <li>
              <a
                className="transition-all hover:text-aquamarine"
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
      <div className="px-[4vw] py-36 max-sm:py-20 max-lg:py-28">
        <h2 className="gradient-text mb-14 text-center text-h6">
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
