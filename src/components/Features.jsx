import React from "react";
import FeatureCard from "./FeatureCard";
import { Bot, Code2, Zap, Palette, Blocks, Sparkles } from "lucide-react";
const Features = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-yellow-400" />}
            title="Lightning Fast"
            description="Generate complete websites and components in seconds, not hours."
          />
          <FeatureCard
            icon={<Code2 className="w-8 h-8 text-green-400" />}
            title="Clean Code"
            description="Production-ready code that follows best practices and modern standards."
          />
          <FeatureCard
            icon={<Palette className="w-8 h-8 text-purple-400" />}
            title="Custom Styling"
            description="Tailwind CSS integration for beautiful, responsive designs."
          />
          <FeatureCard
            icon={<Blocks className="w-8 h-8 text-blue-400" />}
            title="Component Library"
            description="Extensive collection of pre-built components ready to use."
          />
          <FeatureCard
            icon={<Bot className="w-8 h-8 text-pink-400" />}
            title="AI Powered"
            description="Advanced AI understanding that turns your descriptions into code."
          />
          <FeatureCard
            icon={<Sparkles className="w-8 h-8 text-orange-400" />}
            title="Magic Touch"
            description="Intelligent suggestions and optimizations for your projects."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
