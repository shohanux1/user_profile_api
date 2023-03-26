import React from "react";

const Loader = () => {
  return (
    <div className="animate-pulse bg-white py-8 px-6 mt-6 rounded-lg shadow-lg shadow-gray-300 dark:shadow-none dark:bg-[#1f2a48]">
      <div className="flex items-center gap-6">
        <div className="h-20 bg-gray-300 w-20 object-cover rounded-full"></div>

        <div className="flex flex-col gap-2">
          <div className="bg-gray-300 h-4 w-36 rounded-full dark:text-[#f0f1f2]"></div>
          <div className="bg-gray-300 h-4 w-24  rounded-full dark:text-[#f0f1f2]"></div>
          <div className="bg-gray-300 h-4 w-32 rounded-full dark:text-[#f0f1f2]"></div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-6">
        <div className="bg-gray-300 h-4 rounded-full dark:text-[#f0f1f2]"></div>
        <div className="bg-gray-300 h-4 rounded-full dark:text-[#f0f1f2]"></div>
        <div className="bg-gray-300 h-4 rounded-full dark:text-[#f0f1f2]"></div>
      </div>
    </div>
  );
};

export default Loader;
