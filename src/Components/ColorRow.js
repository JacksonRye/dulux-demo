import React from "react";
import ColorItem from "./ColorItem";
import { Link } from "react-router-dom";

function arrayOfObjectContains(array, value) {
  const values = array.map((obj) => obj.hexColor);

  return values.includes(value);
}

const ColorRow = ({ colors, handleSelectedColor, selectedColor, paintColor }) => {

  

  return (
    <div className="ColorRow">
      <div className="color-grid">
        {colors.map((color, index) => (
          <ColorItem
            index={index}
            setSelectedColor={handleSelectedColor}
            key={index}
            color={color}
            group="colorList"
          />
        ))}
      </div>

      {arrayOfObjectContains(colors, selectedColor) && selectedColor ? (
        <div className="color-info" style={{ backgroundColor: selectedColor }}>
          <p className="more-about">More about this color</p>
          <Link to={`/paints/${paintColor}`} className="link-to-cart">
            I'd like to find a product in this color
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default ColorRow;
