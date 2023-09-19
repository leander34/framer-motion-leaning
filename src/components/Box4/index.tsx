"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const Box4 = () => {
  return (
    <div className="pb-[10rem]">
      <motion.div
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
        }}
        className="w-[20rem] h-[20rem] bg-emerald-300 flex flex-col items-center justify-center"
      ></motion.div>
    </div>
  );
};
