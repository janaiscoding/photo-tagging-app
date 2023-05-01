import React from "react";

const ListItem = ({ name, handleSelector }) => {
  return (
    <button className="item-name" onClick={() => handleSelector(name)}>
      {name}
    </button>
  );
};

export default ListItem;
