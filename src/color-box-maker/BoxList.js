import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import "./BoxList.css"
import DeleteButton from "./DeleteButton";
const BoxList = () => {
  const INITIAL_STATE = [];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const makeBox = (boxItem) => {
    setBoxes((allBoxes) => [...allBoxes, { ...boxItem, id: uuid() }]);
  };
  const handleClick = (target) => {
    const filtered = boxes.filter((box) => box !== target);
    setBoxes(filtered);
  }
  return (
    <div>
      <NewBoxForm makeBox={makeBox} />
      {boxes.map((box) => (
        <div className="parent" key={box.id}>
          <Box height={box.height} width={box.width} color={box.color} />
          <DeleteButton handleClick={()=>handleClick(box)} />
        </div>
      ))}
    </div>
  );
};

export default BoxList;
