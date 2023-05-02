import React from "react";
import "../styles/navbar.css";

const Navbar = ({ targets, timer }) => {
  return (
    <>
      <nav className="nav-bar">
        <div className="timer"> Timer: {timer} </div>
      </nav>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default Navbar;
