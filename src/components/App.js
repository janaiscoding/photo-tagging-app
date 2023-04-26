import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function App() {
  const [item, setItem] = useState("");

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "items"), {
        item: item,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="title">Initialize Firebase App</div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setItem(e.target.value);
            console.log(item);
          }}
        ></input>
      </div>
      <button type="submit" onClick={addItem}>
        Submit
      </button>
    </>
  );
}

export default App;
