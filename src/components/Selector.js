import React, { useEffect } from "react";
import ListItem from "./ListItem";

const Selector = ({
  clickCoord,
  targets,
  isVisible,
  handleSelector,
  handleVisibility,
}) => {
  const allItems = targets.map((target) => (
    <ListItem
      name={target.name}
      key={target.id}
      handleSelector={handleSelector}
    />
  ));
  useEffect(() => {
    const selBox = document.querySelector(".selecting-box");
    if (selBox) {
      selBox.style.position = "absolute";
      selBox.style.fontSize = "48px";
      selBox.style.left = clickCoord[0] + 50 + "px";
      selBox.style.top = clickCoord[1] + 50 + "px";
    }
  });

  return (
    <>
      {isVisible ? (
        <div className="selecting-box">
          {allItems}
          <button onClick={handleVisibility}>Close</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Selector;
