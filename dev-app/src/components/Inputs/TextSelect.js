import React from "react";
import SelectItem from "./SelectItems";

const TextSelect = ({ handleSelectInputChange,title,label,options }) => {
  return (
    <>
      {label && <label className="form-label">{title}</label>}
      <select
        className="form-select"
        onChange={ (e) => handleSelectInputChange(e.target.value)}
      >
        {/* <option selected>Select {title}</option> */}

        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
};

TextSelect.defaultProps = {
  title: "Value"
};

export default TextSelect;
