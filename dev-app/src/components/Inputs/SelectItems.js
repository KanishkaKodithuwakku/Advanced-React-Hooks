import React from "react";

const SelectItem = ({ value, text, selected, handleSelectInputChange }) => {
  return (
    <option value={value} onChange={handleSelectInputChange(value)}>
      {text}
    </option>
  );
};

SelectItem.defaultProps = {
    text: "Select Value"
}

export default SelectItem;
