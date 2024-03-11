import hyperdriveLogo from "src/assets/hyperdrive-logo-white.svg";
import xLogo from "src/assets/x-logo.svg";

export function Footer() {
  return (
    <>
      <div className="px-28 py-20 flex justify-between bg-gradient-to-b from-[#4C618C]/20 to-[#222C40]/20 relative backdrop-blur-lg">
        <img src={hyperdriveLogo} className="h-9" alt="Hyperdrive" />
        <div className="flex gap-16 basis-2/3">
          <div>
            <h3 className="mb-9">Protocol</h3>
            <ul className="space-y-4 font-mono text-neutral-400">
              <li>
                <a className="hover:text-neutral-100 transition-all" href="#">
                  Whitepaper
                </a>
              </li>
              <li>
                <a className="hover:text-neutral-100 transition-all" href="#">
                  Docs
                </a>
              </li>
              <li>
                <a className="hover:text-neutral-100 transition-all" href="#">
                  User Guides / Tutorials
                </a>
              </li>
              <li>
                <a className="hover:text-neutral-100 transition-all" href="#">
                  Hyperdrive Analytics (BA)
                </a>
              </li>
              <li>
                <a className="hover:text-neutral-100 transition-all" href="#">
                  Bots
                </a>
              </li>
              <li>
                <a className="hover:text-neutral-100 transition-all" href="#">
                  Security Audits
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
          <div>
            <h3 className="mb-9">Community</h3>
            <ul className="space-y-4 font-mono text-neutral-400">
              <li>
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://discord.gg/EEfKmfQdtx/"
                >
                  Discord
                </a>
              </li>
              <li>
                {/* TODO: What text do we want to use here? */}
                <a
                  className="hover:text-neutral-100 transition-all"
                  href="https://twitter.com/delv_tech/"
                >
                  X (Twitter)
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
          <div>
            <h3 className="mb-9">About</h3>
            <ul className="space-y-4 font-mono text-neutral-400">
              <li>
                <a className="hover:text-neutral-100 transition-all" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="hover:text-neutral-100 transition-all" href="#">
                  Brand Guide
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
          <div>
            <h3 className="mb-9">Legal</h3>
            <ul className="space-y-4 font-mono text-neutral-400">
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
      <div className="bg-aquamarine-500 px-20 py-8 flex justify-between text-neutral-900">
        <p className="font-mono text-body-sm">
          Copyright &copy; 2024 Hyperdrive
        </p>
        <div className="flex items-center">
          <p className="mr-6">Follow us:</p>
          <div className="flex gap-3">
            <a href="https://twitter.com/delv_tech/">
              <img className="h-4" src={xLogo}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
