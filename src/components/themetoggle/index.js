import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

// Theme toggle component to switch between dark and light mode
const Themetoggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const themetoggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    // window.location.reload();
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); 
  }, [theme]);

  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
