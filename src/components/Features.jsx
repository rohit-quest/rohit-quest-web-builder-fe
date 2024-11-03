import React from "react";
import FeatureCard from "./FeatureCard";
import { Bot, Code2, Zap, Palette, Blocks, Sparkles } from "lucide-react";
import { ImportConfig } from "../configs/ImportConfig";
const Features = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={ImportConfig.fireIcon} 
            title="Effortless Website Creation"
            description="Build your ideal site without the hassle. Our user-friendly interface guides you smoothly through each step, making website creation quick and easy."
            buttonText="Start Building"
          />
          <FeatureCard
            icon={ImportConfig.clockIcon}
            title="Fully Responsive Design"
            description="Reach your audience on any device with designs that adapt perfectly to screens of all sizes. Enjoy a flawless experience, no matter where your visitors come from."
            buttonText="See in Action"
          />
          <FeatureCard
            icon={ImportConfig.cloudIcon}
            title="Inspect & Edit Precision"
            description="Customize every aspect of your website with the Inspect & Edit feature. Fine-tune HTML and CSS with ease, just like using a browser inspector, for unmatched control."
            buttonText="Try It Out"
          />
          <FeatureCard
            icon={ImportConfig.bagIcon}
            title="Versatile Style Options"
            description="Unlock a range of styles and themes to reflect your unique brand. Our platform allows you to easily customize your website’s appearance to suit your vision."
            buttonText="Explore Styles"
          />
          <FeatureCard
            icon={ImportConfig.eyeIcon}
            title="Enhanced SEO Performance"
            description="Boost your site’s visibility with built-in SEO optimization. Our AI-driven tools help improve search rankings, attracting more visitors and growing your audience."
            buttonText="Optimize Now"
          />
          <FeatureCard
            icon={ImportConfig.hillIcon}
            title="Reliable & Secure Hosting"
            description="Rest easy with our secure hosting solutions, designed to keep your site protected and always accessible. Focus on your content while we handle the rest."
            buttonText="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
