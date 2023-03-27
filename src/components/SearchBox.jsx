import React, { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GlobalContext } from "../context/infoContext";

const SearchBox = () => {
  const [username, setUsername] = useState("shohanux1");
  const { updateUser, updateLoading, isLoading, errorHandler } =
    useContext(GlobalContext);

  const handleSubmit = async () => {
    try {
      updateUser(null);
      errorHandler(false);
      updateLoading(true);
      await fetchData();
      updateLoading(false);
      setError(false);
    } catch (error) {
      updateLoading(false);
    }
  };

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    if (data.message) {
      errorHandler(true);
    }
    updateUser(data);
  };

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
          onChange={(e) => setUsername(e.target.value)}
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
    </>
  );
};

export default SearchBox;
