"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const Box3 = () => {
  // const boxVariants = {
  //   lion: {
  //     x: 100,
  //     scale: 1.5,
  //     backgroundColor: "yellow",
  //   },
  //   elephant: {
  //     x: 1000,
  //     scale: 0.5,
  //     backgroundColor: "green",
  //   },
  // };

  const boxVariants = {
    hidden: {
      x: "-100vw",
    },
    visable: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visable: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="pb-[10rem]">
      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visable"
        className="w-[20rem] h-[20rem] bg-emerald-300 flex flex-col items-center justify-center"
      >
        <ul>
          {Array.from({ length: 3 }, (_, b) => {
            return b;
          }).map((item) => {
            return (
              <motion.li
                key={item}
                variants={listVariant}
                className="w-[0.5rem] h-[0.5rem] bg-white p-[2rem] list-none m-[0.5rem]"
              ></motion.li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};
