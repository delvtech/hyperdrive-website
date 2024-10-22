import classNames from "classnames";
import { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useCopy } from "src/hooks/useCopy";
import { useDownloadLink } from "src/hooks/useDownloadLink";

export function Brand() {
  return (
    <>
      <Header />

      <main className="my-40 max-w-4xl mx-auto px-[4vw]">
        <h1 className="text-h3 font-chakra gradient-text text-center">
          Brand Assets
        </h1>

        <h2 className="text-body-lg mt-16 mb-6">Logo Mark</h2>
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <AssetTile
            downloadName="hyperdrive-mark-white.svg"
            className="card p-2"
            svg={
              <svg
                width="200"
                height="200"
                viewBox="0 0 332 332"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M145.22 204.232L190.128 129.884C192.208 126.589 195.843 124.593 199.717 124.593C206.006 124.593 211.099 129.716 211.099 136.04V261.531L251.823 244.77C257.705 242.341 261.531 236.593 261.531 230.221V136.377C261.531 127.696 254.525 120.65 245.892 120.65H199.717C194.48 120.65 189.602 123.343 186.78 127.768L141.872 202.116C139.792 205.41 136.157 207.406 132.283 207.406C125.994 207.406 120.901 202.284 120.901 195.96L120.901 70.469L80.1778 87.2303C74.2953 89.6592 70.4693 95.4066 70.4693 101.779L70.4692 195.623C70.4692 204.304 77.4757 211.35 86.1081 211.35H132.283C137.52 211.35 142.398 208.657 145.22 204.232Z"
                  fill="white"
                />
              </svg>
            }
          />
          <AssetTile
            downloadName="hyperdrive-mark-black.svg"
            className="bg-neutral-200 text-neutral-500 p-2 rounded"
            svg={
              <svg
                width="200"
                height="200"
                viewBox="0 0 332 332"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M145.22 204.232L190.128 129.884C192.208 126.589 195.843 124.593 199.717 124.593C206.006 124.593 211.099 129.716 211.099 136.04V261.531L251.823 244.77C257.705 242.341 261.531 236.593 261.531 230.221V136.377C261.531 127.696 254.525 120.65 245.892 120.65H199.717C194.48 120.65 189.602 123.343 186.78 127.768L141.872 202.116C139.792 205.41 136.157 207.406 132.283 207.406C125.994 207.406 120.901 202.284 120.901 195.96L120.901 70.469L80.1778 87.2303C74.2953 89.6592 70.4693 95.4066 70.4693 101.779L70.4692 195.623C70.4692 204.304 77.4757 211.35 86.1081 211.35H132.283C137.52 211.35 142.398 208.657 145.22 204.232Z"
                  fill="#0F1117"
                />
              </svg>
            }
          />
        </div>

        <h2 className="text-body-lg mt-16 mb-6">Logo</h2>
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <AssetTile
            downloadName="hyperdrive-logo-white.svg"
            className="card p-2"
            svg={
              <svg
                width="1131"
                height="271"
                viewBox="0 0 1131 271"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M118.991 164.795L154.494 105.909C156.139 103.299 159.012 101.719 162.075 101.719C167.047 101.719 171.073 105.776 171.073 110.785V210.177L203.267 196.902C207.918 194.978 210.943 190.426 210.943 185.378V111.051C210.943 104.176 205.404 98.595 198.579 98.595H162.075C157.935 98.595 154.078 100.728 151.847 104.233L116.345 163.119C114.7 165.728 111.827 167.309 108.764 167.309C103.792 167.309 99.7655 163.252 99.7655 158.243L99.7655 58.8505L67.5712 72.1259C62.9207 74.0496 59.896 78.6018 59.896 83.6491L59.896 157.976C59.896 164.852 65.435 170.433 72.2595 170.433H108.764C112.904 170.433 116.761 168.299 118.991 164.795Z"
                  fill="white"
                />
                <path
                  d="M1005.36 170.463V98.4371H1071.55V111.742H1018.64V127.748H1061.16V141.152H1018.64V157.158H1071.55V170.463H1005.36Z"
                  fill="white"
                />
                <path
                  d="M939.581 170.463L897.953 98.4371H913.326L945.471 154.457L977.715 98.4371H992.989L951.361 170.463H939.581Z"
                  fill="white"
                />
                <path
                  d="M872.311 170.463V98.4371H885.388V170.463H872.311Z"
                  fill="white"
                />
                <path
                  d="M843.639 170.462L821.977 144.553H839.247L858.015 166.761V170.462H843.639ZM786.338 170.462V98.5369H844.238C846.767 98.5369 849.097 99.1704 851.226 100.438C853.356 101.705 855.053 103.405 856.317 105.539C857.582 107.607 858.214 109.908 858.214 112.442V131.849C858.214 134.383 857.582 136.717 856.317 138.851C855.053 140.985 853.356 142.686 851.226 143.953C849.097 145.153 846.767 145.754 844.238 145.754L799.515 145.854V170.462H786.338ZM800.713 132.449H843.639C843.972 132.449 844.272 132.349 844.538 132.149C844.804 131.949 844.937 131.682 844.937 131.349V112.942C844.937 112.609 844.804 112.342 844.538 112.142C844.272 111.875 843.972 111.742 843.639 111.742H800.713C800.38 111.742 800.081 111.875 799.815 112.142C799.615 112.342 799.515 112.609 799.515 112.942V131.349C799.515 131.682 799.615 131.949 799.815 132.149C800.081 132.349 800.38 132.449 800.713 132.449Z"
                  fill="white"
                />
                <path
                  d="M698.293 170.463V98.4371H756.193C758.722 98.4371 761.052 99.0707 763.181 100.338C765.311 101.605 767.008 103.306 768.273 105.44C769.537 107.507 770.169 109.808 770.169 112.342V156.558C770.169 159.092 769.537 161.426 768.273 163.56C767.008 165.628 765.311 167.295 763.181 168.562C761.052 169.829 758.722 170.463 756.193 170.463H698.293ZM712.568 157.158H755.594C755.927 157.158 756.227 157.058 756.493 156.858C756.759 156.591 756.892 156.291 756.892 155.958V112.942C756.892 112.609 756.759 112.342 756.493 112.142C756.227 111.875 755.927 111.742 755.594 111.742H712.568C712.236 111.742 711.936 111.875 711.67 112.142C711.47 112.342 711.37 112.609 711.37 112.942V155.958C711.37 156.291 711.47 156.591 711.67 156.858C711.936 157.058 712.236 157.158 712.568 157.158Z"
                  fill="white"
                />
                <path
                  d="M668.025 170.462L646.362 144.553H663.633L682.4 166.761V170.462H668.025ZM610.724 170.462V98.5369H668.624C671.153 98.5369 673.482 99.1704 675.612 100.438C677.742 101.705 679.439 103.405 680.703 105.539C681.968 107.607 682.6 109.908 682.6 112.442V131.849C682.6 134.383 681.968 136.717 680.703 138.851C679.439 140.985 677.742 142.686 675.612 143.953C673.482 145.153 671.153 145.754 668.624 145.754L623.901 145.854V170.462H610.724ZM625.099 132.449H668.025C668.358 132.449 668.657 132.349 668.924 132.149C669.19 131.949 669.323 131.682 669.323 131.349V112.942C669.323 112.609 669.19 112.342 668.924 112.142C668.657 111.875 668.358 111.742 668.025 111.742H625.099C624.766 111.742 624.467 111.875 624.2 112.142C624.001 112.342 623.901 112.609 623.901 112.942V131.349C623.901 131.682 624.001 131.949 624.2 132.149C624.467 132.349 624.766 132.449 625.099 132.449Z"
                  fill="white"
                />
                <path
                  d="M529.499 170.463V98.4371H595.685V111.742H542.776V127.748H585.303V141.152H542.776V157.158H595.685V170.463H529.499Z"
                  fill="white"
                />
                <path
                  d="M445.344 170.462V98.5369H503.244C505.773 98.5369 508.102 99.1704 510.232 100.438C512.362 101.705 514.059 103.405 515.323 105.539C516.588 107.607 517.22 109.908 517.22 112.442V131.849C517.22 134.383 516.588 136.717 515.323 138.851C514.059 140.985 512.362 142.686 510.232 143.953C508.102 145.153 505.773 145.754 503.244 145.754L458.521 145.854V170.462H445.344ZM459.719 132.449H502.645C502.978 132.449 503.277 132.349 503.544 132.149C503.81 131.949 503.943 131.682 503.943 131.349V112.942C503.943 112.609 503.81 112.342 503.544 112.142C503.277 111.875 502.978 111.742 502.645 111.742H459.719C459.386 111.742 459.087 111.875 458.821 112.142C458.621 112.342 458.521 112.609 458.521 112.942V131.349C458.521 131.682 458.621 131.949 458.821 132.149C459.087 132.349 459.386 132.449 459.719 132.449Z"
                  fill="white"
                />
                <path
                  d="M387.875 170.463V143.453L354.732 98.4371H370.305L394.563 128.948L418.522 98.4371H434.395L401.152 143.553V170.463H387.875Z"
                  fill="white"
                />
                <path
                  d="M270.12 170.463V98.4371H283.297V127.748H330.416V98.4371H343.593V170.463H330.416V141.152H283.297V170.463H270.12Z"
                  fill="white"
                />
              </svg>
            }
          />

          <AssetTile
            downloadName="hyperdrive-logo-black.svg"
            className="bg-neutral-200 text-neutral-500 p-2 rounded"
            svg={
              <svg
                width="1131"
                height="271"
                viewBox="0 0 1131 271"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M118.991 164.795L154.494 105.909C156.139 103.299 159.012 101.719 162.075 101.719C167.047 101.719 171.073 105.776 171.073 110.785V210.177L203.267 196.902C207.918 194.978 210.943 190.426 210.943 185.378V111.051C210.943 104.176 205.404 98.595 198.579 98.595H162.075C157.935 98.595 154.078 100.728 151.847 104.233L116.345 163.119C114.7 165.728 111.827 167.309 108.764 167.309C103.792 167.309 99.7655 163.252 99.7655 158.243L99.7655 58.8505L67.5712 72.1259C62.9207 74.0496 59.896 78.6018 59.896 83.6491L59.896 157.976C59.896 164.852 65.435 170.433 72.2595 170.433H108.764C112.904 170.433 116.761 168.299 118.991 164.795Z"
                  fill="#0F1117"
                />
                <path
                  d="M1005.36 170.463V98.4371H1071.55V111.742H1018.64V127.748H1061.16V141.152H1018.64V157.158H1071.55V170.463H1005.36Z"
                  fill="#0F1117"
                />
                <path
                  d="M939.581 170.463L897.953 98.4371H913.326L945.471 154.457L977.715 98.4371H992.989L951.361 170.463H939.581Z"
                  fill="#0F1117"
                />
                <path
                  d="M872.311 170.463V98.4371H885.388V170.463H872.311Z"
                  fill="#0F1117"
                />
                <path
                  d="M843.639 170.462L821.977 144.553H839.247L858.015 166.761V170.462H843.639ZM786.338 170.462V98.5369H844.238C846.767 98.5369 849.097 99.1704 851.226 100.438C853.356 101.705 855.053 103.405 856.317 105.539C857.582 107.607 858.214 109.908 858.214 112.442V131.849C858.214 134.383 857.582 136.717 856.317 138.851C855.053 140.985 853.356 142.686 851.226 143.953C849.097 145.153 846.767 145.754 844.238 145.754L799.515 145.854V170.462H786.338ZM800.713 132.449H843.639C843.972 132.449 844.272 132.349 844.538 132.149C844.804 131.949 844.937 131.682 844.937 131.349V112.942C844.937 112.609 844.804 112.342 844.538 112.142C844.272 111.875 843.972 111.742 843.639 111.742H800.713C800.38 111.742 800.081 111.875 799.815 112.142C799.615 112.342 799.515 112.609 799.515 112.942V131.349C799.515 131.682 799.615 131.949 799.815 132.149C800.081 132.349 800.38 132.449 800.713 132.449Z"
                  fill="#0F1117"
                />
                <path
                  d="M698.293 170.463V98.4371H756.193C758.722 98.4371 761.052 99.0707 763.181 100.338C765.311 101.605 767.008 103.306 768.273 105.44C769.537 107.507 770.169 109.808 770.169 112.342V156.558C770.169 159.092 769.537 161.426 768.273 163.56C767.008 165.628 765.311 167.295 763.181 168.562C761.052 169.829 758.722 170.463 756.193 170.463H698.293ZM712.568 157.158H755.594C755.927 157.158 756.227 157.058 756.493 156.858C756.759 156.591 756.892 156.291 756.892 155.958V112.942C756.892 112.609 756.759 112.342 756.493 112.142C756.227 111.875 755.927 111.742 755.594 111.742H712.568C712.236 111.742 711.936 111.875 711.67 112.142C711.47 112.342 711.37 112.609 711.37 112.942V155.958C711.37 156.291 711.47 156.591 711.67 156.858C711.936 157.058 712.236 157.158 712.568 157.158Z"
                  fill="#0F1117"
                />
                <path
                  d="M668.025 170.462L646.362 144.553H663.633L682.4 166.761V170.462H668.025ZM610.724 170.462V98.5369H668.624C671.153 98.5369 673.482 99.1704 675.612 100.438C677.742 101.705 679.439 103.405 680.703 105.539C681.968 107.607 682.6 109.908 682.6 112.442V131.849C682.6 134.383 681.968 136.717 680.703 138.851C679.439 140.985 677.742 142.686 675.612 143.953C673.482 145.153 671.153 145.754 668.624 145.754L623.901 145.854V170.462H610.724ZM625.099 132.449H668.025C668.358 132.449 668.657 132.349 668.924 132.149C669.19 131.949 669.323 131.682 669.323 131.349V112.942C669.323 112.609 669.19 112.342 668.924 112.142C668.657 111.875 668.358 111.742 668.025 111.742H625.099C624.766 111.742 624.467 111.875 624.2 112.142C624.001 112.342 623.901 112.609 623.901 112.942V131.349C623.901 131.682 624.001 131.949 624.2 132.149C624.467 132.349 624.766 132.449 625.099 132.449Z"
                  fill="#0F1117"
                />
                <path
                  d="M529.499 170.463V98.4371H595.685V111.742H542.776V127.748H585.303V141.152H542.776V157.158H595.685V170.463H529.499Z"
                  fill="#0F1117"
                />
                <path
                  d="M445.344 170.462V98.5369H503.244C505.773 98.5369 508.102 99.1704 510.232 100.438C512.362 101.705 514.059 103.405 515.323 105.539C516.588 107.607 517.22 109.908 517.22 112.442V131.849C517.22 134.383 516.588 136.717 515.323 138.851C514.059 140.985 512.362 142.686 510.232 143.953C508.102 145.153 505.773 145.754 503.244 145.754L458.521 145.854V170.462H445.344ZM459.719 132.449H502.645C502.978 132.449 503.277 132.349 503.544 132.149C503.81 131.949 503.943 131.682 503.943 131.349V112.942C503.943 112.609 503.81 112.342 503.544 112.142C503.277 111.875 502.978 111.742 502.645 111.742H459.719C459.386 111.742 459.087 111.875 458.821 112.142C458.621 112.342 458.521 112.609 458.521 112.942V131.349C458.521 131.682 458.621 131.949 458.821 132.149C459.087 132.349 459.386 132.449 459.719 132.449Z"
                  fill="#0F1117"
                />
                <path
                  d="M387.875 170.463V143.453L354.732 98.4371H370.305L394.563 128.948L418.522 98.4371H434.395L401.152 143.553V170.463H387.875Z"
                  fill="#0F1117"
                />
                <path
                  d="M270.12 170.463V98.4371H283.297V127.748H330.416V98.4371H343.593V170.463H330.416V141.152H283.297V170.463H270.12Z"
                  fill="#0F1117"
                />
              </svg>
            }
          />
        </div>

        <h2 className="text-body-lg mt-16 mb-6">Colors</h2>
        <div className="grid grid-cols-3 gap-4 max-xs:grid-cols-1">
          <ColorTile color="#2EFCB6" className="text-neutral-900" />
          <ColorTile color="#14D3F9" className="text-neutral-900" />
          <ColorTile color="#001B14" />
        </div>
      </main>

      <Footer />
    </>
  );
}

