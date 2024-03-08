import DiscordLogoIcon from "src/assets/icons/discord-logo-icon.svg";
import FileIcon from "src/assets/icons/file-icon.svg";
import GithubLogoIcon from "src/assets/icons/github-logo-icon.svg";
import { Header } from "src/components/Header";
import { CodeTabs } from "src/components/build/CodeTabs";

export function Build() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-3xl">
          <div className="text-center pb-14 text-white">
            <h1 className="text-h3 gradient-text font-chakra font-medium mb-6">
              Build on Hyperdrive
            </h1>
            <p className="max-w-xl">
              Bring new yield-based products to life with Hyperdrive's extensive
              developer tooling.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <a className="button" href="https://discord.gg/EEfKmfQdtx">
              <img src={DiscordLogoIcon} alt="" className="w-6 h-6" />
              Discord
            </a>
            <a className="button" href="https://github.com/delvtech">
              <img src={GithubLogoIcon} alt="" className="w-6 h-6" />
              GitHub
            </a>
            <a className="button" href="#">
              <img src={FileIcon} alt="" className="w-6 h-6" />
              Whitepaper
            </a>
          </div>
        </div>
      </div>

      {/* Code Tabs */}
      <div className="pt-24 pb-36">
        <h2 className="gradient-text text-h6">Start Building</h2>
        <CodeTabs />
      </div>
    </>
  );
}
