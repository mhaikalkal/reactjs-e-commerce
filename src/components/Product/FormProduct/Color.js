import React from "react";

const ColorPicker = ({ color, handleColorChange }) => {
  return (
    <label key={color}>
      <input name="color" type="radio" className="sr-only peer focus:outline-slate-200" value={color} onChange={handleColorChange} />
      <div className="w-9 h-9 rounded-lg hover:cursor-pointer hover:outline hover:outline-slate-200 peer-checked:outline peer-checked:outline-slate-300 border" style={{ backgroundColor: `${color}` }} />
    </label>
  );
};

export default ColorPicker;
