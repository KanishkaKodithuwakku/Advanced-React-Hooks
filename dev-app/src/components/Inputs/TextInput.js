import React from "react";


const TextInput = ({ handleSearchInputChange, label,placeholder,type }) => {
  return (
    <>
      {label && (
        <label className="form-label">
          {label}
        </label>
      )}

      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        onChange={(e) => handleSearchInputChange(e.target.value)}
      />
    </>
  );
};

TextInput.defaultProps = {
  placeholder: "Input Text",
  type:'text'
};

export default TextInput;
