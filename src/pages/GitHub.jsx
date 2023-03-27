import React, { useContext, useEffect } from "react";
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
    document.body.style.background = `${theme ? "#141C2F" : "#eaeffc"}`;
  }, [theme]);

  return (
    <div className="max-w-5xl mx-auto h-screen bg-[#eaeffc] px-6 dark:bg-[#141C2F] sm:px-20 md:px-32 lg:px-40">
      <Navbar />
      <SearchBox />
      {isLoading && <Loader />}
      {user && <Result />}
    </div>
  );
};

export default GitHub;
