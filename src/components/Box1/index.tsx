"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const Box1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className="pb-[10rem]">
      <motion.div
        animate={{
          x: isAnimating ? 1400 : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{ opacity: 0.5 }}
        transition={{
          // duration: 1,
          type: "spring",
          stiffness: 60,
          //   damping: 5,
        }}
        onClick={() => setIsAnimating(!isAnimating)}
        className="w-[20rem] h-[20rem] bg-emerald-300 flex flex-col items-center justify-center"
      ></motion.div>
    </div>
  );
};
