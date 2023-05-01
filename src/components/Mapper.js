import image from "../assets/discussing-the-divine-comedy-with-dante.jpg";

import React from "react";

const Mapper = ({ clickHandler }) => {
  return (
    <>
      <img
        src={image}
        alt="divine"
        onClick={(e) => clickHandler(e)}
        useMap="#image-map"
      />
      <map name="image-map">
        <area
          shape="rect"
          coords="45,776,131,956"
          id="charlie"
          alt="Charlie"
          onClick={(e) => clickHandler(e)}
        ></area>
      </map>
    </>
  );
};

export default Mapper;
