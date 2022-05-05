import React from "react";
import { Button } from "reactstrap";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { confirm } from "../controllers";

function Todo({ todo, dispatch, actions, setEdit, setText }) {
  return (
    <div
      className={
        todo.completed
          ? "d-flex flex-wrap justify-content-between align-items-center bg-light p-4 mb-3 border border-success"
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
      <div className="d-flex flex-grow-1 justify-content-end">
        <Button
          color={todo.completed ? "info" : "success"}
          size="sm"
          className="ml-0 my-1 mr-1"
          onClick={() =>
            dispatch({
              type: todo.completed
                ? actions.RESTORE_TODO
                : actions.COMPLETE_TODO,
              data: todo.id,
            })
          }
        >
          {todo.completed ? (
            <>
              <FiRefreshCcw size={21} className="mr-1" />
              restore
            </>
          ) : (
            <>
              <TiTick size={21} className="mr-1" />
              complete
            </>
          )}
        </Button>
        <Button
          color="primary"
          size="sm"
          className="m-1"
          onClick={() => {
            setEdit(todo);
            setText(todo.text);
          }}
        >
          <MdModeEdit size={21} className="mr-1" />
          Edit
        </Button>
        <Button
          color="danger"
          size="sm"
          className="ml-0 my-1 mr-0"
          onClick={() =>
            confirm({
              text: "Are you sure of deleting this task ?",
              callback: () =>
                dispatch({ type: actions.DELETE_TODO, data: todo.id }),
            })
          }
        >
          <MdDeleteOutline size={21} className="mr-1" />
          Delete
        </Button>
      </div>
    </div>
  );
}

export { Todo };
