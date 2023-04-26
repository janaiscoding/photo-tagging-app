/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import Navbar from "../utilities/Navbar";
import Home from "../pages/Home";
import Leaderboard from "../pages/Leaderboard";
import Contact from "../pages/Contact";

const App = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    await getDocs(collection(db, "images")).then((querySnapshot) => {
      const newImages = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setImages(newImages);
    });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home images={images}/>} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
