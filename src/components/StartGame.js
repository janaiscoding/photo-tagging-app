import React from "react";

const StartGame = ({ startGame }) => {
  return (
    <div className="start-game-main">
      <div className="game-wrapper">
      <p className="game-info">find these 3 characters as fast as you can: </p>
      <button onClick={startGame}>Start Game</button>
      </div>
    </div>
  );
};

export default StartGame;
