"use client";
import { motion, useAnimation } from "framer-motion";

export const Box5 = () => {
  const control = useAnimation();
  return (
    <div className="pb-[10rem]">
      <div className="flex items-center mb-4 gap-2">
        <button
          onClick={() => {
            control.start({
              x: 1000,
              transition: {
                duration: 2,
              },
            });
          }}
          className="text-white bg-violet-500 rounded-lg p-2 border-none w-[8rem]"
        >
          Move Right
        </button>
        <button
          onClick={() => {
            control.start({
              x: 0,
              transition: {
                duration: 2,
              },
            });
          }}
          className="text-white bg-violet-500 rounded-lg p-2 border-none w-[8rem]"
        >
          Move Left
        </button>
        <button
          onClick={() => {
            control.start({
              borderRadius: "50%",
              transition: {
                duration: 1,
              },
            });
          }}
          className="text-white bg-violet-500 rounded-lg p-2 border-none w-[8rem]"
        >
          Circle
        </button>
        <button
          onClick={() => {
            control.start({
              borderRadius: "0%",
              transition: {
                duration: 1,
              },
            });
          }}
          className="text-white bg-violet-500 rounded-lg p-2 border-none w-[8rem]"
        >
          Square
        </button>
        <button
          onClick={() => {
            control.stop();
          }}
          className="text-white bg-violet-500 rounded-lg p-2 border-none w-[8rem]"
        >
          Stop
        </button>
      </div>
      <motion.div
        animate={control}
        className="w-[20rem] h-[20rem] bg-emerald-300 flex flex-col items-center justify-center"
      ></motion.div>
    </div>
  );
};