function AssetTile({
  downloadName,
  className,
  svg,
}: {
  downloadName: string;
  className: string;
  svg: ReactElement;
}) {
  const svgString = renderToStaticMarkup(svg);
  const downloadLink = useDownloadLink(svgString, "svg");
  const { copy, copied } = useCopy();

  return (
    <div>
      <div
        className={classNames(
          "aspect-video flex items-center justify-center border border-neutral-700 flex-col",
          className,
        )}
      >
        <div className="flex items-center justify-center w-full grow">
          {svg}
        </div>
        <div className="grid grid-cols-[1.5fr_0_1.5fr] gap-2 w-full h-[3.75rem] border-t border-neutral-400/40 p-2">
          <button
            className="flex items-center justify-center font-mono uppercase font-medium hover:bg-neutral-500/20 transition-all rounded"
            onClick={() => {
              copy(svgString);
            }}
          >
            {copied ? "copied!" : "copy"}
          </button>
          <div className="w-px bg-neutral-400/40" />
          <a
            className="flex items-center justify-center font-mono uppercase font-medium hover:bg-neutral-500/20 transition-all rounded"
            href={downloadLink}
            download={downloadName}
          >
            download
          </a>
        </div>
      </div>
    </div>
  );
}

function ColorTile({
  color,
  className,
}: {
  color: string;
  className?: string;
}) {
  const { copy, copied } = useCopy();
  return (
    <button
      className={classNames(
        "font-mono uppercase font-medium bg-neutral-900 aspect-video flex items-center justify-center border border-neutral-700 rounded-lg",
        className,
      )}
      style={{ backgroundColor: color }}
      onClick={() => {
        copy(color);
      }}
    >
      {copied ? "copied!" : color}
    </button>
  );
}
