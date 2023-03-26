import React from "react";

const ProfileLink = ({ Icon, title }) => {
  return (
    <div className="flex items-center mb-3 gap-3 text-gray-500 dark:text-slate-300">
      <Icon size={20} />
      <p className="text-gray-400 dark:text-slate-300">{title}</p>
    </div>
  );
};

export default ProfileLink;
