import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PreviewPage from "./pages/PreviewPage";
import Login from "./pages/Login";
import Onboarding from "./components/Onboarding";

const App = () => {
  return (
    <div className="w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/generate" element={<PreviewPage />} />
      </Routes>
    </div>
  );
};

export default App;
