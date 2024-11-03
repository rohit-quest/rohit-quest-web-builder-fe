import "./styles/HeroSection.css";
import RobotSVG from "../assets/robot.svg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { animationHomeVariantsleft, animationHomeVariantsRight } from "../configs/animationVariants";
const HeroSection = () => {

  return (
    <section className="hero-section w-[90%] flex justify-center items-center flex-col gap-[28px] m-auto mt-[80px]">
      <motion.header 
        className="flex flex-col gap-[40px]"
        variants={animationHomeVariantsleft}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="hero-section-text-container">
          <p className="text-3xl md:text-4xl font-bold">
            Build Websites with <br/> Simple Prompts
          </p>
          <div className="mt-9 mb-7">
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
              style={{ fontSize: "2rem", display: "inline-block" }}
              repeat={Infinity}
              />
            </div>
        </div>
      </motion.header>
      <motion.div
        variants={animationHomeVariantsRight}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="border border-borderColor rounded-lg p-8 flex flex-col items-center gap-4"
      >
        <img src={RobotSVG} alt="Illustration of a robot" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
