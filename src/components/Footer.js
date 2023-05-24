/* eslint-disable jsx-a11y/aria-role */
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="min-h-[5vh] flex items-center gap-5 justify-center">
        <a
          href="https://github.com/janaiscoding"
          className="text-pink"
          rel="noopener noreferrer"
        >
          ©JanaIsCoding
        </a>
        <a
          href="https://www.lewiscarroll.org/2012/07/06/discussing-the-divine-comedy-with-dante-and-lewis-carroll/"
          className="text-pink"
          rel="noopener noreferrer"
        >
          Image Source
        </a>
      </footer>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default Footer;