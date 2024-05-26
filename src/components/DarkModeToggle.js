"use client";

import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkModeToggle() {
  const { setDarkMode,darkMode } = useContext(ThemeContext);
console.log(darkMode)

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md z-10"
    
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}