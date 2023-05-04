import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import { Link } from "react-router-dom";

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
      // const recentLeaderboard = query(
      //   collection(db, "leaderboard"),
      //   orderBy("timer"),
      //   limit(15)
      // );
      // let tempArr = [];
      // onSnapshot(recentLeaderboard, (snapshot) => {
      //   snapshot.docChanges().forEach((change) => {
      //     let newScore = change.doc.data();
      //     console.log(newScore);
      //     tempArr.push(newScore);
      //     setScores(tempArr);
      //     console.log("on change i set the new array scores");
      //   });
      // });
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
    <div className="leaderboard">
      <div className="board-wrapper">
        <p className="leaderboard-title"> Hall of Fame</p>
        {allScores.length > 0 ? allScores : "Loading.."}
        <Link to="/">
          <button onClick={restartGame} className="leaderboard-button">
            Try again?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Leaderboard;
