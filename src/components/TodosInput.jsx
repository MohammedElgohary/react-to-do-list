import React from "react";
import { Input, Label, FormGroup, Button } from "reactstrap";
import { MdAddTask } from "react-icons/md";

function TodosInput({ dispatch, text, setText, edit, actions, addEditTodo }) {
  return (
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
  );
}

export { TodosInput };
