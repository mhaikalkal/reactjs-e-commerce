import React from "react";

const SizePicker = ({ size, handleSizeChange, disabled }) => {
  return (
    <>
      {disabled ? (
        <label>
          <input type="radio" name="size" className="sr-only peer" value={size} onChange={handleSizeChange} disabled />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-200 text-slate-400">{size}</div>
        </label>
      ) : (
        <label>
          <input type="radio" name="size" className="sr-only peer" value={size} onChange={handleSizeChange} />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 hover:cursor-pointer border hover:border hover:border-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            {size}
          </div>
        </label>
      )}
    </>
  );
};

export default SizePicker;
