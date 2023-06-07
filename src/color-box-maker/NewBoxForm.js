import React, { useState } from "react";
import "./NewBoxForm.css";
const NewBoxForm = ({ makeBox }) => {
  const INITIAL_STATE = { height: 50, width: 50, color: "black" };
  const [data, setData] = useState(INITIAL_STATE);
  const handleSubmit = (e) => {
    e.preventDefault();
    makeBox(data);
    setData(() => INITIAL_STATE);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:(20 to 300)</label>
      <br />
      <input
        id="height"
        type="number"
        name="height"
        min={50}
        max={300}
        placeholder="20-300"
        value={data.height}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="width"> Width: (20 to 300)</label>
      <br />
      <input
        id="width"
        type="number"
        name="width"
        min={50}
        max={300}
        placeholder="20-300"
        value={data.width}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="color"> Color: </label>
      <br />
      <input
        id="color"
        type="color"
        name="color"
        value={data.color}
        onChange={handleChange}
      />
      <br />
      <br />
      <button>Make Box!</button>
    </form>
  );
};

export default NewBoxForm;
