import React from "react";
import { Link } from "react-router-dom";

const ExpandedNavbar = ({ handleToggle }) => {
  return (
    <div className="ny-navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/* <button onClick={handleToggle}>Close</button> */}
    </div>
  );
};

export default ExpandedNavbar;
