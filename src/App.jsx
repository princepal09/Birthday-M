import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import { AppProvider } from "./context/AppContext";
import Surprise from "./pages/Surprise";

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
