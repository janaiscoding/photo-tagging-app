import React from "react";
//import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StartGame = ({ targets, startGame }) => {
  //const [selectedId, setSelectedId] = useState(null);

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
          <Link to="/game" onClick={startGame}>
            <motion.button
              onClick={startGame}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Start!
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default StartGame;
