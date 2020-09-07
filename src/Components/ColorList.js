import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ColorItem from "./ColorItem";
import ColorInPalette from "./ColorInPalette";

const ColorList = () => {
  const { colorList } = useContext(GlobalContext);
  return (
    <div className="ColorList">

        <h1>Popular Colors ({colorList.length})</h1>
      {colorList.map((color, index) => (
        <ColorInPalette key={index} color={color} group="colorList" />
      ))}
    </div>
  );
};

export default ColorList;
