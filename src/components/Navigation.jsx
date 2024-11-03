import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [view, setView] = useState("split");
  const navigate = useNavigate();

  return (
    <nav className="flex items-center p-[16px] max-w-[100%] border-b border-borderColor">
      <div className="min-w-[80%] flex items-center justify-between m-auto">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className="text-xl font-bold">AI | Web Craft</h1>
        </div>
        <div className="flex space-x-2 gap-4">
          <button
            onClick={() => navigate("/login")}
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              view === "split"
                ? "bg-buttonColor hover:bg-blue-600 text-white"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <span>Login</span>
          </button>
          <button
            onClick={() => navigate("/generate")}
            className={`px-4 py-2 rounded ${
              view === "" ? "bg-purple-600" : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
