import React, { useContext } from "react";
import { GlobalContext } from "../context/infoContext";
import { HiSun, HiMoon } from "react-icons/hi";

const Navbar = () => {
  const { theme, updateTheme } = useContext(GlobalContext);

  return (
    <div className="flex items-center justify-between py-6">
      <p className="text-2xl font-semibold text-gray-700 dark:text-[#f0f1f2]">
        devfinder
      </p>
      <div
        onClick={() => updateTheme(!theme)}
        className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-[#f0f1f2]"
      >
        {theme ? (
          <>
            <p>LIGHT</p> <HiSun />
          </>
        ) : (
          <>
            <p>DARK</p> <HiMoon />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
