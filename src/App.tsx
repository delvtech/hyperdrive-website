import { Route, Routes } from "react-router-dom";
import { ScrollReset } from "src/components/router/ScrollReset";
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
          element={<Redirect to="https://docs-delv.gitbook.io/hyperdrive" />}
        />
      </Routes>
    </>
  );
}

export default App;

function Redirect({ to }: { to: string }) {
  window.location.replace(to);
  return <></>;
}
