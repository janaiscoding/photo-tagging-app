/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Navbar from "../utilities/Navbar";
// import Footer from "../utilities/Footer";
// import Home from "../pages/Home";
import Leaderboard from "../pages/Leaderboard";
import Contact from "../pages/Contact";
//image handler
import Mapper from "./Mapper";

const App = () => {
  const clickHandler = (e) => {
    const toDelete = document.getElementById("border-box");
    if (toDelete) {
      toDelete.remove();
    }
    console.log(e.pageX, e.pageY);
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
  
  return (
    <HashRouter>
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
