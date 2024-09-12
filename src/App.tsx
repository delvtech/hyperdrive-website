import { Route, Routes } from "react-router-dom";
import { Redirect } from "src/components/router/Redirect";
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
        <Route path="/brand" element={<Brand />} />
        <Route
          path="/docs"
          element={<Redirect to="https://docs.hyperdrive.box" />}
        />
        <Route
          path="/whitepaper"
          element={
            <Redirect to="https://github.com/delvtech/hyperdrive/blob/main/docs/Hyperdrive_Whitepaper.pdf" />
          }
        />
        <Route
          path="/app"
          element={<Redirect to="https://app.hyperdrive.box" />}
        />
        <Route
          path="/testnet"
          element={<Redirect to="https://testnet.hyperdrive.box" />}
        />
      </Routes>
    </>
  );
}

export default App;
