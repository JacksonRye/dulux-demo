import React from "react";

const ColorInPalette = ({ color, group }) => {
  const { hexColor } = color;

  const backgroundStyle = { backgroundColor: hexColor };
  return (
    <div style={backgroundStyle} className={"ColorInPalette Color "}>
      <input type="radio" name={group} id={hexColor} value={hexColor} />
      <label style={backgroundStyle} htmlFor={hexColor}>
        {" "}
      </label>
    </div>
  );
};

export default ColorInPalette;
