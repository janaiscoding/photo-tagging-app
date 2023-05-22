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
    <div className="bg-grey min-h-[90vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="rounded flex flex-col gap-3 justify-center items-center bg-pink border border-solid border-grey p-8 mx-3 drop-shadow-md text-center">
          <label htmlFor="username" className="flex flex-col items-center justify-center text-3xl text-red">
            Well done! Your score was {(timer / 1000).toFixed(2)}s.
            <p className="text-xl">Insert your name to enter the leaderboard:</p>
          </label>
          <input
          className="text-xs min-h-[2rem] border-none outline-none rounded py-1 px-3"
            type="text"
            name="username"
            value={username}
            onChange={(e) => handleUsername(e.target.value)}
            required
          />
          <div className="flex gap-3">
            <button className=" bg-[#fff]" type="submit">Save Score</button>
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
