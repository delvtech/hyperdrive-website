import classNames from "classnames";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <div
        className={classNames(
          "px-[6vw] py-20 flex justify-between bg-gradient-to-b from-[#4C618C]/20 to-[#222C40]/20 relative backdrop-blur-lg gap-14",
          "max-lg:flex-col max-lg:items-center",
        )}
      >
        <img
          src="/logos/hyperdrive-logo-white.svg"
          className="h-9"
          alt="Hyperdrive"
        />
        <div
          className={classNames(
            "flex gap-20 basis-2/3",
            "max-md:flex-col max-md:gap-0 max-md:text-center",
          )}
        >
          <div className="max-md:py-10 max-md:w-full max-md:border-b max-md:border-neutral-700">
            <h3 className="mb-9 text-neutral-100 font-semibold font-chakra">
              Protocol
            </h3>
            <ul className="space-y-4 text-neutral-400">
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://github.com/delvtech/hyperdrive/blob/main/docs/Hyperdrive_Whitepaper.pdf"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <Link
                  className="hover:text-neutral-100 transition-all"
                  to="/docs"
                >
                  Docs
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://docs.hyperdrive.box/hyperdrive-overview/ui-walkthrough"
                >
                  User Guides
                </a>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://hyperdrive.blockanalitica.com"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://agent0.readthedocs.io/en/latest/"
                >
                  Bots
                </a>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://blog.delv.tech/hyperdrive-security-roadmap-update-3-new-audit-report-and-bug-bounty-program-launch/"
                >
                  Security Audits
                </a>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://cantina.xyz/bounties/7fa99194-3a19-476d-92dd-f66289baf95e"
                >
                  Bug Bounty
                </a>
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
              <li>
                <Link
                  className="hover:text-neutral-100 transition-all"
                  to="/docs"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/brand"
                  className="hover:text-neutral-100 transition-all"
                >
                  Brand Assets
                </Link>
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
                  href="https://delv-public.s3.us-east-2.amazonaws.com/delv-terms-of-service.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://delv-public.s3.us-east-2.amazonaws.com/delv-privacy-policy.pdf"
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
              <img className="h-6" src="/logos/x-logo-icon-dark.svg"></img>
            </a>
            <a href="https://www.delv.tech/discord/">
              <img className="h-6" src="logos/discord-logo-icon-dark.svg"></img>
            </a>
            <a href="https://www.linkedin.com/company/delv-tech/">
              <img
                className="h-6"
                src="/logos/linkedin-logo-icon-dark.svg"
              ></img>
            </a>
            <a href="https://warpcast.com/~/channel/delv">
              <img
                className="h-6"
                src="/logos/farcaster-logo-icon-dark.svg"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
