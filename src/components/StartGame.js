import React from "react";

const StartGame = ({ targets, startGame }) => {
  const targetsList = targets.map((target) => {
    return (
      <div key={target.id} className="target-item-start-panel">
        <img src={target.img} alt={target.name} height={100} />
        <p>{target.name}</p>
      </div>
    );
  });
  return (
    <div className="start-game-main">
      <div className="game-wrapper">
        <p className="game-info">Find them as fast as you can!</p>
        <div className="targets-list-start-panel"> {targetsList}</div>
        <button onClick={startGame}>Start!</button>
      </div>
    </div>
  );
};

export default StartGame;
