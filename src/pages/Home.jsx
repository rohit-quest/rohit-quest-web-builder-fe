import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Demo from "../components/Demo";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero />
      <Features />
      <Demo />
      <Footer />
    </div>
  );
};

export default Home;
