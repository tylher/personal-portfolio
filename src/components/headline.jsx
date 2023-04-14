import React from "react";
import Mysvg from "./mysvg";

const Headline = () => {
  return (
    <div className="flex items-center gap-[20px] justify-between px-20">
      <div className="w-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        maiores commodi obcaecati voluptatem nemo illum vitae laboriosam placeat
        ullam veniam aliquam quia dolor delectus dicta asperiores deleniti modi
        totam. A!
      </div>
      <div className=" flex items-center">
        <Mysvg />
      </div>
    </div>
  );
};

export default Headline;
