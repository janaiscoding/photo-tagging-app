import React from "react";

const Leaderboard = ({restartGame}) => {
  return (
    <div className="leaderboard">
      <h1> Leaderboard Element</h1>
      <p> here i will list all based on firebase data</p>
      <button onClick={restartGame}>Restart?</button>
    </div>
  );
};

export default Leaderboard;
