import React from "react";

const ColorInPalette = ({ color, group, specialClass }) => {
  const { hexColor } = color;

  const backgroundStyle = { backgroundColor: hexColor };
  return (
    <div style={backgroundStyle} className={"ColorInPalette Color "+ specialClass}>
      <input type="radio" name={group} id={hexColor} value={hexColor} />
      <label style={backgroundStyle} htmlFor={hexColor}>
        {" "}
      </label>
    </div>
  );
};

export default ColorInPalette;
