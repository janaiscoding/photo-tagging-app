import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StartGame from "./components/StartGame";
import Leaderboard from "./components/Leaderboard";
import WinningScreen from "./components/WinningScreen";
// Image Handler
import Mapper from "./components/Mapper";
import { data } from "./assets/data";
import SelectionBox from "./components/SelectionBox";
// Database Handle
import db from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const App = () => {
  // all dom elements:
  // 1. Visibility: Used for UI elements (border box, button list).
  // 2. User Click coordinates: Used for placing the target elements.
  // 3. Targets data: Used for handling the data for the buttons, for the user choices and for winning condition.
  // 4. Verifier: Only gets the map's areas id's to be able to check against user button click.
  // 5. Timer handling : Starts timer on first click and stops and records final time when the win condition was met.

  const [isVisible, setVisible] = useState(false);
  const [clickCoord, setClickCoord] = useState([0, 0]);
  const [targets] = useState(data);
  const [verifier, setVerifier] = useState("");
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [username, setUsername] = useState("");
  const [scores, setScores] = useState([]);

  const startGame = () => {
    const startUI = document.querySelector(".start-game-main");
    const imageUI = document.querySelector(".image-game");
    // on the button click, this function will:
    // 1. remove the dom element that hovers the screen with the info and everything
    startUI.style.display = "none";
    // 2. display the image
    imageUI.style.display = "block";
    // 3. start the timer
    setTimerActive(true);
  };
  // const startTimer = () => {
  //   let interval;
  //   if (timerActive) {
  //     interval = setInterval(() => {
  //       setTimer((e) => e + 10);
  //     }, 10);
  //   } else if (!timerActive) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // };
  const clickHandler = (e) => {
    const borderBox = document.getElementById("border-box");
    // Set coordinates of the user click to pass onto the buttons list position.
    setClickCoord([e.pageX, e.pageY]);
    // Check if a box already exists and removes in order to replace it with a new one
    if (borderBox) {
      borderBox.remove();
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
    const borderBox = document.getElementById("border-box");
    if (borderBox) {
      borderBox.remove();
    }
  };
  const createBorder = (e) => {
    const borderBox = document.createElement("div");
    borderBox.id = "border-box";
    borderBox.style.left = e.pageX - 30 + "px";
    borderBox.style.top = e.pageY - 30 + "px";
    document.body.append(borderBox);
  };
  const createPopup = (target, type) => {
    if (type === "match") {
      const popupAlert = document.createElement("div");
      popupAlert.innerText = `You found ${target.name}`;
      popupAlert.id = "popup";
      popupAlert.style.left = clickCoord[0] + 30 + "px";
      popupAlert.style.top = clickCoord[1] + 30 + "px";
      document.body.append(popupAlert);
      setTimeout(() => {
        popupAlert.remove();
      }, 1000);
    } else {
      const popupAlert = document.createElement("div");
      popupAlert.innerText = `That was not ${target.name}`;
      popupAlert.id = "popup";
      popupAlert.style.left = clickCoord[0] + 30 + "px";
      popupAlert.style.top = clickCoord[1] + 30 + "px";
      document.body.append(popupAlert);
      setTimeout(() => {
        popupAlert.remove();
      }, 1000);
    }
  };

  // Fires when user picks a choice from the list -> choice = target.name
  const handleSelector = (target) => {
    // Will check if it matches img map area id( aka. verifier) -> return feedback to user based on pick
    if (target.name === verifier) {
      // Show pop-up alert for matching a target element
      createPopup(target, "match");
      // Handles targets for isFound
      target.isFound = true;
      // Checks winning condition
      checkWin();
    } else {
      createPopup(target, "notmatch");
    }
    // Cleans everything on the screen and resets verifier
    handleClearing();
  };

  // Sets the new updated game list and handles game winning condition
  const checkWin = () => {
    // Should check if all are isFound = game won
    const isGameWon = targets.every((target) => target.isFound === true);
    if (isGameWon) {
      // Stops timer
      setTimerActive(false);
      // Waits for everything to clean
      setTimeout(() => {
        const imageUI = document.querySelector(".image-game");
        const winningUI = document.querySelector(".winning-main");
        // hides image
        imageUI.style.display = "none";
        // shows winning screen for next step
        winningUI.style.display = "flex";
      }, 1100);
    }
  };

  const saveScore = async (e) => {
    e.preventDefault();
    //here i will send the data to firebase user: username time: timer
    try {
      await addDoc(collection(db, "leaderboard"), {
        username: username,
        timer: timer,
      });
    } catch (error) {
      console.error("Error writing new leaderboard entry", error);
    }
    getData();
    //hide prompt
    const winningUI = document.querySelector(".winning-main");
    winningUI.style.display = "none";
    const leaderboardUI = document.querySelector(".leaderboard");
    leaderboardUI.style.display = "flex";
  };

  const handleUsername = (userInput) => {
    setUsername(userInput);
  };

  const restartGame = () => {
    // Resets all targets
    targets.forEach((target) => (target.isFound = false));
    // set timer back to 0
    setTimer(0);
    // hides leaderboard again
    const leaderboardUI = document.querySelector(".leaderboard");
    leaderboardUI.style.display = "none";
    // goes back to start screen
    const startUI = document.querySelector(".start-game-main");
    startUI.style.display = "flex";
  };
  async function getData() {
    try {
      const querySnapshot = await getDocs(collection(db, "leaderboard"));
      let tempArr = [];
      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
      });
      tempArr.sort((a, b) => a.timer - b.timer);
      tempArr = tempArr.filter((a) => a.timer !== 0);
      setScores(tempArr);
    } catch (err) {
      console.log(err);
    }
  }
  // Timer Handler
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
      <SelectionBox
        targets={targets}
        isVisible={isVisible}
        handleClearing={handleClearing}
        clickCoord={clickCoord}
        handleSelector={handleSelector}
      />
      <Navbar targets={targets} timer={timer} restartGame={restartGame} />
      <StartGame targets={targets} startGame={startGame} />
      <WinningScreen
        username={username}
        timer={timer}
        handleUsername={handleUsername}
        saveScore={saveScore}
      />
      <Mapper clickHandler={clickHandler} />
      <Leaderboard scores={scores} restartGame={restartGame} />
      <Footer />
    </>
  );
};

export default App;
