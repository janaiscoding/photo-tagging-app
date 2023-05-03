import React from "react";
import { Link } from "react-router-dom";

const WinningScreen = ({ username, timer, handleUsername, saveScore }) => {
  return (
    <div className="winning-main">
      <form onSubmit={saveScore}>
        <label htmlFor="username">
          Well done! Your score was {(timer / 1000).toFixed(2)}s. Insert your
          name to enter the leaderboard:
        </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => handleUsername(e.target.value)}
          required
        />
        <button type="submit">
        Save Score
          {/* <Link to="/leaderboard">Save Score </Link> */}
        </button>
      </form>
    </div>
  );
};

export default WinningScreen;
