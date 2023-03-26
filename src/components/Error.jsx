import React from "react";
import Image from "../assets/404.svg";

const Error = () => {
  return (
    <div className="bg-white py-8 px-6 mt-6 rounded-lg shadow-sm dark:shadow-none dark:bg-[#1f2a48]">
      <div className="flex flex-col items-center justify-center">
        <img className="h-80 w-80" src={Image} alt="" />
        <span className="text-2xl dark:text-slate-100">No results found</span>
      </div>
    </div>
  );
};

export default Error;
