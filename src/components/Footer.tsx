import classNames from "classnames";
import discordLogoIcon from "src/assets/logos/discord-logo-icon-dark.svg";
import farcasterLogoIcon from "src/assets/logos/farcaster-logo-icon-dark.svg";
import hyperdriveLogo from "src/assets/logos/hyperdrive-logo-white.svg";
import linkedinLogoIcon from "src/assets/logos/linkedin-logo-icon-dark.svg";
import xLogoIcon from "src/assets/logos/x-logo-icon-dark.svg";

export function Footer() {
  return (
    <>
      <div
        className={classNames(
          "px-[6vw] py-20 flex justify-between bg-gradient-to-b from-[#4C618C]/20 to-[#222C40]/20 relative backdrop-blur-lg gap-14",
          "max-lg:flex-col max-lg:items-center",
        )}
      >
        <img src={hyperdriveLogo} className="h-9" alt="Hyperdrive" />
        <div
          className={classNames(
            "flex gap-20 basis-2/3",
            "max-md:flex-col max-md:gap-0 max-md:text-center",
          )}
        >
          <div className="max-md:py-10 max-md:w-full max-md:border-b max-md:border-neutral-700">
            <h3 className="mb-9 text-neutral-100 font-semibold font-chakra">
              Protocol <span className="text-neutral-400">(Coming soon)</span>
            </h3>
            <ul className="space-y-4 text-neutral-400">
              <li>
                {/* <a className="hover:text-neutral-100 transition-all" href="#"> */}
                Whitepaper
                {/* </a> */}
              </li>
              <li>
                {/* <a className="hover:text-neutral-100 transition-all" href="#"> */}
                Docs
                {/* </a> */}
              </li>
              <li>
                {/* <a className="hover:text-neutral-100 transition-all" href="#"> */}
                User Guides
                {/* </a> */}
              </li>
              <li>
                {/* <a className="hover:text-neutral-100 transition-all" href="#"> */}
                Analytics
                {/* </a> */}
              </li>
              <li>
                {/* <a className="hover:text-neutral-100 transition-all" href="#"> */}
                Bots
                {/* </a> */}
              </li>
              <li>
                {/* <a className="hover:text-neutral-100 transition-all" href="#"> */}
                Security Audits
                {/* </a> */}
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://github.com/delvtech/hyperdrive"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="max-md:py-10 max-md:w-full max-md:border-b max-md:border-neutral-700">
            <h3 className="mb-9 text-neutral-100 font-semibold font-chakra">
              Community
            </h3>
            <ul className="space-y-4 text-neutral-400">
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://www.delv.tech/discord/"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://twitter.com/delv_tech/"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://warpcast.com/~/channel/delv"
                >
                  Farcaster
                </a>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://www.linkedin.com/company/delv-tech/"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://blog.delv.tech/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="max-md:py-10 max-md:w-full max-md:border-b max-md:border-neutral-700">
            <h3 className="mb-9 text-neutral-100 font-semibold font-chakra">
              About
            </h3>
            <ul className="space-y-4 text-neutral-400">
              {/* <li>
                <a className="hover:text-neutral-100 transition-all" href="#">
                  FAQs
                </a>
              </li> */}
              <li>
                <a className="hover:text-neutral-100 transition-all">
                  Brand Guide<sup className="ml-1">coming soon</sup>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://delv.tech"
                >
                  DELV
                </a>
              </li>
            </ul>
          </div>
          <div className="max-md:py-10 max-md:w-full max-md:border-b max-md:border-neutral-700">
            <h3 className="mb-9 text-neutral-100 font-semibold font-chakra">
              Legal
            </h3>
            <ul className="space-y-4 text-neutral-400">
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://elementfi.s3.us-east-2.amazonaws.com/element-finance-terms-of-service.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://elementfi.s3.us-east-2.amazonaws.com/element-finance-privacy-policy.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div
        className={classNames(
          "bg-aquamarine-500 px-20 py-8 flex justify-between text-neutral-900",
          "max-sm:flex-col max-sm:gap-6 max-sm:items-center max-sm:text-center",
        )}
      >
        <p className="font-mono text-body-sm">Copyright &copy; 2024 DELV</p>
        <div className="flex items-center max-sm:flex-col max-sm:gap-2">
          <p className="mr-6 max-sm:mr-0">Follow us:</p>
          <div className="flex gap-3">
            <a href="https://twitter.com/delv_tech/">
              <img className="h-6" src={xLogoIcon}></img>
            </a>
            <a href="https://www.delv.tech/discord/">
              <img className="h-6" src={discordLogoIcon}></img>
            </a>
            <a href="https://www.linkedin.com/company/delv-tech/">
              <img className="h-6" src={linkedinLogoIcon}></img>
            </a>
            <a href="https://warpcast.com/~/channel/delv">
              <img className="h-6" src={farcasterLogoIcon}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
