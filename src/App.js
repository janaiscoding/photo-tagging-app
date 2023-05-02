/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
// import Footer from "../utilities/Footer";
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

  const startGame = () => {
    const startUI = document.querySelector(".start-game-main");
    const imageUI = document.querySelector(".image-game");
    // on the button click, this function will:
    // 1. remove the dom element that hovers the screen with the info and everything
    startUI.style.display = "none";
    // 2. display the image
    imageUI.style.display = "block";
    // 3. start the timer
    startTimer();
  };
  const startTimer = () => {
    setTimerActive(true);
  };
  const stopTimer = () => {
    setTimerActive(false);
    console.log(timer);
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
    borderBox.style.position = "absolute";
    borderBox.style.width = "70px";
    borderBox.style.height = "70px";
    borderBox.style.left = e.pageX - 30 + "px";
    borderBox.style.top = e.pageY - 30 + "px";
    borderBox.style.border = "2px solid black";
    borderBox.style.borderRadius = "50%";
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
    console.log(targets);
    // Sets new targets list to updated values
    setTargets(newTargets);

    // Should check if all are isFound = game won
    const isGameWon = targets.every((target) => target.isFound === true);
    if (isGameWon) {
      const imageUI = document.querySelector(".image-game");
      const winningUI = document.querySelector(".winning-main");
      console.log(`game won`);
      // stops timer
      stopTimer();
      // hides image

      imageUI.style.display = "none";
      // shows winning screen
      winningUI.style.display = "block";
      // prompt for reset game aka sets all the targets back to isFound false
    }
  };
  const saveScore = (winner, score) => {
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
      <Navbar timer={timer} />
      <StartGame startGame={startGame} />
      <WinningScreen
        username={username}
        handleUsername={handleUsername}
        saveScore={saveScore}
      />
      <Mapper clickHandler={clickHandler} />
      <Leaderboard />
      {/* <Footer /> */}
    </>
  );
};

export default App;
