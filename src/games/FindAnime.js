import React from "react";

const FindAnime = ({ images }) => {
  const animeImage = images.find(
    ({ name }) => name === "Find the Anime Character"
  );
  return (
    <>
      <h1> Find Anime Element</h1>
      <img src={animeImage.url} alt="Find the Anime Character"></img>
    </>
  );
};

export default FindAnime;
