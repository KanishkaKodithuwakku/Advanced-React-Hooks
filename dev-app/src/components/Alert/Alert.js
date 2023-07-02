import React from "react";

const Alert = ({ color,title,body }) => { 

    <>
      <div className={`alert alert-${color}`} role="alert">
        <h5>{title}</h5>
        {body}
      </div>
    </>;


}

Alert.defaultProps = {
  color : "primary"
};

export default Alert;
