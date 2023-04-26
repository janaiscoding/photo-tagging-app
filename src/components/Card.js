import React from "react";

function Card({ url, name }) {
  return (
    <>
      <div className="image-card">
        <h1>{name}</h1>
        <img src={url} alt={name} width={500} height={500}></img>
      </div>
    </>
  );
}

export default Card;
