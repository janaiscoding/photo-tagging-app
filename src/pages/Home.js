import React from "react";
// import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = ({image}) => {
  console.log(image.src)
  return (
    <div className="home-main">
      <h1 className="home-title"> WALDO </h1>
      <div className="card-wrapper">
        <img src={image.src} alt="waldo pic at the beach" ></img>
      </div>
    </div>
  );
};

export default Home;
