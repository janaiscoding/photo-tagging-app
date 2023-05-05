/* eslint-disable array-callback-return */

import React, { useEffect } from "react";
import TargetButton from "./TargetButton";

const SelectionBox = ({
  clickCoord,
  targets,
  isVisible,
  handleSelector,
  handleClearing,
}) => {
  const toBeFoundButtons = targets.map((target) => {
    if (!target.isFound) {
      return (
        <TargetButton
          target={target}
          key={target.id}
          handleSelector={handleSelector}
        />
      );
    }
  });
  useEffect(() => {
    const selBox = document.querySelector(".selection-box");
    if (selBox) {
      if (clickCoord[1] <= 800) {
        selBox.style.left = clickCoord[0] + 20 + "px";
        selBox.style.top = clickCoord[1] + 20 + "px";
      } else if (clickCoord[1] > 800) {
        selBox.style.left = clickCoord[0] + 50 + "px";
        selBox.style.top = clickCoord[1] - 150 + "px";
      }
    }
  });

  return (
    <>
      {isVisible ? (
        <div className="selection-box">
          <div className="close-button" onClick={handleClearing}>
            x
          </div>
          <div className="targets-wrapper"> {toBeFoundButtons} </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SelectionBox;
