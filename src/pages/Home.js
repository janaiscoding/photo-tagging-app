import React from "react";
import Card from "../components/Card";
const Home = ({ images }) => {
  const allImgs = images.map((image) => (
    <Card name={image.name} url={image.url} key={image.id} />
  ));

  return (
    <>
      <h1> Home Element</h1>
      <div>{allImgs}</div>
    </>
  );
};

export default Home;
