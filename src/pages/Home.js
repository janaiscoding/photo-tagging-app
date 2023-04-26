import React from "react";
import { Link } from "react-router-dom";

const Home = ({ images }) => {
  const allImgs = images.map((image) => (
    <div className="image-card" key={image.id}>
      <Link to={image.link}>
        <h1>{image.name}</h1>
        <img src={image.url} alt={image.name} width={500} height={500}></img>
      </Link>
    </div>
  ));

  return (
    <>
      <h1> Home Element</h1>
      <div>{allImgs}</div>
    </>
  );
};

export default Home;
