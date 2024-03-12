import { Route, Routes } from "react-router-dom";
import { Build } from "src/pages/Build";
import { Home } from "src/pages/Home";
import { ScrollReset } from "./components/router/ScrollReset";

function App() {
  return (
    <>
      <ScrollReset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Build />} />
      </Routes>
    </>
  );
}

export default App;
