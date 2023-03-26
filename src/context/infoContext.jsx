import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(true);

  const updateUser = (data) => {
    setUser(data);
  };

  const updateTheme = (data) => {
    setTheme(!theme);
  };

  const updateLoading = (data) => {
    setisLoading(data);
  };

  const errorHandler = (data) => {
    setError(data);
  };

  const contextValues = {
    user,
    updateUser,
    isLoading,
    updateLoading,
    updateTheme,
    theme,
    error,
    errorHandler,
  };

  return (
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  );
};
