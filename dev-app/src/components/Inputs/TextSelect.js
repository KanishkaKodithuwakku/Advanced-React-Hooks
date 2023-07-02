import React from "react";
import SelectItem from "./SelectItems";

const TextSelect = ({ handleSelectInputChange,title,label }) => {
  return (
    <>
      {label && <label className="form-label">{title}</label>}
      <select className="form-select" onChange={handleSelectInputChange}>
        <option selected>Select {title}</option>
        {/* <option value="male">Male</option>
        <option value="female">Female</option> */}

        <SelectItem
          handleSelectInputChange={handleSelectInputChange}
          value={`male`}
          text={`Male`}
        />
        <SelectItem
          handleSelectInputChange={handleSelectInputChange}
          value={`female`}
          text={`Female`}
        />
      </select>
    </>
  );
};

TextSelect.defaultProps = {
  title: "Value"
};

export default TextSelect;
