/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
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
  // selector helper
  const [isVisible, setVisible] = useState(false);
  const [clickCoord, setClickCoord] = useState([0, 0]);
  const [targets, setTargets] = useState(data);

  const clickHandler = (e) => {
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
  };

  const handleVisibility = () => {
    setVisible(false);
    const toDelete = document.getElementById("border-box");
    if (toDelete) {
      toDelete.remove();
    }
  };

  const createBorder = (e) => {
    const borderBox = document.createElement("div");
    borderBox.id = "border-box";
    borderBox.style.position = "absolute";
    borderBox.style.width = "100px";
    borderBox.style.height = "100px";
    borderBox.style.left = e.pageX - 50 + "px";
    borderBox.style.top = e.pageY - 50 + "px";
    borderBox.style.opacity = 0.5;
    borderBox.style.border = "3px solid black";
    borderBox.style.borderRadius = "50%";
    document.body.append(borderBox);
  };
  const handleSelector = (option) => {
    console.log(option);
    //picks the button's content
    //will check if it matches img map -> return feedback to user based on pick
    //if it matches, i set it on the data as "found" and remove it from the buttons' contents "setTargets"
  };

  return (
    <HashRouter>
      <Selector
        targets={targets}
        isVisible={isVisible}
        handleVisibility={handleVisibility}
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
