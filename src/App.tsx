import { Route, Routes } from "react-router-dom";
import { ScrollReset } from "src/components/router/ScrollReset";
import { Brand } from "src/pages/Brand";
import { Build } from "src/pages/Build";
import { Home } from "src/pages/Home";

function App() {
  return (
    <>
      <ScrollReset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Build />} />
        <Route
          path="/docs"
          handle={() => {
            window.location.replace("https://docs-delv.gitbook.io/hyperdrive");
          }}
        />
        <Route path="/brand" element={<Brand />} />
        {/* <Route path="/app" handle={loadTestnet} />
        <Route path="/testnet" handle={loadTestnet} /> */}
      </Routes>
    </>
  );
}

export default App;

// TODO:
// function loadTestnet() {
//   window.location.replace("https://");
// }
