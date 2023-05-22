/* eslint-disable jsx-a11y/aria-role */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StartGame = ({ targets, startGame, handleTimer}) => {
  const targetsList = targets.map((target) => {
    return (
      <motion.div
        key={target.id}
        className="bg-blue p-3 flex flex-col rounded max-h-fit"
        whileHover={{ scale: 1.02 }}
        layoutId={target.id}
      >
        <a href={target.wikiLink} target="_blank" rel="noreferrer">
          <img src={target.img} alt={target.name} className="max-h-[150px]" />
        </a>
        <p className="text-[#fff] text-center">{target.name}</p>
      </motion.div>
    );
  });
  useEffect(()=>{
    handleTimer()
  },[])
  return (
    <>
      <div className="min-h-[90vh] bg-pink p-3 flex items-center justify-center">
        <motion.div
          className="flex flex-col justify-center bg-pink border border-solid border-grey p-5 rounded drop-shadow-md gap-5 items-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-3xl">Scroll everywhere in the image.</p>
          <p>Find them as fast as you can!</p>
          <div className="flex gap-3 w-fit"> {targetsList}</div>
          <div className="flex gap-3">
          <Link to="/game" onClick={startGame}>
            <button onClick={startGame}>Start!</button>
          </Link>
          <Link to="/leaderboard">
            <button className="">See Leaderboard</button>
          </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default StartGame;
