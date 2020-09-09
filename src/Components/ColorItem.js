import React, { useState } from "react";

const ColorItem = ({ color, group, setSelectedColor }) => {
  const { hexColor } = color;

  const backgroundStyle = { backgroundColor: hexColor };
  return (
    <>
      <div style={backgroundStyle} className="ColorItem Color ">
        <input
          onClick={() => setSelectedColor(hexColor)}
          type="radio"
          name={group}
          id={hexColor}
          value={hexColor}
        />

        <label style={backgroundStyle} htmlFor={hexColor}>
          {" "}
        </label>
      </div>
    </>
  );
};

export default ColorItem;
