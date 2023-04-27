import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = ({ images }) => {
  const allImgs = images.map((image) => (
    <div className="image-card" key={image.id}>
      <Link to={image.link}>
        <img src={image.url} alt={image.name} width={500} height={500}></img>
      </Link>
      <h1 className="image-name">{image.name}</h1>
    </div>
  ));

  return (
    <div className="home-main">
      <h1 className="home-title"> Home Element</h1>
      <div className="card-wrapper">{allImgs}</div>
    </div>
  );
};

export default Home;
