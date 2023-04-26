import React from "react";

const FindDante = ({ images }) => {
  const danteImage = images.find(
    ({ name }) => name === "Discussing the Divine Comedy with Dante"
  );
  return (
    <>
      <h1> Find Dante Element</h1>
      <img src={danteImage.url} alt="Discussing the Divine Comedy with Dante"></img>
    </>
  );
};

export default FindDante;
