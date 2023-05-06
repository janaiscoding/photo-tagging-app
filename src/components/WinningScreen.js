import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const WinningScreen = ({
  username,
  timer,
  handleUsername,
  saveScore,
  restartGame,
}) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (timer !== 0) {
      saveScore();
      navigate("/leaderboard", { replace: true });
    } else {
      alert("Timer cannot be 0, sending you back to start page...");
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="winning-main">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="form-details">
            Well done! Your score was {(timer / 1000).toFixed(2)}s.
            <p>Insert your name to enter the leaderboard:</p>
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => handleUsername(e.target.value)}
            required
          />
          <div className="button-wrapper">
            <button type="submit">Save Score</button>
            <Link to="/">
              <button onClick={restartGame} className="leaderboard-button">
                Try again?
              </button>
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default WinningScreen;
