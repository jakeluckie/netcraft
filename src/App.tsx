import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
