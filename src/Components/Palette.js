import React, { useState, useContext } from "react";
import ColorInPalette from "./ColorInPalette";
import { GlobalContext } from "../context/GlobalState";

const Palette = () => {
  const { paletteColors } = useContext(GlobalContext);

  return (
    <div className="Palette">
      <h2>Pick a color</h2>
      <div className="container">
        {paletteColors.map((color, index) => (
          <ColorInPalette specialClass="sizeUp" group="colorPalette" key={index} color={color} />
        ))}
      </div>
    </div>
  );
};

export default Palette;
