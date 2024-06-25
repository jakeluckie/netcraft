import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import VOIPSystemsPage from "./routes/solutions/voip-systems/voip-systems.component";
import "./App.css";
import PageNotFound from "./routes/not-found/pagenotfound.component";

function App() {
  document.title = "Page not found";
  return (
    <>
      <Routes>
          <Route index element={<Home />} />

          <Route path="/voip-systems" element={<VOIPSystemsPage />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
