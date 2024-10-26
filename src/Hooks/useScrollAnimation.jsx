import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScrollAnimation = (threshold = 0.2) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);
  return { controls, ref };
};
