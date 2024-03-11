import heroLine from "src/assets/accents/build-hero-line.svg";
import FileIcon from "src/assets/icons/file-icon.svg";
import DiscordLogoIcon from "src/assets/logos/discord-logo-icon-light.svg";
import GithubLogoIcon from "src/assets/logos/github-logo-icon-light.svg";
import pythonLogoTile from "src/assets/logos/python-logo-tile.png";
import rustLogoTile from "src/assets/logos/rust-logo-tile.png";
import solidityLogoTile from "src/assets/logos/solidity-logo-tile.png";
import typescriptLogoTile from "src/assets/logos/typescript-logo-tile.png";
import { Footer } from "src/components/Footer";
import { GradientBorderButton } from "src/components/GradientButton";
import { Header } from "src/components/Header";
import { CodeTabs } from "src/components/build/CodeTabs";

export function Build() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="min-h-screen flex items-center justify-center relative">
        <img src={heroLine} className="absolute top-1/2 right-0" />

        <div className="max-w-4xl relative">
          <div className="text-center px-40 pb-14 text-white">
            <h1 className="text-h3 gradient-text font-chakra font-medium mb-6">
              Build on Hyperdrive
            </h1>
            <p className="max-w-xl">
              Bring new yield-based products to life with Hyperdrive's extensive
              developer tooling.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <GradientBorderButton href="https://discord.gg/EEfKmfQdtx">
              <img src={DiscordLogoIcon} alt="" className="w-6 h-6" />
              Discord
            </GradientBorderButton>
            <GradientBorderButton href="https://github.com/delvtech">
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
      <div className="pt-10 pb-20">
        <div className="max-w-xl mx-auto text-center mb-20">
          <h2 className="text-h5 gradient-text font-chakra font-medium mb-6">
            Reimagine DeFi Yield
          </h2>
          <p>
            Create exciting new products based on any existing yield source and
            build using the tools you know.
          </p>
        </div>
        <div className="grid grid-flow-col items-stretch gap-4 px-[4vw]">
          <div className="p-6 pb-12 bg-card-gradient translate-y-12">
            <img src={solidityLogoTile} className="mb-8" />
            <h3 className="text-h7 text-neutral-100 mb-4">
              Hyperdrive Smart Contracts
            </h3>
            <p>Solidity implementation of Hyperdrive.</p>
          </div>
          <div className="p-6 pb-12 bg-card-gradient">
            <img src={rustLogoTile} className="mb-8" />
            <h3 className="text-h7 text-neutral-100 mb-4">Rust SDK</h3>
            <p>
              Rust implementation of Hyperdrive math, which mirrors the Solidity
              smart contracts.
            </p>
          </div>
          <div className="p-6 pb-12 bg-card-gradient translate-y-12">
            <img src={pythonLogoTile} className="mb-8" />
            <h3 className="text-h7 text-neutral-100 mb-4">
              agent0 Bots Framework (Python)
            </h3>
            <p>
              Python-based library for testing, analyzing, and interacting with
              Hyperdrive's smart contracts, as well as for creating smart
              trading bots.
            </p>
          </div>
          <div className="p-6 pb-12 bg-card-gradient">
            <img src={typescriptLogoTile} className="mb-8" />
            <h3 className="text-h7 text-neutral-100 mb-4">TypeScript SDK</h3>
            <p>
              TypeScript library for interacting with the Hyperdrive AMM
              Protocol.
            </p>
          </div>
        </div>
      </div>

      {/* Diagram */}
      {/* <div className="flex">
        <div>
          <h2 className="text-h5 gradient-text font-medium font-chakra mb-8">
            Bring yield-based products to life with Hyperdrive’s extensive
            developer tooling:
          </h2>
          <ul>
            <li>Hyperdrive Core</li>
            <li>Rust SDK</li>
            <li>TypeScript SDK</li>
            <li>Web UI (frontend)</li>
            <li>agent0 (bots)</li>
          </ul>
        </div>
      </div> */}

      {/* Code Tabs */}
      <div className="pt-36 pb-36">
        <h2 className="gradient-text text-h6 text-center mb-14">
          Start Building
        </h2>
        <CodeTabs />
      </div>

      <Footer />
    </>
  );
}
