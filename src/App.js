/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StartGame from "./components/StartGame";
import Leaderboard from "./components/Leaderboard";
import WinningScreen from "./components/WinningScreen";
// Image Handler
import Mapper from "./components/Mapper";
import { data } from "./assets/data";
import Selector from "./components/Selector";

const App = () => {
  // all dom elements:
  // 1. Visibility: Used for UI elements (border box, button list).
  // 2. User Click coordinates: Used for placing the target elements.
  // 3. Targets data: Used for handling the data for the buttons, for the user choices and for winning condition.
  // 4. Verifier: Only gets the map's areas id's to be able to check against user button click.
  // 5. Timer handling : Starts timer on first click and stops and records final time when the win condition was met.

  const [isVisible, setVisible] = useState(false);
  const [clickCoord, setClickCoord] = useState([0, 0]);
  const [targets, setTargets] = useState(data);
  const [verifier, setVerifier] = useState("");
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [username, setUsername] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);

  const startGame = () => {
    const startUI = document.querySelector(".start-game-main");
    const imageUI = document.querySelector(".image-game");
    // on the button click, this function will:
    // 1. remove the dom element that hovers the screen with the info and everything
    startUI.style.display = "none";
    // 2. display the image
    imageUI.style.display = "block";
    // 3. start the timer
    setTimerActive(true);
  };

  const clickHandler = (e) => {
    const toDelete = document.getElementById("border-box");
    // Set coordinates of the user click to pass onto the buttons list position.
    setClickCoord([e.pageX, e.pageY]);
    // Check if a box already exists and removes in order to replace it with a new one
    if (toDelete) {
      toDelete.remove();
    }
    // Enables visibility so it can shows UI elements from the first click
    if (!isVisible) {
      setVisible(true);
    }
    // Always makes a border on click
    createBorder(e);
    setVerifier(e.target.id);
  };

  // Fires when user clicks "close" button on the list items
  const handleClearing = () => {
    setVisible(false);
    setVerifier("");

    const toDelete = document.getElementById("border-box");

    if (toDelete) {
      toDelete.remove();
    }
  };
  const createBorder = (e) => {
    const borderBox = document.createElement("div");
    borderBox.id = "border-box";
    borderBox.style.left = e.pageX - 30 + "px";
    borderBox.style.top = e.pageY - 30 + "px";
    document.body.append(borderBox);
  };

  // Fires when user picks a choice from the list -> choice = target.name
  const handleSelector = (target) => {
    // Will check if it matches img map area id( aka. verifier) -> return feedback to user based on pick
    if (target.name === verifier) {
      console.log("you found", verifier);
      // show popup for finding "verifier"

      // sets the certain target to isfound = true and checks winning condition
      handleTargetList(target);
    } else {
      console.log("incorrect choice, try again");
    }
    // If it matches, i set it on the data as "found" and remove it from the buttons' contents "setTargets"

    // Cleans everything on the screen and resets verifier
    handleClearing();
  };

  // Sets the new updated game list and handles game winning condition
  const handleTargetList = (target) => {
    // Find the target index
    const targetIndex = targets.findIndex(
      (clickedTarget) => clickedTarget.id === target.id
    );
    // Create copy of the targets data
    const newTargets = targets.slice();
    // Sets isFound to true
    newTargets[targetIndex].isFound = true;
    console.log(`target list after you found 1 target:`, targets);
    // Sets new targets list to updated values
    setTargets(newTargets);

    // Should check if all are isFound = game won
    const isGameWon = targets.every((target) => target.isFound === true);
    if (isGameWon) {
      const imageUI = document.querySelector(".image-game");
      const winningUI = document.querySelector(".winning-main");
      console.log(`game won`);
      // stops timer
      setTimerActive(false);
      // hides image
      imageUI.style.display = "none";
      // shows winning screen for next step
      winningUI.style.display = "block";
    }
  };
  const saveScore = () => {
    console.log(username + "has found everything in" + timer + "miliseconds");
    //here i will send the data to firebase user: username time: timer
    // get back the data in order
    // send it to the leaderboard element
    //hide prompt
    const winningUI = document.querySelector(".winning-main");
    winningUI.style.display = "none";
    // showLeaderboard()
    const leaderboardUI = document.querySelector(".leaderboard");
    leaderboardUI.style.display = "block";
  };
  const handleUsername = (userInput) => {
    setUsername(userInput);
  };
  const restartGame = () => {
    //resets all targets
    const resetTargets = targets.slice();
    resetTargets.forEach((target) => (target.isFound = false));
    setTargets(resetTargets);
    console.log(targets);
    // set timer back to 0
    setTimer(0);
    // hides leaderboard again
    const leaderboardUI = document.querySelector(".leaderboard");
    leaderboardUI.style.display = "none";
    // goes back to start screen
    const startUI = document.querySelector(".start-game-main");
    startUI.style.display = "flex";
  };
  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setTimer((e) => e + 10);
      }, 10);
    } else if (!timerActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  return (
    <>
      <Selector
        targets={targets}
        isVisible={isVisible}
        handleClearing={handleClearing}
        clickCoord={clickCoord}
        handleSelector={handleSelector}
      />
      <Navbar targets={targets} timer={timer} />
      <StartGame targets={targets} startGame={startGame} />
      <WinningScreen
        username={username}
        handleUsername={handleUsername}
        saveScore={saveScore}
      />
      <Mapper clickHandler={clickHandler} />
      <Leaderboard leaderboard={leaderboard} restartGame={restartGame} />
      <Footer />
    </>
  );
};

export default App;
