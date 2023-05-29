import React from "react";
import { motion, MotionValue, useSpring } from "framer-motion";

const ProgressBar = ({ progress }: { progress: MotionValue<number> }) => {
  const scaleX = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[999] h-1 origin-[0%] transform rounded-full bg-[#d05aff]"
    ></motion.div>
  );
};

export default ProgressBar;
