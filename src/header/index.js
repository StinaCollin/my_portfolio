import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import ExpandedNavbar from "./ExpandedNavbar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const [isExpanded, setExpanded] = useState(false); // State för att hantera utökningen av menyn

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

    // Funktion för att hantera utökningen av menyn
    const handleExpand = () => {
      setExpanded(!isExpanded);
    };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
        <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <div  className="theme-toggle-btn" title="Dark /Light Mode">
            <Themetoggle />
            </div>
                <div className="expand__button" onClick={handleExpand}>
                <div className="arrow-left" title="Expand NavBar Menu">
                {/* Villkorsstyrd rendering för att välja rätt ikon för öppen eller stängd */}
              {isExpanded ? (
                <KeyboardArrowRightIcon style={{ marginRight: "12px", fontSize: "30px", color: "var(--text-color-2)" }} />
              ) : (
                <KeyboardArrowLeftIcon style={{ marginRight: "12px", fontSize: "30px", color: "var(--text-color-2)" }} />
              )}
              </div>
            </div>
            {isExpanded && <ExpandedNavbar handleToggle={handleToggle} />}
            {/* Visa endast hamburgermenyknappen om menyn inte är vald att utökas */}
            {!isExpanded && (
              <button
              className="menu__button nav_ac"
              onClick={handleToggle}
              title="Hamburger Menu"
            >
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
            )}
          </div>
        </div>

        <div className={`menu-info ${isExpanded ? "show" : ""}`}>
        </div>

        {/* Visa menyn eller den utökade menyn beroende på isActive-tillstånd */}
        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.facebook}>Facebook</a>
            <a href={socialprofils.github}>Github</a>
            {/* <a href={socialprofils.twitter}>Twitter</a> */}
            </div>
            <p className="copyright m-0">Copyright __ {logotext}</p>
          </div>
        </div> 
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>  
    </>
  );
};

export default Headermain;
