import React, { useContext } from "react";
import ThemeContext from "../context/context";

const Theme = () => {
  //   const { theme, themeToggling } = useContext(ThemeContext);
  //   const themeClickHandler = () => {
  //     themeToggling();
  //   };
  return (
    <div
      className={`flex h-screen flex-col items-center justify-center ${
        theme === "light" ? "bg-red-600 text-black" : "bg-black text-white"
      }`}
    >
      <button className="cursor-pointer " onClick={themeClickHandler}>
        Toggle Theme
      </button>
      {theme}
    </div>
  );
};

export default Theme;
