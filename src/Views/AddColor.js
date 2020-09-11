import React, { useState } from "react";
import {
  ChromePicker,
  SwatchesPicker,
  SketchPicker,
  SliderPicker,
  CompactPicker,
} from "react-color";

const AddColor = () => {
  const [color, setColor] = useState("fff");

  const handleChangeComplete = (color) => {
      console.log(color);
      console.log("change");
    setColor(color.hex);
  };
  return (
    <div style={{ backgroundColor: color }} className="AddColor">
      <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
    </div>
  );
};

export default AddColor;
