import React from "react";
import { Button } from "reactstrap";

function Todo({ todo, dispatch, actions, setEdit, setText }) {
  return (
    <div
      className={
        todo.completed
          ? "d-flex flex-wrap justify-content-between align-items-center bg-light p-4 mb-3 border border-danger"
          : "d-flex flex-wrap justify-content-between align-items-center bg-light p-4 mb-3"
      }
    >
      <div
        className={
          todo.completed ? "mb-0 text-decoration-line-through" : "mb-0"
        }
        style={{ wordBreak: "break-all" }}
      >
        {todo.text}
      </div>
      <div>
        <Button
          color="primary"
          size="sm"
          className="m-1 rounded-pill"
          onClick={() =>
            dispatch({
              type: todo.completed
                ? actions.RESTORE_TODO
                : actions.COMPLETE_TODO,
              data: todo.id,
            })
          }
        >
          {todo.completed ? "restore" : "complete"}
        </Button>
        <Button
          color="primary"
          size="sm"
          className="m-1 rounded-pill"
          onClick={() => {
            setEdit(todo);
            setText(todo.text);
          }}
        >
          Edit
        </Button>
        <Button
          color="danger"
          size="sm"
          className="m-1  rounded-pill"
          onClick={() => dispatch({ type: actions.DELETE_TODO, data: todo.id })}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export { Todo };
