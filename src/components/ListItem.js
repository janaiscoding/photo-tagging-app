import React from "react";

const ListItem = ({ target, name, handleSelector }) => {
  return (
    <button className="item-name" onClick={() => handleSelector(target)}>
      {name}
    </button>
  );
};

export default ListItem;
