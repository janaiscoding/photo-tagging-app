import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ targets, timer, handleTimer }) => {
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
        <Link to="/" onClick={handleTimer}>
          Play the game!
        </Link>
        {timer === 0 ? (
          ""
        ) : (
          <>
            <div className="targets-list-nav-bar">{targetsList}</div>
            <div className="timer"> Timer: {(timer / 1000).toFixed(2)} s </div>
          </>
        )}
      </nav>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default Navbar;
