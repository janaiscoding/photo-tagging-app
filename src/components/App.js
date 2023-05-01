/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Navbar from "../utilities/Navbar";
// import Footer from "../utilities/Footer";
// import Home from "../pages/Home";
import Leaderboard from "../pages/Leaderboard";
import Contact from "../pages/Contact";

//image handler
import Mapper from "./Mapper";
import { data } from "../assets/data";
import Selector from "./Selector";

const App = () => {
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

  const clickHandler = (e) => {
    // Set coordinates of the user click to pass onto the buttons list position.
    setClickCoord([e.pageX, e.pageY]);
    setTimerActive(true);
    // Check if a box already exists and removes in order to replace it with a new one
    const toDelete = document.getElementById("border-box");
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
      // Handles all modifications for target list
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
      console.log(`game won`);
      setTimerActive(false);
      // stops timer + stores time value
      // prompts for username + sends it with the timer to firebase "leaderboard"
      // prompt for reset game aka sets all the targets back to isFound false

    }
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
    <HashRouter>
      <Selector
        targets={targets}
        isVisible={isVisible}
        handleClearing={handleClearing}
        clickCoord={clickCoord}
        handleSelector={handleSelector}
      />
      <Navbar timer={timer} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Mapper clickHandler={clickHandler} />}
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </HashRouter>
  );
};

export default App;
