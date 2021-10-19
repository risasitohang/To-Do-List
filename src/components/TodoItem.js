import React from "react";
import Proptypes from "prop-types";
import Button from "./Button";

const TodoItem = ({ items, del, open }) => {
  const delByID = (id) => {
    del(id);
  };
  return (
    <div style={todoItem}>
      <p>{items.tittle}</p>
      <div>
        <Button
          text="Edit"
          variant="success"
          action={() => open(items.id, items.tittle)}
        />
        <Button
          text="Delete"
          variant="warning"
          action={() => delByID(items.id)}
        />
      </div>
    </div>
  );
};

TodoItem.prototypes = {
  items: Proptypes.object.isRequired,
  del: Proptypes.func.isRequired,
};
export default TodoItem;
const todoItem = {
  background: "#218DFD",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};
