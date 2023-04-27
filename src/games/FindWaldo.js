import React from "react";

const FindWaldo = ({ images, getCoordinates}) => {
  const waldoImage = images.find(
    ({ name }) => name === "Find the Waldo at the Beach"
  );

  return (
    <>
      <h1> Find Waldo Element</h1>
      <img
        src={waldoImage.url}
        alt="Find the Waldo at the Beach"
        onClick={(e) => getCoordinates(e)}
      ></img>
    </>
  );
};

export default FindWaldo;
