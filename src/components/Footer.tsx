import classNames from "classnames";
import { Link } from "react-router-dom";
import { VerticalDivider } from "src/components/VerticalDivider";
import { DiscordLogoIcon } from "src/components/icons/DiscordLogoIcon";
import { FarcasterLogoIcon } from "src/components/icons/FarcasterLogoIcon";
import { HyperdriveLogoIcon } from "src/components/icons/HyperdriveLogoIcon";
import { LinkedInLogoIcon } from "src/components/icons/LinkedInLogoIcon";
import { XLogoIcon } from "src/components/icons/XLogoIcon";
import { SectionDivider } from "src/pages/home/SectionDivider";

export function Footer() {
  return (
    <>
      <SectionDivider />

      <div
        id="footer"
        className={classNames(
          "inner-container space-y-24 pt-20",
          "max-lg:space-y-14 max-lg:pt-14",
        )}
      >
        {/* Legal disclaimer */}
        <div
          className={classNames(
            "flex items-center gap-32",
            "max-lg:mb-20 max-lg:flex-col max-lg:gap-14",
          )}
        >
          <HyperdriveLogoIcon
            width={180}
            height={180}
            strokeWidth={16 / 180}
            className="shrink-0 fill-none stroke-neutral-500"
          />
          <div
            className={classNames(
              "clip-corners-rounded bg-gradient-to-br from-content-600/30 to-content-600/15 p-px backdrop-blur",
              "max-lg:clip-none max-lg:bg-none max-lg:p-0",
            )}
          >
            <p
              className={classNames(
                "clip-corners-rounded light flex flex-col bg-black/65 px-14 py-12 text-content/75",
                "max-lg:clip-none max-lg:bg-none max-lg:px-[2vw] max-lg:py-0",
              )}
            >
              Hyperdrive.box provides information and resources about the
              fundamentals of the decentralized non-custodial liquidity protocol
              called the Hyperdrive Protocol, comprised of open-source
              self-executing smart contracts that are deployed on various
              permissionless public blockchains, such as Ethereum (the
              "Hyperdrive Protocol" or the "Protocol"). DELV has not controlled
              or operated, and does not currently control or operate, any
              version or instances of the Hyperdrive Protocol on any blockchain
              network.
            </p>
          </div>
        </div>

        {/* Footer links */}
        <div
          className={classNames(
            "flex justify-around gap-5 [&_a:hover]:text-aquamarine [&_a]:transition-all",
            "mx-auto max-lg:grid max-lg:max-w-xl max-lg:grid-cols-[auto_auto_auto] max-lg:gap-x-2 max-lg:gap-y-12 max-lg:px-[2vw]",
          )}
        >
          {/* Protocol */}
          <div>
            <h3 className="mb-6 font-mono text-content/45">Protocol</h3>
            <ul
              className={classNames(
                "space-y-4 font-chakra text-body-lg leading-5",
                "max-lg:space-y-5",
              )}
            >
              <li>
                <a href="https://github.com/delvtech/hyperdrive/blob/main/docs/Hyperdrive_Whitepaper.pdf">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="https://hyperdrive.blockanalitica.com">Analytics</a>
              </li>
              <li>
                <a href="https://blog.delv.tech/hyperdrive-security-roadmap-update-3-new-audit-report-and-bug-bounty-program-launch/">
                  Security Audits
                </a>
              </li>
            </ul>
          </div>

          <VerticalDivider className="opacity-50" />

          {/* Developers */}
          <div>
            <h3 className="mb-6 font-mono text-content/45">Developers</h3>
            <ul
              className={classNames(
                "space-y-4 font-chakra text-body-lg leading-5",
                "max-lg:space-y-5",
              )}
            >
              <li>
                <Link to="/docs">Docs</Link>
              </li>
              <li>
                <a href="https://github.com/delvtech/hyperdrive">GitHub</a>
              </li>
              <li>
                <a href="/build">Hyperdrive (CORE)</a>
              </li>
            </ul>
          </div>

          <VerticalDivider className="opacity-50 max-lg:hidden" />

          {/* Product */}
          <div>
            <h3 className="mb-6 font-mono text-content/45">Product</h3>
            <ul
              className={classNames(
                "space-y-4 font-chakra text-body-lg leading-5",
                "max-lg:space-y-5",
              )}
            >
              <li>
                <Link to="/one">Hyperdrive One</Link>
              </li>
              <li>
                <Link to="/analytics">Analytics</Link>
              </li>
              <li>
                <Link to="/docs/hyperdrive-overview/ui-walkthrough">
                  User Guides
                </Link>
              </li>
              <li>
                <Link to="/docs">FAQ</Link>
              </li>
            </ul>
          </div>

          <VerticalDivider className="opacity-50" />

          {/* About */}
          <div>
            <h3 className="mb-6 font-mono text-content/45">About</h3>
            <ul
              className={classNames(
                "space-y-4 font-chakra text-body-lg leading-5",
                "max-lg:space-y-5",
              )}
            >
              <li>
                <a href="https://delv.tech">DELV</a>
              </li>
              <li>
                <a href="https://wellfound.com/company/delv-tech/jobs">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/brand">Brand{/* Guide */}</Link>
              </li>
            </ul>
          </div>

          <VerticalDivider className="opacity-50 max-lg:hidden" />

          {/* Legal */}
          <div>
            <h3 className="mb-6 font-mono text-content/45">Legal</h3>
            <ul
              className={classNames(
                "space-y-4 font-chakra text-body-lg leading-5",
                "max-lg:space-y-5",
              )}
            >
              <li>
                <a
                  href="https://delv-public.s3.us-east-2.amazonaws.com/delv-terms-of-service.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
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

        <SocialLinks className="justify-center lg:hidden" />

        {/* Sub-footer */}
        <div className="flex items-center justify-between border-content/30 border-t py-8">
          <div className="flex items-center gap-10">
            <span className="text-body-sm text-white/60">
              Copyright &copy; 2024 DELV, Inc.
            </span>
            <div className="h-5 w-px bg-content/30 max-lg:hidden" />

            <SocialLinks className="max-lg:hidden" />
          </div>

          {/* Back to top button */}
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-gradient-to-b from-aquamarine to-sky"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.44253 0.719921L13.0675 6.34492C13.1848 6.4622 13.2507 6.62126 13.2507 6.78711C13.2507 6.95296 13.1848 7.11202 13.0675 7.2293C12.9503 7.34657 12.7912 7.41246 12.6253 7.41246C12.4595 7.41246 12.3004 7.34657 12.1832 7.2293L7.62535 2.6707L7.62535 14.9121C7.62535 15.0779 7.5595 15.2368 7.44229 15.3541C7.32508 15.4713 7.16611 15.5371 7.00035 15.5371C6.83459 15.5371 6.67562 15.4713 6.55841 15.3541C6.4412 15.2368 6.37535 15.0779 6.37535 14.9121L6.37535 2.6707L1.81753 7.2293C1.70026 7.34657 1.5412 7.41246 1.37535 7.41246C1.20949 7.41246 1.05044 7.34657 0.93316 7.2293C0.815884 7.11202 0.75 6.95296 0.75 6.78711C0.75 6.62126 0.815884 6.4622 0.93316 6.34492L6.55816 0.719921C6.6162 0.661811 6.68514 0.615712 6.76101 0.584259C6.83688 0.552806 6.91821 0.536618 7.00035 0.536618C7.08248 0.536618 7.16381 0.552806 7.23968 0.584259C7.31556 0.615712 7.38449 0.661811 7.44253 0.719921Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={classNames("flex items-center gap-7", className)}>
      <a href="https://www.delv.tech/discord/" title="Discord">
        <DiscordLogoIcon className="size-5 text-content" />
      </a>
      <a href="https://twitter.com/delv_tech/" title="X">
        <XLogoIcon className="size-5 text-content" />
      </a>
      <a href="https://warpcast.com/~/channel/delv" title="LinkedIn">
        <LinkedInLogoIcon className="size-5 text-content" />
      </a>
      <a href="https://www.linkedin.com/company/delv-tech/" title="LinkedIn">
        <FarcasterLogoIcon className="size-5 text-content" />
      </a>
    </div>
  );
}
