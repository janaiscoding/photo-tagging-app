import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Leaderboard = ({ restartGame }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const querySnapshot = await getDocs(collection(db, "leaderboard"));
        let tempArr = [];
        querySnapshot.forEach((doc) => {
          tempArr.push(doc.data());
        });
        tempArr.sort((a, b) => a.timer - b.timer);
        tempArr = tempArr.filter((a) => a.timer !== 0);
        setScores(tempArr);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  let allScores = scores.map((entry, i) => {
    return (
      <div key={i} className="board-entry">
        <p className="username">
          {i + 1}. {entry.username}
        </p>
        <p className="timer">{(entry.timer / 1000).toFixed(2)} s</p>
      </div>
    );
  });
  return (
    <div className="min-h-[90vh] flex items-center justify-center p-3 bg-pink">
      <motion.div
        className="board-wrapper"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="leaderboard-title"> Hall of Fame</p>
        {allScores.length > 0 ? allScores : "Loading.."}
        <Link to="/">
          <button onClick={restartGame} className="leaderboard-button">
            Try again?
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Leaderboard;
