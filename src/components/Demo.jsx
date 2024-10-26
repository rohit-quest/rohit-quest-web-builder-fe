import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../Hooks/useScrollAnimation";
import { scrollUpVariants } from "../configs/animationVariants";
const Demo = () => {
  const {ref, controls} = useScrollAnimation();
  return (
    <div>
      <motion.div className="container mx-auto px-4 py-20"
      variants={scrollUpVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
      exit={"exit"}
      >
        <div className="bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                See the Magic in Action
              </h2>
              <p className="text-gray-300">
                Watch how our AI transforms simple text descriptions into
                beautiful, functional web components in real-time
              </p>
              <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transform transition-all hover:scale-105">
                Try Demo
              </button>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                alt="Code Generation Demo"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Demo;
