import React from "react";
import { Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../Hooks/useScrollAnimation";
import { animationHomeVariantsRight, scrollUpVariants } from "../configs/animationVariants";
import RobotSVG from "../assets/robot.svg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const navigate = useNavigate();
  const { ref, controls } = useScrollAnimation();
  return (
      <motion.section className="container mx-auto px-4 py-20 flex flex-col items-center w-full gap-5 md:flex-row"
        variants={scrollUpVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
        exit={"exit"}
      >
        <div className="flex flex-col md:items-start space-y-8 p-5 md:w-[50%] w-full items-center">
          <div className="bg-blue-500/10 p-4 rounded-full">
            <Bot className="w-20 h-20 text-blue-400" />
          </div>
          <header className="space-y-6">
            <h1 className="text-5xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
              AI Website Generator
            </h1>
            {/* <p className="text-xl text-gray-300 max-w-2xl">
              Transform your ideas into stunning websites instantly. Powered by
              advanced AI, create professional-grade web components with just a
              few words.
            </p> */}
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
              style={{ fontSize: "1.25rem", display: "inline-block" }}
              repeat={Infinity}
              />
          </header>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transform transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            onClick={() => {
              navigate("/generate");
            }}
          >
            Start Building Now
          </button>
        </div>
        <motion.div
          variants={animationHomeVariantsRight}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="p-8 m-auto"
        >
          <img src={RobotSVG} alt="Illustration of a robot" />
        </motion.div>
      </motion.section>
  );
};

export default Hero;
