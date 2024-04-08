import { Route, Routes } from "react-router-dom";
import { Redirect } from "src/components/router/Redirect";
import { ScrollReset } from "src/components/router/ScrollReset";
import { Brand } from "src/pages/Brand";
import { Build } from "src/pages/Build";
import { FAQs } from "src/pages/FAQs";
import { Home } from "src/pages/Home";

function App() {
  return (
    <>
      <ScrollReset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Build />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route
          path="/docs"
          element={<Redirect to="https://docs-delv.gitbook.io/hyperdrive" />}
        />
        <Route
          path="/app"
          element={<Redirect to="https://testnet.hyperdrive.trade" />}
        />
        <Route
          path="/testnet"
          element={<Redirect to="https://testnet.hyperdrive.trade" />}
        />
      </Routes>
    </>
  );
}

export default App;
