import React from "react";

class ListItem extends React.Component {
  render() {
    const { status, onCheckClick, index, onDelete } = this.props;
    return (
      <li className="listitem">
        <span className={status ? "check" : ""}>{this.props.title}</span>

        <button className="delbtn" onClick={() => onDelete(index)}>
          Delete
        </button>
        <button className="checkbtn" onClick={() => onCheckClick(index)}>
          Check
        </button>
      </li>
    );
  }
}

export default ListItem;
