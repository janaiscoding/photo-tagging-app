/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import Navbar from "../utilities/Navbar";
import Footer from "../utilities/Footer";
import Home from "../pages/Home";
import Leaderboard from "../pages/Leaderboard";
import Contact from "../pages/Contact";
import FindAnime from "../games/FindAnime";
import FindDante from "../games/FindDante";
import FindWaldo from "../games/FindWaldo";

const App = () => {
  const [images, setImages] = useState([]);
  const [userXY, setUserXY] = useState([1001, 220]);

  const fetchImages = async () => {
    await getDocs(collection(db, "images")).then((querySnapshot) => {
      const newImages = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setImages(newImages);
    });
  };

  const getCoordinates = (e) => {
    let userX = e.clientX;
    let userY = e.clientY;
    setUserXY([userX, userY]);

    console.log(userXY);
    if (userX >= 1001 && userY >= 220 && userX <= 1053 && userY <= 306) {
      console.log("Waldo found");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              images={images}
              userXY={userXY}
              getCoordinates={getCoordinates}
            />
          }
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/find_anime"
          element={
            <FindAnime
              images={images}
              userXY={userXY}
              getCoordinates={getCoordinates}
            />
          }
        />
        <Route
          path="/find_dante"
          element={
            <FindDante
              images={images}
              userXY={userXY}
              getCoordinates={getCoordinates}
            />
          }
        />
        <Route
          path="/find_waldo"
          element={
            <FindWaldo
              images={images}
              userXY={userXY}
              getCoordinates={getCoordinates}
            />
          }
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
