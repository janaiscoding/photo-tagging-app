import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default Navbar;