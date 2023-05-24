
import image from "../assets/discussing-the-divine-comedy-with-dante.jpg";
import React, { useEffect } from "react";

const Mapper = ({ clickHandler, setTimerActive }) => {

  useEffect(() => {
    setTimerActive(true);
  }, [setTimerActive]);
  return (
    <div className="overflow-auto">
      <img
        src={image}
        alt="divine"
        onClick={(e) => clickHandler(e)}
        useMap="#image-map"
        className="max-w-fill"
      />
      <map name="image-map">
        <area
          shape="rect"
          coords="45,776,131,956"
          id="Charlie Chaplin"
          alt="Charlie Chaplin"
          onClick={(e) => clickHandler(e)}
        ></area>
        <area
          shape="rect"
          coords="671,167,753,341"
          id="Bruce Lee"
          alt="Bruce Lee"
          onClick={(e) => clickHandler(e)}
        ></area>
        <area
          shape="rect"
          coords="1290,416,1372,561"
          id="Abraham Lincoln"
          alt="Abraham Lincoln"
          onClick={(e) => clickHandler(e)}
        ></area>
      </map>
    </div>
  );
};

export default Mapper;
