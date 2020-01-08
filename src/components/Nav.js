import React from "react";

function Nav(props) {
  return (
    <button
      className={"tab " + (props.activeStatus ? "active" : "inactive")}
      onClick={e => props.onTabClick(props.index)}
    >
      {props.tabTitle}
    </button>
  );
}

export default Nav;
