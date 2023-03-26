import React from "react";

const Statics = ({ title, count }) => {
  return (
    <div className="text-center">
      <h1 className="text-gray-500 dark:text-gray-400">{title}</h1>
      <div className="text-lg text-gray-600 font-bold dark:text-slate-100">
        {count}
      </div>
    </div>
  );
};

export default Statics;
