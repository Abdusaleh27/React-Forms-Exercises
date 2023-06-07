import React from "react";

const DeleteButton = ({handleClick}) => {
  return (
    <div className="delete-button">
      <button onClick={handleClick}>
        x
      </button>
    </div>
  );
};

export default DeleteButton;
