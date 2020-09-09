import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import ColorItem from "./ColorItem";
import ColorRow from "./ColorRow";

function getSubArrays(array, size) {
  const newArray = array.slice();
  const subArrays = [];

  while (newArray.length) {
    subArrays.push(newArray.splice(0, size));
  }

  return subArrays;
}

const ColorList = () => {
  const { colorList } = useContext(GlobalContext);

  const [selectedColor, setSelectedColor] = useState(null);

  const [rows, setRows] = useState([]);

  function handleSelectedColor(color) {
    setSelectedColor(null);
    setSelectedColor(color);
  }

  useEffect(() => {
    setRows(getSubArrays(colorList, 2));
  }, [colorList]);

  return (
    <div className="ColorList">
      <h1>Popular Colors ({colorList.length})</h1>

      {rows.map((colors, index) => (
        <ColorRow
          colors={colors}
          key={index}
          selectedColor={selectedColor}
          handleSelectedColor={handleSelectedColor}
        />
      ))}

      
    </div>
  );
}

export default ColorList;
