import { Route, Routes } from "react-router-dom";
import { Redirect } from "src/components/router/Redirect";
import { ScrollReset } from "src/components/router/ScrollReset";
import { Brand } from "src/pages/Brand";
import { Home } from "src/pages/home/Home";

function App() {
  return (
    <>
      <ScrollReset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/analytics/*"
          element={<Redirect to="https://hyperdrive.blockanalitica.com" />}
        />
        <Route
          path="/app/*"
          element={<Redirect to="https://app.hyperdrive.box" />}
        />
        <Route
          path="/borrow/*"
          element={<Redirect to="https://fixed-borrow.hyperdrive.box" />}
        />
        <Route path="/brand" element={<Brand />} />
        <Route
          path="/docs/*"
          element={<Redirect to="https://docs.hyperdrive.box" />}
        />
        <Route
          path="/one/*"
          element={<Redirect to="https://app.hyperdrive.box" />}
        />
        <Route
          path="/whitepaper"
          element={
            <Redirect to="https://github.com/delvtech/hyperdrive/blob/main/docs/Hyperdrive_Whitepaper.pdf" />
          }
        />
      </Routes>
    </>
  );
}

export default App;
