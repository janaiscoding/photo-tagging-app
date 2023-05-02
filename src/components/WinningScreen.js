import React from "react";

const WinningScreen = ({ username, handleUsername, saveScore }) => {
  return (
    <>
      <div className="winning-main">
        <input
          type="text"
          value={username}
          onChange={(e) => handleUsername(e.target.value)}
        />
        <button onClick={saveScore}>Save Score</button>
      </div>
    </>
  );
};

export default WinningScreen;
