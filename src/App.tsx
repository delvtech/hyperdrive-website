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
      </Routes>
    </>
  );
}

export default App;
