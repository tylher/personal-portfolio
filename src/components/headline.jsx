import React from "react";
import Mysvg from "./mysvg";

const Headline = () => {
  return (
    <div className="flex gap-[20px] justify-between px-20 mt-[40px]">
      <div className="w-[50%] text-gray-600 text-lg  font-[500] flex flex-col">
        <p className="text-4xl flex font-medium gap-3">
          {" "}
          Hello, I am <p class="text-[#567eb7] font-bold">Damola</p>
        </p>
        <h3 className="text-6xl font-bold text-[#f62ede]">
          Full-stack Web Developer
        </h3>
        <p className="text-lg italic my-5 font-semibold">
          {" "}
          Crafting and delivering state-of-the-art software solutions to help
          drive innovation through full-stack expertise.
        </p>
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
      <div className=" flex items-center">
        <Mysvg />
      </div>
    </div>
  );
};

export default Headline;
