import { Route, Routes } from "react-router-dom";
import { Header } from "src/components/Header";
import { Home } from "src/pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
