import React, { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import { GlobalContext } from "../context/infoContext";
import Result from "./Result";

const GitHub = () => {
  const { user, isLoading, theme } = useContext(GlobalContext);

  useEffect(() => {
    document.body.classList.remove("dark");
    document.body.classList.add(`${theme ? "dark" : "light"}`);
    document.body.classList.remove("light");
  }, [theme]);

  return (
    <div className="h-screen bg-[#eaeffc] px-6 dark:bg-[#141C2F] md:px-44 lg:px-80">
      <Navbar />
      <SearchBox />
      {isLoading && <Loader />}
      {user && <Result />}
    </div>
  );
};

export default GitHub;
