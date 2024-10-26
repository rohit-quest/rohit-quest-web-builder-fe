import React, { useState } from "react";
import "./styles/HeroSection.css";
import RobotSVG from "../assets/robot.svg";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { animationHomeVariantsleft, animationHomeVariantsRight } from "../configs/animationVariants";
const HeroSection = () => {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  return (
    <div className="hero-section w-[90%] flex justify-center items-center gap-[28px] m-auto mt-[80px]">
      <motion.div className="flex flex-col gap-[40px]"
      variants={animationHomeVariantsleft}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <div className="hero-section-text-container">
          <TypeAnimation
            sequence={[
              "Elevating Possibilities with AI",
              2000,
              "Effortlessly Create Stunning Websites...",
              2000,
              "Powered by Advanced AI Technology...",
              2000,
              "Transform Ideas into Reality in Minutes...",
              2000,
              "No Coding Skills? No Problem!",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <p>
            Advanced AI solutions designed to enhance productivity, drive
            efficiency, and create unparalleled value for businesses and
            individuals.
          </p>
        </div>
      </motion.div>

      <motion.div
      variants={animationHomeVariantsRight}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <img src={RobotSVG} alt="RobotSVG" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
