import { Route, Routes } from "react-router-dom";
import { Build } from "src/pages/Build";
import { Home } from "src/pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Build />} />
      </Routes>
    </>
  );
}

export default App;
