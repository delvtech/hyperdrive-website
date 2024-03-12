import classNames from "classnames";
import heroLine from "src/assets/accents/build-hero-line.svg";
import stackDiagram from "src/assets/diagrams/stack-diagram.svg";
import { default as FileIcon } from "src/assets/icons/file-icon.svg";
import { default as DiscordLogoIcon } from "src/assets/logos/discord-logo-icon-light.svg";
import { default as GithubLogoIcon } from "src/assets/logos/github-logo-icon-light.svg";
import pythonLogoTile from "src/assets/logos/python-logo-tile.png";
import rustLogoTile from "src/assets/logos/rust-logo-tile.svg";
import solidityLogoTile from "src/assets/logos/solidity-logo-tile.png";
import typescriptLogoTile from "src/assets/logos/typescript-logo-tile.png";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { CodeTabs } from "src/components/build/CodeTabs";
import { ProjectIdeas } from "src/components/build/ProjectIdeas";
import { GradientBorderButton } from "src/components/buttons/GradientButton";

export function Build() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="px-[4vw] min-h-screen flex items-center justify-center relative">
        <img src={heroLine} className="absolute top-1/2 right-0" />

        <div className="max-w-4xl relative">
          <div className="text-center px-40 pb-14 text-white max-lg:px-10 max-md:px-0">
            <h1 className="text-h3 gradient-text font-chakra font-medium mb-6 max-sm:text-h5">
              Build on Hyperdrive
            </h1>
            <p className="max-w-xl">
              Bring new yield-based products to life with Hyperdrive's extensive
              developer tooling.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            <GradientBorderButton href="https://delv.tech/discord">
              <img src={DiscordLogoIcon} alt="" className="w-6 h-6" />
              Discord
            </GradientBorderButton>
            <GradientBorderButton href="https://github.com/delvtech/hyperdrive">
              <img src={GithubLogoIcon} alt="" className="w-6 h-6" />
              GitHub
            </GradientBorderButton>
            <GradientBorderButton href="#">
              <img src={FileIcon} alt="" className="w-6 h-6" />
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
          <div className="p-6 pb-12 bg-card-gradient translate-y-12 max-lg:transform-none">
            <img src={solidityLogoTile} className="mb-8" />
            <h3 className="text-h7 text-neutral-100 mb-4">
              Hyperdrive Smart Contracts
            </h3>
            <p>Solidity implementation of Hyperdrive.</p>
          </div>

          {/* Typescript SDK tile */}
          <div className="p-6 pb-12 bg-card-gradient max-lg:translate-y-12 max-sm:transform-none">
            <img src={typescriptLogoTile} className="mb-8" />
            <h3 className="text-h7 text-neutral-100 mb-4">TypeScript SDK</h3>
            <p>
              TypeScript library for interacting with the Hyperdrive AMM
              Protocol.
            </p>
          </div>

          {/* Agent0 tile */}
          <div className="p-6 pb-12 bg-card-gradient translate-y-12 max-lg:transform-none">
            <img src={pythonLogoTile} className="mb-8" />
            <h3 className="text-h7 text-neutral-100 mb-4">
              agent0 Bots Framework (Python)
            </h3>
            <p>
              Python-based library for testing, analyzing, and interacting with
              Hyperdrive's smart contracts, and to create smart trading bots.
            </p>
          </div>

          {/* Rust SDK tile */}
          <div className="p-6 pb-12 bg-card-gradient max-lg:translate-y-12 max-sm:transform-none">
            <img src={rustLogoTile} className="mb-8" />
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
              {/* <a className="hover:text-aquamarine transition-all" href="https://github.com/delvtech/hyperdrive"> */}
              Hyperdrive Core
              {/* </a> */}
            </li>
            <li>
              {/* <a className="hover:text-aquamarine transition-all" href="https://github.com/delvtech/hyperdrive/tree/main/crates/hyperdrive-math"> */}
              Rust SDK
              {/* </a> */}
            </li>
            <li>
              {/* <a className="hover:text-aquamarine transition-all" href="https://github.com/delvtech/hyperdrive-monorepo/tree/main/packages/hyperdrive-sdk"> */}
              TypeScript SDK
              {/* </a> */}
            </li>
            <li>
              {/* <a className="hover:text-aquamarine transition-all" href="https://github.com/delvtech/hyperdrive-monorepo/tree/main/apps/hyperdrive-trading"> */}
              Web UI (frontend)
              {/* </a> */}
            </li>
            <li>
              {/* <a className="hover:text-aquamarine transition-all" href="https://github.com/delvtech/agent0"> */}
              agent0 (bots)
              {/* </a> */}
            </li>
          </ul>
        </div>
        <img className="max-w-[50%] max-lg:max-w-full" src={stackDiagram} />
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
