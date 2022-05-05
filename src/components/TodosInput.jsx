import React from "react";
import { Input, Label, FormGroup, Button } from "reactstrap";
import { MdAddTask } from "react-icons/md";
import { CgArrowRight } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";

import { Badge } from "reactstrap";

function TodosInput({ dispatch, text, setText, edit, actions, addEditTodo }) {
  // keyboard key code
  const keys = { enter: 13, escape: 27 };

  const onKeyUp = (e) => {
    if (!e.ctrlKey && e.keyCode === keys.enter) {
      if (text.trim()) {
        dispatch({
          type: edit ? actions.EDIT_TODO : actions.ADD_TODO,
          data: addEditTodo(),
        });
      }
    } else if (e.keyCode === keys.escape) {
      e.target.value = "";
      setText("");
    }
  };

  const onKeyDown = (e) => {
    if (e.ctrlKey && e.keyCode === keys.enter) {
      e.target.value = text + "\n";
      setText(text + "\n");
    }
  };

  return (
    <>
      <div className="mt-5 p-5 card border-0">
        <FormGroup>
          <Label>Enter Task</Label>
          <Input
            type="textarea"
            className="p-3"
            placeholder="Task ..."
            rows="5"
            onChange={(e) => setText(e.target.value)}
            value={text}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
          />
        </FormGroup>
        <Button
          color="primary"
          className="rounded-pill"
          disabled={text === ""}
          onClick={() =>
            dispatch({
              type: edit ? actions.EDIT_TODO : actions.ADD_TODO,
              data: addEditTodo(),
            })
          }
        >
          <MdAddTask className="mr-2" size={22} />
          {edit ? "Edit Task" : "Add Task"}
        </Button>
      </div>

      <div className="my-3 p-5 card border-0">
        <h5>Keys Map</h5>
        <ul>
          <li>
            <Badge color="primary" className="p-2 px-4">
              Enter
            </Badge>
            <CgArrowRight size={50} className="px-2" />
            Add Todo
          </li>
          <li>
            <Badge color="secondary" className="p-2 px-4">
              CTRL
            </Badge>
            <FiPlus size={21} />
            <Badge color="primary" className="p-2 px-4">
              Enter
            </Badge>
            <CgArrowRight size={50} className="px-2" />
            New Line
          </li>
          <li>
            <Badge color="secondary" className="p-2 px-4">
              Escape
            </Badge>
            <CgArrowRight size={50} className="px-2" /> Remove Text
          </li>
        </ul>
      </div>
    </>
  );
}

export { TodosInput };
