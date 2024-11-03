import React from "react";

const FeatureCard = ({ icon, title, description, buttonText }) => {
  return (
    <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all hover:transform hover:scale-105 border border-borderColor">
      <div className="space-y-10">
        <div className="bg-gray-500 w-fit p-3 rounded-lg">
        <img src={icon} alt="icon" />
        </div>
        <header className="space-y-10">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
        </header>
        <button className="max-w-[10rem] p-[0.5rem] bg-[#495057] text-white rounded-lg">{buttonText}</button>
      </div>
    </section>
  );
};

export default FeatureCard;
