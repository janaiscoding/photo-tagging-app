import React, { useEffect, useState } from "react";

const ListItem = ({ target, name, handleSelector }) => {
  const [color, setColor] = useState("#fff");
  useEffect(() => {
    if (target.isFound) {
      setColor("#000");
    }
  }, [target.isFound]);

  return (
    <button
      style={{ backgroundColor: color }}
      className="item-name"
      onClick={() => handleSelector(target)}
    >
      {name}
    </button>
  );
};

export default ListItem;
