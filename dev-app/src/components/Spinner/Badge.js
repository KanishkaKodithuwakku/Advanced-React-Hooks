import React from "react";

const Badge = ({ children,color,shape}) => { 

    return (
      <span className={`badge ${shape} text-bg-${color}`}>{children}</span>
    );
}

Badge.defaultProps = {
  shape: "rounded-pill",
  color :"primary"
};

export default Badge;
