import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ timer, handleTimer }) => {

  return (
    <>
      <nav className="bg-dark-blue flex justify-center items-center px-10 min-h-[5vh] gap-5">
        <Link to="/" className="text-base font-bold text-orange" onClick={handleTimer}>
          Play the game!
        </Link>
        {timer === 0 ? (
          ""
        ) : (
          <>
            <div className="text-base text-orange"> {(timer / 1000).toFixed(2)} s </div>
          </>
        )}
      </nav>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default Navbar;
