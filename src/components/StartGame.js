import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/game" onClick={startGame}>
          <button onClick={startGame}>Start!</button>
        </Link>
      </div>
    </div>
  );
};

export default StartGame;
