/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
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
    <>
      <div className="images-wrapper">
        {images.map((image) => (
          <Card name={image.name} url={image.url} key={image.id} />
        ))}
      </div>
    </>
  );
}

export default App;
