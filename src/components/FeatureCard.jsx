import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all hover:transform hover:scale-105">
      <div className="space-y-4">
        <div className="bg-gray-700/50 w-fit p-3 rounded-lg">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
