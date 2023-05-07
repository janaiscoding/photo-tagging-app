/* eslint-disable jsx-a11y/aria-role */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StartGame = ({ targets, startGame }) => {
  const targetsList = targets.map((target) => {
    return (
      <motion.div
        key={target.id}
        className="target-item-start-panel"
        whileHover={{ scale: 1.1 }}
        layoutId={target.id}
      >
        <a href={target.wikiLink} target="_blank" rel="noreferrer">
          <img src={target.img} alt={target.name} height={200} />
        </a>
      </motion.div>
    );
  });
  return (
    <>
      <div className="start-game-main">
        <motion.div
          className="game-wrapper"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="game-info">Find them as fast as you can!</p>
          <div className="targets-list-start-panel"> {targetsList}</div>
          <div className="button-wrapper">
          <Link to="/game" onClick={startGame}>
            <button onClick={startGame}>Start!</button>
          </Link>
          <Link to="/leaderboard">
            <button className="leaderboard-button">See Leaderboard</button>
          </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default StartGame;
