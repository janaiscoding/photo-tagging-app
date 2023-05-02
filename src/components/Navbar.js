import React from "react";
import "../styles/navbar.css";

const Navbar = ({ targets, timer }) => {
  const targetsList = targets.map((target) => {
    if (!target.isFound) {
      return (
        <p key={target.id} className="not-found">
          {target.name}
        </p>
      );
    } else {
      return (
        <p key={target.id} className="found">
          {target.name}
        </p>
      );
    }
  });
  return (
    <>
      <nav className="nav-bar">
        <div className="timer">{targetsList}</div>
        <div className="timer"> Timer: {timer} </div>
      </nav>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default Navbar;
