import React, { useContext } from "react";
import Error from "../components/Error";
import Profile from "../components/Profile";
import { GlobalContext } from "../context/infoContext";

const Result = () => {
  const { error } = useContext(GlobalContext);

  return error ? <Error /> : <Profile />;
};

export default Result;
