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
          id="charlie chaplin"
          alt="charlie chaplin"
          onClick={(e) => clickHandler(e)}
        ></area>
        <area
          shape="rect"
          coords="671,167,753,341"
          id="bruce lee"
          alt="bruce lee"
          onClick={(e) => clickHandler(e)}
        ></area>
        <area
          shape="rect"
          coords="1290,416,1372,561"
          id="abraham lincoln"
          alt="abraham lincoln"
          onClick={(e) => clickHandler(e)}
        ></area>
      </map>
    </>
  );
};

export default Mapper;
