import React from "react";
const Spinner = ({ color}) => { 
    return (
      <>
        <div className={`spinner-border text-${color}`} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );
}
export default Spinner;
