import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ColorInPalette = ({ color, group }) => {
  const { hexColor, name } = color;

  const backgroundStyle = { backgroundColor: hexColor };

  const { setColorList } = useContext(GlobalContext);

  return (
    <div style={backgroundStyle} className={"ColorInPalette Color "}>
      <input
        type="radio"
        name={group}
        id={hexColor}
        value={name}
        onClick={(e) => setColorList(e.target.value)}
      />
      <label style={backgroundStyle} htmlFor={hexColor}>
        {" "}
      </label>
    </div>
  );
};

export default ColorInPalette;
