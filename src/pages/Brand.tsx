import HyperdriveLogoDark from "src/assets/brand/hyperdrive-logo-dark.svg";
import HyperdriveLogoLight from "src/assets/brand/hyperdrive-logo-light.svg";
import HyperdriveMarkDark from "src/assets/brand/hyperdrive-mark-dark.svg";
import HyperdriveMarkLight from "src/assets/brand/hyperdrive-mark-light.svg";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export function Brand() {
  return (
    <>
      <Header theme="dark" />

      <main className="my-40 max-w-4xl mx-auto">
        <h1 className="text-h3 font-chakra gradient-text text-center">
          Brand Assets
        </h1>
        <h2 className="text-body-lg mt-16 mb-6">Logo Mark</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-video flex items-center justify-center bg-neutral-900 border border-neutral-700">
            <img
              className="h-24"
              src={HyperdriveMarkLight}
              alt="Hyperdrive Logo Mark Light"
            />
          </div>
          <div className="aspect-video flex items-center justify-center bg-neutral-200 border border-neutral-700">
            <img
              className="h-24"
              src={HyperdriveMarkDark}
              alt="Hyperdrive Logo Mark Dark"
            />
          </div>
        </div>
        <h2 className="text-body-lg mt-16 mb-6">Logo</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-video flex items-center justify-center bg-neutral-900 border border-neutral-700">
            <img
              className="h-24"
              src={HyperdriveLogoLight}
              alt="Hyperdrive Logo Light"
            />
          </div>
          <div className="aspect-video flex items-center justify-center bg-neutral-200 border border-neutral-700">
            <img
              className="h-24"
              src={HyperdriveLogoDark}
              alt="Hyperdrive Logo Dark"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
