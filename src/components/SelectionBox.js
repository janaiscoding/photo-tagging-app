import React, { useEffect } from "react";
import TargetButton from "./TargetButton";

const SelectionBox = ({
  clickCoord,
  targets,
  isVisible,
  handleSelector,
  handleClearing,
}) => {
  // eslint-disable-next-line array-callback-return
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
      selBox.style.left = clickCoord[0] + 50 + "px";
      selBox.style.top = clickCoord[1] + 50 + "px";
    }
  });

  return (
    <>
      {isVisible ? (
        <div className="selection-box">
          {toBeFoundButtons}
          <button className="close-button" onClick={handleClearing}>
            Close
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SelectionBox;
