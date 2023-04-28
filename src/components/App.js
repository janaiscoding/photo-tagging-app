/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import Navbar from "../utilities/Navbar";
// import Footer from "../utilities/Footer";
import Home from "../pages/Home";
import Leaderboard from "../pages/Leaderboard";
import Contact from "../pages/Contact";

const App = () => {
  const [images, setImages] = useState([]);
  const [waldoImg, setWaldoImg] = useState([]);
  const [animeImg, setAnimeImg] = useState([]);
  const [danteImg, setDanteImg] = useState([]);

  const fetchImages = async () => {
    await getDocs(collection(db, "images")).then((querySnapshot) => {
      const newImages = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      //all 3 images
      setImages(newImages);
      //waldo only
      const fetchWaldo = images.find(
        ({ name }) => name === "Find the Waldo at the Beach"
      );
      setWaldoImg(fetchWaldo);
      // anime
      const fetchAnime = images.find(
        ({ name }) => name === "Find the Anime Character"
      );
      setAnimeImg(fetchAnime);
      // dante
      const fetchDante = images.find(
        ({ name }) => name === "Discussing the Divine Comedy with Dante"
      );
      setDanteImg(fetchDante);
    });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </HashRouter>
  );
};

export default App;
