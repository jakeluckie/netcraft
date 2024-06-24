import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import VOIPSystemsPage from "./routes/solutions/voip-systems/voip-systems.component";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
          <Route index element={<Home />} />

          <Route path="/voip-systems" element={<VOIPSystemsPage />} />
      </Routes>
    </>
  );
}

export default App;
