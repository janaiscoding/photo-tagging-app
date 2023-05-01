/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
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
  // Game helpers
  // Visibility for UI elements
  const [isVisible, setVisible] = useState(false);
  // User Click coordinates: used for placing the targets elements
  const [clickCoord, setClickCoord] = useState([0, 0]);
  // Targets data: used for handling the buttons for user choices
  const [targets, setTargets] = useState(data);
  // Verifier: only gets the map's areas id's to be able to check against user button click
  const [verifier, setVerifier] = useState("");

  const clickHandler = (e) => {
    console.log(e);
    //on click i: 1. store coordinates of the user click
    setClickCoord([e.pageX, e.pageY]);
    // check if a box already exists
    const toDelete = document.getElementById("border-box");
    if (toDelete) {
      toDelete.remove();
    }
    if (!isVisible) {
      setVisible(true);
    }
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
    borderBox.style.width = "80px";
    borderBox.style.height = "80px";
    borderBox.style.left = e.pageX - 50 + "px";
    borderBox.style.top = e.pageY - 50 + "px";
    borderBox.style.opacity = 0.5;
    borderBox.style.border = "3px solid black";
    borderBox.style.borderRadius = "50%";
    document.body.append(borderBox);
  };

  // Fires when user picks a choice from the list -> choice = target.name
  const handleSelector = (target) => {
    console.log(`u have clicked`, target);

    // First it picks the clicked button's content
    // Will check if it matches img map area id( aka. verifier) -> return feedback to user based on pick
    if (verifier === target.name) {
      console.log("you found", verifier);
      handleTargetList(target);
    } else {
      console.log("incorrect choice");
    }
    // If it matches, i set it on the data as "found" and remove it from the buttons' contents "setTargets"

    // Cleans everything on the screen and resets verifier
    handleClearing();
  };
  const handleTargetList = (target) => {
    const targetIndex = targets.findIndex(
      (clickedTarget) => clickedTarget.id === target.id
    );
    const newTargets = targets.slice();
    newTargets[targetIndex].isFound = true;
    console.log(targets)
    setTargets(newTargets);
  };

  return (
    <HashRouter>
      <Selector
        targets={targets}
        isVisible={isVisible}
        handleClearing={handleClearing}
        clickCoord={clickCoord}
        handleSelector={handleSelector}
      />
      <Navbar />
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
