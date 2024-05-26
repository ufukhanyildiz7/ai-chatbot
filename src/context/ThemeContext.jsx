"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function ThemeProvider({ children } ){
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  return (
    <ThemeContext.Provider value={{ toggleDarkMode,darkMode, setDarkMode }}>
     <main className={darkMode ? "dark" : ""}>{children}</main>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };