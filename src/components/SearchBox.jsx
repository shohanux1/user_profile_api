import React, { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GlobalContext } from "../context/infoContext";
import Suggestion from "./Suggestion";

const SearchBox = () => {
  const [username, setUsername] = useState("shohanux1");
  const [searchTerm, setSearchTerm] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const { updateUser, updateLoading, isLoading, errorHandler } =
    useContext(GlobalContext);

  const handleChange = (e) => {
    setUsername(e.target.value);
    setIsOpen(true);
  };

  const handleSubmit = async () => {
    try {
      updateUser(null);
      errorHandler(false);
      updateLoading(true);
      setIsOpen(false);
      const data = await fetchData();
      if (data.message) {
        errorHandler(true);
      }
      updateUser(data);
      updateLoading(false);
      setError(false);
    } catch (error) {
      updateLoading(false);
    }
  };

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (username) {
        const data = await fetchData();
        if (!data.message) {
          setSearchTerm(data);
        } else {
          setSearchTerm(null);
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <div className="flex items-center bg-white p-2 rounded-lg shadow-md shadow-gray-300 dark:shadow-none dark:bg-[#1f2a48] dark:text-white">
        <div
          onClick={handleSubmit}
          className="text-blue-500 p-2 flex items-center justify-center cursor-pointer"
        >
          <BiSearch size={25} />
        </div>
        <input
          value={username}
          onChange={handleChange}
          className="w-full outline-none bg-transparent py-2"
          type="text"
          required
          placeholder="Search Github username..."
        />

        <button
          disabled={isLoading}
          onClick={handleSubmit}
          className="bg-blue-500 transition text-white py-2 px-3 rounded-md disabled:cursor-not-allowed disabled:bg-blue-400 hover:bg-blue-400"
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>
      {isOpen && searchTerm && username && (
        <Suggestion
          handleSubmit={handleSubmit}
          setIsOpen={setIsOpen}
          searchTerm={searchTerm}
        />
      )}
    </>
  );
};

export default SearchBox;
