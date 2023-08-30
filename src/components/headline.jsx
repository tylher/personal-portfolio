import React from "react";
import Mysvg from "./mysvg";
import { ExpandCircleDown } from "@mui/icons-material";
import { motion } from "framer-motion";

const Headline = () => {
  return (
    <div className="flex gap-[20px] justify-between px-20 mt-[40px] overflow-hidden">
      <div className="w-[50%] text-gray-600 text-lg  font-[500] flex flex-col">
        <h2 className="text-4xl flex font-bold gap-3">
          {" "}
          Hello, I am <p className="text-[#567eb7] font-bold">Damola</p>
        </h2>
        <h3 className="text-6xl font-bold text-[#f62ede]">
          Full-stack Web Developer
        </h3>
        <motion.p
          className="text-lg italic my-5 font-semibold"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
        >
          {" "}
          Crafting and delivering state-of-the-art software solutions to help
          drive innovation through full-stack expertise.
        </motion.p>
        <div className="flex gap-5">
          <button
            type="button"
            className="text-lg font-semibold border-[2px] border-[#567eb7] py-1 px-3 rounded-md hover:bg-[#567eb7] hover:text-slate-50"
          >
            Open CV
          </button>
          <button
            type="button"
            className="text-lg font-semibold border-[2px] border-[#f62ede] py-1 px-3 rounded-md hover:bg-[#f62ede] hover:text-slate-50"
          >
            {" "}
            Let's chat
          </button>
        </div>
      </div>
      <div className=" flex items-center relative">
        <Mysvg />
      </div>
      <motion.div
        className="absolute left-[50%]"
        initial={{ bottom: 20 }}
        animate={{ bottom: 3 }}
        transition={{ repeat: "Infinity", duration: 0.8 }}
      >
        <ExpandCircleDown sx={{ fontSize: 35 }} />
      </motion.div>
    </div>
  );
};

export default Headline;
