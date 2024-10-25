import React from "react";
import { Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="bg-blue-500/10 p-4 rounded-full">
            <Bot className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
            AI Website Generator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Transform your ideas into stunning websites instantly. Powered by
            advanced AI, create professional-grade web components with just a
            few words.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transform transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25" onClick={() => { navigate('/generate') }}>
            Start Building Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
