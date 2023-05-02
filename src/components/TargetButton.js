import React from "react";

const TargetButton = ({ target, handleSelector }) => {
  return (
    <button className="item-name" onClick={() => handleSelector(target)}>
      {target.name}
    </button>
  );
};

export default TargetButton;
