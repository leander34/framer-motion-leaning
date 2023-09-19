"use client";
import { motion } from "framer-motion";

export const Box2 = () => {
  return (
    <div className="pb-[20rem]">
      <motion.div
        drag
        dragConstraints={{ right: 20, left: -20, top: 100, bottom: 10 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-[20rem] h-[20rem] bg-emerald-300 flex flex-col items-center justify-center"
      ></motion.div>
    </div>
  );
};
