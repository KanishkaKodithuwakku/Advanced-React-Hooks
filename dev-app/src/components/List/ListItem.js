import React from "react";
const ListItem = ({status,current,body}) => {
    return (
      <li className={`list-group-item ${status}`} aria-current={current}>
        {body}
      </li>
    );
}

ListItem.defaultProps = {
  current: true,
  status: ""
};

export default ListItem;
