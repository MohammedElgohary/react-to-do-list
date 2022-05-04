import React from "react";
import { Todo, NoItemsFound } from "./index";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
function TodoList({
  todos,
  dispatch,
  actions,
  setEdit,
  setText,
  search,
  setSearch,
}) {
  return (
    <div className="mt-5 p-5 card border-0">
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <h3>Task List</h3>
        <FormGroup style={{ width: "min(350px, 100%)" }}>
          <Input
            type="search"
            placeholder="Search ..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormGroup>
      </div>

      <div className="tasks-container own-scroll">
        {todos?.length ? (
          todos.map((todo, index) =>
            new RegExp(search, "ig").test(todo.text) ? (
              <Todo
                key={index}
                {...{ todo, dispatch, actions, setEdit, setText }}
              />
            ) : null
          )
        ) : (
          <NoItemsFound />
        )}
      </div>
    </div>
  );
}

export { TodoList };
