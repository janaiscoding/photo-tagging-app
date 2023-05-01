import image from "../assets/discussing-the-divine-comedy-with-dante.jpg";

import React from "react";

const Mapper = ({clickHandler}) => {
  return <img src={image} alt="divine" onClick={(e) => clickHandler(e)} />;
};

export default Mapper;
