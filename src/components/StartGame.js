import React from "react";

const StartGame = ({ targets, startGame }) => {
  const targetsList = targets.map((target) => {
    return (
      <img key={target.id} src={target.img} alt={target.name} height={100} />
    );
  });
  return (
    <div className="start-game-main">
      <div className="game-wrapper">
        <p className="game-info">find these 3 characters as fast as you can</p>
        <div> {targetsList}</div>
        <button onClick={startGame}>Start Game</button>
      </div>
    </div>
  );
};

export default StartGame;
